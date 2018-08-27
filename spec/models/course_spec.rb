require 'rails_helper'
include Shoulda::Matchers::ActiveRecord

RSpec.describe Course, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
  end

  describe 'associations' do
    it { is_expected.to have_many(:rankings).dependent(:restrict_with_exception) }
    it { is_expected.to have_many(:institutions).through(:rankings) }
  end
end