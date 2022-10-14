const pantalla = document.getElementById('pantalla')
const contenedorTeclas = document.querySelector('#contenedor-teclas')
let texto = ''


contenedorTeclas.addEventListener('click', (evento) => {
  /* obtener el valor de la tecla precionada */
  let teclaPrecionada = evento.target.textContent

  //comprobar el tipo de tecla
  if (evento.target.textContent == '=') {
    calcularResultado(texto)

  } else if (evento.target.textContent == 'C') {
    texto = ''
    mostrarEnPantalla('0')

  } else {
    /* agregar la nueva tecla a la pantalla */
    texto = texto + teclaPrecionada
    pantalla.textContent = texto

    mostrarEnPantalla(texto)
  }
})

// calcular resultado////////////////////
function calcularResultado(string) {
  let resultado = math.evaluate(string)
  texto = resultado

  mostrarEnPantalla(resultado)
}

//mostrar resultado en pantalla /////////
function mostrarEnPantalla(contenido) {
  pantalla.textContent = contenido
}