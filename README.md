# Get started

Installation:
```sh
$ bundle install
$ yarn install
$ rails db:create
$ rails db:migrate
```

Run project:

```sh
# Start rails server
$  foreman rails s
```

Run tests:

```sh
# Make sure you have the PhantomJS installed. To install, read the capybara documentation: https://github.com/teampoltergeist/poltergeist#installing-phantomjs

$ rails db:create RAILS_ENV=test
$ rails db:migrate RAILS_ENV=test
$ rspec spec/
```
