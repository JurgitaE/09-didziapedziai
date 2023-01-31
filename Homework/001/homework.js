// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const a = [...Array(30)].map(_ => Math.floor(Math.random() * (25 - 5 + 1)) + 5);
console.log(...a);

// 2. Naudodamiesi 1 uždavinio masyvu:
// a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log(a.filter(n => n > 10).length);

// b) Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log([...a].sort((b, c) => c - b)[0], a.indexOf([...a].sort((b, c) => c - b)[0]));

// c) Suskaičiuokite visų porinių(lyginių) indeksų reikšmių sumą;
console.log([...a].reduce((t, _, i) => t + (i % 2 === 0 ? i : 0), 0));

// d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const b = [...a].map((n, i) => n - i);
console.log(b);

// e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
a.push(...[...Array(10)].map(_ => Math.floor(Math.random() * (25 - 5 + 1)) + 5))
console.log(a);

// f) Iš masyvo elementų sukurkite du naujus masyvus.Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių(pagal neporinį - porinį indeksą, ne reikšmę);
const odd = [...a].filter(n => n % 2 !== 0);
const even = [...a].filter(n => n % 2 === 0);
console.log(odd);
console.log(even);

//g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
even.forEach((n, i) => even[i] = n > 15 ? 0 : n);
console.log(even);

// h) Suraskite pirmą(mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
console.log(even.indexOf(even.find(n => n > 10)));


//3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
const abc = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]);

console.log(abc);
console.log(abc.reduce((t = {}, n) => {
    t[n] ? t[n]++ : t[n] = 1;
    return t;
}, {}));

// 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
const abc1 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][parseInt(Math.random() * 4)]);
const abc2 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][parseInt(Math.random() * 4)]);
const abc3 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][parseInt(Math.random() * 4)]);
const three = [...abc1].map((n, i) => n + abc2[i] + abc3[i])
console.log(abc1);
console.log(abc2);
console.log(abc3);
console.log(three);
console.log([...new Set(three)].length, [...new Set(three)]);

// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

/* const proto1 = Array(999 - 100 + 1).fill(0).map((_, i) => i + 100);
const proto2 = Array(999 - 100 + 1).fill(0).map((_, i) => i + 100);
const arr1 = [...Array(100)].map((_, i, arr) => proto1.splice(parseInt(Math.random() * (999 - 100 + 1 - (i + 1))), 1)[0]);
const arr2 = [...Array(100)].map((_, i, arr) => proto2.splice(parseInt(Math.random() * (999 - 100 + 1 - (i + 1))), 1)[0]); */

const arr1 = [...Array(100)].reduce((t, c) => {
    const randFunc = () => parseInt(Math.random() * (999 - 100 + 1)) + 100;
    let rand = randFunc();
    if (!t.includes(rand)) {
        t.push(rand);
    } else {
        do {
            rand = randFunc();
        } while (t.includes(rand));
        t.push(rand);
    }
    return t;
}, [])
const arr2 = [...Array(100)].reduce((t, c) => {
    const randFunc = () => parseInt(Math.random() * (999 - 100 + 1)) + 100;
    let rand = randFunc();
    if (!t.includes(rand)) {
        t.push(rand);
    } else {
        do {
            rand = randFunc();
        } while (t.includes(rand));
        t.push(rand);
    }
    return t;
}, [])
// console.log(arr1);
// console.log([...new Set(arr1)]);
// console.log(arr2);
// console.log([...new Set(arr2)]);

/* const proto = Array(15 - 5 + 1).fill(0).map((_, i) => i + 5);
const arr1 = [...Array(5)].map((_, i, arr) => proto.splice(parseInt(Math.random() * (15 - 5 + 1 - (i + 1))), 1)[0]);
console.log(proto);
console.log([...new Set(arr1)]); */

//6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
const arr3 = arr1.filter(n => !arr2.includes(n));
console.log(arr3);

// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
const arr4 = arr1.filter(n => arr2.includes(n));
console.log(arr4);

// console.clear();
// 8. Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.
// const arr5 = arr1.filter(n => arr2.length > n).map((n) => arr2[n]);
// console.log(arr5);

// 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai - atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma.Ketvirtas - antro ir trečio suma.Penktas trečio ir ketvirto suma ir t.t.
const randArr = Array(10).fill(0).reduce((t, _, i) => {
    t.push(i <= 1 ? parseInt(Math.random() * (25 - 5 + 1)) + 1 : t[i - 1] + t[i - 2])
    return t;
}, []);
console.log(randArr);