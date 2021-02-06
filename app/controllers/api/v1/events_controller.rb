module Api
  module V1
    class EventsController < ApplicationController
      # FOR TESTING API
      skip_before_action :authenticate_user!, only: [ :index, :create ]
      protect_from_forgery with: :null_session

      def index
        events = Event.all
        render json: EventSerializer.new(events).serializable_hash.to_json
      end

      def create
      end
    end
  end
end
