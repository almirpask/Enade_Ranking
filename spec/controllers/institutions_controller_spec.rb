require 'rails_helper'

RSpec.describe InstitutionsController, type: :controller do    

    let(:valid_params) { {
        "name"=>"UNOPAR", 
        "general_note"=>"8", 
        "rankings_attributes"=> [
            {
                "course_id"=>"2", "student_score"=>"5", 
                "course_score"=>"6"
            }
        ]
    }}

    it "should get index" do
        expect(get: institutions_path).to route_to(
            controller: "institutions",
            action: "index")
    end

    it "should get new" do
        expect(get: new_institution_path).to route_to(
            controller: "institutions",
            action: "new")
    end

    it "should create a institution" do
        institution = Institution.create valid_params
        expect(institution).to be_an Institution
    end
    
    it "should update a institution" do
        institution = Institution.find(1)
        expect(institution.name).to eq('anhanguera')
        institution.name = 'fatec'
        expect(institution.save).to eq(true)
        expect(institution.name).to eq('fatec')
    end 

    it "should destroy a institution" do
        institution = Institution.find(1)
        expect(institution.name).to eq('anhanguera')
        expect{ institution.destroy }.to change(Institution, :count).by(-1)
    end
 
end
