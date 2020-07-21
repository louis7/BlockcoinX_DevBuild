class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone, :limit => 8

      t.timestamps null: false
    end
  end
end
