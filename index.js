// Variables

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

// logica
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  if (text === "") {
    // si no hay texto no hace nada
    MostrarAlerta("Escriba una tarea para listarla..")
  } else {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = text;
  li.appendChild(p);
  li.appendChild(borrar());
  ul.appendChild(li);
  input.value = "";
  empty.style.display = "none";
  }
  
});



 // Funciones

function borrar() {
  const btnBorra = document.createElement("button");

  btnBorra.textContent = "X";
  btnBorra.className = "btn-delete";

  btnBorra.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll('li');

    if (items.length === 0 ) {
      empty.style.display = "block";
    }
  });
  return btnBorra;
}
function MostrarAlerta(mensaje) {
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  alerta.classList.add("error");    
  ul.appendChild(alerta);

  //Alerta desaparece luego de x segs
  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

