let cartIcon=document.getElementById("cart-icon")
let cart=document.querySelector(".cart")
let cartClose=document.querySelector(".close-cart")
let addCart=document.getElementsByClassName("add-cart")
let close=document.querySelector(".close")

var cartContent=document.getElementsByClassName("cart-content")[0]

cartIcon.onclick=()=>{
cart.classList.add("active")

}

cartClose.onclick =()=>{
    cart.classList.remove("active")
}


if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready)

}
else{
    ready()
    
}

function ready (){
var cartRemove=document.getElementsByClassName("cart-remove")
document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked)
for(var i=0 ;i < cartRemove.length;i++){

let cartRemoveIcon=cartRemove[i]
cartRemoveIcon.addEventListener("click",move)
}
let quantityInputs =document.getElementsByClassName("cart-quantity")

for(var i=0 ;i < quantityInputs.length;i++){
    let input=quantityInputs[i]
    input.addEventListener("change",quantityChanged)
    
}
for(var i=0 ;i < addCart.length;i++){

     let cart=addCart[i]
    cart.addEventListener("click",addToCart)
}


}

function buyButtonClicked(){
    alert("your order is placed")
    var cartContent=document.getElementsByClassName("cart-content")[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
 updatePrice()
}
function addToCart(event){

let clicked=event.target
cart.classList.add("active")
let shopProducts=clicked.parentElement
let  title=shopProducts.getElementsByClassName("product-title")[0].innerText

let price=shopProducts.getElementsByClassName("price")[0].innerText
let productImg=shopProducts.getElementsByClassName("product-img")[0].src
addProduct(title,price,productImg)
updatePrice( )

}

function addProduct(title,price,productImg){
 
    console.log(cartContent)
var cartShopBox=document.createElement("div")
cartShopBox.classList.add("cart-box")
var cartItems=document.getElementsByClassName("cart-content")[0]

let cartItemsNames=cartItems.getElementsByClassName("cart-product-title")


for(var i=0 ;i < cartItemsNames.length;i++)

{
    console.log(title,cartItemsNames[i].innerText)

    
    if(cartItemsNames[i].innerText==title){
        
        
        alert("you have chose product before")

return;
  
}


}




 let cartBoxContent=`        

<img src=${productImg} alt="" class="cart-img">
<div class="detail-box">
<div class="cart-product-title">
${title}
</div>

<div class="cart-price">
${price}
</div>
<input type="number" class="cart-quantity">


</div>
<i class='bx bx-trash cart-remove' ></i>
`
cartShopBox.innerHTML=cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",move)
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged)}
function move (event){
    
    
    let cliked=event.target
    cliked.parentElement.remove();
  
    updatePrice();

    }
function quantityChanged(event){
let inputt=event.target
if(isNaN(inputt.value)||inputt.value<=0){



    inputt.value=1
}
updatePrice()
}

function updatePrice(){



    let cartContent=document.getElementsByClassName("cart-content")[0]
let cartboxes=cartContent.getElementsByClassName("cart-box")

let total=0
    for(var i=0 ;i < cartboxes.length;i++){
let cartbox=cartboxes[i]
let priceElement=cartbox.getElementsByClassName("cart-price")[0]

let quantElement=cartbox.getElementsByClassName("cart-quantity")[0]

let price =parseFloat(priceElement.innerText.replace("$",""))

let quantity=quantElement.value

total=total+(price*quantity)}
document.getElementsByClassName("total-price")[0].innerText="$"+total
    
}


