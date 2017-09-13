console.log('Loaded!');
//change the text of the main-text div
var element= getElementById('main-text');
element.innerHTML= 'new-value';

//move image to left
var img=document.getElementById('madi')
img.onclick=function ()
{
    img.style.marginLeft='100px';
}
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick= function()
{
    var interval = setInterval(moveright,100);
}