class UserSerializer
  include JSONAPI::Serializer
  attributes :first_name, :last_name, :email, :manager, :bio, :points, :organization_id
end
