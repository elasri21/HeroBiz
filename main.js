const header = document.querySelector("header");
const nav = document.querySelector("nav");
const toggleMenu = document.querySelector(".toggle-menu");
const goUp = document.querySelector(".go-up");
toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.right = "200%";
        nav.style.opacity = "0";
    } else {
        this.classList.add("clicked");
        nav.style.opacity = "1";
        nav.style.right = "60px";
    }
});

//
window.addEventListener("scroll", function() {
    if(this.scrollY < 200) {
        header.style.borderBottom = "none";
        goUp.style.opacity = "0";
    }else if(this.scrollY >= 200) {
        header.style.borderBottom = "1px solid #eee";
        goUp.style.opacity = "1";
    }
});


///
const aboutContent = Array.from(document.querySelectorAll(".about .boxes .box"));
const titles = Array.from(document.querySelectorAll(".about .titles span"));

switchContent(titles, aboutContent);

//
const moreContent = Array.from(document.querySelectorAll(".more-content .box"));
const nailboxes = Array.from(document.querySelectorAll(".nail-box"));

switchContent(nailboxes, moreContent);
// reviews
const reviews = Array.from(document.querySelectorAll(".reviews .review"));
const bullets = Array.from(document.querySelectorAll(".bullets .bullet"));


switchContent(bullets, reviews);

//
function switchContent(btns, boxes) {
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            for(let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("active");
            }
            boxes.forEach(box => {
                if(this.id == box.dataset.id) {
                    box.classList.remove("hide");
                } else {
                    box.classList.add("hide");
                }
            });
            this.classList.add("active");
        });
    });
}

//
const questions = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));

helper(questions, answers);

//
function helper(btns, boxes) {
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            if(this.classList.contains("active")) {
                this.classList.remove("active");
                this.nextElementSibling.classList.add("hide");
            } else {
                this.classList.add("active");
                this.nextElementSibling.classList.remove("hide");
            }
        });
    });
}


