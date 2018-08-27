require 'rails_helper'

RSpec.describe Institution, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:general_note) }
  end

  describe 'associations' do
    it { is_expected.to have_many(:rankings).dependent(:destroy) }
    it { is_expected.to have_many(:courses).through(:rankings) }
  end

  describe 'nested' do
    it { should accept_nested_attributes_for(:rankings).allow_destroy(true) }
  end
end
