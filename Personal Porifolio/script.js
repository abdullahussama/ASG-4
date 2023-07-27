const burger = document.querySelector('#header .nav-bar .nav-list .burger');
const mob = document.querySelector('#header .nav-bar .nav-list ul');
var header = document.querySelector('#header .container');

burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    mob.classList.toggle('active');
});
document.addEventListener('scroll',()=>{
    var scroll_possition = window.scrollY;
    if(scroll_possition > 550){
    header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

var first = document.querySelector('.no-1');
var second = document.querySelector('.no-2');
var third = document.querySelector('.no-3');

var who = document.querySelector('.who-i-am');
var me = document.querySelector('.about-me');
var obj = document.querySelector('.objective');

first.addEventListener("click",()=>{
    who.classList.remove('hide');
    obj.classList.add('hide');
    me.classList.add('hide');
});
second.addEventListener("click",()=>{
    me.classList.remove('hide');
    obj.classList.add('hide');
    who.classList.add('hide');
});
third.addEventListener("click",()=>{
    me.classList.add('hide');
    who.classList.add('hide');
    obj.classList.remove('hide');
});

var img_one = document.querySelector('#img-one');
var img_two = document.querySelector('#img-two');
var img_three = document.querySelector('#img-three');
var img_src =["img/js.jpg","img/smile.jpg","img/react.jpg","img/angular.png","img/vuejs.png"];
var switsh = 0;
setInterval(() => {
  img_one.src = img_src[switsh];
  img_two.src = img_src[switsh];
  img_three.src = img_src[switsh];
  ++switsh;
  if (switsh >= 5) switsh = 0;
}, 1500);