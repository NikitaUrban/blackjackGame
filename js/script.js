let platBtn = $('#playBtn')//кнопка Играть!
let moreBtn = $('#moreBtn')//кнопка Еще
let enoughBtn = $('#enoughBtn')//Кнопка хватит
let clear = $('#clear')//кнопка очистки
let playerCards = $('.your_cards_block .card')//блок с картами игрока
let dealerCards = $('.dealer_cards_block .card')//блок с картами диллера
let dealerSum = 0 // сумма очков диллера
let playerSum = 0 // сумма очков игрока
let cards = // массив объектов наших карт с их весом и путями к ним
    [{weight:2,src:'img/2b.png'}, {weight:2,src:'img/2c.png'}, {weight:2,src:'img/2k.png'}, {weight:2,src:'img/2p.png'},
        {weight:3,src:'img/3b.png'}, {weight:3,src:'img/3c.png'}, {weight:3,src:'img/3k.png'}, {weight:3,src:'img/3p.png'},
        {weight:4,src:'img/4b.png'}, {weight:4,src:'img/4c.png'}, {weight:4,src:'img/4k.png'}, {weight:4,src:'img/4p.png'},
        {weight:5,src:'img/5b.png'}, {weight:5,src:'img/5c.png'}, {weight:5,src:'img/5k.png'}, {weight:5,src:'img/5p.png'},
        {weight:6,src:'img/6b.png'}, {weight:6,src:'img/6c.png'}, {weight:6,src:'img/6k.png'}, {weight:6,src:'img/6p.png'},
        {weight:7,src:'img/7b.png'}, {weight:7,src:'img/7c.png'}, {weight:7,src:'img/7k.png'}, {weight:7,src:'img/7p.png'},
        {weight:8,src:'img/8b.png'}, {weight:8,src:'img/8c.png'}, {weight:8,src:'img/8k.png'}, {weight:8,src:'img/8p.png'},
        {weight:9,src:'img/9b.png'}, {weight:9,src:'img/9c.png'}, {weight:9,src:'img/9k.png'}, {weight:9,src:'img/9p.png'},
        {weight:10,src:'img/10b.png'}, {weight:10,src:'img/10c.png'}, {weight:10,src:'img/10k.png'}, {weight:10,src:'img/10p.png'},
        {weight:10,src:'img/jb.png'}, {weight:10,src:'img/jc.png'}, {weight:10,src:'img/jk.png'}, {weight:10,src:'img/jp.png'},
        {weight:10,src:'img/db.png'}, {weight:10,src:'img/dc.png'}, {weight:10,src:'img/dk.png'}, {weight:10,src:'img/dp.png'},
        {weight:10,src:'img/kb.png'}, {weight:10,src:'img/kc.png'}, {weight:10,src:'img/kk.png'}, {weight:10,src:'img/kp.png'},
        {weight:11,src:'img/ab.png'}, {weight:11,src:'img/ac.png'}, {weight:11,src:'img/ak.png'}, {weight:11,src:'img/ap.png'}

    ]
let arrayImage = [] // массив картинок
let playerCardsCounter = 2//счетчик для массива с картами игрока, чтобы можно было начать отсчет с элемента
// с индексом 2

shuffle = () => {//функция перемешивания колоды карт
    //в течение 1000 раз мы будем менять две карты в случайном месте в колоде

    for (let i = 0; i < 1000; i++)
    {
        let location1 = Math.floor((Math.random() * cards.length)) // первая карта
        let location2 = Math.floor((Math.random() * cards.length)) // вторая карта

        let tmp = cards[location1]
        cards[location1] = cards[location2]
        cards[location2] = tmp
    }
}

changeObjSrc = () =>{//меняет значение свойства src для каждого объекта на картинки

    for (let i = 0; i < cards.length; i++)
    {
        arrayImage [i] = new Image ()
        let tmp = arrayImage[i]
        arrayImage [i].src = cards [i].src
        cards[i].src=tmp
    }
}


moreBtn.prop('disabled',true)
enoughBtn.prop('disabled',true)


