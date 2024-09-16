document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
  
    function scrollOneByOne() {
      currentIndex++;
      if (currentIndex >= testimonials.length) {
        currentIndex = 0;
      }
      const nextTestimonial = testimonials[currentIndex];
      const offsetLeft = nextTestimonial.offsetLeft;
      container.scroll({
        left: offsetLeft,
        behavior: 'smooth'
      });
    }
  
    setInterval(scrollOneByOne, 3000); // Adjust the interval as needed
  });

  