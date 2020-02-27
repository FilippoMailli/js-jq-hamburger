/*
attivazione del menu al click dell’hamburger.
*/

$( ".fa-bars" ).click(function() { //seleziono la classe fa-bars e gli creo una funzione al click
    $( ".hamburger-menu" ).addClass( "active" ); //aggiungo la classe "active" del css
})

$( ".close" ).click(function() { //Stessa cosa na qui rimuovo la classe al clicl della X
    $( ".hamburger-menu" ).removeClass( "active" );
})
