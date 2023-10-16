function togleModel(){
    const html= document.documentElement
    html.classList.toggle("light")
    const img= document.querySelector("#profile img")
    img = (html.classList.contains('light')) 
    ? img.setAttribute('src',"assets/avatar-light.png") 
    : img.setAttribute('src',"assets/avatar.png");
    }
   