var readlineSync = require('readline-sync');

function start(){
    console.log("Dit is een verhaal waar in je keuzes kunt maken, hierdoor verloopt het verhaal steeds anders. Probeer maar eens.")
    stukje1()
}
start()

function stukje1(){
    console.log("Je bent lekker met je vrienden buiten aan het spelen tot dat er een flinke storm aan komt." )
    console.log("Je wilt eigenlijk gaan kijken wat er aan de hand is maar je vrienden willen, dat je wat anders doet.")
    var verhaal = readlineSync.question("\na je gaat naar huis \nb je blijft buiten spelen \nc je gaat op de storm af\n")
    if (verhaal = ("a")){
        stukje2()
    }else if(verhaal = ("b")){
        stukje3()
    }else if(verhaal = ("c")){
        stukje8()
    }
    else{
        console.log("antwoordt alleen met a b of c")
        stukje1()
    }
}

function stukje2(){
    console.log("Je bent naar binnen gegaan en binnen is het veilig, daarom is dit het eind.")
    einde()
}

function stukje3(){
    console.log("Het buiten spelen bevalt wel, maar er komt iemand naar je toe. Je ziet een tak leggen.")
    var verhaal = readlineSync.question("\na je pakt de tak op \nb je speelt veder\n ")
    if(verhaal = ("a")){
        stukje4()
    }else if(verhaal = ("b")){
        stukje9()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje3()
    }
}

function stukje4(){
    console.log("gaat in gevecht houding staan en kijkt wat er gebeurt")
    console.log("De gedaante komt steeds dichter bij en op eens hoor je  je naam.")
    console.log("de stem die je naam zei zegt ik moet je iets belangrijks zeggen.")
    console.log(". Je hoort hem aan en je komt er achter dat, hij je twee keuzes geeft.")
    var verhaal = readlineSync.question("\na je gaat met hem mee. De strijd aan tegen het kwaad  \nje gaat naar zijn schuilplaats waar het veilig is\n ")
    if(verhaal = ("a")){
        stukje5()
    }else if(verhaal = ("b")){
        stukje2()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje4()
    }
}

function stukje5(){
    console.log("Je ziet dat de gedaante een elf is en je vraagt hem waarom hij naar jou kwam, want hij kon naar heel veel andere mensen gaan. ")
    console.log("De elf zei, Mijn naam is mees en Je bent een van de 100 mensen op de wereld met het puurste hard.")
    var verhaal1 = readlineSync.question("\na je geloofd hem \nje geloofd hem niet\n")
    if(verhaal1 = ("a")){
        stukje6()
    }else if(verhaal1 = ("b")){
        stukje13()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje5()
    }
}

function stukje6(){
    console.log("je vraagt hoe gaan we ten strijd.")
    console.log("Mees zei we proberen alle 100 mensen met het puurste hard naar het strijd velt te halen.")
    console.log("Per 25 mensen met het puurste hard komt er een speciale kracht vrij, die de duivel kan weg vegen en iedereen heeft zijn eigen afzonderlijke kracht.")
    var verhaal1 = readlineSync.question("\na je vraagt naar jouw super kracht \njullie zijn bijna bij het strijdt veld\n")
    if(verhaal1 = ("a")){
        stukje7()
    }else if(verhaal1 = ("b")){
        stukje15()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje6()
    }
}

function stukje7(){
    console.log("je hebt de kracht:")
    var verhaal1 = readlineSync.question("\na vuur \nelektriciteit\n")
    if(verhaal1 = ("a")){
        stukje1()
    }else if(verhaal1 = ("b")){
        stukje1()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje7()
    }
}

