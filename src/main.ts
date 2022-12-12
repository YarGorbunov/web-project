import { createApp } from 'vue';
import HeaderVideo from "./HeaderVideo.vue";
import AppNavButton from "./AppNavButton.vue";
import AppLangButton from './AppLangButton.vue';
import './assets/main.css';
import AppLangButtonVue from './AppLangButton.vue';


function DateDiff(date1:Date, date2:Date) {
    return date1.getTime() - date2.getTime();
}


window.addEventListener("DOMContentLoaded", function(){
    let appHeaderVideo = document.getElementById("appHeaderVideo");
    let container = document.getElementsByTagName("body");
    if (appHeaderVideo!= undefined && container != undefined){
        appHeaderVideo.style.width=container[0].clientWidth+"px";
        window.addEventListener("resize", function() {
            let appHeaderVideo = document.getElementById("appHeaderVideo");
            let container = document.getElementsByTagName("body");
            if (appHeaderVideo!= undefined && container != undefined){
                appHeaderVideo.style.width=container[0].clientWidth+"px";
            }
        });
    }
    window.dispatchEvent(new Event('resize'));

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
        /*mobileMenuButton?.addEventListener("click", function(){
            clearInterval(intervalShow);
            mobileMenuButton?.addEventListener("click", showMenuMobile,{once: true});
            if (mobileMenu!=null) {mobileMenu.style.display="none"; mobileMenu.style.top="-508px";}
        },{once: true});*/
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
    let mobileMenuButton = document.getElementById("header-mobile-button");
    mobileMenuButton?.addEventListener("click", showMenuMobile,{once: true});

});


const appHeaderVideo = createApp(HeaderVideo);
const mountedAppHeaderVideo = appHeaderVideo.mount('#appHeaderVideo');

const appNavButton1 = createApp(AppNavButton);
const mountedAppNavButton1 = appNavButton1.mount('#appNavFirst');

const appLangButton = createApp(AppLangButton);
const mountedAppLangButton = appLangButton.mount('.settings-buttons');