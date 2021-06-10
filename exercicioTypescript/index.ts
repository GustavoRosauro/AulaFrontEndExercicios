class Animal{
    nome:string;
    constructor(nome){
        this.nome = nome;
    }
    emitirSom():void{}
}

class Gato extends Animal{
    constructor(nome:string){
        super(nome);
    }
    emitirSom():void{
        alert(`Gato: ${this.nome} faz miau`)
    }
}
class Pato extends Animal{
    constructor(nome:string){
        super(nome);
    }
    emitirSom():void{
        alert(`Pato: ${this.nome} faz Quack Quack`);
    }
}
class Cachorro extends Animal{
    constructor(nome:string){
        super(nome);
    }
    emitirSom():void{
        alert(`Cachorro: ${this.nome} Faz Auau`);
    }
}
