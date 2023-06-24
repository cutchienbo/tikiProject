var moreProductList = [
    {
        name:'tai nghe bluetooth'
    },
    {
        name:'không diệt không sinh đừng sợ hãi'
    },
    {
        name:'bộ nồi inox'
    },
    {
        name:'son môi'
    },
]

var searchOverlay = document.querySelector('.search-overlay');
var searchBlock = document.querySelector('.search-block');
var inputTag = document.querySelector('.header_top-search>input');
var searchMore = document.querySelector('.search-block_product-more');
var searchProductList = document.querySelector('.search-block_product-list2');
var searchPopular = document.querySelector('.search-block_popular');
var searchCatagory = document.querySelector('.search-block_catagory');
var searchProductHeader = document.querySelector('.search-block_product-header')
var searchFinding = document.querySelector('.find-block');
var searchBlockProduct = document.querySelector('.search-block_product')

function finding(text,list){
    for(let i=0;i<list.length;i++){
        if(!list[i].solution.toLowerCase().indexOf(text.toLowerCase())){
            inputFindMsg += `
            <li class="d-flex align-center">
            <img src="./img/Header/SearchBlockIcon.png" alt="">
            <p>${list[i].solution}</p>
            </li>
            `
        }
    }
    searchFinding.innerHTML = inputFindMsg;
}
function inputFind(){
    inputFindMsg ='';
    searchFinding.innerHTML = inputFindMsg;
    if(inputTag.value!=''){
        searchBlock.style.height = 'auto';
        searchCatagory.classList.add('none');
        searchPopular.classList.add('none');
        searchProductHeader.classList.add('none');
        searchMore.classList.add('none');
        searchBlockProduct.classList.add('none');
        searchFinding.style.display = 'block';
        finding(inputTag.value,productList);
    }
    else{
        appear();
    }
}

function appear (){
    inputFindMsg = '';
    searchCatagory.classList.remove('none');
    searchPopular.classList.remove('none');
    searchProductHeader.classList.remove('none');
    searchMore.classList.remove('none');
    searchBlockProduct.classList.remove('none');
    searchFinding.style.display = 'none';
    searchBlock.style.height = 'calc(100vh - 52px)';
}

var inputFindMsg ='';
inputTag.oninput = ()=>{
    inputFind();
}

var isMore = false;
searchMore.onclick = ()=>{
    if(!isMore){
        let msg ='';
        for(let i=0;i<moreProductList.length;i++){
            msg+=`
            <li class="d-flex align-center">
            <img src="./img/Header/SearchBlockIcon.png" alt="">
            <p>${moreProductList[i].name}</p>
            </li>
            `;
        }
        searchProductList.innerHTML = msg;
        searchMore.innerHTML = `Thu Gọn <i class="fas fa-sort-up"></i>`;
        isMore = true;
    }
    else{
        searchProductList.innerHTML = '';
        searchMore.innerHTML = `Xem Thêm <i class="fas fa-sort-down"></i>`;
        isMore = false;
    }
}

var isClose = true;
inputTag.onclick = (e)=>{
    if(isClose){
        searchBlock.style.display = 'block';
        searchOverlay.style.display = 'block';
        isClose = false;
    }
    if(inputTag.value!=''){
        inputFind();
    }
}
searchOverlay.onclick = ()=>{
    if(!isClose){
        searchBlock.style.display = 'none';
        searchOverlay.style.display = 'none';
        isClose = true;
    }
    appear();
}
