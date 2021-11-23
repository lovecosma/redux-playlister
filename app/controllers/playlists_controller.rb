class PlaylistsController < ApplicationController


        def index
            render json: Playlist.all, include: [:tracks, :artists]
        end


        def show 

            render json: Playlist.find(params[:id])

        end



end
