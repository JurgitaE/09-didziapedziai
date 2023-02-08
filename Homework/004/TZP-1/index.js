// console.log('Hello');

function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
/* 
1. Programiškai ridenkite du žaidimo kauliukus - sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 Jeigu kauliukų suma
   didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte.Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir
   išvada laimėjote ar pralošėte. 
*/

const dice = [rand(1, 6), rand(1, 6)];
console.log(
	`You rolled ${dice[0]} and ${dice[1]}. Total sum is ${dice[0] + dice[1]}, therefore you ${dice[0] + dice[1] > 8 ? 'win' : 'lose'}.`);

/* 
2. Gyveno du katinukai, Pilkis ir Murklys.Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. Parašyti
   programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis.Atsakymas turi būti katinukų
   vardai su jų svoriais ir lengvesnio katinuko vardas.Jeigu katinukai sveria vienodai, vietoj katinuko vardo
   parašykite, kad “katinukų svoriai vienodi”. 
*/

const kilos = [rand(3, 6), rand(3, 6)];
console.log(`Pilkio svoris yra ${kilos[0]} kg. Murklio svoris yra ${kilos[1]}. ${kilos[0] === kilos[1]
	? 'Katinukų svoriai vienodi.' : kilos[0] > kilos[1] ? 'Pilkio svoris didesnis' : 'Murklio svoris didesnis'}`);

/* 
3. Nojus pasiruošė potvyniui ir nusipirko dvi valtis.Vienoje telpa 15 katinukų, kitoje 15 karvių(katinukus galima
   sodinti tik į katinukų valtis, o karves tik į karvių, maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo
   atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių.Išveskite atėjusių katinukų ir
   karvių skaičių ir ar Nojus galės juos sutalpinti į valtis.Jeigu netelpa tik katinukai arba tik karvės vistiek
   išveskite “Netelpa”. Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai
   ir karvės telpa. 
 */

const catsCows = [rand(0, 30), rand(0, 30)];
console.log(`katinai: ${catsCows[0]}`, `karves: ${catsCows[1]}.`, catsCows[0] <= 15 && catsCows[1] <= 15 ? 'Telpa.' : 'Netelpa.');

/* 
4. Antanas nusipirko naują butą ir pinigų jam liko nedaug.Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti:
   televizorių, skalbimo mašiną ar šaldytuvą.Todėl nusprendžia ridenti kauliuką(atsitiktinis skaičius nuo 1 iki 6) ir
   jeigu iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 -
   šaldytuvą.Padėkite Antanui apsispręsti.Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.
 */

const roll = rand(1, 6);
switch (roll) {
	case 1:
	case 5: console.log(`Isridenai ${roll} - pirk televizoriu`);
		break;
	case 3:
	case 4: console.log(`Isridenai ${roll} - pirk skalbimo masina`);
		break;
	default: console.log(`Isridenai ${roll} - pirk saldytuva`);
		break;
}

/* 5 (BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7. Skaičius atspausdinkite nuo mažiausio iki
didžiausio.Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4; */

[...Array(3)].map(a => rand(1, 7)).sort((a, b) => a - b).forEach(a => console.log(a));
