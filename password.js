let input_pass = document.body.querySelector(".pass");
const pass = 65718571;
let btn = document.body.querySelector(".btn");
btn.addEventListener("click",()=>{
    if (input_pass.value == pass) {
        window.location.href = 'contacts.html'
    }
   else{
    document.body.querySelector(".wrong_pass").style.display = "flex"
    input_pass.style.border = " 1.2px solid #e74c4c"
   }
})

// Add `loaded` class to body to trigger CSS entrance animations
document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => document.body.classList.add('loaded'));
});

