class AddIndexToChatroomUsers < ActiveRecord::Migration[5.2]
  def change
    add_index(:chatroom_users, [:user_id,:chatroom_id],unique: true)
    #Ex:- add_index("admin_users", "username")
  end
end
