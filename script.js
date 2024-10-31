let currentSlide = 0;
const slides = document.querySelectorAll('.hero-background');
const dots = document.querySelectorAll('.hero-dot');

function changeBackground() {
    // Sembunyikan slide saat ini
    slides[currentSlide].classList.add('hidden');

    // Perbarui slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Tampilkan slide berikutnya
    slides[currentSlide].classList.remove('hidden');

    slides[currentSlide].classList.add('hidden');
    dots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove('hidden');
    dots[currentSlide].classList.add('active');
}

// Ganti gambar setiap 5 detik
setInterval(changeBackground, 5000);

// Smooth scrolling for all internal links
$(document).ready(function(){
    $('a.nav-link').click(function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var target = $(this).attr('href'); // Get the target from the href attribute
        $('html, body').animate({
            scrollTop: $(target).offset().top // Animate to the target section
        }, 1000); // Duration of animation in milliseconds
    });
});

function goToSlide(index) {
    slides[currentSlide].classList.add('hidden');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.remove('hidden');
    dots[currentSlide].classList.add('active');
}

window.onscroll = function() {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledFromTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Tampilkan button jika pengguna sudah scroll hingga 80% halaman
    if (scrolledFromTop / scrollableHeight > 0.8) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Smoothly scroll back to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

