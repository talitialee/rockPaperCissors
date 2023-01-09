let resetBtn = document.getElementById("reset");
let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let opierreBtn = document.getElementById("opierre");
let ofeuilleBtn = document.getElementById("ofeuille");
let ociseauxBtn = document.getElementById("ociseaux");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");
let chooseYourWeapon = document.getElementById("chooseYourWeapon");



const jouerManche = (e) => {
    let choix = e.target.closest(".btn-joueur");

    btnJoueur.forEach(btn => {
        btn.classList.add('desactivated');
        btn.removeEventListener("click", jouerManche);
    })

    choix.classList.remove("desactivated");
    choix.classList.add("active");

    let choixJoueur = choix.id;
    
    let choixOrdi = faireChoixOrdinateur();

    verifierGagnant(choixJoueur,choixOrdi);
    nextBtn.style.display = "block";
    chooseYourWeapon.style.display = "none";
};
       
const PIERRE = "pierre";
const FEUILLE = "feuille";
const CISEAUX = "ciseaux";
        
        
const faireChoixOrdinateur = () =>{
        // 0 = pierre
        // 1 = feuille
        // 2 = ciseaux

        let nbAleatoire = Math.floor(Math.random() * 3);

        switch(nbAleatoire) {
            case 0:
                opierreBtn.classList.add("active");
                return PIERRE;
            case 1:
                ofeuilleBtn.classList.add("active");
                return FEUILLE;
            default:
                ociseauxBtn.classList.add("active");
                return CISEAUX;
                
        }
    
;}

const verifierGagnant = (choixJoueur, choixOrdi) => {
        if(choixJoueur == choixOrdi) {
        message.textContent = "It's a tie...";
        return;

    }

    if(choixJoueur == PIERRE) {
        if(choixOrdi == FEUILLE){
            return victoireOrdinateur();
        } else if(choixOrdi == CISEAUX) {
            return victoireJoueur();
        }
    }

    if(choixJoueur == FEUILLE) {
        if(choixOrdi == PIERRE){
            return victoireJoueur();
        } else if(choixOrdi == CISEAUX) {
            return victoireOrdinateur();
        }
    }

    if(choixJoueur == CISEAUX) {
        if(choixOrdi == FEUILLE){
            return victoireJoueur();
        } else if(choixOrdi == PIERRE) {
            return victoireOrdinateur();
        }
    }
};

const victoireOrdinateur = () =>{
    message.textContent="You loose...";
    scoreOrdinateur.textContent++;
};

const victoireJoueur = () =>{
    message.textContent="You win!";
    scoreJoueur.textContent++;
};

const preparerNouvelleManche = () => {
    btnJoueur.forEach(btn => {
        btn.classList.remove("desactivated");
        btn.classList.remove("active");
        btn.addEventListener('click', jouerManche);
        nextBtn.style.display = "none";

    });

    opierreBtn.classList.remove("active");
    ofeuilleBtn.classList.remove("active");
    ociseauxBtn.classList.remove("active");

    chooseYourWeapon.style.display = "block";
    message.textContent= "Your move!"
};



nextBtn.addEventListener("click", preparerNouvelleManche);

btnJoueur.forEach(btn => btn.addEventListener("click", jouerManche));

resetBtn.addEventListener("click", () => {
    scoreJoueur.textContent= 0;
    scoreOrdinateur.textContent= 0;

    preparerNouvelleManche();
})



// Audio player //
  
let btnOn = document.getElementById("on");
let btnOff = document.getElementById("off");
let x = document.getElementById("myAudio"); 

function playAudio() { 
 x.play(); 
   btnOff.style.display = "block";
   btnOn.style.display = "none";
} 

function pauseAudio() { 
 x.pause(); 
   btnOff.style.display = "none";
   btnOn.style.display = "block";
} 