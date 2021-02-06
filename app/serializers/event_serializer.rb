class EventSerializer
  include JSONAPI::Serializer
  attributes :location, :cost
end
