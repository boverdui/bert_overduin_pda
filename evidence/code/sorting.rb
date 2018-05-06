benelux = ['The Netherlands', 'Belgium', 'Luxembourg']

def sort_words(unsorted)
  still_unsorted = unsorted
  sorted = []
  while still_unsorted.length > 1
    unsorted = still_unsorted
    still_unsorted = []
    smallest = unsorted.pop
    for word in unsorted
      if word < smallest
        still_unsorted << smallest
        smallest = word
      else
        still_unsorted << word
      end
    end
    sorted << smallest
  end
  sorted << unsorted[0]
end

puts sort_words(benelux)
