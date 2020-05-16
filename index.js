/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let splitedTime = time.split(" ").join(':');

  let intTime = parseInt(time);
  console.log(intTime);
  if (intTime < 12){
     return "Good Morning";
  }
  if (intTime >= 12 && intTime < 17){
    return "Good Afternoon";

 }
 if (intTime >= 17){
  return "Good Evening";
}
}
/* Write your implementation of displayMessage() */
function displayMessage (msg){
  let headId = document.getElementById('greeting');
  console.log(headId);
  headId.innerText = msg;
}
