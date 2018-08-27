require 'rails_helper'

feature 'Edit course' do
	scenario 'with valid information' do
		visit '/'

    click_link 'Courses'
		
		within "table tbody" do
			expect(page).to have_css('a', :text => 'Edit')
			first(:link, 'Edit').click
		end
		
		within '.field' do
      fill_in 'course_name', with: 'Physical Education'
		end
		
		within '.actions' do
      click_on 'Update Course'
    end

    expect(page).to have_content('Course was successfully updated.')
	end
	
	scenario 'with invalid information' do
		visit '/'

    click_link 'Courses'
		
		within "table tbody" do
			expect(page).to have_css('a', :text => 'Edit')
			first(:link, 'Edit').click
    end
		
		within '.field' do
      fill_in 'course_name', with: nil
		end
		
		within '.actions' do
      click_on 'Update Course'
		end
		
    expect(page).to have_content('1 error prohibited this course from being saved:')
    expect(page).to have_content("Name can't be blank")
  end
end
