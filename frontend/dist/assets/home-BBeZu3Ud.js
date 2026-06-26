const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vaultList-CabkdS8n.js","assets/element-plus-BHS6vjDl.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/index-So6A334x.js","assets/pdf-utils-D3SLYqmy.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-DV2JH8XC.js","assets/index-BvTGjkv3.css","assets/vaultService-qBy_6qDe.js","assets/resourceRegistry-D1N45fAB.js","assets/decryptionErrorState-CvpP9KJF.js","assets/responsiveOverlay-BYzqlz2b.js","assets/responsiveOverlay-DXpm1mUF.css","assets/useVaultList-BUEAkcXq.js","assets/qr-utils-7t4IiZrV.js","assets/common-BDb8MUI-.js","assets/vaultList-DEhn4uxJ.css","assets/addVault-BehQrJY6.js","assets/addVault-BSLeJoQv.css","assets/dataExport-CVeUbTQU.js","assets/iconProtonAuth-BG65ODfm.js","assets/dataMigrationService-xnoiqa4V.js","assets/wa-sqlite-CPsif24c.js","assets/argon2-browser-DDvEuRcU.js","assets/hash-wasm-Dup_VHWH.js","assets/dataExport-BViWmYxM.css","assets/dataImport-oAOY329N.js","assets/iconLastPassAuth-B5_0NvEb.js","assets/dataBackup-DxkKthzQ.js","assets/utilityTools-CnzAwlS6.js","assets/iconToolbox-C2cRGz0o.js","assets/passkeySettings-Dlp3nBwz.js","assets/webAuthnService-CEX7xcPD.js","assets/securitySettings-B2OQKuaV.js","assets/iconPinCode-Tgvy1D7L.js","assets/securitySettings-CWqITrPL.css","assets/appearanceSetting-BlsHb3KH.js","assets/iconTheme-D4wm1iBs.js","assets/languageSettings-Cajhhjz2.js","assets/themeSettings-CezYLaLg.js","assets/layoutSettings-mIFPpr_g.js","assets/layoutSettings-CDkc7e94.css","assets/devicesSettings-DFPKuDsQ.js","assets/trashSettings-CcBZq3GE.js","assets/pinSettings-Cx_t4wFe.js","assets/aboutView-LK-52YBU.js","assets/mobileHub-ByEhe9Vo.js"])))=>i.map(i=>d[i]);
import { af as N, aH as X, aU as Y, ai as Z, aO as tt, ab as et, aA as at, aB as ot, aN as q, A as it, S as st, B as nt, u as W, e as _t, al as lt, am as ct, aQ as ut, b as pt, C as rt, ac as mt, z as j, l as dt } from "./element-plus-BHS6vjDl.js";
import { a6 as a, l as S, i as v, aw as vt, j as o, aF as n, r as _, at as t, F as C, ac as F, ag as z, al as A, W as $, g as bt, k as M, aD as D, V as R, b as H, aa as J, a2 as gt } from "./vue-core-DHcoxuim.js";
import { _ as Q, F as yt, L as kt, J as ft, M as x, l as i, __tla as __tla_0 } from "./index-So6A334x.js";
import { I as G } from "./iconToolbox-C2cRGz0o.js";
import { _ as s, __tla as __tla_1 } from "./pdf-utils-D3SLYqmy.js";
let At, Bt;
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
    const Et = {
        name: "iconAbout"
    }, Tt = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    };
    function St(d, e, l, b, u, c) {
        return a(), S("svg", Tt, [
            ...e[0] || (e[0] = [
                v("path", {
                    fill: "currentColor",
                    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
                }, null, -1)
            ])
        ]);
    }
    let Vt, Lt, ht, It, Dt, Rt, Pt, Ot;
    At = Q(Et, [
        [
            "render",
            St
        ]
    ]);
    Vt = [
        {
            key: "vault",
            label: "menu.vault",
            icon: N
        },
        {
            key: "add-vault",
            label: "menu.add",
            icon: X
        },
        {
            key: "migration",
            label: "menu.migration",
            icon: tt,
            children: [
                {
                    key: "migration-export",
                    label: "migration.export",
                    icon: Y
                },
                {
                    key: "migration-import",
                    label: "migration.import",
                    icon: Z
                }
            ]
        },
        {
            key: "backups",
            label: "menu.backup",
            icon: et
        },
        {
            key: "tools",
            label: "menu.tools",
            icon: G
        },
        {
            key: "settings",
            label: "menu.settings",
            icon: q,
            children: [
                {
                    key: "settings-passkey",
                    label: "menu.passkey",
                    icon: yt
                },
                {
                    key: "settings-security",
                    label: "menu.security",
                    icon: at
                },
                {
                    key: "settings-appearance",
                    label: "menu.appearance",
                    icon: ot
                },
                {
                    key: "settings-about",
                    label: "menu.about",
                    icon: At
                }
            ]
        }
    ];
    Lt = {
        __name: "desktopMenu",
        props: {
            app_active_tab: {
                type: String,
                required: !0
            }
        },
        emits: [
            "select"
        ],
        setup (d) {
            const { t: e, locale: l } = kt(), b = ft(), u = x();
            vt();
            const c = bt(()=>u.isSidebarCollapsed), m = ()=>u.toggleSidebar(), g = async ()=>{
                await b.clearUserInfo(), await Promise.race([
                    b.logout(),
                    new Promise((p)=>setTimeout(p, 1500))
                ]).catch(()=>{}), window.location.href = "/login", rt.success(e("auth.logout_success"));
            };
            return (p, V)=>{
                const f = W, L = nt, P = st, O = it, h = _t, w = pt;
                return a(), o(w, {
                    width: t(c) ? "64px" : "240px",
                    class: "left-aside"
                }, {
                    default: n(()=>[
                            _(O, {
                                "default-active": d.app_active_tab,
                                class: "side-menu",
                                onSelect: V[0] || (V[0] = (r)=>p.$emit("select", r)),
                                collapse: t(c)
                            }, {
                                default: n(()=>[
                                        (a(!0), S(C, null, F(t(Vt), (r)=>(a(), S(C, {
                                                key: r.key
                                            }, [
                                                r.children ? (a(), o(P, {
                                                    key: 0,
                                                    index: r.key
                                                }, {
                                                    title: n(()=>[
                                                            _(f, null, {
                                                                default: n(()=>[
                                                                        (a(), o(z(r.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024),
                                                            v("span", null, A(p.$t(r.label)), 1)
                                                        ]),
                                                    default: n(()=>[
                                                            (a(!0), S(C, null, F(r.children, (E)=>(a(), o(L, {
                                                                    key: E.key,
                                                                    index: E.key
                                                                }, {
                                                                    default: n(()=>[
                                                                            _(f, null, {
                                                                                default: n(()=>[
                                                                                        (a(), o(z(E.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024),
                                                                            v("span", null, A(p.$t(E.label)), 1)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "index"
                                                                ]))), 128))
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "index"
                                                ])) : (a(), o(L, {
                                                    key: 1,
                                                    index: r.key
                                                }, {
                                                    title: n(()=>[
                                                            v("span", null, A(p.$t(r.label)), 1)
                                                        ]),
                                                    default: n(()=>[
                                                            _(f, null, {
                                                                default: n(()=>[
                                                                        (a(), o(z(r.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024)
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "index"
                                                ]))
                                            ], 64))), 128))
                                    ]),
                                _: 1
                            }, 8, [
                                "default-active",
                                "collapse"
                            ]),
                            v("div", {
                                class: $([
                                    "sidebar-footer",
                                    {
                                        "is-collapsed": t(c)
                                    }
                                ])
                            }, [
                                _(h, {
                                    circle: "",
                                    icon: t(c) ? t(lt) : t(ct),
                                    onClick: m,
                                    title: t(c) ? "展开" : "折叠"
                                }, null, 8, [
                                    "icon",
                                    "title"
                                ]),
                                _(h, {
                                    circle: "",
                                    onClick: g,
                                    title: p.$t("menu.logout")
                                }, {
                                    default: n(()=>[
                                            _(f, null, {
                                                default: n(()=>[
                                                        _(t(ut))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                    _: 1
                                }, 8, [
                                    "title"
                                ])
                            ], 2)
                        ]),
                    _: 1
                }, 8, [
                    "width"
                ]);
            };
        }
    };
    ht = {
        key: 0,
        class: "mobile-menu"
    };
    It = {
        __name: "mobileMenu",
        props: {
            app_active_tab: {
                type: String,
                required: !0
            }
        },
        emits: [
            "select"
        ],
        setup (d, { emit: e }) {
            const l = e, b = x(), u = (c)=>{
                l("select", c);
            };
            return (c, m)=>{
                const g = W;
                return t(b).isMobile ? (a(), S("nav", ht, [
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "vault" || d.app_active_tab === "add-vault"
                            }
                        ]),
                        onClick: m[0] || (m[0] = (p)=>u("vault"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(N))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.vault")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: [
                                    "mobile-data",
                                    "migration-export",
                                    "migration-import",
                                    "backups"
                                ].includes(d.app_active_tab)
                            }
                        ]),
                        onClick: m[1] || (m[1] = (p)=>u("mobile-data"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(mt))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.data")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "tools" || d.app_active_tab.startsWith("tool-")
                            }
                        ]),
                        onClick: m[2] || (m[2] = (p)=>u("tools"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(G)
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.tools")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "mobile-settings" || d.app_active_tab.startsWith("settings-")
                            }
                        ]),
                        onClick: m[3] || (m[3] = (p)=>u("mobile-settings"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(q))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.settings")), 1)
                    ], 2)
                ])) : M("", !0);
            };
        }
    };
    Dt = Q(It, [
        [
            "__scopeId",
            "data-v-3dd01012"
        ]
    ]);
    Rt = {
        __name: "desktopBody",
        setup (d) {
            const e = x(), l = J(null), b = i(()=>s(()=>import("./vaultList-CabkdS8n.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))), u = i(()=>s(()=>import("./addVault-BehQrJY6.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([19,5,6,1,2,3,10,4,7,8,9,11,12,20]))), c = i(()=>s(()=>import("./dataExport-CVeUbTQU.js"), __vite__mapDeps([21,1,2,3,22,4,5,6,7,8,9,23,10,11,24,16,25,26,17,13,14,27]))), m = i(()=>s(()=>import("./dataImport-oAOY329N.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,23,10,11,24,16,25,26,13,14,22,29]))), g = i(()=>s(()=>import("./dataBackup-DxkKthzQ.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,23,10,11,24,16,25,26,13,14]))), p = i(()=>s(()=>import("./utilityTools-CnzAwlS6.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([31,5,6,1,2,3,32,4,7,8,9]))), V = i(()=>s(()=>import("./passkeySettings-Dlp3nBwz.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,34,13,14]))), f = i(()=>s(()=>import("./securitySettings-B2OQKuaV.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,36,11,13,14,37]))), L = i(()=>s(()=>import("./appearanceSetting-BlsHb3KH.js"), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39]))), P = i(()=>s(()=>import("./languageSettings-Cajhhjz2.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9]))), O = i(()=>s(()=>import("./themeSettings-CezYLaLg.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,39]))), h = i(()=>s(()=>import("./layoutSettings-mIFPpr_g.js"), __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43]))), w = i(()=>s(()=>import("./devicesSettings-DFPKuDsQ.js"), __vite__mapDeps([44,1,2,3,4,5,6,7,8,9]))), r = i(()=>s(()=>import("./trashSettings-CcBZq3GE.js"), __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,15,10,11]))), E = i(()=>s(()=>import("./pinSettings-Cx_t4wFe.js"), __vite__mapDeps([46,1,2,3,4,5,6,7,8,9,36,13,14]))), B = i(()=>s(()=>import("./aboutView-LK-52YBU.js"), __vite__mapDeps([47,4,5,6,2,1,3,7,8,9])));
            let I = !1;
            const T = ()=>{
                e.setActiveTab("vault"), l.value ? R(()=>l.value?.fetchVault()) : I = !0;
            };
            return D(l, (y)=>{
                y && I && (I = !1, R(()=>y.fetchVault()));
            }), D(()=>e.homeTabReset, ()=>{
                e.app_active_tab === "vault" ? l.value?.fetchVault() : (e.setActiveTab("vault"), I = !0);
            }), D(()=>e.app_active_tab, ()=>{
                R(()=>{
                    window.scrollTo(0, 0);
                    const y = document.querySelector(".main-content");
                    y && (y.scrollTop = 0);
                });
            }), (y, k)=>{
                const U = j;
                return a(), o(U, {
                    class: "main-content"
                }, {
                    default: n(()=>[
                            _(H, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: n(()=>[
                                        (a(), S("div", {
                                            key: t(e).app_active_tab,
                                            class: "view-container"
                                        }, [
                                            t(e).app_active_tab === "vault" ? (a(), o(t(b), {
                                                key: 0,
                                                ref_key: "vaultListRef",
                                                ref: l,
                                                onSwitchTab: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSwitchTab"
                                            ])) : t(e).app_active_tab === "add-vault" ? (a(), o(t(u), {
                                                key: 1,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(c), {
                                                key: 2
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(m), {
                                                key: 3,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(g), {
                                                key: 4,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(p), {
                                                key: 5
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(V), {
                                                key: 6
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(f), {
                                                key: 7
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(L), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(P), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(O), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(h), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(w), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-trash" ? (a(), o(t(r), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-pin" ? (a(), o(t(E), {
                                                key: 14
                                            })) : t(e).app_active_tab === "settings-about" ? (a(), o(t(B), {
                                                key: 15
                                            })) : M("", !0)
                                        ]))
                                    ]),
                                _: 1
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    };
    Pt = {
        __name: "mobileBody",
        setup (d) {
            const e = x(), l = J(null), b = i(()=>s(()=>import("./vaultList-CabkdS8n.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))), u = i(()=>s(()=>import("./mobileHub-ByEhe9Vo.js"), __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,32]))), c = i(()=>s(()=>import("./aboutView-LK-52YBU.js"), __vite__mapDeps([47,4,5,6,2,1,3,7,8,9]))), m = i(()=>s(()=>import("./addVault-BehQrJY6.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([19,5,6,1,2,3,10,4,7,8,9,11,12,20]))), g = i(()=>s(()=>import("./dataExport-CVeUbTQU.js"), __vite__mapDeps([21,1,2,3,22,4,5,6,7,8,9,23,10,11,24,16,25,26,17,13,14,27]))), p = i(()=>s(()=>import("./dataImport-oAOY329N.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,23,10,11,24,16,25,26,13,14,22,29]))), V = i(()=>s(()=>import("./dataBackup-DxkKthzQ.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,23,10,11,24,16,25,26,13,14]))), f = i(()=>s(()=>import("./utilityTools-CnzAwlS6.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([31,5,6,1,2,3,32,4,7,8,9]))), L = i(()=>s(()=>import("./passkeySettings-Dlp3nBwz.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,34,13,14]))), P = i(()=>s(()=>import("./appearanceSetting-BlsHb3KH.js"), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39]))), O = i(()=>s(()=>import("./securitySettings-B2OQKuaV.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,36,11,13,14,37]))), h = i(()=>s(()=>import("./languageSettings-Cajhhjz2.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9]))), w = i(()=>s(()=>import("./themeSettings-CezYLaLg.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,39]))), r = i(()=>s(()=>import("./layoutSettings-mIFPpr_g.js"), __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43]))), E = i(()=>s(()=>import("./devicesSettings-DFPKuDsQ.js"), __vite__mapDeps([44,1,2,3,4,5,6,7,8,9]))), B = i(()=>s(()=>import("./trashSettings-CcBZq3GE.js"), __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,15,10,11]))), I = i(()=>s(()=>import("./pinSettings-Cx_t4wFe.js"), __vite__mapDeps([46,1,2,3,4,5,6,7,8,9,36,13,14])));
            let T = !1;
            const y = ()=>{
                e.setActiveTab("vault"), l.value ? R(()=>l.value?.fetchVault()) : T = !0;
            };
            return D(l, (k)=>{
                k && T && (T = !1, R(()=>k.fetchVault()));
            }), D(()=>e.homeTabReset, ()=>{
                e.setActiveTab("vault"), T = !0;
            }), D(()=>e.app_active_tab, ()=>{
                R(()=>{
                    const k = document.querySelector("#app");
                    k && (k.scrollTop = 0), setTimeout(()=>{
                        k && k.scrollTop !== 0 && (k.scrollTop = 0);
                    }, 10);
                });
            }), (k, U)=>{
                const K = j;
                return a(), o(K, {
                    class: "main-content has-bottom-nav"
                }, {
                    default: n(()=>[
                            _(H, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: n(()=>[
                                        (a(), S("div", {
                                            key: t(e).app_active_tab,
                                            class: "view-container"
                                        }, [
                                            t(e).app_active_tab === "vault" ? (a(), o(t(b), {
                                                key: 0,
                                                ref_key: "vaultListRef",
                                                ref: l,
                                                onSwitchTab: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSwitchTab"
                                            ])) : t(e).app_active_tab === "mobile-data" ? (a(), o(t(u), {
                                                key: 1,
                                                mode: "data",
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSelect"
                                            ])) : t(e).app_active_tab === "mobile-settings" ? (a(), o(t(u), {
                                                key: 2,
                                                mode: "settings",
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSelect"
                                            ])) : t(e).app_active_tab === "settings-about" ? (a(), o(t(c), {
                                                key: 3
                                            })) : t(e).app_active_tab === "add-vault" ? (a(), o(t(m), {
                                                key: 4,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(g), {
                                                key: 5
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(p), {
                                                key: 6,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(V), {
                                                key: 7,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(f), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(L), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(P), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(O), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(h), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(w), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(r), {
                                                key: 14
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(E), {
                                                key: 15
                                            })) : t(e).app_active_tab === "settings-trash" ? (a(), o(t(B), {
                                                key: 16
                                            })) : t(e).app_active_tab === "settings-pin" ? (a(), o(t(I), {
                                                key: 17
                                            })) : M("", !0)
                                        ]))
                                    ]),
                                _: 1
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    };
    Ot = {
        __name: "home",
        setup (d) {
            const e = x();
            return gt(()=>{
                const l = [
                    "vault",
                    "add-vault",
                    "tools",
                    "backups",
                    "migration-export",
                    "migration-import"
                ];
                e.isMobile && l.push("mobile-data", "mobile-settings");
                const b = e.app_active_tab.startsWith("settings-");
                !l.includes(e.app_active_tab) && !b && e.setActiveTab("vault");
            }), (l, b)=>{
                const u = dt;
                return a(), o(u, {
                    class: "home-container"
                }, {
                    default: n(()=>[
                            _(u, {
                                class: "main-body"
                            }, {
                                default: n(()=>[
                                        t(e).isMobile ? (a(), o(Pt, {
                                            key: 1
                                        })) : (a(), S(C, {
                                            key: 0
                                        }, [
                                            _(Lt, {
                                                app_active_tab: t(e).app_active_tab,
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "app_active_tab",
                                                "onSelect"
                                            ]),
                                            _(Rt)
                                        ], 64))
                                    ]),
                                _: 1
                            }),
                            t(e).isMobile ? (a(), o(Dt, {
                                key: 0,
                                app_active_tab: t(e).app_active_tab,
                                onSelect: t(e).setActiveTab
                            }, null, 8, [
                                "app_active_tab",
                                "onSelect"
                            ])) : M("", !0)
                        ]),
                    _: 1
                });
            };
        }
    };
    Bt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ot
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { At as I, Bt as h, __tla };
