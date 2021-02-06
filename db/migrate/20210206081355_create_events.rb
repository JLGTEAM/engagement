class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.date :ideation_start_date
      t.date :ideation_end_date
      t.date :voting_start_date
      t.date :voting_end_date
      t.date :guessing_start_date
      t.date :guessing_end_date
      t.date :event_date
      t.string :location
      t.integer :cost

      t.timestamps
    end
  end
end
