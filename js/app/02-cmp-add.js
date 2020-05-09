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
var CmpAdd = /** @class */ (function (_super) {
    __extends(CmpAdd, _super);
    function CmpAdd(ownerElement) {
        if (ownerElement === void 0) { ownerElement = null; }
        var _this = _super.call(this, ownerElement) || this;
        _this.txtX = null;
        _this.txtY = null;
        _this.btnAdd = null;
        _this.spnResult = null;
        _this.spnResultServerSide = null;
        // TEXT BOX FOR FIRST NUMBER
        _this.txtX = _this.createJq('input', _this.div_component);
        _this.createJq('br', _this.div_component);
        // TEXT BOX FOR SECOND NUMBER
        _this.txtY = _this.createJq('input', _this.div_component);
        _this.createJq('br', _this.div_component);
        // BUTTON FOR RESULT CALCULATIONS
        _this.btnAdd = _this.createJq('button', _this.div_component);
        _this.btnAdd.text('ADD NUMBERS');
        // NEXT LINE
        _this.createJq('br', _this.div_component);
        // SPAN FOR RESULT
        _this.spnResult = _this.createJq('span', _this.div_component);
        _this.spnResult.text('RESULT');
        _this.createJq('br', _this.div_component);
        _this.spnResultServerSide = _this.createJq('span', _this.div_component);
        _this.spnResultServerSide.text('RESULT-SERVER-SIDE');
        // SET ATTRIBUTES
        _this.txtX.attr('type', 'number');
        _this.txtX.attr('placeholder', 'X = ?');
        _this.txtX.attr('min', '0');
        _this.txtX.attr('max', '100');
        _this.txtX.val(0);
        _this.txtY.attr('type', 'number');
        _this.txtY.attr('placeholder', 'Y = ?');
        _this.txtY.attr('min', '0');
        _this.txtY.attr('max', '100');
        _this.txtY.val(0);
        _this.btnAdd.on('click', function () {
            var x = parseInt(_this.txtX.val());
            var y = parseInt(_this.txtY.val());
            var z = x + y;
            _this.spnResult.text(z);
            // SERVER SIDE REQUEST GOES HERE.
            $.post('./api/add.php', { x: x, y: y }, function (d, s) {
                _this.spnResultServerSide.text(d['result']);
            });
        });
        return _this;
    }
    return CmpAdd;
}(Cmp));
