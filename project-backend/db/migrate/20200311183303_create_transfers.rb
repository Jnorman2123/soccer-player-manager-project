class CreateTransfers < ActiveRecord::Migration[6.0]
  def change
    create_table :transfers do |t|
      t.references :team, null: false, foreign_key: true
      t.references :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
