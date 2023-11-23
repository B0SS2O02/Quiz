const logo = document.querySelector('.n-h-logo');
const nav = document.querySelector('.navbar')
const navheader = document.querySelector('.n-header')
const navheadtitle = document.querySelector('.n-h-title')
const navlist = document.querySelector('.n-list')
const container = document.querySelector('.container')
const navlistelement = document.querySelectorAll('.n-l-e')

logo.addEventListener('click', () => {
    nav.classList.toggle('navbar-active');
    navheader.classList.toggle('n-header-active');
    navheadtitle.classList.toggle('n-h-title-active')
    navlist.classList.toggle('n-list-active')
    container.classList.toggle('container-active')
    logo.classList.toggle('logo-active')
});

// navlistelement.forEach((element)=>{
//     element.addEventListener('clicl',(e)=>{
//         console.
//     })
// })

const link = (url) => {
    let origin=document.location.origin.split('/')
    origin.push(url)
    document.location.href=origin.join('/')
}