  # == Schema Information
  #
  # Table name: categories
  #
  #  id          :bigint           not null, primary key
  #  name        :string
  #  description :text
  #  created_at  :datetime         not null
  #  updated_at  :datetime         not null
  #
  # Relationships
  # - has_many :products


class Category < ApplicationRecord

  CAT_LIST = ["apex", "callofduty", "destiny2"]

  validates :name, presence: true, inclusion: { in: CAT_LIST }

  after_create :add_to_cat_list

  def add_to_cat_list
    CAT_LIST << self.name unless CAT_LIST.include?(self.name)
  end

end
