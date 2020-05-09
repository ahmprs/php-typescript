var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.div_home = null;
        _this.cmp_add_one = null;
        _this.cmp_add_two = null;
        _this.div_home = _this.createJq('div');
        _this.div_home.text('This is home page');
        _this.cmp_add_one = new CmpAdd(_this.div_home);
        _this.cmp_add_two = new CmpAdd(_this.div_home);
        return _this;
    }
    Home.init = function () {
        new Home();
    };
    return Home;
}(MasterPage));
