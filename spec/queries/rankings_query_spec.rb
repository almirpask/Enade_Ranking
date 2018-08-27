require 'rails_helper'

describe RankingsQuery do
  fixtures :rankings

  subject { RankingsQuery.new.relation }

  let!(:ranking_anhanguera_mathematics) { rankings(:ranking_anhanguera_mathematics) }
  let!(:ranking_unip_mathematics) { rankings(:ranking_unip_mathematics) }
  let!(:ranking_unip_spanish) { rankings(:ranking_unip_spanish) }

  describe '#institution_score_desc' do
    
    it 'should return rankings ordered by institution score desc' do
      # byebug
      expect(subject.institution_score_desc).to eq([
        ranking_unip_mathematics,
        ranking_unip_spanish,
        ranking_anhanguera_mathematics
      ])
    end

    it 'should not return evaluations ordered by institution score asc' do
      expect(subject.institution_score_desc).to_not eq([
          ranking_anhanguera_mathematics,
          ranking_unip_mathematics
      ])
    end
  end

  describe '#institution_id' do
    it 'should return rankings from institution anhanguera' do
      expect(subject.institution_id(1)).to contain_exactly(ranking_anhanguera_mathematics)
    end
  end

  describe '#course_id' do
    it 'should return evaluations from spanish course' do
      expect(subject.course_id(2)).to contain_exactly(ranking_unip_spanish)
    end
  end

  describe '#institution_score' do
    it 'should return evaluations with institution score = 9' do
      expect(subject.institution_score(9)).to contain_exactly(ranking_unip_spanish, ranking_unip_mathematics)
    end
  end

  describe '#course_score' do
    it 'should return evaluations with course score = 7' do
      expect(subject.course_score(7)).to contain_exactly(ranking_unip_mathematics)
    end
  end

  describe '#student_score' do
    it 'should return evaluations with students average score = 9' do
      expect(subject.student_score(9)).to contain_exactly(ranking_unip_mathematics, ranking_unip_spanish)
    end
  end
end