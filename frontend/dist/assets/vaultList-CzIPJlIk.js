const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwnAqmoK.js","assets/pdf-utils-D3SLYqmy.js","assets/compression-utils-BzBbrBKd.js","assets/vue-core-DHcoxuim.js","assets/element-plus-BHS6vjDl.js","assets/element-plus-CqJ-3YyC.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-DV2JH8XC.js","assets/index-BvTGjkv3.css"])))=>i.map(i=>d[i]);
import { e as Xt, h as Rn, W as In, X as En, u as mn, aU as vn, a$ as Dn, o as An, aE as On, q as Vn, p as Ln, aF as Jt, aK as _t, aj as Zt, ag as nt, H as Fn, ay as zt, g as Bn, C as Ae, D as en, w as Hn, aL as Pn, K as Wn, ar as Un, al as Xn, J as Nn, E as Yn, r as qn, v as Kn, N as Qn, j as jn, s as Gn, t as Jn, c as Zn, aY as el, as as tl, af as nl, ax as ll } from "./element-plus-BHS6vjDl.js";
import { u as mt, a6 as z, j as pe, aF as _, ad as Pe, ag as Mt, aa as Z, o as il, X as ol, z as sl, U as Ct, at as n, G as tn, a2 as Je, aD as we, ar as S, $ as xt, a8 as al, V as dt, Z as pn, a1 as rl, a4 as ft, aG as Nt, l as le, k as ve, F as lt, ac as $t, an as cl, W as Ke, Y as ot, r as h, g as q, w as ul, aj as bt, S as dl, ah as fl, a7 as ct, v as ml, aB as vl, al as Y, i as I, q as Me, aI as Ge, b as pl, O as At, T as gl } from "./vue-core-DHcoxuim.js";
import { _ as gn, M as Tt, N as Yt, H as hl, P as yl, t as Ot, G as wl, Q as hn, v as _l, x as St, R as yn, L as wn, __tla as __tla_0 } from "./index-DwnAqmoK.js";
import { g as Vt, u as _n, v as tt, t as ut, b as nn, __tla as __tla_1 } from "./vaultService-D1E95JRU.js";
import { D as bl } from "./decryptionErrorState-C6BiiqCc.js";
import { _ as ln } from "./responsiveOverlay-1xBtyJv1.js";
import { u as Sl } from "./useVaultList-XNOTLKTx.js";
import { _ as on, __tla as __tla_2 } from "./pdf-utils-D3SLYqmy.js";
import { Q as kl } from "./qr-utils-7t4IiZrV.js";
import { c as Lt } from "./common-Dic5l94L.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-DV2JH8XC.js";
import "./compression-utils-BzBbrBKd.js";
import { __tla as __tla_3 } from "./resourceRegistry-D1N45fAB.js";
let bo;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })()
]).then(async ()=>{
    function zl(e) {
        return {
            all: e = e || new Map,
            on: function(t, i) {
                var l = e.get(t);
                l && l.push(i) || e.set(t, [
                    i
                ]);
            },
            off: function(t, i) {
                var l = e.get(t);
                l && l.splice(l.indexOf(i) >>> 0, 1);
            },
            emit: function(t, i) {
                (e.get(t) || []).slice().map(function(l) {
                    l(i);
                }), (e.get("*") || []).slice().map(function(l) {
                    l(t, i);
                });
            }
        };
    }
    function qt(e, t, i) {
        if (!i) return t;
        const l = e?.[i];
        if (l == null) throw new Error(`Key is ${l} on item (keyField is '${i}')`);
        return l;
    }
    function it(e, t) {
        return e.map((i, l)=>qt(i, l, t));
    }
    function $l(e, t, i) {
        const l = [], d = [];
        for(let c = 0; c < e.length; c++){
            const R = e[c], O = qt(R, c, t), p = i(R, c, O);
            l.push(O), d.push(typeof p == "number" && p > 0 ? p : null);
        }
        return {
            keys: l,
            sizes: d
        };
    }
    function Cl(e, t, i) {
        if (!e || e.keys.length !== t.length || e.sizes.length !== t.length) return !1;
        for(let l = 0; l < t.length; l++)if (e.keys[l] !== qt(t[l], l, i)) return !1;
        return !0;
    }
    function Pt(e, t, i) {
        if (!Cl(e, t, i)) return {};
        const l = {};
        for(let d = 0; d < e.keys.length; d++){
            const c = e.sizes[d];
            typeof c == "number" && c > 0 && (l[e.keys[d]] = c);
        }
        return l;
    }
    function bn(e, t) {
        if (!e.length || t.length <= e.length) return 0;
        const i = e[0], l = t.indexOf(i);
        if (l <= 0 || l + e.length < t.length && e.length > t.length - l) return 0;
        for(let d = 0; d < e.length; d++)if (t[l + d] !== e[d]) return 0;
        return l;
    }
    function sn(e, t, i, l, d, c = 0) {
        const R = d ?? "start";
        if (R === "nearest") {
            const O = i + l, p = e + t;
            return e >= i && p <= O ? null : e < i ? e + c : p - l + c;
        }
        return R === "end" ? e + t - l + c : R === "center" ? e + (t - l) / 2 + c : e + c;
    }
    function Sn(e, t, i, l) {
        let d = null, c = null, R = null, O = !1, p = null;
        const T = [], A = i.resizeObserver ? ()=>{} : i.onVscrollUpdate(se), b = q(()=>{
            const y = S(e);
            if (i.vscrollData.simpleArray) {
                if (y.index == null) throw new Error("index is required when using simple-array mode with dynamic item measurement");
                return y.index;
            }
            if (i.vscrollData.keyField in y.item) return y.item[i.vscrollData.keyField];
            throw new Error(`keyField '${i.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
        }), E = q(()=>i.vscrollData.sizes[b.value] || 0), F = q(()=>S(e).active && i.vscrollData.active);
        function K() {
            F.value ? c !== b.value && (c = b.value, d = null, R = null, H(b.value)) : d = b.value;
        }
        function P() {
            S(e).watchData && !i.resizeObserver ? p = we(()=>S(e).item, ()=>{
                ee();
            }, {
                deep: !0
            }) : p && (p(), p = null);
        }
        function se({ force: y }) {
            !F.value && y && (R = b.value), (d === b.value || y || !E.value) && K();
        }
        function ee() {
            K();
        }
        function $(y) {
            i.undefinedMap[y] && i.undefinedSizeCount.value--, i.undefinedMap[y] = void 0;
        }
        function U(y, g) {
            if (i.vscrollData.sizes[y]) {
                $(y);
                return;
            }
            if (g) {
                i.undefinedMap[y] || i.undefinedSizeCount.value++, i.undefinedMap[y] = !0;
                return;
            }
            i.undefinedMap[y] && (i.undefinedSizeCount.value--, i.undefinedMap[y] = !1);
        }
        function H(y) {
            dt(()=>{
                if (b.value === y) {
                    const g = S(t);
                    if (!g) return;
                    const s = g.offsetWidth, m = g.offsetHeight;
                    j(s, m);
                }
                c = null;
            });
        }
        function j(y, g) {
            const s = ~~(i.direction.value === "vertical" ? g : y);
            s && E.value !== s && W(s);
        }
        function W(y) {
            var g, s;
            $(b.value), i.vscrollData.sizes[b.value] = y, S(e).emitResize && ((s = (g = S(l)) == null ? void 0 : g.onResize) == null || s.call(g, b.value));
        }
        function Q() {
            if (!i.resizeObserver || O) return;
            const y = S(t);
            y && (i.resizeObserver.observe(y), y.$_vs_id = b.value, y.$_vs_onResize = de, O = !0);
        }
        function G() {
            if (!i.resizeObserver || !O) return;
            const y = S(t);
            y && (i.resizeObserver.unobserve(y), y.$_vs_onResize = void 0, O = !1);
        }
        function de(y, g, s) {
            b.value === y && j(g, s);
        }
        T.push(we(()=>S(e).watchData, ()=>{
            P();
        })), i.resizeObserver || T.push(we(()=>S(e).sizeDependencies, ()=>{
            ee();
        }, {
            deep: !0
        })), T.push(we(b, (y, g)=>{
            const s = S(t);
            s && (s.$_vs_id = y), $(g), U(y, F.value);
            const m = i.vscrollData.sizes[y];
            if (!m) {
                d = y, ee();
                return;
            }
            $(y), O && (i.vscrollData.sizes[y] = m);
        })), T.push(we(F, (y)=>{
            U(b.value, y), i.resizeObserver ? y ? Q() : G() : y && R === b.value && K();
        })), P();
        function ie() {
            F.value && (K(), Q());
        }
        function D() {
            A(), G(), $(b.value);
            const y = S(t);
            y && (y.$_vs_id = void 0, y.$_vs_onResize = void 0), p && (p(), p = null);
            for (const g of T)g();
            T.length = 0;
        }
        return {
            id: b,
            size: E,
            finalActive: F,
            updateSize: K,
            mount: ie,
            unmount: D
        };
    }
    const Tl = {
        itemsLimit: 1e3
    };
    function kn(e) {
        return typeof window < "u" && e === window;
    }
    const Ml = (()=>{
        if (typeof document > "u") return "negative";
        const e = document.createElement("div"), t = document.createElement("div");
        e.style.width = "4px", e.style.height = "1px", e.style.overflow = "auto", e.style.direction = "rtl", t.style.width = "8px", t.style.height = "1px", e.appendChild(t), document.body.appendChild(e), e.scrollLeft = -1;
        const i = e.scrollLeft < 0;
        return document.body.removeChild(e), i ? "negative" : "default";
    })();
    function at(e, t, i) {
        return t !== "horizontal" || !i || kn(i) || getComputedStyle(i).direction !== "rtl" ? e : Ml === "negative" ? -e : e;
    }
    function xl(e, t, i) {
        return at(e, t, i);
    }
    function Ft(e, t, i, l) {
        const d = xl(i, t, e), c = !!(l != null && l.smooth);
        if (kn(e)) {
            t === "vertical" ? e.scrollTo({
                top: d,
                behavior: c ? "smooth" : "auto"
            }) : e.scrollTo({
                left: d,
                behavior: c ? "smooth" : "auto"
            });
            return;
        }
        if (typeof e.scrollTo == "function") {
            e.scrollTo(t === "vertical" ? {
                top: d,
                behavior: c ? "smooth" : "auto"
            } : {
                left: d,
                behavior: c ? "smooth" : "auto"
            });
            return;
        }
        t === "vertical" ? e.scrollTop = d : e.scrollLeft = d;
    }
    function Rl(e, t, i) {
        return i ? t === "vertical" ? window.innerHeight : window.innerWidth : t === "vertical" ? e.clientHeight : e.clientWidth;
    }
    const Il = /auto|scroll/;
    function zn(e, t) {
        return e.parentNode === null ? t : zn(e.parentNode, [
            ...t,
            e
        ]);
    }
    function Bt(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
    }
    function El(e) {
        return Bt(e, "overflow") + Bt(e, "overflow-y") + Bt(e, "overflow-x");
    }
    function Dl(e) {
        return Il.test(El(e));
    }
    function kt(e) {
        if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
        const t = zn(e.parentNode, []);
        for(let i = 0; i < t.length; i += 1)if (t[i] instanceof Element && Dl(t[i])) return t[i];
        return document.scrollingElement || document.documentElement;
    }
    let Wt = !1;
    function Al() {
        return Wt;
    }
    if (typeof window < "u") {
        Wt = !1;
        try {
            const e = Object.defineProperty({}, "passive", {
                get () {
                    Wt = !0;
                }
            });
            window.addEventListener("test", null, e);
        } catch  {}
    }
    let Ol = 0;
    function Ht(e) {
        const t = e;
        t._vs_styleStamp++;
    }
    function Vl(e, t, i) {
        const l = e?.[i];
        if (l == null) throw new Error(`Key is ${l} on item (keyField is '${i}')`);
        return l;
    }
    function $n(e, t, i, l, d) {
        const c = Z([]), R = Z(0), O = Z(!1);
        let p = 0, T = 0;
        const A = new Map, b = new Map;
        let E = !1, F = 0, K = 0, P = !1, se = null, ee = null, $ = null, U = 0, H = null, j = [], W = null, Q = null, G = null, de = !1;
        const ie = new Set, D = Z({}), y = q(()=>{
            const r = S(e);
            return r.items.length > 0 && typeof r.items[0] != "object";
        }), g = q(()=>{
            const r = S(e);
            if (r.itemSize === null) {
                const o = {
                    [-1]: {
                        accumulator: 0
                    }
                }, f = r.items, x = r.sizeField ?? "size", C = r.minItemSize, N = D.value;
                let ne = 1e4, he = 0, Le;
                for(let Te = 0, Ee = f.length; Te < Ee; Te++){
                    const Fe = y.value ? Te : Vl(f[Te], Te, r.keyField);
                    Le = N[Fe] || f[Te][x] || C, Le < ne && (ne = Le), he += Le, o[Te] = {
                        accumulator: he,
                        size: Le
                    };
                }
                return U = ne, o;
            }
            return [];
        }), s = q(()=>c.value.filter((r)=>r.nr.used).sort((r, o)=>r.nr.index - o.nr.index)), m = q(()=>{
            const r = S(e), o = y.value ? null : r.keyField;
            return $l(r.items, o, (f, x, C)=>r.itemSize != null ? r.itemSize : D.value[C] || f?.[r.sizeField ?? "size"] || void 0);
        });
        function w(r) {
            const o = S(e);
            return D.value = Pt(r, o.items, y.value ? null : o.keyField), Object.keys(D.value).length > 0;
        }
        function J(r) {
            let o = b.get(r);
            return o || (o = [], b.set(r, o)), o;
        }
        function ae(r, o, f, x, C) {
            const N = dl({
                id: Ol++,
                index: o,
                used: !0,
                key: x,
                type: C
            }), ne = fl({
                item: f,
                position: 0,
                offset: 0,
                nr: N,
                _vs_styleStamp: 0
            });
            return r.push(ne), ne;
        }
        function re(r) {
            const o = J(r);
            if (o && o.length) {
                const f = o.pop();
                return f.nr.used = !0, Ht(f), f;
            }
        }
        function _e(r) {
            const o = r.nr.type;
            J(o).push(r), r.nr.used = !1, r.position = -9999, Ht(r), A.delete(r.nr.key);
        }
        function be() {
            A.clear(), b.clear();
            for(let r = 0, o = c.value.length; r < o; r++){
                const f = c.value[r];
                f && _e(f);
            }
        }
        function Se(r) {
            let o = -1;
            return o = requestAnimationFrame(()=>{
                ie.delete(o), r();
            }), ie.add(o), o;
        }
        function u() {
            for (const r of ie)cancelAnimationFrame(r);
            ie.clear();
        }
        function k() {
            se && (clearTimeout(se), se = null), ee && (clearTimeout(ee), ee = null), $ && (clearTimeout($), $ = null), Q && (clearTimeout(Q), Q = null), G && (clearTimeout(G), G = null);
        }
        function X() {
            var r;
            (r = d?.onResize) == null || r.call(d), O.value && Oe(!1);
        }
        function oe() {
            W && !de && ge();
            const r = S(e);
            if (!E) {
                if (E = !0, se) return;
                const o = ()=>Se(()=>{
                        E = !1;
                        const { continuous: f } = Oe(!1, !0);
                        f || (ee && clearTimeout(ee), ee = setTimeout(oe, r.updateInterval + 100));
                    });
                o(), r.updateInterval && (se = setTimeout(()=>{
                    se = null, E && o();
                }, r.updateInterval));
            }
        }
        function a(r, o) {
            var f, x;
            O.value && (r || o.boundingClientRect.width !== 0 || o.boundingClientRect.height !== 0 ? ((f = d?.onVisible) == null || f.call(d), Se(()=>{
                Oe(!1);
            })) : (x = d?.onHidden) == null || x.call(d));
        }
        function v() {
            const r = S(t), o = r ? kt(r) : void 0;
            return window.document && (o === window.document.documentElement || o === window.document.body) ? window : o || window;
        }
        function M() {
            const r = S(i);
            return r ? S(e).direction === "vertical" ? r.scrollHeight : r.scrollWidth : 0;
        }
        function V() {
            const r = S(t);
            if (!r) return {
                start: 0,
                end: 0
            };
            const o = S(e), f = o.direction === "vertical";
            let x;
            if (o.pageMode) {
                const C = r.getBoundingClientRect(), N = f ? C.height : C.width;
                let ne = -(f ? C.top : C.left), he = f ? window.innerHeight : window.innerWidth;
                ne < 0 && (he += ne, ne = 0), ne + he > N && (he = N - ne), x = {
                    start: ne,
                    end: ne + he
                };
            } else f ? x = {
                start: r.scrollTop,
                end: r.scrollTop + r.clientHeight
            } : x = {
                start: at(r.scrollLeft, o.direction, r),
                end: at(r.scrollLeft, o.direction, r) + r.clientWidth
            };
            return x;
        }
        function ce() {
            const r = S(t);
            if (!r) return {
                start: 0,
                end: 0
            };
            if (S(e).direction === "vertical") {
                const o = at(r.scrollLeft, "horizontal", r);
                return {
                    start: o,
                    end: o + r.clientWidth
                };
            }
            return {
                start: r.scrollTop,
                end: r.scrollTop + r.clientHeight
            };
        }
        function B(r) {
            const o = S(e);
            if (o.itemSize != null) return o.itemSize;
            const f = g.value[r];
            return f?.size || Number(o.minItemSize) || 0;
        }
        function te(r) {
            var o;
            const f = S(e), x = f.gridItems || 1;
            return r <= 0 ? 0 : f.itemSize != null ? Math.floor(r / x) * f.itemSize : ((o = g.value[r - 1]) == null ? void 0 : o.accumulator) || 0;
        }
        function xe(r) {
            const o = S(e), f = o.items.length, x = o.gridItems || 1;
            if (!f) return 0;
            if (o.itemSize != null) {
                const he = Math.floor(r / o.itemSize) * x;
                return Math.min(Math.max(he, 0), f - 1);
            }
            let C = 0, N = f - 1, ne = 0;
            for(; C <= N;){
                const he = Math.floor((C + N) / 2);
                te(he) <= r ? (ne = he, C = he + 1) : N = he - 1;
            }
            return ne;
        }
        function ge() {
            Q && (clearTimeout(Q), Q = null), W = null;
        }
        function $e() {
            Q && clearTimeout(Q), Q = setTimeout(()=>{
                W = null, Q = null;
            }, 150);
        }
        function ke(r, o) {
            if (!r.length) {
                ge();
                return;
            }
            const f = Math.max(V().start - M(), 0), x = Math.min(xe(f), r.length - 1), C = r[x], N = o ? C?.[o] : x;
            if (N == null) {
                ge();
                return;
            }
            const ne = M() + te(x);
            W = {
                key: N,
                offset: V().start - ne
            };
        }
        function Ce(r) {
            if (!W) return !1;
            const o = S(e), f = r ?? o.items, x = y.value ? null : o.keyField, C = it(f, x).indexOf(W.key);
            if (C === -1) return ge(), !1;
            const N = M() + te(C) + W.offset, ne = V().start;
            return Math.abs(N - ne) < .5 ? !1 : (de = !0, st(N), Se(()=>{
                de = !1;
            }), !0);
        }
        function Ne() {
            S(e).pageMode ? vt() : rt();
        }
        function vt() {
            H = v(), H.addEventListener("scroll", oe, Al() ? {
                passive: !0
            } : !1), H.addEventListener("resize", X);
        }
        function rt() {
            H && (H.removeEventListener("scroll", oe), H.removeEventListener("resize", X), H = null);
        }
        function Rt(r, o, f, x, C, N) {
            const ne = Math.ceil(r / o) * f, he = Math.max(0, Math.floor(C.start / f)), Le = Math.min(Math.ceil(C.end / f), Math.ceil(r / o)), Te = Math.max(0, Math.floor(N.start / x)), Ee = Math.min(Math.ceil(N.end / x), o), Fe = [];
            for(let We = he; We < Le; We++){
                const Ye = We * o;
                for(let L = Te; L < Ee; L++){
                    const Be = Ye + L;
                    if (Be >= r) break;
                    Fe.push(Be);
                }
            }
            const ye = Fe[0] ?? 0, Ie = Fe.at(-1) ?? -1;
            return {
                renderedIndices: Fe,
                startIndex: ye,
                endIndex: Ie + 1,
                visibleStartIndex: ye,
                visibleEndIndex: Ie,
                totalSize: ne
            };
        }
        function pt() {
            const r = S(e);
            if (!r.gridItems || r.itemSize == null) return !1;
            const o = S(t);
            if (!o) return !1;
            const f = r.itemSecondarySize || r.itemSize, x = r.direction === "vertical" ? o.clientWidth : o.clientHeight;
            return f * r.gridItems > x;
        }
        function Oe(r, o = !1) {
            var f, x;
            const C = S(e), N = C.itemSize, ne = C.gridItems || 1, he = C.itemSecondarySize || N, Le = U, Te = C.typeField, Ee = y.value ? null : C.keyField, Fe = C.items, ye = Fe.length, Ie = g.value, We = A, Ye = c.value;
            let L = null, Be = null, ze, fe, Qe, Ve, Xe;
            if (!ye) ze = fe = Ve = Xe = Qe = 0;
            else if (P) ze = Ve = 0, fe = Xe = Math.min(C.prerender, Fe.length), Qe = 0;
            else {
                const ue = V(), De = ce();
                if (o) {
                    let Re = ue.start - F;
                    Re < 0 && (Re = -Re);
                    let et = De.start - K;
                    et < 0 && (et = -et);
                    const wt = N === null && Re >= Le || N !== null && Re >= N, He = ne > 1 && N != null && et >= he;
                    if (!wt && !He) return {
                        continuous: !0
                    };
                }
                F = ue.start, K = De.start;
                const qe = C.buffer;
                ue.start -= qe, ue.end += qe, De.start -= qe, De.end += qe;
                let je = 0;
                const yt = S(i);
                yt && (je = yt.scrollHeight, ue.start -= je);
                const jt = S(l);
                if (jt) {
                    const Re = jt.scrollHeight;
                    ue.end += Re;
                }
                if (N === null) {
                    let Re, et = 0, wt = ye - 1, He = ~~(ye / 2), Gt;
                    do Gt = He, Re = Ie[He].accumulator, Re < ue.start ? et = He : He < ye - 1 && Ie[He + 1].accumulator > ue.start && (wt = He), He = ~~((et + wt) / 2);
                    while (He !== Gt);
                    for(He < 0 && (He = 0), ze = He, Qe = Ie[ye - 1].accumulator, fe = He; fe < ye && Ie[fe].accumulator < ue.end; fe++);
                    for(fe === -1 ? fe = Fe.length - 1 : (fe++, fe > ye && (fe = ye)), Ve = ze; Ve < ye && je + Ie[Ve].accumulator < ue.start; Ve++);
                    for(Xe = Ve; Xe < ye && je + Ie[Xe].accumulator < ue.end; Xe++);
                } else if (ne > 1) {
                    const Re = Rt(ye, ne, N, he, ue, De);
                    L = Re.renderedIndices, Be = new Set(L), ze = Re.startIndex, fe = Re.endIndex, Ve = Re.visibleStartIndex, Xe = Re.visibleEndIndex, Qe = Re.totalSize;
                } else {
                    ze = ~~(ue.start / N * ne);
                    const Re = ze % ne;
                    ze -= Re, fe = Math.ceil(ue.end / N * ne), Ve = Math.max(0, Math.floor((ue.start - je) / N * ne)), Xe = Math.floor((ue.end - je) / N * ne), ze < 0 && (ze = 0), fe > ye && (fe = ye), Ve < 0 && (Ve = 0), Xe > ye && (Xe = ye), Qe = Math.ceil(ye / ne) * N;
                }
            }
            fe - ze > Tl.itemsLimit && It(), R.value = Qe;
            let me;
            const Qt = ze <= T && fe >= p;
            if (!Qt || r) be();
            else for(let ue = 0, De = Ye.length; ue < De; ue++){
                const qe = Ye[ue];
                if (qe && (me = qe, me.nr.used)) {
                    const je = Be ? Be.has(me.nr.index) : me.nr.index >= ze && me.nr.index < fe, yt = N || Ie[me.nr.index] && Ie[me.nr.index].size;
                    (!je || !yt) && _e(me);
                }
            }
            let Ze, ht;
            const xn = L ?? Array.from({
                length: Math.max(0, fe - ze)
            }, (ue, De)=>ze + De);
            for (const ue of xn){
                if (!(N || Ie[ue] && Ie[ue].size)) continue;
                Ze = Fe[ue];
                const De = Ee ? Ze[Ee] : ue;
                if (De == null) throw new Error(`Key is ${De} on item (keyField is '${Ee}')`);
                if (me = We.get(De), me) me.item !== Ze && (me.item = Ze), me.nr.used || console.warn(`Expected existing view's used flag to be true, got ${me.nr.used}`);
                else {
                    if (ht = Ze[Te], me = re(ht), me) {
                        const qe = me.nr.index !== ue || me.nr.key !== De;
                        me.item = Ze, me.nr.index = ue, me.nr.key = De, me.nr.type !== ht && console.warn("Reused view's type does not match pool's type"), qe && Ht(me);
                    } else me = ae(Ye, ue, Ze, De, ht);
                    We.set(De, me);
                }
                N === null ? (me.position = ((f = Ie[ue - 1]) == null ? void 0 : f.accumulator) || 0, me.offset = 0) : (me.position = Math.floor(ue / ne) * N, me.offset = ue % ne * he);
            }
            return p = ze, T = fe, C.emitUpdate && ((x = d?.onUpdate) == null || x.call(d, ze, fe, Ve, Xe)), $ && clearTimeout($), $ = setTimeout(gt, C.updateInterval + 300), {
                continuous: Qt
            };
        }
        function It() {
            throw G = setTimeout(()=>{
                G = null, console.warn("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", S(t)), console.warn("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
            }), new Error("Rendered items limit reached");
        }
        function Et() {
            if (pt()) return !1;
            const r = c.value.filter(({ nr: o })=>o.used);
            for(let o = 1; o < r.length; o++)if (r[o].nr.index !== r[o - 1].nr.index + 1) return !0;
            return !1;
        }
        function gt() {
            c.value.sort((r, o)=>r.nr.index - o.nr.index), Et() && (Oe(!1), $ && clearTimeout($));
        }
        function Dt(r, o) {
            const f = S(e), x = S(t);
            if (!x) return;
            const C = Math.max(0, Math.min(r, f.items.length - 1)), N = V().start, ne = Rl(x, f.direction, f.pageMode), he = te(C), Le = B(C), Te = sn(he, Le, N, ne, o?.align, o?.offset ?? 0);
            if (Te != null && (st(Te, o), f.gridItems && f.itemSize != null)) {
                const Ee = S(t);
                if (!Ee) return;
                const Fe = f.gridItems, ye = f.itemSecondarySize || f.itemSize, Ie = C % Fe * ye, We = f.direction === "vertical" ? "horizontal" : "vertical", Ye = We === "horizontal" ? at(Ee.scrollLeft, "horizontal", Ee) : Ee.scrollTop, L = We === "horizontal" ? Ee.clientWidth : Ee.clientHeight, Be = sn(Ie, ye, Ye, L, o?.align, o?.offset ?? 0);
                Be != null && Ft(Ee, We, Be, o);
            }
        }
        function st(r, o) {
            const f = S(e), x = S(t);
            if (x) if (f.pageMode) {
                const C = kt(x), N = C.getBoundingClientRect(), ne = x.getBoundingClientRect(), he = f.direction === "vertical" ? "top" : "left", Le = kt(x) === document.documentElement || kt(x) === document.body ? f.direction === "vertical" ? window.scrollY : window.scrollX : at(f.direction === "vertical" ? C.scrollTop : C.scrollLeft, f.direction, C), Te = ne[he] - N[he];
                Ft(C.tagName === "HTML" ? window : C, f.direction, r + Le + Te, o);
            } else Ft(x, f.direction, r, o);
        }
        const Ue = S(e);
        return j = it(Ue.items, Ue.items.length > 0 && typeof Ue.items[0] != "object" ? null : Ue.keyField), Ue.cache && w(Ue.cache), Ue.prerender && (P = !0, Oe(!1)), Ue.gridItems && !Ue.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems"), Je(()=>{
            Ne(), dt(()=>{
                P = !1, Oe(!0), O.value = !0;
            });
        }), pn(()=>{
            const r = F;
            typeof r == "number" && dt(()=>{
                st(r);
            });
        }), xt(()=>{
            k(), u(), rt();
        }), we(()=>S(e).cache, (r)=>{
            w(r), Oe(!0);
        }), we(()=>S(e).items, (r, o)=>{
            const f = S(e), x = y.value ? null : f.keyField, C = it(r, x);
            if (f.shift) {
                const N = o ? it(o, x) : j;
                bn(N, C) > 0 ? ke(o ?? [], x) : ge();
            } else ge();
            j = C, Ce(r), Oe(!0);
        }), we(()=>S(e).pageMode, ()=>{
            Ne(), Oe(!1);
        }), we(g, ()=>{
            Ce() && $e(), Oe(!1);
        }, {
            deep: !0
        }), we(()=>S(e).gridItems, ()=>{
            Oe(!0);
        }), we(()=>S(e).itemSecondarySize, ()=>{
            Oe(!0);
        }), {
            pool: c,
            visiblePool: s,
            totalSize: R,
            ready: O,
            sizes: g,
            simpleArray: y,
            scrollToItem: Dt,
            scrollToPosition: st,
            getScroll: V,
            findItemIndex: xe,
            getItemOffset: te,
            getItemSize: B,
            cacheSnapshot: m,
            restoreCache: w,
            updateVisibleItems: Oe,
            handleScroll: oe,
            handleResize: X,
            handleVisibilityChange: a,
            sortViews: gt
        };
    }
    function Ut(e) {
        return e.item;
    }
    function Ll(e) {
        return e._vs_styleStamp ?? 0;
    }
    const Cn = [
        "position",
        "top",
        "left",
        "transform",
        "willChange",
        "visibility",
        "pointerEvents"
    ];
    function an(e) {
        const t = {};
        for (const i of Cn)t[i] = e.style[i];
        return t;
    }
    function Tn(e, t) {
        for (const i of Cn)e.style[i] = t[i] ?? "";
    }
    function rn(e, t, i, l) {
        if (!("view" in t)) {
            Tn(e, l);
            return;
        }
        const d = i === "vertical", c = e.tagName === "TR", R = d ? `translateY(${t.view.position}px) translateX(${t.view.offset}px)` : `translateX(${t.view.position}px) translateY(${t.view.offset}px)`;
        e.style.position = "absolute", e.style.top = d && c ? `${t.view.position}px` : "0px", e.style.left = !d && c ? `${t.view.position}px` : "0px", e.style.transform = c ? "" : R, e.style.willChange = c ? "unset" : "transform", e.style.visibility = t.view.nr.used ? "visible" : "hidden", e.style.pointerEvents = t.view.nr.used ? "" : "none";
    }
    function cn(e) {
        return "view" in e ? {
            item: Ut(e.view).item,
            active: e.view.nr.used,
            index: e.view.nr.index,
            watchData: e.watchData ?? !1,
            emitResize: e.emitResize ?? !1,
            sizeDependencies: e.sizeDependencies ?? null,
            onResize: e.onResize
        } : {
            watchData: !1,
            emitResize: !1,
            sizeDependencies: null,
            ...e
        };
    }
    function un(e, t, i, l) {
        return i ? l ?? null : e?.[t] ?? null;
    }
    function Fl(e) {
        let t = 0, i = {};
        const l = zl();
        let d = !1, c, R = !1, O = [], p = null, T = null;
        const A = new Set, b = al({
            active: !0,
            sizes: {},
            keyField: S(e).keyField,
            simpleArray: !1
        }), E = q(()=>S(e).direction), F = q(()=>S(S(e).el)), K = q(()=>S(S(e).before)), P = q(()=>S(S(e).after)), se = new Map;
        function ee(a) {
            let v = -1;
            return v = requestAnimationFrame(()=>{
                A.delete(v), a();
            }), A.add(v), v;
        }
        function $() {
            for (const a of A)cancelAnimationFrame(a);
            A.clear();
        }
        typeof ResizeObserver < "u" && (c = new ResizeObserver((a)=>{
            ee(()=>{
                if (Array.isArray(a)) {
                    for (const v of a)if (v.target && v.target.$_vs_onResize) {
                        let M, V;
                        if (v.borderBoxSize) {
                            const ce = v.borderBoxSize[0];
                            M = ce.inlineSize, V = ce.blockSize;
                        } else M = v.contentRect.width, V = v.contentRect.height;
                        v.target.$_vs_onResize(v.target.$_vs_id, M, V);
                    }
                }
            });
        }));
        const U = {
            vscrollData: b,
            resizeObserver: c,
            direction: E,
            undefinedMap: i,
            undefinedSizeCount: {
                get value () {
                    return t;
                },
                set value (a){
                    t = a;
                }
            },
            onVscrollUpdate (a) {
                const v = (M)=>{
                    a(M);
                };
                return l.on("vscroll:update", v), ()=>l.off("vscroll:update", v);
            }
        };
        ct("vscrollData", b), ct("vscrollParent", {
            get $_undefinedSizes () {
                return t;
            },
            set $_undefinedSizes (a){
                t = a;
            },
            get $_undefinedMap () {
                return i;
            },
            set $_undefinedMap (a){
                i = a;
            },
            $_events: l,
            direction: E
        }), ct("vscrollResizeObserver", c), ct("vscrollMeasurementContext", U), ct("vscrollAnchorRegistry", {
            delete (a) {
                se.delete(a);
            },
            set (a, v) {
                se.set(a, v);
            }
        });
        const H = q(()=>{
            const a = S(e);
            return a.items.length > 0 && typeof a.items[0] != "object";
        }), j = q(()=>{
            const a = [], v = S(e), { items: M, keyField: V } = v, ce = H.value, B = b.sizes, te = M.length;
            for(let xe = 0; xe < te; xe++){
                const ge = M[xe], $e = ce ? xe : ge[V];
                let ke = B[$e];
                typeof ke > "u" && !i[$e] && (ke = 0), a.push({
                    item: ge,
                    id: $e,
                    size: ke
                });
            }
            return a;
        }), W = S(e);
        O = it(W.items, H.value ? null : W.keyField), W.cache && (b.sizes = Pt(W.cache, W.items, H.value ? null : W.keyField));
        const Q = q(()=>{
            const a = S(e);
            return {
                items: j.value,
                keyField: "id",
                direction: a.direction,
                itemSize: null,
                gridItems: void 0,
                itemSecondarySize: void 0,
                minItemSize: a.minItemSize,
                sizeField: "size",
                typeField: "type",
                buffer: a.buffer ?? 200,
                pageMode: a.pageMode ?? !1,
                shift: !1,
                cache: a.cache,
                prerender: a.prerender ?? 0,
                emitUpdate: a.emitUpdate ?? !1,
                updateInterval: a.updateInterval ?? 0
            };
        });
        function G() {
            var a, v;
            be(), (v = (a = S(e)).onResize) == null || v.call(a);
        }
        function de() {
            var a, v;
            l.emit("vscroll:update", {
                force: !1
            }), (v = (a = S(e)).onVisible) == null || v.call(a);
        }
        const ie = $n(Q, F, K, P, {
            onResize: G,
            onVisible: de,
            onHidden: ()=>{
                var a, v;
                return (v = (a = S(e)).onHidden) == null ? void 0 : v.call(a);
            },
            onUpdate: (a, v, M, V)=>{
                var ce, B;
                return (B = (ce = S(e)).onUpdate) == null ? void 0 : B.call(ce, a, v, M, V);
            }
        }), D = new WeakMap;
        function y() {
            T != null && (cancelAnimationFrame(T), A.delete(T), T = null);
        }
        function g() {
            y(), p = null;
        }
        function s() {
            p == null || T != null || (T = ee(()=>{
                T = null, ae();
            }));
        }
        function m() {
            const a = F.value;
            if (!a) return null;
            const v = a.getBoundingClientRect();
            let M = null;
            for (const [V, ce] of se.entries()){
                if (!ce.active || getComputedStyle(V).visibility === "hidden") continue;
                const B = V.getBoundingClientRect();
                if (B.bottom <= v.top || B.top >= v.bottom) continue;
                const te = Math.max(B.top, v.top) - v.top;
                (!M || te < M.score) && (M = {
                    key: ce.id,
                    offset: B.top - v.top,
                    score: te
                });
            }
            return M;
        }
        function w(a) {
            const v = F.value;
            if (!v) {
                g();
                return;
            }
            const M = v.scrollTop, V = Math.min(ie.findItemIndex(M), a.length - 1), ce = a[V];
            if (ce == null) {
                g();
                return;
            }
            const B = m();
            p = {
                logicalKey: ce,
                logicalOffset: M - ie.getItemOffset(V),
                pendingKeys: new Set,
                stableFrames: 0,
                visualKey: B?.key ?? null,
                visualOffset: B?.offset ?? 0
            };
        }
        function J(a) {
            const v = F.value;
            return !v || Math.abs(v.scrollTop - a) < .5 ? !1 : (R = !0, v.scrollTop = a, v.dispatchEvent(new Event("scroll")), ee(()=>{
                R = !1;
            }), !0);
        }
        function ae() {
            const a = p, v = F.value;
            if (!a || !v) return;
            const M = j.value.findIndex((te)=>te.id === a.logicalKey);
            if (M === -1) {
                g();
                return;
            }
            let V = !1;
            const ce = ie.getItemOffset(M) + a.logicalOffset;
            if (V = J(ce) || V, a.visualKey != null) for (const [te, xe] of se.entries()){
                if (!xe.active || xe.id !== a.visualKey || getComputedStyle(te).visibility === "hidden") continue;
                const ge = te.getBoundingClientRect().top - v.getBoundingClientRect().top - a.visualOffset;
                V = J(v.scrollTop + ge) || V;
                break;
            }
            let B = !0;
            for (const te of a.pendingKeys)if (!(typeof b.sizes[te] == "number" && b.sizes[te] > 0)) {
                B = !1;
                break;
            }
            if (!V && B) {
                if (a.stableFrames++, a.stableFrames >= 2) {
                    g();
                    return;
                }
            } else a.stableFrames = 0;
            s();
        }
        function re(a, v, M, V) {
            const ce = ul(), B = bt(v), te = bt(M), xe = bt({
                onResize: M.onResize
            }), ge = bt(a), $e = ce.run(()=>(we(()=>{
                    const ke = B.value;
                    if (!("view" in ke)) return {
                        active: te.value.active,
                        direction: E.value,
                        id: un(te.value.item, S(e).keyField, b.simpleArray, te.value.index),
                        legacy: !0
                    };
                    const { view: Ce } = ke;
                    return {
                        active: Ce.nr.used,
                        direction: E.value,
                        id: Ut(Ce).id,
                        legacy: !1,
                        position: Ce.position,
                        offset: Ce.offset,
                        styleStamp: Ll(Ce)
                    };
                }, ()=>{
                    const ke = ge.value;
                    if (ke) {
                        const Ce = B.value, Ne = "view" in Ce ? Ut(Ce.view).id : un(te.value.item, S(e).keyField, b.simpleArray, te.value.index);
                        Ne != null && se.set(ke, {
                            active: te.value.active && b.active,
                            id: Ne
                        }), rn(ke, B.value, E.value, V);
                    }
                }, {
                    immediate: !0
                }), Sn(te, ge, U, xe)));
            $e.mount(), D.set(a, {
                binding: B,
                scope: ce,
                options: te,
                callbacks: xe,
                el: ge,
                controller: $e,
                restoreStyles: V
            });
        }
        const _e = {
            mounted (a, v) {
                const M = an(a);
                re(a, v.value, cn(v.value), M);
            },
            updated (a, v) {
                const M = D.get(a), V = cn(v.value);
                if (!M) {
                    const ce = an(a);
                    re(a, v.value, V, ce);
                    return;
                }
                M.binding.value = v.value, M.options.value = V, M.callbacks.value = {
                    onResize: V.onResize
                }, M.el.value = a, rn(a, v.value, E.value, M.restoreStyles);
            },
            unmounted (a) {
                const v = D.get(a);
                v && (v.controller.unmount(), v.scope.stop(), Tn(a, v.restoreStyles), se.delete(a), D.delete(a));
            }
        };
        function be(a = !1) {
            (a || H.value) && (b.sizes = {}), l.emit("vscroll:update", {
                force: !0
            });
        }
        function Se(a, v) {
            ie.scrollToItem(a, v);
        }
        function u(a) {
            const v = S(e);
            return b.sizes = Pt(a, v.items, H.value ? null : v.keyField), ie.restoreCache(a);
        }
        function k(a, v) {
            const M = S(e), V = H.value ? v ?? M.items.indexOf(a) : a[M.keyField];
            return b.sizes[V] || 0;
        }
        function X() {
            const a = F.value;
            a && (d || (d = !0, dt(()=>{
                a.scrollTop = a.scrollHeight + 5e3;
                const v = ()=>{
                    a.scrollTop = a.scrollHeight + 5e3, ee(()=>{
                        a.scrollTop = a.scrollHeight + 5e3, t === 0 ? d = !1 : ee(v);
                    });
                };
                ee(v);
            })));
        }
        function oe() {
            p && !R && g();
        }
        return we(()=>S(e).items, (a, v)=>{
            const M = S(e), V = H.value ? null : M.keyField, ce = it(a, V);
            if (M.shift) {
                const B = v ? it(v, V) : O, te = bn(B, ce);
                te > 0 ? (w(B), p && (p.pendingKeys = new Set(ce.slice(0, te)), p.stableFrames = 0, dt(()=>{
                    p && ae();
                }))) : g();
            } else g();
            O = ce, be();
        }, {
            flush: "sync"
        }), we(()=>S(e).cache, (a)=>{
            a && u(a);
        }), we(H, (a)=>{
            b.simpleArray = a;
        }, {
            immediate: !0
        }), we(()=>S(e).direction, ()=>{
            g(), be(!0);
        }), we(F, (a, v)=>{
            v?.removeEventListener("scroll", oe), a?.addEventListener("scroll", oe);
        }, {
            immediate: !0
        }), we(j, (a, v)=>{
            const M = F.value;
            if (!M) return;
            if (p) {
                ae();
                return;
            }
            const V = M.scrollTop, ce = S(e);
            let B = 0, te = 0;
            const xe = Math.min(a.length, v.length);
            for(let $e = 0; $e < xe && !(B >= V); $e++)B += v[$e].size || ce.minItemSize, te += a[$e].size || ce.minItemSize;
            const ge = te - B;
            ge !== 0 && (M.scrollTop += ge);
        }, {
            flush: "post"
        }), pn(()=>{
            b.active = !0;
        }), rl(()=>{
            b.active = !1;
        }), ft(()=>{
            var a;
            y(), $(), (a = F.value) == null || a.removeEventListener("scroll", oe), l.all.clear();
        }), {
            vscrollData: b,
            itemsWithSize: j,
            resizeObserver: c,
            measurementContext: U,
            vDynamicScrollerItem: _e,
            ...ie,
            simpleArray: H,
            forceUpdate: be,
            scrollToItem: Se,
            restoreCache: u,
            getItemSize: k,
            scrollToBottom: X,
            onScrollerResize: G,
            onScrollerVisible: de
        };
    }
    const Kt = new WeakMap;
    function Bl(e) {
        return typeof e == "function" ? {
            callback: e,
            observer: null,
            intersection: void 0,
            visible: null
        } : {
            callback: e.callback,
            observer: null,
            intersection: e.intersection,
            visible: null
        };
    }
    function dn(e, t) {
        Mn(e);
        const i = Bl(t.value);
        if (Kt.set(e, i), typeof IntersectionObserver > "u") {
            const l = e.getBoundingClientRect();
            i.visible = !0, i.callback(!0, {
                boundingClientRect: l
            });
            return;
        }
        i.observer = new IntersectionObserver((l)=>{
            const d = l[0], c = !!(d != null && d.isIntersecting);
            i.visible !== null && i.visible === c || (i.visible = c, i.callback(c, d));
        }, i.intersection), i.observer.observe(e);
    }
    function Mn(e) {
        const t = Kt.get(e);
        t != null && t.observer && (t.observer.disconnect(), t.observer = null);
    }
    const Hl = {
        mounted (e, t) {
            dn(e, t);
        },
        updated (e, t) {
            t.value !== t.oldValue && dn(e, t);
        },
        unmounted (e) {
            Mn(e), Kt.delete(e);
        }
    }, Pl = mt({
        __name: "ItemView",
        props: {
            view: {},
            itemTag: {}
        },
        setup (e) {
            const t = e;
            return (i, l)=>(z(), pe(Mt(t.itemTag), {
                    class: "vue-recycle-scroller__item-view"
                }, {
                    default: _(()=>[
                            Pe(i.$slots, "default", {
                                item: t.view.item,
                                index: t.view.nr.index,
                                active: t.view.nr.used
                            })
                        ]),
                    _: 3
                }));
        }
    }), Wl = mt({
        __name: "ResizeObserver",
        emits: [
            "notify"
        ],
        setup (e, { emit: t }) {
            const i = t, l = Z();
            let d = null, c = null;
            function R() {
                i("notify");
            }
            return Je(()=>{
                var O;
                const p = (O = l.value) == null ? void 0 : O.parentElement;
                if (p) {
                    if (typeof ResizeObserver < "u") {
                        d = new ResizeObserver(()=>{
                            R();
                        }), d.observe(p);
                        return;
                    }
                    c = ()=>R(), window.addEventListener("resize", c);
                }
            }), xt(()=>{
                d && (d.disconnect(), d = null), c && (window.removeEventListener("resize", c), c = null);
            }), (O, p)=>(z(), le("div", {
                    ref_key: "el",
                    ref: l,
                    class: "vue-recycle-scroller__resize-observer",
                    "aria-hidden": "true"
                }, null, 512));
        }
    }), Ul = (e, t)=>{
        const i = e.__vccOpts || e;
        for (const [l, d] of t)i[l] = d;
        return i;
    }, Xl = Ul(Wl, [
        [
            "__scopeId",
            "data-v-08cc04ab"
        ]
    ]), Nl = mt({
        __name: "RecycleScroller",
        props: {
            items: {},
            keyField: {
                default: "id"
            },
            direction: {
                default: "vertical"
            },
            listTag: {
                default: "div"
            },
            itemTag: {
                default: "div"
            },
            itemSize: {
                default: null
            },
            gridItems: {
                default: void 0
            },
            itemSecondarySize: {
                default: void 0
            },
            minItemSize: {
                default: null
            },
            sizeField: {
                default: "size"
            },
            typeField: {
                default: "type"
            },
            buffer: {
                default: 200
            },
            pageMode: {
                type: Boolean,
                default: !1
            },
            shift: {
                type: Boolean,
                default: !1
            },
            cache: {
                default: void 0
            },
            prerender: {
                default: 0
            },
            emitUpdate: {
                type: Boolean,
                default: !1
            },
            disableTransform: {
                type: Boolean,
                default: !1
            },
            updateInterval: {
                default: 0
            },
            skipHover: {
                type: Boolean,
                default: !1
            },
            listClass: {
                default: ""
            },
            itemClass: {
                default: ""
            }
        },
        emits: [
            "resize",
            "visible",
            "hidden",
            "update",
            "scrollStart",
            "scrollEnd"
        ],
        setup (e, { expose: t, emit: i }) {
            const l = e, d = i, c = Hl, R = Z(), O = Z(), p = Z(), T = Z(null), A = $n(l, R, O, p, {
                onResize: ()=>d("resize"),
                onVisible: ()=>d("visible"),
                onHidden: ()=>d("hidden"),
                onUpdate: (s, m, w, J)=>{
                    d("update", s, m, w, J), w <= 0 && d("scrollStart"), J >= l.items.length - 1 && d("scrollEnd");
                }
            }), { pool: b, visiblePool: E, totalSize: F, ready: K, scrollToItem: P, scrollToPosition: se, getScroll: ee, findItemIndex: $, getItemOffset: U, getItemSize: H, cacheSnapshot: j, restoreCache: W, updateVisibleItems: Q, handleScroll: G, handleResize: de, handleVisibilityChange: ie } = A;
            function D(s) {
                T.value = s;
            }
            function y() {
                T.value = null;
            }
            const g = q(()=>{
                const s = {
                    [l.direction === "vertical" ? "minHeight" : "minWidth"]: `${F.value}px`
                };
                if (l.gridItems && l.itemSize != null) {
                    const m = (l.itemSecondarySize || l.itemSize) * l.gridItems;
                    s[l.direction === "vertical" ? "minWidth" : "minHeight"] = `${m}px`;
                }
                return s;
            });
            return t({
                el: R,
                visiblePool: E,
                scrollToItem: P,
                scrollToPosition: se,
                getScroll: ee,
                findItemIndex: $,
                getItemOffset: U,
                getItemSize: H,
                cacheSnapshot: j,
                restoreCache: W,
                updateVisibleItems: Q
            }), (s, m)=>Nt((z(), le("div", {
                    ref_key: "el",
                    ref: R,
                    class: Ke([
                        "vue-recycle-scroller",
                        {
                            "grid-mode": l.gridItems,
                            ready: n(K),
                            "page-mode": l.pageMode,
                            [`direction-${l.direction}`]: !0
                        }
                    ]),
                    onScrollPassive: m[0] || (m[0] = (...w)=>n(G) && n(G)(...w))
                }, [
                    s.$slots.before ? (z(), le("div", {
                        key: 0,
                        ref_key: "before",
                        ref: O,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Pe(s.$slots, "before")
                    ], 512)) : ve("", !0),
                    (z(), pe(Mt(l.listTag), {
                        style: ot(g.value),
                        class: Ke([
                            "vue-recycle-scroller__item-wrapper",
                            l.listClass
                        ])
                    }, {
                        default: _(()=>[
                                (z(!0), le(lt, null, $t(n(b), (w)=>(z(), pe(Pl, Ct({
                                        key: w.nr.id,
                                        view: w,
                                        "item-tag": l.itemTag,
                                        style: n(K) ? [
                                            l.disableTransform ? {
                                                [l.direction === "vertical" ? "top" : "left"]: `${w.position}px`,
                                                willChange: "unset"
                                            } : {
                                                transform: `translate${l.direction === "vertical" ? "Y" : "X"}(${w.position}px) translate${l.direction === "vertical" ? "X" : "Y"}(${w.offset}px)`
                                            },
                                            {
                                                width: l.gridItems ? `${l.direction === "vertical" && l.itemSecondarySize || l.itemSize}px` : void 0,
                                                height: l.gridItems ? `${l.direction === "horizontal" && l.itemSecondarySize || l.itemSize}px` : void 0,
                                                visibility: w.nr.used ? "visible" : "hidden"
                                            }
                                        ] : null,
                                        class: [
                                            "vue-recycle-scroller__item-view",
                                            [
                                                l.itemClass,
                                                {
                                                    hover: !l.skipHover && T.value === w.nr.key
                                                }
                                            ]
                                        ]
                                    }, cl(l.skipHover ? {} : {
                                        mouseenter: ()=>{
                                            D(w.nr.key);
                                        },
                                        mouseleave: ()=>{
                                            y();
                                        }
                                    })), {
                                        default: _((J)=>[
                                                Pe(s.$slots, "default", Ct({
                                                    ref_for: !0
                                                }, J))
                                            ]),
                                        _: 2
                                    }, 1040, [
                                        "view",
                                        "item-tag",
                                        "style",
                                        "class"
                                    ]))), 128)),
                                l.items.length === 0 ? Pe(s.$slots, "empty", {
                                    key: 0
                                }) : ve("", !0)
                            ]),
                        _: 3
                    }, 8, [
                        "style",
                        "class"
                    ])),
                    s.$slots.after ? (z(), le("div", {
                        key: 1,
                        ref_key: "after",
                        ref: p,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Pe(s.$slots, "after")
                    ], 512)) : ve("", !0),
                    h(Xl, {
                        onNotify: n(de)
                    }, null, 8, [
                        "onNotify"
                    ])
                ], 34)), [
                    [
                        n(c),
                        n(ie)
                    ]
                ]);
        }
    }), Yl = mt({
        inheritAttrs: !1,
        __name: "DynamicScroller",
        props: {
            items: {},
            keyField: {
                default: "id"
            },
            direction: {
                default: "vertical"
            },
            listTag: {
                default: "div"
            },
            itemTag: {
                default: "div"
            },
            minItemSize: {},
            shift: {
                type: Boolean,
                default: !1
            },
            cache: {
                default: void 0
            }
        },
        emits: [
            "resize",
            "visible"
        ],
        setup (e, { expose: t, emit: i }) {
            const l = e, d = i, c = Z(), R = q(()=>{
                var W;
                const Q = (W = c.value) == null ? void 0 : W.el;
                return Q && typeof Q == "object" && "value" in Q ? Q.value : Q;
            }), O = q(()=>({
                    items: l.items,
                    keyField: l.keyField,
                    direction: l.direction,
                    minItemSize: l.minItemSize,
                    shift: l.shift,
                    cache: l.cache,
                    el: R.value,
                    onResize: ()=>d("resize"),
                    onVisible: ()=>d("visible")
                })), p = Fl(O), { itemsWithSize: T, forceUpdate: A, scrollToItem: b, scrollToPosition: E, findItemIndex: F, getItemOffset: K, getItemSize: P, cacheSnapshot: se, restoreCache: ee, scrollToBottom: $, onScrollerResize: U, onScrollerVisible: H } = p;
            function j(W, Q, G) {
                return {
                    item: W.item,
                    index: Q,
                    active: G,
                    itemWithSize: W
                };
            }
            return t({
                scrollToItem: b,
                scrollToPosition: E,
                findItemIndex: F,
                getItemOffset: K,
                scrollToBottom: $,
                getItemSize: P,
                cacheSnapshot: se,
                restoreCache: ee,
                forceUpdate: A
            }), (W, Q)=>(z(), pe(Nl, Ct({
                    ref_key: "scroller",
                    ref: c,
                    items: n(T),
                    "min-item-size": l.minItemSize,
                    direction: l.direction,
                    cache: l.cache,
                    "key-field": "id",
                    "list-tag": l.listTag,
                    "item-tag": l.itemTag
                }, W.$attrs, {
                    onResize: n(U),
                    onVisible: n(H)
                }), il({
                    default: _(({ item: G, index: de, active: ie })=>[
                            Pe(W.$slots, "default", ol(sl(j(G, de, ie))))
                        ]),
                    empty: _(()=>[
                            Pe(W.$slots, "empty")
                        ]),
                    _: 2
                }, [
                    W.$slots.before ? {
                        name: "before",
                        fn: _(()=>[
                                Pe(W.$slots, "before")
                            ]),
                        key: "0"
                    } : void 0,
                    W.$slots.after ? {
                        name: "after",
                        fn: _(()=>[
                                Pe(W.$slots, "after")
                            ]),
                        key: "1"
                    } : void 0
                ]), 1040, [
                    "items",
                    "min-item-size",
                    "direction",
                    "cache",
                    "list-tag",
                    "item-tag",
                    "onResize",
                    "onVisible"
                ]));
        }
    });
    function ql(e, t, i) {
        const l = tn("vscrollMeasurementContext"), d = tn("vscrollAnchorRegistry", null), c = Sn(e, t, l, i);
        return Je(()=>{
            c.mount();
        }), d && we([
            c.id,
            c.finalActive,
            ()=>S(t)
        ], ([R, O, p], [T, A, b])=>{
            b && b !== p && d.delete(b), p && d.set(p, {
                active: O,
                id: R
            });
        }, {
            immediate: !0
        }), xt(()=>{
            const R = S(t);
            d && R && d.delete(R), c.unmount();
        }), {
            id: c.id,
            size: c.size,
            finalActive: c.finalActive,
            updateSize: c.updateSize
        };
    }
    const Kl = mt({
        __name: "DynamicScrollerItem",
        props: {
            item: {},
            watchData: {
                type: Boolean,
                default: !1
            },
            active: {
                type: Boolean
            },
            index: {
                default: void 0
            },
            sizeDependencies: {
                default: null
            },
            emitResize: {
                type: Boolean,
                default: !1
            },
            tag: {
                default: "div"
            }
        },
        emits: [
            "resize"
        ],
        setup (e, { emit: t }) {
            const i = e, l = t, d = Z();
            return ql(i, d, {
                onResize: (c)=>l("resize", c)
            }), (c, R)=>(z(), pe(Mt(i.tag), {
                    ref_key: "el",
                    ref: d
                }, {
                    default: _(()=>[
                            Pe(c.$slots, "default")
                        ]),
                    _: 3
                }, 512));
        }
    }), Ql = ml("vaultIcon", ()=>{
        const e = Z(JSON.parse(localStorage.getItem("app_vault_icon_cache") || "{}"));
        return {
            iconCache: e,
            getCachedIcon: (l)=>e.value[l] || null,
            setCachedIcon: (l, d)=>{
                e.value[l] = d, localStorage.setItem("app_vault_icon_cache", JSON.stringify(e.value));
            }
        };
    }), jl = {
        key: 0,
        class: "loading-spinner"
    }, Gl = [
        "src"
    ], Jl = {
        __name: "vaultIcon",
        props: {
            service: {
                type: String,
                default: ""
            },
            size: {
                type: Number,
                default: 32
            }
        },
        setup (e) {
            const t = Ql(), i = e, l = Z(!1), d = Z(!0), c = Z(""), R = Z(null), O = Z(null), p = ($)=>{
                const U = $.target, H = c.value.includes("google") && U.naturalWidth === 16, j = c.value.includes("bitwarden") && U.naturalWidth === 19;
                if (H || j) {
                    console.warn(`[VaultIcon] Loaded icon found as placeholder (${U.naturalWidth}px), clearing cache...`), b.value && t.clearCachedIcon(b.value), T();
                    return;
                }
                d.value = !1, clearTimeout(R.value), clearTimeout(O.value);
            }, T = ()=>{
                l.value = !0, d.value = !1, clearTimeout(R.value), clearTimeout(O.value);
            }, A = {
                google: "google.com",
                github: "github.com",
                microsoft: "microsoft.com",
                apple: "apple.com",
                amazon: "amazon.com",
                facebook: "facebook.com",
                twitter: "twitter.com",
                discord: "discord.com",
                slack: "slack.com",
                telegram: "telegram.org",
                dropbox: "dropbox.com",
                cloudflare: "cloudflare.com",
                gitlab: "gitlab.com",
                bitbucket: "bitbucket.org",
                digitalocean: "digitalocean.com",
                heroku: "heroku.com",
                vercel: "vercel.com",
                netlify: "netlify.com",
                stripe: "stripe.com",
                paypal: "paypal.com",
                spotify: "spotify.com",
                netflix: "netflix.com",
                steam: "steampowered.com",
                battle: "battle.net",
                blizzard: "battle.net"
            }, b = q(()=>{
                if (!i.service) return "";
                const $ = i.service.toLowerCase().trim();
                return $.includes(".") ? $ : A[$] || `${$}.com`;
            }), E = q(()=>i.service ? i.service.charAt(0).toUpperCase() : "");
            let F = 0;
            const K = async ()=>{
                const $ = b.value;
                if (!$) {
                    d.value = !1, l.value = !1;
                    return;
                }
                const U = ++F, H = t.getCachedIcon($);
                if (H) {
                    c.value = H, d.value = !1, l.value = !1, O.value = setTimeout(()=>{
                        U === F && (console.warn(`[VaultIcon] Cache response slow for ${$}, starting backup race...`), P($, U));
                    }, 2e3);
                    return;
                }
                if (typeof navigator < "u" && !navigator.onLine) {
                    T();
                    return;
                }
                P($, U);
            }, P = ($, U)=>{
                if (U !== F) return;
                d.value = !0, l.value = !1;
                const H = [
                    {
                        name: "google",
                        url: `https://www.google.com/s2/favicons?domain=${$}&sz=64`
                    },
                    {
                        name: "bitwarden",
                        url: `https://icons.bitwarden.net/${$}/icon.png`
                    },
                    {
                        name: "favicon",
                        url: `https://favicon.im/zh/${$}?throw-error-on-404=true`
                    }
                ];
                let j = !1;
                const W = 6e3, Q = (de, ie)=>new Promise((D, y)=>{
                        const g = new Image, s = setTimeout(()=>{
                            g.src = "", y("timeout");
                        }, 3e3);
                        g.onload = ()=>{
                            if (clearTimeout(s), g.naturalWidth <= 1) {
                                y("placeholder_1x1");
                                return;
                            }
                            if (ie === "google" && g.naturalWidth === 16) {
                                console.warn(`[VaultIcon] Google returned default 16px globe for ${$}`), y("google_default");
                                return;
                            }
                            if (ie === "bitwarden" && g.naturalWidth === 19) {
                                console.warn(`[VaultIcon] Bitwarden returned default 19px globe for ${$}`), y("bitwarden_default");
                                return;
                            }
                            D(de);
                        }, g.onerror = ()=>{
                            clearTimeout(s), y("network_error");
                        }, g.src = de;
                    });
                (async ()=>{
                    const de = H[0], ie = async ()=>{
                        if (!(U !== F || j)) try {
                            const D = H.map((g)=>Q(g.url, g.name)), y = await Promise.any(D);
                            !j && U === F && (j = !0, c.value = y, t.setCachedIcon($, y));
                        } catch  {
                            !j && U === F && (console.error(`[VaultIcon] All race sources failed for ${$}`), T());
                        }
                    };
                    try {
                        const D = await Promise.race([
                            Q(de.url, de.name),
                            new Promise((y, g)=>setTimeout(()=>g("timeout"), 1500))
                        ]);
                        !j && U === F && (j = !0, c.value = D, t.setCachedIcon($, D), p());
                    } catch  {
                        ie();
                    }
                })(), R.value = setTimeout(()=>{
                    U === F && !j && d.value && (console.error(`[VaultIcon] Race absolute timeout for ${$}`), T());
                }, W);
            };
            Je(()=>{
                K();
            }), xt(()=>{
                clearTimeout(R.value), clearTimeout(O.value);
            }), we(()=>i.service, ()=>{
                c.value = "", d.value = !0, l.value = !1, K();
            });
            const se = q(()=>({
                    width: `${i.size}px`,
                    height: `${i.size}px`
                })), ee = q(()=>{
                const $ = [
                    "#409EFF",
                    "#67C23A",
                    "#E6A23C",
                    "#F56C6C",
                    "#909399",
                    "#7232dd",
                    "#ee0a24",
                    "#07c160",
                    "#ff976a",
                    "#1989fa"
                ];
                let U = 0;
                for(let j = 0; j < (i.service || "").length; j++)U = (i.service || "").charCodeAt(j) + ((U << 5) - U);
                return {
                    backgroundColor: $[Math.abs(U) % $.length],
                    fontSize: `${Math.floor(i.size * .5)}px`
                };
            });
            return ($, U)=>(z(), le("div", {
                    class: "service-icon-wrapper",
                    style: ot(se.value)
                }, [
                    d.value && !l.value ? (z(), le("div", jl)) : ve("", !0),
                    c.value && !l.value ? Nt((z(), le("img", {
                        key: 1,
                        src: c.value,
                        class: "service-icon-img",
                        onError: T,
                        onLoad: p
                    }, null, 40, Gl)), [
                        [
                            vl,
                            !d.value
                        ]
                    ]) : ve("", !0),
                    l.value && !d.value ? (z(), le("div", {
                        key: 2,
                        class: "service-icon-fallback",
                        style: ot(ee.value)
                    }, Y(E.value), 5)) : ve("", !0)
                ], 4));
        }
    }, Zl = gn(Jl, [
        [
            "__scopeId",
            "data-v-a60dac5e"
        ]
    ]), ei = {
        __name: "swipeAction",
        props: {
            id: {
                type: [
                    String,
                    Number
                ],
                default: null
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            threshold: {
                type: Number,
                default: .3
            }
        },
        emits: [
            "open",
            "close"
        ],
        setup (e, { expose: t, emit: i }) {
            const l = e, d = i, c = Z(null), R = Z(null), O = Z(null), p = Z(0), T = Z(!1), A = Z(!1), b = Z(null);
            let E = 0, F = 0, K = 0, P = 0, se = null;
            const ee = q(()=>R.value?.offsetWidth || 0), $ = q(()=>O.value?.offsetWidth || 0), U = q(()=>({
                    transform: `translateX(${p.value}px)`,
                    transition: T.value ? "none" : "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.15)"
                })), H = (D)=>{
                if (l.disabled) return;
                const y = D.touches[0];
                E = y.clientX, F = y.clientY, K = p.value, P = Date.now(), T.value = !0, se = null;
            }, j = (D)=>{
                if (l.disabled || !T.value) return;
                const y = D.touches[0], g = y.clientX - E, s = y.clientY - F;
                if (se === null && (Math.abs(g) > 15 || Math.abs(s) > 15) && (se = Math.abs(g) > Math.abs(s)), se) {
                    D.cancelable && D.preventDefault();
                    let m = K + g;
                    m > ee.value ? m = ee.value + (m - ee.value) * .2 : m < -$.value && (m = -$.value + (m + $.value) * .2), p.value = m;
                }
            }, W = ()=>{
                if (l.disabled) return;
                T.value = !1;
                const D = Math.abs(p.value), y = Date.now() - P;
                p.value > 0 ? p.value > ee.value * l.threshold || y < 250 && p.value > 20 ? (p.value = ee.value, A.value = !0, b.value = "left", d("open", "left"), Q()) : ie() : p.value < 0 && (D > $.value * l.threshold || y < 250 && D > 20) ? (p.value = -$.value, A.value = !0, b.value = "right", d("open", "right"), Q()) : ie();
            }, Q = ()=>{
                if ("vibrate" in navigator) try {
                    navigator.vibrate(10);
                } catch  {}
                l.id && window.dispatchEvent(new CustomEvent("swipe-action:opened", {
                    detail: {
                        id: l.id
                    }
                }));
            }, G = (D)=>{
                A.value && D.detail.id !== l.id && ie();
            }, de = (D)=>{
                A.value && !c.value?.contains(D.target) && ie();
            };
            Je(()=>{
                window.addEventListener("swipe-action:opened", G), window.addEventListener("touchstart", de, {
                    passive: !0
                });
            }), ft(()=>{
                window.removeEventListener("swipe-action:opened", G), window.removeEventListener("touchstart", de);
            });
            const ie = ()=>{
                p.value = 0, A.value = !1, b.value = null, d("close");
            };
            return t({
                reset: ie
            }), (D, y)=>(z(), le("div", {
                    class: Ke([
                        "swipe-action-container",
                        {
                            "is-open": A.value,
                            "is-swiping": T.value
                        }
                    ]),
                    ref_key: "containerRef",
                    ref: c
                }, [
                    I("div", {
                        class: "swipe-actions left-actions",
                        ref_key: "leftActionsRef",
                        ref: R,
                        style: ot({
                            opacity: p.value > 0 ? 1 : 0,
                            visibility: p.value > 0 ? "visible" : "hidden"
                        })
                    }, [
                        Pe(D.$slots, "left-actions")
                    ], 4),
                    I("div", {
                        class: "swipe-actions right-actions",
                        ref_key: "rightActionsRef",
                        ref: O,
                        style: ot({
                            opacity: p.value < 0 ? 1 : 0,
                            visibility: p.value < 0 ? "visible" : "hidden"
                        })
                    }, [
                        Pe(D.$slots, "right-actions")
                    ], 4),
                    I("div", {
                        class: "swipe-action-content",
                        style: ot(U.value),
                        onTouchstart: H,
                        onTouchmove: j,
                        onTouchend: W,
                        onTouchcancel: W
                    }, [
                        Pe(D.$slots, "default")
                    ], 36)
                ], 2));
        }
    }, ti = {
        class: "conflict-overlay"
    }, ni = {
        class: "conflict-content"
    }, li = {
        class: "conflict-text"
    }, ii = {
        class: "conflict-actions"
    }, oi = {
        __name: "conflictOverlay",
        emits: [
            "resolve"
        ],
        setup (e) {
            return (t, i)=>{
                const l = Xt;
                return z(), le("div", ti, [
                    I("div", ni, [
                        I("p", li, Y(t.$t("vault.conflict_notice")), 1),
                        I("div", ii, [
                            h(l, {
                                size: "small",
                                type: "primary",
                                plain: "",
                                onClick: i[0] || (i[0] = Ge((d)=>t.$emit("resolve", "force"), [
                                    "stop"
                                ]))
                            }, {
                                default: _(()=>[
                                        Me(Y(t.$t("vault.force_sync")), 1)
                                    ]),
                                _: 1
                            }),
                            h(l, {
                                size: "small",
                                type: "danger",
                                plain: "",
                                onClick: i[1] || (i[1] = Ge((d)=>t.$emit("resolve", "discard"), [
                                    "stop"
                                ]))
                            }, {
                                default: _(()=>[
                                        Me(Y(t.$t("vault.discard_local")), 1)
                                    ]),
                                _: 1
                            })
                        ])
                    ])
                ]);
            };
        }
    }, si = {
        class: "card-inner-content"
    }, ai = {
        class: "card-header"
    }, ri = {
        class: "service-info"
    }, ci = [
        "title"
    ], ui = {
        class: "vault-name"
    }, di = {
        class: "code-left"
    }, fi = [
        "data-digits"
    ], mi = [
        "data-digits"
    ], vi = {
        key: 0,
        class: "code-right flex flex-items-center"
    }, pi = {
        key: 1,
        class: "code-right"
    }, gi = {
        class: "timer-text"
    }, hi = {
        key: 2,
        class: "code-right"
    }, fn = {
        __name: "vaultItemCard",
        props: {
            item: {
                type: Object,
                required: !0
            },
            isSelected: {
                type: Boolean,
                default: !1
            },
            isDragging: {
                type: Boolean,
                default: !1
            },
            isPressing: {
                type: Boolean,
                default: !1
            },
            isCompact: {
                type: Boolean,
                default: !1
            },
            isPending: {
                type: Boolean,
                default: !1
            },
            isMobile: {
                type: Boolean,
                default: !1
            },
            isIncrementing: {
                type: Boolean,
                default: !1
            }
        },
        emits: [
            "toggle-selection",
            "command",
            "copy-code",
            "resolve-conflict",
            "increment"
        ],
        setup (e) {
            const t = Tt(), i = Yt(), l = hl(), d = Z(!1);
            let c = null, R = 0, O = 0;
            const p = (s)=>{
                if (t.appGhostMode) if (s.type === "touchstart" && s.touches && s.touches.length > 0) {
                    const m = s.touches[0];
                    R = m.clientX, O = m.clientY;
                } else s.type === "mousedown" && (R = s.clientX, O = s.clientY);
            }, T = (s)=>{
                if (t.appGhostMode) {
                    if (s && s.type.startsWith("touch") && s.changedTouches && s.changedTouches.length > 0) {
                        const m = s.changedTouches[0], w = Math.abs(m.clientX - R), J = Math.abs(m.clientY - O);
                        if (w > 15 || J > 15) return;
                    }
                    if (s.type === "mouseup") {
                        const m = Math.abs(s.clientX - R), w = Math.abs(s.clientY - O);
                        if (m > 10 || w > 10) return;
                    }
                    d.value = !0, c && clearTimeout(c), c = setTimeout(()=>{
                        d.value = !1, c = null;
                    }, 3e4);
                }
            };
            ft(()=>{
                c && clearTimeout(c), F();
            });
            const A = e, { currentTime: b, startTimer: E, stopTimer: F } = yl(), K = q(()=>Ot.get(A.item.id) || {
                    code: "------",
                    next: null
                }), P = q(()=>K.value.code), se = q(()=>K.value.next), ee = q(()=>K.value.epoch ?? null), $ = q(()=>K.value.epoch !== void 0 ? K.value.epoch + 1 : null), U = q(()=>A.item.period || 30), H = q(()=>A.item.digits || 6), j = q(()=>Math.ceil(U.value - b.value % U.value)), W = q(()=>j.value / U.value * 100), Q = q(()=>j.value > 10 ? "#67C23A" : j.value > 5 ? "#E6A23C" : "#F56C6C"), G = q(()=>A.item.account?.includes(":") ? A.item.account.split(":").pop() : A.item.account), de = (s, m)=>{
                if (!s || s === "ERROR") return [
                    "",
                    ""
                ];
                if (s === "------") {
                    const J = Math.floor(m / 2), ae = " ".repeat(m);
                    return [
                        ae.substring(0, J),
                        ae.substring(J)
                    ];
                }
                const w = Math.floor(m / 2);
                return [
                    s.substring(0, w),
                    s.substring(w)
                ];
            }, ie = q(()=>de(P.value, H.value)), D = q(()=>de(se.value, H.value)), y = async (s)=>{
                if (!s.secret) return {
                    code: "ERROR",
                    next: null
                };
                let m = s.secret;
                if (m && m.startsWith("nodeauth:")) {
                    const k = await l.getMaskingKey();
                    try {
                        m = await wl(m, k);
                    } catch  {
                        return {
                            code: "ERROR",
                            next: null
                        };
                    }
                }
                const w = s.digits || 6, J = s.algorithm || "SHA1", ae = s.period || 30;
                if (s.type === "hotp") {
                    const k = await Vt(m, s.counter || 0, w, J, "hotp");
                    return m = null, {
                        code: k,
                        next: null
                    };
                }
                const re = b.value, _e = Math.floor(re / ae), be = Math.ceil(ae - re % ae);
                let Se = P.value, u = se.value;
                return (ee.value !== _e || Se === "------" || Se === "ERROR") && (Se = await Vt(m, ae, w, J, s.type)), be <= 5 && A.isMobile ? (!u || $.value !== _e + 1) && (u = await Vt(m, ae, w, J, s.type, 1)) : u = null, m = null, {
                    code: Se,
                    next: u,
                    epoch: _e
                };
            }, g = async (s)=>{
                const m = s.id, w = await y(s);
                !l.isLocked && w.code !== "ERROR" && Ot.set(m, w);
            };
            return we(b, ()=>{
                A.item.type !== "hotp" && g(A.item);
            }), we(()=>A.item.counter, ()=>{
                A.item.type === "hotp" && g(A.item);
            }), we([
                ()=>A.item.id,
                ()=>A.item.secret
            ], ([s, m], [w, J])=>{
                if (s !== w) {
                    d.value = !1, c && (clearTimeout(c), c = null), g(A.item);
                    return;
                }
                m !== J && (Ot.delete(s), g(A.item));
            }, {
                immediate: !0
            }), we(()=>l.isLocked, (s, m)=>{
                m && !s && g(A.item);
            }), Je(()=>{
                E();
            }), (s, m)=>{
                const w = mn, J = Rn, ae = In, re = En, _e = Ln, be = Vn, Se = An, u = Xt, k = Fn, X = Bn;
                return z(), pe(X, {
                    shadow: "hover",
                    class: Ke([
                        "vault-card",
                        {
                            "is-selected": e.isSelected,
                            "is-dragging": e.isDragging,
                            "is-pressing": e.isPressing,
                            "is-compact": e.isCompact,
                            "is-pending": e.isPending,
                            "is-ghost-mode": n(t).appGhostMode,
                            "is-revealed": d.value
                        }
                    ])
                }, {
                    default: _(()=>[
                            h(ei, {
                                id: e.item.id,
                                disabled: !n(t).isMobile || e.item.status === "conflict" || n(i).isItemInConflict(e.item.id) || e.isDragging || e.isPressing,
                                onOpen: m[14] || (m[14] = ()=>d.value = !1)
                            }, {
                                "left-actions": _(()=>[
                                        e.item.deletedAt != null ? (z(), le("div", {
                                            key: 0,
                                            class: "swipe-btn bg-success",
                                            onClick: m[0] || (m[0] = (oe)=>s.$emit("command", "restore", e.item))
                                        }, [
                                            h(w, null, {
                                                default: _(()=>[
                                                        h(n(_t))
                                                    ]),
                                                _: 1
                                            }),
                                            I("span", null, Y(s.$t("vault.restore")), 1)
                                        ])) : (z(), le("div", {
                                            key: 1,
                                            class: "swipe-btn bg-primary",
                                            onClick: m[1] || (m[1] = (oe)=>s.$emit("command", "qr", e.item))
                                        }, [
                                            h(w, null, {
                                                default: _(()=>[
                                                        h(n(Jt))
                                                    ]),
                                                _: 1
                                            }),
                                            I("span", null, Y(s.$t("vault.export_account")), 1)
                                        ]))
                                    ]),
                                "right-actions": _(()=>[
                                        e.item.deletedAt != null ? (z(), le("div", {
                                            key: 0,
                                            class: "swipe-btn bg-danger",
                                            onClick: m[2] || (m[2] = (oe)=>s.$emit("command", "delete", e.item))
                                        }, [
                                            h(w, null, {
                                                default: _(()=>[
                                                        h(n(nt))
                                                    ]),
                                                _: 1
                                            }),
                                            I("span", null, Y(s.$t("vault.hard_delete")), 1)
                                        ])) : (z(), le(lt, {
                                            key: 1
                                        }, [
                                            I("div", {
                                                class: "swipe-btn bg-warning",
                                                onClick: m[3] || (m[3] = (oe)=>s.$emit("command", "edit", e.item))
                                            }, [
                                                h(w, null, {
                                                    default: _(()=>[
                                                            h(n(Zt))
                                                        ]),
                                                    _: 1
                                                }),
                                                I("span", null, Y(s.$t("common.edit")), 1)
                                            ]),
                                            I("div", {
                                                class: "swipe-btn bg-danger",
                                                onClick: m[4] || (m[4] = (oe)=>s.$emit("command", "delete", e.item))
                                            }, [
                                                h(w, null, {
                                                    default: _(()=>[
                                                            h(n(nt))
                                                        ]),
                                                    _: 1
                                                }),
                                                I("span", null, Y(s.$t("common.delete")), 1)
                                            ])
                                        ], 64))
                                    ]),
                                default: _(()=>[
                                        I("div", si, [
                                            I("div", ai, [
                                                I("div", ri, [
                                                    h(J, {
                                                        "model-value": e.isSelected,
                                                        onChange: m[5] || (m[5] = (oe)=>s.$emit("toggle-selection", e.item.id)),
                                                        onClick: m[6] || (m[6] = Ge(()=>{}, [
                                                            "stop"
                                                        ]))
                                                    }, null, 8, [
                                                        "model-value"
                                                    ]),
                                                    h(Zl, {
                                                        service: e.item.service,
                                                        size: e.isCompact ? 20 : 24
                                                    }, null, 8, [
                                                        "service",
                                                        "size"
                                                    ]),
                                                    I("h3", {
                                                        class: "service-name",
                                                        title: e.item.service
                                                    }, Y(e.item.service), 9, ci),
                                                    e.item.category ? (z(), pe(ae, {
                                                        key: 0,
                                                        size: "small",
                                                        effect: "light"
                                                    }, {
                                                        default: _(()=>[
                                                                Me(Y(e.item.category), 1)
                                                            ]),
                                                        _: 1
                                                    })) : ve("", !0),
                                                    e.isPending && e.item.status !== "conflict" && !n(i).isItemInConflict(e.item.id) ? (z(), pe(re, {
                                                        key: 1,
                                                        content: s.$t("vault.pending_sync_tip")
                                                    }, {
                                                        default: _(()=>[
                                                                h(w, {
                                                                    class: "pending-icon ml-5"
                                                                }, {
                                                                    default: _(()=>[
                                                                            h(n(vn))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : ve("", !0),
                                                    e.item.status === "conflict" || n(i).isItemInConflict(e.item.id) ? (z(), pe(re, {
                                                        key: 2,
                                                        content: s.$t("vault.conflict_detected_tip")
                                                    }, {
                                                        default: _(()=>[
                                                                h(w, {
                                                                    class: "conflict-icon ml-5",
                                                                    color: "#F56C6C"
                                                                }, {
                                                                    default: _(()=>[
                                                                            h(n(Dn))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : ve("", !0)
                                                ]),
                                                n(t).isMobile ? ve("", !0) : (z(), pe(Se, {
                                                    key: 0,
                                                    trigger: "click",
                                                    onCommand: m[8] || (m[8] = (oe)=>s.$emit("command", oe, e.item))
                                                }, {
                                                    dropdown: _(()=>[
                                                            h(be, null, {
                                                                default: _(()=>[
                                                                        e.item.deletedAt == null ? (z(), pe(_e, {
                                                                            key: 0,
                                                                            command: "qr"
                                                                        }, {
                                                                            default: _(()=>[
                                                                                    h(w, null, {
                                                                                        default: _(()=>[
                                                                                                h(n(Jt))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + Y(s.$t("vault.export_account")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ve("", !0),
                                                                        e.item.deletedAt != null ? (z(), pe(_e, {
                                                                            key: 1,
                                                                            command: "restore"
                                                                        }, {
                                                                            default: _(()=>[
                                                                                    h(w, null, {
                                                                                        default: _(()=>[
                                                                                                h(n(_t))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + Y(s.$t("vault.restore")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ve("", !0),
                                                                        e.item.deletedAt == null ? (z(), pe(_e, {
                                                                            key: 2,
                                                                            command: "edit"
                                                                        }, {
                                                                            default: _(()=>[
                                                                                    h(w, null, {
                                                                                        default: _(()=>[
                                                                                                h(n(Zt))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + Y(s.$t("common.edit")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ve("", !0),
                                                                        h(_e, {
                                                                            command: "delete",
                                                                            class: "text-danger"
                                                                        }, {
                                                                            default: _(()=>[
                                                                                    h(w, null, {
                                                                                        default: _(()=>[
                                                                                                h(n(nt))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + Y(e.item.deletedAt != null ? s.$t("vault.hard_delete") : s.$t("common.delete")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    default: _(()=>[
                                                            h(w, {
                                                                class: "more-icon",
                                                                onClick: m[7] || (m[7] = Ge(()=>{}, [
                                                                    "stop"
                                                                ]))
                                                            }, {
                                                                default: _(()=>[
                                                                        h(n(On))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }))
                                            ]),
                                            I("p", ui, Y(G.value), 1),
                                            I("div", {
                                                class: "code-display-area",
                                                onClick: m[12] || (m[12] = Ge((oe)=>s.$emit("copy-code", e.item, P.value), [
                                                    "stop"
                                                ])),
                                                onMousedown: p,
                                                onMouseup: T,
                                                onMouseleave: T,
                                                onTouchstart: p,
                                                onTouchend: T,
                                                onTouchcancel: T
                                            }, [
                                                I("div", di, [
                                                    I("div", {
                                                        class: Ke([
                                                            "current-code",
                                                            {
                                                                "is-placeholder-loading": P.value === "------" || P.value === "ERROR"
                                                            }
                                                        ]),
                                                        "data-digits": H.value
                                                    }, [
                                                        P.value ? (z(), le(lt, {
                                                            key: 0
                                                        }, [
                                                            I("span", null, Y(ie.value[0]), 1),
                                                            m[15] || (m[15] = I("span", {
                                                                class: "code-divider"
                                                            }, null, -1)),
                                                            I("span", null, Y(ie.value[1]), 1)
                                                        ], 64)) : ve("", !0)
                                                    ], 10, fi),
                                                    e.isMobile && se.value && e.item.deletedAt == null ? (z(), le("div", {
                                                        key: 0,
                                                        class: "next-code",
                                                        "data-digits": H.value
                                                    }, [
                                                        I("span", null, Y(D.value[0]), 1),
                                                        m[16] || (m[16] = I("span", {
                                                            class: "code-divider is-next"
                                                        }, null, -1)),
                                                        I("span", null, Y(D.value[1]), 1)
                                                    ], 8, mi)) : ve("", !0)
                                                ]),
                                                e.item.deletedAt != null ? (z(), le("div", vi, [
                                                    h(u, {
                                                        type: "success",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: m[9] || (m[9] = Ge((oe)=>s.$emit("command", "restore", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: s.$t("vault.restore")
                                                    }, {
                                                        icon: _(()=>[
                                                                h(w, null, {
                                                                    default: _(()=>[
                                                                            h(n(_t))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ]),
                                                    h(u, {
                                                        type: "danger",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: m[10] || (m[10] = Ge((oe)=>s.$emit("command", "delete", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: s.$t("vault.hard_delete")
                                                    }, {
                                                        icon: _(()=>[
                                                                h(w, null, {
                                                                    default: _(()=>[
                                                                            h(n(nt))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ])
                                                ])) : P.value !== "------" ? (z(), le("div", pi, [
                                                    e.item.type === "hotp" ? (z(), pe(u, {
                                                        key: 0,
                                                        type: "primary",
                                                        plain: "",
                                                        circle: "",
                                                        size: e.isCompact ? "small" : "default",
                                                        loading: e.isIncrementing,
                                                        onClick: m[11] || (m[11] = Ge((oe)=>s.$emit("increment", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: s.$t("vault.increment")
                                                    }, {
                                                        icon: _(()=>[
                                                                h(w, null, {
                                                                    default: _(()=>[
                                                                            h(n(_t))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "size",
                                                        "loading",
                                                        "title"
                                                    ])) : (z(), pe(k, {
                                                        key: 1,
                                                        type: "circle",
                                                        percentage: W.value,
                                                        width: e.isCompact ? 26 : 30,
                                                        "stroke-width": e.isCompact ? 2 : 3,
                                                        color: Q.value
                                                    }, {
                                                        default: _(()=>[
                                                                I("span", gi, Y(j.value), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "percentage",
                                                        "width",
                                                        "stroke-width",
                                                        "color"
                                                    ]))
                                                ])) : (z(), le("div", hi, [
                                                    h(w, {
                                                        class: "is-loading"
                                                    }, {
                                                        default: _(()=>[
                                                                h(n(zt))
                                                            ]),
                                                        _: 1
                                                    })
                                                ]))
                                            ], 32),
                                            e.item.status === "conflict" || n(i).isItemInConflict(e.item.id) ? (z(), pe(oi, {
                                                key: 0,
                                                onResolve: m[13] || (m[13] = (oe)=>s.$emit("resolve-conflict", e.item.id, oe))
                                            })) : ve("", !0)
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "id",
                                "disabled"
                            ])
                        ]),
                    _: 1
                }, 8, [
                    "class"
                ]);
            };
        }
    };
    function yi(e, t, i, l = null) {
        const d = hn(), c = Yt(), { updateTrashMetadata: R, fetchTrash: O } = _n(), { t: p } = _l.global, T = Z([]), A = Z(!1), b = Z(!1), E = Z(!1), F = Z({
            id: "",
            service: "",
            account: "",
            category: ""
        }), K = Z(!1), P = Z(null), se = Z(!1), ee = Z(""), $ = async ()=>{
            if (T.value.length) try {
                await en.confirm(p("vault.delete_batch_confirm", {
                    count: T.value.length
                }), p("common.delete"), {
                    type: "warning",
                    confirmButtonText: p("common.delete"),
                    cancelButtonText: p("common.cancel")
                }), A.value = !0;
                const u = Tt(), k = t?.value?.length > 0 && t.value[0]?.deletedAt != null || !u.appTrashMode;
                if (!c.isManualOffline && (!navigator.onLine || c.isOffline)) {
                    Ae.warning(p("security.offline_network_blocked")), A.value = !1;
                    return;
                }
                k ? (c.isManualOffline ? await tt.batchDelete(T.value) : await Promise.all(T.value.map((X)=>ut.hardDelete(X))), R(-T.value.length)) : (await ut.batchMoveToTrash(T.value), R(T.value.length)), await d.deleteItems(T.value), !c.isOffline && !k && await d.updateMetadata({
                    delta: -T.value.length
                }), Ae.success(p("vault.delete_batch_success", {
                    count: T.value.length
                })), T.value = [], d.markDirty(), e(), O();
            } catch (u) {
                u !== "cancel" && St.error(u);
            } finally{
                A.value = !1;
            }
        }, U = (u)=>{
            const k = T.value.indexOf(u);
            k > -1 ? T.value.splice(k, 1) : T.value.push(u);
        }, H = ()=>{
            t?.value && (T.value = t.value.map((u)=>u.id));
        }, j = async (u, k)=>{
            const X = k || u?.currentCode;
            if (!X || X === "------") return Ae.warning(p("vault.not_generated_yet"));
            await Lt(X, p("common.copy_success"));
        }, W = (u)=>{
            F.value = {
                id: u.id,
                service: u.service,
                account: u.account,
                category: u.category || "",
                updatedAt: u.updatedAt
            }, b.value = !0;
        }, Q = async ()=>{
            E.value = !0;
            try {
                const { id: u, ...k } = F.value;
                (await tt.updateAccount(u, k)).success && (Ae.success(p("vault.update_success")), b.value = !1, d.markDirty(), e(), O());
            } catch  {} finally{
                E.value = !1;
            }
        };
        let G = null;
        const de = async (u, k)=>{
            if (!u.some((B, te)=>B.id !== k[te]?.id)) return;
            const oe = Ae.success({
                message: p("vault.sort_updated"),
                duration: 1500,
                customClass: "message-success-blur"
            }), v = (l?.value || u).filter((B)=>!B.id.startsWith("tmp_"));
            let M = null;
            const V = u.findIndex((B, te)=>B.id !== k[te]?.id);
            if (V !== -1 && (k[V]?.id === u[V + 1]?.id ? M = u[V] : u[V]?.id === k[V + 1]?.id ? M = u.find((B)=>B.id === k[V].id) : M = u[V]), M) {
                const B = v.findIndex((Ce)=>Ce.id === M.id), te = B > 0 ? v[B - 1] : null, xe = B < v.length - 1 ? v[B + 1] : null, ge = te?.sortOrder ?? null, $e = xe?.sortOrder ?? null;
                let ke = null;
                if (ge === null && $e === null) ke = 1e3;
                else if (ge === null) ke = ($e ?? 0) + 1e3;
                else if ($e === null) ke = Math.max(0, (ge ?? 0) - 1e3);
                else {
                    const Ce = Math.floor((ge + $e) / 2);
                    Ce > $e && Ce < ge && (ke = Ce);
                }
                if (ke !== null) {
                    M.sortOrder = ke;
                    try {
                        await tt.moveSortOrder(M.id, ke), G && clearTimeout(G), G = setTimeout(()=>{
                            d.markDirty(), e();
                        }, 1e3);
                    } catch  {
                        oe?.close(), t.value = k, G && clearTimeout(G), e();
                    }
                    return;
                }
            }
            const ce = v.map((B)=>B.id);
            try {
                await tt.reorder(ce), G && clearTimeout(G), G = setTimeout(()=>{
                    d.markDirty(), e();
                }, 1e3);
            } catch  {
                oe?.close(), t.value = k, G && clearTimeout(G), e();
            }
        }, ie = async (u)=>{
            try {
                const k = Tt(), X = u.deletedAt != null || !k.appTrashMode;
                if (!c.isManualOffline && (!navigator.onLine || c.isOffline)) {
                    Ae.warning(p("security.offline_network_blocked"));
                    return;
                }
                const oe = p(X ? "vault.hard_delete" : "common.delete"), a = X ? p("vault.hard_delete_confirm", {
                    service: u.service
                }) : p("vault.delete_confirm", {
                    service: u.service
                });
                await en.confirm(a, oe, {
                    type: "warning",
                    confirmButtonText: oe,
                    cancelButtonText: p("common.cancel")
                }), X ? (c.isManualOffline ? await tt.deleteAccount(u.id) : await ut.hardDelete(u.id), R(-1)) : (await ut.moveToTrash(u.id), R(1)), await d.deleteItems([
                    u.id
                ]);
                const v = u.deletedAt == null;
                !c.isOffline && v && await d.updateMetadata({
                    delta: -1
                }), Ae.success(p("vault.delete_success")), d.markDirty(), e();
            } catch (k) {
                k !== "cancel" && St.error(k);
            }
        }, D = Z(!1), y = async (u)=>{
            if (!D.value) {
                D.value = !0;
                try {
                    const k = await tt.incrementCounter(u.id, u.updatedAt);
                    k.success && (d.markDirty(), e(), k.pending ? Ae.info(p("vault.increment_offline_queued")) : Ae.success(p("vault.increment_success")));
                } catch (k) {
                    St.error(k), Ae.error(p("vault.increment_failed"));
                } finally{
                    D.value = !1;
                }
            }
        }, g = async (u)=>{
            if (!u || !u.startsWith("nodeauth:")) return u;
            const { useAppLockStore: k } = await on(async ()=>{
                const { useAppLockStore: v } = await import("./index-DwnAqmoK.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((M)=>M.b);
                return {
                    useAppLockStore: v
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), { unmaskSecretFront: X } = await on(async ()=>{
                const { unmaskSecretFront: v } = await import("./index-DwnAqmoK.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((M)=>M.m);
                return {
                    unmaskSecretFront: v
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), a = await k().getMaskingKey();
            return await X(u, a);
        }, s = async (u)=>{
            const k = await g(u.secret);
            P.value = {
                ...u,
                secret: k
            }, se.value = !1, K.value = !0;
            const X = nn({
                service: u.service,
                account: u.account,
                secret: k,
                type: u.type,
                algorithm: u.algorithm,
                digits: u.digits,
                period: u.period,
                counter: u.counter
            });
            ee.value = await kl.toDataURL(X, {
                width: 240,
                margin: 1
            });
        }, m = async ()=>{
            P.value && await Lt(P.value.secret);
        }, w = async ()=>{
            if (P.value) {
                const u = P.value, k = nn({
                    service: u.service,
                    account: u.account,
                    secret: u.secret,
                    type: u.type,
                    algorithm: u.algorithm,
                    digits: u.digits,
                    period: u.period,
                    counter: u.counter
                });
                await Lt(k);
            }
        }, J = (u)=>(u || "").match(/.{1,4}/g)?.join(" ") || u, ae = (u, k)=>{
            if (!u || u === "------" || typeof u != "string") return u;
            const X = u.replace(/\s/g, "");
            return k === 6 && X.length === 6 ? `${X.slice(0, 3)} ${X.slice(3)}` : k === 8 && X.length === 8 ? `${X.slice(0, 4)} ${X.slice(4)}` : X;
        }, re = (u, k)=>{
            if (!u || u === "------" || typeof u != "string") return [
                u,
                ""
            ];
            const X = u.replace(/\s/g, "");
            return k === 6 && X.length === 6 ? [
                X.slice(0, 3),
                X.slice(3)
            ] : k === 8 && X.length === 8 ? [
                X.slice(0, 4),
                X.slice(4)
            ] : [
                X,
                ""
            ];
        }, _e = (u, k)=>{
            u === "edit" ? W(k) : u === "qr" ? s(k) : u === "delete" ? ie(k) : u === "restore" && be(k);
        }, be = async (u)=>{
            if (!navigator.onLine || c.isOffline) {
                Ae.warning(p("security.offline_network_restore_blocked"));
                return;
            }
            try {
                await ut.restoreItem(u.id), R(-1), Ae.success(p("vault.restore_success")), c.isOffline || await d.updateMetadata({
                    delta: 1
                }), await d.deleteItems([
                    u.id
                ]), d.markDirty(), e();
            } catch (k) {
                St.error(k), Ae.error("恢复失败");
            }
        }, Se = async (u, k)=>{
            await yn().resolveConflict(u, k), k === "force" ? (Ae.success(p("vault.conflict_force_applied")), tt.syncOfflineActions().then(()=>e())) : (Ae.info(p("vault.conflict_discarded")), e());
        };
        return {
            selectedIds: T,
            isBulkDeleting: A,
            showEditDialog: b,
            isEditing: E,
            editVaultData: F,
            showQrDialog: K,
            currentQrItem: P,
            showSecret: se,
            qrCodeUrl: ee,
            categoryOptions: q(()=>(i?.value || []).filter((u)=>u.category).map((u)=>u.category)),
            toggleSelection: U,
            selectAllLoaded: H,
            handleBulkDelete: $,
            copyCode: j,
            openEditDialog: W,
            submitEditVault: Q,
            deleteVault: ie,
            openQrDialog: s,
            copySecret: m,
            copyOtpUrl: w,
            formatSecret: J,
            formatCode: ae,
            getCodeGroups: re,
            handleCommand: _e,
            performReorder: de,
            handleResolveConflict: Se,
            restoreVault: be,
            handleIncrement: y,
            isIncrementing: D
        };
    }
    function wi(e) {
        const { listRef: t, columns: i, isMobile: l, isOffline: d, appViewMode: c, onReorder: R } = e, { t: O } = wn(), p = Z(null), T = q(()=>t.value.find((g)=>g.id === p.value)), A = Z({
            x: 0,
            y: 0
        }), b = Z({
            w: 0
        }), E = Z(null);
        let F = {
            x: 0,
            y: 0
        }, K = !1, P = null, se = 0, ee = 1, $ = {
            x: 0,
            y: 0
        };
        const U = q(()=>({
                left: `${A.value.x}px`,
                top: `${A.value.y}px`,
                width: `${b.value.w}px`
            }));
        let H = [];
        const j = (g, s)=>{
            const m = document.querySelector(".vault-scroller");
            if (!m) return;
            const w = m.getBoundingClientRect();
            if (g >= w.left && g <= w.right && s >= w.top && s <= w.bottom) {
                const J = s - w.top, ae = g - w.left, re = document.querySelector(".vue-recycle-scroller__item-view"), _e = re ? re.offsetHeight : c.value === "compact" ? 95 : 135, be = Math.floor(J / _e), Se = Math.floor(ae / (w.width / i.value));
                let u = be * i.value + Se;
                const k = t.value.length - 1;
                u > k && (u = k), u < 0 && (u = 0);
                const X = t.value[u]?.id;
                if (X && X !== p.value) {
                    const oe = [
                        ...t.value
                    ], a = oe.findIndex((v)=>v.id === p.value);
                    if (a !== -1 && a !== u) {
                        const [v] = oe.splice(a, 1);
                        oe.splice(u, 0, v), t.value = oe;
                    }
                }
            }
        }, W = (g)=>{
            if (se = g, P) return;
            ee = 1;
            const s = ()=>{
                if (!K) return Q();
                const m = se * ee;
                let w = document.getElementById("app") || document.documentElement;
                if (!l.value && w.scrollHeight <= w.clientHeight) {
                    const re = document.querySelector(".main-content");
                    re && (w = re);
                }
                const J = w.scrollTop;
                w.scrollTop += m;
                const ae = w.scrollTop;
                Math.abs(ae - J) < .1 && m !== 0 && w !== document.documentElement && (document.documentElement.scrollTop += m), ee < 4 && (ee += .03), j($.x, $.y), P = requestAnimationFrame(s);
            };
            P = requestAnimationFrame(s);
        }, Q = ()=>{
            P && (cancelAnimationFrame(P), P = null, ee = 1, se = 0);
        }, G = (g, s, m, w)=>{
            p.value = m, K = !0, $ = {
                x: g,
                y: s
            }, H = [
                ...t.value
            ];
            const J = w.getBoundingClientRect();
            if (F = {
                x: g - J.left,
                y: s - J.top
            }, b.value.w = J.width, A.value = {
                x: J.left,
                y: J.top
            }, l.value && "vibrate" in navigator) try {
                navigator.vibrate([
                    20
                ]);
            } catch  {}
            l.value && (document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", document.body.style.touchAction = "none"), window.getSelection()?.removeAllRanges(), document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none";
        }, de = (g, s)=>{
            if (!K) return;
            $ = {
                x: g,
                y: s
            }, A.value = {
                x: g - F.x,
                y: s - F.y
            };
            const m = 80;
            if (s < m) {
                const w = Math.max(-25, Math.floor((s - m) / 2.5));
                W(w);
            } else if (s > window.innerHeight - m) {
                const w = Math.min(25, Math.floor((s - (window.innerHeight - m)) / 2.5));
                W(w);
            } else Q();
            j(g, s);
        }, ie = ()=>{
            K && (Q(), R && R([
                ...t.value
            ], H), K = !1, p.value = null, document.body.style.overflow = "", document.documentElement.style.overflow = "", document.body.style.touchAction = "", document.body.style.userSelect = "", document.body.style.webkitUserSelect = "");
        };
        return {
            draggedId: p,
            draggedItem: T,
            floatingStyle: U,
            isPressing: E,
            handleMouseDown: (g, s)=>{
                if (g.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon")) return;
                const m = g.clientX, w = g.clientY, J = g.currentTarget;
                let ae = !1;
                const re = ()=>{
                    ae && ie(), window.removeEventListener("mousemove", _e), window.removeEventListener("mouseup", re);
                }, _e = (be)=>{
                    if (!ae && Math.sqrt(Math.pow(be.clientX - m, 2) + Math.pow(be.clientY - w, 2)) > 5) {
                        if (d.value) {
                            Ae.warning(O("vault.reorder_offline_disabled")), re();
                            return;
                        }
                        ae = !0, G(m, w, s, J);
                    }
                    ae && de(be.clientX, be.clientY);
                };
                window.addEventListener("mousemove", _e), window.addEventListener("mouseup", re);
            },
            handleTouchStart: (g, s)=>{
                if (g.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon, .code-display-area")) return;
                const m = g.touches[0], w = m.clientX, J = m.clientY, ae = g.currentTarget;
                E.value = s;
                let re = !1;
                const _e = setTimeout(()=>{
                    if (d.value) {
                        Ae.warning(O("vault.reorder_offline_disabled")), E.value = null;
                        return;
                    }
                    re = !0, E.value = null, G(w, J, s, ae);
                }, 250), be = (u)=>{
                    if (re) {
                        u.cancelable && u.preventDefault();
                        const k = u.touches[0];
                        de(k.clientX, k.clientY);
                    } else {
                        const k = u.touches[0];
                        (Math.abs(k.clientX - w) > 10 || Math.abs(k.clientY - J) > 10) && (clearTimeout(_e), E.value = null);
                    }
                }, Se = ()=>{
                    clearTimeout(_e), E.value = null, re && ie(), window.removeEventListener("touchmove", be), window.removeEventListener("touchend", Se), window.removeEventListener("touchcancel", Se);
                };
                window.addEventListener("touchmove", be, {
                    passive: !1
                }), window.addEventListener("touchend", Se), window.addEventListener("touchcancel", Se);
            },
            stopAutoScroll: Q
        };
    }
    let _i, bi, Si, ki, zi, $i, Ci, Ti, Mi, xi, Ri, Ii, Ei, Di, Ai, Oi, Vi, Li, Fi, Bi, Hi, Pi, Wi, Ui, Xi, Ni, Yi, qi, Ki, Qi, ji, Gi, Ji, Zi, eo, to, no, lo, io, oo;
    _i = {
        class: "vault-list-wrapper min-h-400"
    };
    bi = {
        key: 0,
        class: "offline-sync-banner px-16 py-8 mb-10"
    };
    Si = {
        class: "text-12"
    };
    ki = {
        class: "vault-content"
    };
    zi = {
        key: 0,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between px-16 py-12"
    };
    $i = {
        class: "batch-actions flex flex-items-center gap-10 flex-1"
    };
    Ci = {
        class: "batch-text"
    };
    Ti = {
        key: 1,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between flex-wrap"
    };
    Mi = {
        class: "flex flex-items-center gap-10 flex-1"
    };
    xi = {
        class: "batch-actions flex flex-items-center gap-10"
    };
    Ri = {
        class: "batch-text"
    };
    Ii = {
        key: 2,
        class: "category-filter-container"
    };
    Ei = {
        class: "category-chips"
    };
    Di = {
        class: "tag-count"
    };
    Ai = {
        key: 0,
        class: "tag-loading-track"
    };
    Oi = [
        "onClick"
    ];
    Vi = {
        class: "tag-count"
    };
    Li = {
        key: 0,
        class: "tag-loading-track"
    };
    Fi = {
        class: "tag-count"
    };
    Bi = {
        key: 0,
        class: "tag-loading-track"
    };
    Hi = {
        key: 0,
        class: "flex-column flex-center min-h-400 text-secondary"
    };
    Pi = {
        class: "text-16 ls-1"
    };
    Wi = {
        key: 2,
        class: "empty-state"
    };
    Ui = [
        "infinite-scroll-disabled"
    ];
    Xi = {
        key: 0,
        class: "text-center p-20 text-secondary"
    };
    Ni = {
        key: 1,
        class: "text-center p-20 text-secondary text-12"
    };
    Yi = {
        class: "dialog-footer"
    };
    qi = {
        key: 0,
        class: "qr-container"
    };
    Ki = {
        class: "qr-info"
    };
    Qi = {
        class: "qr-service"
    };
    ji = {
        class: "qr-account"
    };
    Gi = {
        class: "qr-image-wrapper"
    };
    Ji = [
        "src"
    ];
    Zi = {
        class: "qr-tip"
    };
    eo = {
        class: "secret-section"
    };
    to = {
        class: "secret-box"
    };
    no = {
        class: "secret-text"
    };
    lo = {
        class: "secret-actions"
    };
    io = {
        class: "uri-link-wrapper"
    };
    oo = {
        __name: "vaultList",
        emits: [
            "switch-tab"
        ],
        setup (e, { expose: t, emit: i }) {
            const l = yn(), { t: d } = wn(), c = Tt(), R = Yt(), O = hn(), p = Z(null), { serverVault: T, vault: A, searchQuery: b, selectedCategory: E, isLoading: F, isFetching: K, isFetchingNextPage: P, hasNextPage: se, absoluteTotalItems: ee, categoryStats: $, localCategoryStats: U, fetchVault: H, handleLoadMore: j, isLoadMoreDisabled: W } = Sl(p), { trashCount: Q, isFetchingTrash: G, fetchTrash: de, filteredTrash: ie } = _n(), D = q({
                get () {
                    return E.value === "____TRASH____" ? ie(b.value) : A.value;
                },
                set (o) {
                    E.value !== "____TRASH____" && (A.value = o);
                }
            }), y = ()=>{
                H(), c.isOffline || de();
            };
            we(()=>c.searchQuery, (o)=>{
                c.isMobile && (b.value = o);
            }), we([
                K,
                b
            ], ([o, f])=>{
                c.isLoadingSearching = o && !!f;
            });
            const { selectedIds: g, isBulkDeleting: s, toggleSelection: m, selectAllLoaded: w, handleBulkDelete: J, showEditDialog: ae, editVaultData: re, isEditing: _e, handleCommand: be, submitEditVault: Se, showQrDialog: u, currentQrItem: k, qrCodeUrl: X, showSecret: oe, formatSecret: a, copyCode: v, copySecret: M, copyOtpUrl: V, categoryOptions: ce, performReorder: B, handleResolveConflict: te, handleIncrement: xe, isIncrementing: ge } = yi(y, D, $, T), $e = [
                {
                    value: "card",
                    icon: Un
                },
                {
                    value: "compact",
                    icon: Xn
                }
            ], ke = Z(!1), Ce = {
                xs: 24,
                sm: 12,
                md: 8,
                lg: 6
            }, Ne = Z(typeof window < "u" ? window.innerWidth : 1200), vt = ()=>{
                Ne.value = window.innerWidth;
            };
            Je(()=>window.addEventListener("resize", vt)), ft(()=>window.removeEventListener("resize", vt));
            const rt = q(()=>c.isMobile ? 1 : Ne.value >= 1200 ? 4 : Ne.value >= 992 ? 3 : Ne.value >= 768 ? 2 : 1), Rt = q(()=>{
                const o = [], f = D.value, x = rt.value;
                for(let C = 0; C < f.length; C += x)o.push({
                    id: `row_${C}`,
                    items: f.slice(C, C + x)
                });
                return o;
            }), { draggedId: pt, draggedItem: Oe, floatingStyle: It, isPressing: Et, handleMouseDown: gt, handleTouchStart: Dt, stopAutoScroll: st } = wi({
                listRef: D,
                columns: rt,
                isMobile: q(()=>c.isMobile),
                isOffline: q(()=>R.isOffline),
                appViewMode: q(()=>c.appVaultViewMode),
                onReorder: (o, f)=>B(o, f)
            }), Ue = async ()=>{
                try {
                    if (O.isDirty) {
                        H();
                        return;
                    }
                    const o = await O.getData();
                    o && o.categoryStats && (U.value = o.categoryStats);
                } finally{
                    r.value = !1;
                }
            }, r = Z(!0);
            return Je(()=>{
                Ue();
            }), ft(()=>{
                st();
            }), t({
                fetchVault: H
            }), (o, f)=>{
                const x = mn, C = Xt, N = Hn, ne = Nn, he = Wn, Le = Yn, Te = qn, Ee = jn, Fe = Qn, ye = Jn, Ie = Zn, We = Gn, Ye = Kn;
                return z(), le("div", _i, [
                    h(pl, {
                        name: "el-zoom-in-top"
                    }, {
                        default: _(()=>[
                                n(l).hasPendingChanges ? (z(), le("div", bi, [
                                    h(x, {
                                        class: "mr-8"
                                    }, {
                                        default: _(()=>[
                                                h(n(vn))
                                            ]),
                                        _: 1
                                    }),
                                    I("span", Si, Y(o.$t("vault.offline_pending_sync", {
                                        count: n(l).syncQueue.length
                                    })), 1)
                                ])) : ve("", !0)
                            ]),
                        _: 1
                    }),
                    I("div", ki, [
                        h(Le, {
                            offset: n(c).isMobile ? 58 : 60,
                            disabled: n(c).isMobile && n(g).length === 0,
                            onChange: f[6] || (f[6] = (L)=>ke.value = L)
                        }, {
                            default: _(()=>[
                                    I("div", {
                                        class: Ke([
                                            "affix-container",
                                            {
                                                "is-affixed": ke.value
                                            }
                                        ])
                                    }, [
                                        n(c).isMobile && n(g).length > 0 ? (z(), le("div", zi, [
                                            I("div", $i, [
                                                I("span", Ci, Y(o.$t("search.selected_items", {
                                                    count: n(g).length
                                                })), 1),
                                                f[16] || (f[16] = I("div", {
                                                    class: "flex-1"
                                                }, null, -1)),
                                                h(C, {
                                                    size: "small",
                                                    onClick: n(w),
                                                    plain: "",
                                                    disabled: n(s)
                                                }, {
                                                    default: _(()=>[
                                                            Me(Y(o.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ]),
                                                h(C, {
                                                    type: "danger",
                                                    plain: "",
                                                    size: "small",
                                                    onClick: n(J),
                                                    loading: n(s)
                                                }, {
                                                    default: _(()=>[
                                                            h(x, null, {
                                                                default: _(()=>[
                                                                        h(n(nt))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "loading"
                                                ]),
                                                h(C, {
                                                    size: "small",
                                                    onClick: f[0] || (f[0] = (L)=>g.value = []),
                                                    plain: "",
                                                    disabled: n(s)
                                                }, {
                                                    default: _(()=>[
                                                            Me(Y(o.$t("common.cancel")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "disabled"
                                                ])
                                            ])
                                        ])) : ve("", !0),
                                        n(c).isMobile ? ve("", !0) : (z(), le("div", Ti, [
                                            I("div", Mi, [
                                                h(N, {
                                                    modelValue: n(b),
                                                    "onUpdate:modelValue": f[1] || (f[1] = (L)=>At(b) ? b.value = L : null),
                                                    placeholder: o.$t("search.placeholder"),
                                                    clearable: "",
                                                    class: "max-w-400"
                                                }, {
                                                    prefix: _(()=>[
                                                            n(K) && n(b) ? (z(), pe(x, {
                                                                key: 0,
                                                                class: "is-loading"
                                                            }, {
                                                                default: _(()=>[
                                                                        h(n(zt))
                                                                    ]),
                                                                _: 1
                                                            })) : (z(), pe(x, {
                                                                key: 1
                                                            }, {
                                                                default: _(()=>[
                                                                        h(n(Pn))
                                                                    ]),
                                                                _: 1
                                                            }))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "modelValue",
                                                    "placeholder"
                                                ])
                                            ]),
                                            I("div", xi, [
                                                n(g).length > 0 ? (z(), le(lt, {
                                                    key: 0
                                                }, [
                                                    I("span", Ri, Y(o.$t("search.selected_items", {
                                                        count: n(g).length
                                                    })), 1),
                                                    h(C, {
                                                        type: "danger",
                                                        plain: "",
                                                        onClick: n(J),
                                                        loading: n(s)
                                                    }, {
                                                        default: _(()=>[
                                                                h(x, null, {
                                                                    default: _(()=>[
                                                                            h(n(nt))
                                                                        ]),
                                                                    _: 1
                                                                }),
                                                                Me(" " + Y(o.$t("common.delete")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "onClick",
                                                        "loading"
                                                    ]),
                                                    h(C, {
                                                        onClick: f[2] || (f[2] = (L)=>g.value = []),
                                                        plain: "",
                                                        disabled: n(s)
                                                    }, {
                                                        default: _(()=>[
                                                                Me(Y(o.$t("common.cancel")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "disabled"
                                                    ])
                                                ], 64)) : (z(), pe(C, {
                                                    key: 1,
                                                    onClick: n(w),
                                                    plain: "",
                                                    disabled: n(s)
                                                }, {
                                                    default: _(()=>[
                                                            Me(Y(o.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ])),
                                                h(he, {
                                                    modelValue: n(c).appVaultViewMode,
                                                    "onUpdate:modelValue": f[3] || (f[3] = (L)=>n(c).appVaultViewMode = L),
                                                    class: "ml-10",
                                                    onChange: n(c).setVaultViewMode
                                                }, {
                                                    default: _(()=>[
                                                            (z(), le(lt, null, $t($e, (L)=>h(ne, {
                                                                    key: L.value,
                                                                    label: L.value
                                                                }, {
                                                                    default: _(()=>[
                                                                            h(x, {
                                                                                size: "16"
                                                                            }, {
                                                                                default: _(()=>[
                                                                                        (z(), pe(Mt(L.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "label"
                                                                ])), 64))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "modelValue",
                                                    "onChange"
                                                ])
                                            ])
                                        ])),
                                        !r.value && (!n(c).isMobile || !n(c).isSearchVisible) ? (z(), le("div", Ii, [
                                            I("div", Ei, [
                                                I("div", {
                                                    class: Ke([
                                                        "category-tag",
                                                        {
                                                            "is-active": n(E) === "",
                                                            "is-loading": n(K) && n(E) === "" && !n(P)
                                                        }
                                                    ]),
                                                    onClick: f[4] || (f[4] = (L)=>E.value = "")
                                                }, [
                                                    Me(Y(o.$t("common.all")) + " ", 1),
                                                    I("span", Di, "(" + Y(n(ee)) + ")", 1),
                                                    n(K) && n(E) === "" && !n(P) ? (z(), le("div", Ai, [
                                                        ...f[17] || (f[17] = [
                                                            I("div", {
                                                                class: "tag-loading-bar"
                                                            }, null, -1)
                                                        ])
                                                    ])) : ve("", !0)
                                                ], 2),
                                                (z(!0), le(lt, null, $t(n($), (L)=>(z(), le("div", {
                                                        key: L.id,
                                                        class: Ke([
                                                            "category-tag",
                                                            {
                                                                "is-active": n(E) === L.id,
                                                                "is-loading": n(K) && n(E) === L.id && !n(P)
                                                            }
                                                        ]),
                                                        onClick: (Be)=>E.value = L.id
                                                    }, [
                                                        Me(Y(L.category || o.$t("common.uncategorized")) + " ", 1),
                                                        I("span", Vi, "(" + Y(L.count) + ")", 1),
                                                        n(K) && n(E) === L.id && !n(P) ? (z(), le("div", Li, [
                                                            ...f[18] || (f[18] = [
                                                                I("div", {
                                                                    class: "tag-loading-bar"
                                                                }, null, -1)
                                                            ])
                                                        ])) : ve("", !0)
                                                    ], 10, Oi))), 128)),
                                                n(c).appTrashMode && (n(Q) > 0 || n(E) === "____TRASH____") ? (z(), le("div", {
                                                    key: 0,
                                                    class: Ke([
                                                        "category-tag trash-tag",
                                                        {
                                                            "is-active": n(E) === "____TRASH____",
                                                            "is-loading": n(K) && n(E) === "____TRASH____" && !n(P)
                                                        }
                                                    ]),
                                                    onClick: f[5] || (f[5] = (L)=>E.value = "____TRASH____")
                                                }, [
                                                    h(x, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: _(()=>[
                                                                h(n(nt))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    Me(" " + Y(o.$t("vault.trash")) + " ", 1),
                                                    I("span", Fi, "(" + Y(n(Q)) + ")", 1),
                                                    n(G) && n(E) === "____TRASH____" ? (z(), le("div", Bi, [
                                                        ...f[19] || (f[19] = [
                                                            I("div", {
                                                                class: "tag-loading-bar bg-danger"
                                                            }, null, -1)
                                                        ])
                                                    ])) : ve("", !0)
                                                ], 2)) : ve("", !0)
                                            ])
                                        ])) : ve("", !0)
                                    ], 2)
                                ]),
                            _: 1
                        }, 8, [
                            "offset",
                            "disabled"
                        ]),
                        r.value || (n(F) || n(G) && n(E) === "____TRASH____") && D.value.length === 0 ? (z(), le("div", Hi, [
                            h(x, {
                                class: "is-loading mb-20 text-primary",
                                size: 48
                            }, {
                                default: _(()=>[
                                        h(n(zt))
                                    ]),
                                _: 1
                            }),
                            I("p", Pi, Y(o.$t("common.loading_data")), 1)
                        ])) : n(O).hasDecryptionError ? (z(), pe(bl, {
                            key: 1
                        })) : !(n(F) || n(G) && n(E) === "____TRASH____") && !n(K) && D.value.length === 0 && !n(b) ? (z(), le("div", Wi, [
                            n(E) === "____TRASH____" ? (z(), pe(Te, {
                                key: 0,
                                description: o.$t("security.trash_already_empty")
                            }, null, 8, [
                                "description"
                            ])) : (z(), pe(Te, {
                                key: 1,
                                description: o.$t("vault.empty_vault")
                            }, {
                                default: _(()=>[
                                        h(C, {
                                            type: "primary",
                                            onClick: f[7] || (f[7] = (L)=>o.$emit("switch-tab", "add-vault"))
                                        }, {
                                            default: _(()=>[
                                                    Me(Y(o.$t("vault.go_add_vault")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                _: 1
                            }, 8, [
                                "description"
                            ]))
                        ])) : Nt((z(), le("div", {
                            key: 3,
                            class: "list-container min-h-200",
                            "infinite-scroll-disabled": n(W),
                            "infinite-scroll-distance": 300
                        }, [
                            h(n(Yl), {
                                class: "vault-scroller",
                                items: Rt.value,
                                "min-item-size": 80,
                                "key-field": "id",
                                "page-mode": ""
                            }, {
                                default: _(({ item: L, index: Be, active: ze })=>[
                                        h(n(Kl), {
                                            item: L,
                                            active: ze,
                                            "size-dependencies": [
                                                L.items
                                            ],
                                            "data-index": Be
                                        }, {
                                            default: _(()=>[
                                                    h(Fe, {
                                                        gutter: 20
                                                    }, {
                                                        default: _(()=>[
                                                                (z(!0), le(lt, null, $t(L.items, (fe, Qe)=>(z(), pe(Ee, Ct({
                                                                        key: Qe
                                                                    }, {
                                                                        ref_for: !0
                                                                    }, Ce, {
                                                                        class: [
                                                                            n(c).appVaultViewMode === "compact" ? "mb-15" : "mb-20"
                                                                        ],
                                                                        "data-id": fe.id
                                                                    }), {
                                                                        default: _(()=>[
                                                                                h(fn, {
                                                                                    item: fe,
                                                                                    "is-selected": n(g).includes(fe.id),
                                                                                    "is-dragging": n(pt) === fe.id,
                                                                                    "is-pressing": n(Et) === fe.id,
                                                                                    "is-compact": n(c).appVaultViewMode === "compact",
                                                                                    "is-pending": n(l).isItemPending(fe.id) || fe.pending,
                                                                                    "is-mobile": n(c).isMobile,
                                                                                    "is-incrementing": n(ge),
                                                                                    onToggleSelection: n(m),
                                                                                    onCommand: n(be),
                                                                                    onIncrement: n(xe),
                                                                                    onCopyCode: n(v),
                                                                                    onResolveConflict: n(te),
                                                                                    onMousedown: (Ve)=>n(gt)(Ve, fe.id),
                                                                                    onTouchstart: (Ve)=>n(Dt)(Ve, fe.id)
                                                                                }, null, 8, [
                                                                                    "item",
                                                                                    "is-selected",
                                                                                    "is-dragging",
                                                                                    "is-pressing",
                                                                                    "is-compact",
                                                                                    "is-pending",
                                                                                    "is-mobile",
                                                                                    "is-incrementing",
                                                                                    "onToggleSelection",
                                                                                    "onCommand",
                                                                                    "onIncrement",
                                                                                    "onCopyCode",
                                                                                    "onResolveConflict",
                                                                                    "onMousedown",
                                                                                    "onTouchstart"
                                                                                ])
                                                                            ]),
                                                                        _: 2
                                                                    }, 1040, [
                                                                        "class",
                                                                        "data-id"
                                                                    ]))), 128))
                                                            ]),
                                                        _: 2
                                                    }, 1024)
                                                ]),
                                            _: 2
                                        }, 1032, [
                                            "item",
                                            "active",
                                            "size-dependencies",
                                            "data-index"
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "items"
                            ]),
                            (z(), pe(gl, {
                                to: "body"
                            }, [
                                n(pt) && n(Oe) ? (z(), le("div", {
                                    key: 0,
                                    class: "drag-floating-card",
                                    style: ot(n(It))
                                }, [
                                    h(fn, {
                                        style: {
                                            "pointer-events": "none"
                                        },
                                        item: n(Oe),
                                        "is-compact": n(c).appVaultViewMode === "compact",
                                        "is-dragging": !1,
                                        "is-incrementing": n(ge)
                                    }, null, 8, [
                                        "item",
                                        "is-compact",
                                        "is-incrementing"
                                    ])
                                ], 4)) : ve("", !0)
                            ])),
                            n(P) ? (z(), le("div", Xi, [
                                h(x, {
                                    class: "is-loading"
                                }, {
                                    default: _(()=>[
                                            h(n(zt))
                                        ]),
                                    _: 1
                                }),
                                Me(" " + Y(o.$t("vault.loading_more")), 1)
                            ])) : ve("", !0),
                            !n(se) && D.value.length > 0 ? (z(), le("div", Ni, Y(o.$t("vault.no_more_accounts")), 1)) : ve("", !0),
                            !(n(F) || n(G) && n(E) === "____TRASH____") && D.value.length === 0 && n(b) ? (z(), pe(Te, {
                                key: 2,
                                description: o.$t("search.no_matching_accounts")
                            }, null, 8, [
                                "description"
                            ])) : ve("", !0)
                        ], 8, Ui)), [
                            [
                                Ye,
                                n(j)
                            ]
                        ])
                    ]),
                    h(ln, {
                        modelValue: n(ae),
                        "onUpdate:modelValue": f[12] || (f[12] = (L)=>At(ae) ? ae.value = L : null),
                        title: o.$t("vault.edit_account"),
                        width: "400px"
                    }, {
                        footer: _(()=>[
                                I("span", Yi, [
                                    h(C, {
                                        onClick: f[11] || (f[11] = (L)=>ae.value = !1)
                                    }, {
                                        default: _(()=>[
                                                Me(Y(o.$t("common.cancel")), 1)
                                            ]),
                                        _: 1
                                    }),
                                    h(C, {
                                        type: "primary",
                                        loading: n(_e),
                                        onClick: n(Se)
                                    }, {
                                        default: _(()=>[
                                                Me(Y(o.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "loading",
                                        "onClick"
                                    ])
                                ])
                            ]),
                        default: _(()=>[
                                h(We, {
                                    model: n(re),
                                    "label-position": "top"
                                }, {
                                    default: _(()=>[
                                            h(ye, {
                                                label: o.$t("vault.service_name")
                                            }, {
                                                default: _(()=>[
                                                        h(N, {
                                                            modelValue: n(re).service,
                                                            "onUpdate:modelValue": f[8] || (f[8] = (L)=>n(re).service = L)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            h(ye, {
                                                label: o.$t("vault.account_identifier")
                                            }, {
                                                default: _(()=>[
                                                        h(N, {
                                                            modelValue: n(re).account,
                                                            "onUpdate:modelValue": f[9] || (f[9] = (L)=>n(re).account = L)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            h(ye, {
                                                label: o.$t("vault.category_optional")
                                            }, {
                                                default: _(()=>[
                                                        h(Ie, {
                                                            modelValue: n(re).category,
                                                            "onUpdate:modelValue": f[10] || (f[10] = (L)=>n(re).category = L),
                                                            "fetch-suggestions": (L, Be)=>Be(n(ce).filter((ze)=>ze.toLowerCase().includes(L.toLowerCase())).map((ze)=>({
                                                                        value: ze
                                                                    }))),
                                                            placeholder: o.$t("vault.category_optional"),
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            clearable: "",
                                                            teleported: !1
                                                        }, null, 8, [
                                                            "modelValue",
                                                            "fetch-suggestions",
                                                            "placeholder"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ])
                                        ]),
                                    _: 1
                                }, 8, [
                                    "model"
                                ])
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title"
                    ]),
                    h(ln, {
                        modelValue: n(u),
                        "onUpdate:modelValue": f[14] || (f[14] = (L)=>At(u) ? u.value = L : null),
                        title: o.$t("vault.export_account"),
                        width: "350px",
                        onClosed: f[15] || (f[15] = (L)=>oe.value = !1)
                    }, {
                        default: _(()=>[
                                n(k) ? (z(), le("div", qi, [
                                    I("div", Ki, [
                                        I("h3", Qi, Y(n(k).service), 1),
                                        I("p", ji, Y(n(k).account), 1)
                                    ]),
                                    I("div", Gi, [
                                        I("img", {
                                            src: n(X),
                                            class: "qr-code-img"
                                        }, null, 8, Ji)
                                    ]),
                                    I("p", Zi, Y(o.$t("vault.export_qr_tip")), 1),
                                    I("div", eo, [
                                        I("div", to, [
                                            I("div", no, Y(n(oe) ? n(a)(n(k).secret) : "•••• •••• •••• ••••"), 1),
                                            I("div", lo, [
                                                h(x, {
                                                    class: "action-icon",
                                                    onClick: f[13] || (f[13] = (L)=>oe.value = !n(oe))
                                                }, {
                                                    default: _(()=>[
                                                            n(oe) ? (z(), pe(n(tl), {
                                                                key: 1
                                                            })) : (z(), pe(n(el), {
                                                                key: 0
                                                            }))
                                                        ]),
                                                    _: 1
                                                }),
                                                h(x, {
                                                    class: "action-icon",
                                                    onClick: n(M)
                                                }, {
                                                    default: _(()=>[
                                                            h(n(nl))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick"
                                                ])
                                            ])
                                        ])
                                    ]),
                                    I("div", io, [
                                        h(C, {
                                            link: "",
                                            type: "primary",
                                            class: "otp-url-btn",
                                            onClick: n(V)
                                        }, {
                                            default: _(()=>[
                                                    h(x, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: _(()=>[
                                                                h(n(ll))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    Me(" " + Y(o.$t("vault.copy_otp_url")), 1)
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "onClick"
                                        ])
                                    ])
                                ])) : ve("", !0)
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title"
                    ])
                ]);
            };
        }
    };
    bo = gn(oo, [
        [
            "__scopeId",
            "data-v-f55de1d2"
        ]
    ]);
});
export { bo as default, __tla };
