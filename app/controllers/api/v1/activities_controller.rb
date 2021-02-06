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
        activity = Activity.new(activity_params)
        activity.user = current_user
        if activity.save
          render json: ActivitySerializer.new(activity).serializable_hash.to_json
        else
          render json: { error: activity.errors.messages }, status: 422
        end
      end

      private

      def activity_params
        params.permit(:title, :description, :event_id)
      end
    end
  end
end
