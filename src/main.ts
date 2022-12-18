import { createApp } from 'vue';
import AppNavButton from "./AppNavButton.vue";
import AppLangButton from './AppLangButton.vue';
import AppForm from './AppForm.vue';
import "./assets/main.css"


function DateDiff(date1:Date, date2:Date) {
    return date1.getTime() - date2.getTime();
}


window.addEventListener("DOMContentLoaded", function(){
   
    let mobileMenuButton = document.getElementById("header-mobile-button");
    mobileMenuButton?.addEventListener("click", showMenuMobile,{once: true});

    let sliderTrack = document.getElementById("reviews-frame-pages");
    if (sliderTrack!=null) sliderTrack.style.left="-100%";

    let sliderButtonLeft = document.getElementById("reviews-frame-menu-left");
    if (sliderButtonLeft!=null) sliderButtonLeft.addEventListener("click", sliderPreviousPage);
    let sliderButtonRight = document.getElementById("reviews-frame-menu-right");
    if (sliderButtonRight!=null) sliderButtonRight.addEventListener("click", sliderNextPage);


    let partnersFirst = document.getElementById("partners-first");
    if(partnersFirst!=null) {
        partnersFirst.style.left="-22vw";
        const partnersFirstInterval = setInterval( function(){
            let partnersFirst = document.getElementById("partners-first");
            if (partnersFirst==null) return;
            let current = parseFloat(partnersFirst.style.left.slice(0,partnersFirst.style.left.length-2));
            if (current<=2) {
                partnersFirst.style.left=(current+0.25)+"vw";
            } else {
                partnersFirst.style.left="-23vw";
                let partners =  partnersFirst.getElementsByClassName("partner");
                let temp = partners[partners.length-1].innerHTML;
                for (let i=partners.length-1; i>0;i--){
                    partners[i].innerHTML=partners[i-1].innerHTML;
                }
                partners[0].innerHTML=temp;
            }
        },20);
    }
    let partnersSecond = document.getElementById("partners-second");
    if(partnersSecond!=null) {
        partnersSecond.style.right="-22vw";
        const partnersSecondInterval = setInterval( function(){
            let partnersSecond = document.getElementById("partners-second");
            if (partnersSecond==null) return;
            let current = parseFloat(partnersSecond.style.right.slice(0,partnersSecond.style.right.length-2));
            if (current<=2) {
                partnersSecond.style.right=(current+0.0625)+"vw";
            } else {
                partnersSecond.style.right="-23vw";
                let partners =  partnersSecond.getElementsByClassName("partner");
                let temp = partners[0].innerHTML;
                for (let i=0; i<partners.length-1;i++){
                    partners[i].innerHTML=partners[i+1].innerHTML;
                }
                partners[partners.length-1].innerHTML=temp;
            }
        },10);
    }


    let listItems = document.getElementsByClassName("faq-list-item-container");
    let questions = document.getElementsByClassName("faq-list-question");
    for (let i=0;i<questions.length;i++){
        questions[i].addEventListener("click", function (){
            let active = -1;
            for (let j=0;j<listItems.length;j++){
                for (let k=0;k<listItems[j].classList.length;k++) {
                    if (listItems[j].classList[k]=="active") {
                        active = j;
                    }
                }
            }
            if (active==-1){
                listItems[i].className="active faq-list-item-container";
            } else if (i==active) {
                listItems[i].className="faq-list-item-container";
            } else {
                listItems[active].className="faq-list-item-container";
                listItems[i].className="active faq-list-item-container";
            }
        });
    }
});


function answerHide(answer:HTMLElement):void {
    
}



