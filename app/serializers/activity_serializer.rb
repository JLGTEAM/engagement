class ActivitySerializer
  include JSONAPI::Serializer
  attributes :title, :description, :user_id, :event_id
end
