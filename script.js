//cibler bouton commencer 
const start = document.getElementById('start');
//----------------------------------on-off sound-----------------------------------------------------------

// basculement bouton audio on - off 
//variable du btn on 
const audioOn = document.getElementById('iconOn');

//variable du btn off
const audioOff = document.getElementById('iconOff');

// variable audio 
const audio = document.getElementById('audioPlayer');
//ecoute le btn on 
audioOn.addEventListener('click', () => {
    //faire disparaitre le logo on 
    audioOn.classList.add('hidden');
    //fait apparaitre le logo off 
    audioOff.classList.remove('hidden');
    //lancer la piste audio 
    audio.play(); 
})
//ecoute le bouton off
audioOff.addEventListener('click', () => {
    //fait apparaitre le logo on 
    audioOff.classList.add('hidden');
    //faire disparaitre le logo off 
    audioOn.classList.remove('hidden');
    //mettre l audio en pause
    audio.pause();
    //remise à zero de l audio 
    // audio.currentTime = 0;
})
//--------------------bouton play/pause-------------------------------------
//creer une fonction qui play une music 
const play = document.getElementById('play');
const pause = document.getElementById('pause');

pause.addEventListener('click', ()=>{
    play.classList.remove('hidden');
    pause.classList.add('hidden');
    audio.pause();
})
play.addEventListener('click', ()=>{
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    audio.play()
    audio.currentTime = 0 ; 
})

//--------------------hidden au clic commencer --------------------------
// variable du main et header 
const header = document.getElementById('header')
const main = document.getElementById('main')
//ecouter l element bouton start
start.addEventListener('click', () => {
    //je  cache le header (menu principal)
    header.classList.add('hidden');
    //je fais apparaitre le main (l animation)
    main.classList.remove('hidden');

})

//------------------------btn close-------------------------------------
//variable du bouton close
const btnClose = document.querySelector('.btnClose');

//Ecoute la bouton close 
btnClose.addEventListener('click', () => {
    location.reload(); 
    //je  cache le main (l animation)
    main.classList.add('hidden');
    //je fais apparaitre le header (menu principal)
    header.classList.remove('hidden');
})

//-----------------------------Select----------------------------------
// envoyer tout les valeur du select dans la let "temps"

//variable du compteur
const select = document.querySelector("#compteur"); 

//ecouter l element bouton start
let id = null; 
    start.addEventListener('click', () => {
    //peut aussi s appeler comme ceci :
        // start.onclick = ()=>{
    // definir la value du selecteur
    let selecTime = select.value;  
    //envois les informations de timer a partir du moment ou l animation apparaît 
    if ( main.classList.remove('hidden') === main.classList.remove('hidden') ){
        //appel les valeurs de select 
    switch (selecTime) {
        //dans le cas ou la valeur 1 (1 min) est selectionnée
        case "1":
            //j'envois la valeur du 'temp' si case 1 séléctionné 
            temps = 60;
            // renvoi les valeur a la fontcion miminuerTimer
            diminuerTimer(selecTime );
            // if (play musique si btn son active)
            break;
        case "2":
            temps = 120;
            diminuerTimer(selecTime )
            break;
        case "3":
            temps = 180;
            diminuerTimer(selecTime )
            break;
        case "4":
            temps = 240;
            diminuerTimer(selecTime)
            break;
        case "5":
            temps = 300;
            diminuerTimer(selecTime)
            break;
        default:
            window.alert('veuillez choisir une durée'); 
            location.reload(); 
            break;
    }}
})

//--------------------------------rythme de réspiration-------------------------
const respiration = document.getElementById ('respiration'); 
const bouche = document.querySelector('.mouth')
start.addEventListener ('click', ()=>{ 
        let respirationValue = respiration.value; 
    if ( main.classList.remove('hidden') === main.classList.remove('hidden') ){

const rythme = document.getElementById('rythme')
    switch (respirationValue){
        case "1": 
        rythme.classList.add('rythme64');
        break;

        case "2": 
        rythme.classList.add('rythme55');
        break;

        case "3": 
        rythme.classList.add('rythme46');
        break;

        case "4": 
        rythme.classList.add('rythme37');
        break;

    default:
        window.alert('veuillez choisir un rythme'); 
        location.reload(); 
        break;
    }}
});



//--------------------------------Timer--------------------------------

//https://www.commentcoder.com/timer-javascript/

// definir la base de depart du timer (test)
// le temps = a la value de mon select
let temps = 60;
//definir la base de depart du timer en ciblant les elements d affichage et ajout de ce timer
const timerElement = document.getElementById('timer'); 
//fonction pour diminuer l affichage de -1 par -1
    function diminuerTimer() {

        // diminuer le timer par interval de 1 seconde
        setInterval(() =>{
    // definir les minutes et les seconde

    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    //ajoutes les 0 au nombre < à la dizaine
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    //ajouter le text à afficher (ici des nombres)
    timerElement.textContent = minutes + ":" + secondes; 

    // //action des -1 
    // temps --; 

    //arrêter de timer une fois arrivé a zéro 
    temps = temps <= 0 ? 0 : temps - 1;  

    },1000 ); }

//------------------------compteur de visite------------------------------
const counter = document.getElementById('counter')
const updateCounter = async () =>{
    const data = await fetch( "https://api.countapi.xyz/hit/counter_Coeherence_Cardiaque/visits");
    const count = await data.json()
    counter.textContent = count.value

}
updateCounter()
console.log(counter);