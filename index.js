function myFunction2() {

    var x = document.getElementById("form1"); // Läser in dom valda talen
    var loopvärde = x.elements[0].value; //variabel till värden
    var bish1 = x.elements[1].value;//skapar variabel till Bisch
    var bosh2 = x.elements[2].value;//skapar varibel till Bosch
    var text=""; 
    var i;
    for (i = 1; i <= loopvärde; i++) {   //skapar en for loop av värderna

        //  Skriver ut när siffran är både bisch och borsch
        if (i % bish1 == 0 && i % bosh2 == 0) { 

          text += "Bisch-Bosch" + ", "; 

          // Skriver ut när siffran är ett bisch tal
        } else if (i % bish1 == 0) { 
            text+="Bisch" + ", "; 
          
        //  Skriver ut när siffran är ett Bosch tal
        } else if (i % bosh2 == 0) { 
            text+="Bosch" + ", "; 


        } else {
          text+=i + ", ";  //Skriver ut en siffra om det varken är bish eller bosch

           
        }

    }
    document.getElementById("demo").innerHTML = text; //Läser av html document. 


}

//scrollbar funktion för att välja antal
function ti() {
    var fP = document.getElementById('antalBB').innerHTML;
    var tP = document.getElementById('antalBB').innerHTML;

    if (fP != '' && tP != '')
        window.location.replace(window.location.href + '?min_antal=' + fP + '&max_antal=' + tP);
}
//scrollbar funktion för att välja Bisch
function ti() {
    var Bi1 = document.getElementById('bischrange').innerHTML;
    var bi2 = document.getElementById('bischrange').innerHTML;

    if (Bi1 != '' && bi2 != '')
        window.location.replace(window.location.href + '?min_brange=' + Bi1 + '&max_brange=' + bi2);
}
//scrollbar funktion för att välja Bosch
function ti() {
    var Bo1 = document.getElementById('boschrange').innerHTML;
    var bo2 = document.getElementById('boschrange').innerHTML;

    if (Bo1 != '' && bo2 != '')
        window.location.replace(window.location.href + '?min_borange=' + Bo1 + '&max_borange=' + bo2);
}
//mouseover funktion  
function scaleUp(obj, size) {
    obj.style.fontSize = size;
}

