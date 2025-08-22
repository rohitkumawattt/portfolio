
// Data for Skills Section
const allSkills = [
    { name: "HTML5", category: "frontend", proficiency: 9 },
    { name: "CSS3", category: "frontend", proficiency: 9 },
    { name: "JavaScript", category: "frontend", proficiency: 8 },
    { name: "React.js", category: "frontend", proficiency: 8 },
    { name: "Bootstrap", category: "frontend", proficiency: 9 },
    { name: "Tailwind CSS", category: "frontend", proficiency: 6 },
    { name: "Node.js", category: "backend", proficiency: 7 },
    { name: "Express.js", category: "backend", proficiency: 7 },
    { name: "Python", category: "backend", proficiency: 6 },
    { name: "MongoDB", category: "backend", proficiency: 6 },
    { name: "MySQL", category: "backend", proficiency: 8 },
    { name: "Git & GitHub", category: "tools", proficiency: 8 },
    { name: "AWS Basics", category: "tools", proficiency: 4 },
    { name: "Visual Studio Code", category: "tools", proficiency: 8 },
    { name: "Postman", category: "tools", proficiency: 8 },
    { name: "Problem Solving", category: "softskills", proficiency: 9 },
    { name: "Communication", category: "softskills", proficiency: 8 },
    { name: "Teamwork", category: "softskills", proficiency: 8 },
    { name: "Adaptability", category: "softskills", proficiency: 9 },
    { name: "Time Management", category: "softskills", proficiency: 7 }
];

// Data for Projects Section
const projects = [
    {
        id: "project1",
        title: "SymptoScope",
        description: "SymptoScope is a AI web application designed to help users manage and check their symptoms effectively. It provides a user-friendly interface for managing Journal entries and forms and all these work by using AI(Gemini).",
        technologies: ["React.js", "Express", "Bootstrap CSS", "Node.js", "MongoDB", "Gemini API"],
        liveLink: "#",
        repoLink: "https://github.com/Darkfalcon2804/SyopFront.git"
    },
    // {
    //     id: "project2",
    //     title: "Real-time Chat Application",
    //     description: "Developed a real-time chat application with user authentication and group chat functionalities. Features instant messaging and user presence indicators.",
    //     technologies: ["Vue.js", "Socket.IO", "Express.js", "PostgreSQL"],
    //     liveLink: "#",
    //     repoLink: "#"
    // },
    // {
    //     id: "project3",
    //     title: "Personal Portfolio Website",
    //     description: "Designed and built a dynamic and responsive personal portfolio website to showcase my projects and skills. Optimized for performance and SEO.",
    //     technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    //     liveLink: "#",
    //     repoLink: "#"
    // },
    // {
    //     id: "project4",
    //     title: "Task Management API",
    //     description: "Created a RESTful API for a task management system, supporting user authentication, task creation, and filtering. Includes comprehensive API documentation.",
    //     technologies: ["Python", "Django REST Framework", "PostgreSQL"],
    //     liveLink: "#",
    //     repoLink: "#"
    // },
    // {
    //     id: "project5",
    //     title: "Recipe Finder Web App",
    //     description: "An interactive web application that allows users to search for recipes based on ingredients and dietary preferences. Integrates with an external recipe API.",
    //     technologies: ["Vanilla JavaScript", "HTML5", "CSS3", "Fetch API"],
    //     liveLink: "#",
    //     repoLink: "#"
    // }
];

