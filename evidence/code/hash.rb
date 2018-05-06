benelux = [
  {
    name: "The Netherlands",
    population: 17200671,
    capital: "Amsterdam"
  },
  {
    name: "Belgium",
    population: 11358357,
    capital: "Brussels"
  },
  {
    name: "Luxembourg",
    population: 590667,
    capital: "Luxembourg City"
  }
]

def calc_total_population(countries)
  total_population = 0
  for country in countries
    total_population += country[:population]
  end
  return total_population
end

puts calc_total_population(benelux)
