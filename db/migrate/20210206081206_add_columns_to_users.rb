class AddColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :bio, :string
    add_column :users, :points, :integer, default: 0
    add_column :users, :manager, :boolean, default: false
    add_reference :users, :organization, null: false, foreign_key: true
  end
end
