document.addEventListener("DOMContentLoaded", () => {
    // Create Styles Dynamically
    const style = document.createElement("style");
    style.textContent = `
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            scroll-behavior: smooth;
        }
        .header, .section, .footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .header {
            height: 100vh;
            background: linear-gradient(30deg, #3B5998, beige);
            color: white;
            transition: background-color 0.5s, color 0.5s;
        }
        .header h1 {
            font-size: 3rem;
            margin: 0 0 20px 0;
        }
        .scroll-links a {
            margin: 10px;
            text-decoration: none;
            color: white;
            background-color: #3B5998;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1.2rem;
            transition: background-color 0.3s;
        }
        .scroll-links a:hover {
            background-color: beige;
            color: #3B5998;
        }
        .section {
            min-height: 100vh;
            color: white;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        #profile p {
            color: beige;
        }
        #profile {
            background-image: url('images/BG (2).jpg'); /* Local image */
        }
        #about {
            background-image: url('images/bianca.jpg'); /* Local image */
        }
        #contacts {
            background-image: url('images/bbb.jpg'); /* Local image */
        }
        .content-box {
            background: rgba(59, 89, 152, 0.7);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(59, 89, 152, 0.3);
            max-width: 600px;
        }
        .content-box h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: beige;
        }
        .content-box p, .content-box ul {
            color: beige;
        }
        #about h3 {
            color: beige;
        }
        ul {
            list-style-type: none;
            padding: 0;
            line-height: 1.8;
        }
        .footer {
            padding: 20px;
            background: beige;
        }
        .footer a {
            margin: 0 10px;
            color: #3B5998;
            font-size: 1.5rem;
        }
        .footer a:hover {
            color: black;
        }
    `;
    document.head.appendChild(style);

    // Create Elements Dynamically
    const app = document.body;

    // Header
    const header = document.createElement("header");
    header.className = "header";
    header.id = "header";
    header.innerHTML = `
        <h1>Who AM I</h1>
        <div class="scroll-links">
            <a href="#profile">Profile</a>
            <a href="#about">About Me</a>
            <a href="#contacts">Contacts</a>
        </div>
    `;
    app.appendChild(header);

    // Profile Section
    const profileSection = document.createElement("section");
    profileSection.className = "section";
    profileSection.id = "profile";
    profileSection.innerHTML = `
        <div class="content-box">
            <h2>Profile</h2>
            <p>Hi there! I’m Bianca S. Dumangas, but you can call me Biancs. I’m a 20-year-old Information Technology student at the City of Malabon University, where I’m working towards a Bachelor of Science in Information Technology. Born in Tondo, Manila, and now based in Navotas City, I am driven by both my passion for technology and my love for creativity.</p>
            <p>Beyond academics, I have a deep interest in graphic design and realistic portrait drawing—skills that allow me to blend art with technology.</p>
        </div>
        <div class="scroll-links">
            <a href="#about">About Me</a>
        </div>
    `;
    app.appendChild(profileSection);

    // About Section
    const aboutSection = document.createElement("section");
    aboutSection.className = "section";
    aboutSection.id = "about";
    aboutSection.innerHTML = `
        <div class="content-box">
            <h2>About Me</h2>
            <p>As a Bachelor of Science in Information Technology Student at the City of Malabon University</p>
            <h3>Personal Information :</h3>
            <ul>
                <li><strong>Nickname:</strong> &nbsp; <b><i>Biancakes</i></b></li>
                <li><strong>Birthday:</strong> May 24, 2003</li>
                <li><strong>Birthplace:</strong> Tondo, Manila</li>
                <li><strong>Age:</strong> 20</li>
                <li><strong>Nationality:</strong> Filipino</li>
                <li><strong>Religion:</strong> Roman Catholic</li>
                <li><strong>Civil Status:</strong> Single</li>
                <li><strong>Father’s Name:</strong> Rodney O. Dumangas</li>
                <li><strong>Mother’s Name:</strong> Maria Veronica S. Dumangas</li>
            </ul>
        <div class="scroll-links">
            <a href="#contacts">Contacts</a>
        </div>
    `;
    app.appendChild(aboutSection);

    // Contacts Section
    const contactsSection = document.createElement("section");
    contactsSection.className = "section";
    contactsSection.id = "contacts";
    contactsSection.innerHTML = `
        <div class="content-box">
            <h2>Contacts</h2>
            <p>You can reach me through email, phone, or social media.</p>
            <p>
                <a href="mailto:202202249@cityofmalabonuniversity.edu.ph"><i class="fas fa-envelope"></i> Email</a><br>
                <a href="tel:+639665426432"><i class="fas fa-phone"></i> Contact Number</a>
            </p>
            <a href="https://www.facebook.com/bianca.dumangas" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/bl4nchette/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/biancakesd" target="_blank"><i class="fab fa-github"></i></a>
        </div>
        <div class="scroll-links">
            <a href="#header">Home</a>
        </div>
    `;
    app.appendChild(contactsSection);

    // Footer
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
       <p> Dumangas, Bianca S. | City of Malabon University 2024</p>
    `;
    app.appendChild(footer);
});
