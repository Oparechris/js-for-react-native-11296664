// task 1
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;  
        } else {
            return num * 3;   
        }
    });
}
// task 2
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("Both arrays must have the same length");
    }
    
    return strings.map((str, index) => {
        let num = numbers[index];
        if (num % 2 === 0) {
            return str.toUpperCase();  
        } else {
            return str.toLowerCase();  
        }
    });
}
