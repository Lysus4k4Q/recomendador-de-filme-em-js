// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura

// paddington, LIVRE, fantasia, aventura

// as aventuras de pi, 10, drama, fantasia, aventura

// depois da chuva, 10, drama

// guardiões da galáxia, 12, fantasia, aventura

// ladrões de bicicleta, 12, drama

// o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;

function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade?")
    campoIdade = createInput("15");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
}

// Código omitido


// código omitido

function draw() {
    background("#E73F3F");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade,
gostaDeFantasia);
    fill(color(30, 78, 115))
    textAlign(CENTER, CENTER)
    textSize(38);
    text(recomendacao, width / 2, height / 2);
  
}

// código omitido



function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if(gostaDeFantasia){
                return "As aventuras de Pi";
            } else {
                return "Depois da chuva";
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