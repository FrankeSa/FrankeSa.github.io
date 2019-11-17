/*Emissionen 2008*/
var Africa2008:number= 1028;
var SouthAmerica2008:number= 1132.6;
var Europe2008:number= 4965.7;
var NorthAmerica2008:number= 6600.4;
var Asia2008:number= 12954.7;
var Australia2008:number= 1993;

/*Gesamt-Emissionen der Welt 2008*/
var GesEmissWelt2008:number= Africa2008 + SouthAmerica2008 + Europe2008 + NorthAmerica2008 + Asia2008 + Australia2008;

/*Emissionen 2018*/
var Africa2018:number= 1235.5;
var SouthAmerica2018:number= 1261.5;
var Europe2018:number= 4209.3;
var NorthAmerica2018:number= 6035.6;
var Asia2018:number= 16274.1;
var Australia2018:number= 2100.5;

/*Gesamt-Emissionen der Welt 2018*/
var GesEmissWelt2018:number= Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018;


/* Berechnung Wert relativ zur Gesamtemission der Welt*/

var relatAfrica:number= Africa2018*100/GesEmissWelt2018;
var relatSouthAmerica:number=SouthAmerica2018*100/GesEmissWelt2018;
var relatEurope:number=Europe2018*100/GesEmissWelt2018;
var relatNorthAmerica:number=NorthAmerica2018*100/GesEmissWelt2018;
var relatAsia:number=Asia2018*100/GesEmissWelt2018;
var relatAustralia:number=Australia2018*100/GesEmissWelt2018;


/*Berechnung Veränderung Emission 2018 zu 2008 in %*/
  
   /*Zwischen-Rechnung */
   var zwErgAfrica1:number= Africa2018-Africa2008;
   var zwErgAfrica2:number=zwErgAfrica1/Africa2008;
   
   var zwErgSouthAmerica1:number= SouthAmerica2018-SouthAmerica2008;
   var zwErgSouthAmerica2:number=zwErgSouthAmerica1/SouthAmerica2008;
   
   var zwErgEurope1:number= Europe2018-Europe2008;
   var zwErgEurope2:number=zwErgEurope1/Europe2008;

   var zwErgNorthAmerica1:number= NorthAmerica2018-NorthAmerica2008;
   var zwErgNorthAmerica2:number=zwErgNorthAmerica1/NorthAmerica2008;
   
   var zwErgAsia1:number= Asia2018-Asia2008;
   var zwErgAsia2:number=zwErgAsia1/Asia2008;

   var zwErgAustralia1:number= Australia2018-Australia2008;
   var zwErgAustralia2:number=zwErgAustralia1/Australia2008;

   /*End-Ergebnis */
var ErginProzAfrica:number=zwErgAfrica2*100;
var ErginProzSouthAmerica:number=zwErgSouthAmerica2*100;
var ErginProzEurope:number=zwErgEurope2*100;
var ErginProzNorthAmerica:number=zwErgNorthAmerica2*100;
var ErginProzAsia:number=zwErgAsia2*100;
var ErginProzAustralia:number=zwErgAustralia2*100;


/*Berechnung Veränderung Emission 2018 zu 2008 in kg CO2*/

var ErgAbsolAfrica:number=Africa2018-Africa2008;
var ErgAbsolSouthAmerica:number=SouthAmerica2018-SouthAmerica2008;
var ErgAbsolEurope:number=Europe2018-Europe2008;
var ErgAbsolNorthAmerica:number=NorthAmerica2018-NorthAmerica2008;
var ErgAbsolAsia:number=Asia2018-Asia2008;
var ErgAbsolAustralia:number=Australia2018-Australia2008;

/*Zeichenkette zu Variablen*/

var Eins:string="Die Emission von ";
var Eins1:string=" 2018";
var Zwei:string=" ist: ";
var Drei:string=" kg CO2.";
var Fünf:string="  Relativ zur Gesamtemission der Welt verursacht ";
var Fünf5:string=" damit "
var Sechs:string="%";
var Sieben:string=" Für ";
var Acht:string=" hat sich 2018 im Vergleich zu 2008 die Emission um ";
var Neun:string=" verändert.";
var Zehn:string="  2018 im Vergleich zu 2008 sind das ";


var KAfrika:string="Africa";
var KSouthAmerica:string="South America";
var KEurope:string="Europe";
var KNorthAmerica:string="North America";
var KAsia:string="Asia";
var KAustralia:string="Australia";


console.log(Eins+KAfrika+Eins1+Zwei+Africa2018+Drei+Fünf+KAfrika+Fünf5+relatAfrica+Sechs+Sieben+KAfrika+Acht+ErginProzAfrica+Sechs+Neun+Zehn+ErgAbsolAfrica+Drei);
console.log(Eins+KSouthAmerica+Eins1+Zwei+SouthAmerica2018+Drei+Fünf+KSouthAmerica+Fünf5+relatSouthAmerica+Sechs+Sieben+KSouthAmerica+Acht+ErginProzSouthAmerica+Sechs+Neun+Zehn+ErgAbsolSouthAmerica+Drei);
console.log(Eins+KEurope+Eins1+Zwei+Europe2018+Drei+Fünf+KEurope+Fünf5+relatEurope+Sechs+Sieben+KEurope+Acht+ErginProzEurope+Sechs+Neun+Zehn+ErgAbsolEurope+Drei);
console.log(Eins+KNorthAmerica+Eins1+Zwei+NorthAmerica2018+Drei+Fünf+KNorthAmerica+Fünf5+relatNorthAmerica+Sechs+Sieben+KNorthAmerica+Acht+ErginProzNorthAmerica+Sechs+Neun+Zehn+ErgAbsolNorthAmerica+Drei);
console.log(Eins+KAsia+Eins1+Zwei+Asia2018+Drei+Fünf+KAsia+Fünf5+relatAsia+Sechs+Sieben+KAsia+Acht+ErginProzAsia+Sechs+Neun+Zehn+ErgAbsolAsia+Drei);
console.log(Eins+KAustralia+Eins1+Zwei+Australia2018+Drei+Fünf+KAustralia+Fünf5+relatAustralia+Sechs+Sieben+KAustralia+Acht+ErginProzAustralia+Sechs+Neun+Zehn+ErgAbsolAustralia+Drei);





/* "Die Emission von Europa ist: XXXXX kg CO2"
"Relativ zur Gesamtemission der Welt verursacht Europa damit XX%"
"Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert" 
"2018 im Vergleich zu 2008 sind das XXXX kg CO2" */