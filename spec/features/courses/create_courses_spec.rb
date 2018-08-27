require 'rails_helper'

feature 'Create courses' do
  scenario 'Create a new course with valid information' do
    visit '/'

    click_link 'Courses'

    click_link 'New Course'

    within '.field' do
      fill_in 'Name', with: 'Physical Education'
    end

    click_on 'Create Course'
    expect(page).to have_content('Course was successfully created')
  end

  scenario 'Create a new course with invalid information' do
    visit '/'

    click_link 'Courses'

    click_link 'New Course'
    
    within '.field' do
        fill_in 'Name', with: nil
    end

    click_on 'Create Course'
    expect(page).to have_content("Name can't be blank")
  end
end
