'use strict'(function(e, a, t) {
    var o = t(a),
        n = t('html'),
        r = t('html, body'),
        i = !1
    o.ready(function() {
        var a = t('.open-popup-start-your-project'),
            s = t('.popup-start-your-project'),
            p = t('.open-popup-schedule'),
            u = t('.start-project-overlay'),
            c = t('.thank-you-overlay'),
            d = t('.navigation-panel'),
            h = t('.popup-schedule'),
            l = t('.popup-container'),
            g = l.find('input, textarea, select'),
            f = t('.contact-form-wrapper'),
            v = t('.page-main-wrapper'),
            m = 0

        function w(a, t, r) {
            r.preventDefault(),
                r.stopPropagation(),
                'start-your-project' === t &&
                (d.addClass('popup-active'),
                    u.addClass('start-project-overlay-show')),
                (m = e.pageYOffset),
                a.addClass('open'),
                n.addClass('popup-open'),
                v.offset({
                    top: -m
                }),
                g.attr('tabindex', ''),
                f.find('input, textarea').attr('tabindex', '-1'),
                'schedule' === t && o.trigger('/popup-schedule/initialize-form')
        }

        function y() {
            u.removeClass('start-project-overlay-show'),
                c.removeClass('thank-you-overlay-show'),
                d.removeClass('popup-active'),
                n.removeClass('popup-open'),
                l.removeClass('open'),
                v.offset({
                    top: 0
                }),
                r.scrollTop(m),
                f.find('input, textarea').attr('tabindex', ''),
                g.attr('tabindex', '-1')
        }
        t(
                '.popup-close, .popup-overlay, .start-project-popup-close, #thank-you-popup-close'
            ).on('click', y),
            p.on('click', w.bind(this, h, 'schedule')),
            a.on('click', w.bind(this, s, 'start-your-project')),
            o.on('/device/android /device/ios', function() {
                i || ((i = !0), n.addClass('fix-content-mobile'))
            }),
            o.on('/device/ios', function() {
                g.css('pointer-events', 'none'),
                    l.on('touchmove', function() {
                        g.css('pointer-events', 'none')
                    }),
                    l.on('touchstart', function() {
                        g.css('pointer-events', 'auto')
                    }),
                    f.on('touchstart', function() {
                        t(this)
                            .find('input:focus, textarea')
                            .blur()
                    })
            }),
            navigator.appVersion.toLowerCase().indexOf('mac') >= 0 ||
            o.keydown(function(e) {
                27 === e.keyCode && n.hasClass('popup-open') && y()
            })
    })
})(window, document, jQuery)
var feedbackData = (function() {
    var e = {}
    return (
        (e.feedbackReviews = [{
                authorName: 'Ricardo Casas',
                authorPosition: 'CEO, Fahrenheit Marketing',
                rating: 5,
                paragraphs: [
                    '"prophecy created a perfect, seamless integration with every feature we requested"'
                ]
            },
            {
                authorName: 'Todd Surber',
                authorPosition: 'Founder & CEO, Pixrit',
                rating: 5,
                paragraphs: [
                    '"There were no gray areas or misunderstandings because they were honest with me."'
                ]
            },
            {
                authorName: 'Chris Cox',
                authorPosition: 'VP, CTO, MyMelo',
                rating: 4.5,
                paragraphs: [
                    '"Their team has a deep skill set that covers all our engineering needs."'
                ]
            },
            {
                authorName: 'Rudy Milkovic',
                authorPosition: 'Executive Director & Founder, Velikom Interational',
                rating: 5,
                paragraphs: [
                    '"They proved their technical expertise and project experience from the get-go."'
                ]
            },
            {
                authorName: 'Bill Fahy',
                authorPosition: 'VP, Web Design & Marketing Firm',
                rating: 5,
                paragraphs: [
                    '"prophecy delivered everything on time and communicated payments clearly, so it has been a positive experience"'
                ]
            },
            {
                authorName: 'Vince Hughes',
                authorPosition: 'Owner, Steel Estimating Solutions',
                rating: 5,
                paragraphs: [
                    '"Communication was huge for me and I was very impressed with how they handled themselves."'
                ]
            },
            {
                authorName: 'Joyce Cubio',
                authorPosition: "VP, Ernie's Mobile Home Transport",
                rating: 5,
                paragraphs: [
                    '"Their dedication and willingness to help were impressive. They were efficient and kept everyone on task."'
                ]
            },
            {
                authorName: 'John Fox',
                authorPosition: 'VP, Fox Business Automation Solutions',
                rating: 5,
                paragraphs: [
                    '"Their understanding of our business’ needs is valuable to us."'
                ]
            },
            {
                authorName: 'Cory Kowal',
                authorPosition: 'VP of Product, THG Energy Solutions',
                rating: 5,
                paragraphs: [
                    '"I\'ve been impressed by their willingness to do right by us and our customers."'
                ]
            },
            {
                authorName: 'David Snyder',
                authorPosition: 'Founder, Covid Resource Network',
                rating: 5,
                paragraphs: [
                    '"The website they developed is fully-functional, powerful, and easy-to-use."'
                ]
            }
        ]),
        e
    )
})()
if ('undefined' != typeof module && void 0 !== module.exports)
    module.exports = feedbackData
