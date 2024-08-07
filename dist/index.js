import React, { useState, useEffect } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function Label(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick,
    classes = _ref.classes;
  return /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-250 " + classes,
    onClick: onClick
  }, label);
}

var img$3 = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.41402 11.8692C4.76844 11.1036 6.3332 10.6667 8 10.6667C9.6668 10.6667 11.2316 11.1036 12.586 11.8692M10 6.66667C10 7.77124 9.10457 8.66667 8 8.66667C6.89543 8.66667 6 7.77124 6 6.66667C6 5.5621 6.89543 4.66667 8 4.66667C9.10457 4.66667 10 5.5621 10 6.66667ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z' stroke='%236B7280' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.16665 12.5L9.99998 6.66667L15.8333 12.5' stroke='black' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.8333 7.50001L10 13.3333L4.16666 7.50001' stroke='%236B7280' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.33337 8.66666L6.00004 11.3333L12.6667 4.66666' stroke='%230E7490' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

function DropdownMenu(_ref) {
  var legend = _ref.legend,
    options = _ref.options,
    match = _ref.match;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    optionSelected = _useState4[0],
    setOptionSelected = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    listOptions = _useState6[0],
    setListOptions = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    listFiltered = _useState8[0],
    setListFiltered = _useState8[1];
  useEffect(function () {
    if (options.length > 0) {
      var filtered = options.sort(function (a, b) {
        return a.localeCompare(b);
      });
      setListOptions(filtered);
    }
  }, [options]);
  var doSearch = function doSearch(search) {
    var filtered = listOptions.filter(function (option) {
      return option.startsWith(search);
    });
    setListFiltered(filtered);
  };
  var selectOption = function selectOption(option) {
    if (match.length > 0 && option !== match) {
      setTimeout(function () {
        setOpen(false);
      }, [400]);
      return;
    }
    setOptionSelected(option);
    var selected = options.filter(function (item) {
      return item !== option;
    });
    selected.unshift(option);
    setListOptions(selected);
    setTimeout(function () {
      setOpen(false);
    }, [400]);
  };
  var MenuOptions = function MenuOptions(_ref2) {
    var option = _ref2.option,
      index = _ref2.index;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "flex flex-row p-2 cursor-pointer hover:font-bold relative",
      onClick: function onClick() {
        return selectOption(option);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img$3,
      className: "mr-2",
      alt: "Icono de Usuario"
    }), /*#__PURE__*/React.createElement(Label, {
      label: option,
      classes: optionSelected === option ? "text-primary-400 font-bold" : "text-primary-400"
    }), optionSelected === option ? /*#__PURE__*/React.createElement("img", {
      src: img,
      className: "absolute top-2 right-4",
      alt: "Icono de Check"
    }) : null);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-solid border-gray-150 relative hover:shadow-md w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-2 px-4 flex flex-row cursor-pointer relative"
  }, !optionSelected && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, {
    label: legend,
    classes: isOpen ? "absolute bottom-8 left-2 bg-white p-1" : "p-0",
    onClick: function onClick() {
      return setOpen(!isOpen);
    }
  })), isOpen && !optionSelected && /*#__PURE__*/React.createElement("input", {
    type: "search",
    className: "inline-block px-2 w-11/12 border border-solid border-gray-150",
    onKeyDown: function onKeyDown(evt) {
      return doSearch(evt.target.value);
    }
  }), optionSelected && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, {
    label: optionSelected,
    onClick: function onClick() {
      return setOpen(!isOpen);
    },
    classes: ""
  }), /*#__PURE__*/React.createElement(Label, {
    label: "x",
    onClick: function onClick() {
      return setOptionSelected("");
    },
    classes: "text-gray-500 cursor-pointer ml-3"
  })), /*#__PURE__*/React.createElement("button", {
    id: "menu-button",
    type: "button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    className: "absolute top-2 right-5",
    onClick: function onClick() {
      return setOpen(!isOpen);
    }
  }, isOpen ? /*#__PURE__*/React.createElement("img", {
    src: img$2,
    alt: "Icono de mostrar menu"
  }) : /*#__PURE__*/React.createElement("img", {
    src: img$1,
    alt: "Icono de colapsar men\xFA"
  }))), isOpen && /*#__PURE__*/React.createElement("div", {
    role: "menu",
    "aria-labelledby": "menu-button",
    tabIndex: "-1",
    className: "absolute bg-white top-12 left-0 right-0 flex flex-col p-2 border border-solid rounded-lg border-gray-150 hover:shadow-md"
  }, listFiltered.length > 0 ? listFiltered === null || listFiltered === void 0 ? void 0 : listFiltered.map(function (option, index) {
    return /*#__PURE__*/React.createElement(MenuOptions, {
      option: option,
      key: index
    });
  }) : listOptions === null || listOptions === void 0 ? void 0 : listOptions.map(function (option, index) {
    return /*#__PURE__*/React.createElement(MenuOptions, {
      option: option,
      key: index
    });
  }))), match && /*#__PURE__*/React.createElement(Label, {
    label: "Solo podr\xE1s elegir a ".concat(match, " para continuar"),
    classes: "text-xs mt-1 text-gray-250"
  }));
}

export { DropdownMenu };
