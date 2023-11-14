let canvas = document.getElementById("tela2");
let ctx = canvas.getContext("2d");

let imagem = new Image();
imagem.src = "./assets/img/bos.png";



imagem.onload = function() {
    // Desenha a imagem no canvas
    ctx.drawImage(imagem, 40,110, 100, 100, 0, 10, 50, 50);
};
