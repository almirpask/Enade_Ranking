class Course < ApplicationRecord
    has_many :rankings, dependent: :restrict_with_exception
    has_many :institutions, through: :rankings
    
    validates :name, presence: true
end
