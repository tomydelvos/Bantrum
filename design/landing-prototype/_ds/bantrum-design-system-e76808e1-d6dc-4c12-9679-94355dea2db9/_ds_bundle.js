/* @ds-bundle: {"format":4,"namespace":"BantrumDesignSystem_e76808","components":[{"name":"DrinkCard","sourcePath":"components/commerce/DrinkCard.jsx"},{"name":"FeatureItem","sourcePath":"components/commerce/FeatureItem.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"SectionDivider","sourcePath":"components/commerce/SectionDivider.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/commerce/DrinkCard.jsx":"f270bedfe766","components/commerce/FeatureItem.jsx":"3e9e2aefc799","components/commerce/ProductCard.jsx":"185d92d72086","components/commerce/SectionDivider.jsx":"c9a70d2815d6","components/core/Badge.jsx":"9a3197d0d402","components/core/Button.jsx":"dd5921e36306","components/core/Icon.jsx":"27cecdeef53f","components/core/IconButton.jsx":"551f5c6095c4","components/core/Tag.jsx":"b451f28e559c","components/forms/Checkbox.jsx":"90f4e1873e2a","components/forms/Input.jsx":"839138fc8a75","components/forms/Select.jsx":"82588f5ab2a6","components/forms/Switch.jsx":"2074493cf167","components/surfaces/Card.jsx":"3071011f66ef","components/surfaces/Dialog.jsx":"5f8225a78385","components/surfaces/Tabs.jsx":"a70c4d4a3bb2","components/surfaces/Toast.jsx":"45c3c504306f","components/surfaces/Tooltip.jsx":"c2354ee9d6ca","ui_kits/website/Header.jsx":"7e5354bbef5b","ui_kits/website/Hero.jsx":"ce0e48732069","ui_kits/website/MenuPage.jsx":"15f7e35143e2","ui_kits/website/Sections.jsx":"95e9d7762db8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BantrumDesignSystem_e76808 = window.BantrumDesignSystem_e76808 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/DrinkCard.jsx
try { (() => {
function DrinkCard({
  image,
  title,
  text,
  price,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 4,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 104,
      height: 104,
      borderRadius: 999,
      objectFit: 'cover',
      boxShadow: 'var(--shadow-lg)',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-soft)',
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink-900)'
    }
  }, title), text && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-700)'
    }
  }, text), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--ink-900)',
      marginTop: 4
    }
  }, price));
}
Object.assign(__ds_scope, { DrinkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/DrinkCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.454.0/icons/';
function Icon({
  name = 'leaf',
  size = 20,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const url = `url(${CDN}${name}.svg)`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: `${url} center/contain no-repeat`,
      mask: `${url} center/contain no-repeat`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/FeatureItem.jsx
try { (() => {
function FeatureItem({
  icon = 'leaf',
  title,
  text,
  compact = false
}) {
  if (compact) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: 'var(--sage-200)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--green-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      lineHeight: 1.35,
      color: 'var(--fg-2)'
    }
  }, title));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    color: "var(--green-700)",
    style: {
      marginLeft: 0
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--fg-1)'
    }
  }, title), text && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--fg-3)',
      textWrap: 'pretty'
    }
  }, text));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SectionDivider.jsx
try { (() => {
function SectionDivider({
  children,
  style = {}
}) {
  const line = /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--sage-400)',
      opacity: .6
    }
  });
  const heart = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 10,
    color: "var(--green-700)",
    style: {
      background: 'var(--green-700)'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, line, heart, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--fg-1)',
      whiteSpace: 'nowrap'
    }
  }, children), heart, line);
}
Object.assign(__ds_scope, { SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SectionDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const V = {
  sage: ['var(--sage-200)', 'var(--green-800)'],
  cream: ['var(--cream-50)', 'var(--fg-1)'],
  accent: ['var(--orange-500)', 'var(--white)'],
  outline: ['transparent', 'var(--brand)']
};
function Badge({
  tone = 'sage',
  icon,
  tile = false,
  children,
  style = {}
}) {
  const [bg, fg] = V[tone] || V.sage;
  if (tile) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      lineHeight: 1.2,
      textAlign: 'center',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--green-700)"
  }), children);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      border: tone === 'outline' ? '1px solid var(--border-sage)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.3,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--fg-on-accent)',
    boxShadow: 'var(--shadow-accent)',
    border: '1px solid transparent'
  },
  brand: {
    background: 'var(--brand)',
    color: 'var(--fg-on-accent)',
    boxShadow: 'var(--shadow-md)',
    border: '1px solid transparent'
  },
  soft: {
    background: 'var(--cream-50)',
    color: 'var(--fg-1)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-subtle)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand)',
    border: '1px solid var(--border-sage)'
  }
};
const H = {
  primary: 'var(--accent-hover)',
  brand: 'var(--brand-hover)',
  soft: 'var(--white)',
  ghost: 'var(--sage-100)'
};
const S = {
  sm: {
    padding: '8px 16px',
    fontSize: 13
  },
  md: {
    padding: '12px 22px',
    fontSize: 14
  },
  lg: {
    padding: '15px 28px',
    fontSize: 15
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  icon,
  iconRight,
  disabled,
  children,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = V[variant] || V.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      lineHeight: 1.2,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'background var(--dur-fast) var(--ease-soft),transform var(--dur-fast) var(--ease-soft)',
      transform: p && !disabled ? 'translateY(1px) scale(.98)' : 'none',
      ...S[size],
      ...v,
      background: h && !disabled ? H[variant] : v.background,
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  brand: ['var(--brand)', 'var(--white)', 'var(--brand-hover)'],
  accent: ['var(--accent)', 'var(--white)', 'var(--accent-hover)'],
  soft: ['var(--sage-100)', 'var(--brand)', 'var(--sage-200)'],
  ghost: ['transparent', 'var(--fg-2)', 'var(--sage-100)']
};
function IconButton({
  icon = 'plus',
  variant = 'brand',
  size = 32,
  label,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [bg, fg, hv] = V[variant] || V.brand;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || icon,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      border: 0,
      borderRadius: 'var(--radius-sm)',
      background: h ? hv : bg,
      color: fg,
      cursor: 'pointer',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * .5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  title,
  text,
  price,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: 8,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-sans)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '44%',
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0,
      padding: '6px 4px 2px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      lineHeight: 1.3,
      color: 'var(--fg-1)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.5,
      color: 'var(--fg-3)',
      marginTop: 8
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--fg-1)'
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    size: 28,
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    onClick: onAdd
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onClick,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected ? 'var(--brand)' : 'var(--border-sage)'),
      background: selected ? 'var(--brand)' : 'var(--cream-50)',
      color: selected ? 'var(--white)' : 'var(--fg-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all var(--dur-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      if (disabled) return;
      setC(!on);
      onChange && onChange(!on);
    },
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      display: 'grid',
      placeItems: 'center',
      background: on ? 'var(--brand)' : 'var(--white)',
      border: '1.5px solid ' + (on ? 'var(--brand)' : 'var(--sage-400)'),
      transition: 'all var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  action,
  onAction,
  style = {},
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const inp = /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      borderColor: f ? 'var(--orange-300)' : 'var(--border-subtle)',
      ...(action ? {
        borderRadius: 'var(--radius-md) 0 0 var(--radius-md)',
        borderRight: 0
      } : {})
    }
  }));
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-2)'
    }
  }, label), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, inp, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      flex: 'none',
      border: 0,
      padding: '0 24px',
      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
      background: 'var(--accent)',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, action)) : inp, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-2)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      cursor: 'pointer',
      paddingRight: 40,
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--fg-3) 50%),linear-gradient(135deg,var(--fg-3) 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 20px) 50%,calc(100% - 15px) 50%',
      backgroundSize: '5px 5px',
      backgroundRepeat: 'no-repeat'
    }
  }), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked,
  onChange,
  label
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)',
      cursor: 'pointer'
    },
    onClick: () => {
      setC(!on);
      onChange && onChange(!on);
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      borderRadius: 999,
      background: on ? 'var(--brand)' : 'var(--sage-300)',
      position: 'relative',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: 999,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-soft)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  cream: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-sm)'
  },
  sage: {
    background: 'var(--surface-sage)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-md)'
  },
  sageStrong: {
    background: 'var(--surface-sage-strong)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-lg)'
  },
  white: {
    background: 'var(--white)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-md)'
  }
};
function Card({
  tone = 'cream',
  radius = 'lg',
  padding = 20,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderRadius: 'var(--radius-' + radius + ')',
      padding,
      ...(T[tone] || T.cream),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  onClose,
  children,
  footer,
  width = 440
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(44,66,51,.35)',
      backdropFilter: 'blur(4px)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: 'calc(100vw - 32px)',
      background: 'var(--cream-50)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-h3)',
      color: 'var(--fg-1)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose,
    style: {
      border: 0,
      background: 'var(--sage-100)',
      width: 30,
      height: 30,
      borderRadius: 8,
      cursor: 'pointer',
      color: 'var(--fg-2)',
      fontSize: 16
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--fg-2)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 22
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [v, setV] = React.useState(defaultValue ?? items[0]);
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      borderRadius: 999,
      background: 'var(--sage-100)',
      ...style
    }
  }, items.map(it => {
    const on = it === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setV(it);
        onChange && onChange(it);
      },
      style: {
        border: 0,
        padding: '8px 18px',
        borderRadius: 999,
        background: on ? 'var(--white)' : 'transparent',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        color: on ? 'var(--fg-1)' : 'var(--fg-3)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 13,
        cursor: 'pointer',
        transition: 'all var(--dur-fast)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Toast.jsx
try { (() => {
function Toast({
  icon = 'check',
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-800)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 999,
      background: 'rgba(255,255,255,.15)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  })), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Toast.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
function Tooltip({
  text,
  children
}) {
  const [o, setO] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false)
  }, children, o && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      borderRadius: 8,
      background: 'var(--ink-900)',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none'
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function SiteHeader({
  page,
  setPage,
  onReserve,
  cart
}) {
  const {
    Button,
    Icon
  } = window.BantrumDesignSystem_e76808;
  const links = [['Меню', 'menu'], ['О нас', 'home'], ['Зёрна', 'home'], ['Доставка', 'home'], ['Контакты', 'home']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 48px',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage('home');
    },
    style: {
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1
    }
  }, "Bantrum"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)',
      marginTop: 2
    }
  }, "\u0441\u043F\u0435\u0448\u0430\u043B\u0442\u0438 \u043A\u043E\u0444\u0435")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 40
    }
  }, links.map(([l, p]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage(p);
    },
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: page === p && l === 'Меню' ? 'var(--orange-600)' : 'var(--ink-900)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, cart > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 18
  }), cart), /*#__PURE__*/React.createElement(Button, {
    pill: true,
    size: "sm",
    onClick: onReserve
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u043E\u043B\u0438\u043A")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  setPage
}) {
  const {
    Button,
    Badge,
    FeatureItem
  } = window.BantrumDesignSystem_e76808;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 24,
      padding: '20px 48px 70px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -60,
      top: -90,
      width: '62%',
      height: 'calc(100% + 90px)',
      background: 'var(--sage-300)',
      borderRadius: '38% 0 0 46% / 30% 0 0 60%',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--text-hero)',
      fontSize: 52,
      color: 'var(--ink-900)'
    }
  }, "\u041A\u043E\u0444\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043B\u044E\u0431\u043B\u044F\u0435\u0448\u044C\u0441\u044F \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0433\u043B\u043E\u0442\u043A\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--fg-2)',
      margin: '22px 0 30px',
      maxWidth: 380
    }
  }, "\u0421\u043F\u0435\u0448\u0430\u043B\u0442\u0438 \u043A\u043E\u0444\u0435, \u0441\u0432\u0435\u0436\u0430\u044F \u0432\u044B\u043F\u0435\u0447\u043A\u0430 \u0438 \u0443\u044E\u0442\u043D\u0430\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430 \u0432 \u0441\u0430\u043C\u043E\u043C \u0441\u0435\u0440\u0434\u0446\u0435 \u0433\u043E\u0440\u043E\u0434\u0430."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setPage('menu')
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043C\u0435\u043D\u044E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    compact: true,
    icon: "leaf",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0421\u043F\u0435\u0448\u0430\u043B\u0442\u0438", /*#__PURE__*/React.createElement("br", null), "\u043A\u043E\u0444\u0435")
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    compact: true,
    icon: "heart",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0421\u0434\u0435\u043B\u0430\u043D\u043E", /*#__PURE__*/React.createElement("br", null), "\u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E")
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    compact: true,
    icon: "coffee",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0423\u044E\u0442", /*#__PURE__*/React.createElement("br", null), "\u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-latte-croissant.jpg",
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: 32,
      display: 'block',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tile: true,
    icon: "leaf",
    tone: "sage",
    style: {
      position: 'absolute',
      right: 20,
      bottom: 20
    }
  }, "100%", /*#__PURE__*/React.createElement("br", null), "\u0430\u0440\u0430\u0431\u0438\u043A\u0430")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuPage.jsx
