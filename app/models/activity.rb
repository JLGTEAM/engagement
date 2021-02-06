class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :title, presence: true
  validates :description, presence: true
end
