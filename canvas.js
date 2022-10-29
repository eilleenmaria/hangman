function drawLine(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E09F3E";
    tablero.strokeStyle = "#F2CC8F";
    tablero.strokeRect

    let anchura = 600/secretWord.length;
    for(let i = 0; i< secretWord.length; i++){
        tablero.moveTo(200 + (anchura*i),420)
        tablero.lineTo(250 + (anchura*i),420)
    }
    tablero.stroke();
    tablero.closePath();
}
function writeCorrectLetter(index){
    tablero.font = 'bold 32px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F2CC8F";

    let anchura = 600/secretWord.length;
    tablero.fillText(secretWord[index], 205 +(anchura*index), 400);
    tablero.stroke();
}
function writeWrongLetter(letter, errorsleft){
    tablero.lineWidth = 6;
    tablero.font = 'bold 25px Inter';    
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F2CC8F";
    tablero.fillText(letter, 205+(40*(10-errorsleft)), 470, 40)
}