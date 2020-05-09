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
var MasterPage = /** @class */ (function (_super) {
    __extends(MasterPage, _super);
    function MasterPage() {
        var _this = _super.call(this) || this;
        _this.title = null;
        _this.title = _this.createJq('h1');
        _this.title.text("Master page says: I'm feeling like I'm happy");
        return _this;
    }
    MasterPage.init = function () {
        new MasterPage();
    };
    return MasterPage;
}(Markup));
