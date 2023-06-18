//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item')
const messagenoti =document.querySelector('#message-noti')
const messages =document.querySelector('.messages')
const message =document.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.themes')
const fontsizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const colorpalatte = document.querySelectorAll('.choose-color span')
const bg1=document.querySelector('.bg1')
const bg2=document.querySelector('.bg2')
const bg3=document.querySelector('.bg3')

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeactive()
        if(item.id==='noti'){
        document.querySelector('.noti-popup').style.display='block'
        document.querySelector('#noti .noti-count').style.display='none'
        }else{
            document.querySelector('.noti-popup').style.display='none'
        }
        item.classList.add('active')
    })
})


const changeactive = ()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active')
    })
}

const searchMessage = ()=>{
  const val = messageSearch.value.toLowerCase()
  console.log(val)
  message.forEach(chat => {
    let name = chat.querySelectorAll('h5').textContent
    if(name.indexOf(val) != -1){
        chat.style.display= 'flex'
    }
    else{
        chat.style.display= 'none'
    }
  })
}

messageSearch.addEventListener('keyup', searchMessage)


messagenoti.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)'
    messagenoti.querySelector('.noti-count').style.display='none'
    setTimeout(()=>{
        messages.style.boxShadow='none'
    },2000)
    
})

const openthememodal = ()=>{
    themeModal.style.display="grid"
}

const closethememodal=(e)=>{
    if(e.target.classList.contains('themes')){
     themeModal.style.display='none'
    }
}

themeModal.addEventListener('click', closethememodal)
theme.addEventListener('click', openthememodal)

const removesize =()=>{
    fontsizes.forEach(size=>{
        size.classList.remove('active')
    })
}
fontsizes.forEach(size =>{
 
    size.addEventListener('click', ()=>{
        removesize()
        let fontsize
        size.classList.toggle('active')
        if(size.classList.contains('font1')){
            fontsize = '10px'
            root.style.setProperty('--sticky-top-left',' 5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        }
        else if(size.classList.contains('font2')){
            fontsize = '13px'
            root.style.setProperty('--sticky-top-left',' 5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        }
        else if(size.classList.contains('font3')){
            fontsize = '16px'
            root.style.setProperty('--sticky-top-left',' -2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        }
        else if(size.classList.contains('font4')){
            fontsize = '19px'
            root.style.setProperty('--sticky-top-left',' -5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        }
        else if(size.classList.contains('font5')){
            fontsize = '22px'
            root.style.setProperty('--sticky-top-left',' -12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }
        document.querySelector('html').style.fontSize=fontsize
    })

  })
  const removecolor =()=>{
    colorpalatte.forEach(color=>{
        color.classList.remove('active')
    })
}

  colorpalatte.forEach(color =>{
    color.addEventListener('click', ()=>{
        let primary
        if(color.classList.contains('color1')){
              primaryhue = 252

            }
           else if(color.classList.contains('color2')){
                primaryhue = 52
          }
          else if(color.classList.contains('color3')){
            primaryhue = 352
      }
      else if(color.classList.contains('color4')){
        primaryhue = 152
  }
  else if(color.classList.contains('color5')){
    primaryhue = 202
}
removecolor()
color.classList.add('active')
root.style.setProperty('--primary', primaryhue)
    })
  })


  let LightColorLightness
  let DarkColorLightness
  let WhiteColorLightness


const changebg= ()=>{
    root.style.setProperty('--light-color-lightness', LightColorLightness)
    root.style.setProperty('--white-color-lightness', WhiteColorLightness)
    root.style.setProperty('--dark-color-lightness', DarkColorLightness)
}

 bg2.addEventListener('click', ()=>{
     DarkColorLightness = '95%'
     WhiteColorLightness='20%'
     LightColorLightness='15%'
     bg1.classList.remove('active')
     bg3.classList.remove('active')
     bg2.classList.add('active')
     changebg()
 })
 bg3.addEventListener('click', ()=>{
    DarkColorLightness = '95%'
    WhiteColorLightness='10%'
    LightColorLightness='0%'
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    bg3.classList.add('active')
    changebg()
}) 
bg1.addEventListener('click', ()=>{
    bg1.classList.add('active')
    bg3.classList.remove('active')
    bg2.classList.remove('active')
    window.location.reload()
    changebg()
})
  
  