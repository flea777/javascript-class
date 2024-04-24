class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + ' já está ligado');
      return;
    }

    this.ligado = true;
    console.log('ligou!');
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + ' já está desligado');
      return;
    }

    this.ligado = false;
    console.log('desligou!');
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
}
