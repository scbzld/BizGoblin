'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Legend = exports.Tooltip = exports.Geom = exports.Axis = exports.Guide = exports.Coord = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Props = function () {
    function Props() {}
    return Props;
}();
;
var SubComponent = function (_super) {
    __extends(SubComponent, _super);
    function SubComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.displayName = 'SubComponent';
        return _this;
    }
    SubComponent.prototype.componentDidMount = function () {
        this.context.centralizedUpdates(this);
    };
    SubComponent.prototype.componentDidUpdate = function () {
        this.context.centralizedUpdates(this);
    };
    SubComponent.prototype.render = function () {
        return null;
    };
    SubComponent.contextTypes = {
        centralizedUpdates: PropTypes.func
    };
    return SubComponent;
}(React.Component);
;
var Coord = function (_super) {
    __extends(Coord, _super);
    function Coord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Coord';
        return _this;
    }
    return Coord;
}(SubComponent);
exports.Coord = Coord;

var Guide = function (_super) {
    __extends(Guide, _super);
    function Guide() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Guide';
        return _this;
    }
    return Guide;
}(SubComponent);
exports.Guide = Guide;

var Axis = function (_super) {
    __extends(Axis, _super);
    function Axis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Axis';
        return _this;
    }
    return Axis;
}(SubComponent);
exports.Axis = Axis;

var Geom = function (_super) {
    __extends(Geom, _super);
    function Geom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Series';
        return _this;
    }
    return Geom;
}(SubComponent);
exports.Geom = Geom;

var Tooltip = function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Tooltip';
        return _this;
    }
    return Tooltip;
}(SubComponent);
exports.Tooltip = Tooltip;

var Legend = function (_super) {
    __extends(Legend, _super);
    function Legend() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Legend';
        return _this;
    }
    return Legend;
}(SubComponent);
exports.Legend = Legend;
//# sourceMappingURL=SubComponent.js.map