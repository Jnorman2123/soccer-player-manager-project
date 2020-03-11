# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

teams = Team.create([{ name: 'Atlanta United', formation: '3-4-3', salary_cap: 75000000},
name: 'Chelsea FC', formation: '4-3-3', salary_cap: 1000000000])

players = Player.create([{ name: 'Josef Martinez', position: 'Forward', value: 19250000},
name: 'Christian Pulisic', position: 'Forward', value: 66600000])