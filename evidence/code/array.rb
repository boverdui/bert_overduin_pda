benelux = ['The Netherlands', 'Belgium', 'Luxembourg']

def count_characters(list)
  for word in list
    puts "#{word} contains #{word.length()} characters"
  end
end

count_characters(benelux)
