$(document).on('turbolinks:load', function() {
  $("#new_message").keypress(function(e){
    if(e.which===13){
      e.preventDefault();
      $(this).submit()
    }
  });

  $("#new_message").on("submit",function(e){
    e.preventDefault();
    let chatroom_id = $("div[data-behaviour='messages']").data("chatroom-id");
    let body = $("#message_body")
    App.chatrooms.send_message(chatroom_id,body.val())
    body.val("")
  })
})