
// Calling element id, that represent wlc-head
const wlcHead = document.getElementById('wlc-head');


//  Eventlistener that represent wlc-head
wlcHead.addEventListener('click', removeBtn);

// Function removechild when the deleteBtn it click
function removeBtn(e) {
  
  // if the target element that have deleteBtn is click then   
  if(e.target.classList.contains('delete-btn')){
    
    //  so the target is the parentelement for li
    const li = e.target.parentElement;
    
    //   remove the li   
    wlcHead.removeChild(li);
  }
};


// Calling element id, that represent header-sticky
const headerLogo = document.querySelector('.header-sticky');

const sticky = headerLogo.offsetTop;

// Function for sticky, the header will sticky to the top when its reach its scroll position

function stickyNav() {
    if (window.pageYOffset >= sticky) {
      
      // here is to add the class call sticky form CSS      
      headerLogo.classList.add('sticky');
    } else {
      
      //  Remove sticky when it scroll up        
      headerLogo.classList.remove('sticky');
    }
};

// c the function together
window.onscroll = function() {
  stickyNav()
};


// This the same code with btnFunction, but it only work for click button to dorp down the element hidden, when you click on any part of the page and it close automatically

// function myFunction() {
//   document.getElementById("DropForm").classList.toggle("show");
// }

// window.onclick = function(event) {
//   event.preventdefault();
//   if (!event.target.matches('.dropdown-btn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-container");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropForm = dropdowns[i];
//       if (openDropForm.classList.contains('show')) {
//         openDropForm.classList.remove('show');
//       }
//     }
//   }
// }

// Book club, calling element id, that represent dropbtn
const btnFunction =  document.querySelector(".dropbtn");

// calling element id, that represent dropdown-container
const dropDown =  document.querySelector(".dropdown-container");

// btnFunction add with eventlistener, Notice pls, the eventlistener only worked when the button is click, and display the within element and hidden the element again 
btnFunction.addEventListener("click", () => {
  if(dropDown.style.display === 'none') {
    
    //  if the dropdown button is click display block       
    dropDown.style.display = 'block';
  } else {   
    //  if the dropdown button is click  display none 
    dropDown.style.display = 'none';
  }
});

// Help center, calling element id, that represent drophelp
const btnHelp =  document.querySelector(".drophelp");

// calling element id, that represent helpcenter
const dropHelp =  document.querySelector(".help-center");

// btnHelp add with eventlistener, Notice pls, the eventlistener only worked when the button is click, and display the within element and hidden the element again 
btnHelp.addEventListener("click", () => {
  if(dropHelp.style.display === 'none') {
    
    //  if the drophelp button is click display block
    dropHelp.style.display = 'block';
  } else {
    
    //  if the drophelp button is click display none
    dropHelp.style.display = 'none';
  }
});