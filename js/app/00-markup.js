var Markup = /** @class */ (function () {
    function Markup() {
    }
    Markup.prototype.dlr = function (e) {
        return $(e);
    };
    Markup.prototype.create = function (elementName, appendTo) {
        if (appendTo === void 0) { appendTo = null; }
        var element = document.createElement(elementName);
        if (appendTo == null)
            document.body.appendChild(element);
        else
            $(appendTo).append(element);
        return element;
    };
    Markup.prototype.createJq = function (elementName, appendTo) {
        if (appendTo === void 0) { appendTo = null; }
        return $(this.create(elementName, appendTo));
    };
    return Markup;
}());
