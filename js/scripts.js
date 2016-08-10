$("#note-input").keyup(function(event) {
  event.preventDefault();
  if(event.keyCode === 13) {
    $("#note-output").text($(this).val().toUpperCase());
  }


});

$("form").submit(function(event){
  event.preventDefault();
});
