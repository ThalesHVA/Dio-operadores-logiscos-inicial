let vitoria = 30


switch (true) {
    case (vitoria >= 10):
         console.log("Categoria Ferro");
        break
    case (vitoria > 11 && vitoria < 20):
         console.log("Categoria Bronze");
        break
    case (vitoria > 21 && vitoria < 50):
         console.log("Categoria Prata");
        break;
    case (vitoria > 51 && vitoria < 80):
         console.log("Categoria Ouro");
        break;
    case (vitoria > 81 && vitoria < 90):
         console.log("Categoria Diamante");
        break;
    case (vitoria > 91 && vitoria < 100):
         console.log("Categoria Lendario");
        break;
   
    default:
        console.log("Valor nao encontrado em vitorias " + vitoria);
}