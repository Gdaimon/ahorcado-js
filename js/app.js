(async () => {
  const letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const $divAbecedario = document.querySelector('#letras');
  const $palabraOculta = document.querySelector('h1');
  let palabra = 'AGUACATE';
  let palabraOculta = '_ '.repeat(palabra.length);
  let intentos = 0;

  // Listener
  eventListeners();
  function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarAplicacion);
    $divAbecedario.addEventListener('click', seleccionLetra);
  }

  function existeLetra(letra) {
    if (palabra.indexOf(letra) <= 0) {
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
    small.textContent = `${intento} / ${texto.length}`;
  }

  function validarCoicidenciaLetra(letra) {
    existeLetra(letra);
    actualizaNumeroIntentos(intentos, palabra);
    const arregloTemporal = $palabraOculta.textContent.trim().split(' ');

    for (let indice = 0; indice <= palabra.length; ++indice) {
      if (palabra[indice] === letra) {
        arregloTemporal[indice] = letra;
      }
    }
    $palabraOculta.textContent = arregloTemporal.join(' ');
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
})();
