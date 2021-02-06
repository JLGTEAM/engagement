module Api
  module V1
    class ActivitiesController < ApplicationController
      # FOR TESTING API
      skip_before_action :authenticate_user!, only: [ :index, :create, :most_voted_idea ]
      protect_from_forgery with: :null_session

      def index
        activities = Activity.where(event_id: params[:event_id])
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

      def most_voted_idea
        ideas = Activity.where(event_id: params[:event_id])
        most_voted = ideas.max { |a, b| a.votes_count <=> b.votes_count }
        render json: ActivitySerializer.new(most_voted).serializable_hash.to_json
      end

      private

      def activity_params
        params.permit(:title, :description, :event_id)
      end
    end
  end
end
