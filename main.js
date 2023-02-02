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
titles.forEach(title => {
    title.addEventListener("click", function() {
        for(let i = 0; i < titles.length; i++) {
            titles[i].classList.remove("active");
        }
        aboutContent.forEach(box => {
            if(this.id == box.dataset.id) {
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});


//
const moreContent = Array.from(document.querySelectorAll(".more-content .box"));
const nailboxes = Array.from(document.querySelectorAll(".nail-box"));
nailboxes.forEach(nailbox => {
    nailbox.addEventListener("click", function() {
        for(let i = 0; i < nailboxes.length; i++) {
            nailboxes[i].classList.remove("active");
        }
        moreContent.forEach(box => {
            if(this.id == box.dataset.id) {
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

// reviews
const reviews = Array.from(document.querySelectorAll(".reviews .review"));
const bullets = Array.from(document.querySelectorAll(".bullets .bullet"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function() {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        reviews.forEach(review => {
            if(this.id == review.dataset.id) {
                review.classList.remove("hide");
            } else {
                review.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

//
const questions = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));

questions.forEach(q => {
    q.addEventListener("click", function() {
        if(this.classList.contains("active")) {
            this.classList.remove("active");
            this.nextElementSibling.classList.add("hide");
        } else {
            this.classList.add("active");
            this.nextElementSibling.classList.remove("hide");
        }
    });
});




