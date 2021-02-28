function random(a) {
  for (var i = 0; i < a.length; i++) {
    var r = Math.floor(Math.random() * (i + 1));
    var t = a[i];
    a[i] = a[r];
    a[r] = t;
  }
  return a;
}

console.log(random([1, 2, 3, 4, 5, 6, 7]));

/*
What language is this ? 
    javascript

What happens on the third line ? What is the range of Math.random()?
    it returns a random number from 0 to i
    range of Math.random() is from 0 to 1 not including 1
    Math.floor rounds down, so you want to ADD 1 to i if you want the result to be inclusive from 0 to i 
    
If i == 10 then what are the possible values for r ?
    0 to 10 inclusive of 10

What does this function do? What would you call it ?
    shuffles the array

What’s a use case for this ? What’s a real world example where you might want to use this ?
    raffle, shuffling a deck, anything that involves randomizing a result

*/
