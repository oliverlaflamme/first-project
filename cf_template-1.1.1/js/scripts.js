        // FACEBOOK SCRIPT //

window.fbAsyncInit = function() {
  FB.init({
    appId            : '387210226177113',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.0'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

        // END OF FACEBOOK SCRIPT //



$(document).ready(function() {

               // SMOOTH SCROOLING //



    var $root = $('html, body');
    $('#navbar-example a').click(function() {
      var href = $.attr(this, 'href');
      if (href != undefined && href != '#') {
        $root.animate({
          scrollTop: $(href).offset().top
        }, 500, function () {
          window.location.hash = href;
        });
      }
      return false;
    });
               // END SMOOTH SCROOLING //

                   // TOOLTIPS //

     $(function () {
       $('[data-toggle="tooltip"]').tooltip();
     });
     $(function () {
       $("#item1").tooltip();
       $("#item2").tooltip();
        $("#item3").tooltip();
     });

    //  FORM JQUERY //



    $('#bquestion').on('click', function() {

      var comment = $('.form-group').val();
      $('#visible-comment').html(comment);
      $('.form-control, #bquestion, label').hide();

      alert("we have received your info!");
      return false;

    });

    $("#answer").on("keyup", function() {
      console.log("keyup happened");
      var name = 3;
      var text = "string";
      var charcount = $("#answer").val().length;
      console.log("answer");
      $("#char-count").html(charcount);

        $(".form-control").css("border", "3px solid red");
    });

$(".form-control").css("border", "3px solid red");





});
