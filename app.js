// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloAmigos = [];

console.log(arregloAmigos);

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value
    if (amigo == ''){
        alert("Porfavor, ingrese un valor");
    }
    else{
        arregloAmigos.push(amigo);
        actualizarLista(arregloAmigos);
    }
    console.log(arregloAmigos);
    console.log(arregloAmigos.length);
    document.querySelector('#amigo').value = '';
}

function actualizarLista(listaAmigos){
    let listaHTML = document.getElementById("listaAmigos");

    listaHTML.innerHTML = "";

    for (let n = 0; n <= arregloAmigos.length; n++){

        let elementoLi = document.createElement('li');
        
        elementoLi.textContent = arregloAmigos[n];

        listaHTML.appendChild(elementoLi);

    } 
}