// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura

// paddington, LIVRE, fantasia, aventura

// as aventuras de pi, 10, drama, fantasia, aventura

// depois da chuva, 10, drama

// guardiões da galáxia, 12, fantasia, aventura

// ladrões de bicicleta, 12, drama

// o menino que descobriu o vento, 14, drama
function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

// Código omitido

function draw() {
  background("rgb(235,128,128)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

    fill(color(30, 78, 115))
    textAlign(CENTER, CENTER)
    textSize(38);
    text(recomendacao, width / 2, height / 2);
  
}

// código omitido


function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {

// Trecho de código suprimido

    if(idade >= 10) {
        if(idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
          if(idade >= 12) {
            if(gostaDeFantasia || gostaDeAventura){
              return "Homen-aranha: no aranhaverso"              
            } else {                       
            return "Ladrões de bicicleta"
            }
            } else {
            if(gostaDeFantasia){
                return "As aventuras de Pi";
            } else {
                return "Depois da chuva";
            }
          }
        }
    } else {
        if(gostaDeFantasia) {
            return "A viagem de Chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}
