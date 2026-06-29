const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/passwordGenerator-BOQGcvoP.js","assets/element-plus-BHS6vjDl.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/index-CFsDC6RG.js","assets/pdf-utils-D3SLYqmy.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-DV2JH8XC.js","assets/index-BvTGjkv3.css","assets/timeSync-DcMwcKiR.js","assets/qrParser-CV_QtKJm.js","assets/totpSecret-DINhm1zj.js","assets/common-DbcLf_mO.js","assets/vaultService-BoND02Dg.js","assets/resourceRegistry-D1N45fAB.js","assets/qr-utils-7t4IiZrV.js","assets/appsReview-DBD9oUgw.js","assets/iconProtonAuth-DtfAAfvK.js","assets/iconLastPassAuth-BwaiX6sr.js"])))=>i.map(i=>d[i]);
import { _, __tla as __tla_0 } from "./pdf-utils-D3SLYqmy.js";
import { u as x, g as O, aA as q, av as z, aw as B, aS as $, a2 as F } from "./element-plus-BHS6vjDl.js";
import { I as g } from "./iconToolbox-Cu4UUVjQ.js";
import { M, v as N, __tla as __tla_1 } from "./index-CFsDC6RG.js";
import { a6 as t, l as r, i as e, F as T, r as m, aF as h, at as k, al as n, k as E, ac as j, j as f, ag as w, g as y, W as Q, S as d, t as p } from "./vue-core-DHcoxuim.js";
import "./compression-utils-BzBbrBKd.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-DV2JH8XC.js";
let fe;
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
    })()
]).then(async ()=>{
    let W, G, H, J, K, U, X, Y, Z, ee, te, oe, se, ae, ce, re;
    W = {
        class: "tools-wrapper"
    };
    G = {
        class: "tab-card-wrapper"
    };
    H = {
        class: "page-header-container"
    };
    J = {
        class: "page-header-hero"
    };
    K = {
        class: "hero-icon-wrapper"
    };
    U = {
        key: 0
    };
    X = {
        class: "page-desc-text"
    };
    Y = {
        class: "page-header-hero"
    };
    Z = {
        class: "hero-icon-wrapper"
    };
    ee = {
        key: 0
    };
    te = {
        class: "page-desc-text"
    };
    oe = {
        key: 0,
        class: "tools-grid"
    };
    se = {
        class: "tool-card-content"
    };
    ae = {
        class: "icon-wrapper"
    };
    ce = {
        class: "text-info"
    };
    re = {
        key: 1,
        class: "tool-container"
    };
    fe = {
        __name: "utilityTools",
        setup (ie) {
            const u = M(), C = p(()=>_(()=>import("./passwordGenerator-BOQGcvoP.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))), I = p(()=>_(()=>import("./timeSync-DcMwcKiR.js"), __vite__mapDeps([10,1,2,3,4,5,6,7,8,9]))), S = p(()=>_(()=>import("./qrParser-CV_QtKJm.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([11,5,6,1,2,3,4,7,8,9]))), A = p(()=>_(()=>import("./totpSecret-DINhm1zj.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([12,5,6,1,2,3,8,13,4,7,9,14,15,16]))), D = p(()=>_(()=>import("./appsReview-DBD9oUgw.js"), __vite__mapDeps([17,1,2,3,18,4,5,6,7,8,9,19]))), i = y({
                get: ()=>u.activeSubTool,
                set: (s)=>{
                    u.activeSubTool = s;
                }
            }), { t: o } = N.global, v = y(()=>[
                    {
                        id: "totp-secret",
                        title: o("tools.totp_secret_title"),
                        desc: o("tools.totp_secret_desc"),
                        icon: d(q)
                    },
                    {
                        id: "apps-review",
                        title: o("tools.apps_review_title"),
                        desc: o("tools.apps_review_desc"),
                        icon: d(z)
                    },
                    {
                        id: "password",
                        title: o("tools.password_gen_title"),
                        desc: o("tools.password_gen_desc"),
                        icon: d(B)
                    },
                    {
                        id: "time-sync",
                        title: o("tools.time_sync_title"),
                        desc: o("tools.time_sync_desc"),
                        icon: d($)
                    },
                    {
                        id: "qr-parser",
                        title: o("tools.qr_parser_title"),
                        desc: o("tools.qr_parser_desc"),
                        icon: d(F)
                    }
                ]), P = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.title : "工具";
            }, V = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.desc : "";
            }, b = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.icon : g;
            }, L = y(()=>{
                switch(i.value){
                    case "password":
                        return C;
                    case "time-sync":
                        return I;
                    case "qr-parser":
                        return S;
                    case "totp-secret":
                        return A;
                    case "apps-review":
                        return D;
                    default:
                        return null;
                }
            });
            return (s, a)=>{
                const c = x, R = O;
                return t(), r("div", W, [
                    e("div", G, [
                        e("div", H, [
                            i.value ? (t(), r(T, {
                                key: 1
                            }, [
                                e("div", Y, [
                                    e("div", Z, [
                                        m(c, {
                                            size: 28
                                        }, {
                                            default: h(()=>[
                                                    (t(), f(w(b(i.value))))
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    k(u).isMobile ? E("", !0) : (t(), r("h2", ee, n(P(i.value)), 1))
                                ]),
                                e("p", te, n(V(i.value)), 1)
                            ], 64)) : (t(), r(T, {
                                key: 0
                            }, [
                                e("div", J, [
                                    e("div", K, [
                                        m(c, {
                                            size: 28
                                        }, {
                                            default: h(()=>[
                                                    m(g)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    k(u).isMobile ? E("", !0) : (t(), r("h2", U, n(s.$t("tools.title")), 1))
                                ]),
                                e("p", X, n(s.$t("tools.desc")), 1)
                            ], 64))
                        ]),
                        i.value ? (t(), r("div", re, [
                            (t(), f(w(L.value)))
                        ])) : (t(), r("div", oe, [
                            (t(!0), r(T, null, j(v.value, (l)=>(t(), f(R, {
                                    key: l.id,
                                    shadow: "hover",
                                    class: Q([
                                        "tool-card",
                                        `tool-card-${l.id}`
                                    ]),
                                    onClick: (le)=>i.value = l.id
                                }, {
                                    default: h(()=>[
                                            e("div", se, [
                                                e("div", ae, [
                                                    m(c, {
                                                        size: 32
                                                    }, {
                                                        default: h(()=>[
                                                                (t(), f(w(l.icon)))
                                                            ]),
                                                        _: 2
                                                    }, 1024)
                                                ]),
                                                e("div", ce, [
                                                    e("h3", null, n(l.title), 1),
                                                    e("p", null, n(l.desc), 1)
                                                ])
                                            ])
                                        ]),
                                    _: 2
                                }, 1032, [
                                    "class",
                                    "onClick"
                                ]))), 128))
                        ]))
                    ])
                ]);
            };
        }
    };
});
export { fe as default, __tla };
