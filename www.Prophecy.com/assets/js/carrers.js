// const jobRoles = [
//     {
//         datePosted: "08/08/2024",
//         role: "Senior Network Analyst",
//         location: " South Edmonton, Alberta, Canada. (Hybrid)",
//         jobType: "Contract",
//         duration: "12+ month",
//         status: " open",
//         description: "Prophecy Technologies is looking for a Senior Network Analyst",
//         details: [
//             "8 plus years of experience in Snowflake-related activities.",
//             "Extensive experience with SQL databases and multiple programming languages, particularly SQL and Python.",
//             "Experience with ETL/ELT pipeline development using Snowflake’s features like Snow pipe, Task, Stored Procedures, and Streams.",
//             "Have worked on Projects with Snowflake integration both from Data Ingestion and Data Consumption perspective.",
//             "Strong understanding of data warehousing, data modelling, and data lake concepts.",
//             "Conducts performance tuning of SQL Queries for optimal performance.",
//             "Build the Test Cases for Unit and Integration Testing.",
//             "Able to manage team and directly communicate with client for requirements elicitation.",
//             "Coordinates, plans and executes activities related to platform maintenance and software release management.",
//             "Good Communication Skills.",
//             "Knowledge of Cloud and Windows/Unix Scripting is a plus.",
//             "Experience with Agile methodologies."
//         ]
//     },
//     {
//         datePosted: "08/07/2024",
//         role: "Java Developer",
//         location: "New York, NY (Onsite)",
//         jobType: "Full-time",
//         duration: "Permanent",
//         status: "Open",
//         description: "Tech Corp is seeking a skilled Java Developer",
//         details: [
//             "5+ years of experience in Java development.",
//             "Proficient in Spring Framework and Hibernate.",
//             "Experience in building RESTful APIs.",
//             "Strong problem-solving skills and attention to detail.",
//             "Excellent communication skills and team collaboration.",
//             "Knowledge of Agile methodologies.",
//             "Familiarity with cloud services like AWS is a plus."
//         ]
//     },
//     // {
//     //     datePosted: "08/01/2024",
//     //     role: "Frontend Developer",
//     //     location: "San Francisco, CA (Remote)",
//     //     jobType: "Contract",
//     //     duration: "6 months",
//     //     status: "Open",
//     //     description: "Looking for an experienced Frontend Developer",
//     //     details: [
//     //         "3+ years of experience in frontend development.",
//     //         "Expert in HTML, CSS, and JavaScript.",
//     //         "Experience with React.js and Vue.js.",
//     //         "Ability to convert design mockups into responsive web pages.",
//     //         "Knowledge of web performance optimization techniques.",
//     //         "Good understanding of RESTful APIs and how to integrate with them.",
//     //         "Experience in version control with Git."
//     //     ]
//     // },
//     // {
//     //     datePosted: "07/25/2024",
//     //     role: "DevOps Engineer",
//     //     location: "Seattle, WA (Hybrid)",
//     //     jobType: "Full-time",
//     //     duration: "Permanent",
//     //     status: "Open",
//     //     description: "Hiring a DevOps Engineer for cloud infrastructure",
//     //     details: [
//     //         "4+ years of experience in DevOps.",
//     //         "Proficient in Docker, Kubernetes, and CI/CD pipelines.",
//     //         "Experience with infrastructure as code (Terraform, Ansible).",
//     //         "Strong scripting skills in Bash, Python, or similar languages.",
//     //         "Knowledge of cloud platforms like AWS, Azure, or Google Cloud.",
//     //         "Ability to troubleshoot and resolve production issues efficiently.",
//     //         "Familiarity with monitoring and logging tools like Prometheus and ELK stack."
//     //     ]
//     // },
//     // {
//     //     datePosted: "06/30/2024",
//     //     role: "Data Analyst",
//     //     location: "Boston, MA (Onsite)",
//     //     jobType: "Part-time",
//     //     duration: "3 months",
//     //     status: "Open",
//     //     description: "Data Analyst needed for a short-term project",
//     //     details: [
//     //         "2+ years of experience in data analysis.",
//     //         "Strong SQL skills and experience with data visualization tools like Tableau.",
//     //         "Ability to interpret complex data and provide actionable insights.",
//     //         "Experience with Python or R for data analysis.",
//     //         "Excellent problem-solving skills.",
//     //         "Attention to detail and ability to work independently."
//     //     ]
//     // },
//     // {
//     //     datePosted: "06/30/2024",
//     //     role: "Data Analyst",
//     //     location: "Boston, MA (Onsite)",
//     //     jobType: "Part-time",
//     //     duration: "3 months",
//     //     status: "Open",
//     //     description: "Data Analyst needed for a short-term project",
//     //     details: [
//     //         "2+ years of experience in data analysis.",
//     //         "Strong SQL skills and experience with data visualization tools like Tableau.",
//     //         "Ability to interpret complex data and provide actionable insights.",
//     //         "Experience with Python or R for data analysis.",
//     //         "Excellent problem-solving skills.",
//     //         "Attention to detail and ability to work independently."
//     //     ]
//     // },

