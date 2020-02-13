class CreateCryptocurrencies < ActiveRecord::Migration
  def change
    create_table :cryptocurrencies do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
