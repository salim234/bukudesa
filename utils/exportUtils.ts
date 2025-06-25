import * as XLSX from 'xlsx';
import { FieldDefinition, GenericEntry, DataDesaEntry } from '../types';

export const printTable = (
  title: string,
  columns: FieldDefinition[],
  data: GenericEntry[],
  dataDesa: DataDesaEntry | null = null, // Added dataDesa parameter
  paperSize: string = 'legal' // legal: 8.5in x 14in
) => {
  const columnHeaders = columns.map(col => {
    let headerLabel = col.label;
    if (title === 'Buku RPJMDes' || title === 'Data RPJMDes') {
      if (col.label === 'No. Perdes RPJMDes') {
        headerLabel = 'Perdes RPJMDes';
      } else if (col.label === 'No. BA Musdes Penetapan RPJMDes') {
        headerLabel = 'BA Musdes Penetapan RPJMDes';
      } else if (col.label === 'Tahun Awal Periode RPJMDes') {
        headerLabel = 'Tahun Awal Periode';
      } else if (col.label === 'Tahun Akhir Periode RPJMDes') {
        headerLabel = 'Tahun Akhir Periode';
      }
    }
    // No specific label changes needed for RKPDes or APBDes print headers for now,
    // as the original labels are fine. The main change is data formatting below.
    return `<th>${headerLabel}</th>`;
  }).join('');

  const tableRows = data
    .map(entry => {
      const cells = columns
        .map(col => {
          let cellValue = entry[col.name];
          
          const isRpjmdesYearField = (title === 'Buku RPJMDes' || title === 'Data RPJMDes') && 
                                   (col.name === 'tahun_awal_periode' || col.name === 'tahun_akhir_periode');
          const isRkpdesYearField = (title === 'Buku RKP Desa' || title.startsWith('RKPDes (RPJMDes ID')) &&
                                   col.name === 'tahun_rkp';
          const isApbdesYearField = (title === 'Buku APBDes' || title.startsWith('APBDes (RKPDes ID')) &&
                                   col.name === 'tahun_apbdes';

          if (isRpjmdesYearField || isRkpdesYearField || isApbdesYearField) {
            if (typeof cellValue === 'number') {
              cellValue = cellValue.toString();
            }
          } else if (typeof cellValue === 'number' && col.type === 'number') {
            cellValue = cellValue.toLocaleString('id-ID');
          }
          return `<td>${cellValue !== null && cellValue !== undefined ? cellValue : '-'}</td>`;
        })
        .join('');
      return `<tr>${cells}</tr>`;
    })
    .join('');

  let kopSuratHtml = '';
  if (dataDesa) {
    kopSuratHtml = `
      <div class="kop-surat">
        <div class="kop-logo-container">
          ${dataDesa.logo_desa_path ? `<img src="${dataDesa.logo_desa_path}" alt="Logo Desa" class="kop-logo">` : '<div class="kop-logo-placeholder">Logo</div>'}
        </div>
        <div class="kop-text-container">
          <div class="kop-judul kop-level-kabupaten">PEMERINTAH KABUPATEN ${dataDesa.nama_kabupaten_kota?.toUpperCase() || ''}</div>
          <div class="kop-judul kop-level-kecamatan">KECAMATAN ${dataDesa.nama_kecamatan?.toUpperCase() || ''}</div>
          <div class="kop-judul kop-level-desa">PEMERINTAH DESA ${dataDesa.nama_desa?.toUpperCase() || ''}</div>
          <div class="kop-alamat">${dataDesa.alamat_kantor_desa || ''}</div>
          <div class="kop-kontak">
            ${dataDesa.nomor_telepon_kantor_desa ? `<span>Telp: ${dataDesa.nomor_telepon_kantor_desa}</span>` : ''}
            ${dataDesa.email_desa ? `<span style="margin-left: 10px;">Email: ${dataDesa.email_desa}</span>` : ''}
          </div>
        </div>
      </div>
      <hr class="kop-garis">
    `;
  }

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(`
      <html>
        <head>
          <title>${title} - Cetak</title>
          <style>
            @media print {
              @page {
                size: ${paperSize} landscape; /* Default to landscape for wider tables with kop */
                margin: 0.25in;
              }
              body {
                font-family: Arial, sans-serif;
                font-size: 10pt;
                margin: 0;
                padding: 0;
              }
              .kop-surat {
                display: flex;
                align-items: flex-start; /* Align items to the top */
                margin-bottom: 5px; /* Reduced margin */
                padding-bottom: 5px; /* Reduced padding */
                width: 100%;
              }
              .kop-logo-container {
                flex: 0 0 80px; /* Fixed width for logo container */
                margin-right: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 80px; /* Fixed height */
              }
              .kop-logo {
                max-width: 70px; /* Max width of logo */
                max-height: 70px; /* Max height of logo */
                object-fit: contain;
              }
              .kop-logo-placeholder {
                width: 70px; height: 70px; border: 1px dashed #ccc;
                display: flex; align-items: center; justify-content: center;
                font-size: 10px; color: #777;
              }
              .kop-text-container {
                flex-grow: 1;
                text-align: center;
              }
              .kop-judul {
                font-weight: bold;
                margin: 0;
                line-height: 1.2;
              }
              .kop-level-kabupaten { font-size: 14pt; }
              .kop-level-kecamatan { font-size: 16pt; }
              .kop-level-desa { font-size: 18pt; margin-bottom: 2px; }
              .kop-alamat { font-size: 9pt; margin-top: 2px; line-height: 1.1; }
              .kop-kontak { font-size: 9pt; margin-top: 2px; line-height: 1.1; }
              .kop-garis {
                border: none;
                border-top: 3px solid black;
                margin-top: 2px; /* Reduced margin */
                margin-bottom: 10px;
              }
              .print-title-container {
                text-align: center;
                margin-bottom: 10px; /* Space between kop and title */
              }
              .print-title {
                font-size: 12pt; /* Slightly smaller title if kop is present */
                font-weight: bold;
                text-transform: uppercase;
                margin: 0;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 5px; /* Reduced margin */
                table-layout: auto;
              }
              th, td {
                border: 1px solid #333;
                padding: 2px 4px; /* Reduced padding */
                text-align: left;
                word-wrap: break-word;
                font-size: 8pt; /* Reduced font size for more content */
              }
              th {
                background-color: #f0f0f0;
                font-weight: bold;
              }
              .no-print { display: none !important; }
            }
          </style>
        </head>
        <body>
          ${kopSuratHtml}
          <div class="print-title-container">
             <div class="print-title">${title}</div>
          </div>
          <table>
            <thead>
              <tr>${columnHeaders}</tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
          <script>
            setTimeout(() => {
              window.print();
              window.close();
            }, 250);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  } else {
    alert('Gagal membuka jendela cetak. Pastikan pop-up blocker tidak aktif.');
  }
};

export const exportToXLSX = (
  fileName: string,
  columns: FieldDefinition[],
  data: GenericEntry[]
) => {
  const headers = columns.map(col => col.label);
  const dataForSheet = [
    headers,
    ...data.map(entry => columns.map(col => {
      const value = entry[col.name];
      if (value === null || value === undefined) return '';
      return value;
    }))
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(dataForSheet);

  const colWidths = headers.map((_, i) => {
    let maxLen = 0;
    dataForSheet.forEach(row => {
      const cellValue = row[i];
      if (cellValue != null) {
        const len = cellValue.toString().length;
        if (len > maxLen) {
          maxLen = len;
        }
      }
    });
    return { wch: maxLen < 10 ? 10 : maxLen + 2 }; 
  });
  worksheet['!cols'] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

  XLSX.writeFile(workbook, `${fileName.replace(/ /g, '_')}.xlsx`);
};

export const downloadDoc = (htmlContent: string, fileName: string): void => {
  const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  const footer = "</body></html>";
  const sourceHTML = header + htmlContent + footer;

  const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  const fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = fileName.endsWith('.doc') ? fileName : fileName + '.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
};