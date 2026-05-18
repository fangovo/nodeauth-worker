const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdGzjhVj.js","assets/pdf-utils-BctPkPeG.js","assets/compression-utils-BzBbrBKd.js","assets/vue-core-DHcoxuim.js","assets/element-plus-BHS6vjDl.js","assets/element-plus-CqJ-3YyC.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-DV2JH8XC.js","assets/index-BSpd7Htm.css"])))=>i.map(i=>d[i]);
import { e as Xt, h as In, W as En, X as An, u as mn, aU as vn, a$ as Dn, o as On, aE as Vn, q as Ln, p as Fn, aF as Gt, aK as _t, aj as Jt, ag as lt, H as Bn, ay as zt, g as Hn, C as De, D as Zt, w as Pn, aL as Wn, K as Un, ar as Xn, al as Nn, J as Yn, E as qn, r as Kn, v as Qn, N as jn, j as Gn, s as Jn, t as Zn, c as el, aY as tl, as as nl, af as ll, ax as il } from "./element-plus-BHS6vjDl.js";
import { u as mt, a6 as k, j as he, aF as w, ad as Pe, ag as Mt, aa as P, o as ol, X as sl, z as al, U as Ct, at as n, G as en, a2 as Ze, aD as _e, ar as b, $ as xt, a8 as rl, V as dt, Z as pn, a1 as cl, a4 as ft, aG as Rt, l as J, k as ve, F as Ge, ac as $t, an as ul, W as Je, Y as ot, r as h, g as te, w as dl, aj as bt, S as fl, ah as ml, a7 as ct, v as vl, aB as gn, al as X, i as E, q as $e, aI as je, b as pl, O as Ot, T as gl } from "./vue-core-DHcoxuim.js";
import { _ as hn, M as Tt, N as Nt, P as hl, t as tn, H as yl, G as wl, Q as yn, v as _l, x as St, R as wn, L as _n, __tla as __tla_0 } from "./index-DdGzjhVj.js";
import { g as Vt, u as bn, v as nt, t as ut, b as nn, __tla as __tla_1 } from "./vaultService-DfQvqT_Y.js";
import { _ as ln } from "./responsiveOverlay-C-iA6tP-.js";
import { u as bl } from "./useVaultList-xTfpA7tD.js";
import { _ as on, __tla as __tla_2 } from "./pdf-utils-BctPkPeG.js";
import { Q as Sl } from "./qr-utils-7t4IiZrV.js";
import { c as Lt } from "./common-B_buoqut.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-DV2JH8XC.js";
import "./compression-utils-BzBbrBKd.js";
import { __tla as __tla_3 } from "./resourceRegistry-dKLlK7jI.js";
let _o;
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
    function kl(e) {
        return {
            all: e = e || new Map,
            on: function(t, o) {
                var l = e.get(t);
                l && l.push(o) || e.set(t, [
                    o
                ]);
            },
            off: function(t, o) {
                var l = e.get(t);
                l && l.splice(l.indexOf(o) >>> 0, 1);
            },
            emit: function(t, o) {
                (e.get(t) || []).slice().map(function(l) {
                    l(o);
                }), (e.get("*") || []).slice().map(function(l) {
                    l(t, o);
                });
            }
        };
    }
    function Yt(e, t, o) {
        if (!o) return t;
        const l = e?.[o];
        if (l == null) throw new Error(`Key is ${l} on item (keyField is '${o}')`);
        return l;
    }
    function it(e, t) {
        return e.map((o, l)=>Yt(o, l, t));
    }
    function zl(e, t, o) {
        const l = [], u = [];
        for(let d = 0; d < e.length; d++){
            const I = e[d], L = Yt(I, d, t), g = o(I, d, L);
            l.push(L), u.push(typeof g == "number" && g > 0 ? g : null);
        }
        return {
            keys: l,
            sizes: u
        };
    }
    function $l(e, t, o) {
        if (!e || e.keys.length !== t.length || e.sizes.length !== t.length) return !1;
        for(let l = 0; l < t.length; l++)if (e.keys[l] !== Yt(t[l], l, o)) return !1;
        return !0;
    }
    function Pt(e, t, o) {
        if (!$l(e, t, o)) return {};
        const l = {};
        for(let u = 0; u < e.keys.length; u++){
            const d = e.sizes[u];
            typeof d == "number" && d > 0 && (l[e.keys[u]] = d);
        }
        return l;
    }
    function Sn(e, t) {
        if (!e.length || t.length <= e.length) return 0;
        const o = e[0], l = t.indexOf(o);
        if (l <= 0 || l + e.length < t.length && e.length > t.length - l) return 0;
        for(let u = 0; u < e.length; u++)if (t[l + u] !== e[u]) return 0;
        return l;
    }
    function sn(e, t, o, l, u, d = 0) {
        const I = u ?? "start";
        if (I === "nearest") {
            const L = o + l, g = e + t;
            return e >= o && g <= L ? null : e < o ? e + d : g - l + d;
        }
        return I === "end" ? e + t - l + d : I === "center" ? e + (t - l) / 2 + d : e + d;
    }
    function kn(e, t, o, l) {
        let u = null, d = null, I = null, L = !1, g = null;
        const _ = [], j = o.resizeObserver ? ()=>{} : o.onVscrollUpdate(ne), S = te(()=>{
            const i = b(e);
            if (o.vscrollData.simpleArray) {
                if (i.index == null) throw new Error("index is required when using simple-array mode with dynamic item measurement");
                return i.index;
            }
            if (o.vscrollData.keyField in i.item) return i.item[o.vscrollData.keyField];
            throw new Error(`keyField '${o.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
        }), A = te(()=>o.vscrollData.sizes[S.value] || 0), T = te(()=>b(e).active && o.vscrollData.active);
        function W() {
            T.value ? d !== S.value && (d = S.value, u = null, I = null, Y(S.value)) : u = S.value;
        }
        function N() {
            b(e).watchData && !o.resizeObserver ? g = _e(()=>b(e).item, ()=>{
                K();
            }, {
                deep: !0
            }) : g && (g(), g = null);
        }
        function ne({ force: i }) {
            !T.value && i && (I = S.value), (u === S.value || i || !A.value) && W();
        }
        function K() {
            W();
        }
        function z(i) {
            o.undefinedMap[i] && o.undefinedSizeCount.value--, o.undefinedMap[i] = void 0;
        }
        function B(i, a) {
            if (o.vscrollData.sizes[i]) {
                z(i);
                return;
            }
            if (a) {
                o.undefinedMap[i] || o.undefinedSizeCount.value++, o.undefinedMap[i] = !0;
                return;
            }
            o.undefinedMap[i] && (o.undefinedSizeCount.value--, o.undefinedMap[i] = !1);
        }
        function Y(i) {
            dt(()=>{
                if (S.value === i) {
                    const a = b(t);
                    if (!a) return;
                    const m = a.offsetWidth, D = a.offsetHeight;
                    le(m, D);
                }
                d = null;
            });
        }
        function le(i, a) {
            const m = ~~(o.direction.value === "vertical" ? a : i);
            m && A.value !== m && H(m);
        }
        function H(i) {
            var a, m;
            z(S.value), o.vscrollData.sizes[S.value] = i, b(e).emitResize && ((m = (a = b(l)) == null ? void 0 : a.onResize) == null || m.call(a, S.value));
        }
        function q() {
            if (!o.resizeObserver || L) return;
            const i = b(t);
            i && (o.resizeObserver.observe(i), i.$_vs_id = S.value, i.$_vs_onResize = ue, L = !0);
        }
        function Q() {
            if (!o.resizeObserver || !L) return;
            const i = b(t);
            i && (o.resizeObserver.unobserve(i), i.$_vs_onResize = void 0, L = !1);
        }
        function ue(i, a, m) {
            S.value === i && le(a, m);
        }
        _.push(_e(()=>b(e).watchData, ()=>{
            N();
        })), o.resizeObserver || _.push(_e(()=>b(e).sizeDependencies, ()=>{
            K();
        }, {
            deep: !0
        })), _.push(_e(S, (i, a)=>{
            const m = b(t);
            m && (m.$_vs_id = i), z(a), B(i, T.value);
            const D = o.vscrollData.sizes[i];
            if (!D) {
                u = i, K();
                return;
            }
            z(i), L && (o.vscrollData.sizes[i] = D);
        })), _.push(_e(T, (i)=>{
            B(S.value, i), o.resizeObserver ? i ? q() : Q() : i && I === S.value && W();
        })), N();
        function ie() {
            T.value && (W(), q());
        }
        function M() {
            j(), Q(), z(S.value);
            const i = b(t);
            i && (i.$_vs_id = void 0, i.$_vs_onResize = void 0), g && (g(), g = null);
            for (const a of _)a();
            _.length = 0;
        }
        return {
            id: S,
            size: A,
            finalActive: T,
            updateSize: W,
            mount: ie,
            unmount: M
        };
    }
    const Cl = {
        itemsLimit: 1e3
    };
    function zn(e) {
        return typeof window < "u" && e === window;
    }
    const Tl = (()=>{
        if (typeof document > "u") return "negative";
        const e = document.createElement("div"), t = document.createElement("div");
        e.style.width = "4px", e.style.height = "1px", e.style.overflow = "auto", e.style.direction = "rtl", t.style.width = "8px", t.style.height = "1px", e.appendChild(t), document.body.appendChild(e), e.scrollLeft = -1;
        const o = e.scrollLeft < 0;
        return document.body.removeChild(e), o ? "negative" : "default";
    })();
    function at(e, t, o) {
        return t !== "horizontal" || !o || zn(o) || getComputedStyle(o).direction !== "rtl" ? e : Tl === "negative" ? -e : e;
    }
    function Ml(e, t, o) {
        return at(e, t, o);
    }
    function Ft(e, t, o, l) {
        const u = Ml(o, t, e), d = !!(l != null && l.smooth);
        if (zn(e)) {
            t === "vertical" ? e.scrollTo({
                top: u,
                behavior: d ? "smooth" : "auto"
            }) : e.scrollTo({
                left: u,
                behavior: d ? "smooth" : "auto"
            });
            return;
        }
        if (typeof e.scrollTo == "function") {
            e.scrollTo(t === "vertical" ? {
                top: u,
                behavior: d ? "smooth" : "auto"
            } : {
                left: u,
                behavior: d ? "smooth" : "auto"
            });
            return;
        }
        t === "vertical" ? e.scrollTop = u : e.scrollLeft = u;
    }
    function xl(e, t, o) {
        return o ? t === "vertical" ? window.innerHeight : window.innerWidth : t === "vertical" ? e.clientHeight : e.clientWidth;
    }
    const Rl = /auto|scroll/;
    function $n(e, t) {
        return e.parentNode === null ? t : $n(e.parentNode, [
            ...t,
            e
        ]);
    }
    function Bt(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
    }
    function Il(e) {
        return Bt(e, "overflow") + Bt(e, "overflow-y") + Bt(e, "overflow-x");
    }
    function El(e) {
        return Rl.test(Il(e));
    }
    function kt(e) {
        if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
        const t = $n(e.parentNode, []);
        for(let o = 0; o < t.length; o += 1)if (t[o] instanceof Element && El(t[o])) return t[o];
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
    let Dl = 0;
    function Ht(e) {
        const t = e;
        t._vs_styleStamp++;
    }
    function Ol(e, t, o) {
        const l = e?.[o];
        if (l == null) throw new Error(`Key is ${l} on item (keyField is '${o}')`);
        return l;
    }
    function Cn(e, t, o, l, u) {
        const d = P([]), I = P(0), L = P(!1);
        let g = 0, _ = 0;
        const j = new Map, S = new Map;
        let A = !1, T = 0, W = 0, N = !1, ne = null, K = null, z = null, B = 0, Y = null, le = [], H = null, q = null, Q = null, ue = !1;
        const ie = new Set, M = P({}), i = te(()=>{
            const c = b(e);
            return c.items.length > 0 && typeof c.items[0] != "object";
        }), a = te(()=>{
            const c = b(e);
            if (c.itemSize === null) {
                const s = {
                    [-1]: {
                        accumulator: 0
                    }
                }, v = c.items, R = c.sizeField ?? "size", $ = c.minItemSize, U = M.value;
                let ee = 1e4, ge = 0, Le;
                for(let Me = 0, Ee = v.length; Me < Ee; Me++){
                    const Fe = i.value ? Me : Ol(v[Me], Me, c.keyField);
                    Le = U[Fe] || v[Me][R] || $, Le < ee && (ee = Le), ge += Le, s[Me] = {
                        accumulator: ge,
                        size: Le
                    };
                }
                return B = ee, s;
            }
            return [];
        }), m = te(()=>d.value.filter((c)=>c.nr.used).sort((c, s)=>c.nr.index - s.nr.index)), D = te(()=>{
            const c = b(e), s = i.value ? null : c.keyField;
            return zl(c.items, s, (v, R, $)=>c.itemSize != null ? c.itemSize : M.value[$] || v?.[c.sizeField ?? "size"] || void 0);
        });
        function x(c) {
            const s = b(e);
            return M.value = Pt(c, s.items, i.value ? null : s.keyField), Object.keys(M.value).length > 0;
        }
        function oe(c) {
            let s = S.get(c);
            return s || (s = [], S.set(c, s)), s;
        }
        function re(c, s, v, R, $) {
            const U = fl({
                id: Dl++,
                index: s,
                used: !0,
                key: R,
                type: $
            }), ee = ml({
                item: v,
                position: 0,
                offset: 0,
                nr: U,
                _vs_styleStamp: 0
            });
            return c.push(ee), ee;
        }
        function se(c) {
            const s = oe(c);
            if (s && s.length) {
                const v = s.pop();
                return v.nr.used = !0, Ht(v), v;
            }
        }
        function Ce(c) {
            const s = c.nr.type;
            oe(s).push(c), c.nr.used = !1, c.position = -9999, Ht(c), j.delete(c.nr.key);
        }
        function fe() {
            j.clear(), S.clear();
            for(let c = 0, s = d.value.length; c < s; c++){
                const v = d.value[c];
                v && Ce(v);
            }
        }
        function be(c) {
            let s = -1;
            return s = requestAnimationFrame(()=>{
                ie.delete(s), c();
            }), ie.add(s), s;
        }
        function f() {
            for (const c of ie)cancelAnimationFrame(c);
            ie.clear();
        }
        function y() {
            ne && (clearTimeout(ne), ne = null), K && (clearTimeout(K), K = null), z && (clearTimeout(z), z = null), q && (clearTimeout(q), q = null), Q && (clearTimeout(Q), Q = null);
        }
        function G() {
            var c;
            (c = u?.onResize) == null || c.call(u), L.value && Oe(!1);
        }
        function ye() {
            H && !ue && pe();
            const c = b(e);
            if (!A) {
                if (A = !0, ne) return;
                const s = ()=>be(()=>{
                        A = !1;
                        const { continuous: v } = Oe(!1, !0);
                        v || (K && clearTimeout(K), K = setTimeout(ye, c.updateInterval + 100));
                    });
                s(), c.updateInterval && (ne = setTimeout(()=>{
                    ne = null, A && s();
                }, c.updateInterval));
            }
        }
        function r(c, s) {
            var v, R;
            L.value && (c || s.boundingClientRect.width !== 0 || s.boundingClientRect.height !== 0 ? ((v = u?.onVisible) == null || v.call(u), be(()=>{
                Oe(!1);
            })) : (R = u?.onHidden) == null || R.call(u));
        }
        function p() {
            const c = b(t), s = c ? kt(c) : void 0;
            return window.document && (s === window.document.documentElement || s === window.document.body) ? window : s || window;
        }
        function C() {
            const c = b(o);
            return c ? b(e).direction === "vertical" ? c.scrollHeight : c.scrollWidth : 0;
        }
        function O() {
            const c = b(t);
            if (!c) return {
                start: 0,
                end: 0
            };
            const s = b(e), v = s.direction === "vertical";
            let R;
            if (s.pageMode) {
                const $ = c.getBoundingClientRect(), U = v ? $.height : $.width;
                let ee = -(v ? $.top : $.left), ge = v ? window.innerHeight : window.innerWidth;
                ee < 0 && (ge += ee, ee = 0), ee + ge > U && (ge = U - ee), R = {
                    start: ee,
                    end: ee + ge
                };
            } else v ? R = {
                start: c.scrollTop,
                end: c.scrollTop + c.clientHeight
            } : R = {
                start: at(c.scrollLeft, s.direction, c),
                end: at(c.scrollLeft, s.direction, c) + c.clientWidth
            };
            return R;
        }
        function ae() {
            const c = b(t);
            if (!c) return {
                start: 0,
                end: 0
            };
            if (b(e).direction === "vertical") {
                const s = at(c.scrollLeft, "horizontal", c);
                return {
                    start: s,
                    end: s + c.clientWidth
                };
            }
            return {
                start: c.scrollTop,
                end: c.scrollTop + c.clientHeight
            };
        }
        function F(c) {
            const s = b(e);
            if (s.itemSize != null) return s.itemSize;
            const v = a.value[c];
            return v?.size || Number(s.minItemSize) || 0;
        }
        function Z(c) {
            var s;
            const v = b(e), R = v.gridItems || 1;
            return c <= 0 ? 0 : v.itemSize != null ? Math.floor(c / R) * v.itemSize : ((s = a.value[c - 1]) == null ? void 0 : s.accumulator) || 0;
        }
        function xe(c) {
            const s = b(e), v = s.items.length, R = s.gridItems || 1;
            if (!v) return 0;
            if (s.itemSize != null) {
                const ge = Math.floor(c / s.itemSize) * R;
                return Math.min(Math.max(ge, 0), v - 1);
            }
            let $ = 0, U = v - 1, ee = 0;
            for(; $ <= U;){
                const ge = Math.floor(($ + U) / 2);
                Z(ge) <= c ? (ee = ge, $ = ge + 1) : U = ge - 1;
            }
            return ee;
        }
        function pe() {
            q && (clearTimeout(q), q = null), H = null;
        }
        function ze() {
            q && clearTimeout(q), q = setTimeout(()=>{
                H = null, q = null;
            }, 150);
        }
        function Se(c, s) {
            if (!c.length) {
                pe();
                return;
            }
            const v = Math.max(O().start - C(), 0), R = Math.min(xe(v), c.length - 1), $ = c[R], U = s ? $?.[s] : R;
            if (U == null) {
                pe();
                return;
            }
            const ee = C() + Z(R);
            H = {
                key: U,
                offset: O().start - ee
            };
        }
        function Te(c) {
            if (!H) return !1;
            const s = b(e), v = c ?? s.items, R = i.value ? null : s.keyField, $ = it(v, R).indexOf(H.key);
            if ($ === -1) return pe(), !1;
            const U = C() + Z($) + H.offset, ee = O().start;
            return Math.abs(U - ee) < .5 ? !1 : (ue = !0, st(U), be(()=>{
                ue = !1;
            }), !0);
        }
        function Ne() {
            b(e).pageMode ? vt() : rt();
        }
        function vt() {
            Y = p(), Y.addEventListener("scroll", ye, Al() ? {
                passive: !0
            } : !1), Y.addEventListener("resize", G);
        }
        function rt() {
            Y && (Y.removeEventListener("scroll", ye), Y.removeEventListener("resize", G), Y = null);
        }
        function It(c, s, v, R, $, U) {
            const ee = Math.ceil(c / s) * v, ge = Math.max(0, Math.floor($.start / v)), Le = Math.min(Math.ceil($.end / v), Math.ceil(c / s)), Me = Math.max(0, Math.floor(U.start / R)), Ee = Math.min(Math.ceil(U.end / R), s), Fe = [];
            for(let We = ge; We < Le; We++){
                const Ye = We * s;
                for(let V = Me; V < Ee; V++){
                    const Be = Ye + V;
                    if (Be >= c) break;
                    Fe.push(Be);
                }
            }
            const we = Fe[0] ?? 0, Ie = Fe.at(-1) ?? -1;
            return {
                renderedIndices: Fe,
                startIndex: we,
                endIndex: Ie + 1,
                visibleStartIndex: we,
                visibleEndIndex: Ie,
                totalSize: ee
            };
        }
        function pt() {
            const c = b(e);
            if (!c.gridItems || c.itemSize == null) return !1;
            const s = b(t);
            if (!s) return !1;
            const v = c.itemSecondarySize || c.itemSize, R = c.direction === "vertical" ? s.clientWidth : s.clientHeight;
            return v * c.gridItems > R;
        }
        function Oe(c, s = !1) {
            var v, R;
            const $ = b(e), U = $.itemSize, ee = $.gridItems || 1, ge = $.itemSecondarySize || U, Le = B, Me = $.typeField, Ee = i.value ? null : $.keyField, Fe = $.items, we = Fe.length, Ie = a.value, We = j, Ye = d.value;
            let V = null, Be = null, ke, de, Ke, Ve, Xe;
            if (!we) ke = de = Ve = Xe = Ke = 0;
            else if (N) ke = Ve = 0, de = Xe = Math.min($.prerender, Fe.length), Ke = 0;
            else {
                const ce = O(), Ae = ae();
                if (s) {
                    let Re = ce.start - T;
                    Re < 0 && (Re = -Re);
                    let tt = Ae.start - W;
                    tt < 0 && (tt = -tt);
                    const wt = U === null && Re >= Le || U !== null && Re >= U, He = ee > 1 && U != null && tt >= ge;
                    if (!wt && !He) return {
                        continuous: !0
                    };
                }
                T = ce.start, W = Ae.start;
                const qe = $.buffer;
                ce.start -= qe, ce.end += qe, Ae.start -= qe, Ae.end += qe;
                let Qe = 0;
                const yt = b(o);
                yt && (Qe = yt.scrollHeight, ce.start -= Qe);
                const Qt = b(l);
                if (Qt) {
                    const Re = Qt.scrollHeight;
                    ce.end += Re;
                }
                if (U === null) {
                    let Re, tt = 0, wt = we - 1, He = ~~(we / 2), jt;
                    do jt = He, Re = Ie[He].accumulator, Re < ce.start ? tt = He : He < we - 1 && Ie[He + 1].accumulator > ce.start && (wt = He), He = ~~((tt + wt) / 2);
                    while (He !== jt);
                    for(He < 0 && (He = 0), ke = He, Ke = Ie[we - 1].accumulator, de = He; de < we && Ie[de].accumulator < ce.end; de++);
                    for(de === -1 ? de = Fe.length - 1 : (de++, de > we && (de = we)), Ve = ke; Ve < we && Qe + Ie[Ve].accumulator < ce.start; Ve++);
                    for(Xe = Ve; Xe < we && Qe + Ie[Xe].accumulator < ce.end; Xe++);
                } else if (ee > 1) {
                    const Re = It(we, ee, U, ge, ce, Ae);
                    V = Re.renderedIndices, Be = new Set(V), ke = Re.startIndex, de = Re.endIndex, Ve = Re.visibleStartIndex, Xe = Re.visibleEndIndex, Ke = Re.totalSize;
                } else {
                    ke = ~~(ce.start / U * ee);
                    const Re = ke % ee;
                    ke -= Re, de = Math.ceil(ce.end / U * ee), Ve = Math.max(0, Math.floor((ce.start - Qe) / U * ee)), Xe = Math.floor((ce.end - Qe) / U * ee), ke < 0 && (ke = 0), de > we && (de = we), Ve < 0 && (Ve = 0), Xe > we && (Xe = we), Ke = Math.ceil(we / ee) * U;
                }
            }
            de - ke > Cl.itemsLimit && Et(), I.value = Ke;
            let me;
            const Kt = ke <= _ && de >= g;
            if (!Kt || c) fe();
            else for(let ce = 0, Ae = Ye.length; ce < Ae; ce++){
                const qe = Ye[ce];
                if (qe && (me = qe, me.nr.used)) {
                    const Qe = Be ? Be.has(me.nr.index) : me.nr.index >= ke && me.nr.index < de, yt = U || Ie[me.nr.index] && Ie[me.nr.index].size;
                    (!Qe || !yt) && Ce(me);
                }
            }
            let et, ht;
            const Rn = V ?? Array.from({
                length: Math.max(0, de - ke)
            }, (ce, Ae)=>ke + Ae);
            for (const ce of Rn){
                if (!(U || Ie[ce] && Ie[ce].size)) continue;
                et = Fe[ce];
                const Ae = Ee ? et[Ee] : ce;
                if (Ae == null) throw new Error(`Key is ${Ae} on item (keyField is '${Ee}')`);
                if (me = We.get(Ae), me) me.item !== et && (me.item = et), me.nr.used || console.warn(`Expected existing view's used flag to be true, got ${me.nr.used}`);
                else {
                    if (ht = et[Me], me = se(ht), me) {
                        const qe = me.nr.index !== ce || me.nr.key !== Ae;
                        me.item = et, me.nr.index = ce, me.nr.key = Ae, me.nr.type !== ht && console.warn("Reused view's type does not match pool's type"), qe && Ht(me);
                    } else me = re(Ye, ce, et, Ae, ht);
                    We.set(Ae, me);
                }
                U === null ? (me.position = ((v = Ie[ce - 1]) == null ? void 0 : v.accumulator) || 0, me.offset = 0) : (me.position = Math.floor(ce / ee) * U, me.offset = ce % ee * ge);
            }
            return g = ke, _ = de, $.emitUpdate && ((R = u?.onUpdate) == null || R.call(u, ke, de, Ve, Xe)), z && clearTimeout(z), z = setTimeout(gt, $.updateInterval + 300), {
                continuous: Kt
            };
        }
        function Et() {
            throw Q = setTimeout(()=>{
                Q = null, console.warn("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", b(t)), console.warn("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
            }), new Error("Rendered items limit reached");
        }
        function At() {
            if (pt()) return !1;
            const c = d.value.filter(({ nr: s })=>s.used);
            for(let s = 1; s < c.length; s++)if (c[s].nr.index !== c[s - 1].nr.index + 1) return !0;
            return !1;
        }
        function gt() {
            d.value.sort((c, s)=>c.nr.index - s.nr.index), At() && (Oe(!1), z && clearTimeout(z));
        }
        function Dt(c, s) {
            const v = b(e), R = b(t);
            if (!R) return;
            const $ = Math.max(0, Math.min(c, v.items.length - 1)), U = O().start, ee = xl(R, v.direction, v.pageMode), ge = Z($), Le = F($), Me = sn(ge, Le, U, ee, s?.align, s?.offset ?? 0);
            if (Me != null && (st(Me, s), v.gridItems && v.itemSize != null)) {
                const Ee = b(t);
                if (!Ee) return;
                const Fe = v.gridItems, we = v.itemSecondarySize || v.itemSize, Ie = $ % Fe * we, We = v.direction === "vertical" ? "horizontal" : "vertical", Ye = We === "horizontal" ? at(Ee.scrollLeft, "horizontal", Ee) : Ee.scrollTop, V = We === "horizontal" ? Ee.clientWidth : Ee.clientHeight, Be = sn(Ie, we, Ye, V, s?.align, s?.offset ?? 0);
                Be != null && Ft(Ee, We, Be, s);
            }
        }
        function st(c, s) {
            const v = b(e), R = b(t);
            if (R) if (v.pageMode) {
                const $ = kt(R), U = $.getBoundingClientRect(), ee = R.getBoundingClientRect(), ge = v.direction === "vertical" ? "top" : "left", Le = kt(R) === document.documentElement || kt(R) === document.body ? v.direction === "vertical" ? window.scrollY : window.scrollX : at(v.direction === "vertical" ? $.scrollTop : $.scrollLeft, v.direction, $), Me = ee[ge] - U[ge];
                Ft($.tagName === "HTML" ? window : $, v.direction, c + Le + Me, s);
            } else Ft(R, v.direction, c, s);
        }
        const Ue = b(e);
        return le = it(Ue.items, Ue.items.length > 0 && typeof Ue.items[0] != "object" ? null : Ue.keyField), Ue.cache && x(Ue.cache), Ue.prerender && (N = !0, Oe(!1)), Ue.gridItems && !Ue.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems"), Ze(()=>{
            Ne(), dt(()=>{
                N = !1, Oe(!0), L.value = !0;
            });
        }), pn(()=>{
            const c = T;
            typeof c == "number" && dt(()=>{
                st(c);
            });
        }), xt(()=>{
            y(), f(), rt();
        }), _e(()=>b(e).cache, (c)=>{
            x(c), Oe(!0);
        }), _e(()=>b(e).items, (c, s)=>{
            const v = b(e), R = i.value ? null : v.keyField, $ = it(c, R);
            if (v.shift) {
                const U = s ? it(s, R) : le;
                Sn(U, $) > 0 ? Se(s ?? [], R) : pe();
            } else pe();
            le = $, Te(c), Oe(!0);
        }), _e(()=>b(e).pageMode, ()=>{
            Ne(), Oe(!1);
        }), _e(a, ()=>{
            Te() && ze(), Oe(!1);
        }, {
            deep: !0
        }), _e(()=>b(e).gridItems, ()=>{
            Oe(!0);
        }), _e(()=>b(e).itemSecondarySize, ()=>{
            Oe(!0);
        }), {
            pool: d,
            visiblePool: m,
            totalSize: I,
            ready: L,
            sizes: a,
            simpleArray: i,
            scrollToItem: Dt,
            scrollToPosition: st,
            getScroll: O,
            findItemIndex: xe,
            getItemOffset: Z,
            getItemSize: F,
            cacheSnapshot: D,
            restoreCache: x,
            updateVisibleItems: Oe,
            handleScroll: ye,
            handleResize: G,
            handleVisibilityChange: r,
            sortViews: gt
        };
    }
    function Ut(e) {
        return e.item;
    }
    function Vl(e) {
        return e._vs_styleStamp ?? 0;
    }
    const Tn = [
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
        for (const o of Tn)t[o] = e.style[o];
        return t;
    }
    function Mn(e, t) {
        for (const o of Tn)e.style[o] = t[o] ?? "";
    }
    function rn(e, t, o, l) {
        if (!("view" in t)) {
            Mn(e, l);
            return;
        }
        const u = o === "vertical", d = e.tagName === "TR", I = u ? `translateY(${t.view.position}px) translateX(${t.view.offset}px)` : `translateX(${t.view.position}px) translateY(${t.view.offset}px)`;
        e.style.position = "absolute", e.style.top = u && d ? `${t.view.position}px` : "0px", e.style.left = !u && d ? `${t.view.position}px` : "0px", e.style.transform = d ? "" : I, e.style.willChange = d ? "unset" : "transform", e.style.visibility = t.view.nr.used ? "visible" : "hidden", e.style.pointerEvents = t.view.nr.used ? "" : "none";
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
    function un(e, t, o, l) {
        return o ? l ?? null : e?.[t] ?? null;
    }
    function Ll(e) {
        let t = 0, o = {};
        const l = kl();
        let u = !1, d, I = !1, L = [], g = null, _ = null;
        const j = new Set, S = rl({
            active: !0,
            sizes: {},
            keyField: b(e).keyField,
            simpleArray: !1
        }), A = te(()=>b(e).direction), T = te(()=>b(b(e).el)), W = te(()=>b(b(e).before)), N = te(()=>b(b(e).after)), ne = new Map;
        function K(r) {
            let p = -1;
            return p = requestAnimationFrame(()=>{
                j.delete(p), r();
            }), j.add(p), p;
        }
        function z() {
            for (const r of j)cancelAnimationFrame(r);
            j.clear();
        }
        typeof ResizeObserver < "u" && (d = new ResizeObserver((r)=>{
            K(()=>{
                if (Array.isArray(r)) {
                    for (const p of r)if (p.target && p.target.$_vs_onResize) {
                        let C, O;
                        if (p.borderBoxSize) {
                            const ae = p.borderBoxSize[0];
                            C = ae.inlineSize, O = ae.blockSize;
                        } else C = p.contentRect.width, O = p.contentRect.height;
                        p.target.$_vs_onResize(p.target.$_vs_id, C, O);
                    }
                }
            });
        }));
        const B = {
            vscrollData: S,
            resizeObserver: d,
            direction: A,
            undefinedMap: o,
            undefinedSizeCount: {
                get value () {
                    return t;
                },
                set value (r){
                    t = r;
                }
            },
            onVscrollUpdate (r) {
                const p = (C)=>{
                    r(C);
                };
                return l.on("vscroll:update", p), ()=>l.off("vscroll:update", p);
            }
        };
        ct("vscrollData", S), ct("vscrollParent", {
            get $_undefinedSizes () {
                return t;
            },
            set $_undefinedSizes (r){
                t = r;
            },
            get $_undefinedMap () {
                return o;
            },
            set $_undefinedMap (r){
                o = r;
            },
            $_events: l,
            direction: A
        }), ct("vscrollResizeObserver", d), ct("vscrollMeasurementContext", B), ct("vscrollAnchorRegistry", {
            delete (r) {
                ne.delete(r);
            },
            set (r, p) {
                ne.set(r, p);
            }
        });
        const Y = te(()=>{
            const r = b(e);
            return r.items.length > 0 && typeof r.items[0] != "object";
        }), le = te(()=>{
            const r = [], p = b(e), { items: C, keyField: O } = p, ae = Y.value, F = S.sizes, Z = C.length;
            for(let xe = 0; xe < Z; xe++){
                const pe = C[xe], ze = ae ? xe : pe[O];
                let Se = F[ze];
                typeof Se > "u" && !o[ze] && (Se = 0), r.push({
                    item: pe,
                    id: ze,
                    size: Se
                });
            }
            return r;
        }), H = b(e);
        L = it(H.items, Y.value ? null : H.keyField), H.cache && (S.sizes = Pt(H.cache, H.items, Y.value ? null : H.keyField));
        const q = te(()=>{
            const r = b(e);
            return {
                items: le.value,
                keyField: "id",
                direction: r.direction,
                itemSize: null,
                gridItems: void 0,
                itemSecondarySize: void 0,
                minItemSize: r.minItemSize,
                sizeField: "size",
                typeField: "type",
                buffer: r.buffer ?? 200,
                pageMode: r.pageMode ?? !1,
                shift: !1,
                cache: r.cache,
                prerender: r.prerender ?? 0,
                emitUpdate: r.emitUpdate ?? !1,
                updateInterval: r.updateInterval ?? 0
            };
        });
        function Q() {
            var r, p;
            fe(), (p = (r = b(e)).onResize) == null || p.call(r);
        }
        function ue() {
            var r, p;
            l.emit("vscroll:update", {
                force: !1
            }), (p = (r = b(e)).onVisible) == null || p.call(r);
        }
        const ie = Cn(q, T, W, N, {
            onResize: Q,
            onVisible: ue,
            onHidden: ()=>{
                var r, p;
                return (p = (r = b(e)).onHidden) == null ? void 0 : p.call(r);
            },
            onUpdate: (r, p, C, O)=>{
                var ae, F;
                return (F = (ae = b(e)).onUpdate) == null ? void 0 : F.call(ae, r, p, C, O);
            }
        }), M = new WeakMap;
        function i() {
            _ != null && (cancelAnimationFrame(_), j.delete(_), _ = null);
        }
        function a() {
            i(), g = null;
        }
        function m() {
            g == null || _ != null || (_ = K(()=>{
                _ = null, re();
            }));
        }
        function D() {
            const r = T.value;
            if (!r) return null;
            const p = r.getBoundingClientRect();
            let C = null;
            for (const [O, ae] of ne.entries()){
                if (!ae.active || getComputedStyle(O).visibility === "hidden") continue;
                const F = O.getBoundingClientRect();
                if (F.bottom <= p.top || F.top >= p.bottom) continue;
                const Z = Math.max(F.top, p.top) - p.top;
                (!C || Z < C.score) && (C = {
                    key: ae.id,
                    offset: F.top - p.top,
                    score: Z
                });
            }
            return C;
        }
        function x(r) {
            const p = T.value;
            if (!p) {
                a();
                return;
            }
            const C = p.scrollTop, O = Math.min(ie.findItemIndex(C), r.length - 1), ae = r[O];
            if (ae == null) {
                a();
                return;
            }
            const F = D();
            g = {
                logicalKey: ae,
                logicalOffset: C - ie.getItemOffset(O),
                pendingKeys: new Set,
                stableFrames: 0,
                visualKey: F?.key ?? null,
                visualOffset: F?.offset ?? 0
            };
        }
        function oe(r) {
            const p = T.value;
            return !p || Math.abs(p.scrollTop - r) < .5 ? !1 : (I = !0, p.scrollTop = r, p.dispatchEvent(new Event("scroll")), K(()=>{
                I = !1;
            }), !0);
        }
        function re() {
            const r = g, p = T.value;
            if (!r || !p) return;
            const C = le.value.findIndex((Z)=>Z.id === r.logicalKey);
            if (C === -1) {
                a();
                return;
            }
            let O = !1;
            const ae = ie.getItemOffset(C) + r.logicalOffset;
            if (O = oe(ae) || O, r.visualKey != null) for (const [Z, xe] of ne.entries()){
                if (!xe.active || xe.id !== r.visualKey || getComputedStyle(Z).visibility === "hidden") continue;
                const pe = Z.getBoundingClientRect().top - p.getBoundingClientRect().top - r.visualOffset;
                O = oe(p.scrollTop + pe) || O;
                break;
            }
            let F = !0;
            for (const Z of r.pendingKeys)if (!(typeof S.sizes[Z] == "number" && S.sizes[Z] > 0)) {
                F = !1;
                break;
            }
            if (!O && F) {
                if (r.stableFrames++, r.stableFrames >= 2) {
                    a();
                    return;
                }
            } else r.stableFrames = 0;
            m();
        }
        function se(r, p, C, O) {
            const ae = dl(), F = bt(p), Z = bt(C), xe = bt({
                onResize: C.onResize
            }), pe = bt(r), ze = ae.run(()=>(_e(()=>{
                    const Se = F.value;
                    if (!("view" in Se)) return {
                        active: Z.value.active,
                        direction: A.value,
                        id: un(Z.value.item, b(e).keyField, S.simpleArray, Z.value.index),
                        legacy: !0
                    };
                    const { view: Te } = Se;
                    return {
                        active: Te.nr.used,
                        direction: A.value,
                        id: Ut(Te).id,
                        legacy: !1,
                        position: Te.position,
                        offset: Te.offset,
                        styleStamp: Vl(Te)
                    };
                }, ()=>{
                    const Se = pe.value;
                    if (Se) {
                        const Te = F.value, Ne = "view" in Te ? Ut(Te.view).id : un(Z.value.item, b(e).keyField, S.simpleArray, Z.value.index);
                        Ne != null && ne.set(Se, {
                            active: Z.value.active && S.active,
                            id: Ne
                        }), rn(Se, F.value, A.value, O);
                    }
                }, {
                    immediate: !0
                }), kn(Z, pe, B, xe)));
            ze.mount(), M.set(r, {
                binding: F,
                scope: ae,
                options: Z,
                callbacks: xe,
                el: pe,
                controller: ze,
                restoreStyles: O
            });
        }
        const Ce = {
            mounted (r, p) {
                const C = an(r);
                se(r, p.value, cn(p.value), C);
            },
            updated (r, p) {
                const C = M.get(r), O = cn(p.value);
                if (!C) {
                    const ae = an(r);
                    se(r, p.value, O, ae);
                    return;
                }
                C.binding.value = p.value, C.options.value = O, C.callbacks.value = {
                    onResize: O.onResize
                }, C.el.value = r, rn(r, p.value, A.value, C.restoreStyles);
            },
            unmounted (r) {
                const p = M.get(r);
                p && (p.controller.unmount(), p.scope.stop(), Mn(r, p.restoreStyles), ne.delete(r), M.delete(r));
            }
        };
        function fe(r = !1) {
            (r || Y.value) && (S.sizes = {}), l.emit("vscroll:update", {
                force: !0
            });
        }
        function be(r, p) {
            ie.scrollToItem(r, p);
        }
        function f(r) {
            const p = b(e);
            return S.sizes = Pt(r, p.items, Y.value ? null : p.keyField), ie.restoreCache(r);
        }
        function y(r, p) {
            const C = b(e), O = Y.value ? p ?? C.items.indexOf(r) : r[C.keyField];
            return S.sizes[O] || 0;
        }
        function G() {
            const r = T.value;
            r && (u || (u = !0, dt(()=>{
                r.scrollTop = r.scrollHeight + 5e3;
                const p = ()=>{
                    r.scrollTop = r.scrollHeight + 5e3, K(()=>{
                        r.scrollTop = r.scrollHeight + 5e3, t === 0 ? u = !1 : K(p);
                    });
                };
                K(p);
            })));
        }
        function ye() {
            g && !I && a();
        }
        return _e(()=>b(e).items, (r, p)=>{
            const C = b(e), O = Y.value ? null : C.keyField, ae = it(r, O);
            if (C.shift) {
                const F = p ? it(p, O) : L, Z = Sn(F, ae);
                Z > 0 ? (x(F), g && (g.pendingKeys = new Set(ae.slice(0, Z)), g.stableFrames = 0, dt(()=>{
                    g && re();
                }))) : a();
            } else a();
            L = ae, fe();
        }, {
            flush: "sync"
        }), _e(()=>b(e).cache, (r)=>{
            r && f(r);
        }), _e(Y, (r)=>{
            S.simpleArray = r;
        }, {
            immediate: !0
        }), _e(()=>b(e).direction, ()=>{
            a(), fe(!0);
        }), _e(T, (r, p)=>{
            p?.removeEventListener("scroll", ye), r?.addEventListener("scroll", ye);
        }, {
            immediate: !0
        }), _e(le, (r, p)=>{
            const C = T.value;
            if (!C) return;
            if (g) {
                re();
                return;
            }
            const O = C.scrollTop, ae = b(e);
            let F = 0, Z = 0;
            const xe = Math.min(r.length, p.length);
            for(let ze = 0; ze < xe && !(F >= O); ze++)F += p[ze].size || ae.minItemSize, Z += r[ze].size || ae.minItemSize;
            const pe = Z - F;
            pe !== 0 && (C.scrollTop += pe);
        }, {
            flush: "post"
        }), pn(()=>{
            S.active = !0;
        }), cl(()=>{
            S.active = !1;
        }), ft(()=>{
            var r;
            i(), z(), (r = T.value) == null || r.removeEventListener("scroll", ye), l.all.clear();
        }), {
            vscrollData: S,
            itemsWithSize: le,
            resizeObserver: d,
            measurementContext: B,
            vDynamicScrollerItem: Ce,
            ...ie,
            simpleArray: Y,
            forceUpdate: fe,
            scrollToItem: be,
            restoreCache: f,
            getItemSize: y,
            scrollToBottom: G,
            onScrollerResize: Q,
            onScrollerVisible: ue
        };
    }
    const qt = new WeakMap;
    function Fl(e) {
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
        xn(e);
        const o = Fl(t.value);
        if (qt.set(e, o), typeof IntersectionObserver > "u") {
            const l = e.getBoundingClientRect();
            o.visible = !0, o.callback(!0, {
                boundingClientRect: l
            });
            return;
        }
        o.observer = new IntersectionObserver((l)=>{
            const u = l[0], d = !!(u != null && u.isIntersecting);
            o.visible !== null && o.visible === d || (o.visible = d, o.callback(d, u));
        }, o.intersection), o.observer.observe(e);
    }
    function xn(e) {
        const t = qt.get(e);
        t != null && t.observer && (t.observer.disconnect(), t.observer = null);
    }
    const Bl = {
        mounted (e, t) {
            dn(e, t);
        },
        updated (e, t) {
            t.value !== t.oldValue && dn(e, t);
        },
        unmounted (e) {
            xn(e), qt.delete(e);
        }
    }, Hl = mt({
        __name: "ItemView",
        props: {
            view: {},
            itemTag: {}
        },
        setup (e) {
            const t = e;
            return (o, l)=>(k(), he(Mt(t.itemTag), {
                    class: "vue-recycle-scroller__item-view"
                }, {
                    default: w(()=>[
                            Pe(o.$slots, "default", {
                                item: t.view.item,
                                index: t.view.nr.index,
                                active: t.view.nr.used
                            })
                        ]),
                    _: 3
                }));
        }
    }), Pl = mt({
        __name: "ResizeObserver",
        emits: [
            "notify"
        ],
        setup (e, { emit: t }) {
            const o = t, l = P();
            let u = null, d = null;
            function I() {
                o("notify");
            }
            return Ze(()=>{
                var L;
                const g = (L = l.value) == null ? void 0 : L.parentElement;
                if (g) {
                    if (typeof ResizeObserver < "u") {
                        u = new ResizeObserver(()=>{
                            I();
                        }), u.observe(g);
                        return;
                    }
                    d = ()=>I(), window.addEventListener("resize", d);
                }
            }), xt(()=>{
                u && (u.disconnect(), u = null), d && (window.removeEventListener("resize", d), d = null);
            }), (L, g)=>(k(), J("div", {
                    ref_key: "el",
                    ref: l,
                    class: "vue-recycle-scroller__resize-observer",
                    "aria-hidden": "true"
                }, null, 512));
        }
    }), Wl = (e, t)=>{
        const o = e.__vccOpts || e;
        for (const [l, u] of t)o[l] = u;
        return o;
    }, Ul = Wl(Pl, [
        [
            "__scopeId",
            "data-v-08cc04ab"
        ]
    ]), Xl = mt({
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
        setup (e, { expose: t, emit: o }) {
            const l = e, u = o, d = Bl, I = P(), L = P(), g = P(), _ = P(null), j = Cn(l, I, L, g, {
                onResize: ()=>u("resize"),
                onVisible: ()=>u("visible"),
                onHidden: ()=>u("hidden"),
                onUpdate: (m, D, x, oe)=>{
                    u("update", m, D, x, oe), x <= 0 && u("scrollStart"), oe >= l.items.length - 1 && u("scrollEnd");
                }
            }), { pool: S, visiblePool: A, totalSize: T, ready: W, scrollToItem: N, scrollToPosition: ne, getScroll: K, findItemIndex: z, getItemOffset: B, getItemSize: Y, cacheSnapshot: le, restoreCache: H, updateVisibleItems: q, handleScroll: Q, handleResize: ue, handleVisibilityChange: ie } = j;
            function M(m) {
                _.value = m;
            }
            function i() {
                _.value = null;
            }
            const a = te(()=>{
                const m = {
                    [l.direction === "vertical" ? "minHeight" : "minWidth"]: `${T.value}px`
                };
                if (l.gridItems && l.itemSize != null) {
                    const D = (l.itemSecondarySize || l.itemSize) * l.gridItems;
                    m[l.direction === "vertical" ? "minWidth" : "minHeight"] = `${D}px`;
                }
                return m;
            });
            return t({
                el: I,
                visiblePool: A,
                scrollToItem: N,
                scrollToPosition: ne,
                getScroll: K,
                findItemIndex: z,
                getItemOffset: B,
                getItemSize: Y,
                cacheSnapshot: le,
                restoreCache: H,
                updateVisibleItems: q
            }), (m, D)=>Rt((k(), J("div", {
                    ref_key: "el",
                    ref: I,
                    class: Je([
                        "vue-recycle-scroller",
                        {
                            "grid-mode": l.gridItems,
                            ready: n(W),
                            "page-mode": l.pageMode,
                            [`direction-${l.direction}`]: !0
                        }
                    ]),
                    onScrollPassive: D[0] || (D[0] = (...x)=>n(Q) && n(Q)(...x))
                }, [
                    m.$slots.before ? (k(), J("div", {
                        key: 0,
                        ref_key: "before",
                        ref: L,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Pe(m.$slots, "before")
                    ], 512)) : ve("", !0),
                    (k(), he(Mt(l.listTag), {
                        style: ot(a.value),
                        class: Je([
                            "vue-recycle-scroller__item-wrapper",
                            l.listClass
                        ])
                    }, {
                        default: w(()=>[
                                (k(!0), J(Ge, null, $t(n(S), (x)=>(k(), he(Hl, Ct({
                                        key: x.nr.id,
                                        view: x,
                                        "item-tag": l.itemTag,
                                        style: n(W) ? [
                                            l.disableTransform ? {
                                                [l.direction === "vertical" ? "top" : "left"]: `${x.position}px`,
                                                willChange: "unset"
                                            } : {
                                                transform: `translate${l.direction === "vertical" ? "Y" : "X"}(${x.position}px) translate${l.direction === "vertical" ? "X" : "Y"}(${x.offset}px)`
                                            },
                                            {
                                                width: l.gridItems ? `${l.direction === "vertical" && l.itemSecondarySize || l.itemSize}px` : void 0,
                                                height: l.gridItems ? `${l.direction === "horizontal" && l.itemSecondarySize || l.itemSize}px` : void 0,
                                                visibility: x.nr.used ? "visible" : "hidden"
                                            }
                                        ] : null,
                                        class: [
                                            "vue-recycle-scroller__item-view",
                                            [
                                                l.itemClass,
                                                {
                                                    hover: !l.skipHover && _.value === x.nr.key
                                                }
                                            ]
                                        ]
                                    }, ul(l.skipHover ? {} : {
                                        mouseenter: ()=>{
                                            M(x.nr.key);
                                        },
                                        mouseleave: ()=>{
                                            i();
                                        }
                                    })), {
                                        default: w((oe)=>[
                                                Pe(m.$slots, "default", Ct({
                                                    ref_for: !0
                                                }, oe))
                                            ]),
                                        _: 2
                                    }, 1040, [
                                        "view",
                                        "item-tag",
                                        "style",
                                        "class"
                                    ]))), 128)),
                                l.items.length === 0 ? Pe(m.$slots, "empty", {
                                    key: 0
                                }) : ve("", !0)
                            ]),
                        _: 3
                    }, 8, [
                        "style",
                        "class"
                    ])),
                    m.$slots.after ? (k(), J("div", {
                        key: 1,
                        ref_key: "after",
                        ref: g,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Pe(m.$slots, "after")
                    ], 512)) : ve("", !0),
                    h(Ul, {
                        onNotify: n(ue)
                    }, null, 8, [
                        "onNotify"
                    ])
                ], 34)), [
                    [
                        n(d),
                        n(ie)
                    ]
                ]);
        }
    }), Nl = mt({
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
        setup (e, { expose: t, emit: o }) {
            const l = e, u = o, d = P(), I = te(()=>{
                var H;
                const q = (H = d.value) == null ? void 0 : H.el;
                return q && typeof q == "object" && "value" in q ? q.value : q;
            }), L = te(()=>({
                    items: l.items,
                    keyField: l.keyField,
                    direction: l.direction,
                    minItemSize: l.minItemSize,
                    shift: l.shift,
                    cache: l.cache,
                    el: I.value,
                    onResize: ()=>u("resize"),
                    onVisible: ()=>u("visible")
                })), g = Ll(L), { itemsWithSize: _, forceUpdate: j, scrollToItem: S, scrollToPosition: A, findItemIndex: T, getItemOffset: W, getItemSize: N, cacheSnapshot: ne, restoreCache: K, scrollToBottom: z, onScrollerResize: B, onScrollerVisible: Y } = g;
            function le(H, q, Q) {
                return {
                    item: H.item,
                    index: q,
                    active: Q,
                    itemWithSize: H
                };
            }
            return t({
                scrollToItem: S,
                scrollToPosition: A,
                findItemIndex: T,
                getItemOffset: W,
                scrollToBottom: z,
                getItemSize: N,
                cacheSnapshot: ne,
                restoreCache: K,
                forceUpdate: j
            }), (H, q)=>(k(), he(Xl, Ct({
                    ref_key: "scroller",
                    ref: d,
                    items: n(_),
                    "min-item-size": l.minItemSize,
                    direction: l.direction,
                    cache: l.cache,
                    "key-field": "id",
                    "list-tag": l.listTag,
                    "item-tag": l.itemTag
                }, H.$attrs, {
                    onResize: n(B),
                    onVisible: n(Y)
                }), ol({
                    default: w(({ item: Q, index: ue, active: ie })=>[
                            Pe(H.$slots, "default", sl(al(le(Q, ue, ie))))
                        ]),
                    empty: w(()=>[
                            Pe(H.$slots, "empty")
                        ]),
                    _: 2
                }, [
                    H.$slots.before ? {
                        name: "before",
                        fn: w(()=>[
                                Pe(H.$slots, "before")
                            ]),
                        key: "0"
                    } : void 0,
                    H.$slots.after ? {
                        name: "after",
                        fn: w(()=>[
                                Pe(H.$slots, "after")
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
    function Yl(e, t, o) {
        const l = en("vscrollMeasurementContext"), u = en("vscrollAnchorRegistry", null), d = kn(e, t, l, o);
        return Ze(()=>{
            d.mount();
        }), u && _e([
            d.id,
            d.finalActive,
            ()=>b(t)
        ], ([I, L, g], [_, j, S])=>{
            S && S !== g && u.delete(S), g && u.set(g, {
                active: L,
                id: I
            });
        }, {
            immediate: !0
        }), xt(()=>{
            const I = b(t);
            u && I && u.delete(I), d.unmount();
        }), {
            id: d.id,
            size: d.size,
            finalActive: d.finalActive,
            updateSize: d.updateSize
        };
    }
    const ql = mt({
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
            const o = e, l = t, u = P();
            return Yl(o, u, {
                onResize: (d)=>l("resize", d)
            }), (d, I)=>(k(), he(Mt(o.tag), {
                    ref_key: "el",
                    ref: u
                }, {
                    default: w(()=>[
                            Pe(d.$slots, "default")
                        ]),
                    _: 3
                }, 512));
        }
    }), Kl = vl("vaultIcon", ()=>{
        const e = P(JSON.parse(localStorage.getItem("app_vault_icon_cache") || "{}"));
        return {
            iconCache: e,
            getCachedIcon: (l)=>e.value[l] || null,
            setCachedIcon: (l, u)=>{
                e.value[l] = u, localStorage.setItem("app_vault_icon_cache", JSON.stringify(e.value));
            }
        };
    }), Ql = {
        key: 0,
        class: "loading-spinner"
    }, jl = [
        "src"
    ], Gl = {
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
            const t = Kl(), o = e, l = P(!1), u = P(!0), d = P(""), I = P(null), L = P(null), g = (z)=>{
                const B = z.target, Y = d.value.includes("google") && B.naturalWidth === 16, le = d.value.includes("bitwarden") && B.naturalWidth === 19;
                if (Y || le) {
                    console.warn(`[VaultIcon] Loaded icon found as placeholder (${B.naturalWidth}px), clearing cache...`), S.value && t.clearCachedIcon(S.value), _();
                    return;
                }
                u.value = !1, clearTimeout(I.value), clearTimeout(L.value);
            }, _ = ()=>{
                l.value = !0, u.value = !1, clearTimeout(I.value), clearTimeout(L.value);
            }, j = {
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
            }, S = te(()=>{
                if (!o.service) return "";
                const z = o.service.toLowerCase().trim();
                return z.includes(".") ? z : j[z] || `${z}.com`;
            }), A = te(()=>o.service ? o.service.charAt(0).toUpperCase() : "");
            let T = 0;
            const W = async ()=>{
                const z = S.value;
                if (!z) {
                    u.value = !1, l.value = !1;
                    return;
                }
                const B = ++T, Y = t.getCachedIcon(z);
                if (Y) {
                    d.value = Y, u.value = !1, l.value = !1, L.value = setTimeout(()=>{
                        B === T && (console.warn(`[VaultIcon] Cache response slow for ${z}, starting backup race...`), N(z, B));
                    }, 2e3);
                    return;
                }
                if (typeof navigator < "u" && !navigator.onLine) {
                    _();
                    return;
                }
                N(z, B);
            }, N = (z, B)=>{
                if (B !== T) return;
                u.value = !0, l.value = !1;
                const Y = [
                    {
                        name: "google",
                        url: `https://www.google.com/s2/favicons?domain=${z}&sz=64`
                    },
                    {
                        name: "bitwarden",
                        url: `https://icons.bitwarden.net/${z}/icon.png`
                    },
                    {
                        name: "favicon",
                        url: `https://favicon.im/zh/${z}?throw-error-on-404=true`
                    }
                ];
                let le = !1;
                const H = 6e3, q = (ue, ie)=>new Promise((M, i)=>{
                        const a = new Image, m = setTimeout(()=>{
                            a.src = "", i("timeout");
                        }, 3e3);
                        a.onload = ()=>{
                            if (clearTimeout(m), a.naturalWidth <= 1) {
                                i("placeholder_1x1");
                                return;
                            }
                            if (ie === "google" && a.naturalWidth === 16) {
                                console.warn(`[VaultIcon] Google returned default 16px globe for ${z}`), i("google_default");
                                return;
                            }
                            if (ie === "bitwarden" && a.naturalWidth === 19) {
                                console.warn(`[VaultIcon] Bitwarden returned default 19px globe for ${z}`), i("bitwarden_default");
                                return;
                            }
                            M(ue);
                        }, a.onerror = ()=>{
                            clearTimeout(m), i("network_error");
                        }, a.src = ue;
                    });
                (async ()=>{
                    const ue = Y[0], ie = async ()=>{
                        if (!(B !== T || le)) try {
                            const M = Y.map((a)=>q(a.url, a.name)), i = await Promise.any(M);
                            !le && B === T && (le = !0, d.value = i, t.setCachedIcon(z, i));
                        } catch  {
                            !le && B === T && (console.error(`[VaultIcon] All race sources failed for ${z}`), _());
                        }
                    };
                    try {
                        const M = await Promise.race([
                            q(ue.url, ue.name),
                            new Promise((i, a)=>setTimeout(()=>a("timeout"), 1500))
                        ]);
                        !le && B === T && (le = !0, d.value = M, t.setCachedIcon(z, M), g());
                    } catch  {
                        ie();
                    }
                })(), I.value = setTimeout(()=>{
                    B === T && !le && u.value && (console.error(`[VaultIcon] Race absolute timeout for ${z}`), _());
                }, H);
            };
            Ze(()=>{
                W();
            }), xt(()=>{
                clearTimeout(I.value), clearTimeout(L.value);
            }), _e(()=>o.service, ()=>{
                d.value = "", u.value = !0, l.value = !1, W();
            });
            const ne = te(()=>({
                    width: `${o.size}px`,
                    height: `${o.size}px`
                })), K = te(()=>{
                const z = [
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
                let B = 0;
                for(let le = 0; le < (o.service || "").length; le++)B = (o.service || "").charCodeAt(le) + ((B << 5) - B);
                return {
                    backgroundColor: z[Math.abs(B) % z.length],
                    fontSize: `${Math.floor(o.size * .5)}px`
                };
            });
            return (z, B)=>(k(), J("div", {
                    class: "service-icon-wrapper",
                    style: ot(ne.value)
                }, [
                    u.value && !l.value ? (k(), J("div", Ql)) : ve("", !0),
                    d.value && !l.value ? Rt((k(), J("img", {
                        key: 1,
                        src: d.value,
                        class: "service-icon-img",
                        onError: _,
                        onLoad: g
                    }, null, 40, jl)), [
                        [
                            gn,
                            !u.value
                        ]
                    ]) : ve("", !0),
                    l.value && !u.value ? (k(), J("div", {
                        key: 2,
                        class: "service-icon-fallback",
                        style: ot(K.value)
                    }, X(A.value), 5)) : ve("", !0)
                ], 4));
        }
    }, Jl = hn(Gl, [
        [
            "__scopeId",
            "data-v-a60dac5e"
        ]
    ]), Zl = {
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
        setup (e, { expose: t, emit: o }) {
            const l = e, u = o, d = P(null), I = P(null), L = P(null), g = P(0), _ = P(!1), j = P(!1), S = P(null);
            let A = 0, T = 0, W = 0, N = 0, ne = null;
            const K = te(()=>I.value?.offsetWidth || 0), z = te(()=>L.value?.offsetWidth || 0), B = te(()=>({
                    transform: `translateX(${g.value}px)`,
                    transition: _.value ? "none" : "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.15)"
                })), Y = (M)=>{
                if (l.disabled) return;
                const i = M.touches[0];
                A = i.clientX, T = i.clientY, W = g.value, N = Date.now(), _.value = !0, ne = null;
            }, le = (M)=>{
                if (l.disabled || !_.value) return;
                const i = M.touches[0], a = i.clientX - A, m = i.clientY - T;
                if (ne === null && (Math.abs(a) > 15 || Math.abs(m) > 15) && (ne = Math.abs(a) > Math.abs(m)), ne) {
                    M.cancelable && M.preventDefault();
                    let D = W + a;
                    D > K.value ? D = K.value + (D - K.value) * .2 : D < -z.value && (D = -z.value + (D + z.value) * .2), g.value = D;
                }
            }, H = ()=>{
                if (l.disabled) return;
                _.value = !1;
                const M = Math.abs(g.value), i = Date.now() - N;
                g.value > 0 ? g.value > K.value * l.threshold || i < 250 && g.value > 20 ? (g.value = K.value, j.value = !0, S.value = "left", u("open", "left"), q()) : ie() : g.value < 0 && (M > z.value * l.threshold || i < 250 && M > 20) ? (g.value = -z.value, j.value = !0, S.value = "right", u("open", "right"), q()) : ie();
            }, q = ()=>{
                if ("vibrate" in navigator) try {
                    navigator.vibrate(10);
                } catch  {}
                l.id && window.dispatchEvent(new CustomEvent("swipe-action:opened", {
                    detail: {
                        id: l.id
                    }
                }));
            }, Q = (M)=>{
                j.value && M.detail.id !== l.id && ie();
            }, ue = (M)=>{
                j.value && !d.value?.contains(M.target) && ie();
            };
            Ze(()=>{
                window.addEventListener("swipe-action:opened", Q), window.addEventListener("touchstart", ue, {
                    passive: !0
                });
            }), ft(()=>{
                window.removeEventListener("swipe-action:opened", Q), window.removeEventListener("touchstart", ue);
            });
            const ie = ()=>{
                g.value = 0, j.value = !1, S.value = null, u("close");
            };
            return t({
                reset: ie
            }), (M, i)=>(k(), J("div", {
                    class: Je([
                        "swipe-action-container",
                        {
                            "is-open": j.value,
                            "is-swiping": _.value
                        }
                    ]),
                    ref_key: "containerRef",
                    ref: d
                }, [
                    E("div", {
                        class: "swipe-actions left-actions",
                        ref_key: "leftActionsRef",
                        ref: I,
                        style: ot({
                            opacity: g.value > 0 ? 1 : 0,
                            visibility: g.value > 0 ? "visible" : "hidden"
                        })
                    }, [
                        Pe(M.$slots, "left-actions")
                    ], 4),
                    E("div", {
                        class: "swipe-actions right-actions",
                        ref_key: "rightActionsRef",
                        ref: L,
                        style: ot({
                            opacity: g.value < 0 ? 1 : 0,
                            visibility: g.value < 0 ? "visible" : "hidden"
                        })
                    }, [
                        Pe(M.$slots, "right-actions")
                    ], 4),
                    E("div", {
                        class: "swipe-action-content",
                        style: ot(B.value),
                        onTouchstart: Y,
                        onTouchmove: le,
                        onTouchend: H,
                        onTouchcancel: H
                    }, [
                        Pe(M.$slots, "default")
                    ], 36)
                ], 2));
        }
    }, ei = {
        class: "conflict-overlay"
    }, ti = {
        class: "conflict-content"
    }, ni = {
        class: "conflict-text"
    }, li = {
        class: "conflict-actions"
    }, ii = {
        __name: "conflictOverlay",
        emits: [
            "resolve"
        ],
        setup (e) {
            return (t, o)=>{
                const l = Xt;
                return k(), J("div", ei, [
                    E("div", ti, [
                        E("p", ni, X(t.$t("vault.conflict_notice")), 1),
                        E("div", li, [
                            h(l, {
                                size: "small",
                                type: "primary",
                                plain: "",
                                onClick: o[0] || (o[0] = je((u)=>t.$emit("resolve", "force"), [
                                    "stop"
                                ]))
                            }, {
                                default: w(()=>[
                                        $e(X(t.$t("vault.force_sync")), 1)
                                    ]),
                                _: 1
                            }),
                            h(l, {
                                size: "small",
                                type: "danger",
                                plain: "",
                                onClick: o[1] || (o[1] = je((u)=>t.$emit("resolve", "discard"), [
                                    "stop"
                                ]))
                            }, {
                                default: w(()=>[
                                        $e(X(t.$t("vault.discard_local")), 1)
                                    ]),
                                _: 1
                            })
                        ])
                    ])
                ]);
            };
        }
    }, oi = {
        class: "card-inner-content"
    }, si = {
        class: "card-header"
    }, ai = {
        class: "service-info"
    }, ri = [
        "title"
    ], ci = {
        class: "vault-name"
    }, ui = {
        class: "code-left"
    }, di = [
        "data-digits"
    ], fi = {
        class: "code-divider"
    }, mi = [
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
            const t = Tt(), o = Nt(), l = P(!1);
            let u = null, d = 0, I = 0;
            const L = (i)=>{
                if (t.appGhostMode) if (i.type === "touchstart" && i.touches && i.touches.length > 0) {
                    const a = i.touches[0];
                    d = a.clientX, I = a.clientY;
                } else i.type === "mousedown" && (d = i.clientX, I = i.clientY);
            }, g = (i)=>{
                if (t.appGhostMode) {
                    if (i && i.type.startsWith("touch") && i.changedTouches && i.changedTouches.length > 0) {
                        const a = i.changedTouches[0], m = Math.abs(a.clientX - d), D = Math.abs(a.clientY - I);
                        if (m > 15 || D > 15) return;
                    }
                    if (i.type === "mouseup") {
                        const a = Math.abs(i.clientX - d), m = Math.abs(i.clientY - I);
                        if (a > 10 || m > 10) return;
                    }
                    l.value = !0, u && clearTimeout(u), u = setTimeout(()=>{
                        l.value = !1, u = null;
                    }, 3e4);
                }
            };
            ft(()=>{
                u && clearTimeout(u), A();
            });
            const _ = e, { currentTime: j, startTimer: S, stopTimer: A } = hl(), T = P("------"), W = P(null), N = P(null), ne = P(null), K = te(()=>_.item.period || 30), z = te(()=>_.item.digits || 6), B = te(()=>Math.ceil(K.value - j.value % K.value)), Y = te(()=>B.value / K.value * 100), le = te(()=>B.value > 10 ? "#67C23A" : B.value > 5 ? "#E6A23C" : "#F56C6C"), H = te(()=>_.item.account?.includes(":") ? _.item.account.split(":").pop() : _.item.account), q = (i, a)=>{
                if (!i || i === "------" || i === "ERROR") return [
                    i,
                    ""
                ];
                if (i === " ") return [
                    " ",
                    " "
                ];
                const m = Math.floor(a / 2);
                return [
                    i.substring(0, m),
                    i.substring(m)
                ];
            }, Q = te(()=>q(T.value, z.value)), ue = te(()=>q(W.value, z.value)), ie = async (i)=>{
                if (!i.secret) return {
                    code: "ERROR",
                    next: null
                };
                const a = yl();
                let m = i.secret;
                if (m && m.startsWith("nodeauth:")) {
                    const f = await a.getMaskingKey();
                    try {
                        m = await wl(m, f);
                    } catch  {
                        return {
                            code: "ERROR",
                            next: null
                        };
                    }
                }
                const D = i.digits || 6, x = i.algorithm || "SHA1", oe = i.period || 30;
                if (i.type === "hotp") {
                    const f = await Vt(m, i.counter || 0, D, x, "hotp");
                    return m = null, {
                        code: f,
                        next: null
                    };
                }
                const re = j.value, se = Math.floor(re / oe), Ce = Math.ceil(oe - re % oe);
                let fe = T.value, be = W.value;
                return (N.value !== se || fe === "------" || fe === "ERROR") && (fe = await Vt(m, oe, D, x, i.type)), Ce <= 5 && _.isMobile ? (!be || ne.value !== se + 1) && (be = await Vt(m, oe, D, x, i.type, 1)) : be = null, m = null, {
                    code: fe,
                    next: be,
                    epoch: se
                };
            }, M = async (i)=>{
                const a = i.id, m = await ie(i);
                _.item.id === a && (tn.set(a, m), T.value = m.code, W.value = m.next, m.epoch !== void 0 && (N.value = m.epoch, ne.value = m.epoch + 1));
            };
            return _e(j, ()=>{
                _.item.type !== "hotp" && M(_.item);
            }), _e(()=>_.item.counter, ()=>{
                _.item.type === "hotp" && M(_.item);
            }), _e(()=>_.item.id, (i, a)=>{
                if (i === a) return;
                l.value = !1, u && (clearTimeout(u), u = null);
                const m = tn.get(i), D = _.item.period || 30, x = Math.floor(j.value / D);
                m && (_.item.type === "hotp" || m.epoch === x) ? (T.value = m.code, W.value = m.next, m.epoch !== void 0 && (N.value = m.epoch, ne.value = m.epoch + 1)) : (T.value = " ", W.value = null, N.value = null, ne.value = null), M(_.item);
            }), _e(()=>_.item.secret, (i, a)=>{
                i !== a && (T.value = " ", N.value = null, M(_.item));
            }), Ze(()=>{
                S(), M(_.item);
            }), (i, a)=>{
                const m = mn, D = In, x = En, oe = An, re = Fn, se = Ln, Ce = On, fe = Xt, be = Bn, f = Hn;
                return k(), he(f, {
                    shadow: "hover",
                    class: Je([
                        "vault-card",
                        {
                            "is-selected": e.isSelected,
                            "is-dragging": e.isDragging,
                            "is-pressing": e.isPressing,
                            "is-compact": e.isCompact,
                            "is-pending": e.isPending,
                            "is-ghost-mode": n(t).appGhostMode,
                            "is-revealed": l.value
                        }
                    ])
                }, {
                    default: w(()=>[
                            h(Zl, {
                                id: e.item.id,
                                disabled: !n(t).isMobile || e.item.status === "conflict" || n(o).isItemInConflict(e.item.id) || e.isDragging || e.isPressing,
                                onOpen: a[14] || (a[14] = ()=>l.value = !1)
                            }, {
                                "left-actions": w(()=>[
                                        e.item.deletedAt != null ? (k(), J("div", {
                                            key: 0,
                                            class: "swipe-btn bg-success",
                                            onClick: a[0] || (a[0] = (y)=>i.$emit("command", "restore", e.item))
                                        }, [
                                            h(m, null, {
                                                default: w(()=>[
                                                        h(n(_t))
                                                    ]),
                                                _: 1
                                            }),
                                            E("span", null, X(i.$t("vault.restore")), 1)
                                        ])) : (k(), J("div", {
                                            key: 1,
                                            class: "swipe-btn bg-primary",
                                            onClick: a[1] || (a[1] = (y)=>i.$emit("command", "qr", e.item))
                                        }, [
                                            h(m, null, {
                                                default: w(()=>[
                                                        h(n(Gt))
                                                    ]),
                                                _: 1
                                            }),
                                            E("span", null, X(i.$t("vault.export_account")), 1)
                                        ]))
                                    ]),
                                "right-actions": w(()=>[
                                        e.item.deletedAt != null ? (k(), J("div", {
                                            key: 0,
                                            class: "swipe-btn bg-danger",
                                            onClick: a[2] || (a[2] = (y)=>i.$emit("command", "delete", e.item))
                                        }, [
                                            h(m, null, {
                                                default: w(()=>[
                                                        h(n(lt))
                                                    ]),
                                                _: 1
                                            }),
                                            E("span", null, X(i.$t("vault.hard_delete")), 1)
                                        ])) : (k(), J(Ge, {
                                            key: 1
                                        }, [
                                            E("div", {
                                                class: "swipe-btn bg-warning",
                                                onClick: a[3] || (a[3] = (y)=>i.$emit("command", "edit", e.item))
                                            }, [
                                                h(m, null, {
                                                    default: w(()=>[
                                                            h(n(Jt))
                                                        ]),
                                                    _: 1
                                                }),
                                                E("span", null, X(i.$t("common.edit")), 1)
                                            ]),
                                            E("div", {
                                                class: "swipe-btn bg-danger",
                                                onClick: a[4] || (a[4] = (y)=>i.$emit("command", "delete", e.item))
                                            }, [
                                                h(m, null, {
                                                    default: w(()=>[
                                                            h(n(lt))
                                                        ]),
                                                    _: 1
                                                }),
                                                E("span", null, X(i.$t("common.delete")), 1)
                                            ])
                                        ], 64))
                                    ]),
                                default: w(()=>[
                                        E("div", oi, [
                                            E("div", si, [
                                                E("div", ai, [
                                                    h(D, {
                                                        "model-value": e.isSelected,
                                                        onChange: a[5] || (a[5] = (y)=>i.$emit("toggle-selection", e.item.id)),
                                                        onClick: a[6] || (a[6] = je(()=>{}, [
                                                            "stop"
                                                        ]))
                                                    }, null, 8, [
                                                        "model-value"
                                                    ]),
                                                    h(Jl, {
                                                        service: e.item.service,
                                                        size: e.isCompact ? 20 : 24
                                                    }, null, 8, [
                                                        "service",
                                                        "size"
                                                    ]),
                                                    E("h3", {
                                                        class: "service-name",
                                                        title: e.item.service
                                                    }, X(e.item.service), 9, ri),
                                                    e.item.category ? (k(), he(x, {
                                                        key: 0,
                                                        size: "small",
                                                        effect: "light"
                                                    }, {
                                                        default: w(()=>[
                                                                $e(X(e.item.category), 1)
                                                            ]),
                                                        _: 1
                                                    })) : ve("", !0),
                                                    e.isPending && e.item.status !== "conflict" && !n(o).isItemInConflict(e.item.id) ? (k(), he(oe, {
                                                        key: 1,
                                                        content: i.$t("vault.pending_sync_tip")
                                                    }, {
                                                        default: w(()=>[
                                                                h(m, {
                                                                    class: "pending-icon ml-5"
                                                                }, {
                                                                    default: w(()=>[
                                                                            h(n(vn))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : ve("", !0),
                                                    e.item.status === "conflict" || n(o).isItemInConflict(e.item.id) ? (k(), he(oe, {
                                                        key: 2,
                                                        content: i.$t("vault.conflict_detected_tip")
                                                    }, {
                                                        default: w(()=>[
                                                                h(m, {
                                                                    class: "conflict-icon ml-5",
                                                                    color: "#F56C6C"
                                                                }, {
                                                                    default: w(()=>[
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
                                                n(t).isMobile ? ve("", !0) : (k(), he(Ce, {
                                                    key: 0,
                                                    trigger: "click",
                                                    onCommand: a[8] || (a[8] = (y)=>i.$emit("command", y, e.item))
                                                }, {
                                                    dropdown: w(()=>[
                                                            h(se, null, {
                                                                default: w(()=>[
                                                                        e.item.deletedAt == null ? (k(), he(re, {
                                                                            key: 0,
                                                                            command: "qr"
                                                                        }, {
                                                                            default: w(()=>[
                                                                                    h(m, null, {
                                                                                        default: w(()=>[
                                                                                                h(n(Gt))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    $e(" " + X(i.$t("vault.export_account")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ve("", !0),
                                                                        e.item.deletedAt != null ? (k(), he(re, {
                                                                            key: 1,
                                                                            command: "restore"
                                                                        }, {
                                                                            default: w(()=>[
                                                                                    h(m, null, {
                                                                                        default: w(()=>[
                                                                                                h(n(_t))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    $e(" " + X(i.$t("vault.restore")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ve("", !0),
                                                                        e.item.deletedAt == null ? (k(), he(re, {
                                                                            key: 2,
                                                                            command: "edit"
                                                                        }, {
                                                                            default: w(()=>[
                                                                                    h(m, null, {
                                                                                        default: w(()=>[
                                                                                                h(n(Jt))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    $e(" " + X(i.$t("common.edit")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ve("", !0),
                                                                        h(re, {
                                                                            command: "delete",
                                                                            class: "text-danger"
                                                                        }, {
                                                                            default: w(()=>[
                                                                                    h(m, null, {
                                                                                        default: w(()=>[
                                                                                                h(n(lt))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    $e(" " + X(e.item.deletedAt != null ? i.$t("vault.hard_delete") : i.$t("common.delete")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    default: w(()=>[
                                                            h(m, {
                                                                class: "more-icon",
                                                                onClick: a[7] || (a[7] = je(()=>{}, [
                                                                    "stop"
                                                                ]))
                                                            }, {
                                                                default: w(()=>[
                                                                        h(n(Vn))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }))
                                            ]),
                                            E("p", ci, X(H.value), 1),
                                            E("div", {
                                                class: "code-display-area",
                                                onClick: a[12] || (a[12] = je((y)=>i.$emit("copy-code", e.item, T.value), [
                                                    "stop"
                                                ])),
                                                onMousedown: L,
                                                onMouseup: g,
                                                onMouseleave: g,
                                                onTouchstart: L,
                                                onTouchend: g,
                                                onTouchcancel: g
                                            }, [
                                                E("div", ui, [
                                                    E("div", {
                                                        class: "current-code",
                                                        "data-digits": z.value
                                                    }, [
                                                        T.value && T.value !== "------" ? (k(), J(Ge, {
                                                            key: 0
                                                        }, [
                                                            E("span", null, X(Q.value[0]), 1),
                                                            Rt(E("span", fi, null, 512), [
                                                                [
                                                                    gn,
                                                                    T.value !== " "
                                                                ]
                                                            ]),
                                                            E("span", null, X(Q.value[1]), 1)
                                                        ], 64)) : (k(), J(Ge, {
                                                            key: 1
                                                        }, [
                                                            $e("------")
                                                        ], 64))
                                                    ], 8, di),
                                                    e.isMobile && W.value && e.item.deletedAt == null ? (k(), J("div", {
                                                        key: 0,
                                                        class: "next-code",
                                                        "data-digits": z.value
                                                    }, [
                                                        E("span", null, X(ue.value[0]), 1),
                                                        a[15] || (a[15] = E("span", {
                                                            class: "code-divider is-next"
                                                        }, null, -1)),
                                                        E("span", null, X(ue.value[1]), 1)
                                                    ], 8, mi)) : ve("", !0)
                                                ]),
                                                e.item.deletedAt != null ? (k(), J("div", vi, [
                                                    h(fe, {
                                                        type: "success",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: a[9] || (a[9] = je((y)=>i.$emit("command", "restore", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: i.$t("vault.restore")
                                                    }, {
                                                        icon: w(()=>[
                                                                h(m, null, {
                                                                    default: w(()=>[
                                                                            h(n(_t))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ]),
                                                    h(fe, {
                                                        type: "danger",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: a[10] || (a[10] = je((y)=>i.$emit("command", "delete", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: i.$t("vault.hard_delete")
                                                    }, {
                                                        icon: w(()=>[
                                                                h(m, null, {
                                                                    default: w(()=>[
                                                                            h(n(lt))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ])
                                                ])) : T.value !== "------" ? (k(), J("div", pi, [
                                                    e.item.type === "hotp" ? (k(), he(fe, {
                                                        key: 0,
                                                        type: "primary",
                                                        plain: "",
                                                        circle: "",
                                                        size: e.isCompact ? "small" : "default",
                                                        loading: e.isIncrementing,
                                                        onClick: a[11] || (a[11] = je((y)=>i.$emit("increment", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: i.$t("vault.increment")
                                                    }, {
                                                        icon: w(()=>[
                                                                h(m, null, {
                                                                    default: w(()=>[
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
                                                    ])) : (k(), he(be, {
                                                        key: 1,
                                                        type: "circle",
                                                        percentage: Y.value,
                                                        width: e.isCompact ? 26 : 30,
                                                        "stroke-width": e.isCompact ? 2 : 3,
                                                        color: le.value
                                                    }, {
                                                        default: w(()=>[
                                                                E("span", gi, X(B.value), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "percentage",
                                                        "width",
                                                        "stroke-width",
                                                        "color"
                                                    ]))
                                                ])) : (k(), J("div", hi, [
                                                    h(m, {
                                                        class: "is-loading"
                                                    }, {
                                                        default: w(()=>[
                                                                h(n(zt))
                                                            ]),
                                                        _: 1
                                                    })
                                                ]))
                                            ], 32),
                                            e.item.status === "conflict" || n(o).isItemInConflict(e.item.id) ? (k(), he(ii, {
                                                key: 0,
                                                onResolve: a[13] || (a[13] = (y)=>i.$emit("resolve-conflict", e.item.id, y))
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
    function yi(e, t, o, l = null) {
        const u = yn(), d = Nt(), { updateTrashMetadata: I, fetchTrash: L } = bn(), { t: g } = _l.global, _ = P([]), j = P(!1), S = P(!1), A = P(!1), T = P({
            id: "",
            service: "",
            account: "",
            category: ""
        }), W = P(!1), N = P(null), ne = P(!1), K = P(""), z = async ()=>{
            if (_.value.length) try {
                await Zt.confirm(g("vault.delete_batch_confirm", {
                    count: _.value.length
                }), g("common.delete"), {
                    type: "warning",
                    confirmButtonText: g("common.delete"),
                    cancelButtonText: g("common.cancel")
                }), j.value = !0;
                const f = Tt(), y = t?.value?.length > 0 && t.value[0]?.deletedAt != null || !f.appTrashMode;
                if (!d.isManualOffline && (!navigator.onLine || d.isOffline)) {
                    De.warning(g("security.offline_network_blocked")), j.value = !1;
                    return;
                }
                y ? (d.isManualOffline ? await nt.batchDelete(_.value) : await Promise.all(_.value.map((G)=>ut.hardDelete(G))), I(-_.value.length)) : (await ut.batchMoveToTrash(_.value), I(_.value.length)), await u.deleteItems(_.value), !d.isOffline && !y && await u.updateMetadata({
                    delta: -_.value.length
                }), De.success(g("vault.delete_batch_success", {
                    count: _.value.length
                })), _.value = [], u.markDirty(), e(), L();
            } catch (f) {
                f !== "cancel" && St.error(f);
            } finally{
                j.value = !1;
            }
        }, B = (f)=>{
            const y = _.value.indexOf(f);
            y > -1 ? _.value.splice(y, 1) : _.value.push(f);
        }, Y = ()=>{
            t?.value && (_.value = t.value.map((f)=>f.id));
        }, le = async (f, y)=>{
            const G = y || f?.currentCode;
            if (!G || G === "------") return De.warning(g("vault.not_generated_yet"));
            await Lt(G, g("common.copy_success"));
        }, H = (f)=>{
            T.value = {
                id: f.id,
                service: f.service,
                account: f.account,
                category: f.category || "",
                updatedAt: f.updatedAt
            }, S.value = !0;
        }, q = async ()=>{
            A.value = !0;
            try {
                const { id: f, ...y } = T.value;
                (await nt.updateAccount(f, y)).success && (De.success(g("vault.update_success")), S.value = !1, u.markDirty(), e(), L());
            } catch  {} finally{
                A.value = !1;
            }
        };
        let Q = null;
        const ue = async (f, y)=>{
            if (!f.some((F, Z)=>F.id !== y[Z]?.id)) return;
            const ye = De.success({
                message: g("vault.sort_updated"),
                duration: 1500,
                customClass: "message-success-blur"
            }), p = (l?.value || f).filter((F)=>!F.id.startsWith("tmp_"));
            let C = null;
            const O = f.findIndex((F, Z)=>F.id !== y[Z]?.id);
            if (O !== -1 && (y[O]?.id === f[O + 1]?.id ? C = f[O] : f[O]?.id === y[O + 1]?.id ? C = f.find((F)=>F.id === y[O].id) : C = f[O]), C) {
                const F = p.findIndex((Te)=>Te.id === C.id), Z = F > 0 ? p[F - 1] : null, xe = F < p.length - 1 ? p[F + 1] : null, pe = Z?.sortOrder ?? null, ze = xe?.sortOrder ?? null;
                let Se = null;
                if (pe === null && ze === null) Se = 1e3;
                else if (pe === null) Se = (ze ?? 0) + 1e3;
                else if (ze === null) Se = Math.max(0, (pe ?? 0) - 1e3);
                else {
                    const Te = Math.floor((pe + ze) / 2);
                    Te > ze && Te < pe && (Se = Te);
                }
                if (Se !== null) {
                    C.sortOrder = Se;
                    try {
                        await nt.moveSortOrder(C.id, Se), Q && clearTimeout(Q), Q = setTimeout(()=>{
                            u.markDirty(), e();
                        }, 1e3);
                    } catch  {
                        ye?.close(), t.value = y, Q && clearTimeout(Q), e();
                    }
                    return;
                }
            }
            const ae = p.map((F)=>F.id);
            try {
                await nt.reorder(ae), Q && clearTimeout(Q), Q = setTimeout(()=>{
                    u.markDirty(), e();
                }, 1e3);
            } catch  {
                ye?.close(), t.value = y, Q && clearTimeout(Q), e();
            }
        }, ie = async (f)=>{
            try {
                const y = Tt(), G = f.deletedAt != null || !y.appTrashMode;
                if (!d.isManualOffline && (!navigator.onLine || d.isOffline)) {
                    De.warning(g("security.offline_network_blocked"));
                    return;
                }
                const ye = g(G ? "vault.hard_delete" : "common.delete"), r = G ? g("vault.hard_delete_confirm", {
                    service: f.service
                }) : g("vault.delete_confirm", {
                    service: f.service
                });
                await Zt.confirm(r, ye, {
                    type: "warning",
                    confirmButtonText: ye,
                    cancelButtonText: g("common.cancel")
                }), G ? (d.isManualOffline ? await nt.deleteAccount(f.id) : await ut.hardDelete(f.id), I(-1)) : (await ut.moveToTrash(f.id), I(1)), await u.deleteItems([
                    f.id
                ]);
                const p = f.deletedAt == null;
                !d.isOffline && p && await u.updateMetadata({
                    delta: -1
                }), De.success(g("vault.delete_success")), u.markDirty(), e();
            } catch (y) {
                y !== "cancel" && St.error(y);
            }
        }, M = P(!1), i = async (f)=>{
            if (!M.value) {
                M.value = !0;
                try {
                    const y = await nt.incrementCounter(f.id, f.updatedAt);
                    y.success && (u.markDirty(), e(), y.pending ? De.info(g("vault.increment_offline_queued")) : De.success(g("vault.increment_success")));
                } catch (y) {
                    St.error(y), De.error(g("vault.increment_failed"));
                } finally{
                    M.value = !1;
                }
            }
        }, a = async (f)=>{
            if (!f || !f.startsWith("nodeauth:")) return f;
            const { useAppLockStore: y } = await on(async ()=>{
                const { useAppLockStore: p } = await import("./index-DdGzjhVj.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((C)=>C.b);
                return {
                    useAppLockStore: p
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), { unmaskSecretFront: G } = await on(async ()=>{
                const { unmaskSecretFront: p } = await import("./index-DdGzjhVj.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((C)=>C.m);
                return {
                    unmaskSecretFront: p
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = await y().getMaskingKey();
            return await G(f, r);
        }, m = async (f)=>{
            const y = await a(f.secret);
            N.value = {
                ...f,
                secret: y
            }, ne.value = !1, W.value = !0;
            const G = nn({
                service: f.service,
                account: f.account,
                secret: y,
                type: f.type,
                algorithm: f.algorithm,
                digits: f.digits,
                period: f.period,
                counter: f.counter
            });
            K.value = await Sl.toDataURL(G, {
                width: 240,
                margin: 1
            });
        }, D = async ()=>{
            N.value && await Lt(N.value.secret);
        }, x = async ()=>{
            if (N.value) {
                const f = N.value, y = nn({
                    service: f.service,
                    account: f.account,
                    secret: f.secret,
                    type: f.type,
                    algorithm: f.algorithm,
                    digits: f.digits,
                    period: f.period,
                    counter: f.counter
                });
                await Lt(y);
            }
        }, oe = (f)=>(f || "").match(/.{1,4}/g)?.join(" ") || f, re = (f, y)=>{
            if (!f || f === "------" || typeof f != "string") return f;
            const G = f.replace(/\s/g, "");
            return y === 6 && G.length === 6 ? `${G.slice(0, 3)} ${G.slice(3)}` : y === 8 && G.length === 8 ? `${G.slice(0, 4)} ${G.slice(4)}` : G;
        }, se = (f, y)=>{
            if (!f || f === "------" || typeof f != "string") return [
                f,
                ""
            ];
            const G = f.replace(/\s/g, "");
            return y === 6 && G.length === 6 ? [
                G.slice(0, 3),
                G.slice(3)
            ] : y === 8 && G.length === 8 ? [
                G.slice(0, 4),
                G.slice(4)
            ] : [
                G,
                ""
            ];
        }, Ce = (f, y)=>{
            f === "edit" ? H(y) : f === "qr" ? m(y) : f === "delete" ? ie(y) : f === "restore" && fe(y);
        }, fe = async (f)=>{
            if (!navigator.onLine || d.isOffline) {
                De.warning(g("security.offline_network_restore_blocked"));
                return;
            }
            try {
                await ut.restoreItem(f.id), I(-1), De.success(g("vault.restore_success")), d.isOffline || await u.updateMetadata({
                    delta: 1
                }), await u.deleteItems([
                    f.id
                ]), u.markDirty(), e();
            } catch (y) {
                St.error(y), De.error("恢复失败");
            }
        }, be = async (f, y)=>{
            await wn().resolveConflict(f, y), y === "force" ? (De.success(g("vault.conflict_force_applied")), nt.syncOfflineActions().then(()=>e())) : (De.info(g("vault.conflict_discarded")), e());
        };
        return {
            selectedIds: _,
            isBulkDeleting: j,
            showEditDialog: S,
            isEditing: A,
            editVaultData: T,
            showQrDialog: W,
            currentQrItem: N,
            showSecret: ne,
            qrCodeUrl: K,
            categoryOptions: te(()=>(o?.value || []).filter((f)=>f.category).map((f)=>f.category)),
            toggleSelection: B,
            selectAllLoaded: Y,
            handleBulkDelete: z,
            copyCode: le,
            openEditDialog: H,
            submitEditVault: q,
            deleteVault: ie,
            openQrDialog: m,
            copySecret: D,
            copyOtpUrl: x,
            formatSecret: oe,
            formatCode: re,
            getCodeGroups: se,
            handleCommand: Ce,
            performReorder: ue,
            handleResolveConflict: be,
            restoreVault: fe,
            handleIncrement: i,
            isIncrementing: M
        };
    }
    function wi(e) {
        const { listRef: t, columns: o, isMobile: l, isOffline: u, appViewMode: d, onReorder: I } = e, { t: L } = _n(), g = P(null), _ = te(()=>t.value.find((a)=>a.id === g.value)), j = P({
            x: 0,
            y: 0
        }), S = P({
            w: 0
        }), A = P(null);
        let T = {
            x: 0,
            y: 0
        }, W = !1, N = null, ne = 0, K = 1, z = {
            x: 0,
            y: 0
        };
        const B = te(()=>({
                left: `${j.value.x}px`,
                top: `${j.value.y}px`,
                width: `${S.value.w}px`
            }));
        let Y = [];
        const le = (a, m)=>{
            const D = document.querySelector(".vault-scroller");
            if (!D) return;
            const x = D.getBoundingClientRect();
            if (a >= x.left && a <= x.right && m >= x.top && m <= x.bottom) {
                const oe = m - x.top, re = a - x.left, se = document.querySelector(".vue-recycle-scroller__item-view"), Ce = se ? se.offsetHeight : d.value === "compact" ? 95 : 135, fe = Math.floor(oe / Ce), be = Math.floor(re / (x.width / o.value));
                let f = fe * o.value + be;
                const y = t.value.length - 1;
                f > y && (f = y), f < 0 && (f = 0);
                const G = t.value[f]?.id;
                if (G && G !== g.value) {
                    const ye = [
                        ...t.value
                    ], r = ye.findIndex((p)=>p.id === g.value);
                    if (r !== -1 && r !== f) {
                        const [p] = ye.splice(r, 1);
                        ye.splice(f, 0, p), t.value = ye;
                    }
                }
            }
        }, H = (a)=>{
            if (ne = a, N) return;
            K = 1;
            const m = ()=>{
                if (!W) return q();
                const D = ne * K;
                let x = document.getElementById("app") || document.documentElement;
                if (!l.value && x.scrollHeight <= x.clientHeight) {
                    const se = document.querySelector(".main-content");
                    se && (x = se);
                }
                const oe = x.scrollTop;
                x.scrollTop += D;
                const re = x.scrollTop;
                Math.abs(re - oe) < .1 && D !== 0 && x !== document.documentElement && (document.documentElement.scrollTop += D), K < 4 && (K += .03), le(z.x, z.y), N = requestAnimationFrame(m);
            };
            N = requestAnimationFrame(m);
        }, q = ()=>{
            N && (cancelAnimationFrame(N), N = null, K = 1, ne = 0);
        }, Q = (a, m, D, x)=>{
            g.value = D, W = !0, z = {
                x: a,
                y: m
            }, Y = [
                ...t.value
            ];
            const oe = x.getBoundingClientRect();
            if (T = {
                x: a - oe.left,
                y: m - oe.top
            }, S.value.w = oe.width, j.value = {
                x: oe.left,
                y: oe.top
            }, l.value && "vibrate" in navigator) try {
                navigator.vibrate([
                    20
                ]);
            } catch  {}
            l.value && (document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", document.body.style.touchAction = "none"), window.getSelection()?.removeAllRanges(), document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none";
        }, ue = (a, m)=>{
            if (!W) return;
            z = {
                x: a,
                y: m
            }, j.value = {
                x: a - T.x,
                y: m - T.y
            };
            const D = 80;
            if (m < D) {
                const x = Math.max(-25, Math.floor((m - D) / 2.5));
                H(x);
            } else if (m > window.innerHeight - D) {
                const x = Math.min(25, Math.floor((m - (window.innerHeight - D)) / 2.5));
                H(x);
            } else q();
            le(a, m);
        }, ie = ()=>{
            W && (q(), I && I([
                ...t.value
            ], Y), W = !1, g.value = null, document.body.style.overflow = "", document.documentElement.style.overflow = "", document.body.style.touchAction = "", document.body.style.userSelect = "", document.body.style.webkitUserSelect = "");
        };
        return {
            draggedId: g,
            draggedItem: _,
            floatingStyle: B,
            isPressing: A,
            handleMouseDown: (a, m)=>{
                if (a.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon")) return;
                const D = a.clientX, x = a.clientY, oe = a.currentTarget;
                let re = !1;
                const se = ()=>{
                    re && ie(), window.removeEventListener("mousemove", Ce), window.removeEventListener("mouseup", se);
                }, Ce = (fe)=>{
                    if (!re && Math.sqrt(Math.pow(fe.clientX - D, 2) + Math.pow(fe.clientY - x, 2)) > 5) {
                        if (u.value) {
                            De.warning(L("vault.reorder_offline_disabled")), se();
                            return;
                        }
                        re = !0, Q(D, x, m, oe);
                    }
                    re && ue(fe.clientX, fe.clientY);
                };
                window.addEventListener("mousemove", Ce), window.addEventListener("mouseup", se);
            },
            handleTouchStart: (a, m)=>{
                if (a.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon, .code-display-area")) return;
                const D = a.touches[0], x = D.clientX, oe = D.clientY, re = a.currentTarget;
                A.value = m;
                let se = !1;
                const Ce = setTimeout(()=>{
                    if (u.value) {
                        De.warning(L("vault.reorder_offline_disabled")), A.value = null;
                        return;
                    }
                    se = !0, A.value = null, Q(x, oe, m, re);
                }, 250), fe = (f)=>{
                    if (se) {
                        f.cancelable && f.preventDefault();
                        const y = f.touches[0];
                        ue(y.clientX, y.clientY);
                    } else {
                        const y = f.touches[0];
                        (Math.abs(y.clientX - x) > 10 || Math.abs(y.clientY - oe) > 10) && (clearTimeout(Ce), A.value = null);
                    }
                }, be = ()=>{
                    clearTimeout(Ce), A.value = null, se && ie(), window.removeEventListener("touchmove", fe), window.removeEventListener("touchend", be), window.removeEventListener("touchcancel", be);
                };
                window.addEventListener("touchmove", fe, {
                    passive: !1
                }), window.addEventListener("touchend", be), window.addEventListener("touchcancel", be);
            },
            stopAutoScroll: q
        };
    }
    let _i, bi, Si, ki, zi, $i, Ci, Ti, Mi, xi, Ri, Ii, Ei, Ai, Di, Oi, Vi, Li, Fi, Bi, Hi, Pi, Wi, Ui, Xi, Ni, Yi, qi, Ki, Qi, ji, Gi, Ji, Zi, eo, to, no, lo, io, oo;
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
    Ai = {
        class: "tag-count"
    };
    Di = {
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
        key: 1,
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
        setup (e, { expose: t, emit: o }) {
            const l = wn(), { t: u } = _n(), d = Tt(), I = Nt(), L = yn(), g = P(null), { serverVault: _, vault: j, searchQuery: S, selectedCategory: A, isLoading: T, isFetching: W, isFetchingNextPage: N, hasNextPage: ne, absoluteTotalItems: K, categoryStats: z, localCategoryStats: B, fetchVault: Y, handleLoadMore: le, isLoadMoreDisabled: H } = bl(g), { trashCount: q, isFetchingTrash: Q, fetchTrash: ue, filteredTrash: ie } = bn(), M = te({
                get () {
                    return A.value === "____TRASH____" ? ie(S.value) : j.value;
                },
                set (s) {
                    A.value !== "____TRASH____" && (j.value = s);
                }
            }), i = ()=>{
                Y(), d.isOffline || ue();
            };
            _e(()=>d.searchQuery, (s)=>{
                d.isMobile && (S.value = s);
            }), _e([
                W,
                S
            ], ([s, v])=>{
                d.isLoadingSearching = s && !!v;
            });
            const { selectedIds: a, isBulkDeleting: m, toggleSelection: D, selectAllLoaded: x, handleBulkDelete: oe, showEditDialog: re, editVaultData: se, isEditing: Ce, handleCommand: fe, submitEditVault: be, showQrDialog: f, currentQrItem: y, qrCodeUrl: G, showSecret: ye, formatSecret: r, copyCode: p, copySecret: C, copyOtpUrl: O, categoryOptions: ae, performReorder: F, handleResolveConflict: Z, handleIncrement: xe, isIncrementing: pe } = yi(i, M, z, _), ze = [
                {
                    value: "card",
                    icon: Xn
                },
                {
                    value: "compact",
                    icon: Nn
                }
            ], Se = P(!1), Te = {
                xs: 24,
                sm: 12,
                md: 8,
                lg: 6
            }, Ne = P(typeof window < "u" ? window.innerWidth : 1200), vt = ()=>{
                Ne.value = window.innerWidth;
            };
            Ze(()=>window.addEventListener("resize", vt)), ft(()=>window.removeEventListener("resize", vt));
            const rt = te(()=>d.isMobile ? 1 : Ne.value >= 1200 ? 4 : Ne.value >= 992 ? 3 : Ne.value >= 768 ? 2 : 1), It = te(()=>{
                const s = [], v = M.value, R = rt.value;
                for(let $ = 0; $ < v.length; $ += R)s.push({
                    id: `row_${$}`,
                    items: v.slice($, $ + R)
                });
                return s;
            }), { draggedId: pt, draggedItem: Oe, floatingStyle: Et, isPressing: At, handleMouseDown: gt, handleTouchStart: Dt, stopAutoScroll: st } = wi({
                listRef: M,
                columns: rt,
                isMobile: te(()=>d.isMobile),
                isOffline: te(()=>I.isOffline),
                appViewMode: te(()=>d.appVaultViewMode),
                onReorder: (s, v)=>F(s, v)
            }), Ue = async ()=>{
                try {
                    if (L.isDirty) {
                        Y();
                        return;
                    }
                    const s = await L.getData();
                    s && s.categoryStats && (B.value = s.categoryStats);
                } finally{
                    c.value = !1;
                }
            }, c = P(!0);
            return Ze(()=>{
                Ue();
            }), ft(()=>{
                st();
            }), t({
                fetchVault: Y
            }), (s, v)=>{
                const R = mn, $ = Xt, U = Pn, ee = Yn, ge = Un, Le = qn, Me = Kn, Ee = Gn, Fe = jn, we = Zn, Ie = el, We = Jn, Ye = Qn;
                return k(), J("div", _i, [
                    h(pl, {
                        name: "el-zoom-in-top"
                    }, {
                        default: w(()=>[
                                n(l).hasPendingChanges ? (k(), J("div", bi, [
                                    h(R, {
                                        class: "mr-8"
                                    }, {
                                        default: w(()=>[
                                                h(n(vn))
                                            ]),
                                        _: 1
                                    }),
                                    E("span", Si, X(s.$t("vault.offline_pending_sync", {
                                        count: n(l).syncQueue.length
                                    })), 1)
                                ])) : ve("", !0)
                            ]),
                        _: 1
                    }),
                    E("div", ki, [
                        h(Le, {
                            offset: n(d).isMobile ? 58 : 60,
                            disabled: n(d).isMobile && n(a).length === 0,
                            onChange: v[6] || (v[6] = (V)=>Se.value = V)
                        }, {
                            default: w(()=>[
                                    E("div", {
                                        class: Je([
                                            "affix-container",
                                            {
                                                "is-affixed": Se.value
                                            }
                                        ])
                                    }, [
                                        n(d).isMobile && n(a).length > 0 ? (k(), J("div", zi, [
                                            E("div", $i, [
                                                E("span", Ci, X(s.$t("search.selected_items", {
                                                    count: n(a).length
                                                })), 1),
                                                v[16] || (v[16] = E("div", {
                                                    class: "flex-1"
                                                }, null, -1)),
                                                h($, {
                                                    size: "small",
                                                    onClick: n(x),
                                                    plain: "",
                                                    disabled: n(m)
                                                }, {
                                                    default: w(()=>[
                                                            $e(X(s.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ]),
                                                h($, {
                                                    type: "danger",
                                                    plain: "",
                                                    size: "small",
                                                    onClick: n(oe),
                                                    loading: n(m)
                                                }, {
                                                    default: w(()=>[
                                                            h(R, null, {
                                                                default: w(()=>[
                                                                        h(n(lt))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "loading"
                                                ]),
                                                h($, {
                                                    size: "small",
                                                    onClick: v[0] || (v[0] = (V)=>a.value = []),
                                                    plain: "",
                                                    disabled: n(m)
                                                }, {
                                                    default: w(()=>[
                                                            $e(X(s.$t("common.cancel")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "disabled"
                                                ])
                                            ])
                                        ])) : ve("", !0),
                                        n(d).isMobile ? ve("", !0) : (k(), J("div", Ti, [
                                            E("div", Mi, [
                                                h(U, {
                                                    modelValue: n(S),
                                                    "onUpdate:modelValue": v[1] || (v[1] = (V)=>Ot(S) ? S.value = V : null),
                                                    placeholder: s.$t("search.placeholder"),
                                                    clearable: "",
                                                    class: "max-w-400"
                                                }, {
                                                    prefix: w(()=>[
                                                            n(W) && n(S) ? (k(), he(R, {
                                                                key: 0,
                                                                class: "is-loading"
                                                            }, {
                                                                default: w(()=>[
                                                                        h(n(zt))
                                                                    ]),
                                                                _: 1
                                                            })) : (k(), he(R, {
                                                                key: 1
                                                            }, {
                                                                default: w(()=>[
                                                                        h(n(Wn))
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
                                            E("div", xi, [
                                                n(a).length > 0 ? (k(), J(Ge, {
                                                    key: 0
                                                }, [
                                                    E("span", Ri, X(s.$t("search.selected_items", {
                                                        count: n(a).length
                                                    })), 1),
                                                    h($, {
                                                        type: "danger",
                                                        plain: "",
                                                        onClick: n(oe),
                                                        loading: n(m)
                                                    }, {
                                                        default: w(()=>[
                                                                h(R, null, {
                                                                    default: w(()=>[
                                                                            h(n(lt))
                                                                        ]),
                                                                    _: 1
                                                                }),
                                                                $e(" " + X(s.$t("common.delete")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "onClick",
                                                        "loading"
                                                    ]),
                                                    h($, {
                                                        onClick: v[2] || (v[2] = (V)=>a.value = []),
                                                        plain: "",
                                                        disabled: n(m)
                                                    }, {
                                                        default: w(()=>[
                                                                $e(X(s.$t("common.cancel")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "disabled"
                                                    ])
                                                ], 64)) : (k(), he($, {
                                                    key: 1,
                                                    onClick: n(x),
                                                    plain: "",
                                                    disabled: n(m)
                                                }, {
                                                    default: w(()=>[
                                                            $e(X(s.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ])),
                                                h(ge, {
                                                    modelValue: n(d).appVaultViewMode,
                                                    "onUpdate:modelValue": v[3] || (v[3] = (V)=>n(d).appVaultViewMode = V),
                                                    class: "ml-10",
                                                    onChange: n(d).setVaultViewMode
                                                }, {
                                                    default: w(()=>[
                                                            (k(), J(Ge, null, $t(ze, (V)=>h(ee, {
                                                                    key: V.value,
                                                                    label: V.value
                                                                }, {
                                                                    default: w(()=>[
                                                                            h(R, {
                                                                                size: "16"
                                                                            }, {
                                                                                default: w(()=>[
                                                                                        (k(), he(Mt(V.icon)))
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
                                        !c.value && (!n(d).isMobile || !n(d).isSearchVisible) ? (k(), J("div", Ii, [
                                            E("div", Ei, [
                                                E("div", {
                                                    class: Je([
                                                        "category-tag",
                                                        {
                                                            "is-active": n(A) === "",
                                                            "is-loading": n(W) && n(A) === "" && !n(N)
                                                        }
                                                    ]),
                                                    onClick: v[4] || (v[4] = (V)=>A.value = "")
                                                }, [
                                                    $e(X(s.$t("common.all")) + " ", 1),
                                                    E("span", Ai, "(" + X(n(K)) + ")", 1),
                                                    n(W) && n(A) === "" && !n(N) ? (k(), J("div", Di, [
                                                        ...v[17] || (v[17] = [
                                                            E("div", {
                                                                class: "tag-loading-bar"
                                                            }, null, -1)
                                                        ])
                                                    ])) : ve("", !0)
                                                ], 2),
                                                (k(!0), J(Ge, null, $t(n(z), (V)=>(k(), J("div", {
                                                        key: V.id,
                                                        class: Je([
                                                            "category-tag",
                                                            {
                                                                "is-active": n(A) === V.id,
                                                                "is-loading": n(W) && n(A) === V.id && !n(N)
                                                            }
                                                        ]),
                                                        onClick: (Be)=>A.value = V.id
                                                    }, [
                                                        $e(X(V.category || s.$t("common.uncategorized")) + " ", 1),
                                                        E("span", Vi, "(" + X(V.count) + ")", 1),
                                                        n(W) && n(A) === V.id && !n(N) ? (k(), J("div", Li, [
                                                            ...v[18] || (v[18] = [
                                                                E("div", {
                                                                    class: "tag-loading-bar"
                                                                }, null, -1)
                                                            ])
                                                        ])) : ve("", !0)
                                                    ], 10, Oi))), 128)),
                                                n(d).appTrashMode && (n(q) > 0 || n(A) === "____TRASH____") ? (k(), J("div", {
                                                    key: 0,
                                                    class: Je([
                                                        "category-tag trash-tag",
                                                        {
                                                            "is-active": n(A) === "____TRASH____",
                                                            "is-loading": n(W) && n(A) === "____TRASH____" && !n(N)
                                                        }
                                                    ]),
                                                    onClick: v[5] || (v[5] = (V)=>A.value = "____TRASH____")
                                                }, [
                                                    h(R, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: w(()=>[
                                                                h(n(lt))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    $e(" " + X(s.$t("vault.trash")) + " ", 1),
                                                    E("span", Fi, "(" + X(n(q)) + ")", 1),
                                                    n(Q) && n(A) === "____TRASH____" ? (k(), J("div", Bi, [
                                                        ...v[19] || (v[19] = [
                                                            E("div", {
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
                        c.value || (n(T) || n(Q) && n(A) === "____TRASH____") && M.value.length === 0 ? (k(), J("div", Hi, [
                            h(R, {
                                class: "is-loading mb-20 text-primary",
                                size: 48
                            }, {
                                default: w(()=>[
                                        h(n(zt))
                                    ]),
                                _: 1
                            }),
                            E("p", Pi, X(s.$t("common.loading_data")), 1)
                        ])) : !(n(T) || n(Q) && n(A) === "____TRASH____") && !n(W) && M.value.length === 0 && !n(S) ? (k(), J("div", Wi, [
                            n(A) === "____TRASH____" ? (k(), he(Me, {
                                key: 0,
                                description: s.$t("security.trash_already_empty")
                            }, null, 8, [
                                "description"
                            ])) : (k(), he(Me, {
                                key: 1,
                                description: s.$t("vault.empty_vault")
                            }, {
                                default: w(()=>[
                                        h($, {
                                            type: "primary",
                                            onClick: v[7] || (v[7] = (V)=>s.$emit("switch-tab", "add-vault"))
                                        }, {
                                            default: w(()=>[
                                                    $e(X(s.$t("vault.go_add_vault")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                _: 1
                            }, 8, [
                                "description"
                            ]))
                        ])) : Rt((k(), J("div", {
                            key: 2,
                            class: "list-container min-h-200",
                            "infinite-scroll-disabled": n(H),
                            "infinite-scroll-distance": 300
                        }, [
                            h(n(Nl), {
                                class: "vault-scroller",
                                items: It.value,
                                "min-item-size": 80,
                                "key-field": "id",
                                "page-mode": ""
                            }, {
                                default: w(({ item: V, index: Be, active: ke })=>[
                                        h(n(ql), {
                                            item: V,
                                            active: ke,
                                            "size-dependencies": [
                                                V.items
                                            ],
                                            "data-index": Be
                                        }, {
                                            default: w(()=>[
                                                    h(Fe, {
                                                        gutter: 20
                                                    }, {
                                                        default: w(()=>[
                                                                (k(!0), J(Ge, null, $t(V.items, (de, Ke)=>(k(), he(Ee, Ct({
                                                                        key: Ke
                                                                    }, {
                                                                        ref_for: !0
                                                                    }, Te, {
                                                                        class: [
                                                                            n(d).appVaultViewMode === "compact" ? "mb-15" : "mb-20"
                                                                        ],
                                                                        "data-id": de.id
                                                                    }), {
                                                                        default: w(()=>[
                                                                                h(fn, {
                                                                                    item: de,
                                                                                    "is-selected": n(a).includes(de.id),
                                                                                    "is-dragging": n(pt) === de.id,
                                                                                    "is-pressing": n(At) === de.id,
                                                                                    "is-compact": n(d).appVaultViewMode === "compact",
                                                                                    "is-pending": n(l).isItemPending(de.id) || de.pending,
                                                                                    "is-mobile": n(d).isMobile,
                                                                                    "is-incrementing": n(pe),
                                                                                    onToggleSelection: n(D),
                                                                                    onCommand: n(fe),
                                                                                    onIncrement: n(xe),
                                                                                    onCopyCode: n(p),
                                                                                    onResolveConflict: n(Z),
                                                                                    onMousedown: (Ve)=>n(gt)(Ve, de.id),
                                                                                    onTouchstart: (Ve)=>n(Dt)(Ve, de.id)
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
                            (k(), he(gl, {
                                to: "body"
                            }, [
                                n(pt) && n(Oe) ? (k(), J("div", {
                                    key: 0,
                                    class: "drag-floating-card",
                                    style: ot(n(Et))
                                }, [
                                    h(fn, {
                                        style: {
                                            "pointer-events": "none"
                                        },
                                        item: n(Oe),
                                        "is-compact": n(d).appVaultViewMode === "compact",
                                        "is-dragging": !1,
                                        "is-incrementing": n(pe)
                                    }, null, 8, [
                                        "item",
                                        "is-compact",
                                        "is-incrementing"
                                    ])
                                ], 4)) : ve("", !0)
                            ])),
                            n(N) ? (k(), J("div", Xi, [
                                h(R, {
                                    class: "is-loading"
                                }, {
                                    default: w(()=>[
                                            h(n(zt))
                                        ]),
                                    _: 1
                                }),
                                $e(" " + X(s.$t("vault.loading_more")), 1)
                            ])) : ve("", !0),
                            !n(ne) && M.value.length > 0 ? (k(), J("div", Ni, X(s.$t("vault.no_more_accounts")), 1)) : ve("", !0),
                            !(n(T) || n(Q) && n(A) === "____TRASH____") && M.value.length === 0 && n(S) ? (k(), he(Me, {
                                key: 2,
                                description: s.$t("search.no_matching_accounts")
                            }, null, 8, [
                                "description"
                            ])) : ve("", !0)
                        ], 8, Ui)), [
                            [
                                Ye,
                                n(le)
                            ]
                        ])
                    ]),
                    h(ln, {
                        modelValue: n(re),
                        "onUpdate:modelValue": v[12] || (v[12] = (V)=>Ot(re) ? re.value = V : null),
                        title: s.$t("vault.edit_account"),
                        width: "400px"
                    }, {
                        footer: w(()=>[
                                E("span", Yi, [
                                    h($, {
                                        onClick: v[11] || (v[11] = (V)=>re.value = !1)
                                    }, {
                                        default: w(()=>[
                                                $e(X(s.$t("common.cancel")), 1)
                                            ]),
                                        _: 1
                                    }),
                                    h($, {
                                        type: "primary",
                                        loading: n(Ce),
                                        onClick: n(be)
                                    }, {
                                        default: w(()=>[
                                                $e(X(s.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "loading",
                                        "onClick"
                                    ])
                                ])
                            ]),
                        default: w(()=>[
                                h(We, {
                                    model: n(se),
                                    "label-position": "top"
                                }, {
                                    default: w(()=>[
                                            h(we, {
                                                label: s.$t("vault.service_name")
                                            }, {
                                                default: w(()=>[
                                                        h(U, {
                                                            modelValue: n(se).service,
                                                            "onUpdate:modelValue": v[8] || (v[8] = (V)=>n(se).service = V)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            h(we, {
                                                label: s.$t("vault.account_identifier")
                                            }, {
                                                default: w(()=>[
                                                        h(U, {
                                                            modelValue: n(se).account,
                                                            "onUpdate:modelValue": v[9] || (v[9] = (V)=>n(se).account = V)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            h(we, {
                                                label: s.$t("vault.category_optional")
                                            }, {
                                                default: w(()=>[
                                                        h(Ie, {
                                                            modelValue: n(se).category,
                                                            "onUpdate:modelValue": v[10] || (v[10] = (V)=>n(se).category = V),
                                                            "fetch-suggestions": (V, Be)=>Be(n(ae).filter((ke)=>ke.toLowerCase().includes(V.toLowerCase())).map((ke)=>({
                                                                        value: ke
                                                                    }))),
                                                            placeholder: s.$t("vault.category_optional"),
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
                        modelValue: n(f),
                        "onUpdate:modelValue": v[14] || (v[14] = (V)=>Ot(f) ? f.value = V : null),
                        title: s.$t("vault.export_account"),
                        width: "350px",
                        onClosed: v[15] || (v[15] = (V)=>ye.value = !1)
                    }, {
                        default: w(()=>[
                                n(y) ? (k(), J("div", qi, [
                                    E("div", Ki, [
                                        E("h3", Qi, X(n(y).service), 1),
                                        E("p", ji, X(n(y).account), 1)
                                    ]),
                                    E("div", Gi, [
                                        E("img", {
                                            src: n(G),
                                            class: "qr-code-img"
                                        }, null, 8, Ji)
                                    ]),
                                    E("p", Zi, X(s.$t("vault.export_qr_tip")), 1),
                                    E("div", eo, [
                                        E("div", to, [
                                            E("div", no, X(n(ye) ? n(r)(n(y).secret) : "•••• •••• •••• ••••"), 1),
                                            E("div", lo, [
                                                h(R, {
                                                    class: "action-icon",
                                                    onClick: v[13] || (v[13] = (V)=>ye.value = !n(ye))
                                                }, {
                                                    default: w(()=>[
                                                            n(ye) ? (k(), he(n(nl), {
                                                                key: 1
                                                            })) : (k(), he(n(tl), {
                                                                key: 0
                                                            }))
                                                        ]),
                                                    _: 1
                                                }),
                                                h(R, {
                                                    class: "action-icon",
                                                    onClick: n(C)
                                                }, {
                                                    default: w(()=>[
                                                            h(n(ll))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick"
                                                ])
                                            ])
                                        ])
                                    ]),
                                    E("div", io, [
                                        h($, {
                                            link: "",
                                            type: "primary",
                                            class: "otp-url-btn",
                                            onClick: n(O)
                                        }, {
                                            default: w(()=>[
                                                    h(R, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: w(()=>[
                                                                h(n(il))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    $e(" " + X(s.$t("vault.copy_otp_url")), 1)
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
    _o = hn(oo, [
        [
            "__scopeId",
            "data-v-2f6e704d"
        ]
    ]);
});
export { _o as default, __tla };
