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

    // getting the value of the selected item
    let selectedPriceItem = item.getElementsByClassName('item-price')
    ListItemsPrice[0] = Number(selectedPriceItem[0].innerHTML.replace(',', '.'))

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

    // getting the value of the selected item
    let selectedPriceItem = item.getElementsByClassName('item-price')
    ListItemsPrice[1] = Number(selectedPriceItem[0].innerHTML.replace(',', '.'))

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

    // getting the value of the selected item
    let selectedPriceItem = item.getElementsByClassName('item-price')
    ListItemsPrice[2] = Number(selectedPriceItem[0].innerHTML.replace(',', '.'))

    selectedItems[2] = true

    if (ListItemsNames[0] != undefined && ListItemsNames[1] != undefined && ListItemsNames[2] != undefined) {
        closeOrder()
    }
}

function closeOrder() {

    let button = document.querySelector('#btn')
    button.style.backgroundColor = '#32B72F';
    button.innerHTML = 'Fechar pedido'

    TotalPrice = (ListItemsPrice[0] + ListItemsPrice[1] + ListItemsPrice[2]).toFixed(2)
}

function infoOrder() {

    if (OrderCheck()) {

        // background-white
        document.querySelector('.background-white').style.display = 'flex'

        // remove footer button
        document.getElementById('btn').classList.add('hidden')

        // green confirmation screen
        let hidden = document.querySelector(".order-confirm")
        hidden.classList.remove("hidden");

        // order data
        let dishesName = []
        let dishesPrice = []

        dishesName[0] = document.querySelector('.order-name-0')
        dishesName[0].innerHTML = ListItemsNames[0]
        dishesPrice[0] = document.querySelector('.order-price-0')
        dishesPrice[0].innerHTML = ListItemsPrice[0]

        dishesName[1] = document.querySelector('.order-name-1')
        dishesName[1].innerHTML = ListItemsNames[1]
        dishesPrice[1] = document.querySelector('.order-price-1')
        dishesPrice[1].innerHTML = ListItemsPrice[1]

        dishesName[2] = document.querySelector('.order-name-2')
        dishesName[2].innerHTML = ListItemsNames[2]
        dishesPrice[2] = document.querySelector('.order-price-2')
        dishesPrice[2].innerHTML = ListItemsPrice[2]

        let totalOrderPrice = document.querySelector('.order-total-price')
        totalOrderPrice.innerHTML = TotalPrice;
    }
}

function confirmData() {
    
    let userName = prompt('Por favor, informe-nos seu nome:')
    let userAddress = prompt('Para finalizarmos, informe seu endereço: ')
    let userInfo = [userName, userAddress]
    sendOrder(userInfo)
}

function sendOrder(userInfo) {

    const message = 'Olá, gostaria de fazer o pedido:'
        + '\n - Prato: ' + ListItemsNames[0]
        + '\n - Bebida: ' + ListItemsNames[1]
        + '\n - Sobremesa: ' + ListItemsNames[2]
        + '\n - Total: R$: ' + TotalPrice

        + '\n\n Nome: ' + userInfo[0]
        + '\n Endereço: ' + userInfo[1];

    const url = 'https://wa.me/5571999925706?text=' + encodeURIComponent(message)

    window.open(url, '_blank')
}

function OrderCheck() {

    if (ListItemsNames[0] == undefined && ListItemsNames[1] == undefined && ListItemsNames[2] == undefined) {
        return alert("Você deve escolher seu pedido primeiramente !")
    }
    if (selectedItems[0] == undefined) {
        return alert("Você deve escolher seu prato !")
    }
    if (selectedItems[1] == undefined) {
        return alert("Você deve escolher sua bebida !")
    }
    if (selectedItems[2] == undefined) {
        return alert("Você deve escolher sua sobremesa !")
    }
    else return true
}

function cancelOrder() {
    document.querySelector('.background-white').style.display = 'none'
    document.querySelector(".order-confirm").classList.add("hidden");
    document.getElementById('btn').classList.remove('hidden')
}