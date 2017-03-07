height = document.getElementById("height").value;
default_symbol = "#"
document.getElementById("construction").remove();
how_high = slider_value
how_high.innerText = height
console.log(how_high)

drawPyramid(height);



function change_symbol(symbol) {
  var previous_symbol = document.getElementById("symbol").value;

  var pyramid_text = document.getElementById("pyramid").innerText;
//  var new_pyramid = pyramid_text.replace()
  console.log(pyramid_text);
  console.log(default_symbol + "previous symbol");
  new_symbol = document.getElementById("symbol").value;
  console.log(new_symbol + "new symbol");

  new_pyramid = document.getElementById("pyramid").innerText;
  new_pyramid.replace(new_symbol, default_symbol)

  default_symbol = new_symbol;
  height = document.getElementById("height").value;
  drawPyramid(height)
//  new_pyramid = pyramid_text.replace(current_symbol, new_symbol)

}




/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {
  how_high = slider_value
  how_high.innerText = height

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
            rowStr += "&nbsp;" // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += default_symbol;
        }

        // you can delete this now
        //console.log(rowStr

        // TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">

    //    var new_pyramid = document.getElementById("pyramid");
    //    new_pyramid.innerHTML = rowStr + "<br>";



        var text = document.createElement("p");
        text.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(text)
    }
}
