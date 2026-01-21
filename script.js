const button = document.querySelector(".main");
const text = document.querySelector(".text");

button.addEventListener('click', () => { 
    button.classList.remove("active");
    
    setTimeout(() => {
        button.classList.add("active");
    }, 10);


    
    // Create 1000 hearts with delay
    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart', 'animate');
            heart.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" height="3000"
                    width="3200" viewBox="20 -10 315 342">
                    <defs>
                        <g id="heart">
                            <path stroke="red" pathLength="1" stroke-width="5" d="M0 200 v-200 h200 
            a100,100 90 0,1 0,200
            a100,100 90 0,1 -200,0
            z" />
                        </g>
                    </defs>
                    <use xlink:href="#heart" class="outline" fill="none" transform="rotate(225,150,121)" />
                </svg>
            `;
            
            document.body.appendChild(heart);
            
            // Remove heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 400); // 2 second delay between each heart
    }


});