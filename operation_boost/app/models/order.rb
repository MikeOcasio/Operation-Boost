  # == Schema Information
  #
  # Table name: orders
  #
  #  id         :bigint           not null, primary key
  #  user_id    :bigint           not null
  #  product_id :bigint           not null
  #  status     :string
  #  total_price: decimal
  #  created_at :datetime         not null
  #  updated_at :datetime         not null
  #
  # Relationships
  # - belongs_to :user
  # - belongs_to :product

class Order < ApplicationRecord
  belongs_to :user
  belongs_to :product
  has_one :promotion, through: :product
end
