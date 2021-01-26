// Finds container node and puts them in a jQuery object called timeBlocks
var timeBlocks = $(".container");

//create var for displaying time using moment js
var timeDisplay = moment().format('MMMM Do YYYY');

//Finds currentDay node and puts val in a jQuery object timeDiv, display
var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

//make all buttons saveButtions
var saveButton = document.querySelectorAll("button");

//Make times variables to display
var timeList = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM"
];

//creat vars to target
var idTime = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
];

//dynamically create and format the rows and columns
for (var i = 0; i < timeList.length; i++) {
    var newRow = $("<div class='row time-block'>").attr("id", idTime[i]);
    var newDiv2 = $("<div class='hour col-1'>")
    var newDiv = $("<textarea class='col-10'>");
    var newBtn = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    timeBlocks.append(newRow);

    newDiv2.text(timeList[i]);
    newRow.append(newDiv2);

    newDiv.text();
    newRow.append(newDiv);

    newBtn.text();
    newRow.append(newBtn);
}