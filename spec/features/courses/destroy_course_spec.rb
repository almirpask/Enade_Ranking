require 'rails_helper'

feature 'Destroy courses' do
  scenario 'Destroy a course' do
    visit '/'

    click_link 'Courses'

    within "table tbody" do
      expect(page).to have_content('English')
      first(:link, 'Destroy').click
    end

    expect(page).to have_content('Course was successfully destroyed.')
  end
end