require("minitest/autorun")
require_relative("../card")
require_relative("../cardgame")

class TestCardGame < MiniTest::Test

  def setup()
    @cardgame = CardGame.new()
    @card_1 = Card.new("Spades", 1)
    @card_7 = Card.new("Spades", 7)
    @card_10 = Card.new("Spades", 10)
    @cards = [@card_1, @card_7, @card_10]
  end

  def test_check_for_ace__ace()
    assert_equal(true, @cardgame.check_for_ace(@card_1))
  end

  def test_check_for_ace__not_ace()
    assert_equal(false, @cardgame.check_for_ace(@card_7))
  end

  def test_highest_card__card1_higher()
    assert_equal(@card_7.value, @cardgame.highest_card(@card_7, @card_1))
  end

  def test_highest_card__card2_higher()
    assert_equal(@card_10.value, @cardgame.highest_card(@card_7, @card_10))
  end

  def test_check_cards_total()
    assert_equal("You have a total of 18", @cardgame.cards_total(@cards))
  end

end
