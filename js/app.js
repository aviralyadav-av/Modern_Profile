
    // <!-- About us -->
    function toggleContent() {
        const content = document.getElementById('content');
        const btn = document.getElementById('toggleBtn');

        if (content.classList.contains('line-clamp-5')) {
            content.classList.remove('line-clamp-5');
            btn.textContent = 'Show Less';
        } else {
            content.classList.add('line-clamp-5');
            btn.textContent = 'View More';
        }
    }


    // <!-- service  Section -->
    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.getElementById('toggleButton');
        const hiddenCards = document.querySelectorAll('.hidden-card');
        const desktopOnlyCards = document.querySelectorAll('.desktop-only');

        // Function to check if we're on mobile
        function isMobile() {
            return window.innerWidth < 768; // md breakpoint in Tailwind
        }

        // Initial setup
        function initialSetup() {
            if (isMobile()) {
                desktopOnlyCards.forEach(card => card.classList.add('hidden'));
            } else {
                desktopOnlyCards.forEach(card => card.classList.remove('hidden'));
            }
        }

        // Run initial setup
        initialSetup();

        // Handle window resize
        window.addEventListener('resize', initialSetup);

        // Toggle button functionality
        toggleButton.addEventListener('click', () => {
            const isShowingMore = toggleButton.textContent.trim() === "View More";

            hiddenCards.forEach(card => {
                card.classList.toggle('hidden', !isShowingMore);
            });

            toggleButton.textContent = isShowingMore ? "View Less" : "View More";
        });
    });


    // <!-- Our Products Section -->
    document.addEventListener("DOMContentLoaded", () => {
        const productCards = document.querySelectorAll(".product-card");
        const productButton = document.getElementById("ProductButton");

        let isExpanded = false;

        const updateVisibility = () => {
            const maxVisibleCards = window.innerWidth >= 768 ? 4 : 2; // 4 for desktop, 2 for mobile

            productCards.forEach((card, index) => {
                if (index < maxVisibleCards || isExpanded) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            productButton.textContent = isExpanded ? "View Less" : "View More";
        };

        productButton.addEventListener("click", () => {
            isExpanded = !isExpanded;
            updateVisibility();
        });

        window.addEventListener("resize", updateVisibility);

        updateVisibility(); // Initialize visibility on load
    });


    // <!-- Our Gallery Section -->
    function showGalleryModal() {
        document.getElementById("galleryModal").classList.remove("hidden");
    }

    // Open the Modal
    function openGalleryModal(slideIndex) {
        document.getElementById("galleryModal").classList.remove("hidden");
        displaySlide(slideIndex);
    }

    // Close the Modal
    function closeGalleryModal() {
        document.getElementById("galleryModal").classList.add("hidden");
    }

    // Show a specific slide
    function displaySlide(slideIndex) {
        const slides = document.querySelectorAll(".gallerySlide");
        slides.forEach((slide, i) => {
            slide.classList.toggle("hidden", i + 1 !== slideIndex);
        });
    }

    // <!-- Gallery Section Behavior -->
    document.addEventListener("DOMContentLoaded", function () {
        const gallerySection = document.getElementById("gallerySection");
        const viewToggleButton = document.getElementById("viewToggleButton");
        const galleryItems = document.querySelectorAll(".galleryItem");
        const desktopViewLimit = 5; // Number of items to show on desktop
        const mobileViewLimit = 3; // Number of items to show on mobile
        let isExpanded = false;

        function updateGalleryView() {
            const isMobileView = window.innerWidth <= 640;
            const viewLimit = isMobileView ? mobileViewLimit : desktopViewLimit;
            galleryItems.forEach((item, index) => {
                if (!isExpanded && index >= viewLimit) {
                    item.classList.add("hidden");
                } else {
                    item.classList.remove("hidden");
                }
            });
        }

        viewToggleButton.addEventListener("click", () => {
            isExpanded = !isExpanded;
            viewToggleButton.textContent = isExpanded ? "View Less" : "View More";
            updateGalleryView();
        });

        // Initialize gallery view on load and on resize
        updateGalleryView();
        window.addEventListener("resize", updateGalleryView);
    });


    // <!-- Our Files Section -->
    function toggleFiles() {
        const additionalFiles = document.getElementById('additionalFiles');
        const buttonText = document.getElementById('buttonText');
        const buttonIcon = document.getElementById('buttonIcon');

        if (additionalFiles.classList.contains('hidden')) {
            // Show additional files
            additionalFiles.classList.remove('hidden');
            buttonText.textContent = 'View Less';
            buttonIcon.classList.remove('fa-arrow-right');
            buttonIcon.classList.add('fa-arrow-up');
        } else {
            // Hide additional files
            additionalFiles.classList.add('hidden');
            buttonText.textContent = 'View More';
            buttonIcon.classList.remove('fa-arrow-up');
            buttonIcon.classList.add('fa-arrow-right');
        }
    }


    // <!-- Our Video Section -->
    // Sample video data - replace with your actual video data
    const videos = [
        {
            id: '6ZfuNTqbHE8',
            title: 'Introduction to Our Services ',
            description: 'Learn about our comprehensive business solutions ',
            thumbnail: 'https://wallpapers.com/images/high/avengers-infinity-war-collage-artwork-desktop-thqv4j8n5ad2oit2.webp'
        },
        {
            id: '-pvt6tQsOqQ',
            title: 'Your Video Title',
            description: 'Your video description',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Deva_2025_film_poster.jpg'
        },
        {
            id: '6ZfuNTqbHE8',
            title: 'Introduction to Our Services',
            description: 'Learn about our comprehensive business solutions and how we can help your company grow.',
            thumbnail: 'https://w0.peakpx.com/wallpaper/920/1005/HD-wallpaper-avengers-movie-avengers-movies-thumbnail.jpg'
        },
        {
            id: '-pvt6tQsOqQ',
            title: 'Your Video Title',
            description: 'Your video description',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Deva_2025_film_poster.jpg'
        },

    ];

    // Function to create video cards
    function createVideoCards() {
        const container = document.getElementById('video-container');

        videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-95 shadow-lg shadow-red-300';
            card.innerHTML = `
                    <div class="relative">
                        <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover">
                        <button onclick="openModal('${video.id}')" class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300">
                            <svg class="w-16 h-16 text-white opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="p-2">
                        <h3 class="text-md font-semibold mb-2">${video.title}</h3>
                        <p class="text-gray-600 text-xs">${video.description}</p>
                    </div>
                `;
            container.appendChild(card);
        });
    }

    // Function to open video modal
    function openModal(videoId) {
        const modal = document.getElementById('video-modal');
        const video = videos.find(v => v.id === videoId);

        document.getElementById('modal-title').textContent = video.title;
        document.getElementById('youtube-link').href = `https://youtube.com/watch?v=${videoId}`;

        // Create iframe for video
        const videoContainer = document.getElementById('modal-video-container');
        videoContainer.innerHTML = `
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/${videoId}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            `;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Function to close video modal
    function closeModal() {
        const modal = document.getElementById('video-modal');
        const videoContainer = document.getElementById('modal-video-container');

        modal.classList.add('hidden');
        videoContainer.innerHTML = ''; // Remove iframe to stop video
        document.body.style.overflow = 'auto';
    }

    // Initialize video cards on page load
    createVideoCards();




    // <!-- Our Business Hours Section -->
    document.getElementById('enquiryForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Log form data to console
        console.log('Form Data:', formData);

        // Animate button during submission
        const button = this.querySelector('button');
        button.disabled = true;
        button.innerHTML = 'Sending...';
        button.classList.add('opacity-75');

        // Simulate form submission
        setTimeout(() => {
            // Hide form with Tailwind classes
            this.classList.add('opacity-0', 'transform', 'transition-all', 'duration-300');
            setTimeout(() => {
                this.style.display = 'none';
                // Show success message
                const successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.classList.remove('hidden');
                    successMessage.classList.add('opacity-0');
                    setTimeout(() => {
                        successMessage.classList.remove('opacity-0');
                        successMessage.classList.add('opacity-100', 'transform', 'translate-y-0');
                    }, 50);
                }
            }, 300);
        }, 1500);
    });

    // Add validation feedback using Tailwind classes
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('invalid', function () {
            this.classList.add('border-red-500', 'ring-red-200');
            this.classList.add('animate-bounce');
            setTimeout(() => {
                this.classList.remove('animate-bounce');
            }, 500);
        });
        input.addEventListener('input', function () {
            this.classList.remove('border-red-500', 'ring-red-200');
        });
    });




    // <!-- Our award  Section -->
    document.addEventListener("DOMContentLoaded", function () {
        const awardsGrid = document.getElementById("awards-grid");
        const toggleBtn = document.getElementById("toggle-btn");
        const awardCards = awardsGrid.querySelectorAll(".award-card");
        const initialVisibleDesktop = 4;
        const initialVisibleMobile = 2;
        let expanded = false;

        // Function to show/hide cards based on viewport size
        function updateVisibility() {
            const isDesktop = window.innerWidth >= 1024;
            const initialVisible = isDesktop ? initialVisibleDesktop : initialVisibleMobile;

            // Show/hide cards
            awardCards.forEach((card, index) => {
                if (!expanded) {
                    if (index < initialVisible) {
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                } else {
                    card.classList.remove("hidden");
                }
            });
        }

        // Initialize visibility on load
        updateVisibility();

        // Handle button click
        toggleBtn.addEventListener("click", () => {
            expanded = !expanded;
            if (expanded) {
                // Show all cards
                awardCards.forEach(card => card.classList.remove("hidden"));
                toggleBtn.textContent = "View Less";
            } else {
                // Hide cards beyond initial visible
                updateVisibility();
                toggleBtn.textContent = "View More";
            }
        });

        // Update visibility on resize
        window.addEventListener("resize", updateVisibility);
    });



    function toggleReviewForm() {
        const form = document.getElementById('reviewForm');
        form.classList.toggle('hidden');

        if (!form.classList.contains('hidden')) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Star rating functionality
    document.querySelectorAll('.fa-star').forEach(star => {
        star.addEventListener('click', function () {
            const stars = this.parentElement.children;
            const clickedIndex = Array.from(stars).indexOf(this);

            Array.from(stars).forEach((star, index) => {
                if (index <= clickedIndex) {
                    star.classList.remove('far');
                    star.classList.add('fas');
                } else {
                    star.classList.remove('fas');
                    star.classList.add('far');
                }
            });
        });
    });


    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('ratingInput');
    const form = document.getElementById('reviewForm');

    // Set rating and update stars
    function setRating(rating) {
        ratingInput.value = rating;
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    // Add click event for stars
    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            const rating = parseInt(e.target.dataset.rating);
            setRating(rating);
        });
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('nameInput').value,
            rating: parseInt(ratingInput.value),
            review: document.getElementById('reviewInput').value
        };

        console.log('Form Data:', formData);

        // Reset form
        form.reset();
        setRating(0);
    });


    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const reviewCards = document.querySelectorAll('.review-card');
    let isExpanded = false;

    viewMoreBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;

        // Show/hide reviews after the first two
        reviewCards.forEach((card, index) => {
            if (index >= 2) {
                card.classList.toggle('hidden');
            }
        });

        // Update button text
        viewMoreBtn.textContent = isExpanded ? 'View Less' : 'View More';
    });


    function openqrModal() {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modalContent');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modalContent.classList.add('scale-100');
        }, 10);
    }

    function closeqrModal() {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modalContent');
        modalContent.classList.remove('scale-100');
        setTimeout(() => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }, 300);
    }

    async function downloadQR() {
        try {
            const qrImage = document.getElementById('qrCodeImage');

            // Create a canvas element
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Create a temporary image to get the actual dimensions
            const img = new Image();
            img.crossOrigin = 'anonymous';  // This enables CORS

            img.onload = function () {
                // Set canvas dimensions to match the image
                canvas.width = img.width;
                canvas.height = img.height;

                // Draw image on canvas
                ctx.drawImage(img, 0, 0);

                // Convert canvas to blob
                canvas.toBlob(function (blob) {
                    // Create download link
                    const url = URL.createObjectURL(blob);
                    const downloadLink = document.createElement('a');
                    downloadLink.href = url;
                    downloadLink.download = 'qr-code.png';

                    // Trigger download
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);

                    // Clean up
                    URL.revokeObjectURL(url);
                }, 'image/png');
            };

            // Set image source to trigger loading
            img.src = qrImage.src;
        } catch (error) {
            console.error('Error downloading QR code:', error);
            alert('Failed to download QR code. Please try again.');
        }
    }

    async function shareQR() {
        try {
            const qrImage = document.getElementById('qrCodeImage');

            // Fetch the image and convert to blob
            const response = await fetch(qrImage.src);
            const blob = await response.blob();

            // Create file from blob
            const file = new File([blob], 'qr-code.png', { type: 'image/png' });

            if (navigator.share) {
                await navigator.share({
                    title: 'My vCard QR Code',
                    text: 'Scan this QR code to view my digital business card',
                    files: [file]
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                alert('Sharing is not supported in your browser. You can download the QR code instead.');
            }
        } catch (error) {
            console.error('Error sharing QR code:', error);
            if (error.name === 'AbortError') {
                // User cancelled sharing
                return;
            }
            alert('Failed to share QR code. Please try again.');
        }
    }

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // Show/hide the mobile menu
        hamburgerIcon.classList.toggle('hidden'); // Toggle the hamburger icon
        closeIcon.classList.toggle('hidden'); // Toggle the cross icon
    });


    const shareBtn = document.getElementById('shareBtn');
    const sharePopup = document.getElementById('sharePopup');
    const copyLink = document.getElementById('copyLink');
    let isOpen = false;

    // Toggle share popup
    shareBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            sharePopup.classList.add('active');
            shareBtn.classList.remove('pulse-animation');
        } else {
            sharePopup.classList.remove('active');
            shareBtn.classList.add('pulse-animation');
        }
    });

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target) && isOpen) {
            isOpen = false;
            sharePopup.classList.remove('active');
            shareBtn.classList.add('pulse-animation');
        }
    });

    // Social share functionality
    const socialShare = (type) => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        let shareUrl = '';

        switch (type) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    };

    // Add click events for social share buttons
    document.querySelectorAll('.social-icon[data-type]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            socialShare(button.dataset.type);
        });
    });

    // Copy link functionality
    copyLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    });


    const colorBtn = document.getElementById('colorBtn');
    const colorPopup = document.getElementById('colorPopup');
    const selectedColor = document.getElementById('selectedColor');
    const colorName = document.getElementById('colorName');
    const colorCircles = document.querySelectorAll('.color-circle');
    const headingText = document.getElementById('headingText');
    const qrText = document.getElementById('qrText');
    const hoursText = document.getElementById('hoursText');
    const viewToggleButtonAward = document.getElementById('toggle-btn');  // Select the button
    const achievementsHeading = document.getElementById('achievementsHeading');
    const customerHeading = document.getElementById('customerHeading');

    let isPopupOpen = false;

    // Toggle popup with improved animation handling
    colorBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isPopupOpen = !isPopupOpen;

        if (isPopupOpen) {
            colorPopup.classList.remove('hidden');
            // Add small delay for opacity transition
            requestAnimationFrame(() => {
                colorPopup.classList.remove('opacity-0', 'scale-95');
            });
        } else {
            closePopup();
        }
    });

    // Close popup function
    function closePopup() {
        isPopupOpen = false;
        colorPopup.classList.add('opacity-0', 'scale-95');
        // Wait for transition to complete before hiding
        setTimeout(() => {
            colorPopup.classList.add('hidden');
        }, 300);
    }

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        if (isPopupOpen && !colorPopup.contains(e.target) && e.target !== colorBtn) {
            closePopup();
        }
    });

    // Handle color selection
    colorCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            // Remove active state from all circles
            colorCircles.forEach(c => c.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-500'));

            const color = circle.dataset.color;
            const name = circle.dataset.name;

            // Update selected color display
            selectedColor.className = 'w-full h-8 rounded-lg border-2 border-gray-200 ' + color;
            colorName.textContent = name;

            // Update About Us heading color dynamically
            headingText.className = headingText.className.replace(/text-\w+-500/g, '');
            headingText.classList.add(`text-${name.toLowerCase()}-500`);

            // Update button background color dynamically
            toggleBtn.className = toggleBtn.className.replace(/bg-\w+-600/g, '');
            toggleBtn.classList.add(`bg-${name.toLowerCase()}-600`);

            // Update button background color dynamically
            toggleButton.className = toggleBtn.className.replace(/bg-\w+-600/g, '');
            toggleButton.classList.add(`bg-${name.toLowerCase()}-600`);

            // Update text color dynamically for the paragraph
            postText.className = postText.className.replace(/text-\w+-600/g, '');
            postText.classList.add(`text-${name.toLowerCase()}-600`);

            // Update <a> tag background color dynamically
            addContactLink.className = addContactLink.className.replace(/bg-\w+-600/g, '');
            addContactLink.classList.add(`bg-${name.toLowerCase()}-600`);

            // Update border color dynamically
            colorBorder.className = colorBorder.className.replace(/border-\w+-600/g, '');
            colorBorder.classList.add(`border-${name.toLowerCase()}-600`);

            // Update Services heading color dynamically
            servicesHeading.className = servicesHeading.className.replace(/text-\w+-600/g, '');
            servicesHeading.classList.add(`text-${name.toLowerCase()}-600`);

            // Update Products heading color dynamically
            productsHeading.className = productsHeading.className.replace(/text-\w+-600/g, '');
            productsHeading.classList.add(`text-${name.toLowerCase()}-600`);

            // Update button background color dynamically
            ProductButton.className = toggleBtn.className.replace(/bg-\w+-600/g, '');
            ProductButton.classList.add(`bg-${name.toLowerCase()}-600`);

            // Update galleryText heading color dynamically
            galleryText.className = productsHeading.className.replace(/text-\w+-600/g, '');
            galleryText.classList.add(`text-${name.toLowerCase()}-600`);

            // Update button background color dynamically
            viewToggleButton.className = toggleBtn.className.replace(/bg-\w+-600/g, '');
            viewToggleButton.classList.add(`bg-${name.toLowerCase()}-600`);

            // Update button background color dynamically
            filesButton.className = toggleBtn.className.replace(/bg-\w+-600/g, '');
            filesButton.classList.add(`bg-${name.toLowerCase()}-600`);

            // Update Products heading color dynamically
            fileHeading.className = productsHeading.className.replace(/text-\w+-600/g, '');
            fileHeading.classList.add(`text-${name.toLowerCase()}-600`);

            // Update Products heading color dynamically
            youtubeHeading.className = productsHeading.className.replace(/text-\w+-600/g, '');
            youtubeHeading.classList.add(`text-${name.toLowerCase()}-600`);

            // Update the button background color dynamically
            viewToggleButtonAward.className = viewToggleButtonAward.className.replace(/bg-\w+-600/g, '');  // Remove old bg color
            viewToggleButtonAward.classList.add(`bg-${name.toLowerCase()}-600`);  // Add the new bg color class

            // Update the button background color dynamically
            viewMoreBtn.className = viewToggleButton.className.replace(/bg-\w+-600/g, '');  // Remove old bg color
            viewMoreBtn.classList.add(`bg-${name.toLowerCase()}-600`);

            // Update Products heading color dynamically
            qrText.className = qrText.className.replace(/text-\w+-600/g, '');
            qrText.classList.add(`text-${name.toLowerCase()}-600`);

            // Update Products heading color dynamically
            resourcesText.className = productsHeading.className.replace(/text-\w+-600/g, '');
            resourcesText.classList.add(`text-${name.toLowerCase()}-600`);

            // Update the button background color dynamically
            hoursText.className = hoursText.className.replace(/bg-\w+-600/g, '');  // Remove old bg color
            hoursText.classList.add(`bg-${name.toLowerCase()}-600`);

             // Update text color dynamically
        achievementsHeading.className = achievementsHeading.className.replace(/text-\w+-600/g, '');
        achievementsHeading.classList.add(`text-${name.toLowerCase()}-600`);

        // Update heading text color dynamically
        customerHeading.className = customerHeading.className.replace(/text-\w+-600/g, '');
        customerHeading.classList.add(`text-${name.toLowerCase()}-600`);

         // Update the button background color dynamically
         paymentsText.className = hoursText.className.replace(/bg-\w+-600/g, '');  // Remove old bg color
         paymentsText.classList.add(`bg-${name.toLowerCase()}-600`);

          // Update the button background color dynamically
          contactText.className = hoursText.className.replace(/bg-\w+-600/g, '');  // Remove old bg color
          contactText.classList.add(`bg-${name.toLowerCase()}-600`);


            // Add selection animation
            circle.classList.add('ring-4', 'ring-offset-2', 'ring-black');
        });
    });


