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
          $('.invalid-feedback').html('<p id="invalid">' + response.message + '</p>');
        } else {
          $('.invalid-feedback').html('<p id="invalid">' + response.message + '</p>');
        }
      }
    });
  });
})