platBtn.click( ()=>{
    platBtn.prop('disabled',true)
    changeObjSrc()
    shuffle()

    $('.your_cards_block .card:first').css({'background':'none'}).append(cards[0].src)
    $('.your_cards_block .card:eq(1)').css({'background':'none'}).append(cards[1].src)

    setInterval(() =>{
        $('.dealer_cards_block .card:first').css({'background':'none'}).append(cards[2].src)
        $('.dealer_cards_block .card:eq(1)').css({'background':'none'}).append(cards[3].src)

    },2000)

    $.each(playerCards,(index) =>{
       if (index <= 1) {
           playerSum += cards[index].weight
       }
    })
    $.each(dealerCards,(index) =>{
        if (index <= 1){
            dealerSum += cards[index+2].weight
        }
    })

    if (playerSum === 21){
        setTimeout(() =>{
            alert('Вы победили, у вас 21!')
            alert('Обновите страницу, чтобы сыграть заново!')
        },2100)

    } else if (dealerSum === 21){
        setTimeout(() =>{
            alert('Диллер победил, у него 21!')
            alert('Обновите страницу, чтобы сыграть заново!')
            moreBtn.prop('disabled',true)
            enoughBtn.prop('disabled',true)
        },2100)

    }else if (playerSum > 21){
        setTimeout(() =>{
            alert('У вас перебор ' + playerSum + ' очков, вы проиграли(')
            alert('Обновите страницу, чтобы сыграть заново!')
            moreBtn.prop('disabled',true)
            enoughBtn.prop('disabled',true)
        },2100)

    }else if (dealerSum > 21){
        setTimeout(() =>{
            alert('У диллера перебор ' + dealerSum + ' очков, вы победили!')
            alert('Обновите страницу, чтобы сыграть заново!')
            moreBtn.prop('disabled',true)
            enoughBtn.prop('disabled',true)
        },2100)

    }else {
        setTimeout(() =>{
            moreBtn.prop('disabled',false)
            enoughBtn.prop('disabled',false)
        },2200)
    }



})

moreBtn.click(function () {
    $('.your_cards_block .card').eq(playerCardsCounter).css({'background':'none'}).append(cards[playerCardsCounter+2].src)
    playerSum+=cards[playerCardsCounter+2].weight
    if (playerSum === 21){
        setTimeout(() =>{
            alert('Вы победили, у вас 21!')
            alert('Обновите страницу, чтобы сыграть заново!')
            moreBtn.prop('disabled',true)
            enoughBtn.prop('disabled',true)
        },2000)
    }else if (playerSum > 21){
        alert('У вас перебор ' + playerSum + ' очков, вы проиграли(')
        alert('Обновите страницу, чтобы сыграть заново!')
        moreBtn.prop('disabled',true)
        enoughBtn.prop('disabled',true)
    }else if (playerCardsCounter === 4){
        moreBtn.prop('disabled',true)
    }else {
        playerCardsCounter++
    }

})

enoughBtn.click( () =>{
    enoughBtn.prop('disabled',true)
    moreBtn.prop('disabled',true)
     if (dealerSum > playerSum){
        alert('Диллер победил, у него ' + dealerSum + ' очков!')
         alert('Обновите страницу, чтобы сыграть заново!')
    }else if(dealerSum === playerSum){
         alert('Ничья!')
         alert('Обновите страницу, чтобы сыграть заново!')
     } else {
         for (let i = 2; i < 5 ; i++){
             $('.dealer_cards_block .card').eq(i).css({'background': 'none'})
                 .append(cards[i + 3].src)
             dealerSum+=cards[i + 3].weight
             if (dealerSum === 21){
                 alert('Диллер победил, у него 21!')
                 alert('Обновите страницу, чтобы сыграть заново!')
                 break
             }
             if (dealerSum > 21){
                 alert('У диллера перебор, ' + dealerSum + ' очков, вы победили!')
                 clear.css({'display':'block'})
                 break
             }
             if (dealerSum > playerSum){
                 alert('Диллер победил, у него ' + dealerSum + ' очков!')
                 alert('Обновите страницу, чтобы сыграть заново!')
                 break
             }
             if (playerSum === dealerSum) {
                 alert('Ничья!')
                 alert('Обновите страницу, чтобы сыграть заново!')
                 break
             }
             if (i === 4 && (playerSum > dealerSum)) {
                 alert('Вы победили, у вас ' + playerSum + ' очков!')
                 alert('Обновите страницу, чтобы сыграть заново!')
                 break
             }
         }

     }

})

