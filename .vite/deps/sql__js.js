import {
  __commonJS
} from "./chunk-KEXKKQVW.js";

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/sql.js/dist/sql-wasm.js
var require_sql_wasm = __commonJS({
  "node_modules/sql.js/dist/sql-wasm.js"(exports, module) {
    var initSqlJsPromise = void 0;
    var initSqlJs = function(moduleConfig) {
      if (initSqlJsPromise) {
        return initSqlJsPromise;
      }
      initSqlJsPromise = new Promise(function(resolveModule, reject) {
        var Module = typeof moduleConfig !== "undefined" ? moduleConfig : {};
        var originalOnAbortFunction = Module["onAbort"];
        Module["onAbort"] = function(errorThatCausedAbort) {
          reject(new Error(errorThatCausedAbort));
          if (originalOnAbortFunction) {
            originalOnAbortFunction(errorThatCausedAbort);
          }
        };
        Module["postRun"] = Module["postRun"] || [];
        Module["postRun"].push(function() {
          resolveModule(Module);
        });
        module = void 0;
        var f;
        f || (f = typeof Module !== "undefined" ? Module : {});
        "use strict";
        f.onRuntimeInitialized = function() {
          function a(g, l) {
            switch (typeof l) {
              case "boolean":
                mc(g, l ? 1 : 0);
                break;
              case "number":
                nc(g, l);
                break;
              case "string":
                oc(g, l, -1, -1);
                break;
              case "object":
                if (null === l) lb(g);
                else if (null != l.length) {
                  var n = aa(l, ba);
                  pc(g, n, l.length, -1);
                  ca(n);
                } else Aa(g, "Wrong API use : tried to return a value of an unknown type (" + l + ").", -1);
                break;
              default:
                lb(g);
            }
          }
          function b(g, l) {
            for (var n = [], t = 0; t < g; t += 1) {
              var w = m(l + 4 * t, "i32"), z = qc(w);
              if (1 === z || 2 === z) w = rc(w);
              else if (3 === z) w = sc(w);
              else if (4 === z) {
                z = w;
                w = tc(z);
                z = uc(z);
                for (var N = new Uint8Array(w), L = 0; L < w; L += 1) N[L] = p[z + L];
                w = N;
              } else w = null;
              n.push(w);
            }
            return n;
          }
          function c(g, l) {
            this.La = g;
            this.db = l;
            this.Ja = 1;
            this.fb = [];
          }
          function d(g, l) {
            this.db = l;
            l = da(g) + 1;
            this.Ya = ea(l);
            if (null === this.Ya) throw Error("Unable to allocate memory for the SQL string");
            fa(g, q, this.Ya, l);
            this.eb = this.Ya;
            this.Ua = this.ib = null;
          }
          function e(g) {
            this.filename = "dbfile_" + (4294967295 * Math.random() >>> 0);
            if (null != g) {
              var l = this.filename, n = "/", t = l;
              n && (n = "string" == typeof n ? n : ha(n), t = l ? u(n + "/" + l) : n);
              l = ia(true, true);
              t = ja(t, (void 0 !== l ? l : 438) & 4095 | 32768, 0);
              if (g) {
                if ("string" == typeof g) {
                  n = Array(g.length);
                  for (var w = 0, z = g.length; w < z; ++w) n[w] = g.charCodeAt(w);
                  g = n;
                }
                ka(t, l | 146);
                n = la(t, 577);
                ma(n, g, 0, g.length, 0);
                na(n);
                ka(t, l);
              }
            }
            this.handleError(r(this.filename, h));
            this.db = m(h, "i32");
            ob(this.db);
            this.Za = {};
            this.Na = {};
          }
          var h = x(4), k = f.cwrap, r = k("sqlite3_open", "number", ["string", "number"]), y = k("sqlite3_close_v2", "number", ["number"]), v = k("sqlite3_exec", "number", ["number", "string", "number", "number", "number"]), F = k(
            "sqlite3_changes",
            "number",
            ["number"]
          ), H = k("sqlite3_prepare_v2", "number", ["number", "string", "number", "number", "number"]), pb = k("sqlite3_sql", "string", ["number"]), vc = k("sqlite3_normalized_sql", "string", ["number"]), qb = k("sqlite3_prepare_v2", "number", ["number", "number", "number", "number", "number"]), wc = k("sqlite3_bind_text", "number", ["number", "number", "number", "number", "number"]), rb = k("sqlite3_bind_blob", "number", ["number", "number", "number", "number", "number"]), xc = k("sqlite3_bind_double", "number", ["number", "number", "number"]), yc = k("sqlite3_bind_int", "number", ["number", "number", "number"]), zc = k("sqlite3_bind_parameter_index", "number", ["number", "string"]), Ac = k("sqlite3_step", "number", ["number"]), Bc = k("sqlite3_errmsg", "string", ["number"]), Cc = k("sqlite3_column_count", "number", ["number"]), Dc = k("sqlite3_data_count", "number", ["number"]), Ec = k("sqlite3_column_double", "number", ["number", "number"]), sb = k("sqlite3_column_text", "string", ["number", "number"]), Fc = k("sqlite3_column_blob", "number", ["number", "number"]), Gc = k(
            "sqlite3_column_bytes",
            "number",
            ["number", "number"]
          ), Hc = k("sqlite3_column_type", "number", ["number", "number"]), Ic = k("sqlite3_column_name", "string", ["number", "number"]), Jc = k("sqlite3_reset", "number", ["number"]), Kc = k("sqlite3_clear_bindings", "number", ["number"]), Lc = k("sqlite3_finalize", "number", ["number"]), tb = k("sqlite3_create_function_v2", "number", "number string number number number number number number number".split(" ")), qc = k("sqlite3_value_type", "number", ["number"]), tc = k("sqlite3_value_bytes", "number", ["number"]), sc = k(
            "sqlite3_value_text",
            "string",
            ["number"]
          ), uc = k("sqlite3_value_blob", "number", ["number"]), rc = k("sqlite3_value_double", "number", ["number"]), nc = k("sqlite3_result_double", "", ["number", "number"]), lb = k("sqlite3_result_null", "", ["number"]), oc = k("sqlite3_result_text", "", ["number", "string", "number", "number"]), pc = k("sqlite3_result_blob", "", ["number", "number", "number", "number"]), mc = k("sqlite3_result_int", "", ["number", "number"]), Aa = k("sqlite3_result_error", "", ["number", "string", "number"]), ub = k(
            "sqlite3_aggregate_context",
            "number",
            ["number", "number"]
          ), ob = k("RegisterExtensionFunctions", "number", ["number"]);
          c.prototype.bind = function(g) {
            if (!this.La) throw "Statement closed";
            this.reset();
            return Array.isArray(g) ? this.wb(g) : null != g && "object" === typeof g ? this.xb(g) : true;
          };
          c.prototype.step = function() {
            if (!this.La) throw "Statement closed";
            this.Ja = 1;
            var g = Ac(this.La);
            switch (g) {
              case 100:
                return true;
              case 101:
                return false;
              default:
                throw this.db.handleError(g);
            }
          };
          c.prototype.rb = function(g) {
            null == g && (g = this.Ja, this.Ja += 1);
            return Ec(this.La, g);
          };
          c.prototype.Ab = function(g) {
            null == g && (g = this.Ja, this.Ja += 1);
            g = sb(this.La, g);
            if ("function" !== typeof BigInt) throw Error("BigInt is not supported");
            return BigInt(g);
          };
          c.prototype.Bb = function(g) {
            null == g && (g = this.Ja, this.Ja += 1);
            return sb(this.La, g);
          };
          c.prototype.getBlob = function(g) {
            null == g && (g = this.Ja, this.Ja += 1);
            var l = Gc(this.La, g);
            g = Fc(this.La, g);
            for (var n = new Uint8Array(l), t = 0; t < l; t += 1) n[t] = p[g + t];
            return n;
          };
          c.prototype.get = function(g, l) {
            l = l || {};
            null != g && this.bind(g) && this.step();
            g = [];
            for (var n = Dc(this.La), t = 0; t < n; t += 1) switch (Hc(this.La, t)) {
              case 1:
                var w = l.useBigInt ? this.Ab(t) : this.rb(t);
                g.push(w);
                break;
              case 2:
                g.push(this.rb(t));
                break;
              case 3:
                g.push(this.Bb(t));
                break;
              case 4:
                g.push(this.getBlob(t));
                break;
              default:
                g.push(null);
            }
            return g;
          };
          c.prototype.getColumnNames = function() {
            for (var g = [], l = Cc(this.La), n = 0; n < l; n += 1) g.push(Ic(this.La, n));
            return g;
          };
          c.prototype.getAsObject = function(g, l) {
            g = this.get(g, l);
            l = this.getColumnNames();
            for (var n = {}, t = 0; t < l.length; t += 1) n[l[t]] = g[t];
            return n;
          };
          c.prototype.getSQL = function() {
            return pb(this.La);
          };
          c.prototype.getNormalizedSQL = function() {
            return vc(this.La);
          };
          c.prototype.run = function(g) {
            null != g && this.bind(g);
            this.step();
            return this.reset();
          };
          c.prototype.nb = function(g, l) {
            null == l && (l = this.Ja, this.Ja += 1);
            g = oa(g);
            var n = aa(g, ba);
            this.fb.push(n);
            this.db.handleError(wc(this.La, l, n, g.length - 1, 0));
          };
          c.prototype.vb = function(g, l) {
            null == l && (l = this.Ja, this.Ja += 1);
            var n = aa(g, ba);
            this.fb.push(n);
            this.db.handleError(rb(this.La, l, n, g.length, 0));
          };
          c.prototype.mb = function(g, l) {
            null == l && (l = this.Ja, this.Ja += 1);
            this.db.handleError((g === (g | 0) ? yc : xc)(this.La, l, g));
          };
          c.prototype.yb = function(g) {
            null == g && (g = this.Ja, this.Ja += 1);
            rb(this.La, g, 0, 0, 0);
          };
          c.prototype.ob = function(g, l) {
            null == l && (l = this.Ja, this.Ja += 1);
            switch (typeof g) {
              case "string":
                this.nb(g, l);
                return;
              case "number":
                this.mb(g, l);
                return;
              case "bigint":
                this.nb(g.toString(), l);
                return;
              case "boolean":
                this.mb(g + 0, l);
                return;
              case "object":
                if (null === g) {
                  this.yb(l);
                  return;
                }
                if (null != g.length) {
                  this.vb(g, l);
                  return;
                }
            }
            throw "Wrong API use : tried to bind a value of an unknown type (" + g + ").";
          };
          c.prototype.xb = function(g) {
            var l = this;
            Object.keys(g).forEach(function(n) {
              var t = zc(l.La, n);
              0 !== t && l.ob(g[n], t);
            });
            return true;
          };
          c.prototype.wb = function(g) {
            for (var l = 0; l < g.length; l += 1) this.ob(g[l], l + 1);
            return true;
          };
          c.prototype.reset = function() {
            this.freemem();
            return 0 === Kc(this.La) && 0 === Jc(this.La);
          };
          c.prototype.freemem = function() {
            for (var g; void 0 !== (g = this.fb.pop()); ) ca(g);
          };
          c.prototype.free = function() {
            this.freemem();
            var g = 0 === Lc(this.La);
            delete this.db.Za[this.La];
            this.La = 0;
            return g;
          };
          d.prototype.next = function() {
            if (null === this.Ya) return { done: true };
            null !== this.Ua && (this.Ua.free(), this.Ua = null);
            if (!this.db.db) throw this.gb(), Error("Database closed");
            var g = pa(), l = x(4);
            qa(h);
            qa(l);
            try {
              this.db.handleError(qb(this.db.db, this.eb, -1, h, l));
              this.eb = m(l, "i32");
              var n = m(h, "i32");
              if (0 === n) return this.gb(), { done: true };
              this.Ua = new c(n, this.db);
              this.db.Za[n] = this.Ua;
              return { value: this.Ua, done: false };
            } catch (t) {
              throw this.ib = ra(this.eb), this.gb(), t;
            } finally {
              sa(g);
            }
          };
          d.prototype.gb = function() {
            ca(this.Ya);
            this.Ya = null;
          };
          d.prototype.getRemainingSQL = function() {
            return null !== this.ib ? this.ib : ra(this.eb);
          };
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator && (d.prototype[Symbol.iterator] = function() {
            return this;
          });
          e.prototype.run = function(g, l) {
            if (!this.db) throw "Database closed";
            if (l) {
              g = this.prepare(g, l);
              try {
                g.step();
              } finally {
                g.free();
              }
            } else this.handleError(v(this.db, g, 0, 0, h));
            return this;
          };
          e.prototype.exec = function(g, l, n) {
            if (!this.db) throw "Database closed";
            var t = pa(), w = null;
            try {
              var z = ta(g), N = x(4);
              for (g = []; 0 !== m(z, "i8"); ) {
                qa(h);
                qa(N);
                this.handleError(qb(
                  this.db,
                  z,
                  -1,
                  h,
                  N
                ));
                var L = m(h, "i32");
                z = m(N, "i32");
                if (0 !== L) {
                  var K = null;
                  w = new c(L, this);
                  for (null != l && w.bind(l); w.step(); ) null === K && (K = { columns: w.getColumnNames(), values: [] }, g.push(K)), K.values.push(w.get(null, n));
                  w.free();
                }
              }
              return g;
            } catch (O) {
              throw w && w.free(), O;
            } finally {
              sa(t);
            }
          };
          e.prototype.each = function(g, l, n, t, w) {
            "function" === typeof l && (t = n, n = l, l = void 0);
            g = this.prepare(g, l);
            try {
              for (; g.step(); ) n(g.getAsObject(null, w));
            } finally {
              g.free();
            }
            if ("function" === typeof t) return t();
          };
          e.prototype.prepare = function(g, l) {
            qa(h);
            this.handleError(H(this.db, g, -1, h, 0));
            g = m(h, "i32");
            if (0 === g) throw "Nothing to prepare";
            var n = new c(g, this);
            null != l && n.bind(l);
            return this.Za[g] = n;
          };
          e.prototype.iterateStatements = function(g) {
            return new d(g, this);
          };
          e.prototype["export"] = function() {
            Object.values(this.Za).forEach(function(l) {
              l.free();
            });
            Object.values(this.Na).forEach(ua);
            this.Na = {};
            this.handleError(y(this.db));
            var g = va(this.filename);
            this.handleError(r(this.filename, h));
            this.db = m(h, "i32");
            ob(this.db);
            return g;
          };
          e.prototype.close = function() {
            null !== this.db && (Object.values(this.Za).forEach(function(g) {
              g.free();
            }), Object.values(this.Na).forEach(ua), this.Na = {}, this.handleError(y(this.db)), wa("/" + this.filename), this.db = null);
          };
          e.prototype.handleError = function(g) {
            if (0 === g) return null;
            g = Bc(this.db);
            throw Error(g);
          };
          e.prototype.getRowsModified = function() {
            return F(this.db);
          };
          e.prototype.create_function = function(g, l) {
            Object.prototype.hasOwnProperty.call(this.Na, g) && (ua(this.Na[g]), delete this.Na[g]);
            var n = xa(function(t, w, z) {
              w = b(w, z);
              try {
                var N = l.apply(
                  null,
                  w
                );
              } catch (L) {
                Aa(t, L, -1);
                return;
              }
              a(t, N);
            }, "viii");
            this.Na[g] = n;
            this.handleError(tb(this.db, g, l.length, 1, 0, n, 0, 0, 0));
            return this;
          };
          e.prototype.create_aggregate = function(g, l) {
            var n = l.init || function() {
              return null;
            }, t = l.finalize || function(K) {
              return K;
            }, w = l.step;
            if (!w) throw "An aggregate function must have a step function in " + g;
            var z = {};
            Object.hasOwnProperty.call(this.Na, g) && (ua(this.Na[g]), delete this.Na[g]);
            l = g + "__finalize";
            Object.hasOwnProperty.call(this.Na, l) && (ua(this.Na[l]), delete this.Na[l]);
            var N = xa(function(K, O, Ua) {
              var X = ub(K, 1);
              Object.hasOwnProperty.call(z, X) || (z[X] = n());
              O = b(O, Ua);
              O = [z[X]].concat(O);
              try {
                z[X] = w.apply(null, O);
              } catch (Nc) {
                delete z[X], Aa(K, Nc, -1);
              }
            }, "viii"), L = xa(function(K) {
              var O = ub(K, 1);
              try {
                var Ua = t(z[O]);
              } catch (X) {
                delete z[O];
                Aa(K, X, -1);
                return;
              }
              a(K, Ua);
              delete z[O];
            }, "vi");
            this.Na[g] = N;
            this.Na[l] = L;
            this.handleError(tb(this.db, g, w.length - 1, 1, 0, 0, N, L, 0));
            return this;
          };
          f.Database = e;
        };
        var ya = Object.assign({}, f), za = "./this.program", Ba = "object" == typeof window, Ca = "function" == typeof importScripts, Da = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, A = "", Ea, Fa, Ga;
        if (Da) {
          var fs = require_fs(), Ha = require_path();
          A = Ca ? Ha.dirname(A) + "/" : __dirname + "/";
          Ea = (a, b) => {
            a = Ia(a) ? new URL(a) : Ha.normalize(a);
            return fs.readFileSync(a, b ? void 0 : "utf8");
          };
          Ga = (a) => {
            a = Ea(a, true);
            a.buffer || (a = new Uint8Array(a));
            return a;
          };
          Fa = (a, b, c, d = true) => {
            a = Ia(a) ? new URL(a) : Ha.normalize(a);
            fs.readFile(a, d ? void 0 : "utf8", (e, h) => {
              e ? c(e) : b(d ? h.buffer : h);
            });
          };
          !f.thisProgram && 1 < process.argv.length && (za = process.argv[1].replace(/\\/g, "/"));
          process.argv.slice(2);
          "undefined" != typeof module && (module.exports = f);
          f.inspect = () => "[Emscripten Module object]";
        } else if (Ba || Ca) Ca ? A = self.location.href : "undefined" != typeof document && document.currentScript && (A = document.currentScript.src), A = 0 !== A.indexOf("blob:") ? A.substr(0, A.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", Ea = (a) => {
          var b = new XMLHttpRequest();
          b.open("GET", a, false);
          b.send(null);
          return b.responseText;
        }, Ca && (Ga = (a) => {
          var b = new XMLHttpRequest();
          b.open("GET", a, false);
          b.responseType = "arraybuffer";
          b.send(null);
          return new Uint8Array(b.response);
        }), Fa = (a, b, c) => {
          var d = new XMLHttpRequest();
          d.open(
            "GET",
            a,
            true
          );
          d.responseType = "arraybuffer";
          d.onload = () => {
            200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
          };
          d.onerror = c;
          d.send(null);
        };
        var Ja = f.print || console.log.bind(console), B = f.printErr || console.error.bind(console);
        Object.assign(f, ya);
        ya = null;
        f.thisProgram && (za = f.thisProgram);
        var Ka;
        f.wasmBinary && (Ka = f.wasmBinary);
        "object" != typeof WebAssembly && C("no native wasm support detected");
        var La, Ma = false, p, q, Na, D, E, Oa, Pa;
        function Qa() {
          var a = La.buffer;
          f.HEAP8 = p = new Int8Array(a);
          f.HEAP16 = Na = new Int16Array(a);
          f.HEAPU8 = q = new Uint8Array(a);
          f.HEAPU16 = new Uint16Array(a);
          f.HEAP32 = D = new Int32Array(a);
          f.HEAPU32 = E = new Uint32Array(a);
          f.HEAPF32 = Oa = new Float32Array(a);
          f.HEAPF64 = Pa = new Float64Array(a);
        }
        var Ra = [], Sa = [], Ta = [];
        function Va() {
          var a = f.preRun.shift();
          Ra.unshift(a);
        }
        var G = 0, Wa = null, Xa = null;
        function C(a) {
          var _a;
          (_a = f.onAbort) == null ? void 0 : _a.call(f, a);
          a = "Aborted(" + a + ")";
          B(a);
          Ma = true;
          throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
        }
        var Ya = (a) => a.startsWith("data:application/octet-stream;base64,"), Ia = (a) => a.startsWith("file://"), Za;
        Za = "sql-wasm.wasm";
        if (!Ya(Za)) {
          var $a = Za;
          Za = f.locateFile ? f.locateFile($a, A) : A + $a;
        }
        function ab(a) {
          if (a == Za && Ka) return new Uint8Array(Ka);
          if (Ga) return Ga(a);
          throw "both async and sync fetching of the wasm failed";
        }
        function bb(a) {
          if (!Ka && (Ba || Ca)) {
            if ("function" == typeof fetch && !Ia(a)) return fetch(a, { credentials: "same-origin" }).then((b) => {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            }).catch(() => ab(a));
            if (Fa) return new Promise((b, c) => {
              Fa(a, (d) => b(new Uint8Array(d)), c);
            });
          }
          return Promise.resolve().then(() => ab(a));
        }
        function cb(a, b, c) {
          return bb(a).then((d) => WebAssembly.instantiate(d, b)).then((d) => d).then(c, (d) => {
            B(`failed to asynchronously prepare wasm: ${d}`);
            C(d);
          });
        }
        function db(a, b) {
          var c = Za;
          Ka || "function" != typeof WebAssembly.instantiateStreaming || Ya(c) || Ia(c) || Da || "function" != typeof fetch ? cb(c, a, b) : fetch(c, { credentials: "same-origin" }).then((d) => WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
            B(`wasm streaming compile failed: ${e}`);
            B("falling back to ArrayBuffer instantiation");
            return cb(c, a, b);
          }));
        }
        var I, J, eb = (a) => {
          for (; 0 < a.length; ) a.shift()(f);
        };
        function m(a, b = "i8") {
          b.endsWith("*") && (b = "*");
          switch (b) {
            case "i1":
              return p[a >> 0];
            case "i8":
              return p[a >> 0];
            case "i16":
              return Na[a >> 1];
            case "i32":
              return D[a >> 2];
            case "i64":
              C("to do getValue(i64) use WASM_BIGINT");
            case "float":
              return Oa[a >> 2];
            case "double":
              return Pa[a >> 3];
            case "*":
              return E[a >> 2];
            default:
              C(`invalid type for getValue: ${b}`);
          }
        }
        function qa(a) {
          var b = "i32";
          b.endsWith("*") && (b = "*");
          switch (b) {
            case "i1":
              p[a >> 0] = 0;
              break;
            case "i8":
              p[a >> 0] = 0;
              break;
            case "i16":
              Na[a >> 1] = 0;
              break;
            case "i32":
              D[a >> 2] = 0;
              break;
            case "i64":
              C("to do setValue(i64) use WASM_BIGINT");
            case "float":
              Oa[a >> 2] = 0;
              break;
            case "double":
              Pa[a >> 3] = 0;
              break;
            case "*":
              E[a >> 2] = 0;
              break;
            default:
              C(`invalid type for setValue: ${b}`);
          }
        }
        var fb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, M = (a, b, c) => {
          var d = b + c;
          for (c = b; a[c] && !(c >= d); ) ++c;
          if (16 < c - b && a.buffer && fb) return fb.decode(a.subarray(b, c));
          for (d = ""; b < c; ) {
            var e = a[b++];
            if (e & 128) {
              var h = a[b++] & 63;
              if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | h);
              else {
                var k = a[b++] & 63;
                e = 224 == (e & 240) ? (e & 15) << 12 | h << 6 | k : (e & 7) << 18 | h << 12 | k << 6 | a[b++] & 63;
                65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
              }
            } else d += String.fromCharCode(e);
          }
          return d;
        }, ra = (a, b) => a ? M(q, a, b) : "", gb = (a, b) => {
          for (var c = 0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d];
            "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
          }
          if (b) for (; c; c--) a.unshift("..");
          return a;
        }, u = (a) => {
          var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
          (a = gb(a.split("/").filter((d) => !!d), !b).join("/")) || b || (a = ".");
          a && c && (a += "/");
          return (b ? "/" : "") + a;
        }, hb = (a) => {
          var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
          a = b[0];
          b = b[1];
          if (!a && !b) return ".";
          b && (b = b.substr(0, b.length - 1));
          return a + b;
        }, ib = (a) => {
          if ("/" === a) return "/";
          a = u(a);
          a = a.replace(/\/$/, "");
          var b = a.lastIndexOf("/");
          return -1 === b ? a : a.substr(b + 1);
        }, jb = () => {
          if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (c) => crypto.getRandomValues(c);
          if (Da) try {
            var a = require_crypto();
            if (a.randomFillSync) return (c) => a.randomFillSync(c);
            var b = a.randomBytes;
            return (c) => (c.set(b(c.byteLength)), c);
          } catch (c) {
          }
          C("initRandomDevice");
        }, kb = (a) => (kb = jb())(a);
        function mb() {
          for (var a = "", b = false, c = arguments.length - 1; -1 <= c && !b; c--) {
            b = 0 <= c ? arguments[c] : "/";
            if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings");
            if (!b) return "";
            a = b + "/" + a;
            b = "/" === b.charAt(0);
          }
          a = gb(a.split("/").filter((d) => !!d), !b).join("/");
          return (b ? "/" : "") + a || ".";
        }
        var nb = [], da = (a) => {
          for (var b = 0, c = 0; c < a.length; ++c) {
            var d = a.charCodeAt(c);
            127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
          }
          return b;
        }, fa = (a, b, c, d) => {
          if (!(0 < d)) return 0;
          var e = c;
          d = c + d - 1;
          for (var h = 0; h < a.length; ++h) {
            var k = a.charCodeAt(h);
            if (55296 <= k && 57343 >= k) {
              var r = a.charCodeAt(++h);
              k = 65536 + ((k & 1023) << 10) | r & 1023;
            }
            if (127 >= k) {
              if (c >= d) break;
              b[c++] = k;
            } else {
              if (2047 >= k) {
                if (c + 1 >= d) break;
                b[c++] = 192 | k >> 6;
              } else {
                if (65535 >= k) {
                  if (c + 2 >= d) break;
                  b[c++] = 224 | k >> 12;
                } else {
                  if (c + 3 >= d) break;
                  b[c++] = 240 | k >> 18;
                  b[c++] = 128 | k >> 12 & 63;
                }
                b[c++] = 128 | k >> 6 & 63;
              }
              b[c++] = 128 | k & 63;
            }
          }
          b[c] = 0;
          return c - e;
        };
        function oa(a, b) {
          var c = Array(da(a) + 1);
          a = fa(a, c, 0, c.length);
          b && (c.length = a);
          return c;
        }
        var vb = [];
        function wb(a, b) {
          vb[a] = { input: [], output: [], Xa: b };
          xb(a, yb);
        }
        var yb = { open(a) {
          var b = vb[a.node.rdev];
          if (!b) throw new P(43);
          a.tty = b;
          a.seekable = false;
        }, close(a) {
          a.tty.Xa.fsync(a.tty);
        }, fsync(a) {
          a.tty.Xa.fsync(a.tty);
        }, read(a, b, c, d) {
          if (!a.tty || !a.tty.Xa.sb) throw new P(60);
          for (var e = 0, h = 0; h < d; h++) {
            try {
              var k = a.tty.Xa.sb(a.tty);
            } catch (r) {
              throw new P(29);
            }
            if (void 0 === k && 0 === e) throw new P(6);
            if (null === k || void 0 === k) break;
            e++;
            b[c + h] = k;
          }
          e && (a.node.timestamp = Date.now());
          return e;
        }, write(a, b, c, d) {
          if (!a.tty || !a.tty.Xa.jb) throw new P(60);
          try {
            for (var e = 0; e < d; e++) a.tty.Xa.jb(a.tty, b[c + e]);
          } catch (h) {
            throw new P(29);
          }
          d && (a.node.timestamp = Date.now());
          return e;
        } }, zb = { sb() {
          a: {
            if (!nb.length) {
              var a = null;
              if (Da) {
                var b = Buffer.alloc(256), c = 0, d = process.stdin.fd;
                try {
                  c = fs.readSync(d, b);
                } catch (e) {
                  if (e.toString().includes("EOF")) c = 0;
                  else throw e;
                }
                0 < c ? a = b.slice(0, c).toString("utf-8") : a = null;
              } else "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
              if (!a) {
                a = null;
                break a;
              }
              nb = oa(a, true);
            }
            a = nb.shift();
          }
          return a;
        }, jb(a, b) {
          null === b || 10 === b ? (Ja(M(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
        }, fsync(a) {
          a.output && 0 < a.output.length && (Ja(M(a.output, 0)), a.output = []);
        }, Mb() {
          return { Ib: 25856, Kb: 5, Hb: 191, Jb: 35387, Gb: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
        }, Nb() {
          return 0;
        }, Ob() {
          return [24, 80];
        } }, Ab = { jb(a, b) {
          null === b || 10 === b ? (B(M(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
        }, fsync(a) {
          a.output && 0 < a.output.length && (B(M(a.output, 0)), a.output = []);
        } };
        function Bb(a, b) {
          var c = a.Ia ? a.Ia.length : 0;
          c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.Ia, a.Ia = new Uint8Array(b), 0 < a.Ma && a.Ia.set(c.subarray(0, a.Ma), 0));
        }
        var Q = {
          Qa: null,
          Ra() {
            return Q.createNode(null, "/", 16895, 0);
          },
          createNode(a, b, c, d) {
            if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new P(63);
            Q.Qa || (Q.Qa = { dir: { node: { Pa: Q.Ga.Pa, Oa: Q.Ga.Oa, lookup: Q.Ga.lookup, ab: Q.Ga.ab, rename: Q.Ga.rename, unlink: Q.Ga.unlink, rmdir: Q.Ga.rmdir, readdir: Q.Ga.readdir, symlink: Q.Ga.symlink }, stream: { Ta: Q.Ha.Ta } }, file: { node: { Pa: Q.Ga.Pa, Oa: Q.Ga.Oa }, stream: { Ta: Q.Ha.Ta, read: Q.Ha.read, write: Q.Ha.write, lb: Q.Ha.lb, bb: Q.Ha.bb, cb: Q.Ha.cb } }, link: {
              node: { Pa: Q.Ga.Pa, Oa: Q.Ga.Oa, readlink: Q.Ga.readlink },
              stream: {}
            }, pb: { node: { Pa: Q.Ga.Pa, Oa: Q.Ga.Oa }, stream: Cb } });
            c = Db(a, b, c, d);
            R(c.mode) ? (c.Ga = Q.Qa.dir.node, c.Ha = Q.Qa.dir.stream, c.Ia = {}) : 32768 === (c.mode & 61440) ? (c.Ga = Q.Qa.file.node, c.Ha = Q.Qa.file.stream, c.Ma = 0, c.Ia = null) : 40960 === (c.mode & 61440) ? (c.Ga = Q.Qa.link.node, c.Ha = Q.Qa.link.stream) : 8192 === (c.mode & 61440) && (c.Ga = Q.Qa.pb.node, c.Ha = Q.Qa.pb.stream);
            c.timestamp = Date.now();
            a && (a.Ia[b] = c, a.timestamp = c.timestamp);
            return c;
          },
          Lb(a) {
            return a.Ia ? a.Ia.subarray ? a.Ia.subarray(0, a.Ma) : new Uint8Array(a.Ia) : new Uint8Array(0);
          },
          Ga: { Pa(a) {
            var b = {};
            b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
            b.ino = a.id;
            b.mode = a.mode;
            b.nlink = 1;
            b.uid = 0;
            b.gid = 0;
            b.rdev = a.rdev;
            R(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Ma : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
            b.atime = new Date(a.timestamp);
            b.mtime = new Date(a.timestamp);
            b.ctime = new Date(a.timestamp);
            b.zb = 4096;
            b.blocks = Math.ceil(b.size / b.zb);
            return b;
          }, Oa(a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            if (void 0 !== b.size && (b = b.size, a.Ma != b)) if (0 == b) a.Ia = null, a.Ma = 0;
            else {
              var c = a.Ia;
              a.Ia = new Uint8Array(b);
              c && a.Ia.set(c.subarray(0, Math.min(b, a.Ma)));
              a.Ma = b;
            }
          }, lookup() {
            throw Eb[44];
          }, ab(a, b, c, d) {
            return Q.createNode(a, b, c, d);
          }, rename(a, b, c) {
            if (R(a.mode)) {
              try {
                var d = Fb(b, c);
              } catch (h) {
              }
              if (d) for (var e in d.Ia) throw new P(55);
            }
            delete a.parent.Ia[a.name];
            a.parent.timestamp = Date.now();
            a.name = c;
            b.Ia[c] = a;
            b.timestamp = a.parent.timestamp;
            a.parent = b;
          }, unlink(a, b) {
            delete a.Ia[b];
            a.timestamp = Date.now();
          }, rmdir(a, b) {
            var c = Fb(a, b), d;
            for (d in c.Ia) throw new P(55);
            delete a.Ia[b];
            a.timestamp = Date.now();
          }, readdir(a) {
            var b = [".", ".."], c;
            for (c of Object.keys(a.Ia)) b.push(c);
            return b;
          }, symlink(a, b, c) {
            a = Q.createNode(a, b, 41471, 0);
            a.link = c;
            return a;
          }, readlink(a) {
            if (40960 !== (a.mode & 61440)) throw new P(28);
            return a.link;
          } },
          Ha: {
            read(a, b, c, d, e) {
              var h = a.node.Ia;
              if (e >= a.node.Ma) return 0;
              a = Math.min(a.node.Ma - e, d);
              if (8 < a && h.subarray) b.set(h.subarray(e, e + a), c);
              else for (d = 0; d < a; d++) b[c + d] = h[e + d];
              return a;
            },
            write(a, b, c, d, e, h) {
              b.buffer === p.buffer && (h = false);
              if (!d) return 0;
              a = a.node;
              a.timestamp = Date.now();
              if (b.subarray && (!a.Ia || a.Ia.subarray)) {
                if (h) return a.Ia = b.subarray(c, c + d), a.Ma = d;
                if (0 === a.Ma && 0 === e) return a.Ia = b.slice(c, c + d), a.Ma = d;
                if (e + d <= a.Ma) return a.Ia.set(b.subarray(c, c + d), e), d;
              }
              Bb(a, e + d);
              if (a.Ia.subarray && b.subarray) a.Ia.set(b.subarray(c, c + d), e);
              else for (h = 0; h < d; h++) a.Ia[e + h] = b[c + h];
              a.Ma = Math.max(a.Ma, e + d);
              return d;
            },
            Ta(a, b, c) {
              1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Ma);
              if (0 > b) throw new P(28);
              return b;
            },
            lb(a, b, c) {
              Bb(a.node, b + c);
              a.node.Ma = Math.max(a.node.Ma, b + c);
            },
            bb(a, b, c, d, e) {
              if (32768 !== (a.node.mode & 61440)) throw new P(43);
              a = a.node.Ia;
              if (e & 2 || a.buffer !== p.buffer) {
                if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                c = true;
                b = 65536 * Math.ceil(b / 65536);
                (e = Gb(65536, b)) ? (q.fill(0, e, e + b), b = e) : b = 0;
                if (!b) throw new P(48);
                p.set(a, b);
              } else c = false, b = a.byteOffset;
              return { Db: b, ub: c };
            },
            cb(a, b, c, d) {
              Q.Ha.write(a, b, 0, d, c, false);
              return 0;
            }
          }
        }, ia = (a, b) => {
          var c = 0;
          a && (c |= 365);
          b && (c |= 146);
          return c;
        }, Hb = null, Ib = {}, Jb = [], Kb = 1, S = null, Lb = true, P = null, Eb = {};
        function T(a, b = {}) {
          a = mb(a);
          if (!a) return { path: "", node: null };
          b = Object.assign({ qb: true, kb: 0 }, b);
          if (8 < b.kb) throw new P(32);
          a = a.split("/").filter((k) => !!k);
          for (var c = Hb, d = "/", e = 0; e < a.length; e++) {
            var h = e === a.length - 1;
            if (h && b.parent) break;
            c = Fb(c, a[e]);
            d = u(d + "/" + a[e]);
            c.Va && (!h || h && b.qb) && (c = c.Va.root);
            if (!h || b.Sa) {
              for (h = 0; 40960 === (c.mode & 61440); ) if (c = Mb(d), d = mb(hb(d), c), c = T(d, { kb: b.kb + 1 }).node, 40 < h++) throw new P(32);
            }
          }
          return { path: d, node: c };
        }
        function ha(a) {
          for (var b; ; ) {
            if (a === a.parent) return a = a.Ra.tb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
            b = b ? `${a.name}/${b}` : a.name;
            a = a.parent;
          }
        }
        function Nb(a, b) {
          for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0;
          return (a + c >>> 0) % S.length;
        }
        function Ob(a) {
          var b = Nb(a.parent.id, a.name);
          if (S[b] === a) S[b] = a.Wa;
          else for (b = S[b]; b; ) {
            if (b.Wa === a) {
              b.Wa = a.Wa;
              break;
            }
            b = b.Wa;
          }
        }
        function Fb(a, b) {
          var c;
          if (c = (c = Pb(a, "x")) ? c : a.Ga.lookup ? 0 : 2) throw new P(c, a);
          for (c = S[Nb(a.id, b)]; c; c = c.Wa) {
            var d = c.name;
            if (c.parent.id === a.id && d === b) return c;
          }
          return a.Ga.lookup(a, b);
        }
        function Db(a, b, c, d) {
          a = new Qb(a, b, c, d);
          b = Nb(a.parent.id, a.name);
          a.Wa = S[b];
          return S[b] = a;
        }
        function R(a) {
          return 16384 === (a & 61440);
        }
        function Rb(a) {
          var b = ["r", "w", "rw"][a & 3];
          a & 512 && (b += "w");
          return b;
        }
        function Pb(a, b) {
          if (Lb) return 0;
          if (!b.includes("r") || a.mode & 292) {
            if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2;
          } else return 2;
          return 0;
        }
        function Sb(a, b) {
          try {
            return Fb(a, b), 20;
          } catch (c) {
          }
          return Pb(a, "wx");
        }
        function Tb(a, b, c) {
          try {
            var d = Fb(a, b);
          } catch (e) {
            return e.Ka;
          }
          if (a = Pb(a, "wx")) return a;
          if (c) {
            if (!R(d.mode)) return 54;
            if (d === d.parent || "/" === ha(d)) return 10;
          } else if (R(d.mode)) return 31;
          return 0;
        }
        function Ub() {
          for (var a = 0; 4096 >= a; a++) if (!Jb[a]) return a;
          throw new P(33);
        }
        function U(a) {
          a = Jb[a];
          if (!a) throw new P(8);
          return a;
        }
        function Vb(a, b = -1) {
          Wb || (Wb = function() {
            this.$a = {};
          }, Wb.prototype = {}, Object.defineProperties(Wb.prototype, { object: { get() {
            return this.node;
          }, set(c) {
            this.node = c;
          } }, flags: { get() {
            return this.$a.flags;
          }, set(c) {
            this.$a.flags = c;
          } }, position: { get() {
            return this.$a.position;
          }, set(c) {
            this.$a.position = c;
          } } }));
          a = Object.assign(new Wb(), a);
          -1 == b && (b = Ub());
          a.fd = b;
          return Jb[b] = a;
        }
        var Cb = { open(a) {
          var _a, _b;
          a.Ha = Ib[a.node.rdev].Ha;
          (_b = (_a = a.Ha).open) == null ? void 0 : _b.call(_a, a);
        }, Ta() {
          throw new P(70);
        } };
        function xb(a, b) {
          Ib[a] = { Ha: b };
        }
        function Xb(a, b) {
          var c = "/" === b, d = !b;
          if (c && Hb) throw new P(10);
          if (!c && !d) {
            var e = T(b, { qb: false });
            b = e.path;
            e = e.node;
            if (e.Va) throw new P(10);
            if (!R(e.mode)) throw new P(54);
          }
          b = { type: a, Pb: {}, tb: b, Cb: [] };
          a = a.Ra(b);
          a.Ra = b;
          b.root = a;
          c ? Hb = a : e && (e.Va = b, e.Ra && e.Ra.Cb.push(b));
        }
        function ja(a, b, c) {
          var d = T(a, { parent: true }).node;
          a = ib(a);
          if (!a || "." === a || ".." === a) throw new P(28);
          var e = Sb(d, a);
          if (e) throw new P(e);
          if (!d.Ga.ab) throw new P(63);
          return d.Ga.ab(d, a, b, c);
        }
        function V(a, b) {
          return ja(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
        }
        function Yb(a, b, c) {
          "undefined" == typeof c && (c = b, b = 438);
          ja(a, b | 8192, c);
        }
        function Zb(a, b) {
          if (!mb(a)) throw new P(44);
          var c = T(b, { parent: true }).node;
          if (!c) throw new P(44);
          b = ib(b);
          var d = Sb(c, b);
          if (d) throw new P(d);
          if (!c.Ga.symlink) throw new P(63);
          c.Ga.symlink(c, b, a);
        }
        function $b(a) {
          var b = T(a, { parent: true }).node;
          a = ib(a);
          var c = Fb(b, a), d = Tb(b, a, true);
          if (d) throw new P(d);
          if (!b.Ga.rmdir) throw new P(63);
          if (c.Va) throw new P(10);
          b.Ga.rmdir(b, a);
          Ob(c);
        }
        function wa(a) {
          var b = T(a, { parent: true }).node;
          if (!b) throw new P(44);
          a = ib(a);
          var c = Fb(b, a), d = Tb(b, a, false);
          if (d) throw new P(d);
          if (!b.Ga.unlink) throw new P(63);
          if (c.Va) throw new P(10);
          b.Ga.unlink(b, a);
          Ob(c);
        }
        function Mb(a) {
          a = T(a).node;
          if (!a) throw new P(44);
          if (!a.Ga.readlink) throw new P(28);
          return mb(ha(a.parent), a.Ga.readlink(a));
        }
        function ac(a, b) {
          a = T(a, { Sa: !b }).node;
          if (!a) throw new P(44);
          if (!a.Ga.Pa) throw new P(63);
          return a.Ga.Pa(a);
        }
        function bc(a) {
          return ac(a, true);
        }
        function ka(a, b) {
          a = "string" == typeof a ? T(a, { Sa: true }).node : a;
          if (!a.Ga.Oa) throw new P(63);
          a.Ga.Oa(a, { mode: b & 4095 | a.mode & -4096, timestamp: Date.now() });
        }
        function cc(a, b) {
          if (0 > b) throw new P(28);
          a = "string" == typeof a ? T(a, { Sa: true }).node : a;
          if (!a.Ga.Oa) throw new P(63);
          if (R(a.mode)) throw new P(31);
          if (32768 !== (a.mode & 61440)) throw new P(28);
          var c = Pb(a, "w");
          if (c) throw new P(c);
          a.Ga.Oa(a, { size: b, timestamp: Date.now() });
        }
        function la(a, b, c) {
          if ("" === a) throw new P(44);
          if ("string" == typeof b) {
            var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
            if ("undefined" == typeof d) throw Error(`Unknown file open mode: ${b}`);
            b = d;
          }
          c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
          if ("object" == typeof a) var e = a;
          else {
            a = u(a);
            try {
              e = T(a, { Sa: !(b & 131072) }).node;
            } catch (h) {
            }
          }
          d = false;
          if (b & 64) if (e) {
            if (b & 128) throw new P(20);
          } else e = ja(a, c, 0), d = true;
          if (!e) throw new P(44);
          8192 === (e.mode & 61440) && (b &= -513);
          if (b & 65536 && !R(e.mode)) throw new P(54);
          if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : R(e.mode) && ("r" !== Rb(b) || b & 512) ? 31 : Pb(e, Rb(b)) : 44)) throw new P(c);
          b & 512 && !d && cc(e, 0);
          b &= -131713;
          e = Vb({ node: e, path: ha(e), flags: b, seekable: true, position: 0, Ha: e.Ha, Fb: [], error: false });
          e.Ha.open && e.Ha.open(e);
          !f.logReadFiles || b & 1 || (dc || (dc = {}), a in dc || (dc[a] = 1));
          return e;
        }
        function na(a) {
          if (null === a.fd) throw new P(8);
          a.hb && (a.hb = null);
          try {
            a.Ha.close && a.Ha.close(a);
          } catch (b) {
            throw b;
          } finally {
            Jb[a.fd] = null;
          }
          a.fd = null;
        }
        function ec(a, b, c) {
          if (null === a.fd) throw new P(8);
          if (!a.seekable || !a.Ha.Ta) throw new P(70);
          if (0 != c && 1 != c && 2 != c) throw new P(28);
          a.position = a.Ha.Ta(a, b, c);
          a.Fb = [];
        }
        function fc(a, b, c, d, e) {
          if (0 > d || 0 > e) throw new P(28);
          if (null === a.fd) throw new P(8);
          if (1 === (a.flags & 2097155)) throw new P(8);
          if (R(a.node.mode)) throw new P(31);
          if (!a.Ha.read) throw new P(28);
          var h = "undefined" != typeof e;
          if (!h) e = a.position;
          else if (!a.seekable) throw new P(70);
          b = a.Ha.read(a, b, c, d, e);
          h || (a.position += b);
          return b;
        }
        function ma(a, b, c, d, e) {
          if (0 > d || 0 > e) throw new P(28);
          if (null === a.fd) throw new P(8);
          if (0 === (a.flags & 2097155)) throw new P(8);
          if (R(a.node.mode)) throw new P(31);
          if (!a.Ha.write) throw new P(28);
          a.seekable && a.flags & 1024 && ec(a, 0, 2);
          var h = "undefined" != typeof e;
          if (!h) e = a.position;
          else if (!a.seekable) throw new P(70);
          b = a.Ha.write(a, b, c, d, e, void 0);
          h || (a.position += b);
          return b;
        }
        function va(a) {
          var b = "binary";
          if ("utf8" !== b && "binary" !== b) throw Error(`Invalid encoding type "${b}"`);
          var c;
          var d = la(a, d || 0);
          a = ac(a).size;
          var e = new Uint8Array(a);
          fc(d, e, 0, a, 0);
          "utf8" === b ? c = M(e, 0) : "binary" === b && (c = e);
          na(d);
          return c;
        }
        function gc() {
          P || (P = function(a, b) {
            this.name = "ErrnoError";
            this.node = b;
            this.Eb = function(c) {
              this.Ka = c;
            };
            this.Eb(a);
            this.message = "FS error";
          }, P.prototype = Error(), P.prototype.constructor = P, [44].forEach((a) => {
            Eb[a] = new P(a);
            Eb[a].stack = "<generic error, no stack>";
          }));
        }
        var hc;
        function ic(a, b, c) {
          a = u("/dev/" + a);
          var d = ia(!!b, !!c);
          jc || (jc = 64);
          var e = jc++ << 8 | 0;
          xb(e, { open(h) {
            h.seekable = false;
          }, close() {
            var _a;
            ((_a = c == null ? void 0 : c.buffer) == null ? void 0 : _a.length) && c(10);
          }, read(h, k, r, y) {
            for (var v = 0, F = 0; F < y; F++) {
              try {
                var H = b();
              } catch (pb) {
                throw new P(29);
              }
              if (void 0 === H && 0 === v) throw new P(6);
              if (null === H || void 0 === H) break;
              v++;
              k[r + F] = H;
            }
            v && (h.node.timestamp = Date.now());
            return v;
          }, write(h, k, r, y) {
            for (var v = 0; v < y; v++) try {
              c(k[r + v]);
            } catch (F) {
              throw new P(29);
            }
            y && (h.node.timestamp = Date.now());
            return v;
          } });
          Yb(a, d, e);
        }
        var jc, W = {}, Wb, dc;
        function kc(a, b, c) {
          if ("/" === b.charAt(0)) return b;
          a = -100 === a ? "/" : U(a).path;
          if (0 == b.length) {
            if (!c) throw new P(44);
            return a;
          }
          return u(a + "/" + b);
        }
        function lc(a, b, c) {
          try {
            var d = a(b);
          } catch (h) {
            if (h && h.node && u(b) !== u(ha(h.node))) return -54;
            throw h;
          }
          D[c >> 2] = d.dev;
          D[c + 4 >> 2] = d.mode;
          E[c + 8 >> 2] = d.nlink;
          D[c + 12 >> 2] = d.uid;
          D[c + 16 >> 2] = d.gid;
          D[c + 20 >> 2] = d.rdev;
          J = [d.size >>> 0, (I = d.size, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
          D[c + 24 >> 2] = J[0];
          D[c + 28 >> 2] = J[1];
          D[c + 32 >> 2] = 4096;
          D[c + 36 >> 2] = d.blocks;
          a = d.atime.getTime();
          b = d.mtime.getTime();
          var e = d.ctime.getTime();
          J = [Math.floor(a / 1e3) >>> 0, (I = Math.floor(a / 1e3), 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
          D[c + 40 >> 2] = J[0];
          D[c + 44 >> 2] = J[1];
          E[c + 48 >> 2] = a % 1e3 * 1e3;
          J = [Math.floor(b / 1e3) >>> 0, (I = Math.floor(b / 1e3), 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
          D[c + 56 >> 2] = J[0];
          D[c + 60 >> 2] = J[1];
          E[c + 64 >> 2] = b % 1e3 * 1e3;
          J = [Math.floor(e / 1e3) >>> 0, (I = Math.floor(e / 1e3), 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
          D[c + 72 >> 2] = J[0];
          D[c + 76 >> 2] = J[1];
          E[c + 80 >> 2] = e % 1e3 * 1e3;
          J = [d.ino >>> 0, (I = d.ino, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
          D[c + 88 >> 2] = J[0];
          D[c + 92 >> 2] = J[1];
          return 0;
        }
        var Mc = void 0;
        function Oc() {
          var a = D[+Mc >> 2];
          Mc += 4;
          return a;
        }
        var Pc = (a, b) => b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN, Qc = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Rc = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Sc = (a) => {
          var b = da(a) + 1, c = ea(b);
          c && fa(a, q, c, b);
          return c;
        }, Tc = {}, Vc = () => {
          if (!Uc) {
            var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: za || "./this.program" }, b;
            for (b in Tc) void 0 === Tc[b] ? delete a[b] : a[b] = Tc[b];
            var c = [];
            for (b in a) c.push(`${b}=${a[b]}`);
            Uc = c;
          }
          return Uc;
        }, Uc, ta = (a) => {
          var b = da(a) + 1, c = x(b);
          fa(a, q, c, b);
          return c;
        }, Wc = (a, b, c, d) => {
          var e = { string: (v) => {
            var F = 0;
            null !== v && void 0 !== v && 0 !== v && (F = ta(v));
            return F;
          }, array: (v) => {
            var F = x(v.length);
            p.set(v, F);
            return F;
          } };
          a = f["_" + a];
          var h = [], k = 0;
          if (d) for (var r = 0; r < d.length; r++) {
            var y = e[c[r]];
            y ? (0 === k && (k = pa()), h[r] = y(d[r])) : h[r] = d[r];
          }
          c = a.apply(null, h);
          return c = function(v) {
            0 !== k && sa(k);
            return "string" === b ? v ? M(q, v) : "" : "boolean" === b ? !!v : v;
          }(c);
        }, ba = 0, aa = (a, b) => {
          b = 1 == b ? x(a.length) : ea(a.length);
          a.subarray || a.slice || (a = new Uint8Array(a));
          q.set(a, b);
          return b;
        }, Xc, Yc = [], Y, ua = (a) => {
          Xc.delete(Y.get(a));
          Y.set(a, null);
          Yc.push(a);
        }, xa = (a, b) => {
          if (!Xc) {
            Xc = /* @__PURE__ */ new WeakMap();
            var c = Y.length;
            if (Xc) for (var d = 0; d < 0 + c; d++) {
              var e = Y.get(d);
              e && Xc.set(e, d);
            }
          }
          if (c = Xc.get(a) || 0) return c;
          if (Yc.length) c = Yc.pop();
          else {
            try {
              Y.grow(1);
            } catch (r) {
              if (!(r instanceof RangeError)) throw r;
              throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
            }
            c = Y.length - 1;
          }
          try {
            Y.set(c, a);
          } catch (r) {
            if (!(r instanceof TypeError)) throw r;
            if ("function" == typeof WebAssembly.Function) {
              d = WebAssembly.Function;
              e = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" };
              for (var h = { parameters: [], results: "v" == b[0] ? [] : [e[b[0]]] }, k = 1; k < b.length; ++k) h.parameters.push(e[b[k]]);
              b = new d(h, a);
            } else {
              d = [1];
              e = b.slice(0, 1);
              b = b.slice(1);
              h = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
              d.push(96);
              k = b.length;
              128 > k ? d.push(k) : d.push(k % 128 | 128, k >> 7);
              for (k = 0; k < b.length; ++k) d.push(h[b[k]]);
              "v" == e ? d.push(0) : d.push(1, h[e]);
              b = [0, 97, 115, 109, 1, 0, 0, 0, 1];
              e = d.length;
              128 > e ? b.push(e) : b.push(e % 128 | 128, e >> 7);
              b.push.apply(b, d);
              b.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
              b = new WebAssembly.Module(new Uint8Array(b));
              b = new WebAssembly.Instance(b, { e: { f: a } }).exports.f;
            }
            Y.set(c, b);
          }
          Xc.set(a, c);
          return c;
        };
        function Qb(a, b, c, d) {
          a || (a = this);
          this.parent = a;
          this.Ra = a.Ra;
          this.Va = null;
          this.id = Kb++;
          this.name = b;
          this.mode = c;
          this.Ga = {};
          this.Ha = {};
          this.rdev = d;
        }
        Object.defineProperties(Qb.prototype, { read: { get: function() {
          return 365 === (this.mode & 365);
        }, set: function(a) {
          a ? this.mode |= 365 : this.mode &= -366;
        } }, write: { get: function() {
          return 146 === (this.mode & 146);
        }, set: function(a) {
          a ? this.mode |= 146 : this.mode &= -147;
        } } });
        gc();
        S = Array(4096);
        Xb(Q, "/");
        V("/tmp");
        V("/home");
        V("/home/web_user");
        (function() {
          V("/dev");
          xb(259, { read: () => 0, write: (d, e, h, k) => k });
          Yb("/dev/null", 259);
          wb(1280, zb);
          wb(1536, Ab);
          Yb("/dev/tty", 1280);
          Yb("/dev/tty1", 1536);
          var a = new Uint8Array(1024), b = 0, c = () => {
            0 === b && (b = kb(a).byteLength);
            return a[--b];
          };
          ic("random", c);
          ic("urandom", c);
          V("/dev/shm");
          V("/dev/shm/tmp");
        })();
        (function() {
          V("/proc");
          var a = V("/proc/self");
          V("/proc/self/fd");
          Xb({ Ra() {
            var b = Db(a, "fd", 16895, 73);
            b.Ga = { lookup(c, d) {
              var e = U(+d);
              c = { parent: null, Ra: { tb: "fake" }, Ga: { readlink: () => e.path } };
              return c.parent = c;
            } };
            return b;
          } }, "/proc/self/fd");
        })();
        var $c = {
          a: (a, b, c, d) => {
            C(`Assertion failed: ${a ? M(q, a) : ""}, at: ` + [b ? b ? M(q, b) : "" : "unknown filename", c, d ? d ? M(q, d) : "" : "unknown function"]);
          },
          h: function(a, b) {
            try {
              return a = a ? M(q, a) : "", ka(a, b), 0;
            } catch (c) {
              if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
              return -c.Ka;
            }
          },
          H: function(a, b, c) {
            try {
              b = b ? M(q, b) : "";
              b = kc(a, b);
              if (c & -8) return -28;
              var d = T(b, { Sa: true }).node;
              if (!d) return -44;
              a = "";
              c & 4 && (a += "r");
              c & 2 && (a += "w");
              c & 1 && (a += "x");
              return a && Pb(d, a) ? -2 : 0;
            } catch (e) {
              if ("undefined" == typeof W || "ErrnoError" !== e.name) throw e;
              return -e.Ka;
            }
          },
          i: function(a, b) {
            try {
              var c = U(a);
              ka(c.node, b);
              return 0;
            } catch (d) {
              if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
              return -d.Ka;
            }
          },
          g: function(a) {
            try {
              var b = U(a).node;
              var c = "string" == typeof b ? T(b, { Sa: true }).node : b;
              if (!c.Ga.Oa) throw new P(63);
              c.Ga.Oa(c, { timestamp: Date.now() });
              return 0;
            } catch (d) {
              if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
              return -d.Ka;
            }
          },
          b: function(a, b, c) {
            Mc = c;
            try {
              var d = U(a);
              switch (b) {
                case 0:
                  var e = Oc();
                  if (0 > e) return -28;
                  for (; Jb[e]; ) e++;
                  return Vb(d, e).fd;
                case 1:
                case 2:
                  return 0;
                case 3:
                  return d.flags;
                case 4:
                  return e = Oc(), d.flags |= e, 0;
                case 5:
                  return e = Oc(), Na[e + 0 >> 1] = 2, 0;
                case 6:
                case 7:
                  return 0;
                case 16:
                case 8:
                  return -28;
                case 9:
                  return D[Zc() >> 2] = 28, -1;
                default:
                  return -28;
              }
            } catch (h) {
              if ("undefined" == typeof W || "ErrnoError" !== h.name) throw h;
              return -h.Ka;
            }
          },
          f: function(a, b) {
            try {
              var c = U(a);
              return lc(ac, c.path, b);
            } catch (d) {
              if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
              return -d.Ka;
            }
          },
          n: function(a, b, c) {
            b = Pc(b, c);
            try {
              if (isNaN(b)) return 61;
              var d = U(a);
              if (0 === (d.flags & 2097155)) throw new P(28);
              cc(d.node, b);
              return 0;
            } catch (e) {
              if ("undefined" == typeof W || "ErrnoError" !== e.name) throw e;
              return -e.Ka;
            }
          },
          C: function(a, b) {
            try {
              if (0 === b) return -28;
              var c = da("/") + 1;
              if (b < c) return -68;
              fa("/", q, a, b);
              return c;
            } catch (d) {
              if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
              return -d.Ka;
            }
          },
          F: function(a, b) {
            try {
              return a = a ? M(q, a) : "", lc(bc, a, b);
            } catch (c) {
              if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
              return -c.Ka;
            }
          },
          z: function(a, b, c) {
            try {
              return b = b ? M(q, b) : "", b = kc(a, b), b = u(b), "/" === b[b.length - 1] && (b = b.substr(
                0,
                b.length - 1
              )), V(b, c), 0;
            } catch (d) {
              if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
              return -d.Ka;
            }
          },
          E: function(a, b, c, d) {
            try {
              b = b ? M(q, b) : "";
              var e = d & 256;
              b = kc(a, b, d & 4096);
              return lc(e ? bc : ac, b, c);
            } catch (h) {
              if ("undefined" == typeof W || "ErrnoError" !== h.name) throw h;
              return -h.Ka;
            }
          },
          y: function(a, b, c, d) {
            Mc = d;
            try {
              b = b ? M(q, b) : "";
              b = kc(a, b);
              var e = d ? Oc() : 0;
              return la(b, c, e).fd;
            } catch (h) {
              if ("undefined" == typeof W || "ErrnoError" !== h.name) throw h;
              return -h.Ka;
            }
          },
          w: function(a, b, c, d) {
            try {
              b = b ? M(q, b) : "";
              b = kc(a, b);
              if (0 >= d) return -28;
              var e = Mb(b), h = Math.min(d, da(e)), k = p[c + h];
              fa(e, q, c, d + 1);
              p[c + h] = k;
              return h;
            } catch (r) {
              if ("undefined" == typeof W || "ErrnoError" !== r.name) throw r;
              return -r.Ka;
            }
          },
          v: function(a) {
            try {
              return a = a ? M(q, a) : "", $b(a), 0;
            } catch (b) {
              if ("undefined" == typeof W || "ErrnoError" !== b.name) throw b;
              return -b.Ka;
            }
          },
          G: function(a, b) {
            try {
              return a = a ? M(q, a) : "", lc(ac, a, b);
            } catch (c) {
              if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
              return -c.Ka;
            }
          },
          r: function(a, b, c) {
            try {
              return b = b ? M(q, b) : "", b = kc(a, b), 0 === c ? wa(b) : 512 === c ? $b(b) : C("Invalid flags passed to unlinkat"), 0;
            } catch (d) {
              if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
              return -d.Ka;
            }
          },
          q: function(a, b, c) {
            try {
              b = b ? M(q, b) : "";
              b = kc(a, b, true);
              if (c) {
                var d = E[c >> 2] + 4294967296 * D[c + 4 >> 2], e = D[c + 8 >> 2];
                h = 1e3 * d + e / 1e6;
                c += 16;
                d = E[c >> 2] + 4294967296 * D[c + 4 >> 2];
                e = D[c + 8 >> 2];
                k = 1e3 * d + e / 1e6;
              } else var h = Date.now(), k = h;
              a = h;
              var r = T(b, { Sa: true }).node;
              r.Ga.Oa(r, { timestamp: Math.max(a, k) });
              return 0;
            } catch (y) {
              if ("undefined" == typeof W || "ErrnoError" !== y.name) throw y;
              return -y.Ka;
            }
          },
          l: function(a, b, c) {
            a = new Date(1e3 * Pc(a, b));
            D[c >> 2] = a.getSeconds();
            D[c + 4 >> 2] = a.getMinutes();
            D[c + 8 >> 2] = a.getHours();
            D[c + 12 >> 2] = a.getDate();
            D[c + 16 >> 2] = a.getMonth();
            D[c + 20 >> 2] = a.getFullYear() - 1900;
            D[c + 24 >> 2] = a.getDay();
            b = a.getFullYear();
            D[c + 28 >> 2] = (0 !== b % 4 || 0 === b % 100 && 0 !== b % 400 ? Rc : Qc)[a.getMonth()] + a.getDate() - 1 | 0;
            D[c + 36 >> 2] = -(60 * a.getTimezoneOffset());
            b = new Date(a.getFullYear(), 6, 1).getTimezoneOffset();
            var d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
            D[c + 32 >> 2] = (b != d && a.getTimezoneOffset() == Math.min(d, b)) | 0;
          },
          j: function(a, b, c, d, e, h, k, r) {
            e = Pc(e, h);
            try {
              if (isNaN(e)) return 61;
              var y = U(d);
              if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (y.flags & 2097155)) throw new P(2);
              if (1 === (y.flags & 2097155)) throw new P(2);
              if (!y.Ha.bb) throw new P(43);
              var v = y.Ha.bb(y, a, e, b, c);
              var F = v.Db;
              D[k >> 2] = v.ub;
              E[r >> 2] = F;
              return 0;
            } catch (H) {
              if ("undefined" == typeof W || "ErrnoError" !== H.name) throw H;
              return -H.Ka;
            }
          },
          k: function(a, b, c, d, e, h, k) {
            h = Pc(h, k);
            try {
              if (isNaN(h)) return 61;
              var r = U(e);
              if (c & 2) {
                if (32768 !== (r.node.mode & 61440)) throw new P(43);
                if (!(d & 2)) {
                  var y = q.slice(a, a + b);
                  r.Ha.cb && r.Ha.cb(r, y, h, b, d);
                }
              }
            } catch (v) {
              if ("undefined" == typeof W || "ErrnoError" !== v.name) throw v;
              return -v.Ka;
            }
          },
          s: (a, b, c) => {
            function d(y) {
              return (y = y.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? y[1] : "GMT";
            }
            var e = (/* @__PURE__ */ new Date()).getFullYear(), h = new Date(e, 0, 1), k = new Date(e, 6, 1);
            e = h.getTimezoneOffset();
            var r = k.getTimezoneOffset();
            E[a >> 2] = 60 * Math.max(e, r);
            D[b >> 2] = Number(e != r);
            a = d(h);
            b = d(k);
            a = Sc(a);
            b = Sc(b);
            r < e ? (E[c >> 2] = a, E[c + 4 >> 2] = b) : (E[c >> 2] = b, E[c + 4 >> 2] = a);
          },
          d: () => Date.now(),
          t: () => 2147483648,
          c: () => performance.now(),
          o: (a) => {
            var b = q.length;
            a >>>= 0;
            if (2147483648 < a) return false;
            for (var c = 1; 4 >= c; c *= 2) {
              var d = b * (1 + 0.2 / c);
              d = Math.min(d, a + 100663296);
              var e = Math;
              d = Math.max(a, d);
              a: {
                e = (e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - La.buffer.byteLength + 65535) / 65536;
                try {
                  La.grow(e);
                  Qa();
                  var h = 1;
                  break a;
                } catch (k) {
                }
                h = void 0;
              }
              if (h) return true;
            }
            return false;
          },
          A: (a, b) => {
            var c = 0;
            Vc().forEach((d, e) => {
              var h = b + c;
              e = E[a + 4 * e >> 2] = h;
              for (h = 0; h < d.length; ++h) p[e++ >> 0] = d.charCodeAt(h);
              p[e >> 0] = 0;
              c += d.length + 1;
            });
            return 0;
          },
          B: (a, b) => {
            var c = Vc();
            E[a >> 2] = c.length;
            var d = 0;
            c.forEach((e) => d += e.length + 1);
            E[b >> 2] = d;
            return 0;
          },
          e: function(a) {
            try {
              var b = U(a);
              na(b);
              return 0;
            } catch (c) {
              if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
              return c.Ka;
            }
          },
          p: function(a, b) {
            try {
              var c = U(a);
              p[b >> 0] = c.tty ? 2 : R(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
              Na[b + 2 >> 1] = 0;
              J = [0, (I = 0, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
              D[b + 8 >> 2] = J[0];
              D[b + 12 >> 2] = J[1];
              J = [0, (I = 0, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
              D[b + 16 >> 2] = J[0];
              D[b + 20 >> 2] = J[1];
              return 0;
            } catch (d) {
              if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
              return d.Ka;
            }
          },
          x: function(a, b, c, d) {
            try {
              a: {
                var e = U(a);
                a = b;
                for (var h, k = b = 0; k < c; k++) {
                  var r = E[a >> 2], y = E[a + 4 >> 2];
                  a += 8;
                  var v = fc(e, p, r, y, h);
                  if (0 > v) {
                    var F = -1;
                    break a;
                  }
                  b += v;
                  if (v < y) break;
                  "undefined" !== typeof h && (h += v);
                }
                F = b;
              }
              E[d >> 2] = F;
              return 0;
            } catch (H) {
              if ("undefined" == typeof W || "ErrnoError" !== H.name) throw H;
              return H.Ka;
            }
          },
          m: function(a, b, c, d, e) {
            b = Pc(b, c);
            try {
              if (isNaN(b)) return 61;
              var h = U(a);
              ec(h, b, d);
              J = [h.position >>> 0, (I = h.position, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
              D[e >> 2] = J[0];
              D[e + 4 >> 2] = J[1];
              h.hb && 0 === b && 0 === d && (h.hb = null);
              return 0;
            } catch (k) {
              if ("undefined" == typeof W || "ErrnoError" !== k.name) throw k;
              return k.Ka;
            }
          },
          D: function(a) {
            var _a;
            try {
              var b = U(a);
              return ((_a = b.Ha) == null ? void 0 : _a.fsync) ? b.Ha.fsync(b) : 0;
            } catch (c) {
              if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
              return c.Ka;
            }
          },
          u: function(a, b, c, d) {
            try {
              a: {
                var e = U(a);
                a = b;
                for (var h, k = b = 0; k < c; k++) {
                  var r = E[a >> 2], y = E[a + 4 >> 2];
                  a += 8;
                  var v = ma(e, p, r, y, h);
                  if (0 > v) {
                    var F = -1;
                    break a;
                  }
                  b += v;
                  "undefined" !== typeof h && (h += v);
                }
                F = b;
              }
              E[d >> 2] = F;
              return 0;
            } catch (H) {
              if ("undefined" == typeof W || "ErrnoError" !== H.name) throw H;
              return H.Ka;
            }
          }
        }, Z = function() {
          var _a;
          function a(c) {
            var _a2;
            Z = c.exports;
            La = Z.I;
            Qa();
            Y = Z.Aa;
            Sa.unshift(Z.J);
            G--;
            (_a2 = f.monitorRunDependencies) == null ? void 0 : _a2.call(f, G);
            0 == G && (null !== Wa && (clearInterval(Wa), Wa = null), Xa && (c = Xa, Xa = null, c()));
            return Z;
          }
          var b = { a: $c };
          G++;
          (_a = f.monitorRunDependencies) == null ? void 0 : _a.call(f, G);
          if (f.instantiateWasm) try {
            return f.instantiateWasm(b, a);
          } catch (c) {
            return B(`Module.instantiateWasm callback failed with error: ${c}`), false;
          }
          db(b, function(c) {
            a(c.instance);
          });
          return {};
        }();
        f._sqlite3_free = (a) => (f._sqlite3_free = Z.K)(a);
        f._sqlite3_value_text = (a) => (f._sqlite3_value_text = Z.L)(a);
        var Zc = () => (Zc = Z.M)();
        f._sqlite3_prepare_v2 = (a, b, c, d, e) => (f._sqlite3_prepare_v2 = Z.N)(a, b, c, d, e);
        f._sqlite3_step = (a) => (f._sqlite3_step = Z.O)(a);
        f._sqlite3_reset = (a) => (f._sqlite3_reset = Z.P)(a);
        f._sqlite3_exec = (a, b, c, d, e) => (f._sqlite3_exec = Z.Q)(a, b, c, d, e);
        f._sqlite3_finalize = (a) => (f._sqlite3_finalize = Z.R)(a);
        f._sqlite3_column_name = (a, b) => (f._sqlite3_column_name = Z.S)(a, b);
        f._sqlite3_column_text = (a, b) => (f._sqlite3_column_text = Z.T)(a, b);
        f._sqlite3_column_type = (a, b) => (f._sqlite3_column_type = Z.U)(a, b);
        f._sqlite3_errmsg = (a) => (f._sqlite3_errmsg = Z.V)(a);
        f._sqlite3_clear_bindings = (a) => (f._sqlite3_clear_bindings = Z.W)(a);
        f._sqlite3_value_blob = (a) => (f._sqlite3_value_blob = Z.X)(a);
        f._sqlite3_value_bytes = (a) => (f._sqlite3_value_bytes = Z.Y)(a);
        f._sqlite3_value_double = (a) => (f._sqlite3_value_double = Z.Z)(a);
        f._sqlite3_value_int = (a) => (f._sqlite3_value_int = Z._)(a);
        f._sqlite3_value_type = (a) => (f._sqlite3_value_type = Z.$)(a);
        f._sqlite3_result_blob = (a, b, c, d) => (f._sqlite3_result_blob = Z.aa)(a, b, c, d);
        f._sqlite3_result_double = (a, b) => (f._sqlite3_result_double = Z.ba)(a, b);
        f._sqlite3_result_error = (a, b, c) => (f._sqlite3_result_error = Z.ca)(a, b, c);
        f._sqlite3_result_int = (a, b) => (f._sqlite3_result_int = Z.da)(a, b);
        f._sqlite3_result_int64 = (a, b, c) => (f._sqlite3_result_int64 = Z.ea)(a, b, c);
        f._sqlite3_result_null = (a) => (f._sqlite3_result_null = Z.fa)(a);
        f._sqlite3_result_text = (a, b, c, d) => (f._sqlite3_result_text = Z.ga)(a, b, c, d);
        f._sqlite3_aggregate_context = (a, b) => (f._sqlite3_aggregate_context = Z.ha)(a, b);
        f._sqlite3_column_count = (a) => (f._sqlite3_column_count = Z.ia)(a);
        f._sqlite3_data_count = (a) => (f._sqlite3_data_count = Z.ja)(a);
        f._sqlite3_column_blob = (a, b) => (f._sqlite3_column_blob = Z.ka)(a, b);
        f._sqlite3_column_bytes = (a, b) => (f._sqlite3_column_bytes = Z.la)(a, b);
        f._sqlite3_column_double = (a, b) => (f._sqlite3_column_double = Z.ma)(a, b);
        f._sqlite3_bind_blob = (a, b, c, d, e) => (f._sqlite3_bind_blob = Z.na)(a, b, c, d, e);
        f._sqlite3_bind_double = (a, b, c) => (f._sqlite3_bind_double = Z.oa)(a, b, c);
        f._sqlite3_bind_int = (a, b, c) => (f._sqlite3_bind_int = Z.pa)(a, b, c);
        f._sqlite3_bind_text = (a, b, c, d, e) => (f._sqlite3_bind_text = Z.qa)(a, b, c, d, e);
        f._sqlite3_bind_parameter_index = (a, b) => (f._sqlite3_bind_parameter_index = Z.ra)(a, b);
        f._sqlite3_sql = (a) => (f._sqlite3_sql = Z.sa)(a);
        f._sqlite3_normalized_sql = (a) => (f._sqlite3_normalized_sql = Z.ta)(a);
        f._sqlite3_changes = (a) => (f._sqlite3_changes = Z.ua)(a);
        f._sqlite3_close_v2 = (a) => (f._sqlite3_close_v2 = Z.va)(a);
        f._sqlite3_create_function_v2 = (a, b, c, d, e, h, k, r, y) => (f._sqlite3_create_function_v2 = Z.wa)(a, b, c, d, e, h, k, r, y);
        f._sqlite3_open = (a, b) => (f._sqlite3_open = Z.xa)(a, b);
        var ea = f._malloc = (a) => (ea = f._malloc = Z.ya)(a), ca = f._free = (a) => (ca = f._free = Z.za)(a);
        f._RegisterExtensionFunctions = (a) => (f._RegisterExtensionFunctions = Z.Ba)(a);
        var Gb = (a, b) => (Gb = Z.Ca)(a, b), pa = () => (pa = Z.Da)(), sa = (a) => (sa = Z.Ea)(a), x = (a) => (x = Z.Fa)(a);
        f.stackAlloc = x;
        f.stackSave = pa;
        f.stackRestore = sa;
        f.cwrap = (a, b, c, d) => {
          var e = !c || c.every((h) => "number" === h || "boolean" === h);
          return "string" !== b && e && !d ? f["_" + a] : function() {
            return Wc(a, b, c, arguments);
          };
        };
        f.addFunction = xa;
        f.removeFunction = ua;
        f.UTF8ToString = ra;
        f.ALLOC_NORMAL = ba;
        f.allocate = aa;
        f.allocateUTF8OnStack = ta;
        var ad;
        Xa = function bd() {
          ad || cd();
          ad || (Xa = bd);
        };
        function cd() {
          function a() {
            if (!ad && (ad = true, f.calledRun = true, !Ma)) {
              f.noFSInit || hc || (hc = true, gc(), f.stdin = f.stdin, f.stdout = f.stdout, f.stderr = f.stderr, f.stdin ? ic("stdin", f.stdin) : Zb("/dev/tty", "/dev/stdin"), f.stdout ? ic("stdout", null, f.stdout) : Zb("/dev/tty", "/dev/stdout"), f.stderr ? ic("stderr", null, f.stderr) : Zb("/dev/tty1", "/dev/stderr"), la("/dev/stdin", 0), la("/dev/stdout", 1), la("/dev/stderr", 1));
              Lb = false;
              eb(Sa);
              if (f.onRuntimeInitialized) f.onRuntimeInitialized();
              if (f.postRun) for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length; ) {
                var b = f.postRun.shift();
                Ta.unshift(b);
              }
              eb(Ta);
            }
          }
          if (!(0 < G)) {
            if (f.preRun) for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length; ) Va();
            eb(Ra);
            0 < G || (f.setStatus ? (f.setStatus("Running..."), setTimeout(function() {
              setTimeout(function() {
                f.setStatus("");
              }, 1);
              a();
            }, 1)) : a());
          }
        }
        if (f.preInit) for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length; ) f.preInit.pop()();
        cd();
        return Module;
      });
      return initSqlJsPromise;
    };
    if (typeof exports === "object" && typeof module === "object") {
      module.exports = initSqlJs;
      module.exports.default = initSqlJs;
    } else if (typeof define === "function" && define["amd"]) {
      define([], function() {
        return initSqlJs;
      });
    } else if (typeof exports === "object") {
      exports["Module"] = initSqlJs;
    }
  }
});
export default require_sql_wasm();
//# sourceMappingURL=sql__js.js.map
