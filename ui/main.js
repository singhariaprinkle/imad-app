console.log('Loaded!');
//change the text of the main-text div
var element= getElementById('main-text');
element.innerHTML='new-value';

//move image to left
var img=document.getElementById('madi');
img.onclick=function()
{
    img.style.marginLeft='100px';
}