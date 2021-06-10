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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.falar = function () {
        alert("O Professor " + this.nome + " de " + this.idade + " est\u00E1 falando");
    };
    return Pessoa;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    PessoaFisica.prototype.falar = function () {
        alert("Pessoa Fisica " + this.nome + " idade: " + this.idade + " conversando");
    };
    return PessoaFisica;
}(Pessoa));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    PessoaJuridica.prototype.falar = function () {
        alert("Pessoa Juridica " + this.nome + " idade: " + this.idade + " conversando");
    };
    return PessoaJuridica;
}(Pessoa));
