

var exitBtn = document.querySelector('.register-block-exit')
var registerOverlay = document.querySelector('.register-overlay')
var registerBox = document.querySelector('.register')
var theRobot = document.querySelector('.the-super-robot')
var modal = document.querySelector('.register-block')
var form = document.querySelector('.register-block-left-signin')
var registerDropDown = document.querySelector('.register-dropdown')
var exitChoice = document.querySelector('.exit-choice')
var user = document.querySelector('.user');
var pass = document.querySelector('.password');
localStorage.setItem('isSignUp','false');
var isClose = true;
if(!JSON.parse(localStorage.getItem('isSignUp'))){
    registerDropDown.style.display = 'none';
    
}
else{
    registerDropDown.style.display = '';
    isClose = false;
}


form.onsubmit = (e)=>{
    e.preventDefault();
    
    if(user.value.toLowerCase().includes('admin')&&pass.value.toLowerCase().includes('thaytien')){
        turnOff();
        isClose = false;
        window.location ='./vendor/admin.html';
    }
   
    
    if(user.value!=''&&pass.value!=''){
        registerDropDown.setAttribute('style','');
        localStorage.setItem('isSignUp','true');
        turnOff();
        isClose = false;
    }
}

exitChoice.onclick = (e)=>{
    e.stopPropagation()
    isClose = true;
    registerDropDown.style.display = 'none';
    localStorage.setItem('isSignUp','false');
}

function turnOn(){
    registerOverlay.style.display = 'block';
    modal.style.display = 'flex';
    user.value = '';
    pass.value= '';
}
function turnOff(){
    registerOverlay.style.display = 'none';
    modal.style.display = 'none';
}
exitBtn.onclick = ()=>{
    if(!isClose){
        turnOff();
        isClose = true;
    }
}
registerOverlay.onclick = ()=>{
    if(!isClose){
        turnOff();
        isClose = true;
    }
}
theRobot.onclick = ()=>{
    if(isClose){
        turnOn();
        isClose = false;
    }
}
registerBox.onclick = ()=>{
    if(isClose){
        turnOn();
        isClose = false;
    }
}
