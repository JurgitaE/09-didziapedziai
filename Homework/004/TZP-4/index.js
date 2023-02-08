function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const africa = ['Zebras', 'Liutas', '', 'Raganosis', '', 'Raganosis'];
const australia = ['Kengura', 'Anciasnapis', 'Dingo', 'Atsirado', 'Strutis'];
/* 
1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius < h2 > tagus ir vieną mygtuką.Paspaudus mygtuką kiekvienam
   tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText()
   metodą.Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo.Jeigu sugeneruoti skaičiai yra vienodi, juos
   nudažyti raudonai. 
*/
console.log('---------------1----------------');

/* 
2. Tiesiogiai HTML faile rankiniu būdu sukurkite < h3 > tagą ir vieną mygtuką.Susikurkite tuščią masyvą, skaičiams
   saugoti.Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą
   masyvą atspausdinkite konsolėle. < h3 > tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių
   sumą. 
*/
console.log('---------------2----------------');

/* 
3. Tiesiogiai HTML faile rankiniu būdu sukurkite < ul > tagą.JS pagalba perskaitykite masyvą africa ir naudodami
   createElement()  ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po < li > tagą su elemento
   stringu viduje ir juos įrašykite į < ul > tago vidų.Elementus su tuščiais stringais praleiskite ir jiems < li >
   elementų nekurkite. 
*/
console.log('---------------3----- -----------');

/* 
4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną < h5 > tagą ir du mygtukus: “+” ir
   “-”. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką
   su skaičiais būtų atlikta atitinkama aritmetinė operacija, o jos rezultatas būtų atvaizduotas < h5 > tage.Pasirinkite
   patys sau patogiausius metodus tai atlikti. 

*/
console.log('---------------4----------------');

/* 
5.(BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite < ul > tagą.JS pagalba perskaitykite masyvą australia ir
kiekvieną masyvo elementą įrašykite į strigą su < li > tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną
bendrą stringą.Tą stirngą naudodami innerHTML() metodą įdėkite į < ul > tago vidų.Generavimo metu “Dingo” background’ą
nuspalvinkite mėlynai. 
*/
console.log('---------------5----------------');

/*
 Visuose uždaviniuose jeigu jums reikia galite naudoti išorinį css stilių, o prie rankiniu būdu HTML’e kuriamų tagų
 galite pridėti savo klases, id ar panašiai.
 */

