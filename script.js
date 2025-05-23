// Data: Branches, semesters, subjects & credits
const branchData = {
  ECE: {
    1: [
      { name: "Mathematics-I", credit: 4 },
      { name: "Physics", credit: 3 },
      { name: "Basics of Electronics", credit: 4 },
      { name: "Engineering Drawing", credit: 2 },
      { name: "Computer Programming", credit: 3 },
      { name: "Workshop", credit: 2 }
    ],
    2: [
      { name: "Mathematics-II", credit: 4 },
      { name: "Basic Electrical Engineering", credit: 3 },
      { name: "Digital Electronics", credit: 4 },
      { name: "Environmental Science", credit: 2 },
      { name: "Data Structures", credit: 3 },
      { name: "Communication Skills", credit: 2 }
    ],
    // Add more semesters as needed
  },
  CSE: {
    1: [
      { name: "Mathematics-I", credit: 4 },
      { name: "Physics", credit: 3 },
      { name: "Basic Electronics", credit: 3 },
      { name: "Programming in C", credit: 4 },
      { name: "Engineering Graphics", credit: 2 },
      { name: "Workshop", credit: 2 }
    ],
    2: [
      { name: "Mathematics-II", credit: 4 },
      { name: "Basic Electrical Engineering", credit: 3 },
      { name: "Data Structures", credit: 4 },
      { name: "Discrete Mathematics", credit: 3 },
      { name: "Communication Skills", credit: 2 },
      { name: "Environmental Science", credit: 2 }
    ]
    // Add more semesters as needed
  },
  IT: {
    1: [
      { name: "Mathematics-I", credit: 4 },
      { name: "Physics", credit: 3 },
      { name: "Basic Electronics", credit: 3 },
      { name: "Programming Fundamentals", credit: 4 },
      { name: "Engineering Graphics", credit: 2 },
      { name: "Workshop", credit: 2 }
    ],
    2: [
      { name: "Mathematics-II", credit: 4 },
      { name: "Basic Electrical Engineering", credit: 3 },
      { name: "Digital Logic", credit: 4 },
      { name: "Data Structures", credit: 3 },
      { name: "Communication Skills", credit: 2 },
      { name: "Environmental Science", credit: 2 }
    ]
    // Add more semesters as needed
  }
};

// Semester total credits map (same for all branches per semester)
const semesterCredits = {
  1: 18,
  2: 18,
  3: 20,
  4: 20,
  5: 22,
  6: 22,
  7: 18,
  8: 18
};

// Grade to points mapping
const gradeMap = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  F: 0
};

// UI Elements
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const resultDiv = document.getElementById("result");

const calcTypeSelect = document.getElementById("calcType");
const branchSelect = document.getElementById("branchSelect");
const semesterSelect = document.getElementById("semesterSelect");
const subjectGradesDiv = document.getElementById("subjectGrades");

const sgpaSection = document.getElementById("sgpaSection");
const cgpaSection = document.getElementById("cgpaSection");

const currentSemSelect = document.getElementById("currentSemSelect");
const cgpaInputsDiv = document.getElementById("cgpaInputs");

// Populate branch select dynamically
function populateBranches() {
  branchSelect.innerHTML = `<option value="">-- Select Branch --</option>`;
  for (const branch in branchData) {
    branchSelect.innerHTML += `<option value="${branch}">${branch}</option>`;
  }
}

// Populate semester select for SGPA
function populateSemesterSelect(branch) {
  semesterSelect.innerHTML = "";
  const semesters = Object.keys(branchData[branch]).map(Number).sort((a,b)=>a-b);
  semesters.forEach(sem => {
    semesterSelect.innerHTML += `<option value="${sem}">Semester ${sem}</option>`;
  });
}

// Populate current semester select for CGPA
function populateCurrentSemesterSelect(branch) {
  currentSemSelect.innerHTML = "";
  const semesters = Object.keys(branchData[branch]).map(Number).sort((a,b)=>a-b);
  semesters.forEach(sem => {
    currentSemSelect.innerHTML += `<option value="${sem}">Semester ${sem}</option>`;
  });
}

// Show subjects and grade input fields for SGPA
function showSubjects(branch, semester) {
  subjectGradesDiv.innerHTML = "";
  const subjects = branchData[branch][semester];
  subjects.forEach((subj, i) => {
    const div = document.createElement("div");
    div.classList.add("subject-row");
    div.innerHTML = `
      <div class="subject-name">${subj.name}</div>
      <div class="subject-credit">${subj.credit} cr</div>
      <select class="grade-select" id="grade-${i}">
        <option value="">Grade</option>
        ${Object.keys(gradeMap).map(g => `<option value="${g}">${g}</option>`).join("")}
      </select>
    `;
    subjectGradesDiv.appendChild(div);
  });
}

