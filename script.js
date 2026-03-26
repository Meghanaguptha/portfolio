const portfolioData = {
    name: "Meghana",
    about: "Hello, I'm Meghana. Undergrad pursuing B.Tech in Computer Science Engineering (Data Science & Machine Learning) at LPU. I enjoy transforming raw data into meaningful insights and building intelligent models that solve real-world problems. With hands-on experience in projects involving algorithms, data structures, and predictive modeling, I am continuously exploring new technologies to enhance my skills. I am eager to learn, grow, and contribute to innovative solutions in the field of data-driven decision-making.",
    skills: ["Python", "C", "Java", "HTML", "CSS", "JavaScript", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tkinter", "Firebase", "Tableau", "PowerBI", "AWS", "Git", "Linux", "Figma"],
    projects: [
        {
            name: "Portfolio",
            desc: "Personal portfolio website showcasing skills and projects with a premium dark-themed design.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/Meghanaguptha/portfolio"
        },
        {
            name: "Networking-lab-project",
            desc: "Network design projects including Cisco Packet Tracer designs and comprehensive documentation.",
            tech: ["Cisco Packet Tracer", "Networking"],
            link: "https://github.com/Meghanaguptha/Networking-lab-project"
        },
        {
            name: "Final-Python-project",
            desc: "Interactive Python-based Wordle word puzzle game with report documentation.",
            tech: ["Python"],
            link: "https://github.com/Meghanaguptha/Final-Python-project"
        },
        {
            name: "Wordle-using-tkinter",
            desc: "Wordle game implementation using Python's Tkinter library for GUI.",
            tech: ["Python", "Tkinter"],
            link: "https://github.com/Meghanaguptha/Wordle-using-tkinter"
        }
    ],
    experience: [
        {
            company: "Cipher Schools",
            role: "Java with DSA Trainee",
            duration: "June 2025 – July 2025",
            details: ["Designed an interactive dice game.", "Developed a custom Linked List structure for hands-on learning."]
        }
    ],
    education: [
        {
            degree: "B.Tech in CSE (Data Science with ML)",
            institution: "Lovely Professional University",
            year: "2023 – Present",
            score: "CGPA: 7.9"
        },
        {
            degree: "Intermediate",
            institution: "Narayana Junior College",
            year: "2021 – 2023",
            score: "84%"
        }
    ],
    certifications: [
        { title: "Digital Systems", issuer: "LPU", image: "cert-digital-systems.png" },
        { title: "Hardware & OS", issuer: "IBM", image: "cert-hardware-os.png" },
        { title: "Python for ML/AI", issuer: "CSE Patashala", image: "cert-python-ml.png" },
        { title: "Social Media Marketing", issuer: "HubSpot", image: "cert-social-media.png" }
    ],
    achievements: [
        "3rd place in 'ONE INDIA ONE WORLD' cultural showcase representing diverse traditions.",
        "1st place in Inter-School Debate Competition showcasing communication and analytical skills."
    ],
    links: {
        linkedin: "https://www.linkedin.com/in/meghana-eruvanti/",
        github: "https://github.com/Meghanaguptha",
        email: "meghanaeruvanti9555@gmail.com",
        phone: "+91-9177825684"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Populate About
    document.getElementById('about-text').textContent = portfolioData.about;

    // Populate Skills
    const skillsContainer = document.getElementById('skills-container');
    portfolioData.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-pill';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });

    // Populate Projects
    const projectsContainer = document.getElementById('projects-container');
    portfolioData.projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-card glass';
        div.innerHTML = `
            <h3 class="project-title">${project.name}</h3>
            <p class="project-desc">${project.desc}</p>
            <div class="skills-grid" style="margin-bottom: 1.5rem">
                ${project.tech.map(t => `<span class="skill-pill" style="font-size: 0.7rem">${t}</span>`).join('')}
            </div>
            <a href="${project.link}" target="_blank" class="project-link">View Repo →</a>
        `;
        projectsContainer.appendChild(div);
    });

    // Populate Experience
    const tabsHeader = document.getElementById('experience-tabs');
    portfolioData.experience.forEach((exp, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = exp.company;
        btn.onclick = () => switchTab(index);
        tabsHeader.appendChild(btn);

        if (index === 0) {
            updateExperienceContent(exp);
        }
    });

    // Populate Education
    const eduContainer = document.getElementById('education-container');
    portfolioData.education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'education-item glass';
        div.style.padding = '2rem';
        div.style.marginBottom = '1.5rem';
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center">
                <h3 style="color: var(--accent-color)">${edu.degree}</h3>
                <span style="color: var(--text-secondary)">${edu.year}</span>
            </div>
            <p style="margin: 0.5rem 0">${edu.institution}</p>
            <p style="font-weight: 700; color: var(--accent-color)">${edu.score}</p>
        `;
        eduContainer.appendChild(div);
    });

    // Populate Certifications
    const certContainer = document.getElementById('cert-container');

    portfolioData.certifications.forEach(cert => {
        const div = document.createElement('div');
        div.className = 'cert-card glass';
        div.style.cursor = 'pointer';
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start">
                <div>
                    <h3 style="color: var(--accent-color); margin-bottom: 0.5rem">${cert.title}</h3>
                    <p style="color: var(--text-secondary)">${cert.issuer}</p>
                </div>
                <span class="glass-btn" style="padding: 0.4rem 1rem; font-size: 0.7rem">View →</span>
            </div>
        `;
        div.onclick = function() {
            window.open(cert.image, '_blank');
        }
        certContainer.appendChild(div);
    });


    // Populate Achievements
    const achContainer = document.getElementById('achievements-container');
    portfolioData.achievements.forEach(ach => {
        const li = document.createElement('li');
        li.className = 'achievement-item';
        li.textContent = ach;
        achContainer.appendChild(li);
    });

    // Populate Links
    document.getElementById('linkedin-link').href = portfolioData.links.linkedin;
    document.getElementById('linkedin-link').target = "_blank";
    document.getElementById('github-link').href = portfolioData.links.github;
    document.getElementById('github-link').target = "_blank";
    document.getElementById('email-link').href = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.links.email}`;
    document.getElementById('email-link').target = "_blank";
    document.getElementById('email-link').textContent = portfolioData.links.email;
    document.getElementById('phone-link').href = `tel:${portfolioData.links.phone}`;
    document.getElementById('phone-link').target = "_blank";
    document.getElementById('phone-link').textContent = portfolioData.links.phone;

    // Add Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .glass, .cert-card').forEach(el => {
        if (!el.classList.contains('hero-image-wrapper')) {
            el.classList.add('reveal');
            observer.observe(el);
        }
    });
});

function switchTab(index) {
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    updateExperienceContent(portfolioData.experience[index]);
}

function updateExperienceContent(exp) {
    const content = document.getElementById('experience-content');
    content.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem">
            <h3 style="color: var(--accent-color)">${exp.role}</h3>
            <span style="color: var(--text-secondary)">${exp.duration}</span>
        </div>
        <ul style="padding-left: 1.5rem; color: var(--text-secondary)">
            ${exp.details.map(d => `<li style="margin-bottom: 0.5rem">${d}</li>`).join('')}
        </ul>
    `;
}
