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
