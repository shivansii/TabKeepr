    const sTabButton = document.getElementById('SaveTab');
    const sWndButton = document.getElementById('SaveWindow');

    function SaveTabFunction() {
      document.getElementById("SaveTab").innerHTML = "YOU CLICKED ME!";
    }
    function SaveWndFunction() {
      document.getElementById("SaveWindow").innerHTML = "YOU CLICKED ME!!";
    }

    sTabButton.addEventListener("click", SaveTabFunction);
    sWndButton.addEventListener("click", SaveWndFunction);


// document.addEventListener('DOMContentLoaded', function() {
//     var sTabButton = document.getElementById('SaveTab');
//     var sWndButton = document.getElementById('SaveWindow');
  
//     sTabButton.addEventListener('click', function() {
//       // Start recording clicks
//     });
  
//     sWndButton.addEventListener('click', function() {
//       // Stop recording clicks
//     });
//   });
  