const SLIDER_PAGES_NUMBER = 3;
function sliderNextPage():void {
    let sliderTrack = document.getElementById("reviews-frame-pages");
    if (sliderTrack != null){
        const intervalNext = setInterval( function (){
            let sliderTrack = document.getElementById("reviews-frame-pages");
            if (sliderTrack==null) return;
            let pageNum = document.getElementById("reviews-frame-menu-center");
            if (pageNum==null) return;
            let current =  parseInt(sliderTrack.style.left.slice(0,sliderTrack.style.left.length-1) ? sliderTrack.style.left.slice(0,sliderTrack.style.left.length-1) : "-100") ;
            if ((-1*current)%100!=99){
                sliderTrack.style.left = (current-1)+"%";
            } else {
                sliderTrack.style.left = (current-1)+"%";
                clearInterval(intervalNext);
                if ((current-1)===-100*(SLIDER_PAGES_NUMBER+1)) {
                    sliderTrack.style.left = "-100%";
                    pageNum.innerHTML="0"+1+"<span>/0"+SLIDER_PAGES_NUMBER+"</span>";
                } else pageNum.innerHTML="0"+((current-1)/-100)+"<span>/0"+SLIDER_PAGES_NUMBER+"</span>";
            }
        });
    }
}
function sliderPreviousPage():void {
    let sliderTrack = document.getElementById("reviews-frame-pages");
    if (sliderTrack != null){
        const intervalNext = setInterval( function (){
            let sliderTrack = document.getElementById("reviews-frame-pages");
            if (sliderTrack==null) return;
            let pageNum = document.getElementById("reviews-frame-menu-center");
            if (pageNum==null) return;
            let current =  parseInt(sliderTrack.style.left.slice(0,sliderTrack.style.left.length-1) ? sliderTrack.style.left.slice(0,sliderTrack.style.left.length-1) : "-100") ;
            if ((-1*current)%100!=1){
                sliderTrack.style.left = (current+1)+"%";
            } else {
                sliderTrack.style.left = (current+1)+"%";
                clearInterval(intervalNext);
                if ((current+1)===0) {
                    sliderTrack.style.left = -100*(SLIDER_PAGES_NUMBER)+"%";
                    pageNum.innerHTML="0"+SLIDER_PAGES_NUMBER+"<span>/0"+SLIDER_PAGES_NUMBER+"</span>";
                } else pageNum.innerHTML="0"+((current+1)/-100)+"<span>/0"+SLIDER_PAGES_NUMBER+"</span>";
            }
        });
    }
}

function showMenuMobile() {
    const intervalShow = setInterval(function (start:Date){
        let mobileMenu = document.getElementById("menu-mobile");
        if(mobileMenu!=null) {
            let current = new Date();
            mobileMenu.style.top="calc(100vh - 23px - "+(DateDiff(current,start)/500*508)+"px)";
            if (DateDiff(current,start)>500) {
                clearInterval(intervalShow);
                mobileMenuButton?.addEventListener("click", hideMenuMobile, {once: true});
            }
        }
    }, 3, new Date());
    let mobileMenu = document.getElementById("menu-mobile");
    if (mobileMenu!=null) mobileMenu.style.display="block";
    let mobileMenuButton = document.getElementById("header-mobile-button");
}

function hideMenuMobile() {
    const intervalHide = setInterval(function (start:Date){
        let mobileMenu = document.getElementById("menu-mobile");
        if(mobileMenu!=null) {
            let current = new Date();
            mobileMenu.style.top="calc(100vh - 23px - "+(508-(DateDiff(current,start)/500*508))+"px)";
            if (DateDiff(current,start)>500) {
                clearInterval(intervalHide);
                mobileMenu.style.display="none";
                mobileMenuButton?.addEventListener("click", showMenuMobile, {once: true});
            }
        }
    }, 3, new Date());
    let mobileMenu = document.getElementById("menu-mobile");
    let mobileMenuButton = document.getElementById("header-mobile-button");
}


const appNavButton1 = createApp(AppNavButton);
const mountedAppNavButton1 = appNavButton1.mount('#appNavFirst');

const appLangButton = createApp(AppLangButton);
const mountedAppLangButton = appLangButton.mount('.settings-buttons');

const appForm = createApp(AppForm);
const mountedAppForm = appForm.mount('#appForm');