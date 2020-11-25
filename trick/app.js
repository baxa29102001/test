window.addEventListener('load',function(){
     
})

let card  = document.querySelector('.card')
 let lorem = document.querySelector('.lorem')
 let navbar =  document.querySelector('.navbar')
window.addEventListener('scroll',animation)
console.log(document.documentElement.clientHeight)
function animation (e){
   if(window.scrollY>0){
       navbar.classList.add('fixed-nav2')
        // navbar.classList.remove('fixed-nav1')
   } 
  else{
    navbar.classList.remove('fixed-nav2')
   }
   
    
    let he = lorem.getBoundingClientRect().top
    // console.log(he.top)
    let heig = window.innerHeight / 1.2
    if(he<heig){
        card.style.transform = 'translateX(0)'
        lorem.style.opacity = '1'

    } else{
        card.style.transform = 'translateX(-250px)'
        lorem.style.opacity = '0'
    }
  
}


let arr = ['Web developer',"Front End","Back End"]
let arrIndex = 0;
let index = 0
let text =  document.querySelector('#text')

function textEffect(){

    if(index < arr[arrIndex].length){
        text.textContent += arr[arrIndex][index]
        index++
        setTimeout(textEffect,500)
        
    }
    else{
        // remove every char element
        setTimeout(remove,300)
        
    }
    
}

function remove(){
    if(index > 0){
        text.textContent = arr[arrIndex].substring(0,index-1)
        index--
        setTimeout(remove,300)
    } else{
        arrIndex++
        if (arrIndex >= arr.length) {
            arrIndex = 0
        }
        setTimeout(textEffect,300)
    }
}

textEffect()
// console.log(window.offsetY)

let navbarUl = document.querySelectorAll('.navbar-ul li a')


navbarUl.forEach(link =>{
    link.addEventListener('click',clikedLink)
})

let navbarLi = document.querySelectorAll('.navbar-ul li')


function clikedLink(e){
    e.preventDefault()

    navbarLi.forEach(li=>{
        if (li.classList.contains('active')) {
            li.classList.remove('active')
            e.path[1].classList.add('active')
        }
    })
     
 let ele = e.target.getAttribute('href');
 let secKm = document.querySelector(ele).offsetTop
 window.scrollTo({
     top:secKm,
     behavior:"smooth",
 })
 
}
window.addEventListener('scroll', buttonBack)

function buttonBack(){
  let scrollButton = document.querySelector('#scroll-button')
  scrollButton.classList.add('top-button')
}

