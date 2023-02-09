/* Reikalavimui JS kodui: turi būti sukurtas masyvas balls ir klasė ColorBall. 
Reikalavimui HTML: turi būti sukurti du
laukeliai duomenims įvesti - spalvai ir numeriui; vieta, kurioje bus atvaizduojami sukurti rutuliukai, du mygtukai -
“sukurti naują” ir “ištrinti seniausią”. Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums
yra reikalingi.Galite naudoti CSS tiek atskirame faile, tiek < style > viduje ar inline be jokių ribojimų.
 */

const colorDOM = document.getElementById('color');
const numberDOM = document.getElementById('number');
const addButtonDOM = document.getElementById('add');
const removeButtonDOM = document.getElementById('remove');
const containerDOM = document.getElementById('container');
/* 
1. Sukurti klasę ColorBall, kuri turėtų dvi savybes: color ir number.Savybės turi būti įrašomos objekto kūrimo
metu.Kiekvienas sukurtas naujas objektas turi būti pridedamas į masyvą balls.
*/
console.log('-----------------1-----------------');
class ColorBall {
    constructor(color, number) {
        this.color = color;
        this.number = number;
    }

}
const balls = [];
/*
2. Mygtukas “sukurti naują” turi inicijuoti kodą, kuris perskaitytų duomenis iš laukelių ir pagal juos sukurtų naują
objektą. 
*/
console.log('-----------------2-----------------');
addButtonDOM.addEventListener('click', () => {
    balls.push(new ColorBall(colorDOM.value, numberDOM.value));
    ballGenerator();
});

/* 
3. Masyvas turi būti atvaizduojamas vizualiai HTML’e.Jame esantys objektai turi būti atvaizduojami kaip atitinkamos
   spalvos apskritimai su numeriu viduryje.
*/
console.log('-----------------3-----------------');
function ballGenerator() {
    const ball = document.createElement('div');
    ball.style.width = '100px';
    ball.style.height = '100px';
    ball.style.borderRadius = '50%';
    ball.style.backgroundColor = balls.at(-1).color;
    ball.textContent = balls.at(-1).number;
    ball.style.display = 'inline-block';
    ball.style.lineHeight = '100px';
    ball.style.textAlign = 'center';
    containerDOM.appendChild(ball);
}

/* 
4. Mygtukas “ištrinti seniausią” turi inicijuoti kodą, kuris iš masyvo pašaliną seniausią kamuoliuką(seniausias yra
    masyvo pradžioje)
    */
console.log('-----------------4-----------------');

removeButtonDOM.addEventListener('click', () => {
    if (containerDOM.childNodes.length !== 0) {
        balls.shift();
        containerDOM.removeChild(containerDOM.firstChild);

    }
});

/* 5. Pasikeitus masyvo elementams(pridėjus, ištrynus) vizualinis masyvo atvaizdas HTML’e turi keistis dinamiškai.; */
console.log('-----------------5-----------------');