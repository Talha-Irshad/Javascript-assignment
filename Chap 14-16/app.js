// task 1
var studentname1 = [];

// task 2
var studentname2 = {};

// task 3
var stringArray = ["Apple", "Banana", "Mango"];

// task 4
var numberArray = [2, 4, 5, 12]

// task 5
var booleanArray = [true, false, true, false];

// task 6
var mixedArray = ["string", 14, true];

// task 7
var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("Qualification<br><br>");
for (let index = 0; index < qual.length; index++) {
    const element = qual[index];
    document.write(index+1+") "+element+"<br>");
}
document.write("<br><br><br>")
// task 8
var stuName=["Usman","Bilal","Hamza"];
var marks=[300,430,473];
var totalMarks=500;
for (let index = 0; index < stuName.length; index++) {
    const element = stuName[index];
    const element2 = marks[index];
    var per=(element2/500)*100
    document.write("The Score of "+element+" is "+element2+". Percentage: "+per+"%<br>");
}