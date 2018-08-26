class CreateRankings < ActiveRecord::Migration[5.2]
  def change
    create_table :rankings do |t|
      t.references :course, foreign_key: true
      t.references :institution, foreign_key: true
      t.decimal :course_score, precision: 5, scale: 2, default: 0
      t.decimal :student_score, precision: 5, scale: 2, default: 0

      t.timestamps
    end
  end
end
