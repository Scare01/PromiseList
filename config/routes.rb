Rails.application.routes.draw do
  devise_for :users
  resources :promises
  root 'promises#index'
end
