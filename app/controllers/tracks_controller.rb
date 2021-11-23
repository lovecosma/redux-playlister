class TracksController < ApplicationController

    def index
        render json: Track.all, include: [:artists]
    end


    def show 
        render json: Track.find(params[:id]), include: [:artists]
    end

end
