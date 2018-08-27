class RankingsController < ApplicationController 
    def index
        @rankings = 
            Ranking.all
            .filter(
                params.slice(
                    :institution_id,
                    :course_id,
                    :institution_general_note,
                    :course_score,
                    :student_score
                )
            ).includes(:course, :institution)
            .joins(:institution)
            .order(Institution.arel_table[:general_note].desc)
        render json: @rankings
    end
end
