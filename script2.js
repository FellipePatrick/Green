let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");
let x, y = 0, z = 0;
const imagem = new Image();
imagem.src = "water.png";
const imagemA = new Image();
imagemA.src = "arvore.png";
let i = 0;
document.addEventListener("keydown", function(event) {
    const drawFrame = () => {
     // Limpar o canvas em cada quadro
        if (i <= 200) {
            if(i == 0){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(imagem, i, 0, 150, 150, y, z+30, 100, 100);
            }else if(i == 200){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(imagem, i, 0, 150, 150, y, z+30, 100, 100);          
            }
            i+=200;
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imagemA, 20, 20, 100, 100, y+10, z, 120, 120);
        }
        
        setTimeout(() => {
            requestAnimationFrame(drawFrame); // Chamar novamente para criar uma animação contínua com atraso de 2000 ms (2 segundos)
        }, 2000);
    }

     
});
