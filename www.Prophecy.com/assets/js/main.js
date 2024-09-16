!(function(e) {;
    (e.Bideo = function() {;
        (this.opt = null),
        (this.videoEl = null),
        (this.approxLoadingRate = null),
        (this._resize = null),
        (this._progress = null),
        (this.startTime = null),
        (this.onLoadCalled = !1),
        (this.init = function(t) {
            this.opt = t = t || {}
            var i = this;
            (i._resize = i.resize.bind(this)),
            (i.videoEl = t.videoEl),
            i.videoEl.addEventListener('loadedmetadata', i._resize, !1),
                i.videoEl.addEventListener('canplay', function() {
                    i.opt.isMobile ||
                        (i.opt.onLoad && i.opt.onLoad(), !1 !== i.opt.autoplay && i.videoEl.play())
                }),
                i.opt.resize && e.addEventListener('resize', i._resize, !1),
                (this.startTime = new Date().getTime()),
                this.opt.src.forEach(function(e, t, o) {
                    var n,
                        d,
                        a = document.createElement('source')
                    for (n in e)
                        e.hasOwnProperty(n) && ((d = e[n]), a.setAttribute(n, d))
                    i.videoEl.appendChild(a)
                }),
                i.opt.isMobile &&
                i.opt.playButton &&
                (i.opt.videoEl.addEventListener('timeupdate', function() {
                        i.onLoadCalled ||
                            (i.opt.onLoad && i.opt.onLoad(), (i.onLoadCalled = !0))
                    }),
                    i.opt.playButton.addEventListener(
                        'click',
                        function() {;
                            (i.opt.pauseButton.style.display = 'inline-block'),
                            (this.style.display = 'none'),
                            i.videoEl.play()
                        }, !1
                    ),
                    i.opt.pauseButton.addEventListener(
                        'click',
                        function() {;
                            (this.style.display = 'none'),
                            (i.opt.playButton.style.display = 'inline-block'),
                            i.videoEl.pause()
                        }, !1
                    ))
        }),
        (this.resize = function() {
            if (!('object-fit' in document.body.style)) {
                var t = this.videoEl.videoWidth,
                    i = this.videoEl.videoHeight,
                    o = (t / i).toFixed(2),
                    n = this.opt.container,
                    d = e.getComputedStyle(n),
                    a = parseInt(d.getPropertyValue('width')),
                    l = parseInt(d.getPropertyValue('height'))
                if ('border-box' !== d.getPropertyValue('box-sizing')) {
                    var s = d.getPropertyValue('padding-top'),
                        r = d.getPropertyValue('padding-bottom'),
                        p = d.getPropertyValue('padding-left'),
                        u = d.getPropertyValue('padding-right');
                    (s = parseInt(s)),
                    (r = parseInt(r)),
                    (a += (p = parseInt(p)) + (u = parseInt(u))),
                    (l += s + r)
                }
                if (a / t > l / i)
                    var h = a,
                        v = Math.ceil(h / o)
                else(v = l), (h = Math.ceil(v * o));
                (this.videoEl.style.width = h + 'px'),
                (this.videoEl.style.height = v + 'px')
            }
        })
    }),
    'undefined' != typeof module && (module.exports = e.Bideo)
})(window),
(function(e, t, i) {
    t(e).ready(function() {
        var o = t('.bg-video')
        if (o.length && !i.touchevents && i.mq('(min-width: 1025px)'))
            for (
                var n = function(i) {
                        var n = t(o[i]).attr('data-video'),
                            d = new Bideo(),
                            a = e.querySelector('.bg-video-' + n + ' video'),
                            l = [{
                                src: '/video/video_' + n + '.mp4',
                                type: 'video/mp4'
                            }]
                        d.init({
                            container: e.querySelector('.bg-video-' + n),
                            videoEl: a,
                            resize: !0,
                            autoplay: !0,
                            src: l,
                            onLoad: function() {
                                a.className = 'shown'
                            }
                        })
                    },
                    d = 0; d < o.length; d++
            )
                n(d)
    })

    
})(document, jQuery, Modernizr)