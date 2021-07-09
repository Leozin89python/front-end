var burguer = document.getElementById('menu-burguer')
var el = document.getElementById('el')
var el2 = document.getElementById('el2')
var el3 = document.getElementById('el3')
document.onclick = addEventListener('click',(e)=>{
        if(e.target === burguer){
            alert('burguer clicked!')
        }else if(e.target === el){
            alert('main clicked')
        }else if(e.target === el2){
            alert('products clicked') 
        }else if(e.target === el3){
            alert('abut us clicked!')
        }
})


