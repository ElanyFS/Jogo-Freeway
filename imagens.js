//  Variaveis de armazenamento do caminho da imagem Jogo(Freeway)
let imagemDaEstrada;

let imagemAtor;

let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarro7;
let imagemCarro8;

let imagemVida;

let somTrilha;
let somPontos;
let somColidiu;

function preload() {
  trilhaSonora = loadSound("sons/trilha.mp3");

  imagemDaEstrada = loadImage("imagens/estrada.png");

  imagemAtor = loadImage("imagens/ator-1.png");

  // imagemVida = loadImage("imagens/coracaoVida.jpg");

  imagemCarro1 = loadImage("imagens/car-amarelo.png");
  imagemCarro2 = loadImage("imagens/car-azul.png");
  imagemCarro3 = loadImage("imagens/car-branco.png");
  imagemCarro4 = loadImage("imagens/car-laranja.png");
  imagemCarro5 = loadImage("imagens/car-roxo.png");
  imagemCarro6 = loadImage("imagens/car-verde.png");
  imagemCarro7 = loadImage("imagens/car-verdeEscuro.png");
  imagemCarro8 = loadImage("imagens/car-vermelho.png");

  imagensList = [
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
    imagemCarro4,
    imagemCarro5,
    imagemCarro6,
    imagemCarro7,
    imagemCarro8,
    imagemCarro5, 
    imagemCarro7,
    imagemCarro3,
    imagemCarro4,
    imagemCarro5, 
    imagemCarro1,
    imagemCarro2,
    imagemCarro8,
  ];

  somTrilha = loadSound("sons/trilha.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somColidiu = loadSound("sons/colidiu.mp3");
}
