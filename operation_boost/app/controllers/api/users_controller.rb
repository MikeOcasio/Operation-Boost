# app/controllers/api/users_controller.rb

class Api::UsersController < ApplicationController
  # Before executing certain actions, set the user based on the provided ID
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /api/users
  # Return a list of all users
  def index
    @users = User.all
    render json: @users
  end

  # GET /api/users/1
  # Return details of a specific user
  def show
    render json: @user
  end

  # POST /api/users
  # Create a new user
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/users/1
  # Update details of a specific user
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/users/1
  # Delete a specific user
  def destroy
    @user.destroy
    head :no_content
  end

  def skillmasters
    @users = User.where(role: 'skillmaster')
    render json: @users
  end

  # Enable two-factor authentication for a user
# app/controllers/users_controller.rb

def enable_two_factor
  @user.otp_required_for_login = true
  @user.otp_secret = User.generate_otp_secret
  @user.save!
  UserMailer.otp(@user, @user.otp_secret).deliver_now
  render json: { message: 'OTP has been sent to your email.' }
end

  # Disable two-factor authentication for a user
  def disable_two_factor
    @user.otp_required_for_login = false
    @user.otp_secret = nil
    @user.save!
    head :no_content
  end

  # Verify a two-factor authentication code
  def verify_two_factor
    if @user.validate_and_consume_otp!(params[:otp_attempt])
      render json: { success: true }
    else
      render json: { success: false }, status: :unauthorized
    end
  end

  # Generate backup codes for a user
  def generate_backup_codes
    @user.generate_otp_backup_codes!
    @user.save!
    # Send the @user.otp_backup_codes to the user for them to save
    render json: { backup_codes: @user.otp_backup_codes }
  end

  private

  # Set the user based on the provided ID
  def set_user
    @user = User.find(params[:id])
  end

  # Define the permitted parameters for creating/updating a user
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :role)
  end
end
