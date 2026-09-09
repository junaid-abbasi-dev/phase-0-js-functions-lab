function calculateTax(amount) {
    const taxAmount = amount * 0.1
    return taxAmount
}
function convertToUpperCase(text) {
    return text.toUpperCase()
}
function findMaximum(num1, num2) {
    const maxValue = Math.max(num1, num2)
    return maxValue
}
function isPalindrome(text) {
    const reversedWord = text.split("").reverse().join("")
    return text === reversedWord
}

function calculateDiscountedPrice(originalPrice, discountedPercentage) {
    const discountedAmount = originalPrice * (discountedPercentage / 100)
    const discountPrice = originalPrice - discountedAmount
    return discountPrice
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };