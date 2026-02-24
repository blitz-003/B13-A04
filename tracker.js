let list_of_jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    place: "Remote",
    jobType: "Full-time",
    salary: "$130,000 - $175,000",
    applicationType: "Not Applied",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    place: "Los Angeles, CA",
    jobType: "Part-time",
    salary: "$80,000 - $120,000",
    applicationType: "Not Applied",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    place: "Boston, MA",
    jobType: "Full-time",
    salary: "$125,000 - $165,000",
    applicationType: "Not Applied",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    place: "Seattle, WA",
    jobType: "Full-time",
    salary: "$140,000 - $190,000",
    applicationType: "Not Applied",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    place: "Austin, TX",
    jobType: "Full-time",
    salary: "$110,000 - $150,000",
    applicationType: "Not Applied",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    place: "New York, NY",
    jobType: "Full-time",
    salary: "$130,000 - $170,000",
    applicationType: "Not Applied",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    place: "Remote",
    jobType: "Full-time",
    salary: "$120,000 - $160,000",
    applicationType: "Not Applied",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    place: "San Francisco, CA",
    jobType: "Full-time",
    salary: "$130,000 - $175,000",
    applicationType: "Interview",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
  },
];

let total_jobs_count = list_of_jobs.length;
let interviewed_jobs_count = list_of_jobs.filter(
  (job) => job.applicationType === "Interview",
).length;
let rejected_jobs_count = list_of_jobs.filter(
  (job) => job.applicationType === "Rejected",
).length;

let currentFilter = "All";

let reference_to_total_count = document.querySelector("#totalCount");
let reference_to_interview_count = document.querySelector("#interviewCount");
let reference_to_reject_count = document.querySelector("#rejectCount");

let all_btn_reference = document.querySelector("#all-btn");
let interview_btn_reference = document.querySelector("#interview-btn");
let reject_btn_reference = document.querySelector("#rejected-btn");

all_btn_reference.addEventListener("click", function () {
  currentFilter = "All";
  renderCount();
  renderJobs();
});

interview_btn_reference.addEventListener("click", function () {
  currentFilter = "Interview";
  renderCount();
  renderJobs();
});

reject_btn_reference.addEventListener("click", function () {
  currentFilter = "Rejected";
  renderCount();
  renderJobs();
});

function renderCount() {
  reference_to_total_count.textContent = total_jobs_count;
  reference_to_interview_count.textContent = interviewed_jobs_count;
  reference_to_reject_count.textContent = rejected_jobs_count;
}

renderCount();

function renderJobs() {
  let jobs_to_print = null;
  let notice_reference = document.querySelector(".noticeBoard");
  notice_reference.innerHTML = "";

  if (currentFilter === "All") {
    jobs_to_print = list_of_jobs;
  } else if (currentFilter === "Interview") {
    jobs_to_print = list_of_jobs.filter(
      (job) => job.applicationType === "Interview",
    );
  } else {
    jobs_to_print = list_of_jobs.filter(
      (job) => job.applicationType === "Rejected",
    );
  }

  console.log(jobs_to_print.length);
  if (jobs_to_print.length !== 0) {
    jobs_to_print.forEach((job) => {
      let job_html = `<div class="card bg-base-100 card-xs shadow-sm p-5">
          <div class="card-body flex flex-row justify-between">
            <div class="left-hand-side space-y-2">
              <h2 class="card-title text-blue-950 text-xl">
                ${job.companyName}
              </h2>
              <p class="text-neutral-500 text-base" id="">
                ${job.jobType}
              </p>
              <p class="text-neutral-500 text-sm space-x-2">
                <span>${job.place}</span> <span>•</span> <span>${job.jobType}</span>
                <span>•</span>
                <span>${job.salary}</span>
              </p>
              <div
                class="badge badge-lg badge-soft badge-primary border-b-indigo-100 text-blue-950"
              >
                ${job.applicationType}
              </div>
              <p class="text-sm text-gray-800">${job.description}</p>
              <div class="space-x-4">
                <button class="btn btn-success btn-outline">Interview</button>
                <button class="btn btn-error btn-outline">Reject</button>
              </div>
            </div>
            <button class="btn btn-circle btn-xs">
              <img src="./images/trash.png" alt="" srcset="" />
            </button>
          </div>
        </div>`;

      notice_reference.innerHTML += job_html;
    });
  } else {
    notice_reference.innerHTML = `<div class="hero bg-white min-h-90">
          <div class="hero-content text-center">
            <div class="max-w-md flex flex-col items-center space-y-2">
              <img src="./images/file.png" alt="" srcset="" class="" />
              <h1 class="text-2xl font-bold">No Jobs Available</h1>
              <p class="">Check back soon for new opportunities</p>
            </div>
          </div>
        </div>`;
  }
}

renderJobs();
