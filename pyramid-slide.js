var height = document.getElementById("height").value;
var symbol = document.getElementById("symbol").value;

drawPyramid(height);



function change_symbol(symbol) {

  var pyramid_text = document.getElementById("pyramid");
  var new_pyramid = pyramid_text.replace()
}




/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

var current_pyramid = document.getElementById("pyramid");
current_pyramid.innerText = ""
    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">
//    document.getElementById("construction").remove();


    // for each row....

    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // you can delete this now
        //console.log(rowStr

        // TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">

    //    var new_pyramid = document.getElementById("pyramid");
    //    new_pyramid.innerHTML = rowStr + "<br>";



        var text = document.createElement("p");
        text.innerText = rowStr;
        document.getElementById("pyramid").appendChild(text)
    }
}
