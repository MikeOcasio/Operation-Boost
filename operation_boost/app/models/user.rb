# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           not null
#  password_digest        :string           not null
#  first_name             :string
#  last_name              :string
#  role                   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  encrypted_data         :text
#  encrypted_symmetric_key :text
#
# Model for representing users in the application.
class User < ApplicationRecord
  include Devise::Models::TwoFactorAuthenticatable
  include Devise::Models::TwoFactorBackupable

  #add Devise modules
  devise :database_authenticatable, :registerable, :recoverable,
  :rememberable, :trackable, :validatable, :confirmable, :lockable,
  :timeoutable, :two_factor_authenticatable, :two_factor_backupable

  has_many :orders
  has_many :carts
  has_many :notifications

  # Constants
  # ---------------
  ROLE_LIST = ["admin", "skillmater", "customer", "skillcoach", "coach"].freeze

  # Validations
  # ---------------
  validates :email, presence: true, uniqueness: true
  validates :role, presence: true, inclusion: { in: ROLE_LIST }
end
