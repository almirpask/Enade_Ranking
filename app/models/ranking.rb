class Ranking < ApplicationRecord
  belongs_to :course
  belongs_to :institution

  validates :course, :institution, :student_score, :course_score, presence: true

  delegate :name, to: :course, prefix: true
  delegate :name, :general_note, to: :institution, prefix: true

  def self.institution_score_desc
    joins(:institution).order(Institution.arel_table[:general_note].desc)
  end

  def self.institution_id(id)
    joins(:institution)
    .where(institution_id: id)
  end

  def self.course_id(id)
    joins(:course)
    .where(course_id: id)
  end

  def self.institution_general_note(score)
    joins(:institution).where(Institution.arel_table[:general_note].eq(score))
  end

  def self.course_score(score)
    where(course_score: score)
  end

  def self.student_score(score)
    where(student_score: score)
  end

  def self.filter(params)
    results = where(nil)
    
    params.each do |key, value|
      results = results.public_send(key, value) if value.present?
    end
    results
  end
end
