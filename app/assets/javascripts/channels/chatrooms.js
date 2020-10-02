App.chatrooms = App.cable.subscriptions.create("ChatroomsChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    active_chatroom = $("div[data-behaviour='messages'][data-chatroom-id='"+data.chatroom_id+"']");
    chatroom_link = $("a[data-behaviour='chatroom-link'][data-chatroom-id='"+data.chatroom_id+"']");
    bold_class = "font-weight-bold"
    if(active_chatroom.length>0){
      if(chatroom_link.hasClass(bold_class)){
        chatroom_link.removeClass(bold_class)
      }
      active_chatroom.append(data.message)
    }
    else{
      chatroom_link.addClass(bold_class)
    }
    
  }
});