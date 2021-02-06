class VoteSerializer
  include JSONAPI::Serializer
  attributes :user_id, :activity_id
end
