# Pig Latin Translator

By Henry Oberholtzer & Ravin Fisher

## Tests

#### Describe pigLatin()

Test: "It will recognize a vowel at the start of a word and add 'way' at the end"
Code: pigLatin("e")
Expected Output: "eway"

Test: "It will a recognize single consonant, move to end of word and add "ay"
Code: pigLatin("car")
Expected Output: "arcay"

Test: "It will recognize a string of consonants, split at end of string, move to end of word, add 'ay'"
Code: pigLatin("schtick")
Expected Output: "ickschtay"

Test: "It will recognize qu at the start of a word, and move 'qu' to end of word, adding 'ay'"
Code: pigLatin("queen")
Expected Output: "eenquay"

Test: "It will break a consonant chain if it encounters 'qu' not at the start of a word, and move the consonants to the end."
Code: pigLatin("squalor")
Expected Output: "qualorsay"

Test: "It will re

Test: "It will return a sentence in pigLatin"
Code: pigLatin("Hello queen, you live in squalor. This isn't a schtick.")
Expected Output: "ellohay eenquay, ouyay ivelay inway qualorsay. Isthey isn'tway away ickschtay.