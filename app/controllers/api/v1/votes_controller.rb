module Api
  module V1
    class VotesController < ApplicationController
      # FOR TESTING API
      skip_before_action :authenticate_user!, only: [ :create, :destroy ]
      protect_from_forgery with: :null_session

      def create
        activity_id = params[:activity_id]
        user_id = current_user.id
        new_vote = Vote.new(activity_id: activity_id, user_id: user_id)
        if new_vote.save
          render json: VoteSerializer.new(new_vote).serializable_hash.to_json
        end
      end

      def destroy
      end
    end
  end
end
