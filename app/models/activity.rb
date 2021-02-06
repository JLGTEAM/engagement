class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :title, presence: true
  validates :description, presence: true

  def votes_count
    Vote.where(activity_id: self.id).length
  end
end
