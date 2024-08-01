# app/controllers/api/orders_controller.rb
module Api
  class OrdersController < ApplicationController
    # Other controller actions...

    # Method to retrieve orders in the graveyard pool
    def graveyard_orders
      @graveyard_orders = Order.where(assigned_skill_master_id: nil)
      render json: @graveyard_orders
    end

    def pick_up_order
      order = Order.find(params[:id])
      if order.update(assigned_skill_master_id: current_user.id)
        render json: { success: true, message: "Order #{order.id} picked up successfully!" }
      else
        render json: { success: false, message: "Failed to pick up order." }, status: :unprocessable_entity
      end
    end
  end
end
