"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var ReadonlyCollection = /** @class */ (function () {
    function ReadonlyCollection() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.data = args;
    }
    ReadonlyCollection.prototype.get = function (index) {
        return this.data[index];
    };
    ReadonlyCollection.prototype.toArray = function () {
        return this.data.slice(); //return this.data.slice();
    };
    ReadonlyCollection.prototype.add = function () {
        var o = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            o[_i] = arguments[_i];
        }
        return new (ReadonlyCollection.bind.apply(ReadonlyCollection, [void 0].concat(this.data, o)))();
    };
    ReadonlyCollection.prototype.remove = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var newData = this.data.filter(function (element) {
            return args.indexOf(element) === -1;
        });
        return new (ReadonlyCollection.bind.apply(ReadonlyCollection, [void 0].concat(newData)))();
    };
    ReadonlyCollection.prototype.map = function (callback) {
        var _this = this;
        var newData = this.data.map(function (element, index) {
            return callback(element, index, _this);
        });
        return new (ReadonlyCollection.bind.apply(ReadonlyCollection, [void 0].concat(newData)))();
    };
    Object.defineProperty(ReadonlyCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return ReadonlyCollection;
}());
exports.ReadonlyCollection = ReadonlyCollection;
