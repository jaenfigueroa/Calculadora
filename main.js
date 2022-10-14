// import { evaluate } from './node_modules/mathjs'

let texto = ''

const pantalla = document.getElementById('pantalla')

document.querySelector('#contenedor-teclas').addEventListener('click', (evento) => {
  /* obtener el valor de la tecla precionada */
  let teclaPrecionada = evento.target.textContent
  /* concadenar y mostrar las nuevas teclas precionadas en al pantalla */
  texto = texto + teclaPrecionada
  pantalla.textContent = texto
})

calcularResultado()

function calcularResultado(string) {
  // let = '30+20-2'

  console.log('vaca');
  // console.log(evaluate('12+25'));

}