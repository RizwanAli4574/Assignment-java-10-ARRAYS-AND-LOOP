// Declare and initialize an empty multidimensional array (Array of arrays)
document.write("<b> Q No 1 : Multidimensional array </b> <br> <br>")
var ary = [
    ["Name", "Age", "Gen", "Degree"],
    ["Rizwan",24,"Male","B.com"],
    ["Waqar",32,"Male","BA"],
    ["Shoaib",30,"Male","MA"],
    ["Nasir",40,"Male","Matric"],
    ["Waqas",28,"Male","FA"],
];
document.write("<table border='1'px cellspacing='0'>")
for (var i = 0; i <ary.length; i++){
    document.write("<tr>");
    for (var j = 0; j < ary[i].length; j++){
        document.write("<th>" + ary[i][j] + "</th>")
    }
    document.write("</tr>");
}
document.write("</table>")
document.write("<br> <br>")

// Declare and initialize a multidimensional array representing the following matrix:
document.write("<b> Q No 2 : Multidimensional array Two</b> <br> <br>")
var ary1 = [
    [0,1,2,3,4,5,6],
    [1,0,1,2,3,4,5],
    [2,1,0,1,2,3,4],
    [0,1,2,3,4,5,6],
    [1,0,1,2,3,4,5],
    [2,1,0,1,2,3,4],
];
document.write("<table border='1px' cellspacing='0'> ")
 for (var a = 0; a < ary1.length; a++){
    document.write("<tr>")
    for ( var b = 0; b < ary1[a].length; b++){
        document.write("<th>" + ary1[a][b] + "</th>")
    }
    document.write("</tr>")
 }
 document.write("</table>")
 document.write("<br> <br>")

//  Write a program to print numeric counting from 1 to 10.
document.write("<b> Q No 3 : 1 To 10 Number</b> <br> <br>")
var ary2 = []
for ( var q = 1; q <=10; q++){
    document.write([q] + "<br>")
}
document.write("<br> <br>")

// // Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
document.write("<b> Q No 4 : Multiplication table</b> <br> <br>")
// Get the number and length from the use 
var number = + prompt ("Enter the number of table")
var length = + prompt ("Enter the lenth of table")

// check if the input is valid or not
if (isNaN(number) || isNaN(length)){
    alert("Please enter valid numbers");
}else {
    // Print the table
    document.write("<b>" + `Multiplication table for ${number} (up to ${length}) terms`  + "<br>" + "</b>" )
    for (var t = 1; t <= length; t++){
document.write(`${number} x ${t} = ${number * t}` + "<br>");
    }
}
document.write("<br> <br>")

// Write a program to print items of the following array
document.write("<b> Q No 5 : Fruits Name </b> <br> <br>")

// Write Array for fruits name
var fruits = ["Apple" , "Orange" , "Banana" , "Mango" , "Peach"]

// fruit names print by loop 
document.write("<ul>")
for (var i = 0; i <fruits.length; i++){
    document.write("<li>" + fruits [i] + "</li>" )
}
document.write("</ul>")
document.write("<br> <br>")

// Generate the following series in your browser. See example output.
document.write("<b> Q No 6 : Counting </b> <br> <br>")

// Counting 1 to 15
var counting = [];
for (var i = 1; i <= 15; i++){
    counting.push(i);
    
}
document.write( "<b> Counting </b>" , " " , counting.join ())
document.write("<br>" + "<br>")

// Reverse Counting 1 to 10
var revCounting = [];
for (var i = 10; i >= 1; i--){
    revCounting.push(i);
   
}
document.write( "<b> Reverse Counting </b>" , " " , revCounting.join ())
document.write("<br>" + "<br>")

// Even counting
var evenCounting = [];
for (var i = 0; i <=20; i+=2){
    evenCounting.push(i)
}
document.write( "<b> Even Counting </b>" , " " , evenCounting.join ())
document.write("<br>" + "<br>")

// Odd counting
var oddCounting = [];
for (var i = 1; i <=19; i+=2){
    oddCounting.push(i)
}
document.write( "<b> Odd Counting </b>" , " " , oddCounting.join ())
document.write("<br>" + "<br>")

// Series 
var series = [];
for (var i = 1; i <= 10; i++){
    series.push(i * 2 + "k")
}
document.write( "<b> Series </b>" , " " , series.join ())
document.write("<br>" + "<br>")

// Generate the following series in your browser. See example output.
document.write("<b> Q No 7 : Bakery items</b> <br> <br>")

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt ("Enter an item to search in my bakery (exmple : cookie etc):");

// Convert the user input to lowercase to make the search case-insensitive
userInput = userInput.toLowerCase();

var found = false;

for (var i = 0; i <a.length; i++){

// Convert each item in the array to lowercase for case-insensitive search
var item = a[i].toLowerCase();
if (item === userInput) {
    found = true;
    document.write( userInput + " " + "is availble in the lish at index" + " " + i);
    break;
}
}
if (!found) {
    document.write( userInput + " " + " is not availble in the list of my bakery.");
}
document.write("<br>" + "<br>")

// Write a program to identify the largest number in the given array.
document.write("<b> Q No 8 : Largest Number items</b> <br> <br>")

var b =  [24, 53, 78, 91, 12];
var largest = b[0]; // Assume the first element is the largest

for (var i = 0; i < b.length; i++){
    if (b[i] > largest){
        largest = b[i];// Update the largest number 
    }
}
document.write("The largest number in the array is: " + largest);
document.write("<br>" + "<br>")

// Write a program to identify the smallest number in the given array.
document.write("<b> Q No 9 : Smallest Number items</b> <br> <br>")

var c =  [24, 53, 78, 91, 12];
var smallest = c[0]; // Assume the first element is the smallest

for (var i = 0; i < c.length; i++){
    if (c[i] < smallest){
        smallest = c[i];// Update the smallest number 
    }
}
document.write("The smallest number in the array is: " + smallest);
document.write("<br>" + "<br>")

// Write a program to print multiples of 5 ranging 1 to 100.
document.write("<b> Q No 10 : Print multiples of 5 ranging 1 to 100 </b> <br>")
document.write("<ul>")
for (var i = 5; i <= 100; i+=5) {
    document.write( "<li>" + i + "</li>" );
}
document.write("</ul>")