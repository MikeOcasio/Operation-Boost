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
  include AASM

  belongs_to :user
  belongs_to :product
  has_one :promotion, through: :product

  aasm column: 'status' do
    state :open, initial: true
    state :assigned
    state :in_progress
    state :delayed
    state :disputed
    state :re_assigned
    state :complete

    # Define state transitions
    event :assign do
      transitions from: :open, to: :assigned
    end

    event :start_progress do
      transitions from: :assigned, to: :in_progress
    end

    event :mark_delayed do
      transitions from: :in_progress, to: :delayed
    end

    event :mark_disputed do
      transitions from: [:assigned, :in_progress], to: :disputed
    end

    event :re_assign do
      transitions from: [:assigned, :in_progress], to: :re_assigned
    end

    event :complete_order do
      transitions from: [:assigned, :in_progress, :delayed], to: :complete
    end
  end

end
