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



function pushasia() {

document.getElementById("headline").innerHTML ="Asia";
document.getElementById("sentens").innerHTML ="Asia";
document.getElementById("EmissAbsol").innerHTML=Asia2018.toFixed(1).toString();
document.getElementById("EmissRel").innerHTML=relatAsia.toFixed(1)+" %";
document.getElementById("growthrateproz").innerHTML=ErginProzAsia.toFixed(1)+" %";
document.getElementById("growthrateabs").innerHTML=ErgAbsolAsia.toFixed(2);
document.getElementById("balken").setAttribute('style', 'height:' + relatAsia + '%');

}

function pusheurope() {

   document.getElementById("headline").innerHTML ="Europe";
   document.getElementById("sentens").innerHTML ="Europe";
   document.getElementById("EmissAbsol").innerHTML=Europe2018.toFixed(1).toString();
   document.getElementById("EmissRel").innerHTML=relatEurope.toFixed(1)+" %";
   document.getElementById("growthrateproz").innerHTML=ErginProzEurope.toFixed(1)+" %";
   document.getElementById("growthrateabs").innerHTML=ErgAbsolEurope.toFixed(2);
   document.getElementById("balken").setAttribute('style', 'height:' + relatEurope + '%');
   
      }
function pushnorthamerica() {

   document.getElementById("headline").innerHTML ="North America";
   document.getElementById("sentens").innerHTML ="North America";
   document.getElementById("EmissAbsol").innerHTML=NorthAmerica2018.toFixed(1).toString();
   document.getElementById("EmissRel").innerHTML=relatNorthAmerica.toFixed(1)+" %";
   document.getElementById("growthrateproz").innerHTML=ErginProzNorthAmerica.toFixed(1)+" %";
   document.getElementById("growthrateabs").innerHTML=ErgAbsolNorthAmerica.toFixed(2);
   document.getElementById("balken").setAttribute('style', 'height:' + relatNorthAmerica + '%');
  
}
function pushsouthamerica() {

   document.getElementById("headline").innerHTML ="South America";
   document.getElementById("sentens").innerHTML ="South America";
   document.getElementById("EmissAbsol").innerHTML=SouthAmerica2018.toFixed(1).toString();
   document.getElementById("EmissRel").innerHTML=relatSouthAmerica.toFixed(1)+" %";
   document.getElementById("growthrateproz").innerHTML=ErginProzSouthAmerica.toFixed(1)+" %";
   document.getElementById("growthrateabs").innerHTML=ErgAbsolSouthAmerica.toFixed(2);
   document.getElementById("balken").setAttribute('style', 'height:' + relatSouthAmerica + '%');
   
}
function pushafrica() {

   document.getElementById("headline").innerHTML ="Africa";
   document.getElementById("sentens").innerHTML ="Africa";
   document.getElementById("EmissAbsol").innerHTML=Africa2018.toFixed(1).toString();
   document.getElementById("EmissRel").innerHTML=relatAfrica.toFixed(1)+" %";
   document.getElementById("growthrateproz").innerHTML=ErginProzAfrica.toFixed(1)+" %";
   document.getElementById("growthrateabs").innerHTML=ErgAbsolAfrica.toFixed(2);
   document.getElementById("balken").setAttribute('style', 'height:' + relatAfrica + '%');
   
}
function pushaustralia() {

   document.getElementById("headline").innerHTML ="Australia";
   document.getElementById("sentens").innerHTML ="Australia";
   document.getElementById("EmissAbsol").innerHTML=Australia2018.toFixed(1).toString();
   document.getElementById("EmissRel").innerHTML=relatAustralia.toFixed(1)+" %";
   document.getElementById("growthrateproz").innerHTML=ErginProzAustralia.toFixed(1)+" %";
   document.getElementById("growthrateabs").innerHTML=ErgAbsolAustralia.toFixed(2);
   document.getElementById("balken").setAttribute('style', 'height:' + relatAustralia + '%');  


}






   


// .style für den Balken



