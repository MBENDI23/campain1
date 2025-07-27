 // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav ul');
            
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('show');
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    document.querySelectorAll('nav a').forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                });
            });
            
            // Update active link on scroll
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                
                document.querySelectorAll('section').forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        document.querySelectorAll('nav a').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            });
        });
        function sendEmails(){
            let params= {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            helpType: document.getElementById("helpType").value,
            message: document.getElementById("message").value
            }
            emailjs.send("service_yh2ptv8", "template_y42b43h", params)
            .then(function(res){
                console.log("success", res.status);
                alert("Thank you for your message! We will get back to you soon.")
            }   )
        }