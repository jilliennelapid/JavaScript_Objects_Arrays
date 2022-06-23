console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

// the parameter is given a different name so as not to confuse myself between the array "numbers" and a potential parameter named 'numbers'
// 'arr' still references the numbers listed in the array above, idk how rn
function arraySum(arr){
    // assign sum the value of '0' so that sum is established and can be used to store the desired sum value later
    let sum = 0;

    // .forEach looks at each number listed in the array
    // the operator [+=] adds the value of the number to the sum then rewrite that value to the variable?
    arr.forEach((number) => {
        sum += number;
    });

    return sum;
}

// I believe at the end here, 'numbers' as in the array takes the place of 'arr' in the function.
// therefore, arr is a place holder and calling 'numbers' down here causes the function to reference
// the numbers in the array.
console.log(arraySum(numbers));



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let Book = {};

Book.title = "Nineteen Eighty-Four";
Book.author = "George Orwell";
Book.pageCount = 328;
Book.readCount = 1;

// no parameters needed to pass in
// this objects help refer to the elements in the array
function info () {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, read ${this.readCount} times.`
}

// this adds the function 'info' into the array
Book.info = info;

// calls for the funtion by referring to it as the element in the array
// no parameters to define or give to the function
console.log(Book.info());



// Exercise 3: Reverse all words in a sentence
console.log("EXERCISE 2:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog."

// "split this string based on every space you come to"
// each word is separated by a space
// .split divides a string element into portions for an array based on a given condition
// therefore, at each space, the string will be divided into seperate words
function reverseWords(sentence){
    let words = sentence.split(" ");
    console.log(words);
}

reverseWords(sentence);


// Exercise 4: Parse a CSV

// data given here is akin to a table with a column of 'name' and antoher of 'age'
// the data is given as (name, age)
/*
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

// Solution 1
function csvConverter(data){
    // Determine headers
    let headersStr = data.slice(0, data.indexOf("\n")); // "name,age"

    // Split the header string into an array of headers
    let headers = headersStr.split(","); //["name", "age"]

    //Determine the row data
    let valuesLists = data.slice(data.indexOf("\n") + 10).split("\n");

    const customArr = valuesLists.map((row) => {
        // Seperate the values into array values
        let values = row.split(",");
        let obj = {};

        values.forEach ((col,idx) => {
            if (idx < headers.length){
                obj[headers[idx]] = col;
            } else {
                obj[`misc${idx}`] = col;
            }
        });

        return obj;
    });

    return customArr;
}

console.log(csvConverter(csvData));
*/

// each row is divided by '\n'
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(fileData){
    // Get the headers from the first row in fileData
    let rows = fileData.split("\n");
    // Split the headers into individudal strings based on ',' dividing the header categories
    let headers = rows[0].split(",");

    let result = [];
    // Iterate over every content row
    for (let i = 1; i < rows.length; i++){
        let obj = {};
        let data = rows[i].split(","); 
        data.forEach((val,idx) => {
            obj[headers[idx]] = val;
        });
        result.push(obj);
    }

    return result;
}
console.log(csvConverter(csvData));