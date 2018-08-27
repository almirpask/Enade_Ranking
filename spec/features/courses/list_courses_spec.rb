require 'rails_helper'

feature 'List courses' do
  scenario 'List all courses' do
    visit '/'

    click_link 'Courses'

    within 'table' do
      expect(page).to have_content('Mathematics')
      expect(page).to have_content('Spanish')
    end
  end
end
