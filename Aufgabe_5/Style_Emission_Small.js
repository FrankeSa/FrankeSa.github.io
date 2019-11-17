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
/*Zeichenkette zu Variablen*/
var Eins = "Die Emission von ";
var Eins1 = " 2018";
var Zwei = " ist: ";
var Drei = " kg CO2.";
var Fünf = "  Relativ zur Gesamtemission der Welt verursacht ";
var Fünf5 = " damit ";
var Sechs = "%";
var Sieben = " Für ";
var Acht = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var Neun = " verändert.";
var Zehn = "  2018 im Vergleich zu 2008 sind das ";
var KAfrika = "Africa";
var KSouthAmerica = "South America";
var KEurope = "Europe";
var KNorthAmerica = "North America";
var KAsia = "Asia";
var KAustralia = "Australia";
console.log(Eins + KAfrika + Eins1 + Zwei + Africa2018 + Drei + Fünf + KAfrika + Fünf5 + relatAfrica + Sechs + Sieben + KAfrika + Acht + ErginProzAfrica + Sechs + Neun + Zehn + ErgAbsolAfrica + Drei);
console.log(Eins + KSouthAmerica + Eins1 + Zwei + SouthAmerica2018 + Drei + Fünf + KSouthAmerica + Fünf5 + relatSouthAmerica + Sechs + Sieben + KSouthAmerica + Acht + ErginProzSouthAmerica + Sechs + Neun + Zehn + ErgAbsolSouthAmerica + Drei);
console.log(Eins + KEurope + Eins1 + Zwei + Europe2018 + Drei + Fünf + KEurope + Fünf5 + relatEurope + Sechs + Sieben + KEurope + Acht + ErginProzEurope + Sechs + Neun + Zehn + ErgAbsolEurope + Drei);
console.log(Eins + KNorthAmerica + Eins1 + Zwei + NorthAmerica2018 + Drei + Fünf + KNorthAmerica + Fünf5 + relatNorthAmerica + Sechs + Sieben + KNorthAmerica + Acht + ErginProzNorthAmerica + Sechs + Neun + Zehn + ErgAbsolNorthAmerica + Drei);
console.log(Eins + KAsia + Eins1 + Zwei + Asia2018 + Drei + Fünf + KAsia + Fünf5 + relatAsia + Sechs + Sieben + KAsia + Acht + ErginProzAsia + Sechs + Neun + Zehn + ErgAbsolAsia + Drei);
console.log(Eins + KAustralia + Eins1 + Zwei + Australia2018 + Drei + Fünf + KAustralia + Fünf5 + relatAustralia + Sechs + Sieben + KAustralia + Acht + ErginProzAustralia + Sechs + Neun + Zehn + ErgAbsolAustralia + Drei);
/* "Die Emission von Europa ist: XXXXX kg CO2"
"Relativ zur Gesamtemission der Welt verursacht Europa damit XX%"
"Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert"
"2018 im Vergleich zu 2008 sind das XXXX kg CO2" */ 
//# sourceMappingURL=Style_Emission_Small.js.map