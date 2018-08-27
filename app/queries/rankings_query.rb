class RankingsQuery
    attr_reader :relation
    def initialize(relation = Ranking.all)
      @relation = relation.extending(Scopes)
    end

    module Scopes
        def institution_score_desc
            joins(:institution).order(Institution.arel_table[:general_note].desc)
        end
    
        def institution_id(id)
            joins(:institution)
            .where(institution_id: id)
        end
    
        def course_id(id)
            joins(:course)
            .where(course_id: id)
        end
    
        def institution_general_note(score)
            joins(:institution).where(Institution.arel_table[:general_note].eq(score))
        end
    
        def course_score(score)
            where(course_score: score)
        end
    
        def student_score(score)
            where(student_score: score)
        end
    end
end  