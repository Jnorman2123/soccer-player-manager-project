class Player < ApplicationRecord
  has_many :transfers
  has_many :teams, through: :transfers
  validates :name, presence: true, uniqueness: true
  validates :position, presence: true, inclusion: { in: ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'] }
  validates :value, presence: true, numericality: { only_integer: true } 
end
