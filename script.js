const gradePoints = {
  "A++": 10,
  "A+": 9,
  "A": 8.5,
  "B+": 8,
  "B": 7.5,
  "C+": 7,
  "C": 6.5,
  "D+": 6,
  "D": 5.5,
  "E+": 5,
  "E": 4,
  "F": 0
};

const semesters = {
  1: [
    ["Engineering Mathematics-I", 4],
    ["Engineering Chemistry", 4],
    ["Human Values", 2],
    ["Programming for Problem Solving", 2],
    ["Basic Civil Engineering", 2],
    ["Engineering Chemistry Lab", 1],
    ["Human Values Activities", 1],
    ["Computer Programming Lab", 1.5],
    ["Basic Civil Engineering Lab", 1],
    ["Computer Aided Engineering Graphics", 1.5],
    ["DECA", 0.5]
  ],
  2: [
    ["Engineering Mathematics-II", 4],
    ["Engineering Physics", 4],
    ["Communication Skills", 2],
    ["Basic Mechanical Engineering", 2],
    ["Basic Electrical Engineering", 2],
    ["Engineering Physics Lab", 1],
    ["Language Lab", 1],
    ["Manufacturing Practices Workshop", 1.5],
    ["Basic Electrical Engineering Lab", 1],
    ["Computer Aided Machine Drawing", 1.5],
    ["DECA", 0.5]
  ],
  3: [
    ["Advanced Engineering Mathematics", 3],
    ["Managerial Economics & Financial Accounting", 2],
    ["Digital Electronics", 3],
    ["Data Structures and Algorithms", 3],
    ["Object Oriented Programming", 3],
    ["Software Engineering", 3],
    ["Data Structures and Algorithms Lab", 1.5],
    ["Object Oriented Programming Lab", 1.5],
    ["Software Engineering Lab", 1.5],
    ["Digital Electronics Lab", 1.5],
    ["Industrial Training", 1],
    ["Social Outreach", 0.5]
  ],
  4: [
    ["Discrete Mathematics Structure", 3],
    ["Technical Communication", 2],
    ["Microprocessor & Interfaces", 3],
    ["Database Management System", 3],
    ["Theory of Computation", 3],
    ["Data Communication and Networks", 3],
    ["Microprocessor Lab", 1],
    ["DBMS Lab", 1.5],
    ["Network Programming Lab", 1.5],
    ["Linux Shell Programming Lab", 1],
    ["Java Lab", 1],
    ["Social Outreach", 0.5]
  ],
  5: [
    ["Information Theory & Coding", 2],
    ["Compiler Design", 3],
    ["Operating System", 3],
    ["Computer Graphics & Multimedia", 3],
    ["Analysis of Algorithms", 3],
    ["Human-Computer Interaction", 2],
    ["CGM Lab", 1],
    ["Compiler Lab", 1],
    ["AOA Lab", 1],
    ["Advance Java Lab", 1],
    ["Industrial Training", 2.5],
    ["Social Outreach", 0.5]
  ],
  6: [
    ["Digital Image Processing", 2],
    ["Machine Learning", 3],
    ["Information Security Systems", 2],
    ["Computer Architecture", 3],
    ["Artificial Intelligence", 2],
    ["Cloud Computing", 3],
    ["Distributed Systems", 2],
    ["DIP Lab", 1.5],
    ["ML Lab", 1.5],
    ["Python Lab", 1.5],
    ["Mobile App Dev Lab", 1.5],
    ["Social Outreach", 0.5]
  ],
  7: [
    ["Environmental Engg & Disaster Mgmt", 3],
    ["Internet of Things", 3],
    ["IoT Lab", 2],
    ["Cyber Security Lab", 2],
    ["Industrial Training", 2.5],
    ["Seminar", 2],
    ["Social Outreach", 0.5]
  ],
  8: [
    ["Big Data Analytics", 3],
    ["Big Data Lab", 2],
    ["Software Testing Lab", 1],
    ["Project", 7],
    ["Social Outreach", 0.5],
    ["Disaster Management", 3]
  ]
};

function loadSubjects() {
  const sem = document.getElementById("semester").value;
  const form = document.getElementById("subjectForm");
  form.innerHTML = "";

  if (!sem || !semesters[sem]) return;

  semesters[sem].forEach((subject, index) => {
    const div = document.createElement("div");
    div.className = "subject";
    const label = document.createElement("label");
    label.innerText = `${subject[0]} (${subject[1]} credits)`;
    const select = document.createElement("select");
    select.name = "grade";
    select.dataset.credit = subject[1];
    Object.keys(gradePoints).forEach(grade => {
      const option = document.createElement("option");
      option.value = grade;
      option.innerText = grade;
      select.appendChild(option);
    });
    div.appendChild(label);
    div.appendChild(select);
    form.appendChild(div);
  });
}

function calculateSGPA() {
  const selects = document.querySelectorAll("select[name='grade']");
  let totalCredits = 0;
  let weightedGradePoints = 0;

  selects.forEach(select => {
    const grade = select.value;
    const credit = parseFloat(select.dataset.credit);
    totalCredits += credit;
    weightedGradePoints += gradePoints[grade] * credit;
  });

  const sgpa = (weightedGradePoints / totalCredits).toFixed(2);
  document.getElementById("result").innerText = `Your SGPA is: ${sgpa}`;
}

