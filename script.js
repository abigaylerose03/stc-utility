// let counterDisplayElem1 = document.querySelectorAll('.counter-display1');
// let counterMinusElem = document.querySelectorAll('.counter-minus');
// let counterPlusElem = document.querySelectorAll('.counter-plus');
// // let weekCounterElem = document.querySelector('.weekCounter');

// var count = 0;
// var total = 0;
// let weekCounter = 2;


// overTime();
// let counterplus;
// let counter;


// let buttons = document.getElementsByClassName('counter-plus');
// let counterdisplay = document.getElementsByClassName('counter-display1');
// // updateDisplay();


// counterMinusElem.forEach(function (element) {
//     element.addEventListener("click", ()=>{
//         count--;
//         total--;
//         updateDisplay();

//     });
// });
// function updateDisplay() {
//     // alert("update");

//     // displays first one 
//     // for (let i = 0; i < counterDisplayElem1.length; i++) {
      
//     //   counterDisplayElem1[i].innerHTML = count;
//     // }

//     // displays all because every single one has a class
//     for (let i = 0; i < counterdisplay.length; i++) {
      
//       counterdisplay[i].innerHTML = count;
//     }

//   //  counterDisplayElem1.innerHTML = count;
//     overTime();
// };

// function overTime() {
//     if(total > 19) {
//         alert("You exceeded 19 hours for the work week!");
//     }
// }

// function CreateNewDom() {

//     // alert("pressed dom");

//     // NUMBER OF WEEKS
//     let weekHeader = document.createElement("h1");
//     weekHeader.appendChild(document.createTextNode('Week '));
//     weekHeader.appendChild(document.createTextNode(weekCounter));
//     weekCounter++;

//     // HOURS 
//     counter = document.createElement("h1");
//     counter.appendChild(document.createTextNode(count));
//     counter.className = "counter-display1";
//     console.log(counter.className);


//     let counterminus = document.createElement("button");
   
    
//     counterminus.className = "counter-minus";
//     counterminus.innerHTML = "-";

//     counterplus = document.createElement("button");
    
//     counterplus.className = "counter-plus";
//     // counterplus.classList.add("counter-plus");
//     counterplus.innerHTML = "+";

//     console.log(counterplus.className);
//     console.log(counterplus);

    
   

//     document.getElementById("editor").appendChild(weekHeader);
//     document.getElementById("editor").appendChild(counter);
//     document.getElementById("editor").appendChild(counterminus);
//     document.getElementById("editor").appendChild(counterplus);
//     console.log("TOTAL buttons", buttons.length);

//     looppp();
   
   
// } // end

// function reset() {
//     count = 0;
//     total = 0;
// }

// // INCREMENTING
// for (let button of buttons) {
    
//       button.addEventListener('click', function(event) {
//           console.log("test");
//         count++;
//             console.log(count);
//         total++;
//         updateDisplay();
//       });
// };

// function looppp() {
//     for (var i = 0; i < buttons.length; i++) {
//     console.log("counter plus loop");
//     document.getElementsByClassName("counter-plus")[i].addEventListener("click", function() {
//         console.log("plus button clicked");

//         count++;
//         total++;
//         updateDisplay();
//     });

//     document.getElementsByClassName("counter-minus")[i].addEventListener("click", function() {
//         console.log("plus button clicked");

//         count--;
//         total--;
//         updateDisplay();
//     });
// }
// }



// // class is not added properly

// VARIABLES 
let total = 0;
let weekCounter = 1;
let weekHeader;
let saved; 
let sundayvalue;
let mondayvalue;
let tuesdayvalue;
let wednesdayvalue;
let thursdayvalue;
let fridayvalue;
let saturdayvalue;


// RESET
function reset() {
    let total = 0;
    newtotal = document.createElement("p");
    newtotal.appendChild(document.createTextNode('Hours: '));
    newtotal.appendChild(document.createTextNode(total + ' hours'));

    document.getElementById("edit2").appendChild(newtotal);
}
// DROPDOWN MANIPULATION 

// IS OVERTIME
function add() {
  
    sundayvalue = document.getElementById("sunday").value;
    mondayvalue = document.getElementById("monday").value;
    tuesdayvalue = document.getElementById("tuesday").value;
    wednesdayvalue = document.getElementById("wednesday").value;
    thursdayvalue = document.getElementById("thursday").value;
    fridayvalue = document.getElementById("friday").value;
    saturdayvalue = document.getElementById("saturday").value;


    total = parseInt(sunday.value) + parseInt(monday.value) + parseInt(tuesday.value) + parseInt(wednesday.value) + parseInt(thursday.value) + parseInt(friday.value) + parseInt(saturday.value);
    totalDisplay = document.createElement("p");
    totalDisplay.appendChild(document.createTextNode(total + ' hours'));


    document.getElementById("edit").appendChild(totalDisplay);
    if(total > 19) {
        confirm("You went overtime!");
    }
}

function addWeek() {
    weekHeader = document.createElement("h3");
    weekHeader.appendChild(document.createTextNode('Week '));
    weekHeader.appendChild(document.createTextNode(weekCounter));

    weekCounter++;
    document.getElementById("edit2").appendChild(weekHeader);

}

function save() {
    saved = total;
    // weekHeader = document.createElement("h3");
    // weekHeader.appendChild(document.createTextNode('Week '));
    // weekHeader.appendChild(document.createTextNode(weekCounter));

    savedDisplay = document.createElement("p");
    savedDisplay.appendChild(document.createTextNode('Saved: '));
    savedDisplay.appendChild(document.createTextNode(saved + ' hours'));


  //  weekCounter++;

  //  edit2.innerHTML = "Saved: " + saved;

    // document.getElementById("edit2").appendChild(weekHeader);
    document.getElementById("edit2").appendChild(savedDisplay);

    if(saved > 19) {
        confirm("You went overtime!");
    }


}

