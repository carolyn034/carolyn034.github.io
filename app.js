//Problem: User goes to dead end when clicking on image
//Solution: Create on overlay with large image - lightbox
//'$' makes it a jQuery object
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

// An image to overlay
$overlay.append($image);
// Add overlay
$("body").append($overlay);

// A Caption

//Capture the click event on a link to an image
$("#gallery a").click(function(event) {
  event.preventDefault();
  var imagelocation = $(this).attr("href");

  //Update overlay with image linked in the link
$image.attr("src", imagelocation);


//Show the overlay
  $overlay.show();
});

// When overlay is clicked
$overlay.click(function(){
// Hide the overlay
  $overlay.hide();

});

