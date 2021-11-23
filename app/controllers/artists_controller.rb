class ArtistsController < ApplicationController
   
    def index
        render json: Artist.all, include: [:tracks]
    end


    def show 
        render json: Artist.find(params[:id]), include: [:tracks]
    end

end
