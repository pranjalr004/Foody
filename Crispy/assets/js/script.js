'use strict'

// add event listener on multiple events

const addEventOnElements=function(elements,eventType,callback){
    for(let i=0,len=elements.length; i < len; i++) {
        elements[i].addEventListener(eventType,callback)
    }
}

// For Mobile Nav

const navbar=document.querySelector("[data-navbar]")
const navbarToggler=document.querySelectorAll("[data-nav-toggler]")
const navbarLinks=document.querySelectorAll("[data-nav-link]")
const overlay=document.querySelector("[data-overlay]")

const togglerNav=function(){
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
}


addEventOnElements(navbarToggler,"click",togglerNav)

const closeNav=function(){
    navbar.classList.remove("active")
    overlay.classList.remove("active")
}

addEventOnElements(navbarLinks,"click",closeNav)

// Header & Back Top Btn

const header=document.querySelector("[data-header]")
const backTopBtn=document.querySelector("[data-back-top-btn]")

window.addEventListener("scroll",function(){
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
    backTopBtn.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})