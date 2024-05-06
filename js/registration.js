$(document).ready(()=> {

  $("#registration").submit( function (e) {
    e.preventDefault();


    $.ajax({
      type: "POST",
      url: "../processes/registration-process.php",
      data: new FormData(this),
      dataType: "json",
      contentType: false,
      cache: false,
      processData: false,

      success: function(response) {
        $('.invalid-feedback').css('display', 'block');
        

        if(response.status === 1){
          $('#registration')[0].reset();
          $('.valid-feedback').css('display', 'block');
          $('.invalid-feedback').css('display', 'none');
          $('.valid-feedback').html('<p id="valid">' + response.message + '</p>');
        } else {
          $('.invalid-feedback').html('<p id="invalid">' + response.message + '</p>');
        }
      }
    });
  });
});

const togglePassword = document.querySelector('#checkPassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function(){
const type = password.getAttribute("type") === "password" ? "text" : "password";
password.setAttribute("type", type);
});

