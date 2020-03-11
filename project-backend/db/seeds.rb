# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


teams = Team.create([{ name: 'First Team', formation: '4-4-2', salary_cap: 100000000},
{ name: 'Second Team', formation: '3-4-3', salary_cap: 200000000}])

players = Player.create([{ name: 'Josef Martinez', position: 'forward', value: 19250000, team_id: 1},
{ name: 'Gonzalo Martinez', position: 'forward', value: 16500000, team_id: 1}])