// Show SGPA input fields for CGPA calculation
function showCGPAInputs(branch, uptoSemester) {
  cgpaInputsDiv.innerHTML = "";
  for (let sem = 1; sem <= uptoSemester; sem++) {
    const div = document.createElement("div");
    div.classList.add("subject-row");
    div.innerHTML = `
      <label>SGPA for Semester ${sem} (out of 10): </label>
      <input type="number" min="0" max="10" step="0.01" id="cgpa-sgpa-${sem}" />
    `;
    cgpaInputsDiv.appendChild(div);
  }
}

// Navigation functions
function goToStep2() {
  const calcType = calcTypeSelect.value;
  if (!calcType) {
    alert("Please select calculation type");
    return;
  }
  populateBranches();
  step1.style.display = "none";
  step2.style.display = "block";
  resultDiv.textContent = "";
}

function goBackToStep1() {
  step2.style.display = "none";
  step1.style.display = "block";
  resultDiv.textContent = "";
}

function goToStep3() {
  const branch = branchSelect.value;
  if (!branch) {
    alert("Please select a branch");
    return;
  }
  step2.style.display = "none";
  step3.style.display = "block";
  resultDiv.textContent = "";

  const calcType = calcTypeSelect.value;
  if (calcType === "sgpa") {
    sgpaSection.style.display = "block";
    cgpaSection.style.display = "none";
    populateSemesterSelect(branch);
    showSubjects(branch, parseInt(semesterSelect.value) || 1);
  } else if (calcType === "cgpa") {
    sgpaSection.style.display = "none";
    cgpaSection.style.display = "block";
    populateCurrentSemesterSelect(branch);
    showCGPAInputs(branch, parseInt(currentSemSelect.value) || 1);
  }
}

function goBackToStep2() {
  step3.style.display = "none";
  step2.style.display = "block";
  resultDiv.textContent = "";
}

// Update subjects on semester change (SGPA)
semesterSelect.addEventListener("change", () => {
  const branch = branchSelect.value;
  const sem = parseInt(semesterSelect.value);
  if (branch && sem) {
    showSubjects(branch, sem);
  }
});

// Update CGPA inputs on semester change
currentSemSelect.addEventListener("change", () => {
  const branch = branchSelect.value;
  const sem = parseInt(currentSemSelect.value);
  if (branch && sem) {
    showCGPAInputs(branch, sem);
  }
});

// Calculate SGPA
function calculateSGPA() {
  const branch = branchSelect.value;
  const semester = parseInt(semesterSelect.value);
  const subjects = branchData[branch][semester];
  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < subjects.length; i++) {
    const gradeSelect = document.getElementById(`grade-${i}`);
    const grade = gradeSelect.value;
    if (!grade || !(grade in gradeMap)) {
      alert(`Please select valid grade for subject "${subjects[i].name}"`);
      return;
    }
    const point = gradeMap[grade];
    totalPoints += point * subjects[i].credit;
    totalCredits += subjects[i].credit;
  }

  if (totalCredits === 0) {
    alert("Total credits are zero, cannot calculate SGPA");
    return;
  }

  const sgpa = totalPoints / totalCredits;
  resultDiv.textContent = `Your SGPA for Semester ${semester} is: ${sgpa.toFixed(2)}`;
}

// Calculate CGPA
function calculateCGPA() {
  const branch = branchSelect.value;
  const currentSem = parseInt(currentSemSelect.value);
  if (!currentSem || currentSem < 1) {
    alert("Please select valid semester");
    return;
  }
  let numerator = 0;
  let denominator = 0;

  for (let sem = 1; sem <= currentSem; sem++) {
    const sgpaInput = document.getElementById(`cgpa-sgpa-${sem}`);
    if (!sgpaInput || sgpaInput.value === "") {
      alert(`Please enter SGPA for Semester ${sem}`);
      return;
    }
    let sgpaVal = parseFloat(sgpaInput.value);
    if (isNaN(sgpaVal) || sgpaVal < 0 || sgpaVal > 10) {
      alert(`Invalid SGPA value for Semester ${sem}`);
      return;
    }
    const credits = semesterCredits[sem] || 0;
    numerator += sgpaVal * credits;
    denominator += credits;
  }

  if (denominator === 0) {
    alert("Total credits zero, cannot calculate CGPA");
    return;
  }

  const cgpa = numerator / denominator;
  resultDiv.textContent = `Your CGPA till Semester ${currentSem} is: ${cgpa.toFixed(2)}`;
}
