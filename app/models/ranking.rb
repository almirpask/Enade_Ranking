class Ranking < ApplicationRecord
  include Filterable
  belongs_to :course
  belongs_to :institution

  validates :course, :institution, :student_score, :course_score, presence: true

  delegate :name, to: :course, prefix: true
  delegate :name, :general_note, to: :institution, prefix: true
end
