class Chatroom < ApplicationRecord
  has_many :chatroom_users
  has_many :users, through: :chatroom_users
  has_many :messages

  def recent_messages(n)
    messages.limit(n)
  end
  
end