// ];

// const jobCardsContainer = document.getElementById("jobCardsContainer");
// const searchInput = document.getElementById("searchInput");

// function renderJobCards(jobs) {
//     jobCardsContainer.innerHTML = "";
//     jobs.forEach(job => {
//         const jobCard = document.createElement("div");
//         jobCard.className = "accordion-item";
//         jobCard.innerHTML = `
//             <div class="card" style="margin-top:30px; ">
//                 <div class="card-body">
//                     <div class="d-inline" id="Date">
//                         <p class="card-text"><small class="fst-italic text-secondary" style="margin-left:80%;">Date Posted: ${job.datePosted}</small></p>
//                     </div>
//                     <h5 class="card-title" style="color: #01497C;"><b>Role: ${job.role}</b></h5>
//                     <h5>Location: ${job.location}</h5>
//                     <h5><b>Job Type: ${job.jobType}</b></h5>
//                     <h5><b>Duration: ${job.duration}</b></h5>
//                     <p><b>Position Status:</b> <span style="color: rgb(255, 0, 0); font-weight: bold;">${job.status}</span></p>
//                     <p class="card-text">${job.description}</p>
//                 </div>
//                 <h2 class="accordion-header">
//                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#${job.role.replace(/\s+/g, '')}" aria-expanded="false"
//                         aria-controls="${job.role.replace(/\s+/g, '')}">
//                         <b style="color: #01497C;"> Job Description:</b>
//                     </button>
//                 </h2>
//                 <div id="${job.role.replace(/\s+/g, '')}" class="accordion-collapse collapse">
//                     <div class="accordion-body">
//                         <ul>
//                             ${job.details.map(detail => `<li>${detail}</li>`).join('')}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         `;
//         jobCardsContainer.appendChild(jobCard);
//     });
// }

// function filterJobRoles() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const filteredJobs = jobRoles.filter(job => 
//         job.role.toLowerCase().includes(searchTerm) ||
//         job.location.toLowerCase().includes(searchTerm) ||
//         job.description.toLowerCase().includes(searchTerm) ||
//         job.details.some(detail => detail.toLowerCase().includes(searchTerm))
//     );
//     renderJobCards(filteredJobs);
// }

// searchInput.addEventListener("input", filterJobRoles);

// // Initial render of job cards
// renderJobCards(jobRoles);


function filterJobs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const locationDropdown = document.getElementById('locationDropdown').value.toLowerCase();
    const jobListings = document.querySelectorAll('.job-listing');
  
    jobListings.forEach(job => {
      const title = job.getAttribute('data-title').toLowerCase();
      const location = job.getAttribute('data-location').toLowerCase();
  
      const matchesTitle = title.includes(searchInput);
        const matchesLocation = locationDropdown === "" || location === locationDropdown;

        if (matchesTitle && matchesLocation) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
  }