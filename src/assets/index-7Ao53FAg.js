(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var La = { exports: {} },
  Ei = {},
  za = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = Symbol.for("react.element"),
  ic = Symbol.for("react.portal"),
  lc = Symbol.for("react.fragment"),
  sc = Symbol.for("react.strict_mode"),
  oc = Symbol.for("react.profiler"),
  ac = Symbol.for("react.provider"),
  uc = Symbol.for("react.context"),
  dc = Symbol.for("react.forward_ref"),
  cc = Symbol.for("react.suspense"),
  fc = Symbol.for("react.memo"),
  pc = Symbol.for("react.lazy"),
  co = Symbol.iterator;
function mc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (co && e[co]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ma = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ia = Object.assign,
  Oa = {};
function xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ma);
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Na() {}
Na.prototype = xn.prototype;
function ms(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ma);
}
var hs = (ms.prototype = new Na());
hs.constructor = ms;
Ia(hs, xn.prototype);
hs.isPureReactComponent = !0;
var fo = Array.isArray,
  Da = Object.prototype.hasOwnProperty,
  vs = { current: null },
  Ra = { key: !0, ref: !0, __self: !0, __source: !0 };
function Aa(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Da.call(t, r) && !Ra.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), u = 0; u < a; u++) o[u] = arguments[u + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: dr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: vs.current,
  };
}
function hc(e, t) {
  return {
    $$typeof: dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function vc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var po = /\/+/g;
function Vi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vc("" + e.key)
    : t.toString(36);
}
function Ar(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case dr:
          case ic:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Vi(s, 0) : r),
      fo(i)
        ? ((n = ""),
          e != null && (n = e.replace(po, "$&/") + "/"),
          Ar(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (gs(i) &&
            (i = hc(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(po, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), fo(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + Vi(l, a);
      s += Ar(l, t, n, o, i);
    }
  else if (((o = mc(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + Vi(l, a++)), (s += Ar(l, t, n, o, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ar(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  jr = { transition: null },
  yc = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: jr,
    ReactCurrentOwner: vs,
  };
A.Children = {
  map: gr,
  forEach: function (e, t, n) {
    gr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
A.Component = xn;
A.Fragment = lc;
A.Profiler = oc;
A.PureComponent = ms;
A.StrictMode = sc;
A.Suspense = cc;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yc;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ia({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = vs.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      Da.call(t, o) &&
        !Ra.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var u = 0; u < o; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: dr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: uc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ac, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Aa;
A.createFactory = function (e) {
  var t = Aa.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: dc, render: e };
};
A.isValidElement = gs;
A.lazy = function (e) {
  return { $$typeof: pc, _payload: { _status: -1, _result: e }, _init: gc };
};
A.memo = function (e, t) {
  return { $$typeof: fc, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = jr.transition;
  jr.transition = {};
  try {
    e();
  } finally {
    jr.transition = t;
  }
};
A.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
A.useContext = function (e) {
  return he.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
A.useId = function () {
  return he.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return he.current.useRef(e);
};
A.useState = function (e) {
  return he.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return he.current.useTransition();
};
A.version = "18.2.0";
za.exports = A;
var F = za.exports;
const b = rc(F);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wc = F,
  Sc = Symbol.for("react.element"),
  xc = Symbol.for("react.fragment"),
  Ec = Object.prototype.hasOwnProperty,
  Tc = wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ja(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ec.call(t, r) && !Cc.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Sc,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Tc.current,
  };
}
Ei.Fragment = xc;
Ei.jsx = ja;
Ei.jsxs = ja;
La.exports = Ei;
var R = La.exports,
  gl = {},
  Fa = { exports: {} },
  _e = {},
  Va = { exports: {} },
  Ba = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, z) {
    var O = T.length;
    T.push(z);
    e: for (; 0 < O; ) {
      var V = (O - 1) >>> 1,
        Q = T[V];
      if (0 < i(Q, z)) (T[V] = z), (T[O] = Q), (O = V);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var z = T[0],
      O = T.pop();
    if (O !== z) {
      T[0] = O;
      e: for (var V = 0, Q = T.length, hr = Q >>> 1; V < hr; ) {
        var zt = 2 * (V + 1) - 1,
          Fi = T[zt],
          Mt = zt + 1,
          vr = T[Mt];
        if (0 > i(Fi, O))
          Mt < Q && 0 > i(vr, Fi)
            ? ((T[V] = vr), (T[Mt] = O), (V = Mt))
            : ((T[V] = Fi), (T[zt] = O), (V = zt));
        else if (Mt < Q && 0 > i(vr, O)) (T[V] = vr), (T[Mt] = O), (V = Mt);
        else break e;
      }
    }
    return z;
  }
  function i(T, z) {
    var O = T.sortIndex - z.sortIndex;
    return O !== 0 ? O : T.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var o = [],
    u = [],
    d = 1,
    f = null,
    m = 3,
    v = !1,
    g = !1,
    w = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= T)
        r(u), (z.sortIndex = z.expirationTime), t(o, z);
      else break;
      z = n(u);
    }
  }
  function y(T) {
    if (((w = !1), h(T), !g))
      if (n(o) !== null) (g = !0), ae(S);
      else {
        var z = n(u);
        z !== null && Xe(y, z.startTime - T);
      }
  }
  function S(T, z) {
    (g = !1), w && ((w = !1), c(C), (C = -1)), (v = !0);
    var O = m;
    try {
      for (
        h(z), f = n(o);
        f !== null && (!(f.expirationTime > z) || (T && !I()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var Q = V(f.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Q == "function" ? (f.callback = Q) : f === n(o) && r(o),
            h(z);
        } else r(o);
        f = n(o);
      }
      if (f !== null) var hr = !0;
      else {
        var zt = n(u);
        zt !== null && Xe(y, zt.startTime - z), (hr = !1);
      }
      return hr;
    } finally {
      (f = null), (m = O), (v = !1);
    }
  }
  var E = !1,
    _ = null,
    C = -1,
    L = 5,
    x = -1;
  function I() {
    return !(e.unstable_now() - x < L);
  }
  function D() {
    if (_ !== null) {
      var T = e.unstable_now();
      x = T;
      var z = !0;
      try {
        z = _(!0, T);
      } finally {
        z ? N() : ((E = !1), (_ = null));
      }
    } else E = !1;
  }
  var N;
  if (typeof p == "function")
    N = function () {
      p(D);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      q = $.port2;
    ($.port1.onmessage = D),
      (N = function () {
        q.postMessage(null);
      });
  } else
    N = function () {
      P(D, 0);
    };
  function ae(T) {
    (_ = T), E || ((E = !0), N());
  }
  function Xe(T, z) {
    C = P(function () {
      T(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), ae(S));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var O = m;
      m = z;
      try {
        return T();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, z) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var O = m;
      m = T;
      try {
        return z();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (T, z, O) {
      var V = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? V + O : V))
          : (O = V),
        T)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = O + Q),
        (T = {
          id: d++,
          callback: z,
          priorityLevel: T,
          startTime: O,
          expirationTime: Q,
          sortIndex: -1,
        }),
        O > V
          ? ((T.sortIndex = O),
            t(u, T),
            n(o) === null &&
              T === n(u) &&
              (w ? (c(C), (C = -1)) : (w = !0), Xe(y, O - V)))
          : ((T.sortIndex = Q), t(o, T), g || v || ((g = !0), ae(S))),
        T
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (T) {
      var z = m;
      return function () {
        var O = m;
        m = z;
        try {
          return T.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    });
})(Ba);
Va.exports = Ba;
var kc = Va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a = F,
  Pe = kc;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ga = new Set(),
  Qn = {};
function Wt(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) Ga.add(t[e]);
}
var rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yl = Object.prototype.hasOwnProperty,
  Pc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mo = {},
  ho = {};
function _c(e) {
  return yl.call(ho, e)
    ? !0
    : yl.call(mo, e)
    ? !1
    : Pc.test(e)
    ? (ho[e] = !0)
    : ((mo[e] = !0), !1);
}
function Lc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zc(e, t, n, r) {
  if (t === null || typeof t > "u" || Lc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function ve(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ys = /[\-:]([a-z])/g;
function ws(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ys, ws);
    oe[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ys, ws);
    oe[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ys, ws);
  oe[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ss(e, t, n, r) {
  var i = oe.hasOwnProperty(t) ? oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zc(t, n, i, r) && (n = null),
    r || i === null
      ? _c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for("react.element"),
  Xt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  xs = Symbol.for("react.strict_mode"),
  wl = Symbol.for("react.profiler"),
  Ha = Symbol.for("react.provider"),
  Wa = Symbol.for("react.context"),
  Es = Symbol.for("react.forward_ref"),
  Sl = Symbol.for("react.suspense"),
  xl = Symbol.for("react.suspense_list"),
  Ts = Symbol.for("react.memo"),
  ut = Symbol.for("react.lazy"),
  Ua = Symbol.for("react.offscreen"),
  vo = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vo && e[vo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Bi;
function On(e) {
  if (Bi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bi = (t && t[1]) || "";
    }
  return (
    `
` +
    Bi +
    e
  );
}
var $i = !1;
function Gi(e, t) {
  if (!e || $i) return "";
  $i = !0;
  var n = Error.prepareStackTrace;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var o =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ($i = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function Mc(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gi(e.type, !1)), e;
    case 11:
      return (e = Gi(e.type.render, !1)), e;
    case 1:
      return (e = Gi(e.type, !0)), e;
    default:
      return "";
  }
}
function El(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Xt:
      return "Portal";
    case wl:
      return "Profiler";
    case xs:
      return "StrictMode";
    case Sl:
      return "Suspense";
    case xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wa:
        return (e.displayName || "Context") + ".Consumer";
      case Ha:
        return (e._context.displayName || "Context") + ".Provider";
      case Es:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ts:
        return (
          (t = e.displayName || null), t !== null ? t : El(e.type) || "Memo"
        );
      case ut:
        (t = e._payload), (e = e._init);
        try {
          return El(e(t));
        } catch {}
    }
  return null;
}
function Ic(e) {
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
      return El(t);
    case 8:
      return t === xs ? "StrictMode" : "Mode";
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
function Qa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Oc(e) {
  var t = Qa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wr(e) {
  e._valueTracker || (e._valueTracker = Oc(e));
}
function Ya(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Kr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Tl(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function go(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ct(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xa(e, t) {
  (t = t.checked), t != null && Ss(e, "checked", t, !1);
}
function Cl(e, t) {
  Xa(e, t);
  var n = Ct(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && kl(e, t.type, Ct(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function kl(e, t, n) {
  (t !== "number" || Kr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function on(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ct(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ct(n) };
}
function Ka(e, t) {
  var n = Ct(t.value),
    r = Ct(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function So(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Za(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _l(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Za(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Sr,
  qa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Sr = Sr || document.createElement("div"),
          Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
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
  Nc = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (e) {
  Nc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
  });
});
function Ja(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
    ? ("" + t).trim()
    : t + "px";
}
function ba(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ja(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Dc = K(
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
  }
);
function Ll(e, t) {
  if (t) {
    if (Dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function zl(e, t) {
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
var Ml = null;
function Cs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Il = null,
  an = null,
  un = null;
function xo(e) {
  if ((e = pr(e))) {
    if (typeof Il != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = _i(t)), Il(e.stateNode, e.type, t));
  }
}
function eu(e) {
  an ? (un ? un.push(e) : (un = [e])) : (an = e);
}
function tu() {
  if (an) {
    var e = an,
      t = un;
    if (((un = an = null), xo(e), t)) for (e = 0; e < t.length; e++) xo(t[e]);
  }
}
function nu(e, t) {
  return e(t);
}
function ru() {}
var Hi = !1;
function iu(e, t, n) {
  if (Hi) return e(t, n);
  Hi = !0;
  try {
    return nu(e, t, n);
  } finally {
    (Hi = !1), (an !== null || un !== null) && (ru(), tu());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _i(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Ol = !1;
if (rt)
  try {
    var kn = {};
    Object.defineProperty(kn, "passive", {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener("test", kn, kn),
      window.removeEventListener("test", kn, kn);
  } catch {
    Ol = !1;
  }
function Rc(e, t, n, r, i, l, s, a, o) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var jn = !1,
  Zr = null,
  qr = !1,
  Nl = null,
  Ac = {
    onError: function (e) {
      (jn = !0), (Zr = e);
    },
  };
function jc(e, t, n, r, i, l, s, a, o) {
  (jn = !1), (Zr = null), Rc.apply(Ac, arguments);
}
function Fc(e, t, n, r, i, l, s, a, o) {
  if ((jc.apply(this, arguments), jn)) {
    if (jn) {
      var u = Zr;
      (jn = !1), (Zr = null);
    } else throw Error(k(198));
    qr || ((qr = !0), (Nl = u));
  }
}
function Ut(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Eo(e) {
  if (Ut(e) !== e) throw Error(k(188));
}
function Vc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ut(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Eo(i), e;
        if (l === r) return Eo(i), t;
        l = l.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function su(e) {
  return (e = Vc(e)), e !== null ? ou(e) : null;
}
function ou(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ou(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var au = Pe.unstable_scheduleCallback,
  To = Pe.unstable_cancelCallback,
  Bc = Pe.unstable_shouldYield,
  $c = Pe.unstable_requestPaint,
  J = Pe.unstable_now,
  Gc = Pe.unstable_getCurrentPriorityLevel,
  ks = Pe.unstable_ImmediatePriority,
  uu = Pe.unstable_UserBlockingPriority,
  Jr = Pe.unstable_NormalPriority,
  Hc = Pe.unstable_LowPriority,
  du = Pe.unstable_IdlePriority,
  Ti = null,
  Qe = null;
function Wc(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(Ti, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Yc,
  Uc = Math.log,
  Qc = Math.LN2;
function Yc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Uc(e) / Qc) | 0)) | 0;
}
var xr = 64,
  Er = 4194304;
function Dn(e) {
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
function br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Dn(a)) : ((l &= s), l !== 0 && (r = Dn(l)));
  } else (s = n & ~i), s !== 0 ? (r = Dn(s)) : l !== 0 && (r = Dn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Xc(e, t) {
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
function Kc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - Be(l),
      a = 1 << s,
      o = i[s];
    o === -1
      ? (!(a & n) || a & r) && (i[s] = Xc(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Dl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cu() {
  var e = xr;
  return (xr <<= 1), !(xr & 4194240) && (xr = 64), e;
}
function Wi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function Zc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Be(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Ps(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function fu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pu,
  _s,
  mu,
  hu,
  vu,
  Rl = !1,
  Tr = [],
  vt = null,
  gt = null,
  yt = null,
  Kn = new Map(),
  Zn = new Map(),
  ct = [],
  qc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Co(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vt = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      yt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = pr(t)), t !== null && _s(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Jc(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (vt = Pn(vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (gt = Pn(gt, e, t, n, r, i)), !0;
    case "mouseover":
      return (yt = Pn(yt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Kn.set(l, Pn(Kn.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Zn.set(l, Pn(Zn.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function gu(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lu(n)), t !== null)) {
          (e.blockedOn = t),
            vu(e.priority, function () {
              mu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ml = r), n.target.dispatchEvent(r), (Ml = null);
    } else return (t = pr(n)), t !== null && _s(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ko(e, t, n) {
  Fr(e) && n.delete(t);
}
function bc() {
  (Rl = !1),
    vt !== null && Fr(vt) && (vt = null),
    gt !== null && Fr(gt) && (gt = null),
    yt !== null && Fr(yt) && (yt = null),
    Kn.forEach(ko),
    Zn.forEach(ko);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rl ||
      ((Rl = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, bc)));
}
function qn(e) {
  function t(i) {
    return _n(i, e);
  }
  if (0 < Tr.length) {
    _n(Tr[0], e);
    for (var n = 1; n < Tr.length; n++) {
      var r = Tr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vt !== null && _n(vt, e),
      gt !== null && _n(gt, e),
      yt !== null && _n(yt, e),
      Kn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < ct.length;
    n++
  )
    (r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    gu(n), n.blockedOn === null && ct.shift();
}
var dn = ot.ReactCurrentBatchConfig,
  ei = !0;
function ef(e, t, n, r) {
  var i = B,
    l = dn.transition;
  dn.transition = null;
  try {
    (B = 1), Ls(e, t, n, r);
  } finally {
    (B = i), (dn.transition = l);
  }
}
function tf(e, t, n, r) {
  var i = B,
    l = dn.transition;
  dn.transition = null;
  try {
    (B = 4), Ls(e, t, n, r);
  } finally {
    (B = i), (dn.transition = l);
  }
}
function Ls(e, t, n, r) {
  if (ei) {
    var i = Al(e, t, n, r);
    if (i === null) el(e, t, r, ti, n), Co(e, r);
    else if (Jc(i, e, t, n, r)) r.stopPropagation();
    else if ((Co(e, r), t & 4 && -1 < qc.indexOf(e))) {
      for (; i !== null; ) {
        var l = pr(i);
        if (
          (l !== null && pu(l),
          (l = Al(e, t, n, r)),
          l === null && el(e, t, r, ti, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else el(e, t, r, null, n);
  }
}
var ti = null;
function Al(e, t, n, r) {
  if (((ti = null), (e = Cs(r)), (e = Nt(e)), e !== null))
    if (((t = Ut(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ti = e), null;
}
function yu(e) {
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
      switch (Gc()) {
        case ks:
          return 1;
        case uu:
          return 4;
        case Jr:
        case Hc:
          return 16;
        case du:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null,
  zs = null,
  Vr = null;
function wu() {
  if (Vr) return Vr;
  var e,
    t = zs,
    n = t.length,
    r,
    i = "value" in pt ? pt.value : pt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (Vr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cr() {
  return !0;
}
function Po() {
  return !1;
}
function Le(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Cr
        : Po),
      (this.isPropagationStopped = Po),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cr));
      },
      persist: function () {},
      isPersistent: Cr,
    }),
    t
  );
}
var En = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ms = Le(En),
  fr = K({}, En, { view: 0, detail: 0 }),
  nf = Le(fr),
  Ui,
  Qi,
  Ln,
  Ci = K({}, fr, {
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
    getModifierState: Is,
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
        : (e !== Ln &&
            (Ln && e.type === "mousemove"
              ? ((Ui = e.screenX - Ln.screenX), (Qi = e.screenY - Ln.screenY))
              : (Qi = Ui = 0),
            (Ln = e)),
          Ui);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qi;
    },
  }),
  _o = Le(Ci),
  rf = K({}, Ci, { dataTransfer: 0 }),
  lf = Le(rf),
  sf = K({}, fr, { relatedTarget: 0 }),
  Yi = Le(sf),
  of = K({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  af = Le(of),
  uf = K({}, En, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = Le(uf),
  cf = K({}, En, { data: 0 }),
  Lo = Le(cf),
  ff = {
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
  pf = {
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
  mf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mf[e]) ? !!t[e] : !1;
}
function Is() {
  return hf;
}
var vf = K({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = ff[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? pf[e.keyCode] || "Unidentified"
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
    getModifierState: Is,
    charCode: function (e) {
      return e.type === "keypress" ? Br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Br(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gf = Le(vf),
  yf = K({}, Ci, {
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
  zo = Le(yf),
  wf = K({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Is,
  }),
  Sf = Le(wf),
  xf = K({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ef = Le(xf),
  Tf = K({}, Ci, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Cf = Le(Tf),
  kf = [9, 13, 27, 32],
  Os = rt && "CompositionEvent" in window,
  Fn = null;
rt && "documentMode" in document && (Fn = document.documentMode);
var Pf = rt && "TextEvent" in window && !Fn,
  Su = rt && (!Os || (Fn && 8 < Fn && 11 >= Fn)),
  Mo = " ",
  Io = !1;
function xu(e, t) {
  switch (e) {
    case "keyup":
      return kf.indexOf(t.keyCode) !== -1;
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
function Eu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function _f(e, t) {
  switch (e) {
    case "compositionend":
      return Eu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Io = !0), Mo);
    case "textInput":
      return (e = t.data), e === Mo && Io ? null : e;
    default:
      return null;
  }
}
function Lf(e, t) {
  if (Zt)
    return e === "compositionend" || (!Os && xu(e, t))
      ? ((e = wu()), (Vr = zs = pt = null), (Zt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Su && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zf = {
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
function Oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zf[e.type] : t === "textarea";
}
function Tu(e, t, n, r) {
  eu(r),
    (t = ni(t, "onChange")),
    0 < t.length &&
      ((n = new Ms("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vn = null,
  Jn = null;
function Mf(e) {
  Du(e, 0);
}
function ki(e) {
  var t = bt(e);
  if (Ya(t)) return e;
}
function If(e, t) {
  if (e === "change") return t;
}
var Cu = !1;
if (rt) {
  var Xi;
  if (rt) {
    var Ki = "oninput" in document;
    if (!Ki) {
      var No = document.createElement("div");
      No.setAttribute("oninput", "return;"),
        (Ki = typeof No.oninput == "function");
    }
    Xi = Ki;
  } else Xi = !1;
  Cu = Xi && (!document.documentMode || 9 < document.documentMode);
}
function Do() {
  Vn && (Vn.detachEvent("onpropertychange", ku), (Jn = Vn = null));
}
function ku(e) {
  if (e.propertyName === "value" && ki(Jn)) {
    var t = [];
    Tu(t, Jn, e, Cs(e)), iu(Mf, t);
  }
}
function Of(e, t, n) {
  e === "focusin"
    ? (Do(), (Vn = t), (Jn = n), Vn.attachEvent("onpropertychange", ku))
    : e === "focusout" && Do();
}
function Nf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ki(Jn);
}
function Df(e, t) {
  if (e === "click") return ki(t);
}
function Rf(e, t) {
  if (e === "input" || e === "change") return ki(t);
}
function Af(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : Af;
function bn(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !Ge(e[i], t[i])) return !1;
  }
  return !0;
}
function Ro(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ao(e, t) {
  var n = Ro(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ro(n);
  }
}
function Pu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _u() {
  for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kr(e.document);
  }
  return t;
}
function Ns(e) {
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
function jf(e) {
  var t = _u(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ns(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Ao(n, l));
        var s = Ao(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ff = rt && "documentMode" in document && 11 >= document.documentMode,
  qt = null,
  jl = null,
  Bn = null,
  Fl = !1;
function jo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fl ||
    qt == null ||
    qt !== Kr(r) ||
    ((r = qt),
    "selectionStart" in r && Ns(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Bn && bn(Bn, r)) ||
      ((Bn = r),
      (r = ni(jl, "onSelect")),
      0 < r.length &&
        ((t = new Ms("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qt))));
}
function kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jt = {
    animationend: kr("Animation", "AnimationEnd"),
    animationiteration: kr("Animation", "AnimationIteration"),
    animationstart: kr("Animation", "AnimationStart"),
    transitionend: kr("Transition", "TransitionEnd"),
  },
  Zi = {},
  Lu = {};
rt &&
  ((Lu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function Pi(e) {
  if (Zi[e]) return Zi[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Lu) return (Zi[e] = t[n]);
  return e;
}
var zu = Pi("animationend"),
  Mu = Pi("animationiteration"),
  Iu = Pi("animationstart"),
  Ou = Pi("transitionend"),
  Nu = new Map(),
  Fo =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pt(e, t) {
  Nu.set(e, t), Wt(t, [e]);
}
for (var qi = 0; qi < Fo.length; qi++) {
  var Ji = Fo[qi],
    Vf = Ji.toLowerCase(),
    Bf = Ji[0].toUpperCase() + Ji.slice(1);
  Pt(Vf, "on" + Bf);
}
Pt(zu, "onAnimationEnd");
Pt(Mu, "onAnimationIteration");
Pt(Iu, "onAnimationStart");
Pt("dblclick", "onDoubleClick");
Pt("focusin", "onFocus");
Pt("focusout", "onBlur");
Pt(Ou, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
Wt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function Vo(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Fc(r, t, void 0, e), (e.currentTarget = null);
}
function Du(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            o = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          Vo(i, a, u), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          Vo(i, a, u), (l = o);
        }
    }
  }
  if (qr) throw ((e = Nl), (qr = !1), (Nl = null), e);
}
function H(e, t) {
  var n = t[Hl];
  n === void 0 && (n = t[Hl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ru(t, e, 2, !1), n.add(r));
}
function bi(e, t, n) {
  var r = 0;
  t && (r |= 4), Ru(n, e, r, t);
}
var Pr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Pr]) {
    (e[Pr] = !0),
      Ga.forEach(function (n) {
        n !== "selectionchange" && ($f.has(n) || bi(n, !1, e), bi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pr] || ((t[Pr] = !0), bi("selectionchange", !1, t));
  }
}
function Ru(e, t, n, r) {
  switch (yu(t)) {
    case 1:
      var i = ef;
      break;
    case 4:
      i = tf;
      break;
    default:
      i = Ls;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function el(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo),
              o === i || (o.nodeType === 8 && o.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Nt(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  iu(function () {
    var u = l,
      d = Cs(n),
      f = [];
    e: {
      var m = Nu.get(e);
      if (m !== void 0) {
        var v = Ms,
          g = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = gf;
            break;
          case "focusin":
            (g = "focus"), (v = Yi);
            break;
          case "focusout":
            (g = "blur"), (v = Yi);
            break;
          case "beforeblur":
          case "afterblur":
            v = Yi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = _o;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = lf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Sf;
            break;
          case zu:
          case Mu:
          case Iu:
            v = af;
            break;
          case Ou:
            v = Ef;
            break;
          case "scroll":
            v = nf;
            break;
          case "wheel":
            v = Cf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = zo;
        }
        var w = (t & 4) !== 0,
          P = !w && e === "scroll",
          c = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              c !== null && ((y = Xn(p, c)), y != null && w.push(tr(p, y, h)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((m = new v(m, g, null, n, d)), f.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ml &&
            (g = n.relatedTarget || n.fromElement) &&
            (Nt(g) || g[it]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? Nt(g) : null),
              g !== null &&
                ((P = Ut(g)), g !== P || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((w = _o),
            (y = "onMouseLeave"),
            (c = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = zo),
              (y = "onPointerLeave"),
              (c = "onPointerEnter"),
              (p = "pointer")),
            (P = v == null ? m : bt(v)),
            (h = g == null ? m : bt(g)),
            (m = new w(y, p + "leave", v, n, d)),
            (m.target = P),
            (m.relatedTarget = h),
            (y = null),
            Nt(d) === u &&
              ((w = new w(c, p + "enter", g, n, d)),
              (w.target = h),
              (w.relatedTarget = P),
              (y = w)),
            (P = y),
            v && g)
          )
            t: {
              for (w = v, c = g, p = 0, h = w; h; h = Qt(h)) p++;
              for (h = 0, y = c; y; y = Qt(y)) h++;
              for (; 0 < p - h; ) (w = Qt(w)), p--;
              for (; 0 < h - p; ) (c = Qt(c)), h--;
              for (; p--; ) {
                if (w === c || (c !== null && w === c.alternate)) break t;
                (w = Qt(w)), (c = Qt(c));
              }
              w = null;
            }
          else w = null;
          v !== null && Bo(f, m, v, w, !1),
            g !== null && P !== null && Bo(f, P, g, w, !0);
        }
      }
      e: {
        if (
          ((m = u ? bt(u) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var S = If;
        else if (Oo(m))
          if (Cu) S = Rf;
          else {
            S = Nf;
            var E = Of;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = Df);
        if (S && (S = S(e, u))) {
          Tu(f, S, n, d);
          break e;
        }
        E && E(e, m, u),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            kl(m, "number", m.value);
      }
      switch (((E = u ? bt(u) : window), e)) {
        case "focusin":
          (Oo(E) || E.contentEditable === "true") &&
            ((qt = E), (jl = u), (Bn = null));
          break;
        case "focusout":
          Bn = jl = qt = null;
          break;
        case "mousedown":
          Fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Fl = !1), jo(f, n, d);
          break;
        case "selectionchange":
          if (Ff) break;
        case "keydown":
        case "keyup":
          jo(f, n, d);
      }
      var _;
      if (Os)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Zt
          ? xu(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Su &&
          n.locale !== "ko" &&
          (Zt || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Zt && (_ = wu())
            : ((pt = d),
              (zs = "value" in pt ? pt.value : pt.textContent),
              (Zt = !0))),
        (E = ni(u, C)),
        0 < E.length &&
          ((C = new Lo(C, e, null, n, d)),
          f.push({ event: C, listeners: E }),
          _ ? (C.data = _) : ((_ = Eu(n)), _ !== null && (C.data = _)))),
        (_ = Pf ? _f(e, n) : Lf(e, n)) &&
          ((u = ni(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Lo("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = _)));
    }
    Du(f, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ni(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Xn(e, n)),
      l != null && r.unshift(tr(e, l, i)),
      (l = Xn(e, t)),
      l != null && r.push(tr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bo(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      u = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((o = Xn(n, l)), o != null && s.unshift(tr(n, o, a)))
        : i || ((o = Xn(n, l)), o != null && s.push(tr(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Gf = /\r\n?/g,
  Hf = /\u0000|\uFFFD/g;
function $o(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gf,
      `
`
    )
    .replace(Hf, "");
}
function _r(e, t, n) {
  if (((t = $o(t)), $o(e) !== t && n)) throw Error(k(425));
}
function ri() {}
var Vl = null,
  Bl = null;
function $l(e, t) {
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
var Gl = typeof setTimeout == "function" ? setTimeout : void 0,
  Wf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Go = typeof Promise == "function" ? Promise : void 0,
  Uf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Go < "u"
      ? function (e) {
          return Go.resolve(null).then(e).catch(Qf);
        }
      : Gl;
function Qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function tl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), qn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  qn(t);
}
function wt(e) {
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
function Ho(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + Tn,
  nr = "__reactProps$" + Tn,
  it = "__reactContainer$" + Tn,
  Hl = "__reactEvents$" + Tn,
  Yf = "__reactListeners$" + Tn,
  Xf = "__reactHandles$" + Tn;
function Nt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[it] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ho(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Ho(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Ue] || e[it]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function _i(e) {
  return e[nr] || null;
}
var Wl = [],
  en = -1;
function _t(e) {
  return { current: e };
}
function W(e) {
  0 > en || ((e.current = Wl[en]), (Wl[en] = null), en--);
}
function G(e, t) {
  en++, (Wl[en] = e.current), (e.current = t);
}
var kt = {},
  fe = _t(kt),
  we = _t(!1),
  Ft = kt;
function hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function ii() {
  W(we), W(fe);
}
function Wo(e, t, n) {
  if (fe.current !== kt) throw Error(k(168));
  G(fe, t), G(we, n);
}
function Au(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Ic(e) || "Unknown", i));
  return K({}, n, r);
}
function li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kt),
    (Ft = fe.current),
    G(fe, e),
    G(we, we.current),
    !0
  );
}
function Uo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Au(e, t, Ft)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(we),
      W(fe),
      G(fe, e))
    : W(we),
    G(we, n);
}
var qe = null,
  Li = !1,
  nl = !1;
function ju(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function Kf(e) {
  (Li = !0), ju(e);
}
function Lt() {
  if (!nl && qe !== null) {
    nl = !0;
    var e = 0,
      t = B;
    try {
      var n = qe;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qe = null), (Li = !1);
    } catch (i) {
      throw (qe !== null && (qe = qe.slice(e + 1)), au(ks, Lt), i);
    } finally {
      (B = t), (nl = !1);
    }
  }
  return null;
}
var tn = [],
  nn = 0,
  si = null,
  oi = 0,
  Me = [],
  Ie = 0,
  Vt = null,
  Je = 1,
  be = "";
function It(e, t) {
  (tn[nn++] = oi), (tn[nn++] = si), (si = e), (oi = t);
}
function Fu(e, t, n) {
  (Me[Ie++] = Je), (Me[Ie++] = be), (Me[Ie++] = Vt), (Vt = e);
  var r = Je;
  e = be;
  var i = 32 - Be(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Be(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Je = (1 << (32 - Be(t) + i)) | (n << i) | r),
      (be = l + e);
  } else (Je = (1 << l) | (n << i) | r), (be = e);
}
function Ds(e) {
  e.return !== null && (It(e, 1), Fu(e, 1, 0));
}
function Rs(e) {
  for (; e === si; )
    (si = tn[--nn]), (tn[nn] = null), (oi = tn[--nn]), (tn[nn] = null);
  for (; e === Vt; )
    (Vt = Me[--Ie]),
      (Me[Ie] = null),
      (be = Me[--Ie]),
      (Me[Ie] = null),
      (Je = Me[--Ie]),
      (Me[Ie] = null);
}
var ke = null,
  Ce = null,
  U = !1,
  Ve = null;
function Vu(e, t) {
  var n = Oe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Ce = wt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vt !== null ? { id: Je, overflow: be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ql(e) {
  if (U) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Qo(e, t)) {
        if (Ul(e)) throw Error(k(418));
        t = wt(n.nextSibling);
        var r = ke;
        t && Qo(e, t)
          ? Vu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ke = e));
      }
    } else {
      if (Ul(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ke = e);
    }
  }
}
function Yo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function Lr(e) {
  if (e !== ke) return !1;
  if (!U) return Yo(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$l(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Ul(e)) throw (Bu(), Error(k(418)));
    for (; t; ) Vu(e, t), (t = wt(t.nextSibling));
  }
  if ((Yo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = ke ? wt(e.stateNode.nextSibling) : null;
  return !0;
}
function Bu() {
  for (var e = Ce; e; ) e = wt(e.nextSibling);
}
function vn() {
  (Ce = ke = null), (U = !1);
}
function As(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var Zf = ot.ReactCurrentBatchConfig;
function je(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ai = _t(null),
  ui = null,
  rn = null,
  js = null;
function Fs() {
  js = rn = ui = null;
}
function Vs(e) {
  var t = ai.current;
  W(ai), (e._currentValue = t);
}
function Yl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function cn(e, t) {
  (ui = e),
    (js = rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (js !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rn === null)) {
      if (ui === null) throw Error(k(308));
      (rn = e), (ui.dependencies = { lanes: 0, firstContext: e });
    } else rn = rn.next = e;
  return t;
}
var Dt = null;
function Bs(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function $u(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Bs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    lt(e, r)
  );
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dt = !1;
function $s(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function St(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      lt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Bs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    lt(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ps(e, n);
  }
}
function Xo(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function di(e, t, n, r) {
  var i = e.updateQueue;
  dt = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      u = o.next;
    (o.next = null), s === null ? (l = u) : (s.next = u), (s = o);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var f = i.baseState;
    (s = 0), (d = u = o = null), (a = l);
    do {
      var m = a.lane,
        v = a.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            w = a;
          switch (((m = t), (v = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                f = g.call(v, f, m);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (m = typeof g == "function" ? g.call(v, f, m) : g),
                m == null)
              )
                break e;
              f = K({}, f, m);
              break e;
            case 2:
              dt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [a]) : m.push(a));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = v), (o = f)) : (d = d.next = v),
          (s |= m);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (o = f),
      (i.baseState = o),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    ($t |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Ko(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Hu = new $a.Component().refs;
function Xl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Et(e),
      l = tt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = St(e, l, i)),
      t !== null && ($e(t, e, i, r), $r(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Et(e),
      l = tt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = St(e, l, i)),
      t !== null && ($e(t, e, i, r), $r(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Et(e),
      i = tt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = St(e, i, r)),
      t !== null && ($e(t, e, r, n), $r(t, e, r));
  },
};
function Zo(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(i, l)
      : !0
  );
}
function Wu(e, t, n) {
  var r = !1,
    i = kt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = De(l))
      : ((i = Se(t) ? Ft : fe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? hn(e, i) : kt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function qo(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zi.enqueueReplaceState(t, t.state, null);
}
function Kl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Hu), $s(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = De(l))
    : ((l = Se(t) ? Ft : fe.current), (i.context = hn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Xl(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && zi.enqueueReplaceState(i, i.state, null),
      di(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === Hu && (a = i.refs = {}),
              s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Jo(e) {
  var t = e._init;
  return t(e._payload);
}
function Uu(e) {
  function t(c, p) {
    if (e) {
      var h = c.deletions;
      h === null ? ((c.deletions = [p]), (c.flags |= 16)) : h.push(p);
    }
  }
  function n(c, p) {
    if (!e) return null;
    for (; p !== null; ) t(c, p), (p = p.sibling);
    return null;
  }
  function r(c, p) {
    for (c = new Map(); p !== null; )
      p.key !== null ? c.set(p.key, p) : c.set(p.index, p), (p = p.sibling);
    return c;
  }
  function i(c, p) {
    return (c = Tt(c, p)), (c.index = 0), (c.sibling = null), c;
  }
  function l(c, p, h) {
    return (
      (c.index = h),
      e
        ? ((h = c.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((c.flags |= 2), p) : h)
            : ((c.flags |= 2), p))
        : ((c.flags |= 1048576), p)
    );
  }
  function s(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function a(c, p, h, y) {
    return p === null || p.tag !== 6
      ? ((p = ul(h, c.mode, y)), (p.return = c), p)
      : ((p = i(p, h)), (p.return = c), p);
  }
  function o(c, p, h, y) {
    var S = h.type;
    return S === Kt
      ? d(c, p, h.props.children, y, h.key)
      : p !== null &&
        (p.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === ut &&
            Jo(S) === p.type))
      ? ((y = i(p, h.props)), (y.ref = zn(c, p, h)), (y.return = c), y)
      : ((y = Yr(h.type, h.key, h.props, null, c.mode, y)),
        (y.ref = zn(c, p, h)),
        (y.return = c),
        y);
  }
  function u(c, p, h, y) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = dl(h, c.mode, y)), (p.return = c), p)
      : ((p = i(p, h.children || [])), (p.return = c), p);
  }
  function d(c, p, h, y, S) {
    return p === null || p.tag !== 7
      ? ((p = jt(h, c.mode, y, S)), (p.return = c), p)
      : ((p = i(p, h)), (p.return = c), p);
  }
  function f(c, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ul("" + p, c.mode, h)), (p.return = c), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case yr:
          return (
            (h = Yr(p.type, p.key, p.props, null, c.mode, h)),
            (h.ref = zn(c, null, p)),
            (h.return = c),
            h
          );
        case Xt:
          return (p = dl(p, c.mode, h)), (p.return = c), p;
        case ut:
          var y = p._init;
          return f(c, y(p._payload), h);
      }
      if (Nn(p) || Cn(p))
        return (p = jt(p, c.mode, h, null)), (p.return = c), p;
      zr(c, p);
    }
    return null;
  }
  function m(c, p, h, y) {
    var S = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : a(c, p, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case yr:
          return h.key === S ? o(c, p, h, y) : null;
        case Xt:
          return h.key === S ? u(c, p, h, y) : null;
        case ut:
          return (S = h._init), m(c, p, S(h._payload), y);
      }
      if (Nn(h) || Cn(h)) return S !== null ? null : d(c, p, h, y, null);
      zr(c, h);
    }
    return null;
  }
  function v(c, p, h, y, S) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (c = c.get(h) || null), a(p, c, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case yr:
          return (c = c.get(y.key === null ? h : y.key) || null), o(p, c, y, S);
        case Xt:
          return (c = c.get(y.key === null ? h : y.key) || null), u(p, c, y, S);
        case ut:
          var E = y._init;
          return v(c, p, h, E(y._payload), S);
      }
      if (Nn(y) || Cn(y)) return (c = c.get(h) || null), d(p, c, y, S, null);
      zr(p, y);
    }
    return null;
  }
  function g(c, p, h, y) {
    for (
      var S = null, E = null, _ = p, C = (p = 0), L = null;
      _ !== null && C < h.length;
      C++
    ) {
      _.index > C ? ((L = _), (_ = null)) : (L = _.sibling);
      var x = m(c, _, h[C], y);
      if (x === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && x.alternate === null && t(c, _),
        (p = l(x, p, C)),
        E === null ? (S = x) : (E.sibling = x),
        (E = x),
        (_ = L);
    }
    if (C === h.length) return n(c, _), U && It(c, C), S;
    if (_ === null) {
      for (; C < h.length; C++)
        (_ = f(c, h[C], y)),
          _ !== null &&
            ((p = l(_, p, C)), E === null ? (S = _) : (E.sibling = _), (E = _));
      return U && It(c, C), S;
    }
    for (_ = r(c, _); C < h.length; C++)
      (L = v(_, c, C, h[C], y)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? C : L.key),
          (p = l(L, p, C)),
          E === null ? (S = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        _.forEach(function (I) {
          return t(c, I);
        }),
      U && It(c, C),
      S
    );
  }
  function w(c, p, h, y) {
    var S = Cn(h);
    if (typeof S != "function") throw Error(k(150));
    if (((h = S.call(h)), h == null)) throw Error(k(151));
    for (
      var E = (S = null), _ = p, C = (p = 0), L = null, x = h.next();
      _ !== null && !x.done;
      C++, x = h.next()
    ) {
      _.index > C ? ((L = _), (_ = null)) : (L = _.sibling);
      var I = m(c, _, x.value, y);
      if (I === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && I.alternate === null && t(c, _),
        (p = l(I, p, C)),
        E === null ? (S = I) : (E.sibling = I),
        (E = I),
        (_ = L);
    }
    if (x.done) return n(c, _), U && It(c, C), S;
    if (_ === null) {
      for (; !x.done; C++, x = h.next())
        (x = f(c, x.value, y)),
          x !== null &&
            ((p = l(x, p, C)), E === null ? (S = x) : (E.sibling = x), (E = x));
      return U && It(c, C), S;
    }
    for (_ = r(c, _); !x.done; C++, x = h.next())
      (x = v(_, c, C, x.value, y)),
        x !== null &&
          (e && x.alternate !== null && _.delete(x.key === null ? C : x.key),
          (p = l(x, p, C)),
          E === null ? (S = x) : (E.sibling = x),
          (E = x));
    return (
      e &&
        _.forEach(function (D) {
          return t(c, D);
        }),
      U && It(c, C),
      S
    );
  }
  function P(c, p, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Kt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case yr:
          e: {
            for (var S = h.key, E = p; E !== null; ) {
              if (E.key === S) {
                if (((S = h.type), S === Kt)) {
                  if (E.tag === 7) {
                    n(c, E.sibling),
                      (p = i(E, h.props.children)),
                      (p.return = c),
                      (c = p);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === ut &&
                    Jo(S) === E.type)
                ) {
                  n(c, E.sibling),
                    (p = i(E, h.props)),
                    (p.ref = zn(c, E, h)),
                    (p.return = c),
                    (c = p);
                  break e;
                }
                n(c, E);
                break;
              } else t(c, E);
              E = E.sibling;
            }
            h.type === Kt
              ? ((p = jt(h.props.children, c.mode, y, h.key)),
                (p.return = c),
                (c = p))
              : ((y = Yr(h.type, h.key, h.props, null, c.mode, y)),
                (y.ref = zn(c, p, h)),
                (y.return = c),
                (c = y));
          }
          return s(c);
        case Xt:
          e: {
            for (E = h.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(c, p.sibling),
                    (p = i(p, h.children || [])),
                    (p.return = c),
                    (c = p);
                  break e;
                } else {
                  n(c, p);
                  break;
                }
              else t(c, p);
              p = p.sibling;
            }
            (p = dl(h, c.mode, y)), (p.return = c), (c = p);
          }
          return s(c);
        case ut:
          return (E = h._init), P(c, p, E(h._payload), y);
      }
      if (Nn(h)) return g(c, p, h, y);
      if (Cn(h)) return w(c, p, h, y);
      zr(c, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(c, p.sibling), (p = i(p, h)), (p.return = c), (c = p))
          : (n(c, p), (p = ul(h, c.mode, y)), (p.return = c), (c = p)),
        s(c))
      : n(c, p);
  }
  return P;
}
var gn = Uu(!0),
  Qu = Uu(!1),
  mr = {},
  Ye = _t(mr),
  rr = _t(mr),
  ir = _t(mr);
function Rt(e) {
  if (e === mr) throw Error(k(174));
  return e;
}
function Gs(e, t) {
  switch ((G(ir, t), G(rr, e), G(Ye, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _l(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _l(t, e));
  }
  W(Ye), G(Ye, t);
}
function yn() {
  W(Ye), W(rr), W(ir);
}
function Yu(e) {
  Rt(ir.current);
  var t = Rt(Ye.current),
    n = _l(t, e.type);
  t !== n && (G(rr, e), G(Ye, n));
}
function Hs(e) {
  rr.current === e && (W(Ye), W(rr));
}
var Y = _t(0);
function ci(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var rl = [];
function Ws() {
  for (var e = 0; e < rl.length; e++)
    rl[e]._workInProgressVersionPrimary = null;
  rl.length = 0;
}
var Gr = ot.ReactCurrentDispatcher,
  il = ot.ReactCurrentBatchConfig,
  Bt = 0,
  X = null,
  te = null,
  re = null,
  fi = !1,
  $n = !1,
  lr = 0,
  qf = 0;
function ue() {
  throw Error(k(321));
}
function Us(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function Qs(e, t, n, r, i, l) {
  if (
    ((Bt = l),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gr.current = e === null || e.memoizedState === null ? tp : np),
    (e = n(r, i)),
    $n)
  ) {
    l = 0;
    do {
      if ((($n = !1), (lr = 0), 25 <= l)) throw Error(k(301));
      (l += 1),
        (re = te = null),
        (t.updateQueue = null),
        (Gr.current = rp),
        (e = n(r, i));
    } while ($n);
  }
  if (
    ((Gr.current = pi),
    (t = te !== null && te.next !== null),
    (Bt = 0),
    (re = te = X = null),
    (fi = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ys() {
  var e = lr !== 0;
  return (lr = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (X.memoizedState = re = e) : (re = re.next = e), re;
}
function Re() {
  if (te === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = re === null ? X.memoizedState : re.next;
  if (t !== null) (re = t), (te = e);
  else {
    if (e === null) throw Error(k(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      re === null ? (X.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ll(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      o = null,
      u = l;
    do {
      var d = u.lane;
      if ((Bt & d) === d)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        o === null ? ((a = o = f), (s = r)) : (o = o.next = f),
          (X.lanes |= d),
          ($t |= d);
      }
      u = u.next;
    } while (u !== null && u !== l);
    o === null ? (s = r) : (o.next = a),
      Ge(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (X.lanes |= l), ($t |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function sl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    Ge(l, t.memoizedState) || (ye = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Xu() {}
function Ku(e, t) {
  var n = X,
    r = Re(),
    i = t(),
    l = !Ge(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (ye = !0)),
    (r = r.queue),
    Xs(Ju.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      or(9, qu.bind(null, n, r, i, t), void 0, null),
      ie === null)
    )
      throw Error(k(349));
    Bt & 30 || Zu(n, t, i);
  }
  return i;
}
function Zu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bu(t) && ed(e);
}
function Ju(e, t, n) {
  return n(function () {
    bu(t) && ed(e);
  });
}
function bu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function ed(e) {
  var t = lt(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function bo(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ep.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function or(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function td() {
  return Re().memoizedState;
}
function Hr(e, t, n, r) {
  var i = We();
  (X.flags |= e),
    (i.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r));
}
function Mi(e, t, n, r) {
  var i = Re();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (te !== null) {
    var s = te.memoizedState;
    if (((l = s.destroy), r !== null && Us(r, s.deps))) {
      i.memoizedState = or(t, n, l, r);
      return;
    }
  }
  (X.flags |= e), (i.memoizedState = or(1 | t, n, l, r));
}
function ea(e, t) {
  return Hr(8390656, 8, e, t);
}
function Xs(e, t) {
  return Mi(2048, 8, e, t);
}
function nd(e, t) {
  return Mi(4, 2, e, t);
}
function rd(e, t) {
  return Mi(4, 4, e, t);
}
function id(e, t) {
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
function ld(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Mi(4, 4, id.bind(null, t, e), n)
  );
}
function Ks() {}
function sd(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Us(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function od(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Us(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ad(e, t, n) {
  return Bt & 21
    ? (Ge(n, t) || ((n = cu()), (X.lanes |= n), ($t |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function Jf(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = il.transition;
  il.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (il.transition = r);
  }
}
function ud() {
  return Re().memoizedState;
}
function bf(e, t, n) {
  var r = Et(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dd(e))
  )
    cd(t, n);
  else if (((n = $u(e, t, n, r)), n !== null)) {
    var i = me();
    $e(n, e, r, i), fd(n, t, r);
  }
}
function ep(e, t, n) {
  var r = Et(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dd(e)) cd(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ge(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), Bs(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = $u(e, t, i, r)),
      n !== null && ((i = me()), $e(n, e, r, i), fd(n, t, r));
  }
}
function dd(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function cd(e, t) {
  $n = fi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ps(e, n);
  }
}
var pi = {
    readContext: De,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  tp = {
    readContext: De,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: ea,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hr(4194308, 4, id.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = bf.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bo,
    useDebugValue: Ks,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = bo(!1),
        t = e[0];
      return (e = Jf.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        i = We();
      if (U) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(k(349));
        Bt & 30 || Zu(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        ea(Ju.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        or(9, qu.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = ie.identifierPrefix;
      if (U) {
        var n = be,
          r = Je;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = lr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: De,
    useCallback: sd,
    useContext: De,
    useEffect: Xs,
    useImperativeHandle: ld,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: od,
    useReducer: ll,
    useRef: td,
    useState: function () {
      return ll(sr);
    },
    useDebugValue: Ks,
    useDeferredValue: function (e) {
      var t = Re();
      return ad(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = ll(sr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Xu,
    useSyncExternalStore: Ku,
    useId: ud,
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: De,
    useCallback: sd,
    useContext: De,
    useEffect: Xs,
    useImperativeHandle: ld,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: od,
    useReducer: sl,
    useRef: td,
    useState: function () {
      return sl(sr);
    },
    useDebugValue: Ks,
    useDeferredValue: function (e) {
      var t = Re();
      return te === null ? (t.memoizedState = e) : ad(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = sl(sr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Xu,
    useSyncExternalStore: Ku,
    useId: ud,
    unstable_isNewReconciler: !1,
  };
function wn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mc(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ip = typeof WeakMap == "function" ? WeakMap : Map;
function pd(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hi || ((hi = !0), (ss = r)), Zl(e, t);
    }),
    n
  );
}
function md(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Zl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Zl(e, t),
          typeof r != "function" &&
            (xt === null ? (xt = new Set([this])) : xt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ip();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = yp.bind(null, e, t, n)), t.then(e, e));
}
function na(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ra(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tt(-1, 1)), (t.tag = 2), St(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var lp = ot.ReactCurrentOwner,
  ye = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Qu(t, null, n, r) : gn(t, e.child, n, r);
}
function ia(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    cn(t, i),
    (r = Qs(e, t, n, r, l, i)),
    (n = Ys()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        st(e, t, i))
      : (U && n && Ds(t), (t.flags |= 1), pe(e, t, r, i), t.child)
  );
}
function la(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ro(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), hd(e, t, l, r, i))
      : ((e = Yr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(s, r) && e.ref === t.ref)
    )
      return st(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Tt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hd(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (bn(l, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), st(e, t, i);
  }
  return ql(e, t, n, r, i);
}
function vd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(sn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(sn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        G(sn, Ee),
        (Ee |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(sn, Ee),
      (Ee |= r);
  return pe(e, t, i, n), t.child;
}
function gd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ql(e, t, n, r, i) {
  var l = Se(n) ? Ft : fe.current;
  return (
    (l = hn(t, l)),
    cn(t, i),
    (n = Qs(e, t, n, r, l, i)),
    (r = Ys()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        st(e, t, i))
      : (U && r && Ds(t), (t.flags |= 1), pe(e, t, n, i), t.child)
  );
}
function sa(e, t, n, r, i) {
  if (Se(n)) {
    var l = !0;
    li(t);
  } else l = !1;
  if ((cn(t, i), t.stateNode === null))
    Wr(e, t), Wu(t, n, r), Kl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = De(u))
      : ((u = Se(n) ? Ft : fe.current), (u = hn(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== u) && qo(t, s, r, u)),
      (dt = !1);
    var m = t.memoizedState;
    (s.state = m),
      di(t, r, s, i),
      (o = t.memoizedState),
      a !== r || m !== o || we.current || dt
        ? (typeof d == "function" && (Xl(t, n, d, r), (o = t.memoizedState)),
          (a = dt || Zo(t, n, a, r, m, o, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Gu(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : je(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (m = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = De(o))
        : ((o = Se(n) ? Ft : fe.current), (o = hn(t, o)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || m !== o) && qo(t, s, r, o)),
      (dt = !1),
      (m = t.memoizedState),
      (s.state = m),
      di(t, r, s, i);
    var g = t.memoizedState;
    a !== f || m !== g || we.current || dt
      ? (typeof v == "function" && (Xl(t, n, v, r), (g = t.memoizedState)),
        (u = dt || Zo(t, n, u, r, m, g, o) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = o),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Jl(e, t, n, r, l, i);
}
function Jl(e, t, n, r, i, l) {
  gd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Uo(t, n, !1), st(e, t, l);
  (r = t.stateNode), (lp.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = gn(t, e.child, null, l)), (t.child = gn(t, null, a, l)))
      : pe(e, t, a, l),
    (t.memoizedState = r.state),
    i && Uo(t, n, !0),
    t.child
  );
}
function yd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wo(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wo(e, t.context, !1),
    Gs(e, t.containerInfo);
}
function oa(e, t, n, r, i) {
  return vn(), As(i), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var bl = { dehydrated: null, treeContext: null, retryLane: 0 };
function es(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wd(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    G(Y, i & 1),
    e === null)
  )
    return (
      Ql(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = Ni(s, r, 0, null)),
              (e = jt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = es(n)),
              (t.memoizedState = bl),
              e)
            : Zs(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return sp(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = Tt(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = Tt(a, l)) : ((l = jt(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? es(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = bl),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Tt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Zs(e, t) {
  return (
    (t = Ni({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mr(e, t, n, r) {
  return (
    r !== null && As(r),
    gn(t, e.child, null, n),
    (e = Zs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sp(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ol(Error(k(422)))), Mr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Ni({ mode: "visible", children: r.children }, i, 0, null)),
        (l = jt(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && gn(t, e.child, null, s),
        (t.child.memoizedState = es(s)),
        (t.memoizedState = bl),
        l);
  if (!(t.mode & 1)) return Mr(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(k(419))), (r = ol(l, r, void 0)), Mr(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), ye || a)) {
    if (((r = ie), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), lt(e, i), $e(r, e, i, -1));
    }
    return no(), (r = ol(Error(k(421)))), Mr(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ce = wt(i.nextSibling)),
      (ke = t),
      (U = !0),
      (Ve = null),
      e !== null &&
        ((Me[Ie++] = Je),
        (Me[Ie++] = be),
        (Me[Ie++] = Vt),
        (Je = e.id),
        (be = e.overflow),
        (Vt = t)),
      (t = Zs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function aa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yl(e.return, t, n);
}
function al(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Sd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((pe(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && aa(e, n, t);
        else if (e.tag === 19) aa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ci(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          al(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ci(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        al(t, !0, n, null, l);
        break;
      case "together":
        al(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($t |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function op(e, t, n) {
  switch (t.tag) {
    case 3:
      yd(t), vn();
      break;
    case 5:
      Yu(t);
      break;
    case 1:
      Se(t.type) && li(t);
      break;
    case 4:
      Gs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      G(ai, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wd(e, t, n)
          : (G(Y, Y.current & 1),
            (e = st(e, t, n)),
            e !== null ? e.sibling : null);
      G(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vd(e, t, n);
  }
  return st(e, t, n);
}
var xd, ts, Ed, Td;
xd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ts = function () {};
Ed = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rt(Ye.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Tl(e, i)), (r = Tl(e, r)), (l = []);
        break;
      case "select":
        (i = K({}, i, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Pl(e, i)), (r = Pl(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ri);
    }
    Ll(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Qn.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var o = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && o !== a && (o != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(u, n)), (n = o);
        else
          u === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(u, o))
            : u === "children"
            ? (typeof o != "string" && typeof o != "number") ||
              (l = l || []).push(u, "" + o)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Qn.hasOwnProperty(u)
                ? (o != null && u === "onScroll" && H("scroll", e),
                  l || a === o || (l = []))
                : (l = l || []).push(u, o));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Td = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ap(e, t, n) {
  var r = t.pendingProps;
  switch ((Rs(t), t.tag)) {
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
      return de(t), null;
    case 1:
      return Se(t.type) && ii(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        yn(),
        W(we),
        W(fe),
        Ws(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (us(Ve), (Ve = null)))),
        ts(e, t),
        de(t),
        null
      );
    case 5:
      Hs(t);
      var i = Rt(ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ed(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return de(t), null;
        }
        if (((e = Rt(Ye.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ue] = t), (r[nr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Rn.length; i++) H(Rn[i], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              go(r, l), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              wo(r, l), H("invalid", r);
          }
          Ll(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Qn.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              wr(r), yo(r, l, !0);
              break;
            case "textarea":
              wr(r), So(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ri);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Za(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ue] = t),
            (e[nr] = r),
            xd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = zl(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Rn.length; i++) H(Rn[i], e);
                i = r;
                break;
              case "source":
                H("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (i = r);
                break;
              case "details":
                H("toggle", e), (i = r);
                break;
              case "input":
                go(e, r), (i = Tl(e, r)), H("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = K({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                wo(e, r), (i = Pl(e, r)), H("invalid", e);
                break;
              default:
                i = r;
            }
            Ll(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? ba(e, o)
                  : l === "dangerouslySetInnerHTML"
                  ? ((o = o ? o.__html : void 0), o != null && qa(e, o))
                  : l === "children"
                  ? typeof o == "string"
                    ? (n !== "textarea" || o !== "") && Yn(e, o)
                    : typeof o == "number" && Yn(e, "" + o)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Qn.hasOwnProperty(l)
                      ? o != null && l === "onScroll" && H("scroll", e)
                      : o != null && Ss(e, l, o, s));
              }
            switch (n) {
              case "input":
                wr(e), yo(e, r, !1);
                break;
              case "textarea":
                wr(e), So(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ct(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? on(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      on(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ri);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) Td(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Rt(ir.current)), Rt(Ye.current), Lr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (l = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                _r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (W(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Ce !== null && t.mode & 1 && !(t.flags & 128))
          Bu(), vn(), (t.flags |= 98560), (l = !1);
        else if (((l = Lr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(k(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(k(317));
            l[Ue] = t;
          } else
            vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (l = !1);
        } else Ve !== null && (us(Ve), (Ve = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? ne === 0 && (ne = 3) : no())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        yn(), ts(e, t), e === null && er(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return Vs(t.type._context), de(t), null;
    case 17:
      return Se(t.type) && ii(), de(t), null;
    case 19:
      if ((W(Y), (l = t.memoizedState), l === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Mn(l, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ci(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Mn(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            J() > Sn &&
            ((t.flags |= 128), (r = !0), Mn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ci(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !U)
            )
              return de(t), null;
          } else
            2 * J() - l.renderingStartTime > Sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = J()),
          (t.sibling = null),
          (n = Y.current),
          G(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        to(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function up(e, t) {
  switch ((Rs(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && ii(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yn(),
        W(we),
        W(fe),
        Ws(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hs(t), null;
    case 13:
      if ((W(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        vn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(Y), null;
    case 4:
      return yn(), null;
    case 10:
      return Vs(t.type._context), null;
    case 22:
    case 23:
      return to(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ir = !1,
  ce = !1,
  dp = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function ns(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var ua = !1;
function cp(e, t) {
  if (((Vl = ei), (e = _u()), Ns(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            o = -1,
            u = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== l || (r !== 0 && f.nodeType !== 3) || (o = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (m = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === i && (a = s),
                m === l && ++d === r && (o = s),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bl = { focusedElem: e, selectionRange: n }, ei = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    P = g.memoizedState,
                    c = t.stateNode,
                    p = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : je(t.type, w),
                      P
                    );
                  c.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (y) {
          Z(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (g = ua), (ua = !1), g;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && ns(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ii(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[nr], delete t[Hl], delete t[Yf], delete t[Xf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function da(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ri));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), (e = e.sibling);
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
var le = null,
  Fe = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) Pd(e, t, n), (n = n.sibling);
}
function Pd(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(Ti, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ce || ln(n, t);
    case 6:
      var r = le,
        i = Fe;
      (le = null),
        at(e, t, n),
        (le = r),
        (Fe = i),
        le !== null &&
          (Fe
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Fe
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? tl(e.parentNode, n)
              : e.nodeType === 1 && tl(e, n),
            qn(e))
          : tl(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Fe),
        (le = n.stateNode.containerInfo),
        (Fe = !0),
        at(e, t, n),
        (le = r),
        (Fe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && ns(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (
        !ce &&
        (ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Z(n, t, a);
        }
      at(e, t, n);
      break;
    case 21:
      at(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ce = (r = ce) || n.memoizedState !== null), at(e, t, n), (ce = r))
        : at(e, t, n);
      break;
    default:
      at(e, t, n);
  }
}
function ca(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dp()),
      t.forEach(function (r) {
        var i = Sp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (le = a.stateNode), (Fe = !1);
              break e;
            case 3:
              (le = a.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (le = a.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          a = a.return;
        }
        if (le === null) throw Error(k(160));
        Pd(l, s, i), (le = null), (Fe = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _d(t, e), (t = t.sibling);
}
function _d(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), He(e), r & 4)) {
        try {
          Gn(3, e, e.return), Ii(3, e);
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Gn(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      Ae(t, e), He(e), r & 512 && n !== null && ln(n, n.return);
      break;
    case 5:
      if (
        (Ae(t, e),
        He(e),
        r & 512 && n !== null && ln(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Yn(i, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Xa(i, l),
              zl(a, s);
            var u = zl(a, l);
            for (s = 0; s < o.length; s += 2) {
              var d = o[s],
                f = o[s + 1];
              d === "style"
                ? ba(i, f)
                : d === "dangerouslySetInnerHTML"
                ? qa(i, f)
                : d === "children"
                ? Yn(i, f)
                : Ss(i, d, f, u);
            }
            switch (a) {
              case "input":
                Cl(i, l);
                break;
              case "textarea":
                Ka(i, l);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? on(i, !!l.multiple, v, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? on(i, !!l.multiple, l.defaultValue, !0)
                      : on(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[nr] = l;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ae(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ae(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qn(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      Ae(t, e), He(e);
      break;
    case 13:
      Ae(t, e),
        He(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (bs = J())),
        r & 4 && ca(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ce = (u = ce) || d), Ae(t, e), (ce = u)) : Ae(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (f = M = d; M !== null; ) {
              switch (((m = M), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gn(4, m, m.return);
                  break;
                case 1:
                  ln(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  ln(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    pa(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (M = v)) : pa(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = f.stateNode),
                      (o = f.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = Ja("display", s)));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ae(t, e), He(e), r & 4 && ca(e);
      break;
    case 21:
      break;
    default:
      Ae(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Yn(i, ""), (r.flags &= -33));
          var l = da(e);
          ls(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = da(e);
          is(e, a, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (o) {
      Z(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fp(e, t, n) {
  (M = e), Ld(e);
}
function Ld(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ir;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || ce;
        a = Ir;
        var u = ce;
        if (((Ir = s), (ce = o) && !u))
          for (M = i; M !== null; )
            (s = M),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ma(i)
                : o !== null
                ? ((o.return = s), (M = o))
                : ma(i);
        for (; l !== null; ) (M = l), Ld(l), (l = l.sibling);
        (M = i), (Ir = a), (ce = u);
      }
      fa(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (M = l)) : fa(e);
  }
}
function fa(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ce || Ii(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Ko(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ko(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && qn(f);
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
              throw Error(k(163));
          }
        ce || (t.flags & 512 && rs(t));
      } catch (m) {
        Z(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function pa(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function ma(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ii(4, t);
          } catch (o) {
            Z(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              Z(t, i, o);
            }
          }
          var l = t.return;
          try {
            rs(t);
          } catch (o) {
            Z(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            rs(t);
          } catch (o) {
            Z(t, s, o);
          }
      }
    } catch (o) {
      Z(t, t.return, o);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var pp = Math.ceil,
  mi = ot.ReactCurrentDispatcher,
  qs = ot.ReactCurrentOwner,
  Ne = ot.ReactCurrentBatchConfig,
  j = 0,
  ie = null,
  ee = null,
  se = 0,
  Ee = 0,
  sn = _t(0),
  ne = 0,
  ar = null,
  $t = 0,
  Oi = 0,
  Js = 0,
  Hn = null,
  ge = null,
  bs = 0,
  Sn = 1 / 0,
  Ze = null,
  hi = !1,
  ss = null,
  xt = null,
  Or = !1,
  mt = null,
  vi = 0,
  Wn = 0,
  os = null,
  Ur = -1,
  Qr = 0;
function me() {
  return j & 6 ? J() : Ur !== -1 ? Ur : (Ur = J());
}
function Et(e) {
  return e.mode & 1
    ? j & 2 && se !== 0
      ? se & -se
      : Zf.transition !== null
      ? (Qr === 0 && (Qr = cu()), Qr)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yu(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < Wn) throw ((Wn = 0), (os = null), Error(k(185)));
  cr(e, n, r),
    (!(j & 2) || e !== ie) &&
      (e === ie && (!(j & 2) && (Oi |= n), ne === 4 && ft(e, se)),
      xe(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((Sn = J() + 500), Li && Lt()));
}
function xe(e, t) {
  var n = e.callbackNode;
  Kc(e, t);
  var r = br(e, e === ie ? se : 0);
  if (r === 0)
    n !== null && To(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && To(n), t === 1))
      e.tag === 0 ? Kf(ha.bind(null, e)) : ju(ha.bind(null, e)),
        Uf(function () {
          !(j & 6) && Lt();
        }),
        (n = null);
    else {
      switch (fu(r)) {
        case 1:
          n = ks;
          break;
        case 4:
          n = uu;
          break;
        case 16:
          n = Jr;
          break;
        case 536870912:
          n = du;
          break;
        default:
          n = Jr;
      }
      n = Ad(n, zd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function zd(e, t) {
  if (((Ur = -1), (Qr = 0), j & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (fn() && e.callbackNode !== n) return null;
  var r = br(e, e === ie ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gi(e, r);
  else {
    t = r;
    var i = j;
    j |= 2;
    var l = Id();
    (ie !== e || se !== t) && ((Ze = null), (Sn = J() + 500), At(e, t));
    do
      try {
        vp();
        break;
      } catch (a) {
        Md(e, a);
      }
    while (!0);
    Fs(),
      (mi.current = l),
      (j = i),
      ee !== null ? (t = 0) : ((ie = null), (se = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Dl(e)), i !== 0 && ((r = i), (t = as(e, i)))), t === 1)
    )
      throw ((n = ar), At(e, 0), ft(e, r), xe(e, J()), n);
    if (t === 6) ft(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !mp(i) &&
          ((t = gi(e, r)),
          t === 2 && ((l = Dl(e)), l !== 0 && ((r = l), (t = as(e, l)))),
          t === 1))
      )
        throw ((n = ar), At(e, 0), ft(e, r), xe(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ot(e, ge, Ze);
          break;
        case 3:
          if (
            (ft(e, r), (r & 130023424) === r && ((t = bs + 500 - J()), 10 < t))
          ) {
            if (br(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Gl(Ot.bind(null, e, ge, Ze), t);
            break;
          }
          Ot(e, ge, Ze);
          break;
        case 4:
          if ((ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Be(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * pp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gl(Ot.bind(null, e, ge, Ze), r);
            break;
          }
          Ot(e, ge, Ze);
          break;
        case 5:
          Ot(e, ge, Ze);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return xe(e, J()), e.callbackNode === n ? zd.bind(null, e) : null;
}
function as(e, t) {
  var n = Hn;
  return (
    e.current.memoizedState.isDehydrated && (At(e, t).flags |= 256),
    (e = gi(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && us(t)),
    e
  );
}
function us(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function mp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Ge(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ft(e, t) {
  for (
    t &= ~Js,
      t &= ~Oi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ha(e) {
  if (j & 6) throw Error(k(327));
  fn();
  var t = br(e, 0);
  if (!(t & 1)) return xe(e, J()), null;
  var n = gi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Dl(e);
    r !== 0 && ((t = r), (n = as(e, r)));
  }
  if (n === 1) throw ((n = ar), At(e, 0), ft(e, t), xe(e, J()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ot(e, ge, Ze),
    xe(e, J()),
    null
  );
}
function eo(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((Sn = J() + 500), Li && Lt());
  }
}
function Gt(e) {
  mt !== null && mt.tag === 0 && !(j & 6) && fn();
  var t = j;
  j |= 1;
  var n = Ne.transition,
    r = B;
  try {
    if (((Ne.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ne.transition = n), (j = t), !(j & 6) && Lt();
  }
}
function to() {
  (Ee = sn.current), W(sn);
}
function At(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wf(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Rs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ii();
          break;
        case 3:
          yn(), W(we), W(fe), Ws();
          break;
        case 5:
          Hs(r);
          break;
        case 4:
          yn();
          break;
        case 13:
          W(Y);
          break;
        case 19:
          W(Y);
          break;
        case 10:
          Vs(r.type._context);
          break;
        case 22:
        case 23:
          to();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (ee = e = Tt(e.current, null)),
    (se = Ee = t),
    (ne = 0),
    (ar = null),
    (Js = Oi = $t = 0),
    (ge = Hn = null),
    Dt !== null)
  ) {
    for (t = 0; t < Dt.length; t++)
      if (((n = Dt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Dt = null;
  }
  return e;
}
function Md(e, t) {
  do {
    var n = ee;
    try {
      if ((Fs(), (Gr.current = pi), fi)) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fi = !1;
      }
      if (
        ((Bt = 0),
        (re = te = X = null),
        ($n = !1),
        (lr = 0),
        (qs.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (ar = t), (ee = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          o = t;
        if (
          ((t = se),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var u = o,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = na(s);
          if (v !== null) {
            (v.flags &= -257),
              ra(v, s, a, l, t),
              v.mode & 1 && ta(l, u, t),
              (t = v),
              (o = u);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(o), (t.updateQueue = w);
            } else g.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              ta(l, u, t), no();
              break e;
            }
            o = Error(k(426));
          }
        } else if (U && a.mode & 1) {
          var P = na(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              ra(P, s, a, l, t),
              As(wn(o, a));
            break e;
          }
        }
        (l = o = wn(o, a)),
          ne !== 4 && (ne = 2),
          Hn === null ? (Hn = [l]) : Hn.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var c = pd(l, o, t);
              Xo(l, c);
              break e;
            case 1:
              a = o;
              var p = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (xt === null || !xt.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var y = md(l, a, t);
                Xo(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Nd(n);
    } catch (S) {
      (t = S), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Id() {
  var e = mi.current;
  return (mi.current = pi), e === null ? pi : e;
}
function no() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    ie === null || (!($t & 268435455) && !(Oi & 268435455)) || ft(ie, se);
}
function gi(e, t) {
  var n = j;
  j |= 2;
  var r = Id();
  (ie !== e || se !== t) && ((Ze = null), At(e, t));
  do
    try {
      hp();
      break;
    } catch (i) {
      Md(e, i);
    }
  while (!0);
  if ((Fs(), (j = n), (mi.current = r), ee !== null)) throw Error(k(261));
  return (ie = null), (se = 0), ne;
}
function hp() {
  for (; ee !== null; ) Od(ee);
}
function vp() {
  for (; ee !== null && !Bc(); ) Od(ee);
}
function Od(e) {
  var t = Rd(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nd(e) : (ee = t),
    (qs.current = null);
}
function Nd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = up(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    } else if (((n = ap(n, t, Ee)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Ot(e, t, n) {
  var r = B,
    i = Ne.transition;
  try {
    (Ne.transition = null), (B = 1), gp(e, t, n, r);
  } finally {
    (Ne.transition = i), (B = r);
  }
  return null;
}
function gp(e, t, n, r) {
  do fn();
  while (mt !== null);
  if (j & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Zc(e, l),
    e === ie && ((ee = ie = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Or ||
      ((Or = !0),
      Ad(Jr, function () {
        return fn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ne.transition), (Ne.transition = null);
    var s = B;
    B = 1;
    var a = j;
    (j |= 4),
      (qs.current = null),
      cp(e, n),
      _d(n, e),
      jf(Bl),
      (ei = !!Vl),
      (Bl = Vl = null),
      (e.current = n),
      fp(n),
      $c(),
      (j = a),
      (B = s),
      (Ne.transition = l);
  } else e.current = n;
  if (
    (Or && ((Or = !1), (mt = e), (vi = i)),
    (l = e.pendingLanes),
    l === 0 && (xt = null),
    Wc(n.stateNode),
    xe(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (hi) throw ((hi = !1), (e = ss), (ss = null), e);
  return (
    vi & 1 && e.tag !== 0 && fn(),
    (l = e.pendingLanes),
    l & 1 ? (e === os ? Wn++ : ((Wn = 0), (os = e))) : (Wn = 0),
    Lt(),
    null
  );
}
function fn() {
  if (mt !== null) {
    var e = fu(vi),
      t = Ne.transition,
      n = B;
    try {
      if (((Ne.transition = null), (B = 16 > e ? 16 : e), mt === null))
        var r = !1;
      else {
        if (((e = mt), (mt = null), (vi = 0), j & 6)) throw Error(k(331));
        var i = j;
        for (j |= 4, M = e.current; M !== null; ) {
          var l = M,
            s = l.child;
          if (M.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var u = a[o];
                for (M = u; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, d, l);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (M = f);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var m = d.sibling,
                        v = d.return;
                      if ((Cd(d), d === u)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (M = m);
                        break;
                      }
                      M = v;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var P = w.sibling;
                    (w.sibling = null), (w = P);
                  } while (w !== null);
                }
              }
              M = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (M = s);
          else
            e: for (; M !== null; ) {
              if (((l = M), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gn(9, l, l.return);
                }
              var c = l.sibling;
              if (c !== null) {
                (c.return = l.return), (M = c);
                break e;
              }
              M = l.return;
            }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          s = M;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (M = h);
          else
            e: for (s = p; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(9, a);
                  }
                } catch (S) {
                  Z(a, a.return, S);
                }
              if (a === s) {
                M = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (M = y);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((j = i), Lt(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(Ti, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ne.transition = t);
    }
  }
  return !1;
}
function va(e, t, n) {
  (t = wn(n, t)),
    (t = pd(e, t, 1)),
    (e = St(e, t, 1)),
    (t = me()),
    e !== null && (cr(e, 1, t), xe(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) va(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        va(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xt === null || !xt.has(r)))
        ) {
          (e = wn(n, e)),
            (e = md(t, e, 1)),
            (t = St(t, e, 1)),
            (e = me()),
            t !== null && (cr(t, 1, e), xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (se & n) === n &&
      (ne === 4 || (ne === 3 && (se & 130023424) === se && 500 > J() - bs)
        ? At(e, 0)
        : (Js |= n)),
    xe(e, t);
}
function Dd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
      : (t = 1));
  var n = me();
  (e = lt(e, t)), e !== null && (cr(e, t, n), xe(e, n));
}
function wp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dd(e, n);
}
function Sp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Dd(e, n);
}
var Rd;
Rd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), op(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), U && t.flags & 1048576 && Fu(t, oi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wr(e, t), (e = t.pendingProps);
      var i = hn(t, fe.current);
      cn(t, n), (i = Qs(null, t, r, e, i, n));
      var l = Ys();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((l = !0), li(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            $s(t),
            (i.updater = zi),
            (t.stateNode = i),
            (i._reactInternals = t),
            Kl(t, r, e, n),
            (t = Jl(null, t, r, !0, l, n)))
          : ((t.tag = 0), U && l && Ds(t), pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ep(r)),
          (e = je(r, e)),
          i)
        ) {
          case 0:
            t = ql(null, t, r, e, n);
            break e;
          case 1:
            t = sa(null, t, r, e, n);
            break e;
          case 11:
            t = ia(null, t, r, e, n);
            break e;
          case 14:
            t = la(null, t, r, je(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        ql(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        sa(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((yd(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Gu(e, t),
          di(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = wn(Error(k(423)), t)), (t = oa(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = wn(Error(k(424)), t)), (t = oa(e, t, r, n, i));
            break e;
          } else
            for (
              Ce = wt(t.stateNode.containerInfo.firstChild),
                ke = t,
                U = !0,
                Ve = null,
                n = Qu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vn(), r === i)) {
            t = st(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yu(t),
        e === null && Ql(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        $l(r, i) ? (s = null) : l !== null && $l(r, l) && (t.flags |= 32),
        gd(e, t),
        pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ql(t), null;
    case 13:
      return wd(e, t, n);
    case 4:
      return (
        Gs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = gn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        ia(e, t, r, i, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          G(ai, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (Ge(l.value, s)) {
            if (l.children === i.children && !we.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = tt(-1, n & -n)), (o.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (o.next = o)
                          : ((o.next = d.next), (d.next = o)),
                          (u.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      Yl(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Yl(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        cn(t, n),
        (i = De(i)),
        (r = r(i)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = je(r, t.pendingProps)),
        (i = je(r.type, i)),
        la(e, t, r, i, n)
      );
    case 15:
      return hd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        Wr(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), li(t)) : (e = !1),
        cn(t, n),
        Wu(t, r, i),
        Kl(t, r, i, n),
        Jl(null, t, r, !0, e, n)
      );
    case 19:
      return Sd(e, t, n);
    case 22:
      return vd(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Ad(e, t) {
  return au(e, t);
}
function xp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Oe(e, t, n, r) {
  return new xp(e, t, n, r);
}
function ro(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ep(e) {
  if (typeof e == "function") return ro(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Es)) return 11;
    if (e === Ts) return 14;
  }
  return 2;
}
function Tt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yr(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) ro(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Kt:
        return jt(n.children, i, l, t);
      case xs:
        (s = 8), (i |= 8);
        break;
      case wl:
        return (
          (e = Oe(12, n, t, i | 2)), (e.elementType = wl), (e.lanes = l), e
        );
      case Sl:
        return (e = Oe(13, n, t, i)), (e.elementType = Sl), (e.lanes = l), e;
      case xl:
        return (e = Oe(19, n, t, i)), (e.elementType = xl), (e.lanes = l), e;
      case Ua:
        return Ni(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ha:
              s = 10;
              break e;
            case Wa:
              s = 9;
              break e;
            case Es:
              s = 11;
              break e;
            case Ts:
              s = 14;
              break e;
            case ut:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Oe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function jt(e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Ni(e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = Ua),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ul(e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function dl(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tp(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wi(0)),
    (this.expirationTimes = Wi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function io(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new Tp(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Oe(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $s(l),
    e
  );
}
function Cp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jd(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return Au(e, n, t);
  }
  return t;
}
function Fd(e, t, n, r, i, l, s, a, o) {
  return (
    (e = io(n, r, !0, e, i, l, s, a, o)),
    (e.context = jd(null)),
    (n = e.current),
    (r = me()),
    (i = Et(n)),
    (l = tt(r, i)),
    (l.callback = t ?? null),
    St(n, l, i),
    (e.current.lanes = i),
    cr(e, i, r),
    xe(e, r),
    e
  );
}
function Di(e, t, n, r) {
  var i = t.current,
    l = me(),
    s = Et(i);
  return (
    (n = jd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = St(i, t, s)),
    e !== null && ($e(e, i, s, l), $r(e, i, s)),
    s
  );
}
function yi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ga(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lo(e, t) {
  ga(e, t), (e = e.alternate) && ga(e, t);
}
function kp() {
  return null;
}
var Vd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function so(e) {
  this._internalRoot = e;
}
Ri.prototype.render = so.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Di(e, t, null, null);
};
Ri.prototype.unmount = so.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function () {
      Di(null, e, null, null);
    }),
      (t[it] = null);
  }
};
function Ri(e) {
  this._internalRoot = e;
}
Ri.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
    ct.splice(n, 0, e), n === 0 && gu(e);
  }
};
function oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ai(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ya() {}
function Pp(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = yi(s);
        l.call(u);
      };
    }
    var s = Fd(t, r, e, 0, null, !1, !1, "", ya);
    return (
      (e._reactRootContainer = s),
      (e[it] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Gt(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = yi(o);
      a.call(u);
    };
  }
  var o = io(e, 0, !1, null, null, !1, !1, "", ya);
  return (
    (e._reactRootContainer = o),
    (e[it] = o.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Gt(function () {
      Di(t, o, n, r);
    }),
    o
  );
}
function ji(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = yi(s);
        a.call(o);
      };
    }
    Di(t, s, e, i);
  } else s = Pp(n, t, e, i, r);
  return yi(s);
}
pu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (Ps(t, n | 1), xe(t, J()), !(j & 6) && ((Sn = J() + 500), Lt()));
      }
      break;
    case 13:
      Gt(function () {
        var r = lt(e, 1);
        if (r !== null) {
          var i = me();
          $e(r, e, 1, i);
        }
      }),
        lo(e, 1);
  }
};
_s = function (e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = me();
      $e(t, e, 134217728, n);
    }
    lo(e, 134217728);
  }
};
mu = function (e) {
  if (e.tag === 13) {
    var t = Et(e),
      n = lt(e, t);
    if (n !== null) {
      var r = me();
      $e(n, e, t, r);
    }
    lo(e, t);
  }
};
hu = function () {
  return B;
};
vu = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Il = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = _i(r);
            if (!i) throw Error(k(90));
            Ya(r), Cl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ka(e, n);
      break;
    case "select":
      (t = n.value), t != null && on(e, !!n.multiple, t, !1);
  }
};
nu = eo;
ru = Gt;
var _p = { usingClientEntryPoint: !1, Events: [pr, bt, _i, eu, tu, eo] },
  In = {
    findFiberByHostInstance: Nt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Lp = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = su(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || kp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nr.isDisabled && Nr.supportsFiber)
    try {
      (Ti = Nr.inject(Lp)), (Qe = Nr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oo(t)) throw Error(k(200));
  return Cp(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!oo(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Vd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = io(e, 1, !1, null, null, n, !1, r, i)),
    (e[it] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new so(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = su(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Gt(e);
};
_e.hydrate = function (e, t, n) {
  if (!Ai(t)) throw Error(k(200));
  return ji(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!oo(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = Vd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Fd(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[it] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ri(t);
};
_e.render = function (e, t, n) {
  if (!Ai(t)) throw Error(k(200));
  return ji(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!Ai(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Gt(function () {
        ji(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[it] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = eo;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ai(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return ji(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function Bd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd);
    } catch (e) {
      console.error(e);
    }
}
Bd(), (Fa.exports = _e);
var zp = Fa.exports,
  wa = zp;
(gl.createRoot = wa.createRoot), (gl.hydrateRoot = wa.hydrateRoot);
function Sa(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function ao(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Sa(t[n]) &&
          Sa(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          ao(e[n], t[n]);
    });
}
const $d = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function nt() {
  const e = typeof document < "u" ? document : {};
  return ao(e, $d), e;
}
const Mp = {
  document: $d,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function ze() {
  const e = typeof window < "u" ? window : {};
  return ao(e, Mp), e;
}
function Ip(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Op(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function ds(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function wi() {
  return Date.now();
}
function Np(e) {
  const t = ze();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function Dp(e, t) {
  t === void 0 && (t = "x");
  const n = ze();
  let r, i, l;
  const s = Np(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Dr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Rp(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Te() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !Rp(r)) {
      const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0);
      for (let l = 0, s = i.length; l < s; l += 1) {
        const a = i[l],
          o = Object.getOwnPropertyDescriptor(r, a);
        o !== void 0 &&
          o.enumerable &&
          (Dr(e[a]) && Dr(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : Te(e[a], r[a])
            : !Dr(e[a]) && Dr(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : Te(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function Rr(e, t, n) {
  e.style.setProperty(t, n);
}
function Gd(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = ze(),
    l = -t.translate;
  let s = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > l ? "next" : "prev",
    d = (m, v) => (u === "next" && m >= v) || (u === "prev" && m <= v),
    f = () => {
      (a = new Date().getTime()), s === null && (s = a);
      const m = Math.max(Math.min((a - s) / o, 1), 0),
        v = 0.5 - Math.cos(m * Math.PI) / 2;
      let g = l + v * (n - l);
      if ((d(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), d(g, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: g });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(f);
    };
  f();
}
function et(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function Si(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function cs(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : Ip(t))), n;
}
function Ap(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function jp(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function ht(e, t) {
  return ze().getComputedStyle(e, null).getPropertyValue(t);
}
function xa(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Fp(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Ea(e, t, n) {
  const r = ze();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
let cl;
function Vp() {
  const e = ze(),
    t = nt();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Hd() {
  return cl || (cl = Vp()), cl;
}
let fl;
function Bp(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Hd(),
    r = ze(),
    i = r.navigator.platform,
    l = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    a = r.screen.width,
    o = r.screen.height,
    u = l.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = l.match(/(iPad).*OS\s([\d_]+)/);
  const f = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !d && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let g = i === "MacIntel";
  const w = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      g &&
      n.touch &&
      w.indexOf(`${a}x${o}`) >= 0 &&
      ((d = l.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (g = !1)),
    u && !v && ((s.os = "android"), (s.android = !0)),
    (d || m || f) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function $p(e) {
  return e === void 0 && (e = {}), fl || (fl = Bp(e)), fl;
}
let pl;
function Gp() {
  const e = ze();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, l] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((s) => Number(s));
      t = i < 16 || (i === 16 && l < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function Hp() {
  return pl || (pl = Gp()), pl;
}
function Wp(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = ze();
  let l = null,
    s = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((l = new ResizeObserver((f) => {
          s = i.requestAnimationFrame(() => {
            const { width: m, height: v } = t;
            let g = m,
              w = v;
            f.forEach((P) => {
              let { contentBoxSize: c, contentRect: p, target: h } = P;
              (h && h !== t.el) ||
                ((g = p ? p.width : (c[0] || c).inlineSize),
                (w = p ? p.height : (c[0] || c).blockSize));
            }),
              (g !== m || w !== v) && a();
          });
        })),
        l.observe(t.el));
    },
    u = () => {
      s && i.cancelAnimationFrame(s),
        l && l.unobserve && t.el && (l.unobserve(t.el), (l = null));
    },
    d = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", d);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", d);
    });
}
function Up(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = [],
    s = ze(),
    a = function (d, f) {
      f === void 0 && (f = {});
      const m = s.MutationObserver || s.WebkitMutationObserver,
        v = new m((g) => {
          if (t.__preventObserver__) return;
          if (g.length === 1) {
            i("observerUpdate", g[0]);
            return;
          }
          const w = function () {
            i("observerUpdate", g[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(w)
            : s.setTimeout(w, 0);
        });
      v.observe(d, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        l.push(v);
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const d = Fp(t.hostEl);
          for (let f = 0; f < d.length; f += 1) a(d[f]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      l.forEach((d) => {
        d.disconnect();
      }),
        l.splice(0, l.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", o),
    r("destroy", u);
}
var Qp = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++)
        s[a] = arguments[a];
      t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
      l[s] = arguments[s];
    return (
      typeof l[0] == "string" || Array.isArray(l[0])
        ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
        : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [o, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function Yp() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(ht(r, "padding-left") || 0, 10) -
        parseInt(ht(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(ht(r, "padding-top") || 0, 10) -
        parseInt(ht(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Xp() {
  const e = this;
  function t(x, I) {
    return parseFloat(x.getPropertyValue(e.getDirectionLabel(I)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
    o = e.virtual && n.virtual.enabled,
    u = o ? e.virtual.slides.length : e.slides.length,
    d = et(i, `.${e.params.slideClass}, swiper-slide`),
    f = o ? e.virtual.slides.length : d.length;
  let m = [];
  const v = [],
    g = [];
  let w = n.slidesOffsetBefore;
  typeof w == "function" && (w = n.slidesOffsetBefore.call(e));
  let P = n.slidesOffsetAfter;
  typeof P == "function" && (P = n.slidesOffsetAfter.call(e));
  const c = e.snapGrid.length,
    p = e.slidesGrid.length;
  let h = n.spaceBetween,
    y = -w,
    S = 0,
    E = 0;
  if (typeof l > "u") return;
  typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * l)
    : typeof h == "string" && (h = parseFloat(h)),
    (e.virtualSize = -h),
    d.forEach((x) => {
      s ? (x.style.marginLeft = "") : (x.style.marginRight = ""),
        (x.style.marginBottom = ""),
        (x.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Rr(r, "--swiper-centered-offset-before", ""),
      Rr(r, "--swiper-centered-offset-after", ""));
  const _ = n.grid && n.grid.rows > 1 && e.grid;
  _ ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
  let C;
  const L =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (x) => typeof n.breakpoints[x].slidesPerView < "u"
    ).length > 0;
  for (let x = 0; x < f; x += 1) {
    C = 0;
    let I;
    if (
      (d[x] && (I = d[x]),
      _ && e.grid.updateSlide(x, I, d),
      !(d[x] && ht(I, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        L && (d[x].style[e.getDirectionLabel("width")] = "");
        const D = getComputedStyle(I),
          N = I.style.transform,
          $ = I.style.webkitTransform;
        if (
          (N && (I.style.transform = "none"),
          $ && (I.style.webkitTransform = "none"),
          n.roundLengths)
        )
          C = e.isHorizontal() ? Ea(I, "width", !0) : Ea(I, "height", !0);
        else {
          const q = t(D, "width"),
            ae = t(D, "padding-left"),
            Xe = t(D, "padding-right"),
            T = t(D, "margin-left"),
            z = t(D, "margin-right"),
            O = D.getPropertyValue("box-sizing");
          if (O && O === "border-box") C = q + T + z;
          else {
            const { clientWidth: V, offsetWidth: Q } = I;
            C = q + ae + Xe + T + z + (Q - V);
          }
        }
        N && (I.style.transform = N),
          $ && (I.style.webkitTransform = $),
          n.roundLengths && (C = Math.floor(C));
      } else
        (C = (l - (n.slidesPerView - 1) * h) / n.slidesPerView),
          n.roundLengths && (C = Math.floor(C)),
          d[x] && (d[x].style[e.getDirectionLabel("width")] = `${C}px`);
      d[x] && (d[x].swiperSlideSize = C),
        g.push(C),
        n.centeredSlides
          ? ((y = y + C / 2 + S / 2 + h),
            S === 0 && x !== 0 && (y = y - l / 2 - h),
            x === 0 && (y = y - l / 2 - h),
            Math.abs(y) < 1 / 1e3 && (y = 0),
            n.roundLengths && (y = Math.floor(y)),
            E % n.slidesPerGroup === 0 && m.push(y),
            v.push(y))
          : (n.roundLengths && (y = Math.floor(y)),
            (E - Math.min(e.params.slidesPerGroupSkip, E)) %
              e.params.slidesPerGroup ===
              0 && m.push(y),
            v.push(y),
            (y = y + C + h)),
        (e.virtualSize += C + h),
        (S = C),
        (E += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + P),
    s &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + h}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
    _ && e.grid.updateWrapperSize(C, m),
    !n.centeredSlides)
  ) {
    const x = [];
    for (let I = 0; I < m.length; I += 1) {
      let D = m[I];
      n.roundLengths && (D = Math.floor(D)),
        m[I] <= e.virtualSize - l && x.push(D);
    }
    (m = x),
      Math.floor(e.virtualSize - l) - Math.floor(m[m.length - 1]) > 1 &&
        m.push(e.virtualSize - l);
  }
  if (o && n.loop) {
    const x = g[0] + h;
    if (n.slidesPerGroup > 1) {
      const I = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        D = x * n.slidesPerGroup;
      for (let N = 0; N < I; N += 1) m.push(m[m.length - 1] + D);
    }
    for (let I = 0; I < e.virtual.slidesBefore + e.virtual.slidesAfter; I += 1)
      n.slidesPerGroup === 1 && m.push(m[m.length - 1] + x),
        v.push(v[v.length - 1] + x),
        (e.virtualSize += x);
  }
  if ((m.length === 0 && (m = [0]), h !== 0)) {
    const x =
      e.isHorizontal() && s ? "marginLeft" : e.getDirectionLabel("marginRight");
    d.filter((I, D) =>
      !n.cssMode || n.loop ? !0 : D !== d.length - 1
    ).forEach((I) => {
      I.style[x] = `${h}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let x = 0;
    g.forEach((D) => {
      x += D + (h || 0);
    }),
      (x -= h);
    const I = x - l;
    m = m.map((D) => (D <= 0 ? -w : D > I ? I + P : D));
  }
  if (n.centerInsufficientSlides) {
    let x = 0;
    if (
      (g.forEach((I) => {
        x += I + (h || 0);
      }),
      (x -= h),
      x < l)
    ) {
      const I = (l - x) / 2;
      m.forEach((D, N) => {
        m[N] = D - I;
      }),
        v.forEach((D, N) => {
          v[N] = D + I;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: d,
      snapGrid: m,
      slidesGrid: v,
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Rr(r, "--swiper-centered-offset-before", `${-m[0]}px`),
      Rr(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - g[g.length - 1] / 2}px`
      );
    const x = -e.snapGrid[0],
      I = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((D) => D + x)),
      (e.slidesGrid = e.slidesGrid.map((D) => D + I));
  }
  if (
    (f !== u && e.emit("slidesLengthChange"),
    m.length !== c &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== p && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const x = `${n.containerModifierClass}backface-hidden`,
      I = e.el.classList.contains(x);
    f <= n.maxBackfaceHiddenSlides
      ? I || e.el.classList.add(x)
      : I && e.el.classList.remove(x);
  }
}
function Kp(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Zp() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function qp(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((o) => {
      o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < r.length; o += 1) {
    const u = r[o];
    let d = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (d -= r[0].swiperSlideOffset);
    const f =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - d) /
        (u.swiperSlideSize + a),
      m =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) /
        (u.swiperSlideSize + a),
      v = -(s - d),
      g = v + t.slidesSizesGrid[o],
      w = v >= 0 && v <= t.size - t.slidesSizesGrid[o];
    ((v >= 0 && v < t.size - 1) ||
      (g > 1 && g <= t.size) ||
      (v <= 0 && g >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(o),
      r[o].classList.add(n.slideVisibleClass)),
      w && r[o].classList.add(n.slideFullyVisibleClass),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -m : m);
  }
}
function Jp(e) {
  const t = this;
  if (typeof e > "u") {
    const d = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * d) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
  const o = l,
    u = s;
  if (r === 0) (i = 0), (l = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const d = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (l = d || i <= 0), (s = f || i >= 1), d && (i = 0), f && (i = 1);
  }
  if (n.loop) {
    const d = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      m = t.slidesGrid[d],
      v = t.slidesGrid[f],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      w = Math.abs(e);
    w >= m ? (a = (w - m) / g) : (a = (w + g - v) / g), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !o && t.emit("reachBeginning toEdge"),
    s && !u && t.emit("reachEnd toEdge"),
    ((o && !l) || (u && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function bp() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    s = e.grid && n.grid && n.grid.rows > 1,
    a = (f) => et(r, `.${n.slideClass}${f}, swiper-slide${f}`)[0];
  t.forEach((f) => {
    f.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let o, u, d;
  if (l)
    if (n.loop) {
      let f = i - e.virtual.slidesBefore;
      f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${f}"]`));
    } else o = a(`[data-swiper-slide-index="${i}"]`);
  else
    s
      ? ((o = t.filter((f) => f.column === i)[0]),
        (d = t.filter((f) => f.column === i + 1)[0]),
        (u = t.filter((f) => f.column === i - 1)[0]))
      : (o = t[i]);
  o &&
    (o.classList.add(n.slideActiveClass),
    s
      ? (d && d.classList.add(n.slideNextClass),
        u && u.classList.add(n.slidePrevClass))
      : ((d = jp(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !d && (d = t[0]),
        d && d.classList.add(n.slideNextClass),
        (u = Ap(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !u === 0 && (u = t[t.length - 1]),
        u && u.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses();
}
const Xr = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  ml = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  fs = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = i,
        a = [s - t];
      a.push(...Array.from({ length: t }).map((o, u) => s + r + u)),
        e.slides.forEach((o, u) => {
          a.includes(o.column) && ml(e, u);
        });
      return;
    }
    const l = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = i - t; s <= l + t; s += 1) {
        const a = ((s % n) + n) % n;
        (a < i || a > l) && ml(e, a);
      }
    else
      for (let s = Math.max(i - t, 0); s <= Math.min(l + t, n - 1); s += 1)
        s !== i && (s > l || s < i) && ml(e, s);
  };
function em(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < "u"
      ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (i = l)
        : r >= t[l] && r < t[l + 1] && (i = l + 1)
      : r >= t[l] && (i = l);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function tm(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: a } = t;
  let o = e,
    u;
  const d = (v) => {
    let g = v - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof o > "u" && (o = em(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, o);
    u = v + Math.floor((o - v) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), o === l && !t.params.loop)) {
    u !== a && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (o === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = d(o);
    return;
  }
  const f = t.grid && i.grid && i.grid.rows > 1;
  let m;
  if (t.virtual && i.virtual.enabled && i.loop) m = d(o);
  else if (f) {
    const v = t.slides.filter((w) => w.column === o)[0];
    let g = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(v), 0)),
      (m = Math.floor(g / i.grid.rows));
  } else if (t.slides[o]) {
    const v = t.slides[o].getAttribute("data-swiper-slide-index");
    v ? (m = parseInt(v, 10)) : (m = o);
  } else m = o;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: s,
    realIndex: m,
    previousIndex: l,
    activeIndex: o,
  }),
    t.initialized && fs(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (s !== m && t.emit("realIndexChange"), t.emit("slideChange"));
}
function nm(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let l = !1,
    s;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (l = !0), (s = a);
        break;
      }
  }
  if (i && l)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = s);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var rm = {
  updateSize: Yp,
  updateSlides: Xp,
  updateAutoHeight: Kp,
  updateSlidesOffset: Zp,
  updateSlidesProgress: qp,
  updateProgress: Jp,
  updateSlidesClasses: bp,
  updateActiveIndex: tm,
  updateClickedSlide: nm,
};
function im(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = Dp(l, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function lm(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
  let a = 0,
    o = 0;
  const u = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (o = e),
    i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    i.cssMode
      ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${a}px, ${o}px, ${u}px)`));
  let d;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (d = 0) : (d = (e - n.minTranslate()) / f),
    d !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function sm() {
  return -this.snapGrid[0];
}
function om() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function am(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    u = l.maxTranslate();
  let d;
  if (
    (r && e > o ? (d = o) : r && e < u ? (d = u) : (d = e),
    l.updateProgress(d),
    s.cssMode)
  ) {
    const f = l.isHorizontal();
    if (t === 0) a[f ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!l.support.smoothScroll)
        return (
          Gd({ swiper: l, targetPosition: -d, side: f ? "left" : "top" }), !0
        );
      a.scrollTo({ [f ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(d),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(d),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (m) {
              !l ||
                l.destroyed ||
                (m.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit("transitionEnd")));
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var um = {
  getTranslate: im,
  setTranslate: lm,
  minTranslate: sm,
  maxTranslate: om,
  translateTo: am,
};
function dm(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Wd(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: l, previousIndex: s } = t;
  let a = r;
  if (
    (a || (l > s ? (a = "next") : l < s ? (a = "prev") : (a = "reset")),
    t.emit(`transition${i}`),
    n && l !== s)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function cm(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Wd({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function fm(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Wd({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var pm = { setTransition: dm, transitionStart: cm, transitionEnd: fm };
function mm(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: u,
    previousIndex: d,
    activeIndex: f,
    rtlTranslate: m,
    wrapperEl: v,
    enabled: g,
  } = l;
  if ((l.animating && a.preventInteractionOnTransition) || (!g && !r && !i))
    return !1;
  const w = Math.min(l.params.slidesPerGroupSkip, s);
  let P = w + Math.floor((s - w) / l.params.slidesPerGroup);
  P >= o.length && (P = o.length - 1);
  const c = -o[P];
  if (a.normalizeSlideIndex)
    for (let h = 0; h < u.length; h += 1) {
      const y = -Math.floor(c * 100),
        S = Math.floor(u[h] * 100),
        E = Math.floor(u[h + 1] * 100);
      typeof u[h + 1] < "u"
        ? y >= S && y < E - (E - S) / 2
          ? (s = h)
          : y >= S && y < E && (s = h + 1)
        : y >= S && (s = h);
    }
  if (
    l.initialized &&
    s !== f &&
    ((!l.allowSlideNext &&
      (m
        ? c > l.translate && c > l.minTranslate()
        : c < l.translate && c < l.minTranslate())) ||
      (!l.allowSlidePrev &&
        c > l.translate &&
        c > l.maxTranslate() &&
        (f || 0) !== s))
  )
    return !1;
  s !== (d || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(c);
  let p;
  if (
    (s > f ? (p = "next") : s < f ? (p = "prev") : (p = "reset"),
    (m && -c === l.translate) || (!m && c === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(c),
      p !== "reset" && (l.transitionStart(n, p), l.transitionEnd(n, p)),
      !1
    );
  if (a.cssMode) {
    const h = l.isHorizontal(),
      y = m ? c : -c;
    if (t === 0) {
      const S = l.virtual && l.params.virtual.enabled;
      S &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        S && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[h ? "scrollLeft" : "scrollTop"] = y;
            }))
          : (v[h ? "scrollLeft" : "scrollTop"] = y),
        S &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          Gd({ swiper: l, targetPosition: y, side: h ? "left" : "top" }), !0
        );
      v.scrollTo({ [h ? "left" : "top"]: y, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(c),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, p),
    t === 0
      ? l.transitionEnd(n, p)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (y) {
            !l ||
              l.destroyed ||
              (y.target === this &&
                (l.wrapperEl.removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, p)));
          }),
        l.wrapperEl.addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function hm(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this,
    l = i.grid && i.params.grid && i.params.grid.rows > 1;
  let s = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) s = s + i.virtual.slidesBefore;
    else {
      let a;
      if (l) {
        const m = s * i.params.grid.rows;
        a = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === m
        )[0].column;
      } else a = i.getSlideIndexByData(s);
      const o = l
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let d = i.params.slidesPerView;
      d === "auto"
        ? (d = i.slidesPerViewDynamic())
        : ((d = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && d % 2 === 0 && (d = d + 1));
      let f = o - a < d;
      if ((u && (f = f || a < Math.ceil(d / 2)), f)) {
        const m = u
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: m,
          slideTo: !0,
          activeSlideIndex: m === "next" ? a + 1 : a - o + 1,
          slideRealIndex: m === "next" ? i.realIndex : void 0,
        });
      }
      if (l) {
        const m = s * i.params.grid.rows;
        s = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === m
        )[0].column;
      } else s = i.getSlideIndexByData(s);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(s, t, n, r);
    }),
    i
  );
}
function vm(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: l, animating: s } = r;
  if (!i) return r;
  let a = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
    u = r.virtual && l.virtual.enabled;
  if (l.loop) {
    if (s && !u && l.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && l.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + o, e, t, n);
        }),
        !0
      );
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function gm(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: o,
      animating: u,
    } = r;
  if (!o) return r;
  const d = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !d && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const f = a ? r.translate : -r.translate;
  function m(c) {
    return c < 0 ? -Math.floor(Math.abs(c)) : Math.floor(c);
  }
  const v = m(f),
    g = l.map((c) => m(c));
  let w = l[g.indexOf(v) - 1];
  if (typeof w > "u" && i.cssMode) {
    let c;
    l.forEach((p, h) => {
      v >= p && (c = h);
    }),
      typeof c < "u" && (w = l[c > 0 ? c - 1 : c]);
  }
  let P = 0;
  if (
    (typeof w < "u" &&
      ((P = s.indexOf(w)),
      P < 0 && (P = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((P = P - r.slidesPerViewDynamic("previous", !0) + 1),
        (P = Math.max(P, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const c =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(c, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(P, e, t, n);
      }),
      !0
    );
  return r.slideTo(P, e, t, n);
}
function ym(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function wm(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      d = i.snapGrid[a + 1];
    o - u > (d - u) * r && (l += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      d = i.snapGrid[a];
    o - u <= (d - u) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function Sm() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              et(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
            )),
            ds(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            et(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
          )),
          ds(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var xm = {
  slideTo: mm,
  slideToLoop: hm,
  slideNext: vm,
  slidePrev: gm,
  slideReset: ym,
  slideToClosest: wm,
  slideToClickedSlide: Sm,
};
function Em(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      et(r, `.${n.slideClass}, swiper-slide`).forEach((f, m) => {
        f.setAttribute("data-swiper-slide-index", m);
      });
    },
    l = t.grid && n.grid && n.grid.rows > 1,
    s = n.slidesPerGroup * (l ? n.grid.rows : 1),
    a = t.slides.length % s !== 0,
    o = l && t.slides.length % n.grid.rows !== 0,
    u = (d) => {
      for (let f = 0; f < d; f += 1) {
        const m = t.isElement
          ? cs("swiper-slide", [n.slideBlankClass])
          : cs("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(m);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const d = s - (t.slides.length % s);
      u(d), t.recalcSlides(), t.updateSlides();
    } else
      Si(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const d = n.grid.rows - (t.slides.length % n.grid.rows);
      u(d), t.recalcSlides(), t.updateSlides();
    } else
      Si(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function Tm(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: l,
    byController: s,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: d,
      allowSlideNext: f,
      slidesEl: m,
      params: v,
    } = o,
    { centeredSlides: g } = v;
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && o.snapIndex < v.slidesPerView
        ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
        : o.snapIndex === o.snapGrid.length - 1 &&
          o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = d),
      (o.allowSlideNext = f),
      o.emit("loopFix");
    return;
  }
  let w = v.slidesPerView;
  w === "auto"
    ? (w = o.slidesPerViewDynamic())
    : ((w = Math.ceil(parseFloat(v.slidesPerView, 10))),
      g && w % 2 === 0 && (w = w + 1));
  const P = v.slidesPerGroupAuto ? w : v.slidesPerGroup;
  let c = P;
  c % P !== 0 && (c += P - (c % P)),
    (c += v.loopAdditionalSlides),
    (o.loopedSlides = c);
  const p = o.grid && v.grid && v.grid.rows > 1;
  u.length < w + c
    ? Si(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : p &&
      v.grid.fill === "row" &&
      Si(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const h = [],
    y = [];
  let S = o.activeIndex;
  typeof l > "u"
    ? (l = o.getSlideIndex(
        u.filter((N) => N.classList.contains(v.slideActiveClass))[0]
      ))
    : (S = l);
  const E = r === "next" || !r,
    _ = r === "prev" || !r;
  let C = 0,
    L = 0;
  const x = p ? Math.ceil(u.length / v.grid.rows) : u.length,
    D = (p ? u[l].column : l) + (g && typeof i > "u" ? -w / 2 + 0.5 : 0);
  if (D < c) {
    C = Math.max(c - D, P);
    for (let N = 0; N < c - D; N += 1) {
      const $ = N - Math.floor(N / x) * x;
      if (p) {
        const q = x - $ - 1;
        for (let ae = u.length - 1; ae >= 0; ae -= 1)
          u[ae].column === q && h.push(ae);
      } else h.push(x - $ - 1);
    }
  } else if (D + w > x - c) {
    L = Math.max(D - (x - c * 2), P);
    for (let N = 0; N < L; N += 1) {
      const $ = N - Math.floor(N / x) * x;
      p
        ? u.forEach((q, ae) => {
            q.column === $ && y.push(ae);
          })
        : y.push($);
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1;
    }),
    _ &&
      h.forEach((N) => {
        (u[N].swiperLoopMoveDOM = !0),
          m.prepend(u[N]),
          (u[N].swiperLoopMoveDOM = !1);
      }),
    E &&
      y.forEach((N) => {
        (u[N].swiperLoopMoveDOM = !0),
          m.append(u[N]),
          (u[N].swiperLoopMoveDOM = !1);
      }),
    o.recalcSlides(),
    v.slidesPerView === "auto"
      ? o.updateSlides()
      : p &&
        ((h.length > 0 && _) || (y.length > 0 && E)) &&
        o.slides.forEach((N, $) => {
          o.grid.updateSlide($, N, o.slides);
        }),
    v.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (h.length > 0 && _) {
      if (typeof t > "u") {
        const N = o.slidesGrid[S],
          q = o.slidesGrid[S + C] - N;
        a
          ? o.setTranslate(o.translate - q)
          : (o.slideTo(S + C, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - q),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - q)));
      } else if (i) {
        const N = p ? h.length / v.grid.rows : h.length;
        o.slideTo(o.activeIndex + N, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate);
      }
    } else if (y.length > 0 && E)
      if (typeof t > "u") {
        const N = o.slidesGrid[S],
          q = o.slidesGrid[S - L] - N;
        a
          ? o.setTranslate(o.translate - q)
          : (o.slideTo(S - L, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - q),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - q)));
      } else {
        const N = p ? y.length / v.grid.rows : y.length;
        o.slideTo(o.activeIndex - N, 0, !1, !0);
      }
  }
  if (
    ((o.allowSlidePrev = d),
    (o.allowSlideNext = f),
    o.controller && o.controller.control && !s)
  ) {
    const N = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: l,
      byController: !0,
    };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach(($) => {
          !$.destroyed &&
            $.params.loop &&
            $.loopFix({
              ...N,
              slideTo: $.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ...N,
          slideTo:
            o.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  o.emit("loopFix");
}
function Cm() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const l =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[l] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var km = { loopCreate: Em, loopFix: Tm, loopDestroy: Cm };
function Pm(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function _m() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Lm = { setGrabCursor: Pm, unsetGrabCursor: _m };
function zm(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === nt() || r === ze()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Ta(e, t, n) {
  const r = ze(),
    { params: i } = e,
    l = i.edgeSwipeDetection,
    s = i.edgeSwipeThreshold;
  return l && (n <= s || n >= r.innerWidth - s)
    ? l === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function Mm(e) {
  const t = this,
    n = nt();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Ta(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: l, touches: s, enabled: a } = t;
  if (
    !a ||
    (!l.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let o = r.target;
  if (
    (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!l.noSwipingClass && l.noSwipingClass !== "",
    d = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && d && (o = d[0]);
  const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    m = !!(r.target && r.target.shadowRoot);
  if (l.noSwiping && (m ? zm(f, o) : o.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !o.closest(l.swipeHandler)) return;
  (s.currentX = r.pageX), (s.currentY = r.pageY);
  const v = s.currentX,
    g = s.currentY;
  if (!Ta(t, r, v)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = v),
    (s.startY = g),
    (i.touchStartTime = wi()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1);
  let w = !0;
  o.matches(i.focusableElements) &&
    ((w = !1), o.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur();
  const P = w && t.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || P) &&
    !o.isContentEditable &&
    r.preventDefault(),
    l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function Im(e) {
  const t = nt(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (r.touchId !== null || o.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (o.type === "touchmove") {
    if (
      ((u = [...o.changedTouches].filter((E) => E.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = o;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const d = u.pageX,
    f = u.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = d), (l.startY = f);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, { startX: d, startY: f, currentX: d, currentY: f }),
        (r.touchStartTime = wi()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (f < l.startY && n.translate <= n.maxTranslate()) ||
        (f > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (d < l.startX && n.translate <= n.maxTranslate()) ||
      (d > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    o.target === t.activeElement &&
    o.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", o),
    (l.previousX = l.currentX),
    (l.previousY = l.currentY),
    (l.currentX = d),
    (l.currentY = f);
  const m = l.currentX - l.startX,
    v = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(m ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let E;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : m * m + v * v >= 25 &&
        ((E = (Math.atan2(Math.abs(v), Math.abs(m)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? E > i.touchAngle
          : 90 - E > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
  let g = n.isHorizontal() ? m : v,
    w = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  i.oneWayMovement &&
    ((g = Math.abs(g) * (s ? 1 : -1)), (w = Math.abs(w) * (s ? 1 : -1))),
    (l.diff = g),
    (g *= i.touchRatio),
    s && ((g = -g), (w = -w));
  const P = n.touchesDirection;
  (n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = w > 0 ? "prev" : "next");
  const c = n.params.loop && !i.cssMode,
    p =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (c && p && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(E);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let h;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      P !== n.touchesDirection &&
      c &&
      p &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(l, {
      startX: d,
      startY: f,
      currentX: d,
      currentY: f,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", o),
    (r.isMoved = !0),
    (r.currentTranslate = g + r.startTranslate);
  let y = !0,
    S = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (S = 0),
    g > 0
      ? (c &&
          p &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((y = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + g) ** S)))
      : g < 0 &&
        (c &&
          p &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((y = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - g) ** S))),
    y && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Om(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((S) => S.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: s,
    touches: a,
    rtlTranslate: o,
    slidesGrid: u,
    enabled: d,
  } = t;
  if (!d || (!s.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  s.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const f = wi(),
    m = f - n.touchStartTime;
  if (t.allowClick) {
    const S = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((S && S[0]) || r.target, S),
      t.emit("tap click", r),
      m < 300 &&
        f - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = wi()),
    ds(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (s.followFinger
      ? (v = o ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    s.cssMode)
  )
    return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const g = v >= -t.maxTranslate() && !t.params.loop;
  let w = 0,
    P = t.slidesSizesGrid[0];
  for (
    let S = 0;
    S < u.length;
    S += S < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const E = S < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof u[S + E] < "u"
      ? (g || (v >= u[S] && v < u[S + E])) && ((w = S), (P = u[S + E] - u[S]))
      : (g || v >= u[S]) && ((w = S), (P = u[u.length - 1] - u[u.length - 2]));
  }
  let c = null,
    p = null;
  s.rewind &&
    (t.isBeginning
      ? (p =
          s.virtual && s.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (c = 0));
  const h = (v - u[w]) / P,
    y = w < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (m > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (h >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? c : w + y)
        : t.slideTo(w)),
      t.swipeDirection === "prev" &&
        (h > 1 - s.longSwipesRatio
          ? t.slideTo(w + y)
          : p !== null && h < 0 && Math.abs(h) > s.longSwipesRatio
          ? t.slideTo(p)
          : t.slideTo(w));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(w + y)
        : t.slideTo(w)
      : (t.swipeDirection === "next" && t.slideTo(c !== null ? c : w + y),
        t.swipeDirection === "prev" && t.slideTo(p !== null ? p : w));
  }
}
function Ca() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function Nm(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Dm() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function Rm(e) {
  const t = this;
  Xr(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function Am() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Ud = (e, t) => {
  const n = nt(),
    { params: r, el: i, wrapperEl: l, device: s } = e,
    a = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[o]("touchstart", e.onTouchStart, { passive: !1 }),
    i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[o]("click", e.onClick, !0),
    r.cssMode && l[o]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Ca,
          !0
        )
      : e[u]("observerUpdate", Ca, !0),
    i[o]("load", e.onLoad, { capture: !0 });
};
function jm() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = Mm.bind(e)),
    (e.onTouchMove = Im.bind(e)),
    (e.onTouchEnd = Om.bind(e)),
    (e.onDocumentTouchStart = Am.bind(e)),
    t.cssMode && (e.onScroll = Dm.bind(e)),
    (e.onClick = Nm.bind(e)),
    (e.onLoad = Rm.bind(e)),
    Ud(e, "on");
}
function Fm() {
  Ud(this, "off");
}
var Vm = { attachEvents: jm, detachEvents: Fm };
const ka = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Bm() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const o = (s in l ? l[s] : void 0) || e.originalParams,
    u = ka(e, r),
    d = ka(e, o),
    f = r.enabled;
  u && !d
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      d &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((c) => {
      if (typeof o[c] > "u") return;
      const p = r[c] && r[c].enabled,
        h = o[c] && o[c].enabled;
      p && !h && e[c].disable(), !p && h && e[c].enable();
    });
  const m = o.direction && o.direction !== r.direction,
    v = r.loop && (o.slidesPerView !== r.slidesPerView || m),
    g = r.loop;
  m && n && e.changeDirection(), Te(e.params, o);
  const w = e.params.enabled,
    P = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !w ? e.disable() : !f && w && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", o),
    n &&
      (v
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !g && P
        ? (e.loopCreate(t), e.updateSlides())
        : g && !P && e.loopDestroy()),
    e.emit("breakpoint", o);
}
function $m(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = ze(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: l * o, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: o, value: u } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = o)
      : u <= n.clientWidth && (r = o);
  }
  return r || "max";
}
var Gm = { setBreakpoint: Bm, getBreakpoint: $m };
function Hm(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Wm() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    s = Hm(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function Um() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var Qm = { addClasses: Wm, removeClasses: Um };
function Ym() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Xm = { checkOverflow: Ym },
  ps = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Km(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      Te(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in l))
    ) {
      Te(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Te(t, r);
  };
}
const hl = {
    eventsEmitter: Qp,
    update: rm,
    translate: um,
    transition: pm,
    slide: xm,
    loop: km,
    grabCursor: Lm,
    events: Vm,
    breakpoints: Gm,
    checkOverflow: Xm,
    classes: Qm,
  },
  vl = {};
let uo = class Ke {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
      i[l] = arguments[l];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Te({}, n)),
      t && !n.el && (n.el = t);
    const s = nt();
    if (
      n.el &&
      typeof n.el == "string" &&
      s.querySelectorAll(n.el).length > 1
    ) {
      const d = [];
      return (
        s.querySelectorAll(n.el).forEach((f) => {
          const m = Te({}, n, { el: f });
          d.push(new Ke(m));
        }),
        d
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = Hd()),
      (a.device = $p({ userAgent: n.userAgent })),
      (a.browser = Hp()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach((d) => {
      d({
        params: n,
        swiper: a,
        extendParams: Km(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = Te({}, ps, o);
    return (
      (a.params = Te({}, u, vl, n)),
      (a.originalParams = Te({}, a.params)),
      (a.passedParams = Te({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((d) => {
          a.on(d, a.params.on[d]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = et(n, `.${r.slideClass}, swiper-slide`),
      l = xa(i[0]);
    return xa(t) - l;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = et(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: o,
        activeIndex: u,
      } = r;
    let d = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let f = l[u] ? l[u].swiperSlideSize : 0,
        m;
      for (let v = u + 1; v < l.length; v += 1)
        l[v] &&
          !m &&
          ((f += l[v].swiperSlideSize), (d += 1), f > o && (m = !0));
      for (let v = u - 1; v >= 0; v -= 1)
        l[v] &&
          !m &&
          ((f += l[v].swiperSlideSize), (d += 1), f > o && (m = !0));
    } else if (t === "current")
      for (let f = u + 1; f < l.length; f += 1)
        (n ? s[f] + a[f] - s[u] < o : s[f] - s[u] < o) && (d += 1);
    else for (let f = u - 1; f >= 0; f -= 1) s[u] - s[f] < o && (d += 1);
    return d;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Xr(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        l = t.slideTo(s.length - 1, 0, !1, !0);
      } else l = t.slideTo(t.activeIndex, 0, !1, !0);
      l || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : et(r, i())[0];
    return (
      !s &&
        n.params.createElements &&
        ((s = cs("div", n.params.wrapperClass)),
        r.append(s),
        et(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || ht(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || ht(r, "direction") === "rtl"),
        wrongRTL: ht(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((l) => {
        l.complete
          ? Xr(n, l)
          : l.addEventListener("load", (s) => {
              Xr(n, s.target);
            });
      }),
      fs(n),
      (n.initialized = !0),
      fs(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: l, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttribute("style"),
          s.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 && ((r.el.swiper = null), Op(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Te(vl, t);
  }
  static get extendedDefaults() {
    return vl;
  }
  static get defaults() {
    return ps;
  }
  static installModule(t) {
    Ke.prototype.__modules__ || (Ke.prototype.__modules__ = []);
    const n = Ke.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ke.installModule(n)), Ke)
      : (Ke.installModule(t), Ke);
  }
};
Object.keys(hl).forEach((e) => {
  Object.keys(hl[e]).forEach((t) => {
    uo.prototype[t] = hl[e][t];
  });
});
uo.use([Wp, Up]);
const Qd = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Ht(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function pn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Ht(t[r]) && Ht(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : pn(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Yd(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Xd(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Kd(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Zd(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function Zm(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function qm(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: l,
    prevEl: s,
    scrollbarEl: a,
    paginationEl: o,
  } = e;
  const u = i.filter(
      (L) => L !== "children" && L !== "direction" && L !== "wrapperClass"
    ),
    {
      params: d,
      pagination: f,
      navigation: m,
      scrollbar: v,
      virtual: g,
      thumbs: w,
    } = t;
  let P, c, p, h, y, S, E, _;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    d.thumbs &&
    !d.thumbs.swiper &&
    (P = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      d.controller &&
      !d.controller.control &&
      (c = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || o) &&
      (d.pagination || d.pagination === !1) &&
      f &&
      !f.el &&
      (p = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (d.scrollbar || d.scrollbar === !1) &&
      v &&
      !v.el &&
      (h = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || l) &&
      (d.navigation || d.navigation === !1) &&
      m &&
      !m.prevEl &&
      !m.nextEl &&
      (y = !0);
  const C = (L) => {
    t[L] &&
      (t[L].destroy(),
      L === "navigation"
        ? (t.isElement && (t[L].prevEl.remove(), t[L].nextEl.remove()),
          (d[L].prevEl = void 0),
          (d[L].nextEl = void 0),
          (t[L].prevEl = void 0),
          (t[L].nextEl = void 0))
        : (t.isElement && t[L].el.remove(),
          (d[L].el = void 0),
          (t[L].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (d.loop && !r.loop ? (S = !0) : !d.loop && r.loop ? (E = !0) : (_ = !0)),
    u.forEach((L) => {
      if (Ht(d[L]) && Ht(r[L]))
        Object.assign(d[L], r[L]),
          (L === "navigation" || L === "pagination" || L === "scrollbar") &&
            "enabled" in r[L] &&
            !r[L].enabled &&
            C(L);
      else {
        const x = r[L];
        (x === !0 || x === !1) &&
        (L === "navigation" || L === "pagination" || L === "scrollbar")
          ? x === !1 && C(L)
          : (d[L] = r[L]);
      }
    }),
    u.includes("controller") &&
      !c &&
      t.controller &&
      t.controller.control &&
      d.controller &&
      d.controller.control &&
      (t.controller.control = d.controller.control),
    i.includes("children") && n && g && d.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : i.includes("virtual") &&
        g &&
        d.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    i.includes("children") && n && d.loop && (_ = !0),
    P && w.init() && w.update(!0),
    c && (t.controller.control = d.controller.control),
    p &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (d.pagination.el = o),
      f.init(),
      f.render(),
      f.update()),
    h &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (d.scrollbar.el = a),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    y &&
      (t.isElement &&
        ((!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-next"),
          (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
          l.part.add("button-next"),
          t.el.appendChild(l)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
          s.part.add("button-prev"),
          t.el.appendChild(s))),
      l && (d.navigation.nextEl = l),
      s && (d.navigation.prevEl = s),
      m.init(),
      m.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (S || _) && t.loopDestroy(),
    (E || _) && t.loopCreate(),
    t.update();
}
function Jm(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  pn(n, ps), (n._emitClasses = !0), (n.init = !1);
  const l = {},
    s = Qd.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? Ht(e[o])
            ? ((n[o] = {}), (i[o] = {}), pn(n[o], e[o]), pn(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
          ? t
            ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
          : (l[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function bm(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: l,
    scrollbarEl: s,
    swiper: a,
  } = e;
  Yd(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    Xd(t) &&
      l &&
      ((a.params.pagination.el = l), (a.originalParams.pagination.el = l)),
    Kd(t) &&
      s &&
      ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
    a.init(n);
}
function eh(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      u = n.map(i);
    o.join("") !== u.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    Qd.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (Ht(e[o]) && Ht(t[o])) {
            const u = Object.keys(e[o]),
              d = Object.keys(t[o]);
            u.length !== d.length
              ? s(o)
              : (u.forEach((f) => {
                  e[o][f] !== t[o][f] && s(o);
                }),
                d.forEach((f) => {
                  e[o][f] !== t[o][f] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
const th = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function xi() {
  return (
    (xi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xi.apply(this, arguments)
  );
}
function qd(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Jd(e) {
  const t = [];
  return (
    b.Children.toArray(e).forEach((n) => {
      qd(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Jd(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function nh(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    b.Children.toArray(e).forEach((r) => {
      if (qd(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Jd(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function rh(e, t, n) {
  if (!n) return null;
  const r = (d) => {
      let f = d;
      return (
        d < 0 ? (f = t.length + d) : f >= t.length && (f = f - t.length), f
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    o = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let d = a; d < o; d += 1) d >= l && d <= s && u.push(t[r(d)]);
  return u.map((d, f) =>
    b.cloneElement(d, { swiper: e, style: i, key: `slide-${f}` })
  );
}
function Un(e, t) {
  return typeof window > "u" ? F.useEffect(e, t) : F.useLayoutEffect(e, t);
}
const Pa = F.createContext(null),
  bd = F.createContext(null),
  ec = () => F.useContext(bd),
  tc = F.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: l,
        onSwiper: s,
        ...a
      } = e === void 0 ? {} : e,
      o = !1;
    const [u, d] = F.useState("swiper"),
      [f, m] = F.useState(null),
      [v, g] = F.useState(!1),
      w = F.useRef(!1),
      P = F.useRef(null),
      c = F.useRef(null),
      p = F.useRef(null),
      h = F.useRef(null),
      y = F.useRef(null),
      S = F.useRef(null),
      E = F.useRef(null),
      _ = F.useRef(null),
      { params: C, passedParams: L, rest: x, events: I } = Jm(a),
      { slides: D, slots: N } = nh(l),
      $ = () => {
        g(!v);
      };
    Object.assign(C.on, {
      _containerClasses(z, O) {
        d(O);
      },
    });
    const q = () => {
      Object.assign(C.on, I), (o = !0);
      const z = { ...C };
      if (
        (delete z.wrapperClass,
        (c.current = new uo(z)),
        c.current.virtual && c.current.params.virtual.enabled)
      ) {
        c.current.virtual.slides = D;
        const O = {
          cache: !1,
          slides: D,
          renderExternal: m,
          renderExternalUpdate: !1,
        };
        pn(c.current.params.virtual, O),
          pn(c.current.originalParams.virtual, O);
      }
    };
    P.current || q(), c.current && c.current.on("_beforeBreakpoint", $);
    const ae = () => {
        o ||
          !I ||
          !c.current ||
          Object.keys(I).forEach((z) => {
            c.current.on(z, I[z]);
          });
      },
      Xe = () => {
        !I ||
          !c.current ||
          Object.keys(I).forEach((z) => {
            c.current.off(z, I[z]);
          });
      };
    F.useEffect(() => () => {
      c.current && c.current.off("_beforeBreakpoint", $);
    }),
      F.useEffect(() => {
        !w.current &&
          c.current &&
          (c.current.emitSlidesClasses(), (w.current = !0));
      }),
      Un(() => {
        if ((t && (t.current = P.current), !!P.current))
          return (
            c.current.destroyed && q(),
            bm(
              {
                el: P.current,
                nextEl: y.current,
                prevEl: S.current,
                paginationEl: E.current,
                scrollbarEl: _.current,
                swiper: c.current,
              },
              C
            ),
            s && s(c.current),
            () => {
              c.current && !c.current.destroyed && c.current.destroy(!0, !1);
            }
          );
      }, []),
      Un(() => {
        ae();
        const z = eh(L, p.current, D, h.current, (O) => O.key);
        return (
          (p.current = L),
          (h.current = D),
          z.length &&
            c.current &&
            !c.current.destroyed &&
            qm({
              swiper: c.current,
              slides: D,
              passedParams: L,
              changedParams: z,
              nextEl: y.current,
              prevEl: S.current,
              scrollbarEl: _.current,
              paginationEl: E.current,
            }),
          () => {
            Xe();
          }
        );
      }),
      Un(() => {
        th(c.current);
      }, [f]);
    function T() {
      return C.virtual
        ? rh(c.current, D, f)
        : D.map((z, O) =>
            b.cloneElement(z, { swiper: c.current, swiperSlideIndex: O })
          );
    }
    return b.createElement(
      r,
      xi({ ref: P, className: Zd(`${u}${n ? ` ${n}` : ""}`) }, x),
      b.createElement(
        bd.Provider,
        { value: c.current },
        N["container-start"],
        b.createElement(
          i,
          { className: Zm(C.wrapperClass) },
          N["wrapper-start"],
          T(),
          N["wrapper-end"]
        ),
        Yd(C) &&
          b.createElement(
            b.Fragment,
            null,
            b.createElement("div", { ref: S, className: "swiper-button-prev" }),
            b.createElement("div", { ref: y, className: "swiper-button-next" })
          ),
        Kd(C) &&
          b.createElement("div", { ref: _, className: "swiper-scrollbar" }),
        Xd(C) &&
          b.createElement("div", { ref: E, className: "swiper-pagination" }),
        N["container-end"]
      )
    );
  });
tc.displayName = "Swiper";
const nc = F.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    lazy: a,
    virtualIndex: o,
    swiperSlideIndex: u,
    ...d
  } = e === void 0 ? {} : e;
  const f = F.useRef(null),
    [m, v] = F.useState("swiper-slide"),
    [g, w] = F.useState(!1);
  function P(y, S, E) {
    S === f.current && v(E);
  }
  Un(() => {
    if (
      (typeof u < "u" && (f.current.swiperSlideIndex = u),
      t && (t.current = f.current),
      !(!f.current || !l))
    ) {
      if (l.destroyed) {
        m !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", P),
        () => {
          l && l.off("_slideClass", P);
        }
      );
    }
  }),
    Un(() => {
      l && f.current && !l.destroyed && v(l.getSlideClasses(f.current));
    }, [l]);
  const c = {
      isActive: m.indexOf("swiper-slide-active") >= 0,
      isVisible: m.indexOf("swiper-slide-visible") >= 0,
      isPrev: m.indexOf("swiper-slide-prev") >= 0,
      isNext: m.indexOf("swiper-slide-next") >= 0,
    },
    p = () => (typeof r == "function" ? r(c) : r),
    h = () => {
      w(!0);
    };
  return b.createElement(
    n,
    xi(
      {
        ref: f,
        className: Zd(`${m}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": o,
        onLoad: h,
      },
      d
    ),
    s &&
      b.createElement(
        Pa.Provider,
        { value: c },
        b.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          p(),
          a &&
            !g &&
            b.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !s &&
      b.createElement(
        Pa.Provider,
        { value: c },
        p(),
        a &&
          !g &&
          b.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
nc.displayName = "SwiperSlide";
const ur = {
  events: {},
  on(e, t) {
    this.events[e] || (this.events[e] = []), this.events[e].push(t);
  },
  emit(e, t) {
    this.events[e] && this.events[e].forEach((n) => n(t));
  },
  removeListener(e, t) {
    this.events[e] && (this.events[e] = this.events[e].filter((n) => n !== t));
  },
};
function ih(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: l } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let s,
    a,
    o = l && l.autoplay ? l.autoplay.delay : 3e3,
    u = l && l.autoplay ? l.autoplay.delay : 3e3,
    d,
    f = new Date().getTime(),
    m,
    v,
    g,
    w,
    P,
    c,
    p;
  function h(T) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (T.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", h), !p && x()));
  }
  const y = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (m = !0) : m && ((u = d), (m = !1));
      const T = t.autoplay.paused ? d : f + u - new Date().getTime();
      (t.autoplay.timeLeft = T),
        i("autoplayTimeLeft", T, T / o),
        (a = requestAnimationFrame(() => {
          y();
        }));
    },
    S = () => {
      let T;
      return (
        t.virtual && t.params.virtual.enabled
          ? (T = t.slides.filter((O) =>
              O.classList.contains("swiper-slide-active")
            )[0])
          : (T = t.slides[t.activeIndex]),
        T ? parseInt(T.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    E = (T) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(a), y();
      let z = typeof T > "u" ? t.params.autoplay.delay : T;
      (o = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const O = S();
      !Number.isNaN(O) &&
        O > 0 &&
        typeof T > "u" &&
        ((z = O), (o = O), (u = O)),
        (d = z);
      const V = t.params.speed,
        Q = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(V, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, V, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(V, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, V, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((f = new Date().getTime()),
              requestAnimationFrame(() => {
                E();
              })));
        };
      return (
        z > 0
          ? (clearTimeout(s),
            (s = setTimeout(() => {
              Q();
            }, z)))
          : requestAnimationFrame(() => {
              Q();
            }),
        z
      );
    },
    _ = () => {
      (f = new Date().getTime()),
        (t.autoplay.running = !0),
        E(),
        i("autoplayStart");
    },
    C = () => {
      (t.autoplay.running = !1),
        clearTimeout(s),
        cancelAnimationFrame(a),
        i("autoplayStop");
    },
    L = (T, z) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(s), T || (c = !0);
      const O = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", h)
            : x();
      };
      if (((t.autoplay.paused = !0), z)) {
        P && (d = t.params.autoplay.delay), (P = !1), O();
        return;
      }
      (d = (d || t.params.autoplay.delay) - (new Date().getTime() - f)),
        !(t.isEnd && d < 0 && !t.params.loop) && (d < 0 && (d = 0), O());
    },
    x = () => {
      (t.isEnd && d < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((f = new Date().getTime()),
        c ? ((c = !1), E(d)) : E(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    I = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const T = nt();
      T.visibilityState === "hidden" && ((c = !0), L(!0)),
        T.visibilityState === "visible" && x();
    },
    D = (T) => {
      T.pointerType === "mouse" &&
        ((c = !0), (p = !0), !(t.animating || t.autoplay.paused) && L(!0));
    },
    N = (T) => {
      T.pointerType === "mouse" && ((p = !1), t.autoplay.paused && x());
    },
    $ = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", D),
        t.el.addEventListener("pointerleave", N));
    },
    q = () => {
      t.el.removeEventListener("pointerenter", D),
        t.el.removeEventListener("pointerleave", N);
    },
    ae = () => {
      nt().addEventListener("visibilitychange", I);
    },
    Xe = () => {
      nt().removeEventListener("visibilitychange", I);
    };
  r("init", () => {
    t.params.autoplay.enabled && ($(), ae(), _());
  }),
    r("destroy", () => {
      q(), Xe(), t.autoplay.running && C();
    }),
    r("_freeModeStaticRelease", () => {
      (g || c) && x();
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? C() : L(!0, !0);
    }),
    r("beforeTransitionStart", (T, z, O) => {
      t.destroyed ||
        !t.autoplay.running ||
        (O || !t.params.autoplay.disableOnInteraction ? L(!0, !0) : C());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          C();
          return;
        }
        (v = !0),
          (g = !1),
          (c = !1),
          (w = setTimeout(() => {
            (c = !0), (g = !0), L(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !v)) {
        if (
          (clearTimeout(w),
          clearTimeout(s),
          t.params.autoplay.disableOnInteraction)
        ) {
          (g = !1), (v = !1);
          return;
        }
        g && t.params.cssMode && x(), (g = !1), (v = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (P = !0);
    }),
    Object.assign(t.autoplay, { start: _, stop: C, pause: L, resume: x });
}
function Yt({
  name: e,
  items: t,
  nexBtnConfig: n,
  prevBtnConfig: r,
  width: i,
  disableNavOption: l,
  useNavButtons: s = !0,
  usePagination: a = !1,
  paginationConfig: o,
  paginationStyle: u,
  autoPlay: d = { play: !1, delay: 0 },
}) {
  return R.jsxs(tc, {
    spaceBetween: 20,
    slidesPerView: 3,
    onSlideChange: (f) =>
      ur.emit("update_nav_button_" + e, f == null ? void 0 : f.activeIndex),
    style: {
      width: i,
      paddingBottom: "30px",
      overflowY: "auto",
      height: "auto",
    },
    autoplay: d
      ? d.play === !1
        ? !1
        : { delay: (d == null ? void 0 : d.delay) ?? 0 }
      : !1,
    modules: [ih],
    children: [
      s &&
        R.jsx(_a, {
          buttonStyle: r,
          type: "previous",
          buttonSize: "50px",
          swiperName: e,
          disableOption: l,
          children: R.jsx(oh, {}),
        }),
      t.map((f, m) => R.jsx(nc, { children: f }, m)),
      s &&
        R.jsx(_a, {
          buttonStyle: n,
          type: "next",
          buttonSize: "50px",
          swiperName: e,
          disableOption: l,
          children: R.jsx(sh, {}),
        }),
      a && R.jsx(lh, { style: u, swiperName: e, config: o }),
    ],
  });
}
const _a = ({
    buttonStyle: e,
    type: t,
    children: n,
    buttonSize: r = "50px",
    swiperName: i,
    disableOption: l = "opacity",
  }) => {
    const [s, a] = F.useState(!1),
      [o, u] = F.useState(t === "previous"),
      d = ec(),
      f = () => {
        switch (t) {
          case "previous":
            d.slidePrev(), d.isBeginning && u(!0);
            break;
          case "next":
            d.slideNext(), d.isEnd && u(!0);
            break;
        }
        a(!s);
      };
    F.useEffect(() => {
      const g = (w) => {
        switch (t) {
          case "previous":
            (!d.isBeginning || w === 0) && u(!1);
            break;
          case "next":
            d.isEnd || u(!1);
            break;
        }
      };
      return (
        ur.on("update_nav_button_" + i, g),
        () => {
          ur.removeListener("update_nav_button_" + i, g);
        }
      );
    }, []);
    var m = {
      "--swiper-navigation-button-size": r,
      position: "absolute",
      top: " var(--swiper-navigation-top-offset, 50%)",
      width: "calc(var(--swiper-navigation-button-size) / 44 * 27)",
      height: "var(--swiper-navigation-button-size)",
      marginTop: "calc(0px - (var(--swiper-navigation-button-size) / 2))",
      zIndex: 99999,
      cursor: "pointer",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: t === "next" && 0,
      left: t === "previous" && 0,
      opacity: o ? (l === "hidden" ? "0" : "0.5") : "1",
    };
    let v =
      (e == null ? void 0 : e.style) !== void 0
        ? e == null
          ? void 0
          : e.style
        : e;
    return (
      (m = Object.assign({}, m, v)),
      R.jsxs("div", {
        style: m,
        onClick: () => f(),
        onMouseOver: (g) => (g.target.style.backgroundColor = "#3b3b3929"),
        onMouseLeave: (g) => (g.target.style.backgroundColor = "transparent"),
        children: [
          R.jsx("div", {
            style: {
              width: "calc(var(--swiper-navigation-button-size) / 44 * 27)",
              height: "var(--swiper-navigation-button-size)",
              position: "absolute",
            },
          }),
          (e == null ? void 0 : e.btn) !== void 0
            ? e == null
              ? void 0
              : e.btn
            : n,
        ],
      })
    );
  },
  lh = ({
    style: e,
    swiperName: t,
    config: n = {
      alignX: "center",
      alignY: "bottom-outside",
      sctBullet: "#000000",
      dsbBullet: "#C7C7C7",
    },
  }) => {
    const r = ec(),
      i = (u) => {
        r.slideTo(u), s(u);
      },
      [l, s] = F.useState(r.activeIndex);
    F.useEffect(() => {
      const u = (d) => {
        s(d);
      };
      return (
        ur.on("update_nav_button_" + t, u),
        () => {
          ur.removeListener("update_nav_button_" + t, u);
        }
      );
    }, []);
    let a = "0%";
    switch (n.alignY) {
      case "bottom-inside":
        a = "85%";
        break;
      case "bottom-outside":
        a = "93%";
        break;
      case "top":
        a = "3%";
        break;
      default:
        a = "93%";
        break;
    }
    var o = {
      position: "absolute",
      top: a,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: n.alignX,
      zIndex: 9999999,
      gap: "0.5rem",
    };
    return (
      (o = Object.assign({}, o, e)),
      R.jsx("div", {
        style: o,
        className: "custom-pagination-container",
        children: Array.from({ length: r.slides.length - 2 }).map((u, d) =>
          R.jsx(
            "div",
            {
              onClick: () => i(d),
              style: {
                backgroundColor:
                  d === l
                    ? (n == null ? void 0 : n.sctBullet) ?? "#000000"
                    : (n == null ? void 0 : n.dsbBullet) ?? "#C7C7C7",
                display: "block",
                width: "10px",
                height: "10px",
                cursor: "pointer",
                borderRadius: "50%",
              },
            },
            d
          )
        ),
      })
    );
  },
  sh = () =>
    R.jsxs("svg", {
      fill: "#000000",
      height: "100px",
      width: "100px",
      version: "1.1",
      id: "Capa_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "-47.72 -47.72 572.62 572.62",
      xmlSpace: "preserve",
      stroke: "#000000",
      strokeWidth: "19.087",
      children: [
        R.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        R.jsx("g", {
          id: "SVGRepo_tracerCarrier",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "#CCCCCC",
          strokeWidth: "3.8174",
        }),
        R.jsxs("g", {
          id: "SVGRepo_iconCarrier",
          children: [
            " ",
            R.jsxs("g", {
              children: [
                " ",
                R.jsx("path", {
                  d: "M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z ",
                }),
                " ",
              ],
            }),
            " ",
          ],
        }),
      ],
    }),
  oh = () =>
    R.jsxs("svg", {
      fill: "#000000",
      height: "100px",
      width: "100px",
      version: "1.1",
      id: "Capa_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "-47.72 -47.72 572.62 572.62",
      xmlSpace: "preserve",
      stroke: "#000000",
      strokeWidth: "19.087",
      transform: "rotate(180)",
      children: [
        R.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        R.jsx("g", {
          id: "SVGRepo_tracerCarrier",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "#CCCCCC",
          strokeWidth: "3.8174",
        }),
        R.jsxs("g", {
          id: "SVGRepo_iconCarrier",
          children: [
            " ",
            R.jsxs("g", {
              children: [
                " ",
                R.jsx("path", {
                  d: "M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z ",
                }),
                " ",
              ],
            }),
            " ",
          ],
        }),
      ],
    }),
  ah = () => {
    const e = { display: "block", height: "300px", border: "1px solid black" },
      t = [
        R.jsx("div", { style: e, children: "opaaaa" }),
        R.jsx("div", { style: e, children: "opaaaa" }),
        R.jsx("div", { style: e, children: "opaaaa" }),
        R.jsx("div", { style: e, children: "opaaaa" }),
        R.jsx("div", { style: e, children: "opaaaa" }),
        R.jsx("div", { style: e, children: "opaaaa" }),
        R.jsx("div", { style: e, children: "opaaaa" }),
        R.jsx("div", { style: e, children: "opaaaa" }),
      ];
    return R.jsxs("div", {
      children: [
        R.jsx(Yt, {
          name: "opa",
          items: t,
          nexBtnConfig: { color: "red", borderRadius: "10px" },
          prevBtnConfig: { color: "red", borderRadius: "10px" },
        }),
        R.jsx(Yt, {
          name: "opa1",
          items: t,
          disableNavOption: "hidden",
          nexBtnConfig: {
            style: { backgroundColor: "blue", color: "red" },
            btn: R.jsx("div", { children: "aaaa" }),
          },
          prevBtnConfig: {
            style: { backgroundColor: "green", color: "red" },
            btn: R.jsx("div", { children: "aaaa" }),
          },
        }),
        R.jsx(Yt, {
          name: "opa2",
          items: t,
          disableNavOption: "hidden",
          useNavButtons: !1,
          nexBtnConfig: {
            style: { backgroundColor: "blue", color: "red" },
            btn: R.jsx("div", { children: "aaaa" }),
          },
          prevBtnConfig: {
            style: { backgroundColor: "green", color: "red" },
            btn: R.jsx("div", { children: "aaaa" }),
          },
        }),
        R.jsx(Yt, {
          name: "opa3",
          items: t,
          nexBtnConfig: { color: "red", borderRadius: "10px" },
          prevBtnConfig: { color: "red", borderRadius: "10px" },
          usePagination: !0,
          paginationConfig: {
            alignX: "center",
            alignY: "top",
            sctBullet: "red",
            dsbBullet: "green",
          },
        }),
        R.jsx(Yt, {
          name: "opa4",
          items: t,
          nexBtnConfig: { borderRadius: "10px" },
          prevBtnConfig: { borderRadius: "10px" },
          usePagination: !0,
        }),
        R.jsx(Yt, {
          name: "opa5",
          items: t,
          nexBtnConfig: { borderRadius: "10px" },
          prevBtnConfig: { borderRadius: "10px" },
          usePagination: !0,
          autoPlay: { play: !0, delay: 2200 },
        }),
      ],
    });
  };
gl.createRoot(document.getElementById("root")).render(
  R.jsx(b.StrictMode, { children: R.jsx(ah, {}) })
);
