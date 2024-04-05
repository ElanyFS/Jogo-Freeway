let xAtor = 200;
let yAtor = 369;
let colisao = false;

let pontos = 0;
let vidas = 3;

function mostrarAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 2;
  }

  yAtor = constrain(yAtor, 5, 369);
}

function verificarColisao() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

  for (let i = 0; i < xCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );

    if (colisao) {
      if (quantidadeDePontos()) {
        pontos--;
      }
      voltaParaPosicaoInicial();
      somColidiu.play();
    }
  }
}

function voltaParaPosicaoInicial() {
  yAtor = 369;
}

function quantidadeDePontos() {
  return pontos > 0;
}

function marcarPonto() {
  if (yAtor < 10) {
    pontos++;
    voltaParaPosicaoInicial();
    somPontos.play();
  }
}

function mostrarPontos() {
  textAlign(CENTER);
  textSize(30);
  fill(color(220, 20, 60));
  text(pontos, 600, 27);
}


function mostrarVida(){
  textAlign(CENTER);
  textSize(30);
  fill(color(220, 20, 60));
  text(vidas, 100, 27);
}