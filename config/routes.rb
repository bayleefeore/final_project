FinalProject::Application.routes.draw do
  resources :flags, only: [:new, :create]

  get 'profile' => 'users#show', as: 'profile'
  get 'dashboard' => 'users#index', as: 'dashboard'

  get 'landing_page' => 'home#landing_page'
  get 'desktop' => 'home#desktop', as: 'desktop'


  post 'update_location' => 'sparks#update_location', as: :update_location
  get "messages/:partner_id" => 'messages#show', as: :message
  get "messages/refresh/:partner_id" => 'messages#refresh', as: :message_refresh
  post "messages" => 'messages#create', as: :messages
  get "messages" => 'messages#index', as: :messages
  get "swipe_to_dash" => 'users#swipe_to_dash', as: :swipe_to_dash
  get "swipe_to_spark" => 'sparks#swipe_to_spark', as: :swipe_to_spark
  get "map" => 'sparks#map', as: "map"

  match 'users/auth/:service/callback' => 'services#create'
  resources :services, :only => [:index, :create, :destroy]
  resources :sparks, :only => [:show, :new, :create, :edit, :update, :destroy]
  get 'places' => 'sparks#places', as: 'places'

  devise_for :users, controllers: {omniauth_callbacks: "omniauth_callbacks"}

  get ":page" => 'home#paginate'

  authenticated :user do
    root :to => "home#index"
  end

  root :to => "home#landing_page"


end

