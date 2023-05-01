const formTarea = document.querySelector('.form-tarea');
const tarea = document.querySelector('.tarea');
const listaTareas = document.querySelector('.lista-tareas')

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  // creamos cada elemento que va a tener la tarea
  const li = document.createElement("li");
  const span = document.createElement("span");

  // le añadimos clases y atributos
  li.classList.add("tarea-item");
  span.classList.add("nombre-tarea");
  span.innerHTML = tarea.value;

  // los insertamos en su contenedor(li)
  li.appendChild(checkbox());
  li.appendChild(span);
  li.appendChild(creandoButtonEliminar())

  // li lo insertamos en ul
  listaTareas.appendChild(li);
  tarea.value = "";
})

// creamos el checkbox
function checkbox() {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type","checkbox");

  checkbox.addEventListener("click", isCheckboxChecked)

  return checkbox;
}

// funcion al momento de que este el checkbox marcado
function isCheckboxChecked() {
  alert("Excelente, ya completaste una tarea")
}

// creamos el boton aparte
function creandoButtonEliminar() {
  const button = document.createElement("button");
  button.innerText = "Eliminar";
  button.classList.add("eliminar-tarea");

  button.addEventListener('click', eliminarPadre);

  return button;
}

// funcion que elimina la tarea osea el li
function eliminarPadre(e) {
  const elentoPadre = e.target.parentElement;
  elentoPadre.remove();
}

