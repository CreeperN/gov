// SEARCH FUNCTIONALITY
const searchBar = document.getElementById("search");  
const contacts = document.querySelectorAll(".contact");

function searchContacts() {
    const term = searchBar.value.toLowerCase();

    contacts.forEach(contact => {
        const name = contact.querySelector(".name").textContent.toLowerCase();
        const number = contact.querySelector(".number").textContent.toLowerCase();
        const type = contact.querySelector(".type").textContent.toLowerCase();

        if (name.includes(term) || number.includes(term) || type.includes(term)) {
            contact.style.display = "block";
        } else {
            contact.style.display = "none";
        }
    });
}

searchBar.addEventListener("keyup", searchContacts);

const copyBtns = document.querySelectorAll(".copy");

copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const numberDiv = btn.closest(".contact").querySelector(".number");
        const text = numberDiv.textContent;

        navigator.clipboard.writeText(text)
            .then(() => alert(`Copied: ${text}`))
            .catch(err => console.error("Failed to copy:", err));
    });
});

// Add `loaded` class to body to trigger CSS entrance animations
document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => document.body.classList.add('loaded'));
});

const submit = document.querySelector(".submit")
const alpha = 994;
submit.addEventListener("click", () => {
    const usr = document.querySelector(".user").value
    if (usr == alpha) {
        document.querySelector(".boxpass").style.display = "none"
        
        
    }
    else{
       window.location.href = "https://www.google.com";

    }
})
