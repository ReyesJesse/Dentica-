const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active"); // Toggle active class for animation
});

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.blue-title');
  const image = document.querySelector('.sliding-image'); // Select the image for the slide-in effect

  // Set a timeout before starting the observer
  setTimeout(() => {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: '0px', // No margin around the root
      threshold: 0.5 // Trigger when 50% of the image is visible (adjust as needed)
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // For blue titles
          if (entry.target.classList.contains('blue-title')) {
            // Define different delays for each blue title element
            const delays = [500, 1000, 1500]; // Different delays in milliseconds

            // Use the delay based on the index, cycling if there are more elements than delays
            const delay = delays[index % delays.length];

            // Add a delay based on the specified time
            setTimeout(() => {
              entry.target.classList.add('visible'); // Show the blue title
            }, delay);
          }

          // For image slide-in effect
          if (entry.target.classList.contains('sliding-image')) {
            entry.target.classList.add('visible'); // Show the image
            // Optional: Unobserve the image after it has become visible
            observer.unobserve(entry.target);
          }

          // Remove the unobserve line for blue titles to keep observing
        }
      });
    }, options);

    // Observe each blue title for the fade-in slide-up effect
    elements.forEach(element => {
      element.classList.add('fade-in-slide-up'); // Add initial classes for blue titles
      observer.observe(element); // Observe each blue title
    });

    // Observe the image for the slide-in effect
    if (image) {
      image.classList.add('sliding-image'); // Ensure the image has the correct class
      observer.observe(image); // Observe the image
    }
  }, 1); // Delay before starting the observer
});


//Doctors FAQ
const faqQuestions = document.querySelectorAll('.doctor-faq .faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling; // Select the corresponding answer
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block'; // Toggle display
    question.classList.toggle('expanded'); // Toggle the expanded class
  });
});



  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to animate bubbles one by one
  function showBubbles() {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
      if (isInViewport(bubble)) {
        setTimeout(() => {
          bubble.classList.add('show');
        }, index * 900); // Delay between each bubble (900ms)
      }
    });
  }

  // Listen for scroll events
  window.addEventListener('scroll', showBubbles);

  // Run on page load to check if bubbles are already in view
  document.addEventListener('DOMContentLoaded', showBubbles);
  