class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :formation, :salary_cap, :players
  def players 
      ActiveModel::SerializableResource.new(object.players,  each_serializer: PlayerSerializer)
  end 

end
