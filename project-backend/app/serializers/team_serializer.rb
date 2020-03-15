class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :formation, :salary_cap, :players, :transfers
  def players 
      ActiveModel::SerializableResource.new(object.players,  each_serializer: PlayerSerializer)
  end 

  def transfers 
    ActiveModel::SerializableResource.new(object.transfers,  each_serializer: TransferSerializer)
  end 
end
