class TransfersController < ApplicationController 
    
    def create 
        team = Team.find(params[:team_id])
        player = Player.find(params[:player_id])
        transfer = team.transfers.new
        transfer.player_id = player.id
        transfer.save
    end 

    private 
    def transfer_params
        params.require(:transfer).permit(:team_id, :player_id)
    end 
end 