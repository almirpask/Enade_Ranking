class Institution < ApplicationRecord
    has_many :rankings, dependent: :destroy
    has_many :courses, through: :rankings

    accepts_nested_attributes_for :rankings
end
