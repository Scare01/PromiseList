class AddUserIdToPromises < ActiveRecord::Migration[5.0]
  def change
    add_column :promises, :user_id, :integer
  end
end
