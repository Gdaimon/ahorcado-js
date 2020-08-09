(async (palabras, letras) => {
  const $divAbecedario = document.querySelector('#letras');
  const $palabraOculta = document.querySelector('h1');
  let palabra = generarPalabraRandom();
  let palabraOculta = '_ '.repeat(palabra.length);
  let intentos = 0;

  // Listener
  eventListeners();
  function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarAplicacion);
    $divAbecedario.addEventListener('click', seleccionLetra);
  }

  function generarPalabraRandom() {
    const indice = Math.floor(
      Math.random() * (palabras.length - 1 - 0 + 1) + 0,
    );
    return palabras[indice].toUpperCase();
  }

  function existeLetra(letra) {
    if (palabra.indexOf(letra) < 0) {
      dibujarImagen(intentos++);
    }
  }

  function dibujarImagen(numero) {
    const img = document.querySelector('img');
    if (numero === '') {
      img.src = `img/0.png`;
    } else {
      img.src = `img/${intentos}.png`;
    }
  }

  function actualizaNumeroIntentos(intento, texto) {
    const small = document.querySelector('small');
    small.textContent = `${intento} / 9`;
  }

  function validarCoicidenciaLetra(letra) {
    if (intentos < 9) {
      existeLetra(letra);
      actualizaNumeroIntentos(intentos, palabra);
      const arregloTemporal = $palabraOculta.textContent.trim().split(' ');

      for (let indice = 0; indice <= palabra.length; ++indice) {
        if (palabra[indice] === letra) {
          arregloTemporal[indice] = letra;
        }
      }
      $palabraOculta.textContent = arregloTemporal.join(' ');
      verificaGane();
    }
  }

  function verificaGane() {
    if (intentos > 8) {
      const div = document.querySelector('#perdio');
      div.classList.remove('d-none');
    }
    const palabraEvaluar = $palabraOculta.textContent
      .trim()
      .split(' ')
      .join('');
    if (palabraEvaluar === palabra) {
      const div = document.querySelector('#gano');
      div.classList.remove('d-none');
    }
  }

  function seleccionLetra(e) {
    if (e.target.tagName === 'BUTTON') {
      const letra = e.target.textContent;
      validarCoicidenciaLetra(letra);
    }
  }

  function iniciarAplicacion() {
    $palabraOculta.textContent = palabraOculta;
    cargarAbecedario(letras);
    dibujarImagen('');
    actualizaNumeroIntentos(0, palabra);
  }

  function cargarAbecedario(listaLetras) {
    listaLetras.forEach((letra) => crearBoton(letra));
  }

  function crearBoton(letra) {
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = letra;
    $divAbecedario.appendChild(button);
  }
})(listaPalabra, letras);
