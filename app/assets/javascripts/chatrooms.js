$(document).on('turbolinks:load', function() {
  $("#new_message").keypress(function(e){
    if(e.which===13){
      e.preventDefault();
      $(this).submit()
    }
  })
})