document.addEventListener("DOMContentLoaded", function(event) {
  // this funtion means the html has been loaded into a browser (dom is ready)
  var menu = document.getElementsByClassName("menu")[0];
  //this funtion the class in html so can add changes
  var menuButton = document.getElementsByClassName("button")[0];
  // This function finds any other class in html

  menuButton.addEventListener("click", function() {
    // when user click this code responds.
    menu.classList.toggle("active");
    // this add or removes class depending on eather it's available or not.
  });
});
