Rails.application.routes.draw do
  root to: 'home#index'
  resources :rankings
  resources :courses
  resources :institutions
end
