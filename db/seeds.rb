# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

t1 = Track.create(title: "Well Rested")
t2 = Track.create(title: "Graduation")
t3 = Track.create(title: "Helen")
t4 = Track.create(title: "Alisa")



a1 = Artist.create(name: "Ariel Pink", hometown: "Los Angelos, CA")
a2 = Artist.create(name: "Kero Kero Bonito", hometown: "UK")

p1 = Playlist.create(name: "Kero Kero Jamz")
p2 = Playlist.create(name: "House Arrest")



a1.tracks << [t3, t4]

a2.tracks << [t1, t2]

p1.tracks << [t1,  t2]
p2.tracks << [t3,  t4]


puts "Info seeded."