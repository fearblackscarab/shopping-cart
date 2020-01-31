let cart=[]
;
let changecurrency =document.getElementById('currency');
;
let items = document.querySelectorAll('.item')
;
// currency
// exchange rate
let currencyrate = 1
;
let currencysymbol = '&dollar;'
;
changecurrency.addEventListener('change',function(){
    let country =this.value;
    switch (country){
        case "us":
            currencyrate = 1;
            currencysymbol = '&dollar;';
            break;
        case 'uk':
            currency = 1.5;
            currencysymbol = '&pound;';
            break;
            default:
                break;
    }
    updateTotal();
});
for (let i=0; i < items.length;i++){
    const item = items[i];

    item.addEventListener('click',function(){
        let found = false ;
        let price = item.getAttribute('data-price');
        let name = item.innerText

for (let j=0; j < cart.length;j++){
    const cartItem = cart[j]
    if(cartItem.name == item.innerText){
        found= true;
        cart[j].qty++;
    }}
if(!found){
    cart.push({name, price, qty:1});
    }
    updateItems();
    updateTotal();
    function updateItems(){
        let numberItems = document.getElementById('numberItems')
        numberItems.innerText = cart.length;
    
    };
});
    // function updatecurrencyrate()
    function updateTotal(){
        let cartTotal =document.getElementById('cartTotal');
        let total=0;
        for(let i=0;i < cart.length;i++){
            const item=cart[i]
            total += item.price * item.qty;
        }
        // tax
        total += total * 0.7;
        total /= currencyrate;
        cartTotal.innerHTML=`${currencysymbol}${total.toFixed(2)}`;
    }
}