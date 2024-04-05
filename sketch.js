function setup() {
  createCanvas(700, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);

  mostrarAtor();

  mostrarCarro();

  movimentaAtor();
  movimentaCarro();
  verificarPosicaoDoCarro();
  verificarColisao();
  
  marcarPonto();

  mostrarPontos();
}
