benelux = ['The Netherlands', 'Belgium', 'Luxembourg']

def search_word(list, searched_word)
  for word in list
    return "#{searched_word} found" if word == searched_word
  end
  return "#{searched_word} not found"
end

puts search_word(benelux, "The Netherlands")

puts search_word(benelux, "Italy")