// Data for Experience Section
const experiences = [
    {
        id: "exp1",
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        duration: "Jan 2022 - Present",
        responsibilities: [
            "Led the development of scalable and performant user interfaces for enterprise-level web applications using React.js and Next.js.",
            "Collaborated with product managers and UX designers to translate wireframes and mockups into pixel-perfect, interactive UIs.",
            "Implemented robust state management solutions with Redux Toolkit, ensuring predictable application behavior.",
            "Mentored junior developers, conducted code reviews, and promoted best practices in front-end development."
        ]
    },
    {
        id: "exp2",
        title: "Full-stack Developer",
        company: "Innovate Web Studio",
        duration: "July 2019 - Dec 2021",
        responsibilities: [
            "Developed and maintained full-stack web applications using Node.js, Express.js, and MongoDB.",
            "Designed and implemented RESTful APIs, handling data persistence and complex business logic.",
            "Integrated third-party services and APIs, ensuring seamless data flow and functionality.",
            "Participated in agile development sprints, contributing to sprint planning, daily stand-ups, and retrospectives."
        ]
    },
    {
        id: "exp3",
        title: "Junior Web Developer",
        company: "Digital Spark Agency",
        duration: "Mar 2018 - June 2019",
        responsibilities: [
            "Assisted in the development of responsive websites using HTML, CSS, and JavaScript.",
            "Implemented front-end features and resolved bugs under the guidance of senior developers.",
            "Optimized web applications for maximum speed and scalability.",
            "Gained hands-on experience with version control systems (Git) and project management tools."
        ]
    }
];

let skillRadarChart;

// Function to create/update Skill Radar Chart
function updateSkillRadarChart(skills) {
    const frontendSkills = skills.filter(s => s.category === "frontend");
    const backendSkills = skills.filter(s => s.category === "backend");
    const toolsSkills = skills.filter(s => s.category === "tools");
    const softSkills = skills.filter(s => s.category === "softskills");

    const labels = ["Frontend", "Backend", "Tools", "Soft Skills"];
    const data = [
        frontendSkills.reduce((sum, s) => sum + s.proficiency, 0) / (frontendSkills.length || 1),
        backendSkills.reduce((sum, s) => sum + s.proficiency, 0) / (backendSkills.length || 1),
        toolsSkills.reduce((sum, s) => sum + s.proficiency, 0) / (toolsSkills.length || 1),
        softSkills.reduce((sum, s) => sum + s.proficiency, 0) / (softSkills.length || 1)
    ];

    const ctx = document.getElementById('skillRadarChart').getContext('2d');

    if (skillRadarChart) {
        skillRadarChart.destroy();
    }

    skillRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels.map(label => {
                const words = label.split(' ');
                const result = [];
                let currentLine = '';
                for (let i = 0; i < words.length; i++) {
                    if ((currentLine + words[i]).length > 16 && currentLine !== '') {
                        result.push(currentLine.trim());
                        currentLine = words[i] + ' ';
                    } else {
                        currentLine += words[i] + ' ';
                    }
                }
                if (currentLine !== '') {
                    result.push(currentLine.trim());
                }
                return result;
            }),
            datasets: [{
                label: 'Proficiency Level',
                data: data,
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                borderColor: '#4A90E2',
                borderWidth: 2,
                pointBackgroundColor: '#4A90E2',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#4A90E2'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                            family: 'Inter'
                        },
                        color: '#333333'
                    },
                    suggestedMin: 0,
                    suggestedMax: 10,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 2,
                        display: false // Hide numerical ticks on axes
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.raw !== null) {
                                label += Math.round(context.raw * 10) / 10;
                            }
                            return label;
                        }
                    },
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleFont: { family: 'Inter' },
                    bodyFont: { family: 'Inter' },
                    padding: 10,
                    cornerRadius: 6
                },
                legend: {
                    display: false
                }
            }
        }
    });
}

// Function to render skills list
function renderSkills(skillsToRender) {
    const skillListEl = document.getElementById('skillList');
    skillListEl.innerHTML = '';
    skillsToRender.forEach(skill => {
        const li = document.createElement('li');
        li.className = 'flex items-center gap-2';
        li.innerHTML = `<span class="text-blue-600">&#10003;</span> ${skill.name}`; // Checkmark icon
        skillListEl.appendChild(li);
    });
}

// Event listeners for skill filters
document.querySelectorAll('.skill-filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        document.querySelectorAll('.skill-filter-btn').forEach(btn => {
            btn.removeAttribute('data-active');
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });

        button.setAttribute('data-active', 'true');
        button.classList.remove('bg-gray-200', 'text-gray-700');
        button.classList.add('bg-blue-600', 'text-white');

        const filteredSkills = category === 'all' ? allSkills : allSkills.filter(s => s.category === category);
        renderSkills(filteredSkills);
    });
});

// Initialize skills on load
renderSkills(allSkills);
updateSkillRadarChart(allSkills);

