/*==============add button======================  */
window.onload = init; 
function init() {
    var button = document.getElementById("addbutton");
    button.onclick = handleButtonClick;
 
}
/*==============add button====================== */

/*==============list function====================== */


function handleButtonClick() {
    
    var textInput = document.getElementById("NameTextInput");
    var Name = textInput.value;
    
    var li = document.createElement("li");
    li.innerHTML = placeName;
    var ul = document.getElementById("search");
    ul.appendChild(li);
   
    
    var textfield = document.getElementById("commentTextInput");
    var comment = textfield.value;
    var Paragraph = document.createElement("p");
    Paragraph.innerHTML = comment;
    ul.appendChild(Paragraph);
    
/*==============list function======================  */
}
