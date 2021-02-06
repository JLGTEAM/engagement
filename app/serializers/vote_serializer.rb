class VoteSerializer
  include JSONAPI::Serializer
  attributes :id, :user_id, :activity_id
end
