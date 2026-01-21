const button = document.querySelector(".main");
const heart = document.querySelector(".heart");

button.addEventListener('click', () => { 
    button.classList.add("active");
    heart.classList.add("animate");
});

// heart.addEventListener('click', () => { 
    
// });