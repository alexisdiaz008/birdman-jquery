//all we are trying to do is make the drop down menu work.
var main = function() {
  //we want to attach an event handler to the img element so we do $('img')
  // next we want that element to respond to an even, in this case, clicking so we add .click
  $('img').click(function() { //then we attach our generic function to the end of all that
  	//console.log("Clicking on image works?");//and to test it we just output something
  	$('.dropdown-menu').toggle();//we dont want to just display a message though, we want this dropdown to work, so we make the effect of clicking .toggle, which will just allow us to open something, note the syntax
  });
}
 
$(document).ready(main);