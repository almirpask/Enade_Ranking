class Institution < ApplicationRecord
    has_many :rankings, dependent: :destroy
    has_many :courses, through: :rankings

    validates :name, presence: true
    validates :general_note, presence: true

    accepts_nested_attributes_for :rankings, allow_destroy: true
end
