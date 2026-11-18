document.getElementById("bookingForm")
.addEventListener("submit", function(event) {
event.preventDefault();
let from = document.getElementById("from").value;
let to = document.getElementById("to").value;
let date = document.getElementById("date").value;
document.getElementById("result").innerHTML =
"Train search requested from " +
from + " to " + to +
" on " + date;
});
