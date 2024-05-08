const prezzoBiglietto = 0.276;
let km;
let eta;


km=Number.parseInt(prompt('per favore inserire i KM che deve viaggiare'));
eta=Number.parseInt(prompt('per favore inserire la sua eta\''));
if (isNaN(km) || isNaN(eta)){
    console.log('Per favore inserire dei numeri validi');
}else{
    let prezzoScontato;
    let prezzoTotale;
    if(eta < 18){
        console.log('Hai uno sconto di 21%!');
        prezzoScontato = (km*prezzoBiglietto)-((km*prezzoBiglietto)/100)*21;
        console.log('Il tuo biglietto costa '+(Math.round(prezzoScontato*100)/100).toFixed(2));
    }else if(eta > 65){
        console.log('Hai uno sconto di 42%!');
        prezzoScontato = (km*prezzoBiglietto)-((km*prezzoBiglietto)/100)*42;
        console.log('Il tuo biglietto costa '+(Math.round(prezzoScontato*100)/100).toFixed(2));
    }else{
        prezzoTotale = km*prezzoBiglietto;
        console.log('Il tuo biglietto costa '+(Math.round(prezzoTotale*100)/100).toFixed(2));
    }
}
