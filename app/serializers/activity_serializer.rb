class ActivitySerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description, :user_id, :event_id
end
