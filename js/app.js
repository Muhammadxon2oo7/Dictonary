const searchScreen = document.getElementById("searchScreen")
const searchScreenTwo = document.getElementById("searchScreenTwo")
const card = document.getElementById("card")
const textEl = document.getElementById("text")
const textDecEl = document.getElementById("textDec")
const cardTwo = document.getElementById("cardTwo")
const imgEl = document.getElementById("img")
const audioEl = document.getElementById("audio")

const ChangeUzEl=document.getElementById("changeuz")
const ChangeEnEl=document.getElementById("changeen")

ChangeEnEl.addEventListener("click",()=>{
    searchScreen.style.display = "block"
    searchScreenTwo.style.display ="none"
    ChangeUzEl.style.display ="block"
    ChangeEnEl.style.display = "none"
})

function myFun(){
    card.style.display = "none";
    cardTwo.style.display = "none";
    if(searchScreen.value == 0){
        card.style.display = "flex";
        cardTwo.style.display = "flex";
        setInterval(()=>{
            if(searchScreen.value.length >= 2){
                cardTwo.style.display = "none";
                let soz=searchScreen.value
            
                switch(soz.toLowerCase()){
                    case "yo`lbars":
                        card.style.display = "flex"
                        textEl.innerHTML ="Tiger"
                        textDecEl.innerHTML = "Tigers (Panthera tigris) are one of the largest predators in the world"
                        imgEl.src="../img/tiger-head-transparent-11546840998fnuw2ey0l3-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src = "../audio/tigerSound.mp3"
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "sher":
                        card.style.display = "flex"
                        textEl.innerHTML ="Lion"
                        textDecEl.innerHTML = "The lion Panthera leo is one of the world’s best known and most charismatic species."
                        imgEl.src="../img/lion-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/lionSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "ilon":
                        card.style.display = "flex"
                        textEl.innerHTML ="Snake"
                        textDecEl.innerHTML = "snake, suborder Serpentes, also called serpent, any of more than 3,400 species of reptiles distinguished"
                        imgEl.src="../img/snake-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/snakeSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "ayiq":
                        card.style.display = "flex"
                        textEl.innerHTML ="Bear"
                        textDecEl.innerHTML = " They are classified as caniforms, or doglike carnivorans."
                        imgEl.src="../img/bear-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/bearSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "qush":
                        card.style.display = "flex"
                        textEl.innerHTML ="Bird"
                        textDecEl.innerHTML = " Birds are vertebrates (animals with backbones) with wings and feathers. Most birds can fly"
                        imgEl.src="../img/blue-bird-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/birdSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "it":
                        card.style.display = "flex"
                        textEl.innerHTML ="Dog"
                        textDecEl.innerHTML = "The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf"
                        imgEl.src="../img/dog-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/dogSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "fil":
                        card.style.display = "flex"
                        textEl.innerHTML ="Elephant"
                        textDecEl.innerHTML = "The African bush elephant, also known as the savanna elephant is the planet’s largest land animal"
                        imgEl.src="../img/elephant-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/elephantSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "tulki":
                        card.style.display = "flex"
                        textEl.innerHTML ="Fox"
                        textDecEl.innerHTML = "Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family "
                        imgEl.src="../img/fox-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/foxSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "bo`ri":
                        card.style.display = "flex"
                        textEl.innerHTML ="Wolf"
                        textDecEl.innerHTML = "The wolf (Canis lupus[b]), also known as the gray wolf or grey wolf, is a large canine native to Eurasia "
                        imgEl.src="../img/wolf-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/wolfSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    case "quyon":
                        card.style.display = "flex"
                        textEl.innerHTML ="Rabbit"
                        textDecEl.innerHTML = "Rabbits, also known as bunnies or bunny rabbits, are small mammals in the family Leporidae"
                        imgEl.src="../img/Rabbit-removebg-preview.png";
                        imgEl.addEventListener("click",()=>{
                            audioEl.src="../audio/rabbitSound.mp3";
                            audioEl.loop = false
                            audioEl.play();
                        })
                    break;
                    default:
                        console.log("iltimos faqat ro`yhatdagi hayvonlarni kiriting");
                }
            
            }
        },1000)

    }
    else{
        card.style.display = "none";
        cardTwo.style.display = "none";
    }
} 

