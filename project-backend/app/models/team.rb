class Team < ApplicationRecord
    has_many :transfers 
    has_many :players, through: :transfers
end
