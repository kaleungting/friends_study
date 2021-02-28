STRINGS ARE IMMUTABLE

NOT A CONSTANT TIME OPERATOR (THIS IS NOT JUST APPENDING)
foobar += "x"

creates a brand new copy of the string, add the new letter

"ABC" + "DEF" ==== O(N+M) TIME/SPACE

MIGHT BE A GOOD IDEA TO SPLIT THE STRING O(N)
THEN APPEND O(1) AS MANY TIMES AS YOU WANT
THEN JOIN O(N)


===================================
SUBOPTIMAL
===================================
string = "this is a string"
newString = ""

for character in string:
    newString += character #######O(n2) operation


string = "this is a string"
newString = ""

===================================
OPTIMAL
===================================

string = list(string)
newString = []

for character in string:
    newString.append(character)

"".join(string)

