//Counter code
var button = getElementById('counter');
var counter = 0;
button.onclick= function()
{
  
  //make a request to counter endpoint
  
  //capture the response and store it in a variable
  
  //render the variable in the correct span
  counter= counter+1;
  var span=getElementById('count');
  span.innerHTML =counter.toString();
};