class TransfersController < ApplicationController
    
    def index 
        transfers = Transfer.all 
        render json: transfers
    end

    def show 
        transfer = Transfer.find(params[:id])
        render json: @team
    end
    
    def create 
        team = Team.find(params[:team_id])
        player = Player.find(params[:player_id])
        transfer = team.transfers.new
        transfer.player_id = player.id
        transfer.save
    end 

    def destroy
        transfer = Transfer.find(params[:id])
        transfer.destroy
    end 

    private 
    def transfer_params
        params.require(:transfer).permit(:team_id, :player_id)
    end 
end 