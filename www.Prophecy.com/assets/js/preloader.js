!(function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module ?
        e() :
        'function' == typeof define && define.amd ?
        define(e) :
        e()
})(0, function() {
    'use strict'

    function t(t) {
        var e = this.constructor
        return this.then(
            function(n) {
                return e.resolve(t()).then(function() {
                    return n
                })
            },
            function(n) {
                return e.resolve(t()).then(function() {
                    return e.reject(n)
                })
            }
        )
    }
    var e = setTimeout

    function n(t) {
        return Boolean(t && void 0 !== t.length)
    }

    function o() {}

    function i(t) {
        if (!(this instanceof i))
            throw new TypeError('Promises must be constructed via new')
        if ('function' != typeof t) throw new TypeError('not a function');
        (this._state = 0),
        (this._handled = !1),
        (this._value = void 0),
        (this._deferreds = []),
        l(t, this)
    }

    function r(t, e) {
        for (; 3 === t._state;) t = t._value
        0 !== t._state ?
            ((t._handled = !0),
                i._immediateFn(function() {
                    var n = 1 === t._state ? e.onFulfilled : e.onRejected
                    if (null !== n) {
                        var o
                        try {
                            o = n(t._value)
                        } catch (t) {
                            return void c(e.promise, t)
                        }
                        s(e.promise, o)
                    } else(1 === t._state ? s : c)(e.promise, t._value)
                })) :
            t._deferreds.push(e)
    }

    function s(t, e) {
        try {
            if (e === t)
                throw new TypeError('A promise cannot be resolved with itself.')
            if (e && ('object' == typeof e || 'function' == typeof e)) {
                var n = e.then
                if (e instanceof i) return (t._state = 3), (t._value = e), void a(t)
                if ('function' == typeof n)
                    return void l(
                        ((o = n),
                            (r = e),
                            function() {
                                o.apply(r, arguments)
                            }),
                        t
                    )
            };
            (t._state = 1), (t._value = e), a(t)
        } catch (e) {
            c(t, e)
        }
        var o, r
    }

    function c(t, e) {;
        (t._state = 2), (t._value = e), a(t)
    }

    function a(t) {
        2 === t._state &&
            0 === t._deferreds.length &&
            i._immediateFn(function() {
                t._handled || i._unhandledRejectionFn(t._value)
            })
        for (var e = 0, n = t._deferreds.length; e < n; e++) r(t, t._deferreds[e])
        t._deferreds = null
    }

    function u(t, e, n) {;
        (this.onFulfilled = 'function' == typeof t ? t : null),
        (this.onRejected = 'function' == typeof e ? e : null),
        (this.promise = n)
    }

    function l(t, e) {
        var n = !1
        try {
            t(
                function(t) {
                    n || ((n = !0), s(e, t))
                },
                function(t) {
                    n || ((n = !0), c(e, t))
                }
            )
        } catch (t) {
            if (n) return;
            (n = !0), c(e, t)
        }
    };
    (i.prototype.catch = function(t) {
        return this.then(null, t)
    }),
    (i.prototype.then = function(t, e) {
        var n = new this.constructor(o)
        return r(this, new u(t, e, n)), n
    }),
    (i.prototype.finally = t),
    (i.all = function(t) {
        return new i(function(e, o) {
            if (!n(t)) return o(new TypeError('Promise.all accepts an array'))
            var i = Array.prototype.slice.call(t)
            if (0 === i.length) return e([])
            var r = i.length

            function s(t, n) {
                try {
                    if (n && ('object' == typeof n || 'function' == typeof n)) {
                        var c = n.then
                        if ('function' == typeof c)
                            return void c.call(
                                n,
                                function(e) {
                                    s(t, e)
                                },
                                o
                            )
                    };
                    (i[t] = n), 0 == --r && e(i)
                } catch (t) {
                    o(t)
                }
            }
            for (var c = 0; c < i.length; c++) s(c, i[c])
        })
    }),
    (i.resolve = function(t) {
        return t && 'object' == typeof t && t.constructor === i ?
            t :
            new i(function(e) {
                e(t)
            })
    }),
    (i.reject = function(t) {
        return new i(function(e, n) {
            n(t)
        })
    }),
    (i.race = function(t) {
        return new i(function(e, o) {
            if (!n(t)) return o(new TypeError('Promise.race accepts an array'))
            for (var r = 0, s = t.length; r < s; r++) i.resolve(t[r]).then(e, o)
        })
    }),
    (i._immediateFn =
        ('function' == typeof setImmediate &&
            function(t) {
                setImmediate(t)
            }) ||
        function(t) {
            e(t, 0)
        }),
    (i._unhandledRejectionFn = function(t) {
        'undefined' != typeof console &&
            console &&
            console.warn('Possible Unhandled Promise Rejection:', t)
    })
    var h = (function() {
        if ('undefined' != typeof self) return self
        if ('undefined' != typeof window) return window
        if ('undefined' != typeof global) return global
        throw new Error('unable to locate global object')
    })()
    'Promise' in h
        ?
        h.Promise.prototype.finally || (h.Promise.prototype.finally = t) :
        (h.Promise = i)
}),
(function() {
    'use strict'
    if ('object' == typeof window)
        if (
            'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window &&
            'intersectionRatio' in window.IntersectionObserverEntry.prototype
        )
            'isIntersecting' in window.IntersectionObserverEntry.prototype ||
            Object.defineProperty(
                window.IntersectionObserverEntry.prototype,
                'isIntersecting', {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                }
            )
    else {
        var t = window.document,
            e = [];
        (o.prototype.THROTTLE_TIMEOUT = 100),
        (o.prototype.POLL_INTERVAL = null),
        (o.prototype.USE_MUTATION_OBSERVER = !0),
        (o.prototype.observe = function(t) {
            if (!this._observationTargets.some(function(e) {
                    return e.element == t
                })) {
                if (!t || 1 != t.nodeType)
                    throw new Error('target must be an Element')
                this._registerInstance(),
                    this._observationTargets.push({
                        element: t,
                        entry: null
                    }),
                    this._monitorIntersections(),
                    this._checkForIntersections()
            }
        }),
        (o.prototype.unobserve = function(t) {;
            (this._observationTargets = this._observationTargets.filter(
                function(e) {
                    return e.element != t
                }
            )),
            this._observationTargets.length ||
                (this._unmonitorIntersections(), this._unregisterInstance())
        }),
        (o.prototype.disconnect = function() {;
            (this._observationTargets = []),
            this._unmonitorIntersections(),
                this._unregisterInstance()
        }),
        (o.prototype.takeRecords = function() {
            var t = this._queuedEntries.slice()
            return (this._queuedEntries = []), t
        }),
        (o.prototype._initThresholds = function(t) {
            var e = t || [0]
            return (
                Array.isArray(e) || (e = [e]),
                e.sort().filter(function(t, e, n) {
                    if ('number' != typeof t || isNaN(t) || t < 0 || t > 1)
                        throw new Error(
                            'threshold must be a number between 0 and 1 inclusively'
                        )
                    return t !== n[e - 1]
                })
            )
        }),
        (o.prototype._parseRootMargin = function(t) {
            var e = (t || '0px').split(/\s+/).map(function(t) {
                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t)
                if (!e)
                    throw new Error(
                        'rootMargin must be specified in pixels or percent'
                    )
                return {
                    value: parseFloat(e[1]),
                    unit: e[2]
                }
            })
            return (
                (e[1] = e[1] || e[0]),
                (e[2] = e[2] || e[0]),
                (e[3] = e[3] || e[1]),
                e
            )
        }),
        (o.prototype._monitorIntersections = function() {
            this._monitoringIntersections ||
                ((this._monitoringIntersections = !0),
                    this.POLL_INTERVAL ?
                    (this._monitoringInterval = setInterval(
                        this._checkForIntersections,
                        this.POLL_INTERVAL
                    )) :
                    (i(window, 'resize', this._checkForIntersections, !0),
                        i(t, 'scroll', this._checkForIntersections, !0),
                        this.USE_MUTATION_OBSERVER &&
                        'MutationObserver' in window &&
                        ((this._domObserver = new MutationObserver(
                                this._checkForIntersections
                            )),
                            this._domObserver.observe(t, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            }))))
        }),
        (o.prototype._unmonitorIntersections = function() {
            this._monitoringIntersections &&
                ((this._monitoringIntersections = !1),
                    clearInterval(this._monitoringInterval),
                    (this._monitoringInterval = null),
                    r(window, 'resize', this._checkForIntersections, !0),
                    r(t, 'scroll', this._checkForIntersections, !0),
                    this._domObserver &&
                    (this._domObserver.disconnect(), (this._domObserver = null)))
        }),
        (o.prototype._checkForIntersections = function() {
            var t = this._rootIsInDom(),
                e = t ?
                this._getRootRect() :
                {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            this._observationTargets.forEach(function(o) {
                    var i = o.element,
                        r = s(i),
                        c = this._rootContainsTarget(i),
                        a = o.entry,
                        u = t && c && this._computeTargetAndRootIntersection(i, e),
                        l = (o.entry = new n({
                            time: window.performance && performance.now && performance.now(),
                            target: i,
                            boundingClientRect: r,
                            rootBounds: e,
                            intersectionRect: u
                        }))
                    a
                        ?
                        t && c ?
                        this._hasCrossedThreshold(a, l) &&
                        this._queuedEntries.push(l) :
                        a && a.isIntersecting && this._queuedEntries.push(l) :
                        this._queuedEntries.push(l)
                }, this),
                this._queuedEntries.length &&
                this._callback(this.takeRecords(), this)
        }),
        (o.prototype._computeTargetAndRootIntersection = function(e, n) {
            if ('none' != window.getComputedStyle(e).display) {
                for (
                    var o, i, r, c, u, l, h, d, f = s(e), p = a(e), g = !1; !g;

                ) {
                    var v = null,
                        m = 1 == p.nodeType ? window.getComputedStyle(p) : {}
                    if ('none' == m.display) return
                    if (
                        (p == this.root || p == t ?
                            ((g = !0), (v = n)) :
                            p != t.body &&
                            p != t.documentElement &&
                            'visible' != m.overflow &&
                            (v = s(p)),
                            v &&
                            ((o = v),
                                (i = f),
                                (r = void 0),
                                (c = void 0),
                                (u = void 0),
                                (l = void 0),
                                (h = void 0),
                                (d = void 0),
                                (r = Math.max(o.top, i.top)),
                                (c = Math.min(o.bottom, i.bottom)),
                                (u = Math.max(o.left, i.left)),
                                (l = Math.min(o.right, i.right)),
                                (d = c - r), !(f = (h = l - u) >= 0 &&
                                    d >= 0 && {
                                        top: r,
                                        bottom: c,
                                        left: u,
                                        right: l,
                                        width: h,
                                        height: d
                                    })))
                    )
                        break
                    p = a(p)
                }
                return f
            }
        }),
        (o.prototype._getRootRect = function() {
            var e
            if (this.root) e = s(this.root)
            else {
                var n = t.documentElement,
                    o = t.body
                e = {
                    top: 0,
                    left: 0,
                    right: n.clientWidth || o.clientWidth,
                    width: n.clientWidth || o.clientWidth,
                    bottom: n.clientHeight || o.clientHeight,
                    height: n.clientHeight || o.clientHeight
                }
            }
            return this._expandRectByRootMargin(e)
        }),
        (o.prototype._expandRectByRootMargin = function(t) {
            var e = this._rootMarginValues.map(function(e, n) {
                    return 'px' == e.unit ?
                        e.value :
                        (e.value * (n % 2 ? t.width : t.height)) / 100
                }),
                n = {
                    top: t.top - e[0],
                    right: t.right + e[1],
                    bottom: t.bottom + e[2],
                    left: t.left - e[3]
                }
            return (
                (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
            )
        }),
        (o.prototype._hasCrossedThreshold = function(t, e) {
            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                o = e.isIntersecting ? e.intersectionRatio || 0 : -1
            if (n !== o)
                for (var i = 0; i < this.thresholds.length; i++) {
                    var r = this.thresholds[i]
                    if (r == n || r == o || r < n != r < o) return !0
                }
        }),
        (o.prototype._rootIsInDom = function() {
            return !this.root || c(t, this.root)
        }),
        (o.prototype._rootContainsTarget = function(e) {
            return c(this.root || t, e)
        }),
        (o.prototype._registerInstance = function() {
            e.indexOf(this) < 0 && e.push(this)
        }),
        (o.prototype._unregisterInstance = function() {
            var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
        }),
        (window.IntersectionObserver = o),
        (window.IntersectionObserverEntry = n)
    }

    function n(t) {;
        (this.time = t.time),
        (this.target = t.target),
        (this.rootBounds = t.rootBounds),
        (this.boundingClientRect = t.boundingClientRect),
        (this.intersectionRect = t.intersectionRect || {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }),
        (this.isIntersecting = !!t.intersectionRect)
        var e = this.boundingClientRect,
            n = e.width * e.height,
            o = this.intersectionRect,
            i = o.width * o.height
        this.intersectionRatio = n ?
            Number((i / n).toFixed(4)) :
            this.isIntersecting ?
            1 :
            0
    }

    function o(t, e) {
        var n,
            o,
            i,
            r = e || {}
        if ('function' != typeof t) throw new Error('callback must be a function')
        if (r.root && 1 != r.root.nodeType)
            throw new Error('root must be an Element');
        (this._checkForIntersections =
            ((n = this._checkForIntersections.bind(this)),
                (o = this.THROTTLE_TIMEOUT),
                (i = null),
                function() {
                    i ||
                        (i = setTimeout(function() {
                            n(), (i = null)
                        }, o))
                })),
        (this._callback = t),
        (this._observationTargets = []),
        (this._queuedEntries = []),
        (this._rootMarginValues = this._parseRootMargin(r.rootMargin)),
        (this.thresholds = this._initThresholds(r.threshold)),
        (this.root = r.root || null),
        (this.rootMargin = this._rootMarginValues
            .map(function(t) {
                return t.value + t.unit
            })
            .join(' '))
    }

    function i(t, e, n, o) {
        'function' == typeof t.addEventListener ?
            t.addEventListener(e, n, o || !1) :
            'function' == typeof t.attachEvent && t.attachEvent('on' + e, n)
    }

    function r(t, e, n, o) {
        'function' == typeof t.removeEventListener ?
            t.removeEventListener(e, n, o || !1) :
            'function' == typeof t.detatchEvent && t.detatchEvent('on' + e, n)
    }

    function s(t) {
        var e
        try {
            e = t.getBoundingClientRect()
        } catch (t) {}
        return e ?
            ((e.width && e.height) ||
                (e = {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }),
                e) :
            {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
    }

    function c(t, e) {
        for (var n = e; n;) {
            if (n == t) return !0
            n = a(n)
        }
        return !1
    }

    function a(t) {
        var e = t.parentNode
        return e && 11 == e.nodeType && e.host ?
            e.host :
            e && e.assignedSlot ?
            e.assignedSlot.parentNode :
            e
    }
})(),
(function() {
    var t,
        e = document.querySelectorAll('.js-lazy-image, .js-lazy-images-slider'),
        n =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
        o = {
            rootMargin: ''.concat(Math.max(600, n), 'px 100px'),
            threshold: 0.01,
            root: null
        },
        i = e.length
    if ('IntersectionObserver' in window) {
        t = new IntersectionObserver(function(e) {
            if (!i)
                return void(function() {
                    if (!t) return
                    t.disconnect()
                })()
            for (var n = 0; n < e.length; n++) {
                var o = e[n]
                if (o.intersectionRatio > 0) {
                    if (
                        (i--,
                            t.unobserve(o.target), !o.target.classList.contains('js-lazy-images-slider'))
                    ) {
                        c(o.target)
                        continue
                    }
                    var r = o.target.querySelector('.clients-slider'),
                        s = o.target.querySelector('.awards-slider'),
                        u = o.target.querySelector('.swiper-technologies-container'),
                        l = r ?
                        document.querySelectorAll(
                            '.clients-slider .swiper-slide:not(.swiper-slide-duplicate) .js-lazy-image-slider'
                        ) :
                        [],
                        h = s ?
                        document.querySelectorAll(
                            '.awards-slider .swiper-slide:not(.swiper-slide-duplicate) .js-lazy-image-slider'
                        ) :
                        [],
                        d = u ?
                        document.querySelectorAll(
                            '.swiper-technologies-container .swiper-slide:not(.swiper-slide-duplicate) .js-lazy-image-slider'
                        ) :
                        [],
                        f = null
                    r && l.length && (f = l),
                        s && h.length && (f = h),
                        u && d.length && (f = d),
                        f &&
                        (a(f, r, s, u),
                            o.target.classList.add('js-lazy-image--handled'))
                }
            }
        }, o)
        for (var r = 0; r < e.length; r++) {
            var s = e[r]
            s.classList.contains('js-lazy-image--handled') || t.observe(s)
        }
    } else a(e)

    function c(t, e, n, o) {
        var i = t.dataset.src
        if (i) {
            var r = new Image()
            r.addEventListener('load', function() {
                    u(t, i, e, n, o)
                }),
                r.addEventListener('error', function() {
                    !(function(t, e, n, o) {
                        var i = t.dataset.reserveFormat
                        if (!i) return
                        var r = t.dataset.src.replace(/\.webp/, '.'.concat(i))
                        u(t, r, e, n, o)
                    })(t, e, n, o)
                }),
                (r.src = i)
        }
    }

    function a(t, e, n, o) {
        for (var i = 0; i < t.length; i++) {
            c(t[i], e, n, o)
        }
    }

    function u(t, e, n, o, i) {
        var r = 'img' === t.tagName.toLowerCase()
        t.classList.add('js-lazy-image--handled'),
            r ? (t.src = e) : (t.style.backgroundImage = "url('".concat(e, "')")),
            n && l(t, e, 'clients-slider', 'active', !0),
            o && l(t, e, 'awards-slider', 'logo-img'),
            i && l(t, e, 'swiper-technologies-container', 'logo-image')
    }

    function l(t, e, n, o, i) {
        var r = (function(t, e) {
                for (;
                    (t = t.parentElement) && !t.classList.contains(e););
                return t
            })(t, 'swiper-slide'),
            s = r.dataset.swiperSlideIndex,
            c = r.querySelector('.'.concat(o)),
            a = document.querySelector(
                '.'
                .concat(n, " .swiper-slide-duplicate[data-swiper-slide-index='")
                .concat(s, "']")
            );
        ((c.src = e), a) &&
        ((a.querySelector('.'.concat(o)).src = e),
            i && (a.querySelector('.inactive').src = e))
    }
})()