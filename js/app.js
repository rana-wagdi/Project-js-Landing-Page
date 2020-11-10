function smoothScroll(target,duration){
    var target=document.querySelector(target);
    console.log(target);
    var targetPosition=target.getBoundingClientRect();
    console.log('targetPotsition');
}
smoothScroll('.section2',1000);