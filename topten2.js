let replaceImage = function(event) {

  //Create function to grab url of image clicked
  let theImage = jQuery(event.target)
  console.log("Got a click event:", event)
  let srcValue = theImage.attr("src")
  console.log(srcValue)

  //Replace big image URL with srcValue created above
  jQuery("#main-image").attr("src", srcValue)

}

//Execute function when image is clicked on page
jQuery("img").on("click", replaceImage)
