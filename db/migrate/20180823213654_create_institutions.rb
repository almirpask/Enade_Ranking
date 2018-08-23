class CreateInstitutions < ActiveRecord::Migration[5.2]
  def change
    create_table :institutions do |t|
      t.string :name
      t.decimal :general_note, precision: 5, scale: 2

      t.index :name, unique: true
      t.timestamps
    end
  end
end
