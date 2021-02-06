module Api
  module V1
    class UsersController < ApplicationController
      # FOR TESTING API
      skip_before_action :authenticate_user!, only: [ :index ]
      protect_from_forgery with: :null_session

      def index
        users = User.all
        render json: UserSerializer.new(users).serializable_hash.to_json
      end

      def create
      end
    end
  end
end
