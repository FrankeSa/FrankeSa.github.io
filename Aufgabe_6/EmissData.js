/*Emissionen 2008*/
var Africa2008 = 1028;
var SouthAmerica2008 = 1132.6;
var Europe2008 = 4965.7;
var NorthAmerica2008 = 6600.4;
var Asia2008 = 12954.7;
var Australia2008 = 1993;
/*Gesamt-Emissionen der Welt 2008*/
var GesEmissWelt2008 = Africa2008 + SouthAmerica2008 + Europe2008 + NorthAmerica2008 + Asia2008 + Australia2008;
/*Emissionen 2018*/
var Africa2018 = 1235.5;
var SouthAmerica2018 = 1261.5;
var Europe2018 = 4209.3;
var NorthAmerica2018 = 6035.6;
var Asia2018 = 16274.1;
var Australia2018 = 2100.5;
/*Gesamt-Emissionen der Welt 2018*/
var GesEmissWelt2018 = Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018;
/* Berechnung Wert relativ zur Gesamtemission der Welt*/
var relatAfrica = Africa2018 * 100 / GesEmissWelt2018;
var relatSouthAmerica = SouthAmerica2018 * 100 / GesEmissWelt2018;
var relatEurope = Europe2018 * 100 / GesEmissWelt2018;
var relatNorthAmerica = NorthAmerica2018 * 100 / GesEmissWelt2018;
var relatAsia = Asia2018 * 100 / GesEmissWelt2018;
var relatAustralia = Australia2018 * 100 / GesEmissWelt2018;
/*Berechnung Veränderung Emission 2018 zu 2008 in %*/
/*Zwischen-Rechnung */
var zwErgAfrica1 = Africa2018 - Africa2008;
var zwErgAfrica2 = zwErgAfrica1 / Africa2008;
var zwErgSouthAmerica1 = SouthAmerica2018 - SouthAmerica2008;
var zwErgSouthAmerica2 = zwErgSouthAmerica1 / SouthAmerica2008;
var zwErgEurope1 = Europe2018 - Europe2008;
var zwErgEurope2 = zwErgEurope1 / Europe2008;
var zwErgNorthAmerica1 = NorthAmerica2018 - NorthAmerica2008;
var zwErgNorthAmerica2 = zwErgNorthAmerica1 / NorthAmerica2008;
var zwErgAsia1 = Asia2018 - Asia2008;
var zwErgAsia2 = zwErgAsia1 / Asia2008;
var zwErgAustralia1 = Australia2018 - Australia2008;
var zwErgAustralia2 = zwErgAustralia1 / Australia2008;
/*End-Ergebnis */
var ErginProzAfrica = zwErgAfrica2 * 100;
var ErginProzSouthAmerica = zwErgSouthAmerica2 * 100;
var ErginProzEurope = zwErgEurope2 * 100;
var ErginProzNorthAmerica = zwErgNorthAmerica2 * 100;
var ErginProzAsia = zwErgAsia2 * 100;
var ErginProzAustralia = zwErgAustralia2 * 100;
/*Berechnung Veränderung Emission 2018 zu 2008 in kg CO2*/
var ErgAbsolAfrica = Africa2018 - Africa2008;
var ErgAbsolSouthAmerica = SouthAmerica2018 - SouthAmerica2008;
var ErgAbsolEurope = Europe2018 - Europe2008;
var ErgAbsolNorthAmerica = NorthAmerica2018 - NorthAmerica2008;
var ErgAbsolAsia = Asia2018 - Asia2008;
var ErgAbsolAustralia = Australia2018 - Australia2008;
function pushasia() {
    document.getElementById("headline").innerHTML = "Asia";
    document.getElementById("sentens").innerHTML = "Asia";
    document.getElementById("EmissAbsol").innerHTML = Asia2018.toFixed(1).toString();
    document.getElementById("EmissRel").innerHTML = relatAsia.toFixed(1) + " %";
    document.getElementById("growthrateproz").innerHTML = ErginProzAsia.toFixed(1) + " %";
    document.getElementById("growthrateabs").innerHTML = ErgAbsolAsia.toFixed(2);
    document.getElementById("balken").setAttribute('style', 'height:' + relatAsia + '%');
}
function pusheurope() {
    document.getElementById("headline").innerHTML = "Europe";
    document.getElementById("sentens").innerHTML = "Europe";
    document.getElementById("EmissAbsol").innerHTML = Europe2018.toFixed(1).toString();
    document.getElementById("EmissRel").innerHTML = relatEurope.toFixed(1) + " %";
    document.getElementById("growthrateproz").innerHTML = ErginProzEurope.toFixed(1) + " %";
    document.getElementById("growthrateabs").innerHTML = ErgAbsolEurope.toFixed(2);
    document.getElementById("balken").setAttribute('style', 'height:' + relatEurope + '%');
}
function pushnorthamerica() {
    document.getElementById("headline").innerHTML = "North America";
    document.getElementById("sentens").innerHTML = "North America";
    document.getElementById("EmissAbsol").innerHTML = NorthAmerica2018.toFixed(1).toString();
    document.getElementById("EmissRel").innerHTML = relatNorthAmerica.toFixed(1) + " %";
    document.getElementById("growthrateproz").innerHTML = ErginProzNorthAmerica.toFixed(1) + " %";
    document.getElementById("growthrateabs").innerHTML = ErgAbsolNorthAmerica.toFixed(2);
    document.getElementById("balken").setAttribute('style', 'height:' + relatNorthAmerica + '%');
}
function pushsouthamerica() {
    document.getElementById("headline").innerHTML = "South America";
    document.getElementById("sentens").innerHTML = "South America";
    document.getElementById("EmissAbsol").innerHTML = SouthAmerica2018.toFixed(1).toString();
    document.getElementById("EmissRel").innerHTML = relatSouthAmerica.toFixed(1) + " %";
    document.getElementById("growthrateproz").innerHTML = ErginProzSouthAmerica.toFixed(1) + " %";
    document.getElementById("growthrateabs").innerHTML = ErgAbsolSouthAmerica.toFixed(2);
    document.getElementById("balken").setAttribute('style', 'height:' + relatSouthAmerica + '%');
}
function pushafrica() {
    document.getElementById("headline").innerHTML = "Africa";
    document.getElementById("sentens").innerHTML = "Africa";
    document.getElementById("EmissAbsol").innerHTML = Africa2018.toFixed(1).toString();
    document.getElementById("EmissRel").innerHTML = relatAfrica.toFixed(1) + " %";
    document.getElementById("growthrateproz").innerHTML = ErginProzAfrica.toFixed(1) + " %";
    document.getElementById("growthrateabs").innerHTML = ErgAbsolAfrica.toFixed(2);
    document.getElementById("balken").setAttribute('style', 'height:' + relatAfrica + '%');
}
function pushaustralia() {
    document.getElementById("headline").innerHTML = "Australia";
    document.getElementById("sentens").innerHTML = "Australia";
    document.getElementById("EmissAbsol").innerHTML = Australia2018.toFixed(1).toString();
    document.getElementById("EmissRel").innerHTML = relatAustralia.toFixed(1) + " %";
    document.getElementById("growthrateproz").innerHTML = ErginProzAustralia.toFixed(1) + " %";
    document.getElementById("growthrateabs").innerHTML = ErgAbsolAustralia.toFixed(2);
    document.getElementById("balken").setAttribute('style', 'height:' + relatAustralia + '%');
}
// .style für den Balken
//# sourceMappingURL=EmissData.js.map