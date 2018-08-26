class InstitutionSerializer < ActiveModel::Serializer
  attributes :id, :name, :general_note

  has_many :rankings
end
