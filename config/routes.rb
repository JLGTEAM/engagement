Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :organizations, only: [:show] do
        resources :events, only: [:index, :create] do
          resources :activities, only: [:index, :create] do
            collection do
              get :most_voted_idea
            end
           resources :votes, only: [:create, :destroy]
          end
        end

      end
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#app', via: :all
end
