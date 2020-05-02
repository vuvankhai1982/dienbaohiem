(function (g) {
    var window = this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var A2 = function (a) {
            a.P("cardstatechange", g.SK(a) && g.TK(a) ? 1 : 0)
        }, Wra = function (a) {
            if (/-[a-z]/.test("pollChoiceIndex")) return null;
            if (g.bk && a.dataset) {
                if (g.Qc() && !("pollChoiceIndex" in a.dataset)) return null;
                a = a.dataset.pollChoiceIndex;
                return void 0 === a ? null : a
            }
            return a.getAttribute("data-" + g.ld("pollChoiceIndex"))
        }, Xra = function (a) {
            return Math.pow(a, 3)
        }, Yra = function (a) {
            return 3 * a * a - 2 * a * a * a
        }, B2 = function (a, b) {
            var c = g.Bo("use_default_events_client") ? void 0 : g.Uq;
            (0, g.y)(b, function (d) {
                d = {csn: a, ve: g.as(d), eventType: 4};
                var e = {Lk: g.hs(a), Si: a};
                "UNDEFINED_CSN" == a ? g.vs("visualElementShown", d, e) : c ? g.jq("visualElementShown", d, c, e) : g.Vq("visualElementShown", d, e)
            })
        }, C2 = function (a, b) {
            var c = g.Bo("use_default_events_client") ? void 0 : g.Uq;
            (0, g.y)(b, function (d) {
                var e = void 0;
                e = void 0 === e ? !1 : e;
                d = {csn: a, ve: g.as(d), eventType: e ? 16 : 8};
                e = {Lk: g.hs(a), Si: a, FE: e};
                "UNDEFINED_CSN" == a ? g.vs("visualElementHidden", d, e) : c ? g.jq("visualElementHidden", d, c, e) : g.Vq("visualElementHidden", d, e)
            })
        }, F2 = function (a) {
            a = g.Ra(a);
            delete D2[a];
            g.Mb(D2) && E2 && E2.stop()
        }, $ra = function () {
            E2 || (E2 = new g.H(function () {
                Zra()
            }, 20));
            var a = E2;
            a.isActive() || a.start()
        }, Zra = function () {
            var a = (0, g.G)();
            g.zb(D2, function (b) {
                asa(b, a)
            });
            g.Mb(D2) || $ra()
        }, G2 = function (a, b, c, d) {
            g.Mn.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
            if (a.length != b.length) throw Error("Start and end points must be the same length");
            this.w = a;
            this.G = b;
            this.duration = c;
            this.C = d;
            this.coords = [];
            this.progress = this.F = 0;
            this.B = null
        }, asa = function (a, b) {
            b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
            a.progress = (b - a.startTime) / (a.endTime - a.startTime);
            1 < a.progress && (a.progress = 1);
            a.F = 1E3 / (b - a.B);
            a.B = b;
            bsa(a, a.progress);
            1 == a.progress ? (a.o = 0, F2(a), a.jd(), a.hm()) : a.ab() && a.Tt()
        }, bsa = function (a, b) {
            g.Oa(a.C) && (b = a.C(b));
            a.coords = Array(a.w.length);
            for (var c = 0; c < a.w.length; c++) a.coords[c] = (a.G[c] - a.w[c]) * b + a.w[c]
        }, csa = function (a, b) {
            g.Le.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.fps = b.F;
            this.state = b.o
        }, H2 = function (a, b, c, d, e) {
            G2.call(this, b, c, d, e);
            this.element = a
        }, I2 = function (a, b, c, d, e) {
            if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
            H2.call(this, a, b, c, d, e)
        }, J2 = function (a) {
            g.A.call(this);
            this.u = a || window;
            this.o = []
        }, dsa = function (a, b, c, d) {
            c = (0, g.x)(c, d || a.u);
            b = g.Rp(b, "change", c, "iv-card-poll-choice-input");
            a.o.push(b)
        }, K2 = function (a) {
            return a.baseUrl || null
        }, L2 = function (a, b) {
            return (0, g.we)((0, g.Ec)(a, b, void 0), function (c) {
                return !!c
            })
        }, esa = function (a, b, c) {
            function d(Ac) {
                var Zb = Ac.hovercardButton;
                if (!Zb) return null;
                Zb = Zb.subscribeButtonRenderer;
                if (!Zb) return null;
                var Ic = f(Zb.unsubscribedButtonText), Ig = f(Zb.subscribedButtonText);
                if (Zb.subscribed) {
                    var Hg = f(Zb.subscriberCountWithUnsubscribeText);
                    var cn = f(Zb.subscriberCountText)
                } else Hg = f(Zb.subscriberCountText), cn = f(Zb.subscriberCountWithSubscribeText);
                var dj = null;
                return Ac.signinEndpoint && (dj = g.Hb(Ac, "signinEndpoint", "webNavigationEndpointData", "url"), !dj) ? null : Ic && (Ig || dj) ? {
                    subscribed: Zb.subscribed, subscribeText: Ic, subscribeCount: Hg, unsubscribeText: Ig,
                    unsubscribeCount: cn, enabled: Zb.enabled, signinUrl: dj, classic: Ac.useClassicSubscribeButton
                } : null
            }

            function e(Ac) {
                if (Ac) {
                    var Zb = [], Ic = Ac.videoId;
                    Ic && Zb.push("v=" + Ic);
                    (Ic = Ac.playlistId) && Zb.push("list=" + Ic);
                    (Ac = Ac.startTimeSeconds) && Zb.push("t=" + Ac);
                    return "/watch?" + Zb.join("&")
                }
            }

            function f(Ac) {
                if (!Ac) return null;
                var Zb = Ac.simpleText;
                return Zb ? Zb : Ac.runs ? (0, g.Ec)(Ac.runs, function (Ic) {
                    return Ic.text
                }).join("") : null
            }

            b = b.endscreenElementRenderer;
            if (!b) return null;
            var k = b.style, l = b.endpoint || {}, m = null, n = null, p = null, t = null, u = null, z = null, B = !1,
                D = null, E = null, F = null, J = null, ha = null;
            if ("VIDEO" == k) m = l.urlEndpoint ? l.urlEndpoint.url : e(l.watchEndpoint), n = !1, p = a, t = f(b.videoDuration); else if ("PLAYLIST" == k) m = l.urlEndpoint ? l.urlEndpoint.url : e(l.watchEndpoint), n = !1, p = a, u = f(b.playlistLength); else if ("CHANNEL" == k) {
                if (B = g.Hb(l, "browseEndpoint", "browseId")) z = B, m = "/channel/" + z;
                n = !1;
                p = "new";
                (B = !!b.isSubscribe) ? D = d(b) : E = f(b.subscribersText)
            } else "WEBSITE" ==
            k ? ((F = g.Hb(l, "urlEndpoint", "url")) && (m = F), n = !0, p = "new", F = b.icon.thumbnails[0].url) : "CREATOR_MERCHANDISE" == k && (b.productPrice && (J = f(b.productPrice)), b.additionalFeesText && (ha = f(b.additionalFeesText)), (n = g.Hb(l, "urlEndpoint", "url")) && (m = n), n = !0, p = "new");
            a = g.Hb(b, "title", "accessibility", "accessibilityData", "label");
            var qa = b.endpoint ? b.endpoint.clickTrackingParams : null, sc = "";
            if (b.metadata) {
                var $d = f(b.metadata);
                $d && (sc = $d)
            }
            return {
                id: "element-" + c,
                type: k,
                title: f(b.title),
                metadata: sc,
                callToAction: f(b.callToAction),
                Iw: b.image,
                iconUrl: F,
                left: parseFloat(b.left),
                width: parseFloat(b.width),
                top: parseFloat(b.top),
                aspectRatio: parseFloat(b.aspectRatio),
                startMs: parseInt(b.startMs, 10),
                endMs: parseInt(b.endMs, 10),
                videoDuration: t,
                playlistLength: u,
                channelId: z,
                subscribeButton: D,
                subscribersText: E,
                isSubscribe: B,
                targetUrl: m,
                fG: n,
                Nb: {itct: qa},
                OO: p,
                Ck: a ? a : null,
                jG: b.isPlaceholder,
                impressionUrls: L2(b.impressionUrls || [], K2),
                XF: L2(b.hovercardShowUrls || [], K2),
                clickUrls: L2(l.loggingUrls || [], K2),
                visualElement: g.Zr(b.trackingParams),
                productPrice: J,
                additionalFeesText: ha
            }
        }, M2 = function (a, b) {
            var c = {};
            c.startMs = parseInt(a.startMs, 10);
            c.impressionUrls = L2(a.impressionUrls || [], K2);
            a.trackingParams && (c.visualElement = g.Zr(a.trackingParams));
            c.elements = L2(a.elements || [], function (d, e) {
                return esa(b, d, e)
            });
            return c
        }, N2 = function (a) {
            g.pL.call(this, a);
            this.A = this.u = null;
            this.o = {};
            this.F = {};
            this.C = this.w = null;
            this.H = [];
            a = a.M();
            this.J = g.Ry(a) || g.Ty(a);
            this.N = !0;
            this.G = 0;
            this.B = new g.O(this);
            g.C(this, this.B);
            this.B.L(this.player, g.qD("creatorendscreen"), this.WG);
            this.B.L(this.player, "crx_creatorendscreen", this.XG);
            this.B.L(this.player, "resize", this.Qy);
            this.B.L(window, "focus", this.LN);
            this.load();
            var b = g.qe("STYLE");
            (document.getElementsByTagName("HEAD")[0] || document.body).appendChild(b);
            g.Ie(this, function () {
                g.ve(b)
            });
            b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        }, fsa = function (a) {
            return a.player.getVideoData().Bc ? "current" : a.J ? "new" : "current"
        }, O2 = function (a) {
            return "creator-endscreen-editor" === a.player.M().playerStyle
        }, P2 = function (a, b, c) {
            c = void 0 === c ? !0 : c;
            g.tQ(a.player.app, "creatorendscreen", void 0);
            a.w && (a.w.dispose(), a.w = null, a.C.dispose(), a.C = null);
            for (var d in a.o) a.o[d].dispose();
            a.o = {};
            a.F = {};
            0 < a.H.length && (a.H.forEach(function (l) {
                l.dispose()
            }), a.H.length = 0);
            a.G = 0;
            if ((a.u = b) && b.elements) {
                c && gsa(a);
                c = [];
                d = new g.nD(b.startMs, 0x7ffffffffffff, {id: "ytp-ce-in-endscreen", namespace: "creatorendscreen"});
                c.push(d);
                a.player.M().o || (a.w = new g.Q({
                    D: "div",
                    I: "ytp-ce-shadow"
                }), g.cL(a.player, a.w.element, 4), a.C = new g.LL(a.w, 200));
                for (d = 0; d < b.elements.length; ++d) {
                    var e = b.elements[d], f = hsa(a, e);
                    a.o[e.id] = f;
                    a.F[e.id] = e;
                    g.cL(a.player, f.element, 4);
                    var k = new g.nD(e.startMs, e.endMs, {id: "ytp-ce-element-" + e.id, namespace: "creatorendscreen"});
                    c.push(k);
                    isa(a, f, e)
                }
                g.ZK(a.player, c);
                a.Qy()
            }
        }, gsa = function (a) {
            var b = g.es(), c = g.gs();
            c && b && a.u.visualElement && g.Bs(c, b, a.u.visualElement)
        }, hsa = function (a, b) {
            var c = null;
            switch (b.type) {
                case "VIDEO":
                    c = {
                        D: "div",
                        Y: ["ytp-ce-element", "ytp-ce-video"],
                        O: {tabindex: "0", "aria-label": b.Ck || "", "aria-hidden": "true"},
                        K: [{D: "div", I: "ytp-ce-element-shadow"}, {
                            D: "div",
                            I: "ytp-ce-covering-image",
                            O: Q2(b)
                        }, {D: "div", I: "ytp-ce-covering-shadow-top"}, {
                            D: "a",
                            I: "ytp-ce-covering-overlay",
                            O: {href: R2(a, b.targetUrl), tabindex: "-1"},
                            K: [{
                                D: "div",
                                Y: ["ytp-ce-video-title", "yt-ui-ellipsis", "yt-ui-ellipsis-2"],
                                O: {dir: g.gn(b.title || "")},
                                W: b.title
                            }, {D: "div", I: "ytp-ce-video-duration", W: b.videoDuration}]
                        }]
                    };
                    c = new g.Q(c);
                    break;
                case "PLAYLIST":
                    c = {
                        D: "div",
                        Y: ["ytp-ce-element", "ytp-ce-playlist"],
                        O: {tabindex: "0", "aria-label": b.Ck || "", "aria-hidden": "true"},
                        K: [{D: "div", I: "ytp-ce-element-shadow"}, {
                            D: "div",
                            I: "ytp-ce-covering-image",
                            O: Q2(b)
                        }, {D: "div", I: "ytp-ce-covering-shadow-top"}, {
                            D: "a",
                            I: "ytp-ce-covering-overlay",
                            O: {href: R2(a, b.targetUrl), tabindex: "-1"},
                            K: [{
                                D: "div",
                                Y: ["ytp-ce-playlist-title", "yt-ui-ellipsis", "yt-ui-ellipsis-2"],
                                O: {dir: g.gn(b.title || "")},
                                W: b.title
                            }, {
                                D: "div", I: "ytp-ce-playlist-count", K: [{
                                    D: "div",
                                    I: "ytp-ce-playlist-icon"
                                }, {D: "div", I: "ytp-ce-playlist-count-text", W: b.playlistLength}]
                            }]
                        }]
                    };
                    c = new g.Q(c);
                    break;
                case "CHANNEL":
                    c = {
                        D: "div",
                        Y: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        O: {tabindex: "0", "aria-label": b.Ck || "", "aria-hidden": "true"},
                        K: [{D: "div", I: "ytp-ce-element-shadow"}, {
                            D: "div",
                            I: "ytp-ce-expanding-overlay",
                            K: [{D: "div", I: "ytp-ce-expanding-overlay-hider"}, {
                                D: "div",
                                I: "ytp-ce-expanding-overlay-background"
                            }, {
                                D: "div", I: "ytp-ce-expanding-overlay-content",
                                K: [{
                                    D: "div", I: "ytp-ce-expanding-overlay-body", K: [{
                                        D: "div",
                                        I: "ytp-ce-expanding-overlay-body-padding",
                                        K: [{
                                            D: "a",
                                            Y: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            O: {
                                                href: R2(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.gn(b.title || "")
                                            },
                                            W: b.title
                                        }, b.subscribeButton ? {
                                            D: "div",
                                            I: "ytp-ce-subscribe-container",
                                            K: [{D: "div", I: "ytp-ce-channel-subscribe"}]
                                        } : "", b.subscribersText ? {
                                            D: "div",
                                            I: "ytp-ce-channel-subscribers-text",
                                            W: b.subscribersText
                                        } : "", b.metadata ? {
                                            D: "div", Y: ["ytp-ce-channel-metadata", "yt-ui-ellipsis", "yt-ui-ellipsis-3"],
                                            W: b.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {D: "div", I: "ytp-ce-expanding-image", O: Q2(b)}]
                    };
                    c = new g.Q(c);
                    var d = g.ce(document, "div", "ytp-ce-channel-subscribe", c.element)[0];
                    if (b.subscribeButton && b.channelId) {
                        g.I(d, "ytp-ce-subscribe-button");
                        if (a.player.M().o) {
                            var e = null;
                            var f = b.Nb.itct
                        } else e = "endscreen", f = null;
                        e = new g.HP(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, b.subscribeButton.enabled, b.subscribeButton.classic, b.channelId,
                            !!b.subscribeButton.subscribed, e, f, b.subscribeButton.signinUrl, a.player);
                        d.appendChild(e.element);
                        a.H.push(e)
                    }
                    break;
                case "WEBSITE":
                    c = {
                        D: "div",
                        Y: ["ytp-ce-element", "ytp-ce-website"],
                        O: {tabindex: "0", "aria-label": b.Ck || "", "aria-hidden": "true"},
                        K: [{D: "div", I: "ytp-ce-element-shadow"}, {
                            D: "div",
                            I: "ytp-ce-expanding-overlay",
                            K: [{D: "div", I: "ytp-ce-expanding-overlay-hider"}, {
                                D: "div",
                                I: "ytp-ce-expanding-overlay-background"
                            }, {
                                D: "div", I: "ytp-ce-expanding-overlay-content", K: [{
                                    D: "div", I: "ytp-ce-expanding-overlay-body",
                                    K: [{
                                        D: "div",
                                        I: "ytp-ce-expanding-overlay-body-padding",
                                        K: [{
                                            D: "div",
                                            I: "ytp-ce-website-title",
                                            O: {dir: g.gn(b.title || "")},
                                            W: b.title
                                        }, {D: "div", I: "ytp-ce-website-metadata", W: b.metadata}, {
                                            D: "a",
                                            Y: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            O: {href: R2(a, b.targetUrl), target: "_blank", tabindex: "-1"},
                                            W: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {D: "div", I: "ytp-ce-expanding-image", O: Q2(b)}, {
                            D: "div",
                            I: "ytp-ce-expanding-icon",
                            O: jsa(b.iconUrl)
                        }]
                    };
                    c = new g.Q(c);
                    break;
                case "CREATOR_MERCHANDISE":
                    c = "", b.productPrice && (c = {
                        D: "div", I: "ytp-ce-merchandise-price-container",
                        K: [{D: "div", I: "ytp-ce-merchandise-price", W: b.productPrice}]
                    }, b.additionalFeesText && c.K.push({
                        D: "div",
                        I: "ytp-ce-merchandise-additional-fees",
                        W: b.additionalFeesText
                    })), c = {
                        D: "div",
                        Y: ["ytp-ce-element", "ytp-ce-merchandise"],
                        O: {tabindex: "0", "aria-label": b.Ck || "", "aria-hidden": "true"},
                        K: [{D: "div", I: "ytp-ce-element-shadow"}, {
                            D: "div",
                            I: "ytp-ce-expanding-overlay",
                            K: [{D: "div", I: "ytp-ce-expanding-overlay-hider"}, {
                                D: "div",
                                I: "ytp-ce-expanding-overlay-background"
                            }, {
                                D: "div", I: "ytp-ce-expanding-overlay-content", K: [{
                                    D: "div",
                                    I: "ytp-ce-expanding-overlay-body",
                                    K: [{
                                        D: "div",
                                        I: "ytp-ce-expanding-overlay-body-padding",
                                        K: [{
                                            D: "div",
                                            I: "ytp-ce-merchandise-title",
                                            O: {dir: g.gn(b.title || "")},
                                            W: b.title
                                        }, c, {D: "div", I: "ytp-ce-merchandise-metadata", W: b.metadata}, {
                                            D: "a",
                                            Y: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                            O: {href: R2(a, b.targetUrl), target: "_blank", tabindex: "-1"},
                                            W: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {D: "div", I: "ytp-ce-expanding-image", O: Q2(b)}, {
                            D: "div", I: "ytp-ce-merchandise-invideo-cta-container", K: [{
                                D: "div", I: "ytp-ce-merchandise-invideo-cta",
                                W: b.callToAction
                            }]
                        }]
                    }, c = new g.Q(c)
            }
            b.jG && g.I(c.element, "ytp-ce-placeholder");
            return c
        }, Q2 = function (a) {
            if (a.Iw) var b = a.Iw.thumbnails;
            return jsa(b ? b[b.length - 1].url : null)
        }, jsa = function (a) {
            return a ? {style: "background-image: url(" + a + ")"} : {}
        }, isa = function (a, b, c) {
            function d() {
                k(1)
            }

            function e() {
                k(-1)
            }

            b.ia("mouseenter", (0, g.x)(a.Vs, a, b, c));
            b.ia("mouseleave", (0, g.x)(a.Xt, a, b, c));
            a.player.M().o || b.ia("click", (0, g.x)(function (l) {
                g.I(l.element, "ytp-ce-element-hover")
            }, a, b));
            b.ia("click", (0, g.x)(a.xA, a, c));
            b.ia("keypress", (0, g.x)(a.xA, a, c));
            b.ia("focus", (0, g.x)(function (l, m) {
                this.Vs(l, m)
            }, a, b, c));
            b.ia("blur", (0, g.x)(function (l, m) {
                this.Xt(l, m)
            }, a, b, c));
            b.ia("touchstart", (0, g.x)(a.Vs, a, b, c));
            var f = g.ee("ytp-ce-expanding-overlay-hider", b.element);
            f && b.L(f, "touchstart", function (l) {
                l = l || window.event;
                l.cancelBubble = !0;
                l.stopPropagation && l.stopPropagation();
                g.Kn(b.element, "ytp-ce-element-hover");
                g.Kn(b.element, "ytp-ce-force-expand")
            });
            b.ia("keydown", (0, g.x)(function (l, m) {
                this.N = 9 == m.keyCode && !m.shiftKey
            }, a, b));
            var k = (0, g.x)(function (l, m, n) {
                this.G += n;
                0 < this.G ? (g.I(l.element, "ytp-ce-force-expand"), S2(this, m.id, !0)) : (g.Kn(l.element, "ytp-ce-force-expand"), g.Kn(l.element, "ytp-ce-element-hover"), S2(this, m.id, !1))
            }, a, b, c);
            c = (0, g.x)(function (l, m) {
                m && (l.ia("blur", g.Sa(function () {
                    "none" != m.style.display && a.N && m.focus()
                })), l.L(m, "focus", d), l.L(m, "blur", e))
            }, a, b);
            c(g.ee("ytp-sb-subscribe", b.element));
            c(g.ee("ytp-sb-unsubscribe", b.element));
            b.ia("focus", d);
            b.ia("blur", e)
        }, R2 = function (a, b) {
            var c = a.player.M();
            if (b) {
                if (b.startsWith("//")) return c.protocol + ":" + b;
                if (b.startsWith("/")) return g.sz(c) + b
            } else return "";
            return b
        }, S2 = function (a, b, c) {
            a.w && (c ? a.C.show() : a.C.hide());
            for (var d in a.o) d != b && g.K(a.o[d].element, "ytp-ce-element-shadow-show", c)
        }, T2 = function (a, b, c) {
            function d() {
                f || (e++, e == b.length && (k.stop(), c && c()))
            }

            if (!b || 0 == b.length || O2(a)) c && c(); else {
                b = ksa(a, b);
                var e = 0, f = !1, k = new g.H(function () {
                    f = !0;
                    c && c()
                }, 1E3, a);
                k.start();
                for (a = 0; a < b.length; a++) g.gr(b[a], d)
            }
        }, U2 = function (a, b, c) {
            T2(a, b.clickUrls, c);
            (a = g.gs()) && b.fG && g.Cs(a, b.visualElement)
        }, ksa = function (a, b) {
            var c = a.player.getVideoData().clientPlaybackNonce, d = a.player.getCurrentTime().toFixed(2);
            c = {CPN: c, AD_CPN: c, MT: d};
            d = [];
            for (var e = 0; e < b.length; e++) d.push(lsa(b[e], c));
            return d
        }, lsa = function (a, b) {
            return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function (c) {
                var d = unescape(c);
                d = d.substring(1, d.length - 1);
                return b[d] ? escape(b[d]) : c
            })
        }, msa = function (a) {
            return g.Ma(a) && a.length ? a[0] : a
        }, V2 = function (a) {
            return "string" === typeof a ? a : ""
        }, W2 = function (a, b, c) {
            for (var d in b) if (b[d] == a) return a;
            return c
        }, osa = function (a) {
            var b = nsa;
            if (null == a) return null;
            if (g.Na(a)) {
                var c = [];
                (0, g.y)(a, function (d) {
                    (d = b(d)) && c.push(d)
                });
                return c
            }
            return (a = b(a)) ? [a] : []
        }, psa = function (a) {
            this.externalId = a
        }, qsa = function (a, b, c, d) {
            this.value = a;
            this.target = b;
            this.showLinkIcon = c;
            this.o = d
        }, X2 = function (a) {
            if (!a) return null;
            var b = g.xc(V2(a.value));
            b = g.vc(b);
            if (!b) return null;
            var c = W2(a.target, rsa, "current");
            if (null == c) a = null; else {
                var d = a.show_link_icon;
                a = new qsa(b, c, "true" == d || "false" == d ? "true" == d : !0, null != a.pause_on_navigation ? a.pause_on_navigation : !0)
            }
            return a
        }, Y2 = function (a) {
            return a.value ? a.value : null
        }, ssa = function (a, b, c, d) {
            this.type = a;
            this.trigger = b;
            this.url = c;
            this.subscribeData = d
        }, nsa = function (a) {
            if (!a) return null;
            var b = W2(a.type, tsa), c = W2(a.trigger, usa), d = msa(a.url);
            d = X2(d ? d : null);
            a = msa(a.subscribeData);
            var e = a ? a : null;
            e ? (a = V2(e.external_user_id), e = V2(e.subscription_token), a = a && e ? new psa(a) : null) : a = null;
            return b ? new ssa(b, c, d, a) : null
        }, Z2 = function (a, b, c, d, e) {
            this.id = a;
            this.type = b;
            this.style = c;
            this.o = d || [];
            this.data = e
        }, vsa = function (a, b) {
            return g.Za(a.o, b, void 0)
        }, wsa = function (a, b) {
            return a.id.replace(/[^a-z0-9-]/gi, "-") + "-" + b.toString()
        }, xsa = function (a, b) {
            this.merchant = a;
            this.price = b
        }, ysa = function (a) {
            this.o = a
        }, zsa = function (a, b, c) {
            b && (c ? $2(a, (0, g.Ec)(b, g.Sa(function (d, e) {
                return g.en(e, d)
            }, c))) : $2(a, b))
        }, $2 = function (a, b, c, d) {
            var e = 1, f = -1;
            if (c) {
                var k = !1;
                var l = function () {
                    e--;
                    e || k || (clearTimeout(f), k = !0, c())
                };
                f = setTimeout(function () {
                    k = !0;
                    c()
                }, 1E3)
            }
            (0, g.y)(b || [], function (m) {
                e++;
                g.gr(m, l)
            });
            d && (e++, 0 != d && a.o.sendVideoStatsEngageEvent(d, l))
        }, Asa = function (a, b, c, d, e, f, k) {
            this.o = a;
            this.w = b;
            this.A = c;
            this.videoData = d;
            this.logger = e;
            this.T = f;
            this.u = k
        }, a3 = function (a, b) {
            this.o = a;
            this.w = b
        }, Dsa = function (a, b) {
            var c = [];
            (0, g.y)(b.choices, function (k) {
                c.push(Bsa(b, k))
            }, a);
            var d = {D: "ul", O: {role: "radiogroup"}, K: c}, e = {};
            b.Wi && (e["aria-label"] = g.FM("$POLL_TITLE - \u0110\u0103ng nh\u1eadp \u0111\u1ec3 b\u00ecnh ch\u1ecdn.", {POLL_TITLE: b.title}));
            var f = ["iv-card", "iv-card-poll"];
            d = [{D: "div", I: "iv-card-content", K: [b3("h2", e, b.title), {D: "form", K: [{D: "fieldset", K: [d]}]}]}];
            b.Wi && (f.push("iv-card-unavailable"), d.push({
                D: "div", Y: ["iv-card-sign-in"], K: [{D: "h2", W: "B\u1ea1n mu\u1ed1n b\u00ecnh ch\u1ecdn?"}, {
                    D: "a", Y: ["iv-card-sign-in-button", "iv-button"], O: {href: Y2(b.Wi)}, K: [{
                        D: "span",
                        Y: ["iv-button-content"], W: "\u0110\u0103ng nh\u00e2\u0323p"
                    }]
                }]
            }));
            f = new g.Q({D: "div", Y: f, K: d});
            d = f.element;
            Csa(b, d);
            dsa(a.o.o, d, g.Sa(a.A, b), a);
            (0, g.y)(g.de("iv-card-poll-choice-input", d), function (k) {
                this.o.o.ia(k, "focus", g.Sa(this.u, !0));
                this.o.o.ia(k, "blur", g.Sa(this.u, !1))
            }, a);
            b.Wi && (d = g.ee("iv-card-sign-in-button", d), a.w(d, b.Wi, b.id, b.Nb, b.Mc.click, 5));
            return f
        }, Esa = function (a, b, c) {
            var d = ["yt-badge",
                    "standalone-ypc-badge-renderer-icon", b.hP ? "standalone-ypc-badge-renderer-icon-purchased" : "standalone-ypc-badge-renderer-icon-available"],
                e = {};
            d = b.iG && b.dw ? {D: "span", Y: d, O: e, W: b.dw} : "";
            c = {
                D: "div",
                Y: ["iv-card", c],
                K: [{
                    D: "a",
                    I: "iv-click-target",
                    O: {href: Y2(b.url)},
                    K: [c3(b.bj, d ? {D: "div", I: "iv-card-image-text", K: [d, b.priceText]} : ""), {
                        D: "div",
                        I: "iv-card-content",
                        K: [{D: "h2", I: "iv-card-primary-link", W: b.title}, d3(a, b)]
                    }]
                }]
            };
            c = new g.Q(c);
            e3(a, g.de("iv-click-target", c.element), b, b.url);
            return c
        }, f3 = function (a) {
            return a.customMessage ?
                b3("div", "iv-card-message", a.customMessage) : ""
        }, c3 = function (a, b) {
            var c = "background-image: url(" + a + ");", d = [];
            b && d.push(b);
            return {D: "div", I: "iv-card-image", O: {style: c}, K: d}
        }, d3 = function (a, b) {
            if (!b.metaInfo || 0 == b.metaInfo.length) return "";
            var c = [];
            (0, g.y)(b.metaInfo, function (d) {
                c.push(b3("li", "", d))
            }, a);
            return {D: "ul", I: "iv-card-meta-info", K: c}
        }, Bsa = function (a, b) {
            return {
                D: "li",
                I: wsa(a, b.index),
                K: [{
                    D: "label",
                    K: [{
                        D: "input",
                        I: "iv-card-poll-choice-input",
                        O: {
                            type: "checkbox",
                            role: "radio",
                            name: a.id.replace(/[^a-z0-9-]/gi, "-") + b.index.toString(),
                            value: b.index.toString(),
                            "data-poll-choice-index": b.index.toString()
                        }
                    }, {
                        D: "span",
                        I: "iv-card-poll-choice-text",
                        K: [{D: "span", I: "iv-card-poll-choice-percent"}, b3("span", void 0, b.desc)]
                    }]
                }, {D: "div", I: "iv-card-poll-result", K: [{D: "div", I: "iv-card-poll-result-bar"}]}]
            }
        }, b3 = function (a, b, c) {
            b ? "string" === typeof b ? b = {"class": b} : g.Ma(b) && (b = {"class": b.join(" ")}) :
                b = {};
            b.dir = g.gn(c);
            return {D: a, O: b, W: c}
        }, Fsa = function (a) {
            if (!a.customMessage) return "";
            var b = ["iv-card-action", "iv-card-primary-link"], c = {};
            a.on && (b.push("iv-card-action-icon"), c.style = "background-image: url(" + a.on + ");");
            c.dir = g.gn(a.customMessage);
            var d = [{D: "span", W: a.customMessage}];
            a.showLinkIcon && (d.push("\u00a0"), d.push({D: "span", I: "iv-card-link-icon"}));
            return {D: "div", Y: b, O: c, K: d}
        }, Csa = function (a, b) {
            var c = 0;
            (0, g.y)(a.choices, function (m) {
                c += m.count
            });
            c = c || 1;
            for (var d = 0; d < a.choices.length; d++) {
                var e = a.choices[d], f = g.ee(wsa(a, e.index), b);
                e = e.count / c;
                null == a.Ke && (e = 0);
                g.K(f.getElementsByTagName("label")[0], "iv-card-poll-choice-checked", a.Ke == d);
                f.getElementsByTagName("input")[0].checked = a.Ke == d;
                var k = Math.floor(100 * e).toFixed(0), l = g.ee("iv-card-poll-choice-percent", f);
                g.Ae(l, g.FM("$PERCENT%", {PERCENT: k}));
                f = g.ee("iv-card-poll-result-bar", f);
                g.wh(f, "transform", "scaleX(" + e.toFixed(2) + ")")
            }
            g.K(b, "iv-card-poll-voted", null != a.Ke);
            g.K(b, "iv-card-poll-expanded",
                null != a.Ke && 1 < a.choices.length)
        }, e3 = function (a, b, c, d) {
            d && (0, g.y)(b, function (e) {
                this.w(e, d, c.id, c.Nb, c.Mc.click, 5)
            }, a)
        }, Gsa = function (a) {
            var b;
            (b = a) && !(b = 1 < a.length ? "/" == a.charAt(0) && "/" != a.charAt(1) : "/" == a) && (b = a.replace(/^(https?:)?\/\//, ""), b = b.split("/", 1), b = !b || 1 > b.length || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = "com" == b[0] && "youtube" == b[1] || "be" == b[0] && "youtu" == b[1]);
            return b ? -1 == a.indexOf("/redirect?") : !1
        }, Hsa = function (a, b) {
            return b ? b : Gsa(a) ? "current" : "new"
        }, g3 = function (a, b) {
            g.A.call(this);
            var c = this;
            this.o = a;
            this.context = b;
            this.Yu = !1;
            this.na = new Map;
            this.ra = new Map;
            this.context.T.addEventListener(g.qD("annotations_module"), function (d) {
                (d = c.na.get(d)) && d.apply(c)
            });
            this.context.T.addEventListener("crx_annotations_module", function (d) {
                (d = c.ra.get(d)) && d.apply(c)
            })
        }, Isa = function (a, b, c, d, e) {
            var f = Y2(b);
            if (f) {
                var k = Hsa(f, b.target), l = (0, g.x)(function () {
                    b.o && this.context.T.pauseVideo();
                    var m = this.context.videoData.Bc || !1, n = g.qq(f || "");
                    m && n && (n.v || n.list) ? g.mT(this.context.T.app, n.v, c, n.list, !1, void 0) : g.rN(f || "", "current" == k ? "_top" : void 0, c)
                }, a);
                "new" == k && (l(), l = null);
                $2(a.context.logger, d, l, e);
                Gsa(f) || (a = g.gs(), d = c.itct, a && d && g.Cs(a, g.Zr(d)))
            }
        }, Jsa = function (a) {
            if (a.urlEndpoint && a.urlEndpoint.url) return a.urlEndpoint.url;
            if (a.watchEndpoint && a.watchEndpoint.videoId) {
                var b = "/watch?v=" + a.watchEndpoint.videoId;
                a.watchEndpoint.playlistId && (b += "&list=" + a.watchEndpoint.playlistId);
                a.watchEndpoint.index && (b += "&index=" + a.watchEndpoint.index);
                a.watchEndpoint.startTimeSeconds && (b += "&t=" + a.watchEndpoint.startTimeSeconds);
                return b
            }
            return null
        }, h3 = function (a, b, c) {
            return {
                Rx: (a.impressionLoggingUrlsV2s || []).map(function (d) {
                    return d.baseUrl
                }),
                click: (c.loggingUrls || []).map(function (d) {
                    return d.baseUrl
                }),
                close: (b.dismissLoggingUrlsV2s || []).map(function (d) {
                    return d.baseUrl
                }),
                rC: (b.impressionLoggingUrlsV2s || []).map(function (d) {
                    return d.baseUrl
                }),
                Tp: (b.clickLoggingUrlsV2s || []).map(function (d) {
                    return d.baseUrl
                })
            }
        }, k3 = function (a, b, c) {
            g3.call(this, b, c);
            var d = this;
            this.w = a;
            this.da = this.Ha = this.C = this.Ga = !1;
            this.ea = null;
            this.aa = new g.H(g.Ja, c.A.Na ? 4E3 : 3E3);
            g.C(this, this.aa);
            this.ya = new g.H(g.Ja);
            g.C(this, this.ya);
            this.H = new a3(c, (0, g.x)(this.hk, this), (0, g.x)(this.Ao, this));
            this.U = new g.Q({
                D: "div",
                I: "iv-drawer",
                O: {id: "iv-drawer"},
                K: [{
                    D: "div",
                    I: "iv-drawer-header",
                    O: {"aria-role": "heading"},
                    K: [{D: "span", I: "iv-drawer-header-text"}, {
                        D: "button",
                        Y: ["iv-drawer-close-button", "ytp-button"],
                        O: {"aria-label": "\u1ea8n th\u1ebb", tabindex: "0"}
                    }]
                }, {D: "div", I: "iv-drawer-content"}]
            });
            g.C(this, this.U);
            this.F = this.U.element;
            this.sa = new g.LL(this.U, 330);
            g.C(this, this.sa);
            this.Ba = g.ee("iv-drawer-header-text", this.F);
            this.B = g.ee("iv-drawer-content", this.F);
            this.A = [];
            this.Aa = this.S = this.G = this.ha = this.u = null;
            this.Z = [];
            this.addCueRange(0, 1E3 * c.videoData.lengthSeconds, "", function () {
                d.Ha && i3(d, "YOUTUBE_DRAWER_AUTO_OPEN")
            }, function () {
                (d.Ha = d.C) && j3(d)
            });
            this.V = this.J = this.ca = null;
            this.N = 0
        }, Ksa = function (a, b) {
            b.data.autoOpenMs && a.addCueRange(b.data.autoOpenMs, 0x8000000000000, "", function () {
                i3(a, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            b.data.autoCloseMs && a.addCueRange(b.data.autoCloseMs, 0x8000000000000, "", function () {
                j3(a)
            });
            var c = b.data.headerText;
            g.Ae(a.Ba, c);
            a.S && a.S.setAttribute("title", c);
            a.ca = g.Zr(b.data.trackingParams);
            a.V = g.Zr(b.data.closeTrackingParams);
            a.J = g.Zr(b.data.iconTrackingParams)
        }, Lsa = function (a, b) {
            var c = b.cardId ? b.cardId : "cr:" + a.N;
            if (b.content.simpleCardContentRenderer) {
                if (!b.cueRanges.length) return;
                var d = b.content.simpleCardContentRenderer, e = b.teaser.simpleCardTeaserRenderer,
                    f = b.icon ? b.icon.infoCardIconRenderer : null;
                c = {
                    id: c,
                    timestamp: a.N,
                    type: "simple",
                    teaserText: g.U(e.message),
                    teaserDurationMs: parseInt(b.cueRanges[0].teaserDurationMs, 10),
                    startMs: parseInt(b.cueRanges[0].startCardActiveMs, 10),
                    autoOpen: !!b.autoOpen,
                    Nb: l3(a, c, b, d),
                    sponsored: !1,
                    Mc: h3(d, e, d.command),
                    ie: d.trackingParams ? g.Zr(d.trackingParams) : null,
                    be: e.trackingParams ?
                        g.Zr(e.trackingParams) : null,
                    Cd: f && f.trackingParams ? g.Zr(f.trackingParams) : null,
                    imageUrl: m3(d.image.thumbnails, 290).url,
                    displayDomain: d.displayDomain ? g.U(d.displayDomain) : null,
                    showLinkIcon: !!d.showLinkIcon,
                    on: null,
                    title: d.title ? g.U(d.title) : "",
                    customMessage: d.callToAction ? g.U(d.callToAction) : "",
                    url: d.command.urlEndpoint.url ? X2({
                        pause_on_navigation: !a.context.videoData.ua,
                        target: "new",
                        value: d.command.urlEndpoint.url
                    }) : null
                };
                n3(a, c)
            } else if (b.content.collaboratorInfoCardContentRenderer) {
                if (!b.cueRanges.length) return;
                d = b.content.collaboratorInfoCardContentRenderer;
                e = b.teaser.simpleCardTeaserRenderer;
                f = b.icon ? b.icon.infoCardIconRenderer : null;
                c = {
                    id: c,
                    timestamp: a.N,
                    type: "collaborator",
                    teaserText: g.U(e.message),
                    teaserDurationMs: parseInt(b.cueRanges[0].teaserDurationMs, 10),
                    startMs: parseInt(b.cueRanges[0].startCardActiveMs, 10),
                    autoOpen: !!b.autoOpen,
                    Nb: l3(a, c, b, d),
                    sponsored: !1,
                    Mc: h3(d, e, d.endpoint),
                    ie: d.trackingParams ? g.Zr(d.trackingParams) : null,
                    be: e.trackingParams ? g.Zr(e.trackingParams) : null,
                    Cd: f && f.trackingParams ?
                        g.Zr(f.trackingParams) : null,
                    channelId: d.endpoint.browseEndpoint.browseId,
                    customMessage: d.customText ? g.U(d.customText) : null,
                    wB: m3(d.channelAvatar.thumbnails, 290).url,
                    title: d.channelName ? g.U(d.channelName) : "",
                    metaInfo: [d.subscriberCountText ? g.U(d.subscriberCountText) : ""],
                    url: X2({
                        pause_on_navigation: !a.context.videoData.ua,
                        target: "new",
                        value: d.endpoint.browseEndpoint.canonicalBaseUrl ? d.endpoint.browseEndpoint.canonicalBaseUrl : "/channel/" + d.endpoint.browseEndpoint.browseId
                    })
                };
                n3(a, c)
            } else if (b.content.playlistInfoCardContentRenderer) {
                if (!b.cueRanges.length) return;
                d = b.content.playlistInfoCardContentRenderer;
                e = b.teaser.simpleCardTeaserRenderer;
                f = b.icon ? b.icon.infoCardIconRenderer : null;
                c = {
                    id: c,
                    timestamp: a.N,
                    type: "playlist",
                    teaserText: g.U(e.message),
                    teaserDurationMs: parseInt(b.cueRanges[0].teaserDurationMs, 10),
                    startMs: parseInt(b.cueRanges[0].startCardActiveMs, 10),
                    autoOpen: !!b.autoOpen,
                    Nb: l3(a, c, b, d),
                    sponsored: !1,
                    Mc: h3(d, e, d.action),
                    ie: d.trackingParams ? g.Zr(d.trackingParams) : null,
                    be: e.trackingParams ? g.Zr(e.trackingParams) : null,
                    Cd: f && f.trackingParams ? g.Zr(f.trackingParams) :
                        null,
                    bj: m3(d.playlistThumbnail.thumbnails, 258).url,
                    customMessage: d.customMessage ? g.U(d.customMessage) : null,
                    playlistVideoCount: g.U(d.playlistVideoCount),
                    title: d.playlistTitle ? g.U(d.playlistTitle) : "",
                    metaInfo: [d.channelName ? g.U(d.channelName) : "", d.videoCountText ? g.U(d.videoCountText) : ""],
                    url: X2({pause_on_navigation: !a.context.videoData.ua, target: "new", value: Jsa(d.action)})
                };
                n3(a, c)
            } else if (b.content.videoInfoCardContentRenderer) {
                if (!b.cueRanges.length) return;
                d = b.content.videoInfoCardContentRenderer;
                e = b.teaser.simpleCardTeaserRenderer;
                f = b.icon ? b.icon.infoCardIconRenderer : null;
                c = {
                    id: c,
                    timestamp: a.N,
                    type: "video",
                    teaserText: g.U(e.message),
                    teaserDurationMs: parseInt(b.cueRanges[0].teaserDurationMs, 10),
                    startMs: parseInt(b.cueRanges[0].startCardActiveMs, 10),
                    autoOpen: !!b.autoOpen,
                    Nb: l3(a, c, b, d),
                    sponsored: !1,
                    Mc: h3(d, e, d.action),
                    ie: d.trackingParams ? g.Zr(d.trackingParams) : null,
                    be: e.trackingParams ? g.Zr(e.trackingParams) : null,
                    Cd: f && f.trackingParams ? g.Zr(f.trackingParams) : null,
                    bj: m3(d.videoThumbnail.thumbnails,
                        258).url,
                    videoDuration: d.lengthString ? g.U(d.lengthString) : null,
                    customMessage: d.customMessage ? g.U(d.customMessage) : null,
                    title: d.videoTitle ? g.U(d.videoTitle) : "",
                    metaInfo: [d.channelName ? g.U(d.channelName) : "", d.viewCountText ? g.U(d.viewCountText) : ""],
                    isLiveNow: !!d.badge,
                    url: X2({pause_on_navigation: !a.context.videoData.ua, target: "new", value: Jsa(d.action)})
                };
                n3(a, c)
            }
            a.N++
        }, m3 = function (a, b) {
            for (var c = -1, d = -1, e = 0; e < a.length; e++) {
                if (a[e].height == b || 290 == a[e].width) return a[e];
                ((a[e].height || 0) < b || 290 > (a[e].width || 0)) && (0 > c || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e : ((a[e].height || 0) >= b || 290 <= (a[e].width || 0)) && (0 > d || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
            }
            return a[0 <= d ? d : c]
        }, l3 = function (a, b, c, d) {
            return {
                feature: c.feature ? c.feature : "cards",
                src_vid: a.context.videoData.videoId,
                annotation_id: b,
                ei: a.context.videoData.eventId,
                itct: d.trackingParams
            }
        }, Nsa = function (a, b) {
            var c = Msa(a, b);
            c && (c == a.u && (a.u = null), a.w.removeCueRange(c.card.id), g.ve(c.Zq), g.fb(a.A, c), a.sn(), o3(a))
        }, i3 = function (a, b, c) {
            if (!a.C) {
                a.sa.show();
                a.ha = new g.H(function () {
                    g.I(a.context.T.getRootNode(), "ytp-iv-drawer-open")
                }, 0);
                a.ha.start();
                a.ea = g.Ip(a.B, "mousewheel", (0, g.x)(a.iH, a));
                a.C = !0;
                var d = g.gs();
                d && a.ca && a.V && B2(d, [a.ca, a.V]);
                var e = {TRIGGER_TYPE: b};
                (0, g.y)(a.A, function (f) {
                    f.vy || (f.vy = !0, zsa(a.context.logger, f.card.Mc.Rx, e));
                    d && B2(d, [f.card.ie])
                });
                A2(a.w);
                c && (a.G = new g.H(function () {
                    a.xa = a.S;
                    a.Aa.focus()
                }, 330), a.G.start())
            }
        }, j3 = function (a) {
            a.C && (a.sa.hide(), g.Jp(a.ea), a.ea = null, g.Kn(a.context.T.getRootNode(), "ytp-iv-drawer-open"), a.C = !1, A2(a.w), a.G && a.G.stop(), a.G = new g.H(function () {
                a.xa && (a.xa.focus(), a.xa = null)
            }, 330), a.G.start())
        }, Osa = function (a) {
            var b = g.ee("iv-drawer-close-button", a.F);
            a.context.o.ia(b, "click", a.lE, a);
            a.context.o.ia(a.B, "touchend", function () {
                a.aa.start()
            });
            a.context.o.ia(a.B, "scroll", a.BE, a);
            a.context.u.subscribe("onHideControls", function () {
                a.da = !0
            });
            a.context.u.subscribe("onShowControls", function () {
                a.da = !1
            });
            a.context.u.subscribe("onVideoAreaChange", function () {
                a.da = g.In(a.w.getRootNode(), "ytp-autohide")
            });
            a.Z.push(g.So("iv-button-shown", a.qG, a));
            a.Z.push(g.So("iv-button-hidden", a.pG, a));
            a.Z.push(g.So("iv-teaser-shown", a.tG, a));
            a.Z.push(g.So("iv-teaser-hidden", a.sG, a));
            a.Z.push(g.So("iv-teaser-clicked", a.rG, a))
        }, n3 = function (a, b) {
            a.Ga || (g.Jn(a.o, ["html5-stop-propagation",
                "iv-drawer-manager"]), g.cL(a.w, a.F, 5), Osa(a), a.S = g.ee("ytp-cards-button", a.w.getRootNode()), a.Aa = g.ee("iv-drawer-close-button", a.F), a.Ga = !0);
            Nsa(a, b.id);
            var c = Psa(a, b);
            if (c) {
                var d = {card: b, Zq: c.element, vy: !1}, e = Qsa(a, d);
                g.nb(a.A, e, 0, d);
                c.ba(a.B, e);
                a.sn();
                b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, g.Sa(a.yO, d)) : (c = 1E3 * a.context.T.getCurrentTime(), 5E3 > c && c > b.startMs && a.bC(d), a.addCueRange(b.startMs, b.startMs + 1, b.id, g.Sa(a.bC, d)), o3(a))
            }
        }, Psa = function (a, b) {
            switch (b.type) {
                case "simple":
                    var c =
                        a.H;
                    var d = b.displayDomain ? {D: "div", I: "iv-card-image-text", W: b.displayDomain} : "";
                    var e = Fsa(b);
                    d = {
                        D: "div",
                        Y: ["iv-card"],
                        K: [{
                            D: "a",
                            I: "iv-click-target",
                            O: {href: Y2(b.url)},
                            K: [c3(b.imageUrl, d), {D: "div", I: "iv-card-content", K: [b3("h2", void 0, b.title), e]}]
                        }]
                    };
                    d = new g.Q(d);
                    e3(c, g.de("iv-click-target", d.element), b, b.url);
                    return d;
                case "collaborator":
                    return c = a.H, d = {
                        D: "div", Y: ["iv-card", "iv-card-channel"], K: [{
                            D: "a", Y: ["iv-click-target"], O: {href: Y2(b.url), "data-ytid": b.channelId}, K: [c3(b.wB), {
                                D: "div", I: "iv-card-content",
                                K: [f3(b), {D: "h2", I: "iv-card-primary-link", W: b.title}, d3(c, b)]
                            }]
                        }]
                    }, d = new g.Q(d), e3(c, g.de("iv-click-target", d.element), b, b.url), d;
                case "episode":
                    return Esa(a.H, b, "iv-card-episode");
                case "movie":
                    return Esa(a.H, b, "iv-card-movie");
                case "playlist":
                    return c = a.H, d = {
                        D: "div", Y: ["iv-card", "iv-card-playlist"], K: [{
                            D: "a",
                            I: "iv-click-target",
                            O: {href: Y2(b.url)},
                            K: [c3(b.bj, {
                                D: "div",
                                I: "iv-card-image-overlay",
                                K: [{D: "span", I: "iv-card-playlist-video-count", W: b.playlistVideoCount}]
                            }), {
                                D: "div", I: "iv-card-content", K: [f3(b),
                                    b3("h2", "iv-card-primary-link", b.title), d3(c, b)]
                            }]
                        }]
                    }, d = new g.Q(d), e3(c, g.de("iv-click-target", d.element), b, b.url), d;
                case "poll":
                    return Dsa(a.H, b);
                case "productListing":
                    c = a.H;
                    var f = !g.cb(b.offers);
                    d = ["iv-card"];
                    e = "";
                    var k = Fsa(b);
                    f && (d.push("iv-card-product-listing"), e = "iv-card-primary-link", f = b.offers[0], k = [], f.price && k.push({
                        D: "div",
                        I: "iv-card-offer-price",
                        W: f.price
                    }), f.merchant && k.push({D: "div", I: "iv-card-offer-merchant", W: f.merchant}), k = {D: "div", K: k});
                    d = {
                        D: "div", Y: d, O: {tabindex: "0"}, K: [{
                            D: "a",
                            Y: ["iv-card-image", "iv-click-target"],
                            O: {
                                style: "background-image: url(" + b.imageUrl + ");",
                                href: Y2(b.url),
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            D: "div",
                            I: "iv-card-content",
                            K: [b.sponsored ? {
                                D: "div",
                                I: "iv-card-sponsored",
                                K: ["\u0110\u01b0\u1ee3c t\u00e0i tr\u1ee3", {
                                    D: "div",
                                    I: "iv-ad-info-container",
                                    K: [{D: "div", I: "iv-ad-info", W: "{{adInfo}}"}, {
                                        D: "div",
                                        I: "iv-ad-info-icon-container",
                                        K: [{D: "div", I: "iv-ad-info-icon"}, {D: "div", I: "iv-ad-info-callout"}]
                                    }]
                                }]
                            } : "", {
                                D: "a", I: "iv-click-target", O: {href: Y2(b.url)}, K: [b3("h2",
                                    e, b.title), k]
                            }]
                        }]
                    };
                    d = new g.Q(d);
                    e = g.qe("span");
                    g.Ae(e, "B\u1ea1n nh\u00ecn th\u1ea5y s\u1ea3n ph\u1ea9m n\u00e0y v\u00ec ch\u00fang t\u00f4i cho r\u1eb1ng s\u1ea3n ph\u1ea9m c\u00f3 li\u00ean quan \u0111\u1ebfn video. Ng\u01b0\u1eddi b\u00e1n c\u00f3 th\u1ec3 b\u1ed3i th\u01b0\u1eddng cho Google.");
                    d.qb(e, "adInfo");
                    e3(c, g.de("iv-click-target", d.element), b, b.url);
                    return d;
                case "video":
                    return c = a.H, d = b.isLiveNow ? {
                        D: "span",
                        Y: ["yt-badge", "yt-badge-live"],
                        W: "TR\u1ef0C TI\u1ebeP"
                    } : "", d = {
                        D: "div",
                        Y: ["iv-card",
                            "iv-card-video"],
                        K: [{
                            D: "a",
                            I: "iv-click-target",
                            O: {href: Y2(b.url)},
                            K: [c3(b.bj, b.videoDuration ? {
                                D: "span",
                                I: "iv-card-video-duration",
                                W: b.videoDuration
                            } : ""), {
                                D: "div",
                                I: "iv-card-content",
                                K: [f3(b), b3("h2", "iv-card-primary-link", b.title), d3(c, b), d]
                            }]
                        }]
                    }, d = new g.Q(d), e3(c, g.de("iv-click-target", d.element), b, b.url), d
            }
            return null
        }, Qsa = function (a, b) {
            if (0 == a.A.length) return 0;
            var c = g.$a(a.A, function (d) {
                return b.card.startMs > d.card.startMs || b.card.startMs == d.card.startMs && b.card.timestamp >= d.card.timestamp ? !0 : !1
            });
            return -1 == c ? 0 : c + 1
        }, Rsa = function (a) {
            return a.u ? "productListing" == a.u.card.type : (0, g.vi)(a.A, function (b) {
                return "productListing" == b.card.type
            })
        }, o3 = function (a) {
            g.K(a.w.getRootNode(), "ytp-cards-shopping-active", Rsa(a))
        }, Ssa = function (a, b) {
            if (a.U.Fa()) {
                var c = new G2([0,
                    a.B.scrollTop], [0, b.Zq.offsetTop], 600, Yra);
                a.context.w.ia(c, "animate", function (d) {
                    a.B.scrollTop = d.y
                });
                a.context.w.ia(c, "finish", function (d) {
                    a.B.scrollTop = d.y
                });
                c.play()
            } else g.It(a.U, !0), a.B.scrollTop = b.Zq.offsetTop, g.It(a.U, !1)
        }, p3 = function (a) {
            return a.u && a.u.card ? a.u.card : a.A[0] && a.A[0].card ? a.A[0].card : null
        }, Msa = function (a, b) {
            return g.Za(a.A, function (c) {
                return c.card.id == b
            })
        }, q3 = function (a, b, c) {
            g3.call(this, a, b);
            this.annotation = c;
            this.isActive = !1
        }, Tsa = function (a) {
            var b = a.annotation.data;
            "start_ms" in b && "end_ms" in b && a.addCueRange(a.annotation.data.start_ms, a.annotation.data.end_ms, a.annotation.id, function () {
                a.show()
            }, function () {
                a.hide()
            })
        }, r3 = function (a, b, c) {
            q3.call(this, a, b, c);
            this.w = null;
            this.G = !1;
            this.A = null;
            this.B = !1;
            this.u = this.F = this.C = null
        }, s3 = function (a, b, c) {
            q3.call(this, a, b, c);
            this.J = this.C = this.N = !1;
            this.G = 5E3;
            this.B = null;
            this.H = g.pe("DIV", "iv-promo-contents");
            this.w = this.A = this.u = null;
            this.F = new g.H(function () {
                this.u.setAttribute("aria-hidden", !0);
                g.Qh(this.A, !1);
                g.Qh(this.w, !0)
            }, 700, this);
            g.C(this, this.F)
        }, Usa = function (a) {
            var b = a.annotation.data;
            if ("cta" == a.annotation.style) var c = 6; else if ("video" == a.annotation.style || "playlist" == a.annotation.style) c = 7;
            a.G = b.collapse_delay_ms || a.G;
            var d = ["iv-promo", "iv-promo-inactive"];
            a.o.setAttribute("aria-hidden", !0);
            a.o.setAttribute("aria-label", "Qu\u1ea3ng c\u00e1o");
            a.o.tabIndex = 0;
            var e = a.annotation.Vb(), f = b.image_url;
            if (f) {
                var k = g.pe("DIV", ["iv-promo-img", "iv-click-target"]);
                f = g.pe("IMG", {src: f, "aria-hidden": "true"});
                k.appendChild(f);
                b.video_duration && !b.is_live ? (f = g.pe("SPAN", "iv-promo-video-duration",
                    b.video_duration), k.appendChild(f)) : b.playlist_length && (f = g.pe("SPAN", "iv-promo-playlist-length", b.playlist_length.toString()), k.appendChild(f));
                e && a.hk(k, e, a.annotation.id, b.session_data, void 0, c)
            }
            e ? (f = g.pe("A", "iv-promo-txt"), g.$c(f, Y2(e)), a.u = f) : a.u = g.pe("DIV", "iv-promo-txt");
            switch (a.annotation.style) {
                case "cta":
                case "website":
                    var l = g.pe("P", null, g.pe("STRONG", null, b.text_line_1));
                    var m = g.pe("P", null, g.pe("SPAN", "iv-promo-link", b.text_line_2));
                    if (f = b.text_line_3) {
                        d.push("iv-promo-website-card-cta-redesign");
                        g.R(a.context.A.experiments, "web_action_cta_larger_ui") && d.push("iv-promo-website-card-cta-larger-ui");
                        var n = g.pe("BUTTON", ["iv-promo-round-expand-icon", "ytp-button"]);
                        f = g.pe("BUTTON", ["iv-button", "iv-promo-button"], g.pe("SPAN", "iv-button-content", f));
                        var p = g.pe("DIV", "iv-promo-button-container");
                        p.appendChild(f);
                        e && a.hk(a.o, e, a.annotation.id, b.session_data, void 0, c)
                    }
                    g.I(a.u, "iv-click-target");
                    e && a.hk(a.u, e, a.annotation.id, b.session_data, void 0, c);
                    break;
                case "playlist":
                case "video":
                    l = g.pe("P", null,
                        g.pe("SPAN", null, b.text_line_1)), m = g.pe("P", null, g.pe("STRONG", null, b.text_line_2)), b.is_live && (l = m, m = g.pe("SPAN", ["yt-badge", "iv-promo-badge-live"], "TR\u1ef0C TI\u1ebeP")), g.I(a.u, "iv-click-target"), e && a.hk(a.u, e, a.annotation.id, b.session_data, void 0, c), d.push("iv-promo-video")
            }
            l && a.u.appendChild(l);
            m && a.u.appendChild(m);
            a.H.appendChild(a.u);
            p && a.H.appendChild(p);
            c = g.pe("DIV", "iv-promo-actions");
            a.w = g.pe("BUTTON", ["iv-promo-expand", "ytp-button"]);
            a.w.title = "M\u1edf r\u1ed9ng";
            a.context.o.ia(a.w,
                "click", g.Sa(a.Yr, 5E3), a);
            c.appendChild(a.w);
            g.Qh(a.w, !1);
            a.context.o.ia(a.o, "mouseover", a.AF, a);
            a.context.o.ia(a.o, "mouseout", a.zF, a);
            a.context.o.ia(a.o, "touchend", g.Sa(a.Yr, 5E3), a);
            a.A = g.pe("BUTTON", ["iv-promo-close", "ytp-button"]);
            a.A.title = "\u0110o\u0301ng";
            a.context.o.ia(a.A, "click", "cta" == a.annotation.style && b.text_line_3 ? a.sF : a.rF, a);
            c.appendChild(a.A);
            g.Jn(a.o, d);
            k && (a.o.appendChild(k), n && k.appendChild(n));
            a.o.appendChild(a.H);
            a.o.appendChild(c)
        }, Vsa = function (a) {
            a.C || a.J || a.B || (g.I(a.o, "iv-promo-collapsed"),
                a.C = !0, a.F.start())
        }, Wsa = function (a) {
            a.F.stop();
            a.C && (g.Ln(a.o, ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.C = !1, a.u && a.u.removeAttribute("aria-hidden"), g.Qh(a.w, !1), g.Qh(a.A, !0))
        }, Xsa = function (a, b) {
            a.B || (a.B = g.Vf(function () {
                t3(this);
                Vsa(this)
            }, b, a))
        }, t3 = function (a) {
            a.B && (g.v.clearTimeout(a.B), a.B = null)
        }, u3 = function (a) {
            g.pL.call(this, a);
            this.J = !1;
            this.H = 0;
            this.F = {};
            this.U = new ysa(a);
            this.B = new g.O(this);
            g.C(this, this.B);
            this.C = this.w = null;
            this.B.L(this.player, "onVideoAreaChange", (0, g.x)(this.P, this, "onVideoAreaChange"));
            this.B.L(this.player, "onHideControls", (0, g.x)(this.P, this, "onHideControls"));
            this.B.L(this.player, "onShowControls", (0, g.x)(this.P, this, "onShowControls"));
            this.B.L(this.player, "resize", (0, g.x)(this.P, this, "resize"));
            this.B.L(this.player, "presentingplayerstatechange", (0, g.x)(this.P, this, "presentingplayerstatechange"));
            this.subscribe("presentingplayerstatechange", this.hM, this);
            this.subscribe("resize", this.lp, this);
            this.player.M().F.subscribe("vast_info_card_add", this.iB, this);
            this.S = new g.O(this);
            g.C(this, this.S);
            this.V = g.pe("DIV", "video-custom-annotations");
            this.u = new g.Q({D: "div", Y: ["ytp-player-content", "ytp-iv-player-content"]});
            g.C(this, this.u);
            g.cL(this.player, this.u.element, 4);
            this.u.hide();
            this.A = new g.Q({D: "div", Y: ["ytp-iv-video-content"]});
            g.C(this, this.A);
            g.se(this.A.element, g.pe("DIV", "video-annotations",
                this.V));
            this.G = this.o = null;
            this.N = [];
            Ysa(this) && this.load();
            var b = g.qe("STYLE");
            (document.getElementsByTagName("HEAD")[0] || document.body).appendChild(b);
            g.Ie(this, function () {
                g.ve(b)
            });
            if (a = b.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                0)
        }, Zsa = function () {
            var a = g.pe("DIV", ["annotation",
                "annotation-type-custom"]);
            g.Qh(a, !1);
            return a
        }, $sa = function (a) {
            switch (a) {
                case "annotation-editor":
                case "live-dashboard":
                    return !0
            }
            return !1
        }, Ysa = function (a) {
            var b = a.player.M();
            a = a.player.getVideoData();
            return 1 == (b.annotationsLoadPolicy || a.annotationsLoadPolicy) && !a.TC || b.F.get(a.videoId) || g.JB(a) || g.KB(a) ? !0 : !1
        }, ata = function (a, b, c) {
            a.J = !0;
            a.C = g.Iq(b, c)
        }, bta = function (a, b) {
            for (var c = {}, d = 0; d < b.attributes.length; d++) {
                var e = b.attributes[d];
                c[e.name] = e.nodeValue
            }
            for (d = 0; d < b.childNodes.length; d++) if (e = b.childNodes[d], g.Pa(e) && 1 == e.nodeType) {
                if (c[e.tagName]) var f = c[e.tagName]; else if ("data" == e.tagName) {
                    0 < e.childNodes.length && (f = e.childNodes[0].nodeValue, c[e.tagName] = "string" == typeof f ? f.trim() : f);
                    continue
                } else f = [], c[e.tagName] = f;
                e && "TEXT" == e.tagName ? 1 == e.childNodes.length && 3 == e.childNodes[0].nodeType ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(bta(a, e))
            }
            return c
        }, cta = function (a, b, c) {
            return !(a.loaded && a.H == b && a.player.getVideoData().videoId ==
                c)
        }, fta = function (a) {
            var b = a.player.getVideoData();
            if (b.fe) {
                var c = a.player.M().F.get(b.videoId);
                if (c) {
                    var d = {format: "XML", de: {}, method: "POST", withCredentials: !0};
                    d.jd = (0, g.x)(function (e, f, k) {
                        cta(this, e, f) || (e = g.Cq(k) && k.responseXML ? k.responseXML : null) && v3(this, e)
                    }, a, a.H, b.videoId);
                    g.Zp() && (d.jd = dta(a, d.jd));
                    d.vb = {ic_only: "1"};
                    eta(d, c);
                    a.J = !0;
                    g.Iq(b.fe, d)
                }
            }
        }, eta = function (a, b) {
            a.method = "POST";
            a.vb = a.vb || {};
            b.xn && (a.vb.ic_coll = b.xn);
            b.yn && (a.vb.ic_xml = b.yn);
            b.Jm && (a.vb.ic_track = b.Jm)
        }, gta = function (a) {
            var b = new g.Q({D: "div"});
            g.Qh(b.element, !1);
            var c = new k3(a.player, b.element, w3(a));
            g.C(c, b);
            b.ba(a.u.element);
            c.ym();
            return c
        }, w3 = function (a) {
            if (!a.G) {
                var b = new J2(a);
                g.C(a, b);
                var c = new g.I1(a);
                g.C(a, c);
                a.G = new Asa(b, c, a.player.M(), a.player.getVideoData(), a.U, a.player, a.Ih)
            }
            return a.G
        }, v3 = function (a, b) {
            var c = !1, d = b.getElementsByTagName("annotations");
            if (d && !(1 > d.length) && (d = d[0].getAttribute("itct"))) {
                var e = g.gs();
                if (e) {
                    var f = g.es();
                    f && g.ws(g.Bo("use_default_events_client") ? void 0 : g.Uq, e, f, [g.Zr(d)])
                }
            }
            d = b.getElementsByTagName("annotation");
            for (e = 0; e < d.length; e++) {
                var k = bta(a, d[e]);
                f = null;
                try {
                    if (k) {
                        var l = k.id, m = /.+/;
                        var n = "string" === typeof l && null != m && null != l && l.match(m) ? l : "";
                        var p = W2(k.type, hta), t = W2(k.style, ita), u = V2(k.data),
                            z = 0 != u.length ? JSON.parse(u) : {}, B = osa(k.action);
                        f = n && p ? new Z2(n, p, t, B, z) : null
                    } else f = null
                } catch (ha) {
                }
                if (f) {
                    a:{
                        switch (f.type) {
                            case "branding":
                            case "promotion":
                                k =
                                    !0;
                                break a
                        }
                        k = !1
                    }
                    if (k) {
                        k = a;
                        m = f;
                        var D = Zsa(), E = null;
                        switch (m.type) {
                            case "branding":
                                if (k.player.M().sa) break;
                                k.u.element.appendChild(D);
                                E = new r3(D, w3(k), m);
                                break;
                            case "promotion":
                                g.cL(k.player, D, 4), E = new s3(D, w3(k), m)
                        }
                        E && E.ym();
                        if (k = E) g.C(a, k), a.F[f.id] = k
                    } else if ("card" == f.type || "drawer" == f.type) {
                        a.o || (a.o = gta(a), g.C(a, a.o));
                        if ("card" == f.type) {
                            if (c = a.o, E = f && f.data && f.data.card_type) switch (k = f.data.tracking || {}, k = {
                                Rx: k.impression,
                                click: k.click,
                                close: k.close,
                                rC: k.teaser_impression,
                                Tp: k.teaser_click
                            }, m =
                                f.data.tracking_params || {}, D = null, E) {
                                case "collaborator":
                                    f = {
                                        id: f.id,
                                        timestamp: f.data.timestamp || 0,
                                        type: f.data.card_type,
                                        teaserText: f.data.teaser_text,
                                        teaserDurationMs: f.data.teaser_duration_ms,
                                        startMs: f.data.start_ms,
                                        autoOpen: f.data.auto_open || !1,
                                        Nb: f.data.session_data || {},
                                        sponsored: f.data.sponsored || !1,
                                        Mc: k,
                                        ie: m.card ? g.Zr(m.card) : null,
                                        be: m.teaser ? g.Zr(m.teaser) : null,
                                        Cd: m.icon ? g.Zr(m.icon) : null,
                                        channelId: f.data.channel_id,
                                        customMessage: f.data.custom_message ? f.data.custom_message : null,
                                        wB: f.data.image_url,
                                        title: f.data.title,
                                        metaInfo: f.data.meta_info,
                                        url: X2({
                                            pause_on_navigation: f.data.pause_on_navigation,
                                            target: f.data.target || "new",
                                            value: f.data.url
                                        })
                                    };
                                    n3(c, f);
                                    break;
                                case "episode":
                                case "movie":
                                    f = {
                                        id: f.id,
                                        timestamp: f.data.timestamp || 0,
                                        type: f.data.card_type,
                                        teaserText: f.data.teaser_text,
                                        teaserDurationMs: f.data.teaser_duration_ms,
                                        startMs: f.data.start_ms,
                                        autoOpen: f.data.auto_open || !1,
                                        Nb: f.data.session_data || {},
                                        sponsored: f.data.sponsored || !1,
                                        Mc: k,
                                        ie: m.card ? g.Zr(m.card) : null,
                                        be: m.teaser ? g.Zr(m.teaser) : null,
                                        Cd: m.icon ? g.Zr(m.icon) : null,
                                        bj: f.data.image_url,
                                        dw: f.data.badge_symbol || "",
                                        priceText: f.data.price_text || "",
                                        title: f.data.title,
                                        metaInfo: f.data.meta_info,
                                        iG: !!f.data.is_paygated,
                                        hP: !!f.data.user_has_entitlement,
                                        url: X2({target: f.data.target || "new", value: f.data.url})
                                    };
                                    n3(c, f);
                                    break;
                                case "playlist":
                                    f = {
                                        id: f.id,
                                        timestamp: f.data.timestamp || 0,
                                        type: f.data.card_type,
                                        teaserText: f.data.teaser_text,
                                        teaserDurationMs: f.data.teaser_duration_ms,
                                        startMs: f.data.start_ms,
                                        autoOpen: f.data.auto_open || !1,
                                        Nb: f.data.session_data ||
                                            {},
                                        sponsored: f.data.sponsored || !1,
                                        Mc: k,
                                        ie: m.card ? g.Zr(m.card) : null,
                                        be: m.teaser ? g.Zr(m.teaser) : null,
                                        Cd: m.icon ? g.Zr(m.icon) : null,
                                        bj: f.data.image_url,
                                        playlistVideoCount: f.data.playlist_video_count,
                                        customMessage: f.data.custom_message ? f.data.custom_message : null,
                                        title: f.data.title,
                                        metaInfo: f.data.meta_info,
                                        url: X2({
                                            pause_on_navigation: f.data.pause_on_navigation,
                                            target: f.data.target || "new",
                                            value: f.data.url
                                        })
                                    };
                                    n3(c, f);
                                    break;
                                case "poll":
                                    f = {
                                        id: f.id,
                                        timestamp: f.data.timestamp || 0,
                                        type: f.data.card_type,
                                        teaserText: f.data.teaser_text,
                                        teaserDurationMs: f.data.teaser_duration_ms,
                                        startMs: f.data.start_ms,
                                        autoOpen: f.data.auto_open || !1,
                                        Nb: f.data.session_data || {},
                                        sponsored: f.data.sponsored || !1,
                                        Mc: k,
                                        ie: m.card ? g.Zr(m.card) : null,
                                        be: m.teaser ? g.Zr(m.teaser) : null,
                                        Cd: m.icon ? g.Zr(m.icon) : null,
                                        title: f.data.title,
                                        choices: f.data.choices,
                                        Ke: f.data.hasOwnProperty("old_vote") ? f.data.old_vote : null,
                                        Wi: f.data.signin_url ? X2({target: "current", value: f.data.signin_url}) : null,
                                        sP: f.data.hasOwnProperty("xsrf_token") ? f.data.xsrf_token : null
                                    };
                                    n3(c, f);
                                    break;
                                case "productListing":
                                    f.data.signin_url &&
                                    (D = X2({target: "current", value: f.data.signin_url}));
                                    E = [];
                                    for (var F = f.data.offers || [], J = 0; J < F.length; J++) E.push(new xsa(g.hd(F[J].merchant), g.hd(F[J].price)));
                                    f = {
                                        wT: !1,
                                        id: f.id,
                                        timestamp: f.data.timestamp || 0,
                                        type: f.data.card_type,
                                        teaserText: f.data.teaser_text,
                                        teaserDurationMs: f.data.teaser_duration_ms,
                                        startMs: f.data.start_ms,
                                        autoOpen: f.data.auto_open || !1,
                                        Nb: f.data.session_data || {},
                                        sponsored: f.data.sponsored || !1,
                                        Mc: k,
                                        ie: m.card ? g.Zr(m.card) : null,
                                        be: m.teaser ? g.Zr(m.teaser) : null,
                                        Cd: m.icon ? g.Zr(m.icon) : null,
                                        imageUrl: f.data.image_url,
                                        displayDomain: f.data.display_domain ? f.data.display_domain : null,
                                        showLinkIcon: !!f.data.show_link_icon,
                                        on: f.data.button_icon_url ? f.data.button_icon_url : null,
                                        title: f.data.title,
                                        customMessage: f.data.custom_message ? f.data.custom_message : null,
                                        url: X2({
                                            pause_on_navigation: f.data.pause_on_navigation,
                                            target: f.data.target || "new",
                                            value: f.data.url
                                        }),
                                        Wi: D,
                                        RT: f.data.signin_title ? f.data.signin_title : null,
                                        QT: f.data.signin_message ? f.data.signin_message : null,
                                        offers: E
                                    };
                                    n3(c, f);
                                    break;
                                case "simple":
                                    f =
                                        {
                                            id: f.id,
                                            timestamp: f.data.timestamp || 0,
                                            type: f.data.card_type,
                                            teaserText: f.data.teaser_text,
                                            teaserDurationMs: f.data.teaser_duration_ms,
                                            startMs: f.data.start_ms,
                                            autoOpen: f.data.auto_open || !1,
                                            Nb: f.data.session_data || {},
                                            sponsored: f.data.sponsored || !1,
                                            Mc: k,
                                            ie: m.card ? g.Zr(m.card) : null,
                                            be: m.teaser ? g.Zr(m.teaser) : null,
                                            Cd: m.icon ? g.Zr(m.icon) : null,
                                            imageUrl: f.data.image_url,
                                            displayDomain: f.data.display_domain ? f.data.display_domain : null,
                                            showLinkIcon: !!f.data.show_link_icon,
                                            on: f.data.button_icon_url ? f.data.button_icon_url :
                                                null,
                                            title: f.data.title,
                                            customMessage: f.data.custom_message ? f.data.custom_message : null,
                                            url: X2({
                                                pause_on_navigation: f.data.pause_on_navigation,
                                                target: f.data.target || "new",
                                                value: f.data.url
                                            })
                                        };
                                    n3(c, f);
                                    break;
                                case "video":
                                    f = {
                                        id: f.id,
                                        timestamp: f.data.timestamp || 0,
                                        type: f.data.card_type,
                                        teaserText: f.data.teaser_text,
                                        teaserDurationMs: f.data.teaser_duration_ms,
                                        startMs: f.data.start_ms,
                                        autoOpen: f.data.auto_open || !1,
                                        Nb: f.data.session_data || {},
                                        sponsored: f.data.sponsored || !1,
                                        Mc: k,
                                        ie: m.card ? g.Zr(m.card) : null,
                                        be: m.teaser ?
                                            g.Zr(m.teaser) : null,
                                        Cd: m.icon ? g.Zr(m.icon) : null,
                                        bj: f.data.image_url,
                                        videoDuration: f.data.video_duration || null,
                                        customMessage: f.data.custom_message ? f.data.custom_message : null,
                                        title: f.data.title,
                                        metaInfo: f.data.meta_info,
                                        isLiveNow: !!f.data.is_live_now,
                                        url: X2({
                                            pause_on_navigation: f.data.pause_on_navigation,
                                            target: f.data.target || "new",
                                            value: f.data.url
                                        })
                                    }, n3(c, f)
                            }
                        } else Ksa(a.o, f);
                        c = !0
                    }
                }
            }
            c && (A2(a.player), a.lp())
        }, jta = function (a, b) {
            var c = !1;
            a.o || (a.o = gta(a), g.C(a, a.o));
            for (var d = g.q(b.cards || []), e = d.next(); !e.done; e = d.next()) Lsa(a.o, e.value.cardRenderer), c = !0;
            c && (c = a.o, d = b.headerText ? g.U(b.headerText) : "", g.Ae(c.Ba, d), c.S && c.S.setAttribute("title", d), c.ca = b.trackingParams ? g.Zr(b.trackingParams) : null, c.V = b.closeButton.infoCardIconRenderer.trackingParams ? g.Zr(b.closeButton.infoCardIconRenderer.trackingParams) : null, c.J = b.icon.infoCardIconRenderer.trackingParams ? g.Zr(b.icon.infoCardIconRenderer.trackingParams) : null, A2(a.player), a.lp())
        },
        kta = function (a, b, c, d, e) {
            if (!a.player.M().sa) {
                var f = [];
                b.navigationEndpoint && b.navigationEndpoint.browseEndpoint && b.navigationEndpoint.browseEndpoint.browseId && f.push(new ssa("openUrl", "click", new qsa("/channel/" + b.navigationEndpoint.browseEndpoint.browseId, "new", !0, !0), null));
                var k = b.watermark.thumbnails[0];
                d = {
                    channel_name: b.channelName,
                    end_ms: b.endTimeMs,
                    image_height: k.height,
                    image_type: 1,
                    image_url: k.url,
                    image_width: k.width,
                    is_mobile: !1,
                    session_data: {annotation_id: c, ei: e, feature: "iv", itct: b.trackingParams, src_vid: d},
                    start_ms: b.startTimeMs
                };
                if (b.subscribeButton &&
                    b.subscribeButton.subscribeButtonRenderer) {
                    d.channel_id = b.subscribeButton.subscribeButtonRenderer.channelId;
                    b = b.subscribeButton.subscribeButtonRenderer;
                    k = e = null;
                    b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.U(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (k = g.U(b.subscriberCountText))) : (b.subscriberCountText && (e = g.U(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (k = g.U(b.subscriberCountWithSubscribeText)));
                    var l = "";
                    b.signInEndpoint && b.signInEndpoint.webNavigationEndpointData &&
                    b.signInEndpoint.webNavigationEndpointData.url && (l = b.signInEndpoint.webNavigationEndpointData.url);
                    b = {
                        subscribeText: g.U(b.unsubscribedButtonText),
                        subscribeCount: e,
                        unsubscribeText: g.U(b.subscribedButtonText),
                        unsubscribeCount: k,
                        enabled: b.enabled,
                        classic: !1,
                        subscribed: b.subscribed,
                        feature: "iv",
                        signInUrl: l
                    };
                    d.standalone_subscribe_button_data = b
                }
                f = new Z2(c, "branding", "branding", f, d);
                d = Zsa();
                a.u.element.appendChild(d);
                f = new r3(d, w3(a), f);
                f.ym();
                g.C(f, f);
                a.F[c] = f
            }
        }, dta = function (a, b) {
            return (0, g.x)(function () {
                if (!this.fa()) {
                    var c =
                        Array.prototype.slice.call(arguments, 0);
                    c.unshift(b);
                    b = g.Sa.apply(window, c);
                    this.N.push(g.Xp(b))
                }
            }, a)
        }, D2 = {}, E2 = null;
    g.Ua(G2, g.Mn);
    g.h = G2.prototype;
    g.h.getDuration = function () {
        return this.duration
    };
    g.h.play = function (a) {
        if (a || 0 == this.o) this.progress = 0, this.coords = this.w; else if (this.ab()) return !1;
        F2(this);
        this.startTime = a = (0, g.G)();
        -1 == this.o && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.B = this.startTime;
        this.progress || this.jp();
        this.ye("play");
        -1 == this.o && this.ye("resume");
        this.o = 1;
        var b = g.Ra(this);
        b in D2 || (D2[b] = this);
        $ra();
        asa(this, a);
        return !0
    };
    g.h.stop = function (a) {
        F2(this);
        this.o = 0;
        a && (this.progress = 1);
        bsa(this, this.progress);
        this.ye("stop");
        this.hm()
    };
    g.h.pause = function () {
        this.ab() && (F2(this), this.o = -1, this.ye("pause"))
    };
    g.h.X = function () {
        0 == this.o || this.stop(!1);
        this.ye("destroy");
        G2.Fb.X.call(this)
    };
    g.h.destroy = function () {
        this.dispose()
    };
    g.h.Tt = function () {
        this.ye("animate")
    };
    g.h.ye = function (a) {
        this.dispatchEvent(new csa(a, this))
    };
    g.Ua(csa, g.Le);
    g.Ua(H2, G2);
    H2.prototype.A = g.Ja;
    H2.prototype.Tt = function () {
        this.A();
        H2.Fb.Tt.call(this)
    };
    H2.prototype.hm = function () {
        this.A();
        H2.Fb.hm.call(this)
    };
    H2.prototype.jp = function () {
        this.A();
        H2.Fb.jp.call(this)
    };
    g.Ua(I2, H2);
    I2.prototype.A = function () {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    g.r(J2, g.A);
    J2.prototype.ia = function (a, b, c, d) {
        c = (0, g.x)(c, d || this.u);
        a = g.Ip(a, b, c);
        this.o.push(a);
        return a
    };
    J2.prototype.Js = function (a, b, c, d) {
        c = (0, g.x)(c, d || this.u);
        a = g.Sp(a, b, c);
        this.o.push(a);
        return a
    };
    J2.prototype.Xa = function (a) {
        g.Jp(a);
        g.fb(this.o, a)
    };
    J2.prototype.X = function () {
        g.Jp(this.o);
        this.o.length = 0;
        g.A.prototype.X.call(this)
    };
    g.r(N2, g.pL);
    g.h = N2.prototype;
    g.h.load = function () {
        g.pL.prototype.load.call(this);
        if (!O2(this)) {
            var a = g.IB(this.player.getVideoData());
            if (a) a = M2(a, fsa(this)), P2(this, a, !1); else {
                var b = this.player.getVideoData();
                a = b.videoId;
                this.A && this.A.abort();
                a = {method: "POST", jd: (0, g.x)(this.XK, this, a), de: {v: a}, withCredentials: !0};
                this.J && (a.de.ptype = "embedded");
                var c = this.player.getVideoData().Jn;
                c && (a.vb = {ad_tracking: c});
                if (b = g.HB(b)) if (b = g.xc(b), b = g.vc(b)) this.A = g.Iq(b, a)
            }
        }
    };
    g.h.unload = function () {
        P2(this, null);
        this.A && (this.A.abort(), this.A = null);
        g.pL.prototype.unload.call(this)
    };
    g.h.Pc = function (a, b) {
        if (!O2(this)) return null;
        if ("loadCustomEndscreenRenderer" == a) {
            var c = M2(b, "new");
            P2(this, c);
            return !0
        }
        return null
    };
    g.h.getOptions = function () {
        return O2(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.h.XK = function (a, b) {
        var c = this.A = null;
        if (200 == b.status) {
            var d = b.responseText;
            ")]}" == d.substring(0, 3) && (d = d.substring(3), c = JSON.parse(d), c = M2(c, fsa(this)))
        }
        P2(this, c)
    };
    g.h.Qy = function () {
        if (this.u && this.u.elements) {
            var a = this.player.getVideoContentRect();
            if (a && 0 != a.width && 0 != a.height) {
                var b = this.player.getPlayerSize();
                if (b && 0 != b.width && 0 != b.height) {
                    var c = a.width / a.height;
                    var d = 0;
                    for (var e = -1, f = 0; f < lta.length; f++) {
                        var k = Math.abs(b.width - lta[f]);
                        if (-1 == e || d >= k) e = f, d = k
                    }
                    d = mta[e];
                    this.w && g.wh(this.w.element, "outline-width", Math.max(b.width, b.height) + "px");
                    for (b = 0; b < this.u.elements.length; ++b) if (f = this.u.elements[b].id, e = this.o[f], k = this.F[f], e && k) {
                        var l = k.width * c / k.aspectRatio;
                        f = Math.round(l * a.height);
                        var m = a.left + Math.round(k.left * a.width), n = a.top + Math.round(k.top * a.height);
                        g.Oh(e.element, Math.round(k.width * a.width), f);
                        g.Eh(e.element, m, n);
                        g.Ln(e.element, nta);
                        m = k.left + k.width / 2;
                        k = k.top + l / 2;
                        g.I(e.element, .5 >= m && .5 >= k ? "ytp-ce-top-left-quad" : .5 < m && .5 >= k ? "ytp-ce-top-right-quad" : .5 >= m && .5 < k ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                        g.Ln(e.element, mta);
                        g.I(e.element, d);
                        (e = g.ce(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.wh(e, "height", f + "px")
                    }
                }
            }
        }
    };
    g.h.WG = function (a) {
        if (this.u) if ("ytp-ce-in-endscreen" == a.getId()) T2(this, this.u.impressionUrls), (a = g.gs()) && this.u.visualElement && g.xs(a, this.u.visualElement); else {
            a = a.getId().substring(15);
            var b = this.o[a], c = this.F[a];
            g.I(b.element, "ytp-ce-element-show");
            b.element.removeAttribute("aria-hidden");
            b = this.player.getRootNode();
            g.I(b, "ytp-ce-shown");
            T2(this, c.impressionUrls);
            (b = g.gs()) && g.xs(b, c.visualElement);
            this.player.M().Eb && this.player.ma("endscreenelementshown", a)
        }
    };
    g.h.XG = function (a) {
        if ("ytp-ce-in-endscreen" != a.getId()) {
            a = a.getId().substring(15);
            var b = this.o[a];
            g.Kn(b.element, "ytp-ce-element-show");
            b.element.setAttribute("aria-hidden", !0);
            b = this.player.getRootNode();
            g.Kn(b, "ytp-ce-shown");
            this.player.M().Eb && this.player.ma("endscreenelementhidden", a)
        }
    };
    g.h.LN = function (a) {
        var b = this;
        a.target === window && (new g.H(function () {
            for (var c in b.o) g.Ln(b.o[c].element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    g.h.xA = function (a, b) {
        if (a.targetUrl && (!b || "keypress" != b.type || 13 == b.keyCode)) {
            for (var c = b.target; c && !g.In(c, "ytp-ce-element");) {
                g.In(c, "subscribe-label") && U2(this, a);
                if (g.In(c, "ytp-ce-channel-subscribe")) return;
                c = g.ye(c)
            }
            if (!c || g.In(c, "ytp-ce-element-hover")) {
                b.preventDefault();
                b.stopPropagation();
                if (c = this.o[a.id]) this.Xt(c, a), c.element.blur();
                b.ctrlKey || b.metaKey || "new" == a.OO ? (U2(this, a), this.aC(), this.player.pauseVideo(), c = g.xc(R2(this, a.targetUrl)), c = g.vc(c), g.rN(c, void 0, a.Nb)) : (c = this.player.getVideoData().Bc,
                    c = (0, g.x)(this.HO, this, c, R2(this, a.targetUrl), a.Nb), c = (0, g.x)(this.aC, this, c), U2(this, a, c))
            }
        }
    };
    g.h.HO = function (a, b, c) {
        var d = g.qq(b);
        a && d && (d.v || d.list) ? g.mT(this.player.app, d.v, c, d.list, !1, void 0) : g.qN(b, c)
    };
    g.h.Vs = function (a, b) {
        g.In(a.element, "ytp-ce-element-hover") || ("VIDEO" == b.type || "PLAYLIST" == b.type ? g.I(a.element, "ytp-ce-element-hover") : this.player.M().o ? (new g.H(function () {
            g.I(a.element, "ytp-ce-element-hover")
        }, 200)).start() : g.I(a.element, "ytp-ce-element-hover"), T2(this, b.XF), S2(this, b.id, !0))
    };
    g.h.Xt = function (a, b) {
        g.Kn(a.element, "ytp-ce-element-hover");
        g.Kn(a.element, "ytp-ce-force-expand");
        S2(this, b.id, !1)
    };
    g.h.aC = function (a) {
        this.player.sendVideoStatsEngageEvent(17, a)
    };
    var lta = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        mta = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        nta = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"];
    var rsa = {xQ: "current", TR: "new"};
    var tsa = {CLOSE: "close", WR: "openUrl", ID: "subscribe"},
        usa = {rQ: "click", CLOSE: "close", kR: "hidden", BS: "rollOut", CS: "rollOver", FS: "shown"};
    Z2.prototype.Vb = function () {
        var a = vsa(this, function (b) {
            return "openUrl" == b.type && null != b.url
        });
        return a ? a.url : null
    };
    var ita = {
        UP: "anchored",
        jD: "branding",
        CHANNEL: "channel",
        wQ: "cta",
        mR: "highlightText",
        DR: "label",
        PLAYLIST: "playlist",
        oS: "popup",
        JS: "speech",
        ID: "subscribe",
        US: "title",
        VIDEO: "video",
        hT: "website"
    }, hta = {
        jD: "branding",
        iQ: "card",
        EQ: "drawer",
        lR: "highlight",
        KR: "marker",
        tS: "promotion",
        TEXT: "text",
        jT: "widget"
    };
    a3.prototype.u = function (a, b) {
        var c = g.Fe(b.target, "label");
        c && g.K(c, "iv-card-poll-choice-focused", a)
    };
    a3.prototype.A = function (a, b) {
        var c = g.Fe(b.target, null, "iv-card-poll", void 0);
        if (c) if (a.Wi) g.ee("iv-card-sign-in-button", c).click(); else {
            var d = parseInt(Wra(b.target), 10);
            if (null == a.Ke) a.choices[d].count++, a.Ke = d; else if (a.Ke != d) {
                var e = a.choices[a.Ke];
                e.count = Math.max(e.count - 1, 0);
                a.choices[d].count++;
                a.Ke = d
            } else e = a.choices[a.Ke], e.count = Math.max(e.count - 1, 0), a.Ke = null;
            Csa(a, c);
            g.Mq(this.o.videoData.fe, {de: {action_poll_vote: 1}, vb: {poll_id: a.id, index: d, session_token: a.sP}});
            $2(this.o.logger, a.Mc.click,
                void 0, 5);
            (c = g.gs()) && a.ie && g.Cs(c, a.ie)
        }
    };
    g.r(g3, g.A);
    g.h = g3.prototype;
    g.h.addCueRange = function (a, b, c, d, e) {
        a = new g.nD(a, b, {id: c});
        a.namespace = "annotations_module";
        d && this.na.set(a, d);
        e && this.ra.set(a, e);
        g.ZK(this.context.T, [a])
    };
    g.h.ym = function () {
        this.context.u.subscribe("resize", this.sn, this)
    };
    g.h.hk = function (a, b, c, d, e, f) {
        this.context.o.ia(a, "click", g.Sa(this.Ao, b, c, d, e || [], f || 0), this);
        this.context.o.ia(a, "touchstart", g.Sa(function () {
            this.Yu = !1
        }), this);
        this.context.o.ia(a, "touchmove", g.Sa(function () {
            this.Yu = !0
        }), this)
    };
    g.h.Ao = function (a, b, c, d, e, f) {
        if (this.Yu) return !1;
        f && (f.stopPropagation(), f.preventDefault());
        Isa(this, a, c, d, e);
        return !1
    };
    g.h.show = function () {
    };
    g.h.hide = function () {
    };
    g.h.destroy = function () {
        g.ve(this.o)
    };
    g.h.sn = function () {
    };
    g.h.X = function () {
        this.na.clear();
        this.ra.clear();
        g.A.prototype.X.call(this)
    };
    g.r(k3, g3);
    g.h = k3.prototype;
    g.h.isAvailable = function () {
        var a;
        if (a = !!this.A.length) (a = this.w.getRootNode()) ? (a = g.Ph(a), a = 173 < a.width && 173 < a.height) : a = !1;
        return a
    };
    g.h.sn = function () {
        var a = this.isAvailable();
        g.Qh(this.o, a);
        g.K(this.context.T.getRootNode(), "ytp-iv-drawer-enabled", a);
        A2(this.w)
    };
    g.h.destroy = function () {
        var a = g.RK(g.EK(this.w));
        a && a.Rs(!1, void 0);
        try {
            this.w.getRootNode().removeChild(this.F)
        } catch (b) {
        }
        g.To(this.Z);
        g.Jp(this.ea);
        this.ha && this.ha.dispose();
        this.G && this.G.dispose();
        g3.prototype.destroy.call(this)
    };
    g.h.iH = function (a) {
        this.aa.start();
        a.preventDefault();
        a = a || window.event;
        var b = 0;
        "MozMousePixelScroll" == a.type ? b = 0 == (a.axis == a.HORIZONTAL_AXIS) ? a.detail : 0 : window.opera ? b = a.detail : b = 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? a.wheelDeltaY / -30 : a.wheelDeltaY / -1.2 : a.wheelDelta / -1.6 : a.wheelDeltaY / -3;
        if (a = b) this.B.scrollTop += a
    };
    g.h.bC = function (a) {
        if (!g.In(this.w.getRootNode(), "ytp-cards-teaser-shown")) {
            if (this.u != a) {
                var b = g.gs(), c = this.u ? this.u.card.Cd : this.J;
                b && c && C2(b, [c]);
                this.u = a;
                o3(this)
            }
            if (b = "none" != this.o.style.display) 2 == this.context.T.getPresentingPlayerType() ? b = 1 == this.context.T.getAdState() : (b = this.context.T.getPlayerState(), c = 0 == b && 0 === this.context.T.getCurrentTime(), b = 1 == b || 3 == b || c);
            b && a.card.teaserDurationMs && (b = {
                teaserText: a.card.teaserText,
                durationMs: a.card.teaserDurationMs
            }, (c = g.RK(g.EK(this.w))) && c.Rs(!0,
                b));
            this.ya.isActive() || ((!this.C || !this.aa.isActive() && this.da) && Ssa(this, a), this.ya.start(910 + a.card.teaserDurationMs))
        }
    };
    g.h.yO = function (a) {
        this.C || (this.u = a, o3(this), Ssa(this, a), i3(this, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
    };
    g.h.lE = function () {
        if (this.C) {
            $2(this.context.logger, p3(this).Mc.close);
            var a = g.gs();
            a && this.V && g.Cs(a, this.V);
            j3(this)
        }
    };
    g.h.BE = function () {
        g.K(this.F, "iv-drawer-scrolled", 0 < this.B.scrollTop)
    };
    g.h.qG = function () {
        var a = g.gs(), b = p3(this);
        b = b ? b.Cd : this.J;
        a && b && B2(a, [b])
    };
    g.h.pG = function () {
        var a = g.gs(), b = p3(this);
        b = b ? b.Cd : this.J;
        a && b && C2(a, [b])
    };
    g.h.tG = function () {
        var a = p3(this);
        $2(this.context.logger, a.Mc.rC);
        var b = g.gs();
        b && a && B2(b, [a.be, a.Cd])
    };
    g.h.sG = function () {
        var a = g.gs(), b = p3(this);
        a && b && C2(a, [b.be])
    };
    g.h.rG = function (a) {
        var b = p3(this), c = g.gs();
        this.u ? a ? (a = this.context.logger, $2(a, b.Mc.Tp), a.o.sendVideoStatsEngageEvent(4, void 0), c && b.be && g.Cs(c, b.be)) : (a = this.context.logger, $2(a, b.Mc.Tp), a.o.sendVideoStatsEngageEvent(4, void 0), c && b.Cd && g.Cs(c, b.Cd)) : (a = this.context.logger, $2(a, b.Mc.Tp), a.o.sendVideoStatsEngageEvent(4, void 0), c && this.J && g.Cs(c, this.J))
    };
    g.r(q3, g3);
    q3.prototype.ym = function () {
        g3.prototype.ym.call(this);
        Tsa(this)
    };
    q3.prototype.show = function () {
        g3.prototype.show.call(this);
        var a = g.gs(), b = this.annotation.data;
        a && b && (b = b.session_data) && B2(a, [g.Zr(b.itct)])
    };
    q3.prototype.hide = function () {
        g3.prototype.hide.call(this);
        var a = g.gs(), b = this.annotation.data;
        a && b && (b = b.session_data) && C2(a, [g.Zr(b.itct)])
    };
    g.r(r3, q3);
    g.h = r3.prototype;
    g.h.IO = function (a, b, c, d) {
        this.A.stop();
        if (!this.B) {
            var e = g.Ph(a);
            this.u || (g.Nh(a, e.width), g.Nh(b, e.width));
            g.wh(c, "top", e.height - Math.max(Math.min(e.height, d) / 2 + 10, 20) + "px");
            g.wh(c, "right", "1px");
            this.B = !0;
            g.Qh(a, !0);
            this.C = new g.H(function () {
                g.I(this.o, "iv-branding-active")
            }, 0, this);
            this.C.start()
        }
    };
    g.h.WF = function (a, b) {
        g.Kn(this.o, "iv-branding-active");
        this.F = new g.H((0, g.x)(function () {
            g.Qh(a, !1);
            this.u || g.Nh(b, 0)
        }, this), 250);
        this.F.start();
        this.B = !1
    };
    g.h.show = function () {
        if (!this.isActive) {
            q3.prototype.show.call(this);
            if (!this.G) {
                g.I(this.o, "iv-branding");
                var a = this.annotation.data;
                this.w = g.pe("IMG", {
                    "aria-label": "H\u00ecnh m\u1edd c\u1ee7a k\u00eanh",
                    src: a.image_url,
                    "class": "branding-img iv-click-target",
                    width: a.image_width,
                    height: a.image_height
                });
                g.Qh(this.w, !1);
                var b = g.pe("DIV", "branding-img-container", this.w);
                this.o.appendChild(b);
                (b = this.annotation.Vb()) && this.hk(this.w, b, this.annotation.id, a.session_data);
                if (a.channel_name) {
                    var c = g.pe("DIV",
                        "iv-branding-context-name");
                    g.Ae(c, a.channel_name);
                    var d = g.pe("DIV", "iv-branding-context-subscribe");
                    if (b = a.standalone_subscribe_button_data) this.u = new g.HP(b.subscribeText, b.subscribeCount, b.unsubscribeText, b.unsubscribeCount, !!b.enabled, !!b.classic, a.channel_id, !!b.subscribed, b.feature, a.session_data.itct, b.signinUrl, this.context.T), this.u.ba(d);
                    b = g.pe("DIV", "iv-branding-context-subscribe-caret");
                    c = g.pe("DIV", "branding-context-container-inner", b, c, d);
                    g.Qh(c, !1);
                    d = g.pe("DIV", "branding-context-container-outer",
                        c);
                    g.wh(d, "right", a.image_width + "px");
                    this.o.appendChild(d);
                    this.A = new g.H(g.Sa(this.WF, c, d), 500, this);
                    g.C(this, this.A);
                    this.context.o.ia(this.o, "mouseover", (0, g.x)(this.IO, this, c, d, b, a.image_height));
                    this.context.o.ia(this.o, "mouseout", (0, g.x)(this.A.start, this.A, void 0))
                }
                this.G = !0
            }
            g.Qh(this.o, !0);
            this.isActive = !0;
            if (this.w) {
                a = this.w;
                var e = void 0 === e ? 0 : e;
                b = g.Ih(a);
                c = g.Ph(a);
                b = (new g.th(b.x, b.y, c.width, c.height)).width;
                g.Eh(a, b);
                e = new I2(a, [b, a.offsetTop], [b - b - e, a.offsetTop], 200, Xra);
                g.C(this, e);
                this.context.w.ia(e, "begin", g.Sa(g.Qh, a, !0));
                e.play()
            }
        }
    };
    g.h.hide = function () {
        this.isActive && (q3.prototype.hide.call(this), g.Qh(this.o, !1), this.isActive = !1)
    };
    g.h.destroy = function () {
        this.u && (this.u.dispose(), this.u = null);
        q3.prototype.destroy.call(this)
    };
    g.r(s3, q3);
    g.h = s3.prototype;
    g.h.show = function () {
        this.isActive || (q3.prototype.show.call(this), this.N || (Usa(this), this.N = !0), g.Qh(this.o, !0), g.Vf(function () {
            g.Kn(this.o, "iv-promo-inactive")
        }, 100, this), this.o.removeAttribute("aria-hidden"), this.isActive = !0, t3(this), Wsa(this), Xsa(this, this.G))
    };
    g.h.hide = function () {
        this.isActive && (g.I(this.o, "iv-promo-inactive"), this.isActive = !1, this.o.setAttribute("aria-hidden", !0))
    };
    g.h.Ao = function (a, b, c, d, e, f) {
        return this.C ? !1 : q3.prototype.Ao.call(this, a, b, c, d, e, f)
    };
    g.h.Yr = function (a, b) {
        b.stopPropagation();
        Wsa(this);
        Xsa(this, a);
        this.u.focus()
    };
    g.h.AF = function (a) {
        this.J = !0;
        this.Yr(500, a)
    };
    g.h.zF = function () {
        this.J = !1;
        Vsa(this)
    };
    g.h.rF = function (a) {
        a.stopPropagation();
        this.hide()
    };
    g.h.sF = function (a) {
        a.stopPropagation();
        t3(this);
        this.C = !0;
        g.I(this.o, "iv-promo-collapsed-no-delay");
        this.F.start()
    };
    g.h.destroy = function () {
        this.F.dispose();
        q3.prototype.destroy.call(this)
    };
    g.r(u3, g.pL);
    g.h = u3.prototype;
    g.h.Pc = function (a, b) {
        if (!$sa(this.player.M().playerStyle)) return null;
        switch (a) {
            case "loadCustomAnnotationsXml":
                var c = g.H1(b);
                c && v3(this, c);
                return !0;
            case "removeCustomAnnotationById":
                return b && this.o && (Nsa(this.o, b), A2(this.player)), !0
        }
        return null
    };
    g.h.getOptions = function () {
        return $sa(this.player.M().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.h.lp = function () {
        if (this.A) {
            var a = g.KK(this.player).getVideoContentRect(!0);
            g.Oh(this.A.element, a.width, a.height);
            g.Eh(this.A.element, a.left, a.top)
        }
        if (this.o) {
            var b = g.UK(this.player);
            a = this.o;
            b = b.width;
            g.K(a.F, "iv-drawer-small", 426 >= b);
            g.K(a.F, "iv-drawer-big", 1280 <= b)
        }
    };
    g.h.hM = function (a) {
        this.wc(a.state);
        g.V(a.state, 2) && (this.Ll() && this.Fy() && 2 != this.player.getPresentingPlayerType() && this.setCardsVisible(!1), this.Rs(!1))
    };
    g.h.load = function () {
        g.pL.prototype.load.call(this);
        this.wc(g.JK(this.player));
        this.H++;
        var a = this.player.getVideoData(), b = a.videoId, c = (0, g.x)(this.ZK, this, b, this.H),
            d = (0, g.x)(function () {
                this.C = null
            }, this);
        g.Zp() && (c = dta(this, c));
        c = {format: "XML", jd: c, onError: d, de: {}};
        a.isPharma && (c.de.pharma = "1");
        c.method = "POST";
        c.withCredentials = !0;
        (b = this.player.M().F.get(b)) && eta(c, b);
        b = b && (b.yn || b.xn);
        if (!a.gn || b) a.fe ? ata(this, a.fe, c) : (this.w = (0, g.x)(this.UG, this, c), this.player.addEventListener("videodatachange", this.w));
        g.cL(this.player, this.A.element, 4);
        this.lp();
        (b = g.JB(a)) && jta(this, b);
        (b = g.KB(a)) && b.featuredChannel && kta(this, b.featuredChannel, b.annotationId || "branding", a.videoId || null, a.eventId || null)
    };
    g.h.wc = function (a) {
        a = !a.isCued() && !g.V(a, 1024);
        g.It(this.u, a);
        g.It(this.A, a)
    };
    g.h.UG = function (a) {
        var b = this.player.getVideoData();
        b.fe && (this.w && (this.player.removeEventListener("videodatachange", this.w), this.w = null), ata(this, b.fe, a))
    };
    g.h.unload = function () {
        g.tQ(this.player.app, "annotations_module", void 0);
        g.zb(this.F, function (a) {
            a.destroy()
        });
        this.G = null;
        this.o && (this.o.destroy(), this.o = null, A2(this.player));
        this.J = !1;
        this.C && (this.C.abort(), this.C = null);
        this.F = {};
        this.u.hide();
        g.pL.prototype.unload.call(this);
        g.Ft(this.A);
        this.w && (this.player.removeEventListener("videodatachange", this.w), this.w = null)
    };
    g.h.ZK = function (a, b, c) {
        this.C = null;
        !cta(this, b, a) && (a = g.Cq(c) && c.responseXML ? c.responseXML : null) && (v3(this, a), g.I(this.player.getRootNode(), "iv-module-loaded"))
    };
    g.h.iB = function (a) {
        a == this.player.getVideoData().videoId && (this.loaded ? fta(this) : this.load())
    };
    g.h.Ll = function () {
        return !!this.o && this.o.isAvailable()
    };
    g.h.Fy = function () {
        this.Ll();
        return !!this.o && this.o.C
    };
    g.h.setCardsVisible = function (a, b, c) {
        b = void 0 === b ? !1 : b;
        this.Ll();
        this.o && (a ? c ? i3(this.o, c, b) : i3(this.o, "YOUTUBE_DRAWER_AUTO_OPEN", b) : j3(this.o))
    };
    g.h.Rs = function (a, b) {
        this.player.P(a ? "cardsteasershow" : "cardsteaserhide", b)
    };
    g.h.X = function () {
        this.player.M().F.unsubscribe("vast_info_card_add", this.iB, this);
        g.Kn(this.player.getRootNode(), "ytp-iv-drawer-open");
        for (var a = this.N, b = 0, c = a.length; b < c; b++) g.$p(a[b]);
        this.N.length = 0;
        g.pL.prototype.X.call(this)
    };
    g.EL.annotations_module = u3;
    g.EL.creatorendscreen = N2;
})(_yt_player);