function stukje8(){
    console.log("De storm woekert heel erg maar, dat houd jou niet tegen je bent in het midden van de storm en je ziet een gedaante die jouw probeert aan te vallen.")
    console.log("Je ziet dat een elf je te hulp schiet." )
    console.log("Jullie vechten samen tegen de gedaante.")
    console.log("Het gevecht is bestreden en de elf zegt dat hij mees heet.")
    var verhaal1 = readlineSync.question("\na Je ontdekt dat je een geheime kracht hebt  \nb je vecht met een zwaart \n")
    if(verhaal1 = ("a")){
        stukje7()
    }else if(verhaal1 = ("b")){
        stukje16()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje8()
    }
}

function stukje9(){
    console.log("Jij en je vrienden zijn nog steeds lekker aan het spelen, maar de storm wordt steeds erger. Op ")
    console.log("Op eens wordt je omsingelt door monsters maar jullie zien een opening wat gaan jullie doen.")
    var verhaal1 = readlineSync.question("\na jullie glippen door de opening en gaan naar huis   \nb jullie gaan de strijdt aan  \n")
    if(verhaal1 = ("a")){
        stukje2()
    }else if(verhaal1 = ("b")){
        stukje10()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje9()
    }
}

function stukje10(){
    console.log("Jij en je vrienden gaan de strijdt aan met de monsters, je ontdekt dat je een speciale kracht hebt")
    var verhaal2 = readlineSync.question("\na je gebruikt de kracht \nb je houd de kracht geheim  \n")
    if(verhaal2 = ("a")){
        stukje11()
    }else if(verhaal2 = ("b")){
        stukje12()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje10()
    }
}

function stukje11(){
    console.log("Het zijn zoveel monsters dat jullie niet meer weten waar jullie moeten beginnen, maar dan komt er hulp uit de lucht.")
    console.log("Het is een elf die te hulp schiet en zijn naam is mees.")
    console.log("je ontdek welke kracht je hebt.")
    stukje7()
}

function stukje12(){
    console.log("Je doet er alles aan om de monsters te bestrijden, maar je ontdekt dat de monsters te krachtig zijn. Je moet je geheime kracht toch gebruiken")
    stukje7()
   
}

function stukje13(){
    console.log("Je gelooft de elf niet. De elf wilt het uitleggen.")
    var verhaal1 = readlineSync.question("\na je luistert naar zijn verhaal\nb je gaat naar huis \n")
    if(verhaal1 = ("a")){
        stukje14()
    }else if(verhaal1 = ("b")){
        stukje2()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje13()
    }
}

function stukje14(){
    console.log("Hij zegt dat  er een verhaal gaat van 100 mensen die de strijd aangaan met het kwaad en dat waren allemaal mensen met het puurste hart.")
    console.log("Ze hebben met ons samen een gevecht gehad tegen het kwaad. Het was het zwaarste gevecht wat we ooit hebben gehad.")
    console.log(". Maar blijkbaar hebben we het kwaad nog niet helemaal verdreven.")
    var verhaal1 = readlineSync.question("\na je geloofd hem nu wel \nb je gaat als nog naar huis \n")
    if(verhaal1 = ("a")){
        stukje15()
    }else if(verhaal1 = ("b")){
        stukje2()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje14()
    }
}

function stukje15(){
    console.log("Jullie zijn nu bij het strijd veld en jullie gaan het gevecht aan maar je ontdekt dat je een geheime kracht hebt waar mee je de strijd aan kan gaan")
    var verhaal1 = readlineSync.question("\na je gebruikt je kracht \nb je gebruikt je kracht niet\n")
    if(verhaal1 = ("a")){
        stukje7()
    }else if(verhaal1 = ("b")){
        stukje16()
    }else{
        console.log("antwoordt alleen met a of b")
        stukje15()
    }
}


function stukje16(){
    console.log("Je bent te vermoeit om veder te vechten. je probeert nog van alles te doen ,maar het is te laat. Je bent dood.")
    einde()
}

function stukje17(){}

function stukje18(){}

function stukje19(){}

function stukje20(){}

function stukje21(){}

function stukje22(){}

function einde(){}