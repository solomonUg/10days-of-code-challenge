const checkboxes = document.getElementsByName("preferences")
const sendBtn = document.getElementById("send-btn")
const form = document.querySelector("form")


form.addEventListener("submit", (e)=> {
    
    let isChecked = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          isChecked = true;
          break;
        }
      }
    
      if (!isChecked) {

        alert("Please select at least one preference.");
        e.preventDefault()
        return false; // Prevent form submission
      }

      return true; // Allow form submission
})








// function validatePreferences() {
//     var isChecked = false;
  
//     for (var i = 0; i < checkboxes.length; i++) {
//       if (checkboxes[i].checked) {
//         isChecked = true;
//         break;
//       }
//     }
  
//     if (!isChecked) {
//       alert("Please select at least one preference.");
//       return false; // Prevent form submission
//     }
//     return true; // Allow form submission
//   }
  


// form.addEventListener("submit", (e)=> {
//     e.preventDefault()
//     for (let i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked == true){
//             const formData = new FormData(form);
//             console.log('Form submitted!', formData);
//         } else {
//             console.log("this field is required")
//             checkboxes.forEach((checkbox)=>{
//                 checkbox.setAttribute("required", " ")
//             })
            
//         }
//     }
//  })



// isChecked.forEach( (preference)=>{

//     if(preference.checked == true ){
//         console.log("this box is checked")
//     } else {
//         console.log("this box is not checked")
//     }
// }
// )

// const formData = new FormData(form);
// console.log('Form submitted!', formData);

// sendBtn.addEventListener("submit", (e)=> {

//     e.preventDefault()
//     console.log("submiited") })


// isChecked.forEach( (preference)=>{

//     if(preference.checked == true ){
//         console.log("this box is checked")
//     } else {
//         console.log("this box is not checked")
//     }
// }
// )