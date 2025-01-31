       function reveal() {
            var reveals = document.querySelectorAll('.service-card');
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('reveal');
                }
            }
        }
        window.addEventListener('scroll', reveal);

        let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        
        function showCarouselItem(index) {
            const carouselContainer = document.querySelector('.carousel-container');
            carouselContainer.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            showCarouselItem(currentIndex);
        }, 3000);
