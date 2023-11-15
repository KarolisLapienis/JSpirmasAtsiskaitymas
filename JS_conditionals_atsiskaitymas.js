'use strict'

//1

let gautasBalas = 10;

switch (gautasBalas){
    case 1 || 2 || 3:
        console.log('Neigiamas pazymys');
        break;
    case 4 || 5:
        console.log('Teigiamas, bet reikia pasistengti');
        break;
    case 6 || 7:
        console.log('Vidutiniskai, ar tikrai tau to gana?');
        break;
    case 8 || 9:
        console.log('Pagirk save!');
        break;
    case 10:
        console.log('Super!');
        break;
    default:
        console.log('Pateikta neteisinga reiksme');
}

//2

let menesioPavadinimas = 'Sausis';

switch (menesioPavadinimas.toLowerCase()){
    case 'sausis' || 'vasaris' || 'gruodis':
        console.log('Ziema');
        break;
    case 'kovas' || 'balandis' || 'geguze':
        console.log('Pavasaris');
        break;
    case 'birzelis' || 'liepa' || 'rugpjutis':
        console.log('Vasara');
        break;
    case 'rugsejis' || 'spalis' || 'lapkritis':
        console.log('Ruduo');
        break;
    default:
        console.log('neteisingai pateiktas menuo');
}

//3


let valanda = 11;

switch (true){
    case (6 <= valanda && valanda < 11):
        console.log('Labas rytas');
        break;
    case (11 <= valanda && valanda < 18):
        console.log('Pavasaris');
        break;
    case (18 <= valanda && valanda < 21):
        console.log('Vasara');
        break;
    default:
        console.log('Labanakt');
}


//4

const date = new Date();
const day = date.getDay();

switch (day){
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    default:
        console.log('ERROR');
}


//5

let amzius = 18;
let turiPazymejima = true;

if (amzius >= 18) {
    if (turiPazymejima){
        console.log('Zmogus yra pilnametis ir turi vairuotojo pazymejima');
    }
    else {
        console.log('Zmogus yra pilnametis, bet neturi vairuotojo pazymejimo');
    }
}
else {
    console.log('Zmogus yra nepilnametis, dar negali tureti vairuotojo pazymejimo');
}

//6

let skaicius = 1;

switch (true){
    case skaicius == 0:
        console.log('Skaicius lygus 0');
        break;
    case skaicius < 0 :
        console.log('Skaicius yra neigiamas');
        break;
    case skaicius > 0 :
        console.log('Skaicius yra teigiamas');
        break;
    default:
        console.log('Neteisingai ivestas skaicius, tinka tik sveikieji skaicia');
}

//7

let vartotojoStatusas = 'prisijunges';

let arVartotojasAdminas = true;

if (vartotojoStatusas == 'prisijunges') {
    if (arVartotojasAdminas) {
        console.log('Vartotojas yra prisijunges ir yra adminas');
    }
    else {
        console.log('Vartotojas yra prisijunges ir nera adminas');
    }
}
else {
    console.log('Vartotojas neprisijunges');
}

//8


let vartotojasPrisijunges = true;
let vartotojoTipas = 'admin';
let vartotojasAutorius = true;

if (vartotojasPrisijunges) {
    if(vartotojoTipas == 'admin') {
        console.log('Skelbimas patvirtintas');
    }
    else if (vartotojasAutorius) {
        console.log('Galite sukurti arba istrinti skelbima');
    }
    else {
        console.log('Galite sukurti skelbima');
    }
}
else {
    console.log('Jokie veiksmai negalimi');
}

// let vartotojasAutorius = true;

// if (vartotojasPrisijunges) {
//     if(vartotojoTipas == 'admin') {
//         if(vartotojasAutorius) {
//             console.log('Skelbimas patvirtintas');
//         }
//         else {
//             console.log('Skelbimas patvirtintas');
//         }
//     }
//     else {
//         console.log('Galite redaguoti skelbima');
//     }
// }
// else {
//     console.log('Vartotojui jokie veiksmai negalimi');
// }


//9

let number = parseInt(prompt("Iveskite sveikaji skaiciu"));

if (number > 50) {
    console.log(`Skaicius ${number} yra didesnis uz 50`);
}
else {
    console.log(`Skaicius ${number} yra mazesnis arba lygus 50`);
}

//10

let zenklas = '/';
let pirmasSkaicius = 1;
let antrasSkaicius = 2;

if (zenklas = '/') {
    console.log(pirmasSkaicius / antrasSkaicius);
}
else if (zenklas = '*') {
    console.log(pirmasSkaicius * antrasSkaicius);
}
else if (zenklas = '+') {
    console.log(pirmasSkaicius + antrasSkaicius);
}
else if (zenklas = '-') {
    console.log(pirmasSkaicius - antrasSkaicius);
}
else {
    console.log('Error: netinkamai ivestas aritmetinis zenklas arba skaiciai');
}