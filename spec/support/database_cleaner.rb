module DatabaseCleaner
    module_function

    def truncate
        connection.execute "TRUNCATE #{tables.join(', ')} RESTART IDENTITY CASCADE"
    end

    def tables
        connection.tables - ['schema_migrations']
    end

    def connection
        ActiveRecord::Base.connection
    end
end

RSpec.configure do |config|
    config.before(:suite) do
        DatabaseCleaner.truncate
    end

    config.before(:all) do
        DatabaseCleaner.truncate
    end
end
  