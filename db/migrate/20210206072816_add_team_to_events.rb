class AddTeamToEvents < ActiveRecord::Migration[6.0]
  def change
    add_reference :events, :team, null: false, foreign_key: true
  end
end
