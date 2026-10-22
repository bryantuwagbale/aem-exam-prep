(() => {
  var Af = Object.create;
  var Es = Object.defineProperty;
  var Tf = Object.getOwnPropertyDescriptor;
  var Ff = Object.getOwnPropertyNames;
  var Bf = Object.getPrototypeOf,
    Df = Object.prototype.hasOwnProperty;
  var Bt = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t),
    t.exports
  );
  var bf = (e, t, a, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let r of Ff(t))
        !Df.call(e, r) &&
          r !== a &&
          Es(e, r, {
            get: () => t[r],
            enumerable: !(o = Tf(t, r)) || o.enumerable,
          });
    return e;
  };
  var Ba = (e, t, a) => (
    (a = e != null ? Af(Bf(e)) : {}),
    bf(
      t || !e || !e.__esModule
        ? Es(a, "default", { value: e, enumerable: !0 })
        : a,
      e,
    )
  );
  var Gs = Bt((D) => {
    "use strict";
    var Da = Symbol.for("react.element"),
      Ef = Symbol.for("react.portal"),
      qf = Symbol.for("react.fragment"),
      Of = Symbol.for("react.strict_mode"),
      Rf = Symbol.for("react.profiler"),
      zf = Symbol.for("react.provider"),
      Uf = Symbol.for("react.context"),
      Nf = Symbol.for("react.forward_ref"),
      Hf = Symbol.for("react.suspense"),
      Wf = Symbol.for("react.memo"),
      _f = Symbol.for("react.lazy"),
      qs = Symbol.iterator;
    function Vf(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (qs && e[qs]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var zs = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Us = Object.assign,
      Ns = {};
    function Jt(e, t, a) {
      ((this.props = e),
        (this.context = t),
        (this.refs = Ns),
        (this.updater = a || zs));
    }
    Jt.prototype.isReactComponent = {};
    Jt.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    Jt.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function Hs() {}
    Hs.prototype = Jt.prototype;
    function sn(e, t, a) {
      ((this.props = e),
        (this.context = t),
        (this.refs = Ns),
        (this.updater = a || zs));
    }
    var un = (sn.prototype = new Hs());
    un.constructor = sn;
    Us(un, Jt.prototype);
    un.isPureReactComponent = !0;
    var Os = Array.isArray,
      Ws = Object.prototype.hasOwnProperty,
      dn = { current: null },
      _s = { key: !0, ref: !0, __self: !0, __source: !0 };
    function Vs(e, t, a) {
      var o,
        r = {},
        n = null,
        l = null;
      if (t != null)
        for (o in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (n = "" + t.key),
        t))
          Ws.call(t, o) && !_s.hasOwnProperty(o) && (r[o] = t[o]);
      var s = arguments.length - 2;
      if (s === 1) r.children = a;
      else if (1 < s) {
        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u;
      }
      if (e && e.defaultProps)
        for (o in ((s = e.defaultProps), s)) r[o] === void 0 && (r[o] = s[o]);
      return {
        $$typeof: Da,
        type: e,
        key: n,
        ref: l,
        props: r,
        _owner: dn.current,
      };
    }
    function jf(e, t) {
      return {
        $$typeof: Da,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function fn(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Da;
    }
    function Gf(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (a) {
          return t[a];
        })
      );
    }
    var Rs = /\/+/g;
    function ln(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? Gf("" + e.key)
        : t.toString(36);
    }
    function Oo(e, t, a, o, r) {
      var n = typeof e;
      (n === "undefined" || n === "boolean") && (e = null);
      var l = !1;
      if (e === null) l = !0;
      else
        switch (n) {
          case "string":
          case "number":
            l = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case Da:
              case Ef:
                l = !0;
            }
        }
      if (l)
        return (
          (l = e),
          (r = r(l)),
          (e = o === "" ? "." + ln(l, 0) : o),
          Os(r)
            ? ((a = ""),
              e != null && (a = e.replace(Rs, "$&/") + "/"),
              Oo(r, t, a, "", function (c) {
                return c;
              }))
            : r != null &&
              (fn(r) &&
                (r = jf(
                  r,
                  a +
                    (!r.key || (l && l.key === r.key)
                      ? ""
                      : ("" + r.key).replace(Rs, "$&/") + "/") +
                    e,
                )),
              t.push(r)),
          1
        );
      if (((l = 0), (o = o === "" ? "." : o + ":"), Os(e)))
        for (var s = 0; s < e.length; s++) {
          n = e[s];
          var u = o + ln(n, s);
          l += Oo(n, t, a, u, r);
        }
      else if (((u = Vf(e)), typeof u == "function"))
        for (e = u.call(e), s = 0; !(n = e.next()).done;)
          ((n = n.value), (u = o + ln(n, s++)), (l += Oo(n, t, a, u, r)));
      else if (n === "object")
        throw (
          (t = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              (t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      return l;
    }
    function qo(e, t, a) {
      if (e == null) return e;
      var o = [],
        r = 0;
      return (
        Oo(e, o, "", "", function (n) {
          return t.call(a, n, r++);
        }),
        o
      );
    }
    function $f(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (a) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = a));
            },
            function (a) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = a));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var de = { current: null },
      Ro = { transition: null },
      Qf = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: Ro,
        ReactCurrentOwner: dn,
      };
    function js() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    D.Children = {
      map: qo,
      forEach: function (e, t, a) {
        qo(
          e,
          function () {
            t.apply(this, arguments);
          },
          a,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          qo(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          qo(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!fn(e))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return e;
      },
    };
    D.Component = Jt;
    D.Fragment = qf;
    D.Profiler = Rf;
    D.PureComponent = sn;
    D.StrictMode = Of;
    D.Suspense = Hf;
    D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qf;
    D.act = js;
    D.cloneElement = function (e, t, a) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var o = Us({}, e.props),
        r = e.key,
        n = e.ref,
        l = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((n = t.ref), (l = dn.current)),
          t.key !== void 0 && (r = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps;
        for (u in t)
          Ws.call(t, u) &&
            !_s.hasOwnProperty(u) &&
            (o[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
      }
      var u = arguments.length - 2;
      if (u === 1) o.children = a;
      else if (1 < u) {
        s = Array(u);
        for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
        o.children = s;
      }
      return {
        $$typeof: Da,
        type: e.type,
        key: r,
        ref: n,
        props: o,
        _owner: l,
      };
    };
    D.createContext = function (e) {
      return (
        (e = {
          $$typeof: Uf,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: zf, _context: e }),
        (e.Consumer = e)
      );
    };
    D.createElement = Vs;
    D.createFactory = function (e) {
      var t = Vs.bind(null, e);
      return ((t.type = e), t);
    };
    D.createRef = function () {
      return { current: null };
    };
    D.forwardRef = function (e) {
      return { $$typeof: Nf, render: e };
    };
    D.isValidElement = fn;
    D.lazy = function (e) {
      return { $$typeof: _f, _payload: { _status: -1, _result: e }, _init: $f };
    };
    D.memo = function (e, t) {
      return { $$typeof: Wf, type: e, compare: t === void 0 ? null : t };
    };
    D.startTransition = function (e) {
      var t = Ro.transition;
      Ro.transition = {};
      try {
        e();
      } finally {
        Ro.transition = t;
      }
    };
    D.unstable_act = js;
    D.useCallback = function (e, t) {
      return de.current.useCallback(e, t);
    };
    D.useContext = function (e) {
      return de.current.useContext(e);
    };
    D.useDebugValue = function () {};
    D.useDeferredValue = function (e) {
      return de.current.useDeferredValue(e);
    };
    D.useEffect = function (e, t) {
      return de.current.useEffect(e, t);
    };
    D.useId = function () {
      return de.current.useId();
    };
    D.useImperativeHandle = function (e, t, a) {
      return de.current.useImperativeHandle(e, t, a);
    };
    D.useInsertionEffect = function (e, t) {
      return de.current.useInsertionEffect(e, t);
    };
    D.useLayoutEffect = function (e, t) {
      return de.current.useLayoutEffect(e, t);
    };
    D.useMemo = function (e, t) {
      return de.current.useMemo(e, t);
    };
    D.useReducer = function (e, t, a) {
      return de.current.useReducer(e, t, a);
    };
    D.useRef = function (e) {
      return de.current.useRef(e);
    };
    D.useState = function (e) {
      return de.current.useState(e);
    };
    D.useSyncExternalStore = function (e, t, a) {
      return de.current.useSyncExternalStore(e, t, a);
    };
    D.useTransition = function () {
      return de.current.useTransition();
    };
    D.version = "18.3.1";
  });
  var Kt = Bt((cm, $s) => {
    "use strict";
    $s.exports = Gs();
  });
  var oi = Bt((R) => {
    "use strict";
    function hn(e, t) {
      var a = e.length;
      e.push(t);
      e: for (; 0 < a;) {
        var o = (a - 1) >>> 1,
          r = e[o];
        if (0 < zo(r, t)) ((e[o] = t), (e[a] = r), (a = o));
        else break e;
      }
    }
    function qe(e) {
      return e.length === 0 ? null : e[0];
    }
    function No(e) {
      if (e.length === 0) return null;
      var t = e[0],
        a = e.pop();
      if (a !== t) {
        e[0] = a;
        e: for (var o = 0, r = e.length, n = r >>> 1; o < n;) {
          var l = 2 * (o + 1) - 1,
            s = e[l],
            u = l + 1,
            c = e[u];
          if (0 > zo(s, a))
            u < r && 0 > zo(c, s)
              ? ((e[o] = c), (e[u] = a), (o = u))
              : ((e[o] = s), (e[l] = a), (o = l));
          else if (u < r && 0 > zo(c, a)) ((e[o] = c), (e[u] = a), (o = u));
          else break e;
        }
      }
      return t;
    }
    function zo(e, t) {
      var a = e.sortIndex - t.sortIndex;
      return a !== 0 ? a : e.id - t.id;
    }
    typeof performance == "object" && typeof performance.now == "function"
      ? ((Qs = performance),
        (R.unstable_now = function () {
          return Qs.now();
        }))
      : ((cn = Date),
        (Xs = cn.now()),
        (R.unstable_now = function () {
          return cn.now() - Xs;
        }));
    var Qs,
      cn,
      Xs,
      _e = [],
      it = [],
      Xf = 1,
      Ae = null,
      ne = 3,
      Ho = !1,
      Dt = !1,
      Ea = !1,
      Ys = typeof setTimeout == "function" ? setTimeout : null,
      Zs = typeof clearTimeout == "function" ? clearTimeout : null,
      Js = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function gn(e) {
      for (var t = qe(it); t !== null;) {
        if (t.callback === null) No(it);
        else if (t.startTime <= e)
          (No(it), (t.sortIndex = t.expirationTime), hn(_e, t));
        else break;
        t = qe(it);
      }
    }
    function xn(e) {
      if (((Ea = !1), gn(e), !Dt))
        if (qe(_e) !== null) ((Dt = !0), Ln(yn));
        else {
          var t = qe(it);
          t !== null && Sn(xn, t.startTime - e);
        }
    }
    function yn(e, t) {
      ((Dt = !1), Ea && ((Ea = !1), Zs(qa), (qa = -1)), (Ho = !0));
      var a = ne;
      try {
        for (
          gn(t), Ae = qe(_e);
          Ae !== null && (!(Ae.expirationTime > t) || (e && !ai()));
        ) {
          var o = Ae.callback;
          if (typeof o == "function") {
            ((Ae.callback = null), (ne = Ae.priorityLevel));
            var r = o(Ae.expirationTime <= t);
            ((t = R.unstable_now()),
              typeof r == "function"
                ? (Ae.callback = r)
                : Ae === qe(_e) && No(_e),
              gn(t));
          } else No(_e);
          Ae = qe(_e);
        }
        if (Ae !== null) var n = !0;
        else {
          var l = qe(it);
          (l !== null && Sn(xn, l.startTime - t), (n = !1));
        }
        return n;
      } finally {
        ((Ae = null), (ne = a), (Ho = !1));
      }
    }
    var Wo = !1,
      Uo = null,
      qa = -1,
      ei = 5,
      ti = -1;
    function ai() {
      return !(R.unstable_now() - ti < ei);
    }
    function pn() {
      if (Uo !== null) {
        var e = R.unstable_now();
        ti = e;
        var t = !0;
        try {
          t = Uo(!0, e);
        } finally {
          t ? ba() : ((Wo = !1), (Uo = null));
        }
      } else Wo = !1;
    }
    var ba;
    typeof Js == "function"
      ? (ba = function () {
          Js(pn);
        })
      : typeof MessageChannel != "undefined"
        ? ((mn = new MessageChannel()),
          (Ks = mn.port2),
          (mn.port1.onmessage = pn),
          (ba = function () {
            Ks.postMessage(null);
          }))
        : (ba = function () {
            Ys(pn, 0);
          });
    var mn, Ks;
    function Ln(e) {
      ((Uo = e), Wo || ((Wo = !0), ba()));
    }
    function Sn(e, t) {
      qa = Ys(function () {
        e(R.unstable_now());
      }, t);
    }
    R.unstable_IdlePriority = 5;
    R.unstable_ImmediatePriority = 1;
    R.unstable_LowPriority = 4;
    R.unstable_NormalPriority = 3;
    R.unstable_Profiling = null;
    R.unstable_UserBlockingPriority = 2;
    R.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    R.unstable_continueExecution = function () {
      Dt || Ho || ((Dt = !0), Ln(yn));
    };
    R.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (ei = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    R.unstable_getCurrentPriorityLevel = function () {
      return ne;
    };
    R.unstable_getFirstCallbackNode = function () {
      return qe(_e);
    };
    R.unstable_next = function (e) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = ne;
      }
      var a = ne;
      ne = t;
      try {
        return e();
      } finally {
        ne = a;
      }
    };
    R.unstable_pauseExecution = function () {};
    R.unstable_requestPaint = function () {};
    R.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var a = ne;
      ne = e;
      try {
        return t();
      } finally {
        ne = a;
      }
    };
    R.unstable_scheduleCallback = function (e, t, a) {
      var o = R.unstable_now();
      switch (
        (typeof a == "object" && a !== null
          ? ((a = a.delay), (a = typeof a == "number" && 0 < a ? o + a : o))
          : (a = o),
        e)
      ) {
        case 1:
          var r = -1;
          break;
        case 2:
          r = 250;
          break;
        case 5:
          r = 1073741823;
          break;
        case 4:
          r = 1e4;
          break;
        default:
          r = 5e3;
      }
      return (
        (r = a + r),
        (e = {
          id: Xf++,
          callback: t,
          priorityLevel: e,
          startTime: a,
          expirationTime: r,
          sortIndex: -1,
        }),
        a > o
          ? ((e.sortIndex = a),
            hn(it, e),
            qe(_e) === null &&
              e === qe(it) &&
              (Ea ? (Zs(qa), (qa = -1)) : (Ea = !0), Sn(xn, a - o)))
          : ((e.sortIndex = r), hn(_e, e), Dt || Ho || ((Dt = !0), Ln(yn))),
        e
      );
    };
    R.unstable_shouldYield = ai;
    R.unstable_wrapCallback = function (e) {
      var t = ne;
      return function () {
        var a = ne;
        ne = t;
        try {
          return e.apply(this, arguments);
        } finally {
          ne = a;
        }
      };
    };
  });
  var ni = Bt((mm, ri) => {
    "use strict";
    ri.exports = oi();
  });
  var df = Bt((Pe) => {
    "use strict";
    var Jf = Kt(),
      Ce = ni();
    function S(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          a = 1;
        a < arguments.length;
        a++
      )
        t += "&args[]=" + encodeURIComponent(arguments[a]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var cu = new Set(),
      oo = {};
    function jt(e, t) {
      (ya(e, t), ya(e + "Capture", t));
    }
    function ya(e, t) {
      for (oo[e] = t, e = 0; e < t.length; e++) cu.add(t[e]);
    }
    var tt = !(
        typeof window == "undefined" ||
        typeof window.document == "undefined" ||
        typeof window.document.createElement == "undefined"
      ),
      _n = Object.prototype.hasOwnProperty,
      Kf =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      li = {},
      si = {};
    function Yf(e) {
      return _n.call(si, e)
        ? !0
        : _n.call(li, e)
          ? !1
          : Kf.test(e)
            ? (si[e] = !0)
            : ((li[e] = !0), !1);
    }
    function Zf(e, t, a, o) {
      if (a !== null && a.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return o
            ? !1
            : a !== null
              ? !a.acceptsBooleans
              : ((e = e.toLowerCase().slice(0, 5)),
                e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function ec(e, t, a, o) {
      if (t === null || typeof t == "undefined" || Zf(e, t, a, o)) return !0;
      if (o) return !1;
      if (a !== null)
        switch (a.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function pe(e, t, a, o, r, n, l) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = o),
        (this.attributeNamespace = r),
        (this.mustUseProperty = a),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = n),
        (this.removeEmptyString = l));
    }
    var re = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        re[e] = new pe(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      re[t] = new pe(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        re[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    );
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      re[e] = new pe(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        re[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      re[e] = new pe(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      re[e] = new pe(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      re[e] = new pe(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      re[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var ql = /[\-:]([a-z])/g;
    function Ol(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ql, Ol);
        re[t] = new pe(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ql, Ol);
        re[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ql, Ol);
      re[t] = new pe(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    re.xlinkHref = new pe(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    );
    ["src", "href", "action", "formAction"].forEach(function (e) {
      re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Rl(e, t, a, o) {
      var r = re.hasOwnProperty(t) ? re[t] : null;
      (r !== null
        ? r.type !== 0
        : o ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (ec(t, a, r, o) && (a = null),
        o || r === null
          ? Yf(t) &&
            (a === null ? e.removeAttribute(t) : e.setAttribute(t, "" + a))
          : r.mustUseProperty
            ? (e[r.propertyName] = a === null ? (r.type === 3 ? !1 : "") : a)
            : ((t = r.attributeName),
              (o = r.attributeNamespace),
              a === null
                ? e.removeAttribute(t)
                : ((r = r.type),
                  (a = r === 3 || (r === 4 && a === !0) ? "" : "" + a),
                  o ? e.setAttributeNS(o, t, a) : e.setAttribute(t, a))));
    }
    var nt = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      _o = Symbol.for("react.element"),
      ea = Symbol.for("react.portal"),
      ta = Symbol.for("react.fragment"),
      zl = Symbol.for("react.strict_mode"),
      Vn = Symbol.for("react.profiler"),
      pu = Symbol.for("react.provider"),
      mu = Symbol.for("react.context"),
      Ul = Symbol.for("react.forward_ref"),
      jn = Symbol.for("react.suspense"),
      Gn = Symbol.for("react.suspense_list"),
      Nl = Symbol.for("react.memo"),
      dt = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var hu = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var ii = Symbol.iterator;
    function Oa(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (ii && e[ii]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var G = Object.assign,
      In;
    function Va(e) {
      if (In === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          In = (t && t[1]) || "";
        }
      return (
        `
` +
        In +
        e
      );
    }
    var vn = !1;
    function wn(e, t) {
      if (!e || vn) return "";
      vn = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (c) {
              var o = c;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (c) {
              o = c;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (c) {
            o = c;
          }
          e();
        }
      } catch (c) {
        if (c && o && typeof c.stack == "string") {
          for (
            var r = c.stack.split(`
`),
              n = o.stack.split(`
`),
              l = r.length - 1,
              s = n.length - 1;
            1 <= l && 0 <= s && r[l] !== n[s];
          )
            s--;
          for (; 1 <= l && 0 <= s; l--, s--)
            if (r[l] !== n[s]) {
              if (l !== 1 || s !== 1)
                do
                  if ((l--, s--, 0 > s || r[l] !== n[s])) {
                    var u =
                      `
` + r[l].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        u.includes("<anonymous>") &&
                        (u = u.replace("<anonymous>", e.displayName)),
                      u
                    );
                  }
                while (1 <= l && 0 <= s);
              break;
            }
        }
      } finally {
        ((vn = !1), (Error.prepareStackTrace = a));
      }
      return (e = e ? e.displayName || e.name : "") ? Va(e) : "";
    }
    function tc(e) {
      switch (e.tag) {
        case 5:
          return Va(e.type);
        case 16:
          return Va("Lazy");
        case 13:
          return Va("Suspense");
        case 19:
          return Va("SuspenseList");
        case 0:
        case 2:
        case 15:
          return ((e = wn(e.type, !1)), e);
        case 11:
          return ((e = wn(e.type.render, !1)), e);
        case 1:
          return ((e = wn(e.type, !0)), e);
        default:
          return "";
      }
    }
    function $n(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case ta:
          return "Fragment";
        case ea:
          return "Portal";
        case Vn:
          return "Profiler";
        case zl:
          return "StrictMode";
        case jn:
          return "Suspense";
        case Gn:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case mu:
            return (e.displayName || "Context") + ".Consumer";
          case pu:
            return (e._context.displayName || "Context") + ".Provider";
          case Ul:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case Nl:
            return (
              (t = e.displayName || null),
              t !== null ? t : $n(e.type) || "Memo"
            );
          case dt:
            ((t = e._payload), (e = e._init));
            try {
              return $n(e(t));
            } catch (a) {}
        }
      return null;
    }
    function ac(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ""),
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return $n(t);
        case 8:
          return t === zl ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function Ct(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function gu(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function oc(e) {
      var t = gu(e) ? "checked" : "value",
        a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        o = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof a != "undefined" &&
        typeof a.get == "function" &&
        typeof a.set == "function"
      ) {
        var r = a.get,
          n = a.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return r.call(this);
            },
            set: function (l) {
              ((o = "" + l), n.call(this, l));
            },
          }),
          Object.defineProperty(e, t, { enumerable: a.enumerable }),
          {
            getValue: function () {
              return o;
            },
            setValue: function (l) {
              o = "" + l;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Vo(e) {
      e._valueTracker || (e._valueTracker = oc(e));
    }
    function xu(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(),
        o = "";
      return (
        e && (o = gu(e) ? (e.checked ? "true" : "false") : e.value),
        (e = o),
        e !== a ? (t.setValue(e), !0) : !1
      );
    }
    function yr(e) {
      if (
        ((e = e || (typeof document != "undefined" ? document : void 0)),
        typeof e == "undefined")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function Qn(e, t) {
      var a = t.checked;
      return G({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a != null ? a : e._wrapperState.initialChecked,
      });
    }
    function ui(e, t) {
      var a = t.defaultValue == null ? "" : t.defaultValue,
        o = t.checked != null ? t.checked : t.defaultChecked;
      ((a = Ct(t.value != null ? t.value : a)),
        (e._wrapperState = {
          initialChecked: o,
          initialValue: a,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        }));
    }
    function yu(e, t) {
      ((t = t.checked), t != null && Rl(e, "checked", t, !1));
    }
    function Xn(e, t) {
      yu(e, t);
      var a = Ct(t.value),
        o = t.type;
      if (a != null)
        o === "number"
          ? ((a === 0 && e.value === "") || e.value != a) && (e.value = "" + a)
          : e.value !== "" + a && (e.value = "" + a);
      else if (o === "submit" || o === "reset") {
        e.removeAttribute("value");
        return;
      }
      (t.hasOwnProperty("value")
        ? Jn(e, t.type, a)
        : t.hasOwnProperty("defaultValue") && Jn(e, t.type, Ct(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked));
    }
    function di(e, t, a) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type;
        if (!(
          (o !== "submit" && o !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        ))
          return;
        ((t = "" + e._wrapperState.initialValue),
          a || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((a = e.name),
        a !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        a !== "" && (e.name = a));
    }
    function Jn(e, t, a) {
      (t !== "number" || yr(e.ownerDocument) !== e) &&
        (a == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + a && (e.defaultValue = "" + a));
    }
    var ja = Array.isArray;
    function ca(e, t, a, o) {
      if (((e = e.options), t)) {
        t = {};
        for (var r = 0; r < a.length; r++) t["$" + a[r]] = !0;
        for (a = 0; a < e.length; a++)
          ((r = t.hasOwnProperty("$" + e[a].value)),
            e[a].selected !== r && (e[a].selected = r),
            r && o && (e[a].defaultSelected = !0));
      } else {
        for (a = "" + Ct(a), t = null, r = 0; r < e.length; r++) {
          if (e[r].value === a) {
            ((e[r].selected = !0), o && (e[r].defaultSelected = !0));
            return;
          }
          t !== null || e[r].disabled || (t = e[r]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Kn(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
      return G({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function fi(e, t) {
      var a = t.value;
      if (a == null) {
        if (((a = t.children), (t = t.defaultValue), a != null)) {
          if (t != null) throw Error(S(92));
          if (ja(a)) {
            if (1 < a.length) throw Error(S(93));
            a = a[0];
          }
          t = a;
        }
        (t == null && (t = ""), (a = t));
      }
      e._wrapperState = { initialValue: Ct(a) };
    }
    function Lu(e, t) {
      var a = Ct(t.value),
        o = Ct(t.defaultValue);
      (a != null &&
        ((a = "" + a),
        a !== e.value && (e.value = a),
        t.defaultValue == null && e.defaultValue !== a && (e.defaultValue = a)),
        o != null && (e.defaultValue = "" + o));
    }
    function ci(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
    }
    function Su(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Yn(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Su(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
    }
    var jo,
      Iu = (function (e) {
        return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
          ? function (t, a, o, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, a, o, r);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            jo = jo || document.createElement("div"),
              jo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = jo.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild);
        }
      });
    function ro(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Qa = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      rc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Qa).forEach(function (e) {
      rc.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qa[t] = Qa[e]));
      });
    });
    function vu(e, t, a) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : a ||
            typeof t != "number" ||
            t === 0 ||
            (Qa.hasOwnProperty(e) && Qa[e])
          ? ("" + t).trim()
          : t + "px";
    }
    function wu(e, t) {
      e = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var o = a.indexOf("--") === 0,
            r = vu(a, t[a], o);
          (a === "float" && (a = "cssFloat"),
            o ? e.setProperty(a, r) : (e[a] = r));
        }
    }
    var nc = G(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function Zn(e, t) {
      if (t) {
        if (nc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(S(60));
          if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(S(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(S(62));
      }
    }
    function el(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var tl = null;
    function Hl(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var al = null,
      pa = null,
      ma = null;
    function pi(e) {
      if ((e = wo(e))) {
        if (typeof al != "function") throw Error(S(280));
        var t = e.stateNode;
        t && ((t = Gr(t)), al(e.stateNode, e.type, t));
      }
    }
    function Cu(e) {
      pa ? (ma ? ma.push(e) : (ma = [e])) : (pa = e);
    }
    function ku() {
      if (pa) {
        var e = pa,
          t = ma;
        if (((ma = pa = null), pi(e), t))
          for (e = 0; e < t.length; e++) pi(t[e]);
      }
    }
    function Pu(e, t) {
      return e(t);
    }
    function Mu() {}
    var Cn = !1;
    function Au(e, t, a) {
      if (Cn) return e(t, a);
      Cn = !0;
      try {
        return Pu(e, t, a);
      } finally {
        ((Cn = !1), (pa !== null || ma !== null) && (Mu(), ku()));
      }
    }
    function no(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var o = Gr(a);
      if (o === null) return null;
      a = o[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          ((o = !o.disabled) ||
            ((e = e.type),
            (o = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !o));
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function") throw Error(S(231, t, typeof a));
      return a;
    }
    var ol = !1;
    if (tt)
      try {
        ((Yt = {}),
          Object.defineProperty(Yt, "passive", {
            get: function () {
              ol = !0;
            },
          }),
          window.addEventListener("test", Yt, Yt),
          window.removeEventListener("test", Yt, Yt));
      } catch (e) {
        ol = !1;
      }
    var Yt;
    function lc(e, t, a, o, r, n, l, s, u) {
      var c = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, c);
      } catch (g) {
        this.onError(g);
      }
    }
    var Xa = !1,
      Lr = null,
      Sr = !1,
      rl = null,
      sc = {
        onError: function (e) {
          ((Xa = !0), (Lr = e));
        },
      };
    function ic(e, t, a, o, r, n, l, s, u) {
      ((Xa = !1), (Lr = null), lc.apply(sc, arguments));
    }
    function uc(e, t, a, o, r, n, l, s, u) {
      if ((ic.apply(this, arguments), Xa)) {
        if (Xa) {
          var c = Lr;
          ((Xa = !1), (Lr = null));
        } else throw Error(S(198));
        Sr || ((Sr = !0), (rl = c));
      }
    }
    function Gt(e) {
      var t = e,
        a = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (a = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Tu(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function mi(e) {
      if (Gt(e) !== e) throw Error(S(188));
    }
    function dc(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = Gt(e)), t === null)) throw Error(S(188));
        return t !== e ? null : e;
      }
      for (var a = e, o = t; ;) {
        var r = a.return;
        if (r === null) break;
        var n = r.alternate;
        if (n === null) {
          if (((o = r.return), o !== null)) {
            a = o;
            continue;
          }
          break;
        }
        if (r.child === n.child) {
          for (n = r.child; n;) {
            if (n === a) return (mi(r), e);
            if (n === o) return (mi(r), t);
            n = n.sibling;
          }
          throw Error(S(188));
        }
        if (a.return !== o.return) ((a = r), (o = n));
        else {
          for (var l = !1, s = r.child; s;) {
            if (s === a) {
              ((l = !0), (a = r), (o = n));
              break;
            }
            if (s === o) {
              ((l = !0), (o = r), (a = n));
              break;
            }
            s = s.sibling;
          }
          if (!l) {
            for (s = n.child; s;) {
              if (s === a) {
                ((l = !0), (a = n), (o = r));
                break;
              }
              if (s === o) {
                ((l = !0), (o = n), (a = r));
                break;
              }
              s = s.sibling;
            }
            if (!l) throw Error(S(189));
          }
        }
        if (a.alternate !== o) throw Error(S(190));
      }
      if (a.tag !== 3) throw Error(S(188));
      return a.stateNode.current === a ? e : t;
    }
    function Fu(e) {
      return ((e = dc(e)), e !== null ? Bu(e) : null);
    }
    function Bu(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null;) {
        var t = Bu(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var Du = Ce.unstable_scheduleCallback,
      hi = Ce.unstable_cancelCallback,
      fc = Ce.unstable_shouldYield,
      cc = Ce.unstable_requestPaint,
      Q = Ce.unstable_now,
      pc = Ce.unstable_getCurrentPriorityLevel,
      Wl = Ce.unstable_ImmediatePriority,
      bu = Ce.unstable_UserBlockingPriority,
      Ir = Ce.unstable_NormalPriority,
      mc = Ce.unstable_LowPriority,
      Eu = Ce.unstable_IdlePriority,
      Wr = null,
      $e = null;
    function hc(e) {
      if ($e && typeof $e.onCommitFiberRoot == "function")
        try {
          $e.onCommitFiberRoot(Wr, e, void 0, (e.current.flags & 128) === 128);
        } catch (t) {}
    }
    var Ne = Math.clz32 ? Math.clz32 : yc,
      gc = Math.log,
      xc = Math.LN2;
    function yc(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((gc(e) / xc) | 0)) | 0);
    }
    var Go = 64,
      $o = 4194304;
    function Ga(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function vr(e, t) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var o = 0,
        r = e.suspendedLanes,
        n = e.pingedLanes,
        l = a & 268435455;
      if (l !== 0) {
        var s = l & ~r;
        s !== 0 ? (o = Ga(s)) : ((n &= l), n !== 0 && (o = Ga(n)));
      } else ((l = a & ~r), l !== 0 ? (o = Ga(l)) : n !== 0 && (o = Ga(n)));
      if (o === 0) return 0;
      if (
        t !== 0 &&
        t !== o &&
        !(t & r) &&
        ((r = o & -o),
        (n = t & -t),
        r >= n || (r === 16 && (n & 4194240) !== 0))
      )
        return t;
      if ((o & 4 && (o |= a & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= o; 0 < t;)
          ((a = 31 - Ne(t)), (r = 1 << a), (o |= e[a]), (t &= ~r));
      return o;
    }
    function Lc(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Sc(e, t) {
      for (
        var a = e.suspendedLanes,
          o = e.pingedLanes,
          r = e.expirationTimes,
          n = e.pendingLanes;
        0 < n;
      ) {
        var l = 31 - Ne(n),
          s = 1 << l,
          u = r[l];
        (u === -1
          ? (!(s & a) || s & o) && (r[l] = Lc(s, t))
          : u <= t && (e.expiredLanes |= s),
          (n &= ~s));
      }
    }
    function nl(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function qu() {
      var e = Go;
      return ((Go <<= 1), !(Go & 4194240) && (Go = 64), e);
    }
    function kn(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Io(e, t, a) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ne(t)),
        (e[t] = a));
    }
    function Ic(e, t) {
      var a = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var o = e.eventTimes;
      for (e = e.expirationTimes; 0 < a;) {
        var r = 31 - Ne(a),
          n = 1 << r;
        ((t[r] = 0), (o[r] = -1), (e[r] = -1), (a &= ~n));
      }
    }
    function _l(e, t) {
      var a = (e.entangledLanes |= t);
      for (e = e.entanglements; a;) {
        var o = 31 - Ne(a),
          r = 1 << o;
        ((r & t) | (e[o] & t) && (e[o] |= t), (a &= ~r));
      }
    }
    var O = 0;
    function Ou(e) {
      return (
        (e &= -e),
        1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var Ru,
      Vl,
      zu,
      Uu,
      Nu,
      ll = !1,
      Qo = [],
      gt = null,
      xt = null,
      yt = null,
      lo = new Map(),
      so = new Map(),
      ct = [],
      vc =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " ",
        );
    function gi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          gt = null;
          break;
        case "dragenter":
        case "dragleave":
          xt = null;
          break;
        case "mouseover":
        case "mouseout":
          yt = null;
          break;
        case "pointerover":
        case "pointerout":
          lo.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          so.delete(t.pointerId);
      }
    }
    function Ra(e, t, a, o, r, n) {
      return e === null || e.nativeEvent !== n
        ? ((e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: o,
            nativeEvent: n,
            targetContainers: [r],
          }),
          t !== null && ((t = wo(t)), t !== null && Vl(t)),
          e)
        : ((e.eventSystemFlags |= o),
          (t = e.targetContainers),
          r !== null && t.indexOf(r) === -1 && t.push(r),
          e);
    }
    function wc(e, t, a, o, r) {
      switch (t) {
        case "focusin":
          return ((gt = Ra(gt, e, t, a, o, r)), !0);
        case "dragenter":
          return ((xt = Ra(xt, e, t, a, o, r)), !0);
        case "mouseover":
          return ((yt = Ra(yt, e, t, a, o, r)), !0);
        case "pointerover":
          var n = r.pointerId;
          return (lo.set(n, Ra(lo.get(n) || null, e, t, a, o, r)), !0);
        case "gotpointercapture":
          return (
            (n = r.pointerId),
            so.set(n, Ra(so.get(n) || null, e, t, a, o, r)),
            !0
          );
      }
      return !1;
    }
    function Hu(e) {
      var t = qt(e.target);
      if (t !== null) {
        var a = Gt(t);
        if (a !== null) {
          if (((t = a.tag), t === 13)) {
            if (((t = Tu(a)), t !== null)) {
              ((e.blockedOn = t),
                Nu(e.priority, function () {
                  zu(a);
                }));
              return;
            }
          } else if (
            t === 3 &&
            a.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ir(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var a = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var o = new a.constructor(a.type, a);
          ((tl = o), a.target.dispatchEvent(o), (tl = null));
        } else return ((t = wo(a)), t !== null && Vl(t), (e.blockedOn = a), !1);
        t.shift();
      }
      return !0;
    }
    function xi(e, t, a) {
      ir(e) && a.delete(t);
    }
    function Cc() {
      ((ll = !1),
        gt !== null && ir(gt) && (gt = null),
        xt !== null && ir(xt) && (xt = null),
        yt !== null && ir(yt) && (yt = null),
        lo.forEach(xi),
        so.forEach(xi));
    }
    function za(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        ll ||
          ((ll = !0),
          Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Cc)));
    }
    function io(e) {
      function t(r) {
        return za(r, e);
      }
      if (0 < Qo.length) {
        za(Qo[0], e);
        for (var a = 1; a < Qo.length; a++) {
          var o = Qo[a];
          o.blockedOn === e && (o.blockedOn = null);
        }
      }
      for (
        gt !== null && za(gt, e),
          xt !== null && za(xt, e),
          yt !== null && za(yt, e),
          lo.forEach(t),
          so.forEach(t),
          a = 0;
        a < ct.length;
        a++
      )
        ((o = ct[a]), o.blockedOn === e && (o.blockedOn = null));
      for (; 0 < ct.length && ((a = ct[0]), a.blockedOn === null);)
        (Hu(a), a.blockedOn === null && ct.shift());
    }
    var ha = nt.ReactCurrentBatchConfig,
      wr = !0;
    function kc(e, t, a, o) {
      var r = O,
        n = ha.transition;
      ha.transition = null;
      try {
        ((O = 1), jl(e, t, a, o));
      } finally {
        ((O = r), (ha.transition = n));
      }
    }
    function Pc(e, t, a, o) {
      var r = O,
        n = ha.transition;
      ha.transition = null;
      try {
        ((O = 4), jl(e, t, a, o));
      } finally {
        ((O = r), (ha.transition = n));
      }
    }
    function jl(e, t, a, o) {
      if (wr) {
        var r = sl(e, t, a, o);
        if (r === null) (Dn(e, t, o, Cr, a), gi(e, o));
        else if (wc(r, e, t, a, o)) o.stopPropagation();
        else if ((gi(e, o), t & 4 && -1 < vc.indexOf(e))) {
          for (; r !== null;) {
            var n = wo(r);
            if (
              (n !== null && Ru(n),
              (n = sl(e, t, a, o)),
              n === null && Dn(e, t, o, Cr, a),
              n === r)
            )
              break;
            r = n;
          }
          r !== null && o.stopPropagation();
        } else Dn(e, t, o, null, a);
      }
    }
    var Cr = null;
    function sl(e, t, a, o) {
      if (((Cr = null), (e = Hl(o)), (e = qt(e)), e !== null))
        if (((t = Gt(e)), t === null)) e = null;
        else if (((a = t.tag), a === 13)) {
          if (((e = Tu(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return ((Cr = e), null);
    }
    function Wu(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (pc()) {
            case Wl:
              return 1;
            case bu:
              return 4;
            case Ir:
            case mc:
              return 16;
            case Eu:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var mt = null,
      Gl = null,
      ur = null;
    function _u() {
      if (ur) return ur;
      var e,
        t = Gl,
        a = t.length,
        o,
        r = "value" in mt ? mt.value : mt.textContent,
        n = r.length;
      for (e = 0; e < a && t[e] === r[e]; e++);
      var l = a - e;
      for (o = 1; o <= l && t[a - o] === r[n - o]; o++);
      return (ur = r.slice(e, 1 < o ? 1 - o : void 0));
    }
    function dr(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Xo() {
      return !0;
    }
    function yi() {
      return !1;
    }
    function ke(e) {
      function t(a, o, r, n, l) {
        ((this._reactName = a),
          (this._targetInst = r),
          (this.type = o),
          (this.nativeEvent = n),
          (this.target = l),
          (this.currentTarget = null));
        for (var s in e)
          e.hasOwnProperty(s) && ((a = e[s]), (this[s] = a ? a(n) : n[s]));
        return (
          (this.isDefaultPrevented = (
            n.defaultPrevented != null
              ? n.defaultPrevented
              : n.returnValue === !1
          )
            ? Xo
            : yi),
          (this.isPropagationStopped = yi),
          this
        );
      }
      return (
        G(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a &&
              (a.preventDefault
                ? a.preventDefault()
                : typeof a.returnValue != "unknown" && (a.returnValue = !1),
              (this.isDefaultPrevented = Xo));
          },
          stopPropagation: function () {
            var a = this.nativeEvent;
            a &&
              (a.stopPropagation
                ? a.stopPropagation()
                : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
              (this.isPropagationStopped = Xo));
          },
          persist: function () {},
          isPersistent: Xo,
        }),
        t
      );
    }
    var ka = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      $l = ke(ka),
      vo = G({}, ka, { view: 0, detail: 0 }),
      Mc = ke(vo),
      Pn,
      Mn,
      Ua,
      _r = G({}, vo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ql,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== Ua &&
                (Ua && e.type === "mousemove"
                  ? ((Pn = e.screenX - Ua.screenX),
                    (Mn = e.screenY - Ua.screenY))
                  : (Mn = Pn = 0),
                (Ua = e)),
              Pn);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Mn;
        },
      }),
      Li = ke(_r),
      Ac = G({}, _r, { dataTransfer: 0 }),
      Tc = ke(Ac),
      Fc = G({}, vo, { relatedTarget: 0 }),
      An = ke(Fc),
      Bc = G({}, ka, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Dc = ke(Bc),
      bc = G({}, ka, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      Ec = ke(bc),
      qc = G({}, ka, { data: 0 }),
      Si = ke(qc),
      Oc = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      Rc = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      zc = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function Uc(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = zc[e])
          ? !!t[e]
          : !1;
    }
    function Ql() {
      return Uc;
    }
    var Nc = G({}, vo, {
        key: function (e) {
          if (e.key) {
            var t = Oc[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
              ? Rc[e.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ql,
        charCode: function (e) {
          return e.type === "keypress" ? dr(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? dr(e)
            : e.type === "keydown" || e.type === "keyup"
              ? e.keyCode
              : 0;
        },
      }),
      Hc = ke(Nc),
      Wc = G({}, _r, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Ii = ke(Wc),
      _c = G({}, vo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ql,
      }),
      Vc = ke(_c),
      jc = G({}, ka, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Gc = ke(jc),
      $c = G({}, _r, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Qc = ke($c),
      Xc = [9, 13, 27, 32],
      Xl = tt && "CompositionEvent" in window,
      Ja = null;
    tt && "documentMode" in document && (Ja = document.documentMode);
    var Jc = tt && "TextEvent" in window && !Ja,
      Vu = tt && (!Xl || (Ja && 8 < Ja && 11 >= Ja)),
      vi = " ",
      wi = !1;
    function ju(e, t) {
      switch (e) {
        case "keyup":
          return Xc.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gu(e) {
      return (
        (e = e.detail),
        typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var aa = !1;
    function Kc(e, t) {
      switch (e) {
        case "compositionend":
          return Gu(t);
        case "keypress":
          return t.which !== 32 ? null : ((wi = !0), vi);
        case "textInput":
          return ((e = t.data), e === vi && wi ? null : e);
        default:
          return null;
      }
    }
    function Yc(e, t) {
      if (aa)
        return e === "compositionend" || (!Xl && ju(e, t))
          ? ((e = _u()), (ur = Gl = mt = null), (aa = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Vu && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Zc = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Ci(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Zc[e.type] : t === "textarea";
    }
    function $u(e, t, a, o) {
      (Cu(o),
        (t = kr(t, "onChange")),
        0 < t.length &&
          ((a = new $l("onChange", "change", null, a, o)),
          e.push({ event: a, listeners: t })));
    }
    var Ka = null,
      uo = null;
    function ep(e) {
      rd(e, 0);
    }
    function Vr(e) {
      var t = na(e);
      if (xu(t)) return e;
    }
    function tp(e, t) {
      if (e === "change") return t;
    }
    var Qu = !1;
    tt &&
      (tt
        ? ((Ko = "oninput" in document),
          Ko ||
            ((Tn = document.createElement("div")),
            Tn.setAttribute("oninput", "return;"),
            (Ko = typeof Tn.oninput == "function")),
          (Jo = Ko))
        : (Jo = !1),
      (Qu = Jo && (!document.documentMode || 9 < document.documentMode)));
    var Jo, Ko, Tn;
    function ki() {
      Ka && (Ka.detachEvent("onpropertychange", Xu), (uo = Ka = null));
    }
    function Xu(e) {
      if (e.propertyName === "value" && Vr(uo)) {
        var t = [];
        ($u(t, uo, e, Hl(e)), Au(ep, t));
      }
    }
    function ap(e, t, a) {
      e === "focusin"
        ? (ki(), (Ka = t), (uo = a), Ka.attachEvent("onpropertychange", Xu))
        : e === "focusout" && ki();
    }
    function op(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Vr(uo);
    }
    function rp(e, t) {
      if (e === "click") return Vr(t);
    }
    function np(e, t) {
      if (e === "input" || e === "change") return Vr(t);
    }
    function lp(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var We = typeof Object.is == "function" ? Object.is : lp;
    function fo(e, t) {
      if (We(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var a = Object.keys(e),
        o = Object.keys(t);
      if (a.length !== o.length) return !1;
      for (o = 0; o < a.length; o++) {
        var r = a[o];
        if (!_n.call(t, r) || !We(e[r], t[r])) return !1;
      }
      return !0;
    }
    function Pi(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Mi(e, t) {
      var a = Pi(e);
      e = 0;
      for (var o; a;) {
        if (a.nodeType === 3) {
          if (((o = e + a.textContent.length), e <= t && o >= t))
            return { node: a, offset: t - e };
          e = o;
        }
        e: {
          for (; a;) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Pi(a);
      }
    }
    function Ju(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Ju(e, t.parentNode)
              : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Ku() {
      for (var e = window, t = yr(); t instanceof e.HTMLIFrameElement;) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch (o) {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = yr(e.document);
      }
      return t;
    }
    function Jl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    function sp(e) {
      var t = Ku(),
        a = e.focusedElem,
        o = e.selectionRange;
      if (
        t !== a &&
        a &&
        a.ownerDocument &&
        Ju(a.ownerDocument.documentElement, a)
      ) {
        if (o !== null && Jl(a)) {
          if (
            ((t = o.start),
            (e = o.end),
            e === void 0 && (e = t),
            "selectionStart" in a)
          )
            ((a.selectionStart = t),
              (a.selectionEnd = Math.min(e, a.value.length)));
          else if (
            ((e =
              ((t = a.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var r = a.textContent.length,
              n = Math.min(o.start, r);
            ((o = o.end === void 0 ? n : Math.min(o.end, r)),
              !e.extend && n > o && ((r = o), (o = n), (n = r)),
              (r = Mi(a, n)));
            var l = Mi(a, o);
            r &&
              l &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== r.node ||
                e.anchorOffset !== r.offset ||
                e.focusNode !== l.node ||
                e.focusOffset !== l.offset) &&
              ((t = t.createRange()),
              t.setStart(r.node, r.offset),
              e.removeAllRanges(),
              n > o
                ? (e.addRange(t), e.extend(l.node, l.offset))
                : (t.setEnd(l.node, l.offset), e.addRange(t)));
          }
        }
        for (t = [], e = a; (e = e.parentNode);)
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof a.focus == "function" && a.focus(), a = 0;
          a < t.length;
          a++
        )
          ((e = t[a]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top));
      }
    }
    var ip = tt && "documentMode" in document && 11 >= document.documentMode,
      oa = null,
      il = null,
      Ya = null,
      ul = !1;
    function Ai(e, t, a) {
      var o =
        a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      ul ||
        oa == null ||
        oa !== yr(o) ||
        ((o = oa),
        "selectionStart" in o && Jl(o)
          ? (o = { start: o.selectionStart, end: o.selectionEnd })
          : ((o = (
              (o.ownerDocument && o.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (o = {
              anchorNode: o.anchorNode,
              anchorOffset: o.anchorOffset,
              focusNode: o.focusNode,
              focusOffset: o.focusOffset,
            })),
        (Ya && fo(Ya, o)) ||
          ((Ya = o),
          (o = kr(il, "onSelect")),
          0 < o.length &&
            ((t = new $l("onSelect", "select", null, t, a)),
            e.push({ event: t, listeners: o }),
            (t.target = oa))));
    }
    function Yo(e, t) {
      var a = {};
      return (
        (a[e.toLowerCase()] = t.toLowerCase()),
        (a["Webkit" + e] = "webkit" + t),
        (a["Moz" + e] = "moz" + t),
        a
      );
    }
    var ra = {
        animationend: Yo("Animation", "AnimationEnd"),
        animationiteration: Yo("Animation", "AnimationIteration"),
        animationstart: Yo("Animation", "AnimationStart"),
        transitionend: Yo("Transition", "TransitionEnd"),
      },
      Fn = {},
      Yu = {};
    tt &&
      ((Yu = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete ra.animationend.animation,
        delete ra.animationiteration.animation,
        delete ra.animationstart.animation),
      "TransitionEvent" in window || delete ra.transitionend.transition);
    function jr(e) {
      if (Fn[e]) return Fn[e];
      if (!ra[e]) return e;
      var t = ra[e],
        a;
      for (a in t) if (t.hasOwnProperty(a) && a in Yu) return (Fn[e] = t[a]);
      return e;
    }
    var Zu = jr("animationend"),
      ed = jr("animationiteration"),
      td = jr("animationstart"),
      ad = jr("transitionend"),
      od = new Map(),
      Ti =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    function Pt(e, t) {
      (od.set(e, t), jt(t, [e]));
    }
    for (Zo = 0; Zo < Ti.length; Zo++)
      ((er = Ti[Zo]),
        (Fi = er.toLowerCase()),
        (Bi = er[0].toUpperCase() + er.slice(1)),
        Pt(Fi, "on" + Bi));
    var er, Fi, Bi, Zo;
    Pt(Zu, "onAnimationEnd");
    Pt(ed, "onAnimationIteration");
    Pt(td, "onAnimationStart");
    Pt("dblclick", "onDoubleClick");
    Pt("focusin", "onFocus");
    Pt("focusout", "onBlur");
    Pt(ad, "onTransitionEnd");
    ya("onMouseEnter", ["mouseout", "mouseover"]);
    ya("onMouseLeave", ["mouseout", "mouseover"]);
    ya("onPointerEnter", ["pointerout", "pointerover"]);
    ya("onPointerLeave", ["pointerout", "pointerover"]);
    jt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    );
    jt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    );
    jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    jt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    );
    jt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    );
    jt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
    var $a =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      up = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat($a),
      );
    function Di(e, t, a) {
      var o = e.type || "unknown-event";
      ((e.currentTarget = a), uc(o, t, void 0, e), (e.currentTarget = null));
    }
    function rd(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var o = e[a],
          r = o.event;
        o = o.listeners;
        e: {
          var n = void 0;
          if (t)
            for (var l = o.length - 1; 0 <= l; l--) {
              var s = o[l],
                u = s.instance,
                c = s.currentTarget;
              if (((s = s.listener), u !== n && r.isPropagationStopped()))
                break e;
              (Di(r, s, c), (n = u));
            }
          else
            for (l = 0; l < o.length; l++) {
              if (
                ((s = o[l]),
                (u = s.instance),
                (c = s.currentTarget),
                (s = s.listener),
                u !== n && r.isPropagationStopped())
              )
                break e;
              (Di(r, s, c), (n = u));
            }
        }
      }
      if (Sr) throw ((e = rl), (Sr = !1), (rl = null), e);
    }
    function U(e, t) {
      var a = t[ml];
      a === void 0 && (a = t[ml] = new Set());
      var o = e + "__bubble";
      a.has(o) || (nd(t, e, 2, !1), a.add(o));
    }
    function Bn(e, t, a) {
      var o = 0;
      (t && (o |= 4), nd(a, e, o, t));
    }
    var tr = "_reactListening" + Math.random().toString(36).slice(2);
    function co(e) {
      if (!e[tr]) {
        ((e[tr] = !0),
          cu.forEach(function (a) {
            a !== "selectionchange" &&
              (up.has(a) || Bn(a, !1, e), Bn(a, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[tr] || ((t[tr] = !0), Bn("selectionchange", !1, t));
      }
    }
    function nd(e, t, a, o) {
      switch (Wu(t)) {
        case 1:
          var r = kc;
          break;
        case 4:
          r = Pc;
          break;
        default:
          r = jl;
      }
      ((a = r.bind(null, t, a, e)),
        (r = void 0),
        !ol ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (r = !0),
        o
          ? r !== void 0
            ? e.addEventListener(t, a, { capture: !0, passive: r })
            : e.addEventListener(t, a, !0)
          : r !== void 0
            ? e.addEventListener(t, a, { passive: r })
            : e.addEventListener(t, a, !1));
    }
    function Dn(e, t, a, o, r) {
      var n = o;
      if (!(t & 1) && !(t & 2) && o !== null)
        e: for (;;) {
          if (o === null) return;
          var l = o.tag;
          if (l === 3 || l === 4) {
            var s = o.stateNode.containerInfo;
            if (s === r || (s.nodeType === 8 && s.parentNode === r)) break;
            if (l === 4)
              for (l = o.return; l !== null;) {
                var u = l.tag;
                if (
                  (u === 3 || u === 4) &&
                  ((u = l.stateNode.containerInfo),
                  u === r || (u.nodeType === 8 && u.parentNode === r))
                )
                  return;
                l = l.return;
              }
            for (; s !== null;) {
              if (((l = qt(s)), l === null)) return;
              if (((u = l.tag), u === 5 || u === 6)) {
                o = n = l;
                continue e;
              }
              s = s.parentNode;
            }
          }
          o = o.return;
        }
      Au(function () {
        var c = n,
          g = Hl(a),
          x = [];
        e: {
          var h = od.get(e);
          if (h !== void 0) {
            var y = $l,
              I = e;
            switch (e) {
              case "keypress":
                if (dr(a) === 0) break e;
              case "keydown":
              case "keyup":
                y = Hc;
                break;
              case "focusin":
                ((I = "focus"), (y = An));
                break;
              case "focusout":
                ((I = "blur"), (y = An));
                break;
              case "beforeblur":
              case "afterblur":
                y = An;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                y = Li;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                y = Tc;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                y = Vc;
                break;
              case Zu:
              case ed:
              case td:
                y = Dc;
                break;
              case ad:
                y = Gc;
                break;
              case "scroll":
                y = Mc;
                break;
              case "wheel":
                y = Qc;
                break;
              case "copy":
              case "cut":
              case "paste":
                y = Ec;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                y = Ii;
            }
            var v = (t & 4) !== 0,
              F = !v && e === "scroll",
              p = v ? (h !== null ? h + "Capture" : null) : h;
            v = [];
            for (var d = c, m; d !== null;) {
              m = d;
              var L = m.stateNode;
              if (
                (m.tag === 5 &&
                  L !== null &&
                  ((m = L),
                  p !== null &&
                    ((L = no(d, p)), L != null && v.push(po(d, L, m)))),
                F)
              )
                break;
              d = d.return;
            }
            0 < v.length &&
              ((h = new y(h, I, null, a, g)),
              x.push({ event: h, listeners: v }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (
              ((h = e === "mouseover" || e === "pointerover"),
              (y = e === "mouseout" || e === "pointerout"),
              h &&
                a !== tl &&
                (I = a.relatedTarget || a.fromElement) &&
                (qt(I) || I[at]))
            )
              break e;
            if (
              (y || h) &&
              ((h =
                g.window === g
                  ? g
                  : (h = g.ownerDocument)
                    ? h.defaultView || h.parentWindow
                    : window),
              y
                ? ((I = a.relatedTarget || a.toElement),
                  (y = c),
                  (I = I ? qt(I) : null),
                  I !== null &&
                    ((F = Gt(I)), I !== F || (I.tag !== 5 && I.tag !== 6)) &&
                    (I = null))
                : ((y = null), (I = c)),
              y !== I)
            ) {
              if (
                ((v = Li),
                (L = "onMouseLeave"),
                (p = "onMouseEnter"),
                (d = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((v = Ii),
                  (L = "onPointerLeave"),
                  (p = "onPointerEnter"),
                  (d = "pointer")),
                (F = y == null ? h : na(y)),
                (m = I == null ? h : na(I)),
                (h = new v(L, d + "leave", y, a, g)),
                (h.target = F),
                (h.relatedTarget = m),
                (L = null),
                qt(g) === c &&
                  ((v = new v(p, d + "enter", I, a, g)),
                  (v.target = m),
                  (v.relatedTarget = F),
                  (L = v)),
                (F = L),
                y && I)
              )
                t: {
                  for (v = y, p = I, d = 0, m = v; m; m = Zt(m)) d++;
                  for (m = 0, L = p; L; L = Zt(L)) m++;
                  for (; 0 < d - m;) ((v = Zt(v)), d--);
                  for (; 0 < m - d;) ((p = Zt(p)), m--);
                  for (; d--;) {
                    if (v === p || (p !== null && v === p.alternate)) break t;
                    ((v = Zt(v)), (p = Zt(p)));
                  }
                  v = null;
                }
              else v = null;
              (y !== null && bi(x, h, y, v, !1),
                I !== null && F !== null && bi(x, F, I, v, !0));
            }
          }
          e: {
            if (
              ((h = c ? na(c) : window),
              (y = h.nodeName && h.nodeName.toLowerCase()),
              y === "select" || (y === "input" && h.type === "file"))
            )
              var C = tp;
            else if (Ci(h))
              if (Qu) C = np;
              else {
                C = op;
                var M = ap;
              }
            else
              (y = h.nodeName) &&
                y.toLowerCase() === "input" &&
                (h.type === "checkbox" || h.type === "radio") &&
                (C = rp);
            if (C && (C = C(e, c))) {
              $u(x, C, a, g);
              break e;
            }
            (M && M(e, h, c),
              e === "focusout" &&
                (M = h._wrapperState) &&
                M.controlled &&
                h.type === "number" &&
                Jn(h, "number", h.value));
          }
          switch (((M = c ? na(c) : window), e)) {
            case "focusin":
              (Ci(M) || M.contentEditable === "true") &&
                ((oa = M), (il = c), (Ya = null));
              break;
            case "focusout":
              Ya = il = oa = null;
              break;
            case "mousedown":
              ul = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((ul = !1), Ai(x, a, g));
              break;
            case "selectionchange":
              if (ip) break;
            case "keydown":
            case "keyup":
              Ai(x, a, g);
          }
          var A;
          if (Xl)
            e: {
              switch (e) {
                case "compositionstart":
                  var T = "onCompositionStart";
                  break e;
                case "compositionend":
                  T = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  T = "onCompositionUpdate";
                  break e;
              }
              T = void 0;
            }
          else
            aa
              ? ju(e, a) && (T = "onCompositionEnd")
              : e === "keydown" &&
                a.keyCode === 229 &&
                (T = "onCompositionStart");
          (T &&
            (Vu &&
              a.locale !== "ko" &&
              (aa || T !== "onCompositionStart"
                ? T === "onCompositionEnd" && aa && (A = _u())
                : ((mt = g),
                  (Gl = "value" in mt ? mt.value : mt.textContent),
                  (aa = !0))),
            (M = kr(c, T)),
            0 < M.length &&
              ((T = new Si(T, e, null, a, g)),
              x.push({ event: T, listeners: M }),
              A ? (T.data = A) : ((A = Gu(a)), A !== null && (T.data = A)))),
            (A = Jc ? Kc(e, a) : Yc(e, a)) &&
              ((c = kr(c, "onBeforeInput")),
              0 < c.length &&
                ((g = new Si("onBeforeInput", "beforeinput", null, a, g)),
                x.push({ event: g, listeners: c }),
                (g.data = A))));
        }
        rd(x, t);
      });
    }
    function po(e, t, a) {
      return { instance: e, listener: t, currentTarget: a };
    }
    function kr(e, t) {
      for (var a = t + "Capture", o = []; e !== null;) {
        var r = e,
          n = r.stateNode;
        (r.tag === 5 &&
          n !== null &&
          ((r = n),
          (n = no(e, a)),
          n != null && o.unshift(po(e, n, r)),
          (n = no(e, t)),
          n != null && o.push(po(e, n, r))),
          (e = e.return));
      }
      return o;
    }
    function Zt(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function bi(e, t, a, o, r) {
      for (var n = t._reactName, l = []; a !== null && a !== o;) {
        var s = a,
          u = s.alternate,
          c = s.stateNode;
        if (u !== null && u === o) break;
        (s.tag === 5 &&
          c !== null &&
          ((s = c),
          r
            ? ((u = no(a, n)), u != null && l.unshift(po(a, u, s)))
            : r || ((u = no(a, n)), u != null && l.push(po(a, u, s)))),
          (a = a.return));
      }
      l.length !== 0 && e.push({ event: t, listeners: l });
    }
    var dp = /\r\n?/g,
      fp = /\u0000|\uFFFD/g;
    function Ei(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          dp,
          `
`,
        )
        .replace(fp, "");
    }
    function ar(e, t, a) {
      if (((t = Ei(t)), Ei(e) !== t && a)) throw Error(S(425));
    }
    function Pr() {}
    var dl = null,
      fl = null;
    function cl(e, t) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var pl = typeof setTimeout == "function" ? setTimeout : void 0,
      cp = typeof clearTimeout == "function" ? clearTimeout : void 0,
      qi = typeof Promise == "function" ? Promise : void 0,
      pp =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof qi != "undefined"
            ? function (e) {
                return qi.resolve(null).then(e).catch(mp);
              }
            : pl;
    function mp(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function bn(e, t) {
      var a = t,
        o = 0;
      do {
        var r = a.nextSibling;
        if ((e.removeChild(a), r && r.nodeType === 8))
          if (((a = r.data), a === "/$")) {
            if (o === 0) {
              (e.removeChild(r), io(t));
              return;
            }
            o--;
          } else (a !== "$" && a !== "$?" && a !== "$!") || o++;
        a = r;
      } while (a);
      io(t);
    }
    function Lt(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function Oi(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === "$" || a === "$!" || a === "$?") {
            if (t === 0) return e;
            t--;
          } else a === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Pa = Math.random().toString(36).slice(2),
      Ge = "__reactFiber$" + Pa,
      mo = "__reactProps$" + Pa,
      at = "__reactContainer$" + Pa,
      ml = "__reactEvents$" + Pa,
      hp = "__reactListeners$" + Pa,
      gp = "__reactHandles$" + Pa;
    function qt(e) {
      var t = e[Ge];
      if (t) return t;
      for (var a = e.parentNode; a;) {
        if ((t = a[at] || a[Ge])) {
          if (
            ((a = t.alternate),
            t.child !== null || (a !== null && a.child !== null))
          )
            for (e = Oi(e); e !== null;) {
              if ((a = e[Ge])) return a;
              e = Oi(e);
            }
          return t;
        }
        ((e = a), (a = e.parentNode));
      }
      return null;
    }
    function wo(e) {
      return (
        (e = e[Ge] || e[at]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function na(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(S(33));
    }
    function Gr(e) {
      return e[mo] || null;
    }
    var hl = [],
      la = -1;
    function Mt(e) {
      return { current: e };
    }
    function N(e) {
      0 > la || ((e.current = hl[la]), (hl[la] = null), la--);
    }
    function z(e, t) {
      (la++, (hl[la] = e.current), (e.current = t));
    }
    var kt = {},
      ue = Mt(kt),
      xe = Mt(!1),
      Nt = kt;
    function La(e, t) {
      var a = e.type.contextTypes;
      if (!a) return kt;
      var o = e.stateNode;
      if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
        return o.__reactInternalMemoizedMaskedChildContext;
      var r = {},
        n;
      for (n in a) r[n] = t[n];
      return (
        o &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = r)),
        r
      );
    }
    function ye(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function Mr() {
      (N(xe), N(ue));
    }
    function Ri(e, t, a) {
      if (ue.current !== kt) throw Error(S(168));
      (z(ue, t), z(xe, a));
    }
    function ld(e, t, a) {
      var o = e.stateNode;
      if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
        return a;
      o = o.getChildContext();
      for (var r in o)
        if (!(r in t)) throw Error(S(108, ac(e) || "Unknown", r));
      return G({}, a, o);
    }
    function Ar(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          kt),
        (Nt = ue.current),
        z(ue, e),
        z(xe, xe.current),
        !0
      );
    }
    function zi(e, t, a) {
      var o = e.stateNode;
      if (!o) throw Error(S(169));
      (a
        ? ((e = ld(e, t, Nt)),
          (o.__reactInternalMemoizedMergedChildContext = e),
          N(xe),
          N(ue),
          z(ue, e))
        : N(xe),
        z(xe, a));
    }
    var Ke = null,
      $r = !1,
      En = !1;
    function sd(e) {
      Ke === null ? (Ke = [e]) : Ke.push(e);
    }
    function xp(e) {
      (($r = !0), sd(e));
    }
    function At() {
      if (!En && Ke !== null) {
        En = !0;
        var e = 0,
          t = O;
        try {
          var a = Ke;
          for (O = 1; e < a.length; e++) {
            var o = a[e];
            do o = o(!0);
            while (o !== null);
          }
          ((Ke = null), ($r = !1));
        } catch (r) {
          throw (Ke !== null && (Ke = Ke.slice(e + 1)), Du(Wl, At), r);
        } finally {
          ((O = t), (En = !1));
        }
      }
      return null;
    }
    var sa = [],
      ia = 0,
      Tr = null,
      Fr = 0,
      Te = [],
      Fe = 0,
      Ht = null,
      Ye = 1,
      Ze = "";
    function bt(e, t) {
      ((sa[ia++] = Fr), (sa[ia++] = Tr), (Tr = e), (Fr = t));
    }
    function id(e, t, a) {
      ((Te[Fe++] = Ye), (Te[Fe++] = Ze), (Te[Fe++] = Ht), (Ht = e));
      var o = Ye;
      e = Ze;
      var r = 32 - Ne(o) - 1;
      ((o &= ~(1 << r)), (a += 1));
      var n = 32 - Ne(t) + r;
      if (30 < n) {
        var l = r - (r % 5);
        ((n = (o & ((1 << l) - 1)).toString(32)),
          (o >>= l),
          (r -= l),
          (Ye = (1 << (32 - Ne(t) + r)) | (a << r) | o),
          (Ze = n + e));
      } else ((Ye = (1 << n) | (a << r) | o), (Ze = e));
    }
    function Kl(e) {
      e.return !== null && (bt(e, 1), id(e, 1, 0));
    }
    function Yl(e) {
      for (; e === Tr;)
        ((Tr = sa[--ia]), (sa[ia] = null), (Fr = sa[--ia]), (sa[ia] = null));
      for (; e === Ht;)
        ((Ht = Te[--Fe]),
          (Te[Fe] = null),
          (Ze = Te[--Fe]),
          (Te[Fe] = null),
          (Ye = Te[--Fe]),
          (Te[Fe] = null));
    }
    var we = null,
      ve = null,
      _ = !1,
      Ue = null;
    function ud(e, t) {
      var a = Be(5, null, null, 0);
      ((a.elementType = "DELETED"),
        (a.stateNode = t),
        (a.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [a]), (e.flags |= 16)) : t.push(a));
    }
    function Ui(e, t) {
      switch (e.tag) {
        case 5:
          var a = e.type;
          return (
            (t =
              t.nodeType !== 1 || a.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((e.stateNode = t), (we = e), (ve = Lt(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (we = e), (ve = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((a = Ht !== null ? { id: Ye, overflow: Ze } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: a,
                  retryLane: 1073741824,
                }),
                (a = Be(18, null, null, 0)),
                (a.stateNode = t),
                (a.return = e),
                (e.child = a),
                (we = e),
                (ve = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function gl(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function xl(e) {
      if (_) {
        var t = ve;
        if (t) {
          var a = t;
          if (!Ui(e, t)) {
            if (gl(e)) throw Error(S(418));
            t = Lt(a.nextSibling);
            var o = we;
            t && Ui(e, t)
              ? ud(o, a)
              : ((e.flags = (e.flags & -4097) | 2), (_ = !1), (we = e));
          }
        } else {
          if (gl(e)) throw Error(S(418));
          ((e.flags = (e.flags & -4097) | 2), (_ = !1), (we = e));
        }
      }
    }
    function Ni(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
      )
        e = e.return;
      we = e;
    }
    function or(e) {
      if (e !== we) return !1;
      if (!_) return (Ni(e), (_ = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== "head" && t !== "body" && !cl(e.type, e.memoizedProps))),
        t && (t = ve))
      ) {
        if (gl(e)) throw (dd(), Error(S(418)));
        for (; t;) (ud(e, t), (t = Lt(t.nextSibling)));
      }
      if ((Ni(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(S(317));
        e: {
          for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
              var a = e.data;
              if (a === "/$") {
                if (t === 0) {
                  ve = Lt(e.nextSibling);
                  break e;
                }
                t--;
              } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          ve = null;
        }
      } else ve = we ? Lt(e.stateNode.nextSibling) : null;
      return !0;
    }
    function dd() {
      for (var e = ve; e;) e = Lt(e.nextSibling);
    }
    function Sa() {
      ((ve = we = null), (_ = !1));
    }
    function Zl(e) {
      Ue === null ? (Ue = [e]) : Ue.push(e);
    }
    var yp = nt.ReactCurrentBatchConfig;
    function Na(e, t, a) {
      if (
        ((e = a.ref),
        e !== null && typeof e != "function" && typeof e != "object")
      ) {
        if (a._owner) {
          if (((a = a._owner), a)) {
            if (a.tag !== 1) throw Error(S(309));
            var o = a.stateNode;
          }
          if (!o) throw Error(S(147, e));
          var r = o,
            n = "" + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === n
            ? t.ref
            : ((t = function (l) {
                var s = r.refs;
                l === null ? delete s[n] : (s[n] = l);
              }),
              (t._stringRef = n),
              t);
        }
        if (typeof e != "string") throw Error(S(284));
        if (!a._owner) throw Error(S(290, e));
      }
      return e;
    }
    function rr(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          S(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        )
      );
    }
    function Hi(e) {
      var t = e._init;
      return t(e._payload);
    }
    function fd(e) {
      function t(p, d) {
        if (e) {
          var m = p.deletions;
          m === null ? ((p.deletions = [d]), (p.flags |= 16)) : m.push(d);
        }
      }
      function a(p, d) {
        if (!e) return null;
        for (; d !== null;) (t(p, d), (d = d.sibling));
        return null;
      }
      function o(p, d) {
        for (p = new Map(); d !== null;)
          (d.key !== null ? p.set(d.key, d) : p.set(d.index, d),
            (d = d.sibling));
        return p;
      }
      function r(p, d) {
        return ((p = wt(p, d)), (p.index = 0), (p.sibling = null), p);
      }
      function n(p, d, m) {
        return (
          (p.index = m),
          e
            ? ((m = p.alternate),
              m !== null
                ? ((m = m.index), m < d ? ((p.flags |= 2), d) : m)
                : ((p.flags |= 2), d))
            : ((p.flags |= 1048576), d)
        );
      }
      function l(p) {
        return (e && p.alternate === null && (p.flags |= 2), p);
      }
      function s(p, d, m, L) {
        return d === null || d.tag !== 6
          ? ((d = Hn(m, p.mode, L)), (d.return = p), d)
          : ((d = r(d, m)), (d.return = p), d);
      }
      function u(p, d, m, L) {
        var C = m.type;
        return C === ta
          ? g(p, d, m.props.children, L, m.key)
          : d !== null &&
              (d.elementType === C ||
                (typeof C == "object" &&
                  C !== null &&
                  C.$$typeof === dt &&
                  Hi(C) === d.type))
            ? ((L = r(d, m.props)), (L.ref = Na(p, d, m)), (L.return = p), L)
            : ((L = xr(m.type, m.key, m.props, null, p.mode, L)),
              (L.ref = Na(p, d, m)),
              (L.return = p),
              L);
      }
      function c(p, d, m, L) {
        return d === null ||
          d.tag !== 4 ||
          d.stateNode.containerInfo !== m.containerInfo ||
          d.stateNode.implementation !== m.implementation
          ? ((d = Wn(m, p.mode, L)), (d.return = p), d)
          : ((d = r(d, m.children || [])), (d.return = p), d);
      }
      function g(p, d, m, L, C) {
        return d === null || d.tag !== 7
          ? ((d = Ut(m, p.mode, L, C)), (d.return = p), d)
          : ((d = r(d, m)), (d.return = p), d);
      }
      function x(p, d, m) {
        if ((typeof d == "string" && d !== "") || typeof d == "number")
          return ((d = Hn("" + d, p.mode, m)), (d.return = p), d);
        if (typeof d == "object" && d !== null) {
          switch (d.$$typeof) {
            case _o:
              return (
                (m = xr(d.type, d.key, d.props, null, p.mode, m)),
                (m.ref = Na(p, null, d)),
                (m.return = p),
                m
              );
            case ea:
              return ((d = Wn(d, p.mode, m)), (d.return = p), d);
            case dt:
              var L = d._init;
              return x(p, L(d._payload), m);
          }
          if (ja(d) || Oa(d))
            return ((d = Ut(d, p.mode, m, null)), (d.return = p), d);
          rr(p, d);
        }
        return null;
      }
      function h(p, d, m, L) {
        var C = d !== null ? d.key : null;
        if ((typeof m == "string" && m !== "") || typeof m == "number")
          return C !== null ? null : s(p, d, "" + m, L);
        if (typeof m == "object" && m !== null) {
          switch (m.$$typeof) {
            case _o:
              return m.key === C ? u(p, d, m, L) : null;
            case ea:
              return m.key === C ? c(p, d, m, L) : null;
            case dt:
              return ((C = m._init), h(p, d, C(m._payload), L));
          }
          if (ja(m) || Oa(m)) return C !== null ? null : g(p, d, m, L, null);
          rr(p, m);
        }
        return null;
      }
      function y(p, d, m, L, C) {
        if ((typeof L == "string" && L !== "") || typeof L == "number")
          return ((p = p.get(m) || null), s(d, p, "" + L, C));
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case _o:
              return (
                (p = p.get(L.key === null ? m : L.key) || null),
                u(d, p, L, C)
              );
            case ea:
              return (
                (p = p.get(L.key === null ? m : L.key) || null),
                c(d, p, L, C)
              );
            case dt:
              var M = L._init;
              return y(p, d, m, M(L._payload), C);
          }
          if (ja(L) || Oa(L))
            return ((p = p.get(m) || null), g(d, p, L, C, null));
          rr(d, L);
        }
        return null;
      }
      function I(p, d, m, L) {
        for (
          var C = null, M = null, A = d, T = (d = 0), H = null;
          A !== null && T < m.length;
          T++
        ) {
          A.index > T ? ((H = A), (A = null)) : (H = A.sibling);
          var P = h(p, A, m[T], L);
          if (P === null) {
            A === null && (A = H);
            break;
          }
          (e && A && P.alternate === null && t(p, A),
            (d = n(P, d, T)),
            M === null ? (C = P) : (M.sibling = P),
            (M = P),
            (A = H));
        }
        if (T === m.length) return (a(p, A), _ && bt(p, T), C);
        if (A === null) {
          for (; T < m.length; T++)
            ((A = x(p, m[T], L)),
              A !== null &&
                ((d = n(A, d, T)),
                M === null ? (C = A) : (M.sibling = A),
                (M = A)));
          return (_ && bt(p, T), C);
        }
        for (A = o(p, A); T < m.length; T++)
          ((H = y(A, p, T, m[T], L)),
            H !== null &&
              (e &&
                H.alternate !== null &&
                A.delete(H.key === null ? T : H.key),
              (d = n(H, d, T)),
              M === null ? (C = H) : (M.sibling = H),
              (M = H)));
        return (
          e &&
            A.forEach(function (W) {
              return t(p, W);
            }),
          _ && bt(p, T),
          C
        );
      }
      function v(p, d, m, L) {
        var C = Oa(m);
        if (typeof C != "function") throw Error(S(150));
        if (((m = C.call(m)), m == null)) throw Error(S(151));
        for (
          var M = (C = null), A = d, T = (d = 0), H = null, P = m.next();
          A !== null && !P.done;
          T++, P = m.next()
        ) {
          A.index > T ? ((H = A), (A = null)) : (H = A.sibling);
          var W = h(p, A, P.value, L);
          if (W === null) {
            A === null && (A = H);
            break;
          }
          (e && A && W.alternate === null && t(p, A),
            (d = n(W, d, T)),
            M === null ? (C = W) : (M.sibling = W),
            (M = W),
            (A = H));
        }
        if (P.done) return (a(p, A), _ && bt(p, T), C);
        if (A === null) {
          for (; !P.done; T++, P = m.next())
            ((P = x(p, P.value, L)),
              P !== null &&
                ((d = n(P, d, T)),
                M === null ? (C = P) : (M.sibling = P),
                (M = P)));
          return (_ && bt(p, T), C);
        }
        for (A = o(p, A); !P.done; T++, P = m.next())
          ((P = y(A, p, T, P.value, L)),
            P !== null &&
              (e &&
                P.alternate !== null &&
                A.delete(P.key === null ? T : P.key),
              (d = n(P, d, T)),
              M === null ? (C = P) : (M.sibling = P),
              (M = P)));
        return (
          e &&
            A.forEach(function (te) {
              return t(p, te);
            }),
          _ && bt(p, T),
          C
        );
      }
      function F(p, d, m, L) {
        if (
          (typeof m == "object" &&
            m !== null &&
            m.type === ta &&
            m.key === null &&
            (m = m.props.children),
          typeof m == "object" && m !== null)
        ) {
          switch (m.$$typeof) {
            case _o:
              e: {
                for (var C = m.key, M = d; M !== null;) {
                  if (M.key === C) {
                    if (((C = m.type), C === ta)) {
                      if (M.tag === 7) {
                        (a(p, M.sibling),
                          (d = r(M, m.props.children)),
                          (d.return = p),
                          (p = d));
                        break e;
                      }
                    } else if (
                      M.elementType === C ||
                      (typeof C == "object" &&
                        C !== null &&
                        C.$$typeof === dt &&
                        Hi(C) === M.type)
                    ) {
                      (a(p, M.sibling),
                        (d = r(M, m.props)),
                        (d.ref = Na(p, M, m)),
                        (d.return = p),
                        (p = d));
                      break e;
                    }
                    a(p, M);
                    break;
                  } else t(p, M);
                  M = M.sibling;
                }
                m.type === ta
                  ? ((d = Ut(m.props.children, p.mode, L, m.key)),
                    (d.return = p),
                    (p = d))
                  : ((L = xr(m.type, m.key, m.props, null, p.mode, L)),
                    (L.ref = Na(p, d, m)),
                    (L.return = p),
                    (p = L));
              }
              return l(p);
            case ea:
              e: {
                for (M = m.key; d !== null;) {
                  if (d.key === M)
                    if (
                      d.tag === 4 &&
                      d.stateNode.containerInfo === m.containerInfo &&
                      d.stateNode.implementation === m.implementation
                    ) {
                      (a(p, d.sibling),
                        (d = r(d, m.children || [])),
                        (d.return = p),
                        (p = d));
                      break e;
                    } else {
                      a(p, d);
                      break;
                    }
                  else t(p, d);
                  d = d.sibling;
                }
                ((d = Wn(m, p.mode, L)), (d.return = p), (p = d));
              }
              return l(p);
            case dt:
              return ((M = m._init), F(p, d, M(m._payload), L));
          }
          if (ja(m)) return I(p, d, m, L);
          if (Oa(m)) return v(p, d, m, L);
          rr(p, m);
        }
        return (typeof m == "string" && m !== "") || typeof m == "number"
          ? ((m = "" + m),
            d !== null && d.tag === 6
              ? (a(p, d.sibling), (d = r(d, m)), (d.return = p), (p = d))
              : (a(p, d), (d = Hn(m, p.mode, L)), (d.return = p), (p = d)),
            l(p))
          : a(p, d);
      }
      return F;
    }
    var Ia = fd(!0),
      cd = fd(!1),
      Br = Mt(null),
      Dr = null,
      ua = null,
      es = null;
    function ts() {
      es = ua = Dr = null;
    }
    function as(e) {
      var t = Br.current;
      (N(Br), (e._currentValue = t));
    }
    function yl(e, t, a) {
      for (; e !== null;) {
        var o = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
            : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
          e === a)
        )
          break;
        e = e.return;
      }
    }
    function ga(e, t) {
      ((Dr = e),
        (es = ua = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          (e.lanes & t && (ge = !0), (e.firstContext = null)));
    }
    function be(e) {
      var t = e._currentValue;
      if (es !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), ua === null)) {
          if (Dr === null) throw Error(S(308));
          ((ua = e), (Dr.dependencies = { lanes: 0, firstContext: e }));
        } else ua = ua.next = e;
      return t;
    }
    var Ot = null;
    function os(e) {
      Ot === null ? (Ot = [e]) : Ot.push(e);
    }
    function pd(e, t, a, o) {
      var r = t.interleaved;
      return (
        r === null ? ((a.next = a), os(t)) : ((a.next = r.next), (r.next = a)),
        (t.interleaved = a),
        ot(e, o)
      );
    }
    function ot(e, t) {
      e.lanes |= t;
      var a = e.alternate;
      for (a !== null && (a.lanes |= t), a = e, e = e.return; e !== null;)
        ((e.childLanes |= t),
          (a = e.alternate),
          a !== null && (a.childLanes |= t),
          (a = e),
          (e = e.return));
      return a.tag === 3 ? a.stateNode : null;
    }
    var ft = !1;
    function rs(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function md(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function et(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function St(e, t, a) {
      var o = e.updateQueue;
      if (o === null) return null;
      if (((o = o.shared), E & 2)) {
        var r = o.pending;
        return (
          r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
          (o.pending = t),
          ot(e, a)
        );
      }
      return (
        (r = o.interleaved),
        r === null ? ((t.next = t), os(o)) : ((t.next = r.next), (r.next = t)),
        (o.interleaved = t),
        ot(e, a)
      );
    }
    function fr(e, t, a) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (a & 4194240) !== 0))
      ) {
        var o = t.lanes;
        ((o &= e.pendingLanes), (a |= o), (t.lanes = a), _l(e, a));
      }
    }
    function Wi(e, t) {
      var a = e.updateQueue,
        o = e.alternate;
      if (o !== null && ((o = o.updateQueue), a === o)) {
        var r = null,
          n = null;
        if (((a = a.firstBaseUpdate), a !== null)) {
          do {
            var l = {
              eventTime: a.eventTime,
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            };
            (n === null ? (r = n = l) : (n = n.next = l), (a = a.next));
          } while (a !== null);
          n === null ? (r = n = t) : (n = n.next = t);
        } else r = n = t;
        ((a = {
          baseState: o.baseState,
          firstBaseUpdate: r,
          lastBaseUpdate: n,
          shared: o.shared,
          effects: o.effects,
        }),
          (e.updateQueue = a));
        return;
      }
      ((e = a.lastBaseUpdate),
        e === null ? (a.firstBaseUpdate = t) : (e.next = t),
        (a.lastBaseUpdate = t));
    }
    function br(e, t, a, o) {
      var r = e.updateQueue;
      ft = !1;
      var n = r.firstBaseUpdate,
        l = r.lastBaseUpdate,
        s = r.shared.pending;
      if (s !== null) {
        r.shared.pending = null;
        var u = s,
          c = u.next;
        ((u.next = null), l === null ? (n = c) : (l.next = c), (l = u));
        var g = e.alternate;
        g !== null &&
          ((g = g.updateQueue),
          (s = g.lastBaseUpdate),
          s !== l &&
            (s === null ? (g.firstBaseUpdate = c) : (s.next = c),
            (g.lastBaseUpdate = u)));
      }
      if (n !== null) {
        var x = r.baseState;
        ((l = 0), (g = c = u = null), (s = n));
        do {
          var h = s.lane,
            y = s.eventTime;
          if ((o & h) === h) {
            g !== null &&
              (g = g.next =
                {
                  eventTime: y,
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                });
            e: {
              var I = e,
                v = s;
              switch (((h = t), (y = a), v.tag)) {
                case 1:
                  if (((I = v.payload), typeof I == "function")) {
                    x = I.call(y, x, h);
                    break e;
                  }
                  x = I;
                  break e;
                case 3:
                  I.flags = (I.flags & -65537) | 128;
                case 0:
                  if (
                    ((I = v.payload),
                    (h = typeof I == "function" ? I.call(y, x, h) : I),
                    h == null)
                  )
                    break e;
                  x = G({}, x, h);
                  break e;
                case 2:
                  ft = !0;
              }
            }
            s.callback !== null &&
              s.lane !== 0 &&
              ((e.flags |= 64),
              (h = r.effects),
              h === null ? (r.effects = [s]) : h.push(s));
          } else
            ((y = {
              eventTime: y,
              lane: h,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              g === null ? ((c = g = y), (u = x)) : (g = g.next = y),
              (l |= h));
          if (((s = s.next), s === null)) {
            if (((s = r.shared.pending), s === null)) break;
            ((h = s),
              (s = h.next),
              (h.next = null),
              (r.lastBaseUpdate = h),
              (r.shared.pending = null));
          }
        } while (!0);
        if (
          (g === null && (u = x),
          (r.baseState = u),
          (r.firstBaseUpdate = c),
          (r.lastBaseUpdate = g),
          (t = r.shared.interleaved),
          t !== null)
        ) {
          r = t;
          do ((l |= r.lane), (r = r.next));
          while (r !== t);
        } else n === null && (r.shared.lanes = 0);
        ((_t |= l), (e.lanes = l), (e.memoizedState = x));
      }
    }
    function _i(e, t, a) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var o = e[t],
            r = o.callback;
          if (r !== null) {
            if (((o.callback = null), (o = a), typeof r != "function"))
              throw Error(S(191, r));
            r.call(o);
          }
        }
    }
    var Co = {},
      Qe = Mt(Co),
      ho = Mt(Co),
      go = Mt(Co);
    function Rt(e) {
      if (e === Co) throw Error(S(174));
      return e;
    }
    function ns(e, t) {
      switch ((z(go, t), z(ho, e), z(Qe, Co), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Yn(null, "");
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Yn(t, e)));
      }
      (N(Qe), z(Qe, t));
    }
    function va() {
      (N(Qe), N(ho), N(go));
    }
    function hd(e) {
      Rt(go.current);
      var t = Rt(Qe.current),
        a = Yn(t, e.type);
      t !== a && (z(ho, e), z(Qe, a));
    }
    function ls(e) {
      ho.current === e && (N(Qe), N(ho));
    }
    var V = Mt(0);
    function Er(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (
            a !== null &&
            ((a = a.dehydrated),
            a === null || a.data === "$?" || a.data === "$!")
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var qn = [];
    function ss() {
      for (var e = 0; e < qn.length; e++)
        qn[e]._workInProgressVersionPrimary = null;
      qn.length = 0;
    }
    var cr = nt.ReactCurrentDispatcher,
      On = nt.ReactCurrentBatchConfig,
      Wt = 0,
      j = null,
      J = null,
      Z = null,
      qr = !1,
      Za = !1,
      xo = 0,
      Lp = 0;
    function le() {
      throw Error(S(321));
    }
    function is(e, t) {
      if (t === null) return !1;
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!We(e[a], t[a])) return !1;
      return !0;
    }
    function us(e, t, a, o, r, n) {
      if (
        ((Wt = n),
        (j = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (cr.current = e === null || e.memoizedState === null ? wp : Cp),
        (e = a(o, r)),
        Za)
      ) {
        n = 0;
        do {
          if (((Za = !1), (xo = 0), 25 <= n)) throw Error(S(301));
          ((n += 1),
            (Z = J = null),
            (t.updateQueue = null),
            (cr.current = kp),
            (e = a(o, r)));
        } while (Za);
      }
      if (
        ((cr.current = Or),
        (t = J !== null && J.next !== null),
        (Wt = 0),
        (Z = J = j = null),
        (qr = !1),
        t)
      )
        throw Error(S(300));
      return e;
    }
    function ds() {
      var e = xo !== 0;
      return ((xo = 0), e);
    }
    function je() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (Z === null ? (j.memoizedState = Z = e) : (Z = Z.next = e), Z);
    }
    function Ee() {
      if (J === null) {
        var e = j.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = J.next;
      var t = Z === null ? j.memoizedState : Z.next;
      if (t !== null) ((Z = t), (J = e));
      else {
        if (e === null) throw Error(S(310));
        ((J = e),
          (e = {
            memoizedState: J.memoizedState,
            baseState: J.baseState,
            baseQueue: J.baseQueue,
            queue: J.queue,
            next: null,
          }),
          Z === null ? (j.memoizedState = Z = e) : (Z = Z.next = e));
      }
      return Z;
    }
    function yo(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Rn(e) {
      var t = Ee(),
        a = t.queue;
      if (a === null) throw Error(S(311));
      a.lastRenderedReducer = e;
      var o = J,
        r = o.baseQueue,
        n = a.pending;
      if (n !== null) {
        if (r !== null) {
          var l = r.next;
          ((r.next = n.next), (n.next = l));
        }
        ((o.baseQueue = r = n), (a.pending = null));
      }
      if (r !== null) {
        ((n = r.next), (o = o.baseState));
        var s = (l = null),
          u = null,
          c = n;
        do {
          var g = c.lane;
          if ((Wt & g) === g)
            (u !== null &&
              (u = u.next =
                {
                  lane: 0,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
              (o = c.hasEagerState ? c.eagerState : e(o, c.action)));
          else {
            var x = {
              lane: g,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            };
            (u === null ? ((s = u = x), (l = o)) : (u = u.next = x),
              (j.lanes |= g),
              (_t |= g));
          }
          c = c.next;
        } while (c !== null && c !== n);
        (u === null ? (l = o) : (u.next = s),
          We(o, t.memoizedState) || (ge = !0),
          (t.memoizedState = o),
          (t.baseState = l),
          (t.baseQueue = u),
          (a.lastRenderedState = o));
      }
      if (((e = a.interleaved), e !== null)) {
        r = e;
        do ((n = r.lane), (j.lanes |= n), (_t |= n), (r = r.next));
        while (r !== e);
      } else r === null && (a.lanes = 0);
      return [t.memoizedState, a.dispatch];
    }
    function zn(e) {
      var t = Ee(),
        a = t.queue;
      if (a === null) throw Error(S(311));
      a.lastRenderedReducer = e;
      var o = a.dispatch,
        r = a.pending,
        n = t.memoizedState;
      if (r !== null) {
        a.pending = null;
        var l = (r = r.next);
        do ((n = e(n, l.action)), (l = l.next));
        while (l !== r);
        (We(n, t.memoizedState) || (ge = !0),
          (t.memoizedState = n),
          t.baseQueue === null && (t.baseState = n),
          (a.lastRenderedState = n));
      }
      return [n, o];
    }
    function gd() {}
    function xd(e, t) {
      var a = j,
        o = Ee(),
        r = t(),
        n = !We(o.memoizedState, r);
      if (
        (n && ((o.memoizedState = r), (ge = !0)),
        (o = o.queue),
        fs(Sd.bind(null, a, o, e), [e]),
        o.getSnapshot !== t || n || (Z !== null && Z.memoizedState.tag & 1))
      ) {
        if (
          ((a.flags |= 2048),
          Lo(9, Ld.bind(null, a, o, r, t), void 0, null),
          ee === null)
        )
          throw Error(S(349));
        Wt & 30 || yd(a, t, r);
      }
      return r;
    }
    function yd(e, t, a) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: a }),
        (t = j.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (j.updateQueue = t),
            (t.stores = [e]))
          : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
    }
    function Ld(e, t, a, o) {
      ((t.value = a), (t.getSnapshot = o), Id(t) && vd(e));
    }
    function Sd(e, t, a) {
      return a(function () {
        Id(t) && vd(e);
      });
    }
    function Id(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !We(e, a);
      } catch (o) {
        return !0;
      }
    }
    function vd(e) {
      var t = ot(e, 1);
      t !== null && He(t, e, 1, -1);
    }
    function Vi(e) {
      var t = je();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: yo,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = vp.bind(null, j, e)),
        [t.memoizedState, e]
      );
    }
    function Lo(e, t, a, o) {
      return (
        (e = { tag: e, create: t, destroy: a, deps: o, next: null }),
        (t = j.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (j.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((a = t.lastEffect),
            a === null
              ? (t.lastEffect = e.next = e)
              : ((o = a.next), (a.next = e), (e.next = o), (t.lastEffect = e))),
        e
      );
    }
    function wd() {
      return Ee().memoizedState;
    }
    function pr(e, t, a, o) {
      var r = je();
      ((j.flags |= e),
        (r.memoizedState = Lo(1 | t, a, void 0, o === void 0 ? null : o)));
    }
    function Qr(e, t, a, o) {
      var r = Ee();
      o = o === void 0 ? null : o;
      var n = void 0;
      if (J !== null) {
        var l = J.memoizedState;
        if (((n = l.destroy), o !== null && is(o, l.deps))) {
          r.memoizedState = Lo(t, a, n, o);
          return;
        }
      }
      ((j.flags |= e), (r.memoizedState = Lo(1 | t, a, n, o)));
    }
    function ji(e, t) {
      return pr(8390656, 8, e, t);
    }
    function fs(e, t) {
      return Qr(2048, 8, e, t);
    }
    function Cd(e, t) {
      return Qr(4, 2, e, t);
    }
    function kd(e, t) {
      return Qr(4, 4, e, t);
    }
    function Pd(e, t) {
      if (typeof t == "function")
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Md(e, t, a) {
      return (
        (a = a != null ? a.concat([e]) : null),
        Qr(4, 4, Pd.bind(null, t, e), a)
      );
    }
    function cs() {}
    function Ad(e, t) {
      var a = Ee();
      t = t === void 0 ? null : t;
      var o = a.memoizedState;
      return o !== null && t !== null && is(t, o[1])
        ? o[0]
        : ((a.memoizedState = [e, t]), e);
    }
    function Td(e, t) {
      var a = Ee();
      t = t === void 0 ? null : t;
      var o = a.memoizedState;
      return o !== null && t !== null && is(t, o[1])
        ? o[0]
        : ((e = e()), (a.memoizedState = [e, t]), e);
    }
    function Fd(e, t, a) {
      return Wt & 21
        ? (We(a, t) ||
            ((a = qu()), (j.lanes |= a), (_t |= a), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (ge = !0)),
          (e.memoizedState = a));
    }
    function Sp(e, t) {
      var a = O;
      ((O = a !== 0 && 4 > a ? a : 4), e(!0));
      var o = On.transition;
      On.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((O = a), (On.transition = o));
      }
    }
    function Bd() {
      return Ee().memoizedState;
    }
    function Ip(e, t, a) {
      var o = vt(e);
      if (
        ((a = {
          lane: o,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Dd(e))
      )
        bd(t, a);
      else if (((a = pd(e, t, a, o)), a !== null)) {
        var r = ce();
        (He(a, e, o, r), Ed(a, t, o));
      }
    }
    function vp(e, t, a) {
      var o = vt(e),
        r = {
          lane: o,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (Dd(e)) bd(t, r);
      else {
        var n = e.alternate;
        if (
          e.lanes === 0 &&
          (n === null || n.lanes === 0) &&
          ((n = t.lastRenderedReducer), n !== null)
        )
          try {
            var l = t.lastRenderedState,
              s = n(l, a);
            if (((r.hasEagerState = !0), (r.eagerState = s), We(s, l))) {
              var u = t.interleaved;
              (u === null
                ? ((r.next = r), os(t))
                : ((r.next = u.next), (u.next = r)),
                (t.interleaved = r));
              return;
            }
          } catch (c) {
          } finally {
          }
        ((a = pd(e, t, r, o)),
          a !== null && ((r = ce()), He(a, e, o, r), Ed(a, t, o)));
      }
    }
    function Dd(e) {
      var t = e.alternate;
      return e === j || (t !== null && t === j);
    }
    function bd(e, t) {
      Za = qr = !0;
      var a = e.pending;
      (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (e.pending = t));
    }
    function Ed(e, t, a) {
      if (a & 4194240) {
        var o = t.lanes;
        ((o &= e.pendingLanes), (a |= o), (t.lanes = a), _l(e, a));
      }
    }
    var Or = {
        readContext: be,
        useCallback: le,
        useContext: le,
        useEffect: le,
        useImperativeHandle: le,
        useInsertionEffect: le,
        useLayoutEffect: le,
        useMemo: le,
        useReducer: le,
        useRef: le,
        useState: le,
        useDebugValue: le,
        useDeferredValue: le,
        useTransition: le,
        useMutableSource: le,
        useSyncExternalStore: le,
        useId: le,
        unstable_isNewReconciler: !1,
      },
      wp = {
        readContext: be,
        useCallback: function (e, t) {
          return ((je().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: be,
        useEffect: ji,
        useImperativeHandle: function (e, t, a) {
          return (
            (a = a != null ? a.concat([e]) : null),
            pr(4194308, 4, Pd.bind(null, t, e), a)
          );
        },
        useLayoutEffect: function (e, t) {
          return pr(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return pr(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var a = je();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (a.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, a) {
          var o = je();
          return (
            (t = a !== void 0 ? a(t) : t),
            (o.memoizedState = o.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (o.queue = e),
            (e = e.dispatch = Ip.bind(null, j, e)),
            [o.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = je();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: Vi,
        useDebugValue: cs,
        useDeferredValue: function (e) {
          return (je().memoizedState = e);
        },
        useTransition: function () {
          var e = Vi(!1),
            t = e[0];
          return ((e = Sp.bind(null, e[1])), (je().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, a) {
          var o = j,
            r = je();
          if (_) {
            if (a === void 0) throw Error(S(407));
            a = a();
          } else {
            if (((a = t()), ee === null)) throw Error(S(349));
            Wt & 30 || yd(o, t, a);
          }
          r.memoizedState = a;
          var n = { value: a, getSnapshot: t };
          return (
            (r.queue = n),
            ji(Sd.bind(null, o, n, e), [e]),
            (o.flags |= 2048),
            Lo(9, Ld.bind(null, o, n, a, t), void 0, null),
            a
          );
        },
        useId: function () {
          var e = je(),
            t = ee.identifierPrefix;
          if (_) {
            var a = Ze,
              o = Ye;
            ((a = (o & ~(1 << (32 - Ne(o) - 1))).toString(32) + a),
              (t = ":" + t + "R" + a),
              (a = xo++),
              0 < a && (t += "H" + a.toString(32)),
              (t += ":"));
          } else ((a = Lp++), (t = ":" + t + "r" + a.toString(32) + ":"));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      Cp = {
        readContext: be,
        useCallback: Ad,
        useContext: be,
        useEffect: fs,
        useImperativeHandle: Md,
        useInsertionEffect: Cd,
        useLayoutEffect: kd,
        useMemo: Td,
        useReducer: Rn,
        useRef: wd,
        useState: function () {
          return Rn(yo);
        },
        useDebugValue: cs,
        useDeferredValue: function (e) {
          var t = Ee();
          return Fd(t, J.memoizedState, e);
        },
        useTransition: function () {
          var e = Rn(yo)[0],
            t = Ee().memoizedState;
          return [e, t];
        },
        useMutableSource: gd,
        useSyncExternalStore: xd,
        useId: Bd,
        unstable_isNewReconciler: !1,
      },
      kp = {
        readContext: be,
        useCallback: Ad,
        useContext: be,
        useEffect: fs,
        useImperativeHandle: Md,
        useInsertionEffect: Cd,
        useLayoutEffect: kd,
        useMemo: Td,
        useReducer: zn,
        useRef: wd,
        useState: function () {
          return zn(yo);
        },
        useDebugValue: cs,
        useDeferredValue: function (e) {
          var t = Ee();
          return J === null ? (t.memoizedState = e) : Fd(t, J.memoizedState, e);
        },
        useTransition: function () {
          var e = zn(yo)[0],
            t = Ee().memoizedState;
          return [e, t];
        },
        useMutableSource: gd,
        useSyncExternalStore: xd,
        useId: Bd,
        unstable_isNewReconciler: !1,
      };
    function Re(e, t) {
      if (e && e.defaultProps) {
        ((t = G({}, t)), (e = e.defaultProps));
        for (var a in e) t[a] === void 0 && (t[a] = e[a]);
        return t;
      }
      return t;
    }
    function Ll(e, t, a, o) {
      ((t = e.memoizedState),
        (a = a(o, t)),
        (a = a == null ? t : G({}, t, a)),
        (e.memoizedState = a),
        e.lanes === 0 && (e.updateQueue.baseState = a));
    }
    var Xr = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? Gt(e) === e : !1;
      },
      enqueueSetState: function (e, t, a) {
        e = e._reactInternals;
        var o = ce(),
          r = vt(e),
          n = et(o, r);
        ((n.payload = t),
          a != null && (n.callback = a),
          (t = St(e, n, r)),
          t !== null && (He(t, e, r, o), fr(t, e, r)));
      },
      enqueueReplaceState: function (e, t, a) {
        e = e._reactInternals;
        var o = ce(),
          r = vt(e),
          n = et(o, r);
        ((n.tag = 1),
          (n.payload = t),
          a != null && (n.callback = a),
          (t = St(e, n, r)),
          t !== null && (He(t, e, r, o), fr(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var a = ce(),
          o = vt(e),
          r = et(a, o);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = St(e, r, o)),
          t !== null && (He(t, e, o, a), fr(t, e, o)));
      },
    };
    function Gi(e, t, a, o, r, n, l) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(o, n, l)
          : t.prototype && t.prototype.isPureReactComponent
            ? !fo(a, o) || !fo(r, n)
            : !0
      );
    }
    function qd(e, t, a) {
      var o = !1,
        r = kt,
        n = t.contextType;
      return (
        typeof n == "object" && n !== null
          ? (n = be(n))
          : ((r = ye(t) ? Nt : ue.current),
            (o = t.contextTypes),
            (n = (o = o != null) ? La(e, r) : kt)),
        (t = new t(a, n)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Xr),
        (e.stateNode = t),
        (t._reactInternals = e),
        o &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = r),
          (e.__reactInternalMemoizedMaskedChildContext = n)),
        t
      );
    }
    function $i(e, t, a, o) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(a, o),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(a, o),
        t.state !== e && Xr.enqueueReplaceState(t, t.state, null));
    }
    function Sl(e, t, a, o) {
      var r = e.stateNode;
      ((r.props = a), (r.state = e.memoizedState), (r.refs = {}), rs(e));
      var n = t.contextType;
      (typeof n == "object" && n !== null
        ? (r.context = be(n))
        : ((n = ye(t) ? Nt : ue.current), (r.context = La(e, n))),
        (r.state = e.memoizedState),
        (n = t.getDerivedStateFromProps),
        typeof n == "function" && (Ll(e, t, n, a), (r.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((t = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          t !== r.state && Xr.enqueueReplaceState(r, r.state, null),
          br(e, a, r, o),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308));
    }
    function wa(e, t) {
      try {
        var a = "",
          o = t;
        do ((a += tc(o)), (o = o.return));
        while (o);
        var r = a;
      } catch (n) {
        r =
          `
Error generating stack: ` +
          n.message +
          `
` +
          n.stack;
      }
      return { value: e, source: t, stack: r, digest: null };
    }
    function Un(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null,
      };
    }
    function Il(e, t) {
      try {
        console.error(t.value);
      } catch (a) {
        setTimeout(function () {
          throw a;
        });
      }
    }
    var Pp = typeof WeakMap == "function" ? WeakMap : Map;
    function Od(e, t, a) {
      ((a = et(-1, a)), (a.tag = 3), (a.payload = { element: null }));
      var o = t.value;
      return (
        (a.callback = function () {
          (zr || ((zr = !0), (Bl = o)), Il(e, t));
        }),
        a
      );
    }
    function Rd(e, t, a) {
      ((a = et(-1, a)), (a.tag = 3));
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var r = t.value;
        ((a.payload = function () {
          return o(r);
        }),
          (a.callback = function () {
            Il(e, t);
          }));
      }
      var n = e.stateNode;
      return (
        n !== null &&
          typeof n.componentDidCatch == "function" &&
          (a.callback = function () {
            (Il(e, t),
              typeof o != "function" &&
                (It === null ? (It = new Set([this])) : It.add(this)));
            var l = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: l !== null ? l : "",
            });
          }),
        a
      );
    }
    function Qi(e, t, a) {
      var o = e.pingCache;
      if (o === null) {
        o = e.pingCache = new Pp();
        var r = new Set();
        o.set(t, r);
      } else ((r = o.get(t)), r === void 0 && ((r = new Set()), o.set(t, r)));
      r.has(a) || (r.add(a), (e = Np.bind(null, e, t, a)), t.then(e, e));
    }
    function Xi(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function Ji(e, t, a, o, r) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = r), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (a.flags |= 131072),
              (a.flags &= -52805),
              a.tag === 1 &&
                (a.alternate === null
                  ? (a.tag = 17)
                  : ((t = et(-1, 1)), (t.tag = 2), St(a, t, 1))),
              (a.lanes |= 1)),
          e);
    }
    var Mp = nt.ReactCurrentOwner,
      ge = !1;
    function fe(e, t, a, o) {
      t.child = e === null ? cd(t, null, a, o) : Ia(t, e.child, a, o);
    }
    function Ki(e, t, a, o, r) {
      a = a.render;
      var n = t.ref;
      return (
        ga(t, r),
        (o = us(e, t, a, o, n, r)),
        (a = ds()),
        e !== null && !ge
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~r),
            rt(e, t, r))
          : (_ && a && Kl(t), (t.flags |= 1), fe(e, t, o, r), t.child)
      );
    }
    function Yi(e, t, a, o, r) {
      if (e === null) {
        var n = a.type;
        return typeof n == "function" &&
          !Ss(n) &&
          n.defaultProps === void 0 &&
          a.compare === null &&
          a.defaultProps === void 0
          ? ((t.tag = 15), (t.type = n), zd(e, t, n, o, r))
          : ((e = xr(a.type, null, o, t, t.mode, r)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((n = e.child), !(e.lanes & r))) {
        var l = n.memoizedProps;
        if (
          ((a = a.compare),
          (a = a !== null ? a : fo),
          a(l, o) && e.ref === t.ref)
        )
          return rt(e, t, r);
      }
      return (
        (t.flags |= 1),
        (e = wt(n, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function zd(e, t, a, o, r) {
      if (e !== null) {
        var n = e.memoizedProps;
        if (fo(n, o) && e.ref === t.ref)
          if (((ge = !1), (t.pendingProps = o = n), (e.lanes & r) !== 0))
            e.flags & 131072 && (ge = !0);
          else return ((t.lanes = e.lanes), rt(e, t, r));
      }
      return vl(e, t, a, o, r);
    }
    function Ud(e, t, a) {
      var o = t.pendingProps,
        r = o.children,
        n = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden")
        if (!(t.mode & 1))
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            z(fa, Ie),
            (Ie |= a));
        else {
          if (!(a & 1073741824))
            return (
              (e = n !== null ? n.baseLanes | a : a),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              z(fa, Ie),
              (Ie |= e),
              null
            );
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (o = n !== null ? n.baseLanes : a),
            z(fa, Ie),
            (Ie |= o));
        }
      else
        (n !== null
          ? ((o = n.baseLanes | a), (t.memoizedState = null))
          : (o = a),
          z(fa, Ie),
          (Ie |= o));
      return (fe(e, t, r, a), t.child);
    }
    function Nd(e, t) {
      var a = t.ref;
      ((e === null && a !== null) || (e !== null && e.ref !== a)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function vl(e, t, a, o, r) {
      var n = ye(a) ? Nt : ue.current;
      return (
        (n = La(t, n)),
        ga(t, r),
        (a = us(e, t, a, o, n, r)),
        (o = ds()),
        e !== null && !ge
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~r),
            rt(e, t, r))
          : (_ && o && Kl(t), (t.flags |= 1), fe(e, t, a, r), t.child)
      );
    }
    function Zi(e, t, a, o, r) {
      if (ye(a)) {
        var n = !0;
        Ar(t);
      } else n = !1;
      if ((ga(t, r), t.stateNode === null))
        (mr(e, t), qd(t, a, o), Sl(t, a, o, r), (o = !0));
      else if (e === null) {
        var l = t.stateNode,
          s = t.memoizedProps;
        l.props = s;
        var u = l.context,
          c = a.contextType;
        typeof c == "object" && c !== null
          ? (c = be(c))
          : ((c = ye(a) ? Nt : ue.current), (c = La(t, c)));
        var g = a.getDerivedStateFromProps,
          x =
            typeof g == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function";
        (x ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((s !== o || u !== c) && $i(t, l, o, c)),
          (ft = !1));
        var h = t.memoizedState;
        ((l.state = h),
          br(t, o, l, r),
          (u = t.memoizedState),
          s !== o || h !== u || xe.current || ft
            ? (typeof g == "function" &&
                (Ll(t, a, g, o), (u = t.memoizedState)),
              (s = ft || Gi(t, a, s, o, h, u, c))
                ? (x ||
                    (typeof l.UNSAFE_componentWillMount != "function" &&
                      typeof l.componentWillMount != "function") ||
                    (typeof l.componentWillMount == "function" &&
                      l.componentWillMount(),
                    typeof l.UNSAFE_componentWillMount == "function" &&
                      l.UNSAFE_componentWillMount()),
                  typeof l.componentDidMount == "function" &&
                    (t.flags |= 4194308))
                : (typeof l.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = o),
                  (t.memoizedState = u)),
              (l.props = o),
              (l.state = u),
              (l.context = c),
              (o = s))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (o = !1)));
      } else {
        ((l = t.stateNode),
          md(e, t),
          (s = t.memoizedProps),
          (c = t.type === t.elementType ? s : Re(t.type, s)),
          (l.props = c),
          (x = t.pendingProps),
          (h = l.context),
          (u = a.contextType),
          typeof u == "object" && u !== null
            ? (u = be(u))
            : ((u = ye(a) ? Nt : ue.current), (u = La(t, u))));
        var y = a.getDerivedStateFromProps;
        ((g =
          typeof y == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function") ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((s !== x || h !== u) && $i(t, l, o, u)),
          (ft = !1),
          (h = t.memoizedState),
          (l.state = h),
          br(t, o, l, r));
        var I = t.memoizedState;
        s !== x || h !== I || xe.current || ft
          ? (typeof y == "function" && (Ll(t, a, y, o), (I = t.memoizedState)),
            (c = ft || Gi(t, a, c, o, h, I, u) || !1)
              ? (g ||
                  (typeof l.UNSAFE_componentWillUpdate != "function" &&
                    typeof l.componentWillUpdate != "function") ||
                  (typeof l.componentWillUpdate == "function" &&
                    l.componentWillUpdate(o, I, u),
                  typeof l.UNSAFE_componentWillUpdate == "function" &&
                    l.UNSAFE_componentWillUpdate(o, I, u)),
                typeof l.componentDidUpdate == "function" && (t.flags |= 4),
                typeof l.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 1024))
              : (typeof l.componentDidUpdate != "function" ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                typeof l.getSnapshotBeforeUpdate != "function" ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = o),
                (t.memoizedState = I)),
            (l.props = o),
            (l.state = I),
            (l.context = u),
            (o = c))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (o = !1));
      }
      return wl(e, t, a, o, n, r);
    }
    function wl(e, t, a, o, r, n) {
      Nd(e, t);
      var l = (t.flags & 128) !== 0;
      if (!o && !l) return (r && zi(t, a, !1), rt(e, t, n));
      ((o = t.stateNode), (Mp.current = t));
      var s =
        l && typeof a.getDerivedStateFromError != "function"
          ? null
          : o.render();
      return (
        (t.flags |= 1),
        e !== null && l
          ? ((t.child = Ia(t, e.child, null, n)), (t.child = Ia(t, null, s, n)))
          : fe(e, t, s, n),
        (t.memoizedState = o.state),
        r && zi(t, a, !0),
        t.child
      );
    }
    function Hd(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? Ri(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Ri(e, t.context, !1),
        ns(e, t.containerInfo));
    }
    function eu(e, t, a, o, r) {
      return (Sa(), Zl(r), (t.flags |= 256), fe(e, t, a, o), t.child);
    }
    var Cl = { dehydrated: null, treeContext: null, retryLane: 0 };
    function kl(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Wd(e, t, a) {
      var o = t.pendingProps,
        r = V.current,
        n = !1,
        l = (t.flags & 128) !== 0,
        s;
      if (
        ((s = l) ||
          (s = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
        s
          ? ((n = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (r |= 1),
        z(V, r & 1),
        e === null)
      )
        return (
          xl(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1
                ? e.data === "$!"
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824)
                : (t.lanes = 1),
              null)
            : ((l = o.children),
              (e = o.fallback),
              n
                ? ((o = t.mode),
                  (n = t.child),
                  (l = { mode: "hidden", children: l }),
                  !(o & 1) && n !== null
                    ? ((n.childLanes = 0), (n.pendingProps = l))
                    : (n = Yr(l, o, 0, null)),
                  (e = Ut(e, o, a, null)),
                  (n.return = t),
                  (e.return = t),
                  (n.sibling = e),
                  (t.child = n),
                  (t.child.memoizedState = kl(a)),
                  (t.memoizedState = Cl),
                  e)
                : ps(t, l))
        );
      if (
        ((r = e.memoizedState), r !== null && ((s = r.dehydrated), s !== null))
      )
        return Ap(e, t, l, o, s, r, a);
      if (n) {
        ((n = o.fallback), (l = t.mode), (r = e.child), (s = r.sibling));
        var u = { mode: "hidden", children: o.children };
        return (
          !(l & 1) && t.child !== r
            ? ((o = t.child),
              (o.childLanes = 0),
              (o.pendingProps = u),
              (t.deletions = null))
            : ((o = wt(r, u)), (o.subtreeFlags = r.subtreeFlags & 14680064)),
          s !== null
            ? (n = wt(s, n))
            : ((n = Ut(n, l, a, null)), (n.flags |= 2)),
          (n.return = t),
          (o.return = t),
          (o.sibling = n),
          (t.child = o),
          (o = n),
          (n = t.child),
          (l = e.child.memoizedState),
          (l =
            l === null
              ? kl(a)
              : {
                  baseLanes: l.baseLanes | a,
                  cachePool: null,
                  transitions: l.transitions,
                }),
          (n.memoizedState = l),
          (n.childLanes = e.childLanes & ~a),
          (t.memoizedState = Cl),
          o
        );
      }
      return (
        (n = e.child),
        (e = n.sibling),
        (o = wt(n, { mode: "visible", children: o.children })),
        !(t.mode & 1) && (o.lanes = a),
        (o.return = t),
        (o.sibling = null),
        e !== null &&
          ((a = t.deletions),
          a === null ? ((t.deletions = [e]), (t.flags |= 16)) : a.push(e)),
        (t.child = o),
        (t.memoizedState = null),
        o
      );
    }
    function ps(e, t) {
      return (
        (t = Yr({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function nr(e, t, a, o) {
      return (
        o !== null && Zl(o),
        Ia(t, e.child, null, a),
        (e = ps(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Ap(e, t, a, o, r, n, l) {
      if (a)
        return t.flags & 256
          ? ((t.flags &= -257), (o = Un(Error(S(422)))), nr(e, t, l, o))
          : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((n = o.fallback),
              (r = t.mode),
              (o = Yr({ mode: "visible", children: o.children }, r, 0, null)),
              (n = Ut(n, r, l, null)),
              (n.flags |= 2),
              (o.return = t),
              (n.return = t),
              (o.sibling = n),
              (t.child = o),
              t.mode & 1 && Ia(t, e.child, null, l),
              (t.child.memoizedState = kl(l)),
              (t.memoizedState = Cl),
              n);
      if (!(t.mode & 1)) return nr(e, t, l, null);
      if (r.data === "$!") {
        if (((o = r.nextSibling && r.nextSibling.dataset), o)) var s = o.dgst;
        return (
          (o = s),
          (n = Error(S(419))),
          (o = Un(n, o, void 0)),
          nr(e, t, l, o)
        );
      }
      if (((s = (l & e.childLanes) !== 0), ge || s)) {
        if (((o = ee), o !== null)) {
          switch (l & -l) {
            case 4:
              r = 2;
              break;
            case 16:
              r = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              r = 32;
              break;
            case 536870912:
              r = 268435456;
              break;
            default:
              r = 0;
          }
          ((r = r & (o.suspendedLanes | l) ? 0 : r),
            r !== 0 &&
              r !== n.retryLane &&
              ((n.retryLane = r), ot(e, r), He(o, e, r, -1)));
        }
        return (Ls(), (o = Un(Error(S(421)))), nr(e, t, l, o));
      }
      return r.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Hp.bind(null, e)),
          (r._reactRetry = t),
          null)
        : ((e = n.treeContext),
          (ve = Lt(r.nextSibling)),
          (we = t),
          (_ = !0),
          (Ue = null),
          e !== null &&
            ((Te[Fe++] = Ye),
            (Te[Fe++] = Ze),
            (Te[Fe++] = Ht),
            (Ye = e.id),
            (Ze = e.overflow),
            (Ht = t)),
          (t = ps(t, o.children)),
          (t.flags |= 4096),
          t);
    }
    function tu(e, t, a) {
      e.lanes |= t;
      var o = e.alternate;
      (o !== null && (o.lanes |= t), yl(e.return, t, a));
    }
    function Nn(e, t, a, o, r) {
      var n = e.memoizedState;
      n === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: a,
            tailMode: r,
          })
        : ((n.isBackwards = t),
          (n.rendering = null),
          (n.renderingStartTime = 0),
          (n.last = o),
          (n.tail = a),
          (n.tailMode = r));
    }
    function _d(e, t, a) {
      var o = t.pendingProps,
        r = o.revealOrder,
        n = o.tail;
      if ((fe(e, t, o.children, a), (o = V.current), o & 2))
        ((o = (o & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && tu(e, a, t);
            else if (e.tag === 19) tu(e, a, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        o &= 1;
      }
      if ((z(V, o), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (r) {
          case "forwards":
            for (a = t.child, r = null; a !== null;)
              ((e = a.alternate),
                e !== null && Er(e) === null && (r = a),
                (a = a.sibling));
            ((a = r),
              a === null
                ? ((r = t.child), (t.child = null))
                : ((r = a.sibling), (a.sibling = null)),
              Nn(t, !1, r, a, n));
            break;
          case "backwards":
            for (a = null, r = t.child, t.child = null; r !== null;) {
              if (((e = r.alternate), e !== null && Er(e) === null)) {
                t.child = r;
                break;
              }
              ((e = r.sibling), (r.sibling = a), (a = r), (r = e));
            }
            Nn(t, !0, a, null, n);
            break;
          case "together":
            Nn(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function mr(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function rt(e, t, a) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (_t |= t.lanes),
        !(a & t.childLanes))
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(S(153));
      if (t.child !== null) {
        for (
          e = t.child, a = wt(e, e.pendingProps), t.child = a, a.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (a = a.sibling = wt(e, e.pendingProps)),
            (a.return = t));
        a.sibling = null;
      }
      return t.child;
    }
    function Tp(e, t, a) {
      switch (t.tag) {
        case 3:
          (Hd(t), Sa());
          break;
        case 5:
          hd(t);
          break;
        case 1:
          ye(t.type) && Ar(t);
          break;
        case 4:
          ns(t, t.stateNode.containerInfo);
          break;
        case 10:
          var o = t.type._context,
            r = t.memoizedProps.value;
          (z(Br, o._currentValue), (o._currentValue = r));
          break;
        case 13:
          if (((o = t.memoizedState), o !== null))
            return o.dehydrated !== null
              ? (z(V, V.current & 1), (t.flags |= 128), null)
              : a & t.child.childLanes
                ? Wd(e, t, a)
                : (z(V, V.current & 1),
                  (e = rt(e, t, a)),
                  e !== null ? e.sibling : null);
          z(V, V.current & 1);
          break;
        case 19:
          if (((o = (a & t.childLanes) !== 0), e.flags & 128)) {
            if (o) return _d(e, t, a);
            t.flags |= 128;
          }
          if (
            ((r = t.memoizedState),
            r !== null &&
              ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
            z(V, V.current),
            o)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), Ud(e, t, a));
      }
      return rt(e, t, a);
    }
    var Vd, Pl, jd, Gd;
    Vd = function (e, t) {
      for (var a = t.child; a !== null;) {
        if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
        else if (a.tag !== 4 && a.child !== null) {
          ((a.child.return = a), (a = a.child));
          continue;
        }
        if (a === t) break;
        for (; a.sibling === null;) {
          if (a.return === null || a.return === t) return;
          a = a.return;
        }
        ((a.sibling.return = a.return), (a = a.sibling));
      }
    };
    Pl = function () {};
    jd = function (e, t, a, o) {
      var r = e.memoizedProps;
      if (r !== o) {
        ((e = t.stateNode), Rt(Qe.current));
        var n = null;
        switch (a) {
          case "input":
            ((r = Qn(e, r)), (o = Qn(e, o)), (n = []));
            break;
          case "select":
            ((r = G({}, r, { value: void 0 })),
              (o = G({}, o, { value: void 0 })),
              (n = []));
            break;
          case "textarea":
            ((r = Kn(e, r)), (o = Kn(e, o)), (n = []));
            break;
          default:
            typeof r.onClick != "function" &&
              typeof o.onClick == "function" &&
              (e.onclick = Pr);
        }
        Zn(a, o);
        var l;
        a = null;
        for (c in r)
          if (!o.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
            if (c === "style") {
              var s = r[c];
              for (l in s) s.hasOwnProperty(l) && (a || (a = {}), (a[l] = ""));
            } else
              c !== "dangerouslySetInnerHTML" &&
                c !== "children" &&
                c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                c !== "autoFocus" &&
                (oo.hasOwnProperty(c)
                  ? n || (n = [])
                  : (n = n || []).push(c, null));
        for (c in o) {
          var u = o[c];
          if (
            ((s = r != null ? r[c] : void 0),
            o.hasOwnProperty(c) && u !== s && (u != null || s != null))
          )
            if (c === "style")
              if (s) {
                for (l in s)
                  !s.hasOwnProperty(l) ||
                    (u && u.hasOwnProperty(l)) ||
                    (a || (a = {}), (a[l] = ""));
                for (l in u)
                  u.hasOwnProperty(l) &&
                    s[l] !== u[l] &&
                    (a || (a = {}), (a[l] = u[l]));
              } else (a || (n || (n = []), n.push(c, a)), (a = u));
            else
              c === "dangerouslySetInnerHTML"
                ? ((u = u ? u.__html : void 0),
                  (s = s ? s.__html : void 0),
                  u != null && s !== u && (n = n || []).push(c, u))
                : c === "children"
                  ? (typeof u != "string" && typeof u != "number") ||
                    (n = n || []).push(c, "" + u)
                  : c !== "suppressContentEditableWarning" &&
                    c !== "suppressHydrationWarning" &&
                    (oo.hasOwnProperty(c)
                      ? (u != null && c === "onScroll" && U("scroll", e),
                        n || s === u || (n = []))
                      : (n = n || []).push(c, u));
        }
        a && (n = n || []).push("style", a);
        var c = n;
        (t.updateQueue = c) && (t.flags |= 4);
      }
    };
    Gd = function (e, t, a, o) {
      a !== o && (t.flags |= 4);
    };
    function Ha(e, t) {
      if (!_)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null;)
              (t.alternate !== null && (a = t), (t = t.sibling));
            a === null ? (e.tail = null) : (a.sibling = null);
            break;
          case "collapsed":
            a = e.tail;
            for (var o = null; a !== null;)
              (a.alternate !== null && (o = a), (a = a.sibling));
            o === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (o.sibling = null);
        }
    }
    function se(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        a = 0,
        o = 0;
      if (t)
        for (var r = e.child; r !== null;)
          ((a |= r.lanes | r.childLanes),
            (o |= r.subtreeFlags & 14680064),
            (o |= r.flags & 14680064),
            (r.return = e),
            (r = r.sibling));
      else
        for (r = e.child; r !== null;)
          ((a |= r.lanes | r.childLanes),
            (o |= r.subtreeFlags),
            (o |= r.flags),
            (r.return = e),
            (r = r.sibling));
      return ((e.subtreeFlags |= o), (e.childLanes = a), t);
    }
    function Fp(e, t, a) {
      var o = t.pendingProps;
      switch ((Yl(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (se(t), null);
        case 1:
          return (ye(t.type) && Mr(), se(t), null);
        case 3:
          return (
            (o = t.stateNode),
            va(),
            N(xe),
            N(ue),
            ss(),
            o.pendingContext &&
              ((o.context = o.pendingContext), (o.pendingContext = null)),
            (e === null || e.child === null) &&
              (or(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ue !== null && (El(Ue), (Ue = null)))),
            Pl(e, t),
            se(t),
            null
          );
        case 5:
          ls(t);
          var r = Rt(go.current);
          if (((a = t.type), e !== null && t.stateNode != null))
            (jd(e, t, a, o, r),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!o) {
              if (t.stateNode === null) throw Error(S(166));
              return (se(t), null);
            }
            if (((e = Rt(Qe.current)), or(t))) {
              ((o = t.stateNode), (a = t.type));
              var n = t.memoizedProps;
              switch (((o[Ge] = t), (o[mo] = n), (e = (t.mode & 1) !== 0), a)) {
                case "dialog":
                  (U("cancel", o), U("close", o));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  U("load", o);
                  break;
                case "video":
                case "audio":
                  for (r = 0; r < $a.length; r++) U($a[r], o);
                  break;
                case "source":
                  U("error", o);
                  break;
                case "img":
                case "image":
                case "link":
                  (U("error", o), U("load", o));
                  break;
                case "details":
                  U("toggle", o);
                  break;
                case "input":
                  (ui(o, n), U("invalid", o));
                  break;
                case "select":
                  ((o._wrapperState = { wasMultiple: !!n.multiple }),
                    U("invalid", o));
                  break;
                case "textarea":
                  (fi(o, n), U("invalid", o));
              }
              (Zn(a, n), (r = null));
              for (var l in n)
                if (n.hasOwnProperty(l)) {
                  var s = n[l];
                  l === "children"
                    ? typeof s == "string"
                      ? o.textContent !== s &&
                        (n.suppressHydrationWarning !== !0 &&
                          ar(o.textContent, s, e),
                        (r = ["children", s]))
                      : typeof s == "number" &&
                        o.textContent !== "" + s &&
                        (n.suppressHydrationWarning !== !0 &&
                          ar(o.textContent, s, e),
                        (r = ["children", "" + s]))
                    : oo.hasOwnProperty(l) &&
                      s != null &&
                      l === "onScroll" &&
                      U("scroll", o);
                }
              switch (a) {
                case "input":
                  (Vo(o), di(o, n, !0));
                  break;
                case "textarea":
                  (Vo(o), ci(o));
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof n.onClick == "function" && (o.onclick = Pr);
              }
              ((o = r), (t.updateQueue = o), o !== null && (t.flags |= 4));
            } else {
              ((l = r.nodeType === 9 ? r : r.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = Su(a)),
                e === "http://www.w3.org/1999/xhtml"
                  ? a === "script"
                    ? ((e = l.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)))
                    : typeof o.is == "string"
                      ? (e = l.createElement(a, { is: o.is }))
                      : ((e = l.createElement(a)),
                        a === "select" &&
                          ((l = e),
                          o.multiple
                            ? (l.multiple = !0)
                            : o.size && (l.size = o.size)))
                  : (e = l.createElementNS(e, a)),
                (e[Ge] = t),
                (e[mo] = o),
                Vd(e, t, !1, !1),
                (t.stateNode = e));
              e: {
                switch (((l = el(a, o)), a)) {
                  case "dialog":
                    (U("cancel", e), U("close", e), (r = o));
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    (U("load", e), (r = o));
                    break;
                  case "video":
                  case "audio":
                    for (r = 0; r < $a.length; r++) U($a[r], e);
                    r = o;
                    break;
                  case "source":
                    (U("error", e), (r = o));
                    break;
                  case "img":
                  case "image":
                  case "link":
                    (U("error", e), U("load", e), (r = o));
                    break;
                  case "details":
                    (U("toggle", e), (r = o));
                    break;
                  case "input":
                    (ui(e, o), (r = Qn(e, o)), U("invalid", e));
                    break;
                  case "option":
                    r = o;
                    break;
                  case "select":
                    ((e._wrapperState = { wasMultiple: !!o.multiple }),
                      (r = G({}, o, { value: void 0 })),
                      U("invalid", e));
                    break;
                  case "textarea":
                    (fi(e, o), (r = Kn(e, o)), U("invalid", e));
                    break;
                  default:
                    r = o;
                }
                (Zn(a, r), (s = r));
                for (n in s)
                  if (s.hasOwnProperty(n)) {
                    var u = s[n];
                    n === "style"
                      ? wu(e, u)
                      : n === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0), u != null && Iu(e, u))
                        : n === "children"
                          ? typeof u == "string"
                            ? (a !== "textarea" || u !== "") && ro(e, u)
                            : typeof u == "number" && ro(e, "" + u)
                          : n !== "suppressContentEditableWarning" &&
                            n !== "suppressHydrationWarning" &&
                            n !== "autoFocus" &&
                            (oo.hasOwnProperty(n)
                              ? u != null && n === "onScroll" && U("scroll", e)
                              : u != null && Rl(e, n, u, l));
                  }
                switch (a) {
                  case "input":
                    (Vo(e), di(e, o, !1));
                    break;
                  case "textarea":
                    (Vo(e), ci(e));
                    break;
                  case "option":
                    o.value != null &&
                      e.setAttribute("value", "" + Ct(o.value));
                    break;
                  case "select":
                    ((e.multiple = !!o.multiple),
                      (n = o.value),
                      n != null
                        ? ca(e, !!o.multiple, n, !1)
                        : o.defaultValue != null &&
                          ca(e, !!o.multiple, o.defaultValue, !0));
                    break;
                  default:
                    typeof r.onClick == "function" && (e.onclick = Pr);
                }
                switch (a) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o = !!o.autoFocus;
                    break e;
                  case "img":
                    o = !0;
                    break e;
                  default:
                    o = !1;
                }
              }
              o && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (se(t), null);
        case 6:
          if (e && t.stateNode != null) Gd(e, t, e.memoizedProps, o);
          else {
            if (typeof o != "string" && t.stateNode === null)
              throw Error(S(166));
            if (((a = Rt(go.current)), Rt(Qe.current), or(t))) {
              if (
                ((o = t.stateNode),
                (a = t.memoizedProps),
                (o[Ge] = t),
                (n = o.nodeValue !== a) && ((e = we), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    ar(o.nodeValue, a, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      ar(o.nodeValue, a, (e.mode & 1) !== 0);
                }
              n && (t.flags |= 4);
            } else
              ((o = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(o)),
                (o[Ge] = t),
                (t.stateNode = o));
          }
          return (se(t), null);
        case 13:
          if (
            (N(V),
            (o = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (_ && ve !== null && t.mode & 1 && !(t.flags & 128))
              (dd(), Sa(), (t.flags |= 98560), (n = !1));
            else if (((n = or(t)), o !== null && o.dehydrated !== null)) {
              if (e === null) {
                if (!n) throw Error(S(318));
                if (
                  ((n = t.memoizedState),
                  (n = n !== null ? n.dehydrated : null),
                  !n)
                )
                  throw Error(S(317));
                n[Ge] = t;
              } else
                (Sa(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (se(t), (n = !1));
            } else (Ue !== null && (El(Ue), (Ue = null)), (n = !0));
            if (!n) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = a), t)
            : ((o = o !== null),
              o !== (e !== null && e.memoizedState !== null) &&
                o &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || V.current & 1 ? K === 0 && (K = 3) : Ls())),
              t.updateQueue !== null && (t.flags |= 4),
              se(t),
              null);
        case 4:
          return (
            va(),
            Pl(e, t),
            e === null && co(t.stateNode.containerInfo),
            se(t),
            null
          );
        case 10:
          return (as(t.type._context), se(t), null);
        case 17:
          return (ye(t.type) && Mr(), se(t), null);
        case 19:
          if ((N(V), (n = t.memoizedState), n === null)) return (se(t), null);
          if (((o = (t.flags & 128) !== 0), (l = n.rendering), l === null))
            if (o) Ha(n, !1);
            else {
              if (K !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((l = Er(e)), l !== null)) {
                    for (
                      t.flags |= 128,
                        Ha(n, !1),
                        o = l.updateQueue,
                        o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        o = a,
                        a = t.child;
                      a !== null;
                    )
                      ((n = a),
                        (e = o),
                        (n.flags &= 14680066),
                        (l = n.alternate),
                        l === null
                          ? ((n.childLanes = 0),
                            (n.lanes = e),
                            (n.child = null),
                            (n.subtreeFlags = 0),
                            (n.memoizedProps = null),
                            (n.memoizedState = null),
                            (n.updateQueue = null),
                            (n.dependencies = null),
                            (n.stateNode = null))
                          : ((n.childLanes = l.childLanes),
                            (n.lanes = l.lanes),
                            (n.child = l.child),
                            (n.subtreeFlags = 0),
                            (n.deletions = null),
                            (n.memoizedProps = l.memoizedProps),
                            (n.memoizedState = l.memoizedState),
                            (n.updateQueue = l.updateQueue),
                            (n.type = l.type),
                            (e = l.dependencies),
                            (n.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (a = a.sibling));
                    return (z(V, (V.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              n.tail !== null &&
                Q() > Ca &&
                ((t.flags |= 128), (o = !0), Ha(n, !1), (t.lanes = 4194304));
            }
          else {
            if (!o)
              if (((e = Er(l)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (o = !0),
                  (a = e.updateQueue),
                  a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                  Ha(n, !0),
                  n.tail === null &&
                    n.tailMode === "hidden" &&
                    !l.alternate &&
                    !_)
                )
                  return (se(t), null);
              } else
                2 * Q() - n.renderingStartTime > Ca &&
                  a !== 1073741824 &&
                  ((t.flags |= 128), (o = !0), Ha(n, !1), (t.lanes = 4194304));
            n.isBackwards
              ? ((l.sibling = t.child), (t.child = l))
              : ((a = n.last),
                a !== null ? (a.sibling = l) : (t.child = l),
                (n.last = l));
          }
          return n.tail !== null
            ? ((t = n.tail),
              (n.rendering = t),
              (n.tail = t.sibling),
              (n.renderingStartTime = Q()),
              (t.sibling = null),
              (a = V.current),
              z(V, o ? (a & 1) | 2 : a & 1),
              t)
            : (se(t), null);
        case 22:
        case 23:
          return (
            ys(),
            (o = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
            o && t.mode & 1
              ? Ie & 1073741824 &&
                (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : se(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(S(156, t.tag));
    }
    function Bp(e, t) {
      switch ((Yl(t), t.tag)) {
        case 1:
          return (
            ye(t.type) && Mr(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            va(),
            N(xe),
            N(ue),
            ss(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (ls(t), null);
        case 13:
          if (
            (N(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(S(340));
            Sa();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (N(V), null);
        case 4:
          return (va(), null);
        case 10:
          return (as(t.type._context), null);
        case 22:
        case 23:
          return (ys(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var lr = !1,
      ie = !1,
      Dp = typeof WeakSet == "function" ? WeakSet : Set,
      k = null;
    function da(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function")
          try {
            a(null);
          } catch (o) {
            $(e, t, o);
          }
        else a.current = null;
    }
    function Ml(e, t, a) {
      try {
        a();
      } catch (o) {
        $(e, t, o);
      }
    }
    var au = !1;
    function bp(e, t) {
      if (((dl = wr), (e = Ku()), Jl(e))) {
        if ("selectionStart" in e)
          var a = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            a = ((a = e.ownerDocument) && a.defaultView) || window;
            var o = a.getSelection && a.getSelection();
            if (o && o.rangeCount !== 0) {
              a = o.anchorNode;
              var r = o.anchorOffset,
                n = o.focusNode;
              o = o.focusOffset;
              try {
                (a.nodeType, n.nodeType);
              } catch (L) {
                a = null;
                break e;
              }
              var l = 0,
                s = -1,
                u = -1,
                c = 0,
                g = 0,
                x = e,
                h = null;
              t: for (;;) {
                for (
                  var y;
                  x !== a || (r !== 0 && x.nodeType !== 3) || (s = l + r),
                    x !== n || (o !== 0 && x.nodeType !== 3) || (u = l + o),
                    x.nodeType === 3 && (l += x.nodeValue.length),
                    (y = x.firstChild) !== null;
                )
                  ((h = x), (x = y));
                for (;;) {
                  if (x === e) break t;
                  if (
                    (h === a && ++c === r && (s = l),
                    h === n && ++g === o && (u = l),
                    (y = x.nextSibling) !== null)
                  )
                    break;
                  ((x = h), (h = x.parentNode));
                }
                x = y;
              }
              a = s === -1 || u === -1 ? null : { start: s, end: u };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (
        fl = { focusedElem: e, selectionRange: a }, wr = !1, k = t;
        k !== null;
      )
        if (
          ((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
          ((e.return = t), (k = e));
        else
          for (; k !== null;) {
            t = k;
            try {
              var I = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (I !== null) {
                      var v = I.memoizedProps,
                        F = I.memoizedState,
                        p = t.stateNode,
                        d = p.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? v : Re(t.type, v),
                          F,
                        );
                      p.__reactInternalSnapshotBeforeUpdate = d;
                    }
                    break;
                  case 3:
                    var m = t.stateNode.containerInfo;
                    m.nodeType === 1
                      ? (m.textContent = "")
                      : m.nodeType === 9 &&
                        m.documentElement &&
                        m.removeChild(m.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(S(163));
                }
            } catch (L) {
              $(t, t.return, L);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (k = e));
              break;
            }
            k = t.return;
          }
      return ((I = au), (au = !1), I);
    }
    function eo(e, t, a) {
      var o = t.updateQueue;
      if (((o = o !== null ? o.lastEffect : null), o !== null)) {
        var r = (o = o.next);
        do {
          if ((r.tag & e) === e) {
            var n = r.destroy;
            ((r.destroy = void 0), n !== void 0 && Ml(t, a, n));
          }
          r = r.next;
        } while (r !== o);
      }
    }
    function Jr(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        var a = (t = t.next);
        do {
          if ((a.tag & e) === e) {
            var o = a.create;
            a.destroy = o();
          }
          a = a.next;
        } while (a !== t);
      }
    }
    function Al(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode;
        switch (e.tag) {
          case 5:
            e = a;
            break;
          default:
            e = a;
        }
        typeof t == "function" ? t(e) : (t.current = e);
      }
    }
    function $d(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), $d(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[Ge],
            delete t[mo],
            delete t[ml],
            delete t[hp],
            delete t[gp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function Qd(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function ou(e) {
      e: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Qd(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Tl(e, t, a) {
      var o = e.tag;
      if (o === 5 || o === 6)
        ((e = e.stateNode),
          t
            ? a.nodeType === 8
              ? a.parentNode.insertBefore(e, t)
              : a.insertBefore(e, t)
            : (a.nodeType === 8
                ? ((t = a.parentNode), t.insertBefore(e, a))
                : ((t = a), t.appendChild(e)),
              (a = a._reactRootContainer),
              a != null || t.onclick !== null || (t.onclick = Pr)));
      else if (o !== 4 && ((e = e.child), e !== null))
        for (Tl(e, t, a), e = e.sibling; e !== null;)
          (Tl(e, t, a), (e = e.sibling));
    }
    function Fl(e, t, a) {
      var o = e.tag;
      if (o === 5 || o === 6)
        ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
      else if (o !== 4 && ((e = e.child), e !== null))
        for (Fl(e, t, a), e = e.sibling; e !== null;)
          (Fl(e, t, a), (e = e.sibling));
    }
    var ae = null,
      ze = !1;
    function ut(e, t, a) {
      for (a = a.child; a !== null;) (Xd(e, t, a), (a = a.sibling));
    }
    function Xd(e, t, a) {
      if ($e && typeof $e.onCommitFiberUnmount == "function")
        try {
          $e.onCommitFiberUnmount(Wr, a);
        } catch (s) {}
      switch (a.tag) {
        case 5:
          ie || da(a, t);
        case 6:
          var o = ae,
            r = ze;
          ((ae = null),
            ut(e, t, a),
            (ae = o),
            (ze = r),
            ae !== null &&
              (ze
                ? ((e = ae),
                  (a = a.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(a)
                    : e.removeChild(a))
                : ae.removeChild(a.stateNode)));
          break;
        case 18:
          ae !== null &&
            (ze
              ? ((e = ae),
                (a = a.stateNode),
                e.nodeType === 8
                  ? bn(e.parentNode, a)
                  : e.nodeType === 1 && bn(e, a),
                io(e))
              : bn(ae, a.stateNode));
          break;
        case 4:
          ((o = ae),
            (r = ze),
            (ae = a.stateNode.containerInfo),
            (ze = !0),
            ut(e, t, a),
            (ae = o),
            (ze = r));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !ie &&
            ((o = a.updateQueue),
            o !== null && ((o = o.lastEffect), o !== null))
          ) {
            r = o = o.next;
            do {
              var n = r,
                l = n.destroy;
              ((n = n.tag),
                l !== void 0 && (n & 2 || n & 4) && Ml(a, t, l),
                (r = r.next));
            } while (r !== o);
          }
          ut(e, t, a);
          break;
        case 1:
          if (
            !ie &&
            (da(a, t),
            (o = a.stateNode),
            typeof o.componentWillUnmount == "function")
          )
            try {
              ((o.props = a.memoizedProps),
                (o.state = a.memoizedState),
                o.componentWillUnmount());
            } catch (s) {
              $(a, t, s);
            }
          ut(e, t, a);
          break;
        case 21:
          ut(e, t, a);
          break;
        case 22:
          a.mode & 1
            ? ((ie = (o = ie) || a.memoizedState !== null),
              ut(e, t, a),
              (ie = o))
            : ut(e, t, a);
          break;
        default:
          ut(e, t, a);
      }
    }
    function ru(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        (a === null && (a = e.stateNode = new Dp()),
          t.forEach(function (o) {
            var r = Wp.bind(null, e, o);
            a.has(o) || (a.add(o), o.then(r, r));
          }));
      }
    }
    function Oe(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var o = 0; o < a.length; o++) {
          var r = a[o];
          try {
            var n = e,
              l = t,
              s = l;
            e: for (; s !== null;) {
              switch (s.tag) {
                case 5:
                  ((ae = s.stateNode), (ze = !1));
                  break e;
                case 3:
                  ((ae = s.stateNode.containerInfo), (ze = !0));
                  break e;
                case 4:
                  ((ae = s.stateNode.containerInfo), (ze = !0));
                  break e;
              }
              s = s.return;
            }
            if (ae === null) throw Error(S(160));
            (Xd(n, l, r), (ae = null), (ze = !1));
            var u = r.alternate;
            (u !== null && (u.return = null), (r.return = null));
          } catch (c) {
            $(r, t, c);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) (Jd(t, e), (t = t.sibling));
    }
    function Jd(e, t) {
      var a = e.alternate,
        o = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Oe(t, e), Ve(e), o & 4)) {
            try {
              (eo(3, e, e.return), Jr(3, e));
            } catch (v) {
              $(e, e.return, v);
            }
            try {
              eo(5, e, e.return);
            } catch (v) {
              $(e, e.return, v);
            }
          }
          break;
        case 1:
          (Oe(t, e), Ve(e), o & 512 && a !== null && da(a, a.return));
          break;
        case 5:
          if (
            (Oe(t, e),
            Ve(e),
            o & 512 && a !== null && da(a, a.return),
            e.flags & 32)
          ) {
            var r = e.stateNode;
            try {
              ro(r, "");
            } catch (v) {
              $(e, e.return, v);
            }
          }
          if (o & 4 && ((r = e.stateNode), r != null)) {
            var n = e.memoizedProps,
              l = a !== null ? a.memoizedProps : n,
              s = e.type,
              u = e.updateQueue;
            if (((e.updateQueue = null), u !== null))
              try {
                (s === "input" &&
                  n.type === "radio" &&
                  n.name != null &&
                  yu(r, n),
                  el(s, l));
                var c = el(s, n);
                for (l = 0; l < u.length; l += 2) {
                  var g = u[l],
                    x = u[l + 1];
                  g === "style"
                    ? wu(r, x)
                    : g === "dangerouslySetInnerHTML"
                      ? Iu(r, x)
                      : g === "children"
                        ? ro(r, x)
                        : Rl(r, g, x, c);
                }
                switch (s) {
                  case "input":
                    Xn(r, n);
                    break;
                  case "textarea":
                    Lu(r, n);
                    break;
                  case "select":
                    var h = r._wrapperState.wasMultiple;
                    r._wrapperState.wasMultiple = !!n.multiple;
                    var y = n.value;
                    y != null
                      ? ca(r, !!n.multiple, y, !1)
                      : h !== !!n.multiple &&
                        (n.defaultValue != null
                          ? ca(r, !!n.multiple, n.defaultValue, !0)
                          : ca(r, !!n.multiple, n.multiple ? [] : "", !1));
                }
                r[mo] = n;
              } catch (v) {
                $(e, e.return, v);
              }
          }
          break;
        case 6:
          if ((Oe(t, e), Ve(e), o & 4)) {
            if (e.stateNode === null) throw Error(S(162));
            ((r = e.stateNode), (n = e.memoizedProps));
            try {
              r.nodeValue = n;
            } catch (v) {
              $(e, e.return, v);
            }
          }
          break;
        case 3:
          if (
            (Oe(t, e),
            Ve(e),
            o & 4 && a !== null && a.memoizedState.isDehydrated)
          )
            try {
              io(t.containerInfo);
            } catch (v) {
              $(e, e.return, v);
            }
          break;
        case 4:
          (Oe(t, e), Ve(e));
          break;
        case 13:
          (Oe(t, e),
            Ve(e),
            (r = e.child),
            r.flags & 8192 &&
              ((n = r.memoizedState !== null),
              (r.stateNode.isHidden = n),
              !n ||
                (r.alternate !== null && r.alternate.memoizedState !== null) ||
                (gs = Q())),
            o & 4 && ru(e));
          break;
        case 22:
          if (
            ((g = a !== null && a.memoizedState !== null),
            e.mode & 1 ? ((ie = (c = ie) || g), Oe(t, e), (ie = c)) : Oe(t, e),
            Ve(e),
            o & 8192)
          ) {
            if (
              ((c = e.memoizedState !== null),
              (e.stateNode.isHidden = c) && !g && e.mode & 1)
            )
              for (k = e, g = e.child; g !== null;) {
                for (x = k = g; k !== null;) {
                  switch (((h = k), (y = h.child), h.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      eo(4, h, h.return);
                      break;
                    case 1:
                      da(h, h.return);
                      var I = h.stateNode;
                      if (typeof I.componentWillUnmount == "function") {
                        ((o = h), (a = h.return));
                        try {
                          ((t = o),
                            (I.props = t.memoizedProps),
                            (I.state = t.memoizedState),
                            I.componentWillUnmount());
                        } catch (v) {
                          $(o, a, v);
                        }
                      }
                      break;
                    case 5:
                      da(h, h.return);
                      break;
                    case 22:
                      if (h.memoizedState !== null) {
                        lu(x);
                        continue;
                      }
                  }
                  y !== null ? ((y.return = h), (k = y)) : lu(x);
                }
                g = g.sibling;
              }
            e: for (g = null, x = e; ;) {
              if (x.tag === 5) {
                if (g === null) {
                  g = x;
                  try {
                    ((r = x.stateNode),
                      c
                        ? ((n = r.style),
                          typeof n.setProperty == "function"
                            ? n.setProperty("display", "none", "important")
                            : (n.display = "none"))
                        : ((s = x.stateNode),
                          (u = x.memoizedProps.style),
                          (l =
                            u != null && u.hasOwnProperty("display")
                              ? u.display
                              : null),
                          (s.style.display = vu("display", l))));
                  } catch (v) {
                    $(e, e.return, v);
                  }
                }
              } else if (x.tag === 6) {
                if (g === null)
                  try {
                    x.stateNode.nodeValue = c ? "" : x.memoizedProps;
                  } catch (v) {
                    $(e, e.return, v);
                  }
              } else if (
                ((x.tag !== 22 && x.tag !== 23) ||
                  x.memoizedState === null ||
                  x === e) &&
                x.child !== null
              ) {
                ((x.child.return = x), (x = x.child));
                continue;
              }
              if (x === e) break e;
              for (; x.sibling === null;) {
                if (x.return === null || x.return === e) break e;
                (g === x && (g = null), (x = x.return));
              }
              (g === x && (g = null),
                (x.sibling.return = x.return),
                (x = x.sibling));
            }
          }
          break;
        case 19:
          (Oe(t, e), Ve(e), o & 4 && ru(e));
          break;
        case 21:
          break;
        default:
          (Oe(t, e), Ve(e));
      }
    }
    function Ve(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var a = e.return; a !== null;) {
              if (Qd(a)) {
                var o = a;
                break e;
              }
              a = a.return;
            }
            throw Error(S(160));
          }
          switch (o.tag) {
            case 5:
              var r = o.stateNode;
              o.flags & 32 && (ro(r, ""), (o.flags &= -33));
              var n = ou(e);
              Fl(e, n, r);
              break;
            case 3:
            case 4:
              var l = o.stateNode.containerInfo,
                s = ou(e);
              Tl(e, s, l);
              break;
            default:
              throw Error(S(161));
          }
        } catch (u) {
          $(e, e.return, u);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Ep(e, t, a) {
      ((k = e), Kd(e, t, a));
    }
    function Kd(e, t, a) {
      for (var o = (e.mode & 1) !== 0; k !== null;) {
        var r = k,
          n = r.child;
        if (r.tag === 22 && o) {
          var l = r.memoizedState !== null || lr;
          if (!l) {
            var s = r.alternate,
              u = (s !== null && s.memoizedState !== null) || ie;
            s = lr;
            var c = ie;
            if (((lr = l), (ie = u) && !c))
              for (k = r; k !== null;)
                ((l = k),
                  (u = l.child),
                  l.tag === 22 && l.memoizedState !== null
                    ? su(r)
                    : u !== null
                      ? ((u.return = l), (k = u))
                      : su(r));
            for (; n !== null;) ((k = n), Kd(n, t, a), (n = n.sibling));
            ((k = r), (lr = s), (ie = c));
          }
          nu(e, t, a);
        } else
          r.subtreeFlags & 8772 && n !== null
            ? ((n.return = r), (k = n))
            : nu(e, t, a);
      }
    }
    function nu(e) {
      for (; k !== null;) {
        var t = k;
        if (t.flags & 8772) {
          var a = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  ie || Jr(5, t);
                  break;
                case 1:
                  var o = t.stateNode;
                  if (t.flags & 4 && !ie)
                    if (a === null) o.componentDidMount();
                    else {
                      var r =
                        t.elementType === t.type
                          ? a.memoizedProps
                          : Re(t.type, a.memoizedProps);
                      o.componentDidUpdate(
                        r,
                        a.memoizedState,
                        o.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  var n = t.updateQueue;
                  n !== null && _i(t, n, o);
                  break;
                case 3:
                  var l = t.updateQueue;
                  if (l !== null) {
                    if (((a = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          a = t.child.stateNode;
                          break;
                        case 1:
                          a = t.child.stateNode;
                      }
                    _i(t, l, a);
                  }
                  break;
                case 5:
                  var s = t.stateNode;
                  if (a === null && t.flags & 4) {
                    a = s;
                    var u = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        u.autoFocus && a.focus();
                        break;
                      case "img":
                        u.src && (a.src = u.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var c = t.alternate;
                    if (c !== null) {
                      var g = c.memoizedState;
                      if (g !== null) {
                        var x = g.dehydrated;
                        x !== null && io(x);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(S(163));
              }
            ie || (t.flags & 512 && Al(t));
          } catch (h) {
            $(t, t.return, h);
          }
        }
        if (t === e) {
          k = null;
          break;
        }
        if (((a = t.sibling), a !== null)) {
          ((a.return = t.return), (k = a));
          break;
        }
        k = t.return;
      }
    }
    function lu(e) {
      for (; k !== null;) {
        var t = k;
        if (t === e) {
          k = null;
          break;
        }
        var a = t.sibling;
        if (a !== null) {
          ((a.return = t.return), (k = a));
          break;
        }
        k = t.return;
      }
    }
    function su(e) {
      for (; k !== null;) {
        var t = k;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var a = t.return;
              try {
                Jr(4, t);
              } catch (u) {
                $(t, a, u);
              }
              break;
            case 1:
              var o = t.stateNode;
              if (typeof o.componentDidMount == "function") {
                var r = t.return;
                try {
                  o.componentDidMount();
                } catch (u) {
                  $(t, r, u);
                }
              }
              var n = t.return;
              try {
                Al(t);
              } catch (u) {
                $(t, n, u);
              }
              break;
            case 5:
              var l = t.return;
              try {
                Al(t);
              } catch (u) {
                $(t, l, u);
              }
          }
        } catch (u) {
          $(t, t.return, u);
        }
        if (t === e) {
          k = null;
          break;
        }
        var s = t.sibling;
        if (s !== null) {
          ((s.return = t.return), (k = s));
          break;
        }
        k = t.return;
      }
    }
    var qp = Math.ceil,
      Rr = nt.ReactCurrentDispatcher,
      ms = nt.ReactCurrentOwner,
      De = nt.ReactCurrentBatchConfig,
      E = 0,
      ee = null,
      X = null,
      oe = 0,
      Ie = 0,
      fa = Mt(0),
      K = 0,
      So = null,
      _t = 0,
      Kr = 0,
      hs = 0,
      to = null,
      he = null,
      gs = 0,
      Ca = 1 / 0,
      Je = null,
      zr = !1,
      Bl = null,
      It = null,
      sr = !1,
      ht = null,
      Ur = 0,
      ao = 0,
      Dl = null,
      hr = -1,
      gr = 0;
    function ce() {
      return E & 6 ? Q() : hr !== -1 ? hr : (hr = Q());
    }
    function vt(e) {
      return e.mode & 1
        ? E & 2 && oe !== 0
          ? oe & -oe
          : yp.transition !== null
            ? (gr === 0 && (gr = qu()), gr)
            : ((e = O),
              e !== 0 ||
                ((e = window.event), (e = e === void 0 ? 16 : Wu(e.type))),
              e)
        : 1;
    }
    function He(e, t, a, o) {
      if (50 < ao) throw ((ao = 0), (Dl = null), Error(S(185)));
      (Io(e, a, o),
        (!(E & 2) || e !== ee) &&
          (e === ee && (!(E & 2) && (Kr |= a), K === 4 && pt(e, oe)),
          Le(e, o),
          a === 1 &&
            E === 0 &&
            !(t.mode & 1) &&
            ((Ca = Q() + 500), $r && At())));
    }
    function Le(e, t) {
      var a = e.callbackNode;
      Sc(e, t);
      var o = vr(e, e === ee ? oe : 0);
      if (o === 0)
        (a !== null && hi(a),
          (e.callbackNode = null),
          (e.callbackPriority = 0));
      else if (((t = o & -o), e.callbackPriority !== t)) {
        if ((a != null && hi(a), t === 1))
          (e.tag === 0 ? xp(iu.bind(null, e)) : sd(iu.bind(null, e)),
            pp(function () {
              !(E & 6) && At();
            }),
            (a = null));
        else {
          switch (Ou(o)) {
            case 1:
              a = Wl;
              break;
            case 4:
              a = bu;
              break;
            case 16:
              a = Ir;
              break;
            case 536870912:
              a = Eu;
              break;
            default:
              a = Ir;
          }
          a = nf(a, Yd.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = a));
      }
    }
    function Yd(e, t) {
      if (((hr = -1), (gr = 0), E & 6)) throw Error(S(327));
      var a = e.callbackNode;
      if (xa() && e.callbackNode !== a) return null;
      var o = vr(e, e === ee ? oe : 0);
      if (o === 0) return null;
      if (o & 30 || o & e.expiredLanes || t) t = Nr(e, o);
      else {
        t = o;
        var r = E;
        E |= 2;
        var n = ef();
        (ee !== e || oe !== t) && ((Je = null), (Ca = Q() + 500), zt(e, t));
        do
          try {
            zp();
            break;
          } catch (s) {
            Zd(e, s);
          }
        while (!0);
        (ts(),
          (Rr.current = n),
          (E = r),
          X !== null ? (t = 0) : ((ee = null), (oe = 0), (t = K)));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((r = nl(e)), r !== 0 && ((o = r), (t = bl(e, r)))),
          t === 1)
        )
          throw ((a = So), zt(e, 0), pt(e, o), Le(e, Q()), a);
        if (t === 6) pt(e, o);
        else {
          if (
            ((r = e.current.alternate),
            !(o & 30) &&
              !Op(r) &&
              ((t = Nr(e, o)),
              t === 2 && ((n = nl(e)), n !== 0 && ((o = n), (t = bl(e, n)))),
              t === 1))
          )
            throw ((a = So), zt(e, 0), pt(e, o), Le(e, Q()), a);
          switch (((e.finishedWork = r), (e.finishedLanes = o), t)) {
            case 0:
            case 1:
              throw Error(S(345));
            case 2:
              Et(e, he, Je);
              break;
            case 3:
              if (
                (pt(e, o),
                (o & 130023424) === o && ((t = gs + 500 - Q()), 10 < t))
              ) {
                if (vr(e, 0) !== 0) break;
                if (((r = e.suspendedLanes), (r & o) !== o)) {
                  (ce(), (e.pingedLanes |= e.suspendedLanes & r));
                  break;
                }
                e.timeoutHandle = pl(Et.bind(null, e, he, Je), t);
                break;
              }
              Et(e, he, Je);
              break;
            case 4:
              if ((pt(e, o), (o & 4194240) === o)) break;
              for (t = e.eventTimes, r = -1; 0 < o;) {
                var l = 31 - Ne(o);
                ((n = 1 << l), (l = t[l]), l > r && (r = l), (o &= ~n));
              }
              if (
                ((o = r),
                (o = Q() - o),
                (o =
                  (120 > o
                    ? 120
                    : 480 > o
                      ? 480
                      : 1080 > o
                        ? 1080
                        : 1920 > o
                          ? 1920
                          : 3e3 > o
                            ? 3e3
                            : 4320 > o
                              ? 4320
                              : 1960 * qp(o / 1960)) - o),
                10 < o)
              ) {
                e.timeoutHandle = pl(Et.bind(null, e, he, Je), o);
                break;
              }
              Et(e, he, Je);
              break;
            case 5:
              Et(e, he, Je);
              break;
            default:
              throw Error(S(329));
          }
        }
      }
      return (Le(e, Q()), e.callbackNode === a ? Yd.bind(null, e) : null);
    }
    function bl(e, t) {
      var a = to;
      return (
        e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256),
        (e = Nr(e, t)),
        e !== 2 && ((t = he), (he = a), t !== null && El(t)),
        e
      );
    }
    function El(e) {
      he === null ? (he = e) : he.push.apply(he, e);
    }
    function Op(e) {
      for (var t = e; ;) {
        if (t.flags & 16384) {
          var a = t.updateQueue;
          if (a !== null && ((a = a.stores), a !== null))
            for (var o = 0; o < a.length; o++) {
              var r = a[o],
                n = r.getSnapshot;
              r = r.value;
              try {
                if (!We(n(), r)) return !1;
              } catch (l) {
                return !1;
              }
            }
        }
        if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
          ((a.return = t), (t = a));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function pt(e, t) {
      for (
        t &= ~hs,
          t &= ~Kr,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;
      ) {
        var a = 31 - Ne(t),
          o = 1 << a;
        ((e[a] = -1), (t &= ~o));
      }
    }
    function iu(e) {
      if (E & 6) throw Error(S(327));
      xa();
      var t = vr(e, 0);
      if (!(t & 1)) return (Le(e, Q()), null);
      var a = Nr(e, t);
      if (e.tag !== 0 && a === 2) {
        var o = nl(e);
        o !== 0 && ((t = o), (a = bl(e, o)));
      }
      if (a === 1) throw ((a = So), zt(e, 0), pt(e, t), Le(e, Q()), a);
      if (a === 6) throw Error(S(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Et(e, he, Je),
        Le(e, Q()),
        null
      );
    }
    function xs(e, t) {
      var a = E;
      E |= 1;
      try {
        return e(t);
      } finally {
        ((E = a), E === 0 && ((Ca = Q() + 500), $r && At()));
      }
    }
    function Vt(e) {
      ht !== null && ht.tag === 0 && !(E & 6) && xa();
      var t = E;
      E |= 1;
      var a = De.transition,
        o = O;
      try {
        if (((De.transition = null), (O = 1), e)) return e();
      } finally {
        ((O = o), (De.transition = a), (E = t), !(E & 6) && At());
      }
    }
    function ys() {
      ((Ie = fa.current), N(fa));
    }
    function zt(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var a = e.timeoutHandle;
      if ((a !== -1 && ((e.timeoutHandle = -1), cp(a)), X !== null))
        for (a = X.return; a !== null;) {
          var o = a;
          switch ((Yl(o), o.tag)) {
            case 1:
              ((o = o.type.childContextTypes), o != null && Mr());
              break;
            case 3:
              (va(), N(xe), N(ue), ss());
              break;
            case 5:
              ls(o);
              break;
            case 4:
              va();
              break;
            case 13:
              N(V);
              break;
            case 19:
              N(V);
              break;
            case 10:
              as(o.type._context);
              break;
            case 22:
            case 23:
              ys();
          }
          a = a.return;
        }
      if (
        ((ee = e),
        (X = e = wt(e.current, null)),
        (oe = Ie = t),
        (K = 0),
        (So = null),
        (hs = Kr = _t = 0),
        (he = to = null),
        Ot !== null)
      ) {
        for (t = 0; t < Ot.length; t++)
          if (((a = Ot[t]), (o = a.interleaved), o !== null)) {
            a.interleaved = null;
            var r = o.next,
              n = a.pending;
            if (n !== null) {
              var l = n.next;
              ((n.next = r), (o.next = l));
            }
            a.pending = o;
          }
        Ot = null;
      }
      return e;
    }
    function Zd(e, t) {
      do {
        var a = X;
        try {
          if ((ts(), (cr.current = Or), qr)) {
            for (var o = j.memoizedState; o !== null;) {
              var r = o.queue;
              (r !== null && (r.pending = null), (o = o.next));
            }
            qr = !1;
          }
          if (
            ((Wt = 0),
            (Z = J = j = null),
            (Za = !1),
            (xo = 0),
            (ms.current = null),
            a === null || a.return === null)
          ) {
            ((K = 1), (So = t), (X = null));
            break;
          }
          e: {
            var n = e,
              l = a.return,
              s = a,
              u = t;
            if (
              ((t = oe),
              (s.flags |= 32768),
              u !== null && typeof u == "object" && typeof u.then == "function")
            ) {
              var c = u,
                g = s,
                x = g.tag;
              if (!(g.mode & 1) && (x === 0 || x === 11 || x === 15)) {
                var h = g.alternate;
                h
                  ? ((g.updateQueue = h.updateQueue),
                    (g.memoizedState = h.memoizedState),
                    (g.lanes = h.lanes))
                  : ((g.updateQueue = null), (g.memoizedState = null));
              }
              var y = Xi(l);
              if (y !== null) {
                ((y.flags &= -257),
                  Ji(y, l, s, n, t),
                  y.mode & 1 && Qi(n, c, t),
                  (t = y),
                  (u = c));
                var I = t.updateQueue;
                if (I === null) {
                  var v = new Set();
                  (v.add(u), (t.updateQueue = v));
                } else I.add(u);
                break e;
              } else {
                if (!(t & 1)) {
                  (Qi(n, c, t), Ls());
                  break e;
                }
                u = Error(S(426));
              }
            } else if (_ && s.mode & 1) {
              var F = Xi(l);
              if (F !== null) {
                (!(F.flags & 65536) && (F.flags |= 256),
                  Ji(F, l, s, n, t),
                  Zl(wa(u, s)));
                break e;
              }
            }
            ((n = u = wa(u, s)),
              K !== 4 && (K = 2),
              to === null ? (to = [n]) : to.push(n),
              (n = l));
            do {
              switch (n.tag) {
                case 3:
                  ((n.flags |= 65536), (t &= -t), (n.lanes |= t));
                  var p = Od(n, u, t);
                  Wi(n, p);
                  break e;
                case 1:
                  s = u;
                  var d = n.type,
                    m = n.stateNode;
                  if (
                    !(n.flags & 128) &&
                    (typeof d.getDerivedStateFromError == "function" ||
                      (m !== null &&
                        typeof m.componentDidCatch == "function" &&
                        (It === null || !It.has(m))))
                  ) {
                    ((n.flags |= 65536), (t &= -t), (n.lanes |= t));
                    var L = Rd(n, s, t);
                    Wi(n, L);
                    break e;
                  }
              }
              n = n.return;
            } while (n !== null);
          }
          af(a);
        } catch (C) {
          ((t = C), X === a && a !== null && (X = a = a.return));
          continue;
        }
        break;
      } while (!0);
    }
    function ef() {
      var e = Rr.current;
      return ((Rr.current = Or), e === null ? Or : e);
    }
    function Ls() {
      ((K === 0 || K === 3 || K === 2) && (K = 4),
        ee === null || (!(_t & 268435455) && !(Kr & 268435455)) || pt(ee, oe));
    }
    function Nr(e, t) {
      var a = E;
      E |= 2;
      var o = ef();
      (ee !== e || oe !== t) && ((Je = null), zt(e, t));
      do
        try {
          Rp();
          break;
        } catch (r) {
          Zd(e, r);
        }
      while (!0);
      if ((ts(), (E = a), (Rr.current = o), X !== null)) throw Error(S(261));
      return ((ee = null), (oe = 0), K);
    }
    function Rp() {
      for (; X !== null;) tf(X);
    }
    function zp() {
      for (; X !== null && !fc();) tf(X);
    }
    function tf(e) {
      var t = rf(e.alternate, e, Ie);
      ((e.memoizedProps = e.pendingProps),
        t === null ? af(e) : (X = t),
        (ms.current = null));
    }
    function af(e) {
      var t = e;
      do {
        var a = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((a = Bp(a, t)), a !== null)) {
            ((a.flags &= 32767), (X = a));
            return;
          }
          if (e !== null)
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((K = 6), (X = null));
            return;
          }
        } else if (((a = Fp(a, t, Ie)), a !== null)) {
          X = a;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          X = t;
          return;
        }
        X = t = e;
      } while (t !== null);
      K === 0 && (K = 5);
    }
    function Et(e, t, a) {
      var o = O,
        r = De.transition;
      try {
        ((De.transition = null), (O = 1), Up(e, t, a, o));
      } finally {
        ((De.transition = r), (O = o));
      }
      return null;
    }
    function Up(e, t, a, o) {
      do xa();
      while (ht !== null);
      if (E & 6) throw Error(S(327));
      a = e.finishedWork;
      var r = e.finishedLanes;
      if (a === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), a === e.current))
        throw Error(S(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var n = a.lanes | a.childLanes;
      if (
        (Ic(e, n),
        e === ee && ((X = ee = null), (oe = 0)),
        (!(a.subtreeFlags & 2064) && !(a.flags & 2064)) ||
          sr ||
          ((sr = !0),
          nf(Ir, function () {
            return (xa(), null);
          })),
        (n = (a.flags & 15990) !== 0),
        a.subtreeFlags & 15990 || n)
      ) {
        ((n = De.transition), (De.transition = null));
        var l = O;
        O = 1;
        var s = E;
        ((E |= 4),
          (ms.current = null),
          bp(e, a),
          Jd(a, e),
          sp(fl),
          (wr = !!dl),
          (fl = dl = null),
          (e.current = a),
          Ep(a, e, r),
          cc(),
          (E = s),
          (O = l),
          (De.transition = n));
      } else e.current = a;
      if (
        (sr && ((sr = !1), (ht = e), (Ur = r)),
        (n = e.pendingLanes),
        n === 0 && (It = null),
        hc(a.stateNode, o),
        Le(e, Q()),
        t !== null)
      )
        for (o = e.onRecoverableError, a = 0; a < t.length; a++)
          ((r = t[a]),
            o(r.value, { componentStack: r.stack, digest: r.digest }));
      if (zr) throw ((zr = !1), (e = Bl), (Bl = null), e);
      return (
        Ur & 1 && e.tag !== 0 && xa(),
        (n = e.pendingLanes),
        n & 1 ? (e === Dl ? ao++ : ((ao = 0), (Dl = e))) : (ao = 0),
        At(),
        null
      );
    }
    function xa() {
      if (ht !== null) {
        var e = Ou(Ur),
          t = De.transition,
          a = O;
        try {
          if (((De.transition = null), (O = 16 > e ? 16 : e), ht === null))
            var o = !1;
          else {
            if (((e = ht), (ht = null), (Ur = 0), E & 6)) throw Error(S(331));
            var r = E;
            for (E |= 4, k = e.current; k !== null;) {
              var n = k,
                l = n.child;
              if (k.flags & 16) {
                var s = n.deletions;
                if (s !== null) {
                  for (var u = 0; u < s.length; u++) {
                    var c = s[u];
                    for (k = c; k !== null;) {
                      var g = k;
                      switch (g.tag) {
                        case 0:
                        case 11:
                        case 15:
                          eo(8, g, n);
                      }
                      var x = g.child;
                      if (x !== null) ((x.return = g), (k = x));
                      else
                        for (; k !== null;) {
                          g = k;
                          var h = g.sibling,
                            y = g.return;
                          if (($d(g), g === c)) {
                            k = null;
                            break;
                          }
                          if (h !== null) {
                            ((h.return = y), (k = h));
                            break;
                          }
                          k = y;
                        }
                    }
                  }
                  var I = n.alternate;
                  if (I !== null) {
                    var v = I.child;
                    if (v !== null) {
                      I.child = null;
                      do {
                        var F = v.sibling;
                        ((v.sibling = null), (v = F));
                      } while (v !== null);
                    }
                  }
                  k = n;
                }
              }
              if (n.subtreeFlags & 2064 && l !== null)
                ((l.return = n), (k = l));
              else
                e: for (; k !== null;) {
                  if (((n = k), n.flags & 2048))
                    switch (n.tag) {
                      case 0:
                      case 11:
                      case 15:
                        eo(9, n, n.return);
                    }
                  var p = n.sibling;
                  if (p !== null) {
                    ((p.return = n.return), (k = p));
                    break e;
                  }
                  k = n.return;
                }
            }
            var d = e.current;
            for (k = d; k !== null;) {
              l = k;
              var m = l.child;
              if (l.subtreeFlags & 2064 && m !== null)
                ((m.return = l), (k = m));
              else
                e: for (l = d; k !== null;) {
                  if (((s = k), s.flags & 2048))
                    try {
                      switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Jr(9, s);
                      }
                    } catch (C) {
                      $(s, s.return, C);
                    }
                  if (s === l) {
                    k = null;
                    break e;
                  }
                  var L = s.sibling;
                  if (L !== null) {
                    ((L.return = s.return), (k = L));
                    break e;
                  }
                  k = s.return;
                }
            }
            if (
              ((E = r),
              At(),
              $e && typeof $e.onPostCommitFiberRoot == "function")
            )
              try {
                $e.onPostCommitFiberRoot(Wr, e);
              } catch (C) {}
            o = !0;
          }
          return o;
        } finally {
          ((O = a), (De.transition = t));
        }
      }
      return !1;
    }
    function uu(e, t, a) {
      ((t = wa(a, t)),
        (t = Od(e, t, 1)),
        (e = St(e, t, 1)),
        (t = ce()),
        e !== null && (Io(e, 1, t), Le(e, t)));
    }
    function $(e, t, a) {
      if (e.tag === 3) uu(e, e, a);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            uu(t, e, a);
            break;
          } else if (t.tag === 1) {
            var o = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof o.componentDidCatch == "function" &&
                (It === null || !It.has(o)))
            ) {
              ((e = wa(a, e)),
                (e = Rd(t, e, 1)),
                (t = St(t, e, 1)),
                (e = ce()),
                t !== null && (Io(t, 1, e), Le(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Np(e, t, a) {
      var o = e.pingCache;
      (o !== null && o.delete(t),
        (t = ce()),
        (e.pingedLanes |= e.suspendedLanes & a),
        ee === e &&
          (oe & a) === a &&
          (K === 4 || (K === 3 && (oe & 130023424) === oe && 500 > Q() - gs)
            ? zt(e, 0)
            : (hs |= a)),
        Le(e, t));
    }
    function of(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = $o), ($o <<= 1), !($o & 130023424) && ($o = 4194304))
          : (t = 1));
      var a = ce();
      ((e = ot(e, t)), e !== null && (Io(e, t, a), Le(e, a)));
    }
    function Hp(e) {
      var t = e.memoizedState,
        a = 0;
      (t !== null && (a = t.retryLane), of(e, a));
    }
    function Wp(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var o = e.stateNode,
            r = e.memoizedState;
          r !== null && (a = r.retryLane);
          break;
        case 19:
          o = e.stateNode;
          break;
        default:
          throw Error(S(314));
      }
      (o !== null && o.delete(t), of(e, a));
    }
    var rf;
    rf = function (e, t, a) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || xe.current) ge = !0;
        else {
          if (!(e.lanes & a) && !(t.flags & 128))
            return ((ge = !1), Tp(e, t, a));
          ge = !!(e.flags & 131072);
        }
      else ((ge = !1), _ && t.flags & 1048576 && id(t, Fr, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var o = t.type;
          (mr(e, t), (e = t.pendingProps));
          var r = La(t, ue.current);
          (ga(t, a), (r = us(null, t, o, e, r, a)));
          var n = ds();
          return (
            (t.flags |= 1),
            typeof r == "object" &&
            r !== null &&
            typeof r.render == "function" &&
            r.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ye(o) ? ((n = !0), Ar(t)) : (n = !1),
                (t.memoizedState =
                  r.state !== null && r.state !== void 0 ? r.state : null),
                rs(t),
                (r.updater = Xr),
                (t.stateNode = r),
                (r._reactInternals = t),
                Sl(t, o, e, a),
                (t = wl(null, t, o, !0, n, a)))
              : ((t.tag = 0),
                _ && n && Kl(t),
                fe(null, t, r, a),
                (t = t.child)),
            t
          );
        case 16:
          o = t.elementType;
          e: {
            switch (
              (mr(e, t),
              (e = t.pendingProps),
              (r = o._init),
              (o = r(o._payload)),
              (t.type = o),
              (r = t.tag = Vp(o)),
              (e = Re(o, e)),
              r)
            ) {
              case 0:
                t = vl(null, t, o, e, a);
                break e;
              case 1:
                t = Zi(null, t, o, e, a);
                break e;
              case 11:
                t = Ki(null, t, o, e, a);
                break e;
              case 14:
                t = Yi(null, t, o, Re(o.type, e), a);
                break e;
            }
            throw Error(S(306, o, ""));
          }
          return t;
        case 0:
          return (
            (o = t.type),
            (r = t.pendingProps),
            (r = t.elementType === o ? r : Re(o, r)),
            vl(e, t, o, r, a)
          );
        case 1:
          return (
            (o = t.type),
            (r = t.pendingProps),
            (r = t.elementType === o ? r : Re(o, r)),
            Zi(e, t, o, r, a)
          );
        case 3:
          e: {
            if ((Hd(t), e === null)) throw Error(S(387));
            ((o = t.pendingProps),
              (n = t.memoizedState),
              (r = n.element),
              md(e, t),
              br(t, o, null, a));
            var l = t.memoizedState;
            if (((o = l.element), n.isDehydrated))
              if (
                ((n = {
                  element: o,
                  isDehydrated: !1,
                  cache: l.cache,
                  pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                  transitions: l.transitions,
                }),
                (t.updateQueue.baseState = n),
                (t.memoizedState = n),
                t.flags & 256)
              ) {
                ((r = wa(Error(S(423)), t)), (t = eu(e, t, o, a, r)));
                break e;
              } else if (o !== r) {
                ((r = wa(Error(S(424)), t)), (t = eu(e, t, o, a, r)));
                break e;
              } else
                for (
                  ve = Lt(t.stateNode.containerInfo.firstChild),
                    we = t,
                    _ = !0,
                    Ue = null,
                    a = cd(t, null, o, a),
                    t.child = a;
                  a;
                )
                  ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            else {
              if ((Sa(), o === r)) {
                t = rt(e, t, a);
                break e;
              }
              fe(e, t, o, a);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            hd(t),
            e === null && xl(t),
            (o = t.type),
            (r = t.pendingProps),
            (n = e !== null ? e.memoizedProps : null),
            (l = r.children),
            cl(o, r) ? (l = null) : n !== null && cl(o, n) && (t.flags |= 32),
            Nd(e, t),
            fe(e, t, l, a),
            t.child
          );
        case 6:
          return (e === null && xl(t), null);
        case 13:
          return Wd(e, t, a);
        case 4:
          return (
            ns(t, t.stateNode.containerInfo),
            (o = t.pendingProps),
            e === null ? (t.child = Ia(t, null, o, a)) : fe(e, t, o, a),
            t.child
          );
        case 11:
          return (
            (o = t.type),
            (r = t.pendingProps),
            (r = t.elementType === o ? r : Re(o, r)),
            Ki(e, t, o, r, a)
          );
        case 7:
          return (fe(e, t, t.pendingProps, a), t.child);
        case 8:
          return (fe(e, t, t.pendingProps.children, a), t.child);
        case 12:
          return (fe(e, t, t.pendingProps.children, a), t.child);
        case 10:
          e: {
            if (
              ((o = t.type._context),
              (r = t.pendingProps),
              (n = t.memoizedProps),
              (l = r.value),
              z(Br, o._currentValue),
              (o._currentValue = l),
              n !== null)
            )
              if (We(n.value, l)) {
                if (n.children === r.children && !xe.current) {
                  t = rt(e, t, a);
                  break e;
                }
              } else
                for (n = t.child, n !== null && (n.return = t); n !== null;) {
                  var s = n.dependencies;
                  if (s !== null) {
                    l = n.child;
                    for (var u = s.firstContext; u !== null;) {
                      if (u.context === o) {
                        if (n.tag === 1) {
                          ((u = et(-1, a & -a)), (u.tag = 2));
                          var c = n.updateQueue;
                          if (c !== null) {
                            c = c.shared;
                            var g = c.pending;
                            (g === null
                              ? (u.next = u)
                              : ((u.next = g.next), (g.next = u)),
                              (c.pending = u));
                          }
                        }
                        ((n.lanes |= a),
                          (u = n.alternate),
                          u !== null && (u.lanes |= a),
                          yl(n.return, a, t),
                          (s.lanes |= a));
                        break;
                      }
                      u = u.next;
                    }
                  } else if (n.tag === 10)
                    l = n.type === t.type ? null : n.child;
                  else if (n.tag === 18) {
                    if (((l = n.return), l === null)) throw Error(S(341));
                    ((l.lanes |= a),
                      (s = l.alternate),
                      s !== null && (s.lanes |= a),
                      yl(l, a, t),
                      (l = n.sibling));
                  } else l = n.child;
                  if (l !== null) l.return = n;
                  else
                    for (l = n; l !== null;) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (((n = l.sibling), n !== null)) {
                        ((n.return = l.return), (l = n));
                        break;
                      }
                      l = l.return;
                    }
                  n = l;
                }
            (fe(e, t, r.children, a), (t = t.child));
          }
          return t;
        case 9:
          return (
            (r = t.type),
            (o = t.pendingProps.children),
            ga(t, a),
            (r = be(r)),
            (o = o(r)),
            (t.flags |= 1),
            fe(e, t, o, a),
            t.child
          );
        case 14:
          return (
            (o = t.type),
            (r = Re(o, t.pendingProps)),
            (r = Re(o.type, r)),
            Yi(e, t, o, r, a)
          );
        case 15:
          return zd(e, t, t.type, t.pendingProps, a);
        case 17:
          return (
            (o = t.type),
            (r = t.pendingProps),
            (r = t.elementType === o ? r : Re(o, r)),
            mr(e, t),
            (t.tag = 1),
            ye(o) ? ((e = !0), Ar(t)) : (e = !1),
            ga(t, a),
            qd(t, o, r),
            Sl(t, o, r, a),
            wl(null, t, o, !0, e, a)
          );
        case 19:
          return _d(e, t, a);
        case 22:
          return Ud(e, t, a);
      }
      throw Error(S(156, t.tag));
    };
    function nf(e, t) {
      return Du(e, t);
    }
    function _p(e, t, a, o) {
      ((this.tag = e),
        (this.key = a),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = o),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Be(e, t, a, o) {
      return new _p(e, t, a, o);
    }
    function Ss(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Vp(e) {
      if (typeof e == "function") return Ss(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === Ul)) return 11;
        if (e === Nl) return 14;
      }
      return 2;
    }
    function wt(e, t) {
      var a = e.alternate;
      return (
        a === null
          ? ((a = Be(e.tag, t, e.key, e.mode)),
            (a.elementType = e.elementType),
            (a.type = e.type),
            (a.stateNode = e.stateNode),
            (a.alternate = e),
            (e.alternate = a))
          : ((a.pendingProps = t),
            (a.type = e.type),
            (a.flags = 0),
            (a.subtreeFlags = 0),
            (a.deletions = null)),
        (a.flags = e.flags & 14680064),
        (a.childLanes = e.childLanes),
        (a.lanes = e.lanes),
        (a.child = e.child),
        (a.memoizedProps = e.memoizedProps),
        (a.memoizedState = e.memoizedState),
        (a.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (a.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (a.sibling = e.sibling),
        (a.index = e.index),
        (a.ref = e.ref),
        a
      );
    }
    function xr(e, t, a, o, r, n) {
      var l = 2;
      if (((o = e), typeof e == "function")) Ss(e) && (l = 1);
      else if (typeof e == "string") l = 5;
      else
        e: switch (e) {
          case ta:
            return Ut(a.children, r, n, t);
          case zl:
            ((l = 8), (r |= 8));
            break;
          case Vn:
            return (
              (e = Be(12, a, t, r | 2)),
              (e.elementType = Vn),
              (e.lanes = n),
              e
            );
          case jn:
            return (
              (e = Be(13, a, t, r)),
              (e.elementType = jn),
              (e.lanes = n),
              e
            );
          case Gn:
            return (
              (e = Be(19, a, t, r)),
              (e.elementType = Gn),
              (e.lanes = n),
              e
            );
          case hu:
            return Yr(a, r, n, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pu:
                  l = 10;
                  break e;
                case mu:
                  l = 9;
                  break e;
                case Ul:
                  l = 11;
                  break e;
                case Nl:
                  l = 14;
                  break e;
                case dt:
                  ((l = 16), (o = null));
                  break e;
              }
            throw Error(S(130, e == null ? e : typeof e, ""));
        }
      return (
        (t = Be(l, a, t, r)),
        (t.elementType = e),
        (t.type = o),
        (t.lanes = n),
        t
      );
    }
    function Ut(e, t, a, o) {
      return ((e = Be(7, e, o, t)), (e.lanes = a), e);
    }
    function Yr(e, t, a, o) {
      return (
        (e = Be(22, e, o, t)),
        (e.elementType = hu),
        (e.lanes = a),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function Hn(e, t, a) {
      return ((e = Be(6, e, null, t)), (e.lanes = a), e);
    }
    function Wn(e, t, a) {
      return (
        (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = a),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function jp(e, t, a, o, r) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = kn(0)),
        (this.expirationTimes = kn(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = kn(0)),
        (this.identifierPrefix = o),
        (this.onRecoverableError = r),
        (this.mutableSourceEagerHydrationData = null));
    }
    function Is(e, t, a, o, r, n, l, s, u) {
      return (
        (e = new jp(e, t, a, s, u)),
        t === 1 ? ((t = 1), n === !0 && (t |= 8)) : (t = 0),
        (n = Be(3, null, null, t)),
        (e.current = n),
        (n.stateNode = e),
        (n.memoizedState = {
          element: o,
          isDehydrated: a,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        rs(n),
        e
      );
    }
    function Gp(e, t, a) {
      var o =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: ea,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: a,
      };
    }
    function lf(e) {
      if (!e) return kt;
      e = e._reactInternals;
      e: {
        if (Gt(e) !== e || e.tag !== 1) throw Error(S(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (ye(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(S(171));
      }
      if (e.tag === 1) {
        var a = e.type;
        if (ye(a)) return ld(e, a, t);
      }
      return t;
    }
    function sf(e, t, a, o, r, n, l, s, u) {
      return (
        (e = Is(a, o, !0, e, r, n, l, s, u)),
        (e.context = lf(null)),
        (a = e.current),
        (o = ce()),
        (r = vt(a)),
        (n = et(o, r)),
        (n.callback = t != null ? t : null),
        St(a, n, r),
        (e.current.lanes = r),
        Io(e, r, o),
        Le(e, o),
        e
      );
    }
    function Zr(e, t, a, o) {
      var r = t.current,
        n = ce(),
        l = vt(r);
      return (
        (a = lf(a)),
        t.context === null ? (t.context = a) : (t.pendingContext = a),
        (t = et(n, l)),
        (t.payload = { element: e }),
        (o = o === void 0 ? null : o),
        o !== null && (t.callback = o),
        (e = St(r, t, l)),
        e !== null && (He(e, r, l, n), fr(e, r, l)),
        l
      );
    }
    function Hr(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function du(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function vs(e, t) {
      (du(e, t), (e = e.alternate) && du(e, t));
    }
    function $p() {
      return null;
    }
    var uf =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function ws(e) {
      this._internalRoot = e;
    }
    en.prototype.render = ws.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(S(409));
      Zr(e, t, null, null);
    };
    en.prototype.unmount = ws.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Vt(function () {
          Zr(null, e, null, null);
        }),
          (t[at] = null));
      }
    };
    function en(e) {
      this._internalRoot = e;
    }
    en.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Uu();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < ct.length && t !== 0 && t < ct[a].priority; a++);
        (ct.splice(a, 0, e), a === 0 && Hu(e));
      }
    };
    function Cs(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function tn(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function fu() {}
    function Qp(e, t, a, o, r) {
      if (r) {
        if (typeof o == "function") {
          var n = o;
          o = function () {
            var c = Hr(l);
            n.call(c);
          };
        }
        var l = sf(t, o, e, 0, null, !1, !1, "", fu);
        return (
          (e._reactRootContainer = l),
          (e[at] = l.current),
          co(e.nodeType === 8 ? e.parentNode : e),
          Vt(),
          l
        );
      }
      for (; (r = e.lastChild);) e.removeChild(r);
      if (typeof o == "function") {
        var s = o;
        o = function () {
          var c = Hr(u);
          s.call(c);
        };
      }
      var u = Is(e, 0, !1, null, null, !1, !1, "", fu);
      return (
        (e._reactRootContainer = u),
        (e[at] = u.current),
        co(e.nodeType === 8 ? e.parentNode : e),
        Vt(function () {
          Zr(t, u, a, o);
        }),
        u
      );
    }
    function an(e, t, a, o, r) {
      var n = a._reactRootContainer;
      if (n) {
        var l = n;
        if (typeof r == "function") {
          var s = r;
          r = function () {
            var u = Hr(l);
            s.call(u);
          };
        }
        Zr(t, l, e, r);
      } else l = Qp(a, t, e, r, o);
      return Hr(l);
    }
    Ru = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var a = Ga(t.pendingLanes);
            a !== 0 &&
              (_l(t, a | 1), Le(t, Q()), !(E & 6) && ((Ca = Q() + 500), At()));
          }
          break;
        case 13:
          (Vt(function () {
            var o = ot(e, 1);
            if (o !== null) {
              var r = ce();
              He(o, e, 1, r);
            }
          }),
            vs(e, 1));
      }
    };
    Vl = function (e) {
      if (e.tag === 13) {
        var t = ot(e, 134217728);
        if (t !== null) {
          var a = ce();
          He(t, e, 134217728, a);
        }
        vs(e, 134217728);
      }
    };
    zu = function (e) {
      if (e.tag === 13) {
        var t = vt(e),
          a = ot(e, t);
        if (a !== null) {
          var o = ce();
          He(a, e, t, o);
        }
        vs(e, t);
      }
    };
    Uu = function () {
      return O;
    };
    Nu = function (e, t) {
      var a = O;
      try {
        return ((O = e), t());
      } finally {
        O = a;
      }
    };
    al = function (e, t, a) {
      switch (t) {
        case "input":
          if ((Xn(e, a), (t = a.name), a.type === "radio" && t != null)) {
            for (a = e; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var o = a[t];
              if (o !== e && o.form === e.form) {
                var r = Gr(o);
                if (!r) throw Error(S(90));
                (xu(o), Xn(o, r));
              }
            }
          }
          break;
        case "textarea":
          Lu(e, a);
          break;
        case "select":
          ((t = a.value), t != null && ca(e, !!a.multiple, t, !1));
      }
    };
    Pu = xs;
    Mu = Vt;
    var Xp = { usingClientEntryPoint: !1, Events: [wo, na, Gr, Cu, ku, xs] },
      Wa = {
        findFiberByHostInstance: qt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      Jp = {
        bundleType: Wa.bundleType,
        version: Wa.version,
        rendererPackageName: Wa.rendererPackageName,
        rendererConfig: Wa.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: nt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = Fu(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: Wa.findFiberByHostInstance || $p,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" &&
      ((_a = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !_a.isDisabled && _a.supportsFiber)
    )
      try {
        ((Wr = _a.inject(Jp)), ($e = _a));
      } catch (e) {}
    var _a;
    Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp;
    Pe.createPortal = function (e, t) {
      var a =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Cs(t)) throw Error(S(200));
      return Gp(e, t, null, a);
    };
    Pe.createRoot = function (e, t) {
      if (!Cs(e)) throw Error(S(299));
      var a = !1,
        o = "",
        r = uf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
        (t = Is(e, 1, !1, null, null, a, !1, o, r)),
        (e[at] = t.current),
        co(e.nodeType === 8 ? e.parentNode : e),
        new ws(t)
      );
    };
    Pe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(S(188))
          : ((e = Object.keys(e).join(",")), Error(S(268, e)));
      return ((e = Fu(t)), (e = e === null ? null : e.stateNode), e);
    };
    Pe.flushSync = function (e) {
      return Vt(e);
    };
    Pe.hydrate = function (e, t, a) {
      if (!tn(t)) throw Error(S(200));
      return an(null, e, t, !0, a);
    };
    Pe.hydrateRoot = function (e, t, a) {
      if (!Cs(e)) throw Error(S(405));
      var o = (a != null && a.hydratedSources) || null,
        r = !1,
        n = "",
        l = uf;
      if (
        (a != null &&
          (a.unstable_strictMode === !0 && (r = !0),
          a.identifierPrefix !== void 0 && (n = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (l = a.onRecoverableError)),
        (t = sf(t, null, e, 1, a != null ? a : null, r, !1, n, l)),
        (e[at] = t.current),
        co(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((a = o[e]),
            (r = a._getVersion),
            (r = r(a._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [a, r])
              : t.mutableSourceEagerHydrationData.push(a, r));
      return new en(t);
    };
    Pe.render = function (e, t, a) {
      if (!tn(t)) throw Error(S(200));
      return an(null, e, t, !1, a);
    };
    Pe.unmountComponentAtNode = function (e) {
      if (!tn(e)) throw Error(S(40));
      return e._reactRootContainer
        ? (Vt(function () {
            an(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[at] = null));
            });
          }),
          !0)
        : !1;
    };
    Pe.unstable_batchedUpdates = xs;
    Pe.unstable_renderSubtreeIntoContainer = function (e, t, a, o) {
      if (!tn(a)) throw Error(S(200));
      if (e == null || e._reactInternals === void 0) throw Error(S(38));
      return an(e, t, a, !1, o);
    };
    Pe.version = "18.3.1-next-f1338f8080-20240426";
  });
  var pf = Bt((gm, cf) => {
    "use strict";
    function ff() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ff);
        } catch (e) {
          console.error(e);
        }
    }
    (ff(), (cf.exports = df()));
  });
  var hf = Bt((ks) => {
    "use strict";
    var mf = pf();
    ((ks.createRoot = mf.createRoot), (ks.hydrateRoot = mf.hydrateRoot));
    var xm;
  });
  var vf = Ba(Kt()),
    wf = Ba(hf());
  var i = Ba(Kt());
  var rn = Ba(Kt());
  var gf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    on = (...e) => e.filter((t, a, o) => !!t && o.indexOf(t) === a).join(" ");
  var ko = Ba(Kt());
  var xf = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  var yf = (0, ko.forwardRef)(
    (
      {
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: a = 2,
        absoluteStrokeWidth: o,
        className: r = "",
        children: n,
        iconNode: l,
        ...s
      },
      u,
    ) =>
      (0, ko.createElement)(
        "svg",
        {
          ref: u,
          ...xf,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: o ? (Number(a) * 24) / Number(t) : a,
          className: on("lucide", r),
          ...s,
        },
        [
          ...l.map(([c, g]) => (0, ko.createElement)(c, g)),
          ...(Array.isArray(n) ? n : [n]),
        ],
      ),
  );
  var q = (e, t) => {
    let a = (0, rn.forwardRef)(({ className: o, ...r }, n) =>
      (0, rn.createElement)(yf, {
        ref: n,
        iconNode: t,
        className: on(`lucide-${gf(e)}`, o),
        ...r,
      }),
    );
    return ((a.displayName = `${e}`), a);
  };
  var Ma = q("Activity", [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ]);
  var $t = q("BookOpen", [
    ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
    [
      "path",
      { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" },
    ],
  ]);
  var lt = q("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
  var Po = q("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
  var Aa = q("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
  var Xe = q("CircleCheck", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]);
  var Qt = q("Circle", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ]);
  var Mo = q("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ]);
  var Ao = q("Layers", [
    [
      "path",
      {
        d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
        key: "8b97xw",
      },
    ],
    [
      "path",
      { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
    ],
    [
      "path",
      { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
    ],
  ]);
  var To = q("MessageCircle", [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ]);
  var Fo = q("RefreshCw", [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ]);
  var Bo = q("Target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ]);
  var Do = q("Terminal", [
    ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
  ]);
  var Gi = q("Compass", [
    [
      "path",
      {
        d: "m16.24 7.76-4.24 1.44-1.44 4.24 4.24-1.44 1.44-4.24z",
        key: "guide-needle",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "10", key: "guide-ring" }],
  ]);
  var st = q("TriangleAlert", [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]);
  var bo = q("Wrench", [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
        key: "cbrjhi",
      },
    ],
  ]);
  var Tt = q("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]);
  var f = {
      bg: "#10141B",
      panel: "#171C25",
      panelAlt: "#1D2330",
      border: "#2A3240",
      borderLit: "#3A4456",
      text: "#D8DEE9",
      dim: "#7C8798",
      faint: "#4B5563",
      amber: "#E8A33D",
      cyan: "#4FB3D9",
      violet: "#8B7FD1",
      green: "#4FAE7A",
      red: "#E5534B",
    },
    Ft = [
      { id: "S1", name: "Configurations", weight: 15, color: f.amber },
      { id: "S2", name: "AEM Development", weight: 37, color: f.cyan },
      { id: "S3", name: "Build & Deployment", weight: 17, color: f.violet },
      { id: "S4", name: "Environment Maintenance", weight: 13, color: f.green },
      { id: "S5", name: "Analyzing & Debugging", weight: 18, color: f.red },
    ],
    Ps = [
      {
        n: 1,
        title: "Sling resolution close-out + Dispatcher intro",
        sections: ["S2", "S1"],
      },
      {
        n: 2,
        title: "Dispatcher deep \u2014 filters, cache, allowAuthorized",
        sections: ["S1", "S5"],
      },
      {
        n: 3,
        title: "OSGi services & configs, Felix console, custom logs",
        sections: ["S1", "S4"],
      },
      {
        n: 4,
        title: "Sling Models \u2014 injectors, adaptables, Exporter",
        sections: ["S2"],
      },
      {
        n: 5,
        title: "HTL deep \u2014 display context, escaping, formatting",
        sections: ["S2"],
      },
      {
        n: 6,
        title: "Core Components, proxy pattern, policies",
        sections: ["S2", "S1"],
      },
      {
        n: 7,
        title: "CF / XF / MSM / Live Copy / Workflows in code",
        sections: ["S2"],
      },
      {
        n: 8,
        title: "Maven, archetype, ui.frontend, Cloud Manager",
        sections: ["S3"],
      },
      {
        n: 9,
        title: "AEMaaCS ops \u2014 logs, replication, reindex, topology",
        sections: ["S4", "S5"],
      },
      {
        n: 10,
        title: "Gaps: testing, GraphQL, SPA Editor, Query Builder, i18n",
        sections: ["S2", "S3"],
      },
      {
        n: 11,
        title: "Cold timed practice exam #1 + remediation",
        sections: ["S1", "S2", "S3", "S4", "S5"],
      },
      {
        n: 12,
        title: "Cold timed practice exam #2 + readiness call",
        sections: ["S1", "S2", "S3", "S4", "S5"],
      },
    ],
    Lf = [
      {
        id: "w1",
        text: "Sling request \u2192 script resolution (in progress)",
        closed: !1,
      },
      {
        id: "w2",
        text: "Dispatcher filter ordering & cache behavior",
        closed: !1,
      },
      { id: "w3", text: "AEMaaCS operational surfaces & logging", closed: !1 },
      { id: "w4", text: "Immutable vs mutable content deployment", closed: !1 },
      { id: "w5", text: "HTL display context & XSS escaping", closed: !1 },
      {
        id: "w6",
        text: "Sling Models \u2014 injectors, adaptables, Exporter",
        closed: !1,
      },
    ],
    Ms = {
      1: {
        mechanism:
          "Resolution happens in two steps. First, resource resolution turns the incoming URL into a repository resource (vanity paths, mappings, selector and extension parsing). Second, script resolution takes the resource's sling:resourceType and finds the script to render it. Scripts are looked up along the search path (/apps before /libs) and up the sling:resourceSuperType chain. When several scripts qualify, Sling prefers the one matching more selectors, then one matching the extension, then the one found earlier in the lookup order.",
        analogy: `Think of it like a recipe book. sling:resourceType is the dish name, not the recipe itself. Your /apps folder is your personal recipe box \u2014 checked first. /libs is the factory cookbook everyone shares. If your personal box has the recipe, that's what you cook, full stop \u2014 the factory version is never even glanced at (shadowing, not blending). Selectors are recipe variants ("spicy" vs "mild"). sling:resourceSuperType is what happens when your own recipe box has nothing for this dish at all: you don't improvise, you go borrow your mentor chef's entire book instead.`,
        artifact: `/apps/myproject/components/teaser/.content.xml
  jcr:primaryType="cq:Component"
  sling:resourceSuperType="core/wcm/components/teaser/v2/teaser"
  (no teaser.html present under /apps \u2014 full fallback to /libs)`,
        delta65:
          "Same two-step model on 6.5. The difference the exam likes to test: Classic UI dialogs used xtype-based widget definitions and foundation components lived under different /libs paths than today's Core Components \u2014 if you see xtype or /libs/foundation/components in a question, that's the legacy model, not what you use daily.",
        handsOn:
          "On the local SDK: open CRXDE Lite, browse to a core component under /libs/core/wcm/components, then find or create a proxy under /apps that sets sling:resourceSuperType to it but adds no local scripts. Add a selector to the request URL and watch which /libs script actually renders.",
        takeaways: [
          "Resolution = resource resolution, then script resolution \u2014 two distinct steps",
          "/apps is searched before /libs; first match wins outright (shadowing, not merging)",
          "sling:resourceSuperType adds the parent type's scripts to the lookup; a better selector match can win from the parent, ties go to the script found first",
          "Selectors/extension narrow which script within a resource type gets picked",
          "Dialog inheritance via the Sling Resource Merger is a separate, merging mechanism \u2014 don't conflate it with script shadowing",
        ],
      },
      2: {
        mechanism:
          "The Dispatcher decides two things per request: whether to accept it and whether to serve or cache it. /filter rules (allow/deny by path, extension, selector and so on) are evaluated, and when several match, the LAST matching rule wins. /cache /rules decides what's cacheable, and URLs with a query string aren't cached unless the parameters are ignored. /statfileslevel sets how many folder levels get their own .stat file; a cached file is refetched when its .stat file is newer. /allowAuthorized controls whether requests carrying authentication are cached. On AEMaaCS, explicit invalidation is preferably done with Sling Content Distribution from Author; the Replication API driving the publish flush agent is the alternative.",
        analogy:
          "Filter rules are like a will with codicils: the most recently added clause overrides everything before it, even if an earlier clause said the opposite. So when you're debugging why a path got blocked, don't stop at the first matching rule you find \u2014 keep reading down to the last one that applies.",
        artifact: `/0001 { /type "deny" /url "/*" }
/0002 { /type "allow" /url "/content/*" }
/0003 { /type "allow" /extension '(css|js|png|jpg)' }
(a request to /content/foo.html is allowed \u2014 rule 0002 is the last match)`,
        delta65: `On-prem, the dispatcher module ran on your own Apache server with direct filesystem access to the cache docroot \u2014 you could delete cache files by hand. In AEMaaCS you don't get that access; invalidation must go through a Flush agent triggered by replication, which is also the AEMaaCS-safe way to build a custom "clear this cache" feature (a servlet that triggers replication to the flush agent, not a raw HTTP call to the dispatcher).`,
        handsOn:
          "In the local SDK's dispatcher tools folder, open dispatcher.any for the default farm, find the /filter block, and trace a specific URL through the rules in order to determine the actual last-match verdict.",
        takeaways: [
          "Filter rules: last matching rule wins, not first",
          "/statfileslevel = how many directory levels up a .stat file is checked for staleness",
          "/allowAuthorized controls caching of requests with an Authorization header",
          "AEMaaCS explicit invalidation: SCD from Author (preferred) or Replication API + publish flush agent; never direct file access",
        ],
      },
      3: {
        mechanism:
          "Three OSGi concepts get conflated: Components (Declarative Services \u2014 a class registered as a service, visible/toggleable in the Felix console's Components tab), Configurations (values fed into a component, visible in the Configuration tab), and Bundles (the jar itself). A Managed Service Configuration is a single instance of config for a service. A Factory Configuration lets you create multiple independent instances of the same config PID \u2014 each one spins up its own service instance.",
        analogy:
          "A Factory Configuration is a cookie-cutter: stamp out as many independent instances as you need (one per external API endpoint, say), each configured separately. A Managed Service Configuration is a single dial \u2014 there's only one of it for the whole service.",
        artifact: `@Component(service = MyService.class)
@Designate(ocd = MyService.Config.class, factory = true)
public class MyServiceImpl implements MyService {
  @ObjectClassDefinition(name = "My Service Config")
  @interface Config { String endpointUrl(); }
}
// PID for factory configs shows as com.example.MyServiceImpl~<name> in the console`,
        delta65:
          "OSGi itself works the same. What changes: AEMaaCS restricts direct Felix console config editing on higher environments \u2014 configs are meant to be deployed as code (ui.config package content, often paired with repoinit for service users), not clicked into /system/console/configMgr in production the way you might on a 6.5 dev box.",
        handsOn:
          "Locally, open :4502/system/console/configMgr, find the Sling Log Manager's factory configuration, and note the ~ in its PID \u2014 that tilde is the tell for a factory-configured instance vs a singleton service config.",
        takeaways: [
          "Components tab = Declarative Services registrations (state: active/disabled/unsatisfied)",
          "Factory Configuration = multiple independent instances of one config PID",
          "Managed Service Configuration = a single instance",
          "AEMaaCS: configs belong in code (ui.config + repoinit), not hand-edited on prod-like tiers",
        ],
      },
      4: {
        mechanism:
          "A Sling Model adapts from a source object (most often Resource or SlingHttpServletRequest) into a plain Java object. Injectors run in a defined order, each trying to resolve a field from one source (request attribute, request parameter, OSGi service, resource value map, child resource, etc.) until one succeeds. Injection strategy \u2014 REQUIRED or OPTIONAL \u2014 can be set per field with annotations like @Optional/@Required, or as a class-wide default via @Model(defaultInjectionStrategy = ...). @PostConstruct runs after injection for any computed/derived fields. The Sling Model Exporter (@Exporter) makes the model available as JSON via a .model.json request, which is what both the SPA Editor and headless integrations lean on.",
        analogy: `A Sling Model is a translator working a UN meeting: the repository and request speak several different "languages" (request params, resource properties, OSGi services), and the model's injectors are a lineup of interpreters, each fluent in exactly one source, tried in order until one understands the word you're asking for.`,
        artifact: `@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Teaser {
  @ValueMapValue(name = "jcr:title")
  private String title;

  @Self @Via("resource")
  private ComponentContext ctx;
}`,
        delta65:
          "No major behavioral difference. Worth knowing: the Exporter/JSON model is the backbone for both the SPA Editor's page model and GraphQL-adjacent headless patterns \u2014 it's a high-yield connective topic across S2.",
        handsOn:
          "Build a minimal Sling Model locally, adapt it from a resource, and hit the same path with a .model.json selector to see the exported JSON shape.",
        takeaways: [
          "Adaptables: usually Resource or SlingHttpServletRequest",
          "Injectors try sources in order until one resolves the field",
          "defaultInjectionStrategy at @Model level sets the class-wide default; per-field annotations override it",
          "@Exporter + .model.json is the backbone for SPA Editor and headless JSON output",
        ],
      },
      5: {
        mechanism:
          "HTL auto-escapes output based on display context \u2014 text, html, attribute, uri, number, elementName, scriptString, and a few others \u2014 and each applies different escaping rules appropriate to where the value lands in the markup. Getting the context wrong is the classic XSS vector: text-escaping a value that ends up inside an href doesn't validate it as a safe URL the way the uri context does.",
        analogy:
          "Display context is choosing the right filter for where output lands: html-escaping is for text between tags, uri-escaping is for anything going into a link or src, attribute-escaping is for values inside quotes in a tag. Using the wrong filter is like translating a sentence correctly but reading it out in the wrong room.",
        artifact: `<a href="\${resource.link @ context='uri'}">
  \${resource.title @ context='text'}
</a>`,
        delta65:
          "No 6.5 delta \u2014 HTL replaced JSP as the standard templating language across both, and context rules are identical.",
        handsOn:
          "In a test component, deliberately output a request parameter with the wrong context (or none) and inspect the raw HTML in devtools to see the unescaped result, then fix it with the correct context.",
        takeaways: [
          "Never rely on default/no context for untrusted output tied to href, src, or inline script",
          "uri context \u2260 text context \u2014 text escaping doesn't validate URL safety",
          "Know the full context list: text, html, attribute, uri, number, elementName, scriptString",
        ],
      },
      6: {
        mechanism:
          "The proxy pattern: your own component in /apps sets sling:resourceSuperType to a Core Component, inheriting its backend logic (Sling Model, servlets) while letting you override only the pieces you need \u2014 typically the dialog or HTL. Component availability is controlled per-template through the Layout Container's policy (Allowed Components) \u2014 this is template-scoped, unlike componentGroup, which only affects categorization in the component browser and grants no permission by itself. Style System variants authors can choose between live in Allowed Styles (Group Name + Style Name pairs) on the component's own policy; Default CSS Classes applies one fixed class with no author choice.",
        analogy:
          "A proxy component is a franchise location: it operates under the parent brand's whole operating manual (the Core Component's logic) but can put up its own signage and tweak the menu locally (dialog, markup) without touching the parent recipe.",
        artifact: `/apps/myproject/components/title/.content.xml
  sling:resourceSuperType="core/wcm/components/title/v3/title"
// policy node under /conf/myproject/settings/wcm/policies/...
  cq:styleGroups: { "Emphasis": ["Bold","Subtle"] }`,
        delta65:
          "Policies and the Style System are Touch UI / Editor concepts with no Classic UI equivalent \u2014 if a question references cq:editConfig and xtype dialogs instead, that's the legacy path, still testable but not something you'll see in AEMaaCS work.",
        handsOn:
          "Proxy a Core Component locally, override its dialog only, then enable it on one specific template via that template's Layout Container policy and confirm it does NOT appear on other templates.",
        takeaways: [
          "Proxy pattern = your own resourceSuperType override, inheriting backend logic",
          "Per-template availability = Layout Container policy, not componentGroup",
          "Allowed Styles (grouped) = author-choosable variants; Default CSS Classes = one fixed class",
        ],
      },
      7: {
        mechanism:
          "Content Fragments are structured, presentation-agnostic content defined by a model: the channel owns layout and design. Experience Fragments are a composite of components with content and presentation, used 'as is' in channels. Live Copy / MSM syncs pages from a blueprint; rollout configurations pair a trigger with actions, and OSGi settings can exclude node types, paragraph items or page properties from sync. A Workflow Model is the flow definition; a Workflow Process is a Java class implementing WorkflowProcess, registered as an OSGi component and referenced by a Process Step.",
        analogy:
          "Content Fragment = a raw ingredient. Experience Fragment = the plated dish, ready to serve as-is across different tables (channels). Live Copy is a franchise store that syncs menu changes from HQ automatically, but a Rollout Configuration lets a specific store opt certain items out of that sync. A Workflow Model is the recipe card sequence; a Workflow Process is one cook actually executing a single step in code.",
        artifact: `@Component(
  service = WorkflowProcess.class,
  property = { "process.label=Notify Approver" }
)
public class NotifyApproverProcess implements WorkflowProcess {
  public void execute(WorkItem item, WorkflowSession ws, MetaDataMap args) { ... }
}`,
        delta65:
          "MSM/Live Copy and the Workflow engine are unchanged fundamentally. No major cloud-specific delta here.",
        handsOn:
          "In the local SDK, write a minimal custom WorkflowProcess, register it, add it as a step in a Workflow Model via the Workflow Console, and run it against a test page.",
        takeaways: [
          "Content Fragment = content only, channel owns layout; Experience Fragment = content + layout, used as-is",
          "Rollout Configuration can exclude specific content from an MSM rollout",
          "Workflow Model = the flow; Workflow Process = a Java class implementing one step",
        ],
      },
      8: {
        mechanism:
          "Standard AEM Maven layout: parent pom for global properties and dependency management, core (Java bundle), ui.apps (/apps code: components, templates, clientlibs), ui.content (content), ui.config (runmode-specific OSGi configs), ui.frontend (Webpack front-end build), and all (one package embedding every module). repoinit scripts ship as a RepositoryInitializer OSGi config and run while the repository starts up, before it's handed to other code, so service users and ACLs exist early. Cloud Manager's code quality step (SonarQube plus OakPAL) fails the pipeline on Critical issues and pauses it on Important ones.",
        analogy:
          "ui.apps vs ui.content is a factory-installed showroom versus a shopper's cart: the showroom (ui.apps) gets torn out and rebuilt fresh every deploy, while the cart (ui.content, author-added content) is preserved. repoinit is the store's opening checklist \u2014 create the accounts, set the locks \u2014 run before anything gets stocked on the shelves.",
        artifact: `<!-- parent pom.xml -->
<properties>
  <aem.version>2024.x</aem.version>
</properties>
<modules>
  <module>core</module><module>ui.apps</module>
  <module>ui.content</module><module>ui.config</module>
  <module>ui.frontend</module><module>all</module>
</modules>`,
        delta65:
          "On-prem, you could hand-edit config or content directly on the server. AEMaaCS enforces /apps and /libs as genuinely immutable at the platform level \u2014 there's no way to hand-edit them in prod, everything must go through code and the Cloud Manager pipeline.",
        handsOn:
          "Open the project's module folders and find the RepositoryInitializer OSGi config (the repoinit script) in ui.config. Read which service users and ACLs it creates.",
        takeaways: [
          "ui.apps = immutable, replaced wholesale each deploy; ui.content = mutable-safe author content",
          "repoinit runs at repository startup, before other code uses the repository: users, ACLs, paths, namespaces",
          "Cloud Manager Code Quality gate = SonarQube-based; a violation blocks the pipeline",
        ],
      },
      9: {
        mechanism:
          "Different logs answer different questions: error.log = exceptions and stack traces, request.log = request and response lines with response time, access.log = who requested which URL, audit.log = who did what to pages, replication and DAM, and the Dispatcher log = cache decisions and blocked requests. Replication troubleshooting starts with whether items are queuing, whether the queue shows blocked, and whether the Publish instance is running; namespace replication also needs jcr:namespaceManagement for the replication user. On 6.5, setting reindex=true on an index definition triggers a full reindex; a brand-new index is populated on initial deployment. The Discovery Service lets instances form a topology, and each cluster has a leader.",
        analogy:
          "Each log is a different security camera pointed at a different part of the building: error.log watches the kitchen for fires, access.log watches the front door for who came and went, audit.log is the guest sign-in ledger, and the dispatcher log watches the concierge deciding who gets handed a fresh answer versus a photocopy from the file cabinet.",
        artifact: `# dispatcher log line (illustrative)
[timestamp] "GET /content/page.html" cache-action=MISS reason=no-stat-file
# access.log
127.0.0.1 - - [date] "GET /content/page.html HTTP/1.1" 200 4521`,
        delta65:
          "6.5 on-prem had the Operations Dashboard and hand-configured replication agents visible on the local server. AEMaaCS surfaces most of this through Cloud Manager instead \u2014 there's no full equivalent locally, so for this topic more than most, reading Adobe's docs matters more than hands-on tinkering.",
        handsOn:
          "Tail error.log and request.log simultaneously on the local author instance while loading a page, and compare what each one actually records for the same request.",
        takeaways: [
          "Blocked by the Dispatcher /filter = 404, shown as 'blocked' in the Dispatcher log",
          "audit.log = who changed what content/permissions, not runtime errors",
          "Changed index on 6.5 = set reindex=true; a brand-new index is populated on deployment",
          "Discovery Service = cluster membership + leader election",
        ],
      },
      10: {
        mechanism:
          "Five topics with zero prior coverage, at survey depth: (1) Unit testing: JUnit 5, Mockito and wcm.io AEM Mocks test Sling Models without a running instance. (2) GraphQL/headless: persisted queries against Content Fragments, run with GET /graphql/execute.json so responses can be cached. (3) SPA Editor: React components map to resource types with MapTo, driven by the page model JSON (deprecated for new projects since 2025.01). (4) Query Builder: a predicate-based API; p.guessTotal stops it counting every result, and that option doesn't apply to JCR-SQL2 or XPath. (5) i18n: HTL's i18n option translates strings; the language comes from the user's preference or the requested page's locale, and dictionaries are Sling i18n nodes (mix:language).",
        analogy:
          "Query Builder is ordering off a menu with predicates; guessTotal is telling the waiter 'roughly how many' instead of making them count every plate.",
        artifact: `-- JCR-SQL2
SELECT * FROM [nt:base] AS a
  WHERE ISDESCENDANTNODE(a, '/content/mysite')
  AND a.[jcr:title] = 'Foo'

// GraphQL persisted query
GET /graphql/execute.json/myproject/getArticleBySlug;slug=foo`,
        delta65:
          "None of these are cloud-vs-6.5 deltas \u2014 they're simply topics your day-to-day authoring/dev work hasn't touched yet. One currency note: Adobe now marks the SPA Editor as deprecated for new projects (existing ones still supported), pointing new work at the Universal Editor instead \u2014 know the SPA Editor mechanism for the exam, but don't take it as current best practice for new builds.",
        handsOn:
          "If the local SDK exposes GraphiQL, run one query against a test Content Fragment model. Separately, run a Query Builder search in the debugger with and without p.guessTotal and compare the response.",
        takeaways: [
          "AEM Mocks + JUnit = standard unit testing approach for Sling Models/servlets",
          "GraphQL persisted queries target Content Fragments specifically, not general content",
          "SPA Editor components MapTo a resource type; the page model JSON drives editability",
          "Query Builder: p.guessTotal avoids counting every result (Query Builder only)",
          "i18n: language from user preference or requested page locale; dictionaries are Sling i18n nodes",
        ],
      },
    },
    Kp = [
      { id: "testing", label: "unit testing", qIds: ["q25"] },
      { id: "graphql", label: "GraphQL / headless", qIds: ["q21"] },
      { id: "spa", label: "SPA Editor", qIds: ["q20"] },
      { id: "querybuilder", label: "Query Builder (guessTotal)", qIds: ["q26"] },
      { id: "i18n", label: "i18n", qIds: ["q22"] },
      { id: "repoinit", label: "repoinit", qIds: ["q23"] },
      {
        id: "cloudmanager",
        label: "Cloud Manager quality gates",
        qIds: ["q24"],
      },
      { id: "cfm", label: "CFM in code", qIds: ["q19"] },
    ],
    As = [
      {
        "id": "q1",
        "section": "S2",
        "type": "single",
        "stem": "A proxy component at /apps/myproject/components/teaser has sling:resourceSuperType pointing to /libs/core/wcm/components/teaser/v2/teaser. There is no teaser.html anywhere under /apps. A request arrives for the resource with selector \"compact\" and extension html. Under /libs, both teaser.html and teaser.compact.html exist.",
        "q": "Which script renders?",
        "options": [
          {
            "id": "a",
            "text": "/apps/.../teaser.html"
          },
          {
            "id": "b",
            "text": "/libs/.../teaser.compact.html"
          },
          {
            "id": "c",
            "text": "/libs/.../teaser.html"
          },
          {
            "id": "d",
            "text": "404 — no matching script"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "Basically: if your component has no scripts of its own and just points to a core component, which of the parent's scripts actually gets used when the URL adds an extra \"flavor\" tag (selector)?",
        "explain": "With no /apps override at all, resolution falls through to /libs via the super type chain, and within /libs the selector-specific script (teaser.compact.html) beats the generic one. (a) doesn't exist. (c) ignores the selector. (d) is wrong because a selector script does exist.",
        "audit": {
          "ver": "verified",
          "note": "Sling ranks scripts that match more selectors higher. With no /apps script at all, both candidates sit under /libs, so the selector script wins.",
          "src": [
            {
              "t": "Apache Sling: URL to Script Resolution",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/the-sling-engine/url-to-script-resolution.html"
            }
          ]
        },
        "why": {
          "a": "There's no teaser.html under /apps at all, so this script doesn't exist.",
          "c": "It exists, but it ignores the 'compact' selector. Sling prefers the script that matches more selectors.",
          "d": "A matching script does exist: teaser.compact.html under /libs, reached through the supertype."
        }
      },
      {
        "id": "q2",
        "section": "S2",
        "type": "single",
        "stem": "Both /apps/myproject/components/list/list.html and /libs/foundation/components/list/list.html exist for the same resource type, with /apps overlaying /libs.",
        "q": "What happens to the /libs script at render time?",
        "options": [
          {
            "id": "a",
            "text": "Both scripts run and their output is merged"
          },
          {
            "id": "b",
            "text": "Only /apps renders; /libs is fully shadowed"
          },
          {
            "id": "c",
            "text": "AEM alternates between them per request"
          },
          {
            "id": "d",
            "text": "The one with the later file-system timestamp wins"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "If you have your own version of a script and AEM's built-in one exists too, does AEM run both and blend the output, or does yours just take over completely?",
        "explain": "Script-level resolution is shadowing, not merging — first match under the search path (/apps before /libs) wins outright and the other script never executes. This is distinct from dialog inheritance via the Sling Resource Merger, which does merge.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Sling Resource Merger",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/sling-resource-merger"
            },
            {
              "t": "Apache Sling: URL to Script Resolution",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/the-sling-engine/url-to-script-resolution.html"
            }
          ]
        },
        "why": {
          "a": "Scripts don't merge. Merging is what the Sling Resource Merger does for dialogs, not script resolution.",
          "c": "Resolution is deterministic: /apps comes before /libs in the search path on every request.",
          "d": "Timestamps play no part. The search path order (/apps first) decides."
        }
      },
      {
        "id": "q3",
        "section": "S2",
        "type": "single",
        "stem": "An HTL component reads a request parameter and must output it inside an href attribute.",
        "q": "Which HTL display context is correct?",
        "options": [
          {
            "id": "a",
            "text": "text"
          },
          {
            "id": "b",
            "text": "html"
          },
          {
            "id": "c",
            "text": "uri"
          },
          {
            "id": "d",
            "text": "attribute"
          }
        ],
        "correct": [
          "c"
        ],
        "plain": "You're printing a web address inside an <a href=...> tag — which \"safety mode\" should HTL use so the link doesn't break or become an injection risk?",
        "explain": "uri validates the URI and outputs nothing if validation fails, and HTL applies it to href and src automatically unless you set another context. text escapes but doesn't validate a URL. html and attribute are for other places.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation tightened to the spec's wording.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "a": "text escapes the value but doesn't validate it as a URL.",
          "b": "html is for markup output, not a link target.",
          "d": "attribute is for general attribute values; href gets the uri context, which validates the URL."
        }
      },
      {
        "id": "q4",
        "section": "S2",
        "type": "single",
        "stem": "A developer wants a Sling Model field to be populated only when present, with no exception thrown if it's missing, and this should apply to every field in the class by default.",
        "q": "Where is this declared?",
        "options": [
          {
            "id": "a",
            "text": "On each field individually with @Optional"
          },
          {
            "id": "b",
            "text": "In the class-level @Model annotation's defaultInjectionStrategy"
          },
          {
            "id": "c",
            "text": "In the OSGi config for the Sling Models bundle"
          },
          {
            "id": "d",
            "text": "It cannot be set at the class level"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "How do you tell a whole class of Java fields \"it's fine if some of these are missing, don't throw an error\" instead of doing it one field at a time?",
        "explain": "@Model(defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL) sets the default for every field. A field that must still be present opts back in with @Required or injectionStrategy = REQUIRED. There's no OSGi switch for this, and @Optional is per field.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation fixed: it named a non-existent @Injected annotation.",
          "src": [
            {
              "t": "WKND tutorial: Custom Component (Adobe)",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/custom-component"
            },
            {
              "t": "Apache Sling Models",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"
            },
            {
              "t": "Sling Models @ValueMapValue javadoc",
              "u": "https://sling.apache.org/apidocs/sling14/org/apache/sling/models/annotations/injectorspecific/ValueMapValue.html"
            }
          ]
        },
        "why": {
          "a": "That works, but it's per field. The question asks for one class-wide default.",
          "c": "There's no Sling Models OSGi switch for this; it's set in code on @Model.",
          "d": "It can: defaultInjectionStrategy on @Model is exactly the class-level setting."
        }
      },
      {
        "id": "q5",
        "section": "S2",
        "type": "single",
        "stem": "A retailer needs the same \"how it's made\" story reused across the US site, a partner microsite, and a native app, with layout/branding differing per placement but the underlying content staying in sync.",
        "q": "Which AEM feature fits best?",
        "options": [
          {
            "id": "a",
            "text": "Live Copy (MSM)"
          },
          {
            "id": "b",
            "text": "Content Fragment"
          },
          {
            "id": "c",
            "text": "Experience Fragment"
          },
          {
            "id": "d",
            "text": "Client Library"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You need the same content story reused across different sites/apps but wearing different clothes each time (layout differs per placement) — which building block is made for that?",
        "explain": "Adobe defines Content Fragments as presentation-agnostic: the channel owns the layout and design, so each placement styles the same content its own way while the content stays in one place. Experience Fragments carry content and layout and are used 'as is'. Live Copy syncs pages and sites, and a clientlib is CSS/JS.",
        "audit": {
          "ver": "corrected",
          "note": "Answer changed from Experience Fragment to Content Fragment.",
          "src": [
            {
              "t": "Content Fragments and Experience Fragments",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/content-fragments/understand-content-fragments-and-experience-fragments"
            }
          ]
        },
        "why": {
          "a": "Live Copy syncs pages and site structure from a blueprint, not reusable cross-channel content.",
          "c": "Experience Fragments carry content and layout and are used 'as is'. The stem needs layout to differ per placement.",
          "d": "A clientlib is CSS/JS, not content."
        }
      },
      {
        "id": "q6",
        "section": "S2",
        "type": "single",
        "stem": "A developer needs to enable a custom component for authoring within a specific page template, without affecting other templates that share the same components.",
        "q": "Where does this get configured?",
        "options": [
          {
            "id": "a",
            "text": "The component's cq:componentGroup property"
          },
          {
            "id": "b",
            "text": "The Layout Container policy for that specific template"
          },
          {
            "id": "c",
            "text": "The dispatcher farm config"
          },
          {
            "id": "d",
            "text": "The component's dialog.xml"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You want a custom component to show up as an option on only one specific page template, not every template that could use it — where do you flip that switch?",
        "explain": "Component availability per-template is controlled through the Layout Container's policy (Allowed Components) on that template — this is template-scoped. componentGroup only controls where it appears in the component browser, not whether it's allowed.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Using Core Components",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/get-started/using"
            },
            {
              "t": "AEM: Editable Page Templates",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/templates/page-templates-editable.html?lang=en"
            }
          ]
        },
        "why": {
          "a": "componentGroup only sorts the component into a group; it doesn't allow it on a template. (The property is also just componentGroup.)",
          "c": "The Dispatcher handles caching and filtering, not authoring.",
          "d": "The dialog defines the component's fields, not where it's allowed."
        }
      },
      {
        "id": "q7",
        "section": "S1",
        "type": "single",
        "stem": "A developer needs one OSGi configuration per instance of a reusable service — e.g., one config per external API endpoint the service talks to — where each instance can be added/removed independently at runtime.",
        "q": "Which configuration type fits?",
        "options": [
          {
            "id": "a",
            "text": "A single Managed Service config"
          },
          {
            "id": "b",
            "text": "A Factory Configuration"
          },
          {
            "id": "c",
            "text": "A bundle-level MANIFEST property"
          },
          {
            "id": "d",
            "text": "A repoinit script"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You need several separate, independently-managed copies of the same kind of settings (like one per API you talk to) inside OSGi — what's that pattern called?",
        "explain": "Factory Configurations allow multiple independent instances of the same config PID, each producing its own service instance — exactly the \"one config per endpoint\" pattern. A Managed Service config is a single instance.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Configuring OSGi",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/deploying/configuring-osgi.html"
            }
          ]
        },
        "why": {
          "a": "A Managed Service config is a single instance. You need one per endpoint.",
          "c": "A MANIFEST property is bundle metadata, not runtime configuration.",
          "d": "repoinit creates users, paths and ACLs, not service configurations."
        }
      },
      {
        "id": "q8",
        "section": "S1",
        "type": "single",
        "stem": "A team built CSS-based style variants for a component and wants content authors to pick from them in the dialog, scoped to how that component is policy-configured per site section.",
        "q": "Where should the style options be registered?",
        "options": [
          {
            "id": "a",
            "text": "Default CSS Classes field on the page policy"
          },
          {
            "id": "b",
            "text": "Default CSS Classes field on the component's own policy"
          },
          {
            "id": "c",
            "text": "Allowed Styles (Group Name / Style Name pairs) on the component's policy"
          },
          {
            "id": "d",
            "text": "Allowed Styles on the main Layout Container policy"
          }
        ],
        "correct": [
          "c"
        ],
        "plain": "You built some CSS look-and-feel options and want editors to pick between them in the sidebar — where do those choices actually get registered?",
        "explain": "Style System variants that authors choose between belong in Allowed Styles on the component's own policy, grouped by Group Name with individual Style Names — this is what populates the Styles tab in the dialog. Default CSS Classes applies one fixed class with no author choice.",
        "audit": {
          "ver": "partial",
          "note": "Allowed Styles (group name, style name, CSS classes) is confirmed. Default CSS Classes wasn't on the pages checked.",
          "src": [
            {
              "t": "AEMaaCS: Style System",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/page-editor/style-system"
            },
            {
              "t": "Using Core Components",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/get-started/using"
            }
          ]
        },
        "why": {
          "a": "Default CSS Classes give authors no choice, and the page policy isn't the component's policy.",
          "b": "Right policy, wrong field: Default CSS Classes are always applied, with no author choice.",
          "d": "The Layout Container's policy styles the container, not this component."
        }
      },
      {
        "id": "q9",
        "section": "S1",
        "type": "single",
        "stem": "On AEMaaCS, a developer wants DEBUG output for the package com.example.feed to show up in the logs downloaded from Cloud Manager.",
        "q": "Which configuration works?",
        "options": [
          {
            "id": "a",
            "text": "A Sling LogManager logger config (…LogManager.factory.config~feed.cfg.json) in ui.config, with the log file set to logs/error.log"
          },
          {
            "id": "b",
            "text": "The same logger config, but writing to logs/feed.log so it gets its own file"
          },
          {
            "id": "c",
            "text": "A node under /var/log/feed"
          },
          {
            "id": "d",
            "text": "Editing sling.properties on the Author pod"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "On the cloud version, you want extra logging for your own code to show up in the logs you download. Where does that output have to go?",
        "explain": "Adobe: AEMaaCS doesn't support custom log files, and Java logs are only accessible when written to error.log. You still add a logger config for your package, pointed at logs/error.log. (b) works on 6.5 but the file is unreachable on AEMaaCS. (c) and (d) don't configure logging.",
        "audit": {
          "ver": "corrected",
          "note": "Rewritten: AEMaaCS doesn't support custom log files.",
          "src": [
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "b": "Works on 6.5, but AEMaaCS doesn't support custom log files. Only output written to error.log is accessible.",
          "c": "A repository node doesn't configure logging.",
          "d": "You don't edit files on AEMaaCS pods; configuration ships as code."
        }
      },
      {
        "id": "q10",
        "section": "S3",
        "type": "single",
        "stem": "A developer is defining a version number that both the core and ui.apps modules need to reference consistently.",
        "q": "Where should that property be declared in a standard AEM Maven multi-module project?",
        "options": [
          {
            "id": "a",
            "text": "<properties> in the parent (root) pom.xml"
          },
          {
            "id": "b",
            "text": "<properties> in core/pom.xml only"
          },
          {
            "id": "c",
            "text": "<properties> in ui.apps/pom.xml only"
          },
          {
            "id": "d",
            "text": "A separate properties.xml file"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You've got a version number both your Java module and your content-package module need — where's the one place to define it so both see it?",
        "explain": "Properties meant to be shared/inherited across modules belong in the parent pom's <properties> section — child modules inherit it automatically. Declaring it in one child module doesn't make it visible to siblings.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Using the AEM Project Archetype",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/archetype/using"
            }
          ]
        },
        "why": {
          "b": "A property declared in one child module isn't visible to its siblings.",
          "c": "Same problem: a child's properties don't reach the other modules.",
          "d": "Maven has no separate properties.xml convention; shared properties go in the parent pom."
        }
      },
      {
        "id": "q11",
        "section": "S3",
        "type": "single",
        "stem": "A developer generates a project from the AEM Project Archetype with frontendModule=general.",
        "q": "What does that produce?",
        "options": [
          {
            "id": "a",
            "text": "A Webpack-based ui.frontend module that builds the site's CSS and JS into clientlibs"
          },
          {
            "id": "b",
            "text": "A React single-page app wired to the SPA Editor"
          },
          {
            "id": "c",
            "text": "The Dispatcher configuration module"
          },
          {
            "id": "d",
            "text": "A second Java bundle for front-end Sling Models"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You create a project with Adobe's generator and pick the 'general' front-end option. What do you get?",
        "explain": "Adobe describes the general ui.frontend as a Webpack-based front-end build. Version note: older archetype releases also accepted react and angular, but the current archetype lists only general or none. Dispatcher config is its own module, and Java code goes in core.",
        "audit": {
          "ver": "corrected",
          "note": "Rewritten: the current archetype only offers frontendModule general or none.",
          "src": [
            {
              "t": "Using the AEM Project Archetype",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/archetype/using"
            },
            {
              "t": "AEM Project Archetype (Adobe GitHub)",
              "u": "https://github.com/Adobe/aem-project-archetype"
            }
          ]
        },
        "why": {
          "b": "general is the Webpack front-end build. SPA options were separate values in older archetypes, and the current one offers only general or none.",
          "c": "Dispatcher config is its own module, unrelated to frontendModule.",
          "d": "Java code goes in core; ui.frontend is a front-end build."
        }
      },
      {
        "id": "q12",
        "section": "S3",
        "type": "single",
        "stem": "In an archetype-based project, a developer needs a Publish-only OSGi configuration.",
        "q": "Which module should it go in?",
        "options": [
          {
            "id": "a",
            "text": "core"
          },
          {
            "id": "b",
            "text": "ui.apps"
          },
          {
            "id": "c",
            "text": "ui.config"
          },
          {
            "id": "d",
            "text": "ui.content"
          }
        ],
        "correct": [
          "c"
        ],
        "plain": "You need a setting that only applies on Publish. Which part of the project holds settings like that?",
        "explain": "Adobe: ui.config contains the runmode-specific OSGi configs (for example osgiconfig/config.publish). core is the Java bundle, ui.apps holds components, templates and clientlibs, and ui.content holds content.",
        "audit": {
          "ver": "corrected",
          "note": "Rewritten: the original item's 'style against rendered markup' setup isn't described in Adobe's archetype docs.",
          "src": [
            {
              "t": "Using the AEM Project Archetype",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/archetype/using"
            }
          ]
        },
        "why": {
          "a": "core is the Java bundle, not where configs live.",
          "b": "ui.apps holds components, templates and clientlibs. Runmode-specific configs go in ui.config.",
          "d": "ui.content holds content, not OSGi configs."
        }
      },
      {
        "id": "q13",
        "section": "S4",
        "type": "single",
        "stem": "In AEM as a Cloud Service, a client needs a feature that explicitly clears specific cached resources from the Dispatcher cache on demand, from within custom application code.",
        "q": "What is the preferred approach?",
        "options": [
          {
            "id": "a",
            "text": "A custom servlet that opens a raw HTTP connection to the Dispatcher"
          },
          {
            "id": "b",
            "text": "Sling Content Distribution (SCD) invalidation, triggered from Author"
          },
          {
            "id": "c",
            "text": "The Replication API invoking the publish Dispatcher flush replication agent"
          },
          {
            "id": "d",
            "text": "Restarting the publish instance"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You need a 'clear this cached page now' feature on the cloud version. Which way does Adobe prefer?",
        "explain": "Adobe's AEMaaCS replication doc lists two ways to invalidate explicitly: SCD invalidation from Author (the preferred method), or the Replication API invoking the publish Dispatcher flush agent. So (c) works but isn't the preferred answer. Raw HTTP calls and restarts aren't supported patterns.",
        "audit": {
          "ver": "corrected",
          "note": "Answer changed: Adobe's preferred method is SCD invalidation; the flush agent is the alternative.",
          "src": [
            {
              "t": "AEMaaCS: Replication",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/operations/replication"
            }
          ]
        },
        "why": {
          "a": "Not a supported pattern; the documented options both go through AEM.",
          "c": "It works, but Adobe lists it as the alternative. The preferred method is SCD invalidation.",
          "d": "Restarting doesn't target specific cached resources, and it isn't a supported invalidation method."
        }
      },
      {
        "id": "q14",
        "section": "S4",
        "type": "single",
        "stem": "On AEM 6.5, a developer adds a new property to an existing Lucene index definition. Existing content must become searchable by that property too.",
        "q": "What makes Oak rebuild the index over existing content?",
        "options": [
          {
            "id": "a",
            "text": "Set reindex=true on the index definition node"
          },
          {
            "id": "b",
            "text": "Restart only the author instance"
          },
          {
            "id": "c",
            "text": "Nothing; changes to an existing definition apply to old content automatically"
          },
          {
            "id": "d",
            "text": "Delete /oak:index and recreate it by hand"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You changed an existing search index and old content needs to be indexed by the new rule. What do you flip?",
        "explain": "Adobe 6.5: setting reindex to true triggers a full content reindex. A brand-new index is populated on deployment, but a changed one isn't rebuilt by itself. Restarts don't reindex, and deleting /oak:index removes every index. On AEMaaCS you deploy a new versioned definition instead.",
        "audit": {
          "ver": "corrected",
          "note": "Rewritten: Adobe says a new index is populated on deployment; reindex=true is for changing an existing one.",
          "src": [
            {
              "t": "AEM 6.5: Oak Queries and Indexing",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/deploying/queries-and-indexing"
            },
            {
              "t": "AEM 6.5: Troubleshooting Slow Queries",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/bestpractices/troubleshooting-slow-queries"
            }
          ]
        },
        "why": {
          "b": "Restarting doesn't reindex.",
          "c": "Only a brand-new index is populated on deployment. A changed definition needs reindex=true to cover old content.",
          "d": "/oak:index holds every index definition; deleting it removes all of them."
        }
      },
      {
        "id": "q15",
        "section": "S4",
        "type": "multi",
        "stem": "On AEM 6.5, content published from Author isn't appearing on Publish, and the replication queue keeps growing.",
        "q": "Which two checks are appropriate first steps? (Choose two.)",
        "options": [
          {
            "id": "a",
            "text": "Check whether the agent's queue shows a blocked status"
          },
          {
            "id": "b",
            "text": "Confirm the target Publish instance is running and responding"
          },
          {
            "id": "c",
            "text": "Reinstall the AEM SDK"
          },
          {
            "id": "d",
            "text": "Rename the affected content pages"
          },
          {
            "id": "e",
            "text": "Clear the browser cache on the author instance"
          }
        ],
        "correct": [
          "a",
          "b"
        ],
        "plain": "On 6.5, published pages aren't showing up live and the queue keeps growing. What are the two first things to check?",
        "explain": "Adobe's replication troubleshooting checks whether items are queuing and whether the queue shows blocked, then whether the Publish instance is running or unresponsive. The other options don't touch replication.",
        "audit": {
          "ver": "corrected",
          "note": "Options reworded to Adobe's documented first checks.",
          "src": [
            {
              "t": "AEM 6.5: Troubleshooting Replication",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/configuring/troubleshoot-rep"
            }
          ]
        },
        "why": {
          "a": "Correct: Adobe's troubleshooting checks whether the queue shows a blocked status.",
          "b": "Correct: a blocked queue often means the Publish instance isn't running or responding.",
          "c": "Reinstalling doesn't touch replication, and it's an action before you have evidence.",
          "d": "Page names have nothing to do with a growing replication queue.",
          "e": "The author's browser cache doesn't affect replication to Publish."
        }
      },
      {
        "id": "q16",
        "section": "S5",
        "type": "single",
        "stem": "A page that exists and is published returns 404 through the Dispatcher, but loads when requested directly from the Publish instance.",
        "q": "Where do you look first?",
        "options": [
          {
            "id": "a",
            "text": "audit.log"
          },
          {
            "id": "b",
            "text": "The Dispatcher log, for a 'blocked' entry and the filter rule number"
          },
          {
            "id": "c",
            "text": "The workflow log"
          },
          {
            "id": "d",
            "text": "error.log on Author"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "A real, published page returns 'not found' through the cache server but works when you go straight to Publish. Which log do you check?",
        "explain": "Adobe: requests the /filter doesn't accept are sent back with a 404, and the Dispatcher log shows them as blocked along with the matching rule. audit.log records changes, and Author's error.log never sees a Publish request.",
        "audit": {
          "ver": "corrected",
          "note": "Rewritten: Dispatcher filter blocks return 404, not 403.",
          "src": [
            {
              "t": "Dispatcher: Configure AEM Dispatcher",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration"
            },
            {
              "t": "KB: Dispatcher filter rules blocking requests",
              "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-34606"
            }
          ]
        },
        "why": {
          "a": "audit.log records who changed things, not blocked requests.",
          "c": "Workflows aren't involved in serving the page.",
          "d": "Author's error.log never sees a Publish request."
        }
      },
      {
        "id": "q17",
        "section": "S5",
        "type": "single",
        "stem": "In AEM as a Cloud Service, publish runs as multiple ephemeral, auto-scaled pods behind a load balancer. A specific request failed intermittently and a developer needs to trace it.",
        "q": "Where should the developer look?",
        "options": [
          {
            "id": "a",
            "text": "The error.log on whichever single publish pod is currently reachable"
          },
          {
            "id": "b",
            "text": "Cloud Manager's Download Logs (or aio cloudmanager:tail-logs), which consolidate the service's logs across pods"
          },
          {
            "id": "c",
            "text": "The Dispatcher's local disk cache"
          },
          {
            "id": "d",
            "text": "The Package Manager UI"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "Your cloud site runs on several interchangeable server copies at once, and one of them threw an error — where do you actually go to find it?",
        "explain": "Adobe: AEMaaCS logs are consolidated into one log per service even when different pods write them, and each line carries a pod ID. One pod's view can miss the request.",
        "audit": {
          "ver": "corrected",
          "note": "Option reworded: there's no 'Log Viewer'; Adobe documents Download Logs and the aio CLI.",
          "src": [
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "a": "One pod's log can miss the request; it may have landed on another pod.",
          "c": "The cache holds cached files, not request logs.",
          "d": "Package Manager installs packages; it doesn't show request logs."
        }
      },
      {
        "id": "q18",
        "section": "S1",
        "type": "single",
        "stem": "A developer disabled a component via OSGi (removed its service registration) and needs to confirm it via the Felix Web Console.",
        "q": "Which console view shows a runtime-registered service and its state?",
        "options": [
          {
            "id": "a",
            "text": "The Components tab"
          },
          {
            "id": "b",
            "text": "The Bundle Resource Provider tab"
          },
          {
            "id": "c",
            "text": "Package Manager"
          },
          {
            "id": "d",
            "text": "CRXDE Lite"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You turned a piece of backend code off through the admin console — which tab actually confirms it's really off?",
        "explain": "The Components tab (Declarative Services) lists registered OSGi components with their state (active/disabled/unsatisfied) and lets you enable/disable them directly. Bundle Resource Provider is unrelated — it exposes bundle-embedded resources to the resource resolver.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Debugging AEM SDK: OSGi web console",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-sdk/osgi-web-consoles"
            }
          ]
        },
        "why": {
          "b": "Bundle Resource Provider exposes resources packed inside bundles; it doesn't show component state.",
          "c": "Package Manager installs content packages; it doesn't show OSGi component state.",
          "d": "CRXDE Lite browses the repository, not runtime OSGi services."
        }
      },
      {
        "id": "q19",
        "section": "S2",
        "type": "single",
        "gapTopic": "cfm",
        "stem": "A developer needs to programmatically read structured fields (e.g., a \"headline\" text field, an image reference) from a Content Fragment inside a servlet.",
        "q": "Which API is the correct fit?",
        "options": [
          {
            "id": "a",
            "text": "The Content Fragment API (com.adobe.cq.dam.cfm)"
          },
          {
            "id": "b",
            "text": "The general Asset API only"
          },
          {
            "id": "c",
            "text": "Direct JCR PropertyIterator traversal"
          },
          {
            "id": "d",
            "text": "The Replication API"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You've got structured content (a headline field, an image field) in a Content Fragment and need to read those fields in your own Java code — which toolkit is built for that?",
        "explain": "The Content Fragment API is purpose-built to read a fragment's model-defined elements/fields programmatically. The Asset API is for DAM asset metadata generally, not fragment-specific structured fields.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Customizing Content Fragments (API)",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/configuring-and-extending/content-fragments-customizing"
            }
          ]
        },
        "why": {
          "b": "The Asset API handles DAM assets in general, not a fragment's model-defined elements.",
          "c": "Adobe recommends the server-side Content Fragment API over reading the content structure directly.",
          "d": "The Replication API publishes content; it doesn't read fragment fields."
        }
      },
      {
        "id": "q20",
        "section": "S2",
        "type": "single",
        "gapTopic": "spa",
        "stem": "A React component in a SPA Editor-integrated app needs to be author-editable in-context, with its content driven by AEM.",
        "q": "What must the component do to participate?",
        "options": [
          {
            "id": "a",
            "text": "Use MapTo to bind it to a resource type, driven by the page model JSON"
          },
          {
            "id": "b",
            "text": "Use only client-side routing with no AEM integration"
          },
          {
            "id": "c",
            "text": "Disable server-side rendering entirely"
          },
          {
            "id": "d",
            "text": "Rely exclusively on the GraphQL endpoint"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You're building a React page AEM authors need to click into and edit directly — what has to be wired up so AEM knows which component maps to which content?",
        "explain": "The SPA Editor SDK maps JSON nodes in the AEM page model to React/Angular components via MapTo against a resource type — that's what makes the component both content-driven and in-context editable. Currency note: Adobe now lists the SPA Editor as deprecated for new projects (still supported for existing ones), steering new work toward the Universal Editor — know the mechanism for the exam, but don't start a new project on it.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Map SPA components to AEM components",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-with-aem-headless/spa-editor/react/map-components"
            },
            {
              "t": "AEMaaCS: SPA Editor Deprecation",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/hybrid/spa-editor-deprecation"
            }
          ]
        },
        "why": {
          "b": "With no AEM integration there's nothing for authors to edit in context.",
          "c": "Server-side rendering isn't what makes a component editable; MapTo is.",
          "d": "GraphQL is the headless delivery path, not SPA Editor in-context editing."
        }
      },
      {
        "id": "q21",
        "section": "S2",
        "type": "single",
        "gapTopic": "graphql",
        "stem": "A mobile app needs specific fields from a set of Content Fragments, fetched efficiently, with the query definition stored and reused server-side rather than sent raw each time.",
        "q": "Which approach fits?",
        "options": [
          {
            "id": "a",
            "text": "A persisted GraphQL query via /graphql/execute.json"
          },
          {
            "id": "b",
            "text": "The Query Builder JSON servlet"
          },
          {
            "id": "c",
            "text": "The Sling Model Exporter"
          },
          {
            "id": "d",
            "text": "JCR-SQL2 via the Query Builder debugger"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "A mobile app needs specific fields pulled efficiently, and you want the request reusable/cacheable server-side rather than typed fresh each time — what's that approach?",
        "explain": "Adobe: persisted queries are stored on the server and run with a GET to /graphql/execute.json/<config>/<query>, so responses can be cached at the Dispatcher and CDN. That's why Adobe recommends them over ad hoc POST queries.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation tightened to Adobe's reasoning.",
          "src": [
            {
              "t": "AEMaaCS: Persisted GraphQL queries",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/headless/graphql-api/persisted-queries"
            }
          ]
        },
        "why": {
          "b": "Query Builder searches the repository; it isn't a stored, reusable query for Content Fragment fields.",
          "c": "The Sling Model Exporter outputs a component's JSON, not a stored query over fragments.",
          "d": "JCR-SQL2 isn't stored server-side or cacheable the way persisted queries are."
        }
      },
      {
        "id": "q22",
        "section": "S2",
        "type": "single",
        "gapTopic": "i18n",
        "stem": "A component needs to output a translated label based on the current page's language root.",
        "q": "Which HTL mechanism is correct?",
        "options": [
          {
            "id": "a",
            "text": "The i18n global object / @ i18n expression option"
          },
          {
            "id": "b",
            "text": "Hardcoded strings switched with Java if/else per locale"
          },
          {
            "id": "c",
            "text": "A Query Builder lookup against the dictionary"
          },
          {
            "id": "d",
            "text": "Translation handled only inside the Sling Model, never in HTL"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You need a label on the page to automatically show up in the visitor's language — what's the built-in way to do that instead of hardcoding text?",
        "explain": "HTL's i18n option translates the string. Adobe's i18n docs say the language comes from the user's account preference or the locale of the requested page. Dictionaries are Sling i18n nodes (mix:language with jcr:language) found by search, wherever they're stored. Hand-written locale branching isn't the mechanism.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation fixed: the old one claimed dictionaries live under /apps or /conf.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            },
            {
              "t": "AEMaaCS: Internationalizing UI Strings",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/configuring-and-extending/internationalization/dev"
            },
            {
              "t": "Apache Sling: i18n support",
              "u": "https://sling.apache.org/documentation/bundles/internationalization-support-i18n.html"
            }
          ]
        },
        "why": {
          "b": "Hand-written locale branching isn't the mechanism; HTL's i18n option looks up the dictionary.",
          "c": "Dictionaries are found by Sling i18n automatically; you don't query them yourself.",
          "d": "HTL has its own i18n option, so translation isn't confined to the model."
        }
      },
      {
        "id": "q23",
        "section": "S1",
        "type": "single",
        "gapTopic": "repoinit",
        "stem": "A developer needs a service user created with specific ACLs, applied before any content packages install as part of deployment.",
        "q": "Where is this defined?",
        "options": [
          {
            "id": "a",
            "text": "A repoinit script in a RepositoryInitializer OSGi config, deployed with the project"
          },
          {
            "id": "b",
            "text": "Manually via useradmin after deployment finishes"
          },
          {
            "id": "c",
            "text": "Inside the component's dialog.xml"
          },
          {
            "id": "d",
            "text": "Inside filter.xml only, with no separate script"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "Before any content installs, you need a service account created with specific permissions, ready to go — what script handles that?",
        "explain": "Adobe's service-user tutorial creates the user and its ACLs with a repoinit script in an OSGi config. Sling runs repoinit while it sets up the repository, before the repository service is registered, so the user exists before other code uses the repository. Manual setup isn't reproducible.",
        "audit": {
          "ver": "corrected",
          "note": "Answer reworded: repoinit ships as an OSGi config, not 'bundle provisioning'.",
          "src": [
            {
              "t": "AEMaaCS: Service Users (tutorial)",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/developing/advanced/service-users"
            },
            {
              "t": "Apache Sling: Repository Initialization",
              "u": "https://sling.apache.org/documentation/bundles/repository-initialization.html"
            }
          ]
        },
        "why": {
          "b": "Manual setup isn't reproducible, and it happens after deployment, not before.",
          "c": "A dialog defines authoring fields; it can't create users or ACLs.",
          "d": "filter.xml only controls which paths a package covers; it creates nothing."
        }
      },
      {
        "id": "q24",
        "section": "S1",
        "type": "single",
        "gapTopic": "cloudmanager",
        "stem": "A code commit fails the Cloud Manager pipeline at the Code Quality stage.",
        "q": "What is the most likely cause?",
        "options": [
          {
            "id": "a",
            "text": "A Critical quality gate failing, such as a Security rating below B"
          },
          {
            "id": "b",
            "text": "A missing OSGi bundle at runtime"
          },
          {
            "id": "c",
            "text": "A DNS misconfiguration"
          },
          {
            "id": "d",
            "text": "An expired SSL certificate"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "Your code got rejected by the pipeline before it even reached a real environment — what kind of automated check is probably why?",
        "explain": "Adobe: code quality testing runs SonarQube plus OakPAL. Critical issues (Security rating below B, Reliability below D) fail the pipeline immediately; Important ones pause it for an override. Runtime and infrastructure problems aren't checked here.",
        "audit": {
          "ver": "corrected",
          "note": "Answer reworded to Adobe's gate terms.",
          "src": [
            {
              "t": "Cloud Manager: Code Quality Testing",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/test-results/code-quality-testing.html"
            }
          ]
        },
        "why": {
          "b": "Code quality runs before deployment, so runtime bundle problems aren't checked here.",
          "c": "DNS is infrastructure; the code quality step scans code.",
          "d": "SSL certificates are infrastructure; the code quality step scans code."
        }
      },
      {
        "id": "q25",
        "section": "S3",
        "type": "single",
        "gapTopic": "testing",
        "stem": "A developer wants to unit test a Sling Model's logic without deploying to a running AEM instance.",
        "q": "Which tool is the standard fit?",
        "options": [
          {
            "id": "a",
            "text": "AEM Mocks (io.wcm.testing / Sling Mocks) with JUnit"
          },
          {
            "id": "b",
            "text": "Selenium"
          },
          {
            "id": "c",
            "text": "Postman"
          },
          {
            "id": "d",
            "text": "JMeter"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You want to test your Java logic without spinning up a whole AEM server for one test — what's the standard toolkit?",
        "explain": "AEM Mocks (built on Sling Mocks) simulates a minimal resource/request context in-memory so Sling Models, servlets, and similar classes can be unit tested with JUnit — no running instance required. The other tools are for UI, manual API, or load testing respectively, not unit tests.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "WKND tutorial: Unit Testing",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/unit-testing.html?lang=en"
            }
          ]
        },
        "why": {
          "b": "Selenium drives a browser for UI tests and needs a running site.",
          "c": "Postman sends manual API requests to a running instance.",
          "d": "JMeter is for load testing."
        }
      },
      {
        "id": "q26",
        "section": "S3",
        "type": "single",
        "gapTopic": "querybuilder",
        "stem": "A Query Builder query behind a paginated list is slow because it counts every match to report a total.",
        "q": "Which setting addresses that?",
        "options": [
          {
            "id": "a",
            "text": "p.guessTotal on the Query Builder query"
          },
          {
            "id": "b",
            "text": "Rewriting it in JCR-SQL2 and adding guessTotal there"
          },
          {
            "id": "c",
            "text": "Setting reindex=true on the matching index"
          },
          {
            "id": "d",
            "text": "Raising the Dispatcher cache level"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "A search behind a paged list is slow because it counts every result for the total. What setting stops the counting?",
        "explain": "Adobe's slow-query guide: guessTotal stops Query Builder from counting every result, and it doesn't apply to JCR-SQL2 or XPath. Reindexing and Dispatcher settings don't change result counting.",
        "audit": {
          "ver": "corrected",
          "note": "Rewritten: Adobe's docs don't back the old 'JCR-SQL2 joins are more efficient' claim.",
          "src": [
            {
              "t": "AEM 6.5: Troubleshooting Slow Queries",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/bestpractices/troubleshooting-slow-queries"
            }
          ]
        },
        "why": {
          "b": "guessTotal is Query Builder-specific; it doesn't apply to JCR-SQL2.",
          "c": "Reindexing doesn't change how results are counted.",
          "d": "Dispatcher caching doesn't change how the query counts results."
        }
      },
      {
        "id": "q27",
        "section": "S4",
        "type": "single",
        "stem": "Adobe pushes a Maintenance Release to an AEMaaCS environment.",
        "q": "What should the developer's posture be?",
        "options": [
          {
            "id": "a",
            "text": "Verify critical customizations still behave correctly against the updated environment"
          },
          {
            "id": "b",
            "text": "Manually disable the release"
          },
          {
            "id": "c",
            "text": "Nothing — Maintenance Releases can never affect custom code"
          },
          {
            "id": "d",
            "text": "Apply a manual 6.5-style patch instead"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "Adobe silently patches your cloud environment — should you assume nothing could break, or is there something worth double-checking?",
        "explain": "Even though Adobe manages and applies Maintenance Releases automatically, they carry bug fixes/security patches that can interact with customizations — verifying critical custom functionality afterward (ideally against staging first) is the responsible posture, not assuming zero impact.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: AEM Version Updates",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/deploying/aem-version-updates"
            }
          ]
        },
        "why": {
          "b": "Adobe applies maintenance updates automatically; you can't opt out.",
          "c": "Updates can affect customizations, which is why Adobe tells you to include tests for critical functionality.",
          "d": "On AEMaaCS, Adobe applies updates through the pipeline; you don't patch it yourself."
        }
      },
      {
        "id": "q28",
        "section": "S4",
        "type": "single",
        "stem": "In an AEM 6.5 author cluster, one instance is recognized as the cluster's leader for topology purposes.",
        "q": "Which service handles cluster membership and the leader?",
        "options": [
          {
            "id": "a",
            "text": "Apache Sling Discovery"
          },
          {
            "id": "b",
            "text": "Manual configuration only, with no automatic mechanism"
          },
          {
            "id": "c",
            "text": "The Dispatcher"
          },
          {
            "id": "d",
            "text": "Package Manager"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "In a cluster of author servers, one is recognized as the leader. Which built-in service handles membership and the leader?",
        "explain": "Adobe: the Discovery Service runs on every instance, each cluster has one leader, and a new leader is chosen automatically when the old one leaves.",
        "audit": {
          "ver": "corrected",
          "note": "Stem trimmed to what Adobe documents (leader per cluster via Discovery).",
          "src": [
            {
              "t": "AEM 6.5: Offloading Jobs",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/offloading.html?lang=en"
            }
          ]
        },
        "why": {
          "b": "It's automatic: a new leader is chosen when the old one leaves.",
          "c": "The Dispatcher caches and filters requests; it doesn't manage cluster membership.",
          "d": "Package Manager installs packages; it has no role in topology."
        }
      },
      {
        "id": "q29",
        "section": "S5",
        "type": "single",
        "stem": "An AEM component renders completely blank on the page. No exceptions appear in error.log, and there are no HTL errors.",
        "q": "What is the most useful next diagnostic step?",
        "options": [
          {
            "id": "a",
            "text": "Check the resource's actual properties in CRXDE Lite — confirm the expected content is really there"
          },
          {
            "id": "b",
            "text": "Restart the instance"
          },
          {
            "id": "c",
            "text": "Clear the browser cache"
          },
          {
            "id": "d",
            "text": "Rebuild the component from scratch"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "A component renders as literally nothing, with no error anywhere — what's the most useful first thing to actually check?",
        "explain": "Blank rendering with zero errors anywhere usually traces back to missing or empty content (an unset property, wrong path) rather than a code defect — checking the actual resource is a faster, more targeted diagnostic than restarting or rebuilding.",
        "audit": {
          "ver": "partial",
          "note": "Reasoning item (check the content before rebuilding). No single Adobe page states this rule.",
          "src": [
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "b": "Restarting is an action, not evidence, and blank output with no errors usually means missing content.",
          "c": "A browser cache wouldn't produce a blank component with clean server logs.",
          "d": "Rebuilding before you know the cause skips the evidence step."
        }
      },
      {
        "id": "q30",
        "section": "S5",
        "type": "single",
        "stem": "A custom workflow process step fails intermittently under load, and the log shows JCR lock timeout exceptions.",
        "q": "Which log would show this most directly?",
        "options": [
          {
            "id": "a",
            "text": "error.log"
          },
          {
            "id": "b",
            "text": "access.log"
          },
          {
            "id": "c",
            "text": "audit.log"
          },
          {
            "id": "d",
            "text": "dispatcher log"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "A workflow step randomly fails only under load, mentioning a \"lock timeout\" — which log would actually show that?",
        "explain": "Lock timeout exceptions are Java exceptions raised inside the running application and are captured in error.log — access/audit/dispatcher logs don't record internal repository-level exceptions like this.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "b": "access.log records who requested which URL, not Java exceptions.",
          "c": "audit.log records who changed content, not exceptions.",
          "d": "The Dispatcher log records cache and filter decisions, not repository exceptions."
        }
      },
      {
        "id": "q31",
        "section": "S1",
        "type": "single",
        "stem": "A developer creates a proxy for the Core Teaser and gives it its own cq:dialog with one extra field, expecting the Core dialog's fields to appear too.",
        "q": "Where must sling:resourceSuperType be set for the dialogs to merge?",
        "options": [
          {
            "id": "a",
            "text": "On the proxy's cq:dialog node, pointing to the Core dialog"
          },
          {
            "id": "b",
            "text": "On the proxy component node, pointing to the Core Teaser"
          },
          {
            "id": "c",
            "text": "On the template's structure node"
          },
          {
            "id": "d",
            "text": "Nowhere; dialogs never merge"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "Your copy of a core component has its own dialog, and you want the original's fields included too. Where does the 'inherit from' property go?",
        "explain": "Adobe: to extend a component, set sling:resourceSuperType on your component's definition. The Sling Resource Merger then merges cq:dialog along the resource-type hierarchy, so your dialog defines only what it adds or changes. In Adobe's example, the dialog node carries no supertype.",
        "audit": {
          "ver": "corrected",
          "note": "Answer changed: sling:resourceSuperType goes on the component node, not the dialog.",
          "src": [
            {
              "t": "Extend a Core Component (tutorial)",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-learn/spa-react-tutorial/extend-component.html?lang=en"
            },
            {
              "t": "AEMaaCS: Sling Resource Merger",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/sling-resource-merger"
            },
            {
              "t": "Using Core Components",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/get-started/using"
            }
          ]
        },
        "why": {
          "a": "Adobe's example sets the supertype on the component, and the dialog node carries none.",
          "c": "Template structure has nothing to do with component inheritance.",
          "d": "Dialogs do merge, through the Sling Resource Merger along the resource-type hierarchy."
        }
      },
      {
        "id": "q32",
        "section": "S2",
        "type": "single",
        "stem": "A Sling Model field needs to be injected from a resource property whose JCR name (\"jcr:title\") differs from the Java field name (\"title\").",
        "q": "How is this declared?",
        "options": [
          {
            "id": "a",
            "text": "@ValueMapValue(name = \"jcr:title\")"
          },
          {
            "id": "b",
            "text": "@Inject(field = \"jcr:title\")"
          },
          {
            "id": "c",
            "text": "@Named alone, with no other annotation"
          },
          {
            "id": "d",
            "text": "@PostConstruct"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "Your Java field is named \"title\" but the actual content property is \"jcr:title\" — how do you bridge that name mismatch for the injector?",
        "explain": "@ValueMapValue accepts a name argument to point at a differently-named property. @PostConstruct is for post-injection computed logic, not property naming, and @Inject/@Named aren't the standard pairing for this in Sling Models.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Sling Models @ValueMapValue javadoc",
              "u": "https://sling.apache.org/apidocs/sling14/org/apache/sling/models/annotations/injectorspecific/ValueMapValue.html"
            },
            {
              "t": "Apache Sling Models",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"
            }
          ]
        },
        "why": {
          "b": "@Inject has no field attribute; the name goes in @ValueMapValue's name.",
          "c": "@Named sets a name for an injection; alone it doesn't make the field injectable from the value map.",
          "d": "@PostConstruct runs a method after injection; it doesn't rename a property."
        }
      },
      {
        "id": "q33",
        "section": "S3",
        "type": "single",
        "stem": "Reviewing a dispatcher.any farm config, a developer sees a /statfileslevel property set under /cache.",
        "q": "What does this property control?",
        "options": [
          {
            "id": "a",
            "text": "How many directory levels up the dispatcher checks for a newer .stat file to determine cache staleness"
          },
          {
            "id": "b",
            "text": "The SSL certificate chain depth"
          },
          {
            "id": "c",
            "text": "The number of retry attempts on a failed backend request"
          },
          {
            "id": "d",
            "text": "Log file rotation depth"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "There's a dispatcher setting called statfileslevel — what does that number actually control?",
        "explain": "/statfileslevel controls how many parent directory levels the dispatcher walks up looking for a .stat file that would mark cached content under that path as invalidated/stale.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Dispatcher: Configure AEM Dispatcher",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration"
            }
          ]
        },
        "why": {
          "b": "It has nothing to do with SSL.",
          "c": "It doesn't control retries.",
          "d": "It doesn't control logging."
        }
      },
      {
        "id": "q34",
        "section": "S4",
        "type": "single",
        "stem": "A team wants a non-production AEMaaCS Publish environment to scale down overnight to save cost.",
        "q": "Is this something a developer configures directly?",
        "options": [
          {
            "id": "a",
            "text": "No — scaling in AEMaaCS is managed by the platform, not hand-configured by developers"
          },
          {
            "id": "b",
            "text": "Yes, via dispatcher.any"
          },
          {
            "id": "c",
            "text": "Yes, via an OSGi configuration"
          },
          {
            "id": "d",
            "text": "Yes, via a custom Sling servlet"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You want a non-prod cloud environment to spin down overnight to save money — do you configure that yourself, or does the platform handle it?",
        "explain": "Autoscaling and capacity management in AEMaaCS are handled by the managed platform itself — a developer's job is to understand the topology exists, not to hand-tune scaling through dispatcher config, OSGi, or custom code.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Architecture",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/core-concepts/architecture.html?lang=en"
            }
          ]
        },
        "why": {
          "b": "dispatcher.any configures caching and filtering, not pod counts.",
          "c": "OSGi configs set service settings, not platform scaling.",
          "d": "Custom code can't scale the platform; Adobe manages pod counts."
        }
      },
      {
        "id": "q35",
        "section": "S2",
        "type": "single",
        "stem": "A developer is registering a new Sling Servlet as an OSGi component and needs requests to it to automatically respect the AEM permissions of the resource being requested.",
        "q": "Which registration approach should be used, and why?",
        "options": [
          {
            "id": "a",
            "text": "sling.servlet.paths — path-based servlets inherit the requested resource's ACLs automatically"
          },
          {
            "id": "b",
            "text": "sling.servlet.resourceTypes — the Sling Engine applies the resource's access control when resolving by resource type"
          },
          {
            "id": "c",
            "text": "Either works identically for permission purposes"
          },
          {
            "id": "d",
            "text": "Neither — permissions must always be checked manually inside the servlet"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You're registering a backend endpoint (a servlet) and want it to automatically respect who's allowed to see what — which registration style makes that happen for free?",
        "explain": "Registering by resourceType ties the servlet to a specific resource, so the Sling Engine enforces that resource's ACLs automatically — a user without read access can't invoke it. Path-based registration does not inherit any resource's ACLs the same way, which is why resourceType is the generally preferred, more secure approach.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Apache Sling: Servlets and Scripts",
              "u": "https://sling.apache.org/documentation/the-sling-engine/servlets.html"
            }
          ]
        },
        "why": {
          "a": "Backwards: Sling's docs say path-bound servlets can't be access-controlled with repository ACLs.",
          "c": "They differ: path binding loses repository ACL control, which is why Sling recommends resource types.",
          "d": "Resource-type binding lets the repository ACLs apply, so you don't have to check by hand."
        }
      },
      {
        "id": "q36",
        "section": "S2",
        "type": "single",
        "stem": "A component's client library needs a utility library's JS bundled directly into its own output, to minimize the number of HTTP requests on the page.",
        "q": "Which clientlib property achieves this?",
        "options": [
          {
            "id": "a",
            "text": "dependencies"
          },
          {
            "id": "b",
            "text": "embed"
          },
          {
            "id": "c",
            "text": "allowProxy"
          },
          {
            "id": "d",
            "text": "categories"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You want another library's CSS/JS squished directly into your own file (one network request) instead of loading as a separate file — which clientlib setting does that?",
        "explain": "Adobe: embed copies the embedded code into this library's output, so one request serves both. dependencies keeps them separate, and the page links to each dependency's files. allowProxy and categories don't combine anything.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation fixed: the 'transitive' claims aren't in Adobe's docs.",
          "src": [
            {
              "t": "AEMaaCS: Client-Side Libraries",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/clientlibs"
            }
          ]
        },
        "why": {
          "a": "dependencies keeps libraries separate; the page links each one's files, so more requests.",
          "c": "allowProxy lets /apps clientlibs be served from /etc.clientlibs; it doesn't combine anything.",
          "d": "categories names the library; it doesn't bundle another one in."
        }
      },
      {
        "id": "q37",
        "section": "S2",
        "type": "single",
        "stem": "A Sling Model needs to compute a derived field (e.g. a formatted date string) once, immediately after all injected fields have been populated.",
        "q": "Which annotation is used for this?",
        "options": [
          {
            "id": "a",
            "text": "@PostConstruct"
          },
          {
            "id": "b",
            "text": "@Optional"
          },
          {
            "id": "c",
            "text": "@Via"
          },
          {
            "id": "d",
            "text": "@Self"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You need a Java field calculated once, right after all the real data has loaded in — what annotation marks a method to run at exactly that moment?",
        "explain": "@PostConstruct marks a method to run after injection completes — exactly where derived/computed fields belong. @Optional, @Via, and @Self are injection-related annotations, not post-injection lifecycle hooks.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "WKND tutorial: Custom Component (Adobe)",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/custom-component"
            },
            {
              "t": "Apache Sling Models",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"
            }
          ]
        },
        "why": {
          "b": "@Optional makes a field optional; it doesn't run code after injection.",
          "c": "@Via changes which object a field is injected from.",
          "d": "@Self injects the adaptable itself."
        }
      },
      {
        "id": "q38",
        "section": "S2",
        "type": "single",
        "stem": "A developer wants each item in a list to become its own <li> element, without an extra wrapping tag repeated per item.",
        "q": "Which HTL statement should be used?",
        "options": [
          {
            "id": "a",
            "text": "data-sly-repeat — repeats the host element itself once per item"
          },
          {
            "id": "b",
            "text": "data-sly-list — keeps a single host element, repeating only its inner content"
          },
          {
            "id": "c",
            "text": "data-sly-test"
          },
          {
            "id": "d",
            "text": "data-sly-use"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You're looping through a list in HTL and want each item to become its own separate <li> tag, not one <li> wrapping everything — which loop directive does that?",
        "explain": "data-sly-repeat duplicates the element it's declared on for every item — exactly what's needed for one <li> per item. data-sly-list instead keeps a single host element and repeats only what's inside it, useful when you don't want the wrapping tag duplicated.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "b": "data-sly-list keeps one host element and repeats only its content, so you'd get one <li> with everything inside.",
          "c": "data-sly-test shows or hides an element; it doesn't loop.",
          "d": "data-sly-use loads a model; it doesn't loop."
        }
      },
      {
        "id": "q39",
        "section": "S2",
        "type": "single",
        "stem": "A team is setting up structured content for reuse and needs to define the schema (fields, data types) once, then create multiple content items that follow it.",
        "q": "What defines the schema, and what is each individual content item called?",
        "options": [
          {
            "id": "a",
            "text": "A Content Fragment Model defines the schema; each item created from it is a Content Fragment"
          },
          {
            "id": "b",
            "text": "A Content Fragment defines the schema; each item created from it is a Content Fragment Model"
          },
          {
            "id": "c",
            "text": "Both terms refer to the same thing"
          },
          {
            "id": "d",
            "text": "The schema is defined in a Content Fragment's dialog.xml"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "There's a \"template\" for structured content (the fields and their types) and then the actual pieces of content built from that template — what's each one called?",
        "explain": "A Content Fragment Model is the reusable schema definition. A Content Fragment is an individual content instance authored against that model — the same relationship as a class and its instances.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Customizing Content Fragments (API)",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/configuring-and-extending/content-fragments-customizing"
            }
          ]
        },
        "why": {
          "b": "Reversed: the model is the schema, and fragments are created from it.",
          "c": "They're different: a model defines the structure, a fragment is one item built from it.",
          "d": "The schema is the Content Fragment Model, not a dialog."
        }
      },
      {
        "id": "q40",
        "section": "S2",
        "type": "single",
        "stem": "A Sling Model's JSON export (via .model.json) needs a field's JSON property name to differ from the Java field name.",
        "q": "Which annotation controls this in the exported JSON specifically?",
        "options": [
          {
            "id": "a",
            "text": "@JsonProperty(\"customName\")"
          },
          {
            "id": "b",
            "text": "@ValueMapValue(name = \"customName\")"
          },
          {
            "id": "c",
            "text": "@Optional"
          },
          {
            "id": "d",
            "text": "@Model(adaptables = ...)"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "Your Java field is called \"headline\" but you want the exported JSON to show it as \"title\" — which annotation controls the name in the JSON output specifically (not the repository property)?",
        "explain": "@JsonProperty (Jackson) controls the name used in the exported JSON output specifically — separate from @ValueMapValue's name, which controls which repository property is read. The two solve different problems and can be combined.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Enabling JSON Export",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/components-templates/enabling-json-exporter"
            }
          ]
        },
        "why": {
          "b": "@ValueMapValue's name picks which repository property is read, not the JSON key.",
          "c": "@Optional is about injection, not JSON names.",
          "d": "adaptables sets what the model adapts from."
        }
      },
      {
        "id": "q41",
        "section": "S2",
        "type": "single",
        "stem": "An author on a Live Copy page wants one specific component's content to diverge permanently from the blueprint, without breaking sync for the rest of the page.",
        "q": "What should the author do?",
        "options": [
          {
            "id": "a",
            "text": "Break/cancel inheritance on that specific component"
          },
          {
            "id": "b",
            "text": "Delete the Live Copy relationship for the entire page"
          },
          {
            "id": "c",
            "text": "Exclude the whole page from the Rollout Configuration"
          },
          {
            "id": "d",
            "text": "Convert the page to a Language Copy"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "On a page that's synced from a master page (Live Copy), you want just ONE component to stop syncing and go its own way, without breaking sync for the rest — what do you do to just that component?",
        "explain": "MSM lets inheritance be cancelled at a granular level, down to an individual component, so just that piece stops syncing from the blueprint while the rest of the page continues to inherit normally.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Multi Site Manager and Live Copy",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/administering/reusing-content/msm/overview"
            }
          ]
        },
        "why": {
          "b": "That ends sync for the whole page; you only want one component to diverge.",
          "c": "Rollout configuration exclusions are site-wide settings, and the whole page would stop syncing.",
          "d": "A language copy is a translation structure, not a way to cancel inheritance."
        }
      },
      {
        "id": "q42",
        "section": "S2",
        "type": "single",
        "stem": "A developer is building a new Editable Template and needs authors to be able to add/remove components in some regions but not others.",
        "q": "Which template concept controls this?",
        "options": [
          {
            "id": "a",
            "text": "Locking/unlocking components in the template's Structure; authors change only unlocked parts, and adding components needs a container (paragraph system)"
          },
          {
            "id": "b",
            "text": "The template's cq:allowedPaths property"
          },
          {
            "id": "c",
            "text": "The Dispatcher farm config"
          },
          {
            "id": "d",
            "text": "The component's own dialog"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You're building a page template where some parts are fixed and other parts authors can change. What controls that split?",
        "explain": "Adobe: Structure components can't be moved or deleted on pages. Unlocking one sets editable=true, and authors can edit only editable nodes and their children. Adding and removing components needs a paragraph system (the Layout Container). Initial Content only pre-fills new pages.",
        "audit": {
          "ver": "corrected",
          "note": "Answer reworded: it's locked vs unlocked Structure plus a paragraph system, not 'Initial Content areas'.",
          "src": [
            {
              "t": "AEM: Editable Page Templates",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/templates/page-templates-editable.html?lang=en"
            }
          ]
        },
        "why": {
          "b": "That property doesn't control which regions authors can change.",
          "c": "The Dispatcher has nothing to do with authoring.",
          "d": "A component's dialog edits that component; it doesn't set what's locked on a template."
        }
      },
      {
        "id": "q43",
        "section": "S5",
        "type": "single",
        "stem": "An AEM author instance becomes unresponsive under load, with some requests hanging indefinitely.",
        "q": "What is the standard diagnostic artifact to capture, and where?",
        "options": [
          {
            "id": "a",
            "text": "Several thread dumps taken a few seconds apart"
          },
          {
            "id": "b",
            "text": "A component dialog export"
          },
          {
            "id": "c",
            "text": "The Package Manager's install history"
          },
          {
            "id": "d",
            "text": "A Content Fragment Model export"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "The server is hanging and some requests never finish — what do you grab to see what every thread is actually doing at that moment?",
        "explain": "Adobe's thread-dump KB: request threads carry their start time in their name, so comparing dumps shows long-running requests and threads waiting on a lock. The other artifacts say nothing about hung threads.",
        "audit": {
          "ver": "corrected",
          "note": "Answer reworded: Adobe's KB doesn't give the Felix console path.",
          "src": [
            {
              "t": "KB: AEM Thread Dump Analysis",
              "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-16458"
            }
          ]
        },
        "why": {
          "b": "A dialog export says nothing about hung threads.",
          "c": "Install history doesn't show what's running right now.",
          "d": "A model export says nothing about hung threads."
        }
      },
      {
        "id": "q44",
        "section": "S5",
        "type": "single",
        "stem": "An AEM instance repeatedly crashes with OutOfMemoryError in error.log.",
        "q": "Which diagnostic artifact specifically helps identify what's consuming memory?",
        "options": [
          {
            "id": "a",
            "text": "A heap dump, analyzed for retained objects and their sizes"
          },
          {
            "id": "b",
            "text": "A thread dump only"
          },
          {
            "id": "c",
            "text": "The dispatcher access log"
          },
          {
            "id": "d",
            "text": "The Replication Agent status page"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "The server keeps crashing with an \"out of memory\" error — what do you capture to actually see what's eating the memory?",
        "explain": "A heap dump captures the state of every object on the JVM heap, letting you identify what's actually consuming memory. A thread dump shows what threads are doing, not memory contents, so it doesn't directly answer an OOM question.",
        "audit": {
          "ver": "partial",
          "note": "Adobe's KB says to capture a heap dump when a memory problem is suspected. How to analyze it wasn't in the pages checked.",
          "src": [
            {
              "t": "KB: AEM Thread Dump Analysis",
              "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-16458"
            }
          ]
        },
        "why": {
          "b": "A thread dump shows what threads are doing, not what's in memory.",
          "c": "The Dispatcher log records requests, not memory use.",
          "d": "Replication status doesn't show what's using memory."
        }
      },
      {
        "id": "q45",
        "section": "S5",
        "type": "single",
        "stem": "A developer suspects an unindexed or inefficient query is slowing down a page.",
        "q": "Where would this typically first surface as a warning?",
        "options": [
          {
            "id": "a",
            "text": "The AEM error.log / query log, which flags traversal or slow queries"
          },
          {
            "id": "b",
            "text": "The dispatcher cache"
          },
          {
            "id": "c",
            "text": "The Replication Agent queue"
          },
          {
            "id": "d",
            "text": "The Package Manager"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You think a slow page is caused by a bad/missing search index — where would that usually show up as a warning first?",
        "explain": "Oak logs a warning for queries that traverse the whole repository (no matching index) or run slowly — this surfaces in the standard logs before you'd reach for deeper query-performance tooling.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEM 6.5: Troubleshooting Slow Queries",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/bestpractices/troubleshooting-slow-queries"
            }
          ]
        },
        "why": {
          "b": "The Dispatcher caches responses; it doesn't run or log queries.",
          "c": "Replication queues carry content to Publish; they don't flag queries.",
          "d": "Package Manager installs packages; it doesn't log queries."
        }
      },
      {
        "id": "q46",
        "section": "S5",
        "type": "single",
        "stem": "A specific workflow instance appears stuck and never completes.",
        "q": "Where should a developer look first to diagnose that specific instance?",
        "options": [
          {
            "id": "a",
            "text": "The workflow consoles: Instances to find it, Failures for its failure details and history"
          },
          {
            "id": "b",
            "text": "The Package Manager"
          },
          {
            "id": "c",
            "text": "The Dispatcher log"
          },
          {
            "id": "d",
            "text": "CRXDE Lite's node type registry"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "One specific workflow (like an approval process) is stuck — where do you go to look at that one run and see where it's stuck?",
        "explain": "Adobe: Tools > Workflow > Instances lists running instances; Failures shows the failure message, step and stack, with Open History, Retry Step and Terminate.",
        "audit": {
          "ver": "corrected",
          "note": "Answer extended with the Failures console Adobe documents.",
          "src": [
            {
              "t": "AEMaaCS: Administering Workflow Instances",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/administering/workflows-administering"
            }
          ]
        },
        "why": {
          "b": "Package Manager has nothing to do with running workflows.",
          "c": "Workflows run inside AEM; the Dispatcher never sees them.",
          "d": "Node type definitions don't show workflow progress."
        }
      },
      {
        "id": "q47",
        "section": "S5",
        "type": "single",
        "stem": "A component throws a 500 error, and error.log shows a long stack trace with multiple \"Caused by:\" sections.",
        "q": "Which part of the trace usually points to the actual root cause?",
        "options": [
          {
            "id": "a",
            "text": "The innermost/last \"Caused by:\" section, closest to where the original exception originated"
          },
          {
            "id": "b",
            "text": "Always the very first line of the entire trace"
          },
          {
            "id": "c",
            "text": "Whichever line mentions the servlet class"
          },
          {
            "id": "d",
            "text": "The timestamp only"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You get a big error with several \"Caused by:\" sections stacked on top of each other — which one is actually the real root cause?",
        "explain": "Java exception chains wrap the original cause in outer exceptions as they propagate up; the deepest \"Caused by:\" is closest to where things actually went wrong, while the top of the trace is often just outer framework code that caught and rethrew it.",
        "audit": {
          "ver": "partial",
          "note": "General Java behavior, not an Adobe topic. No Adobe page covers it.",
          "src": [
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "b": "The top is often the outer code that caught and rethrew the exception.",
          "c": "The servlet line is usually where the failure surfaced, not where it started.",
          "d": "A timestamp tells you when, not why."
        }
      },
      {
        "id": "q48",
        "section": "S3",
        "type": "single",
        "stem": "A Maven multi-module AEM project includes core, ui.apps, ui.content, ui.config, and an \"all\" module.",
        "q": "What is the purpose of the \"all\" module?",
        "options": [
          {
            "id": "a",
            "text": "It aggregates the other modules into a single deployable content package"
          },
          {
            "id": "b",
            "text": "It replaces the need for ui.apps entirely"
          },
          {
            "id": "c",
            "text": "It only contains front-end assets"
          },
          {
            "id": "d",
            "text": "It is where OSGi configs must be defined instead of ui.config"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "There's an \"all\" module in the project alongside core/ui.apps/ui.content — what's it actually for?",
        "explain": "The \"all\" module packages the other modules together into one deployable artifact — it doesn't replace any of them, it bundles them for a single deployment step.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Using the AEM Project Archetype",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/archetype/using"
            }
          ]
        },
        "why": {
          "b": "It doesn't replace ui.apps; it embeds it with the other modules.",
          "c": "It isn't front-end only; it packages every compiled module.",
          "d": "OSGi configs still go in ui.config; all just bundles everything."
        }
      },
      {
        "id": "q49",
        "section": "S3",
        "type": "single",
        "stem": "A team's code passes local review and is committed to the tracked branch in an AEMaaCS Cloud Manager pipeline.",
        "q": "What generally has to happen before that code can reach production?",
        "options": [
          {
            "id": "a",
            "text": "It must pass automated build and Code Quality gates, then typically deploy to a staging environment before promotion to production"
          },
          {
            "id": "b",
            "text": "It deploys directly to production on every commit with no intermediate stage"
          },
          {
            "id": "c",
            "text": "Only a manual code review is required, no automated pipeline"
          },
          {
            "id": "d",
            "text": "It bypasses Cloud Manager entirely for production deployments"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "Your code just got committed and passed review — does it go straight to the live production site, or does something else have to happen first?",
        "explain": "Cloud Manager pipelines run automated build and quality-gate checks and typically move code through non-production environments before a (often manually approved) promotion to production — commits don't go straight to production untested.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Deploying Your Code",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/deploy-code"
            }
          ]
        },
        "why": {
          "b": "Production pipelines deploy to Stage first and promote only after validation.",
          "c": "Cloud Manager runs automated build, code quality and test steps.",
          "d": "Production deployments go through Cloud Manager's pipeline."
        }
      },
      {
        "id": "q50",
        "section": "S1",
        "type": "single",
        "stem": "A content author wants a specific page to also be reachable at a short, memorable URL, without engaging the development team.",
        "q": "Which mechanism fits, and why?",
        "options": [
          {
            "id": "a",
            "text": "sling:vanityPath property set directly on the page node — author-manageable per page"
          },
          {
            "id": "b",
            "text": "An entry under /etc/map — requires developer/config-managed setup"
          },
          {
            "id": "c",
            "text": "A dispatcher filter rule"
          },
          {
            "id": "d",
            "text": "A Sling Servlet registered by path"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "A content editor wants a page reachable at a short custom URL, without asking a developer — what's the author-friendly way to do that?",
        "explain": "sling:vanityPath is set directly on the content node and is meant to be author-manageable per page. /etc/map mappings are a separate, developer-managed configuration tree typically used for broader URL structure or domain-level rewriting, not one-off per-page vanity URLs.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Dispatcher Vanity URLs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/ams/dispatcher/disp-vanity-url"
            },
            {
              "t": "Apache Sling: Mappings for Resource Resolution",
              "u": "https://sling.apache.org/documentation/the-sling-engine/mappings-for-resource-resolution.html"
            }
          ]
        },
        "why": {
          "b": "/etc/map is a configuration tree, not something an author edits on one page.",
          "c": "Dispatcher filters allow or block requests; they don't create new URLs for pages.",
          "d": "A servlet is code the development team would have to write and deploy."
        }
      }
    ],
    Yp = [
      {
        term: "sling:resourceType",
        def: 'The property on a content node that says which component/script should render it \u2014 like a "type" label.',
      },
      {
        term: "sling:resourceSuperType",
        def: "The parent type a component inherits from; its scripts and dialog are added to the lookup and merge chain.",
      },
      {
        term: "/apps",
        def: "Your project's own code folder \u2014 checked first before AEM's built-in code.",
      },
      {
        term: "/libs",
        def: "AEM's built-in, out-of-the-box code folder \u2014 checked only if /apps has nothing.",
      },
      {
        term: "OSGi",
        def: "The plug-in/module system AEM is built on \u2014 how AEM loads and configures independent chunks of backend code.",
      },
      {
        term: "Felix console",
        def: "AEM's built-in admin dashboard for OSGi \u2014 where you see/toggle backend services and configs.",
      },
      {
        term: "Dispatcher",
        def: "AEM's caching/reverse-proxy layer that sits in front of the real server and decides what to cache and what to block.",
      },
      {
        term: "Factory Configuration",
        def: "An OSGi config pattern that lets you create several independent, named copies of the same settings.",
      },
      {
        term: "Managed Service",
        def: "An OSGi config pattern for a single, one-off set of settings (not multiple copies).",
      },
      {
        term: "HTL",
        def: "AEM's templating language for markup (replaced JSP) \u2014 short for HTML Template Language.",
      },
      {
        term: "display context",
        def: `The "output mode" HTL uses to automatically escape a value safely, based on where it's being printed.`,
      },
      {
        term: "Sling Model",
        def: "A Java class that pulls together data from a request/resource into one clean object your component can use.",
      },
      {
        term: "adaptable",
        def: "The starting object a Sling Model is built from \u2014 usually a Resource or the incoming request.",
      },
      {
        term: "injector",
        def: "The mechanism that fills in a Sling Model's fields automatically from different sources.",
      },
      {
        term: "@ValueMapValue",
        def: "A Sling Model annotation that pulls a field's value straight from the content node's properties.",
      },
      {
        term: "Content Fragment",
        def: "A piece of structured content (fields, not layout) meant to be reused across channels.",
      },
      {
        term: "Experience Fragment",
        def: "Content plus its layout/design, packaged to be reused across channels.",
      },
      {
        term: "MSM",
        def: "Multi Site Manager \u2014 AEM's system for keeping copies of pages/sites in sync with a master version.",
      },
      {
        term: "Live Copy",
        def: 'A page/site kept automatically in sync with a master ("blueprint") via MSM.',
      },
      {
        term: "Rollout Configuration",
        def: "Settings controlling exactly what syncs (and what's skipped) when a Live Copy updates from its master.",
      },
      {
        term: "Workflow Model",
        def: "The flowchart/definition of a multi-step process (like an approval flow).",
      },
      {
        term: "Workflow Process",
        def: "A single Java-coded step that a Workflow Model can call as part of its flow.",
      },
      {
        term: "repoinit",
        def: "A Sling script (shipped as an OSGi config) that creates service users, paths and ACLs when the repository starts up.",
      },
      {
        term: "Cloud Manager",
        def: "Adobe's deployment pipeline tool for AEM as a Cloud Service \u2014 builds, tests, and ships your code.",
      },
      {
        term: "SonarQube",
        def: "An automated code-quality scanner Cloud Manager runs on your code before it can move forward.",
      },
      {
        term: "Query Builder",
        def: "AEM's simple, parameter-based way to search content \u2014 good for straightforward searches.",
      },
      {
        term: "JCR-SQL2",
        def: "A SQL-like query language for the repository; AEM also supports Query Builder and XPath.",
      },
      {
        term: "Oak",
        def: "The storage/database engine AEM's content repository (JCR) runs on.",
      },
      {
        term: "reindex",
        def: "Rebuilding an existing index over all content. On 6.5, set reindex=true on the definition; AEMaaCS reindexes during deployment.",
      },
      {
        term: "Discovery Service",
        def: `The mechanism letting AEM instances in a cluster find each other and agree who's "in charge" of certain jobs.`,
      },
      {
        term: "replication agent",
        def: "A configured connection AEM uses to push content from Author to Publish (or elsewhere).",
      },
      {
        term: "Dispatcher Flush",
        def: 'A replication agent that tells the dispatcher "this cached page is now invalid, drop it."',
      },
      {
        term: "statfileslevel",
        def: "A dispatcher setting controlling how many folder levels up it checks for a staleness marker file.",
      },
      {
        term: "i18n",
        def: 'Shorthand for "internationalization" \u2014 showing text in the right language automatically.',
      },
      {
        term: "GraphQL persisted query",
        def: "A GraphQL query saved server-side ahead of time and called by name, instead of sent fresh each time.",
      },
      {
        term: "SPA Editor",
        def: "AEM's tool for editing a React/Angular app in-context (now deprecated for new projects).",
      },
      {
        term: "MapTo",
        def: "The SPA Editor mechanism connecting a React/Angular component to an AEM resource type so it's editable.",
      },
      {
        term: "AEM Mocks",
        def: "A testing library that fakes just enough of AEM to unit-test Java code without a running instance.",
      },
      {
        term: "clientlib",
        def: "AEM's system for bundling and serving CSS/JS files as named, reusable groups.",
      },
      {
        term: "sling:vanityPath",
        def: "A property on a page that gives it a short, friendly custom URL \u2014 author-managed.",
      },
      {
        term: "/etc/map",
        def: "A developer-managed configuration area for rewriting URLs at a broader, structural level.",
      },
      {
        term: "thread dump",
        def: "A snapshot of what every thread in the server is doing at one moment \u2014 used to spot hangs/deadlocks.",
      },
      {
        term: "heap dump",
        def: "A snapshot of everything in server memory at one moment \u2014 used to see what's eating RAM.",
      },
    ],
    Sf = "aem-prep-console:";
  /* ===== Oct 14 2026 update: 6-week sprint to the exam ===== */
  var SPRINT_START_DEFAULT = "2026-10-15",
    EXAM_TARGET = "2026-11-24",
    SPs = [
      { n: 101, label: "W1", dates: "Oct 15–21", title: "Path map + Workflows (models, processes, launchers)", sections: ["S2", "S4"] },
      { n: 102, label: "W2", dates: "Oct 22–28", title: "HTL formatting + Sling Model injection", sections: ["S2"] },
      { n: 103, label: "W3", dates: "Oct 29–Nov 4", title: "Templates, policies, Style System", sections: ["S2", "S1"] },
      { n: 104, label: "W4", dates: "Nov 5–11", title: "Debugging — logs, consoles, Dispatcher, clientlibs", sections: ["S5"] },
      { n: 105, label: "W5", dates: "Nov 12–18", title: "Environment maintenance — Oak indexes, replication, topology", sections: ["S4"] },
      { n: 106, label: "W6", dates: "Nov 19–25", title: "Fresh questions, explain-out-loud review, book the exam", sections: ["S1", "S2", "S3", "S4", "S5"] },
    ],
    SMs = {
      101: {
        mechanism:
          "Every repository path has one job, and the exam uses that as a sorting test. /apps holds your code, /libs holds Adobe's (never edit it; overlay it in /apps), /conf holds editable configuration, /var holds runtime data, /content holds pages and assets, /home holds users and groups, and /oak:index at the root holds index definitions. Workflows split across two of these. The model you design (the editable diagram) lives in /conf under settings/workflow/models. When you sync it, AEM writes a runtime copy to /var/workflow/models, and that copy is what actually executes. A model is a sequence of steps. A Process Step calls a Java class that implements the Granite WorkflowProcess interface, registered as an OSGi service whose process.label property is the name authors see in the step's dropdown. Launchers start workflows automatically when content under a path changes.",
        analogy:
          "/conf is the architect's blueprint, /var is the building actually under construction. You edit the blueprint; the crew works from the copy that was printed when you hit sync. A Process Step is one contractor on the crew, and process.label is the name on their business card.",
        artifact: `// core/src/main/java/.../workflow/StampReviewedProcess.java
@Component(
  service = WorkflowProcess.class,
  property = { "process.label=Stamp reviewed date" }
)
public class StampReviewedProcess implements WorkflowProcess {
  @Override
  public void execute(WorkItem item, WorkflowSession session,
                      MetaDataMap args) throws WorkflowException {
    String path = item.getWorkflowData().getPayload().toString();
    // ... adapt to a Resource and write a property
  }
}

// design time : /conf/global/settings/workflow/models/my-model
// runtime copy: /var/workflow/models/my-model`,
        delta65:
          "Before AEM 6.4, models lived under /etc/workflow/models. That path is now legacy and a classic distractor. 6.5 also still ships the older CQ API (com.day.cq.workflow.exec.WorkflowProcess); the Granite API (com.adobe.granite.workflow.exec.WorkflowProcess) is the current one and the only one to pick on AEMaaCS questions.",
        handsOn:
          "In CRXDE Lite, open /conf/global/settings/workflow/models and then /var/workflow/models and compare the same model in both. In your project's core module, find a class that implements WorkflowProcess and read its process.label and execute() method.",
        takeaways: [
          "Design time = /conf/.../settings/workflow/models; runtime = /var/workflow/models",
          "/etc is the legacy workflow location; a distractor on modern questions",
          "Custom step = @Component(service = WorkflowProcess.class) that IMPLEMENTS the interface; process.label is the dropdown name",
          "One method to write: execute(WorkItem, WorkflowSession, MetaDataMap)",
          "The workflow engine is Granite, not Sling; a Model is the diagram, a Process is the Java class",
        ],
      },
      102: {
        mechanism:
          "Two small mechanisms carry a lot of exam weight. First, HTL's format option: when the value is a number, HTL formats it with Java DecimalFormat patterns, so the pattern string decides the output. In those patterns # is an optional digit, 0 is a required digit, and % multiplies by 100 and appends a percent sign. The minus sign for negatives is added for you. Dates use a date pattern with format plus type='date', and strings use {0}, {1} placeholders. Second, Sling Model injection: data-sly-use can pass parameters (@ name='value'), and HTL hands those to the model as request attributes, so the model must adapt from SlingHttpServletRequest and read them with @RequestAttribute. Settings that apply to the whole model go on @Model as attributes (for example defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL); settings for one field go on that field's injector annotation (injectionStrategy = InjectionStrategy.OPTIONAL).",
        analogy:
          "A DecimalFormat pattern is a stencil, not a calculator you drive by hand: put a % on the stencil and the machine multiplies by 100 for you. data-sly-use parameters are notes clipped to the request on its way into the model, which is why you read them off the request.",
        artifact: `<!-- HTL -->
\${'#%' @ format=0.875}            <!-- 88% -->
\${'0.00' @ format=2.5}            <!-- 2.50 -->
<sly data-sly-use.m="\${'com.example.models.ListHelper' @ listName='items'}"/>

// Java
@Model(adaptables = SlingHttpServletRequest.class,
       defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ListHelper {
  @RequestAttribute(name = "listName")
  private String listName;
}`,
        delta65:
          "No real difference between 6.5 and AEMaaCS here. HTL and Sling Models behave the same on both. The traps are invented options (a 'percentage' HTL option, @Prop, requiredInjectionStrategy) and real options placed at the wrong level.",
        handsOn:
          "In your project, find an HTL file that passes a parameter in data-sly-use and follow it into the model's @RequestAttribute field. In a scratch component on the local SDK, render a few format patterns (#%, 0.00, #,##0) against positive and negative numbers and confirm what you predicted.",
        takeaways: [
          "HTL number pattern: % means ×100 plus a percent sign; the minus for negatives is automatic",
          "data-sly-use parameters arrive as request attributes → @RequestAttribute, request adaptable",
          "Class level = attribute on @Model (defaultInjectionStrategy); field level = attribute on the injector (injectionStrategy)",
          "Without OPTIONAL, one missing required field makes adaptTo() return null for the whole model",
          "Made-up names (@Prop, percentage=, requiredInjectionStrategy) are distractors",
        ],
      },
      103: {
        mechanism:
          "Editable templates separate three things that the exam deliberately blurs. Structure is what's locked on every page. Initial Content is what a new page starts with, which authors can then change. Policies are design settings attached to a component or container inside the template, stored under /conf/<site>/settings/wcm/policies. Which components authors may drop is decided by the policy of the container they're dropping into, usually the Layout Container: Structure mode, select the container, open its policy, tick Allowed Components. Components appear there grouped by their componentGroup property. Styling has two knobs in a component's own policy: Allowed Styles (named, grouped CSS classes that authors pick from the paintbrush menu) and Default CSS Classes (always applied, no choice).",
        analogy:
          "The Layout Container's policy is the bouncer's guest list: it decides who gets into that room, not the page's front door policy. Allowed Styles is a menu the guest orders from; Default CSS Classes is the house dress code everyone gets whether they ask or not.",
        artifact: `/conf/my-site/settings/wcm/policies/my-site/components/
  breadcrumb/policy_123
    cq:styleGroups/
      item0  cq:styleGroupLabel="Layout"
        cq:styles/item0  cq:styleLabel="Compact"
                         cq:styleClasses="cmp-breadcrumb--compact"
    cq:styleDefaultClasses="cmp-breadcrumb--base"

/apps/my-site/components/breadcrumb/.content.xml
  componentGroup="My Site - Content"`,
        delta65:
          "Static templates (/apps/.../templates, design mode, /etc/designs) are the 6.5-era alternative and still appear as distractors. On modern questions, policies live in /conf and design dialogs in /etc/designs are legacy.",
        handsOn:
          "In the Template Editor on the local SDK, open Structure mode, select the Layout Container and inspect its policy's Allowed Components list. Then open a Core Component's policy and add one Allowed Style, apply it on a page, and find the policy node in CRXDE under /conf.",
        takeaways: [
          "Allowed components = the Layout Container's policy, not the page policy and not Initial Content",
          "Components show up in that list by componentGroup",
          "Author-pickable style = Allowed Styles in the component's own policy (most modular)",
          "Always-applied style = Default CSS Classes",
          "Policies live under /conf/<site>/settings/wcm/policies",
        ],
      },
      104: {
        mechanism:
          "Adobe's debugging answers follow one order: gather AEM-side evidence before taking action. Each question type has a matching evidence source. Exceptions go to error.log. Who requested a URL and when is in access.log. Per-request timing and concurrency is in request.log. Who created, changed or published something, and when, is in audit.log. A failed replication shows in the agent's log and queue on Author. Cache hits, misses and blocked requests are in the Dispatcher log. Startup output is in stdout.log. The Dispatcher does three separate jobs: /filter decides which requests get in, /cache /rules decides what gets cached, and the flush agent or /invalidate decides when cached files get cleared. On the server, /system/console/bundles shows bundles stuck in Installed, /components shows components that can't start because a reference or config is missing, and /configMgr shows configs. On AEMaaCS, the Developer Console shows the same status views (Bundles, Components, Configurations, OSGi Services, Sling Jobs).",
        analogy:
          "A doctor orders the scan before operating. Clearing the browser cache or restarting is operating blind. Each log is a different scan: you pick the one that images the organ the symptom points to.",
        artifact: `# manual Dispatcher cache delete
POST /dispatcher/invalidate.cache HTTP/1.1
CQ-Action: Activate
CQ-Handle: /content/my-site/en/news
Content-Length: 0

# clientlib debugging
/etc.clientlibs/my-site/clientlibs/site.css   (needs allowProxy=true)
?debugClientLibs=true
/libs/granite/ui/content/dumplibs.html`,
        delta65:
          "On 6.5 you open crx-quickstart/logs and /system/console directly. On AEMaaCS you get logs through Cloud Manager or the CLI, and you use the Developer Console instead of the Felix console. The evidence-first order is the same on both.",
        handsOn:
          "On the local SDK, open every file in crx-quickstart/logs and note what each one records for a single page load. Tour /system/console bundles, components and configMgr. Open dumplibs.html. Read your project's dispatcher/src/conf.dispatcher.d and find the filter, cache rules and invalidate sections.",
        takeaways: [
          "First step = check a log, console or queue; never restart, rebuild, reindex or clear the browser cache first",
          "error = exceptions; access = who requested; request = timing; audit = who changed or published, and when",
          "/filter = what gets in (blocked = 404); /cache /rules = what gets cached; flush request + /invalidate + .stat files = when it's stale",
          "Stale content right after publishing usually means the flush agent",
          "Misconfigured property on AEMaaCS → Developer Console: Configurations + Components",
          "Clientlibs: allowProxy for /etc.clientlibs, jsProcessor/cssProcessor for minify (HTML Library Manager defaults aren't supported on AEMaaCS), dumplibs to inspect",
        ],
      },
      105: {
        mechanism:
          "Index definitions always live at the repository root under /oak:index. On 6.5 you can create them directly in CRXDE; on AEMaaCS they must ship in code, because the repository is immutable at runtime. In a content package the colon can't be part of a folder name, so the folder is written _oak_index and FileVault maps it back to oak:index. AEMaaCS also names custom indexes with a -custom-<n> suffix, and every change bumps the number so the platform can build the new version alongside the old one. On 6.5 you reindex by setting reindex=true on the definition. Explain Query (in Query Performance) shows whether a query uses an index. Replication pushes content from Author to Publish as the replication (transport) user, not the admin, so permission failures are about that user. Registering a namespace is a repository-level action that needs jcr:namespaceManagement. AEMaaCS replaces replication agents with Sling Content Distribution. Instances find each other through Sling Discovery, which builds the topology that job offloading depends on.",
        analogy:
          "_oak_index is a nickname printed on the shipping box because the courier can't print colons. It's the same address when it's unpacked. The replication user is the delivery driver: if the driver's badge doesn't open the door, it doesn't matter that the building manager (admin) has a master key.",
        artifact: `ui.apps/src/main/content/jcr_root/_oak_index/
  myProductLucene-custom-1/.content.xml
    jcr:primaryType="oak:QueryIndexDefinition"
    type="lucene" async="[async,nrt]"

# 6.5 only: rebuild an existing index
/oak:index/myProductLucene  reindex=true`,
        delta65:
          "6.5: indexes created or edited in CRXDE, reindex=true, replication agents, and service packs you apply yourself, testing on stage before production. AEMaaCS: indexes only through code, versioned names, Sling Content Distribution, and maintenance updates Adobe applies through the pipeline.",
        handsOn:
          "On the local SDK, browse /oak:index in CRXDE and open one Lucene definition. Run a query through Explain Query. Open /system/console/topology to see the topology view. On author, open the replication agent page and read its log.",
        takeaways: [
          "Indexes = /oak:index at the root; in code = _oak_index (same place, encoded)",
          "AEMaaCS index naming: customized OOTB = <name>-custom-<n>; fully custom = prefix.<name>-<n>-custom-<m>",
          "Replication runs as the replication user; namespace replication needs jcr:namespaceManagement",
          "AEMaaCS moves content with Sling Content Distribution",
          "Instances join a topology via Sling Discovery (through a Topology Connector); invented names like 'Topology Offloading Bridge' are traps",
          "Maintenance with minimal disruption = staged: test on stage, then prod",
        ],
      },
      106: {
        mechanism:
          "This week is about converting recognition into reasons. The official practice exam has been seen 5 to 6 times, so it now measures memory, not understanding. Use only new questions this week (the drill items added on Oct 14, Experience League quizzes, fresh AI drills), and for each answer say out loud why every wrong option is wrong. On exam day, cap each question at about 90 seconds: pick the best answer, flag it, move on, and never leave one blank because wrong answers cost nothing. Most questions reduce to one of the core rules in /guide.",
        analogy:
          "Rehearsing with the same flashcards in the same order trains the order, not the facts. Shuffle the deck and explain each card to someone who keeps asking 'why not the others?'",
        artifact: `READY TO BOOK WHEN
[ ] Explain the Oct 14 review topics without notes, naming the rule behind each
[ ] One focused practice run in a single sitting, no guessing
[ ] ≥80% on new questions, and ≥70% in Analyzing & Debugging

OFFICIAL PRACTICE EXAM (retired as a score Oct 22)
- One run this week only, as a stamina check
- Single sitting, timer on, no multitasking`,
        delta65:
          "Adobe's exam page (checked Oct 22, 2026): 100 minutes, passing score 32/50, online proctored, English only. That is about 2 minutes per question, so a 90-second cap leaves time to revisit flagged items. Re-check the page before booking.",
        handsOn:
          "Run /drill on S5 and S2 only, using the new items, with the timer on. For any miss, open the matching sprint week and redo its hands-on task. Book the exam once the readiness checklist on /plan is all green. Avoid Thanksgiving week (Nov 26).",
        takeaways: [
          "The official practice exam is now a memory test; don't use it as a score",
          "Understanding test: can you say why each wrong option is wrong?",
          "About 90 seconds per question, then flag and move on; never leave a blank",
          "Book only when the readiness checklist is green",
        ],
      },
    },
    CORE_RULES = [
      { n: 1, rule: "Evidence before action.", detail: "First step = check a log, console or queue. Never restart, rebuild, reindex or clear the browser cache first." },
      { n: 2, rule: "Safe and staged beats fast.", detail: "Test on stage before prod. The cautious best-practice answer almost always wins." },
      { n: 3, rule: "Interfaces are implemented, classes are extended.", detail: "Option names that sound made up are distractors." },
      { n: 4, rule: "Know where things live.", detail: "See the path map below." },
      { n: 5, rule: "Pickable style = Allowed Styles. Always-on style = Default CSS Classes.", detail: "Both live in the component's policy (Style System)." },
      { n: 6, rule: "Allowed components = the container's policy.", detail: "The Layout Container policy, not the page policy and not Initial Content." },
      { n: 7, rule: "data-sly-use parameters arrive as request attributes.", detail: "The model reads them with @RequestAttribute." },
      { n: 8, rule: "Replication runs as the replication user.", detail: "Not the admin. Options that mention “administrator” are distractors." },
      { n: 9, rule: "Class-level = attribute on @Model. Field-level = attribute on the field's annotation.", detail: "defaultInjectionStrategy vs injectionStrategy." },
      { n: 10, rule: "If three options are made-up names, pick the one real tool.", detail: "Elimination is a legitimate strategy." },
      { n: 11, rule: "“When and by whom” = audit.log.", detail: "access.log = who requested something; request.log = timing." },
    ],
    PATH_MAP = [
      ["/apps", "Your code: components, clientlibs, OSGi configs"],
      ["/libs", "Adobe's out-of-the-box code. Never edit; overlay in /apps"],
      ["/conf", "Editable config: templates, policies, workflow models (design time)"],
      ["/var", "Runtime data: workflow models (runtime copy), instances, audit data"],
      ["/content", "Pages, DAM, Experience Fragments"],
      ["/etc", "Legacy since 6.4; only the /etc.clientlibs proxy URL still matters"],
      ["/oak:index", "Oak index definitions (repository root)"],
      ["/home", "Users and groups"],
    ],
    LOG_MAP = [
      ["Server errors or exceptions", "error.log"],
      ["Who requested a URL, and when", "access.log"],
      ["Request timing, slowness, concurrency", "request.log"],
      ["Who created, changed or published something", "audit.log"],
      ["Replication failed", "Replication agent log / queue on Author"],
      ["Caching, hits/misses, blocked requests", "Dispatcher log"],
      ["Startup and JVM output", "stdout.log"],
    ],
    OFFICIAL_RUNS = [
      { date: "2026-09-16", correct: 37, total: 50, secs: { S1: 100, S2: 79, S3: 100, S4: 86, S5: 20 }, note: "Passing result. S5 confirmed as the weak section." },
      { date: "2026-10-14", correct: 35, total: 50, secs: { S1: 90, S2: 79, S3: 100, S4: 71, S5: 20 }, note: "Meets passing criteria, but this is the 5th–6th attempt on the same exam. All 10 S5 answers were guesses. About 82% (33/40) on the questions actually answered." },
      { date: "2026-10-22", correct: 37, total: 50, secs: { S1: 100, S2: 68, S3: 100, S4: 86, S5: 40 }, note: "Multitasked, ~7th attempt. 12 of 13 misses were items already written up in the Oct 14 review; each maps to a core rule in /guide. Only new topic: CDN logs for cache hit ratio on AEMaaCS (now drill q71). Retired as a score after this run." },
    ],
    SEC_TRUST = { S1: "none — memorized", S2: "medium — dropped to 68% despite repeats, a real gap", S3: "none — memorized", S4: "low — seen many times", S5: "low — multitasked; misses were rule-1 and log-table items" },
    READINESS = [
      { id: "r1", text: "Explain every Oct 14 review topic without notes, naming the rule behind each" },
      { id: "r2", text: "One focused practice run in a single sitting, no guessing" },
      { id: "r3", text: "≥80% on new questions, and ≥70% in Analyzing & Debugging" },
    ],
    NEW_WEAK = [
      { id: "w7", text: "S5: pick the right log — error / access / request / audit", closed: !1 },
      { id: "w8", text: "S5: Dispatcher's three jobs — /filter vs /cache /rules vs flush/invalidate", closed: !1 },
      { id: "w9", text: "S5: Developer Console + /system/console views for config/bundle issues", closed: !1 },
      { id: "w10", text: "S2: HTL number format patterns (% = ×100)", closed: !1 },
      { id: "w11", text: "S2: data-sly-use parameters → @RequestAttribute", closed: !1 },
      { id: "w12", text: "S2/S1: Allowed Styles vs Default CSS; allowed components on the Layout Container policy", closed: !1 },
      { id: "w13", text: "S4: replication user permissions (incl. jcr:namespaceManagement)", closed: !1 },
      { id: "w14", text: "S4: Oak index locations (/oak:index vs _oak_index), naming, reindex", closed: !1 },
      { id: "w15", text: "Exam habit: give S5 fresh time; 90s then flag and move on", closed: !1 },
    ],
    NEW_GLOSSARY = [
      { term: "audit.log", def: "The log that records who created, changed, published or deleted something, and when." },
      { term: "access.log", def: "The log of every HTTP request: who asked for which URL, and when." },
      { term: "request.log", def: "The log of request timing: when each request started and how long it took." },
      { term: "Allowed Styles", def: "Named CSS classes in a component's policy that authors can pick from the paintbrush menu." },
      { term: "Default CSS Classes", def: "CSS classes in a component's policy that are always applied; authors get no choice." },
      { term: "Layout Container", def: "The drop zone on a page. Its policy decides which components authors can add to it." },
      { term: "componentGroup", def: "A component property that sorts it into a named group, which is what policies allow or block." },
      { term: "@RequestAttribute", def: "A Sling Model annotation that reads a value attached to the request, such as a data-sly-use parameter." },
      { term: "DefaultInjectionStrategy", def: "An @Model setting that makes every injected field optional or required at once." },
      { term: "Developer Console", def: "AEMaaCS's per-environment status page: bundles, components, configurations, services, jobs." },
      { term: "allowProxy", def: "A clientlib folder property that lets /apps clientlibs be served through /etc.clientlibs/." },
      { term: "invalidate.cache", def: "The Dispatcher endpoint you POST to (CQ-Action, CQ-Handle headers) to clear cached files." },
      { term: "Sling Content Distribution", def: "How AEMaaCS moves content from Author to Publish, and Adobe's preferred way to invalidate the Dispatcher cache explicitly." },
      { term: "jcr:namespaceManagement", def: "The repository-level privilege needed to register a new namespace." },
      { term: "_oak_index", def: "How the oak:index folder is spelled inside a code package, since folder names can't contain a colon." },
      { term: "process.label", def: "The OSGi property that names a custom workflow process in the Process Step dropdown." },
      { term: "HTML Library Manager", def: "The OSGi config for clientlib processing on 6.5. On AEMaaCS, setting its defaults isn't supported; use jsProcessor/cssProcessor on the clientlib." },
      { term: "flush agent", def: "The replication agent that tells the Dispatcher to drop cached copies after a publish." },
    ];
  var NEW_DRILLS = [
      {
        "id": "q51",
        "section": "S5",
        "type": "single",
        "stem": "A marketing manager asks who published a press-release page last night and at what time. The page renders fine and nothing is erroring.",
        "q": "Which log answers the question most directly?",
        "options": [
          {
            "id": "a",
            "text": "access.log"
          },
          {
            "id": "b",
            "text": "audit.log"
          },
          {
            "id": "c",
            "text": "request.log"
          },
          {
            "id": "d",
            "text": "error.log"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "Someone wants to know which person pushed a page live and when. Which log keeps a record of people doing things to content?",
        "explain": "Publishing is an action that changes something, and audit.log records who did what and when for those actions. access.log only shows who requested a URL, request.log shows timing without the user who made a change, and error.log only records failures.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "KB: Enabling and Managing Audit Logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-24740"
            }
          ]
        },
        "why": {
          "a": "access.log shows who requested a URL, not who published it.",
          "c": "request.log shows timing, not who made a change.",
          "d": "error.log only records failures, and nothing failed."
        }
      },
      {
        "id": "q52",
        "section": "S5",
        "type": "single",
        "stem": "Authors report that a news listing on Publish still shows yesterday's headline about ten minutes after a successful activation. Other pages update normally.",
        "q": "What is the most likely component to investigate first?",
        "options": [
          {
            "id": "a",
            "text": "The /filter section, since it decides what is cached"
          },
          {
            "id": "b",
            "text": "The Dispatcher flush agent and invalidation for that path"
          },
          {
            "id": "c",
            "text": "The Sling Model behind the listing component"
          },
          {
            "id": "d",
            "text": "The browser cache on the authors' machines"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "The content was published but the live site still shows the old version. Which part of the system is responsible for throwing away the old cached copy?",
        "explain": "Stale content right after publishing points to invalidation: the flush agent or /invalidate rules decide when cached files get cleared. /filter only decides which requests are allowed in, not caching. The model renders fresh output when it's actually called. A browser cache wouldn't affect only one page for every visitor.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Dispatcher: Configure AEM Dispatcher",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration"
            },
            {
              "t": "Dispatcher: Invalidate Cached Pages",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/page-invalidate"
            }
          ]
        },
        "why": {
          "a": "/filter decides which requests are allowed in, not what's cached or when it's cleared.",
          "c": "The model renders fresh output whenever it's actually called; the stale copy is a cache problem.",
          "d": "A browser cache wouldn't make one page stale for every visitor."
        }
      },
      {
        "id": "q53",
        "section": "S5",
        "type": "multi",
        "stem": "On an AEMaaCS dev environment, a custom OSGi service is behaving as though one of its configured values is missing.",
        "q": "Which two Developer Console status views give the most direct evidence? (Choose two.)",
        "options": [
          {
            "id": "a",
            "text": "Configurations"
          },
          {
            "id": "b",
            "text": "OSGi Services"
          },
          {
            "id": "c",
            "text": "Sling Jobs"
          },
          {
            "id": "d",
            "text": "Bundles"
          },
          {
            "id": "e",
            "text": "Components"
          }
        ],
        "correct": [
          "a",
          "e"
        ],
        "plain": "A service seems to be missing a setting. Which two status pages show the settings that exist and the values the component actually received?",
        "explain": "Adobe: Configurations lists property/value pairs per component, and Components shows each component's state and the values actually bound to it, including ones injected from environment variables, which Configurations doesn't show. OSGi Services lists services and the bundles that provide and use them, not config values.",
        "audit": {
          "ver": "corrected",
          "note": "Answer changed: Configurations + Components, not OSGi Services.",
          "src": [
            {
              "t": "Debugging AEMaaCS with the Developer Console",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console"
            }
          ]
        },
        "why": {
          "a": "Correct: Configurations lists the property values per component.",
          "b": "OSGi Services lists services and which bundles provide and use them, not their config values.",
          "c": "Sling Jobs shows job queues, not configuration.",
          "d": "Bundles shows whether code is installed and active, not config values.",
          "e": "Correct: Components shows the values actually bound to each component, including ones from environment variables."
        }
      },
      {
        "id": "q54",
        "section": "S5",
        "type": "single",
        "stem": "A page on the local SDK renders blank where a custom component should be. The browser console is clean and the network tab shows a 200 for the page.",
        "q": "What should you do first?",
        "options": [
          {
            "id": "a",
            "text": "Clear the browser cache and reload"
          },
          {
            "id": "b",
            "text": "Rebuild and redeploy the project with Maven"
          },
          {
            "id": "c",
            "text": "Check error.log for an exception during that request"
          },
          {
            "id": "d",
            "text": "Delete the component node and re-add it"
          }
        ],
        "correct": [
          "c"
        ],
        "plain": "Nothing looks wrong in the browser, but the component didn't show up. Where do you look before changing anything?",
        "explain": "When the browser shows no error, the failure happened on the server, so the first step is to gather server evidence in error.log. Rebuilding, deleting nodes and clearing caches are all actions taken before you know the cause.",
        "audit": {
          "ver": "partial",
          "note": "Reasoning item (gather server evidence first). The log source is confirmed; the rule itself isn't stated on one Adobe page.",
          "src": [
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "a": "Clearing caches is an action taken before you know the cause; the browser already shows no error.",
          "b": "Rebuilding before checking the logs skips the evidence step.",
          "d": "Deleting nodes is destructive and comes before you know the cause."
        }
      },
      {
        "id": "q55",
        "section": "S5",
        "type": "single",
        "stem": "After a deploy, a new servlet never responds. In /system/console/bundles the project's core bundle shows the state Installed instead of Active.",
        "q": "What does that state most likely indicate?",
        "options": [
          {
            "id": "a",
            "text": "The bundle is waiting for a scheduled activation window"
          },
          {
            "id": "b",
            "text": "The bundle has an unresolved dependency, such as a missing package import"
          },
          {
            "id": "c",
            "text": "The Dispatcher is blocking the servlet path"
          },
          {
            "id": "d",
            "text": "The servlet's OSGi config has a typo in one property value"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "The code got uploaded but never switched on. What usually stops an OSGi bundle from going from 'installed' to 'running'?",
        "explain": "An Installed bundle couldn't resolve. Usually it imports a package that nothing exports at the right version. The bundle detail page lists the failing imports. Activation windows don't exist, and a Dispatcher block or a wrong config value wouldn't change the bundle state.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Debugging AEM SDK: OSGi web console",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-sdk/osgi-web-consoles"
            },
            {
              "t": "Debugging AEMaaCS with the Developer Console",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console"
            }
          ]
        },
        "why": {
          "a": "Activation windows don't exist in OSGi.",
          "c": "A Dispatcher block doesn't change a bundle's state.",
          "d": "A wrong config value doesn't keep a bundle from resolving."
        }
      },
      {
        "id": "q56",
        "section": "S5",
        "type": "single",
        "stem": "A clientlib defined under /apps/my-site/clientlibs/site loads fine on author in CRXDE preview, but on Publish the page requests /etc.clientlibs/my-site/clientlibs/site.css and gets a 404.",
        "q": "Which property is most likely missing on the clientlib folder?",
        "options": [
          {
            "id": "a",
            "text": "allowProxy=true"
          },
          {
            "id": "b",
            "text": "embed=[...]"
          },
          {
            "id": "c",
            "text": "dependencies=[...]"
          },
          {
            "id": "d",
            "text": "jsProcessor=[min:gcc]"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "Your CSS lives in /apps but the page asks for it through a public /etc.clientlibs/ address and can't find it. Which setting lets that public address work?",
        "explain": "Adobe: clientlibs live under /apps, and the proxy servlet serves them at /etc.clientlibs only when allowProxy=true is set on the folder. embed and dependencies decide how libraries are combined, and jsProcessor sets minification.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation fixed to Adobe's wording.",
          "src": [
            {
              "t": "AEMaaCS: Client-Side Libraries",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/clientlibs"
            }
          ]
        },
        "why": {
          "b": "embed combines libraries; it doesn't make /apps clientlibs reachable through /etc.clientlibs.",
          "c": "dependencies orders libraries; it doesn't enable the proxy.",
          "d": "jsProcessor sets minification; it doesn't enable the proxy."
        }
      },
      {
        "id": "q57",
        "section": "S5",
        "type": "single",
        "stem": "An ops engineer needs to force-clear the cached copy of /content/my-site/en/offers from the Dispatcher without publishing anything.",
        "q": "Which request does that?",
        "options": [
          {
            "id": "a",
            "text": "GET /dispatcher/invalidate.cache?path=/content/my-site/en/offers"
          },
          {
            "id": "b",
            "text": "POST /dispatcher/invalidate.cache with CQ-Action: Activate and CQ-Handle: /content/my-site/en/offers"
          },
          {
            "id": "c",
            "text": "POST /bin/replicate.json with cmd=Deactivate"
          },
          {
            "id": "d",
            "text": "DELETE /content/my-site/en/offers.html on the Dispatcher host"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You want the cache to drop its saved copy of one page. What is the documented way to tell the Dispatcher to do that?",
        "explain": "Adobe's Dispatcher doc gives this exact form: POST /dispatcher/invalidate.cache with CQ-Action: Activate and a CQ-Handle path. The GET isn't the documented request, deactivating would unpublish the page, and DELETE isn't how Dispatcher is flushed.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation trimmed to what Adobe documents.",
          "src": [
            {
              "t": "Dispatcher: Invalidate Cached Pages",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/page-invalidate"
            }
          ]
        },
        "why": {
          "a": "Not the documented request: invalidation is a POST with CQ-Action and CQ-Handle headers.",
          "c": "Deactivating would unpublish the page, and the stem says publish nothing.",
          "d": "DELETE isn't how the Dispatcher is flushed; the documented request is the invalidate POST."
        }
      },
      {
        "id": "q58",
        "section": "S5",
        "type": "single",
        "stem": "Users say every page on Publish got slow this afternoon. Error volume hasn't changed.",
        "q": "Which log gives you the per-request durations to confirm and narrow it down?",
        "options": [
          {
            "id": "a",
            "text": "audit.log"
          },
          {
            "id": "b",
            "text": "request.log"
          },
          {
            "id": "c",
            "text": "stdout.log"
          },
          {
            "id": "d",
            "text": "history.log"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "Pages feel slow but nothing is crashing. Which log writes down how long each request took?",
        "explain": "Adobe: request.log has a request line and a response line per request, including the response time in milliseconds. On AEMaaCS the same data is in the aemrequest log. audit.log tracks changes, and stdout.log isn't request timing.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation adds the AEMaaCS log name.",
          "src": [
            {
              "t": "KB: Examples of request.log analysis",
              "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-21309"
            },
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "a": "audit.log records who changed things, not request durations.",
          "c": "stdout.log isn't where request timing is recorded.",
          "d": "history.log isn't where request timing is recorded."
        }
      },
      {
        "id": "q59",
        "section": "S2",
        "type": "single",
        "stem": "A model exposes completion = -0.42 (a ratio). The design shows it as -42%.",
        "q": "Which HTL expression produces -42%?",
        "options": [
          {
            "id": "a",
            "text": "${'-#%' @ format=model.completion}"
          },
          {
            "id": "b",
            "text": "${'#%' @ format=model.completion}"
          },
          {
            "id": "c",
            "text": "${model.completion @ percentage=100}"
          },
          {
            "id": "d",
            "text": "${'#' @ format=model.completion * 100}%"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You have a decimal like -0.42 and want it shown as a percentage. Which HTL formatting pattern does the multiplying and adds the minus sign for you?",
        "explain": "HTL number patterns (per the HTL spec): % multiplies by 100 and shows a percent sign, and negative numbers get their minus automatically, so #% gives -42%. Adding your own minus (a) doubles it. percentage isn't an HTL option, and HTL expressions have no arithmetic operators.",
        "audit": {
          "ver": "verified",
          "note": "The spec's own example: '#%' on -3.14 gives -314%.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "a": "HTL adds the minus automatically for negative numbers, so adding your own doubles it.",
          "c": "percentage isn't an HTL option.",
          "d": "HTL expressions have no arithmetic operators, so '* 100' isn't allowed."
        }
      },
      {
        "id": "q60",
        "section": "S2",
        "type": "single",
        "stem": "In HTL: <sly data-sly-use.tabs=\"${'com.example.TabsModel' @ maxTabs=4}\"/>. The model adapts from SlingHttpServletRequest.",
        "q": "How should TabsModel read maxTabs?",
        "options": [
          {
            "id": "a",
            "text": "@ValueMapValue(name = \"maxTabs\")"
          },
          {
            "id": "b",
            "text": "@RequestAttribute(name = \"maxTabs\")"
          },
          {
            "id": "c",
            "text": "@ScriptVariable(name = \"maxTabs\")"
          },
          {
            "id": "d",
            "text": "@OSGiService(filter = \"(maxTabs=4)\")"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "The HTL file hands the model a value when it loads it. Where does that value end up, so the model can pick it up?",
        "explain": "Parameters passed through data-sly-use reach a Sling Model as request attributes, which @RequestAttribute reads. @ValueMapValue reads properties on the content node, @ScriptVariable reads HTL script bindings such as currentPage, and @OSGiService injects a service.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Apache Sling: HTL Scripting Engine",
              "u": "https://sling.apache.org/documentation/bundles/scripting/scripting-htl.html"
            },
            {
              "t": "Apache Sling Models",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"
            }
          ]
        },
        "why": {
          "a": "@ValueMapValue reads properties on the content node, not values passed from HTL.",
          "c": "@ScriptVariable reads HTL script bindings such as currentPage.",
          "d": "@OSGiService injects an OSGi service."
        }
      },
      {
        "id": "q61",
        "section": "S2",
        "type": "single",
        "stem": "A model has eight injected fields. Several are legitimately empty on many pages, and when any one is missing the whole model comes back null.",
        "q": "What is the cleanest fix that applies to every field at once?",
        "options": [
          {
            "id": "a",
            "text": "Add @Optional to each field"
          },
          {
            "id": "b",
            "text": "Set defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL on @Model"
          },
          {
            "id": "c",
            "text": "Set injectionStrategy = InjectionStrategy.OPTIONAL on @Model"
          },
          {
            "id": "d",
            "text": "Wrap adaptTo() in a try/catch in the HTL"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You want every field in the class to be allowed to be missing, without editing each field. Which class-wide setting does that?",
        "explain": "defaultInjectionStrategy on @Model is the class-level switch. @Optional and injectionStrategy are field-level, so (a) works but isn't 'all at once', and (c) puts a field-level attribute name on the wrong annotation. HTL has no try/catch.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "WKND tutorial: Custom Component (Adobe)",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/custom-component"
            },
            {
              "t": "Apache Sling Models",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"
            },
            {
              "t": "Sling Models @ValueMapValue javadoc",
              "u": "https://sling.apache.org/apidocs/sling14/org/apache/sling/models/annotations/injectorspecific/ValueMapValue.html"
            }
          ]
        },
        "why": {
          "a": "It works, but it's per field. The question asks for one setting that covers every field.",
          "c": "injectionStrategy is the field-level attribute; on @Model the class-level one is defaultInjectionStrategy.",
          "d": "HTL has no try/catch."
        }
      },
      {
        "id": "q62",
        "section": "S2",
        "type": "single",
        "stem": "You need a custom workflow step that sets a reviewed-date property on the payload page.",
        "q": "Which declaration is correct for AEMaaCS?",
        "options": [
          {
            "id": "a",
            "text": "public class StampStep extends WorkflowProcess"
          },
          {
            "id": "b",
            "text": "@Component(service = WorkflowProcess.class, property = \"process.label=Stamp date\") public class StampStep implements WorkflowProcess"
          },
          {
            "id": "c",
            "text": "@Component(service = Servlet.class) public class StampStep implements WorkflowProcess"
          },
          {
            "id": "d",
            "text": "@Model(adaptables = WorkItem.class) public class StampStep"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "To make a custom step, what kind of Java class do you write and how do you register it so it shows up in the workflow editor?",
        "explain": "WorkflowProcess is an interface, so you implement it, and the class is registered as an OSGi service of that type with process.label naming it in the Process Step dropdown. You can't extend an interface (a). Registering as a Servlet (c) hides it from the workflow engine. Sling Models (d) aren't workflow steps.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Custom Process Step (tutorial)",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/forms/adaptive-forms/custom-process-step-aem-workflow"
            }
          ]
        },
        "why": {
          "a": "WorkflowProcess is an interface: you implement it, you can't extend it.",
          "c": "Registered as a Servlet, the class is hidden from the workflow engine.",
          "d": "Sling Models aren't workflow steps."
        }
      },
      {
        "id": "q63",
        "section": "S2",
        "type": "single",
        "stem": "A developer edits a workflow model in the model editor but forgets to click Sync. A launcher then starts that workflow.",
        "q": "Which version runs?",
        "options": [
          {
            "id": "a",
            "text": "The edited version, read live from /conf"
          },
          {
            "id": "b",
            "text": "The previous runtime copy under /var/workflow/models"
          },
          {
            "id": "c",
            "text": "Neither; unsynced models are disabled"
          },
          {
            "id": "d",
            "text": "The copy under /etc/workflow/models"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You changed the plan but didn't publish the change to the engine. Does the engine use your draft or the last version it was given?",
        "explain": "The engine executes the runtime copy in /var. Edits in /conf take effect only when Sync writes a new runtime copy. Unsynced models aren't disabled, and /etc is the legacy workflow location.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEM: Creating Workflow Models",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/extending-aem/extending-workflows/workflows-models.html?lang=en"
            }
          ]
        },
        "why": {
          "a": "The engine runs the runtime copy in /var, not the design copy in /conf.",
          "c": "Unsynced models aren't disabled; the last synced copy keeps running.",
          "d": "/etc is the legacy workflow location; the runtime copy is in /var."
        }
      },
      {
        "id": "q64",
        "section": "S2",
        "type": "single",
        "stem": "A team wants authors to be able to choose between “Dark” and “Light” variants of the Teaser component only, without affecting any other component.",
        "q": "Where should the CSS classes be configured?",
        "options": [
          {
            "id": "a",
            "text": "Default CSS Classes on the Teaser's policy"
          },
          {
            "id": "b",
            "text": "Allowed Styles on the Teaser's policy"
          },
          {
            "id": "c",
            "text": "Allowed Styles on the Layout Container's policy"
          },
          {
            "id": "d",
            "text": "A clientlib category added to the Page Policy"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "Authors need a choice, and it should only apply to one component. Where do you put the list of style choices?",
        "explain": "Choices for authors = Allowed Styles (the Style System), and putting them on the Teaser's own policy scopes them to the Teaser. Default CSS Classes are always applied with no choice. The Layout Container policy styles the container. A Page Policy clientlib only loads CSS and JS.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEMaaCS: Style System",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/page-editor/style-system"
            },
            {
              "t": "Using Core Components",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/get-started/using"
            }
          ]
        },
        "why": {
          "a": "Default CSS Classes are always applied; authors get no choice.",
          "c": "The Layout Container's policy styles the container, not the Teaser.",
          "d": "A clientlib only loads CSS and JS; it gives authors no choice."
        }
      },
      {
        "id": "q65",
        "section": "S1",
        "type": "single",
        "stem": "A new FAQ component is deployed with componentGroup=\"My Site - Content\", but authors don't see it in the component browser on pages built from the Article template.",
        "q": "What needs to change?",
        "options": [
          {
            "id": "a",
            "text": "Add the FAQ component to the template's Initial Content"
          },
          {
            "id": "b",
            "text": "Enable the “My Site - Content” group (or the FAQ component) in the Layout Container's policy on the Article template"
          },
          {
            "id": "c",
            "text": "Add a clientlib for the FAQ component to the Page Policy"
          },
          {
            "id": "d",
            "text": "Set the component's jcr:title to match the template name"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "The component exists, but authors can't add it. Which setting decides which components are allowed in that part of the page?",
        "explain": "The container that accepts drops (the Layout Container) holds the allowed-components list in its policy. Initial Content only pre-places components on new pages. A clientlib loads assets, and the title has no effect on whether a component is allowed.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "Using Core Components",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/get-started/using"
            }
          ]
        },
        "why": {
          "a": "Initial Content only pre-places components on new pages; it doesn't make them droppable.",
          "c": "A clientlib loads assets; it doesn't allow a component.",
          "d": "The title has no effect on whether a component is allowed."
        }
      },
      {
        "id": "q66",
        "section": "S4",
        "type": "single",
        "stem": "An AEMaaCS project needs a new Lucene index for a custom product search.",
        "q": "Where and how should the definition be delivered?",
        "options": [
          {
            "id": "a",
            "text": "Create it in CRXDE on production under /oak:index"
          },
          {
            "id": "b",
            "text": "In ui.apps under jcr_root/_oak_index/ with a prefixed, versioned name like acme.productSearch-1-custom-1, deployed through the pipeline"
          },
          {
            "id": "c",
            "text": "In ui.content under /etc/oak:indexes"
          },
          {
            "id": "d",
            "text": "In repository.xml in the quickstart folder"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "On the cloud version you can't change the repository by hand. How do you ship a new search index?",
        "explain": "Adobe: index changes on AEMaaCS ship through deployments, under ui.apps/.../_oak_index with a filter entry. Customized out-of-the-box indexes append -custom-<n>; fully custom ones also take a prefix such as acme. to avoid clashes. Only lucene indexes are supported, and changing production directly breaks CI/CD.",
        "audit": {
          "ver": "corrected",
          "note": "Answer fixed: fully custom indexes need a prefix too.",
          "src": [
            {
              "t": "AEMaaCS: Content Search and Indexing",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html?lang=en"
            }
          ]
        },
        "why": {
          "a": "Changing production directly breaks CI/CD; AEMaaCS index changes ship through deployments.",
          "c": "/etc/oak:indexes isn't an index location; definitions go under /oak:index (_oak_index in code).",
          "d": "repository.xml isn't how indexes are defined."
        }
      },
      {
        "id": "q67",
        "section": "S4",
        "type": "multi",
        "stem": "On AEM 6.5, a package that registers a new JCR namespace replicates to Publish and the queue blocks. Other content replicates normally.",
        "q": "Which two causes are most likely? (Choose two.)",
        "options": [
          {
            "id": "a",
            "text": "The replication user lacks jcr:namespaceManagement at the repository level"
          },
          {
            "id": "b",
            "text": "The replication user lacks read/write on the target content path"
          },
          {
            "id": "c",
            "text": "The admin user's password expired"
          },
          {
            "id": "d",
            "text": "The Dispatcher flush agent is disabled"
          },
          {
            "id": "e",
            "text": "The Oak index for the content is out of date"
          }
        ],
        "correct": [
          "a",
          "b"
        ],
        "plain": "Replication logs in as a specific service account, not admin. What would that account need to be able to do for this package to land?",
        "explain": "Replication writes to Publish as the replication (transport) user, so failures come down to that user's privileges: write access where the content lands, plus jcr:namespaceManagement for registering the namespace. The admin's password doesn't matter, a disabled flush agent wouldn't block the replication queue, and indexes don't affect replication.",
        "audit": {
          "ver": "verified",
          "src": [
            {
              "t": "AEM 6.5: Troubleshooting Replication",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/configuring/troubleshoot-rep"
            }
          ]
        },
        "why": {
          "a": "Correct: registering a namespace needs jcr:namespaceManagement at the repository level.",
          "b": "Correct: the replication user also needs read and write where the content is installed.",
          "c": "Replication runs as the replication user, not the admin.",
          "d": "The flush agent clears the cache; it doesn't block the replication queue.",
          "e": "Indexes don't affect replication."
        }
      },
      {
        "id": "q68",
        "section": "S4",
        "type": "single",
        "stem": "An on-prem 6.5 team needs to apply the latest service pack with the least disruption to authors and site visitors.",
        "q": "Which approach fits best?",
        "options": [
          {
            "id": "a",
            "text": "Apply it to production first, since that's where issues matter"
          },
          {
            "id": "b",
            "text": "Apply it on a staging environment that mirrors prod, validate, then roll it to production in a planned window"
          },
          {
            "id": "c",
            "text": "Skip service packs until a user reports a bug"
          },
          {
            "id": "d",
            "text": "Apply it to Publish only, leaving Author on the old version"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You need to upgrade without breaking anything for users. Is the safe move to try it somewhere else first, or go straight to the live site?",
        "explain": "Minimal disruption means staged and validated: test on a prod-like stage, then apply to production in a planned window. Going straight to prod or waiting for bug reports is reactive and risky, and running different versions on Author and Publish causes problems of its own. On AEMaaCS, Adobe applies updates through the pipeline instead.",
        "audit": {
          "ver": "partial",
          "note": "No AEM 6.5 service-pack page was found. Adobe's AEMaaCS update flow (dev, then stage, then prod) follows the same staged pattern.",
          "src": [
            {
              "t": "AEMaaCS: AEM Version Updates",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/deploying/aem-version-updates"
            }
          ]
        },
        "why": {
          "a": "Going straight to production skips validation, the opposite of least disruption.",
          "c": "Waiting for bug reports is reactive and leaves known fixes unapplied.",
          "d": "Running different versions on Author and Publish causes problems of its own."
        }
      },
      {
        "id": "q69",
        "section": "S4",
        "type": "single",
        "stem": "A job that should offload from one 6.5 author instance to another never moves. The topology view shows each instance alone.",
        "q": "Which service is responsible for instances discovering each other?",
        "options": [
          {
            "id": "a",
            "text": "Sling Discovery"
          },
          {
            "id": "b",
            "text": "Topology Offloading Bridge"
          },
          {
            "id": "c",
            "text": "Replication Agent Manager"
          },
          {
            "id": "d",
            "text": "Cluster Heartbeat Servlet"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "Two servers can't see each other, so they can't share work. Which built-in service lets AEM instances find each other?",
        "explain": "Adobe: offloading is built on Apache Sling Discovery, whose Discovery Service runs on each instance and joins the topology through a Topology Connector. The three other names are invented.",
        "audit": {
          "ver": "corrected",
          "note": "Explanation fixed: Topology Connector is real.",
          "src": [
            {
              "t": "AEM 6.5: Offloading Jobs",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/offloading.html?lang=en"
            }
          ]
        },
        "why": {
          "b": "Invented name.",
          "c": "Invented name.",
          "d": "Invented name."
        }
      },
      {
        "id": "q70",
        "section": "S3",
        "type": "single",
        "stem": "A developer adds a new OSGi config for a factory service that should exist twice on Publish only, with different settings each time.",
        "q": "Which file layout is correct?",
        "options": [
          {
            "id": "a",
            "text": "/apps/my-site/osgiconfig/config.publish/com.example.Feed~news.cfg.json and ...~events.cfg.json"
          },
          {
            "id": "b",
            "text": "/apps/my-site/osgiconfig/config/com.example.Feed~news.cfg.json and ...~events.cfg.json"
          },
          {
            "id": "c",
            "text": "/conf/my-site/osgiconfig/config.publish/com.example.Feed.cfg.json"
          },
          {
            "id": "d",
            "text": "/libs/my-site/config.publish/com.example.Feed~news.cfg.json"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You want two copies of one service's settings, used only on Publish. What folder name targets Publish, and how do you name each copy?",
        "explain": "Configs go under /apps/<project>/osgiconfig/config.<runmode>, so Publish-only means config.publish, with one file per factory instance. Adobe's OSGi page writes the name as <factoryPID>-<name>.cfg.json and its logging page uses ~name, so the separator isn't the point. (b) has no publish runmode, (c) is /conf, and /libs is Adobe's.",
        "audit": {
          "ver": "corrected",
          "note": "Fixed: Adobe's own docs use both - and ~ for factory names, so the old 'dash is the old style' claim is gone.",
          "src": [
            {
              "t": "AEMaaCS: Configuring OSGi",
              "u": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/deploying/configuring-osgi.html"
            },
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "b": "The plain config folder has no runmode, so it would apply to Author too.",
          "c": "/conf isn't where OSGi configs go, and one file can't define two factory instances.",
          "d": "/libs is Adobe's; your code goes in /apps."
        }
      },
      {
        "id": "q71",
        "section": "S5",
        "type": "single",
        "stem": "An AEMaaCS site's marketing team wants to know what share of all Publish traffic is answered from cache without ever reaching AEM, so they can push that number up.",
        "q": "Which log should the developer download from Cloud Manager to measure it?",
        "options": [
          {
            "id": "a",
            "text": "The Publish Dispatcher log (aemdispatcher)"
          },
          {
            "id": "b",
            "text": "The CDN log for the Publish service"
          },
          {
            "id": "c",
            "text": "The Publish request log (aemrequest)"
          },
          {
            "id": "d",
            "text": "The Author access log (aemaccess)"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "On Cloud Service, the CDN sits in front of everything. Which log sees every visitor request, including the ones the CDN answers by itself?",
        "explain": "Adobe's cache hit ratio guide uses only the CDN logs, downloaded per Publish environment in Cloud Manager. Each entry records a cache status: HIT (served by the CDN with no request to AEM), MISS (fetched from AEM) or PASS (never cached). Adobe suggests aiming for a ratio of 90% or higher. Logs behind the CDN never see its HITs, so they can't give the whole-site ratio.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against Adobe's CDN cache hit ratio guide.",
          "src": [
            {
              "t": "CDN cache hit ratio analysis",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/caching/cdn-cache-hit-ratio-analysis"
            },
            {
              "t": "CDN log analysis tooling",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/cloud-manager/devops/cdn-log-analysis"
            },
            {
              "t": "AEMaaCS: Debugging using logs",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"
            }
          ]
        },
        "why": {
          "a": "The Dispatcher sits behind the CDN, so requests the CDN answers as HITs never reach it. It can't show the share answered at the edge.",
          "c": "The request log is AEM's per-request timing log, behind both the CDN and the Dispatcher. CDN HITs never appear in it.",
          "d": "Author isn't where site visitors' traffic goes, and an access log behind the CDN never sees CDN HITs."
        }
      },
      {
        "id": "q72",
        "section": "S2",
        "type": "single",
        "stem": "Near the top of a script, an <h2> renders only when ${properties.jcr:title} has a value. Lower down, a 'back to top' link should follow exactly the same condition.",
        "q": "What's the cleanest way to reuse the condition?",
        "options": [
          {
            "id": "a",
            "text": "Put data-sly-test.hasTitle=\"${properties.jcr:title}\" on the <h2>, then data-sly-test=\"${hasTitle}\" on the link"
          },
          {
            "id": "b",
            "text": "Declare it with data-sly-use.hasTitle=\"${properties.jcr:title}\""
          },
          {
            "id": "c",
            "text": "Repeat the full test, because a data-sly-test identifier only exists inside its own element"
          },
          {
            "id": "d",
            "text": "Wrap both elements in data-sly-list over the title"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You already checked 'is there a title?' once. How do you save that answer under a name and check it again later in the same file?",
        "explain": "HTL spec (data-sly-test): the identifier stores the test result as-is, and it's global to the script from its declaration onward, so a later element can test ${hasTitle}.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the HTL spec, data-sly-test.",
          "src": [
            {
              "t": "WKND tutorial: Custom Component (Adobe)",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/custom-component"
            },
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "b": "data-sly-use loads a Use-object (a model, script or template), not a test result.",
          "c": "The spec makes the data-sly-test identifier global to the script after its declaration.",
          "d": "data-sly-list iterates a collection; it isn't a way to store a condition."
        }
      },
      {
        "id": "q73",
        "section": "S2",
        "type": "single",
        "stem": "A nav component loops with <li data-sly-list.page=\"${nav.pages}\">. The design needs an extra CSS class on the first <li> only.",
        "q": "Which expression is true only for the first item?",
        "options": [
          {
            "id": "a",
            "text": "${itemList.first}"
          },
          {
            "id": "b",
            "text": "${pageList.first}"
          },
          {
            "id": "c",
            "text": "${page.first}"
          },
          {
            "id": "d",
            "text": "${nav.pages.isFirst}"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "The loop variable was renamed to 'page'. What is its status helper called, and which of its members means 'first'?",
        "explain": "HTL spec (data-sly-list): naming the item 'page' makes the status variable pageList, with members index, count, first, middle, last, odd and even. itemList only exists when the item keeps the default name.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the HTL spec, data-sly-list.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "a": "itemList is the status variable only when the item keeps the default name 'item'. Here it's renamed, so it's pageList.",
          "c": "'first' lives on the status variable, not on the item itself.",
          "d": "Invented member; the list itself carries no position flags."
        }
      },
      {
        "id": "q74",
        "section": "S2",
        "type": "single",
        "stem": "A page script includes its child node 'teaser'. The node's own resource type is a generic text component, but here it must render with my-site/components/teaser instead.",
        "q": "Which HTL does that?",
        "options": [
          {
            "id": "a",
            "text": "<div data-sly-resource=\"${'teaser' @ resourceType='my-site/components/teaser'}\"></div>"
          },
          {
            "id": "b",
            "text": "<div data-sly-include=\"my-site/components/teaser/teaser.html\"></div>"
          },
          {
            "id": "c",
            "text": "<div data-sly-resource=\"${'teaser' @ selectors='teaser'}\"></div>"
          },
          {
            "id": "d",
            "text": "<div data-sly-use.teaser=\"my-site/components/teaser\"></div>"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You want to render the 'teaser' child node, but force it to use a different component's scripts. Which option overrides the resource type?",
        "explain": "HTL spec (data-sly-resource): the resourceType option renders the given path with the script mapped to the overriding resource type. The other options are appendPath, prependPath, selectors, addSelectors and removeSelectors.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the HTL spec, data-sly-resource.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "b": "data-sly-include runs a script in the current context; it doesn't render the 'teaser' node as its own resource.",
          "c": "Selectors change which script of the same resource type is picked; they don't change the resource type.",
          "d": "data-sly-use loads a model or template; it doesn't render a resource."
        }
      },
      {
        "id": "q75",
        "section": "S2",
        "type": "single",
        "stem": "Shared markup lives in /apps/my-site/components/shared/card-lib.html as <template data-sly-template.card=\"${@ title, link}\">…</template>. Another component needs to render one card.",
        "q": "How does the other component's script render it?",
        "options": [
          {
            "id": "a",
            "text": "<sly data-sly-use.lib=\"/apps/my-site/components/shared/card-lib.html\"/><sly data-sly-call=\"${lib.card @ title=model.title, link=model.url}\"/>"
          },
          {
            "id": "b",
            "text": "<sly data-sly-include=\"/apps/my-site/components/shared/card-lib.html\"/>, which picks up title and link from the caller's variables"
          },
          {
            "id": "c",
            "text": "<sly data-sly-call=\"${'card-lib.html' @ title=model.title, link=model.url}\"/>"
          },
          {
            "id": "d",
            "text": "<sly data-sly-template.card=\"${model}\"/>"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "The card template sits in another file. First you load that file under a name, then you call the template and hand it its inputs.",
        "explain": "HTL spec (data-sly-template / data-sly-call): load the file with data-sly-use, call ${lib.card}, and pass parameters as expression options. The call scope isn't inherited, so values must be passed explicitly; missing parameters become empty strings.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the HTL spec, template and call.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "b": "data-sly-include doesn't call a named template, and template scope isn't inherited from the caller.",
          "c": "data-sly-call needs a template object loaded first with data-sly-use, not a file name string.",
          "d": "data-sly-template declares a template; it doesn't call one."
        }
      },
      {
        "id": "q76",
        "section": "S2",
        "type": "single",
        "stem": "A wrapper <div class=\"teaser-frame\"> is only needed when model.framed is true. When it's false, the wrapper's children must still render, just without the <div>.",
        "q": "Which attribute on the wrapper does that?",
        "options": [
          {
            "id": "a",
            "text": "data-sly-test=\"${model.framed}\""
          },
          {
            "id": "b",
            "text": "data-sly-unwrap=\"${!model.framed}\""
          },
          {
            "id": "c",
            "text": "data-sly-attribute.class=\"${model.framed}\""
          },
          {
            "id": "d",
            "text": "data-sly-element=\"${model.framed}\""
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "You want to drop the outer tag but keep everything inside it. Which statement removes only the tag?",
        "explain": "HTL spec (data-sly-unwrap): removes the host element's tags while always keeping its content; the element is shown only when the expression is false.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the HTL spec, data-sly-unwrap.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "a": "data-sly-test removes the element and its content when false, so the children would disappear too.",
          "c": "data-sly-attribute only changes attributes; the <div> stays.",
          "d": "data-sly-element changes the tag name; it can't remove the tag and keep the content."
        }
      },
      {
        "id": "q77",
        "section": "S2",
        "type": "single",
        "stem": "Markup: <a href=\"${model.url}\" data-sly-attribute.target=\"${model.target}\">. An author left the target field empty, so model.target returns an empty string.",
        "q": "What renders for target?",
        "options": [
          {
            "id": "a",
            "text": "target=\"\""
          },
          {
            "id": "b",
            "text": "The target attribute is left out entirely"
          },
          {
            "id": "c",
            "text": "target=\"null\""
          },
          {
            "id": "d",
            "text": "Nothing: the whole <a> is skipped"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "When the value for an attribute is blank, does HTL print an empty attribute or drop it?",
        "explain": "HTL spec (data-sly-attribute): an empty string removes the attribute; so does false for boolean attributes and an empty array. The element itself still renders.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the HTL spec, data-sly-attribute.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "a": "The spec removes the attribute for an empty string rather than printing it empty.",
          "c": "An empty string isn't turned into the text 'null'.",
          "d": "data-sly-attribute only affects the attribute; it never removes the element."
        }
      },
      {
        "id": "q78",
        "section": "S2",
        "type": "single",
        "stem": "A rich text field stores author markup (<p>, <strong>, <a>). It must render as real markup on the page, but a pasted <script> must never execute.",
        "q": "Which expression fits?",
        "options": [
          {
            "id": "a",
            "text": "${properties.text}"
          },
          {
            "id": "b",
            "text": "${properties.text @ context='unsafe'}"
          },
          {
            "id": "c",
            "text": "${properties.text @ context='html'}"
          },
          {
            "id": "d",
            "text": "${properties.text @ context='uri'}"
          }
        ],
        "correct": [
          "c"
        ],
        "plain": "You want formatting tags kept but dangerous tags stripped. Which display context filters markup instead of escaping or allowing everything?",
        "explain": "HTL spec (display contexts): 'html' filters markup to remove dangerous tags. The default in an element body is 'text', which escapes every tag so it shows as visible text. 'unsafe' turns off XSS protection entirely.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the HTL spec, display contexts.",
          "src": [
            {
              "t": "HTL Specification (Adobe)",
              "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
            }
          ]
        },
        "why": {
          "a": "In an element body the default is 'text', which escapes the markup, so authors would see raw tags.",
          "b": "'unsafe' disables escaping and XSS protection, so a <script> could get through.",
          "d": "'uri' is for URL values such as href and src, not body markup."
        }
      },
      {
        "id": "q79",
        "section": "S2",
        "type": "single",
        "stem": "A model is declared @Model(adaptables = Resource.class) and adds @ScriptVariable private Page currentPage. That field never gets populated, and the model fails to adapt.",
        "q": "What's the most likely cause?",
        "options": [
          {
            "id": "a",
            "text": "@ScriptVariable reads the script bindings on the request, so the model needs to adapt from SlingHttpServletRequest"
          },
          {
            "id": "b",
            "text": "currentPage has to be injected with @ValueMapValue instead"
          },
          {
            "id": "c",
            "text": "Sling Models can't inject into private fields"
          },
          {
            "id": "d",
            "text": "@ScriptVariable only works inside a Sling servlet"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "currentPage is one of the objects a script gets handed. Where do those objects live, and can a model built from a plain resource reach them?",
        "explain": "Apache Sling Models (Available Injectors): the script-bindings injector looks up objects in the script bindings, and applies to request objects carrying the Sling Bindings attribute. A Resource-adapted model has no request, so there are no bindings to read.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the Apache Sling Models injector table.",
          "src": [
            {
              "t": "Apache Sling Models",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"
            }
          ]
        },
        "why": {
          "b": "@ValueMapValue reads the resource's properties; currentPage isn't a property.",
          "c": "Sling Models inject into private fields routinely; field visibility isn't the problem.",
          "d": "Script bindings exist when a script renders the request (HTL included); a servlet isn't required."
        }
      },
      {
        "id": "q80",
        "section": "S2",
        "type": "single",
        "stem": "A component node has a child node 'links' holding item0, item1 and item2 (a multifield). The model is @Model(adaptables = Resource.class) and should expose all three.",
        "q": "Which field declaration gets them as a list in one injection?",
        "options": [
          {
            "id": "a",
            "text": "@ValueMapValue(name = \"links\") private List<Resource> links;"
          },
          {
            "id": "b",
            "text": "@ChildResource(name = \"links\") private List<Resource> links;"
          },
          {
            "id": "c",
            "text": "@RequestAttribute(name = \"links\") private List<Resource> links;"
          },
          {
            "id": "d",
            "text": "@OSGiService private List<Resource> links;"
          }
        ],
        "correct": [
          "b"
        ],
        "plain": "'links' is a child node with its own children, not a property. Which injector reaches into child nodes?",
        "explain": "Apache Sling Models: the child-resources injector gets a child resource by name and applies to Resource adaptables. With a parameterized List, it returns all child resources under the named resource.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against the Apache Sling Models docs.",
          "src": [
            {
              "t": "Apache Sling Models",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"
            }
          ]
        },
        "why": {
          "a": "@ValueMapValue reads properties of this resource; 'links' is a child node, not a property.",
          "c": "Request attributes are values set on the request, and this model doesn't even adapt from a request.",
          "d": "@OSGiService injects OSGi services, not content."
        }
      },
      {
        "id": "q81",
        "section": "S2",
        "type": "single",
        "stem": "The project's proxy of the Core Components Title must return the title in uppercase. Everything else about the Title model stays the same.",
        "q": "What's Adobe's documented way to do this?",
        "options": [
          {
            "id": "a",
            "text": "Write a model for the proxy that injects the core model with @Self @Via(type = ResourceSuperType.class), delegates every method, and overrides only getText()"
          },
          {
            "id": "b",
            "text": "Copy the core Title model class into the project and edit getText()"
          },
          {
            "id": "c",
            "text": "Edit the Core Components code so getText() uppercases"
          },
          {
            "id": "d",
            "text": "Change the proxy's sling:resourceSuperType to point at a new custom component"
          }
        ],
        "correct": [
          "a"
        ],
        "plain": "You can't change Adobe's Title code, and its model isn't open for you to copy. How do you wrap it and change one method?",
        "explain": "Adobe (Customizing Core Components): the models are private, so their logic is extended with a Sling delegation pattern. The example injects the core model with @Self @Via(type = ResourceSuperType.class) and overrides one method. Adobe also says never to modify Core Components code directly.",
        "audit": {
          "ver": "verified",
          "note": "Self-authored item, Oct 22, 2026. Checked against Adobe's Customizing Core Components page and the Sling Models @Via docs.",
          "src": [
            {
              "t": "Customizing Core Components",
              "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/customizing"
            },
            {
              "t": "Apache Sling Models",
              "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"
            }
          ]
        },
        "why": {
          "b": "Adobe says the models are private and must be extended by delegation, not copied.",
          "c": "Adobe says never to modify Core Components code directly.",
          "d": "Repointing the supertype drops the core Title's logic instead of extending it."
        }
      }
    ];
  (Object.assign(Ms, SMs), As.push(...NEW_DRILLS), Yp.push(...NEW_GLOSSARY), Lf.push(...NEW_WEAK));
  /* ===== Oct 14 2026 update: helper + new UI blocks ===== */
  function wlab(n) {
    let w = SPs.find((x) => x.n === n);
    return w ? "sprint " + w.label : "W" + n;
  }
  var MONO = "'IBM Plex Mono', monospace",
    SANS = "'IBM Plex Sans', sans-serif",
    JET = "'JetBrains Mono', monospace",
    smallBtn = {
      padding: "6px 12px",
      borderRadius: 5,
      cursor: "pointer",
      border: `1px solid ${f.border}`,
      background: "transparent",
      color: f.dim,
      fontFamily: MONO,
      fontSize: 11.5,
      flexShrink: 0,
    };
  function RulesCard() {
    let h = i.default.createElement,
      [open, setOpen] = (0, i.useState)(!0);
    let table = (title, rows, color) =>
      h(
        "div",
        { style: { marginTop: 16 } },
        h(
          "div",
          { style: { fontFamily: MONO, fontSize: 10.5, color, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 6 } },
          title,
        ),
        h(
          "div",
          { style: { display: "grid", gap: 4 } },
          rows.map(([k, v]) =>
            h(
              "div",
              {
                key: k,
                style: {
                  display: "grid",
                  gridTemplateColumns: "minmax(104px, 38%) 1fr",
                  gap: 10,
                  padding: "6px 9px",
                  background: f.panelAlt,
                  border: `1px solid ${f.border}`,
                  borderRadius: 4,
                },
              },
              h("span", { style: { fontFamily: MONO, fontSize: 12, color: f.text, wordBreak: "break-word" } }, k),
              h("span", { style: { fontFamily: SANS, fontSize: 12.5, color: f.dim, lineHeight: 1.45 } }, v),
            ),
          ),
        ),
      );
    return h(
      me,
      { style: { padding: 18 } },
      h(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 } },
        h("h2", { style: { margin: 0, fontFamily: JET, fontSize: 16, color: f.text } }, "core rules"),
        h("button", { onClick: () => setOpen((x) => !x), style: smallBtn }, open ? "collapse" : "expand"),
      ),
      h(
        "p",
        { style: { margin: "4px 0 12px", fontSize: 12.5, color: f.dim, fontFamily: SANS } },
        "Most questions are one of these rules in a scenario. Learn these first, then name the rule behind every answer.",
      ),
      open &&
        h(
          i.default.Fragment,
          null,
          h(
            "ol",
            { style: { margin: 0, paddingLeft: 22, display: "grid", gap: 7 } },
            CORE_RULES.map((r) =>
              h(
                "li",
                { key: r.n, style: { fontFamily: SANS, fontSize: 13.5, color: f.text, lineHeight: 1.5 } },
                h("strong", { style: { fontWeight: 600 } }, r.rule),
                " ",
                h("span", { style: { color: f.dim } }, r.detail),
              ),
            ),
          ),
          table("path map (rule 4)", PATH_MAP, f.violet),
          table("which log?", LOG_MAP, f.red),
          table(
            "dispatcher — three separate jobs",
            [
              ["/filter", "Which requests get in. Does not decide caching."],
              ["/cache /rules", "What gets cached."],
              ["flush agent / invalidate", "When cached files get cleared. Stale content right after publishing → look here."],
            ],
            f.cyan,
          ),
        ),
    );
  }

  /* ===== Oct 22 2026: Adobe's official exam facts + prep-guide reading list ===== */
  var OFFICIAL_EXAM = {
      url: "https://certification.adobe.com/certification/sites-developer-professional-v2/1232?tab=certificate1",
      checked: "2026-10-22",
      facts: [
        ["Time limit", "1 h 40 min (100 min)"],
        ["Questions", "50 scored (prep guide)"],
        ["Passing score", "32 / 50 (64%)"],
        ["Budget", "about 2 min per question"],
        ["Format", "1-of-4 and 2+-of-5+; no guessing penalty (prep guide)"],
        ["Delivery", "online proctored, camera on, English only"],
        ["Cost", "$125"],
      ],
      note: "Time, passing score, cost and delivery are from Adobe's exam page. Question count and formats are from Adobe's Exam Prep Guide (transcribed July 2026). Re-check the exam page before booking.",
    },
    OFFICIAL_READING = [
      { sec: "S1", objectives: ["Purpose of Dispatcher configurations and caching", "Steps to configure multi-site in AEM", "Create and manage OSGi configurations", "Manage custom Oak indexes", "Create and manage AEM custom logs"],
        res: [
          { t: "Dispatcher Overview", u: "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/dispatcher", n: "Stand-in: the guide's Dispatcher list wasn't captured" },
          { t: "Caching in AEM as a Cloud Service", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/content-delivery/caching", n: "Stand-in: the guide's Dispatcher list wasn't captured" },
          { t: "Multi Site Manager and Translation", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/administering/reusing-content/msm-and-translation" },
          { t: "Configuring Live Copy Synchronization", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/administering/reusing-content/msm/live-copy-sync-config" },
          { t: "Configuring OSGi", u: "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/deploying/configuring-osgi.html" },
          { t: "OSGi Configuration Settings", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/configuring/osgi-configuration-settings" },
          { t: "Best Practices for Queries and Indexing", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/practices/best-practices-for-queries-and-indexing" },
          { t: "SAML 2.0 Authentication Handler", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/security/saml-2-0-authenticationhandler" },
        ] },
      { sec: "S2", objectives: ["Implement a proxy of a Core Component", "Create component functionality: HTL, models, services", "Develop workflows", "Purpose of Content Fragments vs Experience Fragments", "Find the correct log (prep guide only)", "Implement editable templates"],
        res: [
          { t: "Using Core Components", u: "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/get-started/using" },
          { t: "Working with Workflows", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/workflows/overview" },
          { t: "Creating Page Templates", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/page-editor/templates", n: "Now titled 'Templates to Create Pages that are Editable with the Page Editor'" },
          { t: "Working with Content Fragments", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/content-fragments/content-fragments" },
          { t: "AEM GraphQL API for use with Content Fragments", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/content-fragments/content-fragments-graphql" },
          { t: "SPA Introduction and Walkthrough", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/hybrid/introduction" },
          { t: "Developing and Extending Workflows", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/extending-aem/extending-workflows/workflows" },
          { t: "Extending Workflow Functionality", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/extending-aem/extending-workflows/workflows-customizing-extending" },
          { t: "Page Templates - Editable", u: "https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/templates/page-templates-editable.html?lang=en" },
          { t: "Exporting Experience Fragments to Adobe Target", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/integrations/experience-fragments-target" },
          { t: "Debugging AEM as a Cloud Service using logs", u: "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs" },
          { t: "Monitoring and maintaining your AEM instance", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/configuring/monitoring-and-maintaining" },
          { t: "HTL Specification", u: "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md" },
          { t: "Client Request Logging (Apache Sling)", u: "https://sling.apache.org/documentation/development/client-request-logging.html" },
          { t: "Custom component - storing value at template level - data-sly-resource", u: "https://experienceleaguecommunities.adobe.com/adobe-experience-manager-sites-8/custom-component-storing-value-at-template-level-data-sly-resource-15725", n: "Community thread; open it yourself (it couldn't be read automatically)" },
        ] },
      { sec: "S3", objectives: ["Correct Maven project structure", "Configure projects from archetypes"],
        res: [
          { t: "AEM Project Structure", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/aem-project-content-package-structure" },
          { t: "Project Setup (WKND tutorial)", u: "https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/project-setup" },
          { t: "AEM Project Archetype", u: "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/archetype/overview" },
        ] },
      { sec: "S4", objectives: ["Purpose of AEM maintenance releases", "Configure AEM across topologies", "Issues with the replication process", "Create custom Oak indexes"],
        res: [
          { t: "Operations Dashboard", u: "https://experienceleague.adobe.com/docs/experience-manager-65/administering/operations/operations-dashboard.html?lang=en" },
          { t: "Replication", u: "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/replication.html?lang=en" },
          { t: "Troubleshooting Replication", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/configuring/troubleshoot-rep" },
          { t: "Oak Queries and Indexing", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/deploying/queries-and-indexing" },
          { t: "Author and Publish Architectural Overview (AEM Screens)", u: "https://experienceleague.adobe.com/en/docs/experience-manager-screens/user-guide/administering/author-publish/author-publish-architecture-overview" },
          { t: "Indexing best practices in AEM", u: "https://experienceleague.adobe.com/en/docs/experience-manager-learn/foundation/development/understand-indexing-best-practices" },
          { t: "Remote debugging the AEM SDK", u: "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-sdk/remote-debugging" },
          { t: "Deprecated and Removed Features and APIs", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/deprecated-removed-features" },
          { t: "Current Release Notes (maintenance releases)", u: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/release-notes/release-notes-current", n: "The guide points at the current maintenance release notes" },
        ] },
      { sec: "S5", objectives: ["Which log to analyze", "Debug client libraries", "Debug Dispatcher configurations and caching", "Debug issues in AEM environments"],
        res: [
          { t: "Monitoring and maintaining your AEM instance", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/configuring/monitoring-and-maintaining" },
          { t: "Logging", u: "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/configure-logging.html?lang=en" },
          { t: "Debugging AEM as a Cloud Service with Repository Browser", u: "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/repository-browser" },
          { t: "Custom Standalone Install", u: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/deploying/custom-standalone-install" },
          { t: "How to debug client-side issues in the AEM Touch UI or Classic UI", u: "https://experienceleague.adobe.com/docs/experience-cloud-kcs/kbarticles/KA-16935.html" },
        ] },
    ];
  function slugKey(u) {
    try {
      let x = new URL(u), segs = x.pathname.replace(/\.html$/, "").toLowerCase().split("/").filter(Boolean);
      return x.hostname + ":" + segs.slice(-2).join("/");
    } catch (e) { return u; }
  }
  var OFFICIAL_KEYS = new Set(OFFICIAL_READING.flatMap((s) => s.res.filter((r) => !r.n || !/^Stand-in/.test(r.n)).map((r) => slugKey(r.u))));
  function onReadingList(src) { return !!(src && src.some((x) => OFFICIAL_KEYS.has(slugKey(x.u)))); }
  function OfficialExamCard() {
    let h = i.default.createElement,
      [open, setOpen] = (0, i.useState)(null),
      lab = { fontFamily: MONO, fontSize: 10.5, color: f.dim, letterSpacing: 0.6, textTransform: "uppercase" };
    return h(
      me,
      { style: { padding: 18 } },
      h("h2", { style: { margin: "0 0 4px", fontFamily: JET, fontSize: 16, color: f.text } }, "adobe's official exam"),
      h("p", { style: { margin: "0 0 12px", fontSize: 12.5, color: f.dim, fontFamily: SANS, lineHeight: 1.5 } }, OFFICIAL_EXAM.note),
      h(
        "div",
        { style: { display: "grid", gridTemplateColumns: "minmax(90px, max-content) 1fr", gap: "5px 12px", marginBottom: 12 } },
        OFFICIAL_EXAM.facts.flatMap(([k, v]) => [
          h("span", { key: k + "k", style: { fontFamily: MONO, fontSize: 12, color: f.dim } }, k),
          h("span", { key: k + "v", style: { fontFamily: SANS, fontSize: 13, color: f.text } }, v),
        ]),
      ),
      h("a", { href: OFFICIAL_EXAM.url, target: "_blank", rel: "noopener noreferrer", style: { color: f.cyan, fontSize: 12.5, fontFamily: SANS, textDecoration: "underline" } }, "Adobe exam page (checked " + OFFICIAL_EXAM.checked + ") ↗"),
      h("div", { style: { ...lab, margin: "16px 0 6px" } }, "objectives + adobe's reading list"),
      h(
        "p",
        { style: { margin: "0 0 8px", fontSize: 12, color: f.dim, fontFamily: SANS, lineHeight: 1.45 } },
        "Titles come from Adobe's Exam Prep Guide; links are the current pages with those titles. Drill items that cite one of these show 'on Adobe's reading list'.",
      ),
      h(
        "div",
        { style: { display: "grid", gap: 8 } },
        OFFICIAL_READING.map((s) => {
          let sec = Ft.find((x) => x.id === s.sec) || {},
            isOpen = open === s.sec;
          return h(
            "div",
            { key: s.sec, style: { border: `1px solid ${f.border}`, borderRadius: 5, background: f.panelAlt } },
            h(
              "button",
              { onClick: () => setOpen(isOpen ? null : s.sec), style: { width: "100%", textAlign: "left", background: "none", border: "none", padding: "10px 12px", cursor: "pointer", display: "flex", justifyContent: "space-between", gap: 8, color: f.text, fontFamily: SANS, fontSize: 13.5 } },
              h("span", null, h("span", { style: { fontFamily: MONO, color: sec.color, marginRight: 8 } }, s.sec), sec.name || ""),
              h("span", { style: { fontFamily: MONO, color: f.dim } }, (isOpen ? "− " : "+ ") + s.res.length),
            ),
            isOpen &&
              h(
                "div",
                { style: { padding: "0 12px 12px" } },
                h("div", { style: { ...lab, margin: "2px 0 4px" } }, "objectives"),
                h("ul", { style: { margin: "0 0 10px", paddingLeft: 18, fontSize: 13, lineHeight: 1.5, color: f.text, fontFamily: SANS } }, s.objectives.map((o, k) => h("li", { key: k }, o))),
                h("div", { style: { ...lab, margin: "2px 0 4px" } }, "reading list"),
                s.res.map((r, k) =>
                  h(
                    "div",
                    { key: k, style: { marginBottom: 5 } },
                    h("a", { href: r.u, target: "_blank", rel: "noopener noreferrer", style: { color: f.cyan, fontSize: 13, fontFamily: SANS, overflowWrap: "anywhere", textDecoration: "underline", textUnderlineOffset: 2 } }, r.t, " ↗"),
                    r.n && h("div", { style: { fontSize: 11.5, color: f.dim, fontFamily: SANS } }, r.n),
                  ),
                ),
              ),
          );
        }),
      ),
    );
  }

  function OfficialRunsCard() {
    let h = i.default.createElement,
      latest = OFFICIAL_RUNS[OFFICIAL_RUNS.length - 1];
    return h(
      me,
      { style: { padding: 18 } },
      h("h2", { style: { margin: "0 0 4px", fontFamily: JET, fontSize: 16, color: f.text } }, "official practice exam"),
      h(
        "p",
        { style: { margin: "0 0 14px", fontSize: 12.5, color: f.dim, fontFamily: SANS, lineHeight: 1.5 } },
        "Retired as a score on Oct 22, 2026. Logged by hand, not from /drill. After ~7 attempts it measures memory, not understanding. One more run is planned in sprint week 6: focused, timed, single sitting, as a stamina check only. /drill and the weekly self-checks are the real score.",
      ),
      h(
        "div",
        { style: { display: "grid", gap: 12 } },
        OFFICIAL_RUNS.slice()
          .reverse()
          .map((run) =>
            h(
              "div",
              { key: run.date, style: { padding: 12, background: f.panelAlt, border: `1px solid ${f.border}`, borderRadius: 5 } },
              h(
                "div",
                { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, gap: 8 } },
                h("span", { style: { fontFamily: MONO, fontSize: 12.5, color: f.text } }, run.date),
                h(
                  "span",
                  { style: { fontFamily: JET, fontSize: 14, fontWeight: 700, color: f.amber } },
                  `${run.correct}/${run.total} \xB7 ${Math.round((run.correct / run.total) * 100)}%`,
                ),
              ),
              h(
                "div",
                { style: { display: "grid", gap: 5 } },
                Ft.map((sec) => {
                  let pct = run.secs[sec.id];
                  return h(
                    "div",
                    { key: sec.id, style: { display: "grid", gridTemplateColumns: "34px 1fr 40px", alignItems: "center", gap: 8 } },
                    h("span", { style: { fontFamily: MONO, fontSize: 11.5, color: sec.color } }, sec.id),
                    h(
                      "div",
                      { style: { height: 8, background: f.bg, border: `1px solid ${f.border}`, borderRadius: 3, overflow: "hidden" } },
                      h("div", { style: { width: `${pct}%`, height: "100%", background: sec.color, opacity: 0.85 } }),
                    ),
                    h("span", { style: { fontFamily: MONO, fontSize: 11.5, color: f.dim, textAlign: "right" } }, pct + "%"),
                  );
                }),
              ),
              run === latest &&
                h(
                  "div",
                  { style: { marginTop: 10, display: "grid", gap: 3 } },
                  h("div", { style: { fontFamily: MONO, fontSize: 10.5, color: f.dim, letterSpacing: 0.6, textTransform: "uppercase" } }, "how much to trust each score"),
                  Ft.map((sec) =>
                    h(
                      "div",
                      { key: sec.id, style: { fontFamily: SANS, fontSize: 12, color: f.dim } },
                      h("span", { style: { fontFamily: MONO, color: sec.color } }, sec.id),
                      " — ",
                      SEC_TRUST[sec.id],
                    ),
                  ),
                ),
              h("p", { style: { margin: "10px 0 0", fontSize: 12.5, color: f.text, fontFamily: SANS, lineHeight: 1.5 } }, run.note),
            ),
          ),
      ),
    );
  }
  function ReadyCard() {
    let h = i.default.createElement,
      [rd, setRd] = (0, i.useState)({}),
      [ld, setLd] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
      (async () => {
        (setRd(await Eo("readiness", {})), setLd(!0));
      })();
    }, []);
    (0, i.useEffect)(() => {
      ld && Ta("readiness", rd);
    }, [rd, ld]);
    let done = READINESS.filter((r) => rd[r.id]).length;
    let routine = [
      ["10 min", "Core rules (/guide) + this week's topics, without looking"],
      ["15 min", "This week's hands-on task"],
      ["5 min", "Explain one question out loud, including why each wrong answer is wrong"],
    ];
    return h(
      me,
      { style: { padding: 18 } },
      h(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 } },
        h("h3", { style: { margin: 0, fontFamily: JET, fontSize: 13.5, color: f.green } }, "ready to book when…"),
        h("span", { style: { fontFamily: MONO, fontSize: 12, color: done === READINESS.length ? f.green : f.dim } }, `${done}/${READINESS.length}`),
      ),
      h(
        "div",
        { style: { display: "grid", gap: 6 } },
        READINESS.map((r) =>
          h(
            "button",
            {
              key: r.id,
              onClick: () => setRd((p) => ({ ...p, [r.id]: !p[r.id] })),
              style: {
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
                fontFamily: SANS,
                fontSize: 13.5,
                color: rd[r.id] ? f.dim : f.text,
                textDecoration: rd[r.id] ? "line-through" : "none",
                lineHeight: 1.45,
              },
            },
            rd[r.id]
              ? h(Xe, { size: 17, color: f.green, style: { flexShrink: 0, marginTop: 1 } })
              : h(Qt, { size: 17, color: f.faint, style: { flexShrink: 0, marginTop: 1 } }),
            r.text,
          ),
        ),
      ),
      h(
        "div",
        { style: { marginTop: 14, fontFamily: MONO, fontSize: 10.5, color: f.dim, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 6 } },
        "daily \xB7 about 30 min",
      ),
      h(
        "div",
        { style: { display: "grid", gap: 4 } },
        routine.map(([t, d]) =>
          h(
            "div",
            { key: t, style: { display: "grid", gridTemplateColumns: "54px 1fr", gap: 8, fontSize: 13, fontFamily: SANS, color: f.text, lineHeight: 1.45 } },
            h("span", { style: { fontFamily: MONO, fontSize: 12, color: f.amber } }, t),
            d,
          ),
        ),
      ),
      h(
        "p",
        { style: { margin: "12px 0 0", fontSize: 12.5, color: f.dim, fontFamily: SANS, lineHeight: 1.5 } },
        "Exam: Nov 24 target. Adobe's exam page: 100 minutes, passing score 32/50, so about 2 minutes per question. Avoid Thanksgiving week (Nov 26).",
      ),
    );
  }
  async function Eo(e, t) {
    try {
      let a = localStorage.getItem(Sf + e);
      if (a !== null) return JSON.parse(a);
    } catch (a) {}
    return t;
  }
  async function Ta(e, t) {
    try {
      localStorage.setItem(Sf + e, JSON.stringify(t));
    } catch (a) {
      console.error("storage save failed", a);
    }
  }
  function Ts() {
    return new Date().toISOString().slice(0, 10);
  }
  function If(e) {
    if (!e) return 0;
    let t = Date.parse(e + "T00:00:00Z"),
      a = Date.parse(Ts() + "T00:00:00Z");
    return Number.isNaN(t) ? 0 : Math.floor((a - t) / 864e5);
  }
  function Zp(e) {
    let t = If(e);
    return t < 0 ? 1 : Math.min(6, Math.floor(t / 7) + 1);
  }
  var me = ({ children: e, style: t }) =>
      i.default.createElement(
        "div",
        {
          style: {
            background: f.panel,
            border: `1px solid ${f.border}`,
            borderRadius: 6,
            ...t,
          },
        },
        e,
      ),
    nn = ({ color: e, children: t }) =>
      i.default.createElement(
        "span",
        {
          style: {
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            padding: "2px 7px",
            borderRadius: 4,
            border: `1px solid ${e}55`,
            color: e,
            background: `${e}14`,
            letterSpacing: 0.4,
          },
        },
        t,
      );
  function em({ compact: e }) {
    return i.default.createElement(
      "div",
      null,
      i.default.createElement(
        "div",
        {
          style: {
            display: "flex",
            height: e ? 8 : 14,
            borderRadius: 4,
            overflow: "hidden",
            border: `1px solid ${f.border}`,
          },
        },
        Ft.map((t) =>
          i.default.createElement("div", {
            key: t.id,
            title: `${t.name} \u2014 ${t.weight}%`,
            style: { width: `${t.weight}%`, background: t.color },
          }),
        ),
      ),
      !e &&
        i.default.createElement(
          "div",
          {
            style: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 },
          },
          Ft.map((t) =>
            i.default.createElement(
              "div",
              {
                key: t.id,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 11.5,
                  color: f.dim,
                  fontFamily: "'IBM Plex Mono', monospace",
                },
              },
              i.default.createElement("span", {
                style: {
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: t.color,
                  display: "inline-block",
                },
              }),
              t.id,
              " ",
              t.name,
              " \xB7 ",
              t.weight,
              "%",
            ),
          ),
        ),
    );
  }
  function tm({ tab: e, weekLabel: t }) {
    let [a, o] = (0, i.useState)(""),
      r = `dev@aem-prep:~/AD0-E128$ cd ${e}`;
    return (
      (0, i.useEffect)(() => {
        o("");
        let n = 0,
          l = setInterval(() => {
            (n++, o(r.slice(0, n)), n >= r.length && clearInterval(l));
          }, 14);
        return () => clearInterval(l);
      }, [e]),
      i.default.createElement(
        "div",
        {
          style: {
            background: f.panelAlt,
            border: `1px solid ${f.border}`,
            borderBottom: "none",
            borderRadius: "8px 8px 0 0",
            padding: "9px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
        },
        i.default.createElement(
          "div",
          { style: { display: "flex", alignItems: "center", gap: 8 } },
          i.default.createElement("span", {
            style: {
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#4B5563",
            },
          }),
          i.default.createElement("span", {
            style: {
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#4B5563",
            },
          }),
          i.default.createElement("span", {
            style: {
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: f.amber,
            },
          }),
          i.default.createElement(
            "span",
            {
              className: "apc-prompt",
              style: {
                marginLeft: 10,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12.5,
                color: f.dim,
              },
            },
            a,
            i.default.createElement(
              "span",
              { style: { opacity: 0.6 } },
              "\u258C",
            ),
          ),
        ),
        i.default.createElement(
          "span",
          {
            className: "apc-weeklabel",
            style: {
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              color: f.faint,
            },
          },
          t,
        ),
      )
    );
  }

  /* ===== Oct 15 2026 update: self-check gate + drill-this-week ===== */
  var WEEK_DRILLS = {
      101: ["q2", "q30", "q46", "q62", "q63"],
      102: ["q3", "q4", "q22", "q32", "q37", "q38", "q40", "q59", "q60", "q61", "q72", "q73", "q74", "q75", "q76", "q77", "q78", "q79", "q80", "q81"],
      103: ["q6", "q8", "q42", "q64", "q65"],
      104: ["q13", "q16", "q17", "q29", "q33", "q43", "q44", "q45", "q47", "q51", "q52", "q53", "q54", "q55", "q56", "q57", "q58", "q71"],
      105: ["q14", "q15", "q27", "q28", "q34", "q66", "q67", "q68", "q69"],
      106: "UNSEEN",
    },
    CHECKS = {
      101: [
        { q: "A workflow model exists in two repository locations. Name both, and say which one actually executes.", a: "/conf/<project>/settings/workflow/models is the design-time model you edit. Sync writes a runtime copy to /var/workflow/models, and that copy is what runs." },
        { q: "You edit a model and forget to click Sync. A launcher fires. Which version runs?", a: "The last synced runtime copy in /var. Your edits don't run until you sync." },
        { q: "Write the annotation and class declaration for a custom process step. Which property sets its name in the step dropdown?", a: "@Component(service = WorkflowProcess.class, property = {\"process.label=...\"}) on a class that IMPLEMENTS WorkflowProcess (Granite). process.label is the dropdown name." },
        { q: "Which single method do you write, and what are its three parameters?", a: "execute(WorkItem, WorkflowSession, MetaDataMap)." },
        { q: "An option says models live in /etc/workflow/models. Why is it wrong on a modern question?", a: "That's the pre-6.4 location. Since 6.4: design time in /conf, runtime in /var." },
        { q: "What starts a workflow automatically when content under a path changes?", a: "A launcher." },
      ],
      102: [
        { q: "In an HTL number format pattern, what does % do, and who supplies the minus sign for a negative value?", a: "% multiplies by 100 and appends a percent sign (DecimalFormat). The minus is added automatically; don't put one in the pattern." },
        { q: "A value is passed with data-sly-use ... @ name='x'. How does it reach the model, and what reads it?", a: "As a request attribute. The model adapts from SlingHttpServletRequest and reads it with @RequestAttribute." },
        { q: "Make every injected field optional in one place. Where does the setting go, and what is it called?", a: "On @Model: defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL." },
        { q: "Now make only one field optional. Where and what?", a: "On that field's injector annotation (e.g. @ValueMapValue): injectionStrategy = InjectionStrategy.OPTIONAL." },
        { q: "One required field is missing and nothing is optional. What happens?", a: "adaptTo() returns null for the whole model." },
      ],
      103: [
        { q: "Where do you control which components authors can drop into a template's page?", a: "The Layout Container's policy: Structure mode, select the container, open its policy, Allowed Components. Not the page policy, not Initial Content." },
        { q: "A new component isn't in the Allowed Components list. Which component property decides how it's grouped there?", a: "componentGroup. Enable that group in the container's policy." },
        { q: "Structure vs Initial Content: which one can authors change on a page?", a: "Initial Content (it's what a new page starts with). Structure is locked." },
        { q: "Authors should pick between style variants of one component. Which policy, which field? And for a class that's always applied?", a: "The component's own policy, Allowed Styles (most modular). Always applied = Default CSS Classes." },
        { q: "Where are policies stored?", a: "/conf/<site>/settings/wcm/policies." },
      ],
      104: [
        { q: "Before restarting, rebuilding, reindexing or clearing a cache, what is always step one?", a: "Gather AEM-side evidence: a log, a console, or a queue." },
        { q: "Match each to a log: exceptions / who requested a URL / per-request timing / who published something and when.", a: "error.log / access.log / request.log / audit.log." },
        { q: "Name the Dispatcher's three separate jobs and the piece that owns each.", a: "/filter = what gets in. /cache /rules = what gets cached. Flush agent or /invalidate = when cached files get cleared." },
        { q: "Content is stale on Publish right after publishing. Most likely culprit?", a: "The flush agent (cache not being invalidated)." },
        { q: "On AEMaaCS a service picked up the wrong config values. Which two Developer Console views?", a: "Configurations + OSGi Services." },
        { q: "An /apps clientlib isn't served through /etc.clientlibs, and clientlibs aren't minified. What do you check for each?", a: "allowProxy=true on the clientlib folder. Minify: the HTML Library Manager OSGi config." },
      ],
      105: [
        { q: "Where do index definitions live, and how is that path written inside a code package?", a: "/oak:index at the repository root. In code the folder is _oak_index, because FileVault can't use a colon in a folder name." },
        { q: "Why can't you just create an index in CRXDE on AEMaaCS?", a: "The repository is immutable at runtime, so indexes must ship in code." },
        { q: "What's the AEMaaCS naming rule for custom indexes, and what happens when you change one?", a: "<name>-custom-<n>. Every change bumps n so the new version builds alongside the old one." },
        { q: "Replication to Publish fails on permissions. Whose permissions? What privilege does namespace registration need?", a: "The replication (transport) user's, not the admin's. Namespace registration needs jcr:namespaceManagement." },
        { q: "What replaces replication agents on AEMaaCS?", a: "Sling Content Distribution." },
        { q: "What lets instances find each other so jobs can offload?", a: "Sling Discovery, which builds the topology." },
      ],
      106: [
        { q: "Why is the official practice exam no longer a valid score?", a: "You've seen it 5 to 6 times, so it measures memory, not understanding." },
        { q: "What's the test that proves you understand an item?", a: "You can say why each wrong option is wrong." },
        { q: "Exam-day rule for a question that's dragging?", a: "About 90 seconds, pick the best answer, flag it, move on. Never leave a blank." },
        { q: "When do you book the exam?", a: "When the readiness checklist is green." },
      ],
    };
  function weekDrillIds(n, sessions) {
    let w = WEEK_DRILLS[n];
    if (!w) return [];
    if (w === "UNSEEN") {
      let seen = new Set((sessions || []).flatMap((x) => x.entries.map((y) => y.qId))),
        un = As.filter((q) => !seen.has(q.id)).map((q) => q.id);
      return un.length ? un : As.map((q) => q.id);
    }
    return w;
  }
  function firstAttempt(ids, sessions) {
    let first = {};
    [...(sessions || [])].reverse().forEach((x) =>
      x.entries.forEach((y) => {
        first[y.qId] || (first[y.qId] = y.cls);
      }),
    );
    let seen = ids.filter((id) => first[id]),
      hits = seen.filter((id) => first[id] === "hit").length;
    return { total: ids.length, seen: seen.length, hits, pct: seen.length ? Math.round((hits / seen.length) * 100) : 0 };
  }
  function SelfCheck({ week: e, taught: t, onMarkTaught: mark, sessions: sx, onDrillWeek: dw, checking: ck, setChecking: setCk }) {
    let items = CHECKS[e.n],
      [st, setSt] = (0, i.useState)(null),
      [rev, setRev] = (0, i.useState)({}),
      [res, setRes] = (0, i.useState)({});
    (0, i.useEffect)(() => {
      (async () => setSt(await Eo("selfcheck-" + e.n, { passed: null, hands: !1 })))();
    }, [e.n]);
    let save = (nx) => (setSt(nx), Ta("selfcheck-" + e.n, nx));
    if (!items || !st) return null;
    let done = Object.keys(res).length,
      got = Object.values(res).filter((v) => v === "got").length,
      finished = done === items.length;
    function answer(idx, v) {
      let nr = { ...res, [idx]: v };
      setRes(nr);
      if (Object.keys(nr).length === items.length && Object.values(nr).every((x) => x === "got")) {
        save({ ...st, passed: Ts() });
        t || mark(e.n);
      }
    }
    let ids = weekDrillIds(e.n, sx),
      fa = firstAttempt(e.n === 106 ? As.map((q) => q.id) : ids, sx),
      faOk = fa.seen >= Math.min(5, fa.total) && fa.pct >= 80,
      el = i.default.createElement,
      lab = (txt, col) => el("div", { style: { fontFamily: MONO, fontSize: 10.5, color: col, letterSpacing: 0.6, marginBottom: 6, textTransform: "uppercase" } }, txt),
      tick = (ok, txt) =>
        el("div", { style: { display: "flex", gap: 7, alignItems: "baseline", fontSize: 13, fontFamily: SANS, color: ok ? f.green : f.dim, marginBottom: 3 } },
          el("span", { style: { fontFamily: MONO, width: 14 } }, ok ? "✓" : "○"), txt),
      row = (ok, title, sub, onTap) =>
        el(onTap ? "button" : "div", {
            onClick: onTap || void 0,
            style: { display: "flex", gap: 10, alignItems: "flex-start", width: "100%", textAlign: "left", padding: "7px 0", background: "none", border: "none", borderTop: `1px solid ${f.border}`, cursor: onTap ? "pointer" : "default", font: "inherit" },
          },
          el("span", { style: { flexShrink: 0, width: 16, height: 16, marginTop: 1, borderRadius: onTap ? 4 : 8, border: `1.5px solid ${ok ? f.green : f.faint}`, background: ok ? f.green : "transparent", color: "#08160E", fontSize: 11, fontWeight: 700, lineHeight: "13px", textAlign: "center", fontFamily: MONO } }, ok ? "\u2713" : ""),
          el("span", { style: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 } },
            el("span", { style: { fontFamily: SANS, fontSize: 13.5, color: ok ? f.green : f.text } }, title),
            el("span", { style: { fontFamily: MONO, fontSize: 11.5, color: f.dim, overflowWrap: "anywhere" } }, sub))),
      btn = (txt, on, col, filled) =>
        el("button", { onClick: on, style: { ...smallBtn, fontFamily: MONO, fontSize: 12, border: `1px solid ${col}`, color: filled ? "#08160E" : col, background: filled ? col : "transparent", fontWeight: filled ? 700 : 400 } }, txt);
    return el(
      "div",
      { style: { marginTop: 4, paddingTop: 14, borderTop: `1px dashed ${f.border}` } },
      lab(ck ? "/check — lesson hidden · answer in your head, then reveal" : "/check — self-check", f.amber),
      !ck &&
        el("div", { style: { display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" } },
          btn(`start self-check (${items.length} prompts)`, () => (setRev({}), setRes({}), setCk(!0)), f.amber, !0),
          el("span", { style: { fontFamily: SANS, fontSize: 12.5, color: f.dim } }, "Hides the lesson above so you recall instead of reread.")),
      ck && items.map((it, idx) =>
        el("div", { key: idx, style: { padding: "9px 11px", marginBottom: 7, border: `1px solid ${res[idx] === "got" ? f.green + "66" : res[idx] === "miss" ? f.red + "66" : f.border}`, borderRadius: 5, background: f.bg } },
          el("div", { style: { fontSize: 13.5, lineHeight: 1.5, color: f.text, fontFamily: SANS } }, `${idx + 1}. ${it.q}`),
          rev[idx]
            ? el(i.default.Fragment, null,
                el("div", { style: { fontSize: 13, lineHeight: 1.5, color: f.cyan, fontFamily: SANS, margin: "7px 0" } }, it.a),
                res[idx]
                  ? el("div", { style: { fontFamily: MONO, fontSize: 11.5, color: res[idx] === "got" ? f.green : f.red } }, res[idx] === "got" ? "got it cold" : "missed — reread that part above")
                  : el("div", { style: { display: "flex", gap: 7 } }, btn("got it cold", () => answer(idx, "got"), f.green), btn("missed", () => answer(idx, "miss"), f.red)))
            : el("div", { style: { marginTop: 7 } }, btn("reveal", () => setRev({ ...rev, [idx]: !0 }), f.dim)),
        ),
      ),
      ck && finished &&
        el("div", { style: { margin: "4px 0 14px", padding: "10px 12px", borderRadius: 5, border: `1px solid ${(got === items.length ? f.green : f.amber) + "55"}`, borderLeft: `3px solid ${got === items.length ? f.green : f.amber}`, background: f.bg } },
          el("div", { style: { fontFamily: MONO, fontSize: 13, color: got === items.length ? f.green : f.amber, marginBottom: 3 } },
            got === items.length ? `passed ${got}/${items.length}` : `${got}/${items.length} cold`),
          el("div", { style: { fontFamily: SANS, fontSize: 13, color: f.dim, lineHeight: 1.45, marginBottom: 9 } },
            got === items.length ? "Week marked taught." : "Reread what you missed, then retry tomorrow."),
          el("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } },
            btn("retry", () => (setRev({}), setRes({})), f.dim),
            btn("show lesson", () => setCk(!1), f.dim))),
      ck && !finished &&
        el("div", { style: { marginBottom: 12 } }, btn("stop · show lesson", () => setCk(!1), f.dim)),
      el("div", { style: { border: `1px solid ${f.border}`, borderRadius: 5, background: f.bg, padding: "10px 12px 12px" } },
        lab("done when", f.dim),
        row(!!st.passed, "Self-check passed", st.passed ? `passed ${st.passed}` : "all prompts cold, one pass", null),
        Ms[e.n] && Ms[e.n].handsOn && e.n !== 106
          ? row(!!st.hands, "Hands-on task done", st.hands ? "tap to undo" : "tap when finished", () => save({ ...st, hands: !st.hands }))
          : null,
        row(faOk, `≥80% first-attempt HITs`, `${e.n === 106 ? "all items" : "this week's items"} · ${fa.seen}/${fa.total} seen · ${fa.hits} HIT (${fa.pct}%)`, null),
        el("div", { style: { marginTop: 12 } },
          btn(e.n === 106 ? `drill unseen items (${ids.length})` : `drill this week (${ids.length} items)`, () => dw(ids), f.amber, !0))),
    );
  }
  /* ===== Oct 18 2026: Adobe-docs audit ===== */
  var AUDIT_DATE = "2026-10-18",
    WEEK_SOURCES = {"101": [{"t": "AEM: Creating Workflow Models", "u": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/extending-aem/extending-workflows/workflows-models.html?lang=en"}, {"t": "Custom Process Step (tutorial)", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/forms/adaptive-forms/custom-process-step-aem-workflow"}, {"t": "AEM: Starting Workflows (launchers)", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-64/administering/operations/workflows-starting"}, {"t": "AEMaaCS: Administering Workflow Instances", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/administering/workflows-administering"}], "102": [{"t": "HTL Specification (Adobe)", "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"}, {"t": "Apache Sling: HTL Scripting Engine", "u": "https://sling.apache.org/documentation/bundles/scripting/scripting-htl.html"}, {"t": "Apache Sling Models", "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"}, {"t": "Sling Models @ValueMapValue javadoc", "u": "https://sling.apache.org/apidocs/sling14/org/apache/sling/models/annotations/injectorspecific/ValueMapValue.html"}], "103": [{"t": "AEM: Editable Page Templates", "u": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/templates/page-templates-editable.html?lang=en"}, {"t": "Using Core Components", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/get-started/using"}, {"t": "AEMaaCS: Style System", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/page-editor/style-system"}], "104": [{"t": "AEMaaCS: Debugging using logs", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs"}, {"t": "KB: Examples of request.log analysis", "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-21309"}, {"t": "KB: Enabling and Managing Audit Logs", "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-24740"}, {"t": "Dispatcher: Configure AEM Dispatcher", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration"}, {"t": "Dispatcher: Invalidate Cached Pages", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/page-invalidate"}, {"t": "KB: Dispatcher filter rules blocking requests", "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-34606"}, {"t": "Debugging AEMaaCS with the Developer Console", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console"}, {"t": "Debugging AEM SDK: OSGi web console", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-sdk/osgi-web-consoles"}, {"t": "AEMaaCS: Client-Side Libraries", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/clientlibs"}], "105": [{"t": "AEM 6.5: Oak Queries and Indexing", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/deploying/queries-and-indexing"}, {"t": "AEMaaCS: Content Search and Indexing", "u": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html?lang=en"}, {"t": "AEM 6.5: Troubleshooting Replication", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/configuring/troubleshoot-rep"}, {"t": "AEMaaCS: Replication", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/operations/replication"}, {"t": "AEM 6.5: Offloading Jobs", "u": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/offloading.html?lang=en"}, {"t": "AEM 6.5: Troubleshooting Slow Queries", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/bestpractices/troubleshooting-slow-queries"}], "1": [{"t": "Apache Sling: URL to Script Resolution", "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/the-sling-engine/url-to-script-resolution.html"}, {"t": "AEMaaCS: Sling Resource Merger", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/sling-resource-merger"}], "2": [{"t": "Dispatcher: Configure AEM Dispatcher", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration"}, {"t": "Dispatcher: Invalidate Cached Pages", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/page-invalidate"}, {"t": "AEMaaCS: Replication", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/operations/replication"}], "3": [{"t": "AEMaaCS: Configuring OSGi", "u": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/deploying/configuring-osgi.html"}, {"t": "Debugging AEM SDK: OSGi web console", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-sdk/osgi-web-consoles"}], "4": [{"t": "Apache Sling Models", "u": "https://svn.apache.org/repos/infra/websites/production/sling/content/documentation/bundles/models.html"}, {"t": "Sling Models @ValueMapValue javadoc", "u": "https://sling.apache.org/apidocs/sling14/org/apache/sling/models/annotations/injectorspecific/ValueMapValue.html"}, {"t": "AEMaaCS: Enabling JSON Export", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/components-templates/enabling-json-exporter"}], "5": [{"t": "HTL Specification (Adobe)", "u": "https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"}], "6": [{"t": "Using Core Components", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/get-started/using"}, {"t": "AEM: Editable Page Templates", "u": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/templates/page-templates-editable.html?lang=en"}, {"t": "AEMaaCS: Style System", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/page-editor/style-system"}, {"t": "Extend a Core Component (tutorial)", "u": "https://experienceleague.adobe.com/docs/experience-manager-learn/spa-react-tutorial/extend-component.html?lang=en"}], "7": [{"t": "Content Fragments and Experience Fragments", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/content-fragments/understand-content-fragments-and-experience-fragments"}, {"t": "AEMaaCS: Customizing Content Fragments (API)", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/configuring-and-extending/content-fragments-customizing"}, {"t": "AEMaaCS: Multi Site Manager and Live Copy", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/administering/reusing-content/msm/overview"}, {"t": "Custom Process Step (tutorial)", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/forms/adaptive-forms/custom-process-step-aem-workflow"}], "8": [{"t": "Using the AEM Project Archetype", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/archetype/using"}, {"t": "Apache Sling: Repository Initialization", "u": "https://sling.apache.org/documentation/bundles/repository-initialization.html"}, {"t": "AEMaaCS: Service Users (tutorial)", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/developing/advanced/service-users"}, {"t": "Cloud Manager: Code Quality Testing", "u": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/test-results/code-quality-testing.html"}, {"t": "AEMaaCS: Deploying Your Code", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/deploy-code"}], "9": [{"t": "KB: Examples of request.log analysis", "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-21309"}, {"t": "KB: Enabling and Managing Audit Logs", "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-24740"}, {"t": "Dispatcher: Configure AEM Dispatcher", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration"}, {"t": "KB: Dispatcher filter rules blocking requests", "u": "https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-34606"}, {"t": "AEM 6.5: Troubleshooting Replication", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/configuring/troubleshoot-rep"}, {"t": "AEM 6.5: Oak Queries and Indexing", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/deploying/deploying/queries-and-indexing"}, {"t": "AEM 6.5: Offloading Jobs", "u": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/offloading.html?lang=en"}], "10": [{"t": "WKND tutorial: Unit Testing", "u": "https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/unit-testing.html?lang=en"}, {"t": "AEMaaCS: Persisted GraphQL queries", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/headless/graphql-api/persisted-queries"}, {"t": "Map SPA components to AEM components", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-with-aem-headless/spa-editor/react/map-components"}, {"t": "AEMaaCS: SPA Editor Deprecation", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/hybrid/spa-editor-deprecation"}, {"t": "AEM 6.5: Troubleshooting Slow Queries", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/bestpractices/troubleshooting-slow-queries"}, {"t": "AEMaaCS: Internationalizing UI Strings", "u": "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/configuring-and-extending/internationalization/dev"}, {"t": "Apache Sling: i18n support", "u": "https://sling.apache.org/documentation/bundles/internationalization-support-i18n.html"}]},
    WEEK_NOTES = {"106": "Study guidance only; no technical claims to source.", "6": "Default CSS Classes wasn't on the Style System page checked.", "9": "stdout.log isn't described on the Adobe pages checked."};
  function SourceList({ src: sr }) {
    if (!sr || !sr.length) return null;
    return i.default.createElement(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: 3, marginTop: 4 } },
      sr.map((x, k) =>
        i.default.createElement(
          "a",
          { key: k, href: x.u, target: "_blank", rel: "noopener noreferrer", style: { color: f.cyan, fontSize: 12.5, fontFamily: "'IBM Plex Sans', sans-serif", overflowWrap: "anywhere", textDecoration: "underline", textUnderlineOffset: 2 } },
          x.t, " \u2197",
        ),
      ),
    );
  }
  function WhyPick({ q, picked }) {
    if (!q || !q.why) return null;
    let wrong = picked.filter((x) => !q.correct.includes(x)),
      missed = q.type === "multi" ? q.correct.filter((x) => !picked.includes(x)) : [],
      txt = (id) => (q.options.find((o) => o.id === id) || {}).text || "",
      el = i.default.createElement,
      row = (id, col, head, body) =>
        el(
          "div",
          { key: head + id, style: { padding: "8px 10px", borderLeft: `3px solid ${col}`, background: f.bg, borderRadius: "0 4px 4px 0", marginBottom: 6 } },
          el("div", { style: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: col, marginBottom: 3, overflowWrap: "anywhere" } }, `${head} (${id}) \u2014 ${txt(id)}`),
          el("div", { style: { fontSize: 13.5, lineHeight: 1.5, color: f.text, fontFamily: "'IBM Plex Sans', sans-serif" } }, (q.why[id] || "See the explanation below.").replace(/^Correct: /, "")),
        );
    if (!wrong.length && !missed.length) return null;
    return el(
      "div",
      { style: { marginBottom: 10 } },
      wrong.map((id) => row(id, f.red, "\u2717 why your pick is wrong")),
      missed.map((id) => row(id, f.green, "\u2713 you missed")),
    );
  }
  function AuditNote({ audit: a }) {
    if (!a) return null;
    let col = a.ver === "verified" ? f.green : a.ver === "corrected" ? f.amber : f.violet,
      lab = a.ver === "verified" ? "verified against docs" : a.ver === "corrected" ? "corrected " + AUDIT_DATE : "partly verified";
    return i.default.createElement(
      "div",
      { style: { marginTop: 10, paddingTop: 9, borderTop: `1px dashed ${f.border}` } },
      i.default.createElement(
        "div",
        { style: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: 0.5, textTransform: "uppercase", color: col, marginBottom: a.note ? 3 : 0 } },
        (a.ver === "verified" ? "\u2713 " : a.ver === "corrected" ? "\u270E " : "\u25D0 ") + lab,
      ),
      onReadingList(a.src) &&
        i.default.createElement("div", { style: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: 0.5, textTransform: "uppercase", color: f.cyan, marginBottom: 3 } }, "\u2605 on Adobe's reading list"),
      a.note && i.default.createElement("div", { style: { fontSize: 12.5, color: f.dim, lineHeight: 1.45, fontFamily: "'IBM Plex Sans', sans-serif" } }, a.note),
      i.default.createElement(SourceList, { src: a.src }),
    );
  }
  function am({ week: e, taught: t, onMarkTaught: a, sessions: sx, onDrillWeek: dw }) {
    let o = Ms[e.n],
      [ck, setCk] = (0, i.useState)(!1);
    if (!o)
      return i.default.createElement(
        "div",
        {
          style: {
            padding: "14px 18px",
            fontSize: 13,
            color: f.dim,
            fontFamily: "'IBM Plex Sans', sans-serif",
          },
        },
        "This week is an exam-simulation week \u2014 no new mechanism content, run a full /drill session instead.",
      );
    let r = ({ label: n, color: l, children: s }) =>
      i.default.createElement(
        "div",
        { style: { marginBottom: 14 } },
        i.default.createElement(
          "div",
          {
            style: {
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10.5,
              color: l || f.dim,
              letterSpacing: 0.6,
              marginBottom: 5,
              textTransform: "uppercase",
            },
          },
          n,
        ),
        i.default.createElement(
          "div",
          {
            style: {
              fontSize: 13.5,
              lineHeight: 1.6,
              color: f.text,
              fontFamily: "'IBM Plex Sans', sans-serif",
            },
          },
          s,
        ),
      );
    return i.default.createElement(
      "div",
      {
        className: "apc-teach",
        style: {
          padding: "16px 18px 18px",
          borderTop: `1px solid ${f.border}`,
          background: f.panelAlt,
        },
      },
      !ck && i.default.createElement(
        r,
        { label: "mechanism", color: f.cyan },
        o.mechanism,
      ),
      !ck && i.default.createElement(r, { label: "analogy" }, o.analogy),
      !ck && i.default.createElement(
        r,
        { label: "real artifact", color: f.violet },
        i.default.createElement(
          "pre",
          {
            className: "apc-code",
            style: {
              margin: 0,
              padding: "10px 12px",
              background: f.bg,
              border: `1px solid ${f.border}`,
              borderRadius: 5,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              color: f.text,
            },
          },
          o.artifact,
        ),
      ),
      !ck && i.default.createElement(
        r,
        { label: "/65 \u2014 6.5 delta", color: f.amber },
        o.delta65,
      ),
      !ck && i.default.createElement(
        r,
        { label: "/hands \u2014 inspect on the SDK", color: f.green },
        i.default.createElement(
          "span",
          { style: { display: "flex", gap: 7 } },
          i.default.createElement(bo, {
            size: 13,
            style: { marginTop: 3, flexShrink: 0 },
            color: f.green,
          }),
          o.handsOn,
        ),
      ),
      !ck && (WEEK_SOURCES[e.n] || WEEK_NOTES[e.n]) && i.default.createElement(
        r,
        { label: "sources \u2014 checked " + AUDIT_DATE, color: f.cyan },
        WEEK_NOTES[e.n] && i.default.createElement("div", { style: { fontSize: 12.5, color: f.dim, marginBottom: 2 } }, WEEK_NOTES[e.n]),
        i.default.createElement(SourceList, { src: WEEK_SOURCES[e.n] }),
      ),
      !ck && i.default.createElement(
        r,
        { label: "key takeaways", color: f.red },
        i.default.createElement(
          "ul",
          { style: { margin: 0, paddingLeft: 18 } },
          o.takeaways.map((n, l) =>
            i.default.createElement(
              "li",
              { key: l, style: { marginBottom: 4 } },
              n,
            ),
          ),
        ),
      ),
      CHECKS[e.n] &&
        i.default.createElement(SelfCheck, { week: e, taught: t, onMarkTaught: a, sessions: sx, onDrillWeek: dw, checking: ck, setChecking: setCk }),
      !CHECKS[e.n] && i.default.createElement(
        "button",
        {
          onClick: () => a(e.n),
          style: {
            padding: "8px 15px",
            borderRadius: 5,
            cursor: "pointer",
            border: t ? `1px solid ${f.border}` : "none",
            background: t ? "transparent" : f.green,
            color: t ? f.dim : "#08160E",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12.5,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 6,
          },
        },
        t
          ? i.default.createElement(
              i.default.Fragment,
              null,
              i.default.createElement(Xe, { size: 13, color: f.green }),
              " taught \u2014 click to unmark",
            )
          : i.default.createElement(
              i.default.Fragment,
              null,
              i.default.createElement(lt, { size: 13 }),
              " mark as taught",
            ),
      ),
    );
  }
  function om({
    weekStatus: e,
    onToggleWeek: t,
    gapCoverage: a,
    startDate: o,
    setStartDate: r,
    currentWeek: n,
    dayOfPlan: l,
    sessions: sx,
    onDrillWeek: dw,
  }) {
    let [s, u] = (0, i.useState)(null),
      [c, g] = (0, i.useState)(!1),
      x = SPs.filter((y) => e[y.n] === "done").length,
      xo = Ps.filter((y) => e[y.n] === "done").length,
      [ao, setAo] = (0, i.useState)(!1),
      [full, setFullRaw] = (0, i.useState)(() => { try { return localStorage.getItem("apc-plan-full") === "1"; } catch (e) { return !1; } }),
      setFull = (v) => { setFullRaw(v); try { localStorage.setItem("apc-plan-full", v ? "1" : "0"); } catch (e) {} },
      [lessonOpen, setLessonOpen] = (0, i.useState)(!1),
      h = Math.max(0, n - 1) - x,
      rowFn = (arr, todayN) => (y, I) => {
          let v = e[y.n] || "pending",
            F = s === y.n;
          return i.default.createElement(
            "div",
            {
              key: y.n,
              style: {
                borderBottom:
                  I < arr.length - 1 ? `1px solid ${f.border}` : "none",
              },
            },
            i.default.createElement(
              "div",
              {
                className: "apc-weekrow",
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "13px 18px",
                },
              },
              i.default.createElement(
                "button",
                {
                  onClick: () => t(y.n),
                  style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    lineHeight: 0,
                  },
                  "aria-label": `Toggle week ${y.n} complete`,
                },
                v === "done"
                  ? i.default.createElement(Xe, { size: 19, color: f.green })
                  : i.default.createElement(Qt, { size: 19, color: f.faint }),
              ),
              i.default.createElement(
                "span",
                {
                  style: {
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12,
                    color: y.n === todayN ? f.amber : f.dim,
                    width: 20,
                    flexShrink: 0,
                    fontWeight: y.n === todayN ? 700 : 400,
                  },
                },
                y.label || "W" + y.n,
              ),
              y.n === todayN &&
                i.default.createElement(
                  "span",
                  {
                    style: {
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 9.5,
                      color: f.amber,
                      border: `1px solid ${f.amber}66`,
                      borderRadius: 3,
                      padding: "1px 5px",
                      flexShrink: 0,
                    },
                  },
                  "TODAY",
                ),
              i.default.createElement(
                "button",
                {
                  className: "apc-weektitle",
                  onClick: () => u(F ? null : y.n),
                  style: {
                    flex: 1,
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: 14.5,
                    color: v === "done" ? f.dim : f.text,
                    textDecoration: v === "done" ? "line-through" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  },
                },
                i.default.createElement($t, {
                  size: 13,
                  color: F ? f.cyan : f.faint,
                  style: { flexShrink: 0 },
                }),
                y.title,
              ),
              i.default.createElement(
                "div",
                { className: "apc-tags", style: { display: "flex", gap: 5 } },
                y.sections.map((p) => {
                  let d = Ft.find((m) => m.id === p);
                  return i.default.createElement(
                    nn,
                    { key: p, color: d.color },
                    p,
                  );
                }),
              ),
              i.default.createElement(
                "button",
                {
                  onClick: () => u(F ? null : y.n),
                  style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: f.faint,
                    padding: 0,
                    lineHeight: 0,
                  },
                },
                i.default.createElement(Po, {
                  size: 16,
                  style: {
                    transform: F ? "rotate(180deg)" : "none",
                    transition: "transform 0.15s",
                  },
                }),
              ),
            ),
            F &&
              i.default.createElement(am, {
                week: y,
                taught: v === "done",
                onMarkTaught: t,
                sessions: sx,
                onDrillWeek: dw,
              }),
          );
        };
    let curW = SPs.find((w) => w.n === 100 + n) || SPs[SPs.length - 1],
      curDone = e[curW.n] === "done",
      daysLeft = Math.ceil((new Date(EXAM_TARGET + "T09:00:00") - new Date()) / 864e5),
      toggleBtn = (label, onClick) =>
        i.default.createElement(
          "button",
          { onClick, style: { justifySelf: "start", padding: "6px 12px", borderRadius: 5, cursor: "pointer", border: `1px solid ${f.border}`, background: "transparent", color: f.dim, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5 } },
          label,
        );
    if (!full)
      return i.default.createElement(
        "div",
        { style: { display: "grid", gap: 14 } },
        i.default.createElement(
          me,
          { style: { padding: "14px 18px" } },
          i.default.createElement("div", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 15, color: f.text, fontWeight: 700 } }, "Week ", Math.min(n, 6), " of 6", daysLeft > 0 ? ` \xB7 exam in ${daysLeft} days` : ""),
          i.default.createElement("div", { style: { fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12.5, color: f.dim, marginTop: 3 } }, "Target: Nov 24"),
        ),
        i.default.createElement(
          me,
          { style: { padding: 18 } },
          i.default.createElement("div", { style: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: 0.6, textTransform: "uppercase", color: f.amber, marginBottom: 4 } }, "this week \xB7 sprint " + (curW.label || "W" + curW.n)),
          i.default.createElement("div", { style: { fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 17, color: curDone ? f.dim : f.text, fontWeight: 600, marginBottom: 12, textDecoration: curDone ? "line-through" : "none" } }, curW.title),
          i.default.createElement(
            "div",
            { style: { display: "grid", gap: 8 } },
            i.default.createElement(
              "button",
              { onClick: () => setLessonOpen((z) => !z), style: { padding: "12px 14px", borderRadius: 6, cursor: "pointer", border: `1px solid ${f.border}`, background: f.panelAlt, color: f.text, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14.5, textAlign: "left" } },
              lessonOpen ? "1 \xB7 Hide the lesson" : "1 \xB7 Read the lesson (once)",
            ),
            i.default.createElement(
              "button",
              { onClick: () => dw && dw(weekDrillIds(curW.n, sx)), style: { padding: "12px 14px", borderRadius: 6, cursor: "pointer", border: "none", background: f.amber, color: "#1A1206", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14.5, fontWeight: 700, textAlign: "left" } },
              "2 \xB7 Drill this week",
            ),
            i.default.createElement("div", { style: { fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12.5, color: f.dim, padding: "2px 2px 0" } }, "3 \xB7 Self-check: at the end of the lesson"),
          ),
        ),
        lessonOpen &&
          i.default.createElement(
            me,
            { style: { padding: 0 } },
            i.default.createElement(am, { week: curW, taught: curDone, onMarkTaught: t, sessions: sx, onDrillWeek: dw }),
          ),
        toggleBtn("show full plan", () => setFull(!0)),
      );
    return i.default.createElement(
      "div",
      { style: { display: "grid", gap: 16 } },
      toggleBtn("back to this week only", () => setFull(!1)),
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: c ? 12 : 0,
            },
          },
          i.default.createElement(
            "div",
            null,
            i.default.createElement(
              "div",
              {
                style: {
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 15,
                  color: f.text,
                  fontWeight: 700,
                },
              },
              "Day ",
              Math.max(1, l),
              " \xB7 Week ",
              n,
              " of 6 \xB7 sprint to the exam",
            ),
            i.default.createElement(
              "div",
              {
                style: {
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 12.5,
                  color: f.dim,
                  marginTop: 3,
                },
              },
              h > 0
                ? `${h} week${h === 1 ? "" : "s"} behind calendar pace \u2014 ${x} of ${n - 1} finished weeks marked taught`
                : h < 0
                  ? `${-h} week${h === -1 ? "" : "s"} ahead of calendar pace`
                  : "on pace with the calendar",
            ),
          ),
          i.default.createElement(
            "button",
            {
              onClick: () => g((y) => !y),
              style: {
                padding: "6px 12px",
                borderRadius: 5,
                cursor: "pointer",
                border: `1px solid ${f.border}`,
                background: "transparent",
                color: f.dim,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11.5,
                flexShrink: 0,
              },
            },
            c ? "close" : "edit sprint start",
          ),
        ),
        c &&
          i.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
                flexWrap: "wrap",
              },
            },
            i.default.createElement(
              "label",
              {
                style: {
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11.5,
                  color: f.dim,
                },
              },
              "sprint started:",
            ),
            i.default.createElement("input", {
              type: "date",
              value: o || "",
              onChange: (y) => r(y.target.value),
              style: {
                background: f.panelAlt,
                border: `1px solid ${f.border}`,
                borderRadius: 5,
                padding: "6px 9px",
                color: f.text,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12.5,
              },
            }),
            i.default.createElement(
              "button",
              {
                onClick: () => r(SPRINT_START_DEFAULT),
                style: {
                  padding: "6px 11px",
                  borderRadius: 5,
                  cursor: "pointer",
                  border: "none",
                  background: f.amber,
                  color: "#1A1206",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11.5,
                  fontWeight: 700,
                },
              },
              "reset to Oct 15",
            ),
          ),
        i.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 10,
            },
          },
          i.default.createElement(
            "h2",
            {
              style: {
                margin: 0,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 16,
                color: f.text,
                fontWeight: 600,
              },
            },
            "AD0-E128 blueprint weighting",
          ),
          i.default.createElement(
            "span",
            {
              style: {
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                color: f.dim,
              },
            },
            x,
            "/6 sprint weeks closed",
          ),
        ),
        i.default.createElement(em, null),
      ),
      i.default.createElement(
        me,
        { style: { padding: "4px 0" } },
        SPs.map(rowFn(SPs, 100 + n)),
      ),
      i.default.createElement(
        me,
        { style: { padding: 0 } },
        i.default.createElement(
          "button",
          {
            onClick: () => setAo((z) => !z),
            style: {
              width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "13px 18px", background: "none", border: "none", cursor: "pointer",
              color: f.dim, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, textAlign: "left",
            },
          },
          `archive \xB7 original 12-week plan (${xo}/12 taught)`,
          i.default.createElement(Po, { size: 16, style: { transform: ao ? "rotate(180deg)" : "none", transition: "transform 0.15s", flexShrink: 0 } }),
        ),
        ao &&
          i.default.createElement(
            "div",
            { style: { borderTop: `1px solid ${f.border}` } },
            Ps.map(rowFn(Ps, -1)),
          ),
      ),
      i.default.createElement(ReadyCard, null),
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "h3",
          {
            style: {
              margin: "0 0 8px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13.5,
              color: f.amber,
            },
          },
          "gaps.status \u2014 topics with zero exam-baseline coverage",
        ),
        i.default.createElement(
          "div",
          { style: { display: "flex", flexWrap: "wrap", gap: 7 } },
          a.map((y) =>
            i.default.createElement(
              "span",
              {
                key: y.id,
                style: {
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 12,
                  color: y.drilled ? f.green : f.dim,
                  border: `1px solid ${y.drilled ? f.green + "55" : f.border}`,
                  borderRadius: 4,
                  padding: "3px 8px",
                },
              },
              y.drilled &&
                i.default.createElement(lt, {
                  size: 10,
                  style: { verticalAlign: -1, marginRight: 3 },
                }),
              y.label,
            ),
          ),
        ),
      ),
    );
  }
  function rm({ onSessionComplete: e, setMisconceptions: t, preset: ps, clearPreset: cps }) {
    let [a, oSet] = (0, i.useState)([]),
      o = (w) =>
        oSet((cur) => {
          if (w === "ALL") return [];
          let nx = cur.includes(w) ? cur.filter((z) => z !== w) : [...cur, w];
          return nx.length === Ft.length ? [] : nx;
        }),
      inSel = (sec) => a.length === 0 || a.includes(sec),
      [r, n] = (0, i.useState)(10),
      [l, s] = (0, i.useState)(0),
      [u, c] = (0, i.useState)(!1),
      [g, x] = (0, i.useState)([]),
      [h, y] = (0, i.useState)(0),
      [I, v] = (0, i.useState)([]),
      [F, p] = (0, i.useState)(null),
      [d, m] = (0, i.useState)(!1),
      [L, C] = (0, i.useState)([]),
      [M, A] = (0, i.useState)(0),
      [T, H] = (0, i.useState)(!1),
      [P, W] = (0, i.useState)([]),
      te = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
      if (u && l > 0)
        return (
          A(l * 60),
          (te.current = setInterval(() => {
            A((w) => (w <= 1 ? (clearInterval(te.current), 0) : w - 1));
          }, 1e3)),
          () => clearInterval(te.current)
        );
    }, [u, l]);
    (0, i.useEffect)(() => {
      if (!ps) return;
      let pool = As.filter((q) => ps.ids.includes(q.id)),
        b = [...pool].sort(() => Math.random() - 0.5);
      (s(0), x(b), y(0), v([]), p(null), m(!1), C([]), H(!1), W([]), c(!0), cps && cps());
    }, [ps && ps.k]);
    function Xt() {
      let w = As.filter((B) => inSel(B.section)),
        b = [...w]
          .sort(() => Math.random() - 0.5)
          .slice(0, Math.min(r, w.length));
      (x(b), y(0), v([]), p(null), m(!1), C([]), H(!1), W([]), c(!0));
    }
    function Fa(w) {
      if (d) return;
      g[h].type === "single"
        ? v([w])
        : v((B) => (B.includes(w) ? B.filter((Y) => Y !== w) : [...B, w]));
    }
    function Cf() {
      if (!F || I.length === 0) return;
      let w = g[h],
        b =
          I.length === w.correct.length &&
          I.every((Y) => w.correct.includes(Y)),
        B = "hit";
      if (
        (b && F <= 2
          ? (B = "miss-lucky")
          : !b && F >= 4
            ? (B = "misconception")
            : b || (B = "gap"),
        C((Y) => [
          ...Y,
          { qId: w.id, section: w.section, correct: b, confidence: F, cls: B },
        ]),
        m(!0),
        B === "misconception")
      ) {
        let Y = `${w.section}: ${w.stem.slice(0, 70)}${w.stem.length > 70 ? "\u2026" : ""}`;
        t((Me) =>
          [
            {
              id: `${w.id}-${Date.now()}`,
              text: Y,
              date: new Date().toISOString().slice(0, 10),
            },
            ...Me,
          ].slice(0, 25),
        );
      }
    }
    function kf() {
      if (h + 1 >= g.length) {
        (clearInterval(te.current), e(L), c(!1));
        return;
      }
      (y(h + 1), v([]), p(null), m(!1), H(!1), W([]));
    }
    if (!u)
      return i.default.createElement(
        me,
        { style: { padding: 22 } },
        i.default.createElement(
          "h2",
          {
            style: {
              margin: "0 0 4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: f.text,
            },
          },
          `drill \u2014 self-authored practice items (${As.length} total)`,
        ),
        i.default.createElement(
          "p",
          {
            style: {
              margin: "0 0 18px",
              fontSize: 13,
              color: f.dim,
              fontFamily: "'IBM Plex Sans', sans-serif",
            },
          },
          "Confidence is mandatory. Right at confidence 1\u20132 still counts as a miss.",
        ),
        i.default.createElement(
          "div",
          { style: { marginBottom: 16 } },
          i.default.createElement(
            "div",
            {
              style: {
                fontSize: 11.5,
                color: f.dim,
                marginBottom: 7,
                fontFamily: "'IBM Plex Mono', monospace",
              },
            },
            "SECTION",
          ),
          i.default.createElement(
            "div",
            {
              className: "apc-btnrow",
              style: { display: "flex", flexWrap: "wrap", gap: 7 },
            },
            ["ALL", ...Ft.map((w) => w.id)].map((w) => {
              let b = Ft.find((Me) => Me.id === w),
                B = w === "ALL" ? a.length === 0 : a.includes(w),
                Y = As.filter((Me) => w === "ALL" || Me.section === w).length;
              return i.default.createElement(
                "button",
                {
                  key: w,
                  onClick: () => o(w),
                  style: {
                    padding: "6px 12px",
                    borderRadius: 5,
                    cursor: "pointer",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12.5,
                    border: `1px solid ${B ? (b ? b.color : f.amber) : f.border}`,
                    background: B
                      ? `${b ? b.color : f.amber}1A`
                      : "transparent",
                    color: B ? (b ? b.color : f.amber) : f.dim,
                  },
                },
                w,
                b ? ` \xB7 ${b.name}` : " sections",
                " (",
                Y,
                ")",
              );
            }),
          ),
          i.default.createElement(
            "div",
            {
              style: {
                fontSize: 11.5,
                color: f.dim,
                marginTop: 7,
                fontFamily: "'IBM Plex Mono', monospace",
              },
            },
            a.length === 0
              ? `tap sections to combine \xB7 pool: ${As.length} items`
              : `selected: ${[...a].sort().join(" + ")} \xB7 pool: ${As.filter((Me) => inSel(Me.section)).length} items`,
          ),
        ),
        i.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              gap: 24,
              marginBottom: 20,
              flexWrap: "wrap",
            },
          },
          i.default.createElement(
            "div",
            null,
            i.default.createElement(
              "div",
              {
                style: {
                  fontSize: 11.5,
                  color: f.dim,
                  marginBottom: 7,
                  fontFamily: "'IBM Plex Mono', monospace",
                },
              },
              "LENGTH",
            ),
            i.default.createElement(
              "div",
              { className: "apc-btnrow", style: { display: "flex", gap: 7 } },
              [5, 10, 20, 35, As.length].map((w) =>
                i.default.createElement(
                  "button",
                  {
                    key: w,
                    onClick: () => n(w),
                    style: {
                      padding: "6px 12px",
                      borderRadius: 5,
                      cursor: "pointer",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 12.5,
                      border: `1px solid ${r === w ? f.cyan : f.border}`,
                      background: r === w ? `${f.cyan}1A` : "transparent",
                      color: r === w ? f.cyan : f.dim,
                    },
                  },
                  w === As.length ? `all (${As.length})` : w,
                ),
              ),
            ),
          ),
          i.default.createElement(
            "div",
            null,
            i.default.createElement(
              "div",
              {
                style: {
                  fontSize: 11.5,
                  color: f.dim,
                  marginBottom: 7,
                  fontFamily: "'IBM Plex Mono', monospace",
                },
              },
              "SESSION TIMER",
            ),
            i.default.createElement(
              "div",
              { className: "apc-btnrow", style: { display: "flex", gap: 7 } },
              [0, 15, 30, 60, 90, 150].map((w) =>
                i.default.createElement(
                  "button",
                  {
                    key: w,
                    onClick: () => s(w),
                    style: {
                      padding: "6px 12px",
                      borderRadius: 5,
                      cursor: "pointer",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 12.5,
                      border: `1px solid ${l === w ? f.violet : f.border}`,
                      background: l === w ? `${f.violet}1A` : "transparent",
                      color: l === w ? f.violet : f.dim,
                    },
                  },
                  w === 0
                    ? "off"
                    : w % 60 === 0
                      ? `${w / 60}h`
                      : `${Math.floor(w / 60)}h${w % 60}m`,
                ),
              ),
            ),
          ),
        ),
        i.default.createElement(
          "button",
          {
            onClick: Xt,
            style: {
              padding: "10px 20px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              background: f.amber,
              color: "#1A1206",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13.5,
              fontWeight: 700,
              letterSpacing: 0.3,
            },
          },
          i.default.createElement(Aa, {
            size: 14,
            style: { verticalAlign: -2, marginRight: 4 },
          }),
          "start session",
        ),
      );
    let Se = g[h],
      Pf = Ft.find((w) => w.id === Se.section),
      Bs = Math.floor(M / 3600),
      Ds = Math.floor((M % 3600) / 60),
      bs = M % 60;
    return i.default.createElement(
      me,
      { style: { padding: 20 } },
      i.default.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          },
        },
        i.default.createElement(
          "div",
          { style: { display: "flex", gap: 8, alignItems: "center" } },
          i.default.createElement(nn, { color: Pf.color }, Se.section),
          i.default.createElement(
            "span",
            {
              style: {
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                color: f.dim,
              },
            },
            "item ",
            h + 1,
            " / ",
            g.length,
          ),
        ),
        l > 0 &&
          i.default.createElement(
            "span",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12.5,
                color: M < 60 ? f.red : f.dim,
              },
            },
            i.default.createElement(Mo, { size: 13 }),
            " ",
            Bs > 0
              ? `${Bs}:${String(Ds).padStart(2, "0")}:${String(bs).padStart(2, "0")}`
              : `${Ds}:${String(bs).padStart(2, "0")}`,
          ),
      ),
      i.default.createElement(
        "p",
        {
          className: "apc-stem",
          style: {
            fontSize: 14.5,
            lineHeight: 1.55,
            color: f.text,
            fontFamily: "'IBM Plex Sans', sans-serif",
            margin: "0 0 8px",
          },
        },
        Se.stem,
      ),
      i.default.createElement(
        "p",
        {
          className: "apc-stem",
          style: {
            fontSize: 14.5,
            lineHeight: 1.5,
            color: f.text,
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 600,
            margin: "0 0 10px",
          },
        },
        Se.q,
      ),
      i.default.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 10,
          },
        },
        i.default.createElement(
          "button",
          {
            onClick: () => H((w) => !w),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 11px",
              borderRadius: 5,
              cursor: "pointer",
              border: `1px solid ${T ? f.amber : f.border}`,
              background: T ? `${f.amber}16` : "transparent",
              color: T ? f.amber : f.dim,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
            },
          },
          i.default.createElement(To, { size: 12 }),
          " plain English",
        ),
      ),
      T &&
        i.default.createElement(
          "div",
          {
            style: {
              padding: "10px 13px",
              borderRadius: 6,
              border: `1px solid ${f.amber}44`,
              background: `${f.amber}0D`,
              marginBottom: 12,
              fontSize: 13,
              lineHeight: 1.55,
              color: f.text,
              fontFamily: "'IBM Plex Sans', sans-serif",
            },
          },
          Se.plain,
        ),
      (() => {
        let w = (
            Se.stem +
            " " +
            Se.q +
            " " +
            Se.options.map((B) => B.text).join(" ")
          ).toLowerCase(),
          b = Yp.filter((B) => w.includes(B.term.toLowerCase()));
        return b.length === 0
          ? null
          : i.default.createElement(
              "div",
              { style: { marginBottom: 16 } },
              i.default.createElement(
                "div",
                {
                  style: {
                    fontSize: 10.5,
                    color: f.faint,
                    marginBottom: 6,
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: 0.4,
                  },
                },
                "TERMS IN THIS QUESTION & ITS OPTIONS \u2014 tap to decode",
              ),
              i.default.createElement(
                "div",
                { style: { display: "flex", flexWrap: "wrap", gap: 6 } },
                b.map((B) => {
                  let Y = P.includes(B.term);
                  return i.default.createElement(
                    "button",
                    {
                      key: B.term,
                      onClick: () =>
                        W((Me) =>
                          Y
                            ? Me.filter((Mf) => Mf !== B.term)
                            : [...Me, B.term],
                        ),
                      style: {
                        padding: "4px 9px",
                        borderRadius: 4,
                        cursor: "pointer",
                        border: `1px solid ${Y ? f.cyan : f.border}`,
                        background: Y ? `${f.cyan}16` : "transparent",
                        color: Y ? f.cyan : f.dim,
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11.5,
                      },
                    },
                    B.term,
                  );
                }),
              ),
              P.length > 0 &&
                i.default.createElement(
                  "div",
                  { style: { marginTop: 8, display: "grid", gap: 6 } },
                  b
                    .filter((B) => P.includes(B.term))
                    .map((B) =>
                      i.default.createElement(
                        "div",
                        {
                          key: B.term,
                          style: {
                            fontSize: 12.5,
                            lineHeight: 1.5,
                            color: f.text,
                            fontFamily: "'IBM Plex Sans', sans-serif",
                          },
                        },
                        i.default.createElement(
                          "span",
                          {
                            style: {
                              color: f.cyan,
                              fontFamily: "'IBM Plex Mono', monospace",
                            },
                          },
                          B.term,
                        ),
                        " \u2014 ",
                        B.def,
                      ),
                    ),
                ),
            );
      })(),
      i.default.createElement(
        "div",
        { style: { display: "grid", gap: 8, marginBottom: 18 } },
        Se.options.map((w) => {
          let b = I.includes(w.id),
            B = Se.correct.includes(w.id),
            Y = b ? f.cyan : f.border,
            Me = b ? `${f.cyan}12` : "transparent";
          return (
            d &&
              (B
                ? ((Y = f.green), (Me = `${f.green}14`))
                : b && !B && ((Y = f.red), (Me = `${f.red}14`))),
            i.default.createElement(
              "button",
              {
                key: w.id,
                className: "apc-option",
                onClick: () => Fa(w.id),
                disabled: d,
                style: {
                  textAlign: "left",
                  padding: "10px 13px",
                  borderRadius: 6,
                  cursor: d ? "default" : "pointer",
                  border: `1px solid ${Y}`,
                  background: Me,
                  color: f.text,
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 13.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                },
              },
              i.default.createElement(
                "span",
                {
                  style: {
                    width: 16,
                    height: 16,
                    borderRadius: Se.type === "single" ? "50%" : 4,
                    flexShrink: 0,
                    border: `1.5px solid ${b ? f.cyan : f.faint}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                },
                b &&
                  i.default.createElement("span", {
                    style: {
                      width: 8,
                      height: 8,
                      borderRadius: Se.type === "single" ? "50%" : 2,
                      background: f.cyan,
                    },
                  }),
              ),
              w.text,
              d &&
                B &&
                i.default.createElement(lt, {
                  size: 14,
                  color: f.green,
                  style: { marginLeft: "auto" },
                }),
              d &&
                b &&
                !B &&
                i.default.createElement(Tt, {
                  size: 14,
                  color: f.red,
                  style: { marginLeft: "auto" },
                }),
            )
          );
        }),
      ),
      !d &&
        i.default.createElement(
          "div",
          { style: { marginBottom: 16 } },
          i.default.createElement(
            "div",
            {
              style: {
                fontSize: 11.5,
                color: f.dim,
                marginBottom: 7,
                fontFamily: "'IBM Plex Mono', monospace",
              },
            },
            "CONFIDENCE (mandatory)",
          ),
          i.default.createElement(
            "div",
            { style: { display: "flex", gap: 7 } },
            [1, 2, 3, 4, 5].map((w) =>
              i.default.createElement(
                "button",
                {
                  key: w,
                  onClick: () => p(w),
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    cursor: "pointer",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 13.5,
                    border: `1px solid ${F === w ? f.amber : f.border}`,
                    background: F === w ? `${f.amber}1E` : "transparent",
                    color: F === w ? f.amber : f.dim,
                  },
                },
                w,
              ),
            ),
          ),
        ),
      d
        ? i.default.createElement(
            "div",
            null,
            (() => {
              let w = L[L.length - 1],
                b =
                  w.cls === "hit"
                    ? f.green
                    : w.cls === "miss-lucky"
                      ? f.amber
                      : w.cls === "misconception"
                        ? f.red
                        : f.dim,
                B = {
                  hit: "CORRECT \u2014 solid confidence",
                  "miss-lucky":
                    "MISS \u2014 right answer, but confidence too low to count as knowledge",
                  misconception:
                    "MISCONCEPTION \u2014 wrong at high confidence. Priority remediation.",
                  gap: "GAP \u2014 wrong, low confidence. Expected; keep drilling.",
                }[w.cls];
              return i.default.createElement(
                "div",
                {
                  style: {
                    padding: 14,
                    borderRadius: 6,
                    border: `1px solid ${b}44`,
                    background: `${b}0D`,
                    marginBottom: 14,
                  },
                },
                i.default.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      marginBottom: 8,
                    },
                  },
                  w.cls === "hit"
                    ? i.default.createElement(lt, { size: 15, color: b })
                    : i.default.createElement(st, { size: 15, color: b }),
                  i.default.createElement(
                    "span",
                    {
                      style: {
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12.5,
                        color: b,
                        fontWeight: 700,
                      },
                    },
                    B,
                  ),
                ),
                i.default.createElement(WhyPick, { q: Se, picked: I }),
                i.default.createElement(
                  "p",
                  {
                    style: {
                      margin: 0,
                      fontSize: 13.5,
                      lineHeight: 1.55,
                      color: f.text,
                      fontFamily: "'IBM Plex Sans', sans-serif",
                    },
                  },
                  Se.explain,
                ),
                i.default.createElement(AuditNote, { audit: Se.audit }),
              );
            })(),
            i.default.createElement(
              "button",
              {
                onClick: kf,
                style: {
                  padding: "9px 18px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  background: f.amber,
                  color: "#1A1206",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                },
              },
              h + 1 >= g.length ? "finish session" : "next",
              " ",
              i.default.createElement(Aa, {
                size: 13,
                style: { verticalAlign: -2 },
              }),
            ),
          )
        : i.default.createElement(
            "button",
            {
              onClick: Cf,
              disabled: !F || I.length === 0,
              style: {
                padding: "9px 18px",
                borderRadius: 6,
                border: "none",
                cursor: !F || I.length === 0 ? "not-allowed" : "pointer",
                opacity: !F || I.length === 0 ? 0.4 : 1,
                background: f.cyan,
                color: "#071620",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                fontWeight: 700,
              },
            },
            "submit",
          ),
    );
  }
  function nm({
    weak: e,
    setWeak: t,
    misconceptions: a,
    setMisconceptions: o,
  }) {
    let [r, n] = (0, i.useState)("");
    return i.default.createElement(
      "div",
      { style: { display: "grid", gap: 16 } },
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "h2",
          {
            style: {
              margin: "0 0 4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: f.text,
            },
          },
          "weak areas \u2014 priority order",
        ),
        i.default.createElement(
          "p",
          {
            style: {
              margin: "0 0 14px",
              fontSize: 12.5,
              color: f.dim,
              fontFamily: "'IBM Plex Sans', sans-serif",
            },
          },
          "Root causes, not symptoms. Check off what's genuinely closed.",
        ),
        i.default.createElement(
          "div",
          { style: { display: "grid", gap: 6 } },
          e.map((l, s) =>
            i.default.createElement(
              "div",
              {
                key: l.id,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 4px",
                },
              },
              i.default.createElement(
                "button",
                {
                  onClick: () =>
                    t((u) =>
                      u.map((c) =>
                        c.id === l.id ? { ...c, closed: !c.closed } : c,
                      ),
                    ),
                  style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    lineHeight: 0,
                  },
                },
                l.closed
                  ? i.default.createElement(Xe, { size: 17, color: f.green })
                  : i.default.createElement(Qt, { size: 17, color: f.faint }),
              ),
              i.default.createElement(
                "span",
                {
                  style: {
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    color: f.faint,
                    width: 16,
                  },
                },
                s + 1,
              ),
              i.default.createElement(
                "span",
                {
                  style: {
                    flex: 1,
                    fontSize: 13.5,
                    color: l.closed ? f.dim : f.text,
                    textDecoration: l.closed ? "line-through" : "none",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  },
                },
                l.text,
              ),
              i.default.createElement(
                "button",
                {
                  onClick: () => t((u) => u.filter((c) => c.id !== l.id)),
                  style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: f.faint,
                  },
                },
                i.default.createElement(Tt, { size: 14 }),
              ),
            ),
          ),
        ),
        i.default.createElement(
          "div",
          { style: { display: "flex", gap: 8, marginTop: 12 } },
          i.default.createElement("input", {
            value: r,
            onChange: (l) => n(l.target.value),
            placeholder: "add a weak area\u2026",
            style: {
              flex: 1,
              background: f.panelAlt,
              border: `1px solid ${f.border}`,
              borderRadius: 5,
              padding: "8px 10px",
              color: f.text,
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: 13,
            },
          }),
          i.default.createElement(
            "button",
            {
              onClick: () => {
                r.trim() &&
                  (t((l) => [
                    ...l,
                    { id: `w${Date.now()}`, text: r.trim(), closed: !1 },
                  ]),
                  n(""));
              },
              style: {
                padding: "8px 14px",
                borderRadius: 5,
                border: "none",
                background: f.cyan,
                color: "#071620",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12.5,
                cursor: "pointer",
              },
            },
            "add",
          ),
        ),
      ),
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "h2",
          {
            style: {
              margin: "0 0 4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: f.red,
            },
          },
          "misconceptions \u2014 wrong at high confidence",
        ),
        i.default.createElement(
          "p",
          {
            style: {
              margin: "0 0 14px",
              fontSize: 12.5,
              color: f.dim,
              fontFamily: "'IBM Plex Sans', sans-serif",
            },
          },
          "Auto-logged from drill sessions. Higher priority than plain gaps.",
        ),
        a.length === 0
          ? i.default.createElement(
              "p",
              {
                style: {
                  fontSize: 13,
                  color: f.faint,
                  fontFamily: "'IBM Plex Sans', sans-serif",
                },
              },
              "None logged yet \u2014 good sign, or you haven't drilled enough yet.",
            )
          : i.default.createElement(
              "div",
              { style: { display: "grid", gap: 6 } },
              a.map((l) =>
                i.default.createElement(
                  "div",
                  {
                    key: l.id,
                    style: {
                      display: "flex",
                      gap: 10,
                      alignItems: "baseline",
                      padding: "7px 4px",
                      borderBottom: `1px solid ${f.border}`,
                    },
                  },
                  i.default.createElement(
                    "span",
                    {
                      style: {
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10.5,
                        color: f.faint,
                        flexShrink: 0,
                      },
                    },
                    l.date,
                  ),
                  i.default.createElement(
                    "span",
                    {
                      style: {
                        fontSize: 13,
                        color: f.text,
                        fontFamily: "'IBM Plex Sans', sans-serif",
                      },
                    },
                    l.text,
                  ),
                  i.default.createElement(
                    "button",
                    {
                      onClick: () => o((s) => s.filter((u) => u.id !== l.id)),
                      style: {
                        marginLeft: "auto",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: f.faint,
                      },
                    },
                    i.default.createElement(Tt, { size: 13 }),
                  ),
                ),
              ),
            ),
      ),
    );
  }
  function lm({ sessions: e }) {
    return i.default.createElement(
      "div",
      { style: { display: "grid", gap: 12 } },
      i.default.createElement(OfficialRunsCard, null),
      i.default.createElement(lmSessions, { sessions: e }),
    );
  }
  function lmSessions({ sessions: e }) {
    return e.length === 0
      ? i.default.createElement(
          me,
          { style: { padding: 22, textAlign: "center" } },
          i.default.createElement(Ma, {
            size: 22,
            color: f.faint,
            style: { marginBottom: 10 },
          }),
          i.default.createElement(
            "p",
            {
              style: {
                color: f.dim,
                fontSize: 13.5,
                fontFamily: "'IBM Plex Sans', sans-serif",
                margin: 0,
              },
            },
            "No sessions yet. Run a drill to populate this.",
          ),
        )
      : i.default.createElement(
          "div",
          { style: { display: "grid", gap: 12 } },
          e.map((t, a) =>
            i.default.createElement(
              me,
              { key: a, style: { padding: 16 } },
              i.default.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  },
                },
                i.default.createElement(
                  "span",
                  {
                    style: {
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11.5,
                      color: f.dim,
                    },
                  },
                  t.date,
                ),
                i.default.createElement(
                  "span",
                  {
                    style: {
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      fontWeight: 700,
                      color:
                        t.pct >= 90 ? f.green : t.pct >= 60 ? f.amber : f.red,
                    },
                  },
                  t.correct,
                  "/",
                  t.total,
                  " \xB7 ",
                  t.pct,
                  "%",
                ),
              ),
              i.default.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 6,
                    marginBottom: 10,
                    flexWrap: "wrap",
                  },
                },
                ["hit", "miss-lucky", "gap", "misconception"].map((o) => {
                  let r = t.entries.filter((s) => s.cls === o).length;
                  if (!r) return null;
                  let n =
                      o === "hit"
                        ? f.green
                        : o === "miss-lucky"
                          ? f.amber
                          : o === "misconception"
                            ? f.red
                            : f.faint,
                    l = {
                      hit: "hit",
                      "miss-lucky": "lucky miss",
                      gap: "gap",
                      misconception: "misconception",
                    }[o];
                  return i.default.createElement(
                    nn,
                    { key: o, color: n },
                    r,
                    " ",
                    l,
                  );
                }),
              ),
              i.default.createElement(
                "div",
                { style: { display: "flex", gap: 3 } },
                [1, 2, 3, 4, 5].map((o) => {
                  let r = t.entries.filter((l) => l.confidence === o).length,
                    n = Math.max(
                      ...[1, 2, 3, 4, 5].map(
                        (l) =>
                          t.entries.filter((s) => s.confidence === l).length,
                      ),
                      1,
                    );
                  return i.default.createElement(
                    "div",
                    { key: o, style: { flex: 1, textAlign: "center" } },
                    i.default.createElement(
                      "div",
                      {
                        style: {
                          height: 30,
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "center",
                        },
                      },
                      i.default.createElement("div", {
                        style: {
                          width: "60%",
                          height: `${(r / n) * 100}%`,
                          minHeight: r ? 3 : 0,
                          background: f.cyan,
                          borderRadius: "2px 2px 0 0",
                        },
                      }),
                    ),
                    i.default.createElement(
                      "div",
                      {
                        style: {
                          fontSize: 9.5,
                          color: f.faint,
                          fontFamily: "'IBM Plex Mono', monospace",
                        },
                      },
                      "c",
                      o,
                    ),
                  );
                }),
              ),
            ),
          ),
        );
  }
  function sm({ sessions: e, gapCoverage: t }) {
    let a = new Set(e.flatMap((o) => o.entries.map((r) => r.qId)));
    return i.default.createElement(
      "div",
      { style: { display: "grid", gap: 16 } },
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "h2",
          {
            style: {
              margin: "0 0 12px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: f.text,
            },
          },
          "coverage by blueprint section",
        ),
        i.default.createElement(
          "div",
          { style: { display: "grid", gap: 10 } },
          Ft.map((o) => {
            let r = As.filter((s) => s.section === o.id),
              n = r.filter((s) => a.has(s.id)).length,
              l = r.length ? Math.round((n / r.length) * 100) : 0;
            return i.default.createElement(
              "div",
              { key: o.id },
              i.default.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12.5,
                    marginBottom: 4,
                    fontFamily: "'IBM Plex Mono', monospace",
                  },
                },
                i.default.createElement(
                  "span",
                  { style: { color: o.color } },
                  o.id,
                  " \xB7 ",
                  o.name,
                  " (",
                  o.weight,
                  "%)",
                ),
                i.default.createElement(
                  "span",
                  { style: { color: f.dim } },
                  n,
                  "/",
                  r.length,
                  " items touched",
                ),
              ),
              i.default.createElement(
                "div",
                {
                  style: {
                    height: 6,
                    borderRadius: 3,
                    background: f.panelAlt,
                    overflow: "hidden",
                  },
                },
                i.default.createElement("div", {
                  style: {
                    width: `${l}%`,
                    height: "100%",
                    background: o.color,
                  },
                }),
              ),
            );
          }),
        ),
      ),
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "h2",
          {
            style: {
              margin: "0 0 4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: f.text,
            },
          },
          "former zero-coverage topics",
        ),
        i.default.createElement(
          "p",
          {
            style: {
              margin: "0 0 12px",
              fontSize: 12.5,
              color: f.dim,
              fontFamily: "'IBM Plex Sans', sans-serif",
            },
          },
          "Now authored (week 10). Green = drilled at least once; amber = written but not yet practiced.",
        ),
        i.default.createElement(
          "div",
          { style: { display: "flex", flexWrap: "wrap", gap: 7 } },
          t.map((o) =>
            i.default.createElement(
              "span",
              {
                key: o.id,
                style: {
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 12,
                  color: o.drilled ? f.green : f.amber,
                  border: `1px solid ${o.drilled ? f.green : f.amber}55`,
                  borderRadius: 4,
                  padding: "3px 8px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                },
              },
              o.drilled
                ? i.default.createElement(lt, { size: 10 })
                : i.default.createElement(Qt, { size: 7 }),
              o.label,
            ),
          ),
        ),
      ),
    );
  }
  function im({ weekStatus: e }) {
    let t = [...Ps, ...SPs].filter((a) => e[a.n] === "done" && Ms[a.n]);
    return t.length === 0
      ? i.default.createElement(
          me,
          { style: { padding: 22, textAlign: "center" } },
          i.default.createElement($t, {
            size: 22,
            color: f.faint,
            style: { marginBottom: 10 },
          }),
          i.default.createElement(
            "p",
            {
              style: {
                color: f.dim,
                fontSize: 13.5,
                fontFamily: "'IBM Plex Sans', sans-serif",
                margin: 0,
              },
            },
            `Nothing marked taught yet. Open a week in /plan, read through it, and hit "mark as taught" \u2014 it'll show up here as a recap.`,
          ),
        )
      : i.default.createElement(
          "div",
          { style: { display: "grid", gap: 14 } },
          i.default.createElement(
            me,
            { style: { padding: 16 } },
            i.default.createElement(
              "p",
              {
                style: {
                  margin: 0,
                  fontSize: 12.5,
                  color: f.dim,
                  fontFamily: "'IBM Plex Sans', sans-serif",
                },
              },
              "Recap deck \u2014 every key takeaway from topics you've marked taught, most recent first. Scan this before a drill session.",
            ),
          ),
          t
            .slice()
            .reverse()
            .map((a) => {
              let o = Ms[a.n];
              return i.default.createElement(
                me,
                { key: a.n, style: { padding: 16 } },
                i.default.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                    },
                  },
                  i.default.createElement(
                    "span",
                    {
                      style: {
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        color: f.faint,
                      },
                    },
                    wlab(a.n),
                  ),
                  i.default.createElement(
                    "span",
                    {
                      style: {
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13.5,
                        color: f.text,
                        fontWeight: 600,
                      },
                    },
                    a.title,
                  ),
                  i.default.createElement(
                    "div",
                    { style: { display: "flex", gap: 5, marginLeft: "auto" } },
                    a.sections.map((r) => {
                      let n = Ft.find((l) => l.id === r);
                      return i.default.createElement(
                        nn,
                        { key: r, color: n.color },
                        r,
                      );
                    }),
                  ),
                ),
                i.default.createElement(
                  "ul",
                  { style: { margin: 0, paddingLeft: 18 } },
                  o.takeaways.map((r, n) =>
                    i.default.createElement(
                      "li",
                      {
                        key: n,
                        style: {
                          fontSize: 13,
                          lineHeight: 1.6,
                          color: f.text,
                          fontFamily: "'IBM Plex Sans', sans-serif",
                          marginBottom: 4,
                        },
                      },
                      r,
                    ),
                  ),
                ),
              );
            }),
        );
  }
  var um = [
    { id: "plan", label: "/plan", icon: Ao },
    { id: "drill", label: "/drill", icon: Bo },
    { id: "review", label: "/review", icon: $t },
    { id: "weak", label: "/weak", icon: st },
    { id: "gaps", label: "/gaps", icon: Fo },
    { id: "score", label: "/score", icon: Ma },
    { id: "guide", label: "/guide", icon: Gi },
  ];
  function Fs() {
    let [e, t] = (0, i.useState)("plan"),
      [a, o] = (0, i.useState)(!1),
      [r, n] = (0, i.useState)({}),
      [l, s] = (0, i.useState)(Lf),
      [u, c] = (0, i.useState)([]),
      [g, x] = (0, i.useState)([]),
      [h, y] = (0, i.useState)(null),
      [I, v] = (0, i.useState)(null),
      [pd, setPd] = (0, i.useState)(null),
      F = (0, i.useRef)(null);
    (0, i.useEffect)(() => () => clearTimeout(F.current), []);
    function p(P) {
      n((W) => {
        let te = W[P] || "pending",
          Xt = te === "done" ? "pending" : "done";
        return (
          clearTimeout(F.current),
          Xt === "done"
            ? (v({ weekN: P, prevValue: te }),
              (F.current = setTimeout(() => v(null), 6e3)))
            : v(null),
          { ...W, [P]: Xt }
        );
      });
    }
    function d() {
      I &&
        (clearTimeout(F.current),
        n((P) => ({ ...P, [I.weekN]: I.prevValue })),
        v(null));
    }
    ((0, i.useEffect)(() => {
      (async () => {
        (n(await Eo("weekStatus", {})),
          s(await Eo("weak", Lf)),
          c(await Eo("misconceptions", [])),
          x(await Eo("sessions", [])));
        let P = await Eo("sprintStart", null);
        P || ((P = SPRINT_START_DEFAULT), await Ta("sprintStart", P));
        if (!(await Eo("migr-2026-10-14", !1))) {
          let wk0 = await Eo("weak", Lf.filter((w) => !NEW_WEAK.includes(w))),
            ids = new Set(wk0.map((w) => w.id));
          wk0 = [...wk0, ...NEW_WEAK.filter((w) => !ids.has(w.id))];
          (s(wk0), await Ta("weak", wk0), await Ta("migr-2026-10-14", !0));
        }
        (y(P), o(!0));
      })();
    }, []),
      (0, i.useEffect)(() => {
        a && Ta("weekStatus", r);
      }, [r, a]),
      (0, i.useEffect)(() => {
        a && Ta("weak", l);
      }, [l, a]),
      (0, i.useEffect)(() => {
        a && Ta("misconceptions", u);
      }, [u, a]),
      (0, i.useEffect)(() => {
        a && Ta("sessions", g);
      }, [g, a]),
      (0, i.useEffect)(() => {
        a && h && Ta("sprintStart", h);
      }, [h, a]));
    function m(P) {
      let W = P.filter((Fa) => Fa.cls === "hit").length,
        te = P.length,
        Xt = {
          date: new Date().toISOString().slice(0, 10),
          correct: W,
          total: te,
          pct: te ? Math.round((W / te) * 100) : 0,
          entries: P,
        };
      x((Fa) => [Xt, ...Fa].slice(0, 30));
    }
    let L = new Set(g.flatMap((P) => P.entries.map((W) => W.qId))),
      C = Kp.map((P) => ({ ...P, drilled: P.qIds.some((W) => L.has(W)) })),
      M = Object.values(r).filter((P) => P === "done").length,
      A = Zp(h),
      T = If(h) + 1,
      H = `sprint day ${Math.max(1, T)} \xB7 week ${A} of 6`;
    return i.default.createElement(
      "div",
      {
        style: {
          minHeight: "100vh",
          background: f.bg,
          fontFamily: "'IBM Plex Sans', sans-serif",
        },
        className: "apc-shell",
      },
      i.default.createElement(
        "style",
        null,
        `
        * { box-sizing: border-box; }
        button:focus-visible, input:focus-visible { outline: 2px solid ${f.cyan}; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }

        /* ---- mobile / narrow screen fixes ---- */
        .apc-shell { padding: 28px 16px 60px; }
        .apc-inner { max-width: 780px; margin: 0 auto; }
        .apc-code {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          white-space: pre;
        }
        .apc-prompt { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        @media (max-width: 640px) {
          .apc-shell { padding: 16px 10px 48px; }

          /* stop long titles + tag pills fighting for the same row */
          .apc-weekrow { flex-wrap: wrap; row-gap: 8px; }
          .apc-weekrow .apc-weektitle { flex: 1 1 100%; order: 3; }
          .apc-weekrow .apc-tags { order: 4; }

          /* code blocks wrap instead of pushing the page wide */
          .apc-code {
            white-space: pre-wrap;
            word-break: break-word;
            font-size: 11px !important;
            padding: 8px 9px !important;
          }

          /* terminal prompt truncates rather than overflowing */
          .apc-prompt { font-size: 10.5px !important; margin-left: 6px !important; }
          .apc-weeklabel { display: none; }

          /* tighter panels + teach blocks */
          .apc-teach { padding: 12px 12px 14px !important; }
          .apc-panelpad { padding: 14px !important; }

          /* answer options and takeaways get more room */
          .apc-option { font-size: 12.5px !important; padding: 9px 10px !important; }
          .apc-stem { font-size: 13.5px !important; }

          /* nav tabs scroll horizontally instead of stacking messily */
          .apc-tabs {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .apc-tabs::-webkit-scrollbar { display: none; }
          .apc-tabs button { flex: 0 0 auto; }

          /* filter/length/timer button rows wrap cleanly */
          .apc-btnrow { flex-wrap: wrap; }
        }
      `,
      ),
      i.default.createElement(
        "div",
        { className: "apc-inner" },
        i.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 9,
              marginBottom: 18,
            },
          },
          i.default.createElement(Do, { size: 18, color: f.amber }),
          i.default.createElement(
            "span",
            {
              style: {
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: f.text,
                fontWeight: 700,
                letterSpacing: 0.3,
              },
            },
            "AD0-E128 ",
            i.default.createElement(
              "span",
              { style: { color: f.dim, fontWeight: 500 } },
              "\xB7 AEM Sites Developer Professional",
            ),
          ),
        ),
        i.default.createElement(tm, { tab: e, weekLabel: H }),
        i.default.createElement(
          "div",
          {
            style: {
              background: f.bg,
              border: `1px solid ${f.border}`,
              borderRadius: "0 0 8px 8px",
              padding: "10px 12px",
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 18,
            },
            className: "apc-tabs",
          },
          um.map((P) => {
            let W = P.icon,
              te = e === P.id;
            return i.default.createElement(
              "button",
              {
                key: P.id,
                onClick: () => t(P.id),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 13px",
                  borderRadius: 5,
                  border: `1px solid ${te ? f.borderLit : "transparent"}`,
                  background: te ? f.panelAlt : "transparent",
                  color: te ? f.text : f.dim,
                  cursor: "pointer",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 12.5,
                },
              },
              i.default.createElement(W, { size: 13 }),
              " ",
              P.label,
            );
          }),
        ),
        a
          ? i.default.createElement(
              i.default.Fragment,
              null,
              e === "plan" &&
                i.default.createElement(om, {
                  weekStatus: r,
                  onToggleWeek: p,
                  gapCoverage: C,
                  startDate: h,
                  setStartDate: y,
                  currentWeek: A,
                  dayOfPlan: T,
                  sessions: g,
                  onDrillWeek: (ids) => (setPd({ ids, k: Date.now() }), t("drill")),
                }),
              e === "drill" &&
                i.default.createElement(rm, {
                  onSessionComplete: m,
                  setMisconceptions: c,
                  preset: pd,
                  clearPreset: () => setPd(null),
                }),
              e === "review" && i.default.createElement(im, { weekStatus: r }),
              e === "weak" &&
                i.default.createElement(nm, {
                  weak: l,
                  setWeak: s,
                  misconceptions: u,
                  setMisconceptions: c,
                }),
              e === "gaps" &&
                i.default.createElement(sm, { sessions: g, gapCoverage: C }),
              e === "score" && i.default.createElement(lm, { sessions: g }),
              e === "guide" &&
                i.default.createElement(gm, {
                  weak: l,
                  misconceptions: u,
                  sessions: g,
                  gapCoverage: C,
                }),
            )
          : i.default.createElement(
              me,
              { style: { padding: 30, textAlign: "center" } },
              i.default.createElement(
                "span",
                {
                  style: {
                    color: f.dim,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12.5,
                  },
                },
                "loading session state\u2026",
              ),
            ),
      ),
      I &&
        i.default.createElement(
          "div",
          {
            style: {
              position: "fixed",
              left: "50%",
              bottom: 22,
              transform: "translateX(-50%)",
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: f.panelAlt,
              border: `1px solid ${f.borderLit}`,
              borderRadius: 8,
              padding: "10px 10px 10px 16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
              maxWidth: "calc(100vw - 32px)",
            },
          },
          i.default.createElement(
            "span",
            {
              style: {
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 13,
                color: f.text,
                whiteSpace: "nowrap",
              },
            },
            "Marked ",
            wlab(I.weekN),
            " as taught",
          ),
          i.default.createElement(
            "button",
            {
              onClick: d,
              style: {
                padding: "6px 12px",
                borderRadius: 5,
                border: "none",
                cursor: "pointer",
                background: f.amber,
                color: "#1A1206",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: 700,
                flexShrink: 0,
              },
            },
            "undo",
          ),
          i.default.createElement(
            "button",
            {
              onClick: () => {
                (clearTimeout(F.current), v(null));
              },
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                color: f.faint,
                padding: 2,
                lineHeight: 0,
                flexShrink: 0,
              },
              "aria-label": "Dismiss",
            },
            i.default.createElement(Tt, { size: 14 }),
          ),
        ),
    );
  }
  var Dx = [
    {
      id: "d1",
      section: "S2",
      cloud:
        "Touch UI dialogs (Granite UI) + Core Components under /libs/core/wcm/components, resolved via sling:resourceType/SuperType — /apps checked before /libs.",
      legacy:
        "Classic UI dialogs used xtype-based widget definitions; foundation components lived under different /libs paths than today's Core Components.",
      trap: "See xtype or /libs/foundation/components in a question? That's describing the legacy model — don't map it onto AEMaaCS behavior.",
    },
    {
      id: "d2",
      section: "S1",
      cloud:
        "AEMaaCS: no direct filesystem access to the Dispatcher cache. Explicit invalidation is preferably done with Sling Content Distribution from Author; the Replication API driving the publish flush agent is the alternative.",
      legacy:
        "On-prem: dispatcher ran on your own Apache server with direct filesystem access to the cache docroot — cache files could be deleted by hand.",
      trap: "An option describing ‘delete the cache files directly’ or ‘restart dispatcher to clear cache’ is the legacy/on-prem answer — on AEMaaCS it's SCD invalidation (preferred) or the Replication API with the flush agent.",
    },
    {
      id: "d3",
      section: "S1",
      cloud:
        "AEMaaCS restricts direct Felix console config editing on higher environments — configs are deployed as code (ui.config package content), often paired with repoinit for service users.",
      legacy:
        "Configs could be clicked directly into /system/console/configMgr, including on something close to production.",
      trap: "‘Just add the OSGi config via the Felix console’ is a legacy-instinct trap on a higher-environment question — the cloud-correct path is code + repoinit, not console clicks.",
    },
    {
      id: "d4",
      section: "S1",
      cloud:
        "Touch UI: Component Policies + the Style System — console-configured, template/policy-driven, no Classic UI equivalent.",
      legacy:
        "cq:editConfig + xtype-based dialogs configured what could be edited and where a component could be placed.",
      trap: "If a question shows cq:editConfig alongside xtype dialogs, that's the legacy configuration model, not how Policies/the Style System work today.",
    },
    {
      id: "d5",
      section: "S3",
      cloud:
        "AEMaaCS enforces /apps and /libs as genuinely immutable at the platform level — no prod hand-edits; everything ships through code + the Cloud Manager pipeline.",
      legacy:
        "On-prem allowed hand-editing config or content directly on the server.",
      trap: "Any answer suggesting a direct/manual edit to a running AEMaaCS environment is wrong by construction — the cloud-correct path always routes through Cloud Manager.",
    },
    {
      id: "d6",
      section: "S4",
      cloud:
        "AEMaaCS surfaces most operational visibility through Cloud Manager instead — there's no full local equivalent.",
      legacy:
        "6.5 on-prem exposed the Operations Dashboard and hand-configured replication agents visible on the local server.",
      trap: "A question describing the ‘Operations Dashboard’ or manually configuring a replication agent on the instance is describing the on-prem/AMS model — recognize it as legacy, don't go looking for it in AEMaaCS.",
    },
    {
      id: "d7",
      section: "S2",
      cloud:
        "Universal Editor is Adobe's current recommendation for new projects.",
      legacy:
        "SPA Editor is now marked deprecated for new projects (existing SPA Editor projects are still supported).",
      trap: "Know the SPA Editor mechanism for the exam — it may still be tested — but don't treat it as current best-practice guidance for a new build.",
    },
    {
      id: "d8",
      section: "S1",
      cloud:
        "AEMaaCS fronts every environment with a managed CDN sitting in front of the Dispatcher — Dispatcher is still author-configured (dispatcher.any/filter.any) but is now one layer in a stack: CDN (closest to the user) → Dispatcher → AEM.",
      legacy:
        "On-prem/AMS, the Dispatcher (paired with your own web server) was typically the outermost cache layer devs reasoned about directly, with no managed CDN necessarily in front of it.",
      trap: "A question that treats the Dispatcher as the only/outermost cache layer is using the on-prem mental model — on AEMaaCS, always account for the CDN sitting in front of it too. (Verified against Adobe's official Dispatcher documentation.)",
    },
  ];
  function gm({ weak: wk, misconceptions: mc, sessions: se, gapCoverage: gc }) {
    let [gf, setGf] = (0, i.useState)("ALL");
    let allEntries = se.flatMap((s) => s.entries);
    let bySection = Ft.map((sec) => {
      let ents = allEntries.filter((en) => en.section === sec.id),
        n = ents.length,
        riskSum = ents.reduce(
          (acc, en) =>
            acc +
            (en.cls === "misconception" || en.cls === "gap"
              ? 1
              : en.cls === "miss-lucky"
                ? 0.5
                : 0),
          0,
        ),
        avgRisk = n ? riskSum / n : 0.6;
      return { ...sec, attempts: n, avgRisk, score: sec.weight * avgRisk };
    }).sort((a, b) => b.score - a.score);
    let openWeak = wk.filter((w) => !w.closed),
      undrilled = gc.filter((g) => !g.drilled);
    let refBySection = Ft.map((sec) => ({
      ...sec,
      bullets: [...SPs, ...Ps].filter((w) => w.sections.includes(sec.id) && Ms[w.n]).flatMap(
        (w) => Ms[w.n].takeaways.map((x) => ({ week: wlab(w.n), text: x })),
      ),
    }));
    let shownDistractors =
      gf === "ALL" ? Dx : Dx.filter((d) => d.section === gf);
    return i.default.createElement(
      "div",
      { style: { display: "grid", gap: 16 } },
      i.default.createElement(OfficialExamCard, null),
      i.default.createElement(RulesCard, null),
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "h2",
          {
            style: {
              margin: "0 0 4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: f.text,
            },
          },
          "focus now",
        ),
        i.default.createElement(
          "p",
          {
            style: {
              margin: "0 0 14px",
              fontSize: 12.5,
              color: f.dim,
              fontFamily: "'IBM Plex Sans', sans-serif",
            },
          },
          "Ranked by blueprint weight × how often recent drill answers in that section were misses, lucky guesses, or flagged misconceptions. Updates as you drill.",
        ),
        i.default.createElement(
          "div",
          { style: { display: "grid", gap: 10 } },
          bySection.map((sec) =>
            i.default.createElement(
              "div",
              {
                key: sec.id,
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 11px",
                  borderRadius: 5,
                  background: f.panelAlt,
                  border: `1px solid ${f.border}`,
                },
              },
              i.default.createElement(
                "div",
                null,
                i.default.createElement(
                  "div",
                  {
                    style: {
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 12.5,
                      color: sec.color,
                      marginBottom: 2,
                    },
                  },
                  sec.id,
                  " · ",
                  sec.name,
                  " (",
                  sec.weight,
                  "%)",
                ),
                i.default.createElement(
                  "div",
                  {
                    style: {
                      fontSize: 12,
                      color: f.dim,
                      fontFamily: "'IBM Plex Sans', sans-serif",
                    },
                  },
                  sec.attempts
                    ? `${Math.round(sec.avgRisk * 100)}% of ${sec.attempts} tracked answers were misses, lucky guesses, or misconceptions`
                    : "Not attempted yet in a tracked drill session",
                ),
              ),
              i.default.createElement(
                nn,
                { color: sec.color },
                sec.attempts
                  ? `risk ${Math.round(sec.avgRisk * 100)}%`
                  : "untested",
              ),
            ),
          ),
        ),
        (openWeak.length > 0 || undrilled.length > 0) &&
          i.default.createElement(
            "div",
            { style: { marginTop: 14, display: "grid", gap: 8 } },
            openWeak.length > 0 &&
              i.default.createElement(
                "div",
                {
                  style: {
                    fontSize: 12.5,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    color: f.text,
                  },
                },
                i.default.createElement("strong", null, "Open threads: "),
                openWeak.map((w) => w.text).join(" · "),
              ),
            undrilled.length > 0 &&
              i.default.createElement(
                "div",
                {
                  style: {
                    fontSize: 12.5,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    color: f.text,
                  },
                },
                i.default.createElement("strong", null, "Not yet drilled: "),
                undrilled.map((g) => g.label).join(" · "),
              ),
          ),
      ),
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "h2",
          {
            style: {
              margin: "0 0 4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: f.text,
            },
          },
          "distractor map",
        ),
        i.default.createElement(
          "p",
          {
            style: {
              margin: "0 0 12px",
              fontSize: 12.5,
              color: f.dim,
              fontFamily: "'IBM Plex Sans', sans-serif",
            },
          },
          "Legacy AEM 6.5 patterns the exam still uses as wrong-answer bait, and how to spot them.",
        ),
        i.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 12,
            },
          },
          ["ALL", ...Ft.map((sec) => sec.id)].map((sid) => {
            let sec = Ft.find((s) => s.id === sid);
            return i.default.createElement(
              "button",
              {
                key: sid,
                onClick: () => setGf(sid),
                style: {
                  padding: "4px 10px",
                  borderRadius: 4,
                  border: `1px solid ${gf === sid ? f.borderLit : f.border}`,
                  background: gf === sid ? f.panelAlt : "transparent",
                  color: sec ? sec.color : f.text,
                  cursor: "pointer",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11.5,
                },
              },
              sid,
            );
          }),
        ),
        i.default.createElement(
          "div",
          { style: { display: "grid", gap: 10 } },
          shownDistractors.map((d) => {
            let sec = Ft.find((s) => s.id === d.section);
            return i.default.createElement(
              "div",
              {
                key: d.id,
                style: {
                  padding: "10px 12px",
                  borderRadius: 5,
                  border: `1px solid ${f.border}`,
                  background: f.panelAlt,
                },
              },
              i.default.createElement(nn, { color: sec.color }, sec.id),
              i.default.createElement(
                "div",
                {
                  style: {
                    marginTop: 6,
                    fontSize: 12.5,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    color: f.text,
                  },
                },
                i.default.createElement("strong", null, "Cloud (AEMaaCS): "),
                d.cloud,
              ),
              i.default.createElement(
                "div",
                {
                  style: {
                    marginTop: 4,
                    fontSize: 12.5,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    color: f.dim,
                  },
                },
                i.default.createElement("strong", null, "Legacy 6.5: "),
                d.legacy,
              ),
              i.default.createElement(
                "div",
                {
                  style: {
                    marginTop: 4,
                    fontSize: 12,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    color: f.amber,
                  },
                },
                i.default.createElement("strong", null, "Trap: "),
                d.trap,
              ),
            );
          }),
        ),
      ),
      i.default.createElement(
        me,
        { style: { padding: 18 } },
        i.default.createElement(
          "h2",
          {
            style: {
              margin: "0 0 12px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: f.text,
            },
          },
          "reference cards",
        ),
        i.default.createElement(
          "div",
          { style: { display: "grid", gap: 14 } },
          refBySection.map((sec) =>
            i.default.createElement(
              "div",
              { key: sec.id },
              i.default.createElement(
                "div",
                {
                  style: {
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12.5,
                    color: sec.color,
                    marginBottom: 6,
                  },
                },
                sec.id,
                " · ",
                sec.name,
                " (",
                sec.weight,
                "%)",
              ),
              sec.bullets.length === 0
                ? i.default.createElement(
                    "p",
                    {
                      style: {
                        margin: 0,
                        fontSize: 12,
                        color: f.faint,
                        fontFamily: "'IBM Plex Sans', sans-serif",
                      },
                    },
                    "No taught weeks tagged to this section yet.",
                  )
                : i.default.createElement(
                    "ul",
                    { style: { margin: 0, paddingLeft: 18 } },
                    sec.bullets.map((b, idx) =>
                      i.default.createElement(
                        "li",
                        {
                          key: idx,
                          style: {
                            fontSize: 12.5,
                            lineHeight: 1.6,
                            color: f.text,
                            fontFamily: "'IBM Plex Sans', sans-serif",
                            marginBottom: 3,
                          },
                        },
                        b.text,
                        i.default.createElement(
                          "span",
                          { style: { color: f.faint } },
                          " (",
                          b.week,
                          ")",
                        ),
                      ),
                    ),
                  ),
            ),
          ),
        ),
      ),
    );
  }
  (0, wf.createRoot)(document.getElementById("root")).render(
    vf.default.createElement(Fs, null),
  );
  "serviceWorker" in navigator &&
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .catch((e) => console.warn("Service worker registration failed:", e));
    });
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/activity.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/book-open.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-check.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/clock.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layers.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/message-circle.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/refresh-cw.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/target.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/terminal.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/triangle-alert.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/wrench.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
