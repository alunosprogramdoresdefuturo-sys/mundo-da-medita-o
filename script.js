function lugar(){

const lugares = [

"https://i.pinimg.com/736x/10/2e/fb/102efb86f89ecbdb94efbc0395e83005.jpg",

"https://images.unsplash.com/photo-1506744038136-46273834b3fb",

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"

];

let sorteio = Math.floor(Math.random()*lugares.length);

document.getElementById("imagemLugar").src = lugares[sorteio];

}

function personagem(){

const personagens = [

"https://i.pinimg.com/736x/74/08/76/74087696a82dc4fe181e600fcdf2656c.jpg",

"https://i.pinimg.com/736x/3c/fd/8e/3cfd8e1452d5f2d979fd856f889c1e77.jpg"

];

let sorteio = Math.floor(Math.random()*personagens.length);

document.getElementById("imagemPersonagem").src = personagens[sorteio];

}

function mundo(){

alert("✨ Seu mundo de meditação foi criado com sucesso!");
}
function respiracao444(){

const texto = document.getElementById("instrucao");

texto.innerHTML = "Inspire por 4 segundos...";

setTimeout(()=>{
texto.innerHTML = "Segure por 4 segundos...";
},4000);

setTimeout(()=>{
texto.innerHTML = "Expire por 4 segundos...";
},8000);

setTimeout(()=>{
texto.innerHTML = "Exercício concluído! 🌸";
},12000);

}

function iniciarTimer(){

let tempo = 60;

const contador = document.getElementById("contador");

const intervalo = setInterval(()=>{

tempo--;

contador.innerHTML = tempo;

if(tempo <= 0){

clearInterval(intervalo);

contador.innerHTML = "🌸 Concluído";

}

},1000);

}