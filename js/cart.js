
var bodySidebar = document.querySelector('.body_sidebar')
var bodyContent = document.querySelector('.body_content')
var cartListItemBlock = document.querySelector('.cart-list')
var deleteAll = document.querySelector('.delete-all')
var cartQuantity = document.querySelectorAll('.select-all-block-checkbox-quantity')
var backBtn = document.querySelector('.body_cart-heading>span')

backBtn.onclick = ()=>{
    window.location = '../index.html'
}

cartQuantity[1].innerText = `Tất cả (${JSON.parse(localStorage.getItem('cartList')).length} sản phẩm)`
cartQuantity[0].innerText = `(${JSON.parse(localStorage.getItem('cartList')).length})`

deleteAll.onclick = ()=>{
    localStorage.setItem('cartList','[]')
    cartListItemBlock.innerHTML = '';
    cartQuantity[1].innerText = 'Tất cả (0 sản phẩm)'
    cartQuantity[0].innerText = '(0)'
}


function checkRengular (regex,str){
    return regex.exec(str)
}

function renderCartItem (list){
    var msg ='';
    if(list!=''){
        for(let i=0;i<list.length;i++){
            
            msg += `
            <li class="cart-list-item lig-bg">
            <div class="cart-list-item-checkbox d-flex">
                <input type="checkbox">
                <img src=".${list[i].mainImg}" alt="">
                <div>${list[i].solution}</div>
            </div>
            <p class="cart-list-item-unitprice">
                ${printPrice(list[i].price)}đ
                <span class="cart-list-item-sale">
                ${printPrice(parseInt((list[i].price*100/(100-list[i].saleoff)/1000)).toString()+'000')}đ
                </span>
            </p>
            <div class="cart-list-item-quantity">
                <button class="cart-list-item-quantity-increase" style="border-radius: 4px 0 0 4px;">+</button>
                <span class="cart-list-item-quantity-count">1</span>
                <button class="cart-list-item-quantity-reduce" style="border-radius:0 4px 4px 0;">-</button>
            </div>
            <p class="cart-list-item-price">
            ${printPrice(list[i].price)}đ
            </p>
            <p><i class="far fa-trash-alt"></i></p>
        </li>
            `
        }
        cartListItemBlock.innerHTML = msg ; 
    }
}
renderCartItem(JSON.parse(localStorage.getItem('cartList')));


