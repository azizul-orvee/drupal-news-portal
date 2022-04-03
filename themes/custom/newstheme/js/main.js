jQuery(document).ready(function(e) {}), ! function(e, t, n) {
    function i(e) { var t = k.className,
            n = w._config.classPrefix || ""; if (C && (t = t.baseVal), w._config.enableJSClass) { var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2") }
        w._config.enableClasses && (t += " " + n + e.join(" " + n), C ? k.className.baseVal = t : k.className = t) }

    function r(e, t) { return typeof e === t }

    function o() { var e, t, n, i, o, a, s; for (var d in x) { if (e = [], t = x[d], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase()); for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) a = e[o], s = a.split("."), 1 === s.length ? w[s[0]] = i : (!w[s[0]] || w[s[0]] instanceof Boolean || (w[s[0]] = new Boolean(w[s[0]])), w[s[0]][s[1]] = i), y.push((i ? "" : "no-") + s.join("-")) } }

    function a() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) }

    function s(e, t) { if ("object" == typeof e)
            for (var n in e) q(e, n) && s(n, e[n]);
        else { e = e.toLowerCase(); var r = e.split("."),
                o = w[r[0]]; if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return w;
            t = "function" == typeof t ? t() : t, 1 == r.length ? w[r[0]] = t : (!w[r[0]] || w[r[0]] instanceof Boolean || (w[r[0]] = new Boolean(w[r[0]])), w[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), w._trigger(e, t) } return w }

    function d(e) { return e.replace(/([a-z])-([a-z])/g, function(e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") }

    function l(e, t) { return !!~("" + e).indexOf(t) }

    function u() { var e = t.body; return e || (e = a(C ? "svg" : "body"), e.fake = !0), e }

    function c(e, n, i, r) { var o, s, d, l, c = "modernizr",
            f = a("div"),
            p = u(); if (parseInt(i, 10))
            for (; i--;) d = a("div"), d.id = r ? r[i] : c + (i + 1), f.appendChild(d); return o = a("style"), o.type = "text/css", o.id = "s" + c, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = k.style.overflow, k.style.overflow = "hidden", k.appendChild(p)), s = n(f, e), p.fake ? (p.parentNode.removeChild(p), k.style.overflow = l, k.offsetHeight) : f.parentNode.removeChild(f), !!s }

    function f(e, t) { return function() { return e.apply(t, arguments) } }

    function p(e, t, n) { var i; for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? f(i, n || t) : i);
        return !1 }

    function m(e) { return e.replace(/([A-Z])/g, function(e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function h(t, i) { var r = t.length; if ("CSS" in e && "supports" in e.CSS) { for (; r--;)
                if (e.CSS.supports(m(t[r]), i)) return !0;
            return !1 } if ("CSSSupportsRule" in e) { for (var o = []; r--;) o.push("(" + m(t[r]) + ":" + i + ")"); return o = o.join(" or "), c("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == getComputedStyle(e, null).position }) } return n }

    function b(e, t, i, o) {
        function s() { c && (delete O.style, delete O.modElem) } if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) { var u = h(e, i); if (!r(u, "undefined")) return u } for (var c, f, p, m, b, g = ["modernizr", "tspan"]; !O.style;) c = !0, O.modElem = a(g.shift()), O.style = O.modElem.style; for (p = e.length, f = 0; p > f; f++)
            if (m = e[f], b = O.style[m], l(m, "-") && (m = d(m)), O.style[m] !== n) { if (o || r(i, "undefined")) return s(), "pfx" == t ? m : !0; try { O.style[m] = i } catch (v) {} if (O.style[m] != b) return s(), "pfx" == t ? m : !0 }
        return s(), !1 }

    function g(e, t, n, i, o) { var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + R.join(a + " ") + a).split(" "); return r(t, "string") || r(t, "undefined") ? b(s, t, i, o) : (s = (e + " " + B.join(a + " ") + a).split(" "), p(s, t, n)) }

    function v(e, t, i) { return g(e, n, n, t, i) } var y = [],
        x = [],
        T = { _version: "3.0.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, t) { var n = this;
                setTimeout(function() { t(n[e]) }, 0) }, addTest: function(e, t, n) { x.push({ name: e, fn: t, options: n }) }, addAsyncTest: function(e) { x.push({ name: null, fn: e }) } },
        w = function() {};
    w.prototype = T, w = new w, w.addTest("cookies", function() { try { t.cookie = "cookietest=1"; var e = -1 != t.cookie.indexOf("cookietest="); return t.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e } catch (n) { return !1 } }), w.addTest("ie8compat", !e.addEventListener && !!t.documentMode && 7 === t.documentMode), w.addTest("serviceworker", "serviceWorker" in navigator), w.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), w.addTest("websockets", "WebSocket" in e && 2 === e.WebSocket.CLOSING); var k = t.documentElement,
        C = "svg" === k.nodeName.toLowerCase();
    w.addTest("canvas", function() { var e = a("canvas"); return !(!e.getContext || !e.getContext("2d")) }), w.addTest("canvastext", function() { return w.canvas === !1 ? !1 : "function" == typeof a("canvas").getContext("2d").fillText }); var S = a("input"),
        E = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        _ = {};
    w.inputtypes = function(e) { for (var i, r, o, a = e.length, s = ":)", d = 0; a > d; d++) S.setAttribute("type", i = e[d]), o = "text" !== S.type && "style" in S, o && (S.value = s, S.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && S.style.WebkitAppearance !== n ? (k.appendChild(S), r = t.defaultView, o = r.getComputedStyle && "textfield" !== r.getComputedStyle(S, null).WebkitAppearance && 0 !== S.offsetHeight, k.removeChild(S)) : /^(search|tel)$/.test(i) || (o = /^(url|email|number)$/.test(i) ? S.checkValidity && S.checkValidity() === !1 : S.value != s)), _[e[d]] = !!o; return _ }(E), w.addTest("userdata", !!a("div").addBehavior), w.addTest("video", function() { var e = a("video"),
            t = !1; try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "")) } catch (n) {} return t }), w.addTest("multiplebgs", function() { var e = a("a").style; return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background) }), w.addTest("rgba", function() { var e = a("a").style; return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1 }), w.addTest("placeholder", "placeholder" in a("input") && "placeholder" in a("textarea")), w.addTest("inlinesvg", function() { var e = a("div"); return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI) }); var z = function(e) {
        function n(t, n) { var r; return t ? (n && "string" != typeof n || (n = a(n || "div")), t = "on" + t, r = t in n, !r && i && (n.setAttribute || (n = a("div")), n.setAttribute(t, ""), r = "function" == typeof n[t], n[t] !== e && (n[t] = e), n.removeAttribute(t)), r) : !1 } var i = !("onblur" in t.documentElement); return n }();
    T.hasEvent = z, w.addTest("ambientlight", z("devicelight", e)), w.addTest("inputsearchevent", z("search")); var j = T._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    T._prefixes = j, w.addTest("csscalc", function() { var e = "width:",
            t = "calc(10px);",
            n = a("a"); return n.style.cssText = e + j.join(t + e), !!n.style.length }), w.addTest("cssgradients", function() { var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);",
            i = e + j.join(n + e).slice(0, -e.length);
        w._config.usePrefixes && (i += e + "-webkit-" + t); var r = a("a"),
            o = r.style; return o.cssText = i, ("" + o.backgroundImage).indexOf("gradient") > -1 }), w.addTest("opacity", function() { var e = a("a").style; return e.cssText = j.join("opacity:.55;"), /^0.55$/.test(e.opacity) }); var P = "CSS" in e && "supports" in e.CSS,
        L = "supportsCSS" in e;
    w.addTest("supports", P || L); var q;! function() { var e = {}.hasOwnProperty;
        q = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) { return t in e && r(e.constructor.prototype[t], "undefined") } : function(t, n) { return e.call(t, n) } }(), T._l = {}, T.on = function(e, t) { this._l[e] || (this._l[e] = []), this._l[e].push(t), w.hasOwnProperty(e) && setTimeout(function() { w._trigger(e, w[e]) }, 0) }, T._trigger = function(e, t) { if (this._l[e]) { var n = this._l[e];
            setTimeout(function() { var e, i; for (e = 0; e < n.length; e++)(i = n[e])(t) }, 0), delete this._l[e] } }, w._q.push(function() { T.addTest = s }), w.addTest("svgasimg", t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")); var A = "Moz O ms Webkit",
        R = T._config.usePrefixes ? A.split(" ") : [];
    T._cssomPrefixes = R; var M = function(t) { var i, r = j.length,
            o = e.CSSRule; if ("undefined" == typeof o) return n; if (!t) return !1; if (t = t.replace(/^@/, ""), i = t.replace(/-/g, "_").toUpperCase() + "_RULE", i in o) return "@" + t; for (var a = 0; r > a; a++) { var s = j[a],
                d = s.toUpperCase() + "_" + i; if (d in o) return "@-" + s.toLowerCase() + "-" + t } return !1 };
    T.atRule = M; var B = T._config.usePrefixes ? A.toLowerCase().split(" ") : [];
    T._domPrefixes = B; var H = T.testStyles = c;
    w.addTest("touchevents", function() { var n; if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else { var i = ["@media (", j.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            H(i, function(e) { n = 9 === e.offsetTop }) } return n }), w.addTest("checked", function() { return H("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function(e) { var t = a("input"); return t.setAttribute("type", "checkbox"), t.setAttribute("checked", "checked"), e.appendChild(t), 20 === t.offsetLeft }) }), H("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function(e) { var t, n = e.childNodes;
        t = n[0].offsetLeft < n[1].offsetLeft, w.addTest("displaytable", t, { aliases: ["display-table"] }) }, 2); var N = function() { var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            n = e.match(/w(eb)?osbrowser/gi),
            i = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            r = 533 > t && e.match(/android/gi); return n || r || i }();
    N ? w.addTest("fontface", !1) : H('@font-face {font-family:"font";src:url("https://")}', function(e, n) { var i = t.getElementById("smodernizr"),
            r = i.sheet || i.styleSheet,
            o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "",
            a = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        w.addTest("fontface", a) }), w.addTest("cssinvalid", function() { return H("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", function(e) { var t = a("input"); return t.required = !0, e.appendChild(t), t.clientWidth > 10 }) }), H("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) { w.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth) }, 2), H("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function(e) { w.addTest("nthchild", function() { for (var t = e.getElementsByTagName("div"), n = !0, i = 0; 5 > i; i++) n = n && t[i].offsetWidth === i % 2 + 1; return n }) }, 5); var W = function() { var t = e.matchMedia || e.msMatchMedia; return t ? function(e) { var n = t(e); return n && n.matches || !1 } : function(t) { var n = !1; return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) { n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position }), n } }();
    T.mq = W, w.addTest("mediaqueries", W("only all")); var $ = { elem: a("modernizr") };
    w._q.push(function() { delete $.elem }); var O = { style: $.elem.style };
    w._q.unshift(function() { delete O.style }); var U = T.testProp = function(e, t, i) { return b([e], n, t, i) };
    w.addTest("textshadow", U("textShadow", "1px 1px")), T.testAllProps = g, T.testAllProps = v, w.addTest("bgpositionxy", function() { return v("backgroundPositionX", "3px", !0) && v("backgroundPositionY", "5px", !0) }), w.addTest("backgroundsize", v("backgroundSize", "100%", !0)), w.addTest("bgsizecover", v("backgroundSize", "cover")), w.addTest("borderimage", v("borderImage", "url() 1", !0)), w.addTest("borderradius", v("borderRadius", "0px", !0)), w.addTest("boxshadow", v("boxShadow", "1px 1px", !0)), w.addTest("boxsizing", v("boxSizing", "border-box", !0) && (t.documentMode === n || t.documentMode > 7)), w.addTest("flexbox", v("flexBasis", "1px", !0)), w.addTest("flexboxlegacy", v("boxDirection", "reverse", !0)), w.addTest("flexboxtweener", v("flexAlign", "end", !0)), w.addTest("flexwrap", v("flexWrap", "wrap", !0)), w.addAsyncTest(function() {
        function n() {
            function r() { try { var e = a("div"),
                        n = a("span"),
                        i = e.style,
                        r = 0,
                        o = 0,
                        s = !1,
                        d = t.body.firstElementChild || t.body.firstChild; return e.appendChild(n), n.innerHTML = "Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.", t.body.insertBefore(e, d), i.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;", r = n.offsetHeight, o = n.offsetWidth, i.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;" + j.join("hyphens:auto; "), s = n.offsetHeight != r || n.offsetWidth != o, t.body.removeChild(e), e.removeChild(n), s } catch (l) { return !1 } }

            function o(e, n) { try { var i = a("div"),
                        r = a("span"),
                        o = i.style,
                        s = 0,
                        d = !1,
                        l = !1,
                        u = !1,
                        c = t.body.firstElementChild || t.body.firstChild; return o.cssText = "position:absolute;top:0;left:0;overflow:visible;width:1.25em;", i.appendChild(r), t.body.insertBefore(i, c), r.innerHTML = "mm", s = r.offsetHeight, r.innerHTML = "m" + e + "m", l = r.offsetHeight > s, n ? (r.innerHTML = "m<br />m", s = r.offsetWidth, r.innerHTML = "m" + e + "m", u = r.offsetWidth > s) : u = !0, l === !0 && u === !0 && (d = !0), t.body.removeChild(i), i.removeChild(r), d } catch (f) { return !1 } }

            function d(n) { try { var i, r = a("input"),
                        o = a("div"),
                        s = "lebowski",
                        d = !1,
                        l = t.body.firstElementChild || t.body.firstChild; if (o.innerHTML = s + n + s, t.body.insertBefore(o, l), t.body.insertBefore(r, o), r.setSelectionRange ? (r.focus(), r.setSelectionRange(0, 0)) : r.createTextRange && (i = r.createTextRange(), i.collapse(!0), i.moveEnd("character", 0), i.moveStart("character", 0), i.select()), e.find) d = e.find(s + s);
                    else try { i = e.self.document.body.createTextRange(), d = i.findText(s + s) } catch (u) { d = !1 }
                    return t.body.removeChild(o), t.body.removeChild(r), d } catch (u) { return !1 } } return t.body || t.getElementsByTagName("body")[0] ? (s("csshyphens", function() { if (!v("hyphens", "auto", !0)) return !1; try { return r() } catch (e) { return !1 } }), s("softhyphens", function() { try { return o("&#173;", !0) && o("&#8203;", !1) } catch (e) { return !1 } }), void s("softhyphensfind", function() { try { return d("&#173;") && d("&#8203;") } catch (e) { return !1 } })) : void setTimeout(n, i) } var i = 300;
        setTimeout(n, i) }), w.addTest("csstransforms", function() { return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0) }), w.addTest("csstransforms3d", function() { var e = !!v("perspective", "1px", !0),
            t = w._config.usePrefixes; if (e && (!t || "webkitPerspective" in k.style)) { var n;
            w.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}", H(n, function(t) { e = 9 === t.offsetLeft && 5 === t.offsetHeight }) } return e }), w.addTest("preserve3d", v("transformStyle", "preserve-3d")), w.addTest("csstransitions", v("transition", "all", !0)); var V = T.prefixed = function(e, t, n) { return 0 === e.indexOf("@") ? M(e) : (-1 != e.indexOf("-") && (e = d(e)), t ? g(e, t, n) : g(e, "pfx")) };
    w.addTest("objectfit", !!V("objectFit"), { aliases: ["object-fit"] }), o(), i(y), delete T.addTest, delete T.addAsyncTest; for (var I = 0; I < w._q.length; I++) w._q[I]();
    e.Modernizr = w }(window, document);