else {
    var $ = jQuery,
        $document = $(document)
    $document.on('/feedback/data/get', function() {
        $document.trigger('/feedback/data/set', [feedbackData])
    })
}!(function(e, a, t) {
    var o = t(a),
        n = t('.feedback-wrapper .reviews-list'),
        r = t('.pagination-container'),
        i = t('.feedback-rating-number'),
        s = t('.rating-stars-filled'),
        p = e.innerWidth < 768 ? 1 : 3,
        u =
        '<path d="M6.5 1L1 6.5L6.5 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    o.ready(function() {
        var e = 1 === t('.feedback-wrapper').length,
            a = {}
        if (e) {
            o.on('/feedback/data/set', function(e, t) {
                    a = t
                }),
                o.trigger('/feedback/data/get')
            var c,
                d,
                h = (
                    (c = a.feedbackReviews).reduce(function(e, a) {
                        return e + a.rating
                    }, 0) / c.length
                ).toFixed(1),
                l = (function(e) {
                    return Math.round((100 * e) / 5)
                })(h);
            (d = a.feedbackReviews),
            r.pagination({
                    dataSource: d,
                    pageSize: p,
                    showPageNumbers: !1,
                    prevText: '<svg focusable="false" class="icon-svg" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">'.concat(
                        u,
                        '</svg>'
                    ),
                    nextText: '<svg focusable="false" class="icon-svg" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">'.concat(
                        u,
                        '</svg>'
                    ),
                    callback: function(e) {
                        var a = (function(e) {
                            var a = []
                            return (
                                t.each(e, function(e, t) {
                                    var o = (function(e) {
                                        return '\n            <div class="reviews-block">\n                <p>'
                                            .concat(
                                                e.paragraphs
                                                .map(function(e) {
                                                    return '<p class="reviews-paragraph">'.concat(
                                                        e,
                                                        '</p>'
                                                    )
                                                })
                                                .join(''),
                                                '</p>\n                <p class="reviews-author-info">\n                    '
                                            )
                                            .concat(
                                                e.authorName ?
                                                '<span class="reviews-author-name">'.concat(
                                                    e.authorName,
                                                    '</span><br>'
                                                ) :
                                                '',
                                                '\n                    <span class="reviews-author-position">'
                                            )
                                            .concat(
                                                e.authorPosition,
                                                '</span>              \n                </p>\n            </div>'
                                            )
                                    })(t)
                                    a.push(o)
                                }),
                                a
                            )
                        })(e)
                        n.html(a)
                    },
                    afterIsFirstPage: function() {
                        t('.paginationjs-prev').click(function() {
                            var e = r.pagination('getTotalPage')
                            r.pagination(e)
                        })
                    },
                    afterIsLastPage: function() {
                        t('.paginationjs-next').click(function() {
                            r.pagination(1)
                        })
                    }
                }),
                i.append(h),
                s.width(''.concat(l, '%'))
        }
    })
})(window, document, jQuery)