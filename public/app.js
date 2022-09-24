
let picto = document.querySelectorAll(".container img")
let classPicto = document.querySelector(".picto")
let classPictoNum = document.querySelector(".container img.numeros")
let body = document.querySelector("body")
let container = document.querySelector(".container")
let zoomBar = document.querySelector(".zoomBar")
let zoomBase = document.querySelector(".normal")
let zoom10  =document.querySelector(".fDix")
let zoom20  =document.querySelector(".fVing")
let mouseX = 190 //190
let mouseY = 140 //35
let correctionX = 0
let correctionY = 0

//---- Zoom  -------//

zoomBase.addEventListener('click', () => {
    body.style.backgroundSize = "1220px"
    container.style.height = "730px"
    container.style.width = "80%"
    classPictoNum.style.width = "100px"
    zoomBar.style.left = "1080px"
    for (let i = 0; i < picto.length ; i++) {
        picto[i].classList.replace("pictoTen", "picto")
        picto[i].classList.replace("pictoTwenty", "picto")
    }
    correctionX = 0
})
zoom10.addEventListener('click', () => {
    body.style.backgroundSize = "1350px"
    container.style.height = "800px"
    container.style.width = "90%"
    classPictoNum.style.width = "120px"
    zoomBar.style.left = "1190px"
    for (let i = 0; i < picto.length ; i++) {
        picto[i].classList.replace("picto", "pictoTen")
        picto[i].classList.replace("pictoTwenty", "pictoTen")
    }
    correctionX = 70
})
zoom20.addEventListener('click', () => {
    body.style.backgroundSize = "1600px"
    container.style.height = "940px"
    container.style.width = "90%"
    classPictoNum.style.width = "140px"
    zoomBar.style.left = "1280px"
    for (let i = 0; i < picto.length ; i++) {
        picto[i].classList.replace("picto", "pictoTwenty")
        picto[i].classList.replace("pictoTen", "pictoTwenty")
    }
    correctionX = 70
})



//---- Drag and drop  -------//
for (let i = 0; i < picto.length ; i++) {
    //img = picto[i]
    //console.log(picto[i]);

    picto[i].onmousedown = (e) => {
        //console.log('down');
        picto[i].classList.add('fly')
        console.log(e);
        correctionY = e.view.pageYOffset
        //correctionX = e.view.pageXOffset
        console.log(correctionY);
        console.log(correctionX);
        function onMouseMove(e) {
            xMousePos = (e.screenX - mouseX) + correctionX
            yMousePos = (e.screenY - mouseY) + correctionY
            picto[i].style.left = `${xMousePos}px`
            picto[i].style.top = `${yMousePos}px`
        }

        document.addEventListener('mousemove', onMouseMove)
        
        picto[i].onmouseup = function() {
            //console.log('up');

            document.removeEventListener('mousemove', onMouseMove)
            //img.onmouseup = null;
        }
    }   
    picto[i].ondragstart = function() {
        return false;
      };
}



