let total_jobs = 8;
let interviewed_jobs = 4;
let rejected_jobs = 1;


let list_of_jobs = [{}];

let reference_to_total_count = document.querySelector("#totalCount");
console.log(reference_to_total_count);
reference_to_total_count.textContent=total_jobs;



let reference_to_interview_count = document.querySelector("#interviewCount");
reference_to_interview_count.textContent = interviewed_jobs;



let reference_to_reject_count = document.querySelector("#rejectCount");
reference_to_reject_count.textContent=rejected_jobs;




