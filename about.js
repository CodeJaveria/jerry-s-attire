document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate, .reveal-animate, .value-card');
    elements.forEach(el => observer.observe(el));
});

function subscribe() {
  const emailInput = document.getElementById("newsletterEmail");
  const msg = document.getElementById("subscribeMsg");
  const email = emailInput.value.trim();

  if (email === "") {
    msg.textContent = "Please enter your email.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Thank you for subscribing!";
    msg.style.color = "#af6f43";
    emailInput.value = "";
  }
  setTimeout(() => { msg.textContent = ""; }, 3000);
}