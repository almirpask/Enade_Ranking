class RankingsController < ApplicationController 
    def index
        @rankings = rankings_query
        render json: @rankings
    end

    private
    
    def rankings_query
        RankingsQuery.new.relation
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
    end
    
end
