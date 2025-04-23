window.addEventListener("DOMContentLoaded", function () {
  const subjectsData = {
    CSE: {
      "1st Semester": [
        { name: "Engineering Mathematics-I", credit: 4 },
        { name: "Engineering Chemistry", credit: 4 },
        { name: "Human Values", credit: 2 },
        { name: "Programming for Problem Solving", credit: 2 },
        { name: "Basic Civil Engineering", credit: 2 },
        { name: "Engineering Chemistry Lab", credit: 1 },
        { name: "Human Values Activities", credit: 1 },
        { name: "Computer Programming Lab", credit: 1.5 },
        { name: "Basic Civil Engineering Lab", credit: 1 },
        { name: "Computer Aided Engineering Graphics", credit: 1.5 },
        { name: "DECA", credit: 0.5 },
      ],
      "2nd Semester": [
        { name: "Engineering Mathematics-II", credit: 4 },
        { name: "Engineering Physics", credit: 4 },
        { name: "Communication Skills", credit: 2 },
        { name: "Basic Mechanical Engineering", credit: 2 },
        { name: "Basic Electrical Engineering", credit: 2 },
        { name: "Engineering Physics Lab", credit: 1 },
        { name: "Language Lab", credit: 1 },
        { name: "Manufacturing Practices Workshop", credit: 1.5 },
        { name: "Basic Electrical Engineering Lab", credit: 1 },
        { name: "Computer Aided Machine Drawing", credit: 1.5 },
        { name: "DECA", credit: 0.5 },
      ],
      // ... baaki data as-is ...
    },
    ECE: {
      "1st Semester": "same",
      "2nd Semester": "same",
      // ... baaki data ...
    },
    EE: {
      "1st Semester": "same",
      "2nd Semester": "same",
    },
    ME: {
      "1st Semester": "same",
      "2nd Semester": "same",
    },
    CE: {
      "1st Semester": "same",
      "2nd Semester": "same",
    },
    IT: {
      "1st Semester": "same",
      "2nd Semester": "same",
    },
  };

  const gradePoints = {
    "A++": 10,
    "A+": 9,
    A: 8.5,
    "B+": 8,
    B: 7.5,
    "C+": 7,
    C: 6.5,
    "D+": 6,
    D: 5.5,
    "E+": 5,
    E: 4,
    F: 0,
  };

  const branchSelect = document.getElementById("branch");
  const semesterSelect = document.getElementById("semester");
  const subjectsDiv = document.getElementById("subjects");

  const gradeOptions = `<option value="">-- Select Grade --</option>` +
    Object.entries(gradePoints)
      .map(([grade, point]) => `<option value="${point}">${grade}</option>`)
      .join("");

  branchSelect.addEventListener("change", function () {
    semesterSelect.innerHTML = "<option value=''>-- Select Semester --</option>";
    const selectedBranch = branchSelect.value;

    if (subjectsData[selectedBranch]) {
      for (const sem in subjectsData[selectedBranch]) {
        const option = document.createElement("option");
        option.value = sem;
        option.textContent = sem;
        semesterSelect.appendChild(option);
      }
    }
  });

  semesterSelect.addEventListener("change", function () {
    const branch = branchSelect.value;
    const semester = semesterSelect.value;
    const subjects = subjectsData[branch][semester];

    subjectsDiv.innerHTML = "";

    if (subjects === "same") {
      subjectsDiv.innerHTML =
        "<p>Select same subjects and credits as 1st/2nd CSE semester</p>";
      return;
    }

    const fragment = document.createDocumentFragment();
    subjects.forEach((subj) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <label>${subj.name} (${subj.credit} credits)</label>
        <select class="grade-select" data-credit="${subj.credit}">
          ${gradeOptions}
        </select>
      `;
      fragment.appendChild(div);
    });
    subjectsDiv.appendChild(fragment);
  });

  document.getElementById("calculateBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const gradeSelects = document.querySelectorAll(".grade-select");
    let totalCredits = 0;
    let totalPoints = 0;
    let allSelected = true;

    gradeSelects.forEach((select) => {
      const credit = parseFloat(select.dataset.credit);
      const point = parseFloat(select.value);

      if (isNaN(point)) {
        allSelected = false;
      }

      totalCredits += credit;
      totalPoints += credit * point;
    });

    if (!allSelected) {
      document.getElementById("result").textContent =
        "Please select all grades before calculating.";
      return;
    }

    const sgpa = totalPoints / totalCredits;
    document.getElementById("result").textContent =
      "Your SGPA is: " + sgpa.toFixed(2);
  });
});




