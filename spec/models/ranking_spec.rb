require 'rails_helper'

RSpec.describe Ranking, type: :model do

  describe 'validations' do
    it { should validate_presence_of(:course) }
    it { should validate_presence_of(:institution) }
    it { should validate_presence_of(:student_score) }
    it { should validate_presence_of(:course_score) }
  end

  describe 'associations' do
    it { is_expected.to belong_to(:course) }
    it { is_expected.to belong_to(:institution) }
  end

  describe 'delegates' do

    it { should delegate_method(:name).to(:course).with_prefix }

    it { should delegate_method(:name).to(:institution).with_prefix }
    it { should delegate_method(:general_note).to(:institution).with_prefix }
  end
end