try { (() => {
function MenuPage({
  onAdd
}) {
  const {
    Tabs,
    ProductCard,
    SectionDivider
  } = window.BantrumDesignSystem_e76808;
  const [tab, setTab] = React.useState('Напитки');
  const A = '../../assets/images/';
  const items = tab === 'Напитки' ? window.DRINKS.map(([i, t, d, p]) => [i, t, d, p]) : window.PASTRY;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    style: {
      marginBottom: 22
    }
  }, "\u041C\u0435\u043D\u044E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Напитки', 'Десерты'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, items.map(([i, t, d, p]) => /*#__PURE__*/React.createElement(ProductCard, {
    key: i,
    image: A + i + '.jpg',
    title: t,
    text: d,
    price: p,
    onAdd: () => onAdd(typeof t === 'string' ? t : 'Десерт')
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--fg-3)',
      margin: '24px 0 0'
    }
  }, "\u041F\u043E\u043B\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043C\u0430\u043A\u0435\u0442 \u2014 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0433\u043B\u0430\u0432\u043D\u043E\u0439."));
}
function ReserveDialog({
  open,
  onClose,
  onDone
}) {
  const {
    Dialog,
    Button,
    Input,
    Select,
    Checkbox
  } = window.BantrumDesignSystem_e76808;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    title: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u043E\u043B\u0438\u043A",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(Button, {
      onClick: onDone
    }, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u0410\u043D\u043D\u0430"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u0413\u043E\u0441\u0442\u0435\u0439",
    options: ['2 гостя', '3 гостя', '4 гостя']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0412\u0440\u0435\u043C\u044F",
    options: ['10:00', '12:00', '18:00']
  })), /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true,
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439"
  })));
}
Object.assign(window, {
  MenuPage,
  ReserveDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const A = '../../assets/images/';
const DRINKS = [['drink-latte', 'Латте', 'Нежный и сливочный', '250 ₽'], ['drink-matcha', 'Матча Латте', 'Зелёная гармония', '280 ₽'], ['drink-iced', 'Айс Фильтр', 'Освежающий и лёгкий', '260 ₽']];
const PASTRY = [['pastry-croissant', /*#__PURE__*/React.createElement(React.Fragment, null, "\u041A\u0440\u0443\u0430\u0441\u0441\u0430\u043D", /*#__PURE__*/React.createElement("br", null), "\u0441 \u043C\u0438\u043D\u0434\u0430\u043B\u0451\u043C"), 'Хрустящий снаружи, нежный внутри.', '220 ₽'], ['pastry-cheesecake', /*#__PURE__*/React.createElement(React.Fragment, null, "\u0427\u0438\u0437\u043A\u0435\u0439\u043A", /*#__PURE__*/React.createElement("br", null), "\u0441 \u044F\u0433\u043E\u0434\u0430\u043C\u0438"), 'Нежный десерт с сезонными ягодами.', '260 ₽'], ['pastry-cookie', /*#__PURE__*/React.createElement(React.Fragment, null, "\u041F\u0435\u0447\u0435\u043D\u044C\u0435", /*#__PURE__*/React.createElement("br", null), "\u0441 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043C"), 'Тёплое, мягкое и очень шоколадное.', '160 ₽']];
function Features() {
  const {
    FeatureItem
  } = window.BantrumDesignSystem_e76808;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32,
      padding: '10px 64px 44px'
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "sprout",
    title: "\u041E\u0442\u0431\u043E\u0440\u043D\u044B\u0435 \u0437\u0451\u0440\u043D\u0430",
    text: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0438\u044F\u043C\u0438 \u0438 \u0441\u043F\u0435\u0448\u0430\u043B\u0442\u0438 \u043B\u043E\u0442\u0430\u043C\u0438."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "flame",
    title: "\u0421\u0432\u0435\u0436\u0430\u044F \u043E\u0431\u0436\u0430\u0440\u043A\u0430",
    text: "\u041E\u0431\u0436\u0430\u0440\u0438\u0432\u0430\u0435\u043C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u043C\u0438 \u043F\u0430\u0440\u0442\u0438\u044F\u043C\u0438 \u043A\u0430\u0436\u0434\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "user-round",
    title: "\u041E\u043F\u044B\u0442\u043D\u044B\u0435 \u0431\u0430\u0440\u0438\u0441\u0442\u0430",
    text: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0433\u043E\u0442\u043E\u0432\u044F\u0442 \u0441 \u0434\u0443\u0448\u043E\u0439 \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435\u043C."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "coffee",
    title: "\u0423\u044E\u0442\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",
    text: "\u0421\u0432\u0435\u0442\u043B\u043E, \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0438 \u0432\u043A\u0443\u0441\u043D\u043E \u2014 \u0432\u0430\u0448\u0435 \u043C\u0435\u0441\u0442\u043E \u0441\u0438\u043B\u044B."
  }));
}
function Drinks({
  setPage,
  onAdd
}) {
  const {
    Card,
    Button,
    DrinkCard
  } = window.BantrumDesignSystem_e76808;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "sageStrong",
    radius: "xl",
    padding: "32px 28px",
    style: {
      display: 'grid',
      gridTemplateColumns: '220px repeat(3,1fr)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--text-h2)',
      fontSize: 28,
      color: 'var(--ink-900)'
    }
  }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043D\u0430\u043F\u0438\u0442\u043A\u0438"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--ink-700)',
      margin: '10px 0 26px'
    }
  }, "\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 \u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441."), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: () => setPage('menu')
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0451 \u043C\u0435\u043D\u044E")), DRINKS.map(([i, t, d, p], k) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: k ? '1px solid rgba(255,255,255,.35)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(DrinkCard, {
    image: A + i + '.jpg',
    title: t,
    text: d,
    price: p,
    onClick: () => onAdd(t)
  })))));
}
function Recommend({
  onAdd
}) {
  const {
    SectionDivider,
    ProductCard
  } = window.BantrumDesignSystem_e76808;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    style: {
      marginBottom: 20
    }
  }, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, PASTRY.map(([i, t, d, p]) => /*#__PURE__*/React.createElement(ProductCard, {
    key: i,
    image: A + i + '.jpg',
    title: t,
    text: d,
    price: p,
    onAdd: () => onAdd('Десерт')
  }))));
}
function Beans() {
  const {
    Card,
    Button,
    Icon
  } = window.BantrumDesignSystem_e76808;
  const perk = (ic, t) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      textAlign: 'center',
      fontSize: 11,
      lineHeight: 1.35,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: "var(--green-800)"
  }), /*#__PURE__*/React.createElement("span", null, t));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "sage",
    radius: "xl",
    padding: 0,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 32px 28px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--text-h2)',
      color: 'var(--ink-900)'
    }
  }, "\u0417\u0451\u0440\u043D\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u0433\u043E\u0440\u0434\u0438\u043C\u0441\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--ink-700)',
      margin: '14px 0 26px',
      maxWidth: 360
    }
  }, "\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u043C, \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u043B\u0443\u0447\u0448\u0435\u0435, \u043E\u0431\u0436\u0430\u0440\u0438\u0432\u0430\u0435\u043C \u0441 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435\u043C \u043A \u0434\u0435\u0442\u0430\u043B\u044F\u043C \u0438 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u043C \u0432\u043A\u0443\u0441 \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u0447\u0430\u0448\u043A\u0435."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    pill: true
  }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0437\u0451\u0440\u043D\u0430"), perk('mountain', /*#__PURE__*/React.createElement(React.Fragment, null, "\u041F\u0440\u044F\u043C\u044B\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438", /*#__PURE__*/React.createElement("br", null), "\u043E\u0442 \u0444\u0435\u0440\u043C\u0435\u0440\u043E\u0432")), perk('flame', /*#__PURE__*/React.createElement(React.Fragment, null, "\u041E\u0431\u0436\u0430\u0440\u043A\u0430", /*#__PURE__*/React.createElement("br", null), "\u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437")), perk('package', /*#__PURE__*/React.createElement(React.Fragment, null, "\u0421\u0432\u0435\u0436\u0435\u0441\u0442\u044C", /*#__PURE__*/React.createElement("br", null), "\u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u0430\u0447\u043A\u0435")))), /*#__PURE__*/React.createElement("img", {
    src: A + 'beans-bag.jpg',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '90px 0 0 0'
    }
  })));
}
function Footer({
  onSubscribe
}) {
  const {
    Card,
    Input,
    Icon
  } = window.BantrumDesignSystem_e76808;
  const [v, setV] = React.useState('');
  const row = (ic, t) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 12,
      color: 'var(--ink-700)',
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: "var(--green-700)"
  }), /*#__PURE__*/React.createElement("span", null, t));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    radius: "xl",
    padding: "26px 40px",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1.2fr 160px',
      gap: 36,
      alignItems: 'center',
      background: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      font: 'var(--text-h3)',
      fontSize: 18
    }
  }, "\u0416\u0434\u0451\u043C \u0432\u0430\u0441 \u0432 \u0433\u043E\u0441\u0442\u0438!"), row('map-pin', /*#__PURE__*/React.createElement(React.Fragment, null, "\u0443\u043B. \u0411\u043E\u043B\u044C\u0448\u0430\u044F \u041D\u0438\u043A\u0438\u0442\u0441\u043A\u0430\u044F, 12", /*#__PURE__*/React.createElement("br", null), "\u041C\u043E\u0441\u043A\u0432\u0430")), row('clock', 'Ежедневно  08:00 – 21:00'), row('phone', '+7 (495) 123-45-67')), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--border-subtle)',
      alignSelf: 'stretch'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 18px',
      font: 'var(--text-h3)',
      fontSize: 18
    }
  }, "\u0411\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439", /*#__PURE__*/React.createElement("br", null), "\u0438 \u0441\u043F\u0435\u0446\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u0412\u0430\u0448 e-mail",
    action: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
    value: v,
    onChange: e => setV(e.target.value),
    onAction: () => {
      onSubscribe();
      setV('');
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: A + 'cafe-line-illustration.jpg',
    alt: "",
    style: {
      width: '100%',
      mixBlendMode: 'multiply'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 24px 20px',
      fontSize: 11,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, ['send', 'message-circle', 'instagram'].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: i,
    size: 16
  }))), /*#__PURE__*/React.createElement("span", null, "\xA9 Bantrum, 2024"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("span", null, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F"))));
}
Object.assign(window, {
  Features,
  Drinks,
  Recommend,
  Beans,
  Footer,
  DRINKS,
  PASTRY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DrinkCard = __ds_scope.DrinkCard;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionDivider = __ds_scope.SectionDivider;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
