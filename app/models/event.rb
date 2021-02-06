class Event < ApplicationRecord

  validates :ideation_start_date, presence: true
  validates :ideation_end_date, presence: true
  validates :voting_start_date, presence: true
  validates :voting_end_date, presence: true
  validates :guessing_start_date, presence: true
  validates :guessing_end_date, presence: true
  validates :location, presence: true
  validates :cost, presence: true
  validates :event_date, presence: true
end
