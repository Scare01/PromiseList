class CreatePromises < ActiveRecord::Migration[5.0]
  def change
    create_table :promises do |t|
      t.string :title

      t.timestamps
    end
  end
end
