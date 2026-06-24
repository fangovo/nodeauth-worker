const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-DrDh7php.js","assets/element-plus-BHS6vjDl.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/qr-utils-7t4IiZrV.js","assets/index-C02dA_HM.js","assets/pdf-utils-D3SLYqmy.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-DV2JH8XC.js","assets/index-BvTGjkv3.css"])))=>i.map(i=>d[i]);
import { _ as Ae, __tla as __tla_0 } from "./pdf-utils-D3SLYqmy.js";
import { C as P, e as Be, w as Ie, u as Se, aJ as ve, af as ue, G as Ue, O as ze, j as He, x as Ee, N as Te, ai as Re, aX as Ne, r as qe, aS as Oe, _ as De, $ as Me, f as Qe, m as je } from "./element-plus-BHS6vjDl.js";
import { aD as fe, a2 as Ge, a4 as Pe, aa as f, a6 as g, l as R, i as o, al as c, r as l, aF as d, q as B, W as M, at as e, aG as L, aB as Z, O as A, j, F as re, k as pe, t as Le } from "./vue-core-DHcoxuim.js";
import { a as Fe } from "./tanstack-query-DV2JH8XC.js";
import { c as de, t as Je } from "./common-BQ2qWOzo.js";
import { b as We, g as Xe, p as Ye, v as Ke, __tla as __tla_1 } from "./vaultService-BZety4qF.js";
import { f as Ze, k as x, h as ce, j as ee, u as xe, i as le, c as el, g as ll, x as tl, r as al, v as sl, M as ol, __tla as __tla_2 } from "./index-C02dA_HM.js";
import { Q as nl } from "./qr-utils-7t4IiZrV.js";
import "./compression-utils-BzBbrBKd.js";
import { __tla as __tla_3 } from "./resourceRegistry-D1N45fAB.js";
import "./simplewebauthn-3qpiAaRi.js";
let nt;
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
    function il() {
        const m = f("base32"), _ = f(""), h = f(""), C = f(""), V = f(""), n = f("totp"), u = f("NodeAuth.io"), H = f("NodeAuth"), p = f("SHA1"), b = f(6), y = f(30), I = f(0), S = f(0), q = f(""), N = f(""), E = f(30);
        let O = null;
        fe(n, (r)=>{
            r === "steam" ? (p.value = "SHA1", b.value = 5, y.value = 30, u.value = "Steam") : r === "blizzard" ? (p.value = "SHA1", b.value = 8, y.value = 30, u.value = "Battle.net") : r === "hotp" ? (p.value = "SHA1", b.value = 6, y.value = 30, I.value = 0, u.value = "NodeAuth.io") : (p.value = "SHA1", b.value = 6, y.value = 30, u.value = "NodeAuth.io"), v("settings");
        });
        const v = async (r)=>{
            try {
                if (r === "base32") {
                    const a = Ze(_.value);
                    h.value = x(a), C.value = ce(a), V.value = ee(a);
                } else if (r === "hex") {
                    const a = xe(h.value);
                    a.length > 0 && (_.value = le(a), C.value = ce(a), V.value = ee(a));
                } else if (r === "ascii") {
                    const a = el(C.value);
                    _.value = le(a), h.value = x(a), V.value = ee(a);
                } else if (r === "base64") {
                    const a = ll(V.value);
                    a.length > 0 && (_.value = le(a), h.value = x(a), C.value = ce(a));
                }
                _.value ? q.value = We({
                    service: u.value,
                    account: H.value,
                    secret: _.value,
                    algorithm: p.value,
                    digits: b.value,
                    period: y.value,
                    counter: I.value,
                    type: n.value
                }) : (q.value = "", N.value = ""), Y();
            } catch (a) {
                tl.error(a);
            }
        }, F = ()=>v("base32"), D = ()=>v("hex"), J = ()=>v("ascii"), te = ()=>v("base64"), W = ()=>v("settings"), X = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), _.value = le(r), v("base32");
        }, ae = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), h.value = x(r), v("hex");
        }, k = ()=>{
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
            let a = "";
            const U = new Uint32Array(20);
            window.crypto.getRandomValues(U);
            for(let $ = 0; $ < 20; $++)a += r[U[$] % r.length];
            C.value = a, v("ascii");
        }, se = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), V.value = ee(r), v("base64");
        }, Y = async ()=>{
            if (!_.value) return;
            const r = y.value;
            let a = al() / 1e3 + S.value;
            E.value = Math.ceil(r - a % r), n.value === "hotp" && (E.value = 0);
            try {
                const U = n.value === "hotp" ? I.value : r, $ = n.value === "hotp" ? 0 : Math.floor(S.value / r);
                N.value = await Xe(_.value, U, b.value, p.value, n.value, $);
            } catch  {
                N.value = "ERROR";
            }
        }, oe = (r, a = !1)=>{
            a ? S.value = 0 : S.value += r, W();
        }, ne = ()=>{
            I.value++, v("settings");
        }, G = (r)=>{
            const a = Ye(r);
            return a ? (a.secret && (_.value = a.secret, v("base32")), a.service && (u.value = a.service), a.account && (H.value = a.account), a.digits && (b.value = a.digits), a.period && (y.value = a.period), a.counter && (I.value = a.counter), a.algorithm && (p.value = a.algorithm), v("settings"), !0) : !1;
        };
        return Ge(()=>{
            X(), O = setInterval(Y, 1e3);
        }), Pe(()=>{
            O && clearInterval(O);
        }), {
            app_active_tab: m,
            type: n,
            secretBase32: _,
            secretHex: h,
            secretAscii: C,
            secretBase64: V,
            issuer: u,
            account: H,
            algorithm: p,
            digits: b,
            period: y,
            app_time_offset: S,
            currentUri: q,
            currentCode: N,
            remaining: E,
            counter: I,
            handleBase32Input: F,
            handleHexInput: D,
            handleAsciiInput: J,
            handleBase64Input: te,
            updateUri: W,
            refreshBase32: X,
            refreshHex: ae,
            refreshAscii: k,
            refreshBase64: se,
            adjustTime: oe,
            handleParsedUri: G,
            incrementCounter: ne
        };
    }
    function ul(m, _) {
        const { t: h } = sl.global, C = f(!1), V = f(!1), n = f("");
        return fe(()=>m.currentUri.value, async (p)=>{
            if (p) try {
                n.value = await nl.toDataURL(p, {
                    width: 200,
                    margin: 1
                });
            } catch  {
                n.value = "";
            }
            else n.value = "";
        }), {
            isSaving: C,
            showScanner: V,
            qrCodeUrl: n,
            handleScanSuccess: (p)=>{
                V.value = !1, m.handleParsedUri(p) ? P.success(h("tools.qr_parsed")) : P.warning(h("vault.generate_fail"));
            },
            saveToVault: async ()=>{
                if (!m.secretBase32.value) return P.warning(h("tools.secret_empty"));
                if (!m.issuer.value || !m.account.value) return P.warning(h("tools.fill_info"));
                C.value = !0;
                try {
                    (await Ke.createAccount({
                        service: m.issuer.value,
                        account: m.account.value,
                        secret: m.secretBase32.value,
                        type: m.type.value,
                        digits: m.digits.value,
                        period: m.period.value,
                        algorithm: m.algorithm.value,
                        category: h("tools.title")
                    })).success && (P.success(h("vault.add_success")), _.invalidateQueries([
                        "vault"
                    ]));
                } catch  {} finally{
                    C.value = !1;
                }
            }
        };
    }
    let rl, dl, cl, vl, pl, fl, ml, _l, hl, bl, gl, yl, $l, wl, Cl, Vl, kl, Al, Bl, Il, Sl, Ul, zl, Hl, El, Tl, Rl, Nl, ql, Ol, Dl, Ml, Ql, jl, Gl, Pl, Ll, Fl, Jl, Wl;
    rl = {
        class: "tool-pane"
    };
    dl = {
        class: "totp-layout"
    };
    cl = {
        class: "config-side"
    };
    vl = {
        class: "config-section"
    };
    pl = {
        class: "section-header"
    };
    fl = {
        class: "section-title"
    };
    ml = {
        class: "pill-tabs-container"
    };
    _l = {
        class: "unified-input-card"
    };
    hl = {
        class: "inline-input-actions"
    };
    bl = {
        class: "config-section"
    };
    gl = {
        class: "section-title"
    };
    yl = {
        class: "meta-row"
    };
    $l = {
        class: "input-label"
    };
    wl = {
        class: "input-label"
    };
    Cl = {
        class: "config-section advanced-settings"
    };
    Vl = {
        class: "section-title"
    };
    kl = {
        class: "mb-15"
    };
    Al = {
        class: "advanced-settings-grid"
    };
    Bl = {
        class: "label-text mb-5"
    };
    Il = {
        class: "label-text mb-5"
    };
    Sl = {
        class: "label-text mb-5"
    };
    Ul = {
        class: "config-section"
    };
    zl = {
        class: "section-header"
    };
    Hl = {
        class: "section-title"
    };
    El = {
        class: "unified-preview-card"
    };
    Tl = {
        class: "preview-layout-grid"
    };
    Rl = {
        class: "qr-unified-wrapper"
    };
    Nl = [
        "src"
    ];
    ql = {
        class: "totp-unified-details"
    };
    Ol = [
        "title"
    ];
    Dl = {
        key: 1,
        style: {
            "margin-left": "10px"
        }
    };
    Ml = {
        key: 0,
        class: "uri-box"
    };
    Ql = {
        class: "uri-text"
    };
    jl = {
        class: "config-section time-travel-section"
    };
    Gl = {
        class: "section-header"
    };
    Pl = {
        class: "section-title mb-0"
    };
    Ll = {
        class: "time-travel-controls"
    };
    Fl = {
        class: "offset-display"
    };
    Jl = {
        class: "offset-label"
    };
    Wl = {
        class: "config-section mt-20"
    };
    nt = {
        __name: "totpSecret",
        setup (m) {
            const _ = ol(), h = Le(()=>Ae(()=>import("./qrScanner-DrDh7php.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), C = Fe(), V = il(), { app_active_tab: n, type: u, secretBase32: H, secretHex: p, secretAscii: b, secretBase64: y, issuer: I, account: S, algorithm: q, digits: N, period: E, app_time_offset: O, counter: v, currentUri: F, currentCode: D, remaining: J, handleBase32Input: te, handleHexInput: W, handleAsciiInput: X, handleBase64Input: ae, updateUri: k, refreshBase32: se, refreshHex: Y, refreshAscii: oe, refreshBase64: ne, adjustTime: G, incrementCounter: r } = V, { isSaving: a, showScanner: U, qrCodeUrl: $, handleScanSuccess: me, saveToVault: _e } = ul(V, C), he = ()=>{
                n.value === "base32" ? se() : n.value === "hex" ? Y() : n.value === "ascii" ? oe() : n.value === "base64" && ne();
            }, be = ()=>{
                let t = "";
                n.value === "base32" ? t = H.value : n.value === "hex" ? t = p.value : n.value === "ascii" ? t = b.value : n.value === "base64" && (t = y.value), t && de(t);
            }, ge = ()=>{
                $.value && Je($.value, `nodeauth-qr-${S.value || "code"}.png`);
            };
            return (t, s)=>{
                const z = Be, Q = Ie, T = Se, w = Ue, K = ze, ie = He, ye = Ee, $e = Te, we = qe, Ce = Qe, Ve = je, ke = Ne;
                return g(), R("div", rl, [
                    o("div", dl, [
                        o("div", cl, [
                            o("div", vl, [
                                o("div", pl, [
                                    o("h3", fl, c(t.$t("tools.secret_config")), 1),
                                    l(z, {
                                        link: "",
                                        type: "primary",
                                        onClick: s[0] || (s[0] = (i)=>U.value = !0)
                                    }, {
                                        default: d(()=>[
                                                B(c(t.$t("vault.add_scan")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", ml, [
                                    o("div", {
                                        class: M([
                                            "pill-tab",
                                            {
                                                active: e(n) === "base32"
                                            }
                                        ]),
                                        onClick: s[1] || (s[1] = (i)=>n.value = "base32")
                                    }, "Base32", 2),
                                    o("div", {
                                        class: M([
                                            "pill-tab",
                                            {
                                                active: e(n) === "hex"
                                            }
                                        ]),
                                        onClick: s[2] || (s[2] = (i)=>n.value = "hex")
                                    }, c(t.$t("tools.totp_hex")), 3),
                                    o("div", {
                                        class: M([
                                            "pill-tab",
                                            {
                                                active: e(n) === "ascii"
                                            }
                                        ]),
                                        onClick: s[3] || (s[3] = (i)=>n.value = "ascii")
                                    }, "ASCII", 2),
                                    o("div", {
                                        class: M([
                                            "pill-tab",
                                            {
                                                active: e(n) === "base64"
                                            }
                                        ]),
                                        onClick: s[4] || (s[4] = (i)=>n.value = "base64")
                                    }, "Base64", 2)
                                ]),
                                o("div", _l, [
                                    L(l(Q, {
                                        modelValue: e(H),
                                        "onUpdate:modelValue": s[5] || (s[5] = (i)=>A(H) ? H.value = i : null),
                                        onInput: e(te),
                                        placeholder: "JBSWY3DP...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            Z,
                                            e(n) === "base32"
                                        ]
                                    ]),
                                    L(l(Q, {
                                        modelValue: e(p),
                                        "onUpdate:modelValue": s[6] || (s[6] = (i)=>A(p) ? p.value = i : null),
                                        onInput: e(W),
                                        placeholder: "48656c6c6f...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            Z,
                                            e(n) === "hex"
                                        ]
                                    ]),
                                    L(l(Q, {
                                        modelValue: e(b),
                                        "onUpdate:modelValue": s[7] || (s[7] = (i)=>A(b) ? b.value = i : null),
                                        onInput: e(X),
                                        placeholder: "Hello...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            Z,
                                            e(n) === "ascii"
                                        ]
                                    ]),
                                    L(l(Q, {
                                        modelValue: e(y),
                                        "onUpdate:modelValue": s[8] || (s[8] = (i)=>A(y) ? y.value = i : null),
                                        onInput: e(ae),
                                        placeholder: "SGVsbG8...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            Z,
                                            e(n) === "base64"
                                        ]
                                    ]),
                                    o("div", hl, [
                                        l(z, {
                                            link: "",
                                            type: "primary",
                                            onClick: he
                                        }, {
                                            default: d(()=>[
                                                    l(T, null, {
                                                        default: d(()=>[
                                                                l(e(ve))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    B(" " + c(t.$t("tools.regenerate")), 1)
                                                ]),
                                            _: 1
                                        }),
                                        l(z, {
                                            link: "",
                                            type: "primary",
                                            onClick: be
                                        }, {
                                            default: d(()=>[
                                                    l(T, null, {
                                                        default: d(()=>[
                                                                l(e(ue))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    B(" " + c(t.$t("common.copy")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ])
                                ])
                            ]),
                            o("div", bl, [
                                o("h3", gl, c(t.$t("tools.basic_info")), 1),
                                o("div", yl, [
                                    l(Q, {
                                        modelValue: e(I),
                                        "onUpdate:modelValue": s[9] || (s[9] = (i)=>A(I) ? I.value = i : null),
                                        onInput: e(k)
                                    }, {
                                        prefix: d(()=>[
                                                o("span", $l, c(t.$t("vault.service")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]),
                                    l(Q, {
                                        modelValue: e(S),
                                        "onUpdate:modelValue": s[10] || (s[10] = (i)=>A(S) ? S.value = i : null),
                                        onInput: e(k)
                                    }, {
                                        prefix: d(()=>[
                                                o("span", wl, c(t.$t("vault.account")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ])
                                ])
                            ]),
                            o("div", Cl, [
                                o("h3", Vl, c(t.$t("tools.advanced_settings")), 1),
                                o("div", kl, [
                                    l(K, {
                                        modelValue: e(u),
                                        "onUpdate:modelValue": s[11] || (s[11] = (i)=>A(u) ? u.value = i : null),
                                        onChange: e(k),
                                        class: "w-full"
                                    }, {
                                        default: d(()=>[
                                                l(w, {
                                                    label: t.$t("vault.otp_type_totp"),
                                                    value: "totp"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                l(w, {
                                                    label: t.$t("vault.otp_type_hotp"),
                                                    value: "hotp"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                l(w, {
                                                    label: t.$t("vault.otp_type_steam"),
                                                    value: "steam"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                l(w, {
                                                    label: t.$t("vault.otp_type_blizzard"),
                                                    value: "blizzard"
                                                }, null, 8, [
                                                    "label"
                                                ])
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange"
                                    ])
                                ]),
                                o("div", Al, [
                                    l($e, {
                                        gutter: 12
                                    }, {
                                        default: d(()=>[
                                                l(ie, {
                                                    span: 8
                                                }, {
                                                    default: d(()=>[
                                                            o("div", Bl, c(t.$t("vault.algorithm_label")), 1),
                                                            l(K, {
                                                                modelValue: e(q),
                                                                "onUpdate:modelValue": s[12] || (s[12] = (i)=>A(q) ? q.value = i : null),
                                                                onChange: e(k),
                                                                placeholder: t.$t("tools.totp_algorithm"),
                                                                class: "w-full",
                                                                disabled: e(u) === "steam" || e(u) === "blizzard"
                                                            }, {
                                                                default: d(()=>[
                                                                        l(w, {
                                                                            label: t.$t("tools.totp_algo_sha1"),
                                                                            value: "SHA1"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        l(w, {
                                                                            label: "SHA256",
                                                                            value: "SHA256"
                                                                        }),
                                                                        l(w, {
                                                                            label: "SHA512",
                                                                            value: "SHA512"
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "onChange",
                                                                "placeholder",
                                                                "disabled"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }),
                                                l(ie, {
                                                    span: 8
                                                }, {
                                                    default: d(()=>[
                                                            o("div", Il, c(t.$t("vault.digits_label")), 1),
                                                            l(K, {
                                                                modelValue: e(N),
                                                                "onUpdate:modelValue": s[13] || (s[13] = (i)=>A(N) ? N.value = i : null),
                                                                onChange: e(k),
                                                                placeholder: t.$t("tools.totp_digits"),
                                                                class: "w-full",
                                                                disabled: e(u) === "steam" || e(u) === "blizzard"
                                                            }, {
                                                                default: d(()=>[
                                                                        e(u) === "steam" ? (g(), j(w, {
                                                                            key: 0,
                                                                            label: t.$t("vault.digits_5"),
                                                                            value: 5
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ])) : e(u) === "blizzard" ? (g(), j(w, {
                                                                            key: 1,
                                                                            label: t.$t("vault.digits_8"),
                                                                            value: 8
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ])) : (g(), R(re, {
                                                                            key: 2
                                                                        }, [
                                                                            l(w, {
                                                                                label: t.$t("vault.digits_6"),
                                                                                value: 6
                                                                            }, null, 8, [
                                                                                "label"
                                                                            ]),
                                                                            l(w, {
                                                                                label: t.$t("vault.digits_8"),
                                                                                value: 8
                                                                            }, null, 8, [
                                                                                "label"
                                                                            ])
                                                                        ], 64))
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "onChange",
                                                                "placeholder",
                                                                "disabled"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }),
                                                l(ie, {
                                                    span: 8
                                                }, {
                                                    default: d(()=>[
                                                            o("div", Sl, c(e(u) === "hotp" ? t.$t("vault.counter_label") : t.$t("vault.period_label")), 1),
                                                            e(u) === "hotp" ? (g(), j(ye, {
                                                                key: 0,
                                                                modelValue: e(v),
                                                                "onUpdate:modelValue": s[14] || (s[14] = (i)=>A(v) ? v.value = i : null),
                                                                min: 0,
                                                                onChange: e(k),
                                                                class: "w-full",
                                                                "controls-position": "right"
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "onChange"
                                                            ])) : (g(), j(K, {
                                                                key: 1,
                                                                modelValue: e(E),
                                                                "onUpdate:modelValue": s[15] || (s[15] = (i)=>A(E) ? E.value = i : null),
                                                                onChange: e(k),
                                                                placeholder: t.$t("tools.totp_period"),
                                                                class: "w-full",
                                                                disabled: e(u) === "steam" || e(u) === "blizzard"
                                                            }, {
                                                                default: d(()=>[
                                                                        l(w, {
                                                                            label: t.$t("vault.period_30s"),
                                                                            value: 30
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        l(w, {
                                                                            label: t.$t("vault.period_60s"),
                                                                            value: 60
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "onChange",
                                                                "placeholder",
                                                                "disabled"
                                                            ]))
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            o("div", Ul, [
                                o("div", zl, [
                                    o("h3", Hl, c(t.$t("tools.preview")), 1),
                                    l(z, {
                                        link: "",
                                        type: "primary",
                                        onClick: ge,
                                        disabled: !e($)
                                    }, {
                                        default: d(()=>[
                                                l(T, null, {
                                                    default: d(()=>[
                                                            l(e(Re))
                                                        ]),
                                                    _: 1
                                                }),
                                                B(" " + c(t.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "disabled"
                                    ])
                                ]),
                                o("div", El, [
                                    o("div", Tl, [
                                        L((g(), R("div", Rl, [
                                            e($) ? (g(), R("img", {
                                                key: 0,
                                                src: e($),
                                                alt: "QR Code",
                                                class: "qr-img-unified"
                                            }, null, 8, Nl)) : (g(), j(we, {
                                                key: 1,
                                                description: t.$t("tools.totp_config_preview"),
                                                "image-size": 80
                                            }, null, 8, [
                                                "description"
                                            ]))
                                        ])), [
                                            [
                                                ke,
                                                !e($)
                                            ]
                                        ]),
                                        o("div", ql, [
                                            o("div", {
                                                class: "totp-code-clickable flex flex-items-center gap-10",
                                                onClick: s[16] || (s[16] = (i)=>e(D) && e(de)(e(D), t.$t("common.copy_success"))),
                                                title: t.$t("common.copy")
                                            }, [
                                                o("span", {
                                                    class: M([
                                                        "totp-code-giant",
                                                        {
                                                            blur: !e(D)
                                                        }
                                                    ])
                                                }, c(e(D) || "------"), 3),
                                                e(D) ? (g(), j(T, {
                                                    key: 0,
                                                    color: "var(--el-color-primary)",
                                                    size: "20"
                                                }, {
                                                    default: d(()=>[
                                                            l(e(ue))
                                                        ]),
                                                    _: 1
                                                })) : pe("", !0)
                                            ], 8, Ol),
                                            e(u) !== "hotp" ? (g(), R("div", {
                                                key: 0,
                                                class: M([
                                                    "totp-timer",
                                                    {
                                                        urgent: e(J) < 5
                                                    }
                                                ]),
                                                style: {
                                                    "margin-left": "10px"
                                                }
                                            }, [
                                                l(T, null, {
                                                    default: d(()=>[
                                                            l(e(Oe))
                                                        ]),
                                                    _: 1
                                                }),
                                                B(" " + c(e(J)) + "s " + c(t.$t("tools.refresh_after")), 1)
                                            ], 2)) : (g(), R("div", Dl, [
                                                l(z, {
                                                    type: "primary",
                                                    circle: "",
                                                    onClick: e(r)
                                                }, {
                                                    default: d(()=>[
                                                            l(T, null, {
                                                                default: d(()=>[
                                                                        l(e(ve))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick"
                                                ])
                                            ]))
                                        ])
                                    ])
                                ]),
                                e($) ? (g(), R("div", Ml, [
                                    o("div", Ql, c(e(F)), 1),
                                    l(z, {
                                        link: "",
                                        type: "primary",
                                        onClick: s[17] || (s[17] = (i)=>e(de)(e(F)))
                                    }, {
                                        default: d(()=>[
                                                l(T, null, {
                                                    default: d(()=>[
                                                            l(e(ue))
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])) : pe("", !0)
                            ]),
                            o("div", jl, [
                                o("div", Gl, [
                                    o("h3", Pl, c(e(u) === "hotp" ? t.$t("vault.counter_label") : t.$t("tools.time_offset")), 1),
                                    l(z, {
                                        link: "",
                                        type: "primary",
                                        onClick: s[18] || (s[18] = (i)=>e(u) === "hotp" ? (v.value = 0, e(k)()) : e(G)(0, !0)),
                                        size: "small"
                                    }, {
                                        default: d(()=>[
                                                B(c(t.$t("tools.reset_time")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", Ll, [
                                    o("div", Fl, [
                                        o("span", Jl, c(e(u) === "hotp" ? t.$t("vault.counter_label") : t.$t("tools.current_offset")), 1),
                                        o("span", {
                                            class: M([
                                                "offset-value",
                                                {
                                                    "has-offset": e(u) === "hotp" ? e(v) > 0 : e(O) !== 0
                                                }
                                            ])
                                        }, [
                                            e(u) === "hotp" ? (g(), R(re, {
                                                key: 0
                                            }, [
                                                B(c(e(v)), 1)
                                            ], 64)) : (g(), R(re, {
                                                key: 1
                                            }, [
                                                B(c(e(O) > 0 ? "+" : "") + c(e(O)) + "s", 1)
                                            ], 64))
                                        ], 2)
                                    ]),
                                    l(Ce, {
                                        class: "segmented-control"
                                    }, {
                                        default: d(()=>[
                                                l(z, {
                                                    onClick: s[19] || (s[19] = (i)=>e(u) === "hotp" ? (v.value = Math.max(0, e(v) - 1), e(k)()) : e(G)(-e(E))),
                                                    size: "default"
                                                }, {
                                                    default: d(()=>[
                                                            l(T, {
                                                                class: "mr-10"
                                                            }, {
                                                                default: d(()=>[
                                                                        l(e(De))
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            B(" " + c(e(u) === "hotp" ? t.$t("common.prev") : t.$t("tools.prev_period")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                l(z, {
                                                    onClick: s[20] || (s[20] = (i)=>e(u) === "hotp" ? (v.value++, e(k)()) : e(G)(e(E))),
                                                    size: "default"
                                                }, {
                                                    default: d(()=>[
                                                            B(c(e(u) === "hotp" ? t.$t("common.next") : t.$t("tools.next_period")) + " ", 1),
                                                            l(T, {
                                                                class: "ml-5"
                                                            }, {
                                                                default: d(()=>[
                                                                        l(e(Me))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            o("div", Wl, [
                                l(z, {
                                    type: "success",
                                    size: "large",
                                    onClick: e(_e),
                                    class: "w-full",
                                    loading: e(a)
                                }, {
                                    default: d(()=>[
                                            B(c(t.$t("tools.save_to_vault")), 1)
                                        ]),
                                    _: 1
                                }, 8, [
                                    "onClick",
                                    "loading"
                                ])
                            ])
                        ])
                    ]),
                    l(Ve, {
                        modelValue: e(U),
                        "onUpdate:modelValue": s[21] || (s[21] = (i)=>A(U) ? U.value = i : null),
                        title: t.$t("tools.totp_scan_qr_title"),
                        width: e(_).isMobile ? "90%" : "450px",
                        "destroy-on-close": "",
                        "append-to-body": ""
                    }, {
                        default: d(()=>[
                                l(e(h), {
                                    onScanSuccess: e(me)
                                }, null, 8, [
                                    "onScanSuccess"
                                ])
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title",
                        "width"
                    ])
                ]);
            };
        }
    };
});
export { nt as default, __tla };
