class Team < ApplicationRecord
    has_many :transfers 
    has_many :players, through: :transfers
    validates :name, presence: true
    validates :formation, presence: true, inclusion: { in: ['4-3-3', '4-4-2', '3-4-3', '3-5-2'] }
    validates :salary_cap, presence: true, numericality: { only_integer: true, greater_than_of_equal_to: 50000000, less_than_or_equal_to: 2000000000 }
end
