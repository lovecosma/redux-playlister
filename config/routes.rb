Rails.application.routes.draw do
  scope :api do 
    resources :tracks, :only => [:index, :show]
    resources :artists, :only => [:index, :show]
    resources :playlists, :only => [:index, :show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
