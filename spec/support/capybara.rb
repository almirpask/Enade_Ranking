require 'capybara/rspec'
require 'capybara/poltergeist'

Capybara.javascript_driver = :poltergeist

RSpec.configure do |config|
  config.before(:each) do
    fixture_path = "#{Rails.root}/spec/fixtures"
    fixtures = Dir["#{fixture_path}/**/*.yml"].map { |f| File.basename(f, '.yml') }

    ActiveRecord::FixtureSet.create_fixtures(fixture_path, fixtures)
  end
end
