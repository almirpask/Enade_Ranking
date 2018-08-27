class Course < ApplicationRecord
    has_many :rankings, dependent: :restrict_with_exception, :dependent => :destroy
    has_many :institutions, through: :rankings
    
    validates :name, presence: true
end
