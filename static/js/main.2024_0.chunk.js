(this.webpackJsonpd4n13l3k00 = this.webpackJsonpd4n13l3k00 || []).push([
    [0], {
        165: function(e, t, c) {
            "use strict";
            c.r(t);
            var n = c(23),
                i = c(1),
                s = c.n(i),
                r = c(29),
                a = c.n(r),
                o = c(4),
                l = (c(133), c(30)),
                j = c(17),
                d = c(168),
                b = c(169),
                x = c(170),
                h = c(171),
                p = c(42),
                m = c.n(p),
                g = c(2);

            function u() {
                var e = s.a.useState(""),
                    t = Object(n.a)(e, 2),
                    c = t[0],
                    i = t[1];
                return s.a.useEffect((function() {
                    var e = setInterval((function() {
                        i((new Date).toLocaleTimeString())
                    }), 100);
                    return function() {
                        return clearInterval(e)
                    }
                }), []), Object(g.jsx)(g.Fragment, {
                    children: c
                })
            }

            function O() {
                return Object(g.jsxs)(g.Fragment, {
                    children: ["", Object(g.jsx)(u, {}), Object(g.jsx)("s", {
                        children: ""
                    }), ""]
                })
            }
            var w = c(43),
                k = c.n(w);

            function f(e) {
                e.setActiveView, e.setActiveModal;
                return Object(g.jsxs)(g.Fragment, {
                    children: [Object(g.jsx)(o.q, {
                        children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
                    }), Object(g.jsx)(o.j, {
                        children: Object(g.jsxs)(o.g, {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                margin: "10px"
                            },
                            children: [Object(g.jsx)("div", {
                                className: "colmnd"
                            }), Object(g.jsxs)("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [Object(g.jsx)(o.c, {
                                    size: 128,
                                    src: "assets/images/favicon.png",
                                    style: {
                                        boxShadow: "0px 0px 75px 5px rgba(68, 171, 208, 0.3)"
                                    }
                                }), [12, 1].includes((new Date).getMonth() + 1) && Object(g.jsx)("img", {
                                    style: {
                                        position: "absolute",
                                        width: "64px",
                                        top: -10,
                                        left: 65,
                                        transform: "rotate(10deg)"
                                    },
                                    src: "assets/images/favicon.png",
                                    alt: "",
                                    className: "hat",
                                    onClick: function() {
                                        return Object(l.a)({
                                            targets: ".hat",
                                            rotate: [{
                                                value: 15,
                                                duration: 100,
                                                easing: "easeInOutElastic"
                                            }, {
                                                value: 5,
                                                duration: 100,
                                                easing: "easeInOutElastic"
                                            }, {
                                                value: 10,
                                                duration: 100,
                                                easing: "easeInOutElastic"
                                            }],
                                            elasticity: 5e3
                                        })
                                    }
                                })]
                            }), Object(g.jsx)("style", {
                                children: "keyframes gradiend {\n0% {\n  background-position: 0 50%;\n}\n50% {\n  background-position: 100% 50%;\n}\n100% {\n  background-position: 0 50%;\n}}\n.title {\n  animation: gradiend 5s ease-in-out infinite;\n  background: linear-gradient(to right, #6600ff, #93b8c0, #b3d7c9);\n  background-size: 300%;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n"
                            }), Object(g.jsx)(k.a, {
                                children: Object(g.jsx)(o.y, {
                                    className: "title",
                                    level: "1",
                                    weight: "bold",
                                    style: {
                                        marginTop: "16px"
                                    },
                                    children: "XasdesNew"
                                })
                            }), Object(g.jsx)(o.y, {
                                level: "3",
                                weight: "semibold",
                                style: {
                                    marginTop: "16px"
                                }
                            }), Object(g.jsx)(m.a, {
                                strings: ["NO SKAM","Python Developer"],
                                typeSpeed: 60,
                                backSpeed: 10,
                                cursorChar: "_",
                                loop: !0
                            }), Object(g.jsx)(o.y, {
                                level: "3",
                                weight: "semibold",
                                style: {
                                    marginTop: "16px"
                                },
                                children: Object(g.jsx)(O, {})
                            }), 
                            Object(g.jsx)(o.s, {}), Object(g.jsx)(o.s, {}), Object(g.jsx)(o.s, {}), Object(g.jsx)("a", {
                                href: "https://spotify-github-profile.vercel.app/api/view?uid=kli09xgbbkil2q35z8zq4stcq&redirect=true",
                                children: Object(g.jsx)("img", {
                                    src: "https://spotify-github-profile.vercel.app/api/view?uid=kli09xgbbkil2q35z8zq4stcq&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false&bar_color=622693&bar_color_cover=false",
                                    alt: ""
                                })
                            })
                        ]
                        })
                    })]
                })
            }

            function v(e) {
                navigator.clipboard.writeText(e.currentTarget.dataset.copy), j.b.success("\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!")
            }

            function y(e) {
                var t = j.b.loading("\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0432\u043d\u0435\u0448\u043d\u044e\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443...");
                setTimeout((function() {
                    window.open(e, "_blank"), j.b.dismiss(t)
                }), 1e3)
            }

            function C(e) {
                var t = e.currentTarget.dataset.href,
                    c = j.b.loading("\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0432\u043d\u0435\u0448\u043d\u044e\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443...");
                setTimeout((function() {
                    window.open(t, "_blank"), j.b.dismiss(c)
                }), 1e3)
            }

            /*function A(e) {
                var t = e.activeModal,
                    c = e.setActiveModal,
                    i = s.a.useState(50),
                    r = Object(n.a)(i, 2),
                    a = r[0],
                    l = r[1],
                    d = "THED4N13L3K00";
                return Object(g.jsxs)(o.o, {
                    activeModal: t,
                    children: [Object(g.jsx)(o.m, {
                        id: "mainModal",
                        onClose: function() {
                            return c(null)
                        },
                        header: "\u0417\u0430\u0447\u0435\u043c?",
                        subheader: "\u0422\u0443\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442\u0443",
                        actions: Object(g.jsxs)(o.g, {
                            children: [Object(g.jsx)(o.d, {
                                size: "l",
                                mode: "commerce",
                                onClick: function() {
                                    return c(null)
                                },
                                children: "\u041e\u043a"
                            }), Object(g.jsx)(o.d, {
                                size: "l",
                                mode: "commerce",
                                onClick: function() {
                                    return c(null)
                                },
                                children: "\u041d\u0435 \u043e\u043a"
                            })]
                        })
                    }), Object(g.jsx)(o.n, {
                        id: "qiwi",
                        onClose: function() {
                            return c(null)
                        },
                        dynamicContentHeight: !0,
                        children: Object(g.jsxs)(o.g, {
                            children: [Object(g.jsx)(o.y, {
                                style: {
                                    width: "100%",
                                    textAlign: "center",
                                    marginTop: "0.5em"
                                },
                                level: "2",
                                weight: "semibold",
                                children: "Qiwi"
                            }), Object(g.jsx)(o.i, {
                                top: "\u0421\u0443\u043c\u043c\u0430",
                                children: Object(g.jsx)(o.k, {
                                    type: "number",
                                    value: a,
                                    onChange: function(e) {
                                        l(e.currentTarget.value)
                                    },
                                    after: Object(g.jsx)(o.d, {
                                        style: {
                                            background: "#ff930c",
                                            color: "white"
                                        },
                                        size: "l",
                                        onClick: function() {
                                            if (a < 1) j.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 1 \u0440\u0443\u0431\u043b\u044f!");
                                            else {
                                                var e = new URL("https://qiwi.com/payment/form/99999");
                                                e.searchParams.append("extra['accountType']", "nickname"), e.searchParams.append("extra['account']", d), e.searchParams.append("currency", "643"), e.searchParams.append("blocked[0]", "sum"), e.searchParams.append("blocked[1]", "account"), e.searchParams.append("amountInteger", parseInt(a)), e.searchParams.append("amountFraction", 100 * (a % 1).toFixed(2)), c(null), y(e)
                                            }
                                        },
                                        children: "\u0414\u043e\u043d\u0430\u0442"
                                    })
                                })
                            }), Object(g.jsxs)(o.x, {
                                style: {
                                    width: "100%",
                                    textAlign: "center",
                                    marginTop: "0.5em",
                                    marginBottom: "1em"
                                },
                                children: ['\u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0414\u043e\u043d\u0430\u0442"', Object(g.jsx)("br", {}), "\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0430\u0439\u0442 \u041a\u0438\u0432\u0438 \u0431\u0430\u043d\u043a\u0430"]
                            }), Object(g.jsx)(o.d, {
                                style: {
                                    background: "#ff930c",
                                    color: "white",
                                    width: "100%"
                                },
                                size: "l",
                                "data-copy": d,
                                onClick: function(e) {
                                    v(e), c(null)
                                },
                                children: "\u041c\u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0443\u0436\u0435\u043d \u043d\u0438\u043a"
                            })]
                        })
                    })]
                })
            }*/
            var F = c(19),
                z = c(45),
                T = c(44);

            function M(e) {
                e.setActiveView, e.setActiveModal;
                return Object(g.jsxs)(g.Fragment, {
                    children: [Object(g.jsx)(o.q, {
                        children: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"
                    }), Object(g.jsx)(o.j, {
                        children: Object(g.jsxs)(o.g, {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyItems: "stretch",
                                justifyContent: "center",
                                textAlign: "center",
                                overflow: "hidden",
                                flexWrap: "wrap",
                                margin: "10px"
                            },
                            children: [Object(g.jsx)(o.y, {
                                style: {
                                    width: "100%",
                                    marginBottom: "16px"
                                },
                                level: "2",
                                weight: "semibold",
                                children: "☎️ \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B ☎️"
                            }), Object(g.jsx)(o.d, {
                                onClick: C,
                                before: Object(g.jsx)(F.c, {
                                    size: "18px"
                                }),
                                style: {
                                    margin: "3px",
                                    color: "#F0F6FC",
                                    background: "#25A3E2"
                                },
                                "data-href": "https://t.me/XasdesNew",
                                size: "l",
                                children: "Telegram"
                            }),   Object(g.jsx)(o.d, {
                                onClick: v,
                                before: Object(g.jsx)(z.a, {
                                    size: "18px"
                                }),
                                style: {
                                    margin: "3px",
                                    color: "#F0F6FC",
                                    background: "#0077ff"
                                },
                                "data-href": "mailto:xasdesso2@gmail.com",
                                size: "l",
                                children: "Mail"
                            }), Object(g.jsx)(o.d, {
                                onClick: C,
                                before: Object(g.jsx)(F.a, {
                                    size: "18px"
                                }),
                                style: {
                                    margin: "3px",
                                    color: "#F0F6FC",
                                    background: "#27303D"
                                },
                                "data-href": "https://github.com/xasdesnew",
                                size: "l",
                                children: "GitHub"
                            })]
                        })
                    })]
                })
            }
            var _ = c(33);

            function B(e) {
                e.setActiveView, e.setActiveModal;
                return Object(g.jsxs)(g.Fragment, {
                    children: [Object(g.jsx)(o.q, {
                        children: "\u0414\u043e\u043d\u0430\u0442"
                    }), Object(g.jsx)(o.j, {
                        children: Object(g.jsxs)(o.g, {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyItems: "stretch",
                                justifyContent: "center",
                                textAlign: "center",
                                overflow: "hidden",
                                flexWrap: "wrap",
                                margin: "10px"
                            },
                            children: [Object(g.jsx)(o.y, {
                                style: {
                                    width: "100%",
                                    marginBottom: "16px"
                                },
                                level: "2",
                                weight: "semibold",
                                children: "💸 ЕСЛИ ХОТИТЕ МЕНЯ ПОДДЕРЖАТЬ 💸"
                            }), Object(g.jsx)(o.d, {
                                onClick: function() {
                                  window.location.href = 'https://t.me/send?start=IVP8YKmguKHl';
                                },
                                before: Object(g.jsx)("img", {
                                  src: "/assets/icons/usdt.png",
                                  alt: "",
                                  style: {
                                    width: "14px"
                                  }
                                }),
                                style: {
                                  margin: "3px",
                                  background: "#26A17B",
                                  color: "white"
                                },
                                size: "l",
                                children: "CRYPTOBOT"
                              })
                              ]
                        })
                    })]
                })
            }
            var E = c(166),
                S = c(167);

            function I(e) {
                var t = e.title,
                    c = e.link,
                    n = e.job,
                    i = e.work,
                    z = e.odnoras,
                    s = e.instagram,
                    r = e.telegram,
                    a = e.vk,
                    l = i.toLowerCase().endsWith("now") ? (i = i.slice(0, i.length - 3) + " года", "ю") : (i += " ткстик2.", "тестик 3");
                return Object(g.jsxs)(o.r, {
                    children: [Object(g.jsx)(o.y, {
                        style: {
                            marginBottom: "4px"
                        },
                        level: "2",
                        weight: "semibold",
                        children: t
                    }), Object(g.jsxs)(o.x, {
                        style: {
                            marginBottom: "0px",
                            whiteSpace: "normal"
                        },
                        type: "regular",
                        children: ["\u2022 \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c: ", n, Object(g.jsx)("br", {}), "\u2022 \u0420\u0430\u0431\u043e\u0442\u0430", l, " ", i]
                    }),Object(g.jsxs)(o.x, {
                        style: {
                            marginBottom: "10px",
                            whiteSpace: "normal"
                        },
                        type: "regular",
                        children: ["\u2022 Заказной проект: ", z]
                    }), c && Object(g.jsx)(o.d, {
                        onClick: C,
                        "data-href": c,
                        style: {
                            marginRight: "4px"
                        },
                        before: Object(g.jsx)(E.a, {}),
                        mode: "commerce",
                        children: "\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"
                    }), r && Object(g.jsx)(o.d, {
                        onClick: C,
                        "data-href": r,
                        mode: "commerce",
                        style: {
                            verticalAlign: "top",
                            marginRight: "4px",
                            background: "#25A3E2"
                        },
                        before: Object(g.jsx)(F.c, {}),
                        children: "Telegram"
                    }), a && Object(g.jsx)(o.d, {
                        onClick: C,
                        "data-href": a,
                        mode: "commerce",
                        style: {
                            verticalAlign: "top",
                            marginRight: "4px",
                            background: "#0077ff"
                        },
                        before: Object(g.jsx)(S.a, {}),
                        children: "VK"
                    }), s && Object(g.jsx)(o.d, {
                        onClick: C,
                        "data-href": s,
                        mode: "commerce",
                        style: {
                            verticalAlign: "top",
                            marginRight: "4px",
                            background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
                        },
                        before: Object(g.jsx)(F.b, {}),
                        children: "Instagram"
                    })]
                })
            }


            function Y(e) {
                var t = e.title,
                    c = e.link,
                    n = e.job,
                    z = e.odnoras,
                    s = e.instagram,
                    r = e.telegram,
                    a = e.vk;
                return Object(g.jsxs)(o.r, {
                    children: [Object(g.jsx)(o.y, {
                        style: {
                            marginBottom: "4px"
                        },
                        level: "2",
                        weight: "semibold",
                        children: t
                    }), Object(g.jsxs)(o.x, {
                        style: {
                            marginBottom: "1px",
                            whiteSpace: "normal"
                        },
                        type: "regular",
                        children: ["\u2022 \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c: ", n]
                    }),Object(g.jsxs)(o.x, {
                        style: {
                            marginBottom: "10px",
                            whiteSpace: "normal"
                        },
                        type: "regular",
                        children: ["\u2022 Заказной проект: ", z]
                    }), c && Object(g.jsx)(o.d, {
                        onClick: C,
                        "data-href": c,
                        style: {
                            marginRight: "4px"
                        },
                        before: Object(g.jsx)(E.a, {}),
                        mode: "commerce",
                        children: "\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"
                    }), r && Object(g.jsx)(o.d, {
                        onClick: C,
                        "data-href": r,
                        mode: "commerce",
                        style: {
                            verticalAlign: "top",
                            marginRight: "4px",
                            background: "#25A3E2"
                        },
                        before: Object(g.jsx)(F.c, {}),
                        children: "Telegram"
                    }), a && Object(g.jsx)(o.d, {
                        onClick: C,
                        "data-href": a,
                        mode: "commerce",
                        style: {
                            verticalAlign: "top",
                            marginRight: "4px",
                            background: "#0077ff"
                        },
                        before: Object(g.jsx)(S.a, {}),
                        children: "VK"
                    }), s && Object(g.jsx)(o.d, {
                        onClick: C,
                        "data-href": s,
                        mode: "commerce",
                        style: {
                            verticalAlign: "top",
                            marginRight: "4px",
                            background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
                        },
                        before: Object(g.jsx)(F.b, {}),
                        children: "Instagram"
                    })]
                })
            }

            function P(e) {
                e.setActiveView, e.setActiveModal;
                return Object(g.jsxs)(g.Fragment, {
                    children: [Object(g.jsx)(o.q, {
                        children: "\u041e\u043f\u044b\u0442\u0020\u0440\u0430\u0431\u043e\u0442\u044b"
                    }), Object(g.jsx)(o.j, {
                        children: Object(g.jsxs)(o.g, {
                            children: [Object(g.jsx)(o.y, {
                                style: {
                                    width: "100%",
                                    marginBottom: "16px",
                                    marginLeft: "16px",
                                    marginTop: "16px"
                                },
                                level: "1",
                                weight: "semibold",
                                children: "Должность"
                            }), 
                            Object(g.jsxs)(o.l, {
                                children: [Object(g.jsx)(I, {
                                    title: "🌐 ОТСУТСВТУЕТ «СКОРО»",
                                    link: "https://скоро...",
                                    telegram: "https://t.me/xasdesnew",
                                    job: "скора",
                                    work: "с 2024now",
                                    odnoras: "❌"
                                }),
                            ]
                            })]
                        })
                    })]
                })
            }
            var V = c(46),
                q = c(47),
                D = c.n(q),
                L = c(48),
                N = c.n(L),
                W = Object(o.D)((function(e) {
                    var t = e.viewWidth,
                        c = Object(o.C)(),
                        i = s.a.useState(window.location.hash ? window.location.hash.slice(1) : "me"),
                        r = Object(n.a)(i, 2),
                        a = r[0],
                        p = r[1],
                        m = s.a.useState(null),
                        u = Object(n.a)(m, 2),
                        O = u[0],
                        w = u[1],
                        k = s.a.useState(!0),
                        v = Object(n.a)(k, 2),
                        y = v[0],
                        C = v[1],
                        F = t >= o.B.TABLET,
                        z = c !== o.z,
                        T = {
                            backgroundColor: "var(--button_secondary_background)",
                            borderRadius: 8
                        },
                        _ = function(e) {
                            p(e), window.location.hash = e
                        },
                        E = function(e) {
                            _(e.currentTarget.dataset.story), window.location.hash = e.currentTarget.dataset.story
                        };
                    return window.onhashchange = function() {
                        _(window.location.hash ? window.location.hash.slice(1) : "me")
                    }, window.addEventListener("load", (function() {
                        return setTimeout((function() {
                            return C(!1)
                        }), 500)
                    })), s.a.useEffect((function() {
                        fetch("https://ipwhois.app/json/").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            e.latitude < 0 && Object(l.a)({
                                targets: "body",
                                rotate: {
                                    value: 180,
                                    duration: 0
                                }
                            })
                        }))
                    }), []), Object(g.jsxs)(o.u, {
                        header: z && Object(g.jsx)(o.q, {
                            separator: !1
                        }),
                        style: {
                            justifyContent: "center"
                        },
//                        modal: Object(g.jsx)(A, {
//                            activeModal: O,
//                            setActiveModal: w
//                        }),
                        children: [
                            [12, 1].includes((new Date).getMonth() + 1) && Object(g.jsx)(g.Fragment, {
                                children: z && Object(g.jsx)(N.a, {
                                    animationInterval: 30
                                })
                            }), F && Object(g.jsx)(o.t, {
                                fixed: !0,
                                width: "280px",
                                maxWidth: "280px",
                                children: Object(g.jsxs)(o.p, {
                                    children: [z && Object(g.jsx)(o.q, {
                                        children: "XasdesNew"
                                    }), Object(g.jsxs)(o.j, {
                                        children: [Object(g.jsx)(o.e, {
                                            disabled: "me" === a,
                                            style: "me" === a ? T : {},
                                            "data-story": "me",
                                            onClick: E,
                                            before: Object(g.jsx)(d.a, {}),
                                            children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
                                        }), Object(g.jsx)(o.e, {
                                            disabled: "projects" === a,
                                            style: "projects" === a ? T : {},
                                            "data-story": "projects",
                                            onClick: E,
                                            before: Object(g.jsx)(b.a, {}),
                                            children: "\u041e\u043f\u044b\u0442\u0020\u0440\u0430\u0431\u043e\u0442\u044b"
                                        }), Object(g.jsx)(o.e, {
                                            disabled: "links" === a,
                                            style: "links" === a ? T : {},
                                            "data-story": "links",
                                            onClick: E,
                                            before: Object(g.jsx)(x.a, {}),
                                            children: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"
                                        }), Object(g.jsx)(o.e, {
                                            disabled: "donate" === a,
                                            style: "donate" === a ? T : {},
                                            "data-story": "donate",
                                            onClick: E,
                                            before: Object(g.jsx)(h.a, {}),
                                            children: "\u0414\u043e\u043d\u0430\u0442"
                                        })]
                                    })]
                                })
                            }), Object(g.jsx)(o.t, {
                                animate: !F,
                                spaced: F,
                                width: F ? "560px" : "100%",
                                maxWidth: F ? "960px" : "100%",
                                children: Object(g.jsxs)(o.h, {
                                    activeStory: a,
                                    tabbar: !F && Object(g.jsxs)(o.v, {
                                        children: [Object(g.jsx)(o.w, {
                                            onClick: E,
                                            selected: "me" === a,
                                            "data-story": "me",
                                            text: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                                            children: Object(g.jsx)(d.a, {})
                                        }), Object(g.jsx)(o.w, {
                                            onClick: E,
                                            selected: "projects" === a,
                                            "data-story": "projects",
                                            text: "\u041a\u0430\u0440\u044c\u0435\u0440\u0430",
                                            children: Object(g.jsx)(b.a, {})
                                        }), Object(g.jsx)(o.w, {
                                            onClick: E,
                                            selected: "links" === a,
                                            "data-story": "links",
                                            text: "\u0421\u0432\u044f\u0437\u044c",
                                            children: Object(g.jsx)(x.a, {})
                                        }), Object(g.jsx)(o.w, {
                                            onClick: E,
                                            selected: "donate" === a,
                                            "data-story": "donate",
                                            text: "\u0414\u043e\u043d\u0430\u0442",
                                            children: Object(g.jsx)(h.a, {})
                                        })]
                                    }),
                                    children: [Object(g.jsx)(o.A, {
                                        id: "me",
                                        activePanel: "me",
                                        children: Object(g.jsx)(o.p, {
                                            id: "me",
                                            children: Object(g.jsx)(f, {
                                                setActiveView: _,
                                                setActiveModal: w
                                            })
                                        })
                                    }), Object(g.jsx)(o.A, {
                                        id: "links",
                                        activePanel: "links",
                                        children: Object(g.jsx)(o.p, {
                                            id: "links",
                                            children: Object(g.jsx)(M, {
                                                setActiveView: _,
                                                setActiveModal: w
                                            })
                                        })
                                    }), Object(g.jsx)(o.A, {
                                        id: "projects",
                                        activePanel: "projects",
                                        children: Object(g.jsx)(o.p, {
                                            id: "projects",
                                            children: Object(g.jsx)(P, {
                                                setActiveView: _,
                                                setActiveModal: w
                                            })
                                        })
                                    }), Object(g.jsx)(o.A, {
                                        id: "donate",
                                        activePanel: "donate",
                                        children: Object(g.jsx)(o.p, {
                                            id: "donate",
                                            children: Object(g.jsx)(B, {
                                                setActiveView: _,
                                                setActiveModal: w
                                            })
                                        })
                                    })]
                                })
                            }), 
                        ]
                    })
                }), {
                    viewWidth: !0
                });
            t.default = W;
            a.a.render(Object(g.jsx)(o.f, {
                scheme: "space_gray",
                children: Object(g.jsx)(o.a, {
                    children: Object(g.jsx)(o.b, {
                        children: Object(g.jsx)(W, {})
                    })
                })
            }), document.getElementById("root"))
        }
    },
    [
        [165, 1, 2]
    ]
]);
//# sourceMappingURL=main.2c9e020d.chunk.js.map
