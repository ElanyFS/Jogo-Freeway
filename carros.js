// Carro 1
let xCarros = [
  700, 960, 1200, 710, 990, 1220, 720, 990, 1230, 700, 980, 1250, 780, 960,
  1300, 960,
];
let yCarros = [
  320, 320, 320, 155, 155, 155, 215, 215, 215, 100, 100, 100, 40, 40, 40, 270,
];
let velocidades = [
  2.7, 2.7, 2.7, 3.2, 3.2, 3.2, 3.9, 3.9, 3.9, 2.6, 2.6, 2.6, 2.5, 2.5, 2.5, 5,
];

let comprimentoCarro = 60;
let alturaCarro = 30;

function mostrarCarro() {
  for (let i = 0; i < imagensList.length; i++) {
    image(
      imagensList[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro
    );
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidades[i];
  }
}

function verificarPosicaoDoCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    if (xCarros[i] < -50) {
      xCarros[i] = yCarros[i] + 900;
    }
  }
}

// let xCarros = [700, 720, 730, 740, 750, 760, 770, 780, 790];
// let yCarros = [270, 270, 155, 40, 40, 215, 215, 100, 100, 155];
// let velocidades = [2.1, 2.5, 2.3, 2.1, 2.1, 3.1, 2.1, 2.7, 2.2, 2.7];
