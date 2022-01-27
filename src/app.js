let border = '0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 3px #32B72F'

let ListItemsNames = []
let ListItemsPrice = []
let TotalPrice = 0

let total = []

let selectedItems = []

function dishes_selected(item) {

    let remove_border = document.getElementsByClassName('options-box')
    for (let i = 0; i <= 3; i++) {
        remove_border[i].style.boxShadow = 'none'
    }
    // aply border
    item.style.boxShadow = border;

    // getting the name of the selected item
    let selectedNameItem = item.getElementsByTagName('h2')
    ListItemsNames[0] = selectedNameItem[0].innerHTML
    // alert(ListItemsNames)

    // getting the value of the selected item
    let selectedPriceItem = item.getElementsByClassName('item-price')
    ListItemsPrice[0] = Number(selectedPriceItem[0].innerHTML.replace(',','.'))
    // alert(ListItemsPrice[0])

    selectedItems[0] = true

    if (ListItemsNames[0] != undefined && ListItemsNames[1] != undefined && ListItemsNames[2] != undefined) {
        closeOrder()
    }
}

function drinks_selected(item) {

    let remove_border = document.getElementsByClassName('options-box')
    for (let i = 4; i <= 6; i++) {
        remove_border[i].style.boxShadow = 'none'
    }

    // aply border
    item.style.boxShadow = border;

    // getting the name of the selected item
    let selectedNameItem = item.getElementsByTagName('h2')
    ListItemsNames[1] = selectedNameItem[0].innerHTML
    // alert(ListItemsNames)

    // getting the value of the selected item
    let selectedPriceItem = item.getElementsByClassName('item-price')
    ListItemsPrice[1] = Number(selectedPriceItem[0].innerHTML.replace(',','.'))
    // alert(ListItemsPrice[0])

    selectedItems[1] = true

    if (ListItemsNames[0] != undefined && ListItemsNames[1] != undefined && ListItemsNames[2] != undefined) {
        closeOrder()
    }
}

function desserts_selected(item) {

    let remove_border = document.getElementsByClassName('options-box')
    for (let i = 7; i <= 10; i++) {
        remove_border[i].style.boxShadow = 'none'
    }

    // aply border
    item.style.boxShadow = border;

    // getting the name of the selected item
    let selectedNameItem = item.getElementsByTagName('h2')
    ListItemsNames[2] = selectedNameItem[0].innerHTML
    // alert(ListItemsNames)

    // getting the value of the selected item
    let selectedPriceItem = item.getElementsByClassName('item-price')
    ListItemsPrice[2] = Number(selectedPriceItem[0].innerHTML.replace(',','.'))
    // alert(ListItemsPrice)

    selectedItems[2] = true

    if (ListItemsNames[0] != undefined && ListItemsNames[1] != undefined && ListItemsNames[2] != undefined) {
        closeOrder()
    }
}

function closeOrder() {

    let button = document.querySelector('#btn')
    button.style.backgroundColor = '#32B72F';
    button.innerHTML = 'Fechar pedido'

    TotalPrice = (ListItemsPrice[0]+ListItemsPrice[1]+ListItemsPrice[2]).toFixed(2)
    alert(TotalPrice)
}

function infoOrder() {
    if (ListItemsNames[0] == undefined && ListItemsNames[1] == undefined && ListItemsNames[2] == undefined) {
        return alert("Você deve escolher seu pedido primeiramente !")
    }
    if(selectedItems[0] == undefined) {
        return alert("Você deve escolher seu prato !")
    }
    if(selectedItems[1] == undefined) {
        return alert("Você deve escolher sua bebida !")
    }
    if(selectedItems[2] == undefined) {
        return alert("Você deve escolher sua sobremesa !")
    }

    let userName = prompt('Por favor, informe-nos seu nome:')
    let userAddress = prompt('Para finalizarmos, informe seu endereço: ')
    let userInfo= [userName,userAddress]
    sendOrder(userInfo)
}

function sendOrder(userInfo) {
   
    const message = 'Olá, gostaria de fazer o pedido:'
    +'\n - Prato: '     +   ListItemsNames[0]
    +'\n - Bebida: '    +   ListItemsNames[1]
    +'\n - Sobremesa: ' +   ListItemsNames[2]
    +'\n - Total: R$: ' +   TotalPrice
    
    +'\n\n Nome: '      +   userInfo[0]
    +'\n Endereço: '     +   userInfo[1];

    const url = 'https://wa.me/5571999925706?text='+encodeURIComponent(message)

    window.open(url,'_blank')
}
