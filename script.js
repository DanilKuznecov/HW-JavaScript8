const qube = document.querySelector('.qube')

console.log(qube);


qube.addEventListener('click', () => {
    if(qube.style.background == 'blue') {
        qube.style.background = 'red'
        qube.style.borderRadius = '50%'
        qube.style.border = 'solid 5px green'
    }else {
        qube.style.background = 'blue'
        qube.style.borderRadius = '0'
        qube.style.border = 'solid 5px black'
    }
         
      
})