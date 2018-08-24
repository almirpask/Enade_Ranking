Rails.application.routes.draw do
  resources :rankings
  resources :courses
  root to: 'home#index'
  resources :institutions
end
