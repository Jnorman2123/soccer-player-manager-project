class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :value, :transfers
  def transfers 
    ActiveModel::SerializableResource.new(object.transfers,  each_serializer: TransferSerializer)
  end 
end
