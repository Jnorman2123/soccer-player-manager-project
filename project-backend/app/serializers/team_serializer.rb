class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :formation, :salary_cap
end