searchScreen.addEventListener("click",myFun)

myFun()
const test=myFun()


ChangeUzEl.addEventListener("click",()=>{
    searchScreen.style.display = "none"
    searchScreenTwo.style.display ="block"
    ChangeUzEl.style.display ="none"
    ChangeEnEl.style.display = "block"
    searchScreenTwo.addEventListener("click",()=>{
        card.style.display = "none";
        cardTwo.style.display = "none";
        if(searchScreenTwo.value == 0){
            card.style.display = "flex";
            cardTwo.style.display = "flex";
            setInterval(()=>{
                if(searchScreenTwo.value.length >= 2){
                    cardTwo.style.display = "none";
                    let word=searchScreenTwo.value
                
                    switch(word.toLowerCase()){
                        case "tiger":
                            card.style.display = "flex"
                            textEl.innerHTML ="Yo`lbars"
                            textDecEl.innerHTML = "Yoʻlbars (Panthera tigris) — mushuksimonlar oilasiga mansub sut emizuvchi hayvon"
                            imgEl.src="../img/tiger-head-transparent-11546840998fnuw2ey0l3-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src = "../audio/tigerSound.mp3"
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "lion":
                            card.style.display = "flex"
                            textEl.innerHTML ="Sher"
                            textDecEl.innerHTML = "Arslon yoki sher (lotincha: Panthera leo) mushuksimonlar oilasiga mansub turdir"
                            imgEl.src="../img/lion-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/lionSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "snake":
                            card.style.display = "flex"
                            textEl.innerHTML ="Ilon"
                            textDecEl.innerHTML = "Ilonlar (Ophidia yoki Serpentes) - tangachalilar kenja turkumi"
                            imgEl.src="../img/snake-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/snakeSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "bear":
                            card.style.display = "flex"
                            textEl.innerHTML ="Ayiq"
                            textDecEl.innerHTML = "Ayiqlar (Ursidae) – yirtqichlar turkumiga mansub sut emizuvchilar oilasi "
                            imgEl.src="../img/bear-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/bearSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "bird":
                            card.style.display = "flex"
                            textEl.innerHTML ="Qush"
                            textDecEl.innerHTML = "Qushlar umurtqali hayvonlar sinfi Qushlarning uya qurish joyi va uya qurish usuli xilma-xil"
                            imgEl.src="../img/blue-bird-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/birdSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "dog":
                            card.style.display = "flex"
                            textEl.innerHTML ="It"
                            textDecEl.innerHTML = "It(lotincha:Canis familiaris)boʻrisimonlar oilasiga mansub uy hayvoni"
                            imgEl.src="../img/dog-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/dogSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "elephant":
                            card.style.display = "flex"
                            textEl.innerHTML ="Fil"
                            textDecEl.innerHTML = "Fillar(Elephanditae) <br> xartumlilar turkumi oilasi.Sistematiklar fikricha kenja oilasi."
                            imgEl.src="../img/elephant-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/elephantSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "fox":
                            card.style.display = "flex"
                            textEl.innerHTML ="Tulki"
                            textDecEl.innerHTML = "Tulki — itlar oilasi sutemizuvchilar bir nechta turining umumiy nomi"
                            imgEl.src="../img/fox-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/foxSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "wolf":
                            card.style.display = "flex"
                            textEl.innerHTML ="Bo`ri"
                            textDecEl.innerHTML = "Boʻri, qashqir (Canis lupus) — itsimonlar oilasiga mansub yirtqich sut emizuvchi hayvon"
                            imgEl.src="../img/wolf-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/wolfSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        case "rabbit":
                            card.style.display = "flex"
                            textEl.innerHTML ="Quyon"
                            textDecEl.innerHTML = "Quyon — tovushqonlar oilasiga mansub sut emizuvchi hayvon"
                            imgEl.src="../img/Rabbit-removebg-preview.png";
                            imgEl.addEventListener("click",()=>{
                                audioEl.src="../audio/rabbitSound.mp3";
                                audioEl.loop = false
                                audioEl.play();
                            })
                        break;
                        default:
                            console.log("please enter only listed animals");
                    }
                
                }
            },1000)
                
        }
        else{
            card.style.display = "none";
            cardTwo.style.display = "none";
        }
    })
})





