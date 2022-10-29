

let tablero = document.getElementById("hangman").getContext("2d");
let secretWord = "";
let letters = [];
let errors = 0;
let hit = 0;
let lon = 150;
let canvas = document.getElementById("hangman")

function getSecretWord(){
    let word = words[Math.floor(Math.random()* words.length)];
    secretWord = word;
    console.log(secretWord);
}
function horca(errors){
    var imagen = new Image();
     imagen.src = "image/ahorcado/ahorcado"+errors+".png";
     imagen.onload = function(){
        tablero.drawImage(imagen, 460, 120, 230, 230);
    }
}

function checkLetter(key){
    let state = false;
    if(key >= 65 && letters.indexOf(key) || key <= 90 && letters.indexOf(key)){
        letters.push(key);
        console.log(letters); 
        return state
    }else{
        state = true;
        console.log(key);
        return true
    }
}

function gameOver(errors){
    tablero.clearRect(0, 0, hangman.width, hangman.height);
   
    tablero.fillStyle = "#F2CC8F";

    tablero.font = "bold 45px Courier";
    if (errors < 6){
        tablero.fillText("Haz acertado, la palabra es: ", 50, 380);
    } else {
        tablero.fillText("No haz acertado, la palabra era: ", 50, 380);
    }
    
    tablero.font = "bold 70px Courier";
    lon = (hangman.width - (secretWord.length*48))/2;
    tablero.fillText(secretWord, lon, 460);
    horca(errors);
}


function gameStart(){
    document.getElementById("div-start").style.display ='none';
    document.getElementById("getHangman").style.display='block';
    if(tablero){
        getSecretWord()
    // drawCanvas()
    drawLine()
    horca(errors)

    document.onkeydown = (e) =>{
        let letter = e.key.toUpperCase()
        console.log(letter);
        let insignia = false
        
        if(checkLetter(letter) && secretWord.includes(letter)){
            for(let i = 0; i < secretWord.length; i++){
               if(secretWord[i] === letter){
                writeCorrectLetter(i) 
                hit++;               
               }
               if (hit == secretWord.length) gameOver(errors);
            }
        }else{
           
            writeWrongLetter(letter, errors)
            errors++;
            horca(errors)
            if (errors == 6) gameOver(errors);

        }
    }
   
}else{
    alert ("Error al cargar el contexto!");
}
    } 

    const reload = document.getElementById("game-quit")
    reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
        location.reload();
        
    });