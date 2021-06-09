class Pessoa{
    nome:string;
    idade:number;    
     constructor(nome:string,idade:number){
         this.nome = nome;
         this.idade = idade;         
     }
falar():void{
    alert(`O Professor ${this.nome} de ${this.idade} está falando`)
}
}

class PessoaFisica extends Pessoa{
    constructor(nome:string,idade:number){
        super(nome,idade);
    }
falar():void{
    alert(`Pessoa Fisica ${this.nome} idade: ${this.idade} conversando`);
}
}