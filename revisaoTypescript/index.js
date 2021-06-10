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
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.emitirSom = function () { };
    return Animal;
}());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome) {
        return _super.call(this, nome) || this;
    }
    Gato.prototype.emitirSom = function () {
        alert("O Gato: " + this.nome + " est\u00E1 miando");
    };
    return Gato;
}(Animal));
var Pato = /** @class */ (function (_super) {
    __extends(Pato, _super);
    function Pato(nome) {
        return _super.call(this, nome) || this;
    }
    Pato.prototype.emitirSom = function () {
        alert("O Pato: " + this.nome + " est\u00E1 fazndo Quack Quack");
    };
    return Pato;
}(Animal));
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome) {
        return _super.call(this, nome) || this;
    }
    Cachorro.prototype.emitirSom = function () {
        alert("O Cachorro: " + this.nome + " est\u00E1 Latindo");
    };
    return Cachorro;
}(Animal));
