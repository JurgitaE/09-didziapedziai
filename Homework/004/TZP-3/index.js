
const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimante', 'Juste'];
const cats = ['Murka', 'Rainius', 'Meilute', 'Bosas', 'Dickis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
1. Prie masyvo bitGirls pradžios(ne galo!) pridėkite Nausėdą(po pridėjimo bitGirls turės 6 elementus).
*/
console.log('----------------1------------------');
bitGirls.unshift('Nauseda');
console.log(bitGirls);
/* 
2. Sukurkite naują masyvą bitCats iš masyvo cats taip kad naujasis masyvas turėtų elementus iš mažų, dviejų narių,
   masyviukų: pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba
   “normalus”. 
*/
console.log('----------------2------------------');
bitCats = cats.map(a => [a, rand(0, 1) === 0 ? 'storas' : 'normalus']);
console.log(bitCats);
/* 
3. bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.
*/
console.log('----------------3------------------');
console.log(bitCats.reduce((t, [_, weight]) => {
    t[weight] ? t[weight] += 1 : t[weight] = 1;
    return t;
}, {}));


/* 
4. Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka(ne pagal visą vardą, o tik pagal
   antrą raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje. 
*/
console.log('----------------4------------------');
console.log(bitCats.sort((a, b) => a[0][1].localeCompare(b[0][1])));
/* 
5. (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės
   vardo ir katinuko vardo.Nausėdai katinuko neduokit(nes neužteks) ir Nausėdai vietoj katinuko priskirkite stringą
   “Barsukas”. */
console.log('----------------5------------------');

const happyCats = bitGirls.map((a, i) => i === 0 ? [a, 'Barsukas'] : [a, bitCats[i - 1][0]]);
console.log(happyCats);