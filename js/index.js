//check if local storage has color or no 

let mainColor = localStorage.getItem("color_option")

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color_option"))

    //remove active from all li list
    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active")
        //Add active from all li list

        if (element.dataset.color === mainColor) {
            element.classList.add("active")
        }
    })
}


//settings-container

document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    document.querySelector(".settings-box").classList.toggle("open")

    this.classList.toggle("fa-spin");

}

//switch-colors 

const colorsli = document.querySelectorAll(".colors-list li")
colorsli.forEach(function(li) {
    li.addEventListener("click",(e)=>{

        document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
        // set localStorge color 
        localStorage.setItem("color_option",e.target.dataset.color)

        // remove active from li 

        handleActive(e);
    })
})

//switch-background 

    const backgroundElement = document.querySelectorAll(".random-backgrounds span")
        backgroundElement.forEach(function(span) {
            span.addEventListener("click",(e)=>{
                document.documentElement.style.setProperty("url",e.target.dataset.backgroundElement)
                // set localStorge color 
                localStorage.setItem("random-backgrounds",e.target.dataset.backgroundElement)
            handleActive(e);
    })
})

// Select skills selector 

let skillSele = document.querySelector(".skills") ;

window.onscroll = function () {
    let skillTop = skillSele.offsetTop;


    let skillHeight = skillSele.offsetHeight;


    let windowHeight = this.innerHeight;


    let windowScroll = this.pageYOffset;
    
    if(windowScroll > (skillTop + skillHeight - windowHeight)){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span") ;

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }
}

// invinte animate


$(function(){
    (function animateImge() {
            $(".my-work .click").animate({

        top:"-170",

    },1000,function(){

        $(this).animate({

            top:"-112px"

        },1000,function(){
            animateImge();
        })
    })
    })();
});


//create Pop-up with the img

let galary = document.querySelectorAll(".my-work img") ;


galary.forEach(img => {




    img.addEventListener('click' , (e) => {


        let overlay = document.createElement("div") ;

        overlay.className = "pop-up" ;

        document.body.appendChild(overlay) ;


        let popbox = document.createElement("div") ;

        popbox.className = "popup-box" ; 


                if (img.alt !== null) {


            let imgHeading = document.createElement("h3") ;

            let imgText = document.createTextNode(img.alt) ;

            imgHeading.appendChild(imgText) ;


            popbox.appendChild(imgHeading) ;


        }

        let popupimg = document.createElement("img") ;


        popupimg.src = img.src ;

        popbox.appendChild(popupimg) ;


        document.body.appendChild(popbox)

        let closeButton = document.createElement("span") ;

        let closeTextButton = document.createTextNode("X") ;

        closeButton.appendChild(closeTextButton) ;

        closeButton.className = "close-button" ;

        popbox.appendChild(closeButton) ;
        
    })


});


// close PopUp 

document.addEventListener("click" , (e) => {



    if (e.target.className == "close-button") {



        e.target.parentNode.remove();

        document.querySelector(".pop-up").remove() ;

    }


})




// select all bullets 


let navBullets = document.querySelectorAll(".nav-bullets .bullets") ;

navBullets.forEach(bullet => {
    bullet.addEventListener("click" , function(e) {
        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: "smooth" 

        });
    })
})




// select all Links 


let allLinks = document.querySelectorAll(".links a") ;

allLinks.forEach(link => {
    link.addEventListener("click" , function(e) {

        e.preventDefault() ;

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : "smooth"
        })
    })
})





// Handle Active state

function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active") ;

    })

    ev.target.classList.add("active")

}

let bulletsSpan = document.querySelectorAll(".bullets-option span") ;


let bulletsContainer = document.querySelector(".nav-bullets") ;


let bulletItem = localStorage.getItem("bullets_option");


if (bulletItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active") ;

    })

    if (bulletItem === "block") {


        bulletsContainer.style.display="block"


        document.querySelector(".bullets-option .yes").classList.add("active") ;


    }else {

        
        bulletsContainer.style.display="none"


        document.querySelector(".bullets-option .no").classList.add("active") ;


    }
}





bulletsSpan.forEach(span => {
    span.addEventListener("click" , (e) =>{
        if (span.dataset.display === "show") {

        bulletsContainer.style.display = "block"

        localStorage.setItem("bullets_option","block")

        } else {

        bulletsContainer.style.display = "none"


        localStorage.setItem("bullets_option","none")
        
        }

        handleActive(e);
    });
});



// Reset Button 

document.querySelector(".reset-option").onclick = function () {
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("color_option");
    window.location.reload()

}

// Toggle Menu 


let menuButton = document.querySelector(".toggle-menu") ;


let tLinks = document.querySelector(".links") ; 


menuButton.onclick = function (e) {

    this.classList.toggle("menu-active") ;
    


    tLinks.classList.toggle("open") ;

    // Stop Propagation 
    e.stopPropagation() ;
}


// toggle menu close 



document.addEventListener("click" , (e) => {
    
    if (e.target !== menuButton && e.target !== tLinks) {

        // Check if Menu Open or Not

        if (tLinks.classList.contains("open"))
        tLinks.classList.remove("open") ;
        menuButton.classList.remove("menu-active")
    }

})


// Stop Propagation 


tLinks.onclick = function (e) {
    e.stopPropagation();
}