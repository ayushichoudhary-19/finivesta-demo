
        /* Check External Source: bvambient.js */ 
        document.addEventListener("DOMContentLoaded", function() {
            var demo1 = new BVAmbient({
                selector: "#ambient",
                fps: 60,
                max_transition_speed: 12000,
                min_transition_speed: 8000,
                particle_number: 30,
                particle_maxwidth: 60,
                particle_minwidth: 10,
                particle_radius: 50,
                particle_opacity: true,
                particle_colision_change: true,
                particle_background: "#58c70c",
                particle_image: {
                    image: false,
                    src: ""
                },
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            particle_number: "15"
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            particle_number: "10"
                        }
                    }
                ]
            });
        });

        // Function to show/hide sections
        function showContent(sectionId) {
            const sections = document.querySelectorAll('.container section');
            sections.forEach(section => {
                section.style.display = 'none';
            });
            const selectedSection = document.getElementById(sectionId);
            selectedSection.style.display = 'block';
        }

        // Toggle navigation menu for smaller screens
        function toggleNav() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Close navigation menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const navLinks = document.getElementById('navLinks');
                navLinks.classList.remove('active');
            });
        });

        // Initial setup to show only the "About Us" section on page load
        window.onload = function () {
            showContent('about');
        };
