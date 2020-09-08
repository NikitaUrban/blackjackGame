
let platBtn = $('#playBtn')//кнопка Играть!
let moreBtn = $('#moreBtn')//кнопка Еще
let enoughBtn = $('#enoughBtn')//Кнопка хватит


moreBtn.prop('disabled',true)
enoughBtn.prop('disabled',true)
platBtn.click( ()=>{
    moreBtn.prop('disabled',false)
    enoughBtn.prop('disabled',false)
    platBtn.prop('disabled',true)


})