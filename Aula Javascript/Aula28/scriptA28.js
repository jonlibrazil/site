class Veiculo{
    constructor(fabricante,modelo,ano,tipo,qtdPortas){
        this.fabricante = fabricante; // Propriedade da Classe
        this.modelo = modelo; // Propriedade da Classe
        this.ano = ano; // Propriedade da Classe
        this.tipo = tipo; // Propriedade da Classe
        this.qtdPortas = qtdPortas; // Propriedade da Classe
    }

    mostrarDadosDoVeiculo(){
        console.log(`${this.fabricante} ${this.modelo} ${this.ano} (${this.tipo}), ${this.qtdPortas} portas.`);
    }

    mostrarModelo(){ 
        console.log(`O modelo do carro é ${this.modelo}.`);
    }

    acelerar(){
        console.log(`Acelerando...`)
    }

}

class Produto {
    constructor(nome,preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDadosProduto(){
        console.log(`${this.nome} R$${this.preco}`);
    }
}


class Eletronico extends Produto {
    constructor(nome,preco,garantia){
        super(nome,preco);
        this.garantia = garantia;
    }

    mostrarDadosProduto(){
        console.log(`${this.nome} R$${this.preco} ${this.garantia} de garantia.`);

    }
}

const bananaProduto = new Produto ('Banana','5,99');
const iphoneProduto = new Eletronico ('Iphone','15.000,00','1 ano')
bananaProduto.mostrarDadosProduto();
iphoneProduto.mostrarDadosProduto();

class Moto extends Veiculo {
    constructor(fabricante,modelo,ano,cilindradas){
        super(fabricante,modelo,ano);
        this.cilindradas = cilindradas;
    }

    mostrarDadosDoVeiculo(){
        console.log(`${this.fabricante} ${this.modelo} ${this.ano}, ${this.cilindradas} cilindradas.`);
    }    
}

class Carro extends Veiculo {
    constructor(fabricante,modelo,ano,tipo,qtdPortas){
        super(fabricante,modelo,ano,tipo,qtdPortas);
    }   
}

// class Carro {
//     constructor(fabricante,modelo,ano,tipo,qtdPortas){
//         this.fabricante = fabricante; // Propriedade da Classe
//         this.modelo = modelo; // Propriedade da Classe
//         this.ano = ano; // Propriedade da Classe
//         this.tipo = tipo; // Propriedade da Classe
//         this.qtdPortas = qtdPortas; // Propriedade da Classe
//     }

//     mostrarDadosCarro(){
//         console.log(`${this.fabricante} ${this.modelo} ${this.ano} (${this.tipo}), ${this.qtdPortas} portas.`);
//     }

//     mostrarModelo(){ 
//         console.log(`O modelo do carro é ${this.modelo}.`);
//     }

//     acelerar(){
//         console.log(`Acelerando...`)
//     }
// }

const meuCarro = new Carro('Ford','Ka','2008','Hatch',4);
const minhaMoto = new Moto('Yamaha','Fazer',2013,250);
// meuCarro.mostrarDadosCarro();
meuCarro.mostrarModelo();
meuCarro.acelerar();
// minhaMoto.mostrarDadosMoto();
meuCarro.mostrarDadosDoVeiculo();
minhaMoto.mostrarDadosDoVeiculo();
minhaMoto.mostrarModelo();









// const meuCarro = new Carro('Ford');
// const meuCarro2 = new Carro('Toyota');
// meuCarro.mostrarMarca();
// meuCarro2.mostrarMarca();
