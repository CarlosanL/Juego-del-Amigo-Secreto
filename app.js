// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const listaAmigos = document.getElementById("listaAmigos"); 
  const nuevoAmigo = input.value.trim(); 

  if (nuevoAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (amigos.includes(nuevoAmigo)) {
    alert("El nombre ya está en la lista. Por favor, ingrese otro nombre.");
    return;
  }

  
  amigos.push(nuevoAmigo);

  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nuevoAmigo;
  listaAmigos.appendChild(nuevoElemento);

  input.value = "";
 
  console.log("Lista de amigos actualizada:", amigos);
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const resultado = document.getElementById("resultado");
  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
