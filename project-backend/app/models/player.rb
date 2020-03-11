class Player < ApplicationRecord
  has_many :transfers
  has_many :teams, through: :transfers 
end
