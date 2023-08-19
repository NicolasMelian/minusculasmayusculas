function transformFirstCapital() {
    var textArea = document.getElementById("textArea");
    textArea.value = textArea.value.charAt(0).toUpperCase() + textArea.value.slice(1).toLowerCase();
  }
  
  function transformAllLowercase() {
    var textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toLowerCase();
  }
  
  function transformAllUppercase() {
    var textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();
  }
  
  function transformEveryWordCapital() {
    var textArea = document.getElementById("textArea");
    var inputText = textArea.value;
    var transformedText = inputText.toLowerCase().replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });
  
    var outputTextArea = document.getElementById("textArea");
    outputTextArea.value = transformedText;
  }
  
  
  
  function transformAlternatingCase() {
    var textArea = document.getElementById("textArea");
    var newText = "";
    var isUpperCase = true;
  
    for (var i = 0; i < textArea.value.length; i++) {
      var char = textArea.value.charAt(i);
  
      if (char !== " ") {
        if (isUpperCase) {
          newText += char.toUpperCase();
        } else {
          newText += char.toLowerCase();
        }
  
        isUpperCase = !isUpperCase;
      } else {
        newText += char;
      }
    }
  
    textArea.value = newText;
  }
  
  function transformInverseCase() {
    var textArea = document.getElementById("textArea");
    var newText = "";
  
    for (var i = 0; i < textArea.value.length; i++) {
      var char = textArea.value.charAt(i);
  
      if (char === char.toUpperCase()) {
        newText += char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        newText += char.toUpperCase();
      } else {
        newText += char;
      }
    }
  
    textArea.value = newText;
  }
  
  function copyOutputText() {
    var textArea = document.getElementById("textArea");
    var copyText = document.getElementById("copyMessage");
    var noText = document.getElementById("noTextMessage");
  
    if (textArea.value.trim() === "") {
        copyText.style.display = "none";
        noText.style.display = "block";
    } else {
        copyText.style.display = "block";
        noText.style.display = "none";
        textArea.select();
        document.execCommand("copy");

        // Hacer que copyMessage desaparezca después de 3 segundos
        setTimeout(function() {
            copyText.style.display = "none";
        }, 3000); // 3000 milisegundos = 3 segundos
    }
}

  
  
  function downloadText() {
    var textToDownload = document.getElementById("textArea").value;
  
    if (textToDownload !== "") {
      var fileName = "texto.txt";
      var blob = new Blob([textToDownload], { type: "text/plain" });
  
      var downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = fileName;
  
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      var noTextMessage = document.getElementById("noTextMessage");
      noTextMessage.style.display = "block";
      setTimeout(function() {
        noTextMessage.style.display = "none";
      }, 2000);
    }
  }
  
  function clearTextArea(){
    var textArea = document.getElementById('textArea');
    textArea.value= "";
  }
  
  
  
  function updateCounts() {
    let textArea = document.getElementById("textArea");
    let numLetters = textArea.value.length;
  
    let words;
    let numWords;
    let lines;
    let numLines;
  
    if (textArea.value === '') {
        numWords = 0;
        numLines = 0;
    } else {
        words = textArea.value.trim().split(/\s+/);
        numWords = words.length;
        lines = textArea.value.split("\n");
        numLines = lines.length;
    }
  
    document.getElementById("letterCount").innerText = numLetters;
    document.getElementById("wordCount").innerText = numWords;
    document.getElementById("lineCount").innerText = numLines;
  }
  
  
  
  let textArea = document.getElementById("textArea");
  
  function updateCounts() {
      let texto = textArea.value;
  
      let caracteres = texto.length;
      let palabras = texto.split(/\s+/).filter(Boolean).length; // Filtramos para eliminar cadenas vacías.
      let renglones = texto ? texto.split('\n').length : 0;
  
      document.getElementById('letterCount').textContent = caracteres;
      document.getElementById('wordCount').textContent = palabras;
      document.getElementById('lineCount').textContent = renglones;
  }
  
  textArea.addEventListener("input", updateCounts);
  
  updateCounts(); // Esto es para que se actualice el contador inicialmente cuando cargas la página.
  
  
  let btnBorrar = document.getElementById("deleteButton");
  
  btnBorrar.addEventListener("click", function() {
      textArea.value = ""; // Limpiamos el contenido del textarea
      updateCounts(); // Llamamos a la función para actualizar los contadores
  });