Rails.application.routes.draw do
  resources :promises
  root 'promises#index'
end
