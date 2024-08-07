# config/routes.rb

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    devise_for :users, skip: [:sessions, :registrations]
    get '/users/skillmasters', to: 'users#skillmasters'
    post '/login', to: 'users#login'
    get '/current_user', to: 'users#show_current_user'
    # get '/categories', to 'categories#index'

    resources :users
    resources :orders

    get '/graveyard_orders', to: 'orders#graveyard_orders'
    patch '/orders/:id/pick_up_order', to: 'orders#pick_up_order'
  end



  get '/generate_symmetric_key', to: 'secure_data#generate_symmetric_key'
  get '/generate_asymmetric_key_pair', to: 'secure_data#generate_asymmetric_key_pair'
  post '/encrypt_data', to: 'secure_data#encrypt_data'
  post '/encrypt_symmetric_key', to: 'secure_data#encrypt_symmetric_key'


end
