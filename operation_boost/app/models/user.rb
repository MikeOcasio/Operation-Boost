# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  password   :string           not null
#  first_name :string
#  last_name  :string
#  role       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Model for representing users in the application.
class User < ApplicationRecord
  # Add validations or methods here
  has_secure_password

  ROLE_LIST = ["admin", "skillmater", "customer"].freeze

  validates :email, presence: true, uniqueness: true
  validates :role, presence: true, inclusion: { in: ROLE_LIST }


end
