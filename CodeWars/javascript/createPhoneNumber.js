/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
 */

function createPhoneNumber(numbers){
    let phoneObject = {
        first3 : numbers.slice(0,3),
        second3 : numbers.slice(3, 6),
        last4 : numbers.slice(6, 10)
    }

    let phone = `(${phoneObject.first3}) ${phoneObject.second3}-${phoneObject.last4}`

    for(let i = 0; i<phone.length; i++){
        if(phone[i] === ","){
            phone = phone.replace(",","")
        }
    }

    return phone
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))