// Function to render projects
function renderProjects() {
    const projectGrid = document.getElementById('projectGrid');
    projectGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow cursor-pointer';
        projectCard.setAttribute('data-project-id', project.id);
        projectCard.innerHTML = `
                    <div class="w-24 text-6xl text-blue-500 mb-4"><img src="./public/image/SymptoScope_logo.png" alt="SymptoScope Logo"></div>
                    <h3 class="text-2xl font-semibold text-gray-800 mb-2">${project.title}</h3>
                    <p class="text-gray-700 text-base mb-4 line-clamp-3">${project.description}</p>
                    <div class="mt-auto">
                        <button class="view-details-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-md">View Details</button>
                    </div>
                `;
        projectGrid.appendChild(projectCard);
    });

    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const projectId = event.target.closest('.rounded-xl').dataset.projectId;
            const project = projects.find(p => p.id === projectId);
            if (project) {
                document.getElementById('modalProjectTitle').textContent = project.title;
                document.getElementById('modalProjectDescription').textContent = project.description;

                const techList = document.getElementById('modalProjectTech');
                techList.innerHTML = '';
                project.technologies.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    techList.appendChild(li);
                });
                document.getElementById('modalProjectLive').href = project.liveLink;
                document.getElementById('modalProjectRepo').href = project.repoLink;

                document.getElementById('projectModalOverlay').classList.add('open');
                document.getElementById('projectModalOverlay').classList.remove('hidden');
            }
        });
    });
}

// Modal close functionality
document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('projectModalOverlay').classList.remove('open');
    setTimeout(() => {
        document.getElementById('projectModalOverlay').classList.add('hidden');
    }, 300); // Match transition duration
});

document.getElementById('projectModalOverlay').addEventListener('click', (event) => {
    if (event.target === document.getElementById('projectModalOverlay')) {
        document.getElementById('projectModalOverlay').classList.remove('open');
        setTimeout(() => {
            document.getElementById('projectModalOverlay').classList.add('hidden');
        }, 300);
    }
});

// Function to render experience
function renderExperience() {
    const experienceAccordion = document.getElementById('experienceAccordion');
    experienceAccordion.innerHTML = '';

    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'bg-white rounded-xl shadow-lg';
        expItem.innerHTML = `
                    <button class="accordion-header w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors">
                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800">${exp.title}</h3>
                            <p class="text-lg text-gray-600">${exp.company} | ${exp.duration}</p>
                        </div>
                        <span class="accordion-icon text-gray-600 text-2xl">&#9660;</span> <!-- Down arrow -->
                    </button>
                    <div class="accordion-content hidden p-6 pt-0">
                        <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                `;
        experienceAccordion.appendChild(expItem);
    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            // Close all other open accordions
            document.querySelectorAll('.accordion-content').forEach(otherContent => {
                if (otherContent !== content && !otherContent.classList.contains('hidden')) {
                    otherContent.classList.add('hidden');
                    otherContent.style.maxHeight = null; // Reset max-height
                    otherContent.previousElementSibling.querySelector('.accordion-icon').innerHTML = '&#9660;'; // Down arrow
                }
            });

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.style.maxHeight = content.scrollHeight + "px"; // Set max-height for smooth transition
                icon.innerHTML = '&#9650;'; // Up arrow
            } else {
                content.classList.add('hidden');
                content.style.maxHeight = null; // Reset max-height
                icon.innerHTML = '&#9660;'; // Down arrow
            }
        });
    });
}

// Initialize all sections on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderExperience();
    // Trigger click on 'All Skills' button to initialize the skills display
    const allSkillsButton = document.querySelector('.skill-filter-btn[data-category="all"]');
    if (allSkillsButton) {
        allSkillsButton.click();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set initial state for accordions (all closed)
window.onload = function () {
    document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.maxHeight = null;
    });
};


const toggleBtn = document.getElementById('navbar-toggle');
const links = document.getElementById('navbar-links');
toggleBtn.addEventListener('click', () => {
    links.classList.toggle('open');
    if (links.classList.contains('open')) {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
});
// Hide menu on resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        links.style.display = 'flex';
        links.classList.remove('open');
    } else if (!links.classList.contains('open')) {
        links.style.display = 'none';
    }
});