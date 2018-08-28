require 'rails_helper'
include Shoulda::Matchers::ActiveRecord

RSpec.describe Course, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
  end

  describe 'associations' do
    it { is_expected.to have_many(:rankings).dependent(:destroy) }
    it { is_expected.to have_many(:institutions).through(:rankings) }
  end
end