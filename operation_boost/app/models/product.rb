  # == Schema Information
  #
  # Table name: products
  #
  #  id          :bigint           not null, primary key
  #  name        :string
  #  description :text
  #  price       :decimal
  #  image       :string
  #  category_id :bigint
  #  created_at  :datetime         not null
  #  updated_at  :datetime         not null
  #
  # Relationships
  # - belongs_to :category
  # - has_many :orders

  class Product < ApplicationRecord
    belongs_to :category
    has_many :orders
    has_many :carts
    has_many :promotions, through: :product_promotions
  end
