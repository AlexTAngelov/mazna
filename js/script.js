/*==== navbar toggle ===*/
let navBar = document.querySelector('.navLink');
let menuBtn = document.querySelector('#menuBar');

menuBtn.onclick = () => {
  navBar.classList.toggle('active');
}

/*==== scroll section and sticky navbar ===*/
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

/*=== swiper js ===*/
var swiper = new Swiper(".myHome", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*=== count section start  ===*/
let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));

  let duration = Math.floor(interval/endValue);
  let counter = setInterval(function() {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

/*=== client section start ==*/ 
var swiper = new Swiper(".myClient", {
  slidesPerView:1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

/*=== Navigation Links ===*/
document.querySelectorAll('.navLink a, .footer-col a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
        }
    });
});

/*=== Login/Register Buttons ===*/
document.querySelectorAll('.col-2 a').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const text = button.textContent.trim();
        if (text === 'Login') {
            window.location.href = '/account/login.html';
        } else if (text === 'Register') {
            window.location.href = '/account/register.html';
        }
    });
});

/*=== Add Listing Button ===*/
document.querySelector('.addBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/account/add-listing.html';
});

/*=== Social Media Links ===*/
document.querySelectorAll('.social i').forEach(icon => {
    icon.addEventListener('click', () => {
        const platform = icon.classList[1].split('-')[1];
        const urls = {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            youtube: 'https://youtube.com'
        };
        if (urls[platform]) {
            window.open(urls[platform], '_blank');
        }
    });
});

/*=== Search Functionality ===*/
document.querySelector('.bx-search').addEventListener('click', () => {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.classList.add('search-input');
    
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    searchContainer.appendChild(searchInput);
    
    document.querySelector('header').appendChild(searchContainer);
    
    searchInput.focus();
    
    searchInput.addEventListener('blur', () => {
        searchContainer.remove();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Here you would typically send the search term to your search functionality
                alert(`Searching for: ${searchTerm}`);
                searchContainer.remove();
            }
        }
    });
});

/*=== Cart Functionality ===*/
document.querySelector('.cart').addEventListener('click', () => {
    window.location.href = '/shop/cart.html';
});

/*=== Newsletter Subscription ===*/
document.querySelectorAll('.footer-col button').forEach(button => {
    button.addEventListener('click', () => {
        const emailInput = button.parentElement.querySelector('input[type="text"]');
        const email = emailInput.value.trim();
        
        if (email && email.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

/*=== Scroll to Top Button ===*/
document.querySelector('.scrollBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*=== Dropdown Menus ===*/
document.querySelectorAll('.drop-down, .drop-down-two, .drop-down-three, .drop-down-four, .drop-down-five, .drop-down-six').forEach(dropdown => {
    const parent = dropdown.parentElement;
    const chevron = parent.querySelector('.bx-chevron-down, .bx-chevron-right');
    
    parent.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
        if (chevron) {
            chevron.style.transform = 'rotate(180deg)';
        }
    });
    
    parent.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
        if (chevron) {
            chevron.style.transform = 'rotate(0deg)';
        }
    });
});

/*=== Dashboard Navigation ===*/
document.querySelectorAll('.side_one .box a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
        }
    });
});

/*=== Contact Form Submission ===*/
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', data);
        alert('Form submitted successfully!');
        form.reset();
    });
});

/*=== Image Gallery ===*/
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

/*=== Mobile Menu Toggle ===*/
document.querySelector('#menuBar').addEventListener('click', () => {
    document.querySelector('.navLink').classList.toggle('active');
});

/*=== Initialize all interactive elements ===*/
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to all buttons
    document.querySelectorAll('button, .btn, .addBtn, .checkout-btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Add click effects to all buttons
    document.querySelectorAll('button, .btn, .addBtn, .checkout-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });
});




