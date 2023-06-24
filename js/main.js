var cartBtn = document.querySelector('.header_top-cart');
var cartList = {
    index:0,
    list:[]
}
cartBtn.onclick = ()=>{
    if(JSON.parse(localStorage.getItem('isSignUp'))){
        localStorage.setItem('cartList',JSON.stringify(cartList.list));
        window.location = './vendor/cart.html'
    }
}

    var productItem = ` <li class="p-relative">
    <p class="sponsor p-absolute">Tài trợ</p>
    <img src="./img/Body/ListSanPham/dymaticIcon/Offical.png" alt="" class="dymatic-icon p-absolute">
    <img src="./img/Body/ListSanPham/item1.webp" alt="">
    <div class="item-alignment">
        <p class="review">Bóng đèn siêu sáng tiết kiệm điện</p>
        <div class="star-buy d-flex text-grey">
            <div class="star">
                4.8
                <i class="fas fa-star" style="color:rgb(253, 216, 54)"></i>
            </div>
            <div class="buy">
                Đã bán 1000+
            </div>
        </div>
        <div class="price-sale d-flex text-red">
            <p class="price">
                150.000đ 
            </p>
            <p class="sale">
                -15%
            </p>
        </div>
        <p class="promotion">
            Tặng tới 357 ASA (82k đ) <br>
            ~ 0.6% hoàn tiền
        </p>
        <ul class="option d-flex">
            <li class="option-1">Trả góp</li>
            <li class="option-2">Nhiều màu</li>
        </ul>
        <p class="shipping">
            Giao thứ 7, ngày 17/06
        </p>
    </div>
                        </li>`
   
    var productListBlock = document.querySelector('.product-list')
    var productListMsg ='';
    function renderForYouListItem (list,start,end){
        for(let i = start;i<end;i++){
            productListMsg+=` <li class="p-relative">
            <p class="sponsor p-absolute" style="display:${list[i].sponsor}">Tài trợ</p>
            <img src="${list[i].dymaticImg}" alt="" class="dymatic-icon p-absolute">
            <img src="${list[i].mainImg}" alt="" class="product-img">
            <div class="item-alignment">
                <p class="review">${list[i].solution}</p>
                <div class="star-buy d-flex text-grey" style="opacity: ${list[i].star}">
                    <div class="star">
                    ${list[i].star}
                        <i class="fas fa-star" style="color:rgb(253, 216, 54)"></i>
                    </div>
                    <div class="buy">
                        Đã bán ${list[i].count}
                    </div>
                </div>
                <div class="price-sale d-flex text-red">
                    <p class="price">
                    ${printPrice(list[i].price)}đ
                    </p>
                    <p class="sale">
                    -${list[i].saleoff}%
                    </p>
                </div>
                <p class="promotion">
                    ${list[i].promotion}
                </p>
                <ul class="option d-flex">
                    <li class="option-1" style="display:${list[i].installment}">Trả góp</li>
                    <li class="option-2" style="display:${list[i].color}">Nhiều màu</li>
                    <li class="option-3" style="display:${list[i].gilf}">Quà tặng</li>
                </ul>
                <p class="shipping">
                    ${list[i].shipping}
                </p>
            </div>
                                </li>`
        }
        productListBlock.innerHTML = productListMsg;
        productItemCart = document.querySelectorAll('.product-list>*')
        productItemCart.forEach((value,index)=>{
            value.onclick = ()=>{
                if(JSON.parse(localStorage.getItem('isSignUp'))){
                    if(cartOptionIsClose){
                        cartOption.style.display = 'flex';
                        cartOverlay.style.display = 'block';
                        cartOptionIsClose = false;
                    }
                    if(!start){
                        cartList.list[cartList.index++] = productList[index]
                    }
                    else{
                        cartList.list[cartList.index++] = productList[index+start+1]
                    }
                    document.querySelector('.cart-quantity').innerText = cartList.list.length;
                }
            }
        })
    }
    renderForYouListItem(productList,0,productList.length/2)
    var productNavItemCheck = true;
    var productItemCart = document.querySelectorAll('.product-list>*');
    var cartOption = document.querySelector('.cart-buy')
    var cartOverlay = document.querySelector('.cart-overlay')
    var cartAdd = document.querySelector('.ok')
    var cartCancel = document.querySelector('.cancel')
    var cartOptionIsClose = true;

    
    document.querySelector('.product-list-btn').onclick = ()=>{
        if(productNavItemCheck){
            renderForYouListItem(productList,0,productList.length/2)
            productNavItemCheck = false;
        }
        else{
            renderForYouListItem(productList,productList.length/2,productList.length)
            productNavItemCheck = true;
        }
        
    }
   
   
    function cartOptionClose(){
        cartOption.style.display = 'none';
        cartOverlay.style.display = 'none';
        cartOptionIsClose = true;
    }
    cartOverlay.onclick = ()=>{
        cartOptionClose()
    }
    cartCancel.onclick = ()=>{
        cartOptionClose()
        cartList.list.pop()
        cartList.index-=1;
    }
    cartAdd.onclick = ()=>{
        cartOptionClose()
    }





    document.querySelectorAll('.body_content-list-nav-item').forEach((value)=>{
        value.onclick = ()=>{
            productListMsg = '';
            if(!productNavItemCheck){
                renderForYouListItem(productList,0,productList.length/2)
                productNavItemCheck = true;
            }
            else{
                renderForYouListItem(productList,productList.length/2,productList.length)
                productNavItemCheck = false;
            }
            document.documentElement.scrollTop = 2110;
            productItemCart = document.querySelectorAll('.product-list>*');
        }
    })

    var productNavSticky = document.querySelector('.body_content-list-sticky')
    window.onscroll = ()=>{
        if (window.scrollY > 2150) {
            productNavSticky.style.padding='12px 0 8px';
            // productNavSticky.style.opacity='1';
        }
        else{
            productNavSticky.style.padding='';
            // productNavSticky.style.opacity='1';
        }
    }
    

    var categoryBox = document.querySelector('.body_sidebar-category>ul')
    var outstandingBox = document.querySelector('.body_sidebar-outstanding>ul')
    var backBtn = document.querySelector('.back-btn-carousel')
    var nextBtn = document.querySelector('.next-btn-carousel')
    var dotList = document.querySelectorAll('.dot')
    var carouselFloor = document.querySelector('.slides')
    
    class carouseler {
        constructor(listImage,listImageTag,backBtn,nextBtn,dotList,carouselFloor){
            this.slides = 0;
            this.listImageTag = listImageTag;
            this.listImage = listImage;
            this.nextImg = this.slides+1;
            this.backBtn = backBtn;
            this.nextBtn = nextBtn;
            this.dotList = dotList;
            this.checkStep = true;
            this.carouselFloor = carouselFloor;
            this.mouseDown = 0;
            this.mouseUp = 0;
            this.checkMouse =true;
            this.autoRun = setInterval(()=>{this.switchImg(1)},4000);
        }
        switchImg(action,next){
            if(action>0){
                dotList[this.slides].style.opacity = '0.3';
                
                this.listImageTag[0].src = this.listImage[this.slides++].link
                if(this.slides==this.listImage.length){
                    this.slides = 0;
                }
                if(next>0){
                    this.slides=next;
                }
                this.listImageTag[1].src = this.listImage[this.slides].link
                this.surfing(action)
            }
            else if(action<0){
                dotList[this.slides].style.opacity = '0.3';
                
                this.listImageTag[1].src = this.listImage[this.slides--].link
                if(this.slides<0){
                    this.slides=this.listImage.length-1;
                }
                if(next>-1){
                    this.slides=next;
                }
                this.listImageTag[0].src = this.listImage[this.slides].link
                this.surfing(action) 
            }
        }
        surfing(action){
            this.carouselFloor.style.transition = 'transform 0s ease';
            this.carouselFloor.style.transform = `translateX(-${(1-action)*50}%)`;
            setTimeout(()=>{
                this.carouselFloor.style.transition = 'transform .6s ease';
                this.carouselFloor.style.transform = `translateX(-${(1+action)*50}%)`;
                this.dotList[this.slides].style.opacity = '1';
            },10)
        }
        dotClick(dotList){
            this.dotList.forEach((value)=>{
                value.onclick=()=>{
                    this.stopRunInterval();
                    let check = value.getAttribute('name');
                    if(check!=this.slides){
                        dotList[this.slides].style.opacity = '0.3'
                        if(check-this.slides<1){
                            this.switchImg(-1,check)
                        }
                        else{
                            this.switchImg(1,check)
                        }
                    }
                    this.autoRun = setInterval(()=>{this.switchImg(1)},4000);
                }
            })
        }
        nextBtnClick(){
            this.nextBtn.onclick = ()=>{
                if(this.checkStep){
                    this.checkStep=false;
                    this.stopRunInterval();
                    this.switchImg(1)
                    this.autoRun = setInterval(()=>{this.switchImg(1)},4000);
                    setTimeout(()=>{
                        this.checkStep=true;
                    },590)
                }
            }
        }
        backBtnClick(){
            this.backBtn.onclick = ()=>{
                if(this.checkStep){
                    this.checkStep = false;
                    this.stopRunInterval();
                    this.switchImg(-1)
                    this.autoRun = setInterval(()=>{this.switchImg(1)},4000);
                    setTimeout(()=>{
                        this.checkStep=true;
                    },590)
                }
            }
        }
        stopRunInterval(){
            clearInterval(this.autoRun);
        }
        mouseSlide(){
            this.carouselFloor.onmousedown = (e)=>{
                    this.stopRunInterval();
                    this.mouseDown = e.clientX;
            }
            this.carouselFloor.onmouseup = (e)=>{
                if(this.checkMouse){
                    this.mouseUp = e.clientX;
                    this.checkMouse = false;
                    if(this.mouseUp-this.mouseDown>(this.carouselFloor.clientWidth/3)){
                        this.switchImg(-1);
                    }
                    else if(this.mouseUp-this.mouseDown<-(this.carouselFloor.clientWidth/3)){
                        this.switchImg(1)
                    }
                }
                this.checkMouse = true;
                this.autoRun = setInterval(()=>{this.switchImg(1)},4000);
            }
        }
        start(){
            this.dotList[0].style.opacity = '1';
            this.backBtnClick(backBtn)
            this.nextBtnClick(nextBtn)
            this.dotClick(dotList)
            this.mouseSlide();
        }
    }
    var carousel = new carouseler(
        carouselList,
        document.querySelectorAll('.slides>*'),
        backBtn,
        nextBtn,
        dotList,
        carouselFloor
    )
    
    
    class slider {
        constructor(backBtn,nextBtn,carouselFloor,listItem){
            this.slides = 0;
            this.backBtn = backBtn;
            this.listItem = listItem;
            this.nextBtn = nextBtn;
            this.checkStep = true;
            this.carouselFloor = carouselFloor;
        }
        slide(action){
            this.carouselFloor.style.transition = 'transform 0s ease';
            this.carouselFloor.style.transform = `translateX(-${(1-action)*50}%)`;
            setTimeout(()=>{
                this.carouselFloor.style.transition = 'transform .6s ease';
                this.carouselFloor.style.transform = `translateX(-${(1+action)*50}%)`;
            },10)
        }
        switchImg(action,switchElements){
            for(let i=0;i<this.listItem.length/2;i++){
               switchElements(this,i)
            }
            if(this.slides == this.listItem.length){
                this.slides = 0;
            }
            for(let i=this.listItem.length/2;i<this.listItem.length;i++){
                switchElements(this,i)
            }
            if(this.slides < this.listItem.length){
                this.slides = 0;
            }
            else{
                this.slides = this.listItem.length/2;
            }
                
            this.slide(action);
            
        }
        nextBtnClick(switchElements){
            this.nextBtn.onclick = ()=>{
                if(this.checkStep){
                    this.checkStep=false;
                    this.switchImg(1,switchElements);
                    setTimeout(()=>{
                        this.checkStep=true;
                    },610)
                }
            }
        }
        backBtnClick(switchElements){
            this.backBtn.onclick = ()=>{
                if(this.checkStep){
                    this.checkStep = false;
                    this.switchImg(-1,switchElements);
                    setTimeout(()=>{
                        this.checkStep=true;
                    },610)
                    
                }
            }
        }
        renderItem(switchElements){
            for(var i=0;i<this.listItem.length;i++){
                switchElements(this,i)
            }
            this.slides=0;
        }
        start(switchElements){
            this.renderItem(switchElements);
            this.backBtnClick(switchElements);
            this.nextBtnClick(switchElements);
        }
    }
        
        var collectionCarousel = new slider(
            document.querySelector('.back-btn-collection'),
            document.querySelector('.next-btn-collection'),
            document.querySelector('.slides-collection'),
            collectionList
        )
        var collectionListItem = document.querySelectorAll('.collection_carousel-slider-item>img')
        collectionCarousel.start((element,i)=>{
            collectionListItem[i].src = element.listItem[element.slides++].link
        })
        var bestpriceCarousel = new slider(
            document.querySelector('.back-btn-bestprice'),
            document.querySelector('.next-btn-bestprice'),
            document.querySelector('.slides-bestprice'),
            bestpriceList
        )
        var bestpriceImage = document.querySelectorAll('.bestprice_carousel-slider-item>div>img');
        var bestpricePrice = document.querySelectorAll('.bestprice_carousel-slider-item>div>p');
        var bestpriceStatus = document.querySelectorAll('.bestprice_carousel-slider-item>div>div>p');
        var bestpriceSale = document.querySelectorAll('.bestprice_carousel-slider-item>div>span');
        var maxOfStatusBestpriceFunction = ()=>{
            let max = bestpriceCarousel.listItem[0].status;
            for(let i = 0;i<bestpriceCarousel.listItem.length;i++){
                if(bestpriceCarousel.listItem[i].status>max){
                    max=bestpriceCarousel.listItem[i].status;
                }
            }
            return max;
        }
        var bestpriceStatusBar = document.querySelectorAll('.bestprice_carousel-slider-item>div>div>div')
        var maxOfStatusBestprice = maxOfStatusBestpriceFunction();
        bestpriceCarousel.start((element,i)=>{
            bestpriceImage[i].src = element.listItem[element.slides].link
            bestpricePrice[i].innerHTML = element.listItem[element.slides].price +'.000đ'
            bestpriceSale[i].innerHTML ='-'+ element.listItem[element.slides].sale +'%'
            if(element.listItem[element.slides].status==0){
                bestpriceStatus[i].innerHTML ='Vừa mở bán'
                bestpriceStatusBar[i].style.width = '20px'
            }
            else{
                bestpriceStatus[i].innerHTML =`Đã bán ${element.listItem[element.slides].status}`
                bestpriceStatusBar[i].style.width = `calc(${(element.listItem[element.slides].status/maxOfStatusBestprice)*85}% + 15%)`
            }     
            if(element.listItem[element.slides].status==maxOfStatusBestprice){
                bestpriceStatusBar[i].innerHTML = `<img src="./img/Body/GiaTotHomNay/hotProduct.svg" alt="" style="transform:translateY(-12px); width:30px">`
            }
            else{
                bestpriceStatusBar[i].innerHTML = ``
            }
            element.slides++;
        })

       

        var bestbrandCarousel = new slider(
            document.querySelector('.back-btn-bestbrand'),
            document.querySelector('.next-btn-bestbrand'),
            document.querySelector('.slides-bestbrand'),
            bestbrandList
        )
        var bestbrandListItem = document.querySelectorAll('.bestbrand_carousel-slider-item>div>img')
        bestbrandCarousel.start((element,i)=>{
            bestbrandListItem[i].src = element.listItem[element.slides++].link
        })
        
        var brandCarousel = new slider(
            document.querySelector('.back-btn-brand'),
            document.querySelector('.next-btn-brand'),
            document.querySelector('.slides-brand'),
            brandList
        )
        var brandListItem = document.querySelectorAll('.brand_carousel-slider-item>img')
        brandCarousel.start((element,i)=>{
            brandListItem[i].src = element.listItem[element.slides++].link
        })

        var hotcatagoryCarousel = new slider(
            document.querySelector('.back-btn-hotcatagory'),
            document.querySelector('.next-btn-hotcatagory'),
            document.querySelector('.slides-hotcatagory'),
            hotcatagoryList
        )
        var hotcatagoryListItem = document.querySelectorAll('.hotcatagory_carousel-slider-item>div>div>img')
        var hotcatagoryListItemContent = document.querySelectorAll('.hotcatagory_carousel-slider-item>div>p')
        hotcatagoryCarousel.start((element,i)=>{
            hotcatagoryListItem[i].src = element.listItem[element.slides].link
            hotcatagoryListItemContent[i].innerText = element.listItem[element.slides++].name;
        })

        var clockHour = document.querySelector('.hour')
        var clockMinute = document.querySelector('.minute')
        var clockSecond = document.querySelector('.second')

        function getClockTime(){
            var clock = new Date;
            if((24 - clock.getHours())>10){
                clockHour.innerText =23 -  clock.getHours();
            }
            else{
                clockHour.innerText =`0${23 -  clock.getHours()}`;
            }
            if((60 - clock.getMinutes())>10){
                clockMinute.innerText =59 -  clock.getMinutes();
            }
            else{
                clockMinute.innerText =`0${59 -  clock.getMinutes()}`;
            }
            if((60 - clock.getSeconds())>10){
                clockSecond.innerText =59 -  clock.getSeconds();
            }
            else{
                clockSecond.innerText =`0${59 -  clock.getSeconds()}`;
            }
            setTimeout(()=>{
                getClockTime();
            },1000)
        }
        getClockTime();

    var render = {
        start:()=>{
            render.category();
            render.outstanding();
        },
        outstanding:()=>{
            let msg = '';
            for(let i=0;i<outstandingList.length;i++){
                msg+=`
                    <li class="d-flex align-center">
                        <img src="${outstandingList[i].link}" alt="">
                        <p>${outstandingList[i].title}</p>
                    </li>
                `
            }
            outstandingBox.innerHTML = msg;
        },
        category:()=>{
            let msg ='';
            for(let i=0;i<categoryList.length;i++){
                msg+=`
                    <li class="d-flex align-center">
                        <img src="${categoryList[i].link}" alt="">
                        <p>${categoryList[i].title}</p>
                    </li>
                `
            }
            categoryBox.innerHTML = msg;
        }
    }
    render.start();
    carousel.start();
    
    
