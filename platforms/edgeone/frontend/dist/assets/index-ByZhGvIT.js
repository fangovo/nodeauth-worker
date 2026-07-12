const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vaultService-Bo8lK2lt.js","assets/pdf-utils-D3SLYqmy.js","assets/compression-utils-BzBbrBKd.js","assets/resourceRegistry-D1N45fAB.js","assets/vue-core-DHcoxuim.js","assets/dataExport-Dn93d-eA.js","assets/element-plus-BHS6vjDl.js","assets/element-plus-CqJ-3YyC.css","assets/iconProtonAuth-C0vTTQOk.js","assets/dataMigrationService-DQ9epAs2.js","assets/wa-sqlite-CPsif24c.js","assets/qr-utils-7t4IiZrV.js","assets/argon2-browser-DDvEuRcU.js","assets/hash-wasm-Dup_VHWH.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CY07rioj.js","assets/common-CT3oroci.js","assets/responsiveOverlay-ClPscjlD.js","assets/responsiveOverlay-DXpm1mUF.css","assets/dataExport-BViWmYxM.css","assets/dataImport-C7ZKUnWj.js","assets/iconLastPassAuth-B6DoLgd6.js","assets/dataBackup-DLKs8DeO.js","assets/utilityTools-B2AkwNbv.js","assets/iconToolbox-f0gvq57T.js","assets/passkeySettings-BxMS4y3G.js","assets/webAuthnService-DcDVdpnq.js","assets/emergency-BSushNMJ.js","assets/home-CE6voyX0.js","assets/home-wjBgacGz.css","assets/login-V0Q07x5n.js","assets/oauthCallback-JNvT7Uw-.js","assets/healthCheck-dTe98E6-.js","assets/healthCheck-X2U2YMiZ.css"])))=>i.map(i=>d[i]);
import { _ as se, __tla as __tla_0 } from "./pdf-utils-D3SLYqmy.js";
import { w as Sr, aD as De, O as Pr, aa as M, aj as Nn, g as me, u as xt, x as Nt, A as $e, G as Ir, a2 as Xt, a4 as On, _ as Lr, r as Q, a as Nr, F as Yt, v as at, a8 as Or, a6 as G, l as ie, i as q, av as Sa, aw as Cn, V as Cr, at as C, j as Ie, k as ke, aI as Dr, aF as _e, q as qe, al as Ee, b as Dn, W as jt, Y as Ua, R as Rn, ac as Ba, $ as Rr, ag as Mr, t as Fr, n as xr, s as Ur, h as Br, m as Hr } from "./vue-core-DHcoxuim.js";
import { C as Me, _ as Mn, e as Pa, W as Wr, aP as $r, aD as Vr, u as Jt, ay as _a, aL as Ha, w as Gr, aH as qr, d as Kr, aA as Fn, a0 as Yr, D as xn, F as jr, k as zr, b0 as Qr, ak as Xr, a as Jr, r as Zr } from "./element-plus-BHS6vjDl.js";
import { s as Wa, a as $a, W as es, b as Va } from "./simplewebauthn-3qpiAaRi.js";
import { Q as ts, V as as } from "./tanstack-query-CY07rioj.js";
import "./compression-utils-BzBbrBKd.js";
let fc, Ze, fe, nl, Fa, zl, pl, Bt, Tl, nt, cc, gt, Ut, mt, kr, Uc, vr, vl, ra, ss, Bc, Rc, Pt, wa, Nc, Fc, Mc, Oc, xc, Dc, ct, Ft, ye, Ea, Lc, br, Pn, oe, Aa, Cc, J, Ic, K, rl, Se;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);
        new MutationObserver((s)=>{
            for (const r of s)if (r.type === "childList") for (const o of r.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function a(s) {
            const r = {};
            return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
        }
        function n(s) {
            if (s.ep) return;
            s.ep = !0;
            const r = a(s);
            fetch(s.href, r);
        }
    })();
    const He = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3
    }, Ga = {
        debug: He.DEBUG,
        info: He.INFO,
        warn: He.WARN,
        error: He.ERROR
    };
    class ns {
        constructor(){
            this.level = He.INFO, this.setLevel("warn");
        }
        setLevel(t) {
            if (typeof t == "string") {
                const a = t.toLowerCase();
                Ga[a] !== void 0 && (this.level = Ga[a]);
            } else typeof t == "number" && (this.level = t);
        }
        formatMessage(t, a) {
            return `[${new Date().toLocaleTimeString()}] [${t.toUpperCase()}] ${a}`;
        }
        debug(t, ...a) {
            this.level <= He.DEBUG && console.log(this.formatMessage("debug", t), ...a);
        }
        info(t, ...a) {
            this.level <= He.INFO && console.info(this.formatMessage("info", t), ...a);
        }
        warn(t, ...a) {
            this.level <= He.WARN && console.warn(this.formatMessage("warn", t), ...a);
        }
        error(t, ...a) {
            this.level <= He.ERROR && console.error(this.formatMessage("error", t), ...a);
        }
    }
    K = new ns;
    function rs(e = {}) {
        const { immediate: t = !1, onNeedReload: a, onNeedRefresh: n, onOfflineReady: s, onRegistered: r, onRegisteredSW: o, onRegisterError: i } = e;
        let c, u;
        const g = async (d = !0)=>{
            await u;
        };
        async function h() {
            if ("serviceWorker" in navigator) {
                if (c = await se(async ()=>{
                    const { Workbox: d } = await import("./workbox-window.prod.es5-BBnX5xw4.js");
                    return {
                        Workbox: d
                    };
                }, []).then(({ Workbox: d })=>new d("/sw.js", {
                        scope: "/",
                        type: "classic"
                    })).catch((d)=>{
                    i?.(d);
                }), !c) return;
                c.addEventListener("activated", (d)=>{
                    (d.isUpdate || d.isExternal) && (a ? a() : window.location.reload());
                }), c.addEventListener("installed", (d)=>{
                    d.isUpdate || s?.();
                }), c.register({
                    immediate: t
                }).then((d)=>{
                    o ? o("/sw.js", d) : r?.(d);
                }).catch((d)=>{
                    i?.(d);
                });
            }
        }
        return u = h(), g;
    }
    ss = "/logo.svg";
    function os(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
    }
    const zt = typeof window < "u", Ye = (e, t = !1)=>t ? Symbol.for(e) : Symbol(e), is = (e, t, a)=>ls({
            l: e,
            k: t,
            s: a
        }), ls = (e)=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ce = (e)=>typeof e == "number" && isFinite(e), cs = (e)=>Bn(e) === "[object Date]", Ke = (e)=>Bn(e) === "[object RegExp]", Zt = (e)=>B(e) && Object.keys(e).length === 0, be = Object.assign, us = Object.create, Z = (e = null)=>us(e);
    let qa;
    const We = ()=>qa || (qa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Z());
    function Ka(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
    }
    function Ya(e) {
        return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function _s(e) {
        return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, s, r)=>`${s}="${Ya(r)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, s, r)=>`${s}='${Ya(r)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
            /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
            /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
        ].forEach((n)=>{
            e = e.replace(n, "$1javascript&#58;");
        }), e;
    }
    const ds = Object.prototype.hasOwnProperty;
    function Oe(e, t) {
        return ds.call(e, t);
    }
    const ne = Array.isArray, ae = (e)=>typeof e == "function", N = (e)=>typeof e == "string", $ = (e)=>typeof e == "boolean", Y = (e)=>e !== null && typeof e == "object", fs = (e)=>Y(e) && ae(e.then) && ae(e.catch), Un = Object.prototype.toString, Bn = (e)=>Un.call(e), B = (e)=>{
        if (!Y(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return t === null || t.constructor === Object;
    }, ms = (e)=>e == null ? "" : ne(e) || B(e) && e.toString === Un ? JSON.stringify(e, null, 2) : String(e);
    function ps(e, t = "") {
        return e.reduce((a, n, s)=>s === 0 ? a + n : a + t + n, "");
    }
    function ea(e) {
        let t = e;
        return ()=>++t;
    }
    const $t = (e)=>!Y(e) || ne(e);
    function Kt(e, t) {
        if ($t(e) || $t(t)) throw new Error("Invalid value");
        const a = [
            {
                src: e,
                des: t
            }
        ];
        for(; a.length;){
            const { src: n, des: s } = a.pop();
            Object.keys(n).forEach((r)=>{
                r !== "__proto__" && (Y(n[r]) && !Y(s[r]) && (s[r] = Array.isArray(n[r]) ? [] : Z()), $t(s[r]) || $t(n[r]) ? s[r] = n[r] : a.push({
                    src: n[r],
                    des: s[r]
                }));
            });
        }
    }
    function gs(e, t, a) {
        return {
            line: e,
            column: t,
            offset: a
        };
    }
    function Qt(e, t, a) {
        return {
            start: e,
            end: t
        };
    }
    const hs = /\{([0-9a-zA-Z]+)\}/g;
    function Hn(e, ...t) {
        return t.length === 1 && ys(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(hs, (a, n)=>t.hasOwnProperty(n) ? t[n] : "");
    }
    const Wn = Object.assign, ja = (e)=>typeof e == "string", ys = (e)=>e !== null && typeof e == "object";
    function $n(e, t = "") {
        return e.reduce((a, n, s)=>s === 0 ? a + n : a + t + n, "");
    }
    const Ia = {
        USE_MODULO_SYNTAX: 1,
        __EXTEND_POINT__: 2
    }, bs = {
        [Ia.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
    };
    function vs(e, t, ...a) {
        const n = Hn(bs[e], ...a || []), s = {
            message: String(n),
            code: e
        };
        return t && (s.location = t), s;
    }
    const U = {
        EXPECTED_TOKEN: 1,
        INVALID_TOKEN_IN_PLACEHOLDER: 2,
        UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
        UNKNOWN_ESCAPE_SEQUENCE: 4,
        INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
        UNBALANCED_CLOSING_BRACE: 6,
        UNTERMINATED_CLOSING_BRACE: 7,
        EMPTY_PLACEHOLDER: 8,
        NOT_ALLOW_NEST_PLACEHOLDER: 9,
        INVALID_LINKED_FORMAT: 10,
        MUST_HAVE_MESSAGES_IN_PLURAL: 11,
        UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
        UNEXPECTED_EMPTY_LINKED_KEY: 13,
        UNEXPECTED_LEXICAL_ANALYSIS: 14,
        UNHANDLED_CODEGEN_NODE_TYPE: 15,
        UNHANDLED_MINIFIER_NODE_TYPE: 16,
        __EXTEND_POINT__: 17
    }, ws = {
        [U.EXPECTED_TOKEN]: "Expected token: '{0}'",
        [U.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
        [U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
        [U.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
        [U.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
        [U.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
        [U.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
        [U.EMPTY_PLACEHOLDER]: "Empty placeholder",
        [U.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
        [U.INVALID_LINKED_FORMAT]: "Invalid linked format",
        [U.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
        [U.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
        [U.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
        [U.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
        [U.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
        [U.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
    };
    function pt(e, t, a = {}) {
        const { domain: n, messages: s, args: r } = a, o = Hn((s || ws)[e] || "", ...r || []), i = new SyntaxError(String(o));
        return i.code = e, t && (i.location = t), i.domain = n, i;
    }
    function ks(e) {
        throw e;
    }
    const Ue = " ", Es = "\r", we = `
`, Ts = "\u2028", As = "\u2029";
    function Ss(e) {
        const t = e;
        let a = 0, n = 1, s = 1, r = 0;
        const o = (S)=>t[S] === Es && t[S + 1] === we, i = (S)=>t[S] === we, c = (S)=>t[S] === As, u = (S)=>t[S] === Ts, g = (S)=>o(S) || i(S) || c(S) || u(S), h = ()=>a, d = ()=>n, m = ()=>s, f = ()=>r, w = (S)=>o(S) || c(S) || u(S) ? we : t[S], T = ()=>w(a), P = ()=>w(a + r);
        function R() {
            return r = 0, g(a) && (n++, s = 0), o(a) && a++, a++, s++, t[a];
        }
        function y() {
            return o(a + r) && r++, r++, t[a + r];
        }
        function p() {
            a = 0, n = 1, s = 1, r = 0;
        }
        function k(S = 0) {
            r = S;
        }
        function v() {
            const S = a + r;
            for(; S !== a;)R();
            r = 0;
        }
        return {
            index: h,
            line: d,
            column: m,
            peekOffset: f,
            charAt: w,
            currentChar: T,
            currentPeek: P,
            next: R,
            peek: y,
            reset: p,
            resetPeek: k,
            skipToPeek: v
        };
    }
    const Ge = void 0, Ps = ".", za = "'", Is = "tokenizer";
    function Ls(e, t = {}) {
        const a = t.location !== !1, n = Ss(e), s = ()=>n.index(), r = ()=>gs(n.line(), n.column(), n.index()), o = r(), i = s(), c = {
            currentType: 14,
            offset: i,
            startLoc: o,
            endLoc: o,
            lastType: 14,
            lastOffset: i,
            lastStartLoc: o,
            lastEndLoc: o,
            braceNest: 0,
            inLinked: !1,
            text: ""
        }, u = ()=>c, { onError: g } = t;
        function h(l, _, E, ...F) {
            const re = u();
            if (_.column += E, _.offset += E, g) {
                const H = a ? Qt(re.startLoc, _) : null, b = pt(l, H, {
                    domain: Is,
                    args: F
                });
                g(b);
            }
        }
        function d(l, _, E) {
            l.endLoc = r(), l.currentType = _;
            const F = {
                type: _
            };
            return a && (F.loc = Qt(l.startLoc, l.endLoc)), E != null && (F.value = E), F;
        }
        const m = (l)=>d(l, 14);
        function f(l, _) {
            return l.currentChar() === _ ? (l.next(), _) : (h(U.EXPECTED_TOKEN, r(), 0, _), "");
        }
        function w(l) {
            let _ = "";
            for(; l.currentPeek() === Ue || l.currentPeek() === we;)_ += l.currentPeek(), l.peek();
            return _;
        }
        function T(l) {
            const _ = w(l);
            return l.skipToPeek(), _;
        }
        function P(l) {
            if (l === Ge) return !1;
            const _ = l.charCodeAt(0);
            return _ >= 97 && _ <= 122 || _ >= 65 && _ <= 90 || _ === 95;
        }
        function R(l) {
            if (l === Ge) return !1;
            const _ = l.charCodeAt(0);
            return _ >= 48 && _ <= 57;
        }
        function y(l, _) {
            const { currentType: E } = _;
            if (E !== 2) return !1;
            w(l);
            const F = P(l.currentPeek());
            return l.resetPeek(), F;
        }
        function p(l, _) {
            const { currentType: E } = _;
            if (E !== 2) return !1;
            w(l);
            const F = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), re = R(F);
            return l.resetPeek(), re;
        }
        function k(l, _) {
            const { currentType: E } = _;
            if (E !== 2) return !1;
            w(l);
            const F = l.currentPeek() === za;
            return l.resetPeek(), F;
        }
        function v(l, _) {
            const { currentType: E } = _;
            if (E !== 8) return !1;
            w(l);
            const F = l.currentPeek() === ".";
            return l.resetPeek(), F;
        }
        function S(l, _) {
            const { currentType: E } = _;
            if (E !== 9) return !1;
            w(l);
            const F = P(l.currentPeek());
            return l.resetPeek(), F;
        }
        function D(l, _) {
            const { currentType: E } = _;
            if (!(E === 8 || E === 12)) return !1;
            w(l);
            const F = l.currentPeek() === ":";
            return l.resetPeek(), F;
        }
        function L(l, _) {
            const { currentType: E } = _;
            if (E !== 10) return !1;
            const F = ()=>{
                const H = l.currentPeek();
                return H === "{" ? P(l.peek()) : H === "@" || H === "%" || H === "|" || H === ":" || H === "." || H === Ue || !H ? !1 : H === we ? (l.peek(), F()) : W(l, !1);
            }, re = F();
            return l.resetPeek(), re;
        }
        function te(l) {
            w(l);
            const _ = l.currentPeek() === "|";
            return l.resetPeek(), _;
        }
        function ue(l) {
            const _ = w(l), E = l.currentPeek() === "%" && l.peek() === "{";
            return l.resetPeek(), {
                isModulo: E,
                hasSpace: _.length > 0
            };
        }
        function W(l, _ = !0) {
            const E = (re = !1, H = "", b = !1)=>{
                const A = l.currentPeek();
                return A === "{" ? H === "%" ? !1 : re : A === "@" || !A ? H === "%" ? !0 : re : A === "%" ? (l.peek(), E(re, "%", !0)) : A === "|" ? H === "%" || b ? !0 : !(H === Ue || H === we) : A === Ue ? (l.peek(), E(!0, Ue, b)) : A === we ? (l.peek(), E(!0, we, b)) : !0;
            }, F = E();
            return _ && l.resetPeek(), F;
        }
        function de(l, _) {
            const E = l.currentChar();
            return E === Ge ? Ge : _(E) ? (l.next(), E) : null;
        }
        function x(l) {
            const _ = l.charCodeAt(0);
            return _ >= 97 && _ <= 122 || _ >= 65 && _ <= 90 || _ >= 48 && _ <= 57 || _ === 95 || _ === 36;
        }
        function O(l) {
            return de(l, x);
        }
        function V(l) {
            const _ = l.charCodeAt(0);
            return _ >= 97 && _ <= 122 || _ >= 65 && _ <= 90 || _ >= 48 && _ <= 57 || _ === 95 || _ === 36 || _ === 45;
        }
        function X(l) {
            return de(l, V);
        }
        function j(l) {
            const _ = l.charCodeAt(0);
            return _ >= 48 && _ <= 57;
        }
        function ve(l) {
            return de(l, j);
        }
        function Te(l) {
            const _ = l.charCodeAt(0);
            return _ >= 48 && _ <= 57 || _ >= 65 && _ <= 70 || _ >= 97 && _ <= 102;
        }
        function Pe(l) {
            return de(l, Te);
        }
        function Qe(l) {
            let _ = "", E = "";
            for(; _ = ve(l);)E += _;
            return E;
        }
        function ht(l) {
            T(l);
            const _ = l.currentChar();
            return _ !== "%" && h(U.EXPECTED_TOKEN, r(), 0, _), l.next(), "%";
        }
        function rt(l) {
            let _ = "";
            for(;;){
                const E = l.currentChar();
                if (E === "{" || E === "}" || E === "@" || E === "|" || !E) break;
                if (E === "%") if (W(l)) _ += E, l.next();
                else break;
                else if (E === Ue || E === we) if (W(l)) _ += E, l.next();
                else {
                    if (te(l)) break;
                    _ += E, l.next();
                }
                else _ += E, l.next();
            }
            return _;
        }
        function yt(l) {
            T(l);
            let _ = "", E = "";
            for(; _ = X(l);)E += _;
            return l.currentChar() === Ge && h(U.UNTERMINATED_CLOSING_BRACE, r(), 0), E;
        }
        function bt(l) {
            T(l);
            let _ = "";
            return l.currentChar() === "-" ? (l.next(), _ += `-${Qe(l)}`) : _ += Qe(l), l.currentChar() === Ge && h(U.UNTERMINATED_CLOSING_BRACE, r(), 0), _;
        }
        function Ht(l) {
            return l !== za && l !== we;
        }
        function vt(l) {
            T(l), f(l, "'");
            let _ = "", E = "";
            for(; _ = de(l, Ht);)_ === "\\" ? E += wt(l) : E += _;
            const F = l.currentChar();
            return F === we || F === Ge ? (h(U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), F === we && (l.next(), f(l, "'")), E) : (f(l, "'"), E);
        }
        function wt(l) {
            const _ = l.currentChar();
            switch(_){
                case "\\":
                case "'":
                    return l.next(), `\\${_}`;
                case "u":
                    return st(l, _, 4);
                case "U":
                    return st(l, _, 6);
                default:
                    return h(U.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, _), "";
            }
        }
        function st(l, _, E) {
            f(l, _);
            let F = "";
            for(let re = 0; re < E; re++){
                const H = Pe(l);
                if (!H) {
                    h(U.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${_}${F}${l.currentChar()}`);
                    break;
                }
                F += H;
            }
            return `\\${_}${F}`;
        }
        function kt(l) {
            return l !== "{" && l !== "}" && l !== Ue && l !== we;
        }
        function Et(l) {
            T(l);
            let _ = "", E = "";
            for(; _ = de(l, kt);)E += _;
            return E;
        }
        function Tt(l) {
            let _ = "", E = "";
            for(; _ = O(l);)E += _;
            return E;
        }
        function I(l) {
            const _ = (E)=>{
                const F = l.currentChar();
                return F === "{" || F === "%" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Ue ? E : (E += F, l.next(), _(E));
            };
            return _("");
        }
        function z(l) {
            T(l);
            const _ = f(l, "|");
            return T(l), _;
        }
        function ot(l, _) {
            let E = null;
            switch(l.currentChar()){
                case "{":
                    return _.braceNest >= 1 && h(U.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), l.next(), E = d(_, 2, "{"), T(l), _.braceNest++, E;
                case "}":
                    return _.braceNest > 0 && _.currentType === 2 && h(U.EMPTY_PLACEHOLDER, r(), 0), l.next(), E = d(_, 3, "}"), _.braceNest--, _.braceNest > 0 && T(l), _.inLinked && _.braceNest === 0 && (_.inLinked = !1), E;
                case "@":
                    return _.braceNest > 0 && h(U.UNTERMINATED_CLOSING_BRACE, r(), 0), E = it(l, _) || m(_), _.braceNest = 0, E;
                default:
                    {
                        let re = !0, H = !0, b = !0;
                        if (te(l)) return _.braceNest > 0 && h(U.UNTERMINATED_CLOSING_BRACE, r(), 0), E = d(_, 1, z(l)), _.braceNest = 0, _.inLinked = !1, E;
                        if (_.braceNest > 0 && (_.currentType === 5 || _.currentType === 6 || _.currentType === 7)) return h(U.UNTERMINATED_CLOSING_BRACE, r(), 0), _.braceNest = 0, At(l, _);
                        if (re = y(l, _)) return E = d(_, 5, yt(l)), T(l), E;
                        if (H = p(l, _)) return E = d(_, 6, bt(l)), T(l), E;
                        if (b = k(l, _)) return E = d(_, 7, vt(l)), T(l), E;
                        if (!re && !H && !b) return E = d(_, 13, Et(l)), h(U.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, E.value), T(l), E;
                        break;
                    }
            }
            return E;
        }
        function it(l, _) {
            const { currentType: E } = _;
            let F = null;
            const re = l.currentChar();
            switch((E === 8 || E === 9 || E === 12 || E === 10) && (re === we || re === Ue) && h(U.INVALID_LINKED_FORMAT, r(), 0), re){
                case "@":
                    return l.next(), F = d(_, 8, "@"), _.inLinked = !0, F;
                case ".":
                    return T(l), l.next(), d(_, 9, ".");
                case ":":
                    return T(l), l.next(), d(_, 10, ":");
                default:
                    return te(l) ? (F = d(_, 1, z(l)), _.braceNest = 0, _.inLinked = !1, F) : v(l, _) || D(l, _) ? (T(l), it(l, _)) : S(l, _) ? (T(l), d(_, 12, Tt(l))) : L(l, _) ? (T(l), re === "{" ? ot(l, _) || F : d(_, 11, I(l))) : (E === 8 && h(U.INVALID_LINKED_FORMAT, r(), 0), _.braceNest = 0, _.inLinked = !1, At(l, _));
            }
        }
        function At(l, _) {
            let E = {
                type: 14
            };
            if (_.braceNest > 0) return ot(l, _) || m(_);
            if (_.inLinked) return it(l, _) || m(_);
            switch(l.currentChar()){
                case "{":
                    return ot(l, _) || m(_);
                case "}":
                    return h(U.UNBALANCED_CLOSING_BRACE, r(), 0), l.next(), d(_, 3, "}");
                case "@":
                    return it(l, _) || m(_);
                default:
                    {
                        if (te(l)) return E = d(_, 1, z(l)), _.braceNest = 0, _.inLinked = !1, E;
                        const { isModulo: re, hasSpace: H } = ue(l);
                        if (re) return H ? d(_, 0, rt(l)) : d(_, 4, ht(l));
                        if (W(l)) return d(_, 0, rt(l));
                        break;
                    }
            }
            return E;
        }
        function sa() {
            const { currentType: l, offset: _, startLoc: E, endLoc: F } = c;
            return c.lastType = l, c.lastOffset = _, c.lastStartLoc = E, c.lastEndLoc = F, c.offset = s(), c.startLoc = r(), n.currentChar() === Ge ? d(c, 14) : At(n, c);
        }
        return {
            nextToken: sa,
            currentOffset: s,
            currentPosition: r,
            context: u
        };
    }
    const Ns = "parser", Os = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
    function Cs(e, t, a) {
        switch(e){
            case "\\\\":
                return "\\";
            case "\\'":
                return "'";
            default:
                {
                    const n = parseInt(t || a, 16);
                    return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�";
                }
        }
    }
    function Ds(e = {}) {
        const t = e.location !== !1, { onError: a, onWarn: n } = e;
        function s(y, p, k, v, ...S) {
            const D = y.currentPosition();
            if (D.offset += v, D.column += v, a) {
                const L = t ? Qt(k, D) : null, te = pt(p, L, {
                    domain: Ns,
                    args: S
                });
                a(te);
            }
        }
        function r(y, p, k, v, ...S) {
            const D = y.currentPosition();
            if (D.offset += v, D.column += v, n) {
                const L = t ? Qt(k, D) : null;
                n(vs(p, L, S));
            }
        }
        function o(y, p, k) {
            const v = {
                type: y
            };
            return t && (v.start = p, v.end = p, v.loc = {
                start: k,
                end: k
            }), v;
        }
        function i(y, p, k, v) {
            t && (y.end = p, y.loc && (y.loc.end = k));
        }
        function c(y, p) {
            const k = y.context(), v = o(3, k.offset, k.startLoc);
            return v.value = p, i(v, y.currentOffset(), y.currentPosition()), v;
        }
        function u(y, p) {
            const k = y.context(), { lastOffset: v, lastStartLoc: S } = k, D = o(5, v, S);
            return D.index = parseInt(p, 10), y.nextToken(), i(D, y.currentOffset(), y.currentPosition()), D;
        }
        function g(y, p, k) {
            const v = y.context(), { lastOffset: S, lastStartLoc: D } = v, L = o(4, S, D);
            return L.key = p, k === !0 && (L.modulo = !0), y.nextToken(), i(L, y.currentOffset(), y.currentPosition()), L;
        }
        function h(y, p) {
            const k = y.context(), { lastOffset: v, lastStartLoc: S } = k, D = o(9, v, S);
            return D.value = p.replace(Os, Cs), y.nextToken(), i(D, y.currentOffset(), y.currentPosition()), D;
        }
        function d(y) {
            const p = y.nextToken(), k = y.context(), { lastOffset: v, lastStartLoc: S } = k, D = o(8, v, S);
            return p.type !== 12 ? (s(y, U.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), D.value = "", i(D, v, S), {
                nextConsumeToken: p,
                node: D
            }) : (p.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Ne(p)), D.value = p.value || "", i(D, y.currentOffset(), y.currentPosition()), {
                node: D
            });
        }
        function m(y, p) {
            const k = y.context(), v = o(7, k.offset, k.startLoc);
            return v.value = p, i(v, y.currentOffset(), y.currentPosition()), v;
        }
        function f(y) {
            const p = y.context(), k = o(6, p.offset, p.startLoc);
            let v = y.nextToken();
            if (v.type === 9) {
                const S = d(y);
                k.modifier = S.node, v = S.nextConsumeToken || y.nextToken();
            }
            switch(v.type !== 10 && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(v)), v = y.nextToken(), v.type === 2 && (v = y.nextToken()), v.type){
                case 11:
                    v.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(v)), k.key = m(y, v.value || "");
                    break;
                case 5:
                    v.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(v)), k.key = g(y, v.value || "");
                    break;
                case 6:
                    v.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(v)), k.key = u(y, v.value || "");
                    break;
                case 7:
                    v.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(v)), k.key = h(y, v.value || "");
                    break;
                default:
                    {
                        s(y, U.UNEXPECTED_EMPTY_LINKED_KEY, p.lastStartLoc, 0);
                        const S = y.context(), D = o(7, S.offset, S.startLoc);
                        return D.value = "", i(D, S.offset, S.startLoc), k.key = D, i(k, S.offset, S.startLoc), {
                            nextConsumeToken: v,
                            node: k
                        };
                    }
            }
            return i(k, y.currentOffset(), y.currentPosition()), {
                node: k
            };
        }
        function w(y) {
            const p = y.context(), k = p.currentType === 1 ? y.currentOffset() : p.offset, v = p.currentType === 1 ? p.endLoc : p.startLoc, S = o(2, k, v);
            S.items = [];
            let D = null, L = null;
            do {
                const W = D || y.nextToken();
                switch(D = null, W.type){
                    case 0:
                        W.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(W)), S.items.push(c(y, W.value || ""));
                        break;
                    case 6:
                        W.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(W)), S.items.push(u(y, W.value || ""));
                        break;
                    case 4:
                        L = !0;
                        break;
                    case 5:
                        W.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(W)), S.items.push(g(y, W.value || "", !!L)), L && (r(y, Ia.USE_MODULO_SYNTAX, p.lastStartLoc, 0, Ne(W)), L = null);
                        break;
                    case 7:
                        W.value == null && s(y, U.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ne(W)), S.items.push(h(y, W.value || ""));
                        break;
                    case 8:
                        {
                            const de = f(y);
                            S.items.push(de.node), D = de.nextConsumeToken || null;
                            break;
                        }
                }
            }while (p.currentType !== 14 && p.currentType !== 1);
            const te = p.currentType === 1 ? p.lastOffset : y.currentOffset(), ue = p.currentType === 1 ? p.lastEndLoc : y.currentPosition();
            return i(S, te, ue), S;
        }
        function T(y, p, k, v) {
            const S = y.context();
            let D = v.items.length === 0;
            const L = o(1, p, k);
            L.cases = [], L.cases.push(v);
            do {
                const te = w(y);
                D || (D = te.items.length === 0), L.cases.push(te);
            }while (S.currentType !== 14);
            return D && s(y, U.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), i(L, y.currentOffset(), y.currentPosition()), L;
        }
        function P(y) {
            const p = y.context(), { offset: k, startLoc: v } = p, S = w(y);
            return p.currentType === 14 ? S : T(y, k, v, S);
        }
        function R(y) {
            const p = Ls(y, Wn({}, e)), k = p.context(), v = o(0, k.offset, k.startLoc);
            return t && v.loc && (v.loc.source = y), v.body = P(p), e.onCacheKey && (v.cacheKey = e.onCacheKey(y)), k.currentType !== 14 && s(p, U.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, y[k.offset] || ""), i(v, p.currentOffset(), p.currentPosition()), v;
        }
        return {
            parse: R
        };
    }
    function Ne(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "…" : t;
    }
    function Rs(e, t = {}) {
        const a = {
            ast: e,
            helpers: new Set
        };
        return {
            context: ()=>a,
            helper: (r)=>(a.helpers.add(r), r)
        };
    }
    function Qa(e, t) {
        for(let a = 0; a < e.length; a++)La(e[a], t);
    }
    function La(e, t) {
        switch(e.type){
            case 1:
                Qa(e.cases, t), t.helper("plural");
                break;
            case 2:
                Qa(e.items, t);
                break;
            case 6:
                {
                    La(e.key, t), t.helper("linked"), t.helper("type");
                    break;
                }
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break;
        }
    }
    function Ms(e, t = {}) {
        const a = Rs(e);
        a.helper("normalize"), e.body && La(e.body, a);
        const n = a.context();
        e.helpers = Array.from(n.helpers);
    }
    function Fs(e) {
        const t = e.body;
        return t.type === 2 ? Xa(t) : t.cases.forEach((a)=>Xa(a)), e;
    }
    function Xa(e) {
        if (e.items.length === 1) {
            const t = e.items[0];
            (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
        } else {
            const t = [];
            for(let a = 0; a < e.items.length; a++){
                const n = e.items[a];
                if (!(n.type === 3 || n.type === 9) || n.value == null) break;
                t.push(n.value);
            }
            if (t.length === e.items.length) {
                e.static = $n(t);
                for(let a = 0; a < e.items.length; a++){
                    const n = e.items[a];
                    (n.type === 3 || n.type === 9) && delete n.value;
                }
            }
        }
    }
    const xs = "minifier";
    function ut(e) {
        switch(e.t = e.type, e.type){
            case 0:
                {
                    const t = e;
                    ut(t.body), t.b = t.body, delete t.body;
                    break;
                }
            case 1:
                {
                    const t = e, a = t.cases;
                    for(let n = 0; n < a.length; n++)ut(a[n]);
                    t.c = a, delete t.cases;
                    break;
                }
            case 2:
                {
                    const t = e, a = t.items;
                    for(let n = 0; n < a.length; n++)ut(a[n]);
                    t.i = a, delete t.items, t.static && (t.s = t.static, delete t.static);
                    break;
                }
            case 3:
            case 9:
            case 8:
            case 7:
                {
                    const t = e;
                    t.value && (t.v = t.value, delete t.value);
                    break;
                }
            case 6:
                {
                    const t = e;
                    ut(t.key), t.k = t.key, delete t.key, t.modifier && (ut(t.modifier), t.m = t.modifier, delete t.modifier);
                    break;
                }
            case 5:
                {
                    const t = e;
                    t.i = t.index, delete t.index;
                    break;
                }
            case 4:
                {
                    const t = e;
                    t.k = t.key, delete t.key;
                    break;
                }
            default:
                throw pt(U.UNHANDLED_MINIFIER_NODE_TYPE, null, {
                    domain: xs,
                    args: [
                        e.type
                    ]
                });
        }
        delete e.type;
    }
    const Us = "parser";
    function Bs(e, t) {
        const { filename: a, breakLineCode: n, needIndent: s } = t, r = t.location !== !1, o = {
            filename: a,
            code: "",
            column: 1,
            line: 1,
            offset: 0,
            map: void 0,
            breakLineCode: n,
            needIndent: s,
            indentLevel: 0
        };
        r && e.loc && (o.source = e.loc.source);
        const i = ()=>o;
        function c(w, T) {
            o.code += w;
        }
        function u(w, T = !0) {
            const P = T ? n : "";
            c(s ? P + "  ".repeat(w) : P);
        }
        function g(w = !0) {
            const T = ++o.indentLevel;
            w && u(T);
        }
        function h(w = !0) {
            const T = --o.indentLevel;
            w && u(T);
        }
        function d() {
            u(o.indentLevel);
        }
        return {
            context: i,
            push: c,
            indent: g,
            deindent: h,
            newline: d,
            helper: (w)=>`_${w}`,
            needIndent: ()=>o.needIndent
        };
    }
    function Hs(e, t) {
        const { helper: a } = e;
        e.push(`${a("linked")}(`), dt(e, t.key), t.modifier ? (e.push(", "), dt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
    }
    function Ws(e, t) {
        const { helper: a, needIndent: n } = e;
        e.push(`${a("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for(let r = 0; r < s && (dt(e, t.items[r]), r !== s - 1); r++)e.push(", ");
        e.deindent(n()), e.push("])");
    }
    function $s(e, t) {
        const { helper: a, needIndent: n } = e;
        if (t.cases.length > 1) {
            e.push(`${a("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for(let r = 0; r < s && (dt(e, t.cases[r]), r !== s - 1); r++)e.push(", ");
            e.deindent(n()), e.push("])");
        }
    }
    function Vs(e, t) {
        t.body ? dt(e, t.body) : e.push("null");
    }
    function dt(e, t) {
        const { helper: a } = e;
        switch(t.type){
            case 0:
                Vs(e, t);
                break;
            case 1:
                $s(e, t);
                break;
            case 2:
                Ws(e, t);
                break;
            case 6:
                Hs(e, t);
                break;
            case 8:
                e.push(JSON.stringify(t.value), t);
                break;
            case 7:
                e.push(JSON.stringify(t.value), t);
                break;
            case 5:
                e.push(`${a("interpolate")}(${a("list")}(${t.index}))`, t);
                break;
            case 4:
                e.push(`${a("interpolate")}(${a("named")}(${JSON.stringify(t.key)}))`, t);
                break;
            case 9:
                e.push(JSON.stringify(t.value), t);
                break;
            case 3:
                e.push(JSON.stringify(t.value), t);
                break;
            default:
                throw pt(U.UNHANDLED_CODEGEN_NODE_TYPE, null, {
                    domain: Us,
                    args: [
                        t.type
                    ]
                });
        }
    }
    const Gs = (e, t = {})=>{
        const a = ja(t.mode) ? t.mode : "normal", n = ja(t.filename) ? t.filename : "message.intl";
        t.sourceMap;
        const s = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : a !== "arrow", o = e.helpers || [], i = Bs(e, {
            filename: n,
            breakLineCode: s,
            needIndent: r
        });
        i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(r), o.length > 0 && (i.push(`const { ${$n(o.map((g)=>`${g}: _${g}`), ", ")} } = ctx`), i.newline()), i.push("return "), dt(i, e), i.deindent(r), i.push("}"), delete e.helpers;
        const { code: c, map: u } = i.context();
        return {
            ast: e,
            code: c,
            map: u ? u.toJSON() : void 0
        };
    };
    function qs(e, t = {}) {
        const a = Wn({}, t), n = !!a.jit, s = !!a.minify, r = a.optimize == null ? !0 : a.optimize, i = Ds(a).parse(e);
        return n ? (r && Fs(i), s && ut(i), {
            ast: i,
            code: ""
        }) : (Ms(i, a), Gs(i, a));
    }
    function Ks() {
        typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (We().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (We().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (We().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
    }
    function Fe(e) {
        return Y(e) && Na(e) === 0 && (Oe(e, "b") || Oe(e, "body"));
    }
    const Vn = [
        "b",
        "body"
    ];
    function Ys(e) {
        return je(e, Vn);
    }
    const Gn = [
        "c",
        "cases"
    ];
    function js(e) {
        return je(e, Gn, []);
    }
    const qn = [
        "s",
        "static"
    ];
    function zs(e) {
        return je(e, qn);
    }
    const Kn = [
        "i",
        "items"
    ];
    function Qs(e) {
        return je(e, Kn, []);
    }
    const Yn = [
        "t",
        "type"
    ];
    function Na(e) {
        return je(e, Yn);
    }
    const jn = [
        "v",
        "value"
    ];
    function Vt(e, t) {
        const a = je(e, jn);
        if (a != null) return a;
        throw Ot(t);
    }
    const zn = [
        "m",
        "modifier"
    ];
    function Xs(e) {
        return je(e, zn);
    }
    const Qn = [
        "k",
        "key"
    ];
    function Js(e) {
        const t = je(e, Qn);
        if (t) return t;
        throw Ot(6);
    }
    function je(e, t, a) {
        for(let n = 0; n < t.length; n++){
            const s = t[n];
            if (Oe(e, s) && e[s] != null) return e[s];
        }
        return a;
    }
    const Xn = [
        ...Vn,
        ...Gn,
        ...qn,
        ...Kn,
        ...Qn,
        ...zn,
        ...jn,
        ...Yn
    ];
    function Ot(e) {
        return new Error(`unhandled node type: ${e}`);
    }
    const ze = [];
    ze[0] = {
        w: [
            0
        ],
        i: [
            3,
            0
        ],
        "[": [
            4
        ],
        o: [
            7
        ]
    };
    ze[1] = {
        w: [
            1
        ],
        ".": [
            2
        ],
        "[": [
            4
        ],
        o: [
            7
        ]
    };
    ze[2] = {
        w: [
            2
        ],
        i: [
            3,
            0
        ],
        0: [
            3,
            0
        ]
    };
    ze[3] = {
        i: [
            3,
            0
        ],
        0: [
            3,
            0
        ],
        w: [
            1,
            1
        ],
        ".": [
            2,
            1
        ],
        "[": [
            4,
            1
        ],
        o: [
            7,
            1
        ]
    };
    ze[4] = {
        "'": [
            5,
            0
        ],
        '"': [
            6,
            0
        ],
        "[": [
            4,
            2
        ],
        "]": [
            1,
            3
        ],
        o: 8,
        l: [
            4,
            0
        ]
    };
    ze[5] = {
        "'": [
            4,
            0
        ],
        o: 8,
        l: [
            5,
            0
        ]
    };
    ze[6] = {
        '"': [
            4,
            0
        ],
        o: 8,
        l: [
            6,
            0
        ]
    };
    const Zs = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
    function eo(e) {
        return Zs.test(e);
    }
    function to(e) {
        const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
        return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
    }
    function ao(e) {
        if (e == null) return "o";
        switch(e.charCodeAt(0)){
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
                return e;
            case 95:
            case 36:
            case 45:
                return "i";
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "w";
        }
        return "i";
    }
    function no(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : eo(t) ? to(t) : "*" + t;
    }
    function ro(e) {
        const t = [];
        let a = -1, n = 0, s = 0, r, o, i, c, u, g, h;
        const d = [];
        d[0] = ()=>{
            o === void 0 ? o = i : o += i;
        }, d[1] = ()=>{
            o !== void 0 && (t.push(o), o = void 0);
        }, d[2] = ()=>{
            d[0](), s++;
        }, d[3] = ()=>{
            if (s > 0) s--, n = 4, d[0]();
            else {
                if (s = 0, o === void 0 || (o = no(o), o === !1)) return !1;
                d[1]();
            }
        };
        function m() {
            const f = e[a + 1];
            if (n === 5 && f === "'" || n === 6 && f === '"') return a++, i = "\\" + f, d[0](), !0;
        }
        for(; n !== null;)if (a++, r = e[a], !(r === "\\" && m())) {
            if (c = ao(r), h = ze[n], u = h[c] || h.l || 8, u === 8 || (n = u[0], u[1] !== void 0 && (g = d[u[1]], g && (i = r, g() === !1)))) return;
            if (n === 7) return t;
        }
    }
    const Ja = new Map;
    function so(e, t) {
        return Y(e) ? e[t] : null;
    }
    function oo(e, t) {
        if (!Y(e)) return null;
        let a = Ja.get(t);
        if (a || (a = ro(t), a && Ja.set(t, a)), !a) return null;
        const n = a.length;
        let s = e, r = 0;
        for(; r < n;){
            const o = a[r];
            if (Xn.includes(o) && Fe(s)) return null;
            const i = s[o];
            if (i === void 0 || ae(s)) return null;
            s = i, r++;
        }
        return s;
    }
    const io = (e)=>e, lo = (e)=>"", co = "text", uo = (e)=>e.length === 0 ? "" : ps(e), _o = ms;
    function Za(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
    }
    function fo(e) {
        const t = ce(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (ce(e.named.count) || ce(e.named.n)) ? ce(e.named.count) ? e.named.count : ce(e.named.n) ? e.named.n : t : t;
    }
    function mo(e, t) {
        t.count || (t.count = e), t.n || (t.n = e);
    }
    function po(e = {}) {
        const t = e.locale, a = fo(e), n = Y(e.pluralRules) && N(t) && ae(e.pluralRules[t]) ? e.pluralRules[t] : Za, s = Y(e.pluralRules) && N(t) && ae(e.pluralRules[t]) ? Za : void 0, r = (P)=>P[n(a, P.length, s)], o = e.list || [], i = (P)=>o[P], c = e.named || Z();
        ce(e.pluralIndex) && mo(a, c);
        const u = (P)=>c[P];
        function g(P) {
            const R = ae(e.messages) ? e.messages(P) : Y(e.messages) ? e.messages[P] : !1;
            return R || (e.parent ? e.parent.message(P) : lo);
        }
        const h = (P)=>e.modifiers ? e.modifiers[P] : io, d = B(e.processor) && ae(e.processor.normalize) ? e.processor.normalize : uo, m = B(e.processor) && ae(e.processor.interpolate) ? e.processor.interpolate : _o, f = B(e.processor) && N(e.processor.type) ? e.processor.type : co, T = {
            list: i,
            named: u,
            plural: r,
            linked: (P, ...R)=>{
                const [y, p] = R;
                let k = "text", v = "";
                R.length === 1 ? Y(y) ? (v = y.modifier || v, k = y.type || k) : N(y) && (v = y || v) : R.length === 2 && (N(y) && (v = y || v), N(p) && (k = p || k));
                const S = g(P)(T), D = k === "vnode" && ne(S) && v ? S[0] : S;
                return v ? h(v)(D, k) : D;
            },
            message: g,
            type: f,
            interpolate: m,
            normalize: d,
            values: be(Z(), o, c)
        };
        return T;
    }
    let Ct = null;
    function go(e) {
        Ct = e;
    }
    function ho(e, t, a) {
        Ct && Ct.emit("i18n:init", {
            timestamp: Date.now(),
            i18n: e,
            version: t,
            meta: a
        });
    }
    const yo = bo("function:translate");
    function bo(e) {
        return (t)=>Ct && Ct.emit(e, t);
    }
    const vo = Ia.__EXTEND_POINT__, Xe = ea(vo), wo = {
        FALLBACK_TO_TRANSLATE: Xe(),
        CANNOT_FORMAT_NUMBER: Xe(),
        FALLBACK_TO_NUMBER_FORMAT: Xe(),
        CANNOT_FORMAT_DATE: Xe(),
        FALLBACK_TO_DATE_FORMAT: Xe(),
        EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Xe(),
        __EXTEND_POINT__: Xe()
    }, Jn = U.__EXTEND_POINT__, Je = ea(Jn), Ce = {
        INVALID_ARGUMENT: Jn,
        INVALID_DATE_ARGUMENT: Je(),
        INVALID_ISO_DATE_ARGUMENT: Je(),
        NOT_SUPPORT_NON_STRING_MESSAGE: Je(),
        NOT_SUPPORT_LOCALE_PROMISE_VALUE: Je(),
        NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Je(),
        NOT_SUPPORT_LOCALE_TYPE: Je(),
        __EXTEND_POINT__: Je()
    };
    function Re(e) {
        return pt(e, null, void 0);
    }
    function Oa(e, t) {
        return t.locale != null ? en(t.locale) : en(e.locale);
    }
    let oa;
    function en(e) {
        if (N(e)) return e;
        if (ae(e)) {
            if (e.resolvedOnce && oa != null) return oa;
            if (e.constructor.name === "Function") {
                const t = e();
                if (fs(t)) throw Re(Ce.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
                return oa = t;
            } else throw Re(Ce.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
        } else throw Re(Ce.NOT_SUPPORT_LOCALE_TYPE);
    }
    function ko(e, t, a) {
        return [
            ...new Set([
                a,
                ...ne(t) ? t : Y(t) ? Object.keys(t) : N(t) ? [
                    t
                ] : [
                    a
                ]
            ])
        ];
    }
    function Zn(e, t, a) {
        const n = N(a) ? a : ft, s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let r = s.__localeChainCache.get(n);
        if (!r) {
            r = [];
            let o = [
                a
            ];
            for(; ne(o);)o = tn(r, o, t);
            const i = ne(t) || !B(t) ? t : t.default ? t.default : null;
            o = N(i) ? [
                i
            ] : i, ne(o) && tn(r, o, !1), s.__localeChainCache.set(n, r);
        }
        return r;
    }
    function tn(e, t, a) {
        let n = !0;
        for(let s = 0; s < t.length && $(n); s++){
            const r = t[s];
            N(r) && (n = Eo(e, t[s], a));
        }
        return n;
    }
    function Eo(e, t, a) {
        let n;
        const s = t.split("-");
        do {
            const r = s.join("-");
            n = To(e, r, a), s.splice(-1, 1);
        }while (s.length && n === !0);
        return n;
    }
    function To(e, t, a) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (ne(a) || B(a)) && a[s] && (n = a[s]);
        }
        return n;
    }
    const Ao = "9.14.5", ta = -1, ft = "en-US", an = "", nn = (e)=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
    function So() {
        return {
            upper: (e, t)=>t === "text" && N(e) ? e.toUpperCase() : t === "vnode" && Y(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t)=>t === "text" && N(e) ? e.toLowerCase() : t === "vnode" && Y(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t)=>t === "text" && N(e) ? nn(e) : t === "vnode" && Y(e) && "__v_isVNode" in e ? nn(e.children) : e
        };
    }
    let er;
    function rn(e) {
        er = e;
    }
    let tr;
    function Po(e) {
        tr = e;
    }
    let ar;
    function Io(e) {
        ar = e;
    }
    let nr = null;
    const Lo = (e)=>{
        nr = e;
    }, No = ()=>nr;
    let rr = null;
    const sn = (e)=>{
        rr = e;
    }, Oo = ()=>rr;
    let on = 0;
    function Co(e = {}) {
        const t = ae(e.onWarn) ? e.onWarn : os, a = N(e.version) ? e.version : Ao, n = N(e.locale) || ae(e.locale) ? e.locale : ft, s = ae(n) ? ft : n, r = ne(e.fallbackLocale) || B(e.fallbackLocale) || N(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = B(e.messages) ? e.messages : ia(s), i = B(e.datetimeFormats) ? e.datetimeFormats : ia(s), c = B(e.numberFormats) ? e.numberFormats : ia(s), u = be(Z(), e.modifiers, So()), g = e.pluralRules || Z(), h = ae(e.missing) ? e.missing : null, d = $(e.missingWarn) || Ke(e.missingWarn) ? e.missingWarn : !0, m = $(e.fallbackWarn) || Ke(e.fallbackWarn) ? e.fallbackWarn : !0, f = !!e.fallbackFormat, w = !!e.unresolving, T = ae(e.postTranslation) ? e.postTranslation : null, P = B(e.processor) ? e.processor : null, R = $(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, p = ae(e.messageCompiler) ? e.messageCompiler : er, k = ae(e.messageResolver) ? e.messageResolver : tr || so, v = ae(e.localeFallbacker) ? e.localeFallbacker : ar || ko, S = Y(e.fallbackContext) ? e.fallbackContext : void 0, D = e, L = Y(D.__datetimeFormatters) ? D.__datetimeFormatters : new Map, te = Y(D.__numberFormatters) ? D.__numberFormatters : new Map, ue = Y(D.__meta) ? D.__meta : {};
        on++;
        const W = {
            version: a,
            cid: on,
            locale: n,
            fallbackLocale: r,
            messages: o,
            modifiers: u,
            pluralRules: g,
            missing: h,
            missingWarn: d,
            fallbackWarn: m,
            fallbackFormat: f,
            unresolving: w,
            postTranslation: T,
            processor: P,
            warnHtmlMessage: R,
            escapeParameter: y,
            messageCompiler: p,
            messageResolver: k,
            localeFallbacker: v,
            fallbackContext: S,
            onWarn: t,
            __meta: ue
        };
        return W.datetimeFormats = i, W.numberFormats = c, W.__datetimeFormatters = L, W.__numberFormatters = te, __INTLIFY_PROD_DEVTOOLS__ && ho(W, a, ue), W;
    }
    const ia = (e)=>({
            [e]: Z()
        });
    function Ca(e, t, a, n, s) {
        const { missing: r, onWarn: o } = e;
        if (r !== null) {
            const i = r(e, a, t, s);
            return N(i) ? i : t;
        } else return t;
    }
    function St(e, t, a) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, a, t);
    }
    function Do(e, t) {
        return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
    }
    function Ro(e, t) {
        const a = t.indexOf(e);
        if (a === -1) return !1;
        for(let n = a + 1; n < t.length; n++)if (Do(e, t[n])) return !0;
        return !1;
    }
    function la(e) {
        return (a)=>Mo(a, e);
    }
    function Mo(e, t) {
        const a = Ys(t);
        if (a == null) throw Ot(0);
        if (Na(a) === 1) {
            const r = js(a);
            return e.plural(r.reduce((o, i)=>[
                    ...o,
                    ln(e, i)
                ], []));
        } else return ln(e, a);
    }
    function ln(e, t) {
        const a = zs(t);
        if (a != null) return e.type === "text" ? a : e.normalize([
            a
        ]);
        {
            const n = Qs(t).reduce((s, r)=>[
                    ...s,
                    da(e, r)
                ], []);
            return e.normalize(n);
        }
    }
    function da(e, t) {
        const a = Na(t);
        switch(a){
            case 3:
                return Vt(t, a);
            case 9:
                return Vt(t, a);
            case 4:
                {
                    const n = t;
                    if (Oe(n, "k") && n.k) return e.interpolate(e.named(n.k));
                    if (Oe(n, "key") && n.key) return e.interpolate(e.named(n.key));
                    throw Ot(a);
                }
            case 5:
                {
                    const n = t;
                    if (Oe(n, "i") && ce(n.i)) return e.interpolate(e.list(n.i));
                    if (Oe(n, "index") && ce(n.index)) return e.interpolate(e.list(n.index));
                    throw Ot(a);
                }
            case 6:
                {
                    const n = t, s = Xs(n), r = Js(n);
                    return e.linked(da(e, r), s ? da(e, s) : void 0, e.type);
                }
            case 7:
                return Vt(t, a);
            case 8:
                return Vt(t, a);
            default:
                throw new Error(`unhandled node on format message part: ${a}`);
        }
    }
    const sr = (e)=>e;
    let _t = Z();
    function or(e, t = {}) {
        let a = !1;
        const n = t.onError || ks;
        return t.onError = (s)=>{
            a = !0, n(s);
        }, {
            ...qs(e, t),
            detectError: a
        };
    }
    const Fo = (e, t)=>{
        if (!N(e)) throw Re(Ce.NOT_SUPPORT_NON_STRING_MESSAGE);
        {
            $(t.warnHtmlMessage) && t.warnHtmlMessage;
            const n = (t.onCacheKey || sr)(e), s = _t[n];
            if (s) return s;
            const { code: r, detectError: o } = or(e, t), i = new Function(`return ${r}`)();
            return o ? i : _t[n] = i;
        }
    };
    function xo(e, t) {
        if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && N(e)) {
            $(t.warnHtmlMessage) && t.warnHtmlMessage;
            const n = (t.onCacheKey || sr)(e), s = _t[n];
            if (s) return s;
            const { ast: r, detectError: o } = or(e, {
                ...t,
                location: !1,
                jit: !0
            }), i = la(r);
            return o ? i : _t[n] = i;
        } else {
            const a = e.cacheKey;
            if (a) {
                const n = _t[a];
                return n || (_t[a] = la(e));
            } else return la(e);
        }
    }
    const cn = ()=>"", Le = (e)=>ae(e);
    function un(e, ...t) {
        const { fallbackFormat: a, postTranslation: n, unresolving: s, messageCompiler: r, fallbackLocale: o, messages: i } = e, [c, u] = fa(...t), g = $(u.missingWarn) ? u.missingWarn : e.missingWarn, h = $(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, d = $(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, m = !!u.resolvedMessage, f = N(u.default) || $(u.default) ? $(u.default) ? r ? c : ()=>c : u.default : a ? r ? c : ()=>c : "", w = a || f !== "", T = Oa(e, u);
        d && Uo(u);
        let [P, R, y] = m ? [
            c,
            T,
            i[T] || Z()
        ] : ir(e, c, T, o, h, g), p = P, k = c;
        if (!m && !(N(p) || Fe(p) || Le(p)) && w && (p = f, k = p), !m && (!(N(p) || Fe(p) || Le(p)) || !N(R))) return s ? ta : c;
        let v = !1;
        const S = ()=>{
            v = !0;
        }, D = Le(p) ? p : lr(e, c, R, p, k, S);
        if (v) return p;
        const L = Wo(e, R, y, u), te = po(L), ue = Bo(e, D, te);
        let W = n ? n(ue, c) : ue;
        if (d && N(W) && (W = _s(W)), __INTLIFY_PROD_DEVTOOLS__) {
            const de = {
                timestamp: Date.now(),
                key: N(c) ? c : Le(p) ? p.key : "",
                locale: R || (Le(p) ? p.locale : ""),
                format: N(p) ? p : Le(p) ? p.source : "",
                message: W
            };
            de.meta = be({}, e.__meta, No() || {}), yo(de);
        }
        return W;
    }
    function Uo(e) {
        ne(e.list) ? e.list = e.list.map((t)=>N(t) ? Ka(t) : t) : Y(e.named) && Object.keys(e.named).forEach((t)=>{
            N(e.named[t]) && (e.named[t] = Ka(e.named[t]));
        });
    }
    function ir(e, t, a, n, s, r) {
        const { messages: o, onWarn: i, messageResolver: c, localeFallbacker: u } = e, g = u(e, n, a);
        let h = Z(), d, m = null;
        const f = "translate";
        for(let w = 0; w < g.length && (d = g[w], h = o[d] || Z(), (m = c(h, t)) === null && (m = h[t]), !(N(m) || Fe(m) || Le(m))); w++)if (!Ro(d, g)) {
            const T = Ca(e, t, d, r, f);
            T !== t && (m = T);
        }
        return [
            m,
            d,
            h
        ];
    }
    function lr(e, t, a, n, s, r) {
        const { messageCompiler: o, warnHtmlMessage: i } = e;
        if (Le(n)) {
            const u = n;
            return u.locale = u.locale || a, u.key = u.key || t, u;
        }
        if (o == null) {
            const u = (()=>n);
            return u.locale = a, u.key = t, u;
        }
        const c = o(n, Ho(e, a, s, n, i, r));
        return c.locale = a, c.key = t, c.source = n, c;
    }
    function Bo(e, t, a) {
        return t(a);
    }
    function fa(...e) {
        const [t, a, n] = e, s = Z();
        if (!N(t) && !ce(t) && !Le(t) && !Fe(t)) throw Re(Ce.INVALID_ARGUMENT);
        const r = ce(t) ? String(t) : (Le(t), t);
        return ce(a) ? s.plural = a : N(a) ? s.default = a : B(a) && !Zt(a) ? s.named = a : ne(a) && (s.list = a), ce(n) ? s.plural = n : N(n) ? s.default = n : B(n) && be(s, n), [
            r,
            s
        ];
    }
    function Ho(e, t, a, n, s, r) {
        return {
            locale: t,
            key: a,
            warnHtmlMessage: s,
            onError: (o)=>{
                throw r && r(o), o;
            },
            onCacheKey: (o)=>is(t, a, o)
        };
    }
    function Wo(e, t, a, n) {
        const { modifiers: s, pluralRules: r, messageResolver: o, fallbackLocale: i, fallbackWarn: c, missingWarn: u, fallbackContext: g } = e, d = {
            locale: t,
            modifiers: s,
            pluralRules: r,
            messages: (m)=>{
                let f = o(a, m);
                if (f == null && g) {
                    const [, , w] = ir(g, m, t, i, c, u);
                    f = o(w, m);
                }
                if (N(f) || Fe(f)) {
                    let w = !1;
                    const P = lr(e, m, t, f, m, ()=>{
                        w = !0;
                    });
                    return w ? cn : P;
                } else return Le(f) ? f : cn;
            }
        };
        return e.processor && (d.processor = e.processor), n.list && (d.list = n.list), n.named && (d.named = n.named), ce(n.plural) && (d.pluralIndex = n.plural), d;
    }
    function _n(e, ...t) {
        const { datetimeFormats: a, unresolving: n, fallbackLocale: s, onWarn: r, localeFallbacker: o } = e, { __datetimeFormatters: i } = e, [c, u, g, h] = ma(...t), d = $(g.missingWarn) ? g.missingWarn : e.missingWarn;
        $(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const m = !!g.part, f = Oa(e, g), w = o(e, s, f);
        if (!N(c) || c === "") return new Intl.DateTimeFormat(f, h).format(u);
        let T = {}, P, R = null;
        const y = "datetime format";
        for(let v = 0; v < w.length && (P = w[v], T = a[P] || {}, R = T[c], !B(R)); v++)Ca(e, c, P, d, y);
        if (!B(R) || !N(P)) return n ? ta : c;
        let p = `${P}__${c}`;
        Zt(h) || (p = `${p}__${JSON.stringify(h)}`);
        let k = i.get(p);
        return k || (k = new Intl.DateTimeFormat(P, be({}, R, h)), i.set(p, k)), m ? k.formatToParts(u) : k.format(u);
    }
    const cr = [
        "localeMatcher",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "formatMatcher",
        "hour12",
        "timeZone",
        "dateStyle",
        "timeStyle",
        "calendar",
        "dayPeriod",
        "numberingSystem",
        "hourCycle",
        "fractionalSecondDigits"
    ];
    function ma(...e) {
        const [t, a, n, s] = e, r = Z();
        let o = Z(), i;
        if (N(t)) {
            const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!c) throw Re(Ce.INVALID_ISO_DATE_ARGUMENT);
            const u = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
            i = new Date(u);
            try {
                i.toISOString();
            } catch  {
                throw Re(Ce.INVALID_ISO_DATE_ARGUMENT);
            }
        } else if (cs(t)) {
            if (isNaN(t.getTime())) throw Re(Ce.INVALID_DATE_ARGUMENT);
            i = t;
        } else if (ce(t)) i = t;
        else throw Re(Ce.INVALID_ARGUMENT);
        return N(a) ? r.key = a : B(a) && Object.keys(a).forEach((c)=>{
            cr.includes(c) ? o[c] = a[c] : r[c] = a[c];
        }), N(n) ? r.locale = n : B(n) && (o = n), B(s) && (o = s), [
            r.key || "",
            i,
            r,
            o
        ];
    }
    function dn(e, t, a) {
        const n = e;
        for(const s in a){
            const r = `${t}__${s}`;
            n.__datetimeFormatters.has(r) && n.__datetimeFormatters.delete(r);
        }
    }
    function fn(e, ...t) {
        const { numberFormats: a, unresolving: n, fallbackLocale: s, onWarn: r, localeFallbacker: o } = e, { __numberFormatters: i } = e, [c, u, g, h] = pa(...t), d = $(g.missingWarn) ? g.missingWarn : e.missingWarn;
        $(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const m = !!g.part, f = Oa(e, g), w = o(e, s, f);
        if (!N(c) || c === "") return new Intl.NumberFormat(f, h).format(u);
        let T = {}, P, R = null;
        const y = "number format";
        for(let v = 0; v < w.length && (P = w[v], T = a[P] || {}, R = T[c], !B(R)); v++)Ca(e, c, P, d, y);
        if (!B(R) || !N(P)) return n ? ta : c;
        let p = `${P}__${c}`;
        Zt(h) || (p = `${p}__${JSON.stringify(h)}`);
        let k = i.get(p);
        return k || (k = new Intl.NumberFormat(P, be({}, R, h)), i.set(p, k)), m ? k.formatToParts(u) : k.format(u);
    }
    const ur = [
        "localeMatcher",
        "style",
        "currency",
        "currencyDisplay",
        "currencySign",
        "useGrouping",
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "compactDisplay",
        "notation",
        "signDisplay",
        "unit",
        "unitDisplay",
        "roundingMode",
        "roundingPriority",
        "roundingIncrement",
        "trailingZeroDisplay"
    ];
    function pa(...e) {
        const [t, a, n, s] = e, r = Z();
        let o = Z();
        if (!ce(t)) throw Re(Ce.INVALID_ARGUMENT);
        const i = t;
        return N(a) ? r.key = a : B(a) && Object.keys(a).forEach((c)=>{
            ur.includes(c) ? o[c] = a[c] : r[c] = a[c];
        }), N(n) ? r.locale = n : B(n) && (o = n), B(s) && (o = s), [
            r.key || "",
            i,
            r,
            o
        ];
    }
    function mn(e, t, a) {
        const n = e;
        for(const s in a){
            const r = `${t}__${s}`;
            n.__numberFormatters.has(r) && n.__numberFormatters.delete(r);
        }
    }
    Ks();
    const $o = "9.14.5";
    function Vo() {
        typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (We().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (We().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (We().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (We().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (We().__INTLIFY_PROD_DEVTOOLS__ = !1);
    }
    const Go = wo.__EXTEND_POINT__, Be = ea(Go);
    Be(), Be(), Be(), Be(), Be(), Be(), Be(), Be(), Be();
    const _r = Ce.__EXTEND_POINT__, Ae = ea(_r), pe = {
        UNEXPECTED_RETURN_TYPE: _r,
        INVALID_ARGUMENT: Ae(),
        MUST_BE_CALL_SETUP_TOP: Ae(),
        NOT_INSTALLED: Ae(),
        NOT_AVAILABLE_IN_LEGACY_MODE: Ae(),
        REQUIRED_VALUE: Ae(),
        INVALID_VALUE: Ae(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ae(),
        NOT_INSTALLED_WITH_PROVIDE: Ae(),
        UNEXPECTED_ERROR: Ae(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: Ae(),
        BRIDGE_SUPPORT_VUE_2_ONLY: Ae(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ae(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ae(),
        __EXTEND_POINT__: Ae()
    };
    function he(e, ...t) {
        return pt(e, null, void 0);
    }
    const ga = Ye("__translateVNode"), ha = Ye("__datetimeParts"), ya = Ye("__numberParts"), dr = Ye("__setPluralRules"), fr = Ye("__injectWithOption"), ba = Ye("__dispose");
    function Dt(e) {
        if (!Y(e) || Fe(e)) return e;
        for(const t in e)if (Oe(e, t)) if (!t.includes(".")) Y(e[t]) && Dt(e[t]);
        else {
            const a = t.split("."), n = a.length - 1;
            let s = e, r = !1;
            for(let o = 0; o < n; o++){
                if (a[o] === "__proto__") throw new Error(`unsafe key: ${a[o]}`);
                if (a[o] in s || (s[a[o]] = Z()), !Y(s[a[o]])) {
                    r = !0;
                    break;
                }
                s = s[a[o]];
            }
            if (r || (Fe(s) ? Xn.includes(a[n]) || delete e[t] : (s[a[n]] = e[t], delete e[t])), !Fe(s)) {
                const o = s[a[n]];
                Y(o) && Dt(o);
            }
        }
        return e;
    }
    function aa(e, t) {
        const { messages: a, __i18n: n, messageResolver: s, flatJson: r } = t, o = B(a) ? a : ne(n) ? Z() : {
            [e]: Z()
        };
        if (ne(n) && n.forEach((i)=>{
            if ("locale" in i && "resource" in i) {
                const { locale: c, resource: u } = i;
                c ? (o[c] = o[c] || Z(), Kt(u, o[c])) : Kt(u, o);
            } else N(i) && Kt(JSON.parse(i), o);
        }), s == null && r) for(const i in o)Oe(o, i) && Dt(o[i]);
        return o;
    }
    function mr(e) {
        return e.type;
    }
    function pr(e, t, a) {
        let n = Y(t.messages) ? t.messages : Z();
        "__i18nGlobal" in a && (n = aa(e.locale.value, {
            messages: n,
            __i18n: a.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach((r)=>{
            e.mergeLocaleMessage(r, n[r]);
        });
        {
            if (Y(t.datetimeFormats)) {
                const r = Object.keys(t.datetimeFormats);
                r.length && r.forEach((o)=>{
                    e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
                });
            }
            if (Y(t.numberFormats)) {
                const r = Object.keys(t.numberFormats);
                r.length && r.forEach((o)=>{
                    e.mergeNumberFormat(o, t.numberFormats[o]);
                });
            }
        }
    }
    function pn(e) {
        return Q(Nr, null, e, 0);
    }
    const gn = "__INTLIFY_META__", hn = ()=>[], qo = ()=>!1;
    let yn = 0;
    function bn(e) {
        return ((t, a, n, s)=>e(a, n, Nt() || void 0, s));
    }
    const Ko = ()=>{
        const e = Nt();
        let t = null;
        return e && (t = mr(e)[gn]) ? {
            [gn]: t
        } : null;
    };
    function Da(e = {}, t) {
        const { __root: a, __injectWithOption: n } = e, s = a === void 0, r = e.flatJson, o = zt ? M : Nn, i = !!e.translateExistCompatible;
        let c = $(e.inheritLocale) ? e.inheritLocale : !0;
        const u = o(a && c ? a.locale.value : N(e.locale) ? e.locale : ft), g = o(a && c ? a.fallbackLocale.value : N(e.fallbackLocale) || ne(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value), h = o(aa(u.value, e)), d = o(B(e.datetimeFormats) ? e.datetimeFormats : {
            [u.value]: {}
        }), m = o(B(e.numberFormats) ? e.numberFormats : {
            [u.value]: {}
        });
        let f = a ? a.missingWarn : $(e.missingWarn) || Ke(e.missingWarn) ? e.missingWarn : !0, w = a ? a.fallbackWarn : $(e.fallbackWarn) || Ke(e.fallbackWarn) ? e.fallbackWarn : !0, T = a ? a.fallbackRoot : $(e.fallbackRoot) ? e.fallbackRoot : !0, P = !!e.fallbackFormat, R = ae(e.missing) ? e.missing : null, y = ae(e.missing) ? bn(e.missing) : null, p = ae(e.postTranslation) ? e.postTranslation : null, k = a ? a.warnHtmlMessage : $(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter;
        const S = a ? a.modifiers : B(e.modifiers) ? e.modifiers : {};
        let D = e.pluralRules || a && a.pluralRules, L;
        L = (()=>{
            s && sn(null);
            const b = {
                version: $o,
                locale: u.value,
                fallbackLocale: g.value,
                messages: h.value,
                modifiers: S,
                pluralRules: D,
                missing: y === null ? void 0 : y,
                missingWarn: f,
                fallbackWarn: w,
                fallbackFormat: P,
                unresolving: !0,
                postTranslation: p === null ? void 0 : p,
                warnHtmlMessage: k,
                escapeParameter: v,
                messageResolver: e.messageResolver,
                messageCompiler: e.messageCompiler,
                __meta: {
                    framework: "vue"
                }
            };
            b.datetimeFormats = d.value, b.numberFormats = m.value, b.__datetimeFormatters = B(L) ? L.__datetimeFormatters : void 0, b.__numberFormatters = B(L) ? L.__numberFormatters : void 0;
            const A = Co(b);
            return s && sn(A), A;
        })(), St(L, u.value, g.value);
        function ue() {
            return [
                u.value,
                g.value,
                h.value,
                d.value,
                m.value
            ];
        }
        const W = me({
            get: ()=>u.value,
            set: (b)=>{
                u.value = b, L.locale = u.value;
            }
        }), de = me({
            get: ()=>g.value,
            set: (b)=>{
                g.value = b, L.fallbackLocale = g.value, St(L, u.value, b);
            }
        }), x = me(()=>h.value), O = me(()=>d.value), V = me(()=>m.value);
        function X() {
            return ae(p) ? p : null;
        }
        function j(b) {
            p = b, L.postTranslation = b;
        }
        function ve() {
            return R;
        }
        function Te(b) {
            b !== null && (y = bn(b)), R = b, L.missing = y;
        }
        const Pe = (b, A, ee, le, Ve, Wt)=>{
            ue();
            let lt;
            try {
                __INTLIFY_PROD_DEVTOOLS__, s || (L.fallbackContext = a ? Oo() : void 0), lt = b(L);
            } finally{
                __INTLIFY_PROD_DEVTOOLS__, s || (L.fallbackContext = void 0);
            }
            if (ee !== "translate exists" && ce(lt) && lt === ta || ee === "translate exists" && !lt) {
                const [Ar, wc] = A();
                return a && T ? le(a) : Ve(Ar);
            } else {
                if (Wt(lt)) return lt;
                throw he(pe.UNEXPECTED_RETURN_TYPE);
            }
        };
        function Qe(...b) {
            return Pe((A)=>Reflect.apply(un, null, [
                    A,
                    ...b
                ]), ()=>fa(...b), "translate", (A)=>Reflect.apply(A.t, A, [
                    ...b
                ]), (A)=>A, (A)=>N(A));
        }
        function ht(...b) {
            const [A, ee, le] = b;
            if (le && !Y(le)) throw he(pe.INVALID_ARGUMENT);
            return Qe(A, ee, be({
                resolvedMessage: !0
            }, le || {}));
        }
        function rt(...b) {
            return Pe((A)=>Reflect.apply(_n, null, [
                    A,
                    ...b
                ]), ()=>ma(...b), "datetime format", (A)=>Reflect.apply(A.d, A, [
                    ...b
                ]), ()=>an, (A)=>N(A));
        }
        function yt(...b) {
            return Pe((A)=>Reflect.apply(fn, null, [
                    A,
                    ...b
                ]), ()=>pa(...b), "number format", (A)=>Reflect.apply(A.n, A, [
                    ...b
                ]), ()=>an, (A)=>N(A));
        }
        function bt(b) {
            return b.map((A)=>N(A) || ce(A) || $(A) ? pn(String(A)) : A);
        }
        const vt = {
            normalize: bt,
            interpolate: (b)=>b,
            type: "vnode"
        };
        function wt(...b) {
            return Pe((A)=>{
                let ee;
                const le = A;
                try {
                    le.processor = vt, ee = Reflect.apply(un, null, [
                        le,
                        ...b
                    ]);
                } finally{
                    le.processor = null;
                }
                return ee;
            }, ()=>fa(...b), "translate", (A)=>A[ga](...b), (A)=>[
                    pn(A)
                ], (A)=>ne(A));
        }
        function st(...b) {
            return Pe((A)=>Reflect.apply(fn, null, [
                    A,
                    ...b
                ]), ()=>pa(...b), "number format", (A)=>A[ya](...b), hn, (A)=>N(A) || ne(A));
        }
        function kt(...b) {
            return Pe((A)=>Reflect.apply(_n, null, [
                    A,
                    ...b
                ]), ()=>ma(...b), "datetime format", (A)=>A[ha](...b), hn, (A)=>N(A) || ne(A));
        }
        function Et(b) {
            D = b, L.pluralRules = D;
        }
        function Tt(b, A) {
            return Pe(()=>{
                if (!b) return !1;
                const ee = N(A) ? A : u.value, le = ot(ee), Ve = L.messageResolver(le, b);
                return i ? Ve != null : Fe(Ve) || Le(Ve) || N(Ve);
            }, ()=>[
                    b
                ], "translate exists", (ee)=>Reflect.apply(ee.te, ee, [
                    b,
                    A
                ]), qo, (ee)=>$(ee));
        }
        function I(b) {
            let A = null;
            const ee = Zn(L, g.value, u.value);
            for(let le = 0; le < ee.length; le++){
                const Ve = h.value[ee[le]] || {}, Wt = L.messageResolver(Ve, b);
                if (Wt != null) {
                    A = Wt;
                    break;
                }
            }
            return A;
        }
        function z(b) {
            const A = I(b);
            return A ?? (a ? a.tm(b) || {} : {});
        }
        function ot(b) {
            return h.value[b] || {};
        }
        function it(b, A) {
            if (r) {
                const ee = {
                    [b]: A
                };
                for(const le in ee)Oe(ee, le) && Dt(ee[le]);
                A = ee[b];
            }
            h.value[b] = A, L.messages = h.value;
        }
        function At(b, A) {
            h.value[b] = h.value[b] || {};
            const ee = {
                [b]: A
            };
            if (r) for(const le in ee)Oe(ee, le) && Dt(ee[le]);
            A = ee[b], Kt(A, h.value[b]), L.messages = h.value;
        }
        function sa(b) {
            return d.value[b] || {};
        }
        function l(b, A) {
            d.value[b] = A, L.datetimeFormats = d.value, dn(L, b, A);
        }
        function _(b, A) {
            d.value[b] = be(d.value[b] || {}, A), L.datetimeFormats = d.value, dn(L, b, A);
        }
        function E(b) {
            return m.value[b] || {};
        }
        function F(b, A) {
            m.value[b] = A, L.numberFormats = m.value, mn(L, b, A);
        }
        function re(b, A) {
            m.value[b] = be(m.value[b] || {}, A), L.numberFormats = m.value, mn(L, b, A);
        }
        yn++, a && zt && (De(a.locale, (b)=>{
            c && (u.value = b, L.locale = b, St(L, u.value, g.value));
        }), De(a.fallbackLocale, (b)=>{
            c && (g.value = b, L.fallbackLocale = b, St(L, u.value, g.value));
        }));
        const H = {
            id: yn,
            locale: W,
            fallbackLocale: de,
            get inheritLocale () {
                return c;
            },
            set inheritLocale (b){
                c = b, b && a && (u.value = a.locale.value, g.value = a.fallbackLocale.value, St(L, u.value, g.value));
            },
            get availableLocales () {
                return Object.keys(h.value).sort();
            },
            messages: x,
            get modifiers () {
                return S;
            },
            get pluralRules () {
                return D || {};
            },
            get isGlobal () {
                return s;
            },
            get missingWarn () {
                return f;
            },
            set missingWarn (b){
                f = b, L.missingWarn = f;
            },
            get fallbackWarn () {
                return w;
            },
            set fallbackWarn (b){
                w = b, L.fallbackWarn = w;
            },
            get fallbackRoot () {
                return T;
            },
            set fallbackRoot (b){
                T = b;
            },
            get fallbackFormat () {
                return P;
            },
            set fallbackFormat (b){
                P = b, L.fallbackFormat = P;
            },
            get warnHtmlMessage () {
                return k;
            },
            set warnHtmlMessage (b){
                k = b, L.warnHtmlMessage = b;
            },
            get escapeParameter () {
                return v;
            },
            set escapeParameter (b){
                v = b, L.escapeParameter = b;
            },
            t: Qe,
            getLocaleMessage: ot,
            setLocaleMessage: it,
            mergeLocaleMessage: At,
            getPostTranslationHandler: X,
            setPostTranslationHandler: j,
            getMissingHandler: ve,
            setMissingHandler: Te,
            [dr]: Et
        };
        return H.datetimeFormats = O, H.numberFormats = V, H.rt = ht, H.te = Tt, H.tm = z, H.d = rt, H.n = yt, H.getDateTimeFormat = sa, H.setDateTimeFormat = l, H.mergeDateTimeFormat = _, H.getNumberFormat = E, H.setNumberFormat = F, H.mergeNumberFormat = re, H[fr] = n, H[ga] = wt, H[ha] = kt, H[ya] = st, H;
    }
    function Yo(e) {
        const t = N(e.locale) ? e.locale : ft, a = N(e.fallbackLocale) || ne(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, n = ae(e.missing) ? e.missing : void 0, s = $(e.silentTranslationWarn) || Ke(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, r = $(e.silentFallbackWarn) || Ke(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = $(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, c = B(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, g = ae(e.postTranslation) ? e.postTranslation : void 0, h = N(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, d = !!e.escapeParameterHtml, m = $(e.sync) ? e.sync : !0;
        let f = e.messages;
        if (B(e.sharedMessages)) {
            const v = e.sharedMessages;
            f = Object.keys(v).reduce((D, L)=>{
                const te = D[L] || (D[L] = {});
                return be(te, v[L]), D;
            }, f || {});
        }
        const { __i18n: w, __root: T, __injectWithOption: P } = e, R = e.datetimeFormats, y = e.numberFormats, p = e.flatJson, k = e.translateExistCompatible;
        return {
            locale: t,
            fallbackLocale: a,
            messages: f,
            flatJson: p,
            datetimeFormats: R,
            numberFormats: y,
            missing: n,
            missingWarn: s,
            fallbackWarn: r,
            fallbackRoot: o,
            fallbackFormat: i,
            modifiers: c,
            pluralRules: u,
            postTranslation: g,
            warnHtmlMessage: h,
            escapeParameter: d,
            messageResolver: e.messageResolver,
            inheritLocale: m,
            translateExistCompatible: k,
            __i18n: w,
            __root: T,
            __injectWithOption: P
        };
    }
    function va(e = {}, t) {
        {
            const a = Da(Yo(e)), { __extender: n } = e, s = {
                id: a.id,
                get locale () {
                    return a.locale.value;
                },
                set locale (r){
                    a.locale.value = r;
                },
                get fallbackLocale () {
                    return a.fallbackLocale.value;
                },
                set fallbackLocale (r){
                    a.fallbackLocale.value = r;
                },
                get messages () {
                    return a.messages.value;
                },
                get datetimeFormats () {
                    return a.datetimeFormats.value;
                },
                get numberFormats () {
                    return a.numberFormats.value;
                },
                get availableLocales () {
                    return a.availableLocales;
                },
                get formatter () {
                    return {
                        interpolate () {
                            return [];
                        }
                    };
                },
                set formatter (r){},
                get missing () {
                    return a.getMissingHandler();
                },
                set missing (r){
                    a.setMissingHandler(r);
                },
                get silentTranslationWarn () {
                    return $(a.missingWarn) ? !a.missingWarn : a.missingWarn;
                },
                set silentTranslationWarn (r){
                    a.missingWarn = $(r) ? !r : r;
                },
                get silentFallbackWarn () {
                    return $(a.fallbackWarn) ? !a.fallbackWarn : a.fallbackWarn;
                },
                set silentFallbackWarn (r){
                    a.fallbackWarn = $(r) ? !r : r;
                },
                get modifiers () {
                    return a.modifiers;
                },
                get formatFallbackMessages () {
                    return a.fallbackFormat;
                },
                set formatFallbackMessages (r){
                    a.fallbackFormat = r;
                },
                get postTranslation () {
                    return a.getPostTranslationHandler();
                },
                set postTranslation (r){
                    a.setPostTranslationHandler(r);
                },
                get sync () {
                    return a.inheritLocale;
                },
                set sync (r){
                    a.inheritLocale = r;
                },
                get warnHtmlInMessage () {
                    return a.warnHtmlMessage ? "warn" : "off";
                },
                set warnHtmlInMessage (r){
                    a.warnHtmlMessage = r !== "off";
                },
                get escapeParameterHtml () {
                    return a.escapeParameter;
                },
                set escapeParameterHtml (r){
                    a.escapeParameter = r;
                },
                get preserveDirectiveContent () {
                    return !0;
                },
                set preserveDirectiveContent (r){},
                get pluralizationRules () {
                    return a.pluralRules || {};
                },
                __composer: a,
                t (...r) {
                    const [o, i, c] = r, u = {};
                    let g = null, h = null;
                    if (!N(o)) throw he(pe.INVALID_ARGUMENT);
                    const d = o;
                    return N(i) ? u.locale = i : ne(i) ? g = i : B(i) && (h = i), ne(c) ? g = c : B(c) && (h = c), Reflect.apply(a.t, a, [
                        d,
                        g || h || {},
                        u
                    ]);
                },
                rt (...r) {
                    return Reflect.apply(a.rt, a, [
                        ...r
                    ]);
                },
                tc (...r) {
                    const [o, i, c] = r, u = {
                        plural: 1
                    };
                    let g = null, h = null;
                    if (!N(o)) throw he(pe.INVALID_ARGUMENT);
                    const d = o;
                    return N(i) ? u.locale = i : ce(i) ? u.plural = i : ne(i) ? g = i : B(i) && (h = i), N(c) ? u.locale = c : ne(c) ? g = c : B(c) && (h = c), Reflect.apply(a.t, a, [
                        d,
                        g || h || {},
                        u
                    ]);
                },
                te (r, o) {
                    return a.te(r, o);
                },
                tm (r) {
                    return a.tm(r);
                },
                getLocaleMessage (r) {
                    return a.getLocaleMessage(r);
                },
                setLocaleMessage (r, o) {
                    a.setLocaleMessage(r, o);
                },
                mergeLocaleMessage (r, o) {
                    a.mergeLocaleMessage(r, o);
                },
                d (...r) {
                    return Reflect.apply(a.d, a, [
                        ...r
                    ]);
                },
                getDateTimeFormat (r) {
                    return a.getDateTimeFormat(r);
                },
                setDateTimeFormat (r, o) {
                    a.setDateTimeFormat(r, o);
                },
                mergeDateTimeFormat (r, o) {
                    a.mergeDateTimeFormat(r, o);
                },
                n (...r) {
                    return Reflect.apply(a.n, a, [
                        ...r
                    ]);
                },
                getNumberFormat (r) {
                    return a.getNumberFormat(r);
                },
                setNumberFormat (r, o) {
                    a.setNumberFormat(r, o);
                },
                mergeNumberFormat (r, o) {
                    a.mergeNumberFormat(r, o);
                },
                getChoiceIndex (r, o) {
                    return -1;
                }
            };
            return s.__extender = n, s;
        }
    }
    const Ra = {
        tag: {
            type: [
                String,
                Object
            ]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: (e)=>e === "parent" || e === "global",
            default: "parent"
        },
        i18n: {
            type: Object
        }
    };
    function jo({ slots: e }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s)=>[
                ...n,
                ...s.type === Yt ? s.children : [
                    s
                ]
            ], []) : t.reduce((a, n)=>{
            const s = e[n];
            return s && (a[n] = s()), a;
        }, Z());
    }
    function gr(e) {
        return Yt;
    }
    const zo = xt({
        name: "i18n-t",
        props: be({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [
                    Number,
                    String
                ],
                validator: (e)=>ce(e) || !isNaN(e)
            }
        }, Ra),
        setup (e, t) {
            const { slots: a, attrs: n } = t, s = e.i18n || gt({
                useScope: e.scope,
                __useComponent: !0
            });
            return ()=>{
                const r = Object.keys(a).filter((h)=>h !== "_"), o = Z();
                e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = N(e.plural) ? +e.plural : e.plural);
                const i = jo(t, r), c = s[ga](e.keypath, i, o), u = be(Z(), n), g = N(e.tag) || Y(e.tag) ? e.tag : gr();
                return $e(g, u, c);
            };
        }
    }), vn = zo;
    function Qo(e) {
        return ne(e) && !N(e[0]);
    }
    function hr(e, t, a, n) {
        const { slots: s, attrs: r } = t;
        return ()=>{
            const o = {
                part: !0
            };
            let i = Z();
            e.locale && (o.locale = e.locale), N(e.format) ? o.key = e.format : Y(e.format) && (N(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((d, m)=>a.includes(m) ? be(Z(), d, {
                    [m]: e.format[m]
                }) : d, Z()));
            const c = n(e.value, o, i);
            let u = [
                o.key
            ];
            ne(c) ? u = c.map((d, m)=>{
                const f = s[d.type], w = f ? f({
                    [d.type]: d.value,
                    index: m,
                    parts: c
                }) : [
                    d.value
                ];
                return Qo(w) && (w[0].key = `${d.type}-${m}`), w;
            }) : N(c) && (u = [
                c
            ]);
            const g = be(Z(), r), h = N(e.tag) || Y(e.tag) ? e.tag : gr();
            return $e(h, g, u);
        };
    }
    const Xo = xt({
        name: "i18n-n",
        props: be({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, Ra),
        setup (e, t) {
            const a = e.i18n || gt({
                useScope: e.scope,
                __useComponent: !0
            });
            return hr(e, t, ur, (...n)=>a[ya](...n));
        }
    }), wn = Xo, Jo = xt({
        name: "i18n-d",
        props: be({
            value: {
                type: [
                    Number,
                    Date
                ],
                required: !0
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, Ra),
        setup (e, t) {
            const a = e.i18n || gt({
                useScope: e.scope,
                __useComponent: !0
            });
            return hr(e, t, cr, (...n)=>a[ha](...n));
        }
    }), kn = Jo;
    function Zo(e, t) {
        const a = e;
        if (e.mode === "composition") return a.__getInstance(t) || e.global;
        {
            const n = a.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer;
        }
    }
    function ei(e) {
        const t = (o)=>{
            const { instance: i, modifiers: c, value: u } = o;
            if (!i || !i.$) throw he(pe.UNEXPECTED_ERROR);
            const g = Zo(e, i.$), h = En(u);
            return [
                Reflect.apply(g.t, g, [
                    ...Tn(h)
                ]),
                g
            ];
        };
        return {
            created: (o, i)=>{
                const [c, u] = t(i);
                zt && e.global === u && (o.__i18nWatcher = De(u.locale, ()=>{
                    i.instance && i.instance.$forceUpdate();
                })), o.__composer = u, o.textContent = c;
            },
            unmounted: (o)=>{
                zt && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
            },
            beforeUpdate: (o, { value: i })=>{
                if (o.__composer) {
                    const c = o.__composer, u = En(i);
                    o.textContent = Reflect.apply(c.t, c, [
                        ...Tn(u)
                    ]);
                }
            },
            getSSRProps: (o)=>{
                const [i] = t(o);
                return {
                    textContent: i
                };
            }
        };
    }
    function En(e) {
        if (N(e)) return {
            path: e
        };
        if (B(e)) {
            if (!("path" in e)) throw he(pe.REQUIRED_VALUE, "path");
            return e;
        } else throw he(pe.INVALID_VALUE);
    }
    function Tn(e) {
        const { path: t, locale: a, args: n, choice: s, plural: r } = e, o = {}, i = n || {};
        return N(a) && (o.locale = a), ce(s) && (o.plural = s), ce(r) && (o.plural = r), [
            t,
            i,
            o
        ];
    }
    function ti(e, t, ...a) {
        const n = B(a[0]) ? a[0] : {}, s = !!n.useI18nComponentName;
        (!$(n.globalInstall) || n.globalInstall) && ([
            s ? "i18n" : vn.name,
            "I18nT"
        ].forEach((o)=>e.component(o, vn)), [
            wn.name,
            "I18nN"
        ].forEach((o)=>e.component(o, wn)), [
            kn.name,
            "I18nD"
        ].forEach((o)=>e.component(o, kn))), e.directive("t", ei(t));
    }
    function ai(e, t, a) {
        return {
            beforeCreate () {
                const n = Nt();
                if (!n) throw he(pe.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const r = s.i18n;
                    if (s.__i18n && (r.__i18n = s.__i18n), r.__root = t, this === this.$root) this.$i18n = An(e, r);
                    else {
                        r.__injectWithOption = !0, r.__extender = a.__vueI18nExtend, this.$i18n = va(r);
                        const o = this.$i18n;
                        o.__extender && (o.__disposer = o.__extender(this.$i18n));
                    }
                } else if (s.__i18n) if (this === this.$root) this.$i18n = An(e, s);
                else {
                    this.$i18n = va({
                        __i18n: s.__i18n,
                        __injectWithOption: !0,
                        __extender: a.__vueI18nExtend,
                        __root: t
                    });
                    const r = this.$i18n;
                    r.__extender && (r.__disposer = r.__extender(this.$i18n));
                }
                else this.$i18n = e;
                s.__i18nGlobal && pr(t, s, s), this.$t = (...r)=>this.$i18n.t(...r), this.$rt = (...r)=>this.$i18n.rt(...r), this.$tc = (...r)=>this.$i18n.tc(...r), this.$te = (r, o)=>this.$i18n.te(r, o), this.$d = (...r)=>this.$i18n.d(...r), this.$n = (...r)=>this.$i18n.n(...r), this.$tm = (r)=>this.$i18n.tm(r), a.__setInstance(n, this.$i18n);
            },
            mounted () {},
            unmounted () {
                const n = Nt();
                if (!n) throw he(pe.UNEXPECTED_ERROR);
                const s = this.$i18n;
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), a.__deleteInstance(n), delete this.$i18n;
            }
        };
    }
    function An(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[dr](t.pluralizationRules || e.pluralizationRules);
        const a = aa(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(a).forEach((n)=>e.mergeLocaleMessage(n, a[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n)=>e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n)=>e.mergeNumberFormat(n, t.numberFormats[n])), e;
    }
    const ni = Ye("global-vue-i18n");
    function ri(e = {}, t) {
        const a = __VUE_I18N_LEGACY_API__ && $(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = $(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && a ? !!e.allowComposition : !0, r = new Map, [o, i] = si(e, a), c = Ye("");
        function u(d) {
            return r.get(d) || null;
        }
        function g(d, m) {
            r.set(d, m);
        }
        function h(d) {
            r.delete(d);
        }
        {
            const d = {
                get mode () {
                    return __VUE_I18N_LEGACY_API__ && a ? "legacy" : "composition";
                },
                get allowComposition () {
                    return s;
                },
                async install (m, ...f) {
                    if (m.__VUE_I18N_SYMBOL__ = c, m.provide(m.__VUE_I18N_SYMBOL__, d), B(f[0])) {
                        const P = f[0];
                        d.__composerExtend = P.__composerExtend, d.__vueI18nExtend = P.__vueI18nExtend;
                    }
                    let w = null;
                    !a && n && (w = mi(m, d.global)), __VUE_I18N_FULL_INSTALL__ && ti(m, d, ...f), __VUE_I18N_LEGACY_API__ && a && m.mixin(ai(i, i.__composer, d));
                    const T = m.unmount;
                    m.unmount = ()=>{
                        w && w(), d.dispose(), T();
                    };
                },
                get global () {
                    return i;
                },
                dispose () {
                    o.stop();
                },
                __instances: r,
                __getInstance: u,
                __setInstance: g,
                __deleteInstance: h
            };
            return d;
        }
    }
    gt = function(e = {}) {
        const t = Nt();
        if (t == null) throw he(pe.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw he(pe.NOT_INSTALLED);
        const a = oi(t), n = li(a), s = mr(t), r = ii(e, s);
        if (__VUE_I18N_LEGACY_API__ && a.mode === "legacy" && !e.__useComponent) {
            if (!a.allowComposition) throw he(pe.NOT_AVAILABLE_IN_LEGACY_MODE);
            return di(t, r, n, e);
        }
        if (r === "global") return pr(n, e, s), n;
        if (r === "parent") {
            let c = ci(a, t, e.__useComponent);
            return c == null && (c = n), c;
        }
        const o = a;
        let i = o.__getInstance(t);
        if (i == null) {
            const c = be({}, e);
            "__i18n" in s && (c.__i18n = s.__i18n), n && (c.__root = n), i = Da(c), o.__composerExtend && (i[ba] = o.__composerExtend(i)), _i(o, t, i), o.__setInstance(t, i);
        }
        return i;
    };
    function si(e, t, a) {
        const n = Sr();
        {
            const s = __VUE_I18N_LEGACY_API__ && t ? n.run(()=>va(e)) : n.run(()=>Da(e));
            if (s == null) throw he(pe.UNEXPECTED_ERROR);
            return [
                n,
                s
            ];
        }
    }
    function oi(e) {
        {
            const t = Ir(e.isCE ? ni : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw he(e.isCE ? pe.NOT_INSTALLED_WITH_PROVIDE : pe.UNEXPECTED_ERROR);
            return t;
        }
    }
    function ii(e, t) {
        return Zt(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
    }
    function li(e) {
        return e.mode === "composition" ? e.global : e.global.__composer;
    }
    function ci(e, t, a = !1) {
        let n = null;
        const s = t.root;
        let r = ui(t, a);
        for(; r != null;){
            const o = e;
            if (e.mode === "composition") n = o.__getInstance(r);
            else if (__VUE_I18N_LEGACY_API__) {
                const i = o.__getInstance(r);
                i != null && (n = i.__composer, a && n && !n[fr] && (n = null));
            }
            if (n != null || s === r) break;
            r = r.parent;
        }
        return n;
    }
    function ui(e, t = !1) {
        return e == null ? null : t && e.vnode.ctx || e.parent;
    }
    function _i(e, t, a) {
        Xt(()=>{}, t), On(()=>{
            const n = a;
            e.__deleteInstance(t);
            const s = n[ba];
            s && (s(), delete n[ba]);
        }, t);
    }
    function di(e, t, a, n = {}) {
        const s = t === "local", r = Nn(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw he(pe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const o = $(n.inheritLocale) ? n.inheritLocale : !N(n.locale), i = M(!s || o ? a.locale.value : N(n.locale) ? n.locale : ft), c = M(!s || o ? a.fallbackLocale.value : N(n.fallbackLocale) || ne(n.fallbackLocale) || B(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : i.value), u = M(aa(i.value, n)), g = M(B(n.datetimeFormats) ? n.datetimeFormats : {
            [i.value]: {}
        }), h = M(B(n.numberFormats) ? n.numberFormats : {
            [i.value]: {}
        }), d = s ? a.missingWarn : $(n.missingWarn) || Ke(n.missingWarn) ? n.missingWarn : !0, m = s ? a.fallbackWarn : $(n.fallbackWarn) || Ke(n.fallbackWarn) ? n.fallbackWarn : !0, f = s ? a.fallbackRoot : $(n.fallbackRoot) ? n.fallbackRoot : !0, w = !!n.fallbackFormat, T = ae(n.missing) ? n.missing : null, P = ae(n.postTranslation) ? n.postTranslation : null, R = s ? a.warnHtmlMessage : $(n.warnHtmlMessage) ? n.warnHtmlMessage : !0, y = !!n.escapeParameter, p = s ? a.modifiers : B(n.modifiers) ? n.modifiers : {}, k = n.pluralRules || s && a.pluralRules;
        function v() {
            return [
                i.value,
                c.value,
                u.value,
                g.value,
                h.value
            ];
        }
        const S = me({
            get: ()=>r.value ? r.value.locale.value : i.value,
            set: (I)=>{
                r.value && (r.value.locale.value = I), i.value = I;
            }
        }), D = me({
            get: ()=>r.value ? r.value.fallbackLocale.value : c.value,
            set: (I)=>{
                r.value && (r.value.fallbackLocale.value = I), c.value = I;
            }
        }), L = me(()=>r.value ? r.value.messages.value : u.value), te = me(()=>g.value), ue = me(()=>h.value);
        function W() {
            return r.value ? r.value.getPostTranslationHandler() : P;
        }
        function de(I) {
            r.value && r.value.setPostTranslationHandler(I);
        }
        function x() {
            return r.value ? r.value.getMissingHandler() : T;
        }
        function O(I) {
            r.value && r.value.setMissingHandler(I);
        }
        function V(I) {
            return v(), I();
        }
        function X(...I) {
            return r.value ? V(()=>Reflect.apply(r.value.t, null, [
                    ...I
                ])) : V(()=>"");
        }
        function j(...I) {
            return r.value ? Reflect.apply(r.value.rt, null, [
                ...I
            ]) : "";
        }
        function ve(...I) {
            return r.value ? V(()=>Reflect.apply(r.value.d, null, [
                    ...I
                ])) : V(()=>"");
        }
        function Te(...I) {
            return r.value ? V(()=>Reflect.apply(r.value.n, null, [
                    ...I
                ])) : V(()=>"");
        }
        function Pe(I) {
            return r.value ? r.value.tm(I) : {};
        }
        function Qe(I, z) {
            return r.value ? r.value.te(I, z) : !1;
        }
        function ht(I) {
            return r.value ? r.value.getLocaleMessage(I) : {};
        }
        function rt(I, z) {
            r.value && (r.value.setLocaleMessage(I, z), u.value[I] = z);
        }
        function yt(I, z) {
            r.value && r.value.mergeLocaleMessage(I, z);
        }
        function bt(I) {
            return r.value ? r.value.getDateTimeFormat(I) : {};
        }
        function Ht(I, z) {
            r.value && (r.value.setDateTimeFormat(I, z), g.value[I] = z);
        }
        function vt(I, z) {
            r.value && r.value.mergeDateTimeFormat(I, z);
        }
        function wt(I) {
            return r.value ? r.value.getNumberFormat(I) : {};
        }
        function st(I, z) {
            r.value && (r.value.setNumberFormat(I, z), h.value[I] = z);
        }
        function kt(I, z) {
            r.value && r.value.mergeNumberFormat(I, z);
        }
        const Et = {
            get id () {
                return r.value ? r.value.id : -1;
            },
            locale: S,
            fallbackLocale: D,
            messages: L,
            datetimeFormats: te,
            numberFormats: ue,
            get inheritLocale () {
                return r.value ? r.value.inheritLocale : o;
            },
            set inheritLocale (I){
                r.value && (r.value.inheritLocale = I);
            },
            get availableLocales () {
                return r.value ? r.value.availableLocales : Object.keys(u.value);
            },
            get modifiers () {
                return r.value ? r.value.modifiers : p;
            },
            get pluralRules () {
                return r.value ? r.value.pluralRules : k;
            },
            get isGlobal () {
                return r.value ? r.value.isGlobal : !1;
            },
            get missingWarn () {
                return r.value ? r.value.missingWarn : d;
            },
            set missingWarn (I){
                r.value && (r.value.missingWarn = I);
            },
            get fallbackWarn () {
                return r.value ? r.value.fallbackWarn : m;
            },
            set fallbackWarn (I){
                r.value && (r.value.missingWarn = I);
            },
            get fallbackRoot () {
                return r.value ? r.value.fallbackRoot : f;
            },
            set fallbackRoot (I){
                r.value && (r.value.fallbackRoot = I);
            },
            get fallbackFormat () {
                return r.value ? r.value.fallbackFormat : w;
            },
            set fallbackFormat (I){
                r.value && (r.value.fallbackFormat = I);
            },
            get warnHtmlMessage () {
                return r.value ? r.value.warnHtmlMessage : R;
            },
            set warnHtmlMessage (I){
                r.value && (r.value.warnHtmlMessage = I);
            },
            get escapeParameter () {
                return r.value ? r.value.escapeParameter : y;
            },
            set escapeParameter (I){
                r.value && (r.value.escapeParameter = I);
            },
            t: X,
            getPostTranslationHandler: W,
            setPostTranslationHandler: de,
            getMissingHandler: x,
            setMissingHandler: O,
            rt: j,
            d: ve,
            n: Te,
            tm: Pe,
            te: Qe,
            getLocaleMessage: ht,
            setLocaleMessage: rt,
            mergeLocaleMessage: yt,
            getDateTimeFormat: bt,
            setDateTimeFormat: Ht,
            mergeDateTimeFormat: vt,
            getNumberFormat: wt,
            setNumberFormat: st,
            mergeNumberFormat: kt
        };
        function Tt(I) {
            I.locale.value = i.value, I.fallbackLocale.value = c.value, Object.keys(u.value).forEach((z)=>{
                I.mergeLocaleMessage(z, u.value[z]);
            }), Object.keys(g.value).forEach((z)=>{
                I.mergeDateTimeFormat(z, g.value[z]);
            }), Object.keys(h.value).forEach((z)=>{
                I.mergeNumberFormat(z, h.value[z]);
            }), I.escapeParameter = y, I.fallbackFormat = w, I.fallbackRoot = f, I.fallbackWarn = m, I.missingWarn = d, I.warnHtmlMessage = R;
        }
        return Lr(()=>{
            if (e.proxy == null || e.proxy.$i18n == null) throw he(pe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const I = r.value = e.proxy.$i18n.__composer;
            t === "global" ? (i.value = I.locale.value, c.value = I.fallbackLocale.value, u.value = I.messages.value, g.value = I.datetimeFormats.value, h.value = I.numberFormats.value) : s && Tt(I);
        }), Et;
    }
    const fi = [
        "locale",
        "fallbackLocale",
        "availableLocales"
    ], Sn = [
        "t",
        "rt",
        "d",
        "n",
        "tm",
        "te"
    ];
    function mi(e, t) {
        const a = Object.create(null);
        return fi.forEach((s)=>{
            const r = Object.getOwnPropertyDescriptor(t, s);
            if (!r) throw he(pe.UNEXPECTED_ERROR);
            const o = Pr(r.value) ? {
                get () {
                    return r.value.value;
                },
                set (i) {
                    r.value.value = i;
                }
            } : {
                get () {
                    return r.get && r.get();
                }
            };
            Object.defineProperty(a, s, o);
        }), e.config.globalProperties.$i18n = a, Sn.forEach((s)=>{
            const r = Object.getOwnPropertyDescriptor(t, s);
            if (!r || !r.value) throw he(pe.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${s}`, r);
        }), ()=>{
            delete e.config.globalProperties.$i18n, Sn.forEach((s)=>{
                delete e.config.globalProperties[`$${s}`];
            });
        };
    }
    Vo();
    __INTLIFY_JIT_COMPILATION__ ? rn(xo) : rn(Fo);
    Po(oo);
    Io(Zn);
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const e = We();
        e.__INTLIFY__ = !0, go(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
    }
    let pi, gi, hi, yi, bi, vi, wi, ki, Ei, Ti, Ai, Si, Pi, Ii, Li, Ni, Oi, Ci, Di, Ri, Mi, Fi, xi, Ui, Bi, Hi, Wi, $i, Vi, Gi, qi, Ki, Yi, ji, zi, Qi, Xi, Ji, Zi, el, tl, al, sl, xe, ol;
    pi = {
        confirm: "确定",
        cancel: "取消",
        setup: "去设置",
        disable: "停用",
        tip: "提示",
        success: "操作成功",
        error: "操作失败",
        save: "保存",
        delete: "删除",
        edit: "编辑",
        add: "添加",
        close: "关闭",
        back: "返回",
        prev: "上一个",
        next: "下一个",
        copy: "复制",
        refresh: "刷新页面",
        loading_failed: "组件加载失败，请检查网络连接",
        copy_success: "复制成功",
        copy_fail: "复制失败",
        offline_mode: "网络已断开，当前应用正处于离线缓存模式",
        loading_data: "数据获取中, 请稍候...",
        resource_loading: "资源加载中",
        data_security: "数据安全",
        warning: "警告",
        uncategorized: "未分类",
        all: "全部",
        encrypted: "加密",
        plaintext: "明文",
        remove: "移除",
        other: "其它",
        no_data: "暂无数据",
        understand: "了解",
        offline_tag: "离线模式",
        network_error_tag: "网络异常",
        enabled: "已开启",
        disabled: "已停用"
    };
    gi = {
        install: "安装应用",
        install_desc: "将 NodeAuth 安装到设备，获得更无缝和支持离线的独立应用体验",
        already_installed: "已安装",
        update_available: "更新可用",
        update_ready: "NodeAuth 核心已准备好新的版本构建，请点击下方按钮完成升级。",
        pwa_refresh: "立即升级",
        update_success: "升级成功",
        offline_feature_error_title: "首次使用需在线",
        offline_feature_error_desc: "该高级功能首次加载需要下载必要的依赖组件。您目前正处于断网或离线状态，请连接网络后再试。"
    };
    hi = {
        placeholder: "搜索服务名称、账号或分类...",
        no_matching_accounts: "没有找到匹配的账号",
        selected_items: "已选 {count} 项",
        select_all_loaded: "全选已加载"
    };
    yi = {
        vault: "我的账号",
        add: "添加账号",
        backup: "云端备份",
        migration: "数据迁移",
        tools: "实用工具",
        passkey: "通行密钥",
        security: "安全设置",
        settings: "系统设置",
        appearance: "外观设置",
        language: "语言切换",
        theme: "主题模式",
        about: "关于应用",
        logout: "退出登录",
        mobile: {
            vault: "账号",
            data: "数据",
            tools: "工具",
            settings: "设置"
        }
    };
    bi = {
        title: "关于",
        version: "版本",
        commit: "构建提交",
        platform: "运行环境",
        tagline: "一个十分安全的 2FA 服务管理工具",
        open_source_github: "GitHub",
        documentation: "Wiki"
    };
    vi = {
        go_add_vault: "去添加账号",
        loading_more: "正在加载更多...",
        no_more_accounts: "到底了，没有更多账号了",
        reorder_offline_disabled: "离线模式下暂不支持拖拽排序",
        edit_account: "编辑账号",
        service_name: "服务名称 (如 Google, GitHub)",
        account_identifier: "账号标识 (如 邮箱地址)",
        category_optional: "分类 (可选)",
        empty_vault: "空空如也，快去添加你的第一个 2FA 账号吧！",
        export_account: "导出",
        add_account: "手动输入",
        add_scan: "扫码添加",
        add_mode_camera: "摄像头扫描",
        add_mode_image: "图片识别",
        service: "服务商",
        account: "账号",
        secret: "密钥",
        category: "分类",
        delete_confirm: "确定要删除 {service} 吗？",
        hard_delete_confirm: "确定要彻底删除 {service} 吗？此操作无法恢复！",
        delete_success: "账号已删除",
        delete_batch_confirm: "确定要删除选中的 {count} 个账号吗？",
        delete_batch_success: "已成功删除 {count} 个账号",
        copy_failed: "复制失败，你的浏览器可能禁用或不支持剪贴板操作",
        qr_invalid: "二维码格式无效，请扫描有效的 OTP 二维码",
        add_success: "账号添加成功",
        update_success: "账号信息已更新",
        not_generated_yet: "验证码尚未生成，请稍候",
        duplicate_confirm: "账号可能已存在，是否继续添加？",
        generate_fail: "无效的 OTP URI",
        add_account_tip: "支持通过摄像头扫码、识别图片或手动输入的方式添加账号。",
        invalid_qr_format: "二维码格式无效，请扫描有效的 OTP 二维码",
        service_label: "服务方",
        unknown_service: "未指定服务",
        account_label: "账　号",
        unnamed_account: "未命名账号",
        param_label: "参　数",
        digits_suffix: "位",
        period_suffix: "秒",
        confirm_add_title: "解析成功，确认添加？",
        input_service_placeholder: "请输入服务名称",
        input_account_placeholder: "请输入账号或邮箱",
        input_secret_label: "安全密钥 (Base32格式)",
        input_secret_placeholder: "请输入 16 位以上的安全密钥",
        generate_random_secret: "随机生成密钥",
        digits_label: "代码位数",
        digits_5: "5 位",
        digits_6: "6 位",
        digits_8: "8 位",
        period_label: "更新周期",
        period_30s: "30 秒",
        period_60s: "60 秒",
        algorithm_label: "算法",
        counter_label: "计数器",
        algo_sha1: "SHA1",
        algo_steam: "SHA1",
        otp_type_label: "令牌类型",
        otp_type_totp: "TOTP (基于时间)",
        otp_type_hotp: "HOTP (基于计数)",
        otp_type_steam: "Steam 令牌",
        otp_type_blizzard: "Battle.net (暴雪战网安全令)",
        input_category_placeholder: "如 工作, 个人",
        confirm_add_btn: "确认添加",
        require_secret: "请输入安全密钥",
        secret_min_length: "密钥长度通常不少于 16 位",
        secret_invalid_char: "包含非法字符 (仅限 A-Z, 2-7)",
        require_service: "请输入服务名称",
        require_account: "请输入账号标识",
        export_qr_tip: "使用任意 2FA 应用扫描二维码即可添加此账户",
        hide_secret: "隐藏",
        show_secret: "显示",
        copy_secret: "复制密钥",
        copy_otp_url: "复制 OTPAuth 链接",
        total_count: "共 {count} 个账号",
        filtered_count: "分类「{category}」下共 {count} 个账号",
        sort_updated: "账号顺序已更新",
        sort_by: "排序方式",
        sort_name: "名称 (A-Z)",
        sort_newest: "最新添加",
        offline_pending_sync: "离线模式：有 {count} 项变更等待同步",
        pending_sync_tip: "此账号尚有变更待同步到云端",
        conflict_detected_tip: "发现同步冲突！请点击处理",
        conflict_notice: "另一台设备已修改此项，是否保留本地？",
        force_sync: "强制覆盖",
        discard_local: "放弃修改",
        conflict_force_applied: "已触发强制同步",
        conflict_discarded: "本地更改已放弃",
        batch_import_entry_title: "从其他应用批量导入数据",
        batch_import_entry_desc: "支持从 20+ 应用直接迁移",
        trash: "回收站",
        restore: "恢复删除",
        restore_success: "已成功恢复账号！",
        hard_delete: "彻底删除",
        increment: "手动刷新计数器",
        increment_success: "计数器已递增",
        increment_failed: "刷新失败",
        increment_offline_queued: "离线状态下已加入同步队列",
        blizzard_net_restore_desc: "填写下方信息以从暴雪战网官方获取令牌",
        serial_number: "序列号",
        restore_code: "还原码",
        serial_placeholder: "例如: KR123456789012",
        restore_code_placeholder: "例如: XPR7VMY0YX",
        sso_token_label: "ST Token",
        sso_token_placeholder: "例如: KR-2a5c***aed7c-1504667632",
        sso_token_hint: '在浏览器访问 <a href="https://account.battle.net/login/en/?ref=localhost" target="_blank">https://account.battle.net/login/en/?ref=localhost</a> 登录战网成功后，从地址栏复制 ?ST= 后方的字符串。注意：该令牌通常在 2 分钟内过期。',
        get_method: "获取方法",
        restoring: "正在从暴雪服务器同步...",
        restore_failed: "同步失败，请检查 ST Token 是否过期或填写有误",
        blizzard_fields_required: "请填写序列号、还原码和 ST Token"
    };
    wi = {
        appearance_desc: "个性化您的界面风格、语言以及布局显示。",
        theme_desc: "选择适合您的视觉风格",
        language_desc: "选择您偏好的界面语言",
        display_layout: "列表布局",
        layout_desc: "选择适合您的列表布局",
        layout_standard: "标准布局",
        layout_compact: "紧凑布局",
        language_changed: "语言已切换"
    };
    ki = {
        title: "安全设置",
        ghost_mode: "防窥屏模式",
        ghost_mode_desc: "隐藏界面敏感验证码，离开应用自动遮挡。",
        ghost_mode_toggle: "防窥屏模糊开关",
        ghost_mode_active: "防窥屏保护已开启",
        ghost_mode_inactive: "防窥屏保护已关闭",
        offline_mode: "离线模式",
        offline_mode_desc: "开启后将物理阻断所有网络请求，应用仅使用本地同步缓存运行。",
        offline_mode_active: "离线模式已开启",
        offline_mode_inactive: "离线模式已关闭",
        offline_check_title: "离线就绪准备度检测",
        ready_label: "就绪度",
        offline_check_desc: "正在验证本地安全保险箱环境...",
        offline_incomplete_msg: "检测到部分资源尚未离线，请下载缺失资源。",
        offline_complete_msg: "检测完毕！本地环境已具备 100% 离线运行能力。",
        check_accounts: "账号信息",
        offline_trash_blocked_title: "回收站模式",
        offline_trash_blocked_msg: "必须先关闭回收站模式，方可开启离线模式。",
        offline_trash_enable_blocked_msg: "离线模式下禁止开启回收站",
        offline_network_blocked: "当前网络离线，为确保数据完整性，暂停删除操作。请连接网络后重试。",
        offline_network_restore_blocked: "当前网络离线，为确保数据完整性，暂停恢复操作。请连接网络后重试。",
        go_to_trash_settings: "前往关闭回收站模式",
        check_components: "核心组件",
        check_engine: "安全引擎",
        check_assets: "静态资源",
        check_sync: "同步状态",
        download_offline: "下载离线资源",
        downloading: "资源下载中...",
        confirm_enable_offline: "确认开启离线模式",
        sync_success: "离线资源同步完成",
        sync_partial: "资源已拉取，但部分校验未通过，请尝试再次点击下载",
        sync_failed: "同步失败",
        auth_missing: "本地安全授权已失效，请重新登录，以确保当前设备具备物理离线存储能力。",
        vault_unreachable: "无法连接到账号API，请检查网络后再试",
        insecure_context_blocked: "当前环境并不安全 (需强制 HTTPS 或使用 localhost)，浏览器禁用了离线缓存功能。",
        clipboard_cleared: "出于安全考虑，剪贴板已清空",
        clipboard_wipe_failed: "系统限制，无法自动清空剪贴板，请警惕泄露",
        devices: "登录设备管理",
        devices_desc: "查看并管理所有登录设备。",
        current_device: "当前设备",
        session_created_at: "创建于",
        sign_out_all_others: "注销其他所有设备",
        confirm_remove_device: "移除登录设备",
        confirm_remove_device_desc: "确定要强制移除设备「{device}」的登录状态吗？该设备上的账户需重新登录。",
        confirm_signout_all_desc: "确定要注销除当前设备外的所有其他登录会话吗？这是一个敏感操作。",
        cannot_remove_current: "无法移除当前正在使用的设备",
        remove: "移除",
        session_secure: "当前会话已受加密保护",
        pin_lock: "PIN码安全锁",
        pin_lock_desc: "开启后，每次冷启动或切回应用均需验证 6 位数字安全锁。",
        pin_settings: "PIN码安全锁",
        pin_settings_desc: "管理 6 位安全锁及生物识别设置",
        locked_active: "保护中",
        setup_pin_title: "设置 6 位安全锁",
        setup_pin_tip: "请设置 6 位数字 PIN 码。请务必牢记，若遗失只能重置应用并重新同步。",
        biometric_unlock: "生物特征解锁",
        biometric_unlock_desc: "在已开启安全锁的前提下，允许通过指纹或面容快速进入应用。",
        biometric_prf_unsupported: "当前硬件/系统版本暂不支持",
        app_locked: "应用已锁定",
        enter_pin_to_unlock: "请输入 6 位安全锁 PIN 码以进入",
        forgot_pin: "忘记 PIN 码？",
        unlocked: "解锁成功",
        reset_confirm_title: "确定要重置应用吗？",
        reset_confirm_message: "重置将清空所有本地缓存数据。您需要重新登录并从服务器同步数据才能继续使用。",
        unknown_device: "未知设备",
        disable_pin_title: "验证身份以停用安全锁",
        disable_pin_tip: "出于安全考虑，停用锁需要验证您当前的 6 位 PIN 码。",
        confirm_disable: "确认停用",
        pin_setup_success: "安全锁已启用",
        pin_disable_success: "安全锁已停用",
        pin_verify_failed: "PIN 码验证失败，请重试",
        biometric_enabled: "生物识别解锁已开启",
        biometric_disabled: "生物识别解锁已停用",
        biometric_hardware_unsupported_title: "硬件兼容性受限",
        biometric_hardware_unsupported_msg: "您的设备虽支持 Passkey，但暂不支持硬件级密钥派生 (PRF 扩展)。出于安全考虑，无法开启生物一键解锁，请继续使用 PIN 码保护。",
        biometric_enable_failed: "开启失败",
        auto_lock_delay: "自动锁定延迟",
        auto_lock_delay_desc: "应用切到后台后，在此时间段内切回无需重新验证。",
        delay_0s: "立即锁定",
        delay_30s: "30 秒",
        delay_1m: "1 分钟",
        delay_5m: "5 分钟",
        delay_10m: "10 分钟",
        auto_lock_delay_updated: "自动锁定延迟已更新",
        trash_mode: "回收站模式",
        trash_mode_desc: "开启后，删除的账号暂时放入回收站",
        trash_settings: "回收站设置",
        trash_settings_desc: "在这里您可以控制回收站的状态、配置定时自动粉碎机制，并抹除残留的历史账单。",
        trash_settings_desc_short: "管理被删除的账号及自动删除策略",
        manage_trash: "管理",
        manage_trash_settings_desc: "查看并还原或彻底删除回收站内的账户",
        empty_trash: "一键清空",
        empty_trash_desc: "立即彻底物理抹除当前回收站内的所有数据！",
        trash_mode_enabled: "回收站模式已开启",
        trash_mode_cleared: "回收站已清空",
        trash_mode_disabled: "回收站模式已关闭",
        trash_already_empty: "回收站已经是空的",
        trash_retention_updated: "自动删除期限已更新",
        trash_empty_success: "回收站已成功清空，数据已被彻底焚毁",
        trash_disable_blocked_title: "无法关闭",
        trash_disable_blocked_msg: "回收站内目前尚有 {count} 条数据。请先处理或清空回收站内的残留账号。",
        trash_empty_warn_title: "危险操作警告",
        trash_empty_warn_msg: "确定要彻底物理清空回收站内的 {count} 条数据吗？此操作无法撤销！",
        trash_empty_confirm: "确定清空",
        trash_empty_cancel: "取消",
        trash_retention: "自动删除期限",
        trash_retention_desc: "在回收站中经过此时长的账号将被永久删除",
        trash_7d: "7天",
        trash_30d: "30天",
        trash_forever: "永久保留"
    };
    Ei = {
        providers: "备份配置",
        add_provider: "添加",
        cloud: "云端备份",
        restore: "恢复",
        type: "提供商类型",
        name: "配置名称",
        config: "参数配置",
        auto_backup: "自动备份",
        password_required: "静默同步需设置至少 6 位密码",
        test_success: "连接成功",
        test_failed: "连接失败",
        github_token_invalid_or_revoked: "Personal Access Token 已失效或无权限，请检查并在上方输入框重新输入验证",
        save_success: "云端备份设置成功",
        delete_provider_confirm: "确定删除该备份源吗？",
        backup_success: "云端备份完成，已成功备份数据至 {provider}",
        restore_success: "恢复成功，导入了 {count} 个新账户",
        no_new_accounts: "恢复的账户皆已存在，无新添项。",
        management: "云端备份管理",
        fetching_sources: "备份源获取中, 请稍候...",
        test_connection: "测试连接",
        connection_normal: "连接正常",
        connection_failed: "连接失败",
        auto_backup_on: "自动备份已开启",
        last_backup: "上次备份: ",
        never_backed_up: "从未",
        backup_now: "立即备份",
        restore_data: "恢复数据",
        empty_provider: "暂无备份源，请点击右上角添加",
        edit_provider: "编辑备份源",
        type_label: "类型",
        type_s3: "S3 对象存储",
        type_webdav: "WebDAV",
        type_telegram: "Telegram",
        type_gdrive: "Google Drive",
        type_onedrive: "OneDrive",
        type_baidu: "百度网盘",
        type_dropbox: "Dropbox",
        type_github: "GitHub",
        github_token: "Personal Access Token",
        github_token_placeholder: "ghp_xxxxxxxx...",
        github_owner: "仓库所有者",
        github_owner_placeholder: "例如: nodeauth",
        github_repo: "仓库名称",
        github_repo_placeholder: "例如: nodeauth-backup",
        github_branch: "分支名",
        github_branch_placeholder: "例如: main",
        require_github_token: "请填写 GitHub PAT",
        require_github_owner: "请填写仓库所有者",
        require_github_repo: "请填写仓库名称",
        type_email: "电子邮箱 (SMTP)",
        email_smtp_host: "SMTP 服务器",
        email_smtp_port: "端口",
        email_smtp_host_placeholder: "例如: smtp.gmail.com",
        email_smtp_secure: "加密方式",
        email_smtp_secure_ssl: "SSL / TLS (端口 465)",
        email_smtp_secure_tls: "STARTTLS (端口 587)",
        email_smtp_user: "发件人账号",
        email_smtp_user_placeholder: "发件人邮箱地址",
        email_smtp_password: "授权码 / 密码",
        email_smtp_from: "发件人昵称 (可选)",
        email_smtp_from_placeholder: "例如: NodeAuth Backup",
        email_smtp_to: "收件人邮箱",
        email_smtp_to_placeholder: "接收备份文件的邮箱地址",
        email_tip: "备份文件将以加密附件形式发送到指定邮箱，备份历史仅保存在本地记录中。",
        email_download_not_supported: '邮箱备份无法直接下载，请打开邮箱从附件中手动保存备份文件，然后使用"数据迁移"功能导入。',
        require_email_smtp_host: "请输入 SMTP 服务器地址",
        require_email_smtp_user: "请输入发件人账号",
        require_email_smtp_password: "请输入授权码或密码",
        require_email_smtp_to: "请输入收件人邮箱地址",
        email_backup_subject: "📦 NodeAuth 定期备份 {time}",
        email_backup_body_intro: `您好，

这是您的 NodeAuth 自动定期备份文件，请妥善保管。`,
        email_backup_body_filename: "文件名：{filename}",
        email_backup_body_time: "备份时间：{time}",
        email_backup_body_note: "注意：附件内容经过 AES-256 加密，请使用您设置的备份密码进行解密恢复。",
        email_backup_body_footer: `---
NodeAuth 自动备份系统`,
        name_label: "名称 (别名)",
        name_placeholder: "例如: 个人云盘",
        webdav_url: "WebDAV 地址",
        username: "用户名",
        password: "密码",
        modify: "修改",
        save_dir: "保存目录",
        s3_endpoint: "Endpoint (API 地址)",
        s3_bucket: "Bucket (存储桶名称)",
        s3_region: "Region (区域)",
        s3_path_prefix: "存储路径前缀 (可选)",
        auth_with_google: "连接 Google Drive 授权",
        auth_with_microsoft: "连接 OneDrive 授权",
        auth_with_baidu: "连接 百度网盘 授权",
        auth_with_dropbox: "连接 Dropbox 授权",
        gdrive_auth_tip: "建议备份至您的个人 Google Drive 以确保数据主权与高可用性。",
        onedrive_auth_tip: "建议备份至您的个人 OneDrive 以确保数据主权与高可用性。",
        baidu_auth_tip: "建议备份至您的个人 百度网盘 以确保数据主权与高可用性。",
        dropbox_auth_tip: "建议备份至您的个人 Dropbox 以确保数据主权与高可用性。",
        gdrive_auth_success: "Google Drive 授权成功",
        onedrive_auth_success: "OneDrive 授权成功",
        gdrive_refresh_token: "授权令牌",
        onedrive_refresh_token: "授权令牌",
        baidu_refresh_token: "授权令牌",
        dropbox_refresh_token: "授权令牌",
        gdrive_token_active: "授权令牌生效中",
        onedrive_token_active: "授权令牌生效中",
        baidu_token_active: "授权令牌生效中",
        dropbox_token_active: "授权令牌生效中",
        gdrive_folder_tip: "建议使用英文或数字路径。例如：/backups",
        onedrive_folder_tip: "建议使用英文或数字路径。例如：/backups",
        baidu_folder_tip: "备份文件将保存在网盘的：/apps/nodeauth-backup ",
        save_dir_placeholder: "/nodeauth-backup",
        re_authorize: "重新授权",
        waiting_authorization: "正在等待授权...",
        token_expired_or_revoked: '授权已失效，请点击"重新授权"按钮重新连接存储源',
        oauth_token_revoked: "授权令牌已失效，请重新授权。",
        authorized_success_gd: "已成功连接 Google Drive",
        authorized_success_ms: "已成功连接 OneDrive",
        authorized_success_baidu: "已成功连接 百度网盘",
        authorized_success_dropbox: "已成功连接 Dropbox",
        require_google_auth: "请先完成 Google Drive 授权",
        require_microsoft_auth: "请先完成 OneDrive 授权",
        require_baidu_auth: "请先完成 百度网盘 授权",
        require_dropbox_auth: "请先完成 Dropbox 授权",
        telegram_bot_token: "Bot Token",
        telegram_bot_token_placeholder: "123456789:ABCdefGHIjklmNOPQrsTUVwxyZ",
        telegram_chat_id: "Chat ID",
        telegram_chat_id_placeholder: "例如：123456789 或 -100123456789",
        telegram_chat_id_tip_title: "如何获取 Chat ID",
        telegram_chat_id_tip_1: "1. 私聊备份：搜索 userinfobot 发送 /start 获取您的专属 ID",
        telegram_chat_id_tip_2: "2. 群组/频道备份：将 Bot 拉入目标群组并赋予发言与删除消息权限，发送任意消息后获取群组 ID（通常以 -100 开头）",
        require_telegram_token: "请填写 Bot Token",
        require_telegram_chat_id: "请填写 Chat ID",
        file_unavailable: "该备份文件在 Telegram 中已失效或被删除，是否清理此无效记录？",
        record_invalid: "记录失效",
        confirm_clean: "确定清理",
        cancel_clean: "暂不清理",
        clean_record_success: "已清理失效记录",
        clean_record_fail: "清理记录失败",
        auto_backup_config: "自动备份配置",
        switch_on: "开启",
        switch_off: "关闭",
        encrypt_password: "加密密码",
        keep_old_pwd: "保持原密码不变",
        set_new_pwd: "设置新密码",
        input_encrypt_pwd: "输入加密密码",
        continue_use_old_pwd: "系统将继续使用原有的自动备份密码。",
        retain_count_label: "保留最近份数",
        retain_zero_tip: "填 0 表示不对历史备份做任何限制与清理",
        save: "保存",
        encrypted_backup: "加密备份",
        backup_security_tip: "请输入加密密码用于保护备份文件。",
        use_auto_pwd: "使用自动备份密码",
        use_new_pwd: "使用新密码",
        input_custom_pwd: "输入自定义加密密码 (至少 6 位)",
        baidu_auth_failed: "百度网盘授权失败",
        dropbox_auth_failed: "Dropbox 授权失败",
        start_backup: "开始备份",
        select_restore_file: "选择备份文件恢复",
        filename: "文件名",
        size: "大小",
        time: "时间",
        action: "操作",
        decrypt_restore: "解密恢复",
        restore_warning: "恢复操作将覆盖当前所有数据！",
        input_restore_pwd: "输入备份时的加密密码",
        confirm_restore: "确认覆盖恢复",
        center_title: "云端备份中心",
        center_desc: "配置多个备份源（Email, WebDAV, S3等），确保数据万无一失。",
        s3_region_placeholder: "auto 或 us-east-1",
        password_length_req: "必填项，长度必须 ≥ 6 位。",
        require_name: "请输入名称",
        require_webdav_url: "请输入 WebDAV 地址",
        require_username: "请输入用户名",
        require_password: "请输入密码",
        require_endpoint: "请输入 Endpoint",
        require_bucket: "请输入 Bucket",
        require_access_key: "请输入 Access Key ID",
        require_secret_key: "请输入 Secret Access Key",
        require_auto_backup_pwd: "请输入自动备份加密密码",
        config_missing: "备份源配置存在缺失内容",
        create_success: "新建成功",
        update_success: "修改成功",
        delete_confirm: "删除确认",
        delete_warning: "此操作将永久删除该备份源配置(不影响云端已备份的数据)，是否继续？",
        cancel_delete: "已取消删除",
        delete_success: "删除成功",
        testing_connection: "正在测试连接...",
        fetching_configs: "正在获取配置列表...",
        saving_config: "正在保存配置...",
        password_min_length: "密码至少 6 位",
        password_no_space: "密码不能包含空格",
        password_not_all_number: "密码不能全部为数字",
        backup_finish_title: "云端备份完成",
        backup_success_msg: "成功备份了数据",
        fetch_backup_fail: "获取备份文件失败",
        fetch_list_fail: "获取备份列表失败",
        restore_finish_title: "恢复数据结束",
        processed_total: "共处理",
        backup_files_count: "个备份文件",
        base_accounts_count: "个基准账号",
        import_success_count: "成功导入",
        new_accounts: "个新账户！",
        skipped_duplicates: "自动跳过了",
        existing_accounts: "个已有账户。"
    };
    Ti = {
        export: "数据导出",
        import: "数据导入",
        export_format: "导出格式",
        export_password: "加密密码（至少 6 位）",
        export_password_confirm: "确认密码",
        password_mismatch: "两次输入的密码不一致！",
        password_weak: "密码太弱！至少需要 6 个字符。",
        select_account: "请至少选择一个账号",
        export_success: "导出完成",
        export_failed: "导出失败，请稍后重试",
        file_too_large: "文件 {name} 太大，不能超过 10MB",
        import_password: "解密密码",
        password_wrong: "解密失败：密码错误或不支持加密标准",
        no_valid_data: "没有可导入的有效账户数据",
        import_success: "导入成功",
        task_build_pf: "构建数据：PhoneFactor 数据集",
        err_pf_parse: "[PhoneFactor] 解析失败: {detail}",
        task_prepare: "准备解析：{name}",
        task_scan_qr: "截取图中二维码：{name}",
        err_scan_qr: "[{name}] 解析图片失败: {msg}",
        err_read_fail: "[{name}] 读取失败",
        err_unrecognized: "[{name}] 无法识别该文件格式。",
        task_build_file: "构建数据：{name}",
        err_parse_fail: "[{name}] 解析失败: {detail}",
        err_read_abnormal: "[{name}] 读取异常",
        task_decrypting: "正在使用密码解密数据...",
        err_user_cancel: "[{name}] 用户取消密码输入",
        import_anomaly: "导入异常",
        task_saving: "合并保存中... ({count} 个账号)",
        msg_total_files: "<div>共处理 <b>{count}</b> 个文件。</div>",
        msg_success_accounts: '<div style="color:var(--el-color-success)">🎉 成功导入 <b>{count}</b> 个新账户！</div>',
        msg_no_new_accounts: '<div style="color:var(--el-color-warning)">⚠️ 导入账户皆已存在，无需添加。</div>',
        msg_duplicates_skipped: '<div style="color:var(--el-text-color-secondary)">ℹ️ 自动跳过了 <b>{count}</b> 个已拥有的账户。</div>',
        msg_error_summary: '<div style="color:var(--el-color-danger); margin-top: 5px;">❌ <b>错误摘要：</b><br>{errors}</div>',
        msg_offline_queued: '<div style="color:var(--el-color-warning); margin-top: 5px;">☁️ <b>离线模式</b>：账号已存入本地队列，联网后将自动同步至云端。</div>',
        batch_import_finished: "批量导入结束",
        encrypted_file: "加密文件",
        export_desc: "选择您需要的导出格式。请注意，明文导出存在安全风险。",
        hub_desc: "管理您的账户数据的导入、导出与安全备份",
        system_backup: "本系统备份",
        encrypted_json: "加密备份 (.json)",
        plaintext_json: "明文备份 (.json)",
        mobile_app: "移动端 2FA App",
        migrate_ga: "迁移到 Google Auth",
        generic_format: "通用格式",
        proprietary_protocols: "专有协议令牌",
        otpauth_txt: "文本 URI (.txt)",
        spreadsheet_csv: "表格文件 (.csv)",
        steam_guard_title: "Steam 令牌",
        steam_guard_desc: "支持 .maFile (SDA) 或 steam:// 文本",
        steam_guard_desc_guide: "支持直接导入 .maFile (Steam Desktop Authenticator) 原始备份或 <b>steam://</b> 链接。系统将自动智能识别并应用 5 位字母验证码模式。",
        blizzard_restore: "暴雪战网安全令",
        html_page: "网页文件 (.html)",
        export_pwd_title: "设置导出密码",
        pwd_placeholder_strong: "请输入高强度密码",
        pwd_placeholder_again: "请再次输入",
        start_encrypt_dl: "开始加密并下载",
        warning_title: "⚠️ 安全警告",
        warning_alert_title: "风险提示",
        warning_desc: "您正在导出未加密的明文数据。任何获取该文件/图片的人都可以直接访问您的账号验证码！",
        confirm_export: "确定导出",
        ga_title: "迁移到 Google Authenticator",
        ga_desc_1: '打开手机上的 Google Authenticator，选择"扫描二维码"进行导入',
        ga_desc_multiple: "(账号较多，已分批生成，请依次扫码)",
        btn_prev: "上一张",
        btn_next: "下一张",
        finish: "完成",
        select_account_title: "选择要导出的账号",
        search_account: "搜索服务或账号...",
        select_all_accounts: "全选所有账号",
        select_all_search: "全选搜索出的 {count} 个账号",
        selected_count: "已选: {selected} / {total}",
        no_matching: "无匹配账号",
        ga_steam_filter_notice: "为了确保兼容性，Steam 账号已自动隐藏（Google Authenticator 不支持其专有算法）。",
        migrate_btn: "迁移 {count} 个账号",
        center_title: "数据导入",
        import_desc: "支持从各类 2FA 软件或本系统的备份文件中恢复数据。",
        auto_identify_tip: "💡 自动识别文件类型并导入",
        drag_drop_tip: "将备份文件或迁移二维码截图拖到此处，或 <em>点击上传</em>",
        support_desc: "支持列表",
        ga_auth_desc: '请在 App 内导出"迁移二维码"，将截图直接上传 (.png / .jpg)',
        ms_auth_desc: "Microsoft Authenticator",
        ms_auth_detail: "仅支持 Android 手机,导出以下3个文件后,同时选中上传即可导入",
        import_guide: "导入指南",
        batch_import_processing: "📦 批量导入处理中",
        batch_progress: "{processed} / {total} 任务已完成",
        decrypt_backup_title: "🔓 解密备份文件",
        detect_aegis: "探测到 Aegis 加密备份",
        detect_steam_mafile: "检测到 Steam .maFile 备份，将自动应用专有算法...",
        detect_proton_auth: "检测到 Proton Authenticator 加密备份",
        detect_proton_pass: "检测到 Proton Pass 加密备份 (.pgp)",
        detect_2fas: "检测到 2FAS Auth 加密备份",
        detect_ente: "检测到 Ente Auth 加密备份",
        detect_bitwarden_pass: "检测到 Bitwarden Pass 加密备份",
        detect_system: "检测到本系统加密备份",
        input_decrypt_pwd_label: "请输入该备份的解密密码：",
        input_decrypt_pwd_placeholder: "输入当时设置的导出密码",
        confirm_decrypt_import: "确认解密并导入",
        system_backup_format: "本系统备份",
        password_manager_format: "密码管理器",
        encrypted_backup_json: "加密备份 (.json)",
        plaintext_backup_json: "明文备份 (.json)",
        mobile_app_format: "移动端 2FA App",
        proton_auth: "Proton Auth",
        lastpass_auth: "LastPass Authenticator (.json)",
        fetching_accounts: "正在获取账号数据...",
        no_accounts_to_export: "没有可导出的账号",
        encrypting: "正在加密...",
        generating_file: "正在生成导出文件...",
        generating_qr: "正在生成二维码...",
        reading_backup: "正在读取备份文件...",
        uploading_processing: "正在上传并处理...",
        unsupported_format: "未能识别或不支持的文件格式。",
        unsupported_decrypt: "暂不支持解密来自",
        encrypted_backup_tail: "的加密备份文件。"
    };
    Ai = {
        apps_review_title: "2FA APP 排行榜",
        apps_review_desc: "主流 2FA 软件评测与避坑指南",
        apps_review_table: {
            app_name: "APP 名称",
            platforms: "支持平台",
            website: "官方网站",
            pros: "特色功能",
            cons: "缺点与不足",
            security: "安全事故史",
            summary: "简评",
            rating: "推荐星级"
        },
        apps: {
            "2fas": {
                pros: "全开源、完全本地优先、支持 iCloud / Google Drive 强加密同步，安全性极高。",
                cons: "桌面端并非独立 App，必须依赖手机在线扫码配对浏览器插件使用，有些繁琐。",
                security: "无安全事故记录",
                summary: "安全社区口碑极佳的本地优先 2FA，但在 PC 端体验略显折腾。"
            },
            aegis: {
                pros: "完全开源、极高强度的本地加密库、异常强大的自定义与格式兼容导出功能。",
                cons: "仅支持 Android 端，缺乏原生的跨平台云同步或 iOS 版本。",
                security: "无安全事故记录",
                summary: "Android 平台极客与隐私倡导者的绝对首选，硬核且强大。"
            },
            ente: {
                pros: "完全开源、支持端到端加密云同步、提供全平台原生桌面端及网页版，UI精美。",
                cons: "由于所有数据依赖云同步，对纯“离线本地”原教旨主义者来说不够纯粹。",
                security: "无安全事故记录",
                summary: "近年来口碑狂飙的跨平台同步之王，Authy 最完美的开源接班人。"
            },
            proton: {
                pros: "与极度注重隐私的 Proton 生态深度结合，支持端到端加密同步。",
                cons: "本质上是密码管理器的一部分，可能存在生态绑定问题。",
                security: "无安全事故记录",
                summary: "Proton 生态用户的绝佳选择，安全隐私拉满。"
            },
            bitwarden: {
                pros: "开源免费、由著名的 Bitwarden 安全团队打造，体验流畅。",
                cons: "作为一个独立 APP，功能目前还相对基础（注：BW主密码管理器内也自带 2FA）。",
                security: "无安全事故记录",
                summary: "大厂背书的纯净好产品，适合追求极简与信任大厂商的用户。"
            },
            google: {
                pros: "极其轻量纯粹、开箱即用，支持极其方便的二维码批量导出功能，近期加入了云端同步支持。",
                cons: "闭源，虽然加入了云同步但早期无端到端加密（近期已改善），无官方桌面端。",
                security: "曾因其初步加入的云同步缺乏端到端加密被发愁，现已支持。",
                summary: "纯粹且受众极广的基础款，二维码批量导出功能是它的杀手锏。"
            },
            microsoft: {
                pros: "如果你是重度微软生态用户，它支持免密登录且合规性极佳。",
                cons: "体积极度臃肿，强制绑定微软账号，且绝对禁止以标准格式导出密钥（锁死生态），云备份不能跨 iOS/Android 平台通用。",
                security: "大量用户反馈换机恢复后所有数据清空，存在安全隐患。",
                summary: "为了单纯的 TOTP 而装它过于沉重，且“不准导出”的数据霸权令人反感（避坑）。"
            },
            freeotp: {
                pros: "由 Red Hat 维护的开源项目，注重纯粹与自由。",
                cons: "界面极其复古且停止维护已久，近乎“半废弃”状态。",
                security: "无安全事故记录",
                summary: "情怀满分的开源工具，但已不适合现代日常使用。"
            },
            authy: {
                pros: "早年支持云同步与多端设备的开创者，使用极其便利。",
                cons: "闭源、必须绑定手机号码、官方阻止用户自由导出密钥、桌面端已彻底下架。",
                security: "母公司 Twilio 曾遭受严重黑客攻击，泄露大量敏感数据。",
                summary: "曾经的王者，如今由于封闭协议和隐私风险，建议尽早逃离（避坑）。"
            },
            lastpass: {
                pros: "便于 LastPass 生态的用户直接一站式管理。",
                cons: "云端采用闭源架构，完全和 LastPass 解绑不够独立。",
                security: "LastPass 近年发生过轰动全球的脱裤级数据泄露事件。",
                summary: "由于 LastPass 本身的声誉危机，不建议将关键 2FA 交托于此（极度警告）。"
            },
            raivo: {
                pros: "曾是 iOS 端备受推崇的最强开源本地 2FA 应用。",
                cons: "最近被一家名为 Mobime 的不明空壳公司收购。",
                security: "收购后发生灾难性更新故障，大量用户所有本地种子被随机清空且至今无法恢复。",
                summary: "发生过极其恶劣的信任背叛与数据销毁事件，绝不可用（极度警告）。"
            }
        },
        qr_parser: "二维码解析",
        password_generator: "强密码生成",
        time_sync: "时间校准",
        totp_sandbox: "TOTP 沙盒",
        parse_success: "解析成功",
        invalid_uri: "无效的 OTP URI",
        secret_required: "密钥不能为空",
        service_required: "请填写服务商和账号",
        save_to_vault: "保存到我的账户",
        sync_success: "校准完成，偏差 {offset}ms",
        sync_failed: "无法连接服务器",
        select_chars: "请至少选择一种字符类型",
        title: "实用工具箱",
        desc: "生成密码、同步时间及解析二维码等实用工具集合。",
        totp_secret_title: "TOTP 密钥工具",
        totp_secret_desc: "随机生成密钥，支持 Base32 格式转换与校验",
        password_gen_title: "密码生成器",
        password_gen_desc: "生成高强度随机密码，支持自定义长度和字符类型",
        time_sync_title: "时间校准器",
        time_sync_desc: "精准检测本地时间与服务器时间的偏差",
        qr_parser_title: "二维码解析器",
        qr_parser_desc: "识别图片中的二维码内容，提取 OTP 链接",
        length: "长度",
        regenerate: "重新生成",
        select_one_char_type: "请至少选择一种字符类型",
        password_copied: "密码已复制",
        qr_result: "解析结果",
        qr_parsed: "二维码解析成功",
        local_time: "本地设备时间",
        server_time: "服务器时间 (估算)",
        time_offset: "时间偏差",
        network_latency: "网络延迟",
        check_now: "立即检测",
        sync_completed: "校准完成，偏差 {offset}ms",
        secret_config: "密钥配置",
        basic_info: "基础信息",
        preview: "结果预览",
        refresh_after: "后刷新",
        advanced_settings: "高级设置 (算法/位数/步长)",
        reset_time: "重置",
        prev_period: "上个周期",
        next_period: "下个周期",
        scanner_camera: "摄像头扫描",
        scanner_image: "图片识别",
        camera_click_to_open: "点击开启摄像头",
        camera_open: "开启摄像头",
        camera_stop: "停止扫描",
        image_placeholder: "点击选择或拖拽二维码图片",
        camera_unsupported: "您的浏览器不支持摄像头功能",
        camera_access_denied: "无法访问摄像头，请检查权限设置",
        qr_not_recognized: "未能从图片中识别出有效的二维码",
        sync_normal: "时间同步正常",
        sync_normal_desc: "本地时间与服务器误差极小，不影响 2FA 验证。",
        sync_warning: "存在微小偏差",
        sync_warning_desc: "建议校准本地时间，但通常仍可使用。",
        sync_error: "时间偏差过大",
        sync_error_desc: "严重偏差！2FA 验证码将失效，请务必校准设备时间。",
        sync_offline: "使用智能回退缓存",
        sync_offline_desc: "当处于离线模式，目前使用断网前的时间偏差缓存推算真实时间。",
        secret_empty: "密钥不能为空",
        fill_info: "请填写服务商和账号",
        current_offset: "当前偏差",
        totp_hex: "Hex (十六进制)",
        totp_config_preview: "配置参数以生成预览",
        totp_algorithm: "算法",
        totp_algo_sha1: "SHA1",
        totp_digits: "位数",
        totp_period: "周期",
        totp_scan_qr_title: "扫描二维码",
        health_check_title: "系统安全体检",
        health_check_desc: "检查服务器核心环境安全配置并给出漏洞修复建议"
    };
    Si = {
        session_expired: "登录状态已失效，请重新登录",
        subtitle: "一个十分安全的 2FA 服务管理工具",
        login: "登录",
        logout_success: "已安全退出",
        logout_confirm: "您确定要退出当前登录吗？",
        fetch_providers_failed: "获取身份提供商列表失败，请稍后重试",
        oauth_failed: "获取授权链接失败：提供商未配置或失效",
        oauth_network_error: "获取授权状态遭遇网络异常",
        login_with: "通过 {provider} 授权登录",
        privacy_title: "安全隐私提示",
        privacy_desc: "系统基于 OAuth 2.0 协议验证身份，绝不会获取、记录或传输您的密码信息。",
        ext_auth_success_title: "浏览器扩展授权成功",
        ext_auth_success_desc: "请点击浏览器右上角的扩展图标继续设置密码。",
        passkey_login: "通过通行密钥登录",
        passkey_not_supported: "您的浏览器或设备不支持通行密钥",
        secure_login_in_progress: "正在安全登录中",
        secure_login_sub: "请稍候，系统正在与 {provider} 交换安全凭证...",
        auth_failed_title: "授权失败",
        back_to_login: "返回登录页",
        default_provider: "身份提供商",
        oauth_declined: "您拒绝了 {provider} 的授权请求",
        telegram_missing_hash: "Telegram 登录缺少签名参数",
        missing_auth_params: "URL 缺少必要的授权凭证参数",
        state_mismatch: "安全警告：State 校验失败，请求可能被篡改",
        login_rejected: "登录验证被后端拒绝",
        network_abnormal: "网络请求异常，请稍后再试",
        web3_login: "通过 Web3 钱包登录",
        web3_qr_title: "WalletConnect 扫码登录",
        web3_auth_flow: "Web3 钱包安全登录",
        web3_scan_tip: "请使用 MetaMask、Trust Wallet 等兼容 WalletConnect 的 APP 扫描此二维码进行授权",
        step_connect: "连接钱包",
        step_sign: "签名确认",
        step_verify: "验证登录",
        web3_status_preparing: "准备建立 WebSocket 加密信道...",
        web3_status_connected: "已连接！请返回钱包完成签名挑战",
        web3_status_verifying: "正在同步签名数据至后端...",
        web3_action_connect: "前往钱包授权",
        web3_action_sign: "唤起钱包确认签名",
        web3_action_verifying: "正在验证身份...",
        web3_fallback_tip: "若跳转失败，请手动复制链接并在钱包中打开：",
        web3_notify_signature: "连接成功，返回钱包完成【签名确认】",
        web3_return_to_wallet: "请返回 {wallet} 进行签名",
        web3_reopen_wallet: "重新唤起 {wallet}",
        web3_return_to_system_wallet: "请返回系统钱包完成签名",
        web3_try_system_reopen: "尝试系统唤醒"
    };
    Pi = {
        not_supported: "您的浏览器不支持摄像头功能",
        no_access: "无法访问摄像头，请检查权限设置",
        no_qr_found: "未能从图片中识别出有效的二维码"
    };
    Ii = {
        offline: "当前处于离线模式，无法进行此操作",
        session_expired: "会话已过期，请重新登录",
        unauthorized: "未授权的访问",
        forbidden: "禁止访问",
        server_error: "服务器异常",
        request_failed: "请求失败",
        network_error: "网络请求异常",
        account_not_found: "未找到该账号",
        account_exists: "账号已存在",
        invalid_secret_format: "密钥格式无效（必须为 Base32，至少 16 个字符）",
        missing_service_account: "服务商和账号名称为必填项",
        no_account_ids: "未提供账号 ID",
        export_type_invalid: "无效的导出类型",
        export_password_length: "导出密码至少需要 6 个字符",
        missing_content_type: "内容和类型不能为空",
        import_password_required: "加密导入需要密码",
        parse_failed: "解析失败，请检查文件格式或密码是否正确",
        provider_not_found: "未找到提供商",
        missing_fields: "缺少必填字段",
        backup_password_length: "自动备份密码至少需要 6 个字符",
        backup_password_required: "自动备份密码为必填项（至少 6 个字符）",
        manual_backup_password_needed: "使用自动密码进行手动备份要求先配置好自动备份密码。",
        filename_required: "文件名为必填项",
        no_session: "未授权：缺少会话 cookie",
        csrf_mismatch: "请求被拒绝：CSRF token 不匹配",
        token_expired: "未授权：Token 已过期或无效",
        oauth_state_invalid: "无效或缺失的 OAuth state 参数。安全校验失败。",
        oauth_code_missing: "缺少 OAuth code 参数",
        not_whitelisted: "未配置访问白名单。拒绝登录。",
        unauthorized_user: "未授权的用户，拒绝登录！",
        oauth_token_revoked: "存储源授权已失效，请在下方点击配置图标重新授权。",
        connection_failed: "连接失败",
        backup_failed: "备份失败",
        download_failed: "下载失败",
        delete_failed: "删除失败",
        oauth_config_incomplete: "OAuth 配置不完整",
        oauth_api_error: "OAuth API 错误",
        oauth_token_exchange_failed: "OAuth token 交换失败",
        telegram_missing_bot_name: "尚未配置 Telegram Bot Name",
        telegram_missing_query: "Telegram 提供商需要完整的查询参数，不仅是 code",
        telegram_missing_bot_token: "尚未配置 Telegram Bot Token",
        telegram_missing_hash: "缺少哈希签名",
        telegram_signature_failed: "Telegram 签名验证失败",
        telegram_login_expired: "Telegram 登录数据已过期",
        telegram_config_incomplete: "Telegram 配置不完整 (缺少 Token 或 Chat ID)",
        telegram_db_missing: "缺少数据库连接或 Provider ID",
        telegram_api_error: "Telegram API 错误",
        telegram_upload_failed: "Telegram 上传失败",
        telegram_download_failed: "Telegram 下载失败",
        file_not_found_in_history: "在历史记录中找不到此文件",
        telegram_file_path_missing: "Telegram 未返回文件路径",
        invalid_emergency_verification: "验证失败！请核对 PDF 文件中密钥的最后 4 位",
        s3_config_incomplete: "S3 配置不完整",
        s3_api_error: "S3 API 错误",
        s3_list_failed: "获取 S3 对象列表失败",
        s3_upload_failed: "S3 上传失败",
        s3_download_failed: "S3 下载失败",
        s3_delete_failed: "S3 删除失败",
        webdav_config_incomplete: "WebDAV 配置不完整",
        webdav_upload_failed: "WebDAV 备选方案上传失败",
        webdav_download_redirect_failed: "WebDAV 重定向请求失败",
        webdav_download_failed: "WebDAV 备选方案下载失败",
        webdav_delete_failed: "WebDAV 备选方案删除失败",
        unsupported_provider: "不支持的提供商",
        webauthn_challenge_missing: "身份验证挑战已过期，请刷新页面重试",
        webauthn_registration_failed: "通行密钥注册失败",
        webauthn_login_failed: "通行密钥登录失败",
        passkey_not_found: "未找到对应的通行密钥凭证",
        email_config_incomplete: "邮箱备份配置不完整 (缺少 SMTP 服务器、账号或收件人)",
        email_db_missing: "缺少数据库连接或 Provider ID",
        email_send_failed: "邮件发送失败",
        email_send_failed_via_relay: "通过中继发送邮件失败",
        email_download_not_supported: "邮件备份不支持直接下载，请从邮箱附件中手动获取备份文件",
        smtp_greeting_failed: "SMTP: 服务器问候失败",
        smtp_ehlo_failed: "SMTP: EHLO 指令失败",
        smtp_starttls_ready_failed: "SMTP: STARTTLS 升级失败",
        smtp_ehlo_after_tls_failed: "SMTP: TLS 握手后 EHLO 失败",
        smtp_auth_prompt_user_failed: "SMTP: 等待输入用户名失败",
        smtp_auth_prompt_pass_failed: "SMTP: 等待输入密码失败",
        smtp_auth_success_failed: "SMTP: 身份验证失败 (用户名或授权码无效)",
        smtp_mail_from_failed: "SMTP: 发件人指令失败",
        smtp_rcpt_to_failed: "SMTP: 收件人指令失败",
        smtp_data_ready_failed: "SMTP: 数据传输指令失败",
        smtp_message_accepted_failed: "SMTP: 邮件发送提交失败",
        smtp_connection_closed: "SMTP: 连接被意外关闭",
        health_check_failed: "环境配置漏洞警告，系统已被锁定！"
    };
    Li = {
        title: "配置安全未达标",
        subtitle: "我们检测到当前环境配置存在高危风险或未完成初始化，为了保护您的数据安全，已禁止系统访问。",
        passed_title: "体检通过",
        passed_subtitle: "太棒了！您的 NodeAuth 安全防御体系处于最佳状态。",
        go_to_login: "前往登录",
        how_to_fix: "如何修复？",
        generate_new: "重新生成",
        view_docs: "查看相关配置文档",
        missing_fields: "缺失以下环境变量：",
        passed_checks_title: "检测通过项",
        passed_checks: {
            encryption_key_passed: "ENCRYPTION_KEY 长度达标",
            jwt_secret_passed: "JWT_SECRET 长度达标",
            oauth_allow_all_passed: "全局放行已被禁止 (防止任意人员登入)",
            allowed_users_passed: "系统已配置有效的管理员邮箱白名单",
            oauth_provider_configured: "系统已正确配置至少一套 OAuth 第三方登录",
            license_passed: "NODEAUTH_LICENSE 授权已激活"
        },
        issues: {
            encryption_key_too_short: {
                title: "核心加密密钥合规性错误 (ENCRYPTION_KEY)",
                desc: "您当前的环境变量 ENCRYPTION_KEY 为空或长度不足 32 位！这把钥匙用于加密数据库内的所有验证器种子，增加复杂度避免被暴力破解。"
            },
            jwt_secret_too_short: {
                title: "会话签名密钥脆弱 (JWT_SECRET)",
                desc: "您当前的环境变量 JWT_SECRET 长度不足 32 位，增加复杂度防止黑客伪造身份凭证直接登入系统。"
            },
            oauth_allow_all_enabled: {
                title: "致命警告：开启了全局放行访问",
                desc: "您当前配置了 OAUTH_ALLOW_ALL=true。这不是演习，此时任何人进入主页都能直接操控您的验证器数据！"
            },
            allowed_users_empty: {
                title: "登录白名单为空",
                desc: "系统处于锁定保护中，但您没有配置 OAUTH_ALLOWED_USERS。此时没有任何人能够登录本系统。"
            },
            github_config_incomplete: {
                title: "GitHub 登录配置不完整",
                desc: "GitHub OAuth 配置参数缺失。"
            },
            telegram_config_incomplete: {
                title: "Telegram 登录配置不完整",
                desc: "Telegram OAuth 配置参数缺失。"
            },
            google_config_incomplete: {
                title: "Google 登录配置不完整",
                desc: "Google OAuth 配置参数缺失。"
            },
            nodeloc_config_incomplete: {
                title: "NodeLoc 登录配置不完整",
                desc: "NodeLoc OAuth 配置参数缺失。"
            },
            gitee_config_incomplete: {
                title: "Gitee 登录配置不完整",
                desc: "Gitee OAuth 配置参数缺失。"
            },
            cloudflare_config_incomplete: {
                title: "Cloudflare Access 配置不完整",
                desc: "Cloudflare Access OAuth 配置参数缺失。"
            },
            no_provider_configured: {
                title: "未配置任何登录方式",
                desc: "您必须至少配置一种合法的 OAuth2 登录方式（如 GitHub、Telegram）才能使用系统。"
            },
            license_missing: {
                title: "系统未激活 (NODEAUTH_LICENSE)",
                desc: "您尚未配置授权许可证，前往 https://license.nodeauth.io/ 获取，然后根据不同部署方式填入，将其填入 NODEAUTH_LICENSE 。"
            },
            license_domain_mismatch: {
                title: "授权域名不匹配",
                desc: "检测到当前运行域名与 License 中绑定的域名不符。"
            },
            license_expired: {
                title: "授权许可证已过期",
                desc: "您的授权许可证已超过有效期。"
            },
            license_invalid_signature: {
                title: "授权签名校验失败",
                desc: "License 签名无效，可能已被恶意篡改。"
            },
            license_invalid_format: {
                title: "授权许可证格式非法",
                desc: "检测到 License 字符串格式错误，请确保填入的是授权中心生成的完整原始 Base64 字符串。"
            },
            license_invalid: {
                title: "授权校验未通过",
                desc: "当前的许可证无法通过系统校验，请检查是否填错或过期。"
            }
        },
        suggestions: {
            suggestion_deploy_by_worker: "Worker 一键部署: 前往 Cloudflare 后台 -> Workers 和 Pages -> nodeauth -> 设置 -> 变量和机密",
            suggestion_deploy_by_gitaction: "Github Action 部署: 前往 Fork 仓库 -> Settings -> Secrets and variables -> Actions",
            suggestion_deploy_by_docker: "Docker Compose 部署: 修改 docker-compose.yml -> environment",
            encryption_key_suggestion: "请复制下方为您预生成的高强度随机密钥，根据不同部署方式填入，将其填入 ENCRYPTION_KEY 。",
            jwt_secret_suggestion: "请复制下方为您预生成的高强度随机密钥，根据不同部署方式填入，将其填入 JWT_SECRET 。",
            oauth_allow_all_suggestion: "根据不同部署方式，将 OAUTH_ALLOW_ALL 删除将其值修改为 false。",
            allowed_users_suggestion: "根据不同部署方式，填入 OAUTH_ALLOWED_USERS ",
            github_config_suggestion: "根据不同部署方式，填入 OAUTH_GITHUB_CLIENT_ID、OAUTH_GITHUB_CLIENT_SECRET、OAUTH_GITHUB_REDIRECT_URI ",
            telegram_config_suggestion: "请在 BotFather 检查机器人配置，确保信息填全，根据不同部署方式，填入 OAUTH_TELEGRAM_BOT_NAME、OAUTH_TELEGRAM_BOT_TOKEN、OAUTH_TELEGRAM_REDIRECT_URI",
            google_config_suggestion: "请前往 Google Cloud Console 检查凭据配置，根据不同部署方式，填入 OAUTH_GOOGLE_CLIENT_ID、OAUTH_GOOGLE_CLIENT_SECRET、OAUTH_GOOGLE_REDIRECT_URI",
            nodeloc_config_suggestion: "请前往 NodeLoc 面板检查您的开发者凭据，根据不同部署方式，填入 OAUTH_NODELOC_CLIENT_ID、OAUTH_NODELOC_CLIENT_SECRET、OAUTH_NODELOC_REDIRECT_URI 填入",
            gitee_config_suggestion: "请核对 Gitee 开发者凭据，，根据不同部署方式，填入 OAUTH_GITEE_CLIENT_ID、OAUTH_GITEE_CLIENT_SECRET、OAUTH_GITEE_REDIRECT_URI 填入",
            cloudflare_config_suggestion: "需要四位一体的参数：Client ID, Secret, Org Domain, Redirect URI，根据不同部署方式，填入  OAUTH_CLOUDFLARE_CLIENT_ID、OAUTH_CLOUDFLARE_CLIENT_SECRET、OAUTH_CLOUDFLARE_REDIRECT_URI 填入",
            no_provider_suggestion: "阅读NodeAuth Worker 的 README，挑选最适合您且配置最简单的一种登录方式，按照其说明获取 Client ID 与 Secret 并在云端配置。",
            apply_license: "请点击下方按钮前往授权中心，系统会自动识别您的域名。完成激活后，请将生成的许可证填入环境变量 NODEAUTH_LICENSE。",
            rebind_license: "请确定并在授权中心重新绑定您的部署域名，确保其与 window.location.hostname 完全一致。",
            renew_license: "您的授权已过期，请前往中心进行续费或重新申领。",
            license_suggestion: "请点击下方按钮前往授权中心，系统会自动识别您的域名。完成激活后，请将生成的许可证填入环境变量 NODEAUTH_LICENSE。"
        },
        apply_license_btn: "获取授权许可",
        copy_unsupported: "您的浏览器不支持自动复制，请手动选中复制。",
        copy_success: "安全密钥已复制到剪贴板",
        connection_failed: "无法连接到服务端进行安全校验"
    };
    Ni = {
        management: "通行密钥管理",
        passkey_title: "通行密钥",
        passkey_desc: "通过生物识别（如指纹或面容）实现无密码登录，为您提供更安全、更快速的账户访问体验。",
        passkey_list: "已绑定的通行密钥",
        add_passkey: "添加",
        no_passkeys: "您尚未绑定任何通行密钥",
        credential_name: "设备名称",
        created_at: "绑定时间",
        last_used: "最后使用",
        delete_confirm: "确定要移除这个通行密钥吗？移除后您将无法使用该设备直接登录。",
        add_dialog_title: "添加新的通行密钥",
        add_dialog_tip: "建议为您的设备起一个容易辨识的名称（如：我的 iPhone 15）。",
        default_name: "我的新设备",
        registering: "正在与硬件通信...",
        register_success: "通行密钥绑定成功！",
        name_required: "名称不能为空"
    };
    Oi = {
        emergency_title: "加密密钥 ENCRYPTION_KEY 备份",
        emergency_subtitle: "系统初始化成功。为了您的数据安全，必须对加密密钥进行物理备份。",
        encryption_key_label: "核心加密密钥",
        importance_title: "为什么很重要？",
        importance_desc: "本系统采用零知识加密。核心加密密钥是解密所有令牌的唯一凭证。若服务器环境变量丢失，此密钥是找回数据的唯一途径。",
        save_instruction: "请在该页面下载 PDF 核心密钥，并将其存放在安全的地方（如邮箱、网盘或打印后保存）。",
        download_pdf: "第一步：下载 PDF 核心密钥",
        download_pdf_btn: "下载 核心密钥 PDF 文档",
        verify_title: "第二步：验证并激活",
        verify_desc: "请打开您刚刚下载的 PDF 文件，填写核心密钥的最后 4 位。",
        verify_placeholder: "最后 4 位",
        verify_btn: "马上验证",
        invalid_verification: "验证失败。请核对 PDF 中的密钥最后 4 位。",
        confirm_success: "核心密钥备份已完成，欢迎使用 NodeAuth！",
        pdf_filename: "NodeAuth_Worker_核心密钥备份",
        pdf_header: "NodeAuth 核心密钥备份",
        pdf_self_custody: "为什么不能丢失？",
        pdf_self_custody_desc: "NodeAuth 是一个完全自托管的系统。我们不存储您的主密码或加密密钥。这意味着如果您丢失了此密钥，您的所有数据将永久锁定，无法恢复。",
        pdf_info_title: "系统信息",
        pdf_server_url: "服务器地址: ",
        pdf_admin_email: "管理员邮箱: ",
        pdf_gen_date: "生成日期: ",
        pdf_key_title: "核心加密密钥 (ENCRYPTION_KEY)",
        pdf_license_title: "系统授权许可 (NODEAUTH_LICENSE)",
        pdf_license_warning: "警告：此许可是您的系统合法使用凭证，在重新部署或数据迁移时遗失将导致无法授权。",
        pdf_usage_title: "如何使用?",
        pdf_usage_desc: "如果您的服务器环境变量丢失，请在重新部署时将核心密钥和授权许可，填入环境变量 ENCRYPTION_KEY、NODEAUTH_LICENSE 即可恢复数据。",
        pdf_warning: "警告：切勿遗失此密钥，这是恢复您数据的唯一途径。",
        pdf_footer: "NodeAuth  A Secure 2FA Management Tool"
    };
    Ci = {
        light: "浅色模式",
        dark: "深色模式",
        auto: "跟随系统"
    };
    Di = {
        title: "系统环境变量异常",
        subtitle: "无法解密账号数据，系统已进入保护模式",
        alert_title: "数据保护已激活",
        alert_desc: "检测到服务端 ENCRYPTION_KEY 配置与历史数据不匹配。为防止旧数据被意外覆盖，系统已禁止一切验证码生成及修改操作。",
        guide_title: "自救修复指南",
        has_pdf_title: "拥有 Recovery Kit PDF：",
        has_pdf_desc: "请找出初始安装时保存的 PDF 文件，将其中的 ENCRYPTION_KEY 重新填入环境变量并重启服务即可完美恢复。",
        lost_pdf_title: "丢失 Recovery Kit PDF：",
        lost_pdf_desc: "如果原件丢失，请参考灾难恢复文档获取更多恢复路径。",
        btn_guide: "查看灾难恢复指南",
        link_recovery: "https://wiki.nodeauth.io/recovery/"
    };
    Ri = {
        common: pi,
        pwa: gi,
        search: hi,
        menu: yi,
        about: bi,
        vault: vi,
        settings: wi,
        security: ki,
        backup: Ei,
        migration: Ti,
        tools: Ai,
        auth: Si,
        camera: Pi,
        api_errors: Ii,
        healthCheck: Li,
        passkey: Ni,
        emergency: Oi,
        theme: Ci,
        decryption_error: Di
    };
    Mi = {
        confirm: "Confirm",
        cancel: "Cancel",
        setup: "Setup",
        disable: "Disable",
        tip: "Tip",
        success: "Success",
        error: "Error",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        add: "Add",
        close: "Close",
        back: "Back",
        prev: "Prev",
        next: "Next",
        copy: "Copy",
        refresh: "Refresh",
        loading_failed: "Component loading failed, please check your network connection",
        copy_success: "Copy success",
        copy_fail: "Copy failed",
        offline_mode: "Network disconnected, the application is currently in offline cache mode",
        loading_data: "Fetching data, please wait...",
        resource_loading: "Loading resources...",
        data_security: "Data Security",
        warning: "Warning",
        uncategorized: "Uncategorized",
        all: "All",
        encrypted: "Encrypted",
        plaintext: "Plaintext",
        remove: "Remove",
        other: "Other",
        no_data: "No Data Found",
        understand: "Understand",
        offline_tag: "Offline",
        network_error_tag: "Network Error",
        enabled: "Enabled",
        disabled: "Disabled"
    };
    Fi = {
        install: "Install App",
        install_desc: "Install NodeAuth on your device for quick access and offline capability",
        already_installed: "Installed",
        update_available: "Update Available",
        update_ready: "A new version of NodeAuth is ready. Please click the button below to complete the update.",
        pwa_refresh: "Update Now",
        update_success: "Update Successful",
        offline_feature_error_title: "Network Required for Initial Use",
        offline_feature_error_desc: "This advanced feature requires a network connection to download its necessary components for the first time. Please connect to the internet and try again."
    };
    xi = {
        placeholder: "Search service, account, or category...",
        no_matching_accounts: "No matching accounts found",
        selected_items: "Selected {count} items",
        select_all_loaded: "Select all loaded"
    };
    Ui = {
        vault: "Vault List",
        add: "Add Account",
        backup: "Cloud Backup",
        migration: "Migration",
        tools: "Toolbox",
        passkey: "Passkey",
        security: "Security",
        settings: "Settings",
        appearance: "Appearance",
        language: "Language",
        theme: "Theme Mode",
        about: "About",
        logout: "Sign Out",
        mobile: {
            vault: "Vault",
            data: "Data",
            tools: "Tools",
            settings: "Settings"
        }
    };
    Bi = {
        title: "About",
        version: "Version",
        commit: "Commit Hash",
        platform: "Platform",
        tagline: "A Secure 2FA Management Tool",
        open_source_github: "GitHub",
        documentation: "Wiki"
    };
    Hi = {
        go_add_vault: "Go to Add Account",
        loading_more: "Loading more...",
        no_more_accounts: "No more accounts",
        reorder_offline_disabled: "Sorting is not supported in offline mode",
        edit_account: "Edit Account",
        service_name: "Service Name (e.g., Google, GitHub)",
        account_identifier: "Account Identifier (e.g., Email)",
        category_optional: "Category (Optional)",
        empty_vault: "Empty here, go add your first 2FA account!",
        export_account: "Export",
        add_account: "Manual",
        add_scan: "Scan QR Code",
        add_mode_camera: "Camera",
        add_mode_image: "Image",
        service: "Service",
        account: "Account",
        secret: "Secret",
        category: "Category",
        delete_confirm: "Are you sure you want to delete {service}?",
        hard_delete_confirm: "Are you sure you want to completely delete {service}? This operation cannot be undone!",
        delete_success: "Account deleted",
        delete_batch_confirm: "Are you sure you want to delete {count} selected account(s)?",
        delete_batch_success: "Successfully deleted {count} account(s)",
        copy_failed: "Copy failed. Your browser might disable clipboard operations.",
        qr_invalid: "Invalid QR code format. Please scan a valid OTP QR code.",
        add_success: "Account added successfully",
        update_success: "Account details updated",
        not_generated_yet: "Token has not been generated yet, please wait.",
        duplicate_confirm: "An account might already exist. Continue adding?",
        generate_fail: "Invalid OTP URI",
        add_account_tip: "Support adding accounts via camera scan, image recognition, or manual input.",
        invalid_qr_format: "Invalid QR code format, please scan a valid OTP QR code.",
        service_label: "Service",
        unknown_service: "Unknown Service",
        account_label: "Account",
        unnamed_account: "Unnamed Account",
        param_label: "Params",
        digits_suffix: " digits",
        period_suffix: "s",
        confirm_add_title: "Parsed successfully, confirm add?",
        input_service_placeholder: "Enter service name",
        input_account_placeholder: "Enter account or email",
        input_secret_label: "Secret Key (Base32)",
        input_secret_placeholder: "Enter a secret key of 16+ characters",
        generate_random_secret: "Randomly generate secret",
        digits_label: "Digits",
        digits_5: "5 Digits",
        digits_6: "6 Digits",
        digits_8: "8 Digits",
        period_label: "Period",
        period_30s: "30 Seconds",
        period_60s: "60 Seconds",
        algorithm_label: "Algorithm",
        counter_label: "Counter",
        algo_sha1: "SHA1 (Default)",
        algo_steam: "SHA1",
        otp_type_label: "Token Type",
        otp_type_totp: "TOTP (Time-based)",
        otp_type_hotp: "HOTP (Counter-based)",
        otp_type_steam: "Steam Guard",
        otp_type_blizzard: "Battle.net (Blizzard Authenticator)",
        input_category_placeholder: "e.g., Work, Personal",
        confirm_add_btn: "Confirm Add",
        require_secret: "Please enter a secret key",
        secret_min_length: "Secret length is usually at least 16 chars",
        secret_invalid_char: "Contains invalid characters (A-Z, 2-7 only)",
        require_service: "Please enter service name",
        require_account: "Please enter account identifier",
        export_qr_tip: "Scan the QR code with any 2FA app to add this account",
        hide_secret: "Hide",
        show_secret: "Show",
        copy_secret: "Copy Secret",
        copy_otp_url: "Copy OTPAuth URL",
        total_count: "Total {count} accounts",
        filtered_count: 'Total {count} accounts in "{category}"',
        sort_updated: "Account order updated",
        sort_by: "Sort By",
        sort_name: "Name (A-Z)",
        sort_newest: "Recently Added",
        offline_pending_sync: "Offline Mode: {count} changes pending sync",
        pending_sync_tip: "Changes to this account are pending cloud sync",
        conflict_detected_tip: "Conflict detected! Click to resolve",
        conflict_notice: "Other device updated this item. Keep local?",
        force_sync: "Force Sync",
        discard_local: "Discard",
        conflict_force_applied: "Force sync triggered",
        conflict_discarded: "Local changes discarded",
        batch_import_entry_title: "Batch Import from other Apps",
        batch_import_entry_desc: "Support migrating from 20+ apps directly",
        trash: "Trash Bin",
        restore: "Restore",
        restore_success: "Account restored successfully!",
        hard_delete: "Erase Permanently",
        increment: "Manual Refresh Counter",
        increment_success: "Counter incremented successfully",
        increment_failed: "Refresh failed",
        increment_offline_queued: "Queued for sync (offline)",
        blizzard_net_restore_desc: "Fill in the information below to fetch token from official Battle.net servers",
        serial_number: "Serial Number",
        restore_code: "Restore Code",
        serial_placeholder: "e.g., KR123456789012",
        restore_code_placeholder: "e.g., XPR7VMY0YX",
        sso_token_label: "ST Token",
        sso_token_placeholder: "e.g., KR-2a5c***aed7c-1504667632",
        sso_token_hint: 'Visit <a href="https://account.battle.net/login/en/?ref=localhost" target="_blank">https://account.battle.net/login/en/?ref=localhost</a>, after successful login, copy the string after ?ST= from the address bar. Note: Token usually expires in 2 minutes.',
        get_method: "How to get",
        restoring: "Syncing with Blizzard servers...",
        restore_failed: "Sync failed. Please check if ST Token is expired or incorrect",
        blizzard_fields_required: "Please fill in Serial, Restore Code and ST Token"
    };
    Wi = {
        appearance_desc: "Personalize your interface style, language and layout display.",
        theme_desc: "Choose the visual style that suits you",
        language_desc: "Select your preferred interface language",
        display_layout: "List Layout",
        layout_desc: "Choose the list layout that suits you",
        layout_standard: "Standard Layout",
        layout_compact: "Compact Layout",
        language_changed: "Language changed"
    };
    $i = {
        title: "Security Settings",
        ghost_mode: "Ghost Mode",
        ghost_mode_desc: "Hides sensitive codes and applies a blur overlay when the app is backgrounded.",
        ghost_mode_toggle: "Enable Ghost Mode",
        ghost_mode_active: "Ghost Mode Active",
        ghost_mode_inactive: "Ghost Mode Disabled",
        offline_mode: "Offline Mode",
        offline_mode_desc: "Enable to physically block all network requests; app runs solely on local synced cache.",
        offline_mode_active: "Offline Mode Active",
        offline_mode_inactive: "Offline Mode Inactive",
        offline_check_title: "Offline Readiness Check",
        ready_label: "Ready",
        offline_check_desc: "Verifying local secure vault environment...",
        offline_incomplete_msg: "Some resources are not yet cached. Please download the missing resources.",
        offline_complete_msg: "Verification complete! Local environment is 100% ready for offline operation.",
        check_accounts: "Account Data",
        offline_trash_blocked_title: "Trash Mode",
        offline_trash_blocked_msg: "You must turn off Trash Mode before enabling Offline Mode.",
        offline_trash_enable_blocked_msg: "Trash Mode cannot be enabled in Offline Mode.",
        offline_network_blocked: "Network disconnected. Deletion is disabled to ensure data integrity. Please try again when online.",
        offline_network_restore_blocked: "Network disconnected. Restore is disabled to ensure data integrity. Please try again when online.",
        go_to_trash_settings: "Turn Off Trash Mode",
        check_components: "Core Components",
        check_engine: "Security Engine",
        check_assets: "Static Assets",
        check_sync: "Sync Status",
        download_offline: "Download Offline Resources",
        downloading: "Downloading resources...",
        confirm_enable_offline: "Confirm Enable Offline Mode",
        sync_success: "Offline resources synced successfully",
        sync_partial: "Resources downloaded but some checks failed. Please try downloading again.",
        sync_failed: "Sync failed",
        auth_missing: "Local security authorization has expired. Please log in again to ensure this device has offline storage capability.",
        vault_unreachable: "Unable to reach account API. Please check your network and try again.",
        insecure_context_blocked: "Insecure context detected. Browser has disabled offline cache (HTTPS or localhost required).",
        clipboard_cleared: "Clipboard cleared for security reasons",
        clipboard_wipe_failed: "System restriction: unable to auto-clear clipboard. Please clear it manually.",
        devices: "Login Device Management",
        devices_desc: "View and manage all logged in devices.",
        current_device: "Current Device",
        session_created_at: "Registered at",
        session_secure: "Securely Encrypted Session",
        sign_out_all_others: "Sign out all other devices",
        confirm_remove_device: "Remove Device",
        confirm_remove_device_desc: "Are you sure you want to force sign out the device '{device}'? You will need to log in again on that device.",
        confirm_signout_all_desc: "Are you sure you want to sign out all other active sessions except the current one? This is a sensitive operation.",
        cannot_remove_current: "You cannot remove the device you are currently using",
        remove: "Remove",
        pin_lock: "App Security Lock (6-digit PIN)",
        pin_lock_desc: "Requires a 6-digit PIN verification on app startup or return from background.",
        pin_settings: "App Security Lock (PIN)",
        pin_settings_desc: "Manage 6-digit PIN and biometrics",
        locked_active: "Protected",
        setup_pin_title: "Setup Security PIN",
        setup_pin_tip: "Set a 6-digit numeric PIN. If forgotten, you must reset the app and re-sync.",
        biometric_unlock: "Biometric Quick Unlock",
        biometric_unlock_desc: "Allow Fingerprint or FaceID to unlock the vault quickly.",
        biometric_prf_unsupported: "Current hardware/OS does not support",
        app_locked: "APP Locked",
        enter_pin_to_unlock: "Enter 6-digit PIN to unlock",
        forgot_pin: "Forgot PIN?",
        unlocked: "Unlocked successfully",
        reset_confirm_title: "Confirm App Reset?",
        reset_confirm_message: "Resetting will clear all local data. You will need to log in again and sync from the server.",
        unknown_device: "Unknown Device",
        disable_pin_title: "Verify Identity to Disable Security Lock",
        disable_pin_tip: "For security reasons, disabling the lock requires verifying your current 6-digit PIN.",
        confirm_disable: "Confirm Disable",
        pin_setup_success: "PIN Lock enabled",
        pin_disable_success: "Security lock successfully disabled",
        pin_verify_failed: "PIN verification failed, please try again",
        biometric_enabled: "Biometric unlock enabled",
        biometric_disabled: "Biometric unlock disabled",
        biometric_hardware_unsupported_title: "Hardware Compatibility Limited",
        biometric_hardware_unsupported_msg: "Your device supports Passkeys but does not support hardware-level key derivation (PRF extension). For security reasons, biometric quick unlock cannot be enabled. Please continue using PIN protection.",
        biometric_enable_failed: "Failed to enable",
        auto_lock_delay: "Auto-lock Delay",
        auto_lock_delay_desc: "If the app is returned from background within this period, it won't require re-authentication.",
        delay_0s: "Immediately",
        delay_30s: "30 Seconds",
        delay_1m: "1 Minute",
        delay_5m: "5 Minutes",
        delay_10m: "10 Minutes",
        auto_lock_delay_updated: "Auto-lock delay updated",
        trash_mode: "Trash Mode",
        trash_mode_desc: "When enabled, deleted accounts are temporarily moved to the trash.",
        trash_settings: "Trash Settings",
        trash_settings_desc: "Manage your trash bin status, configure auto-purge TTL timers, and perform emergency restorations.",
        trash_settings_desc_short: "Manage deleted accounts and auto-delete policy",
        manage_trash: "Manage",
        manage_trash_settings_desc: "View, restore or permanently delete accounts in the trash",
        empty_trash: "Empty",
        empty_trash_desc: "Immediately wipe all data inside the trash permanently!",
        trash_mode_enabled: "Trash Mode enabled",
        trash_mode_cleared: "Trash emptied, Trash Mode disabled",
        trash_mode_disabled: "Trash Mode disabled, new deletions will be permanent",
        trash_already_empty: "Trash is already empty",
        trash_retention_updated: "Auto-delete duration updated",
        trash_empty_success: "Trash emptied successfully, data permanently destroyed",
        trash_disable_blocked_title: "Cannot Disable",
        trash_disable_blocked_msg: "There are currently {count} items in the trash. Please process or completely empty the remaining accounts before disabling Trash Mode.",
        trash_empty_warn_title: "Dangerous Operation Warning",
        trash_empty_warn_msg: "Are you sure you want to permanently erase {count} items from the trash? This action is absolutely irreversible!",
        trash_empty_confirm: "Empty Trash",
        trash_empty_cancel: "Cancel",
        trash_retention: "Auto-Delete Duration",
        trash_retention_desc: "Items in the trash bin will be permanently deleted after this period",
        trash_7d: "7 Days",
        trash_30d: "30 Days",
        trash_forever: "Never"
    };
    Vi = {
        providers: "Backup Providers",
        add_provider: "Add",
        cloud: "Cloud Backup",
        restore: "Restore",
        type: "Provider Type",
        name: "Config Name",
        config: "Settings",
        auto_backup: "Auto Backup",
        password_required: "Auto backup requires a password (min 6 chars)",
        test_success: "Connection successful",
        test_failed: "Connection failed",
        save_success: "Cloud backup config saved",
        delete_provider_confirm: "Are you sure you want to delete this backup source?",
        backup_success: "Backup completed successfully to {provider}",
        restore_success: "Restored successfully. {count} new accounts added.",
        no_new_accounts: "All restored accounts already exist, no new items added.",
        management: "Management",
        fetching_sources: "Fetching backup sources, please wait...",
        test_connection: "Test Connection",
        connection_normal: "Connection Normal",
        connection_failed: "Connection Failed",
        auto_backup_on: "Auto Backup Enabled",
        last_backup: "Last Backup: ",
        never_backed_up: "Never",
        backup_now: "Backup Now",
        restore_data: "Restore Data",
        empty_provider: "No backup sources, click top right to add",
        edit_provider: "Edit Backup Source",
        type_label: "Type",
        type_s3: "S3 Object Storage",
        type_webdav: "WebDAV",
        type_telegram: "Telegram",
        type_gdrive: "Google Drive",
        type_onedrive: "OneDrive",
        type_baidu: "Baidu Netdisk",
        type_dropbox: "Dropbox",
        type_github: "GitHub",
        github_token: "Personal Access Token",
        github_token_placeholder: "ghp_xxxxxxxx...",
        github_owner: "Owner",
        github_owner_placeholder: "e.g., nodeauth",
        github_repo: "Repository Name",
        github_repo_placeholder: "e.g., nodeauth-backup",
        github_branch: "Branch",
        github_branch_placeholder: "e.g., main",
        require_github_token: "Please enter GitHub PAT",
        require_github_owner: "Please enter Repository Owner",
        require_github_repo: "Please enter Repository Name",
        type_email: "Email (SMTP)",
        email_smtp_host: "SMTP Server",
        email_smtp_port: "Port",
        email_smtp_host_placeholder: "e.g., smtp.gmail.com",
        email_smtp_secure: "Encryption",
        email_smtp_secure_ssl: "SSL / TLS (Port 465)",
        email_smtp_secure_tls: "STARTTLS (Port 587)",
        email_smtp_user: "Sender Account",
        email_smtp_user_placeholder: "Sender email address",
        email_smtp_password: "Auth Code / Password",
        email_smtp_from: "Sender Name (Optional)",
        email_smtp_from_placeholder: "e.g., NodeAuth Backup",
        email_smtp_to: "Recipient Email",
        email_smtp_to_placeholder: "Email address to receive the backup",
        email_tip: "Backup files will be sent as encrypted attachments to the specified email. Backup history is only stored locally.",
        email_download_not_supported: 'Email backups cannot be downloaded directly. Please open your email, save the attachment manually, and then use the "Migration" feature to import.',
        require_email_smtp_host: "Please enter SMTP server address",
        require_email_smtp_user: "Please enter the sender account",
        require_email_smtp_password: "Please enter auth code or password",
        require_email_smtp_to: "Please enter recipient email address",
        email_backup_subject: "📦 NodeAuth Scheduled Backup {time}",
        email_backup_body_intro: `Hello,

This is your NodeAuth automatic scheduled backup file. Please keep it safe.`,
        email_backup_body_filename: "Filename: {filename}",
        email_backup_body_time: "Backup Time: {time}",
        email_backup_body_note: "Note: The attachment is encrypted with AES-256. Please use your backup password to decrypt and restore it.",
        email_backup_body_footer: `---
NodeAuth Automatic Backup System`,
        name_label: "Name (Alias)",
        name_placeholder: "e.g., Google Drive",
        webdav_url: "WebDAV URL",
        username: "Username",
        password: "Password",
        modify: "Modify",
        save_dir: "Save Directory",
        s3_endpoint: "Endpoint (API URL)",
        s3_bucket: "Bucket Name",
        s3_region: "Region",
        s3_path_prefix: "Path Prefix (Optional)",
        auth_with_google: "Authorize Google Drive",
        auth_with_microsoft: "Authorize OneDrive",
        auth_with_baidu: "Authorize Baidu Netdisk",
        auth_with_dropbox: "Authorize Dropbox",
        gdrive_auth_tip: "Back up to your personal Google Drive for full data sovereignty and high availability.",
        onedrive_auth_tip: "Back up to your personal OneDrive for full data sovereignty and high availability.",
        baidu_auth_tip: "Back up to your personal Baidu Netdisk for full data sovereignty and high availability.",
        dropbox_auth_tip: "Back up to your personal Dropbox for full data sovereignty and high availability.",
        gdrive_auth_success: "Google Drive authorized successfully",
        onedrive_auth_success: "OneDrive authorized successfully",
        gdrive_refresh_token: "Authorization Token",
        onedrive_refresh_token: "Authorization Token",
        baidu_refresh_token: "Authorization Token",
        dropbox_refresh_token: "Authorization Token",
        gdrive_token_active: "OAuth Token Active",
        onedrive_token_active: "OAuth Token Active",
        baidu_token_active: "OAuth Token Active",
        dropbox_token_active: "OAuth Token Active",
        gdrive_folder_tip: "Recommended to use alphanumeric paths. e.g., /backups",
        onedrive_folder_tip: "Recommended to use alphanumeric paths. e.g., /backups",
        baidu_folder_tip: "Backup files will be saved to: /apps/nodeauth-backup",
        save_dir_placeholder: "/nodeauth-backup",
        re_authorize: "Re-authorize",
        waiting_authorization: "Waiting for authorization...",
        token_expired_or_revoked: 'Authorization has expired. Click "Re-authorize" to reconnect the storage provider.',
        oauth_token_revoked: "Authorization token has expired, please re-authorize.",
        github_token_invalid_or_revoked: "Personal Access Token is invalid or expired. Please enter a valid Token.",
        authorized_success_gd: "Google Drive Connected Successfully",
        authorized_success_ms: "OneDrive Connected Successfully",
        authorized_success_baidu: "Baidu Netdisk Connected Successfully",
        authorized_success_dropbox: "Dropbox Connected Successfully",
        require_google_auth: "Please authorize Google Drive first",
        require_microsoft_auth: "Please authorize OneDrive first",
        require_baidu_auth: "Please authorize Baidu Netdisk first",
        require_dropbox_auth: "Please authorize Dropbox first",
        telegram_bot_token: "Bot Token",
        telegram_bot_token_placeholder: "123456789:ABCdefGHIjklmNOPQrsTUVwxyZ",
        telegram_chat_id: "Chat ID",
        telegram_chat_id_placeholder: "e.g., 123456789 or -100123456789",
        telegram_chat_id_tip_title: "How to get Chat ID",
        telegram_chat_id_tip_1: "1. Private chat back up: Search for userinfobot and send /start to get your ID.",
        telegram_chat_id_tip_2: "2. Group/Channel back up: Add your Bot to the destination group and grant message sending & deleting permissions, then send any message to get the group ID (usually starts with -100).",
        require_telegram_token: "Please enter Bot Token",
        require_telegram_chat_id: "Please enter Chat ID",
        file_unavailable: "This backup file is unavailable or deleted on Telegram. Do you want to clean up this invalid record?",
        record_invalid: "Record Invalid",
        confirm_clean: "Clean Up",
        cancel_clean: "Not Now",
        clean_record_success: "Invalid record cleaned up",
        clean_record_fail: "Failed to clean record",
        auto_backup_config: "Auto Backup Configuration",
        switch_on: "ON",
        switch_off: "OFF",
        encrypt_password: "Encryption Password",
        keep_old_pwd: "Keep Original Password",
        set_new_pwd: "Set New Password",
        input_encrypt_pwd: "Enter encryption password",
        continue_use_old_pwd: "The system will continue to use the previous auto-backup password.",
        retain_count_label: "Retain Recent Backups",
        retain_zero_tip: "0 means no limits or cleanup for historical backups.",
        save: "Save",
        encrypted_backup: "Encrypted Backup",
        backup_security_tip: "Please enter an encryption password to secure the backup file.",
        use_auto_pwd: "Use Auto Backup Password",
        use_new_pwd: "Use New Password",
        input_custom_pwd: "Enter custom encryption password (at least 6 chars)",
        baidu_auth_failed: "Baidu Netdisk authorization failed",
        dropbox_auth_failed: "Dropbox authorization failed",
        start_backup: "Start Backup",
        select_restore_file: "Select Backup to Restore",
        filename: "Filename",
        size: "Size",
        time: "Time",
        action: "Action",
        decrypt_restore: "Decrypt & Restore",
        restore_warning: "Restoring will overwrite all current data!",
        input_restore_pwd: "Enter encryption password used for backup",
        confirm_restore: "Confirm Overwrite",
        center_title: "Cloud Backup Center",
        center_desc: "Configure multiple backup sources (Email, WebDAV, S3, etc.) to ensure data safety.",
        s3_region_placeholder: "auto or us-east-1",
        password_length_req: "Required, length must be ≥ 6 characters.",
        require_name: "Please enter a name",
        require_webdav_url: "Please enter WebDAV URL",
        require_username: "Please enter username",
        require_password: "Please enter password",
        require_endpoint: "Please enter Endpoint",
        require_bucket: "Please enter Bucket",
        require_access_key: "Please enter Access Key ID",
        require_secret_key: "Please enter Secret Access Key",
        require_auto_backup_pwd: "Please enter auto backup password",
        config_missing: "Missing configurations in backup source",
        create_success: "Created successfully",
        update_success: "Updated successfully",
        delete_confirm: "Delete Confirmation",
        delete_warning: "This will permanently delete the backup profile (it will NOT affect backed up data in the cloud). Continue?",
        cancel_delete: "Deletion cancelled",
        delete_success: "Deleted successfully",
        testing_connection: "Testing connection...",
        fetching_configs: "Fetching config list...",
        saving_config: "Saving config...",
        password_min_length: "Password must be at least 6 characters",
        password_no_space: "Password cannot contain spaces",
        password_not_all_number: "Password cannot be all numbers",
        backup_finish_title: "Cloud Backup Finished",
        backup_success_msg: "Successfully backed up data",
        fetch_backup_fail: "Failed to fetch backup file",
        fetch_list_fail: "Failed to fetch backup list",
        restore_finish_title: "Data Restoration Finished",
        processed_total: "Processed",
        backup_files_count: "backup files",
        base_accounts_count: "base accounts",
        import_success_count: "Successfully imported",
        new_accounts: "new accounts!",
        skipped_duplicates: "Automatically skipped",
        existing_accounts: "existing accounts."
    };
    Gi = {
        export: "Export Data",
        import: "Import Data",
        export_format: "Export Format",
        export_password: "Encryption Password (min 6 chars)",
        export_password_confirm: "Confirm Password",
        password_mismatch: "Passwords do not match!",
        password_weak: "Password too weak. It must be at least 6 characters.",
        select_account: "Please select at least one account.",
        export_success: "Export completed.",
        export_failed: "Export failed. Please try again later.",
        file_too_large: "The file {name} is too large. Limit is 10MB.",
        import_password: "Decryption Password",
        password_wrong: "Decryption failed: Incorrect password or unsupported standard.",
        no_valid_data: "No valid account data found to import.",
        import_success: "Import successful",
        task_build_pf: "Building Data: PhoneFactor Dataset",
        detect_steam_mafile: "Detected Steam .maFile backup, auto-applying algorithm...",
        err_pf_parse: "[PhoneFactor] Parsing failed: {detail}",
        task_prepare: "Preparing to parse: {name}",
        task_scan_qr: "Extracting QR code from image: {name}",
        err_scan_qr: "[{name}] Image parsing failed: {msg}",
        err_read_fail: "[{name}] Read failed",
        err_unrecognized: "[{name}] Unrecognized file format.",
        task_build_file: "Building Data: {name}",
        err_parse_fail: "[{name}] Parsing failed: {detail}",
        err_read_abnormal: "[{name}] Read error",
        task_decrypting: "Decrypting data...",
        err_user_cancel: "[{name}] User cancelled password input",
        import_anomaly: "Import Error",
        task_saving: "Merging and saving... ({count} accounts)",
        msg_total_files: "<div>Processed <b>{count}</b> files in total.</div>",
        msg_success_accounts: '<div style="color:var(--el-color-success)">🎉 Successfully imported <b>{count}</b> new accounts!</div>',
        msg_no_new_accounts: '<div style="color:var(--el-color-warning)">⚠️ All accounts already exist, no new accounts added.</div>',
        msg_duplicates_skipped: '<div style="color:var(--el-text-color-secondary)">ℹ️ Skipped <b>{count}</b> duplicated accounts.</div>',
        msg_error_summary: '<div style="color:var(--el-color-danger); margin-top: 5px;">❌ <b>Error Summary:</b><br>{errors}</div>',
        msg_offline_queued: '<div style="color:var(--el-color-warning); margin-top: 5px;">☁️ <b>Offline Mode</b>: Accounts queued locally and will auto-sync when back online.</div>',
        batch_import_finished: "Batch Import Finished",
        encrypted_file: "Encrypted file",
        export_desc: "Select the export format you need. Please note that plaintext exports have security risks.",
        hub_desc: "Manage the import, export, and secure backup of your account data",
        system_backup: "System Backup",
        encrypted_json: "Encrypted Backup (.json)",
        plaintext_json: "Plaintext Backup (.json)",
        mobile_app: "Mobile 2FA App",
        migrate_ga: "Migrate to Google Auth",
        generic_format: "Generic Formats",
        proprietary_protocols: "Proprietary Protocols",
        otpauth_txt: "OTPAuth URI (.txt)",
        spreadsheet_csv: "Spreadsheet (.csv)",
        steam_guard_title: "Steam Guard",
        steam_guard_desc: "Support .maFile (SDA) or steam://",
        steam_guard_desc_guide: "Supports direct import of .maFile (Steam Desktop Authenticator) or <b>steam://</b> links. System will auto-detect and apply 5-digit alphanumeric algorithm.",
        blizzard_restore: "Blizzard Authenticator",
        html_page: "HTML Webpage (.html)",
        export_pwd_title: "Set Export Password",
        pwd_placeholder_strong: "Enter strong password",
        pwd_placeholder_again: "Re-enter password",
        start_encrypt_dl: "Start Encrypting & Download",
        warning_title: "⚠️ Security Warning",
        warning_alert_title: "Risk Warning",
        warning_desc: "You are exporting unencrypted plaintext data. Anyone with access to this file can access your account codes!",
        confirm_export: "Confirm Export",
        ga_title: "Migrate to Google Authenticator",
        ga_desc_1: "Open Google Authenticator on your phone and scan the QR code",
        ga_desc_multiple: "(Too many accounts, generated in batches. Please scan sequentially)",
        btn_prev: "Prev",
        btn_next: "Next",
        finish: "Done",
        select_account_title: "Select Accounts to Export",
        search_account: "Search service or account...",
        select_all_accounts: "Select all accounts",
        select_all_search: "Select {count} searched accounts",
        selected_count: "Selected: {selected} / {total}",
        no_matching: "No matching accounts",
        ga_steam_filter_notice: "Steam accounts are hidden for compatibility (Google Authenticator does not support the Steam custom algorithm).",
        migrate_btn: "Migrate {count} accounts",
        center_title: "Data Import",
        import_desc: "Support restoring data from various 2FA apps or system backups.",
        auto_identify_tip: "💡 Automatically recognize file types",
        drag_drop_tip: "Drag backup files or migration QR screenshots here, or <em>click to upload</em>",
        support_desc: "Support List",
        ga_auth_desc: "Export 'Transfer QR code' in the App and upload the screenshot (.png / .jpg)",
        ms_auth_desc: "Microsoft Authenticator",
        ms_auth_detail: "Only support Android, export the following 3 files and upload them together",
        import_guide: "Import Guide",
        batch_import_processing: "📦 Batch Import Processing",
        batch_progress: "{processed} / {total} tasks completed",
        decrypt_backup_title: "🔓 Decrypt Backup File",
        detect_aegis: "Aegis encrypted backup detected",
        detect_proton_auth: "Proton Authenticator encrypted backup detected",
        detect_proton_pass: "Proton Pass encrypted backup detected (.pgp)",
        detect_2fas: "2FAS Auth encrypted backup detected",
        detect_ente: "Ente Auth encrypted backup detected",
        detect_bitwarden_pass: "Bitwarden Pass encrypted backup detected",
        detect_system: "System encrypted backup detected",
        input_decrypt_pwd_label: "Please enter the decryption password:",
        input_decrypt_pwd_placeholder: "Enter the password set during export",
        confirm_decrypt_import: "Confirm Decrypt & Import",
        system_backup_format: "System Backup",
        password_manager_format: "Password Manager",
        encrypted_backup_json: "Encrypted Backup (.json)",
        plaintext_backup_json: "Plaintext Backup (.json)",
        mobile_app_format: "Mobile 2FA Apps",
        proton_auth: "Proton Auth",
        lastpass_auth: "LastPass Authenticator (.json)",
        fetching_accounts: "Fetching account data...",
        no_accounts_to_export: "No accounts to export",
        encrypting: "Encrypting...",
        generating_file: "Generating export file...",
        generating_qr: "Generating QR code...",
        reading_backup: "Reading backup file...",
        uploading_processing: "Uploading and processing...",
        unsupported_format: "Unrecognized or unsupported file format.",
        unsupported_decrypt: "Decrypting from",
        encrypted_backup_tail: "is not supported currently."
    };
    qi = {
        apps_review_title: "2FA Apps Review",
        apps_review_desc: "Mainstream 2FA Applications Review and Anti-Pitfall Guide",
        apps_review_table: {
            app_name: "App Name",
            platforms: "Platforms",
            website: "Website",
            pros: "Pros",
            cons: "Cons",
            security: "Security Incidents",
            summary: "Summary",
            rating: "Rating"
        },
        apps: {
            "2fas": {
                pros: "Open source, fully local-first, supports secure iCloud/G-Drive sync.",
                cons: "Not a true standalone desktop app; you must scan a QR code on PC to use the browser extension.",
                security: "No security incidents",
                summary: "Highly trusted local-first 2FA, though the PC experience can be slightly tedious."
            },
            aegis: {
                pros: "Fully open source, heavy local encryption, wildly powerful export & format compatibility.",
                cons: "Android-exclusive, lacks native cross-platform cloud sync or an iOS version.",
                security: "No security incidents",
                summary: "The absolute top choice for Android privacy geeks and power users."
            },
            ente: {
                pros: "Fully open source, End-to-End Encrypted cloud sync, offers native desktop apps and a web vault.",
                cons: "Since all data relies on cloud sync, it may lack the purity sought by offline-only purists.",
                security: "No security incidents",
                summary: "The rapidly growing king of cross-platform sync, serving as Authy's perfect open-source successor."
            },
            proton: {
                pros: "Deeply integrated into the highly private Proton ecosystem, E2EE sync.",
                cons: "Tied to Proton Pass ecosystem lock-in.",
                security: "No security incidents",
                summary: "Excellent choice for existing Proton ecosystem users with top-tier privacy."
            },
            bitwarden: {
                pros: "Open source and free, backed by the reputable Bitwarden security team.",
                cons: "The standalone authenticator app is fairly basic right now (though BW main app also does 2FA).",
                security: "No security incidents",
                summary: "Pure and solid app endorsed by a reputable giant, ideal for minimalists."
            },
            google: {
                pros: "Extremely lightweight, works out of the box, offers highly convenient QR batch export, and now supports cloud sync.",
                cons: "Closed source. Early sync lacked E2EE (though improved recently). No official desktop app.",
                security: "Initial cloud sync was criticized for lacking E2EE, but this has been addressed.",
                summary: "A pure, widely-adopted foundation app. Its QR batch export is a killer feature."
            },
            microsoft: {
                pros: "If you are deep in the Microsoft ecosystem, it supports passwordless logins seamlessly.",
                cons: "Severely bloated, forces MS account binding, absolutely refuses standard exports (locking you in), and backups cannot cross iOS/Android.",
                security: "Numerous user reports of complete data loss when restoring on a new device, posing a significant security risk.",
                summary: "Way too heavy for pure TOTP usage, and its aggressive 'no-export' data monopoly is repulsive (avoid)."
            },
            freeotp: {
                pros: "Open source project maintained by Red Hat, pure and free.",
                cons: "Extremely outdated UI, feels abandoned with rare updates.",
                security: "No security incidents",
                summary: "A nostalgic open-source tool, but no longer fits modern daily usage."
            },
            authy: {
                pros: "Pioneer in cloud sync, very convenient historically.",
                cons: "Closed source, forces phone number binding, holds keys hostage (no exports), desktop apps shut down.",
                security: "Parent company Twilio suffered severe hacker breaches leaking sensitive data.",
                summary: "Once a king, now an absolutely anti-recommended app due to privacy and lock-in risks."
            },
            lastpass: {
                pros: "Convenient for users deeply tied into LastPass ecosystem.",
                cons: "Closed-source cloud architecture, intertwined with LastPass infrastructure.",
                security: "LastPass suffered catastrophic global data breaches recently.",
                summary: "Due to LastPass's severe reputation crisis, avoid entrusting critical 2FA here."
            },
            raivo: {
                pros: "Was previously the most recommended open-source iOS 2FA app.",
                cons: "Recently acquired by a shady shell company (Mobime).",
                security: "Disastrous update randomly deleted all local seeds for huge amounts of users, unrecoverable.",
                summary: "A catastrophic tale of trust betrayal and data destruction. DO NOT USE."
            }
        },
        qr_parser: "QR Code Parser",
        password_generator: "Password Gen",
        time_sync: "Time Sync",
        totp_sandbox: "TOTP Sandbox",
        parse_success: "Parsed successfully",
        invalid_uri: "Invalid OTP URI",
        secret_required: "Secret is required.",
        service_required: "Please provide Service and Account name.",
        save_to_vault: "Save to Vault",
        sync_success: "Sync complete. Offset: {offset}ms",
        sync_failed: "Failed to connect to the server.",
        select_chars: "Please select at least one character type.",
        title: "Utility Toolbox",
        desc: "Practical utilities like password generation, time sync and QR parsing.",
        totp_secret_title: "TOTP Secret Tool",
        totp_secret_desc: "Generate and convert Base32 secrets",
        password_gen_title: "Password Generator",
        password_gen_desc: "Generate strong random passwords",
        time_sync_title: "Time Sync Tool",
        time_sync_desc: "Check time drift between local and server",
        qr_parser_title: "QR Code Parser",
        qr_parser_desc: "Extract OTP links from QR code images",
        length: "Length",
        regenerate: "Regenerate",
        select_one_char_type: "Select at least one character type",
        password_copied: "Password copied",
        qr_result: "Parsed Result",
        qr_parsed: "QR parsed successfully",
        local_time: "Local Device Time",
        server_time: "Server Time (Estimated)",
        time_offset: "Time Offset",
        network_latency: "Network Latency",
        check_now: "Check Now",
        sync_completed: "Sync complete, offset {offset}ms",
        secret_config: "Secret Configuration",
        basic_info: "Basic Info",
        preview: "Result Preview",
        refresh_after: "to refresh",
        advanced_settings: "Advanced Settings",
        reset_time: "Reset",
        prev_period: "Prev Period",
        next_period: "Next Period",
        scanner_camera: "Camera Scan",
        scanner_image: "Image Parse",
        camera_click_to_open: "Click to open camera",
        camera_open: "Open Camera",
        camera_stop: "Stop Camera",
        image_placeholder: "Click or drag QR image here",
        camera_unsupported: "Camera not supported",
        camera_access_denied: "Camera access denied",
        qr_not_recognized: "No valid QR code recognized",
        sync_normal: "Time Sync Normal",
        sync_normal_desc: "Local time is accurate.",
        sync_warning: "Slight Drift",
        sync_warning_desc: "Minor time drift. You can still use 2FA.",
        sync_error: "Significant Time Drift",
        sync_error_desc: "Drift is too large. 2FA codes will be invalid.",
        sync_offline: "Using Offline Cached Offset",
        sync_offline_desc: "Network disconnected. Using the previously stored time drift value to estimate the true time.",
        secret_empty: "Secret cannot be empty",
        fill_info: "Please fill service and account details",
        current_offset: "Offset",
        totp_hex: "Hexadecimal",
        totp_config_preview: "Configure parameters to generate a preview",
        totp_algorithm: "Algorithm",
        totp_algo_sha1: "SHA-1",
        totp_digits: "Digits",
        totp_period: "Period",
        totp_scan_qr_title: "Scan QR Code",
        health_check_title: "System Security Check",
        health_check_desc: "Check core environment security configurations and provide repair suggestions"
    };
    Ki = {
        session_expired: "Session has expired, please log in again",
        subtitle: "A Secure 2FA Management Tool",
        login: "Login",
        logout_success: "Signed out securely.",
        logout_confirm: "Are you sure you want to sign out?",
        fetch_providers_failed: "Failed to fetch identity providers, please try again later",
        oauth_failed: "Failed to retrieve OAuth link. Provider not configured.",
        oauth_network_error: "Network error while getting OAuth status.",
        login_with: "Login with {provider}",
        privacy_title: "Privacy & Security Note",
        privacy_desc: "The system validates identity based on the OAuth 2.0 protocol and will never capture, log, or transmit your password.",
        passkey_login: "Login with Passkey",
        ext_auth_success_title: "Extension Authorized",
        ext_auth_success_desc: "Please click the extension icon in the top right corner to continue setting up your PIN.",
        passkey_not_supported: "Your browser or device does not support Passkeys",
        secure_login_in_progress: "Secure login in progress",
        secure_login_sub: "Please wait, exchanging security credentials with {provider}...",
        auth_failed_title: "Authorization Failed",
        back_to_login: "Back to Login",
        default_provider: "Identity Provider",
        oauth_declined: "You declined the authorization request from {provider}",
        telegram_missing_hash: "Telegram login missing signature parameter",
        missing_auth_params: "URL missing required authorization credential parameters",
        state_mismatch: "Security Warning: State validation failed, request may be tampered with",
        login_rejected: "Login validation rejected by server",
        network_abnormal: "Network request abnormal, please try again later",
        web3_login: "Login with Web3 Wallet",
        web3_qr_title: "Scan to Connect (WalletConnect)",
        web3_auth_flow: "Web3 Authentication Flow",
        web3_scan_tip: "Scan this QR code using MetaMask, Trust Wallet or any WalletConnect compatible App.",
        step_connect: "Connect",
        step_sign: "Sign",
        step_verify: "Verify",
        web3_status_preparing: "Preparing WebSocket encrypted channel...",
        web3_status_connected: "Connected! Return to wallet for signing challenge",
        web3_status_verifying: "Syncing signature to backend...",
        web3_action_connect: "Go to Wallet for Authorization",
        web3_action_sign: "Open Wallet to Sign",
        web3_action_verifying: "Verifying Identity...",
        web3_fallback_tip: "If redirection fails, copy the link and open it in your wallet browser:",
        web3_notify_signature: "Channel established! Please return to your wallet to complete the signature.",
        web3_return_to_wallet: "Please return to {wallet} to sign",
        web3_reopen_wallet: "Re-open {wallet}",
        web3_return_to_system_wallet: "Please return to system wallet to sign",
        web3_try_system_reopen: "Try system re-open"
    };
    Yi = {
        not_supported: "Your browser does not support camera access.",
        no_access: "Cannot access camera. Please review your permission settings.",
        no_qr_found: "No valid QR code was detected in the image."
    };
    ji = {
        offline: "Offline mode: action not allowed.",
        session_expired: "Session expired, please login again.",
        unauthorized: "Unauthorized access.",
        forbidden: "Forbidden.",
        server_error: "Server error.",
        request_failed: "Request failed",
        network_error: "Network request failed",
        account_not_found: "Account not found",
        account_exists: "Account already exists",
        invalid_secret_format: "Invalid secret format (must be Base32, at least 16 chars)",
        missing_service_account: "Service and Account names are required",
        no_account_ids: "No account IDs provided",
        export_type_invalid: "Invalid export type",
        export_password_length: "Export password needs at least 6 characters",
        missing_content_type: "Content and type cannot be empty",
        import_password_required: "Encrypted import requires a password",
        parse_failed: "Parsing failed, please check file format or password",
        provider_not_found: "Provider not found",
        missing_fields: "Missing required fields",
        backup_password_length: "Auto backup password must be at least 6 characters",
        backup_password_required: "Auto backup password is required (at least 6 characters)",
        manual_backup_password_needed: "Manual backup with auto-password requires configuring an auto-backup password first.",
        filename_required: "Filename is required",
        no_session: "Unauthorized: Missing session cookie",
        csrf_mismatch: "Request rejected: CSRF token mismatch",
        token_expired: "Unauthorized: Token expired or invalid",
        oauth_state_invalid: "Invalid or missing OAuth state parameter. Security check failed.",
        oauth_code_missing: "Missing OAuth code parameter",
        not_whitelisted: "Access whitelist not configured. Login denied.",
        unauthorized_user: "Unauthorized user, login denied!",
        oauth_token_revoked: "Backup storage authorization has expired. Please click the edit icon below to re-authorize.",
        connection_failed: "Connection failed",
        backup_failed: "Backup failed",
        download_failed: "Download failed",
        delete_failed: "Delete failed",
        oauth_config_incomplete: "OAuth configuration incomplete",
        oauth_api_error: "OAuth API error",
        oauth_token_exchange_failed: "OAuth token exchange failed",
        telegram_missing_bot_name: "Telegram Bot Name is not configured",
        telegram_missing_query: "Telegram provider requires full query parameters, not just code",
        telegram_missing_bot_token: "Telegram Bot Token is not configured",
        telegram_missing_hash: "Missing hash signature",
        telegram_signature_failed: "Telegram signature verification failed",
        telegram_login_expired: "Telegram login data has expired",
        telegram_config_incomplete: "Telegram config incomplete (missing Token or Chat ID)",
        telegram_db_missing: "Database connection or Provider ID is missing",
        telegram_api_error: "Telegram API Error",
        telegram_upload_failed: "Telegram upload failed",
        telegram_download_failed: "Telegram download failed",
        file_not_found_in_history: "File not found in history",
        telegram_file_path_missing: "File path not returned from Telegram",
        invalid_emergency_verification: "Verification failed! Please double-check the last 4 digits of the key at the bottom of your Emergency Kit PDF.",
        s3_config_incomplete: "S3 configuration incomplete",
        s3_api_error: "S3 API Error",
        s3_list_failed: "Failed to list S3 objects",
        s3_upload_failed: "S3 upload failed",
        s3_download_failed: "S3 download failed",
        s3_delete_failed: "S3 delete failed",
        webdav_config_incomplete: "WebDAV configuration incomplete",
        webdav_upload_failed: "WebDAV fallback upload failed",
        webdav_download_redirect_failed: "WebDAV redirect fetch failed",
        webdav_download_failed: "WebDAV fallback download failed",
        webdav_delete_failed: "WebDAV fallback delete failed",
        unsupported_provider: "Unsupported provider",
        webauthn_challenge_missing: "Authentication challenge expired, please refresh and try again",
        webauthn_registration_failed: "Passkey registration failed",
        webauthn_login_failed: "Passkey login failed",
        passkey_not_found: "No matching Passkey credential found",
        email_config_incomplete: "Email backup config incomplete (missing SMTP host, account, or recipient)",
        email_db_missing: "Database connection or Provider ID is missing",
        email_send_failed: "Failed to send email",
        email_send_failed_via_relay: "Failed to send email via relay",
        email_download_not_supported: "Email backup does not support direct download. Please retrieve the file from your email's attachment.",
        smtp_greeting_failed: "SMTP: Server greeting failed",
        smtp_ehlo_failed: "SMTP: EHLO command failed",
        smtp_starttls_ready_failed: "SMTP: STARTTLS failed",
        smtp_ehlo_after_tls_failed: "SMTP: EHLO after TLS failed",
        smtp_auth_prompt_user_failed: "SMTP: Auth username prompt failed",
        smtp_auth_prompt_pass_failed: "SMTP: Auth password prompt failed",
        smtp_auth_success_failed: "SMTP: Authentication failed (Invalid user or password)",
        smtp_mail_from_failed: "SMTP: MAIL FROM command failed",
        smtp_rcpt_to_failed: "SMTP: RCPT TO command failed",
        smtp_data_ready_failed: "SMTP: DATA command failed",
        smtp_message_accepted_failed: "SMTP: Message submission failed",
        smtp_connection_closed: "SMTP: Connection closed unexpectedly",
        health_check_failed: "Security vulnerability detected! System access is locked."
    };
    zi = {
        title: "Intercept: Security Check Failed",
        subtitle: "We detected critical vulnerabilities or incomplete initialization in the environment configuration. System access is locked to protect your data.",
        passed_title: "Check Passed",
        passed_subtitle: "Excellent! Your NodeAuth security defense is operating at optimal conditions.",
        go_to_login: "Go to Login",
        how_to_fix: "How to Fix?",
        generate_new: "Generate New",
        view_docs: "View Configuration Docs",
        missing_fields: "Missing the following environment variables:",
        passed_checks_title: "Passed Checks",
        passed_checks: {
            encryption_key_passed: "ENCRYPTION_KEY length is sufficient",
            jwt_secret_passed: "JWT_SECRET length is sufficient",
            oauth_allow_all_passed: "Global Access is successfully blocked",
            allowed_users_passed: "Login whitelist accounts are configured",
            oauth_provider_configured: "OAuth2 provider is correctly configured",
            license_passed: "NODEAUTH_LICENSE is activated"
        },
        issues: {
            encryption_key_too_short: {
                title: "Encryption Key Compliance Error (ENCRYPTION_KEY)",
                desc: "Your ENCRYPTION_KEY is empty or shorter than 32 characters! This key encrypts all vault seeds and is highly susceptible to brute-forcing."
            },
            jwt_secret_too_short: {
                title: "Weak Session Secret (JWT_SECRET)",
                desc: "Your JWT_SECRET is shorter than 32 characters. Hackers could forge identity credentials and bypass logins."
            },
            oauth_allow_all_enabled: {
                title: "CRITICAL: Global Access Enabled",
                desc: "OAUTH_ALLOW_ALL=true is active! This is not a drill. Anyone visiting the site can instantly govern all your 2FA data!"
            },
            allowed_users_empty: {
                title: "Login Whitelist is Empty",
                desc: "The system is locked but OAUTH_ALLOWED_USERS is empty. Nobody can successfully login to this system."
            },
            github_config_incomplete: {
                title: "Incomplete GitHub Config",
                desc: "You configured GitHub parameters but are missing the Client ID, Secret, or Redirect URI."
            },
            telegram_config_incomplete: {
                title: "Incomplete Telegram Config",
                desc: "Missing Bot Name or Bot Token."
            },
            google_config_incomplete: {
                title: "Incomplete Google Config",
                desc: "Missing required parameters."
            },
            nodeloc_config_incomplete: {
                title: "Incomplete NodeLoc Config",
                desc: "Missing required parameters."
            },
            gitee_config_incomplete: {
                title: "Incomplete Gitee Config",
                desc: "Missing required parameters."
            },
            cloudflare_config_incomplete: {
                title: "Incomplete Cloudflare Config",
                desc: "Missing required parameters."
            },
            no_provider_configured: {
                title: "No OAuth Provider Configured",
                desc: "You must configure at least one active OAuth2 provider (like GitHub or Telegram) to access the UI."
            },
            license_missing: {
                title: "System Not Activated (NODEAUTH_LICENSE)",
                desc: "You haven't configured a license. Get one at https://license.nodeauth.io/ and fill NODEAUTH_LICENSE according to your deployment method."
            },
            license_domain_mismatch: {
                title: "Domain Mismatch",
                desc: "Detected current hostname doesn't match the one bound to the license."
            },
            license_expired: {
                title: "License Expired",
                desc: "Your license has exceeded its validity period."
            },
            license_invalid_signature: {
                title: "Signature Verification Failed",
                desc: "License signature is invalid, possibly tampered with."
            },
            license_invalid_format: {
                title: "Invalid License Format",
                desc: "Detected malformed license string. Ensure it's the full Base64 string from the license center."
            },
            license_invalid: {
                title: "Verification Failed",
                desc: "Current license failed verification. Check if it's correct or expired."
            }
        },
        suggestions: {
            suggestion_deploy_by_worker: "One-click Deploy to Worker: Go to Cloudflare Dashboard -> Workers & Pages -> nodeauth -> Settings -> Variables and Secrets",
            suggestion_deploy_by_gitaction: "Deploy via Github Action: Go to Forked Repository -> Settings -> Secrets and variables -> Actions",
            suggestion_deploy_by_docker: "Deploy via Docker Compose: Edit docker-compose.yml -> environment",
            encryption_key_suggestion: "Please copy the high-strength random key pre-generated for you below, and set it as ENCRYPTION_KEY according to your deployment method.",
            jwt_secret_suggestion: "Please copy the high-strength random key pre-generated for you below, and set it as JWT_SECRET according to your deployment method.",
            oauth_allow_all_suggestion: "Depending on your deployment method, remove OAUTH_ALLOW_ALL or set its value to false.",
            allowed_users_suggestion: "Depending on your deployment method, fill in OAUTH_ALLOWED_USERS.",
            github_config_suggestion: "Depending on your deployment method, fill in OAUTH_GITHUB_CLIENT_ID, OAUTH_GITHUB_CLIENT_SECRET, and OAUTH_GITHUB_REDIRECT_URI.",
            telegram_config_suggestion: "Please check the bot configuration in BotFather to ensure the information is complete, and depending on your deployment method, fill in OAUTH_TELEGRAM_BOT_NAME, OAUTH_TELEGRAM_BOT_TOKEN, and OAUTH_TELEGRAM_REDIRECT_URI.",
            google_config_suggestion: "Please check the credentials configuration in Google Cloud Console, and depending on your deployment method, fill in OAUTH_GOOGLE_CLIENT_ID, OAUTH_GOOGLE_CLIENT_SECRET, and OAUTH_GOOGLE_REDIRECT_URI.",
            nodeloc_config_suggestion: "Please check your developer credentials in NodeLoc panel, and depending on your deployment method, fill in OAUTH_NODELOC_CLIENT_ID, OAUTH_NODELOC_CLIENT_SECRET, and OAUTH_NODELOC_REDIRECT_URI.",
            gitee_config_suggestion: "Please verify Gitee developer credentials, and depending on your deployment method, fill in OAUTH_GITEE_CLIENT_ID, OAUTH_GITEE_CLIENT_SECRET, and OAUTH_GITEE_REDIRECT_URI.",
            cloudflare_config_suggestion: "Requires four parameters: Client ID, Secret, Org Domain, Redirect URI. Depending on your deployment method, fill in OAUTH_CLOUDFLARE_CLIENT_ID, OAUTH_CLOUDFLARE_CLIENT_SECRET, and OAUTH_CLOUDFLARE_REDIRECT_URI.",
            no_provider_suggestion: "Consult the NodeAuth Worker README to pick the easiest provider. Retrieve the Client ID and Secret and configure them in Cloudflare's dashboard.",
            apply_license: "Click the button below to go to the license center. The system will auto-detect your domain. After activation, fill the generated license into NODEAUTH_LICENSE.",
            rebind_license: "Please re-bind your deployment domain in the license center, matching window.location.hostname exactly.",
            renew_license: "Your license has expired. Please renew or re-apply at the center.",
            license_suggestion: "Click the button below to go to the license center. The system will auto-detect your domain. After activation, fill the generated license into NODEAUTH_LICENSE."
        },
        apply_license_btn: "Get License",
        copy_unsupported: "Your browser doesn't support automatic copying, please manually select it.",
        copy_success: "Key copied to clipboard",
        connection_failed: "Cannot connect to server for health check"
    };
    Qi = {
        management: "Management",
        passkey_title: "Passkey",
        passkey_desc: "Enable passwordless login using biometrics such as fingerprint or face recognition for a more secure and convenient access experience.",
        passkey_list: "Registered Passkeys",
        add_passkey: "Add",
        no_passkeys: "You haven't registered any Passkeys yet",
        credential_name: "Device Name",
        created_at: "Added",
        last_used: "Last Used",
        delete_confirm: "Are you sure you want to remove this Passkey? You will no longer be able to login directly with this device.",
        add_dialog_title: "Add New Passkey",
        add_dialog_tip: "Give your device a recognizable name (e.g., My iPhone 15).",
        default_name: "My New Device",
        registering: "Communicating with hardware...",
        register_success: "Passkey registered successfully!",
        name_required: "Name is required"
    };
    Xi = {
        emergency_title: "ENCRYPTION_KEY Backup",
        emergency_subtitle: "Initialization successful. For your data security, you must back up the core encryption key.",
        encryption_key_label: "Core Encryption Key",
        importance_title: "Why is this important?",
        importance_desc: "This system operates on zero-knowledge encryption. The core encryption key is the only credential for your data. In case of server environment loss, it is the only way to recover your data.",
        save_instruction: "Please download the PDF Core Key on this page and store it in a safe place (e.g., email, cloud storage, or print for safekeeping).",
        download_pdf: "Step 1: Download PDF Core Key",
        download_pdf_btn: "Download Core Key PDF Document",
        verify_title: "Step 2: Verify and Activate",
        verify_desc: "Please open the PDF file you just downloaded and fill in the last 4 characters of the core key.",
        verify_placeholder: "Last 4 chars",
        verify_btn: "Verify Now",
        invalid_verification: "Verification failed. Please check the last 4 characters of the key in the PDF.",
        confirm_success: "Core key backup completed, welcome to NodeAuth!",
        pdf_filename: "NodeAuth_Worker_Core_Key_Backup",
        pdf_header: "NodeAuth Core Key Backup",
        pdf_self_custody: "Important Notice",
        pdf_self_custody_desc: "NodeAuth is a fully self-hosted system. We do not store your master password or encryption keys. This means if you lose this Emergency code, all your data will be permanently locked and irrecoverable.",
        pdf_info_title: "System Information",
        pdf_server_url: "Server URL: ",
        pdf_admin_email: "Admin Email: ",
        pdf_gen_date: "Generation Date: ",
        pdf_key_title: "Core Encryption Key (ENCRYPTION_KEY)",
        pdf_license_title: "System Authorization License (NODEAUTH_LICENSE)",
        pdf_license_warning: "Warning: This license is the legal usage credential of your system and acts as a system-level dynamic salt. Losing it during redeployment or data migration will result in authorization failure and affect the cryptographic environment.",
        pdf_usage_title: "How to use?",
        pdf_usage_desc: "If your server environment variables are lost, fill this key into the ENCRYPTION_KEY variable during redeployment to recover all data.",
        pdf_warning: "Warning: Never lose this key; it is the only way to recover your data.",
        pdf_footer: "NodeAuth  A Secure 2FA Management Tool"
    };
    Ji = {
        light: "Light",
        dark: "Dark",
        auto: "Follow System"
    };
    Zi = {
        title: "System Environment Variable Error",
        subtitle: "Unable to decrypt account data, system has entered protection mode",
        alert_title: "Data Protection Activated",
        alert_desc: "Detected mismatch between server ENCRYPTION_KEY configuration and historical data. To prevent accidental overwriting of old data, the system has disabled all 2FA code generation and modification operations.",
        guide_title: "Recovery Guide",
        has_pdf_title: "Have Recovery Kit PDF:",
        has_pdf_desc: "Please locate the PDF file saved during initial installation, refill the ENCRYPTION_KEY into the environment variables, and restart the service to restore perfectly.",
        lost_pdf_title: "Lost Recovery Kit PDF:",
        lost_pdf_desc: "If the original file is lost, please refer to the disaster recovery documentation for more recovery paths.",
        btn_guide: "View Disaster Recovery Guide",
        link_recovery: "https://wiki.nodeauth.io/en/recovery/"
    };
    el = {
        common: Mi,
        pwa: Fi,
        search: xi,
        menu: Ui,
        about: Bi,
        vault: Hi,
        settings: Wi,
        security: $i,
        backup: Vi,
        migration: Gi,
        tools: qi,
        auth: Ki,
        camera: Yi,
        api_errors: ji,
        healthCheck: zi,
        passkey: Qi,
        emergency: Xi,
        theme: Ji,
        decryption_error: Zi
    };
    tl = ()=>(navigator.language || navigator.userLanguage).startsWith("zh") ? "zh-CN" : "en-US";
    al = localStorage.getItem("app_locale") || tl();
    J = ri({
        legacy: !1,
        locale: al,
        fallbackLocale: "en-US",
        messages: {
            "zh-CN": Ri,
            "en-US": el
        }
    });
    nl = (e)=>{
        J.global.locale.value = e, localStorage.setItem("app_locale", e), document.documentElement.lang = e === "zh-CN" ? "zh-CN" : "en";
    };
    Ut = at("layout", ()=>{
        const e = M(!1), t = M(!1), a = M(0), n = M(sessionStorage.getItem("app_active_tab") || "vault"), s = M(sessionStorage.getItem("app_active_category") || ""), r = M(null), o = M(""), i = M(!1), c = M(null), u = M("fade"), g = M(localStorage.getItem("app_vault_view_mode") || "card"), h = M(localStorage.getItem("app_ghost_mode") === "true"), d = localStorage.getItem("app_trash_mode"), m = M(d === null ? !0 : d === "true"), f = M(localStorage.getItem("app_sidebar_collapse") !== "false"), w = (O)=>{
            h.value = O, localStorage.setItem("app_ghost_mode", String(O));
        }, T = (O)=>{
            m.value = O, localStorage.setItem("app_trash_mode", String(O));
        }, P = localStorage.getItem("app_trash_retention"), R = M(P === null ? 30 : parseInt(P, 10)), y = (O)=>{
            R.value = O, localStorage.setItem("app_trash_retention", String(O));
        }, p = M(!1), k = {
            "add-vault": "vault",
            "mobile-data": "vault",
            "mobile-settings": "vault",
            "migration-export": "mobile-data",
            "migration-import": "mobile-data",
            backups: "mobile-data",
            tools: "vault",
            "settings-passkey": "mobile-settings",
            "settings-about": "mobile-settings",
            "settings-appearance": "mobile-settings",
            "settings-language": "settings-appearance",
            "settings-theme": "settings-appearance",
            "settings-layout": "settings-appearance",
            "settings-security": "mobile-settings",
            "settings-devices": "settings-security",
            "settings-trash": "settings-security",
            "settings-pin": "settings-security"
        }, v = (O)=>{
            i.value = O !== void 0 ? O : !i.value, i.value || (o.value = "");
        }, S = me(()=>r.value ? !0 : !!k[n.value]), D = ()=>{
            if (r.value) {
                r.value = null, u.value = "slide-right";
                return;
            }
            const O = k[n.value];
            O && (u.value = "slide-right", L(O));
        }, L = (O)=>{
            const V = n.value;
            r.value = null, k[V] === O ? u.value = "slide-right" : k[O] === V ? u.value = "slide-left" : u.value = "fade", n.value = O, sessionStorage.setItem("app_active_tab", O), i.value = !1, o.value = "";
        }, te = (O)=>{
            c.value = O;
        }, ue = (O)=>{
            s.value = O, sessionStorage.setItem("app_active_category", O);
        }, W = ()=>{
            n.value = "vault", sessionStorage.setItem("app_active_tab", "vault"), a.value++;
        }, de = ()=>{
            f.value = !f.value, localStorage.setItem("app_sidebar_collapse", f.value);
        }, x = (O)=>{
            g.value = O, localStorage.setItem("app_vault_view_mode", O);
        };
        return De(h, (O)=>{
            O ? Me.success({
                message: J.global.t("security.ghost_mode_active") || "Ghost Mode Enabled",
                grouping: !0
            }) : Me.success({
                message: J.global.t("security.ghost_mode_inactive") || "Ghost Mode Disabled",
                grouping: !0
            });
        }), {
            isMobile: e,
            showMobileMenu: t,
            homeTabReset: a,
            app_active_tab: n,
            app_active_category: s,
            setActiveCategory: ue,
            activeSubTool: r,
            searchQuery: o,
            isSearchVisible: i,
            isLoadingSearching: p,
            canGoBack: S,
            pageTransition: u,
            toggleSearch: v,
            setActiveTab: L,
            goBack: D,
            resetHomeTab: W,
            appVaultViewMode: g,
            setVaultViewMode: x,
            appGhostMode: h,
            setGhostMode: w,
            appTrashMode: m,
            setTrashMode: T,
            appTrashRetention: R,
            setTrashRetention: y,
            isSidebarCollapsed: f,
            toggleSidebar: de,
            initialAddVaultParams: c,
            setAddVaultParams: te
        };
    });
    Ic = Object.freeze(Object.defineProperty({
        __proto__: null,
        useLayoutStore: Ut
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    mt = at("offline", ()=>{
        const e = M(localStorage.getItem("app_offline_mode") === "true"), t = M(typeof navigator < "u" ? !navigator.onLine : !1), a = me(()=>e.value), n = me(()=>t.value || a.value), s = M(new Set), r = (g)=>{
            e.value = g, localStorage.setItem("app_offline_mode", String(g));
        }, o = (g)=>{
            const h = new Set(s.value);
            h.add(g), s.value = h;
        }, i = (g)=>{
            const h = new Set(s.value);
            h.delete(g), s.value = h;
        }, c = (g)=>s.value.has(g), u = ()=>{
            typeof window > "u" || (window.addEventListener("online", ()=>{
                t.value = !1;
            }), window.addEventListener("offline", ()=>{
                t.value = !0;
            }), typeof navigator < "u" && (t.value = !navigator.onLine));
        };
        return De(e, (g)=>{
            g ? Me.success({
                message: J.global.t("security.offline_mode_active") || "Air-Gapped Mode Enabled",
                grouping: !0
            }) : Me.success({
                message: J.global.t("security.offline_mode_inactive") || "Air-Gapped Mode Disabled. Syncing...",
                grouping: !0
            });
        }), {
            appOfflineMode: e,
            isPhysicalOffline: t,
            isManualOffline: a,
            isOffline: n,
            setOfflineMode: r,
            initNetworkStatus: u,
            conflictIds: s,
            registerConflict: o,
            removeConflict: i,
            isItemInConflict: c
        };
    });
    rl = Object.freeze(Object.defineProperty({
        __proto__: null,
        useOfflineStore: mt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    sl = "NodeAuthDB";
    xe = "app_key_store";
    ol = 1;
    function na() {
        return new Promise((e, t)=>{
            const a = setTimeout(()=>{
                t(new Error("IndexedDB initialization timeout. The database may be locked by another instance."));
            }, 5e3), n = indexedDB.open(sl, ol);
            n.onblocked = ()=>{
                K.warn("[IDB] Database access is blocked by another session.");
            }, n.onerror = ()=>{
                clearTimeout(a), t(n.error);
            }, n.onsuccess = ()=>{
                clearTimeout(a), e(n.result);
            }, n.onupgradeneeded = (s)=>{
                const r = s.target.result;
                r.objectStoreNames.contains(xe) || r.createObjectStore(xe);
            };
        });
    }
    fe = async function(e, t) {
        const a = await na();
        return new Promise((n, s)=>{
            const i = a.transaction(xe, "readwrite").objectStore(xe).put(t, e);
            i.onsuccess = ()=>n(), i.onerror = ()=>s(i.error);
        });
    };
    oe = async function(e) {
        const t = await na();
        return new Promise((a, n)=>{
            const o = t.transaction(xe, "readonly").objectStore(xe).get(e);
            o.onsuccess = ()=>a(o.result), o.onerror = ()=>n(o.error);
        });
    };
    Se = async function(e) {
        const t = await na();
        return new Promise((a, n)=>{
            const o = t.transaction(xe, "readwrite").objectStore(xe).delete(e);
            o.onsuccess = ()=>a(), o.onerror = ()=>n(o.error);
        });
    };
    async function il() {
        const e = await na();
        return new Promise((t, a)=>{
            const r = e.transaction(xe, "readwrite").objectStore(xe).clear();
            r.onsuccess = ()=>t(), r.onerror = ()=>a(r.error);
        });
    }
    function ll(e) {
        const a = `; ${document.cookie}`.split(`; ${e}=`);
        if (a.length === 2) return a.pop().split(";").shift();
    }
    let ca = !1;
    Ze = async function(e, t = {}) {
        if (mt().isManualOffline && !(e.includes("/api/oauth/login") || e.includes("/api/oauth/verify") || e.includes("/api/oauth/me") || e.includes("/api/health"))) {
            K.warn(`[Air-Gapped] Request blocked: ${e}`);
            const u = new Error("offline_mode_active");
            throw u.isOffline = !0, u;
        }
        const n = {
            "Content-Type": "application/json",
            ...t.headers
        }, s = ll("csrf_token");
        s && (n["X-CSRF-Token"] = s);
        const r = t.timeout || 3e4, o = new AbortController, i = setTimeout(()=>o.abort(), r);
        try {
            const c = await fetch(e, {
                ...t,
                headers: n,
                credentials: "include",
                signal: o.signal
            });
            if (clearTimeout(i), c.status === 204) return {
                success: !0
            };
            const u = await c.json();
            if (u.message && typeof u.message == "string" && u.message.includes("oauth_token_revoked")) {
                const g = new Error("oauth_token_revoked");
                throw g.isOAuthRevoked = !0, g;
            }
            if (c.status === 403 && u.message === "health_check_failed") {
                window.location.pathname !== "/health" && (window.location.href = "/health");
                const g = new Error("Security Check Failed");
                throw g.data = u.data, g.isSecurity = !0, g;
            }
            if (c.status === 401 || u.code === 401) {
                if (t.silent) throw new Error(u.message || u.error || "Unauthorized/Forbidden");
                if (!ca) {
                    ca = !0;
                    let g = u.message || u.error || "session_expired", h = "";
                    if (typeof g == "string" && g.includes(":")) {
                        const m = g.split(":");
                        g = m[0].trim(), h = m.slice(1).join(":").trim();
                    }
                    let d = J.global.te(`api_errors.${g}`) ? J.global.t(`api_errors.${g}`) : g;
                    if (h) {
                        let m = h.split(":"), f = m[0].trim();
                        J.global.te(`api_errors.${f}`) && (m[0] = J.global.t(`api_errors.${f}`), h = m.join(": ")), d = `${d}: ${h}`;
                    }
                    Me.error(d);
                    try {
                        const m = new Promise((w, T)=>setTimeout(()=>T(new Error("clear timeout")), 3e3)), f = async ()=>{
                            try {
                                await nt().clearUserInfo();
                            } catch  {
                                await Se("auth:user:profile"), await Se("vault:data:main"), await Se("vault:conf:backups"), await Se("sys:sec:device_salt");
                            }
                        };
                        await Promise.race([
                            f(),
                            m
                        ]);
                    } catch (m) {
                        K.error("[Request] Timeout or error during 401 cleanup", m);
                    } finally{
                        sessionStorage.removeItem("app_vault_session_key");
                    }
                    window.location.pathname !== "/login" ? window.location.href = "/login" : setTimeout(()=>{
                        ca = !1;
                    }, 1e3);
                }
                throw new Error(u.message || u.error || "Unauthorized/Forbidden");
            }
            if (!c.ok || u.success === !1) {
                if (!t.silent) {
                    let g = u.message || u.error || "request_failed", h = "";
                    if (typeof g == "string" && g.includes(":")) {
                        const m = g.split(":");
                        g = m[0].trim(), h = m.slice(1).join(":").trim();
                    }
                    let d = J.global.te(`api_errors.${g}`) ? J.global.t(`api_errors.${g}`) : g;
                    if (h) {
                        let m = h.split(":"), f = m[0].trim();
                        J.global.te(`api_errors.${f}`) && (m[0] = J.global.t(`api_errors.${f}`), h = m.join(": ")), d = `${d}: ${h}`;
                    }
                    Me.error(d);
                }
                throw new Error(u.message || u.error || J.global.t("api_errors.request_failed"));
            }
            return u.data !== void 0 && Object.keys(u).includes("code") ? {
                success: !0,
                ...u.data
            } : u;
        } catch (c) {
            throw c.message !== "Unauthorized/Forbidden" && !t.silent && !c.isOAuthRevoked && !c.isOffline && (K.error("API Request Error:", c), (c.name === "TypeError" || c.message.includes("fetch") || c.name === "AbortError") && Me.error(J.global.te("api_errors.network_error") ? J.global.t("api_errors.network_error") : J.global.t("auth.network_abnormal"))), c;
        }
    };
    Pt = class extends Error {
        constructor(t, a = "AUTH_ERR"){
            super(t), this.name = "authError", this.code = a;
        }
    };
    let yr, cl, Lt, ka, Ma, ul;
    yr = ()=>{
        let e = localStorage.getItem("app_device_id");
        return e || (e = crypto.randomUUID ? crypto.randomUUID() : "dev-" + Math.random().toString(36).substring(2, 15), localStorage.setItem("app_device_id", e)), e;
    };
    Lc = Object.freeze(Object.defineProperty({
        __proto__: null,
        getDeviceId: yr
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    wa = {
        async getProviders () {
            try {
                return await Ze("/api/oauth/providers");
            } catch (e) {
                throw new Pt(e.message || "获取登录方式失败", e.status);
            }
        },
        async getAuthorizeUrl (e) {
            try {
                return await Ze(`/api/oauth/authorize/${e}`);
            } catch (t) {
                throw new Pt(t.message || "获取授权链接失败", t.status);
            }
        },
        async loginWithToken (e, t, a = null) {
            try {
                const n = {
                    ...t,
                    deviceId: await yr()
                };
                return a && (n.publicKey = a), await Ze(`/api/oauth/callback/${e}`, {
                    method: "POST",
                    body: JSON.stringify(n)
                });
            } catch (n) {
                throw new Pt(n.message || "登录验证失败", n.status);
            }
        },
        async logout () {
            try {
                return await Ze("/api/oauth/logout", {
                    method: "POST",
                    keepalive: !0
                });
            } catch (e) {
                return K.error(`Logout request failed: ${e.message || e}`), {
                    success: !1
                };
            }
        },
        async fetchMe (e = null) {
            try {
                const t = e ? {
                    "X-Public-Key": e
                } : {};
                return await Ze(`/api/oauth/me?_t=${Date.now()}`, {
                    silent: !0,
                    headers: t
                });
            } catch  {
                return {
                    success: !1
                };
            }
        },
        async confirmEmergency (e) {
            try {
                return await Ze("/api/emergency/confirm", {
                    method: "POST",
                    body: JSON.stringify({
                        lastFour: e
                    })
                });
            } catch (t) {
                throw new Pt(t.message || "系统确认失败", t.status);
            }
        },
        async requestExtensionSession (e) {
            try {
                return await Ze("/api/oauth/extension-session", {
                    method: "POST",
                    body: JSON.stringify({
                        deviceId: e
                    })
                });
            } catch (t) {
                throw new Pt(t.message || "插件会话创建失败", t.status);
            }
        }
    };
    cl = 1e5;
    Lt = 16;
    ka = 12;
    Ma = "AES-GCM";
    ul = "SHA-256";
    ye = typeof window < "u" ? window.crypto || window.msCrypto : globalThis.crypto;
    Fa = function(e = "Using development fallback.") {
        if (ye && ye.subtle) return !1;
        if (typeof location < "u") {
            const t = location.hostname.startsWith("192.168.") || location.hostname.startsWith("10."), a = location.protocol === "http:";
            if (t && a) return K.warn(`Running locally via HTTP: ${e}`), !0;
        }
        throw new Error("Web Crypto API (window.crypto.subtle) is not available. Please ensure the context is secure (HTTPS).");
    };
    async function xa(e, t) {
        const a = new TextEncoder, n = await ye.subtle.importKey("raw", a.encode(e), {
            name: "PBKDF2"
        }, !1, [
            "deriveKey"
        ]);
        return ye.subtle.deriveKey({
            name: "PBKDF2",
            salt: t,
            iterations: cl,
            hash: ul
        }, n, {
            name: Ma,
            length: 256
        }, !1, [
            "encrypt",
            "decrypt"
        ]);
    }
    br = async function(e, t, a = null) {
        if (Fa("Skipping real encryption for Vault data.")) {
            const h = new TextEncoder().encode(JSON.stringify({
                __dev_mock_encryption: !0,
                data: e
            }));
            return Rt(h);
        }
        const n = a || ye.getRandomValues(new Uint8Array(Lt)), s = ye.getRandomValues(new Uint8Array(ka));
        let r;
        typeof t == "string" ? r = await xa(t, n) : r = t;
        const i = new TextEncoder().encode(JSON.stringify(e)), c = await ye.subtle.encrypt({
            name: Ma,
            iv: s
        }, r, i), u = new Uint8Array(n.length + s.length + c.byteLength);
        return u.set(n, 0), u.set(s, n.length), u.set(new Uint8Array(c), n.length + s.length), Rt(u);
    };
    Ea = async function(e, t) {
        if (Fa("Skipping real decryption for Vault data.")) {
            try {
                const a = Mt(e), n = new TextDecoder, s = JSON.parse(n.decode(a));
                if (s.__dev_mock_encryption) return s.data;
            } catch  {}
            throw new Error("Web Crypto API missing: Cannot decrypt real secure data without HTTPS");
        }
        try {
            const a = Mt(e), n = a.slice(0, Lt), s = a.slice(Lt, Lt + ka), r = a.slice(Lt + ka);
            let o;
            typeof t == "string" ? o = await xa(t, n) : o = t;
            const i = await ye.subtle.decrypt({
                name: Ma,
                iv: s
            }, o, r), c = new TextDecoder;
            return JSON.parse(c.decode(i));
        } catch (a) {
            throw K.error("Decryption failed:", a), new Error("密码错误或数据损坏");
        }
    };
    async function _l(e, t) {
        return await xa(e, t);
    }
    function Rt(e) {
        const t = new Uint8Array(e);
        let a = "";
        for(let n = 0; n < t.byteLength; n++)a += String.fromCharCode(t[n]);
        return typeof window < "u" ? window.btoa(a) : Buffer.from(a, "binary").toString("base64");
    }
    function Mt(e) {
        let t;
        typeof window < "u" ? t = window.atob(e) : t = Buffer.from(e, "base64").toString("binary");
        const a = t.length, n = new Uint8Array(a);
        for(let s = 0; s < a; s++)n[s] = t.charCodeAt(s);
        return n;
    }
    async function dl() {
        const e = await ye.subtle.generateKey({
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([
                1,
                0,
                1
            ]),
            hash: "SHA-256"
        }, !0, [
            "encrypt",
            "decrypt"
        ]), t = await ye.subtle.exportKey("spki", e.publicKey);
        return {
            publicKey: Rt(t),
            privateKey: e.privateKey
        };
    }
    async function fl(e, t) {
        const a = Mt(e), n = await ye.subtle.decrypt({
            name: "RSA-OAEP"
        }, t, a);
        return new TextDecoder().decode(n);
    }
    async function ml(e) {
        const a = new TextEncoder().encode(e);
        return await ye.subtle.digest("SHA-256", a);
    }
    pl = async function(e, t) {
        if (!e || !e.startsWith("nodeauth:")) return e;
        const a = e.slice(9), n = Mt(a);
        if (n.byteLength < 12) throw new Error("invalid_payload_length");
        const s = n.slice(0, 12), r = n.slice(12), o = Array.isArray(t) ? t : [
            t
        ];
        let i;
        for (const c of o)try {
            const u = await ye.subtle.importKey("raw", c, "AES-GCM", !1, [
                "decrypt"
            ]), g = await ye.subtle.decrypt({
                name: "AES-GCM",
                iv: s
            }, u, r);
            return new TextDecoder().decode(g);
        } catch (u) {
            i = u;
        }
        throw i || new Error("Decryption failed with all provided keys");
    };
    async function gl(e, t) {
        if (!e || e.startsWith("nodeauth:")) return e;
        const a = ye.getRandomValues(new Uint8Array(12)), s = new TextEncoder().encode(e), r = await ye.subtle.importKey("raw", t, "AES-GCM", !1, [
            "encrypt"
        ]), o = await ye.subtle.encrypt({
            name: "AES-GCM",
            iv: a
        }, r, s), i = new Uint8Array(a.length + o.byteLength);
        return i.set(a, 0), i.set(new Uint8Array(o), a.length), `nodeauth:${Rt(i.buffer)}`;
    }
    let hl, yl, bl, Gt, ge, Ta;
    Ft = Object.freeze(Object.defineProperty({
        __proto__: null,
        arrayBufferToBase64: Rt,
        base64ToArrayBuffer: Mt,
        cryptoObj: ye,
        decryptDataWithPassword: Ea,
        decryptWithRSAPrivateKey: fl,
        deriveKeyDirectly: _l,
        deriveMaskingKeyFront: ml,
        encryptDataWithPassword: br,
        generateRSAKeyPair: dl,
        maskSecretFront: gl,
        shouldUseDevCryptoFallback: Fa,
        unmaskSecretFront: pl
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    hl = 1e5;
    yl = 16;
    bl = 12;
    Gt = window.location.hostname;
    ge = {
        isBiometricSupported () {
            return Va() ? !!(window.PublicKeyCredential?.getClientExtensionCapabilities?.() || {}).prf : !1;
        },
        isLegacyBiometricSupported () {
            return Va();
        },
        cancelCurrentCeremony () {
            try {
                es.cancelCeremony();
            } catch  {}
        },
        async enrollBiometricCompatible (e = {}) {
            const t = {
                challenge: "AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE",
                rp: {
                    name: "NodeAuth",
                    id: Gt
                },
                user: {
                    id: "nodeauth-compat",
                    name: e.email || e.username || "nodeauth",
                    displayName: `NodeAuth Lock (${e.email || e.username || "Account"})`
                },
                pubKeyCredParams: [
                    {
                        alg: -7,
                        type: "public-key"
                    }
                ],
                authenticatorSelection: {
                    authenticatorAttachment: "platform",
                    userVerification: "required"
                }
            };
            try {
                return (await $a(t)).id;
            } catch (a) {
                throw K.error(`[AppLockService] Compat enrollment failed: ${a.message || a}`), a;
            }
        },
        async verifyBiometricCompatible (e, t = !1) {
            if (!e) throw new Error("MISSING_CRED_ID");
            t && this.cancelCurrentCeremony();
            const a = {
                challenge: "AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE",
                allowCredentials: [
                    {
                        id: e,
                        type: "public-key"
                    }
                ],
                userVerification: "required",
                rpId: Gt
            };
            try {
                return !!await Wa(a);
            } catch (n) {
                throw n?.name !== "AbortError" && K.error(`[AppLockService] Compat auth failed: ${n.name}`), n;
            }
        },
        async enrollBiometric (e = {}) {
            const t = {
                challenge: "AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE",
                rp: {
                    name: "NodeAuth",
                    id: Gt
                },
                user: {
                    id: "nodeauth-lock",
                    name: e.email || e.username || "nodeauth",
                    displayName: `NodeAuth Lock (${e.email || e.username || "Account"})`
                },
                pubKeyCredParams: [
                    {
                        alg: -7,
                        type: "public-key"
                    },
                    {
                        alg: -257,
                        type: "public-key"
                    }
                ],
                authenticatorSelection: {
                    userVerification: "required",
                    residentKey: "required",
                    requireResidentKey: !0
                },
                extensions: {
                    prf: {
                        enabled: !0
                    }
                }
            };
            try {
                const a = await $a(t);
                if (!a.clientExtensionResults?.prf) throw new Error("E_PRF_NOT_SUPPORTED");
                const n = await this.getBiometricKey(a.id);
                if (!n) throw new Error("E_DERIVATION_FAILED");
                return {
                    key: n,
                    credId: a.id
                };
            } catch (a) {
                throw K.error(`[AppLockService] Enrollment failed: ${a.message || a}`), a;
            }
        },
        async getBiometricKey (e, t = !1) {
            t && this.cancelCurrentCeremony();
            const a = "AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE", n = {
                challenge: a,
                allowCredentials: e ? [
                    {
                        id: e,
                        type: "public-key"
                    }
                ] : [],
                userVerification: "required",
                rpId: Gt,
                extensions: {
                    prf: {
                        eval: {
                            first: a
                        }
                    }
                }
            };
            try {
                const r = (await Wa(n)).clientExtensionResults?.prf;
                if (r?.results?.first) return new Uint8Array(r.results.first);
                throw new Error("PRF key not returned by hardware");
            } catch (s) {
                throw s?.name !== "AbortError" && K.error(`[AppLockService] Auth failed: ${s.name}`), s;
            }
        },
        async deriveKeyFromPin (e, t) {
            if (e.length !== 6) throw new Error("PIN must be 6 digits");
            const a = new TextEncoder, n = await crypto.subtle.importKey("raw", a.encode(e), {
                name: "PBKDF2"
            }, !1, [
                "deriveKey"
            ]);
            return await crypto.subtle.deriveKey({
                name: "PBKDF2",
                salt: t,
                iterations: hl,
                hash: "SHA-256"
            }, n, {
                name: "AES-GCM",
                length: 256
            }, !1, [
                "encrypt",
                "decrypt"
            ]);
        },
        async encryptDeviceSalt (e, t) {
            const a = crypto.getRandomValues(new Uint8Array(bl)), n = new TextEncoder, s = await crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: a
            }, t, n.encode(e));
            return {
                encrypted: new Uint8Array(s),
                iv: a,
                salt: null
            };
        },
        async decryptDeviceSalt (e, t, a) {
            try {
                const n = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: t
                }, a, e);
                return new TextDecoder().decode(n);
            } catch  {
                return null;
            }
        },
        generateSalt () {
            return crypto.getRandomValues(new Uint8Array(yl));
        }
    };
    Ta = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    Nc = function(e) {
        let t = 0, a = 0, n = 0;
        const s = e.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), r = new Uint8Array(Math.ceil(s.length * 5 / 8));
        for(let o = 0; o < s.length; o++){
            const i = Ta.indexOf(s[o]);
            i !== -1 && (a = a << 5 | i, t += 5, t >= 8 && (r[n++] = a >>> t - 8 & 255, t -= 8));
        }
        return r.slice(0, n);
    };
    Oc = function(e) {
        let t = 0, a = 0, n = "";
        const s = new Uint8Array(e);
        for(let r = 0; r < s.length; r++)for(a = a << 8 | s[r], t += 8; t >= 5;)n += Ta[a >>> t - 5 & 31], t -= 5;
        return t > 0 && (n += Ta[a << 5 - t & 31]), n;
    };
    Cc = function(e) {
        const t = e.replace(/[^0-9a-fA-F]/g, "");
        if (t.length % 2 !== 0) return new Uint8Array(0);
        const a = new Uint8Array(t.length / 2);
        for(let n = 0; n < t.length; n += 2)a[n / 2] = parseInt(t.substr(n, 2), 16);
        return a;
    };
    Dc = function(e) {
        return Array.from(new Uint8Array(e)).map((t)=>t.toString(16).padStart(2, "0")).join("");
    };
    Rc = function(e) {
        const t = new Uint8Array(e.length);
        for(let a = 0; a < e.length; a++)t[a] = e.charCodeAt(a);
        return t;
    };
    Mc = function(e) {
        return String.fromCharCode.apply(null, new Uint8Array(e));
    };
    Fc = function(e) {
        try {
            const t = atob(e.trim()), a = new Uint8Array(t.length);
            for(let n = 0; n < t.length; n++)a[n] = t.charCodeAt(n);
            return a;
        } catch  {
            return new Uint8Array(0);
        }
    };
    xc = function(e) {
        const t = new Uint8Array(e);
        let a = "";
        for(let n = 0; n < t.byteLength; n++)a += String.fromCharCode(t[n]);
        return btoa(a);
    };
    Pn = function() {
        const e = localStorage.getItem("app_time_offset"), t = e ? parseInt(e, 10) : 0;
        return Date.now() + t;
    };
    const ua = M(Date.now() / 1e3);
    let It = null, qt = 0, In = !1;
    Aa = Or(new Map);
    Uc = function() {
        return {
            currentTime: ua,
            startTimer: ()=>{
                if (qt++, In || (ua.value = Pn() / 1e3, In = !0), !It) {
                    const a = ()=>{
                        ua.value = Pn() / 1e3;
                    };
                    a(), It = setInterval(a, 1e3);
                }
            },
            stopTimer: ()=>{
                qt--, qt <= 0 && It && (clearInterval(It), It = null, qt = 0);
            }
        };
    };
    let wr, wl, kl;
    Bt = at("appLock", ()=>{
        const e = M(!1), t = M(!1), a = M("none"), n = M(0), s = M(0), r = M(!1), o = M(0), i = M(0), c = M(!1), u = M(!1), g = M(null), h = M(null), d = M(null), m = M(null), f = async ()=>{
            if ([
                "biometric",
                "biometric_compat"
            ].includes(a.value)) try {
                const x = await oe("sys:sec:bio_enc_salt"), O = await oe("sys:sec:bio_cred_id");
                x && O && (g.value = {
                    encData: x,
                    credId: O
                });
            } catch (x) {
                K.error(`[AppLockStore] Pre-warm failed: ${x.message || x}`);
            }
        }, w = async ()=>{
            if (e.value) return;
            r.value = ge.isBiometricSupported() || ge.isLegacyBiometricSupported();
            const x = await oe("sys:sec:lock_mode") || "none";
            a.value = x;
            const O = !!await oe("sys:sec:enc_device_salt");
            x !== "none" && O && (t.value = !0, localStorage.removeItem("app_lock_last_hidden"), i.value = 0, f()), o.value = await oe("sys:sec:auto_lock_delay") || 0, document.addEventListener("visibilitychange", ()=>{
                if (a.value !== "none" && e.value && !c.value) {
                    if (document.visibilityState === "hidden") {
                        const V = Date.now();
                        i.value = V, localStorage.setItem("app_lock_last_hidden", V.toString()), Number(o.value) === 0 && te();
                    } else if (document.visibilityState === "visible") {
                        const V = localStorage.getItem("app_lock_last_hidden"), X = i.value || Number(V || 0);
                        !t.value && Number(o.value) > 0 && X > 0 && !u.value && (Date.now() - X) / 1e3 > Number(o.value) && te(), i.value = 0, localStorage.removeItem("app_lock_last_hidden");
                    }
                }
            }), e.value = !0;
        }, T = async (x)=>{
            const O = await oe("sys:sec:lock_mode");
            if (O && O !== "none") {
                t.value && (t.value = !0), f();
                return;
            }
            await fe("sys:sec:device_salt", x), h.value = x, a.value = "none", t.value = !1;
        }, P = async ()=>{
            if (h.value) return h.value;
            if (!t.value && a.value === "none") {
                const x = await oe("sys:sec:device_salt");
                return x && (h.value = x), x;
            }
            return null;
        }, R = async ()=>{
            const x = await y();
            return x ? x[0] : null;
        }, y = async ()=>{
            if (d.value) return d.value;
            const x = await P();
            if (!x) return null;
            const { deriveMaskingKeyFront: O } = await se(async ()=>{
                const { deriveMaskingKeyFront: j } = await Promise.resolve().then(()=>Ft);
                return {
                    deriveMaskingKeyFront: j
                };
            }, void 0), V = x.split(","), X = await Promise.all(V.map((j)=>O(j.trim())));
            return d.value = X, X;
        }, p = async ()=>{
            if (m.value) return m.value;
            const x = await P();
            if (!x) return null;
            try {
                const { deriveKeyDirectly: O } = await se(async ()=>{
                    const { deriveKeyDirectly: j } = await Promise.resolve().then(()=>Ft);
                    return {
                        deriveKeyDirectly: j
                    };
                }, void 0);
                let V = await oe("sys:sec:vault_stable_salt");
                V || (V = crypto.getRandomValues(new Uint8Array(16)), await fe("sys:sec:vault_stable_salt", V)), K.info("[AppLockStore] Deriving session vault key (PBKDF2 100k once)...");
                const X = await O(x, V);
                return m.value = X, X;
            } catch (O) {
                return K.error("[AppLockStore] Failed to derive vault key:", O), null;
            }
        }, k = async (x)=>{
            if (!x || x.length !== 6) throw new Error("PIN must be 6 digits");
            let O = h.value || await oe("sys:sec:device_salt");
            if (!O) throw new Error("System salt not found");
            const V = ge.generateSalt(), X = await ge.deriveKeyFromPin(x, V), j = await ge.encryptDeviceSalt(O, X);
            await fe("sys:sec:enc_device_salt", {
                ...j,
                salt: V
            }), await fe("sys:sec:lock_mode", "pin"), a.value = "pin", t.value = !1, await Se("sys:sec:device_salt");
        }, v = async (x)=>{
            if (n.value >= 3) {
                const j = Date.now(), ve = n.value >= 5 ? 3e5 : 3e4;
                if (j - s.value < ve) {
                    const Te = Math.ceil((ve - (j - s.value)) / 1e3);
                    throw new Error(`Too many attempts. Wait ${Te}s`);
                }
            }
            const O = await oe("sys:sec:enc_device_salt");
            if (!O) return !1;
            const V = await ge.deriveKeyFromPin(x, O.salt), X = await ge.decryptDeviceSalt(O.encrypted, O.iv, V);
            return X ? (h.value = X, t.value = !1, n.value = 0, u.value = !0, setTimeout(()=>{
                u.value = !1;
            }, 1e3), !0) : (n.value++, s.value = Date.now(), !1);
        }, S = async (x = {})=>{
            const O = ge.isBiometricSupported(), V = ge.isLegacyBiometricSupported();
            if (!O && !V) throw new Error("Biometric not supported");
            const X = await oe("sys:sec:device_salt") || h.value;
            if (!X) throw new Error("Unlocked state required");
            if (O) {
                const j = await ge.enrollBiometric(x);
                if (!j) return !1;
                const ve = await crypto.subtle.importKey("raw", j.key, {
                    name: "AES-GCM"
                }, !1, [
                    "encrypt"
                ]), Te = await ge.encryptDeviceSalt(X, ve);
                return await fe("sys:sec:bio_enc_salt", Te), await fe("sys:sec:bio_cred_id", j.credId), await ue("biometric"), f(), !0;
            } else {
                const j = await ge.enrollBiometricCompatible(x);
                if (!j) return !1;
                const ve = crypto.getRandomValues(new Uint8Array(32)), Te = await crypto.subtle.importKey("raw", ve, {
                    name: "AES-GCM"
                }, !1, [
                    "encrypt"
                ]), Pe = await ge.encryptDeviceSalt(X, Te);
                return await fe("sys:sec:bio_wrap_key", ve), await fe("sys:sec:bio_enc_salt", Pe), await fe("sys:sec:bio_cred_id", j), await ue("biometric_compat"), f(), !0;
            }
        }, D = async (x = !1)=>{
            if (c.value && !x) return !1;
            const O = x;
            if (g.value || await f(), !g.value) return !1;
            c.value = !0;
            const { encData: V, credId: X } = g.value;
            try {
                let j = null;
                if (a.value === "biometric" ? j = await ge.getBiometricKey(X, O) : a.value === "biometric_compat" && await ge.verifyBiometricCompatible(X, O) && (j = await oe("sys:sec:bio_wrap_key")), j) {
                    const ve = await crypto.subtle.importKey("raw", j, {
                        name: "AES-GCM"
                    }, !1, [
                        "decrypt"
                    ]), Te = await ge.decryptDeviceSalt(V.encrypted, V.iv, ve);
                    if (Te) return h.value = Te, t.value = !1, n.value = 0, u.value = !0, setTimeout(()=>{
                        u.value = !1;
                    }, 1e3), !0;
                }
                return !1;
            } catch (j) {
                throw j;
            } finally{
                c.value = !1;
            }
        }, L = async (x)=>{
            const O = await oe("sys:sec:enc_device_salt");
            if (!O) return !1;
            const V = await ge.deriveKeyFromPin(x, O.salt), X = await ge.decryptDeviceSalt(O.encrypted, O.iv, V);
            return X ? (await fe("sys:sec:device_salt", X), h.value = X, await Se("sys:sec:enc_device_salt"), await Se("sys:sec:bio_enc_salt"), await Se("sys:sec:bio_cred_id"), await ue("none"), t.value = !1, !0) : !1;
        }, te = ()=>{
            h.value = null, d.value = null, m.value = null, Aa.clear(), t.value = !0, f();
        }, ue = async (x)=>{
            await fe("sys:sec:lock_mode", x), a.value = x;
        };
        return {
            isInitialized: e,
            isLocked: t,
            lockMode: a,
            autoLockDelay: o,
            failedAttempts: n,
            isBiometricAvailable: r,
            isUnlocking: c,
            ignoreAutoLockTemporarily: u,
            init: w,
            setDeviceKey: T,
            getDeviceKey: P,
            getMaskingKey: R,
            getAllMaskingKeys: y,
            getCachedVaultKey: p,
            setupPin: k,
            unlockWithPin: v,
            enableBiometric: S,
            unlockWithBiometric: D,
            disableLock: L,
            updateLockMode: ue,
            setAutoLockDelay: async (x)=>{
                o.value = x, await fe("sys:sec:auto_lock_delay", x);
                const O = J.global.t("security.auto_lock_delay_updated");
                Me.success({
                    message: O,
                    grouping: !0
                });
            },
            lock: te,
            reset: ()=>{
                t.value = !1, a.value = "none", h.value = null, d.value = null, m.value = null, n.value = 0, g.value = null, Aa.clear();
            }
        };
    });
    Bc = Object.freeze(Object.defineProperty({
        __proto__: null,
        useAppLockStore: Bt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    vr = at("vault", ()=>{
        const e = Bt(), t = M(!1), a = M(!1), n = M(!1), s = async ()=>{
            const d = await oe("vault:data:main");
            t.value = !!d;
        }, r = async ()=>{
            const d = await e.getDeviceKey();
            if (!d) {
                if (e.isLocked) return {
                    vault: []
                };
                throw new Error("设备授权信息已失效，请重新登录");
            }
            const m = await oe("vault:data:main");
            if (!m) return {
                vault: []
            };
            try {
                const f = await e.getCachedVaultKey(), w = await oe("sys:sec:vault_stable_salt"), P = (typeof m == "string" ? (await se(async ()=>{
                    const { base64ToArrayBuffer: y } = await Promise.resolve().then(()=>Ft);
                    return {
                        base64ToArrayBuffer: y
                    };
                }, void 0)).base64ToArrayBuffer(m) : m).slice(0, 16);
                return w && P.every((y, p)=>y === w[p]) && f ? await Ea(m, f) : await Ea(m, d);
            } catch  {
                return {
                    vault: []
                };
            }
        }, o = async ({ serverTotal: d, delta: m = 0, localCount: f = void 0 } = {})=>{
            if (f !== void 0) await fe("vault:meta:local_count", f);
            else if (await oe("vault:meta:local_count") === void 0) {
                const P = await r();
                await fe("vault:meta:local_count", P.vault?.length || 0);
            }
            let w = await oe("vault:meta:server_total") || 0;
            d !== void 0 ? w = d : m !== 0 && (w = Math.max(0, w + m)), await fe("vault:meta:server_total", w);
        }, i = async (d)=>{
            const m = await e.getDeviceKey();
            if (!m) throw new Error("设备授权信息已失效，请重新登录");
            const f = await e.getCachedVaultKey(), w = await oe("sys:sec:vault_stable_salt"), T = await br(d, f || m, w);
            await fe("vault:data:main", T), await o({
                localCount: d.vault?.length || 0
            }), t.value = !0;
        };
        return {
            hasVault: t,
            isDirty: a,
            hasDecryptionError: n,
            init: s,
            getData: r,
            markDirty: ()=>{
                a.value = !0;
            },
            clearDirty: ()=>{
                a.value = !1;
            },
            saveData: i,
            updateMetadata: o,
            deleteItems: async (d)=>{
                if (!d || d.length === 0) return;
                const m = await r();
                if (m && m.vault) {
                    const f = m.vault.filter((w)=>!d.includes(w.id));
                    await i({
                        vault: f,
                        categoryStats: m.categoryStats || []
                    });
                }
            },
            unlock: async ()=>!0,
            setup: async ()=>{},
            reset: ()=>{
                a.value = !1, t.value = !1, n.value = !1, Aa.clear();
            }
        };
    });
    vl = at("vaultSync", ()=>{
        const e = M([]), t = M(!1), a = M(!1), n = async ()=>{
            if (!a.value) try {
                const d = await oe("vault:sync:queue");
                if (d && Array.isArray(d)) {
                    e.value = d;
                    const m = mt();
                    d.forEach((f)=>{
                        f.status === "conflict" && m.registerConflict(f.id);
                    });
                }
            } finally{
                a.value = !0;
            }
        }, s = async ()=>{
            await fe("vault:sync:queue", JSON.parse(JSON.stringify(e.value)));
        }, r = me(()=>e.value.length > 0), o = (d)=>e.value.some((m)=>m.id === d), i = async (d, m, f)=>{
            a.value || await n(), u(d, m, f), await s();
        }, c = async (d)=>{
            a.value || await n();
            for (const m of d)u(m.type, m.id, m.data);
            await s();
        }, u = (d, m, f)=>{
            const w = e.value.findIndex((T)=>T.id === m);
            if (w > -1) {
                const T = e.value[w];
                if (T.type === "create" && d === "delete") {
                    e.value.splice(w, 1);
                    return;
                }
                if (T.type === "delete" && d === "delete") return;
                T.type === "create" && d === "update" ? T.data = {
                    ...T.data,
                    ...f
                } : T.type === "update" && d === "update" ? T.data = {
                    ...T.data,
                    ...f
                } : e.value[w] = {
                    id: m,
                    type: d,
                    data: f,
                    timestamp: Date.now()
                };
            } else {
                const T = f?.updatedAt;
                e.value.push({
                    id: m,
                    type: d,
                    data: f,
                    baselineUpdatedAt: T,
                    timestamp: Date.now()
                });
            }
        };
        typeof window < "u" && window.addEventListener("online", async ()=>{
            const { useOfflineStore: d } = await se(async ()=>{
                const { useOfflineStore: f } = await Promise.resolve().then(()=>rl);
                return {
                    useOfflineStore: f
                };
            }, void 0), m = d();
            if (r.value && !m.isOffline) try {
                const { vaultService: f } = await se(async ()=>{
                    const { vaultService: w } = await import("./vaultService-Bo8lK2lt.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((T)=>T.a);
                    return {
                        vaultService: w
                    };
                }, __vite__mapDeps([0,1,2,3,4]));
                await f.syncOfflineActions();
            } catch (f) {
                console.warn("[Sync-Store] Remote trigger failed:", f);
            }
        });
        const g = async ()=>{
            e.value = [], await Se("vault:sync:queue");
        };
        return n(), {
            syncQueue: e,
            isSyncing: t,
            isInitialized: a,
            hasPendingChanges: r,
            isItemPending: o,
            enqueueAction: i,
            enqueueActions: c,
            clearQueue: g,
            initQueue: n,
            saveQueue: s,
            resolveConflict: async (d, m)=>{
                const f = e.value.findIndex((T)=>T.id === d);
                if (f === -1) return;
                m === "force" ? (e.value[f].data.force = !0, e.value[f].status = "pending") : m === "discard" && e.value.splice(f, 1), mt().removeConflict(d), await s();
            }
        };
    });
    wr = new ts({
        defaultOptions: {
            queries: {
                retry: 1,
                refetchOnWindowFocus: !1,
                staleTime: 1e3 * 60 * 5
            }
        }
    });
    nt = at("authUserInfo", ()=>{
        const e = Bt(), t = vl(), a = M({}), n = M(!1), s = M(!1), r = M(!1), o = M(""), i = M(""), c = M(!1), u = M(null), g = async ()=>{
            try {
                const { generateRSAKeyPair: p } = await se(async ()=>{
                    const { generateRSAKeyPair: v } = await Promise.resolve().then(()=>Ft);
                    return {
                        generateRSAKeyPair: v
                    };
                }, void 0), k = await p();
                return u.value = k.privateKey, k.publicKey;
            } catch  {
                return null;
            }
        }, h = async (p)=>{
            if (!p || p.length <= 64 || !u.value) return p;
            try {
                const { decryptWithRSAPrivateKey: k } = await se(async ()=>{
                    const { decryptWithRSAPrivateKey: v } = await Promise.resolve().then(()=>Ft);
                    return {
                        decryptWithRSAPrivateKey: v
                    };
                }, void 0);
                if (p.includes(".")) {
                    const v = p.split(".");
                    return (await Promise.all(v.map((D)=>k(D, u.value)))).join("");
                } else return await k(p, u.value);
            } catch  {
                return p;
            }
        }, d = ()=>{
            c.value = !0;
        }, m = ()=>{
            c.value = !1;
        }, f = ()=>{
            n.value = !0;
        }, w = async (p, k = !1, v = "", S = "", D = "")=>{
            a.value = p, r.value = k, o.value = v, i.value = D, await fe("auth:user:profile", p), await fe("auth:user:needsEmergency", k), S && await e.setDeviceKey(S);
        }, T = async ()=>{
            const p = await oe("auth:user:profile");
            p && (a.value = p);
            const k = await oe("auth:user:needsEmergency");
            k != null && (r.value = k);
        }, P = async ()=>{
            const p = vr();
            e.reset(), p.reset(), await il(), await t.clearQueue(), wr.clear(), a.value = {}, r.value = !1, o.value = "", i.value = "", n.value = !0;
        };
        return {
            userInfo: a,
            isInitialized: n,
            isVerifying: c,
            needsEmergency: r,
            tempEncryptionKey: o,
            tempLicenseKey: i,
            isLoggingOut: s,
            setUserInfo: w,
            clearUserInfo: P,
            logout: async ()=>{
                s.value = !0;
                let p = null;
                try {
                    p = (await se(()=>Promise.resolve().then(()=>pc), void 0)).default;
                } catch  {}
                wa.logout().catch(()=>{});
                try {
                    const k = new Promise((v, S)=>setTimeout(()=>S(new Error("clearUserInfo timeout")), 3e3));
                    await Promise.race([
                        P(),
                        k
                    ]);
                } catch (k) {
                    K.error("[Logout] Error clearing user info:", k), sessionStorage.removeItem("app_vault_session_key");
                }
                try {
                    p ? await p.push("/login") : window.location.href = "/login";
                } catch  {
                    window.location.href = "/login";
                } finally{
                    s.value = !1;
                }
            },
            fetchUserInfo: async ()=>{
                const p = await g(), k = await wa.fetchMe(p);
                if (k && k.success) {
                    let v = k.deviceKey || "";
                    return v && (v = await h(v)), await w(k.userInfo, !!k.needsEmergency, k.encryptionKey || "", v, k.license || ""), !0;
                } else return await P(), !1;
            },
            init: T,
            startVerifying: d,
            stopVerifying: m,
            markInitialized: f,
            generateAndSetRSAKeys: g,
            decryptDeviceKey: h
        };
    });
    kr = at("theme", ()=>{
        const e = M(localStorage.getItem("app_theme_mode") || "auto"), t = M(!1), a = ()=>{
            r(), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ()=>{
                e.value === "auto" && r();
            });
        }, n = (o)=>{
            e.value = o, localStorage.setItem("app_theme_mode", o), r();
        }, s = ()=>{
            const o = t.value ? "light" : "dark";
            n(o);
        }, r = ()=>{
            let o = !1;
            e.value === "auto" ? o = window.matchMedia("(prefers-color-scheme: dark)").matches : o = e.value === "dark", t.value = o, o ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        };
        return {
            themeMode: e,
            isDark: t,
            initTheme: a,
            setThemeMode: n,
            toggleTheme: s
        };
    });
    ra = (e, t)=>{
        const a = e.__vccOpts || e;
        for (const [n, s] of t)a[n] = s;
        return a;
    };
    wl = {
        name: "iconLocales"
    };
    kl = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
    };
    function El(e, t, a, n, s, r) {
        return G(), ie("svg", kl, [
            ...t[0] || (t[0] = [
                q("path", {
                    fill: "currentColor",
                    d: "M5 15v2a2 2 0 0 0 2 2h3v2H7a4 4 0 0 1-4-4v-2zm13-5l4.4 11h-2.16l-1.2-3h-4.09l-1.2 3h-2.15L16 10zm-1 2.89L15.75 16h2.5zM8 2v2h4v7H8v3H6v-3H2V4h4V2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3zM6 6H4v3h2zm4 0H8v3h2z"
                }, null, -1)
            ])
        ]);
    }
    let Al, Sl, Pl, Il, Ll, Nl, Ol, Cl, Dl, Er, Rl, Ml, Fl, xl, Ul, Bl, Tr, Hl, Wl, $l, Vl, Gl, ql, Kl, Yl;
    Tl = ra(wl, [
        [
            "render",
            El
        ]
    ]);
    Al = {
        class: "header-left"
    };
    Sl = {
        key: 0,
        class: "header-center"
    };
    Pl = {
        class: "header-page-title"
    };
    Il = {
        class: "header-right"
    };
    Ll = {
        key: 0,
        class: "guest-actions"
    };
    Nl = {
        key: 1,
        class: "mobile-search-wrapper"
    };
    Ol = {
        key: 2,
        class: "mobile-actions"
    };
    Cl = {
        key: 3,
        class: "user-profile"
    };
    Dl = {
        class: "username"
    };
    Er = {
        __name: "theHeader",
        setup (e) {
            const { locale: t } = gt(), a = Sa(), n = Cn(), s = Ut(), r = mt(), o = nt(), i = kr(), c = M(null);
            De(()=>s.isSearchVisible, (m)=>{
                m && Cr(()=>{
                    c.value?.focus();
                });
            });
            const u = {
                vault: "menu.vault",
                "add-vault": "menu.add",
                "mobile-data": "menu.migration",
                "mobile-settings": "menu.settings",
                "settings-appearance": "menu.appearance",
                "migration-export": "migration.export",
                "migration-import": "migration.import",
                backups: "menu.backup",
                tools: "menu.tools",
                "settings-passkey": "menu.passkey",
                "settings-about": "menu.about",
                "settings-language": "menu.language",
                "settings-theme": "menu.theme",
                "settings-layout": "settings.display_layout",
                "settings-security": "menu.security",
                "settings-devices": "security.devices",
                "settings-trash": "security.trash_settings",
                "settings-pin": "security.pin_settings"
            }, g = ()=>{
                const m = t.value === "zh-CN" ? "en-US" : "zh-CN";
                nl(m);
            }, h = ()=>{
                a.path === "/" ? s.homeTabReset++ : n.push("/");
            }, d = {
                "totp-secret": "tools.totp_secret_title",
                "apps-review": "tools.apps_review_title",
                password: "tools.password_gen_title",
                "time-sync": "tools.time_sync_title",
                "qr-parser": "tools.qr_parser_title"
            };
            return (m, f)=>{
                const w = Pa, T = Wr, P = Jt, R = Gr, y = Kr;
                return G(), ie("header", {
                    class: jt([
                        "header",
                        {
                            "is-mobile-subpage": C(s).isMobile && C(s).canGoBack
                        }
                    ])
                }, [
                    q("div", Al, [
                        C(s).isMobile && C(s).canGoBack ? (G(), Ie(w, {
                            key: 0,
                            circle: "",
                            link: "",
                            icon: C(Mn),
                            onClick: f[0] || (f[0] = (p)=>C(s).goBack()),
                            class: "header-back-btn"
                        }, null, 8, [
                            "icon"
                        ])) : ke("", !0),
                        !C(s).isMobile || !C(s).canGoBack ? (G(), ie("a", {
                            key: 1,
                            href: "#",
                            onClick: Dr(h, [
                                "prevent"
                            ]),
                            class: "header-home-link"
                        }, [
                            q("div", {
                                class: "header-logo",
                                onClick: f[1] || (f[1] = (...p)=>C(s).resetHomeTab && C(s).resetHomeTab(...p))
                            }, [
                                f[7] || (f[7] = q("img", {
                                    src: ss,
                                    alt: "NodeAuth",
                                    class: "header-logo-img"
                                }, null, -1)),
                                f[8] || (f[8] = q("h2", {
                                    class: "header-logo-text"
                                }, "NodeAuth", -1)),
                                Q(Dn, {
                                    name: "tag-fade"
                                }, {
                                    default: _e(()=>[
                                            C(r).isManualOffline ? (G(), Ie(T, {
                                                key: 0,
                                                size: "small",
                                                type: "warning",
                                                effect: "dark",
                                                class: "status-tag manual-offline"
                                            }, {
                                                default: _e(()=>[
                                                        qe(Ee(m.$t("common.offline_tag")), 1)
                                                    ]),
                                                _: 1
                                            })) : C(r).isPhysicalOffline ? (G(), Ie(T, {
                                                key: 1,
                                                size: "small",
                                                type: "danger",
                                                effect: "dark",
                                                class: "status-tag passive-offline"
                                            }, {
                                                default: _e(()=>[
                                                        qe(Ee(m.$t("common.network_error_tag")), 1)
                                                    ]),
                                                _: 1
                                            })) : ke("", !0)
                                        ]),
                                    _: 1
                                })
                            ])
                        ])) : ke("", !0)
                    ]),
                    C(s).isMobile && C(s).canGoBack ? (G(), ie("div", Sl, [
                        q("h2", Pl, Ee(C(s).activeSubTool ? m.$t(d[C(s).activeSubTool]) : m.$t(u[C(s).app_active_tab])), 1)
                    ])) : ke("", !0),
                    q("div", Il, [
                        C(a).meta.requiresAuth ? ke("", !0) : (G(), ie("div", Ll, [
                            Q(w, {
                                circle: "",
                                icon: C(i).isDark ? C($r) : C(Vr),
                                onClick: C(i).toggleTheme,
                                class: "header-action-btn"
                            }, null, 8, [
                                "icon",
                                "onClick"
                            ]),
                            Q(w, {
                                circle: "",
                                icon: Tl,
                                title: m.$i18n.locale === "zh-CN" ? "English" : "切换语言",
                                onClick: g,
                                class: "header-action-btn"
                            }, null, 8, [
                                "title"
                            ])
                        ])),
                        C(s).isMobile && C(s).isSearchVisible ? (G(), ie("div", Nl, [
                            Q(R, {
                                ref_key: "mobileSearchInput",
                                ref: c,
                                modelValue: C(s).searchQuery,
                                "onUpdate:modelValue": f[2] || (f[2] = (p)=>C(s).searchQuery = p),
                                placeholder: m.$t("search.placeholder"),
                                clearable: "",
                                class: "header-search-input"
                            }, {
                                prefix: _e(()=>[
                                        C(s).isLoadingSearching && C(s).searchQuery ? (G(), Ie(P, {
                                            key: 0,
                                            class: "is-loading"
                                        }, {
                                            default: _e(()=>[
                                                    Q(C(_a))
                                                ]),
                                            _: 1
                                        })) : (G(), Ie(P, {
                                            key: 1
                                        }, {
                                            default: _e(()=>[
                                                    Q(C(Ha))
                                                ]),
                                            _: 1
                                        }))
                                    ]),
                                _: 1
                            }, 8, [
                                "modelValue",
                                "placeholder"
                            ]),
                            Q(w, {
                                link: "",
                                onClick: f[3] || (f[3] = (p)=>C(s).toggleSearch(!1)),
                                class: "search-cancel-btn"
                            }, {
                                default: _e(()=>[
                                        qe(Ee(m.$t("common.cancel")), 1)
                                    ]),
                                _: 1
                            })
                        ])) : ke("", !0),
                        C(s).isMobile && C(a).meta.requiresAuth && C(s).app_active_tab === "vault" && !C(s).isSearchVisible ? (G(), ie("div", Ol, [
                            Q(w, {
                                circle: "",
                                onClick: f[4] || (f[4] = (p)=>C(s).toggleSearch(!0)),
                                class: "header-action-btn shadow-btn"
                            }, {
                                default: _e(()=>[
                                        C(s).isLoadingSearching ? (G(), Ie(P, {
                                            key: 0,
                                            class: "is-loading"
                                        }, {
                                            default: _e(()=>[
                                                    Q(C(_a))
                                                ]),
                                            _: 1
                                        })) : (G(), Ie(P, {
                                            key: 1
                                        }, {
                                            default: _e(()=>[
                                                    Q(C(Ha))
                                                ]),
                                            _: 1
                                        }))
                                    ]),
                                _: 1
                            }),
                            Q(w, {
                                circle: "",
                                type: "primary",
                                icon: C(qr),
                                onClick: f[5] || (f[5] = (p)=>C(s).setActiveTab("add-vault")),
                                class: "header-add-btn shadow-btn"
                            }, null, 8, [
                                "icon"
                            ])
                        ])) : ke("", !0),
                        !C(s).isMobile && C(a).meta.requiresAuth ? (G(), ie("div", Cl, [
                            Q(y, {
                                size: 32,
                                src: C(o).userInfo?.avatar || "",
                                onError: f[6] || (f[6] = (p)=>!0)
                            }, {
                                default: _e(()=>[
                                        qe(Ee(C(o).userInfo?.username ? C(o).userInfo.username.charAt(0).toUpperCase() : "?"), 1)
                                    ]),
                                _: 1
                            }, 8, [
                                "src"
                            ]),
                            q("span", Dl, Ee(C(o).userInfo?.username || "NodeAuth"), 1)
                        ])) : ke("", !0)
                    ])
                ], 2);
            };
        }
    };
    Rl = {
        class: "global-footer"
    };
    Ml = {
        class: "footer-content"
    };
    Fl = {
        key: 0
    };
    xl = [
        "title"
    ];
    Ul = {
        key: 0,
        class: "commit-hash"
    };
    Bl = {
        __name: "theFooter",
        setup (e) {
            const t = Ut(), a = "__DIST_COMMIT_HASH__", n = "2.3.18";
            return (s, r)=>(G(), ie("footer", Rl, [
                    q("div", Ml, [
                        q("p", null, [
                            qe(" ©" + Ee(new Date().getFullYear()) + " ", 1),
                            r[2] || (r[2] = q("a", {
                                href: "https://github.com/nodeauth/nodeauth-worker",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "NodeAuth", -1)),
                            C(t).isMobile ? ke("", !0) : (G(), ie("span", Fl, [
                                ...r[0] || (r[0] = [
                                    q("span", {
                                        class: "divider"
                                    }, "|", -1),
                                    qe(" A Secure 2FA Management Tool ", -1)
                                ])
                            ])),
                            q("span", {
                                class: "version-info",
                                title: `Commit Hash: ${C(a)}`
                            }, [
                                r[1] || (r[1] = q("span", {
                                    class: "divider"
                                }, "|", -1)),
                                qe(" v" + Ee(C(n)), 1),
                                C(a) && C(a) !== "unknown" ? (G(), ie("span", Ul, " (" + Ee(C(a)) + ")", 1)) : ke("", !0)
                            ], 8, xl)
                        ])
                    ])
                ]));
        }
    };
    Tr = ra(Bl, [
        [
            "__scopeId",
            "data-v-e48f96a8"
        ]
    ]);
    Hl = {
        class: "layout-main-content"
    };
    Wl = {
        class: "text-16 ls-1"
    };
    $l = {
        __name: "mainLayout",
        setup (e) {
            const t = Ut(), a = nt(), n = me(()=>t.isMobile ? {
                    minHeight: "440px"
                } : {
                    paddingLeft: t.isSidebarCollapsed ? "64px" : "240px",
                    minHeight: "520px",
                    transition: "padding-left 0.3s"
                });
            let s = 0, r = 0;
            const o = M(0), i = M(!1), c = M(!1), u = (d)=>{
                !t.isMobile || !t.canGoBack || (s = d.touches[0].clientX, r = Date.now(), o.value = 0, c.value = !1, i.value = s < 50);
            }, g = (d)=>{
                if (!i.value) return;
                const m = d.touches[0].clientX;
                if (o.value = Math.max(0, m - s), o.value >= 50 && !c.value) {
                    if ("vibrate" in navigator) try {
                        navigator.vibrate(25);
                    } catch  {}
                    c.value = !0;
                }
                o.value < 40 && (c.value = !1);
            }, h = (d)=>{
                if (!i.value) return;
                const m = d.changedTouches[0].clientX, f = Date.now() - r;
                m - s > 50 && f < 1500 && t.goBack(), i.value = !1, o.value = 0, c.value = !1;
            };
            return (d, m)=>{
                const f = Jt;
                return G(), ie("div", {
                    class: "layout-main",
                    onTouchstart: u,
                    onTouchmove: g,
                    onTouchend: h
                }, [
                    C(t).isMobile && C(s) < 50 && o.value > 5 ? (G(), ie("div", {
                        key: 0,
                        class: "swipe-back-feedback",
                        style: Ua({
                            opacity: Math.min(o.value / 100, .9),
                            transform: `translateY(-50%) translateX(${Math.min(o.value - 45, 15)}px) scale(${.8 + Math.min(o.value / 350, .4)})`
                        })
                    }, [
                        Q(f, null, {
                            default: _e(()=>[
                                    Q(C(Mn))
                                ]),
                            _: 1
                        })
                    ], 4)) : ke("", !0),
                    Q(Er),
                    q("main", Hl, [
                        C(a).isVerifying ? (G(), ie("div", {
                            key: 0,
                            class: "flex-column flex-center text-secondary content-loading-container",
                            style: Ua(C(n))
                        }, [
                            Q(f, {
                                class: "is-loading mb-20 text-primary",
                                size: 48
                            }, {
                                default: _e(()=>[
                                        Q(C(_a))
                                    ]),
                                _: 1
                            }),
                            q("p", Wl, Ee(d.$t("common.loading_data")), 1)
                        ], 4)) : (G(), Ie(C(Rn), {
                            key: 1
                        }))
                    ]),
                    C(t).isMobile ? ke("", !0) : (G(), Ie(Tr, {
                        key: 1
                    }))
                ], 32);
            };
        }
    };
    Vl = {
        class: "layout-blank"
    };
    Gl = {
        class: "layout-blank-content"
    };
    ql = {
        __name: "blankLayout",
        setup (e) {
            return (t, a)=>(G(), ie("div", Vl, [
                    Q(Er),
                    q("main", Gl, [
                        Q(C(Rn))
                    ]),
                    Q(Tr)
                ]));
        }
    };
    Kl = {
        name: "iconFingerprint"
    };
    Yl = {
        fill: "currentColor",
        width: "1em",
        height: "1em",
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg"
    };
    function jl(e, t, a, n, s, r) {
        return G(), ie("svg", Yl, [
            ...t[0] || (t[0] = [
                q("path", {
                    d: "M390.42,75.28a10.45,10.45,0,0,1-5.32-1.44C340.72,50.08,302.35,40,256.35,40c-45.77,0-89.23,11.28-128.76,33.84C122,77,115.11,74.8,111.87,69a12.4,12.4,0,0,1,4.63-16.32A281.81,281.81,0,0,1,256.35,16c49.23,0,92.23,11.28,139.39,36.48a12,12,0,0,1,4.85,16.08A11.3,11.3,0,0,1,390.42,75.28Zm-330.79,126a11.73,11.73,0,0,1-6.7-2.16,12.26,12.26,0,0,1-2.78-16.8c22.89-33.6,52-60,86.69-78.48C209.42,65,302.35,64.72,375.16,103.6c34.68,18.48,63.8,44.64,86.69,78a12.29,12.29,0,0,1-2.78,16.8,11.26,11.26,0,0,1-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56-66.34-35.28-151.18-35.28-217.29.24-31.44,16.8-57.79,40.8-78.59,71A10,10,0,0,1,59.63,201.28ZM204.1,491a10.66,10.66,0,0,1-8.09-3.6C175.9,466.48,165,453,149.55,424c-16-29.52-24.27-65.52-24.27-104.16,0-71.28,58.71-129.36,130.84-129.36S387,248.56,387,319.84a11.56,11.56,0,1,1-23.11,0c0-58.08-48.32-105.36-107.72-105.36S148.4,261.76,148.4,319.84c0,34.56,7.39,66.48,21.49,92.4,14.8,27.6,25,39.36,42.77,58.08a12.67,12.67,0,0,1,0,17A12.44,12.44,0,0,1,204.1,491Zm165.75-44.4c-27.51,0-51.78-7.2-71.66-21.36a129.1,129.1,0,0,1-55-105.36,11.57,11.57,0,1,1,23.12,0,104.28,104.28,0,0,0,44.84,85.44c16.41,11.52,35.6,17,58.72,17a147.41,147.41,0,0,0,24-2.4c6.24-1.2,12.25,3.12,13.4,9.84a11.92,11.92,0,0,1-9.47,13.92A152.28,152.28,0,0,1,369.85,446.56ZM323.38,496a13,13,0,0,1-3-.48c-36.76-10.56-60.8-24.72-86-50.4-32.37-33.36-50.16-77.76-50.16-125.28,0-38.88,31.9-70.56,71.19-70.56s71.2,31.68,71.2,70.56c0,25.68,21.5,46.56,48.08,46.56s48.08-20.88,48.08-46.56c0-90.48-75.13-163.92-167.59-163.92-65.65,0-125.75,37.92-152.79,96.72-9,19.44-13.64,42.24-13.64,67.2,0,18.72,1.61,48.24,15.48,86.64,2.32,6.24-.69,13.2-6.7,15.36a11.34,11.34,0,0,1-14.79-7,276.39,276.39,0,0,1-16.88-95c0-28.8,5.32-55,15.72-77.76,30.75-67,98.94-110.4,173.6-110.4,105.18,0,190.71,84.24,190.71,187.92,0,38.88-31.9,70.56-71.2,70.56s-71.2-31.68-71.2-70.56C303.5,293.92,282,273,255.42,273s-48.08,20.88-48.08,46.56c0,41,15.26,79.44,43.23,108.24,22,22.56,43,35,75.59,44.4,6.24,1.68,9.71,8.4,8.09,14.64A11.39,11.39,0,0,1,323.38,496Z"
                }, null, -1)
            ])
        ]);
    }
    let Ql, Xl, Jl, Zl, ec, tc, ac, nc, rc, sc, oc;
    zl = ra(Kl, [
        [
            "render",
            jl
        ]
    ]);
    Ql = {
        key: 0,
        class: "security-lock-overlay"
    };
    Xl = {
        class: "lock-panel"
    };
    Jl = {
        class: "lock-header"
    };
    Zl = {
        class: "lock-icon-circle"
    };
    ec = {
        class: "keypad"
    };
    tc = [
        "onClick"
    ];
    ac = {
        class: "lock-footer mt-20"
    };
    nc = {
        __name: "appLockOverlay",
        setup (e) {
            const { t } = gt(), a = Bt(), n = nt(), s = Sa(), r = me(()=>a.isLocked && s.meta.requiresAuth && !s.meta.skipPinLock), o = M(""), i = M(!1), c = (f)=>{
                K.info(`[PWA-Debug] ${f}`);
            }, u = (f)=>{
                o.value.length < 6 && (o.value += f);
            }, g = ()=>{
                o.value = o.value.slice(0, -1);
            }, h = async (f = !1)=>{
                if (r.value) try {
                    c(f ? "👉 用户手动触发生物识别" : "🤖 系统探测到前台激活，尝试自动唤起"), await a.unlockWithBiometric(f) && (c("✅ 解锁成功"), Me.success(t("security.unlocked")));
                } catch (w) {
                    const T = w?.name || w?.message;
                    if (c(`❌ 验证异常: ${T}`), !f && (T === "NotAllowedError" || T === "AbortError")) {
                        K.warn("[PWA-AppLock] Auto-prompt blocked by OS (Expected behavior on iOS)");
                        return;
                    }
                    f && K.error(`Biometric Auth Error: ${w.message || w}`);
                }
            }, d = ()=>{
                document.visibilityState === "visible" && r.value && (c("监测到 App 回到前台"), setTimeout(()=>h(!1), 500));
            };
            Xt(()=>{
                document.addEventListener("visibilitychange", d), r.value && setTimeout(()=>h(!1), 500);
            }), On(()=>{
                document.removeEventListener("visibilitychange", d);
            }), De(()=>a.isLocked, (f)=>{
                f && (c("系统锁定状态激活"), setTimeout(()=>h(!1), 500));
            }), De(o, async (f)=>{
                f.length === 6 && !a.isUnlocking && (await a.unlockWithPin(f) ? (o.value = "", Me.success(t("security.unlocked"))) : (i.value = !0, setTimeout(()=>{
                    i.value = !1, o.value = "";
                }, 500)));
            });
            const m = ()=>{
                xn.confirm(t("security.reset_confirm_message"), t("security.reset_confirm_title"), {
                    confirmButtonText: t("common.confirm"),
                    cancelButtonText: t("common.cancel"),
                    type: "warning",
                    customClass: "lock-reset-confirm"
                }).then(async ()=>{
                    await n.logout(), await Promise.all([
                        Se("sys:sec:enc_device_salt"),
                        Se("sys:sec:lock_mode"),
                        Se("sys:sec:bio_cred_id"),
                        Se("sys:sec:bio_enc_salt"),
                        Se("sys:sec:bio_wrap_key")
                    ]), localStorage.clear(), window.location.reload();
                });
            };
            return (f, w)=>{
                const T = Jt, P = Pa;
                return G(), Ie(Dn, {
                    name: "el-fade-in"
                }, {
                    default: _e(()=>[
                            r.value ? (G(), ie("div", Ql, [
                                q("div", Xl, [
                                    q("div", Jl, [
                                        q("div", Zl, [
                                            Q(T, {
                                                size: 32
                                            }, {
                                                default: _e(()=>[
                                                        Q(C(Fn))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        q("h2", null, Ee(f.$t("security.app_locked")), 1),
                                        q("p", null, Ee(f.$t("security.enter_pin_to_unlock")), 1)
                                    ]),
                                    q("div", {
                                        class: jt([
                                            "pin-display mb-30",
                                            {
                                                shake: i.value
                                            }
                                        ])
                                    }, [
                                        (G(), ie(Yt, null, Ba(6, (R)=>q("div", {
                                                key: R,
                                                class: jt([
                                                    "pin-dot",
                                                    {
                                                        "is-filled": o.value.length >= R
                                                    }
                                                ])
                                            }, null, 2)), 64))
                                    ], 2),
                                    q("div", ec, [
                                        (G(), ie(Yt, null, Ba(9, (R)=>q("button", {
                                                key: R,
                                                onClick: (y)=>u(R.toString())
                                            }, Ee(R), 9, tc)), 64)),
                                        [
                                            "biometric",
                                            "biometric_compat"
                                        ].includes(C(a).lockMode) ? (G(), ie("button", {
                                            key: 0,
                                            class: "btn-extra btn-biometric",
                                            onClick: w[0] || (w[0] = (R)=>h(!0))
                                        }, [
                                            Q(T, null, {
                                                default: _e(()=>[
                                                        Q(zl)
                                                    ]),
                                                _: 1
                                            })
                                        ])) : (G(), ie("button", {
                                            key: 1,
                                            class: "btn-extra",
                                            onClick: w[1] || (w[1] = (R)=>o.value = "")
                                        }, "C")),
                                        q("button", {
                                            onClick: w[2] || (w[2] = (R)=>u("0"))
                                        }, "0"),
                                        q("button", {
                                            class: "btn-extra",
                                            onClick: g
                                        }, [
                                            Q(T, null, {
                                                default: _e(()=>[
                                                        Q(C(Yr))
                                                    ]),
                                                _: 1
                                            })
                                        ])
                                    ]),
                                    q("div", ac, [
                                        Q(P, {
                                            link: "",
                                            type: "info",
                                            onClick: m
                                        }, {
                                            default: _e(()=>[
                                                    qe(Ee(f.$t("security.forgot_pin")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ])
                                ])
                            ])) : ke("", !0)
                        ]),
                    _: 1
                });
            };
        }
    };
    rc = ra(nc, [
        [
            "__scopeId",
            "data-v-b45d7f82"
        ]
    ]);
    sc = "__NODEAUTH_EXT_PUBKEY__";
    oc = "NODEAUTH_EXT_PAYLOAD";
    function Ln() {
        try {
            return new URL(window.location.href).searchParams.get("source") === "extension" || sessionStorage.getItem("oauth_source") === "extension";
        } catch  {
            return !1;
        }
    }
    function ic() {
        try {
            const e = window[sc];
            return !e || typeof e != "string" ? null : (JSON.parse(e), e);
        } catch  {
            return null;
        }
    }
    async function lc(e, t) {
        const a = await crypto.subtle.importKey("jwk", JSON.parse(e), {
            name: "ECDH",
            namedCurve: "P-256"
        }, !1, []), n = await crypto.subtle.generateKey({
            name: "ECDH",
            namedCurve: "P-256"
        }, !0, [
            "deriveKey"
        ]), s = await crypto.subtle.deriveKey({
            name: "ECDH",
            public: a
        }, n.privateKey, {
            name: "AES-GCM",
            length: 256
        }, !1, [
            "encrypt"
        ]), r = crypto.getRandomValues(new Uint8Array(12)), o = new TextEncoder().encode(JSON.stringify(t)), i = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: r
        }, s, o), c = await crypto.subtle.exportKey("jwk", n.publicKey);
        return {
            pubKeyJwk: JSON.stringify(c),
            ciphertext: btoa(String.fromCharCode(...new Uint8Array(i))),
            iv: btoa(String.fromCharCode(...r))
        };
    }
    cc = function() {
        async function e(t, a) {
            if (!Ln()) return !1;
            K.info("[ExtBridge] 检测到扩展程序登录上下文，开始握手...");
            try {
                let n = null;
                for(let c = 0; c < 20 && (n = ic(), !n); c++)await new Promise((u)=>setTimeout(u, 50));
                if (!n) return K.warn("[ExtBridge] 等待超时，未找到插件注入的 ECDH 公钥，握手中止。可能插件未正确安装或权限不足。"), !1;
                let s = a;
                s || (s = new URL(window.location.href).searchParams.get("ext_device_id") || sessionStorage.getItem("oauth_ext_device_id"));
                const r = await wa.requestExtensionSession(s || crypto.randomUUID());
                if (!r?.success || !r?.token) return K.warn("[ExtBridge] 插件会话申请失败：", r), !1;
                const o = r.token, i = await lc(n, {
                    token: o,
                    deviceSalt: t
                });
                return window.postMessage({
                    type: oc,
                    ...i
                }, window.location.origin), K.info("[ExtBridge] 握手成功，加密载荷已广播。"), jr({
                    title: J.global.t("auth.ext_auth_success_title"),
                    message: J.global.t("auth.ext_auth_success_desc"),
                    type: "success",
                    duration: 1e4
                }), !0;
            } catch (n) {
                return K.error(`[ExtBridge] 握手过程发生异常：${n.message || n}`), !1;
            }
        }
        return {
            tryHandshake: e,
            isExtensionContext: Ln
        };
    };
    let uc, _c, dc;
    uc = {
        key: 1,
        class: "app-blur-overlay"
    };
    _c = {
        class: "blur-content"
    };
    dc = {
        __name: "app",
        setup (e) {
            const { locale: t } = gt(), a = me(()=>t.value === "zh-CN" ? Qr : Xr), n = Sa();
            Cn();
            const s = Ut(), r = mt(), o = Bt(), i = me(()=>n.meta.layout === "blank" || !n.meta.requiresAuth ? ql : $l);
            De(()=>s.showMobileMenu, (f)=>{
                f ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
            });
            const c = ()=>{
                s.isMobile = window.innerWidth < 768;
            }, u = M(!1), g = me(()=>r.isPhysicalOffline && !u.value);
            De(()=>r.isPhysicalOffline, (f)=>{
                f && (u.value = !1);
            });
            const h = M(!1), d = ()=>{
                h.value = document.hidden;
            }, m = ()=>{
                const f = ()=>{
                    r.isOffline || (K.info("Initiating background prefetching of advanced capabilities..."), Promise.allSettled([
                        se(()=>import("./dataExport-Dn93d-eA.js"), __vite__mapDeps([5,6,4,7,8,9,1,2,0,3,10,11,12,13,14,15,16,17,18,19])),
                        se(()=>import("./dataImport-C7ZKUnWj.js"), __vite__mapDeps([20,6,4,7,9,1,2,0,3,10,11,12,13,14,15,17,18,8,21])),
                        se(()=>import("./dataBackup-DLKs8DeO.js"), __vite__mapDeps([22,6,4,7,9,1,2,0,3,10,11,12,13,14,15,17,18])),
                        se(()=>import("./utilityTools-B2AkwNbv.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            }), __vite__mapDeps([23,1,2,6,4,7,24,14,15])),
                        se(()=>import("./dataMigrationService-DQ9epAs2.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            }), __vite__mapDeps([9,1,2,0,3,4,10,11,6,7,12,13,14,15])),
                        se(()=>import("./passkeySettings-BxMS4y3G.js"), __vite__mapDeps([25,6,4,7,26,1,2,14,17,18,15])),
                        se(()=>import("./emergency-BSushNMJ.js"), __vite__mapDeps([27,6,4,7,1,2,14,15]))
                    ]));
                };
                window.requestIdleCallback ? window.setTimeout(()=>window.requestIdleCallback(f), 5e3) : window.setTimeout(f, 8e3);
            };
            return Xt(()=>{
                c(), r.initNetworkStatus(), o.init(), window.addEventListener("resize", c), document.addEventListener("visibilitychange", d), m();
                const f = nt(), { tryHandshake: w, isExtensionContext: T } = cc();
                setTimeout(async ()=>{
                    if (T() && f.userInfo?.id) {
                        const P = async ()=>{
                            const R = await o.getDeviceKey();
                            if (R) {
                                const p = new URL(window.location.href).searchParams.get("ext_device_id") || sessionStorage.getItem("oauth_ext_device_id");
                                if (p && (K.info("[App] 捕获到扩展配对请求，且用户已登录，发起热握手..."), await w(R, p))) {
                                    const v = new URL(window.location.href);
                                    v.searchParams.delete("source"), v.searchParams.delete("ext_device_id"), window.history.replaceState({}, document.title, v.toString());
                                }
                            }
                        };
                        if (!o.isLocked) await P();
                        else {
                            const R = De(()=>o.isLocked, async (y)=>{
                                y || (R(), await P());
                            });
                        }
                    }
                }, 500);
            }), Rr(()=>{
                window.removeEventListener("resize", c), document.removeEventListener("visibilitychange", d);
            }), (f, w)=>{
                const T = Jr, P = Jt, R = zr;
                return G(), Ie(R, {
                    locale: a.value,
                    "z-index": 5e3
                }, {
                    default: _e(()=>[
                            q("div", {
                                class: jt([
                                    "app-container",
                                    {
                                        "is-blank-layout": C(n).meta.layout === "blank" || !C(n).meta.requiresAuth
                                    }
                                ])
                            }, [
                                Q(rc),
                                g.value ? (G(), Ie(T, {
                                    key: 0,
                                    title: f.$t("common.offline_mode"),
                                    type: "warning",
                                    "show-icon": "",
                                    center: "",
                                    closable: "",
                                    class: "global-offline-banner",
                                    onClose: w[0] || (w[0] = (y)=>u.value = !0)
                                }, null, 8, [
                                    "title"
                                ])) : ke("", !0),
                                C(s).appGhostMode && h.value && !C(o).isLocked ? (G(), ie("div", uc, [
                                    q("div", _c, [
                                        Q(P, {
                                            size: 48
                                        }, {
                                            default: _e(()=>[
                                                    Q(C(Fn))
                                                ]),
                                            _: 1
                                        }),
                                        q("p", null, Ee(f.$t("security.ghost_mode_active")), 1)
                                    ])
                                ])) : ke("", !0),
                                (G(), Ie(Mr(i.value)))
                            ], 2)
                        ]),
                    _: 1
                }, 8, [
                    "locale"
                ]);
            };
        }
    };
    fc = xt({
        name: "AsyncLoading",
        setup () {
            const e = (a)=>{
                try {
                    return J.global.t(a);
                } catch  {
                    return a;
                }
            };
            return Xt(()=>{
                if (document.getElementById("async-loading-styles")) return;
                const a = document.createElement("style");
                a.id = "async-loading-styles", a.textContent = `
                @keyframes async-progress-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .async-progress-bar {
                    width: 200px;
                    height: 3px;
                    background: rgba(64, 158, 255, 0.1);
                    border-radius: 4px;
                    overflow: hidden;
                    position: relative;
                    margin-top: 16px;
                }
                .async-progress-inner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background: var(--el-color-primary);
                    border-radius: 4px;
                    animation: async-progress-flow 1.5s infinite ease-in-out;
                    box-shadow: 0 0 8px var(--el-color-primary);
                }
            `, document.head.appendChild(a);
            }), ()=>$e("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "400px",
                        width: "100%",
                        backgroundColor: "transparent"
                    }
                }, [
                    $e("div", {
                        style: {
                            fontSize: "16px",
                            color: "var(--el-text-color-regular)",
                            fontWeight: "500",
                            letterSpacing: "1px"
                        }
                    }, e("common.resource_loading")),
                    $e("div", {
                        class: "async-progress-bar"
                    }, [
                        $e("div", {
                            class: "async-progress-inner"
                        })
                    ])
                ]);
        }
    });
    ct = function(e) {
        return Fr({
            loader: async ()=>{
                K.info("[AsyncComponent] Starting to load component...");
                try {
                    const t = await e();
                    return K.info("[AsyncComponent] Component loaded successfully"), t;
                } catch (t) {
                    throw K.error("[AsyncComponent] Component load failed:", t), t;
                }
            },
            loadingComponent: fc,
            errorComponent: xt({
                name: "AsyncError",
                props: [
                    "error"
                ],
                setup (t) {
                    K.error("[AsyncComponent] Rendering error component:", t.error);
                    const a = (n)=>{
                        try {
                            return J.global.t(n);
                        } catch  {
                            return n;
                        }
                    };
                    return ()=>$e("div", {
                            style: {
                                padding: "40px",
                                textAlign: "center"
                            }
                        }, [
                            $e(Zr, {
                                description: a("common.loading_failed")
                            }, {
                                default: ()=>$e(Pa, {
                                        type: "primary",
                                        onClick: ()=>window.location.reload()
                                    }, a("common.refresh"))
                            })
                        ]);
                }
            }),
            delay: 200,
            timeout: 15e3,
            onError (t, a, n, s) {
                s <= 2 ? (K.warn(`[AsyncComponent] Loading failed, retrying (${s}/2)...`, t), setTimeout(()=>a(), 500)) : n();
            }
        });
    };
    const mc = [
        {
            path: "/",
            name: "Home",
            component: ct(()=>se(()=>import("./home-CE6voyX0.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((e)=>e.h), __vite__mapDeps([28,6,4,7,24,1,2,29]))),
            meta: {
                requiresAuth: !0
            }
        },
        {
            path: "/login",
            name: "Login",
            component: ct(()=>se(()=>import("./login-V0Q07x5n.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([30,6,4,7,1,2,11,26,14,15]))),
            meta: {
                guestOnly: !0
            }
        },
        {
            path: "/oauth/callback",
            name: "OAuthCallback",
            component: ct(()=>se(()=>import("./oauthCallback-JNvT7Uw-.js"), __vite__mapDeps([31,6,4,7,1,2,14,15]))),
            meta: {
                requiresAuth: !1
            }
        },
        {
            path: "/callback/:provider",
            name: "ProviderCallback",
            component: ct(()=>se(()=>import("./oauthCallback-JNvT7Uw-.js"), __vite__mapDeps([31,6,4,7,1,2,14,15]))),
            meta: {
                requiresAuth: !1
            }
        },
        {
            path: "/health",
            name: "HealthCheck",
            component: ct(()=>se(()=>import("./healthCheck-dTe98E6-.js"), __vite__mapDeps([32,6,4,7,1,2,14,15,33]))),
            meta: {
                guestOnly: !1,
                requiresAuth: !1
            }
        },
        {
            path: "/emergency",
            name: "Emergency",
            component: ct(()=>se(()=>import("./emergency-BSushNMJ.js"), __vite__mapDeps([27,6,4,7,1,2,14,15]))),
            meta: {
                requiresAuth: !0,
                skipPinLock: !0
            }
        }
    ], tt = xr({
        history: Ur(),
        routes: mc
    });
    tt.beforeEach(async (e)=>{
        const t = nt(), a = !!(t.userInfo && t.userInfo.id);
        if (e.meta.requiresAuth && !a) return "/login";
        if (e.meta.guestOnly && a) return t.isLoggingOut ? !0 : {
            path: "/",
            query: e.query
        };
        if (a) {
            if (t.needsEmergency && e.path !== "/emergency") return "/emergency";
            if (!t.needsEmergency && e.path === "/emergency") return "/";
        }
        return !t.isInitialized && (e.meta.requiresAuth || e.meta.guestOnly) ? (t.startVerifying(), t.fetchUserInfo().then((n)=>{
            t.markInitialized(), t.stopVerifying(), !n && e.meta.requiresAuth && tt.replace("/login"), n && e.meta.guestOnly && tt.replace({
                path: "/",
                query: e.query
            });
        }).catch(()=>{
            t.markInitialized(), t.stopVerifying();
        })) : t.isInitialized || t.markInitialized(), !0;
    });
    tt.onError((e, t)=>{
        K.error("Router navigation error:", e), (e.message.match(/Failed to fetch dynamically imported module/i) || e.message.match(/Importing a module script failed/i) || e.message.match(/Loading chunk/i)) && (navigator.onLine ? window.location.reload() : xn.alert(J.global.t("pwa.offline_feature_error_desc") || "The advanced feature requires a network connection to download its necessary components for the first time. Please connect to the internet and try again.", J.global.t("pwa.offline_feature_error_title") || "Network Required", {
            confirmButtonText: J.global.t("common.confirm") || "OK",
            type: "warning",
            center: !0
        }));
    });
    const pc = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tt
    }, Symbol.toStringTag, {
        value: "Module"
    })), et = Br(dc), gc = Hr();
    et.use(gc);
    et.use(J);
    const hc = kr();
    hc.initTheme();
    const yc = rs({
        immediate: !0,
        onNeedRefresh () {
            se(async ()=>{
                const { ElNotification: e } = await import("./element-plus-BHS6vjDl.js").then((t)=>t.at);
                return {
                    ElNotification: e
                };
            }, __vite__mapDeps([6,4,7])).then(({ ElNotification: e })=>{
                e({
                    title: J.global.t("pwa.update_available") || "Update Available",
                    message: `
          <div style="line-height: 1.5; font-size: 14px; margin-bottom: 5px;">
            🎉 ${J.global.t("pwa.update_ready") || "A new version is ready!"}
          </div>
          <div>
            <button 
              style="background: var(--el-color-primary); color: white; border: none; padding: 5px 12px; border-radius: 4px; cursor: pointer; font-size: 13px;"
              id="pwa-refresh-btn"
            >
              ${J.global.t("pwa.pwa_refresh") || "Refresh Now"}
            </button>
          </div>
        `,
                    dangerouslyUseHTMLString: !0,
                    type: "success",
                    duration: 0
                }), setTimeout(()=>{
                    const t = document.getElementById("pwa-refresh-btn");
                    t && (t.onclick = ()=>yc(!0));
                }, 100);
            });
        }
    });
    et.use(as, {
        queryClient: wr
    });
    const bc = vr(), vc = nt();
    Promise.all([
        bc.init(),
        vc.init()
    ]).then(()=>{
        et.use(tt), et.mount("#app");
    }).catch((e)=>{
        K.error("[Main] Initialization failed:", e), et.use(tt), et.mount("#app");
    });
});
export { fc as A, Ze as B, fe as C, nl as D, Fa as E, zl as F, pl as G, Bt as H, Tl as I, nt as J, cc as K, gt as L, Ut as M, mt as N, kr as O, Uc as P, vr as Q, vl as R, ra as _, ss as a, Bc as b, Rc as c, Pt as d, wa as e, Nc as f, Fc as g, Mc as h, Oc as i, xc as j, Dc as k, ct as l, Ft as m, ye as n, Ea as o, Lc as p, br as q, Pn as r, oe as s, Aa as t, Cc as u, J as v, Ic as w, K as x, rl as y, Se as z, __tla };
