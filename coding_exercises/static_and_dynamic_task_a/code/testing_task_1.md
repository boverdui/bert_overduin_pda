require_relative('card.rb')

class CardGame

  def checkforAce(card)
    if card.value = 1                
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)      
  if card1.value > card2.value
    return card.name                 
  else
    card2                                           
  end
end
end                                                          

def self.cards_total(cards)         
  total                              
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end



ERRORS:

LINE 6:  = SHOULD SAY ==
LINE 13: dif SHOULD SAY def
LINE 13: THERE SHOULD BE A COMMA BETWEEN card1 AND card2
LINE 15: card.name SHOULD SAY card1.value
LINE 17: card2 SHOULD SAY card2.value
LINE 17: card2.value SHOULD BE RETURNED
LINE 20: end STATEMENT SHOULD BE REMOVED
LINE 22: self.cards_total SHOULD SAY cards_total
LINE 23: total SHOULD BE SET TO 0
LINE 26: return STATEMENT SHOULD BE OUTSIDE THE for LOOP
LINE 26: THERE SHOULD BE A SPACE AFTER THE WORD of
LINE 26: total SHOULD BE CONVERTED INTO A STRING
LINE 30: end STATEMENT SHOULD BE ADDED

NOT STRICTLY ERRORS (I.E. THEY DON'T AFFECT THE RESULT):

LINE 1: require_relative('card.rb') NOT NEEDED
LINE 5: checkforAce SHOULD SAY check_for_ace
GENERAL: INDENTATION OF CODE ISN'T CORRECT
