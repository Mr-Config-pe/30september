//Inicia Codigo de Maquina de Escribir 

// function([string1, string2],target id,[color1,color2])    
consoleText(['Hola Mundo!', 'Soy Immer', ' Un Desarrollador', 'Front-End'], 'text',['rgb(231, 82, 82)','rgb(231, 82, 82)','rgb(231, 82, 82)', '#68C9CE']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//Termina Codigo de Maquina de Escribir

/* ---------- Inicio Code Boton Switch Modo Oscuro ---------- */

const switchButton = document.getElementById('switch');
switchButton.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  switchButton.classList.toggle('active')
})

/* ---------- Fin Code Boton Switch Modo Oscuro ---------- */

/* ---------- Inicio Code Copiar Correo y celular ---------- */

function copyToClipboard1() {
  let cellPhone = document.querySelector("#cellphone");
  cellPhone.select();
  document.execCommand("copy");
}

function copyToClipboard2() {
  let email = document.querySelector("#email");
  email.select();
  document.execCommand("copy");
}

/* ---------- Fin Code Copiar Correo y celular ---------- */