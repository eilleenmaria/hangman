let json = localStorage.getItem("array");
let words = [];
if(json != null){
    words = JSON.parse(json);   
}

function linkaddWord(){
    document.getElementById("wordsecret").style.display = 'block';
    document.getElementById("div-start").style.display = 'none'; 
    document.getElementById("inputaddword").focus();
    
    }
function addWord(){
    
     let word = document.getElementById("inputaddword").value
    console.log(word);
    if(words.includes(word) == false){
        words.push(word);
        localStorage.setItem("array", JSON.stringify(words));
        }else{
        alert(`The word ${word} has already been added `);
    }     
        location.reload();
    
}

console.log(words);

//ADD WORDS
words.push("JAVASCRIPT");
words.push("ALURA");
words.push("HTML");
words.push("DEVELOPER");
words.push("ORACLE");
words.push("CODIGO");
words.push("TECLADO");
words.push("COMPUTER");
words.push("LATAM");

