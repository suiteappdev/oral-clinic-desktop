webpackHotUpdate("static/development/pages/main.js",{

/***/ "./components/Navigator.js":
/*!*********************************!*\
  !*** ./components/Navigator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "../node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Drawer */ "../node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "../node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "../node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "../node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "../node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Home */ "../node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/People */ "../node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_DnsRounded__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/DnsRounded */ "../node_modules/@material-ui/icons/DnsRounded.js");
/* harmony import */ var _material_ui_icons_DnsRounded__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DnsRounded__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_PhotoSizeSelectActual__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/PhotoSizeSelectActual */ "../node_modules/@material-ui/icons/PhotoSizeSelectActual.js");
/* harmony import */ var _material_ui_icons_PhotoSizeSelectActual__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoSizeSelectActual__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Public */ "../node_modules/@material-ui/icons/Public.js");
/* harmony import */ var _material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_SettingsEthernet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/SettingsEthernet */ "../node_modules/@material-ui/icons/SettingsEthernet.js");
/* harmony import */ var _material_ui_icons_SettingsEthernet__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SettingsEthernet__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_SettingsInputComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/SettingsInputComponent */ "../node_modules/@material-ui/icons/SettingsInputComponent.js");
/* harmony import */ var _material_ui_icons_SettingsInputComponent__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SettingsInputComponent__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Timer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Timer */ "../node_modules/@material-ui/icons/Timer.js");
/* harmony import */ var _material_ui_icons_Timer__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Timer__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Settings */ "../node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_PhonelinkSetup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/PhonelinkSetup */ "../node_modules/@material-ui/icons/PhonelinkSetup.js");
/* harmony import */ var _material_ui_icons_PhonelinkSetup__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhonelinkSetup__WEBPACK_IMPORTED_MODULE_21__);






















var categories = [{
  id: 'Develop',
  children: [{
    id: 'Authentication',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13___default.a, null),
    active: true
  }, {
    id: 'Database',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_DnsRounded__WEBPACK_IMPORTED_MODULE_14___default.a, null)
  }, {
    id: 'Storage',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_PhotoSizeSelectActual__WEBPACK_IMPORTED_MODULE_15___default.a, null)
  }, {
    id: 'Hosting',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_16___default.a, null)
  }, {
    id: 'Functions',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_SettingsEthernet__WEBPACK_IMPORTED_MODULE_17___default.a, null)
  }, {
    id: 'ML Kit',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_SettingsInputComponent__WEBPACK_IMPORTED_MODULE_18___default.a, null)
  }]
}, {
  id: 'Quality',
  children: [{
    id: 'Analytics',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_20___default.a, null)
  }, {
    id: 'Performance',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Timer__WEBPACK_IMPORTED_MODULE_19___default.a, null)
  }, {
    id: 'Test Lab',
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_PhonelinkSetup__WEBPACK_IMPORTED_MODULE_21___default.a, null)
  }]
}];

var styles = function styles(theme) {
  return {
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)'
      }
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white
    },
    itemActiveItem: {
      color: '#4fc3f7'
    },
    itemPrimary: {
      fontSize: 'inherit'
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2)
    },
    divider: {
      marginTop: theme.spacing(2)
    }
  };
};

function Navigator(props) {
  var classes = props.classes,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "permanent"
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disablePadding: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.firebase, classes.item, classes.itemCategory)
  }, "Paperbase"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.item, classes.itemCategory)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.itemIcon
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default.a, null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    classes: {
      primary: classes.itemPrimary
    }
  }, "Project Overview")), categories.map(function (_ref) {
    var id = _ref.id,
        children = _ref.children;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: id
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.categoryHeader
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      classes: {
        primary: classes.categoryHeaderPrimary
      }
    }, id)), children.map(function (_ref2) {
      var childId = _ref2.id,
          icon = _ref2.icon,
          active = _ref2.active;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: childId,
        button: true,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.item, active && classes.itemActiveItem)
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.itemIcon
      }, icon), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
        classes: {
          primary: classes.itemPrimary
        }
      }, childId));
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.divider
    }));
  })));
}

Navigator.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(Navigator));

/***/ })

})
//# sourceMappingURL=main.js.ddb6827d7b91cd49cbdd.hot-update.js.map