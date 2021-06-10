class Animal{
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
    emitirSom():void{}
}
class Gato extends Animal{
    constructor(nome:string){
        super(nome)
    }
    emitirSom():void{
        alert(`O Gato: ${this.nome} está miando`);   
    }
}
class Pato extends Animal{
    constructor(nome:string){
        super(nome)
    }
    emitirSom():void{
        alert(`O Pato: ${this.nome} está fazndo Quack Quack`);   
    }
}
class Cachorro extends Animal{
    constructor(nome:string){
        super(nome)
    }
    emitirSom():void{
        alert(`O Cachorro: ${this.nome} está Latindo`);   
    }
}