(() => {
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

  cargarAbecedario(letras);
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
