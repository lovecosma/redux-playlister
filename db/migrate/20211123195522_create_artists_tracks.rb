class CreateArtistsTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :artists_tracks do |t|
      t.belongs_to :artist
      t.belongs_to :track
      t.timestamps
    end
  end
end
