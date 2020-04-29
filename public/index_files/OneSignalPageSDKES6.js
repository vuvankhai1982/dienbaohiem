!function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }

    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
    }, i.r = function (e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 39)
}([function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });
    Object.setPrototypeOf || Array;
    Object.assign;

    function n(e, t, i, n) {
        return new (i || (i = Promise))(function (o, s) {
            function r(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function c(e) {
                e.done ? o(e.value) : new i(function (t) {
                    t(e.value)
                }).then(r, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });

    class n {
        static shouldLog() {
            try {
                if ("undefined" == typeof window || void 0 === window.localStorage) return !1;
                const e = window.localStorage.getItem("loglevel");
                return !(!e || "trace" !== e.toLowerCase())
            } catch (e) {
                return !1
            }
        }

        static setLevel(e) {
            if ("undefined" != typeof window && void 0 !== window.localStorage) try {
                window.localStorage.setItem("loglevel", e), n.proxyMethodsCreated = void 0, n.createProxyMethods()
            } catch (e) {
                return
            }
        }

        static createProxyMethods() {
            if (void 0 !== n.proxyMethodsCreated) return;
            n.proxyMethodsCreated = !0;
            const e = {log: "debug", trace: "trace", info: "info", warn: "warn", error: "error"};
            for (const t of Object.keys(e)) {
                const i = void 0 !== console[t], o = e[t], s = i && (n.shouldLog() || "error" === o);
                n[o] = s ? console[t].bind(console) : function () {
                }
            }
        }
    }

    n.createProxyMethods()
}, function (e, t, i) {
    "use strict";
    i.d(t, "g", function () {
        return p
    }), i.d(t, "u", function () {
        return h
    }), i.d(t, "c", function () {
        return f
    }), i.d(t, "o", function () {
        return m
    }), i.d(t, "w", function () {
        return b
    }), i.d(t, "i", function () {
        return S
    }), i.d(t, "q", function () {
        return v
    }), i.d(t, "p", function () {
        return O
    }), i.d(t, "b", function () {
        return y
    }), i.d(t, "e", function () {
        return w
    }), i.d(t, "a", function () {
        return E
    }), i.d(t, "t", function () {
        return P
    }), i.d(t, "m", function () {
        return I
    }), i.d(t, "j", function () {
        return T
    }), i.d(t, "h", function () {
        return C
    }), i.d(t, "r", function () {
        return A
    }), i.d(t, "v", function () {
        return N
    }), i.d(t, "f", function () {
        return M
    }), i.d(t, "x", function () {
        return k
    }), i.d(t, "s", function () {
        return _
    }), i.d(t, "l", function () {
        return x
    }), i.d(t, "d", function () {
        return R
    }), i.d(t, "n", function () {
        return D
    }), i.d(t, "k", function () {
        return W
    });
    var n = i(0), o = i(4), s = i(6), r = (i(3), i(1)), a = i(9), c = i(24), l = i(31), d = i(5), u = i(8), g = i.n(u);

    function p(e) {
        return l.a.decodeHtmlEntities(e)
    }

    function h(e) {
        var t = document.querySelectorAll(e);
        if (t.length > 0) for (let e = 0; e < t.length; e++) {
            const i = t[e].parentNode;
            i && i.removeChild(t[e])
        }
    }

    function f() {
        return n.a(this, void 0, void 0, function* () {
            return new Promise(e => {
                OneSignal.initialized ? e() : OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, e)
            })
        })
    }

    function m() {
        return a.a.isUsingSubscriptionWorkaround()
    }

    function b(e = !1) {
        return n.a(this, void 0, void 0, function* () {
            return c.a.triggerNotificationPermissionChanged(e)
        })
    }

    function S(e, ...t) {
        if (e) return e.apply(null, t)
    }

    function v(e, ...t) {
        return a.a.logMethodCall(e, ...t)
    }

    function O(e) {
        return !!e && !!e.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    }

    function y(e, t, i) {
        let n;
        if (!(n = "string" == typeof e ? document.querySelector(e) : e)) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
        n.insertAdjacentHTML(t, i)
    }

    function w(e) {
        if ("string" == typeof e) {
            const t = document.querySelector(e);
            if (null === t) throw new Error(`Cannot find element with selector "${e}"`);
            for (; t.firstChild;) t.removeChild(t.firstChild)
        } else {
            if ("object" != typeof e) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            for (; e.firstChild;) e.removeChild(e.firstChild)
        }
    }

    function E(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i) throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.add(t)
        } else {
            if ("object" != typeof e) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            e.classList.add(t)
        }
    }

    function P(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i) throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.remove(t)
        } else {
            if ("object" != typeof e) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            e.classList.remove(t)
        }
    }

    function I(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i) throw new Error(`Cannot find element with selector "${e}"`);
            return i.classList.contains(t)
        }
        if ("object" == typeof e) return e.classList.contains(t);
        throw new Error(`${e} must be a CSS selector string or DOM Element object.`)
    }

    function T(e) {
        return d.a.getConsoleStyle(e)
    }

    function C(e) {
        return new Promise(t => {
            setTimeout(t, e)
        })
    }

    function A() {
        return Promise.resolve()
    }

    function N(e, t) {
        return d.a.timeoutPromise(e, t)
    }

    function M(e, t) {
        return d.a.contains(e, t)
    }

    function k() {
        return r.a.warn("OneSignal: Unsubscribing from push."), o.a.getWindowEnv() !== s.a.ServiceWorker ? self.registration.pushManager.getSubscription().then(e => {
            if (e) return e.unsubscribe();
            throw new Error("Cannot unsubscribe because not subscribed.")
        }) : m() ? new Promise((e, t) => {
            r.a.debug("Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame."), OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, null, i => {
                r.a.debug("Unsubscribe from push succesfully remotely executed."), i.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t("Failed to remotely unsubscribe from push.")
            })
        }) : navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.ready.then(e => e.pushManager).then(e => e.getSubscription()).then(e => e ? e.unsubscribe() : Promise.resolve()) : Promise.resolve()
    }

    function _(e, t, i, n = !1) {
        if (t || r.a.error("Cannot call on() with no event: ", t), i || r.a.error("Cannot call on() with no task: ", i), "string" == typeof e) {
            let n = document.querySelectorAll(e);
            if (n.length > 0) for (let e = 0; e < n.length; e++) _(n[e], t, i)
        } else if (s = e, "[object Array]" === Object.prototype.toString.call(s)) for (let n = 0; n < e.length; n++) _(e[n], t, i); else {
            if ("object" != typeof e) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            var o = function (t) {
                var s = function () {
                    e.removeEventListener(t.type, o)
                };
                n || s(), i(t, s)
            };
            e.addEventListener(t, o)
        }
        var s
    }

    function x() {
        return window.__oneSignalSdkLoadCount || 0
    }

    function R(e, t) {
        return n.a(this, void 0, void 0, function* () {
            return yield new Promise(i => {
                OneSignal.emitter.once(e, e => {
                    if (t) {
                        t(e) && i(e)
                    } else i(e)
                })
            })
        })
    }

    function D() {
        window.__oneSignalSdkLoadCount = x() + 1
    }

    function W(e) {
        return e ? g.a.safari && e.safari ? e.safari : g.a.firefox && e.firefox ? e.firefox : e.chrome || e.firefox || e.safari || "default-icon" : "default-icon"
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0), o = i(25), s = i(36);

    class r {
    }

    class a {
    }

    var c, l, d = i(35), u = i(30), g = i(6), p = i(29), h = i(16), f = i(4), m = i(9), b = i(5), S = i(1);
    i.d(t, "a", function () {
        return v
    }), (l = c || (c = {}))[l.SET = 0] = "SET";

    class v {
        constructor(e) {
            this.databaseName = e, this.emitter = new o.a, this.database = new s.a(this.databaseName)
        }

        static resetInstance() {
            v.databaseInstance = null
        }

        static get singletonInstance() {
            return v.databaseInstanceName || (v.databaseInstanceName = "ONE_SIGNAL_SDK_DB"), v.databaseInstance || (v.databaseInstance = new v(v.databaseInstanceName)), v.databaseInstance
        }

        static applyDbResultFilter(e, t, i) {
            switch (e) {
                case"Options":
                    return i && t ? i.value : i && !t ? i : null;
                case"Ids":
                    return i && t ? i.id : i && !t ? i : null;
                case"NotificationOpened":
                    return i && t ? {data: i.data, timestamp: i.timestamp} : i && !t ? i : null;
                default:
                    return i || null
            }
        }

        shouldUsePostmam() {
            return f.a.getWindowEnv() !== g.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && f.a.getTestEnv() === u.a.None
        }

        get(e, t) {
            return n.a(this, void 0, void 0, function* () {
                if (this.shouldUsePostmam()) return yield new Promise(i => n.a(this, void 0, void 0, function* () {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                        table: e,
                        key: t
                    }], e => {
                        const t = e.data[0];
                        i(t)
                    })
                }));
                {
                    const i = yield this.database.get(e, t);
                    return v.applyDbResultFilter(e, t, i)
                }
            })
        }

        getAll(e) {
            return n.a(this, void 0, void 0, function* () {
                if (this.shouldUsePostmam()) return yield new Promise(t => n.a(this, void 0, void 0, function* () {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET_ALL, {table: e}, e => {
                        const i = e.data;
                        t(i)
                    })
                }));
                return yield this.database.getAll(e)
            })
        }

        put(e, t) {
            return n.a(this, void 0, void 0, function* () {
                yield new Promise((i, o) => n.a(this, void 0, void 0, function* () {
                    f.a.getWindowEnv() !== g.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && f.a.getTestEnv() === u.a.None ? OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                        table: e,
                        keypath: t
                    }], n => {
                        n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : o(`(Database) Attempted remote IndexedDB put(${e}, ${t}), but did not get success response.`)
                    }) : (yield this.database.put(e, t), i())
                })), this.emitter.emit(v.EVENTS.SET, t)
            })
        }

        remove(e, t) {
            return f.a.getWindowEnv() !== g.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && f.a.getTestEnv() === u.a.None ? new Promise((i, n) => {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{
                    table: e,
                    keypath: t
                }], o => {
                    o.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : n(`(Database) Attempted remote IndexedDB remove(${e}, ${t}), but did not get success response.`)
                })
            }) : this.database.remove(e, t)
        }

        getAppConfig() {
            return n.a(this, void 0, void 0, function* () {
                const e = {}, t = yield this.get("Ids", "appId");
                return e.appId = t, e.subdomain = yield this.get("Options", "subdomain"), e.vapidPublicKey = yield this.get("Options", "vapidPublicKey"), e.emailAuthRequired = yield this.get("Options", "emailAuthRequired"), e
            })
        }

        getExternalUserId() {
            return n.a(this, void 0, void 0, function* () {
                return yield this.get("Ids", "externalUserId")
            })
        }

        setExternalUserId(e) {
            return n.a(this, void 0, void 0, function* () {
                const t = b.b.getValueOrDefault(e, "");
                "" === t ? yield this.remove("Ids", "externalUserId") : yield this.put("Ids", {
                    type: "externalUserId",
                    id: t
                })
            })
        }

        setAppConfig(e) {
            return n.a(this, void 0, void 0, function* () {
                e.appId && (yield this.put("Ids", {
                    type: "appId",
                    id: e.appId
                })), e.subdomain && (yield this.put("Options", {
                    key: "subdomain",
                    value: e.subdomain
                })), !0 === e.httpUseOneSignalCom ? yield this.put("Options", {
                    key: "httpUseOneSignalCom",
                    value: !0
                }) : !1 === e.httpUseOneSignalCom && (yield this.put("Options", {
                    key: "httpUseOneSignalCom",
                    value: !1
                })), !0 === e.emailAuthRequired ? yield this.put("Options", {
                    key: "emailAuthRequired",
                    value: !0
                }) : !1 === e.emailAuthRequired && (yield this.put("Options", {
                    key: "emailAuthRequired",
                    value: !1
                })), e.vapidPublicKey && (yield this.put("Options", {key: "vapidPublicKey", value: e.vapidPublicKey}))
            })
        }

        getAppState() {
            return n.a(this, void 0, void 0, function* () {
                const e = new r;
                return e.defaultNotificationUrl = yield this.get("Options", "defaultUrl"), e.defaultNotificationTitle = yield this.get("Options", "defaultTitle"), e.lastKnownPushEnabled = yield this.get("Options", "isPushEnabled"), e.clickedNotifications = yield this.get("NotificationOpened"), e
            })
        }

        setAppState(e) {
            return n.a(this, void 0, void 0, function* () {
                if (e.defaultNotificationUrl && (yield this.put("Options", {
                    key: "defaultUrl",
                    value: e.defaultNotificationUrl
                })), (e.defaultNotificationTitle || "" === e.defaultNotificationTitle) && (yield this.put("Options", {
                    key: "defaultTitle",
                    value: e.defaultNotificationTitle
                })), null != e.lastKnownPushEnabled && (yield this.put("Options", {
                    key: "isPushEnabled",
                    value: e.lastKnownPushEnabled
                })), e.clickedNotifications) {
                    const t = Object.keys(e.clickedNotifications);
                    for (let i of t) {
                        const t = e.clickedNotifications[i];
                        t ? yield this.put("NotificationOpened", {
                            url: i,
                            data: t.data,
                            timestamp: t.timestamp
                        }) : null === t && (yield this.remove("NotificationOpened", i))
                    }
                }
            })
        }

        getServiceWorkerState() {
            return n.a(this, void 0, void 0, function* () {
                const e = new a;
                return e.workerVersion = yield this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION"), e.updaterWorkerVersion = yield this.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION"), e
            })
        }

        setServiceWorkerState(e) {
            return n.a(this, void 0, void 0, function* () {
                e.workerVersion && (yield this.put("Ids", {
                    type: "WORKER1_ONE_SIGNAL_SW_VERSION",
                    id: e.workerVersion
                })), e.updaterWorkerVersion && (yield this.put("Ids", {
                    type: "WORKER2_ONE_SIGNAL_SW_VERSION",
                    id: e.updaterWorkerVersion
                }))
            })
        }

        getSubscription() {
            return n.a(this, void 0, void 0, function* () {
                const e = new d.a;
                e.deviceId = yield this.get("Ids", "userId"), e.subscriptionToken = yield this.get("Ids", "registrationId");
                const t = yield this.get("Options", "optedOut"), i = yield this.get("Options", "subscription"),
                    n = yield this.get("Options", "subscriptionCreatedAt"),
                    o = yield this.get("Options", "subscriptionExpirationTime");
                return e.optedOut = null != t ? t : null != i && !i, e.createdAt = n, e.expirationTime = o, e
            })
        }

        setDeviceId(e) {
            return n.a(this, void 0, void 0, function* () {
                yield this.put("Ids", {type: "userId", id: e})
            })
        }

        setSubscription(e) {
            return n.a(this, void 0, void 0, function* () {
                e.deviceId && (yield this.setDeviceId(e.deviceId)), void 0 !== e.subscriptionToken && (yield this.put("Ids", {
                    type: "registrationId",
                    id: e.subscriptionToken
                })), null != e.optedOut && (yield this.put("Options", {
                    key: "optedOut",
                    value: e.optedOut
                })), null != e.createdAt && (yield this.put("Options", {
                    key: "subscriptionCreatedAt",
                    value: e.createdAt
                })), null != e.expirationTime ? yield this.put("Options", {
                    key: "subscriptionExpirationTime",
                    value: e.expirationTime
                }) : yield this.remove("Options", "subscriptionExpirationTime")
            })
        }

        getEmailProfile() {
            return n.a(this, void 0, void 0, function* () {
                const e = yield this.get("Ids", "emailProfile");
                return e ? p.a.deserialize(e) : new p.a
            })
        }

        setEmailProfile(e) {
            return n.a(this, void 0, void 0, function* () {
                e && (yield this.put("Ids", {type: "emailProfile", id: e.serialize()}))
            })
        }

        setProvideUserConsent(e) {
            return n.a(this, void 0, void 0, function* () {
                yield this.put("Options", {key: "userConsent", value: e})
            })
        }

        getProvideUserConsent() {
            return n.a(this, void 0, void 0, function* () {
                return yield this.get("Options", "userConsent")
            })
        }

        getSession(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield this.get("Sessions", e)
            })
        }

        setSession(e) {
            return n.a(this, void 0, void 0, function* () {
                yield this.put("Sessions", e)
            })
        }

        removeSession(e) {
            return n.a(this, void 0, void 0, function* () {
                yield this.remove("Sessions", e)
            })
        }

        getLastNotificationClicked(e) {
            return n.a(this, void 0, void 0, function* () {
                let t = [];
                try {
                    t = yield this.getAll("NotificationClicked")
                } catch (e) {
                    S.a.error("Database.getNotificationClickedByUrl", e)
                }
                return t.find(t => t.appId === e) || null
            })
        }

        getNotificationClickedByUrl(e, t) {
            return n.a(this, void 0, void 0, function* () {
                let i = [];
                try {
                    i = yield this.getAll("NotificationClicked")
                } catch (e) {
                    S.a.error("Database.getNotificationClickedByUrl", e)
                }
                return i.find(i => i.appId === t && new URL(e).origin === new URL(i.url).origin) || null
            })
        }

        getNotificationClickedById(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield this.get("NotificationClicked", e)
            })
        }

        getNotificationReceivedById(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield this.get("NotificationReceived", e)
            })
        }

        removeNotificationClickedById(e) {
            return n.a(this, void 0, void 0, function* () {
                yield this.remove("NotificationClicked", e)
            })
        }

        removeAllNotificationClicked() {
            return n.a(this, void 0, void 0, function* () {
                yield this.remove("NotificationClicked")
            })
        }

        static rebuild() {
            return n.a(this, void 0, void 0, function* () {
                return Promise.all([v.singletonInstance.remove("Ids"), v.singletonInstance.remove("NotificationOpened"), v.singletonInstance.remove("Options"), v.singletonInstance.remove("NotificationReceived"), v.singletonInstance.remove("NotificationClicked")])
            })
        }

        static on(...e) {
            return n.a(this, void 0, void 0, function* () {
                return v.singletonInstance.emitter.on.apply(v.singletonInstance.emitter, e)
            })
        }

        static getCurrentSession() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getSession(h.a)
            })
        }

        static upsertSession(e) {
            return n.a(this, void 0, void 0, function* () {
                yield v.singletonInstance.setSession(e)
            })
        }

        static cleanupCurrentSession() {
            return n.a(this, void 0, void 0, function* () {
                yield v.singletonInstance.removeSession(h.a)
            })
        }

        static setEmailProfile(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.setEmailProfile(e)
            })
        }

        static getEmailProfile() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getEmailProfile()
            })
        }

        static setSubscription(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.setSubscription(e)
            })
        }

        static getSubscription() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getSubscription()
            })
        }

        static setProvideUserConsent(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.setProvideUserConsent(e)
            })
        }

        static getProvideUserConsent() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getProvideUserConsent()
            })
        }

        static setServiceWorkerState(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.setServiceWorkerState(e)
            })
        }

        static getServiceWorkerState() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getServiceWorkerState()
            })
        }

        static setAppState(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.setAppState(e)
            })
        }

        static getAppState() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getAppState()
            })
        }

        static setAppConfig(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.setAppConfig(e)
            })
        }

        static getAppConfig() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getAppConfig()
            })
        }

        static getExternalUserId() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getExternalUserId()
            })
        }

        static getLastNotificationClicked(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getLastNotificationClicked(e)
            })
        }

        static removeNotificationClickedById(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.removeNotificationClickedById(e)
            })
        }

        static removeAllNotificationClicked() {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.removeAllNotificationClicked()
            })
        }

        static getNotificationClickedByUrl(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getNotificationClickedByUrl(e, t)
            })
        }

        static getNotificationClickedById(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getNotificationClickedById(e)
            })
        }

        static getNotificationReceivedById(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getNotificationReceivedById(e)
            })
        }

        static setExternalUserId(e) {
            return n.a(this, void 0, void 0, function* () {
                yield v.singletonInstance.setExternalUserId(e)
            })
        }

        static setDeviceId(e) {
            return n.a(this, void 0, void 0, function* () {
                yield v.singletonInstance.setDeviceId(e)
            })
        }

        static remove(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.remove(e, t)
            })
        }

        static put(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.put(e, t)
            })
        }

        static get(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.get(e, t)
            })
        }

        static getAll(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield v.singletonInstance.getAll(e)
            })
        }
    }

    v.EVENTS = c
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return m
    });
    var n = i(0), o = i(15), s = i(30), r = i(6), a = i(10), c = i(17), l = i(14), d = i(11), u = i(9);
    const g = 4e3, p = 3001, h = 18080, f = ["outcomes", "on_focus"];

    class m {
        static getBuildEnv() {
            return o.a.Production
        }

        static getApiEnv() {
            return o.a.Production
        }

        static getIntegration(e) {
            return n.a(this, void 0, void 0, function* () {
                if (d.a.isSafari()) return c.a.Secure;
                const t = window === window.top, i = "https:" === window.location.protocol;
                if (void 0 === e) {
                    if ("undefined" == typeof OneSignal || !OneSignal.context || !OneSignal.context.appConfig) throw new a.a("usingProxyOrigin", a.b.Empty);
                    e = !!OneSignal.context.appConfig.subdomain
                }
                if (t) return i ? e ? c.a.SecureProxy : c.a.Secure : !u.b.isLocalhostAllowedAsSecureOrigin() || "localhost" !== location.hostname && "127.0.0.1" !== location.hostname ? c.a.InsecureProxy : c.a.Secure;
                if (i) {
                    return (yield m.isFrameContextInsecure()) ? c.a.InsecureProxy : e ? c.a.SecureProxy : c.a.Secure
                }
                return c.a.InsecureProxy
            })
        }

        static isFrameContextInsecure() {
            return n.a(this, void 0, void 0, function* () {
                if (window === window.top || !("serviceWorker" in navigator) || void 0 === navigator.serviceWorker.getRegistration) return !1;
                return !(yield l.b.getRegistration())
            })
        }

        static isInsecureOrigin() {
            return "http:" === window.location.protocol
        }

        static getOrigin() {
            return d.a.isBrowser() ? window.location.origin : "undefined" != typeof self && "undefined" != typeof ServiceWorkerGlobalScope ? self.registration.scope : "Unknown"
        }

        static getWindowEnv() {
            return "undefined" == typeof window ? "undefined" != typeof self && "undefined" != typeof ServiceWorkerGlobalScope ? r.a.ServiceWorker : r.a.Unknown : window === window.top ? -1 !== location.href.indexOf("initOneSignal") || "/subscribe" === location.pathname && "" === location.search && (location.hostname.endsWith(".onesignal.com") || location.hostname.endsWith(".os.tc") || -1 !== location.hostname.indexOf(".localhost") && m.getBuildEnv() === o.a.Development) ? r.a.OneSignalSubscriptionPopup : r.a.Host : "/webPushIframe" === location.pathname ? r.a.OneSignalProxyFrame : "/webPushModal" === location.pathname ? r.a.OneSignalSubscriptionModal : r.a.CustomIframe
        }

        static getTestEnv() {
            return s.a.None
        }

        static getBuildEnvPrefix(e = m.getBuildEnv()) {
            switch (e) {
                case o.a.Development:
                    return "Dev-";
                case o.a.Staging:
                    return "Staging-";
                case o.a.Production:
                    return "";
                default:
                    throw new a.a("buildEnv", a.b.EnumOutOfRange)
            }
        }

        static getOneSignalApiUrl(e = m.getApiEnv(), t) {
            switch (e) {
                case o.a.Development:
                    return m.isTurbineEndpoint(t) ? new URL(`https://onesignal.com:${h}/api/v1`) : new URL(`https://onesignal.com:${p}/api/v1`);
                case o.a.Staging:
                case o.a.Production:
                    return new URL("https://onesignal.com/api/v1");
                default:
                    throw new a.a("buildEnv", a.b.EnumOutOfRange)
            }
        }

        static getOneSignalResourceUrlPath(e = m.getBuildEnv()) {
            let t;
            const i = g;
            switch (e) {
                case o.a.Development:
                    t = `http://localhost:${i}`;
                    break;
                case o.a.Staging:
                    t = "https://localhost";
                    break;
                case o.a.Production:
                    t = "https://onesignal.com";
                    break;
                default:
                    throw new a.a("buildEnv", a.b.EnumOutOfRange)
            }
            return new URL(`${t}/sdks`)
        }

        static getOneSignalCssFileName(e = m.getBuildEnv()) {
            switch (e) {
                case o.a.Development:
                    return "Dev-OneSignalSDKStyles.css";
                case o.a.Staging:
                    return "Staging-OneSignalSDKStyles.css";
                case o.a.Production:
                    return "OneSignalSDKStyles.css";
                default:
                    throw new a.a("buildEnv", a.b.EnumOutOfRange)
            }
        }

        static isTurbineEndpoint(e) {
            return !!e && f.some(t => e.indexOf(t) > -1)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0), o = i(12);

    class s extends o.a {
        constructor(e = "The asynchronous operation has timed out.") {
            super(e), this.message = e, Object.setPrototypeOf(this, s.prototype)
        }
    }

    var r = i(23);
    i.d(t, "a", function () {
        return a
    });

    class a {
        static contains(e, t) {
            return !!e && -1 !== e.indexOf(t)
        }

        static getConsoleStyle(e) {
            return "code" == e ? 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;' : "bold" == e ? "font-weight: 600;color: rgb(51, 51, 51);" : "alert" == e ? "font-weight: 600;color: red;" : "event" == e ? "color: green;" : "postmessage" == e ? "color: orange;" : "serviceworkermessage" == e ? "color: purple;" : ""
        }

        static trimUndefined(e) {
            for (var t in e) e.hasOwnProperty(t) && void 0 === e[t] && delete e[t];
            return e
        }

        static capitalize(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        static isNullOrUndefined(e) {
            return void 0 === e || null === e
        }

        static valueOrDefault(e, t) {
            return void 0 === e || null === e ? t : e
        }

        static stringify(e) {
            return JSON.stringify(e, (e, t) => "function" == typeof t ? "[Function]" : t, 4)
        }

        static encodeHashAsUriComponent(e) {
            let t = "";
            const i = Object.keys(e);
            for (var n of i) {
                const i = e[n];
                t += `${encodeURIComponent(n)}=${encodeURIComponent(i)}`
            }
            return t
        }

        static timeoutPromise(e, t) {
            const i = new Promise((e, i) => {
                setTimeout(() => {
                    i(new s)
                }, t)
            });
            return Promise.race([e, i])
        }

        static getValueOrDefault(e, t) {
            return void 0 !== e && null !== e ? e : t
        }

        static padStart(e, t, i) {
            let n = e;
            for (; n.length < t;) n = i + n;
            return n
        }

        static parseVersionString(e) {
            const t = e.toString().split("."), i = a.padStart(t[0], 2, "0");
            let n;
            return n = t[1] ? a.padStart(t[1], 2, "0") : "00", Number(`${i}.${n}`)
        }

        static lastParts(e, t, i) {
            const n = e.split(t), o = Math.max(n.length - i, 0);
            return n.slice(o).join(t)
        }

        static isVersionAtLeast(e, t) {
            return this.parseVersionString(e) >= t
        }

        static enforceAppId(e) {
            if (!e) throw new Error("App id cannot be empty")
        }

        static enforcePlayerId(e) {
            if (!e) throw new Error("Player id cannot be empty")
        }

        static enforceAppIdAndPlayerId(e, t, i) {
            return n.a(this, void 0, void 0, function* () {
                a.enforceAppId(e), a.enforcePlayerId(t);
                try {
                    return yield i()
                } catch (e) {
                    throw e && Array.isArray(e.errors) && e.errors.length > 0 && a.contains(e.errors[0], "app_id not found") ? new r.a(r.b.MissingAppId) : e
                }
            })
        }

        static sortArrayOfObjects(e, t, i = !1, n = !0) {
            const o = n ? e : e.slice();
            return o.sort((e, n) => {
                const o = t(e), s = t(n);
                return o > s ? i ? -1 : 1 : o < s ? i ? 1 : -1 : 0
            }), o
        }
    }

    t.b = a
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
        return n
    }), function (e) {
        e.ServiceWorker = "ServiceWorker", e.Host = "Host", e.OneSignalSubscriptionPopup = "Popup", e.OneSignalSubscriptionModal = "Modal", e.OneSignalProxyFrame = "ProxyFrame", e.CustomIframe = "CustomFrame", e.Unknown = "Unknown"
    }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return g
    });
    var n = i(0), o = i(11), s = i(4), r = i(6), a = i(1), c = i(5);
    const l = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "animatedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet", "testEvent"],
        d = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "notificationClick", "permissionPromptDisplay", "testWouldDisplay", "testInitOptionDisabled", "popupWindowTimeout"],
        u = {
            notificationPermissionChange: "onesignal.prompt.native.permissionchanged",
            subscriptionChange: "onesignal.subscription.changed",
            customPromptClick: "onesignal.prompt.custom.clicked"
        };

    class g {
        static trigger(e, t, i = null) {
            return n.a(this, void 0, void 0, function* () {
                if (!c.b.contains(l, e)) {
                    let n = t, o = c.b.capitalize(s.a.getWindowEnv().toString());
                    i && (o = `${o} ⬸ ${c.b.capitalize(i)}`), n || !1 === n ? a.a.debug(`(${o}) » %c${e}:`, c.b.getConsoleStyle("event"), n) : a.a.debug(`(${o}) » %c${e}`, c.b.getConsoleStyle("event"))
                }
                if (o.a.isBrowser()) {
                    if (e === OneSignal.EVENTS.SDK_INITIALIZED) {
                        if (OneSignal.initialized) return;
                        OneSignal.initialized = !0
                    }
                    yield OneSignal.emitter.emit(e, t)
                }
                if (u.hasOwnProperty(e)) {
                    let i = u[e];
                    g._triggerLegacy(i, t)
                }
                if (o.a.isBrowser() && (s.a.getWindowEnv() === r.a.OneSignalSubscriptionPopup || s.a.getWindowEnv() === r.a.OneSignalProxyFrame)) {
                    opener || parent ? c.b.contains(d, e) && (s.a.getWindowEnv() === r.a.OneSignalSubscriptionPopup ? OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                        eventName: e,
                        eventData: t
                    }) : OneSignal.proxyFrame.retriggerRemoteEvent(e, t)) : a.a.error(`Could not send event '${e}' back to host page because no creator (opener or parent) found!`)
                }
            })
        }

        static _triggerLegacy(e, t) {
            const i = new CustomEvent(e, {bubbles: !0, cancelable: !0, detail: t});
            window.dispatchEvent(i)
        }
    }
}, function (e, t, i) {
    var n;
    n = function () {
        var e = !0;

        function t(t) {
            function i(e) {
                var i = t.match(e);
                return i && i.length > 1 && i[1] || ""
            }

            var n, o, s, r = i(/(ipod|iphone|ipad)/i).toLowerCase(), a = !/like android/i.test(t) && /android/i.test(t),
                c = /nexus\s*[0-6]\s*/i.test(t), l = !c && /nexus\s*[0-9]+/i.test(t), d = /CrOS/.test(t),
                u = /silk/i.test(t), g = /sailfish/i.test(t), p = /tizen/i.test(t), h = /(web|hpw)os/i.test(t),
                f = /windows phone/i.test(t), m = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
                b = !r && !u && /macintosh/i.test(t), S = !a && !g && !p && !h && /linux/i.test(t),
                v = i(/edge\/(\d+(\.\d+)?)/i), O = i(/version\/(\d+(\.\d+)?)/i),
                y = /tablet/i.test(t) && !/tablet pc/i.test(t), w = !y && /[^-]mobi/i.test(t), E = /xbox/i.test(t);
            /opera/i.test(t) ? n = {
                name: "Opera",
                opera: e,
                version: O || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr\/|opios/i.test(t) ? n = {
                name: "Opera",
                opera: e,
                version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O
            } : /SamsungBrowser/i.test(t) ? n = {
                name: "Samsung Internet for Android",
                samsungBrowser: e,
                version: O || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /coast/i.test(t) ? n = {
                name: "Opera Coast",
                coast: e,
                version: O || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /yabrowser/i.test(t) ? n = {
                name: "Yandex Browser",
                yandexbrowser: e,
                version: O || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(t) ? n = {
                name: "UC Browser",
                ucbrowser: e,
                version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(t) ? n = {
                name: "Maxthon",
                maxthon: e,
                version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(t) ? n = {
                name: "Epiphany",
                epiphany: e,
                version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(t) ? n = {
                name: "Puffin",
                puffin: e,
                version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(t) ? n = {
                name: "Sleipnir",
                sleipnir: e,
                version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(t) ? n = {
                name: "K-Meleon",
                kMeleon: e,
                version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : f ? (n = {
                name: "Windows Phone",
                windowsphone: e
            }, v ? (n.msedge = e, n.version = v) : (n.msie = e, n.version = i(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
                name: "Internet Explorer",
                msie: e,
                version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : d ? n = {
                name: "Chrome",
                chromeos: e,
                chromeBook: e,
                chrome: e,
                version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /chrome.+? edge/i.test(t) ? n = {
                name: "Microsoft Edge",
                msedge: e,
                version: v
            } : /vivaldi/i.test(t) ? n = {
                name: "Vivaldi",
                vivaldi: e,
                version: i(/vivaldi\/(\d+(\.\d+)?)/i) || O
            } : g ? n = {
                name: "Sailfish",
                sailfish: e,
                version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(t) ? n = {
                name: "SeaMonkey",
                seamonkey: e,
                version: i(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(t) ? (n = {
                name: "Firefox",
                firefox: e,
                version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e)) : u ? n = {
                name: "Amazon Silk",
                silk: e,
                version: i(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(t) ? n = {
                name: "PhantomJS",
                phantom: e,
                version: i(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(t) ? n = {
                name: "SlimerJS",
                slimer: e,
                version: i(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
                name: "BlackBerry",
                blackberry: e,
                version: O || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : h ? (n = {
                name: "WebOS",
                webos: e,
                version: O || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            }, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
                name: "Bada",
                bada: e,
                version: i(/dolfin\/(\d+(\.\d+)?)/i)
            } : p ? n = {
                name: "Tizen",
                tizen: e,
                version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O
            } : /qupzilla/i.test(t) ? n = {
                name: "QupZilla",
                qupzilla: e,
                version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O
            } : /chromium/i.test(t) ? n = {
                name: "Chromium",
                chromium: e,
                version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O
            } : /chrome|crios|crmo/i.test(t) ? n = {
                name: "Chrome",
                chrome: e,
                version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : a ? n = {name: "Android", version: O} : /safari|applewebkit/i.test(t) ? (n = {
                name: "Safari",
                safari: e
            }, O && (n.version = O)) : r ? (n = {name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"}, O && (n.version = O)) : n = /googlebot/i.test(t) ? {
                name: "Googlebot",
                googlebot: e,
                version: i(/googlebot\/(\d+(\.\d+))/i) || O
            } : {
                name: i(/^(.*)\/(.*) /),
                version: (o = /^(.*)\/(.*) /, s = t.match(o), s && s.length > 1 && s[2] || "")
            }, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && O && (n.version = O)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || n.msedge || !a && !n.silk ? n.windowsphone || n.msedge || !r ? b ? n.mac = e : E ? n.xbox = e : m ? n.windows = e : S && (n.linux = e) : (n[r] = e, n.ios = e) : n.android = e;
            var P = "";
            n.windows ? P = function (e) {
                switch (e) {
                    case"NT":
                        return "NT";
                    case"XP":
                        return "XP";
                    case"NT 5.0":
                        return "2000";
                    case"NT 5.1":
                        return "XP";
                    case"NT 5.2":
                        return "2003";
                    case"NT 6.0":
                        return "Vista";
                    case"NT 6.1":
                        return "7";
                    case"NT 6.2":
                        return "8";
                    case"NT 6.3":
                        return "8.1";
                    case"NT 10.0":
                        return "10";
                    default:
                        return
                }
            }(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? P = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? P = (P = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? P = (P = i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? P = i(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? P = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? P = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? P = i(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (P = i(/tizen[\/\s](\d+(\.\d+)*)/i)), P && (n.osversion = P);
            var I = !n.windows && P.split(".")[0];
            return y || l || "ipad" == r || a && (3 == I || I >= 4 && !w) || n.silk ? n.tablet = e : (w || "iphone" == r || "ipod" == r || a || c || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
        }

        var i = t("undefined" != typeof navigator && navigator.userAgent || "");

        function n(e) {
            return e.split(".").length
        }

        function o(e, t) {
            var i, n = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (i = 0; i < e.length; i++) n.push(t(e[i]));
            return n
        }

        function s(e) {
            for (var t = Math.max(n(e[0]), n(e[1])), i = o(e, function (e) {
                var i = t - n(e);
                return o((e += new Array(i + 1).join(".0")).split("."), function (e) {
                    return new Array(20 - e.length).join("0") + e
                }).reverse()
            }); --t >= 0;) {
                if (i[0][t] > i[1][t]) return 1;
                if (i[0][t] !== i[1][t]) return -1;
                if (0 === t) return 0
            }
        }

        function r(e, n, o) {
            var r = i;
            "string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (r = t(o));
            var a = "" + r.version;
            for (var c in e) if (e.hasOwnProperty(c) && r[c]) {
                if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
                return s([a, e[c]]) < 0
            }
            return n
        }

        return i.test = function (e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if ("string" == typeof n && n in i) return !0
            }
            return !1
        }, i.isUnsupportedBrowser = r, i.compareVersions = s, i.check = function (e, t, i) {
            return !r(e, t, i)
        }, i._detect = t, i
    }, void 0 !== e && e.exports ? e.exports = n() : i(42)("bowser", n)
}, function (e, t, i) {
    "use strict";
    (function (e) {
        i.d(t, "a", function () {
            return d
        });
        var n = i(8), o = i.n(n), s = i(4), r = i(11), a = i(6), c = i(1), l = i(5);

        class d {
            static getBaseUrl() {
                return location.origin
            }

            static isLocalhostAllowedAsSecureOrigin() {
                return OneSignal.config && OneSignal.config.userConfig && !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin
            }

            static isUsingSubscriptionWorkaround() {
                const e = s.a.getWindowEnv();
                if (!OneSignal.config) throw new Error(`(${e.toString()}) isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.`);
                if (o.a.safari) return !1;
                const t = this.isLocalhostAllowedAsSecureOrigin();
                return d.internalIsUsingSubscriptionWorkaround(OneSignal.config.subdomain, t)
            }

            static internalIsUsingSubscriptionWorkaround(e, t) {
                if (o.a.safari) return !1;
                if (!0 === t && ("localhost" === location.hostname || "127.0.0.1" === location.hostname)) return !1;
                const i = s.a.getWindowEnv();
                return !(i !== a.a.Host && i !== a.a.CustomIframe || !e && "http:" !== location.protocol)
            }

            static redetectBrowserUserAgent() {
                return "" === o.a.name && "" === o.a.version ? o.a._detect(navigator.userAgent) : o.a
            }

            static isValidUuid(e) {
                return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e)
            }

            static getRandomUuid() {
                let t = "";
                const i = "undefined" == typeof window ? e.crypto : window.crypto || window.msCrypto;
                return t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, i ? function (e) {
                    var t = i.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                } : function (e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                })
            }

            static logMethodCall(e, ...t) {
                return c.a.debug(`Called %c${e}(${t.map(l.a.stringify).join(", ")})`, l.a.getConsoleStyle("code"), ".")
            }

            static isHttps() {
                return d.isSafari() ? "https:" === window.location.protocol : !d.isUsingSubscriptionWorkaround()
            }

            static isSafari() {
                return r.a.isBrowser() && void 0 !== window.safari
            }
        }

        t.b = d
    }).call(this, i(41))
}, function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
        return n
    }), i.d(t, "a", function () {
        return InvalidArgumentError
    });
    var n, o = i(12);
    !function (e) {
        e[e.Empty = 0] = "Empty", e[e.Malformed = 1] = "Malformed", e[e.EnumOutOfRange = 2] = "EnumOutOfRange"
    }(n || (n = {}));

    class InvalidArgumentError extends o.a {
        constructor(e, t) {
            switch (t) {
                case n.Empty:
                    super(`Supply a non-empty value to '${e}'.`);
                    break;
                case n.Malformed:
                    super(`The value for '${e}' was malformed.`);
                    break;
                case n.EnumOutOfRange:
                    super(`The value for '${e}' was out of range of the expected input enum.`)
            }
            this.argument = e, this.reason = n[t], Object.setPrototypeOf(this, InvalidArgumentError.prototype)
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return a
    });
    var n = i(4), o = i(6), s = i(8), r = i.n(s);

    class a {
        static isBrowser() {
            return "undefined" != typeof window
        }

        static isSafari() {
            return a.isBrowser() && r.a.safari
        }

        static version() {
            return Number(151e3)
        }

        static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
            return ["tw", "hant"]
        }

        static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
            return ["cn", "hans"]
        }

        static getLanguage() {
            let e = navigator.language;
            if (e) {
                let t = (e = e.toLowerCase()).split("-");
                if ("zh" == t[0]) {
                    for (let e of a.TRADITIONAL_CHINESE_LANGUAGE_TAG) if (-1 !== t.indexOf(e)) return "zh-Hant";
                    for (let e of a.SIMPLIFIED_CHINESE_LANGUAGE_TAG) if (-1 !== t.indexOf(e)) return "zh-Hans";
                    return "zh-Hant"
                }
                return t[0].substring(0, 2)
            }
            return "en"
        }

        static supportsServiceWorkers() {
            switch (n.a.getWindowEnv()) {
                case o.a.ServiceWorker:
                    return !0;
                default:
                    return "undefined" != typeof navigator && "serviceWorker" in navigator
            }
        }

        static getSdkStylesVersionHash() {
            return "undefined" == typeof __SRC_STYLESHEETS_MD5_HASH__ ? "1" : __SRC_STYLESHEETS_MD5_HASH__
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });

    class n extends Error {
        constructor(e = "") {
            super(e), Object.defineProperty(this, "message", {
                configurable: !0,
                enumerable: !1,
                value: e,
                writable: !0
            }), Object.defineProperty(this, "name", {
                configurable: !0,
                enumerable: !1,
                value: this.constructor.name,
                writable: !0
            }), Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : (Object.defineProperty(this, "stack", {
                configurable: !0,
                enumerable: !1,
                value: new Error(e).stack,
                writable: !0
            }), Object.setPrototypeOf(this, n.prototype))
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
        return n
    }), i.d(t, "a", function () {
        return InvalidStateError
    });
    var n, o = i(12), s = i(37);
    !function (e) {
        e[e.MissingAppId = 0] = "MissingAppId", e[e.RedundantPermissionMessage = 1] = "RedundantPermissionMessage", e[e.PushPermissionAlreadyGranted = 2] = "PushPermissionAlreadyGranted", e[e.UnsupportedEnvironment = 3] = "UnsupportedEnvironment", e[e.MissingDomElement = 4] = "MissingDomElement", e[e.ServiceWorkerNotActivated = 5] = "ServiceWorkerNotActivated", e[e.NoProxyFrame = 6] = "NoProxyFrame"
    }(n || (n = {}));

    class InvalidStateError extends o.a {
        constructor(e, t) {
            switch (e) {
                case n.MissingAppId:
                    super("Missing required app ID.");
                    break;
                case n.RedundantPermissionMessage:
                    let i = "";
                    t && t.permissionPromptType && (i = `(${s.a[t.permissionPromptType]})`), super(`Another permission message ${i} is being displayed.`);
                    break;
                case n.PushPermissionAlreadyGranted:
                    super("Push permission has already been granted.");
                    break;
                case n.UnsupportedEnvironment:
                    super("The current environment does not support this operation.");
                    break;
                case n.ServiceWorkerNotActivated:
                    super("The service worker must be activated first.");
                    break;
                case n.NoProxyFrame:
                    super("No proxy frame.")
            }
            this.description = n[e], this.reason = e, Object.setPrototypeOf(this, InvalidStateError.prototype)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0), o = i(32);

    class s {
        static debug(...e) {
            self.shouldLog && console.debug(...e)
        }

        static trace(...e) {
            self.shouldLog && console.trace(...e)
        }

        static info(...e) {
            self.shouldLog && console.info(...e)
        }

        static warn(...e) {
            self.shouldLog && console.warn(...e)
        }

        static error(...e) {
            self.shouldLog && console.error(...e)
        }
    }

    var r = i(16), InvalidStateError = i(13), a = i(9), c = i(3), l = i(28), d = i(22), u = i(34), g = i(33);
    const p = () => {
        s.debug("Do nothing")
    };

    function h(e, t) {
        const i = 1e3 * t;
        let o, r = void 0;
        const a = new Promise((t, a) => {
            let c = !1;
            o = self.setTimeout(() => n.a(this, void 0, void 0, function* () {
                c = !0;
                try {
                    yield e(), t()
                } catch (e) {
                    s.error("Failed to execute callback", e), a()
                }
            }), i), r = (() => {
                s.debug("Cancel called"), self.clearTimeout(o), c || t()
            })
        });
        return r ? {promise: a, cancel: r} : (s.warn("clearTimeoutHandle was not assigned."), {promise: a, cancel: p})
    }

    i.d(t, "b", function () {
        return f
    }), i.d(t, "a", function () {
        return m
    });

    class f {
        static getRegistration() {
            return n.a(this, void 0, void 0, function* () {
                return yield u.a.getRegistration()
            })
        }

        static getServiceWorkerHref(e, t) {
            let i = "";
            if (e === m.WorkerA) i = t.workerBPath.getFullPath(); else if (e === m.WorkerB || e === m.ThirdParty || e === m.None) i = t.workerAPath.getFullPath(); else if (e === m.Bypassed) throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment);
            return new URL(i, a.a.getBaseUrl()).href
        }

        static upsertSession(e, t, i, o, a, l) {
            return n.a(this, void 0, void 0, function* () {
                if (!o) return void s.error("No deviceId provided for new session.");
                if (!i.app_id) return void s.error("No appId provided for new session.");
                const n = yield c.a.getCurrentSession();
                if (!n) {
                    const e = i.app_id, t = Object(r.d)({deviceId: o, appId: e, deviceType: i.device_type}),
                        n = yield c.a.getLastNotificationClicked(e);
                    return n && (t.notificationId = n.notificationId), yield c.a.upsertSession(t), void (yield f.sendOnSessionCallIfNecessary(a, i, o, t))
                }
                if (n.status === r.c.Active) return void s.debug("Session already active", n);
                if (!n.lastDeactivatedTimestamp) return void s.debug("Session is in invalid state", n);
                const d = (new Date).getTime();
                if (f.timeInSecondsBetweenTimestamps(d, n.lastDeactivatedTimestamp) <= e) return n.status = r.c.Active, n.lastActivatedTimestamp = d, n.lastDeactivatedTimestamp = null, void (yield c.a.upsertSession(n));
                yield f.finalizeSession(n, t, l);
                const u = Object(r.d)({deviceId: o, appId: i.app_id, deviceType: i.device_type});
                yield c.a.upsertSession(u), yield f.sendOnSessionCallIfNecessary(a, i, o, u)
            })
        }

        static deactivateSession(e, t, i) {
            return n.a(this, void 0, void 0, function* () {
                const n = yield c.a.getCurrentSession();
                if (!n) return void s.debug("No active session found. Cannot deactivate.");
                if (n.status === r.c.Inactive) return h(() => f.finalizeSession(n, t, i), e);
                if (n.status !== r.c.Active) return void s.warn(`Session in invalid state ${n.status}. Cannot deactivate.`);
                const o = (new Date).getTime(), a = f.timeInSecondsBetweenTimestamps(o, n.lastActivatedTimestamp);
                n.lastDeactivatedTimestamp = o, n.accumulatedDuration += a, n.status = r.c.Inactive;
                const l = h(() => f.finalizeSession(n, t, i), e);
                return yield c.a.upsertSession(n), l
            })
        }

        static sendOnSessionCallIfNecessary(e, t, i, s) {
            return n.a(this, void 0, void 0, function* () {
                if (e === r.b.PlayerCreate) return;
                if (!t.identifier) {
                    const e = yield self.registration.pushManager.getSubscription();
                    if (e) {
                        const i = d.a.setFromW3cSubscription(e), n = new l.a(i).serialize();
                        t.identifier = n.identifier
                    }
                }
                const n = yield o.a.updateUserSession(i, t);
                n !== i && (s.deviceId = n, yield Promise.all([c.a.setDeviceId(n), c.a.upsertSession(s)]))
            })
        }

        static finalizeSession(e, t, i) {
            return n.a(this, void 0, void 0, function* () {
                if (s.debug("Finalize session", `started: ${new Date(e.startTimestamp)}`, `duration: ${e.accumulatedDuration}s`), t) {
                    s.debug(`send on_focus reporting session duration -> ${e.accumulatedDuration}s`);
                    const t = yield g.a.getAttribution(i);
                    s.debug("send on_focus with attribution", t), yield o.a.sendSessionDuration(e.appId, e.deviceId, e.accumulatedDuration, e.deviceType, t)
                }
                yield Promise.all([c.a.cleanupCurrentSession(), c.a.removeAllNotificationClicked()]), s.debug("Finalize session finished", `started: ${new Date(e.startTimestamp)}`)
            })
        }

        static timeInSecondsBetweenTimestamps(e, t) {
            return e <= t ? 0 : Math.floor((e - t) / 1e3)
        }
    }

    var m, b;
    (b = m || (m = {})).WorkerA = "Worker A (Main)", b.WorkerB = "Worker B (Updater)", b.ThirdParty = "3rd Party", b.Installing = "Installing", b.None = "None", b.Bypassed = "Bypassed", b.Indeterminate = "Indeterminate"
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
        return n
    }), function (e) {
        e.Development = "Development", e.Staging = "Staging", e.Production = "Production"
    }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    var n, o;
    i.d(t, "c", function () {
        return n
    }), i.d(t, "b", function () {
        return o
    }), i.d(t, "a", function () {
        return s
    }), i.d(t, "d", function () {
        return r
    }), function (e) {
        e.Active = "active", e.Inactive = "inactive", e.Expired = "expired"
    }(n || (n = {})), function (e) {
        e[e.PlayerCreate = 1] = "PlayerCreate", e[e.PlayerOnSession = 2] = "PlayerOnSession", e[e.VisibilityVisible = 3] = "VisibilityVisible", e[e.VisibilityHidden = 4] = "VisibilityHidden", e[e.BeforeUnload = 5] = "BeforeUnload", e[e.PageRefresh = 6] = "PageRefresh", e[e.Focus = 7] = "Focus", e[e.Blur = 8] = "Blur"
    }(o || (o = {}));
    const s = "oneSignalSession";

    function r(e) {
        const t = (new Date).getTime(), i = e && e.sessionKey || s, o = e && e.notificationId || null;
        return {
            sessionKey: i,
            appId: e.appId,
            deviceId: e.deviceId,
            deviceType: e.deviceType,
            startTimestamp: t,
            accumulatedDuration: 0,
            notificationId: o,
            status: n.Active,
            lastDeactivatedTimestamp: null,
            lastActivatedTimestamp: t
        }
    }
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
        return n
    }), function (e) {
        e.Secure = "Secure", e.SecureProxy = "Secure Proxy", e.InsecureProxy = "Insecure Proxy"
    }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
        return n
    }), function (e) {
        e[e.Default = 0] = "Default", e[e.Subscribed = 1] = "Subscribed", e[e.MutedByApi = -2] = "MutedByApi", e[e.NotSubscribed = -10] = "NotSubscribed", e[e.TemporaryWebRecord = -20] = "TemporaryWebRecord", e[e.PermissionRevoked = -21] = "PermissionRevoked", e[e.PushSubscriptionRevoked = -22] = "PushSubscriptionRevoked", e[e.ServiceWorkerStatus403 = -23] = "ServiceWorkerStatus403", e[e.ServiceWorkerStatus404 = -24] = "ServiceWorkerStatus404"
    }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return a
    });
    var n = i(11), o = i(4), s = i(5), r = i(23);

    class a {
        static get(e, t, i) {
            return a.call("GET", e, t, i)
        }

        static post(e, t, i) {
            return a.call("POST", e, t, i)
        }

        static put(e, t, i) {
            return a.call("PUT", e, t, i)
        }

        static delete(e, t, i) {
            return a.call("DELETE", e, t, i)
        }

        static call(e, t, i, s) {
            if ("GET" === e) {
                if (t.indexOf("players") > -1 && -1 === t.indexOf("app_id=")) return console.error("Calls to player api are not permitted without app_id"), Promise.reject(new r.a(r.b.MissingAppId))
            } else if (t.indexOf("players") > -1 && (!i || !i.app_id)) return console.error("Calls to player api are not permitted without app_id"), Promise.reject(new r.a(r.b.MissingAppId));
            let c = new Headers;
            if (c.append("Origin", o.a.getOrigin()), c.append("SDK-Version", `onesignal/web/${n.a.version()}`), c.append("Content-Type", "application/json;charset=UTF-8"), s) for (let e of Object.keys(s)) c.append(e, s[e]);
            const l = {method: e || "NO_METHOD_SPECIFIED", headers: c, cache: "no-cache"};
            let d;
            return i && (l.body = JSON.stringify(i)), fetch(o.a.getOneSignalApiUrl(void 0, t).toString() + "/" + t, l).then(e => (d = e.status, e.json())).then(e => {
                if (d >= 200 && d < 300) return e;
                if ("no-user-id-error" !== a.identifyError(e)) return Promise.reject(e)
            })
        }

        static identifyError(e) {
            if (!e || !e.errors) return "no-error";
            let t = e.errors;
            return s.a.contains(t, "No user with this id found") || s.a.contains(t, "Could not find app_id for given player id.") ? "no-user-id-error" : "unknown-error"
        }
    }

    t.b = a
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return o
    });
    var n = i(12);

    class o extends n.a {
        constructor() {
            super("This code is not implemented yet."), Object.setPrototypeOf(this, o.prototype)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
        return n
    }), function (e) {
        e[e.Direct = 1] = "Direct", e[e.Indirect = 2] = "Indirect", e[e.Unattributed = 3] = "Unattributed", e[e.NotSupported = 4] = "NotSupported"
    }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });

    class n {
        isNewSubscription() {
            return this.existingW3cPushSubscription ? !!this.existingW3cPushSubscription.w3cEndpoint != !!this.w3cEndpoint || (!(!this.existingW3cPushSubscription.w3cEndpoint || !this.w3cEndpoint || this.existingW3cPushSubscription.w3cEndpoint.toString() === this.w3cEndpoint.toString()) || (this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh || this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth)) : !this.existingSafariDeviceToken || this.existingSafariDeviceToken !== this.safariDeviceToken
        }

        static setFromW3cSubscription(e) {
            const t = new n;
            if (e && (t.w3cEndpoint = new URL(e.endpoint), e.getKey)) {
                let i = null;
                try {
                    i = e.getKey("p256dh")
                } catch (e) {
                }
                let n = null;
                try {
                    n = e.getKey("auth")
                } catch (e) {
                }
                if (i) {
                    let e = btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
                    t.w3cP256dh = e
                }
                if (n) {
                    let e = btoa(String.fromCharCode.apply(null, new Uint8Array(n)));
                    t.w3cAuth = e
                }
            }
            return t
        }

        setFromSafariSubscription(e) {
            this.safariDeviceToken = e
        }

        serialize() {
            return {
                w3cEndpoint: this.w3cEndpoint ? this.w3cEndpoint.toString() : null,
                w3cP256dh: this.w3cP256dh,
                w3cAuth: this.w3cAuth,
                safariDeviceToken: this.safariDeviceToken,
                existingPushSubscription: this.existingW3cPushSubscription ? this.existingW3cPushSubscription.serialize() : null,
                existingSafariDeviceToken: this.existingSafariDeviceToken
            }
        }

        static deserialize(e) {
            const t = new n;
            if (!e) return t;
            try {
                t.w3cEndpoint = new URL(e.w3cEndpoint)
            } catch (e) {
            }
            return t.w3cP256dh = e.w3cP256dh, t.w3cAuth = e.w3cAuth, t.existingW3cPushSubscription = void 0, e.existingW3cPushSubscription ? t.existingW3cPushSubscription = n.deserialize(e.existingW3cPushSubscription) : e.existingPushSubscription && (t.existingW3cPushSubscription = n.deserialize(e.existingPushSubscription)), t.safariDeviceToken = e.safariDeviceToken, t.existingSafariDeviceToken = e.existingSafariDeviceToken, t
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
        return n
    }), i.d(t, "a", function () {
        return s
    });
    var n, o = i(12);
    !function (e) {
        e[e.MissingAppId = 0] = "MissingAppId"
    }(n || (n = {}));

    class s extends o.a {
        constructor(e) {
            switch (e) {
                case n.MissingAppId:
                    super("The API call is missing an app ID.")
            }
            Object.setPrototypeOf(this, s.prototype)
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return r
    });
    var n = i(0), o = i(3), s = i(7);

    class r {
        static triggerNotificationPermissionChanged(e = !1) {
            return n.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.privateGetNotificationPermission();
                (t !== (yield o.a.get("Options", "notificationPermission")) || e) && (yield o.a.put("Options", {
                    key: "notificationPermission",
                    value: t
                }), s.a.trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {to: t}))
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return o
    });
    var n = i(0);

    class o {
        constructor() {
            this._events = {}
        }

        on(e, t) {
            return this._events[e] = this._events[e] || [], this._events[e].push(t), this
        }

        once(e, t) {
            const i = this;

            function n() {
                i.off(e, n), t.apply(this, arguments)
            }

            return n.listener = t, this.on(e, n), this
        }

        off(e, t) {
            const i = this._events[e];
            if (void 0 !== i) {
                for (let e = 0; e < i.length; e += 1) if (i[e] === t || i[e].listener === t) {
                    i.splice(e, 1);
                    break
                }
                0 === i.length && this.removeAllListeners(e)
            }
            return this
        }

        removeAllListeners(e) {
            try {
                e ? delete this._events[e] : this._events = {}
            } catch (e) {
            }
            return this
        }

        listeners(e) {
            try {
                return this._events[e]
            } catch (e) {
                return
            }
        }

        numberOfListeners(e) {
            const t = this.listeners(e);
            return t ? t.length : 0
        }

        emit(...e) {
            return n.a(this, void 0, void 0, function* () {
                const t = e.shift();
                let i = this._events[t];
                if (void 0 !== i) {
                    const t = (i = i.slice(0)).length;
                    for (let n = 0; n < t; n += 1) yield i[n].apply(this, e)
                }
                return this
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
        return n
    }), function (e) {
        e[e.ChromeLike = 5] = "ChromeLike", e[e.Safari = 7] = "Safari", e[e.Firefox = 8] = "Firefox", e[e.Edge = 12] = "Edge", e[e.Email = 11] = "Email"
    }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return l
    });
    var n = i(8), o = i.n(n), s = i(11), r = i(20), a = i(26), c = i(9);

    class l {
        constructor() {
            this.language = s.a.getLanguage(), this.timezone = -60 * (new Date).getTimezoneOffset();
            const e = parseInt(String(o.a.version), 10);
            this.browserVersion = isNaN(e) ? -1 : e, this.deviceModel = navigator.platform, this.sdkVersion = s.a.version().toString(), this.deliveryPlatform = this.getDeliveryPlatform()
        }

        isSafari() {
            return o.a.safari && void 0 !== window.safari && void 0 !== window.safari.pushNotification
        }

        getDeliveryPlatform() {
            const e = c.a.redetectBrowserUserAgent();
            return this.isSafari() ? a.a.Safari : e.firefox ? a.a.Firefox : e.msedge ? a.a.Edge : a.a.ChromeLike
        }

        serialize() {
            const e = {
                device_type: this.deliveryPlatform,
                language: this.language,
                timezone: this.timezone,
                device_os: this.browserVersion,
                device_model: this.deviceModel,
                sdk: this.sdkVersion,
                notification_types: this.subscriptionState
            };
            return this.appId && (e.app_id = this.appId), e
        }

        deserialize(e) {
            throw new r.a
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return c
    });
    var n = i(8), o = i.n(n), s = i(20), r = i(18), a = i(27);

    class c extends a.a {
        constructor(e) {
            super(), this.subscription = e
        }

        serialize() {
            const e = super.serialize();
            return this.subscription && (e.identifier = o.a.safari ? this.subscription.safariDeviceToken : this.subscription.w3cEndpoint ? this.subscription.w3cEndpoint.toString() : null, e.web_auth = this.subscription.w3cAuth, e.web_p256 = this.subscription.w3cP256dh), e
        }

        static createFromPushSubscription(e, t, i) {
            const n = new c(t);
            return n.appId = e, n.subscriptionState = t ? r.a.Subscribed : r.a.NotSubscribed, i && (n.subscriptionState = i), n
        }

        deserialize(e) {
            throw new s.a
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });

    class n {
        constructor(e, t, i) {
            this.emailId = e, this.emailAddress = t, this.emailAuthHash = i
        }

        serialize() {
            return {emailAddress: this.emailAddress, emailAuthHash: this.emailAuthHash, emailId: this.emailId}
        }

        static deserialize(e) {
            return new n(e.emailId, e.emailAddress, e.emailAuthHash)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
        return n
    }), function (e) {
        e.None = "None", e.UnitTesting = "Unit Testing"
    }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return o
    });
    var n = i(11);

    class o {
        static decodeHtmlEntities(e) {
            return n.a.isBrowser() && (o.decodeTextArea || (o.decodeTextArea = document.createElement("textarea"))), o.decodeTextArea ? (o.decodeTextArea.innerHTML = e, o.decodeTextArea.value) : e
        }
    }

    o.decodeTextArea = null
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return l
    });
    var n = i(0), o = i(19), s = i(18), r = i(1), a = i(5), c = i(21);

    class l {
        static downloadServerAppConfig(e) {
            return n.a(this, void 0, void 0, function* () {
                return a.a.enforceAppId(e), yield new Promise((t, i) => {
                    t(o.a.get(`sync/${e}/web`, null))
                })
            })
        }

        static getUserIdFromSubscriptionIdentifier(e, t, i) {
            return a.a.enforceAppId(e), o.a.post("players", {
                app_id: e,
                device_type: t,
                identifier: i,
                notification_types: s.a.TemporaryWebRecord
            }).then(e => e && e.id ? e.id : null).catch(e => (r.a.debug("Error getting user ID from subscription identifier:", e), null))
        }

        static updatePlayer(e, t, i) {
            return n.a(this, void 0, void 0, function* () {
                return yield a.a.enforceAppIdAndPlayerId(e, t, () => n.a(this, void 0, void 0, function* () {
                    yield o.a.put(`players/${t}`, Object.assign({app_id: e}, i))
                }))
            })
        }

        static updateUserSession(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield a.a.enforceAppIdAndPlayerId(t.app_id, e, () => n.a(this, void 0, void 0, function* () {
                    const i = yield o.a.post(`players/${e}/on_session`, t);
                    return i.id ? i.id : e
                }))
            })
        }

        static sendSessionDuration(e, t, i, s, r) {
            return n.a(this, void 0, void 0, function* () {
                a.a.enforceAppIdAndPlayerId(e, t, () => n.a(this, void 0, void 0, function* () {
                    const n = {app_id: e, type: 1, state: "ping", active_time: i, device_type: s};
                    switch (r.type) {
                        case c.a.Direct:
                            n.direct = !0, n.notification_ids = r.notificationIds;
                            break;
                        case c.a.Indirect:
                            n.direct = !1, n.notification_ids = r.notificationIds
                    }
                    yield o.a.post(`players/${t}/on_focus`, n)
                }))
            })
        }
    }

    t.b = l
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return c
    });
    var n = i(0), o = i(21), s = i(3), r = i(1), a = i(5);

    class c {
        static getAttribution(e) {
            return n.a(this, void 0, void 0, function* () {
                if (e.direct && e.direct.enabled) {
                    const e = yield s.a.getAll("NotificationClicked");
                    if (e.length > 0) return {type: o.a.Direct, notificationIds: [e[0].notificationId]}
                }
                if (e.indirect && e.indirect.enabled) {
                    const t = 60 * e.indirect.influencedTimePeriodMin * 1e3,
                        i = new Date((new Date).getTime() - t).getTime(), n = yield s.a.getAll("NotificationReceived");
                    if (r.a.debug(`Found total of ${n.length} received notifications`), n.length > 0) {
                        const t = e.indirect.influencedNotificationsLimit,
                            c = a.a.sortArrayOfObjects(n, e => e.timestamp, !0, !1),
                            l = c.filter(e => e.timestamp >= i).slice(0, t).map(e => e.notificationId);
                        r.a.debug(`Total of ${l.length} received notifications are within reporting window.`);
                        const d = c.filter(e => -1 === l.indexOf(e.notificationId)).map(e => e.notificationId);
                        if (d.forEach(e => s.a.remove("NotificationReceived", e)), r.a.debug(`${d.length} received notifications will be deleted.`), l.length > 0) return {
                            type: o.a.Indirect,
                            notificationIds: l
                        }
                    }
                }
                return e.unattributed && e.unattributed.enabled ? {
                    type: o.a.Unattributed,
                    notificationIds: []
                } : {type: o.a.NotSupported, notificationIds: []}
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return s
    });
    var n = i(0), o = i(1);

    class s {
        static getRegistration() {
            return n.a(this, void 0, void 0, function* () {
                try {
                    return yield navigator.serviceWorker.getRegistration(location.href)
                } catch (e) {
                    return o.a.warn("[Service Worker Status] Error Checking service worker registration", location.href, e), null
                }
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });

    class n {
        serialize() {
            return {
                deviceId: this.deviceId,
                subscriptionToken: this.subscriptionToken,
                optedOut: this.optedOut,
                createdAt: this.createdAt,
                expirationTime: this.expirationTime
            }
        }

        static deserialize(e) {
            const t = new n;
            return t.deviceId = e.deviceId, t.subscriptionToken = e.subscriptionToken, t.optedOut = e.optedOut, t.createdAt = e.createdAt, t.expirationTime = e.expirationTime, t
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return c
    });
    var n = i(0), o = i(25), s = i(1), r = i(5);
    const a = 2;

    class c {
        constructor(e) {
            this.databaseName = e, this.emitter = new o.a
        }

        open(e) {
            return new Promise(t => {
                let i = void 0;
                try {
                    i = indexedDB.open(e, a)
                } catch (e) {
                }
                if (!i) return null;
                i.onerror = this.onDatabaseOpenError, i.onblocked = this.onDatabaseOpenBlocked, i.onupgradeneeded = this.onDatabaseUpgradeNeeded, i.onsuccess = (() => {
                    this.database = i.result, this.database.onerror = this.onDatabaseError, this.database.onversionchange = this.onDatabaseVersionChange, t(this.database)
                })
            })
        }

        ensureDatabaseOpen() {
            return n.a(this, void 0, void 0, function* () {
                return this.openLock || (this.openLock = this.open(this.databaseName)), yield this.openLock
            })
        }

        onDatabaseOpenError(e) {
            e.preventDefault();
            const t = e.target.error;
            r.b.contains(t.message, "The operation failed for reasons unrelated to the database itself and not covered by any other error code") || r.b.contains(t.message, "A mutation operation was attempted on a database that did not allow mutations") ? s.a.warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6") : s.a.warn("OneSignal: Fatal error opening IndexedDb database:", t)
        }

        onDatabaseError(e) {
            s.a.debug("IndexedDb: Generic database error", e.target.errorCode)
        }

        onDatabaseOpenBlocked() {
            s.a.debug("IndexedDb: Blocked event")
        }

        onDatabaseVersionChange(e) {
            s.a.debug("IndexedDb: versionchange event")
        }

        onDatabaseUpgradeNeeded(e) {
            s.a.debug("IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event).");
            const t = e.target.result;
            e.oldVersion < 1 && (t.createObjectStore("Ids", {keyPath: "type"}), t.createObjectStore("NotificationOpened", {keyPath: "url"}), t.createObjectStore("Options", {keyPath: "key"})), e.oldVersion < 2 && (t.createObjectStore("Sessions", {keyPath: "sessionKey"}), t.createObjectStore("NotificationReceived", {keyPath: "notificationId"}), t.createObjectStore("NotificationClicked", {keyPath: "notificationId"})), "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0)
        }

        get(e, t) {
            return n.a(this, void 0, void 0, function* () {
                const i = yield this.ensureDatabaseOpen();
                return t ? yield new Promise((n, o) => {
                    const s = i.transaction(e).objectStore(e).get(t);
                    s.onsuccess = (() => {
                        n(s.result)
                    }), s.onerror = (() => {
                        o(s.error)
                    })
                }) : yield new Promise((t, n) => {
                    let o = {}, s = i.transaction(e).objectStore(e).openCursor();
                    s.onsuccess = (e => {
                        const i = e.target.result;
                        if (i) {
                            let e = i.key;
                            o[e] = i.value, i.continue()
                        } else t(o)
                    }), s.onerror = (() => {
                        n(s.error)
                    })
                })
            })
        }

        getAll(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield new Promise((t, i) => n.a(this, void 0, void 0, function* () {
                    let n = (yield this.ensureDatabaseOpen()).transaction(e).objectStore(e).openCursor();
                    const o = [];
                    n.onsuccess = (e => {
                        const i = e.target.result;
                        i ? (o.push(i.value), i.continue()) : t(o)
                    }), n.onerror = (() => {
                        i(n.error)
                    })
                }))
            })
        }

        put(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield this.ensureDatabaseOpen(), yield new Promise((i, n) => {
                    try {
                        let o = this.database.transaction([e], "readwrite").objectStore(e).put(t);
                        o.onsuccess = (() => {
                            i(t)
                        }), o.onerror = (e => {
                            s.a.error("Database PUT Transaction Error:", e), n(e)
                        })
                    } catch (e) {
                        s.a.error("Database PUT Error:", e), n(e)
                    }
                })
            })
        }

        remove(e, t) {
            return n.a(this, void 0, void 0, function* () {
                const i = yield this.ensureDatabaseOpen();
                return new Promise((n, o) => {
                    try {
                        const r = i.transaction([e], "readwrite").objectStore(e), a = t ? r.delete(t) : r.clear();
                        a.onsuccess = (() => {
                            n(t)
                        }), a.onerror = (e => {
                            s.a.error("Database REMOVE Transaction Error:", e), o(e)
                        })
                    } catch (e) {
                        s.a.error("Database REMOVE Error:", e), o(e)
                    }
                })
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
        return n
    }), function (e) {
        e[e.HttpsPermissionRequest = "HTTPS permission request"] = "HttpsPermissionRequest", e[e.FullscreenHttpPermissionMessage = "fullscreen HTTP permission message"] = "FullscreenHttpPermissionMessage", e[e.FullscreenHttpsPermissionMessage = "fullscreen HTTPS permission message"] = "FullscreenHttpsPermissionMessage", e[e.SlidedownPermissionMessage = "slidedown permission message"] = "SlidedownPermissionMessage", e[e.SubscriptionBell = "subscription bell"] = "SubscriptionBell"
    }(n || (n = {}))
}, function (e, t) {
    e.exports = function (e, t, o) {
        "function" == typeof t && (o = t, t = {});
        t || (t = {});
        var s, r, a = t.prefix || "__jp", c = t.name || a + i++, l = t.param || "callback",
            d = null != t.timeout ? t.timeout : 6e4, u = encodeURIComponent,
            g = document.getElementsByTagName("script")[0] || document.head;
        d && (r = setTimeout(function () {
            p(), o && o(new Error("Timeout"))
        }, d));

        function p() {
            s.parentNode && s.parentNode.removeChild(s), window[c] = n, r && clearTimeout(r)
        }

        return window[c] = function (e) {
            p(), o && o(null, e)
        }, e = (e += (~e.indexOf("?") ? "&" : "?") + l + "=" + u(c)).replace("?&", "?"), (s = document.createElement("script")).src = e, g.parentNode.insertBefore(s, g), function () {
            window[c] && p()
        }
    };
    var i = 0;

    function n() {
    }
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(1), o = i(2);

    class s {
        static doReplay(e) {
            e && (Array.isArray(e) ? s.processAsArray(e) : e.constructor && "OneSignalStubES6" === e.constructor.name ? s.processAsES6Stub(e) : n.a.error("window.OneSignal is an unexpected type! Should be an Array, OneSignalStubES6, or undefined."))
        }

        static processAsArray(e) {
            for (const t of e) try {
                OneSignal.push(t)
            } catch (e) {
                n.a.error(e)
            }
        }

        static processAsES6Stub(e) {
            e.SERVICE_WORKER_PATH && (OneSignal.SERVICE_WORKER_PATH = e.SERVICE_WORKER_PATH), e.SERVICE_WORKER_UPDATER_PATH && (OneSignal.SERVICE_WORKER_UPDATER_PATH = e.SERVICE_WORKER_UPDATER_PATH), e.currentLogLevel && OneSignal.log.setLevel(e.currentLogLevel), e.SERVICE_WORKER_PARAM && (OneSignal.SERVICE_WORKER_PARAM = e.SERVICE_WORKER_PARAM), e.preExistingArray && s.processAsArray(e.preExistingArray);
            for (const t of e.directFunctionCallsArray) {
                const e = OneSignal[t.functionName].apply(OneSignal, t.args);
                t.delayedPromise && e instanceof Promise && e.then(function (...e) {
                    t.delayedPromise && t.delayedPromise.resolve && t.delayedPromise.resolve.apply(null, e)
                }).catch(function (...e) {
                    t.delayedPromise && t.delayedPromise.reject && t.delayedPromise.reject.apply(null, e)
                })
            }
        }
    }

    "undefined" != typeof window && function () {
        if (Object(o.n)(), Object(o.l)() > 1) return n.a.warn("OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."), void n.a.debug("OneSignal: Exiting from SDK initialization to prevent double-initialization errors. " + `Occurred ${Object(o.l)()} times.`);
        const e = window.OneSignal;
        window.OneSignal = i(40).default, s.doReplay(e)
    }()
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n, o, s, r, a = i(0), c = i(8), l = i.n(c), d = i(11), InvalidArgumentError = i(10), InvalidStateError = i(13),
        u = i(12);
    (o = n || (n = {}))[o.Unknown = 0] = "Unknown", o[o.NoDeviceId = 1] = "NoDeviceId", o[o.NoEmailSet = 2] = "NoEmailSet", o[o.OptedOut = 3] = "OptedOut";

    class g extends u.a {
        constructor(e) {
            switch (e) {
                case n.Unknown || n.NoDeviceId:
                    super("This operation can only be performed after the user is subscribed.");
                    break;
                case n.NoEmailSet:
                    super("No email is currently set.");
                    break;
                case n.OptedOut:
                    super("The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.")
            }
            this.reason = n[e], Object.setPrototypeOf(this, g.prototype)
        }
    }

    (r = s || (s = {}))[r.InvalidAppId = 0] = "InvalidAppId", r[r.AppNotConfiguredForWebPush = 1] = "AppNotConfiguredForWebPush", r[r.MissingSubdomain = 2] = "MissingSubdomain", r[r.WrongSiteUrl = 3] = "WrongSiteUrl", r[r.MultipleInitialization = 4] = "MultipleInitialization", r[r.MissingSafariWebId = 5] = "MissingSafariWebId", r[r.Unknown = 6] = "Unknown";

    class p extends u.a {
        constructor(e, t) {
            switch (e) {
                case s.InvalidAppId:
                    super("OneSignal: This app ID does not match any existing app. Double check your app ID.");
                    break;
                case s.AppNotConfiguredForWebPush:
                    super("OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://goo.gl/01h7fZ).");
                    break;
                case s.MissingSubdomain:
                    super("OneSignal: Non-HTTPS pages require a subdomain of OneSignal to be chosen on your dashboard. See step 1.4 on our setup guide (https://goo.gl/xip6JB).");
                    break;
                case s.WrongSiteUrl:
                    t && t.siteUrl ? super(`OneSignal: This web push config can only be used on ${new URL(t.siteUrl).origin}. Your current origin is ${location.origin}.`) : super("OneSignal: This web push config can not be used on the current site.");
                    break;
                case s.MultipleInitialization:
                    super("OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.");
                    break;
                case s.MissingSafariWebId:
                    super("OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.");
                    break;
                case s.Unknown:
                    super("OneSignal: An unknown initialization error occurred.")
            }
            this.reason = s[e], Object.setPrototypeOf(this, p.prototype)
        }
    }

    var h = i(7);

    class f {
        static put(e, t) {
            return void 0 === f.store[e] && (f.store[e] = [null, null]), f.store[e].push(t), f.store[e].length == f.LIMIT + 1 && f.store[e].shift(), f.store[e]
        }

        static get(e) {
            return void 0 === f.store[e] && (f.store[e] = [null, null]), f.store[e]
        }

        static getFirst(e) {
            return f.get(e)[0]
        }

        static getLast(e) {
            return f.get(e)[1]
        }

        static remove(e) {
            delete f.store[e]
        }

        static isEmpty(e) {
            let t = f.get(e);
            return null === t[0] && null === t[1]
        }
    }

    f.store = {}, f.LIMIT = 2;
    var m = i(23), b = i(20), S = i(26), v = i(27);

    class O extends v.a {
        constructor(e, t, i) {
            super(), this.email = e, this.emailAuthHash = t, this.pushDeviceRecordId = i, this.deliveryPlatform = S.a.Email
        }

        serialize() {
            const e = super.serialize();
            return this.email && (e.identifier = this.email), this.emailAuthHash && (e.email_auth_hash = this.emailAuthHash), this.pushDeviceRecordId && (e.device_player_id = this.pushDeviceRecordId), e
        }

        deserialize(e) {
            throw new b.a
        }
    }

    var y = i(19), w = i(5), E = i(1);

    class P {
        static getPlayer(e, t) {
            return w.b.enforceAppId(e), w.b.enforcePlayerId(t), y.b.get(`players/${t}?app_id=${e}`)
        }

        static updatePlayer(e, t, i) {
            return w.b.enforceAppId(e), w.b.enforcePlayerId(t), y.b.put(`players/${t}`, Object.assign({app_id: e}, i))
        }

        static sendNotification(e, t, i, n, o, s, r, a) {
            var c = {app_id: e, contents: n, include_player_ids: t, isAnyWeb: !0, data: r, web_buttons: a};
            return i && (c.headings = i), o && (c.url = o), s && (c.chrome_web_icon = s, c.firefox_icon = s), w.b.trimUndefined(c), y.b.post("notifications", c)
        }

        static createUser(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.serialize();
                w.b.enforceAppId(t.app_id);
                const i = yield y.b.post("players", t);
                return i && i.success ? i.id : null
            })
        }

        static createEmailRecord(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                w.b.enforceAppId(e.appId);
                const n = new O(t.emailAddress, t.emailAuthHash, i);
                n.appId = e.appId;
                const o = yield y.b.post("players", n.serialize());
                return o && o.success ? o.id : null
            })
        }

        static updateEmailRecord(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                w.b.enforceAppId(e.appId), w.b.enforcePlayerId(t.emailId);
                const n = new O(t.emailAddress, t.emailAuthHash, i);
                n.appId = e.appId;
                const o = yield y.b.put(`players/${t.emailId}`, n.serialize());
                return o && o.success ? o.id : null
            })
        }

        static logoutEmail(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                w.b.enforceAppId(e.appId), w.b.enforcePlayerId(i);
                const n = yield y.b.post(`players/${i}/email_logout`, {
                    app_id: e.appId,
                    parent_player_id: t.emailId,
                    email_auth_hash: t.emailAuthHash ? t.emailAuthHash : void 0
                });
                return !(!n || !n.success)
            })
        }

        static updateUserSession(e, t) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    const i = t.serialize();
                    w.b.enforceAppId(i.app_id), w.b.enforcePlayerId(e);
                    const n = yield y.b.post(`players/${e}/on_session`, i);
                    return n.id ? n.id : e
                } catch (e) {
                    throw e && Array.isArray(e.errors) && e.errors.length > 0 && w.b.contains(e.errors[0], "app_id not found") ? new m.a(m.b.MissingAppId) : e
                }
            })
        }

        static sendOutcome(e) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    yield y.b.post("outcomes/measure", e)
                } catch (e) {
                    E.a.error("sendOutcome", e)
                }
            })
        }
    }

    var I = i(3), T = i(2);

    class C {
        static initialize(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!e || !e.enabled) return;
                if (E.a.info("Inititalize CustomLink"), 0 !== (yield OneSignal.context.dynamicResourceLoader.loadSdkStylesheet())) return void E.a.debug("Not initializing custom link button because styles failed to load.");
                document.querySelectorAll(C.containerSelector).forEach(t => {
                    C.isInitialized(t) || C.injectMarkup(t, e)
                });
                const t = yield OneSignal.privateIsPushNotificationsEnabled(), i = yield OneSignal.internalIsOptedOut();
                document.querySelectorAll(C.subscribeSelector).forEach(n => C.initSubscribeElement(n, e, t, i)), document.querySelectorAll(C.explanationSelector).forEach(i => C.initExplanationElement(i, e, t))
            })
        }

        static injectMarkup(e, t) {
            if (t.text) {
                if (e.innerHTML = "", t.text.explanation) {
                    const t = document.createElement("p");
                    Object(T.a)(t, C.explanationClass), e.appendChild(t)
                }
                if (t.text.subscribe) {
                    const t = document.createElement("button");
                    Object(T.a)(t, C.subscribeClass), e.appendChild(t)
                }
                C.markAsInitialized(e)
            } else E.a.error("CustomLink: required property 'text' is missing in the config")
        }

        static initSubscribeElement(e, t, i, n) {
            t.text && t.text.subscribe && (i || (e.textContent = t.text.subscribe)), t.text && t.text.unsubscribe && i && (e.textContent = t.text.unsubscribe), C.setResetClass(e), C.setStateClass(e, i), C.setStyleClass(e, t), C.setSizeClass(e, t), C.setCustomColors(e, t), !0 !== t.unsubscribeEnabled && Object(T.a)(e, "hide"), e.setAttribute(C.subscriptionStateAttribute, i.toString()), e.setAttribute(C.optedOutAttribute, n.toString()), C.isInitialized(e) || (e.addEventListener("click", () => {
                E.a.info("CustomLink: subscribe clicked"), C.handleClick(e)
            }), C.markAsInitialized(e))
        }

        static handleClick(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = "true" === e.getAttribute(C.subscriptionStateAttribute),
                    i = "true" === e.getAttribute(C.optedOutAttribute);
                if (t) {
                    (yield OneSignal.privateIsPushNotificationsEnabled()) && (yield OneSignal.setSubscription(!1))
                } else if (i) yield OneSignal.setSubscription(!0); else {
                    const e = {autoAccept: !OneSignal.environmentInfo.requiresUserInteraction};
                    yield OneSignal.registerForPushNotifications(e)
                }
            })
        }

        static initExplanationElement(e, t, i) {
            t.text && t.text.explanation && (e.textContent = t.text.explanation), C.setResetClass(e), C.setStateClass(e, i), C.setSizeClass(e, t), !0 !== t.unsubscribeEnabled && Object(T.a)(e, "hide")
        }

        static setCustomColors(e, t) {
            "button" === t.style && t.color && t.color.button && t.color.text ? (e.style.backgroundColor = t.color.button, e.style.color = t.color.text) : "link" === t.style && t.color && t.color.text && (e.style.color = t.color.text)
        }

        static setStateClass(e, t) {
            const i = t ? "state-unsubscribed" : "state-subscribed", n = t ? "state-subscribed" : "state-unsubscribed";
            Object(T.m)(e, i) && Object(T.t)(e, i), Object(T.m)(e, n) || Object(T.a)(e, n)
        }

        static setStyleClass(e, t) {
            if (!t || !t.style) return;
            const i = t.style;
            Object(T.m)(e, i) || Object(T.a)(e, i)
        }

        static setSizeClass(e, t) {
            if (!t || !t.size) return;
            const i = t.size;
            Object(T.m)(e, i) || Object(T.a)(e, i)
        }

        static setResetClass(e) {
            const t = C.resetClass;
            Object(T.m)(e, t) || Object(T.a)(e, t)
        }

        static markAsInitialized(e) {
            e.setAttribute(C.initializedAttribute, "true")
        }

        static isInitialized(e) {
            return "true" === e.getAttribute(C.initializedAttribute)
        }
    }

    C.initializedAttribute = "data-cl-initialized", C.subscriptionStateAttribute = "data-cl-state", C.optedOutAttribute = "data-cl-optedout", C.containerClass = "onesignal-customlink-container", C.containerSelector = `.${C.containerClass}`, C.subscribeClass = "onesignal-customlink-subscribe", C.subscribeSelector = `.${C.subscribeClass}`, C.explanationClass = "onesignal-customlink-explanation", C.explanationSelector = `.${C.explanationClass}`, C.resetClass = "onesignal-reset";
    var A = i(9), N = i(31);

    class M {
        static onNotificationPermissionChange() {
            M.checkAndTriggerSubscriptionChanged()
        }

        static onInternalSubscriptionSet(e) {
            return a.a(this, void 0, void 0, function* () {
                f.put("subscription.optedOut", e)
            })
        }

        static checkAndTriggerSubscriptionChanged() {
            return a.a(this, void 0, void 0, function* () {
                A.a.logMethodCall("checkAndTriggerSubscriptionChanged");
                const e = yield OneSignal.context.subscriptionManager.getSubscriptionState(),
                    t = yield OneSignal.privateIsPushNotificationsEnabled(),
                    i = yield I.a.getAppState(), {lastKnownPushEnabled: n} = i;
                (null === n || t !== n) && (E.a.info("The user's subscription state changed from " + `${null === n ? "(not stored)" : n} ⟶ ${e.subscribed}`), i.lastKnownPushEnabled = t, yield I.a.setAppState(i), M.triggerSubscriptionChanged(t))
            })
        }

        static _onSubscriptionChanged(e) {
            return a.a(this, void 0, void 0, function* () {
                M.onSubscriptionChanged_showWelcomeNotification(e), M.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate(), M.onSubscriptionChanged_updateCustomLink()
            })
        }

        static onSubscriptionChanged_showWelcomeNotification(e) {
            return a.a(this, void 0, void 0, function* () {
                if (OneSignal.__doNotShowWelcomeNotification) E.a.debug("Not showing welcome notification because user has previously subscribed."); else if (!0 === e) {
                    const {deviceId: e} = yield I.a.getSubscription(), {appId: t} = yield I.a.getAppConfig();
                    let i = OneSignal.config.userConfig.welcomeNotification, n = void 0 !== i && !0 === i.disable,
                        o = void 0 !== i && void 0 !== i.title && null !== i.title ? i.title : "",
                        s = void 0 !== i && void 0 !== i.message && null !== i.message && i.message.length > 0 ? i.message : "Thanks for subscribing!",
                        r = new URL(location.href).origin + "?_osp=do_not_open",
                        a = i && i.url && i.url.length > 0 ? i.url : r;
                    o = N.a.decodeHtmlEntities(o), s = N.a.decodeHtmlEntities(s), n || (E.a.debug("Sending welcome notification."), P.sendNotification(t, [e], {en: o}, {en: s}, a, null, {__isOneSignalWelcomeNotification: !0}, void 0), h.a.trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                        title: o,
                        message: s,
                        url: a
                    }))
                }
            })
        }

        static onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate() {
            return a.a(this, void 0, void 0, function* () {
                if (!OneSignal.config.userConfig.notifyButton) return;
                const e = OneSignal.config.userConfig.notifyButton.displayPredicate;
                if (e && "function" == typeof e && OneSignal.notifyButton) {
                    !1 !== (yield e()) ? (E.a.debug("Showing notify button because display predicate returned true."), OneSignal.notifyButton.launcher.show()) : (E.a.debug("Hiding notify button because display predicate returned false."), OneSignal.notifyButton.launcher.hide())
                }
            })
        }

        static onSubscriptionChanged_updateCustomLink() {
            return a.a(this, void 0, void 0, function* () {
                OneSignal.config.userConfig.promptOptions && (yield C.initialize(OneSignal.config.userConfig.promptOptions.customlink))
            })
        }

        static triggerSubscriptionChanged(e) {
            h.a.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e)
        }

        static fireStoredNotificationClicks(e = document.URL) {
            return a.a(this, void 0, void 0, function* () {
                function t(e) {
                    return a.a(this, void 0, void 0, function* () {
                        const t = yield I.a.getAppState();
                        t.clickedNotifications[e.url] = null, yield I.a.setAppState(t);
                        const {data: i, timestamp: n} = e;
                        if (n) {
                            if ((Date.now() - n) / 1e3 / 60 > 5) return
                        }
                        h.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, i)
                    })
                }

                const i = yield I.a.getAppState();
                if ("origin" === (yield I.a.get("Options", "notificationClickHandlerMatch"))) {
                    for (const e of Object.keys(i.clickedNotifications)) if (new URL(e).origin === location.origin) {
                        yield t(i.clickedNotifications[e])
                    }
                } else {
                    var n = i.clickedNotifications[e];
                    if (n) yield t(n); else if (!n && e.endsWith("/")) {
                        var o = e.substring(0, e.length - 1);
                        (n = i.clickedNotifications[o]) && (yield t(n))
                    }
                }
            })
        }
    }

    var k, _ = i(6), x = i(4);

    class R {
        static promiseStub() {
            return {then: R.promiseStub, catch: R.promiseStub}
        }

        static ensureBackwardsCompatibility(e) {
            R.environmentPolyfill(e), R.postmams(e), e.syncHashedEmail = R.promiseStub
        }

        static environmentPolyfill(e) {
            e.environment = {}, e.environment.getEnv = function () {
                return ""
            }, e.environment.isPopup = function () {
                return x.a.getWindowEnv() === _.a.OneSignalSubscriptionPopup
            }, e.environment.isIframe = function () {
                return x.a.getWindowEnv() === _.a.OneSignalProxyFrame
            }
        }

        static postmams(e) {
            const t = function () {
                this.messenger.message.apply(this.messenger, arguments)
            }, i = function () {
                this.messenger.postMessage.apply(this.messenger, arguments)
            };

            function n(e) {
                e.message = t, e.postMessage = i
            }

            e.proxyFrame && (e.iframePostmam = e.proxyFrame, n(e.iframePostmam)), e.subscriptionPopup && (e.popupPostmam = e.subscriptionPopup, n(e.popupPostmam)), e.subscriptionModal && (e.modalPostmam = e.subscriptionModal, n(e.modalPostmam))
        }
    }

    !function (e) {
        e.Default = "default", e.Granted = "granted", e.Denied = "denied"
    }(k || (k = {}));

    class D {
        static isLocalStorageSupported() {
            try {
                return "undefined" != typeof localStorage && (localStorage.getItem("test"), !0)
            } catch (e) {
                return !1
            }
        }

        static setItem(e, t, i) {
            if (!D.isLocalStorageSupported()) return;
            const n = void 0 !== i ? 60 * i * 1e3 : 0,
                o = {value: JSON.stringify(t), timestamp: void 0 !== i ? (new Date).getTime() + n : void 0};
            localStorage.setItem(e, JSON.stringify(o))
        }

        static getItem(e) {
            if (!D.isLocalStorageSupported()) return null;
            const t = localStorage.getItem(e);
            let i;
            try {
                i = JSON.parse(t)
            } catch (e) {
                return null
            }
            if (null === i) return null;
            if (i.timestamp && (new Date).getTime() >= i.timestamp) return localStorage.removeItem(e), null;
            let n = i.value;
            try {
                n = JSON.parse(i.value)
            } catch (e) {
                return n
            }
            return n
        }

        static removeItem(e) {
            if (!D.isLocalStorageSupported()) return null;
            localStorage.removeItem(e)
        }
    }

    var W, U, B = i(18), L = i(28), V = i(24);
    (U = W || (W = {}))[U.Blocked = 0] = "Blocked", U[U.Dismissed = 1] = "Dismissed", U[U.Default = 2] = "Default";

    class F extends u.a {
        constructor(e) {
            switch (e) {
                case W.Dismissed:
                    super("The user dismissed the permission prompt.");
                    break;
                case W.Blocked:
                    super("Notification permissions are blocked.");
                    break;
                case W.Default:
                    super("Notification permissions have not been granted yet.")
            }
            this.reason = e, Object.setPrototypeOf(this, F.prototype)
        }
    }

    var H = i(22);

    class j {
        static get STORED_PERMISSION_KEY() {
            return "storedNotificationPermission"
        }

        getNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield this.getReportedNotificationPermission(e);
                return (yield this.isPermissionEnvironmentAmbiguous(t)) ? yield this.getInterpretedAmbiguousPermission(t) : t
            })
        }

        getReportedNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                return l.a.safari ? j.getSafariNotificationPermission(e) : A.b.isUsingSubscriptionWorkaround() ? yield this.getOneSignalSubdomainNotificationPermission(e) : this.getW3cNotificationPermission()
            })
        }

        static getSafariNotificationPermission(e) {
            if (e) return window.safari.pushNotification.permission(e).permission;
            throw new InvalidArgumentError.a("safariWebId", InvalidArgumentError.b.Empty)
        }

        getW3cNotificationPermission() {
            return window.Notification.permission
        }

        getOneSignalSubdomainNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                return new Promise(t => {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, {safariWebId: e}, e => {
                        const i = e.data;
                        t(i)
                    })
                })
            })
        }

        isPermissionEnvironmentAmbiguous(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = A.b.redetectBrowserUserAgent();
                return !t.safari && !t.firefox && e === k.Denied && (this.isCurrentFrameContextCrossOrigin() || (yield x.a.isFrameContextInsecure()) || A.b.isUsingSubscriptionWorkaround() || x.a.isInsecureOrigin())
            })
        }

        isCurrentFrameContextCrossOrigin() {
            let e;
            try {
                e = window.top.location.origin
            } catch (e) {
                return !0
            }
            return window.top !== window && e !== window.location.origin
        }

        getInterpretedAmbiguousPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                switch (e) {
                    case k.Denied:
                        const t = this.getStoredPermission();
                        return t || k.Default;
                    default:
                        return e
                }
            })
        }

        getStoredPermission() {
            return K.getStoredPermission()
        }

        setStoredPermission(e) {
            K.setStoredPermission(e)
        }

        updateStoredPermission() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield this.getNotificationPermission();
                return this.setStoredPermission(e)
            })
        }
    }

    const $ = "isOptedOut", z = "isPushNotificationsEnabled", G = "os_pageViews";

    class K {
        static getIsOptedOut() {
            return "true" === localStorage.getItem($)
        }

        static getIsPushNotificationsEnabled() {
            return "true" === localStorage.getItem(z)
        }

        static setIsOptedOut(e) {
            localStorage.setItem($, e.toString())
        }

        static setIsPushNotificationsEnabled(e) {
            localStorage.setItem(z, e.toString())
        }

        static setStoredPermission(e) {
            localStorage.setItem(j.STORED_PERMISSION_KEY, e)
        }

        static getStoredPermission() {
            switch (localStorage.getItem(j.STORED_PERMISSION_KEY) || "default") {
                case"granted":
                    return k.Granted;
                case"denied":
                    return k.Denied;
                default:
                    return k.Default
            }
        }

        static setLocalPageViewCount(e) {
            localStorage.setItem(G, e.toString())
        }

        static getLocalPageViewCount() {
            return Number(localStorage.getItem(G))
        }
    }

    var q, Y = i(16), J = i(34);
    !function (e) {
        e.Safari = "safari", e.Firefox = "firefox", e.Chrome = "chrome", e.Opera = "opera", e.Edge = "edge", e.Other = "other"
    }(q || (q = {}));

    class Z {
        static registerForPush() {
            return a.a(this, void 0, void 0, function* () {
                const e = K.getIsPushNotificationsEnabled();
                return yield Z.internalRegisterForPush(e)
            })
        }

        static internalRegisterForPush(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = OneSignal.context;
                let i = null;
                if (e && !t.pageViewManager.isFirstPageView()) {
                    E.a.debug("Not registering for push because the user is subscribed and this is not the first page view."), E.a.debug("But we want to rekindle their session.");
                    const e = yield X.getDeviceId();
                    if (e) {
                        const t = yield X.createDeviceRecord(OneSignal.config.appId, !0);
                        yield OneSignal.context.sessionManager.upsertSession(e, t, Y.b.PageRefresh)
                    } else E.a.error("Should have been impossible to have push as enabled but no device id.");
                    return null
                }
                if ("undefined" != typeof OneSignal) {
                    if (OneSignal._isRegisteringForPush) return null;
                    OneSignal._isRegisteringForPush = !0
                }
                switch (x.a.getWindowEnv()) {
                    case _.a.Host:
                    case _.a.OneSignalSubscriptionModal:
                        try {
                            const e = yield t.subscriptionManager.subscribe(0);
                            i = yield t.subscriptionManager.registerSubscription(e), t.pageViewManager.incrementPageViewCount(), yield V.a.triggerNotificationPermissionChanged(), yield M.checkAndTriggerSubscriptionChanged()
                        } catch (e) {
                            E.a.info(e)
                        }
                        break;
                    case _.a.OneSignalSubscriptionPopup:
                        const e = opener || parent;
                        let n;
                        yield t.permissionManager.updateStoredPermission();
                        try {
                            n = yield t.subscriptionManager.subscribe(1), yield t.permissionManager.updateStoredPermission()
                        } catch (i) {
                            if (yield t.permissionManager.updateStoredPermission(), i instanceof F) switch (i.reason) {
                                case W.Blocked:
                                    yield t.permissionManager.updateStoredPermission(), OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                        permission: k.Denied,
                                        forceUpdatePermission: !1
                                    });
                                    break;
                                case W.Dismissed:
                                    OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                        permission: k.Default,
                                        forceUpdatePermission: !0
                                    })
                            }
                            if (e) return window.close(), null
                        }
                        OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, {rawPushSubscription: n.serialize()}, t => {
                            !0 === t.data.progress ? (E.a.debug("Got message from host page that remote reg. is in progress, closing popup."), e && window.close()) : E.a.debug("Got message from host page that remote reg. could not be finished.")
                        });
                        break;
                    default:
                        throw"undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1), new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                }
                return "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1), i
            })
        }

        static getRawPushSubscriptionForSafari(e) {
            const t = new H.a, {deviceToken: i} = window.safari.pushNotification.permission(e);
            return t.existingSafariDeviceToken = i, t
        }

        static getRawPushSubscriptionFromServiceWorkerRegistration() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield J.a.getRegistration();
                if (!e) return null;
                const t = yield e.pushManager.getSubscription();
                return t ? H.a.setFromW3cSubscription(t) : null
            })
        }

        static getRawPushSubscriptionWhenUsingSubscriptionWorkaround() {
            return a.a(this, void 0, void 0, function* () {
                return null
            })
        }

        static getRawPushSubscription(e, t) {
            return a.a(this, void 0, void 0, function* () {
                return e.browserType === q.Safari ? Z.getRawPushSubscriptionForSafari(t) : e.isUsingSubscriptionWorkaround ? Z.getRawPushSubscriptionWhenUsingSubscriptionWorkaround() : e.isBrowserAndSupportsServiceWorkers ? yield Z.getRawPushSubscriptionFromServiceWorkerRegistration() : null
            })
        }
    }

    class X {
        static getCurrentNotificationType() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId);
                if (e === k.Default) return B.a.Default;
                if (e === k.Denied) return A.a.isUsingSubscriptionWorkaround() ? B.a.Default : B.a.NotSubscribed;
                const t = yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
                if (e === k.Granted && t) {
                    return (yield OneSignal.privateIsPushNotificationsEnabled()) ? B.a.Subscribed : B.a.MutedByApi
                }
                return B.a.Default
            })
        }

        static getNotificationTypeFromOptIn(e) {
            return 1 == e || null == e ? B.a.Subscribed : B.a.MutedByApi
        }

        static wasHttpsNativePromptDismissed() {
            return "dismissed" === D.getItem("onesignal-notification-prompt")
        }

        static markHttpPopoverShown() {
            sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true")
        }

        static isHttpPromptAlreadyShown() {
            return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN")
        }

        static checkAndTriggerNotificationPermissionChanged() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield I.a.get("Options", "notificationPermission"),
                    t = yield OneSignal.getNotificationPermission();
                e !== t && (yield V.a.triggerNotificationPermissionChanged(), yield I.a.put("Options", {
                    key: "notificationPermission",
                    value: t
                }))
            })
        }

        static getNotificationIcons() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield X.getAppId();
                if (!e) throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
                var t = `${x.a.getOneSignalApiUrl().toString()}/apps/${e}/icon`;
                const i = yield(yield fetch(t)).json();
                if (i.errors) throw E.a.error(`API call %c${t}`, w.a.getConsoleStyle("code"), "failed with:", i.errors), new Error("Failed to get notification icons.");
                return i
            })
        }

        static getSlidedownPermissionMessageOptions(e) {
            const t = "We'd like to show you notifications for the latest news and updates.";
            return e ? e.slidedown ? {
                enabled: e.slidedown.enabled,
                autoPrompt: e.slidedown.autoPrompt,
                actionMessage: e.slidedown.actionMessage || t,
                acceptButtonText: e.slidedown.acceptButtonText || "Allow",
                cancelButtonText: e.slidedown.cancelButtonText || "No Thanks"
            } : {
                enabled: !1,
                autoPrompt: !1,
                actionMessage: e.actionMessage || t,
                acceptButtonText: e.acceptButtonText || "Allow",
                cancelButtonText: e.cancelButtonText || "No Thanks"
            } : {
                enabled: !1,
                autoPrompt: !1,
                actionMessage: t,
                acceptButtonText: "Allow",
                cancelButtonText: "No Thanks"
            }
        }

        static getFullscreenPermissionMessageOptions(e) {
            return e ? e.fullscreen ? {
                autoAcceptTitle: e.fullscreen.autoAcceptTitle,
                actionMessage: e.fullscreen.actionMessage,
                exampleNotificationTitleDesktop: e.fullscreen.title,
                exampleNotificationTitleMobile: e.fullscreen.title,
                exampleNotificationMessageDesktop: e.fullscreen.message,
                exampleNotificationMessageMobile: e.fullscreen.message,
                exampleNotificationCaption: e.fullscreen.caption,
                acceptButtonText: e.fullscreen.acceptButton,
                cancelButtonText: e.fullscreen.cancelButton
            } : e : null
        }

        static getPromptOptionsQueryString() {
            let e = "";
            if (X.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions)) {
                let t = X.getPromptOptionsPostHash();
                for (let i of Object.keys(t)) {
                    e += "&" + i + "=" + t[i]
                }
            }
            return e
        }

        static getPromptOptionsPostHash() {
            let e = X.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
            if (e) {
                var t = {
                    exampleNotificationTitleDesktop: "exampleNotificationTitle",
                    exampleNotificationMessageDesktop: "exampleNotificationMessage",
                    exampleNotificationTitleMobile: "exampleNotificationTitle",
                    exampleNotificationMessageMobile: "exampleNotificationMessage"
                };
                for (let i of Object.keys(t)) {
                    let n = t[i];
                    e[i] && (e[n] = e[i])
                }
                for (var i = ["autoAcceptTitle", "siteName", "autoAcceptTitle", "subscribeText", "showGraphic", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButtonText", "cancelButtonText", "timeout"], n = {}, o = 0; o < i.length; o++) {
                    var s = i[o], r = e[s], a = encodeURIComponent(r);
                    (r || !1 === r || "" === r) && (n[s] = a)
                }
            }
            return n
        }

        static triggerCustomPromptClicked(e) {
            h.a.trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, {result: e})
        }

        static getAppId() {
            return a.a(this, void 0, void 0, function* () {
                if (OneSignal.config.appId) return Promise.resolve(OneSignal.config.appId);
                return yield I.a.get("Ids", "appId")
            })
        }

        static createDeviceRecord(e, t = !1) {
            return a.a(this, void 0, void 0, function* () {
                let i;
                if (t) {
                    const e = yield Z.getRawPushSubscription(OneSignal.environmentInfo, OneSignal.config.safariWebId);
                    e && (i = e)
                }
                const n = new L.a(i);
                return n.appId = e, n.subscriptionState = yield X.getCurrentNotificationType(), n
            })
        }

        static getDeviceId() {
            return a.a(this, void 0, void 0, function* () {
                return (yield OneSignal.database.getSubscription()).deviceId || void 0
            })
        }
    }

    var Q = i(25);

    class ee {
        constructor(e, t, i) {
            if (this.windowReference = e, this.sendToOrigin = t, this.receiveFromOrigin = i, !window || !window.postMessage) throw new Error("Must pass in a valid window reference supporting postMessage():" + e);
            if (!t || !i) throw new Error("Invalid origin. Must be set.");
            this.emitter = new Q.a, this.channel = new MessageChannel, this.messagePort = null, this.isListening = !1, this.isConnected = !1, this.replies = {}
        }

        static get HANDSHAKE_MESSAGE() {
            return "onesignal.postmam.handshake"
        }

        static get CONNECTED_MESSAGE() {
            return "onesignal.postmam.connected"
        }

        listen() {
            E.a.debug("(Postmam) Called listen()."), this.isListening ? E.a.debug("(Postmam) Already listening for Postmam connections.") : d.a.isBrowser() && (this.isListening = !0, E.a.debug("(Postmam) Listening for Postmam connections.", this), window.addEventListener("message", this.onWindowMessagePostmanConnectReceived.bind(this)))
        }

        startPostMessageReceive() {
            window.addEventListener("message", this.onWindowPostMessageReceived.bind(this))
        }

        stopPostMessageReceive() {
            window.removeEventListener("message", this.onWindowPostMessageReceived)
        }

        destroy() {
            this.stopPostMessageReceive(), this.emitter.removeAllListeners()
        }

        onWindowPostMessageReceived(e) {
            if (!this.isSafeOrigin(e.origin)) return;
            let {id: t, command: i, data: n, source: o} = e.data;
            if (i === ee.CONNECTED_MESSAGE) return this.emitter.emit("connect"), void (this.isConnected = !0);
            let s = {id: t, command: i, data: n, source: o}, r = Object.assign({reply: this.reply.bind(this, s)}, s);
            if (this.replies.hasOwnProperty(t)) {
                E.a.info("(Postmam) This message is a reply."), !1 === this.replies[t].bind(window)(r) && delete this.replies[t]
            } else this.emitter.emit(i, r)
        }

        onWindowMessagePostmanConnectReceived(e) {
            const t = x.a.getWindowEnv().toString();
            if (E.a.debug(`(Postmam) (${t}) Window postmessage for Postman connect received:`, e), this.isSafeOrigin(e.origin)) {
                var {handshake: i} = e.data;
                i === ee.HANDSHAKE_MESSAGE ? (E.a.info("(Postmam) Got our expected Postmam handshake message (and connecting...):", e.data), window.removeEventListener("message", this.onWindowMessagePostmanConnectReceived), this.messagePort = e.ports[0], this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), E.a.info("(Postmam) Removed previous message event listener for handshakes, replaced with main message listener."), this.messagePort.start(), this.isConnected = !0, E.a.info(`(Postmam) (${t}) Connected.`), this.message(ee.CONNECTED_MESSAGE), this.emitter.emit("connect")) : E.a.info("(Postmam) Got a postmam message, but not our expected handshake:", e.data)
            }
        }

        connect() {
            E.a.info(`(Postmam) (${x.a.getWindowEnv().toString()}) Establishing a connection to ${this.sendToOrigin}.`), this.messagePort = this.channel.port1, this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), this.messagePort.start(), this.windowReference.postMessage({handshake: ee.HANDSHAKE_MESSAGE}, this.sendToOrigin, [this.channel.port2])
        }

        onMessageReceived(e) {
            if (!e.data) return void E.a.debug(`(${x.a.getWindowEnv().toString()}) Received an empty Postmam message:`, e);
            let {id: t, command: i, data: n, source: o} = e.data;
            if (i === ee.CONNECTED_MESSAGE) return this.emitter.emit("connect"), void (this.isConnected = !0);
            let s = {id: t, command: i, data: n, source: o}, r = Object.assign({reply: this.reply.bind(this, s)}, s);
            if (this.replies.hasOwnProperty(t)) {
                !1 === this.replies[t].bind(window)(r) && delete this.replies[t]
            } else this.emitter.emit(i, r)
        }

        reply(e, t, i) {
            const n = {id: e.id, command: e.command, data: t, source: x.a.getWindowEnv().toString(), isReply: !0};
            "function" == typeof i && (this.replies[n.id] = i), this.messagePort.postMessage(n)
        }

        postMessage(e, t, i) {
            if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
            if ("function" == typeof t) return void E.a.debug("You passed a function to data, did you mean to pass null?");
            const n = {id: A.a.getRandomUuid(), command: e, data: t, source: x.a.getWindowEnv().toString()};
            "function" == typeof i && (this.replies[n.id] = i), this.windowReference.postMessage(n, "*")
        }

        message(e, t, i) {
            if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
            if ("function" == typeof t) return void E.a.debug("You passed a function to data, did you mean to pass null?");
            const n = {id: A.a.getRandomUuid(), command: e, data: t, source: x.a.getWindowEnv().toString()};
            "function" == typeof i && (this.replies[n.id] = i), this.messagePort.postMessage(n)
        }

        generateSafeOrigins(e) {
            const t = [];
            try {
                const i = new URL(e);
                let n = i.host;
                0 === i.host.indexOf("www.") && (n = i.host.replace("www.", "")), "https:" === i.protocol ? (t.push(`https://${n}`), t.push(`https://www.${n}`)) : "http:" === i.protocol && (t.push(`http://${n}`), t.push(`http://www.${n}`), t.push(`https://${n}`), t.push(`https://www.${n}`))
            } catch (e) {
            }
            return t
        }

        isSafeOrigin(e) {
            if (OneSignal.config) t = OneSignal.config.subdomain; else var t = "x";
            const i = this.generateSafeOrigins(this.receiveFromOrigin);
            return "https://onesignal.com" === e || e === `https://${t || ""}.onesignal.com` || e === `https://${t || ""}.os.tc` || e === `https://${t || ""}.os.tc:3001` || e === x.a.getOneSignalApiUrl().origin || "*" === this.receiveFromOrigin || w.a.contains(i, e)
        }

        on(...e) {
            return a.a(this, void 0, void 0, function* () {
                return this.emitter.on.apply(this.emitter, e)
            })
        }

        off(...e) {
            return a.a(this, void 0, void 0, function* () {
                return this.emitter.off.apply(this.emitter, e)
            })
        }

        once(...e) {
            return a.a(this, void 0, void 0, function* () {
                return this.emitter.once.apply(this.emitter, e)
            })
        }
    }

    class te {
        constructor(e, t) {
            this.appId = e, this.registrationOptions = t
        }

        load() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield OneSignal.isPushNotificationsEnabled(), t = yield OneSignal.getNotificationPermission();
                this.url = x.a.getOneSignalApiUrl(), this.url.pathname = "webPushModal", this.url.search = `${X.getPromptOptionsQueryString()}&id=${this.appId}&httpsPrompt=true&pushEnabled=${e}&permissionBlocked=${"denied" === t}&promptType=modal`, E.a.info(`Loading iFrame for HTTPS subscription modal at ${this.url.toString()}`), this.modal = this.createHiddenSubscriptionDomModal(this.url.toString()), this.establishCrossOriginMessaging()
            })
        }

        createHiddenSubscriptionDomModal(e) {
            let t = document.createElement("div");
            t.setAttribute("id", "OneSignal-iframe-modal"), t.setAttribute("style", "display:none !important"), t.innerHTML = '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: flex; align-items: center; justify-content: center;"></div>', document.body.appendChild(t);
            let i = document.createElement("style");
            i.innerHTML = "@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} }", document.getElementsByTagName("head")[0].appendChild(i);
            let n = document.createElement("iframe");
            return n.className = "OneSignal-permission-iframe", n.setAttribute("frameborder", "0"), n.width = OneSignal._windowWidth.toString(), n.height = OneSignal._windowHeight.toString(), n.src = e, document.getElementById("notif-permission").appendChild(n), n
        }

        removeFrame() {
            const e = document.querySelector("#OneSignal-iframe-modal");
            e && e.remove()
        }

        showSubscriptionDomModal() {
            document.getElementById("OneSignal-iframe-modal").setAttribute("style", "")
        }

        establishCrossOriginMessaging() {
            this.messenger = new ee(this.modal, this.url.origin, this.url.origin), this.messenger.startPostMessageReceive(), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_LOADED, this.onModalLoaded.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED, this.onModalAccepted.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED, this.onModalRejected.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onModalClosing.bind(this))
        }

        onModalLoaded(e) {
            this.showSubscriptionDomModal(), h.a.trigger("modalLoaded")
        }

        onModalAccepted(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug("User accepted the HTTPS modal prompt.", location.origin), OneSignal._sessionInitAlreadyRunning = !1, this.dispose(), X.triggerCustomPromptClicked("granted"), E.a.debug("Calling setSubscription(true)"), yield Z.registerForPush(), yield OneSignal.setSubscription(!0)
            })
        }

        onModalRejected(e) {
            E.a.debug("User rejected the HTTPS modal prompt."), OneSignal._sessionInitAlreadyRunning = !1, this.dispose(), X.triggerCustomPromptClicked("denied")
        }

        onModalClosing(e) {
            E.a.info("Detected modal is closing."), this.dispose()
        }

        dispose() {
            this.messenger && this.messenger.destroy(), this.removeFrame()
        }

        message() {
            this.messenger.message.apply(this.messenger, arguments)
        }
    }

    var ie, ne, oe = i(14);
    (ne = ie || (ie = {})).WorkerVersion = "GetWorkerVersion", ne.Subscribe = "Subscribe", ne.SubscribeNew = "SubscribeNew", ne.AmpSubscriptionState = "amp-web-push-subscription-state", ne.AmpSubscribe = "amp-web-push-subscribe", ne.AmpUnsubscribe = "amp-web-push-unsubscribe", ne.NotificationDisplayed = "notification.displayed", ne.NotificationClicked = "notification.clicked", ne.NotificationDismissed = "notification.dismissed", ne.RedirectPage = "command.redirect", ne.SessionUpsert = "os.session.upsert", ne.SessionDeactivate = "os.session.deactivate", ne.AreYouVisible = "os.page_focused_request", ne.AreYouVisibleResponse = "os.page_focused_response", ne.SetLogging = "os.set_sw_logging";

    class se {
        constructor() {
            this.replies = {}
        }

        addListener(e, t, i) {
            const n = {callback: t, onceListenerOnly: i}, o = this.replies[e.toString()];
            o ? o.push(n) : this.replies[e.toString()] = [n]
        }

        findListenersForMessage(e) {
            return this.replies[e.toString()] || []
        }

        deleteListenerRecords(e) {
            this.replies[e.toString()] = null
        }

        deleteAllListenerRecords() {
            this.replies = {}
        }

        deleteListenerRecord(e, t) {
            const i = this.replies[e.toString()];
            if (null != i) for (let e = i.length - 1; e >= 0; e--) {
                i[e] === t && i.splice(e, 1)
            }
        }
    }

    class re {
        constructor(e, t = new se) {
            this.context = e, this.replies = t
        }

        broadcast(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (x.a.getWindowEnv() !== _.a.ServiceWorker) return;
                const i = yield self.clients.matchAll({type: "window", includeUncontrolled: !0});
                for (const n of i) E.a.debug(`[Worker Messenger] [SW -> Page] Broadcasting '${e.toString()}' to window client ${n.url}.`), n.postMessage({
                    command: e,
                    payload: t
                })
            })
        }

        unicast(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                if (x.a.getWindowEnv() === _.a.ServiceWorker) {
                    if (!i) throw new InvalidArgumentError.a("windowClient", InvalidArgumentError.b.Empty);
                    E.a.debug(`[Worker Messenger] [SW -> Page] Unicasting '${e.toString()}' to window client ${i.url}.`), i.postMessage({
                        command: e,
                        payload: t
                    })
                } else (yield this.isWorkerControllingPage()) || E.a.debug("[Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration), yield this.waitUntilWorkerControlsPage(), E.a.debug(`[Worker Messenger] [Page -> SW] Unicasting '${e.toString()}' to service worker.`), this.directPostMessageToSW(e, t)
            })
        }

        directPostMessageToSW(e, t) {
            E.a.debug(`[Worker Messenger] [Page -> SW] Direct command '${e.toString()}' to service worker.`), navigator.serviceWorker.controller.postMessage({
                command: e,
                payload: t
            })
        }

        listen(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!d.a.supportsServiceWorkers()) return;
                x.a.getWindowEnv() === _.a.ServiceWorker ? (self.addEventListener("message", this.onWorkerMessageReceivedFromPage.bind(this)), E.a.debug("[Worker Messenger] Service worker is now listening for messages.")) : yield this.listenForPage(e)
            })
        }

        listenForPage(e) {
            return a.a(this, void 0, void 0, function* () {
                e || ((yield this.isWorkerControllingPage()) || E.a.debug(`(${location.origin}) [Worker Messenger] The page is not controlled by the service worker yet. Waiting...`, self.registration), yield this.waitUntilWorkerControlsPage(), E.a.debug(`(${location.origin}) [Worker Messenger] The page is now controlled by the service worker.`)), navigator.serviceWorker.addEventListener("message", this.onPageMessageReceivedFromServiceWorker.bind(this)), E.a.debug(`(${location.origin}) [Worker Messenger] Page is now listening for messages.`)
            })
        }

        onWorkerMessageReceivedFromPage(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command), n = [], o = [];
            E.a.debug("[Worker Messenger] Service worker received message:", e.data);
            for (let e of i) e.onceListenerOnly && n.push(e), o.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
                const i = n[e];
                this.replies.deleteListenerRecord(t.command, i)
            }
            for (let e of o) e.callback.apply(null, [t.payload])
        }

        onPageMessageReceivedFromServiceWorker(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command), n = [], o = [];
            E.a.debug("[Worker Messenger] Page received message:", e.data);
            for (let e of i) e.onceListenerOnly && n.push(e), o.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
                const i = n[e];
                this.replies.deleteListenerRecord(t.command, i)
            }
            for (let e of o) e.callback.apply(null, [t.payload])
        }

        on(e, t) {
            this.replies.addListener(e, t, !1)
        }

        once(e, t) {
            this.replies.addListener(e, t, !0)
        }

        off(e) {
            e ? this.replies.deleteListenerRecords(e) : this.replies.deleteAllListenerRecords()
        }

        isWorkerControllingPage() {
            return a.a(this, void 0, void 0, function* () {
                if (x.a.getWindowEnv() === _.a.ServiceWorker) return !!self.registration.active;
                {
                    const e = yield this.context.serviceWorkerManager.getActiveState();
                    return e === oe.a.WorkerA || e === oe.a.WorkerB
                }
            })
        }

        waitUntilWorkerControlsPage() {
            return a.a(this, void 0, void 0, function* () {
                return new Promise(e => a.a(this, void 0, void 0, function* () {
                    if (yield this.isWorkerControllingPage()) e(); else {
                        x.a.getWindowEnv() === _.a.ServiceWorker ? self.addEventListener("activate", t => a.a(this, void 0, void 0, function* () {
                            (yield this.isWorkerControllingPage()) && e()
                        })) : navigator.serviceWorker.addEventListener("controllerchange", t => a.a(this, void 0, void 0, function* () {
                            (yield this.isWorkerControllingPage()) && e()
                        }))
                    }
                }))
            })
        }
    }

    class ae {
        constructor() {
            this.cache = {}
        }

        getCache() {
            return Object.assign({}, this.cache)
        }

        loadSdkStylesheet() {
            return a.a(this, void 0, void 0, function* () {
                const e = x.a.getOneSignalResourceUrlPath(), t = x.a.getOneSignalCssFileName();
                return yield this.loadIfNew(0, new URL(`${e}/${t}?v=${d.a.getSdkStylesVersionHash()}`))
            })
        }

        loadFetchPolyfill() {
            return a.a(this, void 0, void 0, function* () {
                return yield this.loadIfNew(1, new URL("https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"))
            })
        }

        loadIfNew(e, t) {
            return a.a(this, void 0, void 0, function* () {
                return this.cache[t.toString()] || (this.cache[t.toString()] = ae.load(e, t)), yield this.cache[t.toString()]
            })
        }

        static load(e, t) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    return yield new Promise((i, n) => {
                        switch (e) {
                            case 1:
                                (o = document.createElement("script")).setAttribute("type", "text/javascript"), o.setAttribute("async", "async"), o.setAttribute("src", t.toString());
                                break;
                            case 0:
                                var o;
                                (o = document.createElement("link")).setAttribute("rel", "stylesheet"), o.setAttribute("href", t.toString())
                        }
                        o.onerror = n, o.onload = i, document.querySelector("head").appendChild(o)
                    }), 0
                } catch (e) {
                    return 1
                }
            })
        }
    }

    var ce = i(17), le = i(35);

    class de {
        constructor(e, t, i, n = "shown", o = ["opacity", "transform"], s, r = 500) {
            this.selector = e, this.showClass = t, this.hideClass = i, this.state = n, this.targetTransitionEvents = o, this.nestedContentSelector = s, this.transitionCheckTimeout = r
        }

        show() {
            return this.hidden ? new Promise(e => {
                this.state = "showing", h.a.trigger(de.EVENTS.SHOWING, this);
                const t = this.element;
                if (t ? (this.hideClass && Object(T.t)(t, this.hideClass), this.showClass && Object(T.a)(t, this.showClass)) : E.a.error(`(show) could not find animated element with selector ${this.selector}`), 0 == this.targetTransitionEvents.length) return e(this);
                var i = setTimeout(() => {
                    E.a.debug(`Element did not completely show (state: ${this.state}).`)
                }, this.transitionCheckTimeout);
                Object(T.s)(this.element, "transitionend", (t, n) => {
                    if (t.target === this.element && Object(T.f)(this.targetTransitionEvents, t.propertyName)) return clearTimeout(i), n(), this.state = "shown", h.a.trigger(de.EVENTS.SHOWN, this), e(this)
                }, !0)
            }) : Promise.resolve(this)
        }

        hide() {
            return this.shown ? new Promise(e => {
                this.state = "hiding", h.a.trigger(de.EVENTS.HIDING, this);
                const t = this.element;
                if (t ? (this.showClass && Object(T.t)(t, this.showClass), this.hideClass && Object(T.a)(t, this.hideClass)) : E.a.error(`(hide) could not find animated element with selector ${this.selector}`), 0 == this.targetTransitionEvents.length) return e(this);
                Object(T.s)(this.element, "transitionend", (t, i) => {
                    var n = setTimeout(() => {
                        E.a.debug(`Element did not completely hide (state: ${this.state}).`)
                    }, this.transitionCheckTimeout);
                    if (t.target === this.element && Object(T.f)(this.targetTransitionEvents, t.propertyName)) return clearTimeout(n), i(), this.state = "hidden", h.a.trigger(de.EVENTS.HIDDEN, this), e(this)
                }, !0)
            }) : Promise.resolve(this)
        }

        waitUntilShown() {
            return "shown" === this.state ? Promise.resolve(this) : new Promise(e => {
                At.emitter.once(de.EVENTS.SHOWN, t => {
                    if (t === this) return e(this)
                })
            })
        }

        waitUntilHidden() {
            return "hidden" === this.state ? Promise.resolve(this) : new Promise(e => {
                At.emitter.once(de.EVENTS.HIDDEN, t => {
                    if (t === this) return e(this)
                })
            })
        }

        static get EVENTS() {
            return {
                SHOWING: "animatedElementShowing",
                SHOWN: "animatedElementShown",
                HIDING: "animatedElementHiding",
                HIDDEN: "animatedElementHidden"
            }
        }

        get content() {
            if (!this.element) return "";
            if (this.nestedContentSelector) {
                const e = this.element.querySelector(this.nestedContentSelector);
                return e ? e.innerHTML : ""
            }
            return this.element.innerHTML
        }

        set content(e) {
            if (this.element) if (this.nestedContentSelector) {
                const t = this.element.querySelector(this.nestedContentSelector);
                t && (t.innerHTML = e)
            } else this.element.innerHTML = e
        }

        get element() {
            return document.querySelector(this.selector)
        }

        get showing() {
            return "showing" === this.state
        }

        get shown() {
            return "shown" === this.state
        }

        get hiding() {
            return "hiding" === this.state
        }

        get hidden() {
            return "hidden" === this.state
        }
    }

    class ue extends de {
        constructor(e, t, i, n, o, s = "shown", r = "active", a = ["opacity", "transform"], c) {
            super(e, t, i, s, a), this.selector = e, this.showClass = t, this.hideClass = i, this.activeClass = n, this.inactiveClass = o, this.state = s, this.activeState = r, this.targetTransitionEvents = a, this.nestedContentSelector = c
        }

        activate() {
            return this.inactive && this.shown ? new Promise(e => {
                this.activeState = "activating", h.a.trigger(ue.EVENTS.ACTIVATING, this);
                const t = this.element;
                if (t ? (this.inactiveClass && Object(T.t)(t, this.inactiveClass), this.activeClass && Object(T.a)(t, this.activeClass)) : E.a.error("Could not find active animated element"), !this.shown) return E.a.debug("Ending activate() transition (alternative)."), this.activeState = "active", h.a.trigger(ue.EVENTS.ACTIVE, this), e(this);
                if (0 == this.targetTransitionEvents.length) return e(this);
                var i = setTimeout(() => {
                    E.a.debug(`Element did not completely activate (state: ${this.state}, activeState: ${this.activeState}).`)
                }, this.transitionCheckTimeout);
                Object(T.s)(this.element, "transitionend", (t, n) => {
                    if (t.target === this.element && Object(T.f)(this.targetTransitionEvents, t.propertyName)) return clearTimeout(i), n(), this.activeState = "active", h.a.trigger(ue.EVENTS.ACTIVE, this), e(this)
                }, !0)
            }) : Promise.resolve(this)
        }

        inactivate() {
            return this.active ? new Promise(e => {
                this.activeState = "inactivating", h.a.trigger(ue.EVENTS.INACTIVATING, this);
                const t = this.element;
                if (t ? (this.activeClass && Object(T.t)(t, this.activeClass), this.inactiveClass && Object(T.a)(t, this.inactiveClass)) : E.a.error("Could not find active animated element"), !this.shown) return this.activeState = "inactive", h.a.trigger(ue.EVENTS.INACTIVE, this), e(this);
                if (0 == this.targetTransitionEvents.length) return e(this);
                var i = setTimeout(() => {
                    E.a.debug(`Element did not completely inactivate (state: ${this.state}, activeState: ${this.activeState}).`)
                }, this.transitionCheckTimeout);
                Object(T.s)(this.element, "transitionend", (t, n) => {
                    if (t.target === this.element && Object(T.f)(this.targetTransitionEvents, t.propertyName)) return clearTimeout(i), n(), this.activeState = "inactive", h.a.trigger(ue.EVENTS.INACTIVE, this), e(this)
                }, !0)
            }) : Promise.resolve(this)
        }

        waitUntilActive() {
            return this.active ? Promise.resolve(this) : new Promise(e => {
                At.emitter.once(ue.EVENTS.ACTIVE, t => {
                    if (t === this) return e(this)
                })
            })
        }

        waitUntilInactive() {
            return this.inactive ? Promise.resolve(this) : new Promise(e => {
                At.emitter.once(ue.EVENTS.INACTIVE, t => {
                    if (t === this) return e(this)
                })
            })
        }

        static get EVENTS() {
            return Object.assign({}, de.EVENTS, {
                ACTIVATING: "activeAnimatedElementActivating",
                ACTIVE: "activeAnimatedElementActive",
                INACTIVATING: "activeAnimatedElementInactivating",
                INACTIVE: "activeAnimatedElementInactive"
            })
        }

        get activating() {
            return "activating" === this.activeState
        }

        get active() {
            return "active" === this.activeState
        }

        get inactivating() {
            return "inactivating" === this.activeState
        }

        get inactive() {
            return "inactive" === this.activeState
        }
    }

    class ge extends ue {
        constructor() {
            super(".onesignal-bell-launcher-badge", "onesignal-bell-launcher-badge-opened", null, "onesignal-bell-launcher-badge-active", null, "hidden")
        }

        increment() {
            if (!isNaN(this.content)) {
                let e = +this.content;
                e += 1, this.content = e.toString()
            }
        }

        show() {
            const e = super.show();
            return OneSignal.notifyButton.setCustomColorsIfSpecified(), e
        }

        decrement() {
            if (!isNaN(this.content)) {
                let e = +this.content;
                e -= 1, this.content = e > 0 ? e.toString() : ""
            }
        }
    }

    class pe extends de {
        constructor(e) {
            super(".onesignal-bell-launcher-message", "onesignal-bell-launcher-message-opened", void 0, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-message-body"), this.bell = e, this.contentType = "", this.queued = []
        }

        static get TIMEOUT() {
            return 2500
        }

        static get TYPES() {
            return {TIP: "tip", MESSAGE: "message", QUEUED: "queued"}
        }

        display(e, t, i = 0) {
            return E.a.debug(`Calling %cdisplay(${e}, ${t}, ${i}).`, Object(T.j)("code")), (this.shown ? this.hide() : Object(T.r)()).then(() => {
                this.content = Object(T.g)(t), this.contentType = e
            }).then(() => this.show()).then(() => Object(T.h)(i)).then(() => this.hide()).then(() => {
                this.content = this.getTipForState(), this.contentType = "tip"
            })
        }

        getTipForState() {
            return this.bell.state === Se.STATES.UNSUBSCRIBED ? this.bell.options.text["tip.state.unsubscribed"] : this.bell.state === Se.STATES.SUBSCRIBED ? this.bell.options.text["tip.state.subscribed"] : this.bell.state === Se.STATES.BLOCKED ? this.bell.options.text["tip.state.blocked"] : ""
        }

        enqueue(e) {
            return this.queued.push(Object(T.g)(e)), new Promise(e => {
                this.bell.badge.shown ? this.bell.badge.hide().then(() => this.bell.badge.increment()).then(() => this.bell.badge.show()).then(e) : (this.bell.badge.increment(), this.bell.initialized ? this.bell.badge.show().then(e) : e())
            })
        }

        dequeue(e) {
            let t = this.queued.pop(e);
            return new Promise(e => {
                this.bell.badge.shown ? this.bell.badge.hide().then(() => this.bell.badge.decrement()).then(e => e > 0 ? this.bell.badge.show() : Promise.resolve(this)).then(e(t)) : (this.bell.badge.decrement(), e(t))
            })
        }
    }

    class he extends ue {
        constructor(e) {
            super(".onesignal-bell-launcher-button", void 0, void 0, "onesignal-bell-launcher-button-active", void 0, "shown", ""), this.bell = e, this.events = {mouse: "bell.launcher.button.mouse"};
            const t = this.element;
            t && (t.addEventListener("touchstart", () => {
                this.onHovering(), this.onTap()
            }, {passive: !0}), t.addEventListener("mouseenter", () => {
                this.onHovering()
            }), t.addEventListener("mouseleave", () => {
                this.onHovered()
            }), t.addEventListener("touchmove", () => {
                this.onHovered()
            }, {passive: !0}), t.addEventListener("mousedown", () => {
                this.onTap()
            }), t.addEventListener("mouseup", () => {
                this.onEndTap()
            }), t.addEventListener("click", () => {
                this.onHovered(), this.onClick()
            }))
        }

        onHovering() {
            (f.isEmpty(this.events.mouse) || "out" === f.getLast(this.events.mouse)) && h.a.trigger(Se.EVENTS.HOVERING), f.put(this.events.mouse, "over")
        }

        onHovered() {
            f.put(this.events.mouse, "out"), h.a.trigger(Se.EVENTS.HOVERED)
        }

        onTap() {
            this.pulse(), this.activate(), this.bell.badge.activate()
        }

        onEndTap() {
            this.inactivate(), this.bell.badge.inactivate()
        }

        onClick() {
            if (h.a.trigger(Se.EVENTS.BELL_CLICK), h.a.trigger(Se.EVENTS.LAUNCHER_CLICK), !this.bell.message.shown || this.bell.message.contentType != pe.TYPES.MESSAGE) {
                var e = f.getLast("subscription.optedOut");
                return this.bell.unsubscribed ? e ? this.bell.launcher.activateIfInactive().then(() => {
                    this.bell.showDialogProcedure()
                }) : (At.registerForPushNotifications(), this.bell._ignoreSubscriptionState = !0, At.emitter.once(At.EVENTS.SUBSCRIPTION_CHANGED, () => {
                    this.bell.message.display(pe.TYPES.MESSAGE, this.bell.options.text["message.action.subscribed"], pe.TIMEOUT).then(() => {
                        this.bell._ignoreSubscriptionState = !1, this.bell.launcher.inactivate()
                    })
                })) : this.bell.subscribed ? this.bell.launcher.activateIfInactive().then(() => {
                    this.bell.showDialogProcedure()
                }) : this.bell.blocked && (Object(T.o)() ? At.registerForPushNotifications() : this.bell.launcher.activateIfInactive().then(() => {
                    this.bell.showDialogProcedure()
                })), this.bell.message.hide()
            }
        }

        pulse() {
            Object(T.u)(".pulse-ring"), this.element && Object(T.b)(this.element, "beforeend", '<div class="pulse-ring"></div>'), this.bell.setCustomColorsIfSpecified()
        }
    }

    class fe extends de {
        constructor(e) {
            super(".onesignal-bell-launcher-dialog", "onesignal-bell-launcher-dialog-opened", void 0, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-dialog-body"), this.bell = e, this.subscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button", this.unsubscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button", this.notificationIcons = null
        }

        show() {
            return this.updateBellLauncherDialogBody().then(() => super.show())
        }

        get subscribeButtonSelectorId() {
            return "subscribe-button"
        }

        get unsubscribeButtonSelectorId() {
            return "unsubscribe-button"
        }

        get subscribeButton() {
            return this.element ? this.element.querySelector("#" + this.subscribeButtonSelectorId) : null
        }

        get unsubscribeButton() {
            return this.element ? this.element.querySelector("#" + this.unsubscribeButtonSelectorId) : null
        }

        updateBellLauncherDialogBody() {
            return OneSignal.getSubscription().then(e => {
                this.nestedContentSelector && Object(T.e)(this.nestedContentSelector);
                let t = "Nothing to show.";
                var i = "";
                if (this.bell.options.showCredit && (i = '<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'), this.bell.state === Se.STATES.SUBSCRIBED && !0 === e || this.bell.state === Se.STATES.UNSUBSCRIBED && !1 === e) {
                    let e = "", n = Object(T.k)(this.notificationIcons);
                    e = n ? `<div class="push-notification-icon"><img src="${n}"></div>` : '<div class="push-notification-icon push-notification-icon-default"></div>';
                    let o = "";
                    o = this.bell.state !== Se.STATES.SUBSCRIBED ? `<button type="button" class="action" id="${this.subscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.subscribe"]}</button>` : `<button type="button" class="action" id="${this.unsubscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.unsubscribe"]}</button>`, t = `<h1>${this.bell.options.text["dialog.main.title"]}</h1><div class="divider"></div><div class="push-notification">${e}<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">${o}</div>${i}`
                } else if (this.bell.state === Se.STATES.BLOCKED) {
                    let e = null;
                    l.a.chrome ? l.a.mobile || l.a.tablet || (e = "/bell/chrome-unblock.jpg") : l.a.firefox ? e = "/bell/firefox-unblock.jpg" : l.a.safari ? e = "/bell/safari-unblock.jpg" : l.a.msedge && (e = "/bell/edge-unblock.png");
                    let n = "";
                    e && (n = `<a href="${e = x.a.getOneSignalApiUrl().origin + e}" target="_blank"><img src="${e}"></a></div>`), (l.a.mobile || l.a.tablet) && l.a.chrome && (n = "<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>⋮</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>"), t = `<h1>${this.bell.options.text["dialog.blocked.title"]}</h1><div class="divider"></div><div class="instructions"><p>${this.bell.options.text["dialog.blocked.message"]}</p>${n}</div>${i}`
                }
                this.nestedContentSelector && Object(T.b)(this.nestedContentSelector, "beforeend", t), this.subscribeButton && this.subscribeButton.addEventListener("click", () => {
                    OneSignal.__doNotShowWelcomeNotification = !1, h.a.trigger(Se.EVENTS.SUBSCRIBE_CLICK)
                }), this.unsubscribeButton && this.unsubscribeButton.addEventListener("click", () => h.a.trigger(Se.EVENTS.UNSUBSCRIBE_CLICK)), this.bell.setCustomColorsIfSpecified()
            })
        }
    }

    class me extends ue {
        constructor(e) {
            super(".onesignal-bell-launcher", "onesignal-bell-launcher-active", void 0, void 0, "onesignal-bell-launcher-inactive", "hidden", "active"), this.bell = e, this.wasInactive = !1
        }

        resize(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!this.element) throw new InvalidStateError.a(InvalidStateError.b.MissingDomElement);
                if ("small" === e && Object(T.m)(this.element, "onesignal-bell-launcher-sm") || "medium" === e && Object(T.m)(this.element, "onesignal-bell-launcher-md") || "large" === e && Object(T.m)(this.element, "onesignal-bell-launcher-lg")) return Promise.resolve(this);
                if (Object(T.t)(this.element, "onesignal-bell-launcher-sm"), Object(T.t)(this.element, "onesignal-bell-launcher-md"), Object(T.t)(this.element, "onesignal-bell-launcher-lg"), "small" === e) Object(T.a)(this.element, "onesignal-bell-launcher-sm"); else if ("medium" === e) Object(T.a)(this.element, "onesignal-bell-launcher-md"); else {
                    if ("large" !== e) throw new Error("Invalid OneSignal bell size " + e);
                    Object(T.a)(this.element, "onesignal-bell-launcher-lg")
                }
                return this.shown ? yield new Promise(e => {
                    if (0 == this.targetTransitionEvents.length) return e(this);
                    var t = setTimeout(() => {
                        E.a.debug(`Launcher did not completely resize (state: ${this.state}, activeState: ${this.activeState}).`)
                    }, this.transitionCheckTimeout);
                    Object(T.s)(this.element, "transitionend", (i, n) => {
                        if (i.target === this.element && Object(T.f)(this.targetTransitionEvents, i.propertyName)) return clearTimeout(t), n(), e(this)
                    }, !0)
                }) : this
            })
        }

        activateIfInactive() {
            return this.inactive ? (this.wasInactive = !0, this.activate()) : Object(T.r)()
        }

        inactivateIfWasInactive() {
            return this.wasInactive ? (this.wasInactive = !1, this.inactivate()) : Object(T.r)()
        }

        clearIfWasInactive() {
            this.wasInactive = !1
        }

        inactivate() {
            return this.bell.message.hide().then(() => this.bell.badge.content.length > 0 ? this.bell.badge.hide().then(() => Promise.all([super.inactivate(), this.resize("small")])).then(() => this.bell.badge.show()) : Promise.all([super.inactivate(), this.resize("small")]))
        }

        activate() {
            return this.bell.badge.content.length > 0 ? this.bell.badge.hide().then(() => Promise.all([super.activate(), this.resize(this.bell.options.size)])) : Promise.all([super.activate(), this.resize(this.bell.options.size)])
        }
    }

    var be = '<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>';

    class Se {
        constructor(e, t) {
            this.state = Se.STATES.UNINITIALIZED, this._ignoreSubscriptionState = !1, this.hovering = !1, this.initialized = !1, this.DEFAULT_SIZE = "medium", this.DEFAULT_POSITION = "bottom-right", this.DEFAULT_THEME = "default", this.options = {
                enable: e.enable || !1,
                size: e.size || this.DEFAULT_SIZE,
                position: e.position || this.DEFAULT_POSITION,
                theme: e.theme || this.DEFAULT_THEME,
                showLauncherAfter: e.showLauncherAfter || 10,
                showBadgeAfter: e.showBadgeAfter || 300,
                text: this.setDefaultTextOptions(e.text || {}),
                prenotify: e.prenotify,
                showCredit: e.showCredit,
                colors: e.colors,
                offset: e.offset
            }, t && (this._launcher = t), this.options.enable && (this.validateOptions(this.options), this.state = Se.STATES.UNINITIALIZED, this._ignoreSubscriptionState = !1, this.installEventHooks(), this.updateState())
        }

        static get EVENTS() {
            return {
                STATE_CHANGED: "notifyButtonStateChange",
                LAUNCHER_CLICK: "notifyButtonLauncherClick",
                BELL_CLICK: "notifyButtonButtonClick",
                SUBSCRIBE_CLICK: "notifyButtonSubscribeClick",
                UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick",
                HOVERING: "notifyButtonHovering",
                HOVERED: "notifyButtonHover"
            }
        }

        static get STATES() {
            return {
                UNINITIALIZED: "uninitialized",
                SUBSCRIBED: "subscribed",
                UNSUBSCRIBED: "unsubscribed",
                BLOCKED: "blocked"
            }
        }

        static get TEXT_SUBS() {
            return {
                "prompt.native.grant": {
                    default: "Allow",
                    chrome: "Allow",
                    firefox: "Always Receive Notifications",
                    safari: "Allow"
                }
            }
        }

        showDialogProcedure() {
            this.dialog.shown || this.dialog.show().then(() => {
                Object(T.s)(document, "click", (e, t) => {
                    this.dialog.element.contains(e.target) || (t(), this.dialog.shown && this.dialog.hide().then(() => {
                        this.launcher.inactivateIfWasInactive()
                    }))
                }, !0)
            })
        }

        validateOptions(e) {
            if (!e.size || !Object(T.f)(["small", "medium", "large"], e.size)) throw new Error(`Invalid size ${e.size} for notify button. Choose among 'small', 'medium', or 'large'.`);
            if (!e.position || !Object(T.f)(["bottom-left", "bottom-right"], e.position)) throw new Error(`Invalid position ${e.position} for notify button. Choose either 'bottom-left', or 'bottom-right'.`);
            if (!e.theme || !Object(T.f)(["default", "inverse"], e.theme)) throw new Error(`Invalid theme ${e.theme} for notify button. Choose either 'default', or 'inverse'.`);
            if (!e.showLauncherAfter || e.showLauncherAfter < 0) throw new Error(`Invalid delay duration of ${this.options.showLauncherAfter} for showing the notify button. Choose a value above 0.`);
            if (!e.showBadgeAfter || e.showBadgeAfter < 0) throw new Error(`Invalid delay duration of ${this.options.showBadgeAfter} for showing the notify button's badge. Choose a value above 0.`)
        }

        setDefaultTextOptions(e) {
            return {
                "tip.state.unsubscribed": e["tip.state.unsubscribed"] || "Subscribe to notifications",
                "tip.state.subscribed": e["tip.state.subscribed"] || "You're subscribed to notifications",
                "tip.state.blocked": e["tip.state.blocked"] || "You've blocked notifications",
                "message.prenotify": e["message.prenotify"] || "Click to subscribe to notifications",
                "message.action.subscribed": e["message.action.subscribed"] || "Thanks for subscribing!",
                "message.action.resubscribed": e["message.action.resubscribed"] || "You're subscribed to notifications",
                "message.action.subscribing": e["message.action.subscribing"] || "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
                "message.action.unsubscribed": e["message.action.unsubscribed"] || "You won't receive notifications again",
                "dialog.main.title": e["dialog.main.title"] || "Manage Site Notifications",
                "dialog.main.button.subscribe": e["dialog.main.button.subscribe"] || "SUBSCRIBE",
                "dialog.main.button.unsubscribe": e["dialog.main.button.unsubscribe"] || "UNSUBSCRIBE",
                "dialog.blocked.title": e["dialog.blocked.title"] || "Unblock Notifications",
                "dialog.blocked.message": e["dialog.blocked.message"] || "Follow these instructions to allow notifications:"
            }
        }

        installEventHooks() {
            At.emitter.on(Se.EVENTS.SUBSCRIBE_CLICK, () => {
                this.dialog.subscribeButton.disabled = !0, this._ignoreSubscriptionState = !0, At.setSubscription(!0).then(() => (this.dialog.subscribeButton.disabled = !1, this.dialog.hide())).then(() => this.message.display(pe.TYPES.MESSAGE, this.options.text["message.action.resubscribed"], pe.TIMEOUT)).then(() => (this._ignoreSubscriptionState = !1, this.launcher.clearIfWasInactive(), this.launcher.inactivate())).then(() => this.updateState())
            }), At.emitter.on(Se.EVENTS.UNSUBSCRIBE_CLICK, () => {
                this.dialog.unsubscribeButton.disabled = !0, At.setSubscription(!1).then(() => (this.dialog.unsubscribeButton.disabled = !1, this.dialog.hide())).then(() => (this.launcher.clearIfWasInactive(), this.launcher.activate())).then(() => this.message.display(pe.TYPES.MESSAGE, this.options.text["message.action.unsubscribed"], pe.TIMEOUT)).then(() => this.updateState())
            }), At.emitter.on(Se.EVENTS.HOVERING, () => {
                this.hovering = !0, this.launcher.activateIfInactive(), this.message.shown || this.dialog.shown ? this.hovering = !1 : this.message.contentType !== pe.TYPES.MESSAGE ? new Promise(e => {
                    if (this.message.queued.length > 0) return this.message.dequeue().then(t => {
                        this.message.content = t, this.message.contentType = pe.TYPES.QUEUED, e()
                    });
                    this.message.content = Object(T.g)(this.message.getTipForState()), this.message.contentType = pe.TYPES.TIP, e()
                }).then(() => this.message.show()).then(() => {
                    this.hovering = !1
                }) : this.hovering = !1
            }), At.emitter.on(Se.EVENTS.HOVERED, () => {
                this.message.contentType !== pe.TYPES.MESSAGE && this.dialog.hidden && (this.hovering && (this.hovering = !1, this.message.waitUntilShown().then(() => Object(T.h)(pe.TIMEOUT)).then(() => this.message.hide()).then(() => {
                    this.launcher.wasInactive && this.dialog.hidden && (this.launcher.inactivate(), this.launcher.wasInactive = !1)
                })), this.message.shown && this.message.hide().then(() => {
                    this.launcher.wasInactive && this.dialog.hidden && (this.launcher.inactivate(), this.launcher.wasInactive = !1)
                }))
            }), At.emitter.on(At.EVENTS.SUBSCRIPTION_CHANGED, e => a.a(this, void 0, void 0, function* () {
                if (1 == e && (this.badge.shown && this.options.prenotify && this.badge.hide(), null === this.dialog.notificationIcons)) {
                    const e = yield X.getNotificationIcons();
                    this.dialog.notificationIcons = e
                }
                At.getNotificationPermission(t => {
                    let i;
                    i = e ? Se.STATES.SUBSCRIBED : t === k.Denied ? Se.STATES.BLOCKED : Se.STATES.UNSUBSCRIBED, this.setState(i, this._ignoreSubscriptionState)
                })
            })), At.emitter.on(Se.EVENTS.STATE_CHANGED, e => {
                this.launcher.element && (e.to === Se.STATES.SUBSCRIBED ? this.launcher.inactivate() : (e.to === Se.STATES.UNSUBSCRIBED || Se.STATES.BLOCKED) && this.launcher.activate())
            }), At.emitter.on(At.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, () => {
                this.updateState()
            })
        }

        addDefaultClasses() {
            const e = this.container;
            if ("bottom-left" === this.options.position) e && Object(T.a)(e, "onesignal-bell-container-bottom-left"), Object(T.a)(this.launcher.selector, "onesignal-bell-launcher-bottom-left"); else {
                if ("bottom-right" !== this.options.position) throw new Error("Invalid OneSignal notify button position " + this.options.position);
                e && Object(T.a)(e, "onesignal-bell-container-bottom-right"), Object(T.a)(this.launcher.selector, "onesignal-bell-launcher-bottom-right")
            }
            if ("default" === this.options.theme) Object(T.a)(this.launcher.selector, "onesignal-bell-launcher-theme-default"); else {
                if ("inverse" !== this.options.theme) throw new Error("Invalid OneSignal notify button theme " + this.options.theme);
                Object(T.a)(this.launcher.selector, "onesignal-bell-launcher-theme-inverse")
            }
        }

        create() {
            return a.a(this, void 0, void 0, function* () {
                if (!this.options.enable) return;
                if (0 !== (yield At.context.dynamicResourceLoader.loadSdkStylesheet())) return void E.a.debug("Not showing notify button because styles failed to load.");
                this.container && Object(T.u)("#onesignal-bell-container"), Object(T.b)("body", "beforeend", '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'), this.container && Object(T.b)(this.container, "beforeend", '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'), Object(T.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-button"></div>'), Object(T.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-badge"></div>'), Object(T.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-message"></div>'), Object(T.b)(this.message.selector, "beforeend", '<div class="onesignal-bell-launcher-message-body"></div>'), Object(T.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog"></div>'), Object(T.b)(this.dialog.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog-body"></div>'), Object(T.b)(this.button.selector, "beforeend", be);
                const e = yield At.isPushNotificationsEnabled(), t = yield At.getSubscription(),
                    i = yield X.wasHttpsNativePromptDismissed();
                let n = e ? "small" : this.options.size || this.DEFAULT_SIZE;
                yield this.launcher.resize(n), this.addDefaultClasses(), this.applyOffsetIfSpecified(), this.setCustomColorsIfSpecified(), this.patchSafariSvgFilterBug(), E.a.info("Showing the notify button."), yield(e ? this.launcher.inactivate() : Object(T.r)()).then(() => At.getSubscription()).then(t => !e && t || null !== this.dialog.notificationIcons ? Object(T.r)() : X.getNotificationIcons().then(e => {
                    this.dialog.notificationIcons = e
                })).then(() => Object(T.h)(this.options.showLauncherAfter || 0)).then(() => Object(T.o)() && t && !0 !== i && !e && !0 === At.config.userConfig.promptOptions.autoPrompt && !X.isHttpPromptAlreadyShown() ? (E.a.debug("Not showing notify button because popover will be shown."), Object(T.r)()) : this.launcher.show()).then(() => Object(T.h)(this.options.showBadgeAfter || 0)).then(() => this.options.prenotify && !e && At._isNewVisitor ? this.message.enqueue(this.options.text["message.prenotify"]).then(() => this.badge.show()) : Object(T.r)()).then(() => this.initialized = !0)
            })
        }

        patchSafariSvgFilterBug() {
            if (!(l.a.safari && Number(l.a.version) >= 9.1)) {
                let e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));", t = "drop-shadow(0 2px 4px rgba(34,36,38,0));",
                    i = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
                this.graphic.setAttribute("style", `filter: ${e}; -webkit-filter: ${e};`), this.badge.element.setAttribute("style", `filter: ${t}; -webkit-filter: ${t};`), this.dialog.element.setAttribute("style", `filter: ${i}; -webkit-filter: ${i};`)
            }
            l.a.safari && this.badge.element.setAttribute("style", "display: none;")
        }

        applyOffsetIfSpecified() {
            let e = this.options.offset;
            if (e) {
                const t = this.launcher.element;
                if (!t) return void E.a.error("Could not find bell dom element");
                t.style.cssText = "", e.bottom && (t.style.cssText += `bottom: ${e.bottom};`), "bottom-right" === this.options.position ? e.right && (t.style.cssText += `right: ${e.right};`) : "bottom-left" === this.options.position && e.left && (t.style.cssText += `left: ${e.left};`)
            }
        }

        setCustomColorsIfSpecified() {
            let e = this.dialog.element.querySelector("button.action"),
                t = this.button.element.querySelector(".pulse-ring");
            this.graphic.querySelector(".background").style.cssText = "";
            let i = this.graphic.querySelectorAll(".foreground");
            for (let e = 0; e < i.length; e++) {
                i[e].style.cssText = ""
            }
            if (this.graphic.querySelector(".stroke").style.cssText = "", this.badge.element.style.cssText = "", e && (e.style.cssText = "", e.style.cssText = ""), t && (t.style.cssText = ""), this.options.colors) {
                let i = this.options.colors;
                if (i["circle.background"] && (this.graphic.querySelector(".background").style.cssText += `fill: ${i["circle.background"]}`), i["circle.foreground"]) {
                    let e = this.graphic.querySelectorAll(".foreground");
                    for (let t = 0; t < e.length; t++) {
                        e[t].style.cssText += `fill: ${i["circle.foreground"]}`
                    }
                    this.graphic.querySelector(".stroke").style.cssText += `stroke: ${i["circle.foreground"]}`
                }
                i["badge.background"] && (this.badge.element.style.cssText += `background: ${i["badge.background"]}`), i["badge.bordercolor"] && (this.badge.element.style.cssText += `border-color: ${i["badge.bordercolor"]}`), i["badge.foreground"] && (this.badge.element.style.cssText += `color: ${i["badge.foreground"]}`), e && (i["dialog.button.background"] && (this.dialog.element.querySelector("button.action").style.cssText += `background: ${i["dialog.button.background"]}`), i["dialog.button.foreground"] && (this.dialog.element.querySelector("button.action").style.cssText += `color: ${i["dialog.button.foreground"]}`), i["dialog.button.background.hovering"] && this.addCssToHead("onesignal-background-hover-style", `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: ${i["dialog.button.background.hovering"]} !important; }`), i["dialog.button.background.active"] && this.addCssToHead("onesignal-background-active-style", `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: ${i["dialog.button.background.active"]} !important; }`)), t && i["pulse.color"] && (this.button.element.querySelector(".pulse-ring").style.cssText = `border-color: ${i["pulse.color"]}`)
            }
        }

        addCssToHead(e, t) {
            if (document.getElementById(e)) return;
            let i = document.createElement("style");
            i.id = e, i.type = "text/css", i.appendChild(document.createTextNode(t)), document.head.appendChild(i)
        }

        updateState() {
            Promise.all([At.privateIsPushNotificationsEnabled(), At.privateGetNotificationPermission()]).then(([e, t]) => {
                this.setState(e ? Se.STATES.SUBSCRIBED : Se.STATES.UNSUBSCRIBED), t === k.Denied && this.setState(Se.STATES.BLOCKED)
            })
        }

        setState(e, t = !1) {
            let i = this.state;
            this.state = e, i === e || t || h.a.trigger(Se.EVENTS.STATE_CHANGED, {from: i, to: e})
        }

        get container() {
            return document.querySelector("#onesignal-bell-container")
        }

        get graphic() {
            return this.button.element.querySelector("svg")
        }

        get launcher() {
            return this._launcher || (this._launcher = new me(this)), this._launcher
        }

        get button() {
            return this._button || (this._button = new he(this)), this._button
        }

        get badge() {
            return this._badge || (this._badge = new ge), this._badge
        }

        get message() {
            return this._message || (this._message = new pe(this)), this._message
        }

        get dialog() {
            return this._dialog || (this._dialog = new fe(this)), this._dialog
        }

        get subscribed() {
            return this.state === Se.STATES.SUBSCRIBED
        }

        get unsubscribed() {
            return this.state === Se.STATES.UNSUBSCRIBED
        }

        get blocked() {
            return this.state === Se.STATES.BLOCKED
        }
    }

    class ve {
        constructor(e) {
            if (!e) throw new InvalidArgumentError.a("path", InvalidArgumentError.b.Empty);
            this.path = e.trim()
        }

        getQueryString() {
            const e = this.path.indexOf("?");
            return -1 === e ? null : this.path.length > e ? this.path.substring(e + 1) : null
        }

        getWithoutQueryString() {
            return this.path.split(ve.QUERY_STRING)[0]
        }

        getFileName() {
            return this.getWithoutQueryString().split("\\").pop().split("/").pop()
        }

        getFileNameWithQuery() {
            return this.path.split("\\").pop().split("/").pop()
        }

        getFullPath() {
            return this.path
        }

        getPathWithoutFileName() {
            const e = this.getWithoutQueryString(), t = e.lastIndexOf(this.getFileName());
            let i = e.substring(0, t);
            return i = i.replace(/[\\\/]$/, "")
        }
    }

    ve.QUERY_STRING = "?";

    class Oe extends u.a {
        constructor(e, t) {
            super("Registration of a Service Worker failed."), this.status = e, this.statusText = t, Object.setPrototypeOf(this, Oe.prototype)
        }
    }

    var ye, we, Ee, Pe, Ie, Te, Ce = Oe;

    class Ae {
        constructor(e, t) {
            this.context = e, this.config = t
        }

        static getRegistration() {
            return a.a(this, void 0, void 0, function* () {
                return yield oe.b.getRegistration()
            })
        }

        getActiveState() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield x.a.getIntegration();
                if (e === ce.a.InsecureProxy) return oe.a.Indeterminate;
                if (e === ce.a.SecureProxy) {
                    switch (x.a.getWindowEnv()) {
                        case _.a.Host:
                        case _.a.CustomIframe:
                            const e = OneSignal.proxyFrameHost;
                            return e ? yield e.runCommand(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE) : oe.a.Indeterminate;
                        case _.a.OneSignalSubscriptionPopup:
                            break;
                        case _.a.OneSignalSubscriptionModal:
                            throw new b.a
                    }
                }
                const t = yield Ae.getRegistration();
                if (!t) return oe.a.None;
                if (t.installing) return oe.a.Installing;
                if (!t.active) return oe.a.ThirdParty;
                const i = Ae.activeSwFileName(t), n = this.swActiveStateByFileName(i);
                return navigator.serviceWorker.controller || n !== oe.a.WorkerA && n !== oe.a.WorkerB ? n : oe.a.Bypassed
            })
        }

        static activeSwFileName(e) {
            if (!e.active) return null;
            const t = new URL(e.active.scriptURL).pathname, i = new ve(t).getFileName();
            if ("akam-sw.js" == i) {
                const t = new URLSearchParams(new URL(e.active.scriptURL).search).get("othersw");
                if (t) return E.a.debug("Found a ServiceWorker under Akamai's akam-sw.js?othersw=", t), new ve(new URL(t).pathname).getFileName()
            }
            return i
        }

        swActiveStateByFileName(e) {
            return e ? e == this.config.workerAPath.getFileName() ? oe.a.WorkerA : e == this.config.workerBPath.getFileName() ? oe.a.WorkerB : oe.a.ThirdParty : oe.a.None
        }

        getWorkerVersion() {
            return a.a(this, void 0, void 0, function* () {
                return new Promise(e => a.a(this, void 0, void 0, function* () {
                    if (A.b.isUsingSubscriptionWorkaround()) {
                        const t = OneSignal.proxyFrameHost;
                        if (t) {
                            const i = yield t.runCommand(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION);
                            e(i)
                        } else e(NaN)
                    } else this.context.workerMessenger.once(ie.WorkerVersion, t => {
                        e(t)
                    }), this.context.workerMessenger.unicast(ie.WorkerVersion)
                }))
            })
        }

        shouldInstallWorker() {
            return a.a(this, void 0, void 0, function* () {
                if (!d.a.supportsServiceWorkers()) return !1;
                if (!OneSignal.config) return !1;
                if (OneSignal.config.subdomain && "safari" !== OneSignal.environmentInfo.browserType && x.a.getWindowEnv() === _.a.Host) return !1;
                const e = yield this.getActiveState();
                if (e === oe.a.None || e === oe.a.ThirdParty) {
                    return "granted" === (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.config.safariWebId))
                }
                return this.workerNeedsUpdate()
            })
        }

        workerNeedsUpdate() {
            return a.a(this, void 0, void 0, function* () {
                let e;
                E.a.info("[Service Worker Update] Checking service worker version...");
                try {
                    e = yield w.a.timeoutPromise(this.getWorkerVersion(), 2e3)
                } catch (e) {
                    return E.a.info("[Service Worker Update] Worker did not reply to version query; assuming older version and updating."), !0
                }
                return e !== d.a.version() ? (E.a.info(`[Service Worker Update] Updating service worker from ${e} --\x3e ${d.a.version()}.`), !0) : (E.a.info(`[Service Worker Update] Service worker version is current at ${e} (no update required).`), !1)
            })
        }

        installWorker() {
            return a.a(this, void 0, void 0, function* () {
                if (!(yield this.shouldInstallWorker())) return;
                const e = yield this.getActiveState();
                yield this.installAlternatingWorker(), yield new Promise(t => a.a(this, void 0, void 0, function* () {
                    const i = yield this.getActiveState();
                    E.a.debug("installWorker - Comparing pre and post states", e, i), e !== i && i !== oe.a.Installing ? t() : (E.a.debug("installWorker - Awaiting on navigator.serviceWorker's 'controllerchange' event"), navigator.serviceWorker.addEventListener("controllerchange", i => a.a(this, void 0, void 0, function* () {
                        const i = yield this.getActiveState();
                        i !== e && i !== oe.a.Installing ? t() : E.a.error("installWorker - SW's 'controllerchange' fired but no state change!")
                    })))
                })), (yield this.getActiveState()) === oe.a.WorkerB && (yield this.installAlternatingWorker()), yield this.establishServiceWorkerChannel()
            })
        }

        establishServiceWorkerChannel() {
            return a.a(this, void 0, void 0, function* () {
                const e = this.context.workerMessenger;
                e.off(), e.on(ie.NotificationDisplayed, e => {
                    E.a.debug(location.origin, "Received notification display event from service worker."), h.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, e)
                }), e.on(ie.NotificationClicked, e => a.a(this, void 0, void 0, function* () {
                    let t;
                    if (0 === (t = x.a.getWindowEnv() === _.a.OneSignalProxyFrame ? yield new Promise(e => {
                        const t = OneSignal.proxyFrame;
                        t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, OneSignal.EVENTS.NOTIFICATION_CLICKED, t => {
                            let i = t.data;
                            e(i)
                        })
                    }) : OneSignal.emitter.numberOfListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED))) {
                        E.a.debug("notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval.");
                        let t = e.url;
                        e.url || (t = location.href), yield I.a.put("NotificationOpened", {
                            url: t,
                            data: e,
                            timestamp: Date.now()
                        })
                    } else h.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, e)
                })), e.on(ie.RedirectPage, e => {
                    E.a.debug(`${x.a.getWindowEnv().toString()} Picked up command.redirect to ${e}, forwarding to host page.`);
                    const t = OneSignal.proxyFrame;
                    t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, e)
                }), e.on(ie.NotificationDismissed, e => {
                    h.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, e)
                });
                const t = A.b.isHttps(), i = A.b.isSafari();
                e.on(ie.AreYouVisible, n => {
                    if (t && i) {
                        const t = {timestamp: n.timestamp, focused: document.hasFocus()};
                        e.directPostMessageToSW(ie.AreYouVisibleResponse, t)
                    } else {
                        const e = {timestamp: n.timestamp}, t = OneSignal.proxyFrame;
                        t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, e)
                    }
                })
            })
        }

        installAlternatingWorker() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield this.getActiveState();
                e === oe.a.ThirdParty && E.a.info("[Service Worker Installation] 3rd party service worker detected.");
                const t = `${oe.b.getServiceWorkerHref(e, this.config)}?${w.a.encodeHashAsUriComponent({appId: this.context.appConfig.appId})}`,
                    i = `${A.b.getBaseUrl()}${this.config.registrationOptions.scope}`;
                E.a.info(`[Service Worker Installation] Installing service worker ${t} ${i}.`);
                try {
                    yield navigator.serviceWorker.register(t, {scope: i})
                } catch (e) {
                    if (E.a.error(`[Service Worker Installation] Installing service worker failed ${e}`), x.a.getWindowEnv() === _.a.OneSignalSubscriptionPopup) throw e;
                    const i = yield fetch(t);
                    if (403 === i.status || 404 === i.status) throw new Ce(i.status, i.statusText);
                    throw e
                }
                E.a.debug("[Service Worker Installation] Service worker installed.")
            })
        }
    }

    class Ne {
        constructor(e, t) {
            this.url = e, this.url.pathname = "subscribe", this.options = t || {}
        }

        load() {
            const e = Object.assign({}, X.getPromptOptionsPostHash(), {
                promptType: "popup",
                parentHostname: encodeURIComponent(location.hostname)
            });
            return this.options.autoAccept && (e.autoAccept = !0), E.a.info(`Opening a popup to ${this.url.toString()} with POST data:`, e), this.popupWindow = this.openWindowViaPost(this.url.toString(), e, null), this.establishCrossOriginMessaging(), this.loadPromise = {}, this.loadPromise.promise = new Promise((e, t) => {
                this.loadPromise.resolver = e, this.loadPromise.rejector = t
            }), this.loadPromise.promise
        }

        openWindowViaPost(e, t, i) {
            var n = document.createElement("form");
            n.action = e, n.method = "POST", n.target = "onesignal-http-popup";
            var o = void 0 != window.screenLeft ? window.screenLeft : screen.left,
                s = void 0 != window.screenTop ? window.screenTop : screen.top,
                r = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                c = OneSignal._windowWidth, l = OneSignal._windowHeight, d = r / 2 - c / 2 + o, u = a / 2 - l / 2 + s;
            i && (i.childWidth && (c = i.childWidth), i.childHeight && (l = i.childHeight), i.left && (d = i.left), i.top && (u = i.top));
            const g = window.open("about:blank", "onesignal-http-popup", `'scrollbars=yes, width=${c}, height=${l}, top=${u}, left=${d}`);
            if (t) for (var p in t) {
                var h = document.createElement("textarea");
                h.name = p, h.value = "object" == typeof t[p] ? JSON.stringify(t[p]) : t[p], n.appendChild(h)
            }
            return n.style.display = "none", document.body.appendChild(n), n.submit(), document.body.removeChild(n), g
        }

        establishCrossOriginMessaging() {
            this.messenger = new ee(this.popupWindow, this.url.toString(), this.url.toString()), this.messenger.on(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, this.onBeginMessagePortCommunications.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_LOADED, this.onPopupLoaded.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_ACCEPTED, this.onPopupAccepted.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_REJECTED, this.onPopupRejected.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onPopupClosing.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT, this.onSetSessionCount.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.WINDOW_TIMEOUT, this.onWindowTimeout.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, this.onFinishingRegistrationRemotely.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)), this.messenger.startPostMessageReceive()
        }

        dispose() {
            this.messenger.destroy()
        }

        onBeginMessagePortCommunications(e) {
            return a.a(this, void 0, void 0, function* () {
                return E.a.debug(`(${x.a.getWindowEnv().toString()}) Successfully established cross-origin messaging with the popup window.`), this.messenger.connect(), !1
            })
        }

        onPopupLoaded(e) {
            return a.a(this, void 0, void 0, function* () {
                this.loadPromise.resolver(), h.a.trigger("popupLoad")
            })
        }

        onPopupAccepted(e) {
            return a.a(this, void 0, void 0, function* () {
                X.triggerCustomPromptClicked("granted")
            })
        }

        onPopupRejected(e) {
            return a.a(this, void 0, void 0, function* () {
                X.triggerCustomPromptClicked("denied")
            })
        }

        onPopupClosing(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.info("Popup window is closing, running cleanup events."), h.a.trigger(OneSignal.EVENTS.POPUP_CLOSING), this.dispose()
            })
        }

        onSetSessionCount(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug(x.a.getWindowEnv().toString() + " Marking current session as a continuing browsing session.");
                const {sessionCount: t} = e.data;
                OneSignal.context.pageViewManager.setPageViewCount(t)
            })
        }

        onWindowTimeout(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug(x.a.getWindowEnv().toString() + " Popup window timed out and was closed."), h.a.trigger(OneSignal.EVENTS.POPUP_WINDOW_TIMEOUT)
            })
        }

        onFinishingRegistrationRemotely(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug(location.origin, x.a.getWindowEnv().toString() + " Finishing HTTP popup registration inside the iFrame, sent from popup."), e.reply({progress: !0});
                const {rawPushSubscription: t} = e.data;
                this.messenger && this.messenger.stopPostMessageReceive(), yield OneSignal.context.subscriptionManager.registerSubscription(t), yield M.checkAndTriggerSubscriptionChanged(), yield X.checkAndTriggerNotificationPermissionChanged()
            })
        }

        onRemoteRetriggerEvent(e) {
            let {eventName: t, eventData: i} = e.data;
            return h.a.trigger(t, i, e.source), !1
        }

        message() {
            this.messenger && this.messenger.message.apply(this.messenger, arguments)
        }
    }

    function Me(e) {
        return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
            return String.fromCharCode("0x" + t)
        }))
    }

    class ke {
        getPropertiesAsJson() {
            return {origin: location.origin, url: location.href, sdkVersion: d.a.version()}
        }
    }

    class _e {
    }

    (we = ye || (ye = {})).HttpPermissionRequest = "HttpPermissionRequest", we.SyncHashedEmail = "SyncHashedEmail";

    class xe extends ke {
        constructor(e) {
            super(), this.apiName = e
        }

        getEventName() {
            return "api-usage"
        }

        getPropertiesAsJson() {
            return Object.assign({api: this.apiName.toString()}, super.getPropertiesAsJson())
        }
    }

    class Re extends _e {
        constructor() {
            super()
        }

        getProfileName() {
            return "all_websites"
        }

        getDateUtc() {
            const e = new Date;
            return `${e.getUTCMonth() + 1}_${e.getUTCDate()}_${e.getUTCFullYear()}`
        }

        getOperationData() {
            const e = {$add: {}, $ignore_time: !0};
            return e.$add[`pageview_${this.getDateUtc()}`] = 1, e
        }
    }

    class De {
        constructor(e, t) {
            this.isFeatureEnabled = e, this.mixpanelReportingToken = t
        }

        static get MIXPANEL_REPORTING_URL() {
            return "https://api.mixpanel.com"
        }

        isEnabled() {
            return this.isFeatureEnabled && !!this.mixpanelReportingToken
        }

        reportEvent(e) {
            if (!this.isEnabled()) return Promise.resolve(null);
            const t = {
                event: e.getEventName(),
                properties: Object.assign({token: this.mixpanelReportingToken}, e.getPropertiesAsJson())
            }, i = Me(JSON.stringify(t)), n = {method: "GET", headers: new Headers, cache: "no-cache"};
            return fetch(`${De.MIXPANEL_REPORTING_URL}/track/?data=${i}`, n)
        }

        reportEngagement(e) {
            if (!this.isEnabled()) return Promise.resolve(null);
            let t = {$token: this.mixpanelReportingToken, $distinct_id: e.getProfileName()};
            t = Object.assign({}, t, e.getOperationData());
            const i = Me(JSON.stringify(t)), n = {method: "GET", headers: new Headers, cache: "no-cache"};
            return fetch(`${De.MIXPANEL_REPORTING_URL}/engage/?data=${i}`, n)
        }

        shouldCollectPageView() {
            const e = new Date;
            return e.getUTCMonth() + 1 <= 2 && e.getUTCDate() <= 10 && e.getUTCFullYear() <= 2018 && e.getUTCMonth() + 1 >= 2 && e.getUTCDate() >= 8 && e.getUTCFullYear() >= 2018
        }

        reportPageView() {
            this.shouldCollectPageView() && this.reportEngagement(new Re)
        }
    }

    (Pe = Ee || (Ee = {}))[Pe.HttpPermissionRequest = 0] = "HttpPermissionRequest", Pe[Pe.SyncHashedEmail = 1] = "SyncHashedEmail";

    class We extends u.a {
        constructor(e) {
            switch (e) {
                case Ee.HttpPermissionRequest:
                    super("The HTTP permission request has been deprecated. Please remove any custom popups from your code."), this.reportUsage(ye.HttpPermissionRequest);
                    break;
                case Ee.SyncHashedEmail:
                    super("API syncHashedEmail() has been deprecated and will be removed in a future SDK release. Please remove any usages from your code."), this.reportUsage(ye.SyncHashedEmail)
            }
            Object.setPrototypeOf(this, We.prototype)
        }

        reportUsage(e) {
            "undefined" != typeof OneSignal && OneSignal.context && OneSignal.context.metricsManager && OneSignal.context.metricsManager.reportEvent(new xe(e))
        }
    }

    class Ue {
        static internalInit() {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug("Called %cinternalInit()", Object(T.j)("code")), yield OneSignal.context.serviceWorkerManager.installWorker();
                const e = OneSignal.context.sessionManager;
                OneSignal.emitter.on(OneSignal.EVENTS.SESSION_STARTED, e.sendOnSessionUpdateFromPage.bind(e)), OneSignal.context.pageViewManager.incrementPageViewCount(), "visible" === document.visibilityState ? yield Ue.sessionInit() : Ue.postponeSessionInitUntilPageIsInFocus()
            })
        }

        static postponeSessionInitUntilPageIsInFocus() {
            Object(T.s)(document, "visibilitychange", (e, t) => {
                "visible" === document.visibilityState && (t(), Ue.sessionInit())
            }, !0)
        }

        static sessionInit() {
            return a.a(this, void 0, void 0, function* () {
                if (E.a.debug("Called %csessionInit()", Object(T.j)("code")), OneSignal._sessionInitAlreadyRunning) return void E.a.debug("Returning from sessionInit because it has already been called.");
                OneSignal._sessionInitAlreadyRunning = !0;
                try {
                    yield Ue.doInitialize()
                } catch (e) {
                    if (e instanceof p) return;
                    throw e
                }
                const e = yield OneSignal.internalIsOptedOut();
                K.setIsOptedOut(!!e), A.a.isUsingSubscriptionWorkaround() || (yield Ue.handleAutoResubscribe(e));
                const t = yield OneSignal.privateIsPushNotificationsEnabled();
                if (K.setIsPushNotificationsEnabled(!!t), OneSignal.config.userConfig.promptOptions.autoPrompt && !e && !t) {
                    const {environmentInfo: e} = OneSignal, {browserType: t, browserVersion: i, requiresUserInteraction: n} = e,
                        o = "chrome" === t && Number(i) >= 63 && (l.a.tablet || l.a.mobile) || n;
                    yield OneSignal.context.promptsManager.internalShowAutoPrompt({forceSlidedownOverNative: o})
                }
                OneSignal._sessionInitAlreadyRunning = !1, yield h.a.trigger(OneSignal.EVENTS.SDK_INITIALIZED)
            })
        }

        static registerForPushNotifications(e = {}) {
            return a.a(this, void 0, void 0, function* () {
                if (e && e.modalPrompt) return OneSignal.subscriptionModalHost = new te(OneSignal.config.appId, e), void (yield OneSignal.subscriptionModalHost.load());
                if (A.a.isUsingSubscriptionWorkaround()) return e.httpPermissionRequest ? void E.a.error(new We(Ee.HttpPermissionRequest)) : void (yield Ue.loadSubscriptionPopup(e));
                K.getIsOptedOut() || (yield Z.registerForPush())
            })
        }

        static onSdkInitialized() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield Ue.processExpiringSubscriptions();
                (yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()) ? (OneSignal.context.sessionManager.setupSessionEventListeners(), e || (yield OneSignal.context.updateManager.sendOnSessionUpdate())) : OneSignal.config.userConfig.promptOptions.autoPrompt || OneSignal.config.userConfig.autoResubscribe || (yield OneSignal.context.updateManager.sendOnSessionUpdate()), yield h.a.trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC)
            })
        }

        static loadSubscriptionPopup(e) {
            return a.a(this, void 0, void 0, function* () {
                OneSignal.subscriptionPopupHost = new Ne(OneSignal.proxyFrameHost.url, e), yield OneSignal.subscriptionPopupHost.load()
            })
        }

        static storeInitialValues() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield OneSignal.privateIsPushNotificationsEnabled(),
                    t = yield OneSignal.privateGetNotificationPermission(), i = yield OneSignal.internalIsOptedOut();
                f.put("subscription.optedOut", i), yield I.a.put("Options", {
                    key: "isPushEnabled",
                    value: e
                }), yield I.a.put("Options", {key: "notificationPermission", value: t})
            })
        }

        static setWelcomeNotificationFlag() {
            return a.a(this, void 0, void 0, function* () {
                (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId)) === k.Granted && (OneSignal.__doNotShowWelcomeNotification = !0)
            })
        }

        static establishServiceWorkerChannel() {
            return a.a(this, void 0, void 0, function* () {
                if (navigator.serviceWorker && "https:" === window.location.protocol && !(yield x.a.isFrameContextInsecure())) try {
                    const e = yield Ae.getRegistration();
                    e && e.active && (yield OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel())
                } catch (e) {
                    E.a.error(e)
                }
            })
        }

        static processExpiringSubscriptions() {
            return a.a(this, void 0, void 0, function* () {
                const e = OneSignal.context;
                if (E.a.debug("Checking subscription expiration..."), !(yield e.subscriptionManager.isSubscriptionExpiring())) return E.a.debug("Subscription is not considered expired."), !1;
                const t = yield x.a.getIntegration(), i = x.a.getWindowEnv();
                switch (E.a.debug("Subscription is considered expiring. Current Integration:", t), t) {
                    case ce.a.Secure:
                        const n = yield e.subscriptionManager.subscribe(1);
                        yield e.subscriptionManager.registerSubscription(n);
                        break;
                    case ce.a.SecureProxy:
                        if (i === _.a.OneSignalProxyFrame) yield this.registerSubscriptionInProxyFrame(e); else {
                            yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS)
                        }
                        break;
                    case ce.a.InsecureProxy:
                        yield I.a.remove("Ids", "registrationId"), E.a.debug("Unsubscribed expiring HTTP subscription by removing registration ID.")
                }
                return !0
            })
        }

        static registerSubscriptionInProxyFrame(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield new Promise(t => {
                    e.workerMessenger.once(ie.SubscribeNew, e => {
                        t(le.a.deserialize(e))
                    }), e.workerMessenger.unicast(ie.SubscribeNew, e.appConfig)
                });
                return E.a.debug("Finished registering brand new subscription:", t), t
            })
        }

        static doInitialize() {
            return a.a(this, void 0, void 0, function* () {
                const e = [];
                e.push(Ue.storeInitialValues()), e.push(Ue.installNativePromptPermissionChangedHook()), e.push(Ue.setWelcomeNotificationFlag()), e.push(Ue.establishServiceWorkerChannel()), e.push(Ue.showNotifyButton()), e.push(Ue.showPromptsFromWebConfigEditor()), OneSignal.context.cookieSyncer.install();
                try {
                    yield Promise.all(e)
                } catch (e) {
                    throw E.a.error(e), new p(s.Unknown)
                }
            })
        }

        static showNotifyButton() {
            return a.a(this, void 0, void 0, function* () {
                if (d.a.isBrowser() && !OneSignal.notifyButton) {
                    OneSignal.config.userConfig.notifyButton = OneSignal.config.userConfig.notifyButton || {}, OneSignal.config.userConfig.bell && (OneSignal.config.userConfig.bell = Object.assign({}, OneSignal.config.userConfig.bell, OneSignal.config.userConfig.notifyButton), OneSignal.config.userConfig.notifyButton = Object.assign({}, OneSignal.config.userConfig.notifyButton, OneSignal.config.userConfig.bell));
                    const e = OneSignal.config.userConfig.notifyButton.displayPredicate;
                    e && "function" == typeof e ? OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, () => a.a(this, void 0, void 0, function* () {
                        !1 !== (yield Promise.resolve(OneSignal.config.userConfig.notifyButton.displayPredicate())) ? (OneSignal.notifyButton = new Se(OneSignal.config.userConfig.notifyButton), OneSignal.notifyButton.create()) : E.a.debug("Notify button display predicate returned false so not showing the notify button.")
                    })) : (OneSignal.notifyButton = new Se(OneSignal.config.userConfig.notifyButton), OneSignal.notifyButton.create())
                }
            })
        }

        static updateEmailSessionCount() {
            return a.a(this, void 0, void 0, function* () {
                const e = OneSignal.context;
                if (e.pageViewManager.isFirstPageView()) {
                    const t = yield I.a.getEmailProfile();
                    if (t.emailId) {
                        const i = new O(t.emailAddress, t.emailAuthHash);
                        i.appId = e.appConfig.appId, yield P.updateUserSession(t.emailId, i)
                    }
                }
            })
        }

        static showPromptsFromWebConfigEditor() {
            return a.a(this, void 0, void 0, function* () {
                const e = OneSignal.config;
                e.userConfig.promptOptions && (yield C.initialize(e.userConfig.promptOptions.customlink))
            })
        }

        static installNativePromptPermissionChangedHook() {
            return a.a(this, void 0, void 0, function* () {
                if (navigator.permissions && !(l.a.firefox && Number(l.a.version) <= 45)) {
                    OneSignal._usingNativePermissionHook = !0, (yield navigator.permissions.query({name: "notifications"})).onchange = function () {
                        Object(T.w)()
                    }
                }
            })
        }

        static saveInitOptions() {
            return a.a(this, void 0, void 0, function* () {
                let e = [];
                const t = OneSignal.config.userConfig.persistNotification;
                e.push(I.a.put("Options", {key: "persistNotification", value: null == t || t}));
                let i = OneSignal.config.userConfig.webhooks;
                return ["notification.displayed", "notification.clicked", "notification.dismissed"].forEach(t => {
                    i && i[t] ? e.push(I.a.put("Options", {
                        key: `webhooks.${t}`,
                        value: i[t]
                    })) : e.push(I.a.put("Options", {key: `webhooks.${t}`, value: !1}))
                }), i && i.cors ? e.push(I.a.put("Options", {
                    key: "webhooks.cors",
                    value: !0
                })) : e.push(I.a.put("Options", {
                    key: "webhooks.cors",
                    value: !1
                })), OneSignal.config.userConfig.notificationClickHandlerMatch ? e.push(I.a.put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: OneSignal.config.userConfig.notificationClickHandlerMatch
                })) : e.push(I.a.put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: "exact"
                })), OneSignal.config.userConfig.notificationClickHandlerAction ? e.push(I.a.put("Options", {
                    key: "notificationClickHandlerAction",
                    value: OneSignal.config.userConfig.notificationClickHandlerAction
                })) : e.push(I.a.put("Options", {
                    key: "notificationClickHandlerAction",
                    value: "navigate"
                })), Promise.all(e)
            })
        }

        static initSaveState(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield X.getAppId();
                yield I.a.put("Ids", {type: "appId", id: t});
                const i = e || document.title || "Notification";
                yield I.a.put("Options", {
                    key: "pageTitle",
                    value: i
                }), E.a.info(`OneSignal: Set pageTitle to be '${i}'.`);
                const n = OneSignal.config;
                yield I.a.put("Options", {key: "emailAuthRequired", value: !!n.emailAuthRequired})
            })
        }

        static handleAutoResubscribe(e) {
            return a.a(this, void 0, void 0, function* () {
                if (E.a.info("handleAutoResubscribe", {
                    autoResubscribe: OneSignal.config.userConfig.autoResubscribe,
                    isOptedOut: e
                }), OneSignal.config.userConfig.autoResubscribe && !e) {
                    (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId)) == k.Granted && (yield Z.registerForPush())
                }
            })
        }

        static polyfillSafariFetch() {
            return a.a(this, void 0, void 0, function* () {
                if (l.a.safari && void 0 === window.fetch) {
                    E.a.debug("Loading fetch polyfill for Safari..");
                    try {
                        yield(new ae).loadFetchPolyfill(), E.a.debug("Done loading fetch polyfill.")
                    } catch (e) {
                        E.a.debug("Error loading fetch polyfill:", e)
                    }
                }
            })
        }

        static errorIfInitAlreadyCalled() {
            if (OneSignal._initCalled) throw new p(s.MultipleInitialization);
            OneSignal._initCalled = !0
        }
    }

    class Be {
        static markHttpsNativePromptDismissed() {
            return a.a(this, void 0, void 0, function* () {
                if (Object(T.o)()) try {
                    yield new Promise((e, t) => {
                        OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, {}, i => {
                            i.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t()
                        })
                    })
                } catch (e) {
                    E.a.debug("Proxy Frame possibly didn't not receive MARK_PROMPT_DISMISSED message", e || "")
                }
                let e = yield I.a.get("Options", "promptDismissCount");
                e || (e = 0), Object(T.o)() || (e += 1);
                let t = 3;
                2 == e ? t = 7 : e > 2 && (t = 30), E.a.debug(`(${x.a.getWindowEnv().toString()}) OneSignal: User dismissed the native notification prompt; reprompt after ${t} days.`), yield I.a.put("Options", {
                    key: "promptDismissCount",
                    value: e
                });
                const i = 24 * t * 60;
                return D.setItem("onesignal-notification-prompt", "dismissed", i)
            })
        }
    }

    class Le {
        constructor(e, t = !1) {
            this.context = e, this.isFeatureEnabled = t
        }

        get PUBLISHER_ID() {
            try {
                return `os!${this.context.appConfig.appId.replace(/-/g, "").substr(0, 15).toLowerCase()}`
            } catch (e) {
                return "os!os"
            }
        }

        getFrameOrigin() {
            return !!this.context.appConfig.subdomain ? new URL(`https://${this.context.appConfig.subdomain}.os.tc`) : new URL(x.a.getOneSignalApiUrl().origin)
        }

        install() {
            return a.a(this, void 0, void 0, function* () {
                if (window.top !== window) return;
                const e = this.getFrameOrigin();
                this.isFeatureEnabled ? (e.pathname = "/webPushAnalytics", e.search = `sync=true&appId=${this.PUBLISHER_ID}`) : e.pathname = "/webPushAnalytics";
                const t = document.createElement("iframe");
                t.style.display = "none", t.src = e.href;
                const i = {promise: void 0, resolver: void 0, rejector: void 0};
                return i.promise = new Promise((e, t) => {
                    i.resolver = e, i.rejector = t
                }), document.body.appendChild(t), t.onload = i.resolver, t.onerror = i.rejector, i.promise
            })
        }
    }

    class Ve {
        constructor() {
            this.incrementedPageViewCount = !1
        }

        getPageViewCount() {
            try {
                const e = sessionStorage.getItem(Ve.SESSION_STORAGE_KEY_NAME), t = e ? parseInt(e) : 0;
                return isNaN(t) ? 0 : t
            } catch (e) {
                return 0
            }
        }

        setPageViewCount(e) {
            try {
                sessionStorage.setItem(Ve.SESSION_STORAGE_KEY_NAME, e.toString()), x.a.getWindowEnv() === _.a.OneSignalSubscriptionPopup && OneSignal.subscriptionPopup && OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT)
            } catch (e) {
            }
        }

        incrementPageViewCount() {
            if (this.incrementedPageViewCount) return;
            const e = this.getPageViewCount() + 1, t = this.getLocalPageViewCount() + 1;
            this.setPageViewCount(e), this.setLocalPageViewCount(t), this.incrementedPageViewCount = !0, E.a.debug(`Incremented page view count: newCountSingleTab: ${e},\n      newCountAccrossTabs: ${t}.`)
        }

        simulatePageNavigationOrRefresh() {
            this.incrementedPageViewCount = !1
        }

        isFirstPageView() {
            return 1 === this.getPageViewCount()
        }

        getLocalPageViewCount() {
            return K.getLocalPageViewCount()
        }

        setLocalPageViewCount(e) {
            K.setLocalPageViewCount(e)
        }
    }

    Ve.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count", (Te = Ie || (Ie = {}))[Te.InvalidSafariSetup = 0] = "InvalidSafariSetup", Te[Te.Blocked = 1] = "Blocked", Te[Te.Dismissed = 2] = "Dismissed";

    class Fe extends u.a {
        constructor(e) {
            switch (e) {
                case Ie.InvalidSafariSetup:
                    super("The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.");
                    break;
                case Ie.Blocked:
                    super("Notification permissions are blocked.");
                    break;
                case Ie.Dismissed:
                    super("The notification permission prompt was dismissed.")
            }
            Object.setPrototypeOf(this, Fe.prototype)
        }
    }

    class He {
        constructor(e, t) {
            this.context = e, this.config = t
        }

        static isSafari() {
            return d.a.isSafari()
        }

        subscribe(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = x.a.getWindowEnv();
                switch (t) {
                    case _.a.CustomIframe:
                    case _.a.Unknown:
                    case _.a.OneSignalProxyFrame:
                        throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                }
                let i;
                switch (t) {
                    case _.a.ServiceWorker:
                        i = yield this.subscribeFcmFromWorker(e);
                        break;
                    case _.a.Host:
                    case _.a.OneSignalSubscriptionModal:
                    case _.a.OneSignalSubscriptionPopup:
                        if ((yield OneSignal.privateGetNotificationPermission()) === k.Denied) throw new F(W.Blocked);
                        if (He.isSafari()) {
                            i = yield this.subscribeSafari(), E.a.info("Installing SW on Safari");
                            try {
                                yield this.context.serviceWorkerManager.installWorker(), E.a.info("SW on Safari successfully installed")
                            } catch (e) {
                                E.a.error("SW on Safari failed to install.")
                            }
                        } else i = yield this.subscribeFcmFromPage(e);
                        break;
                    default:
                        throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                }
                return i
            })
        }

        registerSubscription(e, t) {
            return a.a(this, void 0, void 0, function* () {
                e && (e = H.a.deserialize(e));
                const i = L.a.createFromPushSubscription(this.config.appId, e, t);
                let n = void 0;
                (yield this.isAlreadyRegisteredWithOneSignal()) ? yield this.context.updateManager.sendPlayerUpdate(i) : (n = yield this.context.updateManager.sendPlayerCreate(i)) && (yield this.associateSubscriptionWithEmail(n));
                const o = yield I.a.getSubscription();
                return o.deviceId = n, o.optedOut = !1, e ? He.isSafari() ? o.subscriptionToken = e.safariDeviceToken : o.subscriptionToken = e.w3cEndpoint ? e.w3cEndpoint.toString() : null : o.subscriptionToken = null, yield I.a.setSubscription(o), x.a.getWindowEnv() !== _.a.ServiceWorker && h.a.trigger(OneSignal.EVENTS.REGISTERED), "undefined" != typeof OneSignal && (OneSignal._sessionInitAlreadyRunning = !1), o
            })
        }

        static requestPresubscribeNotificationPermission() {
            return a.a(this, void 0, void 0, function* () {
                return yield He.requestNotificationPermission()
            })
        }

        unsubscribe(e) {
            return a.a(this, void 0, void 0, function* () {
                if (0 === e) throw new b.a;
                if (1 !== e) throw new b.a;
                if (x.a.getWindowEnv() !== _.a.ServiceWorker) throw new b.a;
                {
                    const {deviceId: e} = yield I.a.getSubscription();
                    yield P.updatePlayer(this.context.appConfig.appId, e, {notification_types: B.a.MutedByApi}), yield I.a.put("Options", {
                        key: "optedOut",
                        value: !0
                    })
                }
            })
        }

        static requestNotificationPermission() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield window.Notification.requestPermission();
                return k[e]
            })
        }

        associateSubscriptionWithEmail(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield I.a.getEmailProfile();
                t.emailId && (yield P.updatePlayer(this.config.appId, e, {
                    parent_player_id: t.emailId,
                    email: t.emailAddress
                }))
            })
        }

        isAlreadyRegisteredWithOneSignal() {
            return a.a(this, void 0, void 0, function* () {
                const {deviceId: e} = yield I.a.getSubscription();
                return !!e
            })
        }

        subscribeSafariPromptPermission() {
            return new Promise(e => {
                window.safari.pushNotification.requestPermission(`${x.a.getOneSignalApiUrl().toString()}/safari`, this.config.safariWebId, {app_id: this.config.appId}, t => {
                    t.deviceToken ? e(t.deviceToken.toLowerCase()) : e(null)
                })
            })
        }

        subscribeSafari() {
            return a.a(this, void 0, void 0, function* () {
                const e = new H.a;
                if (!this.config.safariWebId) throw new p(s.MissingSafariWebId);
                const {deviceToken: t} = window.safari.pushNotification.permission(this.config.safariWebId);
                e.existingSafariDeviceToken = t, t || h.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                const i = yield this.subscribeSafariPromptPermission();
                if (V.a.triggerNotificationPermissionChanged(), !i) throw new Fe(Ie.InvalidSafariSetup);
                return e.setFromSafariSubscription(i), e
            })
        }

        subscribeFcmFromPage(e) {
            return a.a(this, void 0, void 0, function* () {
                if (x.a.getWindowEnv() !== _.a.ServiceWorker && window.Notification.permission === k.Default) {
                    yield h.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                    const e = yield He.requestPresubscribeNotificationPermission();
                    switch (e === k.Default && (yield V.a.triggerNotificationPermissionChanged(!0)), e) {
                        case k.Default:
                            throw E.a.debug("Exiting subscription and not registering worker because the permission was dismissed."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new F(W.Dismissed);
                        case k.Denied:
                            throw E.a.debug("Exiting subscription and not registering worker because the permission was blocked."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new F(W.Blocked)
                    }
                }
                try {
                    yield this.context.serviceWorkerManager.installWorker()
                } catch (e) {
                    throw e instanceof Ce && (403 === e.status ? yield this.context.subscriptionManager.registerFailedSubscription(B.a.ServiceWorkerStatus403, this.context) : 404 === e.status && (yield this.context.subscriptionManager.registerFailedSubscription(B.a.ServiceWorkerStatus404, this.context))), e
                }
                E.a.debug("Waiting for the service worker to activate...");
                const t = yield navigator.serviceWorker.ready;
                return E.a.debug("Service worker is ready to continue subscribing."), yield this.subscribeWithVapidKey(t.pushManager, e)
            })
        }

        subscribeFcmFromWorker(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = self.registration;
                if (!t.active && !l.a.firefox) throw new InvalidStateError.a(InvalidStateError.b.ServiceWorkerNotActivated);
                const i = yield t.pushManager.permissionState({userVisibleOnly: !0});
                if ("denied" === i) throw new F(W.Blocked);
                if ("prompt" === i) throw new F(W.Default);
                return yield this.subscribeWithVapidKey(t.pushManager, e)
            })
        }

        getVapidKeyForBrowser() {
            let e = void 0;
            return (e = l.a.firefox ? this.config.onesignalVapidPublicKey : this.config.vapidPublicKey) ? function (e) {
                const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), i = atob(t),
                    n = new Uint8Array(i.length);
                for (let e = 0; e < i.length; ++e) n[e] = i.charCodeAt(e);
                return n
            }(e).buffer : void 0
        }

        subscribeWithVapidKey(e, t) {
            return a.a(this, void 0, void 0, function* () {
                const i = yield e.getSubscription();
                switch (t) {
                    case 0:
                        if (!i) break;
                        i.options ? E.a.debug("[Subscription Manager] An existing push subscription exists and it's options is not null.") : (E.a.debug("[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."), yield He.doPushUnsubscribe(i));
                        break;
                    case 1:
                        i && (yield He.doPushUnsubscribe(i))
                }
                const [n, o] = yield He.doPushSubscribe(e, this.getVapidKeyForBrowser());
                yield He.updateSubscriptionTime(o, n.expirationTime);
                const s = H.a.setFromW3cSubscription(n);
                return i && (s.existingW3cPushSubscription = H.a.setFromW3cSubscription(i)), s
            })
        }

        static updateSubscriptionTime(e, t) {
            return a.a(this, void 0, void 0, function* () {
                const i = yield I.a.getSubscription();
                e && (i.createdAt = (new Date).getTime()), i.expirationTime = t, yield I.a.setSubscription(i)
            })
        }

        static doPushUnsubscribe(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug("[Subscription Manager] Unsubscribing existing push subscription.");
                const t = yield e.unsubscribe();
                return E.a.debug(`[Subscription Manager] Unsubscribing existing push subscription result: ${t}`), t
            })
        }

        static doPushSubscribe(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (!t) throw new Error("Missing required 'applicationServerKey' to subscribe for push notifications!");
                const i = {userVisibleOnly: !0, applicationServerKey: t};
                E.a.debug("[Subscription Manager] Subscribing to web push with these options:", i);
                try {
                    const t = yield e.getSubscription();
                    return [yield e.subscribe(i), !t]
                } catch (t) {
                    if ("InvalidStateError" == t.name) {
                        E.a.warn("[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, unsubscribe and attempting to subscribe with new key.", t);
                        const n = yield e.getSubscription();
                        return n && (yield He.doPushUnsubscribe(n)), [yield e.subscribe(i), !0]
                    }
                    throw t
                }
            })
        }

        isSubscriptionExpiring() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield x.a.getIntegration(), t = x.a.getWindowEnv();
                switch (e) {
                    case ce.a.Secure:
                        return yield this.isSubscriptionExpiringForSecureIntegration();
                    case ce.a.SecureProxy:
                        if (t === _.a.Host) {
                            const e = OneSignal.proxyFrameHost;
                            if (e) return yield e.runCommand(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE);
                            throw new InvalidStateError.a(InvalidStateError.b.NoProxyFrame)
                        }
                        return yield this.isSubscriptionExpiringForSecureIntegration();
                    case ce.a.InsecureProxy:
                        const {expirationTime: i} = yield I.a.getSubscription();
                        return !!i && (new Date).getTime() >= i
                }
            })
        }

        isSubscriptionExpiringForSecureIntegration() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield this.context.serviceWorkerManager.getActiveState();
                if (e !== oe.a.WorkerA && e !== oe.a.WorkerB) return !1;
                const t = yield Ae.getRegistration();
                if (!t) return !1;
                if (!t.pushManager) return !1;
                const i = yield t.pushManager.getSubscription();
                if (!i) return !1;
                if (!i.expirationTime) return !1;
                let {createdAt: n} = yield I.a.getSubscription();
                if (!n) {
                    const e = 31536e6;
                    n = (new Date).getTime() + e
                }
                const o = n + (i.expirationTime - n) / 2;
                return !!i.expirationTime && ((new Date).getTime() >= i.expirationTime || (new Date).getTime() >= o)
            })
        }

        getSubscriptionState() {
            return a.a(this, void 0, void 0, function* () {
                if (He.isSafari()) return this.getSubscriptionStateForSecure();
                const e = x.a.getWindowEnv();
                switch (e) {
                    case _.a.ServiceWorker:
                        const t = yield self.registration.pushManager.getSubscription(), {optedOut: i} = yield I.a.getSubscription();
                        return {subscribed: !!t, optedOut: !!i};
                    default:
                        switch (yield x.a.getIntegration()) {
                            case ce.a.Secure:
                                return this.getSubscriptionStateForSecure();
                            case ce.a.SecureProxy:
                                switch (e) {
                                    case _.a.OneSignalProxyFrame:
                                    case _.a.OneSignalSubscriptionPopup:
                                    case _.a.OneSignalSubscriptionModal:
                                        return this.getSubscriptionStateForSecure();
                                    default:
                                        return yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE)
                                }
                            case ce.a.InsecureProxy:
                                return yield this.getSubscriptionStateForInsecure();
                            default:
                                throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                        }
                }
            })
        }

        getSubscriptionStateForSecure() {
            return a.a(this, void 0, void 0, function* () {
                const {deviceId: e, optedOut: t} = yield I.a.getSubscription();
                if (He.isSafari()) {
                    const i = window.safari.pushNotification.permission(this.config.safariWebId);
                    return {subscribed: !("granted" !== i.permission || !i.deviceToken || !e), optedOut: !!t}
                }
                const i = yield this.context.serviceWorkerManager.getActiveState(), n = yield Ae.getRegistration(),
                    o = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId),
                    s = i === oe.a.WorkerA || i === oe.a.WorkerB;
                return n ? {subscribed: !(!e || o !== k.Granted || !s), optedOut: !!t} : {subscribed: !1, optedOut: !!t}
            })
        }

        getSubscriptionStateForInsecure() {
            return a.a(this, void 0, void 0, function* () {
                const {deviceId: e, subscriptionToken: t, optedOut: i} = yield I.a.getSubscription(),
                    n = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId);
                return {subscribed: !(!e || !t || n !== k.Granted), optedOut: !!i}
            })
        }

        registerFailedSubscription(e, t) {
            return a.a(this, void 0, void 0, function* () {
                t.pageViewManager.isFirstPageView() && (t.subscriptionManager.registerSubscription(new H.a, e), t.pageViewManager.incrementPageViewCount())
            })
        }
    }

    var je = class {
        static getServiceWorkerManager(e) {
            const t = e.appConfig, i = x.a.getBuildEnvPrefix(), n = {
                workerAPath: new ve(`/${i}OneSignalSDKWorker.js`),
                workerBPath: new ve(`/${i}OneSignalSDKUpdaterWorker.js`),
                registrationOptions: {scope: "/"}
            };
            return t.userConfig && (t.userConfig.path && (n.workerAPath = new ve(`${t.userConfig.path}${i}${t.userConfig.serviceWorkerPath}`), n.workerBPath = new ve(`${t.userConfig.path}${i}${t.userConfig.serviceWorkerUpdaterPath}`)), t.userConfig.serviceWorkerParam && (n.registrationOptions = t.userConfig.serviceWorkerParam)), new Ae(e, n)
        }

        static getSubscriptionManager(e) {
            const t = e.appConfig, i = {
                safariWebId: t.safariWebId,
                appId: t.appId,
                vapidPublicKey: t.vapidPublicKey,
                onesignalVapidPublicKey: t.onesignalVapidPublicKey
            };
            return new He(e, i)
        }
    };

    class $e {
        constructor(e) {
            this.context = e, this.onSessionSent = e.pageViewManager.getPageViewCount() > 1
        }

        getDeviceId() {
            return a.a(this, void 0, void 0, function* () {
                const {deviceId: e} = yield I.a.getSubscription();
                if (!e) throw new g(n.NoDeviceId);
                return e
            })
        }

        createDeviceRecord() {
            return a.a(this, void 0, void 0, function* () {
                return X.createDeviceRecord(this.context.appConfig.appId)
            })
        }

        sendPlayerUpdate(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())) return void E.a.debug("Not sending the update because user is not registered with OneSignal (no device id)");
                const t = yield this.getDeviceId();
                e || (e = yield this.createDeviceRecord()), this.onSessionSent ? yield P.updatePlayer(this.context.appConfig.appId, t, Object.assign({notification_types: B.a.Subscribed}, e.serialize())) : yield this.sendOnSessionUpdate(e)
            })
        }

        sendOnSessionUpdate(e) {
            return a.a(this, void 0, void 0, function* () {
                if (this.onSessionSent) return;
                if (!this.context.pageViewManager.isFirstPageView()) return;
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())) return void E.a.debug("Not sending the on session because user is not registered with OneSignal (no device id)");
                const t = yield this.getDeviceId();
                if (e || (e = yield this.createDeviceRecord()), e.subscriptionState === B.a.Subscribed || !0 === OneSignal.config.enableOnSession) try {
                    this.context.sessionManager.upsertSession(t, e, Y.b.PlayerOnSession), this.onSessionSent = !0
                } catch (e) {
                    E.a.error(`Failed to update user session. Error "${e.message}" ${e.stack}`)
                }
            })
        }

        sendPlayerCreate(e) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    const t = yield P.createUser(e);
                    return t ? (E.a.info("Subscribed to web push and registered with OneSignal", e, t), this.onSessionSent = !0, this.context.sessionManager.upsertSession(t, e, Y.b.PlayerCreate), t) : void E.a.error("Failed to create user.")
                } catch (e) {
                    return void E.a.error(`Failed to create user. Error "${e.message}" ${e.stack}`)
                }
            })
        }

        onSessionAlreadyCalled() {
            return this.onSessionSent
        }

        sendExternalUserIdUpdate(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield this.getDeviceId();
                yield P.updatePlayer(this.context.appConfig.appId, t, {external_user_id: w.b.getValueOrDefault(e, "")})
            })
        }

        sendOutcomeDirect(e, t, i, n) {
            return a.a(this, void 0, void 0, function* () {
                const o = yield this.createDeviceRecord(),
                    s = {app_id: e, id: i, device_type: o.deliveryPlatform, notification_ids: t, direct: !0};
                void 0 !== n && (s.weight = n), yield P.sendOutcome(s)
            })
        }

        sendOutcomeInfluenced(e, t, i, n) {
            return a.a(this, void 0, void 0, function* () {
                const o = yield this.createDeviceRecord(),
                    s = {app_id: e, id: i, device_type: o.deliveryPlatform, notification_ids: t, direct: !1};
                void 0 !== n && (s.weight = n), yield P.sendOutcome(s)
            })
        }

        sendOutcomeUnattributed(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                const n = yield this.createDeviceRecord(), o = {app_id: e, id: t, device_type: n.deliveryPlatform};
                void 0 !== i && (o.weight = i), yield P.sendOutcome(o)
            })
        }
    }

    class ze extends u.a {
        constructor() {
            super("This operation can only be performed when the user is not subscribed."), Object.setPrototypeOf(this, ze.prototype)
        }
    }

    class Ge extends u.a {
        constructor() {
            super("The permission message was previously dismissed."), Object.setPrototypeOf(this, Ge.prototype)
        }
    }

    var Ke, qe = i(37);

    class Ye {
        static get EVENTS() {
            return {
                ALLOW_CLICK: "popoverAllowClick",
                CANCEL_CLICK: "popoverCancelClick",
                SHOWN: "popoverShown",
                CLOSED: "popoverClosed"
            }
        }

        constructor(e) {
            e || (e = X.getSlidedownPermissionMessageOptions(OneSignal.config.userConfig.promptOptions)), this.options = e, this.options.actionMessage = e.actionMessage.substring(0, 90), this.options.acceptButtonText = e.acceptButtonText.substring(0, 15), this.options.cancelButtonText = e.cancelButtonText.substring(0, 15), this.notificationIcons = null
        }

        create() {
            return a.a(this, void 0, void 0, function* () {
                if (null === this.notificationIcons) {
                    const e = yield X.getNotificationIcons();
                    this.notificationIcons = e, this.container && Object(T.u)("#onesignal-popover-container");
                    const t = this.getPlatformNotificationIcon();
                    let i = `<div id="normal-popover"><div class="popover-body"><div class="popover-body-icon"><img alt="notification icon" class="${"default-icon" === t ? "default-icon" : ""}" src="${"default-icon" === t ? "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2239.5%22%20height%3D%2240.5%22%20viewBox%3D%220%200%2079%2081%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EOneSignal-Bell%3C%2Ftitle%3E%3Cg%20fill%3D%22%23BBB%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M39.96%2067.12H4.12s-3.2-.32-3.2-3.36%202.72-3.2%202.72-3.2%2010.72-5.12%2010.72-8.8c0-3.68-1.76-6.24-1.76-21.28%200-15.04%209.6-26.56%2021.12-26.56%200%200%201.6-3.84%206.24-3.84%204.48%200%206.08%203.84%206.08%203.84%2011.52%200%2021.12%2011.52%2021.12%2026.56s-1.6%2017.6-1.6%2021.28c0%203.68%2010.72%208.8%2010.72%208.8s2.72.16%202.72%203.2c0%202.88-3.36%203.36-3.36%203.36H39.96zM27%2070.8h24s-1.655%2010.08-11.917%2010.08S27%2070.8%2027%2070.8z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" : t}"></div><div class="popover-body-message">${this.options.actionMessage}</div><div class="clearfix"></div></div><div class="popover-footer"><button id="onesignal-popover-allow-button" class="align-right primary popover-button">${this.options.acceptButtonText}</button><button id="onesignal-popover-cancel-button" class="align-right secondary popover-button">${this.options.cancelButtonText}</button><div class="clearfix"></div></div></div>`;
                    Object(T.b)("body", "beforeend", '<div id="onesignal-popover-container" class="onesignal-popover-container onesignal-reset"></div>'), Object(T.b)(this.container, "beforeend", `<div id="onesignal-popover-dialog" class="onesignal-popover-dialog">${i}</div>`), Object(T.a)(this.container, l.a.mobile ? "slide-up" : "slide-down"), this.allowButton.addEventListener("click", this.onPopoverAllowed.bind(this)), this.cancelButton.addEventListener("click", this.onPopoverCanceled.bind(this)), h.a.trigger(Ye.EVENTS.SHOWN)
                }
            })
        }

        onPopoverAllowed(e) {
            return a.a(this, void 0, void 0, function* () {
                yield h.a.trigger(Ye.EVENTS.ALLOW_CLICK)
            })
        }

        onPopoverCanceled(e) {
            h.a.trigger(Ye.EVENTS.CANCEL_CLICK), this.close()
        }

        close() {
            Object(T.a)(this.container, "close-popover"), Object(T.s)(this.dialog, "animationend", (e, t) => {
                e.target !== this.dialog || "slideDownExit" !== e.animationName && "slideUpExit" !== e.animationName || (Object(T.u)("#onesignal-popover-container"), t(), h.a.trigger(Ye.EVENTS.CLOSED))
            }, !0)
        }

        getPlatformNotificationIcon() {
            return Object(T.k)(this.notificationIcons)
        }

        get container() {
            return document.querySelector("#onesignal-popover-container")
        }

        get dialog() {
            return document.querySelector("#onesignal-popover-dialog")
        }

        get allowButton() {
            return document.querySelector("#onesignal-popover-allow-button")
        }

        get cancelButton() {
            return document.querySelector("#onesignal-popover-cancel-button")
        }
    }

    !function (e) {
        e.Native = "native", e.Slidedown = "slidedown"
    }(Ke || (Ke = {}));
    const Je = {reportingThreshold: 30, enableOnSessionForUnsubcribed: !1, enableOnFocus: !0},
        Ze = {pageViews: 1, timeDelay: 0};

    function Xe() {
        return window.top !== window && "Apple Computer, Inc." === navigator.vendor && "MacIntel" === navigator.platform
    }

    class Qe {
        static getEnvironmentInfo() {
            return {
                browserType: this.getBrowser(),
                browserVersion: this.getBrowserVersion(),
                isHttps: this.isHttps(),
                isUsingSubscriptionWorkaround: this.isUsingSubscriptionWorkaround(),
                isBrowserAndSupportsServiceWorkers: this.supportsServiceWorkers(),
                requiresUserInteraction: this.requiresUserInteraction(),
                osVersion: this.getOsVersion()
            }
        }

        static getBrowser() {
            return l.a.chrome ? q.Chrome : l.a.msedge ? q.Edge : l.a.opera ? q.Opera : l.a.firefox ? q.Firefox : this.isMacOSSafari() ? q.Safari : q.Other
        }

        static isMacOSSafari() {
            return void 0 !== window.safari || Xe()
        }

        static getBrowserVersion() {
            return w.b.parseVersionString(l.a.version)
        }

        static isHttps() {
            return !!window && (window.location && "https:" === window.location.protocol)
        }

        static isUsingSubscriptionWorkaround() {
            return A.a.isUsingSubscriptionWorkaround()
        }

        static supportsServiceWorkers() {
            return window.navigator && "serviceWorker" in window.navigator
        }

        static requiresUserInteraction() {
            return "firefox" === this.getBrowser() && this.getBrowserVersion() >= 72 || "safari" === this.getBrowser() && this.getBrowserVersion() >= 12.1
        }

        static getOsVersion() {
            return l.a.osversion
        }
    }

    class et {
        constructor(e) {
            this.isAutoPromptShowing = !1, this.context = e
        }

        checkIfAutoPromptShouldBeShown(e = {force: !1}) {
            return a.a(this, void 0, void 0, function* () {
                if (this.isAutoPromptShowing) throw new InvalidStateError.a(InvalidStateError.b.RedundantPermissionMessage, {permissionPromptType: qe.a.SlidedownPermissionMessage});
                if (X.wasHttpsNativePromptDismissed() && !e.force) return E.a.info(new Ge), !1;
                if ((yield OneSignal.privateGetNotificationPermission()) === k.Denied) return E.a.info(new F(W.Blocked)), !1;
                if (yield OneSignal.privateIsPushNotificationsEnabled()) throw new ze;
                if (!(yield OneSignal.privateGetSubscription())) throw new g(n.OptedOut);
                return !0
            })
        }

        internalShowAutoPrompt(e = {force: !1, forceSlidedownOverNative: !1}) {
            return a.a(this, void 0, void 0, function* () {
                if (A.b.logMethodCall("internalShowAutoPrompt", e), !OneSignal.config || !OneSignal.config.userConfig || !OneSignal.config.userConfig.promptOptions) return void E.a.error("OneSignal config was not initialized correctly. Aborting.");
                const {forceSlidedownOverNative: t} = e, i = OneSignal.config.userConfig.promptOptions;
                if (!i.native.enabled && !i.slidedown.enabled) return void E.a.error("No suitable prompt type enabled.");
                const n = this.getDelayedPromptOptions(i, Ke.Native), o = this.isPageViewConditionMet(n),
                    s = this.getDelayedPromptOptions(i, Ke.Slidedown), r = this.isPageViewConditionMet(s),
                    a = n.enabled && o, c = s.enabled && r, l = t && a;
                if (!a || l) {
                    if (c || l) {
                        const {timeDelay: t} = c ? s : n;
                        this.internalShowDelayedPrompt(Ke.Slidedown, t || 0, e)
                    }
                } else this.internalShowDelayedPrompt(Ke.Native, n.timeDelay || 0)
            })
        }

        internalShowDelayedPrompt(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                if (A.b.logMethodCall("internalShowDelayedPrompt"), "number" != typeof t) return void E.a.error("internalShowDelayedPrompt: timeDelay not a number");
                const {requiresUserInteraction: n} = Qe.getEnvironmentInfo();
                var o;
                switch (n && e === Ke.Native && (e = Ke.Slidedown), t > 0 && (yield(o = 1e3 * t, new Promise(e => setTimeout(e, o)))), e) {
                    case Ke.Native:
                        this.internalShowNativePrompt();
                        break;
                    case Ke.Slidedown:
                        this.internalShowSlidedownPrompt(i);
                        break;
                    default:
                        E.a.error("Invalid Delayed Prompt type")
                }
            })
        }

        internalShowNativePrompt() {
            return a.a(this, void 0, void 0, function* () {
                A.b.logMethodCall("internalShowNativePrompt"), this.isAutoPromptShowing ? E.a.debug("Already showing autoprompt. Abort showing a native prompt.") : (this.isAutoPromptShowing = !0, X.markHttpPopoverShown(), yield Ue.registerForPushNotifications(), this.isAutoPromptShowing = !1, Be.markHttpsNativePromptDismissed())
            })
        }

        internalShowSlidedownPrompt(e = {force: !1}) {
            return a.a(this, void 0, void 0, function* () {
                if (A.b.logMethodCall("internalShowSlidedownPrompt"), this.isAutoPromptShowing) return void E.a.debug("Already showing autopromt. Abort showing a slidedown.");
                try {
                    if (!(yield this.checkIfAutoPromptShouldBeShown(e))) return
                } catch (e) {
                    return void E.a.warn("checkIfAutoPromptShouldBeShown returned an error", e)
                }
                if (X.markHttpPopoverShown(), 0 !== (yield this.context.dynamicResourceLoader.loadSdkStylesheet())) return void E.a.debug("Not showing slidedown permission message because styles failed to load.");
                const t = X.getSlidedownPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
                this.installEventHooksForPopover(), OneSignal.popover = new Ye(t), yield OneSignal.popover.create(), E.a.debug("Showing Slidedown(Popover).")
            })
        }

        installEventHooksForPopover() {
            !function () {
                const e = OneSignal.notifyButton;
                e && e.options.enable && "hidden" !== OneSignal.notifyButton.launcher.state && OneSignal.notifyButton.launcher.waitUntilShown().then(() => {
                    OneSignal.notifyButton.launcher.hide()
                }), OneSignal.emitter.once(Ye.EVENTS.CLOSED, () => {
                    OneSignal.notifyButton && OneSignal.notifyButton.options.enable && OneSignal.notifyButton.launcher.show()
                })
            }(), OneSignal.emitter.once(Ye.EVENTS.SHOWN, () => {
                this.isAutoPromptShowing = !0
            }), OneSignal.emitter.once(Ye.EVENTS.CLOSED, () => {
                this.isAutoPromptShowing = !1
            }), OneSignal.emitter.once(Ye.EVENTS.ALLOW_CLICK, () => {
                OneSignal.popover && OneSignal.popover.close(), E.a.debug("Setting flag to not show the popover to the user again."), Be.markHttpsNativePromptDismissed();
                const e = {autoAccept: !OneSignal.environmentInfo.requiresUserInteraction};
                Ue.registerForPushNotifications(e)
            }), OneSignal.emitter.once(Ye.EVENTS.CANCEL_CLICK, () => {
                E.a.debug("Setting flag to not show the popover to the user again."), Be.markHttpsNativePromptDismissed()
            })
        }

        isPageViewConditionMet(e) {
            if (!e || void 0 === e.pageViews) return !1;
            if (!e.autoPrompt || !e.enabled) return !1;
            return this.context.pageViewManager.getLocalPageViewCount() >= e.pageViews
        }

        getDelayedPromptOptions(e, t) {
            const i = e[t];
            return e && i ? {
                enabled: i.enabled,
                autoPrompt: i.autoPrompt,
                timeDelay: i.timeDelay,
                pageViews: i.pageViews
            } : {enabled: !1, autoPrompt: !1, timeDelay: Ze.timeDelay, pageViews: Ze.pageViews}
        }
    }

    class tt {
        constructor(e) {
            this.onSessionSent = !1, this.context = e
        }

        notifySWToUpsertSession(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                const n = A.a.isHttps(), o = {
                    deviceId: e,
                    deviceRecord: t.serialize(),
                    sessionThreshold: this.context.appConfig.sessionThreshold || 0,
                    enableSessionDuration: !!this.context.appConfig.enableSessionDuration,
                    sessionOrigin: i,
                    isHttps: n,
                    isSafari: A.a.isSafari(),
                    outcomesConfig: this.context.appConfig.userConfig.outcomes
                };
                this.context.environmentInfo.isBrowserAndSupportsServiceWorkers && !this.context.environmentInfo.isUsingSubscriptionWorkaround ? (E.a.debug("Notify SW to upsert session"), yield this.context.workerMessenger.unicast(ie.SessionUpsert, o)) : this.context.environmentInfo.isUsingSubscriptionWorkaround ? (E.a.debug("Notify iframe to notify SW to upsert session"), yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_UPSERT, o)) : E.a.debug("Notify upsert: do nothing")
            })
        }

        notifySWToDeactivateSession(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                const n = A.a.isHttps(), o = {
                    deviceId: e,
                    deviceRecord: t ? t.serialize() : void 0,
                    sessionThreshold: this.context.appConfig.sessionThreshold,
                    enableSessionDuration: this.context.appConfig.enableSessionDuration,
                    sessionOrigin: i,
                    isHttps: n,
                    isSafari: A.a.isSafari(),
                    outcomesConfig: this.context.appConfig.userConfig.outcomes
                };
                this.context.environmentInfo.isBrowserAndSupportsServiceWorkers && !this.context.environmentInfo.isUsingSubscriptionWorkaround ? (E.a.debug("Notify SW to deactivate session"), yield this.context.workerMessenger.unicast(ie.SessionDeactivate, o)) : this.context.environmentInfo.isUsingSubscriptionWorkaround ? (E.a.debug("Notify SW to deactivate session"), yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, o)) : E.a.debug("Notify deactivate: do nothing")
            })
        }

        handleVisibilityChange() {
            return a.a(this, void 0, void 0, function* () {
                const e = document.visibilityState, [t, i] = yield Promise.all([X.getDeviceId(), X.createDeviceRecord(this.context.appConfig.appId, !0)]);
                if ("visible" === e) return this.setupOnFocusAndOnBlurForSession(), E.a.debug("handleVisibilityChange", "visible", `hasFocus: ${document.hasFocus()}`), void (document.hasFocus() && (yield this.notifySWToUpsertSession(t, i, Y.b.VisibilityVisible)));
                if ("hidden" !== e) E.a.warn("Unhandled visibility state happened", e); else {
                    E.a.debug("handleVisibilityChange", "hidden"), OneSignal.cache.focusHandler && OneSignal.cache.isFocusEventSetup && (window.removeEventListener("focus", OneSignal.cache.focusHandler, !0), OneSignal.cache.isFocusEventSetup = !1), OneSignal.cache.blurHandler && OneSignal.cache.isBlurEventSetup && (window.removeEventListener("blur", OneSignal.cache.blurHandler, !0), OneSignal.cache.isBlurEventSetup = !1);
                    const [e, t] = yield Promise.all([X.getDeviceId(), X.createDeviceRecord(this.context.appConfig.appId)]);
                    yield this.notifySWToDeactivateSession(e, t, Y.b.VisibilityHidden)
                }
            })
        }

        handleOnBeforeUnload() {
            return a.a(this, void 0, void 0, function* () {
                const e = A.a.isHttps(), t = {
                    sessionThreshold: this.context.appConfig.sessionThreshold,
                    enableSessionDuration: this.context.appConfig.enableSessionDuration,
                    sessionOrigin: Y.b.BeforeUnload,
                    isHttps: e,
                    isSafari: A.a.isSafari(),
                    outcomesConfig: this.context.appConfig.userConfig.outcomes
                };
                e ? (E.a.debug("Notify SW to deactivate session (beforeunload)"), this.context.workerMessenger.directPostMessageToSW(ie.SessionDeactivate, t)) : (E.a.debug("Notify iframe to notify SW to deactivate session (beforeunload)"), yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, t))
            })
        }

        handleOnFocus(e) {
            return a.a(this, void 0, void 0, function* () {
                if (E.a.debug("handleOnFocus", e), e.target !== window) return;
                const [t, i] = yield Promise.all([X.getDeviceId(), X.createDeviceRecord(this.context.appConfig.appId, !0)]);
                yield this.notifySWToUpsertSession(t, i, Y.b.Focus)
            })
        }

        handleOnBlur(e) {
            return a.a(this, void 0, void 0, function* () {
                if (E.a.debug("handleOnBlur", e), e.target !== window) return;
                const [t, i] = yield Promise.all([X.getDeviceId(), X.createDeviceRecord(this.context.appConfig.appId)]);
                yield this.notifySWToDeactivateSession(t, i, Y.b.Blur)
            })
        }

        upsertSession(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                const n = this.notifySWToUpsertSession(e, t, i);
                this.context.environmentInfo.isBrowserAndSupportsServiceWorkers || this.context.environmentInfo.isUsingSubscriptionWorkaround ? this.setupSessionEventListeners() : this.context.environmentInfo.isBrowserAndSupportsServiceWorkers || this.context.environmentInfo.isUsingSubscriptionWorkaround || (this.onSessionSent = i === Y.b.PlayerCreate, OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED)), yield n
            })
        }

        setupSessionEventListeners() {
            this.context.environmentInfo.isBrowserAndSupportsServiceWorkers || this.context.environmentInfo.isUsingSubscriptionWorkaround ? (this.setupOnFocusAndOnBlurForSession(), OneSignal.cache.isVisibilityChangeEventSetup || (document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this), !0), OneSignal.cache.isVisibilityChangeEventSetup = !0), OneSignal.cache.isBeforeUnloadEventSetup || (window.addEventListener("beforeunload", e => {
                this.handleOnBeforeUnload(), delete e.returnValue
            }, !0), OneSignal.cache.isBeforeUnloadEventSetup = !0)) : E.a.debug("Not setting session event listeners. No SW possible.")
        }

        setupOnFocusAndOnBlurForSession() {
            E.a.debug("setupOnFocusAndOnBlurForSession"), OneSignal.cache.focusHandler || (OneSignal.cache.focusHandler = this.handleOnFocus.bind(this)), OneSignal.cache.isFocusEventSetup || (window.addEventListener("focus", OneSignal.cache.focusHandler, !0), OneSignal.cache.isFocusEventSetup = !0), OneSignal.cache.blurHandler || (OneSignal.cache.blurHandler = this.handleOnBlur.bind(this)), OneSignal.cache.isBlurEventSetup || (window.addEventListener("blur", OneSignal.cache.blurHandler, !0), OneSignal.cache.isBlurEventSetup = !0)
        }

        static setupSessionEventListenersForHttp() {
            OneSignal.context && OneSignal.context.sessionManager ? OneSignal.context.sessionManager.setupSessionEventListeners() : E.a.error("OneSignal.context not available for http to setup session event listeners.")
        }

        sendOnSessionUpdateFromPage(e) {
            return a.a(this, void 0, void 0, function* () {
                if (this.onSessionSent) return;
                if (!this.context.pageViewManager.isFirstPageView()) return;
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())) return void E.a.debug("Not sending the on session because user is not registered with OneSignal (no device id)");
                const t = yield X.getDeviceId();
                if (e || (e = yield X.createDeviceRecord(this.context.appConfig.appId)), e.subscriptionState === B.a.Subscribed || !0 === OneSignal.config.enableOnSession) try {
                    const i = yield P.updateUserSession(t, e);
                    if (this.onSessionSent = !0, i !== t) {
                        const e = yield I.a.getSubscription();
                        e.deviceId = i, yield I.a.setSubscription(e)
                    }
                } catch (e) {
                    E.a.error(`Failed to update user session. Error "${e.message}" ${e.stack}`)
                }
            })
        }
    }

    class it {
        constructor(e) {
            this.appConfig = e, "undefined" != typeof OneSignal && OneSignal.environmentInfo && (this.environmentInfo = OneSignal.environmentInfo), this.subscriptionManager = je.getSubscriptionManager(this), this.serviceWorkerManager = je.getServiceWorkerManager(this), this.pageViewManager = new Ve, this.permissionManager = new j, this.workerMessenger = new re(this), this.updateManager = new $e(this), this.sessionManager = new tt(this), this.promptsManager = new et(this), this.cookieSyncer = new Le(this, e.cookieSyncEnabled), this.dynamicResourceLoader = new ae, this.metricsManager = new De(e.metrics.enable, e.metrics.mixpanelReportingToken)
        }
    }

    var nt, ot, st, rt, at, ct = i(38), lt = i.n(ct), dt = i(32);

    class ut {
        static getPlayer(e, t) {
            return P.getPlayer(e, t)
        }

        static updatePlayer(e, t, i) {
            return P.updatePlayer(e, t, i)
        }

        static sendNotification(e, t, i, n, o, s, r, a) {
            return P.sendNotification(e, t, i, n, o, s, r, a)
        }

        static jsonpLib(e, t) {
            lt()(e, null, t)
        }

        static downloadServerAppConfig(e) {
            return a.a(this, void 0, void 0, function* () {
                return x.a.getWindowEnv() !== _.a.ServiceWorker ? yield new Promise((t, i) => {
                    ut.jsonpLib(`${x.a.getOneSignalApiUrl().toString()}/sync/${e}/web`, (e, n) => {
                        e ? i(e) : n.success ? t(n) : i(n)
                    })
                }) : yield dt.b.downloadServerAppConfig(e)
            })
        }

        static createUser(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield P.createUser(e)
            })
        }

        static createEmailRecord(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                return yield P.createEmailRecord(e, t, i)
            })
        }

        static updateEmailRecord(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                return yield P.updateEmailRecord(e, t, i)
            })
        }

        static logoutEmail(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                return yield P.logoutEmail(e, t, i)
            })
        }

        static updateUserSession(e, t) {
            return a.a(this, void 0, void 0, function* () {
                return yield P.updateUserSession(e, t)
            })
        }
    }

    !function (e) {
        e.TypicalSite = "typical", e.WordPress = "wordpress", e.Shopify = "shopify", e.Blogger = "blogger", e.Magento = "magento", e.Drupal = "drupal", e.SquareSpace = "squarespace", e.Joomla = "joomla", e.Weebly = "weebly", e.Wix = "wix", e.Custom = "custom"
    }(nt || (nt = {})), function (e) {
        e.Exact = "exact", e.Origin = "origin"
    }(ot || (ot = {})), function (e) {
        e.Navigate = "navigate", e.Focus = "focus"
    }(st || (st = {})), (at = rt || (rt = {}))[at.Dashboard = 0] = "Dashboard", at[at.JavaScript = 1] = "JavaScript";

    class gt {
        static getAppConfig(e, t) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    if (!e || !e.appId || !A.b.isValidUuid(e.appId)) throw new p(s.InvalidAppId);
                    const i = yield t(e.appId), n = this.getMergedConfig(e, i);
                    return this.checkRestrictedOrigin(n), n
                } catch (e) {
                    if (e) {
                        if (1 === e.code) throw new p(s.InvalidAppId);
                        if (2 === e.code) throw new p(s.AppNotConfiguredForWebPush)
                    }
                    throw e
                }
            })
        }

        static checkRestrictedOrigin(e) {
            if (e.restrictedOriginEnabled && x.a.getWindowEnv() !== _.a.ServiceWorker && window.top === window && !w.b.contains(window.location.hostname, ".os.tc") && !w.b.contains(window.location.hostname, ".onesignal.com") && !this.doesCurrentOriginMatchConfigOrigin(e.origin)) throw new p(s.WrongSiteUrl, {siteUrl: e.origin})
        }

        static doesCurrentOriginMatchConfigOrigin(e) {
            try {
                return location.origin === new URL(e).origin
            } catch (e) {
                return !1
            }
        }

        static getIntegrationCapabilities(e) {
            switch (e) {
                case nt.Custom:
                case nt.WordPress:
                    return {configuration: rt.JavaScript};
                default:
                    return {configuration: rt.Dashboard}
            }
        }

        static getMergedConfig(e, t) {
            const i = this.getConfigIntegrationKind(t), n = this.getSubdomainForConfigIntegrationKind(i, e, t),
                o = t.config.setupBehavior ? t.config.setupBehavior.allowLocalhostAsSecureOrigin : e.allowLocalhostAsSecureOrigin,
                s = A.b.internalIsUsingSubscriptionWorkaround(n, o),
                r = this.getUserConfigForConfigIntegrationKind(i, e, t, s);
            return {
                appId: t.app_id,
                subdomain: n,
                origin: t.config.origin,
                httpUseOneSignalCom: t.config.http_use_onesignal_com,
                cookieSyncEnabled: t.features.cookie_sync.enable,
                restrictedOriginEnabled: t.features.restrict_origin && t.features.restrict_origin.enable,
                metrics: {
                    enable: t.features.metrics.enable,
                    mixpanelReportingToken: t.features.metrics.mixpanel_reporting_token
                },
                safariWebId: t.config.safari_web_id,
                vapidPublicKey: t.config.vapid_public_key,
                onesignalVapidPublicKey: t.config.onesignal_vapid_public_key,
                emailAuthRequired: t.features.email && t.features.email.require_auth,
                userConfig: r,
                receiveReceiptsEnable: t.features.receive_receipts_enable || !1,
                enableOnSession: w.b.valueOrDefault(t.features.enable_on_session, Je.enableOnSessionForUnsubcribed),
                sessionThreshold: w.b.valueOrDefault(t.features.session_threshold, Je.reportingThreshold),
                enableSessionDuration: w.b.valueOrDefault(t.features.web_on_focus_enabled, Je.enableOnFocus)
            }
        }

        static getConfigIntegrationKind(e) {
            return e.config.integration ? e.config.integration.kind : nt.Custom
        }

        static getCustomLinkConfig(e) {
            const t = {
                enabled: !1,
                style: "button",
                size: "medium",
                unsubscribeEnabled: !1,
                text: {explanation: "", subscribe: "", unsubscribe: ""},
                color: {button: "", text: ""}
            };
            if (!(e && e.config && e.config.staticPrompts && e.config.staticPrompts.customlink && e.config.staticPrompts.customlink.enabled)) return t;
            const i = e.config.staticPrompts.customlink;
            return {
                enabled: i.enabled,
                style: i.style,
                size: i.size,
                unsubscribeEnabled: i.unsubscribeEnabled,
                text: i.text ? {
                    subscribe: i.text.subscribe,
                    unsubscribe: i.text.unsubscribe,
                    explanation: i.text.explanation
                } : t.text,
                color: i.color ? {button: i.color.button, text: i.color.text} : t.color
            }
        }

        static injectDefaultsIntoPromptOptions(e, t, i, n = !1) {
            let o = {enabled: !1};
            e && e.customlink && (o = e.customlink);
            const s = t.customlink, r = Object.assign({}, e, {
                customlink: {
                    enabled: w.b.getValueOrDefault(o.enabled, s.enabled),
                    style: w.b.getValueOrDefault(o.style, s.style),
                    size: w.b.getValueOrDefault(o.size, s.size),
                    unsubscribeEnabled: w.b.getValueOrDefault(o.unsubscribeEnabled, s.unsubscribeEnabled),
                    text: {
                        subscribe: w.b.getValueOrDefault(o.text ? o.text.subscribe : void 0, s.text.subscribe),
                        unsubscribe: w.b.getValueOrDefault(o.text ? o.text.unsubscribe : void 0, s.text.unsubscribe),
                        explanation: w.b.getValueOrDefault(o.text ? o.text.explanation : void 0, s.text.explanation)
                    },
                    color: {
                        button: w.b.getValueOrDefault(o.color ? o.color.button : void 0, s.color.button),
                        text: w.b.getValueOrDefault(o.color ? o.color.text : void 0, s.color.text)
                    }
                }
            });
            return r.slidedown ? (r.slidedown.enabled = !!r.slidedown.enabled, r.slidedown.autoPrompt = r.slidedown.hasOwnProperty("autoPrompt") ? !!r.slidedown.enabled && !!r.slidedown.autoPrompt : !!r.slidedown.enabled, r.slidedown.pageViews = w.b.getValueOrDefault(r.slidedown.pageViews, Ze.pageViews), r.slidedown.timeDelay = w.b.getValueOrDefault(r.slidedown.timeDelay, Ze.timeDelay)) : (r.slidedown = X.getSlidedownPermissionMessageOptions(r), r.slidedown.enabled = !1, r.slidedown.autoPrompt = !1, r.slidedown.pageViews = Ze.pageViews, r.slidedown.timeDelay = Ze.timeDelay), r.native ? (r.native.enabled = !!r.native.enabled, r.native.autoPrompt = r.native.hasOwnProperty("autoPrompt") ? !!r.native.enabled && !!r.native.autoPrompt : !!r.native.enabled, r.native.pageViews = w.b.getValueOrDefault(r.native.pageViews, Ze.pageViews), r.native.timeDelay = w.b.getValueOrDefault(r.native.timeDelay, Ze.timeDelay)) : r.native = {
                enabled: !1,
                autoPrompt: !1,
                pageViews: Ze.pageViews,
                timeDelay: Ze.timeDelay
            }, !0 === i.autoRegister && (n ? (r.native.enabled = !1, r.native.autoPrompt = !1, r.slidedown.enabled = !0, r.slidedown.autoPrompt = !0) : (r.native.enabled = !0, r.native.autoPrompt = !0)), r.autoPrompt = r.native.autoPrompt || r.slidedown.autoPrompt, r
        }

        static getPromptOptionsForDashboardConfiguration(e) {
            const t = e.config.staticPrompts, i = t.native ? {
                enabled: t.native.enabled,
                autoPrompt: t.native.enabled && !1 !== t.native.autoPrompt,
                pageViews: w.b.getValueOrDefault(t.native.pageViews, Ze.pageViews),
                timeDelay: w.b.getValueOrDefault(t.native.timeDelay, Ze.timeDelay)
            } : {enabled: !1, autoPrompt: !1, pageViews: Ze.pageViews, timeDelay: Ze.timeDelay}, n = {
                enabled: t.slidedown.enabled,
                autoPrompt: t.slidedown.enabled && !1 !== t.slidedown.autoPrompt,
                pageViews: w.b.getValueOrDefault(t.slidedown.pageViews, Ze.pageViews),
                timeDelay: w.b.getValueOrDefault(t.slidedown.timeDelay, Ze.timeDelay),
                actionMessage: t.slidedown.actionMessage,
                acceptButtonText: t.slidedown.acceptButton,
                cancelButtonText: t.slidedown.cancelButton
            };
            return {
                autoPrompt: i.autoPrompt || n.autoPrompt,
                native: i,
                slidedown: n,
                fullscreen: {
                    enabled: t.fullscreen.enabled,
                    actionMessage: t.fullscreen.actionMessage,
                    acceptButton: t.fullscreen.acceptButton,
                    cancelButton: t.fullscreen.cancelButton,
                    title: t.fullscreen.title,
                    message: t.fullscreen.message,
                    caption: t.fullscreen.caption,
                    autoAcceptTitle: t.fullscreen.autoAcceptTitle
                },
                customlink: this.getCustomLinkConfig(e)
            }
        }

        static getUserConfigForConfigIntegrationKind(e, t, i, n = !1) {
            switch (this.getIntegrationCapabilities(e).configuration) {
                case rt.Dashboard:
                    return {
                        appId: i.app_id,
                        autoRegister: !1,
                        autoResubscribe: i.config.autoResubscribe,
                        path: i.config.serviceWorker.path,
                        serviceWorkerPath: i.config.serviceWorker.workerName,
                        serviceWorkerUpdaterPath: i.config.serviceWorker.updaterWorkerName,
                        serviceWorkerParam: {scope: i.config.serviceWorker.registrationScope},
                        subdomainName: i.config.siteInfo.proxyOrigin,
                        promptOptions: this.getPromptOptionsForDashboardConfiguration(i),
                        welcomeNotification: {
                            disable: !i.config.welcomeNotification.enable,
                            title: i.config.welcomeNotification.title,
                            message: i.config.welcomeNotification.message,
                            url: i.config.welcomeNotification.url
                        },
                        notifyButton: {
                            enable: i.config.staticPrompts.bell.enabled,
                            displayPredicate: i.config.staticPrompts.bell.hideWhenSubscribed ? () => OneSignal.isPushNotificationsEnabled().then(e => !e) : null,
                            size: i.config.staticPrompts.bell.size,
                            position: i.config.staticPrompts.bell.location,
                            showCredit: !1,
                            offset: {
                                bottom: `${i.config.staticPrompts.bell.offset.bottom}px`,
                                left: `${i.config.staticPrompts.bell.offset.left}px`,
                                right: `${i.config.staticPrompts.bell.offset.right}px`
                            },
                            colors: {
                                "circle.background": i.config.staticPrompts.bell.color.main,
                                "circle.foreground": i.config.staticPrompts.bell.color.accent,
                                "badge.background": "black",
                                "badge.foreground": "white",
                                "badge.bordercolor": "black",
                                "pulse.color": i.config.staticPrompts.bell.color.accent,
                                "dialog.button.background.hovering": i.config.staticPrompts.bell.color.main,
                                "dialog.button.background.active": i.config.staticPrompts.bell.color.main,
                                "dialog.button.background": i.config.staticPrompts.bell.color.main,
                                "dialog.button.foreground": "white"
                            },
                            text: {
                                "tip.state.unsubscribed": i.config.staticPrompts.bell.tooltip.unsubscribed,
                                "tip.state.subscribed": i.config.staticPrompts.bell.tooltip.subscribed,
                                "tip.state.blocked": i.config.staticPrompts.bell.tooltip.blocked,
                                "message.prenotify": i.config.staticPrompts.bell.tooltip.unsubscribed,
                                "message.action.subscribing": i.config.staticPrompts.bell.message.subscribing,
                                "message.action.subscribed": i.config.staticPrompts.bell.message.subscribing,
                                "message.action.resubscribed": i.config.staticPrompts.bell.message.subscribing,
                                "message.action.unsubscribed": i.config.staticPrompts.bell.message.unsubscribing,
                                "dialog.main.title": i.config.staticPrompts.bell.dialog.main.title,
                                "dialog.main.button.subscribe": i.config.staticPrompts.bell.dialog.main.subscribeButton,
                                "dialog.main.button.unsubscribe": i.config.staticPrompts.bell.dialog.main.unsubscribeButton,
                                "dialog.blocked.title": i.config.staticPrompts.bell.dialog.blocked.title,
                                "dialog.blocked.message": i.config.staticPrompts.bell.dialog.blocked.message
                            }
                        },
                        persistNotification: i.config.notificationBehavior ? i.config.notificationBehavior.display.persist : void 0,
                        webhooks: {
                            cors: i.config.webhooks.corsEnable,
                            "notification.displayed": i.config.webhooks.notificationDisplayedHook,
                            "notification.clicked": i.config.webhooks.notificationClickedHook,
                            "notification.dismissed": i.config.webhooks.notificationDismissedHook
                        },
                        notificationClickHandlerMatch: i.config.notificationBehavior ? i.config.notificationBehavior.click.match : void 0,
                        notificationClickHandlerAction: i.config.notificationBehavior ? i.config.notificationBehavior.click.action : void 0,
                        allowLocalhostAsSecureOrigin: i.config.setupBehavior ? i.config.setupBehavior.allowLocalhostAsSecureOrigin : void 0,
                        requiresUserPrivacyConsent: t.requiresUserPrivacyConsent,
                        outcomes: {
                            direct: i.config.outcomes.direct,
                            indirect: {
                                enabled: i.config.outcomes.indirect.enabled,
                                influencedTimePeriodMin: i.config.outcomes.indirect.notification_attribution.minutes_since_displayed,
                                influencedNotificationsLimit: i.config.outcomes.indirect.notification_attribution.limit
                            },
                            unattributed: i.config.outcomes.unattributed
                        }
                    };
                case rt.JavaScript:
                    const o = Object.assign({}, t, {promptOptions: this.injectDefaultsIntoPromptOptions(t.promptOptions, i.config.staticPrompts, t, n)}, {
                        serviceWorkerParam: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PARAM ? OneSignal.SERVICE_WORKER_PARAM : {scope: "/"},
                        serviceWorkerPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PATH ? OneSignal.SERVICE_WORKER_PATH : "OneSignalSDKWorker.js",
                        serviceWorkerUpdaterPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_UPDATER_PATH ? OneSignal.SERVICE_WORKER_UPDATER_PATH : "OneSignalSDUpdaterKWorker.js",
                        path: t.path ? t.path : "/"
                    }, {
                        outcomes: {
                            direct: i.config.outcomes.direct,
                            indirect: {
                                enabled: i.config.outcomes.indirect.enabled,
                                influencedTimePeriodMin: i.config.outcomes.indirect.notification_attribution.minutes_since_displayed,
                                influencedNotificationsLimit: i.config.outcomes.indirect.notification_attribution.limit
                            },
                            unattributed: i.config.outcomes.unattributed
                        }
                    });
                    return t.hasOwnProperty("autoResubscribe") ? o.autoResubscribe = !!t.autoResubscribe : t.hasOwnProperty("autoRegister") ? o.autoResubscribe = !!t.autoRegister : o.autoResubscribe = !!i.config.autoResubscribe, o
            }
        }

        static getSubdomainForConfigIntegrationKind(e, t, i) {
            const n = this.getIntegrationCapabilities(e), o = t.subdomainName;
            let s = "";
            switch (n.configuration) {
                case rt.Dashboard:
                    s = i.config.siteInfo.proxyOriginEnabled ? i.config.siteInfo.proxyOrigin : void 0;
                    break;
                case rt.JavaScript:
                    s = i.config.subdomain
            }
            return s && !this.shouldUseServerConfigSubdomain(o, n) ? void 0 : s
        }

        static shouldUseServerConfigSubdomain(e, t) {
            switch (t.configuration) {
                case rt.Dashboard:
                    return !0;
                case rt.JavaScript:
                    switch (location.protocol) {
                        case"https:":
                            return !!e;
                        case"http:":
                            return !0;
                        default:
                            return !1
                    }
            }
        }
    }

    class pt {
        getAppConfig(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield gt.getAppConfig(e, ut.downloadServerAppConfig)
            })
        }

        getMergedConfig(e, t) {
            return gt.getMergedConfig(e, t)
        }
    }

    class ht {
        constructor(e) {
            this.options = {
                appId: e.appId,
                subdomain: e.subdomainName,
                origin: e.origin,
                metrics: {enable: !1, mixpanelReportingToken: null},
                userConfig: {}
            }
        }

        initialize() {
            return a.a(this, void 0, void 0, function* () {
                if ((window.opener || window.parent) == window) return document.write("<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and must be opened as a result of a subscription call.</span>"), Promise.resolve();
                const e = Object.assign({}, this.options);
                e.appId = e.appId, e.subdomainName = e.subdomain, e.origin = e.origin, OneSignal.config = e || {};
                const t = yield(new pt).getAppConfig(e);
                return OneSignal.environmentInfo = Qe.getEnvironmentInfo(), OneSignal.context = new it(t), OneSignal.context.workerMessenger.listen(!0), OneSignal.initialized = !0, this.loadPromise = {}, this.loadPromise.promise = new Promise((e, t) => {
                    this.loadPromise.resolver = e, this.loadPromise.rejector = t
                }), this.establishCrossOriginMessaging(), this.loadPromise.promise
            })
        }

        establishCrossOriginMessaging() {
        }

        dispose() {
            this.messenger.destroy()
        }

        finishInitialization() {
            this.loadPromise.resolver()
        }

        subscribe() {
            return a.a(this, void 0, void 0, function* () {
                const e = K.getIsPushNotificationsEnabled(), t = opener || parent;
                e ? t && window.close() : Z.registerForPush()
            })
        }
    }

    class ft extends ht {
        initialize() {
            const e = super.initialize();
            return h.a.trigger("httpInitialize"), e
        }

        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(), this.messenger = new ee(window, this.options.origin, this.options.origin), this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, this.onProxyFrameInitializing.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, this.onRemoteNotificationPermission.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, this.onRemoteDatabaseGet.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET_ALL, this.onRemoteDatabaseGetAll.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, this.onRemoteDatabasePut.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, this.onRemoteDatabaseRemove.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, this.onUnsubscribeFromPush.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, this.onMarkPromptDismissed.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, this.onIsSubscribed.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, this.onUnsubscribeProxyFrame.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, this.onServiceWorkerState.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION, this.onWorkerVersion.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE, this.onSubscriptionExpirationState.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS, this.onProcessExpiringSubscriptions.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE, this.onGetSubscriptionState.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SESSION_UPSERT, this.onSessionUpsert.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, this.onSessionDeactivate.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, this.onAreYouVisibleRequest.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_RESPONSE, this.onAreYouVisibleResponse.bind(this)), this.messenger.listen()
        }

        retriggerRemoteEvent(e, t) {
            this.messenger.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {eventName: e, eventData: t})
        }

        onMessengerConnect(e) {
            return a.a(this, void 0, void 0, function* () {
                return E.a.debug(`(${x.a.getWindowEnv().toString()}) Successfully established cross-origin communication.`), this.finishInitialization(), !1
            })
        }

        onProxyFrameInitializing(e) {
            return a.a(this, void 0, void 0, function* () {
                if (E.a.info(`(${x.a.getWindowEnv().toString()}) The iFrame has just received initOptions from the host page!`), OneSignal.config = Object.assign({}, e.data.hostInitOptions, OneSignal.config, {
                    pageUrl: e.data.pageUrl,
                    pageTitle: e.data.pageTitle
                }), Ue.installNativePromptPermissionChangedHook(), (yield I.a.get("Options", "defaultUrl")) || (yield I.a.put("Options", {
                    key: "defaultUrl",
                    value: new URL(OneSignal.config.pageUrl).origin
                })), yield I.a.put("Options", {
                    key: "lastKnownHostUrl",
                    value: OneSignal.config.pageUrl
                }), yield Ue.initSaveState(OneSignal.config.pageTitle), yield Ue.storeInitialValues(), yield Ue.saveInitOptions(), navigator.serviceWorker && "https:" === window.location.protocol) try {
                    OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel()
                } catch (e) {
                    E.a.error("Error interacting with Service Worker inside an HTTP-hosted iFrame:", e)
                }
                e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
            })
        }

        onRemoteNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = OneSignal.context,
                    i = yield t.permissionManager.getReportedNotificationPermission(t.appConfig.safariWebId);
                return e.reply(i), !1
            })
        }

        onRemoteDatabaseGet(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.data, i = [];
                for (let e of t) {
                    const {table: t, key: n} = e;
                    i.push(I.a.get(t, n))
                }
                const n = yield Promise.all(i);
                return e.reply(n), !1
            })
        }

        onRemoteDatabaseGetAll(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.data.table, i = yield I.a.getAll(t);
                return e.reply(i), !1
            })
        }

        onRemoteDatabasePut(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.data;
                let i = [];
                for (let e of t) {
                    let {table: t, keypath: n} = e;
                    i.push(I.a.put(t, n))
                }
                return yield Promise.all(i), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }

        onRemoteDatabaseRemove(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.data;
                let i = [];
                for (let e of t) {
                    let {table: t, keypath: n} = e;
                    i.push(I.a.remove(t, n))
                }
                return yield Promise.all(i), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }

        onUnsubscribeFromPush(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug("(Reposted from iFrame -> Host) User unsubscribed but permission granted. Re-prompting the user for push.");
                try {
                    yield Object(T.x)(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                } catch (e) {
                    E.a.debug("Failed to unsubscribe from push remotely:", e)
                }
            })
        }

        onMarkPromptDismissed(e) {
            return a.a(this, void 0, void 0, function* () {
                return E.a.debug("(Reposted from iFrame -> Host) Marking prompt as dismissed."), yield Be.markHttpsNativePromptDismissed(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }

        onIsSubscribed(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.isPushNotificationsEnabled();
                return e.reply(t), !1
            })
        }

        onUnsubscribeProxyFrame(e) {
            return a.a(this, void 0, void 0, function* () {
                return (yield OneSignal.isPushNotificationsEnabled()) && (yield OneSignal.setSubscription(!1), yield OneSignal.database.rebuild()), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }

        onServiceWorkerState(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.context.serviceWorkerManager.getActiveState();
                return e.reply(t), !1
            })
        }

        onWorkerVersion(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.context.serviceWorkerManager.getWorkerVersion();
                return e.reply(t), !1
            })
        }

        onSubscriptionExpirationState(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.context.subscriptionManager.isSubscriptionExpiring();
                return e.reply(t), !1
            })
        }

        onProcessExpiringSubscriptions(e) {
            return a.a(this, void 0, void 0, function* () {
                OneSignal.context, yield Ue.processExpiringSubscriptions();
                return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }

        onGetSubscriptionState(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.context.subscriptionManager.getSubscriptionState();
                return e.reply(t), !1
            })
        }

        onSessionUpsert(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = OneSignal.context, i = e.data;
                t.workerMessenger.directPostMessageToSW(ie.SessionUpsert, i), e.reply(!0)
            })
        }

        onSessionDeactivate(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = OneSignal.context, i = e.data;
                t.workerMessenger.directPostMessageToSW(ie.SessionDeactivate, i), e.reply(!0)
            })
        }

        onAreYouVisibleRequest(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug("onAreYouVisibleRequest iframe", e)
            })
        }

        onAreYouVisibleResponse(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug("onAreYouVisibleResponse iframe", e);
                const t = OneSignal.context, i = e.data;
                t.workerMessenger.directPostMessageToSW(ie.AreYouVisibleResponse, i), e.reply(!0)
            })
        }
    }

    class mt extends ht {
        constructor(e) {
            super(e)
        }

        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(), this.messenger = new ee(window.parent, this.options.origin, this.options.origin)
        }
    }

    class bt extends ht {
        constructor(e) {
            super(e)
        }

        establishCrossOriginMessaging() {
            this.messenger = new ee(window.opener, this.options.origin, this.options.origin), this.messenger.once(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnected.bind(this)), this.messenger.postMessage(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, null), this.messenger.listen()
        }

        onMessengerConnected(e) {
            E.a.debug(`(${x.a.getWindowEnv().toString()}) The host page is now ready to receive commands from the HTTP popup.`), this.finishInitialization()
        }
    }

    class St {
        static initHttp(e) {
            return a.a(this, void 0, void 0, function* () {
                switch (E.a.debug(`Called %cinitHttp(${JSON.stringify(e, null, 4)})`, Object(T.j)("code")), x.a.getWindowEnv()) {
                    case _.a.OneSignalProxyFrame:
                        OneSignal.proxyFrame = new ft(e), yield OneSignal.proxyFrame.initialize(), R.ensureBackwardsCompatibility(OneSignal);
                        break;
                    case _.a.OneSignalSubscriptionPopup:
                        OneSignal.subscriptionPopup = new bt(e), yield OneSignal.subscriptionPopup.initialize(), R.ensureBackwardsCompatibility(OneSignal), h.a.trigger("httpInitialize");
                        break;
                    case _.a.OneSignalSubscriptionModal:
                        OneSignal.subscriptionModal = new mt(e), OneSignal.subscriptionModal.establishCrossOriginMessaging(), OneSignal.subscriptionModal.initialize(), R.ensureBackwardsCompatibility(OneSignal), h.a.trigger("httpInitialize");
                        break;
                    default:
                        E.a.error("Unsupported HTTP initialization branch.")
                }
            })
        }
    }

    var vt = i(15);

    class Ot {
        static get LOAD_TIMEOUT_MS() {
            return 15e3
        }

        constructor(e) {
            this.url = e, this.url.pathname = "webPushIframe"
        }

        load() {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug("Opening an iFrame to", this.url.toString()), this.removeFrame();
                const e = document.createElement("iframe");
                return e.style.display = "none", e.src = this.url.toString(), e.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation", this.loadPromise = {}, this.loadPromise.promise = new Promise((e, t) => {
                    this.loadPromise.resolver = e, this.loadPromise.rejector = t
                }), document.body.appendChild(e), e.onload = this.onFrameLoad.bind(this), this.element = e, Object(T.v)(this.loadPromise.promise, Ot.LOAD_TIMEOUT_MS).catch(() => {
                    window === window.top && E.a.warn(`OneSignal: Loading the required iFrame ${this.url.toString()} timed out. Check that the Site URL onesignal.com dashboard web config is ${location.origin}. Only the Site URL specified there is allowed to use load the iFrame.`)
                }), this.loadPromise.promise
            })
        }

        removeFrame() {
            if (!d.a.isBrowser()) return;
            const e = document.querySelector(`iframe[src='${this.url.toString()}']`);
            e && e.remove()
        }

        onFrameLoad(e) {
            this.establishCrossOriginMessaging()
        }

        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(), this.messenger = new ee(this.element.contentWindow, this.url.toString(), this.url.toString()), this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, this.onRemoteNotificationPermissionChanged.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REQUEST_HOST_URL, this.onRequestHostUrl.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, this.onServiceWorkerCommandRedirect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, this.onGetEventListenerCount.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, this.onAreYouVisibleRequest.bind(this)), this.messenger.connect()
        }

        dispose() {
            this.messenger && this.messenger.destroy(), this.removeFrame()
        }

        onMessengerConnect(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug(`Successfully established cross-origin communication for iFrame at ${this.url.toString()}`), this.messenger.message(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, {
                    hostInitOptions: JSON.parse(JSON.stringify(OneSignal.config)),
                    pageUrl: window.location.href,
                    pageTitle: document.title
                }, e => (e.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE && this.loadPromise.resolver(), !1))
            })
        }

        onRemoteRetriggerEvent(e) {
            let {eventName: t, eventData: i} = e.data;
            return h.a.trigger(t, i, e.source), !1
        }

        onRemoteNotificationPermissionChanged(e) {
            let {forceUpdatePermission: t} = e.data;
            return Object(T.w)(t), !1
        }

        onRequestHostUrl(e) {
            return e.reply(location.href), !1
        }

        onServiceWorkerCommandRedirect(e) {
            const t = e.data;
            return t && t.startsWith("http") && (window.location.href = t), !1
        }

        onGetEventListenerCount(e) {
            const t = e.data;
            return E.a.debug("(Reposted from iFrame -> Host) Getting event listener count for ", t), e.reply(OneSignal.emitter.numberOfListeners(t)), !1
        }

        isSubscribed() {
            return new Promise(e => {
                this.messenger.message(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, null, t => {
                    e(t.data)
                })
            })
        }

        unsubscribeFromPush() {
            return new Promise(e => {
                this.messenger.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, null, t => {
                    e()
                })
            })
        }

        getProxyServiceWorkerActiveState() {
            return new Promise((e, t) => {
                this.message(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, null, t => {
                    e(t.data)
                })
            })
        }

        runCommand(e, t = null) {
            return a.a(this, void 0, void 0, function* () {
                return yield new Promise((i, n) => {
                    this.message(e, t, e => {
                        i(e.data)
                    })
                })
            })
        }

        onAreYouVisibleRequest(e) {
            E.a.debug("onAreYouVisibleRequest page", e);
            const t = {timestamp: e.data.timestamp, focused: document.hasFocus()};
            this.message(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_RESPONSE, t)
        }

        message(...e) {
            this.messenger.message.apply(this.messenger, arguments)
        }
    }

    class yt {
        constructor() {
        }

        static discoverAltOrigin(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yt.getOneSignalProxyIframeUrls(e), i = [];
                for (const e of t) {
                    const t = new Ot(e);
                    yield t.load(), i.push(t)
                }
                const n = yield yt.subscribedProxyFrameHosts(i);
                let o;
                yield yt.removeDuplicatedAltOriginSubscription(n), o = 0 === n.length ? i[0] : n[0];
                for (const e of i) o !== e && e.dispose();
                return o
            })
        }

        static subscribedProxyFrameHosts(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = [];
                for (const i of e) (yield i.isSubscribed()) && t.push(i);
                return t
            })
        }

        static removeDuplicatedAltOriginSubscription(e) {
            return a.a(this, void 0, void 0, function* () {
                if (e.length < 2) return;
                const t = e.slice(1);
                for (const e of t) yield e.unsubscribeFromPush()
            })
        }

        static getCanonicalSubscriptionUrls(e, t = x.a.getApiEnv()) {
            const i = yt.getWildcardLegacySubscriptionDomain(t), n = new URL(`https://${e.subdomain}.${i}`);
            if (t !== vt.a.Production) return [n];
            const o = [new URL(`https://${e.subdomain}.os.tc`)];
            return e.httpUseOneSignalCom && o.push(n), o
        }

        static getWildcardLegacySubscriptionDomain(e) {
            const t = x.a.getOneSignalApiUrl(e);
            let i = 2;
            return e === vt.a.Staging && (i = 3), w.a.lastParts(t.host, ".", i)
        }

        static getOneSignalProxyIframeUrls(e) {
            const t = yt.getCanonicalSubscriptionUrls(e);
            for (const e of t) e.pathname = "webPushIframe";
            return t
        }
    }

    var wt = i(36);

    class Et {
        static isValidUrl(e, t) {
            if (t && t.allowNull && null === e) return !0;
            if (t && t.allowEmpty && (null === e || void 0 === e)) return !0;
            try {
                const i = new URL(e);
                return !t || !t.requireHttps || "https:" === i.protocol
            } catch (e) {
                return !1
            }
        }

        static isValidBoolean(e, t) {
            return !(!t || !t.allowNull || null !== e) || (!0 === e || !1 === e)
        }

        static isValidArray(e, t) {
            return !(!t || !t.allowNull || null !== e) || (!(!t || !t.allowEmpty || null !== e && void 0 !== e) || e instanceof Array)
        }
    }

    var Pt = i(29);

    class It {
        static processItem(e, t) {
            if ("function" == typeof t) t(); else {
                if (!Array.isArray(t)) throw new u.a("Only accepts function and Array types!");
                {
                    if (0 == t.length) throw new u.a("Empty array is not valid!");
                    const i = t.shift();
                    if (null == i || void 0 === i) throw new u.a("First element in array must be the OneSignal function name");
                    const n = e[i.toString()];
                    if ("function" != typeof n) throw new u.a(`No OneSignal function with the name '${i}'`);
                    n.apply(e, t)
                }
            }
        }
    }

    var Tt = i(33), Ct = i(21);
    i.d(t, "default", function () {
        return At
    });

    class At {
        static setDefaultNotificationUrl(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!Et.isValidUrl(e, {allowNull: !0})) throw new InvalidArgumentError.a("url", InvalidArgumentError.b.Malformed);
                yield Object(T.c)(), Object(T.q)("setDefaultNotificationUrl", e);
                const t = yield I.a.getAppState();
                t.defaultNotificationUrl = e, yield I.a.setAppState(t)
            })
        }

        static setDefaultTitle(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("setDefaultTitle", e);
                const t = yield I.a.getAppState();
                t.defaultNotificationTitle = e, yield I.a.setAppState(t)
            })
        }

        static setEmail(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (!e) throw new InvalidArgumentError.a("email", InvalidArgumentError.b.Empty);
                if (!Object(T.p)(e)) throw new InvalidArgumentError.a("email", InvalidArgumentError.b.Malformed);
                if (t && t.emailAuthHash && 64 !== t.emailAuthHash.length) throw new InvalidArgumentError.a("options.emailAuthHash", InvalidArgumentError.b.Malformed);
                yield Object(T.c)(), Object(T.q)("setEmail", e, t);
                const i = yield I.a.getAppConfig(), {deviceId: n} = yield I.a.getSubscription(),
                    o = yield I.a.getEmailProfile();
                if (i.emailAuthRequired && (!t || !t.emailAuthHash)) throw new InvalidArgumentError.a("options.emailAuthHash", InvalidArgumentError.b.Empty);
                const s = new Pt.a(o.emailId, e);
                t && t.emailAuthHash && (s.emailAuthHash = t.emailAuthHash);
                const r = !!o.emailId;
                return r && i.emailAuthRequired ? s.emailId = yield ut.updateEmailRecord(i, s, n) : s.emailId = yield ut.createEmailRecord(i, s, n), !n || r && o.emailId === s.emailId && o.emailAddress && s.emailAddress === o.emailAddress || (yield ut.updatePlayer(i.appId, n, {
                    parent_player_id: s.emailId,
                    email: s.emailAddress
                })), yield I.a.setEmailProfile(s), s.emailId
            })
        }

        static logoutEmail() {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)();
                const e = yield I.a.getAppConfig(),
                    t = yield I.a.getEmailProfile(), {deviceId: i} = yield I.a.getSubscription();
                t.emailId ? i ? (yield ut.logoutEmail(e, t, i)) ? yield I.a.setEmailProfile(new Pt.a) : E.a.warn("Failed to logout email.") : E.a.warn(new g(n.NoDeviceId)) : E.a.warn(new g(n.NoEmailSet))
            })
        }

        static isPushNotificationsSupported() {
            return Object(T.q)("isPushNotificationsSupported"), !0
        }

        static initializeConfig(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield(new pt).getAppConfig(e);
                E.a.debug(`OneSignal: Final web app config: %c${JSON.stringify(t, null, 4)}`, Object(T.j)("code")), At.config = t, At.environmentInfo = Qe.getEnvironmentInfo(), At.context = new it(t), At.config = At.context.appConfig
            })
        }

        static init(e) {
            return a.a(this, void 0, void 0, function* () {
                if (Object(T.q)("init"), yield Ue.polyfillSafariFetch(), Ue.errorIfInitAlreadyCalled(), yield At.initializeConfig(e), !At.config) throw new Error("OneSignal config not initialized!");
                if (!l.a.safari || At.config.safariWebId) {
                    if (At.config.userConfig.requiresUserPrivacyConsent) {
                        if (!(yield I.a.getProvideUserConsent())) return void (At.pendingInit = !0)
                    }
                    yield At.delayedInit()
                } else E.a.warn(new p(s.MissingSafariWebId))
            })
        }

        static delayedInit() {
            return a.a(this, void 0, void 0, function* () {
                function e() {
                    return a.a(this, void 0, void 0, function* () {
                        if (!At.__initAlreadyCalled) {
                            if (At.__initAlreadyCalled = !0, At.emitter.on(At.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, M.onNotificationPermissionChange), At.emitter.on(At.EVENTS.SUBSCRIPTION_CHANGED, M._onSubscriptionChanged), At.emitter.on(At.EVENTS.SDK_INITIALIZED, Ue.onSdkInitialized), A.b.isUsingSubscriptionWorkaround()) {
                                if (!At.config || !At.config.subdomain) throw new p(s.MissingSubdomain);
                                At.emitter.on(At.EVENTS.SESSION_STARTED, tt.setupSessionEventListenersForHttp), At.proxyFrameHost = yield yt.discoverAltOrigin(At.config)
                            }
                            window.addEventListener("focus", () => {
                                X.checkAndTriggerNotificationPermissionChanged()
                            }), yield Ue.initSaveState(document.title), yield Ue.saveInitOptions(), x.a.getWindowEnv() === _.a.CustomIframe ? yield h.a.trigger(At.EVENTS.SDK_INITIALIZED) : yield Ue.internalInit()
                        }
                    })
                }

                At.pendingInit = !1, At.context.workerMessenger.listen(), "complete" === document.readyState || "interactive" === document.readyState ? yield e() : (E.a.debug("OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."), window.addEventListener("DOMContentLoaded", () => {
                    e()
                }), document.onreadystatechange = (() => {
                    "complete" !== document.readyState && "interactive" !== document.readyState || e()
                }))
            })
        }

        static provideUserConsent(e) {
            return a.a(this, void 0, void 0, function* () {
                yield I.a.setProvideUserConsent(e), e && At.pendingInit && (yield At.delayedInit())
            })
        }

        static showHttpPermissionRequest(e) {
            return a.a(this, void 0, void 0, function* () {
                E.a.debug("Called showHttpPermissionRequest(), redirecting to HTTP prompt."), At.showHttpPrompt(e).catch(e => E.a.info(e))
            })
        }

        static showHttpPrompt(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), yield At.context.promptsManager.internalShowSlidedownPrompt(e)
            })
        }

        static showNativePrompt() {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), yield At.context.promptsManager.internalShowNativePrompt()
            })
        }

        static showSlidedownPrompt(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), yield At.context.promptsManager.internalShowSlidedownPrompt(e)
            })
        }

        static registerForPushNotifications(e) {
            return a.a(this, void 0, void 0, function* () {
                if (At.initialized) return yield Ue.registerForPushNotifications(e);
                yield new Promise((t, i) => {
                    At.emitter.once(At.EVENTS.SDK_INITIALIZED, () => a.a(this, void 0, void 0, function* () {
                        return yield Ue.registerForPushNotifications(e), t()
                    }))
                })
            })
        }

        static getNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(T.c)(), At.privateGetNotificationPermission(e)
            })
        }

        static privateGetNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield At.context.permissionManager.getNotificationPermission(At.config.safariWebId);
                return e && e(t), t
            })
        }

        static getTags(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("getTags", e);
                const {appId: t} = yield I.a.getAppConfig(), {deviceId: i} = yield I.a.getSubscription();
                if (!i) return E.a.info(new g(n.NoDeviceId)), null;
                const {tags: o} = yield ut.getPlayer(t, i);
                return Object(T.i)(e, o), o
            })
        }

        static sendTag(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                const n = {};
                return n[e] = t, yield At.sendTags(n, i)
            })
        }

        static sendTags(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (yield Object(T.c)(), Object(T.q)("sendTags", e, t), !e || 0 === Object.keys(e).length) return E.a.info(new InvalidArgumentError.a("tags", InvalidArgumentError.b.Empty)), null;
                Object.keys(e).forEach(t => {
                    !1 === e[t] && (e[t] = "false")
                });
                const {appId: i} = yield I.a.getAppConfig(), n = yield I.a.getEmailProfile();
                n.emailId && (yield ut.updatePlayer(i, n.emailId, {tags: e, email_auth_hash: n.emailAuthHash}));
                var {deviceId: o} = yield I.a.getSubscription();
                o || (yield Object(T.d)(At.EVENTS.REGISTERED));
                var {deviceId: s} = yield I.a.getSubscription();
                return yield ut.updatePlayer(i, s, {tags: e}), Object(T.i)(t, e), e
            })
        }

        static deleteTag(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield At.deleteTags([e])
            })
        }

        static deleteTags(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (yield Object(T.c)(), Object(T.q)("deleteTags", e, t), !Et.isValidArray(e)) throw new InvalidArgumentError.a("tags", InvalidArgumentError.b.Malformed);
                0 === e.length && E.a.info(new InvalidArgumentError.a("tags", InvalidArgumentError.b.Empty));
                const i = {};
                for (let t of e) i[t] = "";
                const n = yield At.sendTags(i);
                if (n) {
                    const e = Object.keys(n);
                    return Object(T.i)(t, e), e
                }
                return []
            })
        }

        static setExternalUserId(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("setExternalUserId"), (yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()) || (yield Object(T.d)(At.EVENTS.REGISTERED)), yield Promise.all([At.database.setExternalUserId(e), At.context.updateManager.sendExternalUserIdUpdate(e)])
            })
        }

        static getExternalUserId() {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(T.c)(), Object(T.q)("getExternalUserId"), yield At.database.getExternalUserId()
            })
        }

        static removeExternalUserId() {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("removeExternalUserId"), (yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()) ? yield Promise.all([At.database.setExternalUserId(void 0), At.context.updateManager.sendExternalUserIdUpdate(void 0)]) : E.a.warn("User is not subscribed, cannot remove external user id.")
            })
        }

        static addListenerForNotificationOpened(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("addListenerForNotificationOpened", e), At.emitter.once(At.EVENTS.NOTIFICATION_CLICKED, t => {
                    Object(T.i)(e, t)
                }), At.config && M.fireStoredNotificationClicks(At.config.pageUrl || At.config.userConfig.pageUrl)
            })
        }

        static getIdsAvailable(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("getIdsAvailable", e);
                const {deviceId: t, subscriptionToken: i} = yield I.a.getSubscription(),
                    n = {userId: t, registrationId: i};
                return Object(T.i)(e, n), n
            })
        }

        static isPushNotificationsEnabled(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(T.c)(), At.privateIsPushNotificationsEnabled(e)
            })
        }

        static privateIsPushNotificationsEnabled(e) {
            return a.a(this, void 0, void 0, function* () {
                Object(T.q)("isPushNotificationsEnabled", e);
                const t = yield At.context.subscriptionManager.getSubscriptionState();
                return Object(T.i)(e, t.subscribed && !t.optedOut), t.subscribed && !t.optedOut
            })
        }

        static setSubscription(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("setSubscription", e);
                const t = yield I.a.getAppConfig(), {appId: i} = t, o = yield I.a.getSubscription(), {deviceId: s} = o;
                if (!t.appId) throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
                if (!Et.isValidBoolean(e)) throw new InvalidArgumentError.a("newSubscription", InvalidArgumentError.b.Malformed);
                s ? (o.optedOut = !e, yield ut.updatePlayer(i, s, {notification_types: X.getNotificationTypeFromOptIn(e)}), yield I.a.setSubscription(o), M.onInternalSubscriptionSet(o.optedOut), M.checkAndTriggerSubscriptionChanged()) : E.a.info(new g(n.NoDeviceId))
            })
        }

        static isOptedOut(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(T.c)(), At.internalIsOptedOut(e)
            })
        }

        static internalIsOptedOut(e) {
            return a.a(this, void 0, void 0, function* () {
                Object(T.q)("isOptedOut", e);
                const {optedOut: t} = yield I.a.getSubscription();
                return Object(T.i)(e, t), t
            })
        }

        static optOut(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (yield Object(T.c)(), Object(T.q)("optOut", e, t), !Et.isValidBoolean(e)) throw new InvalidArgumentError.a("doOptOut", InvalidArgumentError.b.Malformed);
                yield At.setSubscription(!e), Object(T.i)(t)
            })
        }

        static getEmailId(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("getEmailId", e);
                const t = (yield I.a.getEmailProfile()).emailId;
                return Object(T.i)(e, t), t
            })
        }

        static getUserId(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("getUserId", e);
                const t = (yield I.a.getSubscription()).deviceId;
                return Object(T.i)(e, t), t
            })
        }

        static getRegistrationId(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("getRegistrationId", e);
                const t = (yield I.a.getSubscription()).subscriptionToken;
                return Object(T.i)(e, t), t
            })
        }

        static getSubscription(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(T.c)(), yield At.privateGetSubscription(e)
            })
        }

        static privateGetSubscription(e) {
            return a.a(this, void 0, void 0, function* () {
                Object(T.q)("getSubscription", e);
                const t = !(yield I.a.getSubscription()).optedOut;
                return Object(T.i)(e, t), t
            })
        }

        static sendSelfNotification(e = "OneSignal Test Message", t = "This is an example notification.", i = new URL(location.href).origin + "?_osp=do_not_open", o, s, r) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(T.c)(), Object(T.q)("sendSelfNotification", e, t, i, o, s, r);
                const a = yield I.a.getAppConfig(), c = yield I.a.getSubscription();
                if (!a.appId) throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
                if (!(yield At.isPushNotificationsEnabled())) throw new g(n.NoDeviceId);
                if (!Et.isValidUrl(i)) throw new InvalidArgumentError.a("url", InvalidArgumentError.b.Malformed);
                if (!Et.isValidUrl(o, {
                    allowEmpty: !0,
                    requireHttps: !0
                })) throw new InvalidArgumentError.a("icon", InvalidArgumentError.b.Malformed);
                c.deviceId && (yield ut.sendNotification(a.appId, [c.deviceId], {en: e}, {en: t}, i, o, s, r))
            })
        }

        static push(e) {
            It.processItem(At, e)
        }

        static on(e, t) {
            return this.emitter.on(e, t)
        }

        static off(e, t) {
            return this.emitter.off(e, t)
        }

        static once(e, t) {
            return this.emitter.once(e, t)
        }

        static sendOutcome(e, t) {
            return a.a(this, void 0, void 0, function* () {
                const i = At.config.userConfig.outcomes;
                if (!i) return void E.a.debug("Outcomes feature not supported by main application yet.");
                if (!e) return void E.a.error("Outcome name is required");
                if (void 0 !== t && "number" != typeof t) return void E.a.error("Outcome weight can only be a number if present.");
                if (yield Object(T.c)(), !(yield At.privateIsPushNotificationsEnabled())) return void E.a.warn("Reporting outcomes is supported only for subscribed users.");
                const n = yield Tt.a.getAttribution(i);
                switch (n.type) {
                    case Ct.a.Direct:
                        return void (yield At.context.updateManager.sendOutcomeDirect(At.config.appId, n.notificationIds, e, t));
                    case Ct.a.Indirect:
                        return void (yield At.context.updateManager.sendOutcomeInfluenced(At.config.appId, n.notificationIds, e, t));
                    case Ct.a.Unattributed:
                        return void (yield At.context.updateManager.sendOutcomeUnattributed(At.config.appId, e, t));
                    default:
                        return void E.a.warn("You are on a free plan. Please upgrade to use this functionality.")
                }
            })
        }
    }

    At.VERSION = d.a.version(), At._VERSION = d.a.version(), At.sdkEnvironment = x.a, At._notificationOpenedCallbacks = [], At._idsAvailable_callback = [], At._defaultLaunchURL = null, At.config = null, At._sessionInitAlreadyRunning = !1, At._isNotificationEnabledCallback = [], At._subscriptionSet = !0, At.modalUrl = null, At._windowWidth = 650, At._windowHeight = 568, At._isNewVisitor = !1, At._channel = null, At.timedLocalStorage = D, At.initialized = !1, At.notifyButton = null, At.store = f, At.environment = d.a, At.database = I.a, At.event = h.a, At.browser = l.a, At.popover = null, At.log = E.a, At.api = ut, At.indexedDb = wt.a, At.mainHelper = X, At.subscriptionHelper = Z, At.httpHelper = St, At.eventHelper = M, At.initHelper = Ue, At.testHelper = Be, At.pendingInit = !0, At.emitter = new Q.a, At.cache = {}, At.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js", At.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js", At.SERVICE_WORKER_PARAM = {scope: "/"}, At._LOGGING = !1, At.LOGGING = !1, At._usingNativePermissionHook = !1, At._initCalled = !1, At.__initAlreadyCalled = !1, At.checkAndWipeUserSubscription = function () {
    }, At.DeviceRecord = v.a, At.EmailDeviceRecord = O, At.notificationPermission = k, At._initHttp = St.initHttp, At._initPopup = (() => At.subscriptionPopup.subscribe()), At.POSTMAM_COMMANDS = {
        CONNECTED: "connect",
        REMOTE_NOTIFICATION_PERMISSION: "postmam.remoteNotificationPermission",
        REMOTE_DATABASE_GET: "postmam.remoteDatabaseGet",
        REMOTE_DATABASE_GET_ALL: "postmam.remoteDatabaseGetAll",
        REMOTE_DATABASE_PUT: "postmam.remoteDatabasePut",
        REMOTE_DATABASE_REMOVE: "postmam.remoteDatabaseRemove",
        REMOTE_OPERATION_COMPLETE: "postman.operationComplete",
        REMOTE_RETRIGGER_EVENT: "postmam.remoteRetriggerEvent",
        MODAL_LOADED: "postmam.modalPrompt.loaded",
        MODAL_PROMPT_ACCEPTED: "postmam.modalPrompt.accepted",
        MODAL_PROMPT_REJECTED: "postmam.modalPrompt.canceled",
        POPUP_LOADED: "postmam.popup.loaded",
        POPUP_ACCEPTED: "postmam.popup.accepted",
        POPUP_REJECTED: "postmam.popup.canceled",
        POPUP_CLOSING: "postman.popup.closing",
        REMOTE_NOTIFICATION_PERMISSION_CHANGED: "postmam.remoteNotificationPermissionChanged",
        IFRAME_POPUP_INITIALIZE: "postmam.iframePopupInitialize",
        UNSUBSCRIBE_FROM_PUSH: "postmam.unsubscribeFromPush",
        SET_SESSION_COUNT: "postmam.setSessionCount",
        REQUEST_HOST_URL: "postmam.requestHostUrl",
        WINDOW_TIMEOUT: "postmam.windowTimeout",
        FINISH_REMOTE_REGISTRATION: "postmam.finishRemoteRegistration",
        FINISH_REMOTE_REGISTRATION_IN_PROGRESS: "postmam.finishRemoteRegistrationInProgress",
        POPUP_BEGIN_MESSAGEPORT_COMMS: "postmam.beginMessagePortComms",
        SERVICEWORKER_COMMAND_REDIRECT: "postmam.command.redirect",
        MARK_PROMPT_DISMISSED: "postmam.markPromptDismissed",
        IS_SUBSCRIBED: "postmam.isSubscribed",
        UNSUBSCRIBE_PROXY_FRAME: "postman.unsubscribeProxyFrame",
        GET_EVENT_LISTENER_COUNT: "postmam.getEventListenerCount",
        SERVICE_WORKER_STATE: "postmam.serviceWorkerState",
        GET_WORKER_VERSION: "postmam.getWorkerVersion",
        SUBSCRIPTION_EXPIRATION_STATE: "postmam.subscriptionExpirationState",
        PROCESS_EXPIRING_SUBSCRIPTIONS: "postmam.processExpiringSubscriptions",
        GET_SUBSCRIPTION_STATE: "postmam.getSubscriptionState",
        SESSION_UPSERT: "postmam.sessionUpsert",
        SESSION_DEACTIVATE: "postmam.sessionDeactivate",
        ARE_YOU_VISIBLE_REQUEST: "postmam.areYouVisibleRequest",
        ARE_YOU_VISIBLE_RESPONSE: "postmam.areYouVisibleResponse"
    }, At.EVENTS = {
        CUSTOM_PROMPT_CLICKED: "customPromptClick",
        NATIVE_PROMPT_PERMISSIONCHANGED: "notificationPermissionChange",
        SUBSCRIPTION_CHANGED: "subscriptionChange",
        WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification",
        NOTIFICATION_DISPLAYED: "notificationDisplay",
        NOTIFICATION_DISMISSED: "notificationDismiss",
        NOTIFICATION_CLICKED: "notificationClick",
        SDK_INITIALIZED: "initializeInternal",
        SDK_INITIALIZED_PUBLIC: "initialize",
        REGISTERED: "register",
        POPUP_CLOSING: "popupClose",
        PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay",
        TEST_INIT_OPTION_DISABLED: "testInitOptionDisabled",
        TEST_WOULD_DISPLAY: "testWouldDisplay",
        POPUP_WINDOW_TIMEOUT: "popupWindowTimeout",
        SESSION_STARTED: "os.sessionStarted"
    }, R.ensureBackwardsCompatibility(At), E.a.info(`%cOneSignal Web SDK loaded (version ${At._VERSION}, ${x.a.getWindowEnv().toString()} environment).`, Object(T.j)("bold")), E.a.debug(`Current Page URL: ${"undefined" == typeof location ? "NodeJS" : location.href}`), E.a.debug(`Browser Environment: ${l.a.name} ${l.a.version}`)
}, function (e, t) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function (e, t) {
    e.exports = function () {
        throw new Error("define cannot be used indirect")
    }
}]);
//# sourceMappingURL=OneSignalPageSDKES6.js.map
