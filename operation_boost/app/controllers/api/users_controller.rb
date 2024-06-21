# app/controllers/api/users_controller.rb
require 'jwt'

class Api::UsersController < ApplicationController
  include ActionController::HttpAuthentication::Token::ControllerMethods
  # Before executing certain actions, set the user based on the provided ID
  skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:show, :update, :destroy]

  def login
    @user = User.find_by(email: params[:email])
    if @user&.valid_password?(params[:password])
      sign_in @user
      payload = { user_id: @user.id } # Define your payload
      secret = Rails.application.credentials[:devise_jwt_secret_key]
      algorithm = 'HS256'

      # Manually encode the token
      token = JWT.encode payload, secret, algorithm

      puts "Encoded Token: #{token}"

      render json: { token: token }
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def current_user
    authenticate_with_http_token do |token, options|
      puts "Authorization Header: #{request.headers['Authorization']}"
      puts "Token: #{token}"
      secret = Rails.application.credentials[:devise_jwt_secret_key]
      algorithm = 'HS256'

      # Manually decode the token
      begin
        decoded_token = JWT.decode token, secret, true, { algorithm: algorithm }
        puts "Decoded Token: #{decoded_token}"
        User.find(decoded_token[0]['user_id'])
      rescue JWT::DecodeError => e
        puts "JWT Decode Error: #{e.message}"
      end
    end
  end


  def show_current_user
    if current_user
      render json: current_user
    else
      render json: { error: 'Not Authorized' }, status: 401
    end
  end


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
