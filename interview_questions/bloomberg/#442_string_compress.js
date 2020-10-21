/*
have a sliding window of i and j, 

i is the start of a character, j will iterate until it hits a different character
once it hits a different character, the amount of time it appears is just (j-i)
set the chars[index] to equal to chars[i] and increment index after since it just took up a spot

if count is greater than 1, then you need to replace the next letters with the count, but count is a integer, so you would need to convert it to a string

if the string of count is longer than 1, i.g. "12", "203", then you would need to iterate through the string of count and replace chars[index] with the char at count, increment index

reset i = j, since you are finished with this letter and now you'll start checking for the next character

return index (which is the length of the new compressed group)

*/

function compress(chars){
    let index = 0, i = 0;

    while (i < chars.length){
        let j = i;
        while (j < chars.length && chars[i] === chars[j])j++;

        chars[index] = chars[i];
        index++;
        if (j - i > 1){
            let count = (j-i).toString();
            for (let i = 0; i < count.length; i++){
                chars[index] = count[i];
                index++;
            }
        }

        i = j;
    }
    return index;

}