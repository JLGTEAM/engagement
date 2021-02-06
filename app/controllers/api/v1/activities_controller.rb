module Api
  module V1
    class ActivitiesController < ApplicationController
      # FOR TESTING API
      skip_before_action :authenticate_user!, only: [ :index, :create ]
      protect_from_forgery with: :null_session

      def index
        activities = Activity.all
        render json: ActivitySerializer.new(activities).serializable_hash.to_json
      end

      def create
      end
    end
  end
end
