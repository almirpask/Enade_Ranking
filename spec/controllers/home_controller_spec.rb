require 'rails_helper'

RSpec.describe HomeController, type: :controller do
    it "should get index" do
        expect(get: root_url).to route_to(
            controller: "home",
            action: "index")
    end
end
