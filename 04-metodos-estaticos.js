// Métodos estáticos se referem apenas a CLASSE e não a instância da classe

function teste() {
  console.log('Este objeto foi criado com sucesso');
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  // Métodos de instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocaPilha() {
    console.log('Vou trocar');
  }

  static soma(x, y) {
    return x + y;
  }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);

ControleRemoto.trocaPilha();

console.log(ControleRemoto.soma(4, 7));