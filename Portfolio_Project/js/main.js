
$(document).ready(function(){
  $("#twitterNetwork").on("click", function(){
    $("#twitterNetwork").css("display", "none");
    $("#twitterButton").fadeIn(1000);
  });
  $("#twitterButton").mouseleave(function(){
    $("#twitterNetwork").fadeIn(1000);
    $("#twitterButton").css("display", "none");
  });

  $("#nampAbout").on("click", function(){
    $("#nampAbout").css("display", "none");
    $("#nampButton").fadeIn(1000);
  });
  $("#nampButton").mouseleave(function(){
    $("#nampAbout").fadeIn(1000);
    $("#nampButton").css("display", "none");
  });

  // HEADER SCRIPT

  var prevScrollPos = window.pageYOffset;

  var sticky = header.offsetTop;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      header.classList.add('sticky');
      } else {
      document.getElementById("header").style.top = "-85px";
    }
    prevScrollPos = currentScrollPos;
    if (window.pageYOffset <= 30) {
      header.classList.remove('sticky');
      document.getElementById('header').style.top = '0';
    };
  };

});
