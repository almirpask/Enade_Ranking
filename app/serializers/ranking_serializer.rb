class RankingSerializer < ActiveModel::Serializer
  attributes :id, :course_id, :course_name, :course_score, :institution_id,
    :institution_name, :institution_general_note, :student_score
end
