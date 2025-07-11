const branchData = {
    CSE : {
  1: [
    { name: "Engineering Mathematics-I", credits: 4 },
    { name: "Engineering Chemistry", credits: 4 },
    { name: "Human Values", credits: 2 },
    { name: "Programming for Problem Solving", credits: 2 },
    { name: "Basic Civil Engineering", credits: 2 },
    { name: "Engineering Chemistry Lab", credits: 1 },
    { name: "Human Values Activities", credits: 1 },
    { name: "Computer Programming Lab", credits: 1.5 },
    { name: "Basic Civil Engineering Lab", credits: 1 },
    { name: "Computer Aided Engineering Graphics", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  2: [
    { name: "Engineering Mathematics-II", credits: 4 },
    { name: "Engineering Physics", credits: 4 },
    { name: "Communication Skills", credits: 2 },
    { name: "Basic Mechanical Engineering", credits: 2 },
    { name: "Basic Electrical Engineering", credits: 2 },
    { name: "Engineering Physics Lab", credits: 1 },
    { name: "Language Lab", credits: 1 },
    { name: "Manufacturing Practices Workshop", credits: 1.5 },
    { name: "Basic Electrical Engineering Lab", credits: 1 },
    { name: "Computer Aided Machine Drawing", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  3: [
    { name: "Advanced Engineering Mathematics", credits: 3 },
    { name: "Managerial Economics & Financial Accounting", credits: 2 },
    { name: "Digital Electronics", credits: 3 },
    { name: "Data Structures and Algorithms", credits: 3 },
    { name: "Object Oriented Programming", credits: 3 },
    { name: "Software Engineering", credits: 3 },
    { name: "Data Structures and Algorithms Lab", credits: 1.5 },
    { name: "Object Oriented Programming Lab", credits: 1.5 },
    { name: "Software Engineering Lab", credits: 1.5 },
    { name: "Digital Electronics Lab", credits: 1.5 },
    { name: "Industrial Training", credits: 1 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  4: [
    { name: "Discrete Mathematics Structure", credits: 3 },
    { name: "Technical Communication", credits: 2 },
    { name: "Microprocessor & Interfaces", credits: 3 },
    { name: "Database Management System", credits: 3 },
    { name: "Theory of Computation", credits: 3 },
    { name: "Data Communication and Computer Networks", credits: 3 },
    { name: "Microprocessor & Interfaces Lab", credits: 1 },
    { name: "Database Management System Lab", credits: 1.5 },
    { name: "Network Programming Lab", credits: 1.5 },
    { name: "Linux Shell Programming Lab", credits: 1 },
    { name: "Java Lab", credits: 1 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  5: [
    { name: "Information Theory & Coding", credits: 2 },
    { name: "Compiler Design", credits: 3 },
    { name: "Operating System", credits: 3 },
    { name: "Computer Graphics & Multimedia", credits: 3 },
    { name: "Analysis of Algorithms", credits: 3 },
    { name: "Human-Computer Interaction", credits: 2 },
    { name: "Computer Graphics & Multimedia Lab", credits: 1 },
    { name: "Compiler Design Lab", credits: 1 },
    { name: "Analysis of Algorithms Lab", credits: 1 },
    { name: "Advance Java Lab", credits: 1 },
    { name: "Industrial Training", credits: 2.5 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  6: [
    { name: "Digital Image Processing", credits: 2 },
    { name: "Machine Learning", credits: 3 },
    { name: "Information Security Systems", credits: 2 },
    { name: "Computer Architecture and Organization", credits: 3 },
    { name: "Artificial Intelligence", credits: 2 },
    { name: "Cloud Computing", credits: 3 },
    { name: "Distributed Systems", credits: 2 },
    { name: "Digital Image Processing Lab", credits: 1.5 },
    { name: "Machine Learning Lab", credits: 1.5 },
    { name: "Python Lab", credits: 1.5 },
    { name: "Mobile App Development Lab", credits: 1.5 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  7: [
    { name: "Environmental Engineering & Disaster Management", credits: 3 },
    { name: "Internet Of Things", credits: 3 },
    { name: "Internet Of Things Lab", credits: 2 },
    { name: "Cyber Security Lab", credits: 2 },
    { name: "Industrial Training", credits: 2.5 },
    { name: "Seminar", credits: 2 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  8: [
    { name: "Big Data Analytics", credits: 3 },
    { name: "Big Data Analytics Lab", credits: 2 },
    { name: "Software Testing & Validation Lab", credits: 1 },
    { name: "Project", credits: 7 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 },
    { name: "Disaster Management", credits: 3 }
  ]
},
    CS_AI: {
    1: [
    { name: "Engineering Mathematics-I", credits: 4 },
    { name: "Engineering Chemistry", credits: 4 },
    { name: "Human Values", credits: 2 },
    { name: "Programming for Problem Solving", credits: 2 },
    { name: "Basic Civil Engineering", credits: 2 },
    { name: "Engineering Chemistry Lab", credits: 1 },
    { name: "Human Values Activities", credits: 1 },
    { name: "Computer Programming Lab", credits: 1.5 },
    { name: "Basic Civil Engineering Lab", credits: 1 },
    { name: "Computer Aided Engineering Graphics", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  2: [
    { name: "Engineering Mathematics-II", credits: 4 },
    { name: "Engineering Physics", credits: 4 },
    { name: "Communication Skills", credits: 2 },
    { name: "Basic Mechanical Engineering", credits: 2 },
    { name: "Basic Electrical Engineering", credits: 2 },
    { name: "Engineering Physics Lab", credits: 1 },
    { name: "Language Lab", credits: 1 },
    { name: "Manufacturing Practices Workshop", credits: 1.5 },
    { name: "Basic Electrical Engineering Lab", credits: 1 },
    { name: "Computer Aided Machine Drawing", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  3: [
    { "name": "Advanced Engineering Mathematics", "credits": 3 },
    { "name": "Technical Communication / Managerial Economics and Financial Accounting", "credits": 2 },
    { "name": "Digital Electronics", "credits": 3 },
    { "name": "Data Structures and Algorithms", "credits": 3 },
    { "name": "Object Oriented Programming", "credits": 3 },
    { "name": "Software Engineering", "credits": 3 },
    { "name": "Data Structures and Algorithms Lab", "credits": 1.5 },
    { "name": "Object Oriented Programming Lab", "credits": 1.5 },
    { "name": "Software Engineering Lab", "credits": 1.5 },
    { "name": "Digital Electronics Lab", "credits": 1.5 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  4: [
    { "name": "Discrete Mathematics Structure", "credits": 3 },
    { "name": "Managerial Economics and Financial Accounting / Technical Communication", "credits": 2 },
    { "name": "Microprocessor & Interfaces", "credits": 3 },
    { "name": "Database Management System", "credits": 3 },
    { "name": "Theory of Computation", "credits": 3 },
    { "name": "Data Communication and Computer Networks", "credits": 3 },
    { "name": "Microprocessor & Interfaces Lab", "credits": 1 },
    { "name": "Database Management System Lab", "credits": 1.5 },
    { "name": "Network Programming Lab", "credits": 1.5 },
    { "name": "Linux Shell Programming Lab", "credits": 1 },
    { "name": "Java Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  5: [
    { "name": "Data Mining - Concepts and Techniques", "credits": 2 },
    { "name": "Compiler Design", "credits": 3 },
    { "name": "Operating System", "credits": 3 },
    { "name": "Computer Graphics & Multimedia", "credits": 3 },
    { "name": "Analysis of Algorithm", "credits": 3 },
    { "name": "Professional Elective - I", "credits": 2 },
    { "name": "Computer Graphics & Multimedia Lab", "credits": 1 },
    { "name": "Compiler Design Lab", "credits": 1 },
    { "name": "Analysis of Algorithm Lab", "credits": 1 },
    { "name": "Advanced Java Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  6: [
    { "name": "Digital Image Processing", "credits": 2 },
    { "name": "Machine Learning", "credits": 3 },
    { "name": "Information Security Systems", "credits": 2 },
    { "name": "Computer Architecture and Organization", "credits": 3 },
    { "name": "Principles of Artificial Intelligence", "credits": 2 },
    { "name": "Cloud Computing", "credits": 3 },
    { "name": "Professional Elective - II", "credits": 2 },
    { "name": "Digital Image Processing Lab", "credits": 1.5 },
    { "name": "Machine Learning Lab", "credits": 1.5 },
    { "name": "Python Lab", "credits": 1.5 },
    { "name": "Mobile Application Development Lab", "credits": 1.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  7: [
    { "name": "Deep Learning and Its Applications", "credits": 3 },
    { "name": "Open Elective - I", "credits": 3 },
    { "name": "Deep Learning and Its Application Lab", "credits": 2 },
    { "name": "Computer Vision Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  8: [
    { "name": "Big Data Analytics", "credits": 3 },
    { "name": "Open Elective - II", "credits": 3 },
    { "name": "Big Data Analytics Lab", "credits": 1 },
    { "name": "Robot Programming Lab", "credits": 1 },
    { "name": "Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ]
},
ECE : {
    1: [
      { "name": "Engineering Mathematics-I", "credits": 4 },
      { "name": "Engineering Physics", "credits": 4 },
      { "name": "Communication Skills", "credits": 2 },
      { "name": "Programming for Problem Solving", "credits": 2 },
      { "name": "Basic Mechanical Engineering", "credits": 2 },
      { "name": "Basic Electrical Engineering", "credits": 2 },
      { "name": "Engineering Physics Lab", "credits": 1 },
      { "name": "Language Lab", "credits": 1 },
      { "name": "Computer Programming Lab", "credits": 1.5 },
      { "name": "Basic Electrical Engineering Lab", "credits": 1 },
      { "name": "Computer Aided Engineering Graphics", "credits": 1.5 }
    ],
    2: [
      { "name": "Engineering Mathematics-II", "credits": 4 },
      { "name": "Engineering Chemistry", "credits": 4 },
      { "name": "Human Values", "credits": 2 },
      { "name": "Environmental Engineering & Disaster Management", "credits": 2 },
      { "name": "Basic Civil Engineering", "credits": 2 },
      { "name": "Engineering Chemistry Lab", "credits": 1 },
      { "name": "Human Values Activities and Sports", "credits": 1 },
      { "name": "Manufacturing Practices Workshop", "credits": 1.5 },
      { "name": "Basic Civil Engineering Lab", "credits": 1 },
      { "name": "Computer Aided Machine Drawing", "credits": 1.5 }
    ],
   3: [
    { "name": "Advanced Engineering Mathematics-I", "credits": 3 },
    { "name": "Electronic Devices", "credits": 3 },
    { "name": "Digital System Design", "credits": 3 },
    { "name": "Signals and Systems", "credits": 3 },
    { "name": "Network Theory", "credits": 3 },
    { "name": "Electronic Devices Lab", "credits": 1 },
    { "name": "Digital System Design Lab", "credits": 1 },
    { "name": "Computer Programming Lab", "credits": 1 },
    { "name": "Signals and Systems Lab / Simulation Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  4: [
    { "name": "Advanced Engineering Mathematics-II", "credits": 3 },
    { "name": "Managerial Economics and Financial Accounting / Technical Communication", "credits": 2 },
    { "name": "Analog Circuits", "credits": 3 },
    { "name": "Microcontrollers", "credits": 3 },
    { "name": "Electronics Measurement & Instrumentation", "credits": 3 },
    { "name": "Analog and Digital Communication", "credits": 3 },
    { "name": "Analog and Digital Communication Lab", "credits": 1.5 },
    { "name": "Analog Circuits Lab", "credits": 1.5 },
    { "name": "Microcontrollers Lab", "credits": 1.5 },
    { "name": "Electronics Measurement & Instrumentation Lab", "credits": 1.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  5: [
    { "name": "Computer Architecture", "credits": 2 },
    { "name": "Electromagnetic Waves", "credits": 3 },
    { "name": "Control System", "credits": 3 },
    { "name": "Digital Signal Processing", "credits": 3 },
    { "name": "Microwave Theory & Techniques", "credits": 3 },
    { "name": "Professional Elective I", "credits": 2 },
    { "name": "RF Simulation Lab", "credits": 1.5 },
    { "name": "Digital Signal Processing Lab", "credits": 1.5 },
    { "name": "Microwave Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  6: [
    { "name": "Power Electronics", "credits": 2 },
    { "name": "Computer Network", "credits": 3 },
    { "name": "Fiber Optics Communications", "credits": 3 },
    { "name": "Antennas and Propagation", "credits": 3 },
    { "name": "5G Communication Technology", "credits": 3 },
    { "name": "Professional Elective II", "credits": 3 },
    { "name": "Computer Network Lab", "credits": 2 },
    { "name": "Antenna and Wave Propagation Lab", "credits": 1 },
    { "name": "Electronics Design Lab", "credits": 2 },
    { "name": "Power Electronics Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  7: [
    { "name": "Program Elective III", "credits": 3 },
    { "name": "Open Elective I", "credits": 3 },
    { "name": "VLSI Design Lab", "credits": 2 },
    { "name": "5G Communication Lab", "credits": 1 },
    { "name": "Optical Communication Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  8: [
    { "name": "Program Elective IV", "credits": 3 },
    { "name": "Open Elective II", "credits": 3 },
    { "name": "Internet of Things (IOT) Lab", "credits": 1 },
    { "name": "Skill Development Lab", "credits": 1 },
    { "name": "Major Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
    ]
  },
    EE: {
     1: [
      { "name": "Engineering Mathematics-I", "credits": 4 },
      { "name": "Engineering Physics", "credits": 4 },
      { "name": "Communication Skills", "credits": 2 },
      { "name": "Programming for Problem Solving", "credits": 2 },
      { "name": "Basic Mechanical Engineering", "credits": 2 },
      { "name": "Basic Electrical Engineering", "credits": 2 },
      { "name": "Engineering Physics Lab", "credits": 1 },
      { "name": "Language Lab", "credits": 1 },
      { "name": "Computer Programming Lab", "credits": 1.5 },
      { "name": "Basic Electrical Engineering Lab", "credits": 1 },
      { "name": "Computer Aided Engineering Graphics", "credits": 1.5 }
    ],
    2: [
      { "name": "Engineering Mathematics-II", "credits": 4 },
      { "name": "Engineering Chemistry", "credits": 4 },
      { "name": "Human Values", "credits": 2 },
      { "name": "Environmental Engineering & Disaster Management", "credits": 2 },
      { "name": "Basic Civil Engineering", "credits": 2 },
      { "name": "Engineering Chemistry Lab", "credits": 1 },
      { "name": "Human Values Activities and Sports", "credits": 1 },
      { "name": "Manufacturing Practices Workshop", "credits": 1.5 },
      { "name": "Basic Civil Engineering Lab", "credits": 1 },
      { "name": "Computer Aided Machine Drawing", "credits": 1.5 }
    ],
  3: [
    { "name": "Advance Mathematics", "credits": 3 },
    { "name": "Technical Communication / Managerial Economics and Financial Accounting", "credits": 2 },
    { "name": "Power Generation Process", "credits": 2 },
    { "name": "Electrical Circuit Analysis", "credits": 3 },
    { "name": "Analog Electronics", "credits": 3 },
    { "name": "Electrical Machine - I", "credits": 3 },
    { "name": "Electromagnetic Field", "credits": 2 },
    { "name": "Analog Electronics Lab", "credits": 1 },
    { "name": "Electrical Machine-I Lab", "credits": 2 },
    { "name": "Electrical Circuit Design Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 4: [
    { "name": "Biology", "credits": 2 },
    { "name": "Technical Communication / Managerial Economics and Financial Accounting", "credits": 2 },
    { "name": "Electronic Measurement & Instrumentation", "credits": 2 },
    { "name": "Electrical Machine - II", "credits": 3 },
    { "name": "Power Electronics", "credits": 3 },
    { "name": "Signals & Systems", "credits": 3 },
    { "name": "Digital Electronics", "credits": 2 },
    { "name": "Electrical Machine - II Lab", "credits": 2 },
    { "name": "Power Electronics Lab", "credits": 2 },
    { "name": "Digital Electronics Lab", "credits": 1 },
    { "name": "Measurement Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 5: [
    { "name": "Electrical Materials", "credits": 2 },
    { "name": "Power System - I", "credits": 3 },
    { "name": "Control System", "credits": 3 },
    { "name": "Microprocessor", "credits": 3 },
    { "name": "Electrical Machine Design", "credits": 3 },
    { "name": "Professional Elective - I", "credits": 2 },
    { "name": "Power System - I Lab", "credits": 1 },
    { "name": "Control System Lab", "credits": 1 },
    { "name": "Microprocessor Lab", "credits": 1 },
    { "name": "System Programming Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 6: [
    { "name": "Computer Architecture", "credits": 2 },
    { "name": "Power System - II", "credits": 3 },
    { "name": "Power System Protection", "credits": 3 },
    { "name": "Electrical Energy Conversion and Auditing", "credits": 3 },
    { "name": "Electric Drives", "credits": 3 },
    { "name": "Professional Elective - II", "credits": 3 },
    { "name": "Power System - II Lab", "credits": 2 },
    { "name": "Electric Drives Lab", "credits": 2 },
    { "name": "Power System Protection Lab", "credits": 1 },
    { "name": "Modeling and Simulation Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 7: [
    { "name": "Professional Elective - III", "credits": 3 },
    { "name": "Open Elective - I", "credits": 3 },
    { "name": "Embedded Systems Lab", "credits": 2 },
    { "name": "Advance Control System Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 8: [
    { "name": "Professional Elective - IV", "credits": 3 },
    { "name": "Open Elective - II", "credits": 3 },
    { "name": "Energy Systems Lab", "credits": 2 },
    { "name": "Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ]
},
AIDS: {
1: [
    { name: "Engineering Mathematics-I", credits: 4 },
    { name: "Engineering Chemistry", credits: 4 },
    { name: "Human Values", credits: 2 },
    { name: "Programming for Problem Solving", credits: 2 },
    { name: "Basic Civil Engineering", credits: 2 },
    { name: "Engineering Chemistry Lab", credits: 1 },
    { name: "Human Values Activities", credits: 1 },
    { name: "Computer Programming Lab", credits: 1.5 },
    { name: "Basic Civil Engineering Lab", credits: 1 },
    { name: "Computer Aided Engineering Graphics", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  2: [
    { name: "Engineering Mathematics-II", credits: 4 },
    { name: "Engineering Physics", credits: 4 },
    { name: "Communication Skills", credits: 2 },
    { name: "Basic Mechanical Engineering", credits: 2 },
    { name: "Basic Electrical Engineering", credits: 2 },
    { name: "Engineering Physics Lab", credits: 1 },
    { name: "Language Lab", credits: 1 },
    { name: "Manufacturing Practices Workshop", credits: 1.5 },
    { name: "Basic Electrical Engineering Lab", credits: 1 },
    { name: "Computer Aided Machine Drawing", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  3: [
    { "name": "Advanced Engineering Mathematics", "credits": 3 },
    { "name": "Technical Communication / Managerial Economics and Financial Accounting", "credits": 2 },
    { "name": "Digital Electronics", "credits": 3 },
    { "name": "Data Structures and Algorithms", "credits": 3 },
    { "name": "Object Oriented Programming", "credits": 3 },
    { "name": "Software Engineering", "credits": 3 },
    { "name": "Data Structures and Algorithms Lab", "credits": 1.5 },
    { "name": "Object Oriented Programming Lab", "credits": 1.5 },
    { "name": "Software Engineering Lab", "credits": 1.5 },
    { "name": "Digital Electronics Lab", "credits": 1.5 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 4: [
    { "name": "Discrete Mathematics Structure", "credits": 3 },
    { "name": "Managerial Economics and Financial Accounting / Technical Communication", "credits": 2 },
    { "name": "Microprocessor & Interfaces", "credits": 3 },
    { "name": "Database Management System", "credits": 3 },
    { "name": "Theory of Computation", "credits": 3 },
    { "name": "Data Communication and Computer Networks", "credits": 3 },
    { "name": "Microprocessor & Interfaces Lab", "credits": 1 },
    { "name": "Database Management System Lab", "credits": 1.5 },
    { "name": "Network Programming Lab", "credits": 1.5 },
    { "name": "Linux Shell Programming Lab", "credits": 1 },
    { "name": "Java Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 5: [
    { "name": "Data Mining-Concepts and Techniques", "credits": 2 },
    { "name": "Compiler Design", "credits": 3 },
    { "name": "Operating System", "credits": 3 },
    { "name": "Computer Graphics & Multimedia", "credits": 3 },
    { "name": "Analysis of Algorithm", "credits": 3 },
    { "name": "Professional Elective - I", "credits": 2 },
    { "name": "Computer Graphics & Multimedia Lab", "credits": 1 },
    { "name": "Compiler Design Lab", "credits": 1 },
    { "name": "Analysis of Algorithm Lab", "credits": 1 },
    { "name": "Advanced Java Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 6: [
    { "name": "Digital Image Processing", "credits": 2 },
    { "name": "Machine Learning", "credits": 3 },
    { "name": "Information Security Systems", "credits": 2 },
    { "name": "Computer Architecture and Organization", "credits": 3 },
    { "name": "Principles of Artificial Intelligence", "credits": 2 },
    { "name": "Cloud Computing", "credits": 3 },
    { "name": "Professional Elective - II", "credits": 2 },
    { "name": "Digital Image Processing Lab", "credits": 1.5 },
    { "name": "Machine Learning Lab", "credits": 1.5 },
    { "name": "Python Lab", "credits": 1.5 },
    { "name": "Mobile Application Development Lab", "credits": 1.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 7: [
    { "name": "Big Data Analytics", "credits": 3 },
    { "name": "Open Elective - I", "credits": 3 },
    { "name": "Big Data Analytics Lab", "credits": 2 },
    { "name": "R Programming Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
8: [
    { "name": "Deep Learning and Its Applications", "credits": 3 },
    { "name": "Open Elective - II", "credits": 3 },
    { "name": "Deep Learning and Its Application Lab", "credits": 1 },
    { "name": "Robot Programming Lab", "credits": 1 },
    { "name": "Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ]
},
  IT : {
 1: [
    { name: "Engineering Mathematics-I", credits: 4 },
    { name: "Engineering Chemistry", credits: 4 },
    { name: "Human Values", credits: 2 },
    { name: "Programming for Problem Solving", credits: 2 },
    { name: "Basic Civil Engineering", credits: 2 },
    { name: "Engineering Chemistry Lab", credits: 1 },
    { name: "Human Values Activities", credits: 1 },
    { name: "Computer Programming Lab", credits: 1.5 },
    { name: "Basic Civil Engineering Lab", credits: 1 },
    { name: "Computer Aided Engineering Graphics", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  2: [
    { name: "Engineering Mathematics-II", credits: 4 },
    { name: "Engineering Physics", credits: 4 },
    { name: "Communication Skills", credits: 2 },
    { name: "Basic Mechanical Engineering", credits: 2 },
    { name: "Basic Electrical Engineering", credits: 2 },
    { name: "Engineering Physics Lab", credits: 1 },
    { name: "Language Lab", credits: 1 },
    { name: "Manufacturing Practices Workshop", credits: 1.5 },
    { name: "Basic Electrical Engineering Lab", credits: 1 },
    { name: "Computer Aided Machine Drawing", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
],
  3: [
    { "name": "Advanced Engineering Mathematics", "credits": 3 },
    { "name": "Technical Communication / MEFA", "credits": 2 },
    { "name": "Digital Electronics", "credits": 3 },
    { "name": "Data Structures and Algorithms", "credits": 3 },
    { "name": "Object Oriented Programming", "credits": 3 },
    { "name": "Software Engineering", "credits": 3 },
    { "name": "Data Structures and Algorithms Lab", "credits": 1.5 },
    { "name": "Object Oriented Programming Lab", "credits": 1.5 },
    { "name": "Software Engineering Lab", "credits": 1.5 },
    { "name": "Digital Electronics Lab", "credits": 1.5 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  4: [
    { "name": "Discrete Mathematics Structure", "credits": 3 },
    { "name": "Managerial Economics / Technical Communication", "credits": 2 },
    { "name": "Principle of Communication", "credits": 3 },
    { "name": "Database Management System", "credits": 3 },
    { "name": "Theory of Computation", "credits": 3 },
    { "name": "Data Communication and Computer Networks", "credits": 3 },
    { "name": "Linux Shell Programming Lab", "credits": 1 },
    { "name": "Database Management System Lab", "credits": 1.5 },
    { "name": "Network Programming Lab", "credits": 1.5 },
    { "name": "Java Lab", "credits": 1 },
    { "name": "Web Technology Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  5: [
    { "name": "Microprocessor and Interfaces", "credits": 2 },
    { "name": "Compiler Design", "credits": 3 },
    { "name": "Operating System", "credits": 3 },
    { "name": "Computer Graphics & Multimedia", "credits": 3 },
    { "name": "Analysis of Algorithms", "credits": 3 },
    { "name": "Professional Elective – I", "credits": 2 },
    { "name": "Computer Graphics & Multimedia Lab", "credits": 1 },
    { "name": "Compiler Design Lab", "credits": 1 },
    { "name": "Analysis of Algorithms Lab", "credits": 1 },
    { "name": "Advanced Java Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  6: [
    { "name": "Digital Image Processing", "credits": 2 },
    { "name": "Machine Learning", "credits": 3 },
    { "name": "Information Security System", "credits": 2 },
    { "name": "Computer Architecture and Organization", "credits": 3 },
    { "name": "Artificial Intelligence", "credits": 2 },
    { "name": "Distributed System", "credits": 3 },
    { "name": "Professional Elective – II", "credits": 2 },
    { "name": "Digital Image Processing Lab", "credits": 1 },
    { "name": "Machine Learning Lab", "credits": 1.5 },
    { "name": "Python Lab", "credits": 1.5 },
    { "name": "Mobile Application Development Lab", "credits": 1 },
    { "name": "5G Communication Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

7: [
    { "name": "Big Data Analytics", "credits": 3 },
    { "name": "Open Elective – I", "credits": 3 },
    { "name": "Big Data Analytics Lab", "credits": 2 },
    { "name": "Cyber Security Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  8: [
    { "name": "Internet of Things", "credits": 3 },
    { "name": "Open Elective – II", "credits": 3 },
    { "name": "Internet of Things Lab", "credits": 1 },
    { "name": "Software Testing and Validation Lab", "credits": 1 },
    { "name": "Major Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
   ]
 },
    CIVIL: {
  1: [
      { "name": "Engineering Mathematics-I", "credits": 4 },
      { "name": "Engineering Physics", "credits": 4 },
      { "name": "Communication Skills", "credits": 2 },
      { "name": "Programming for Problem Solving", "credits": 2 },
      { "name": "Basic Mechanical Engineering", "credits": 2 },
      { "name": "Basic Electrical Engineering", "credits": 2 },
      { "name": "Engineering Physics Lab", "credits": 1 },
      { "name": "Language Lab", "credits": 1 },
      { "name": "Computer Programming Lab", "credits": 1.5 },
      { "name": "Basic Electrical Engineering Lab", "credits": 1 },
      { "name": "Computer Aided Engineering Graphics", "credits": 1.5 }
    ],
    2: [
      { "name": "Engineering Mathematics-II", "credits": 4 },
      { "name": "Engineering Chemistry", "credits": 4 },
      { "name": "Human Values", "credits": 2 },
      { "name": "Environmental Engineering & Disaster Management", "credits": 2 },
      { "name": "Basic Civil Engineering", "credits": 2 },
      { "name": "Engineering Chemistry Lab", "credits": 1 },
      { "name": "Human Values Activities and Sports", "credits": 1 },
      { "name": "Manufacturing Practices Workshop", "credits": 1.5 },
      { "name": "Basic Civil Engineering Lab", "credits": 1 },
      { "name": "Computer Aided Machine Drawing", "credits": 1.5 }
    ],
 3: [
    { "name": "Advance Engineering Mathematics - I", "credits": 3 },
    { "name": "Technical Communication / Managerial Economics & Financial Accounting", "credits": 2 },
    { "name": "Engineering Mechanics", "credits": 2 },
    { "name": "Surveying", "credits": 3 },
    { "name": "Fluid Mechanics", "credits": 2 },
    { "name": "Building Materials and Construction", "credits": 3 },
    { "name": "Engineering Geology", "credits": 2 },
    { "name": "Surveying Lab", "credits": 1.5 },
    { "name": "Fluid Mechanics Lab", "credits": 1 },
    { "name": "Computer Aided Civil Engineering Drawing", "credits": 1.5 },
    { "name": "Civil Engineering Materials Lab", "credits": 1 },
    { "name": "Geology Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 4: [
    { "name": "Advance Engineering Mathematics - II", "credits": 2 },
    { "name": "Managerial Economics & Financial Accounting / Technical Communication", "credits": 2 },
    { "name": "Basic Electronics for Civil Engineering Applications", "credits": 2 },
    { "name": "Strength of Materials", "credits": 3 },
    { "name": "Hydraulics Engineering", "credits": 3 },
    { "name": "Building Planning", "credits": 2 },
    { "name": "Concrete Technology", "credits": 3 },
    { "name": "Material Testing Lab", "credits": 1 },
    { "name": "Hydraulics Engineering Lab", "credits": 1 },
    { "name": "Building Drawing", "credits": 1.5 },
    { "name": "Advanced Surveying Lab", "credits": 1 },
    { "name": "Concrete Lab", "credits": 1.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 5: [
    { "name": "Construction Technology & Equipments", "credits": 2 },
    { "name": "Structural Analysis - I", "credits": 2 },
    { "name": "Design of Concrete Structures", "credits": 3 },
    { "name": "Geotechnical Engineering", "credits": 3 },
    { "name": "Water Resource Engineering", "credits": 2 },
    { "name": "Departmental Elective - I", "credits": 2 },
    { "name": "Departmental Elective - II", "credits": 2 },
    { "name": "Concrete Structures Design Lab", "credits": 1.5 },
    { "name": "Geotechnical Engineering Lab", "credits": 1.5 },
    { "name": "Water Resource Engineering Design", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  6: [
    { "name": "Wind & Seismic Analysis", "credits": 2 },
    { "name": "Structural Analysis - II", "credits": 3 },
    { "name": "Environmental Engineering", "credits": 3 },
    { "name": "Design of Steel Structures", "credits": 3 },
    { "name": "Estimating & Costing", "credits": 2 },
    { "name": "Departmental Elective - III", "credits": 2 },
    { "name": "Departmental Elective - IV", "credits": 2 },
    { "name": "Environmental Engineering Design and Lab", "credits": 1.5 },
    { "name": "Steel Structure Design Lab", "credits": 1.5 },
    { "name": "Quantity Surveying and Valuation Lab", "credits": 1 },
    { "name": "Water and Earth Retaining Structures Design Lab", "credits": 1 },
    { "name": "Foundation Design Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 7: [
    { "name": "Transportation Engineering", "credits": 3 },
    { "name": "Open Elective - I", "credits": 3 },
    { "name": "Road Material Testing Lab", "credits": 1 },
    { "name": "Professional Practices & Field Engineering Lab", "credits": 1 },
    { "name": "Soft Skills Lab", "credits": 1 },
    { "name": "Environmental Monitoring and Design Lab", "credits": 1 },
    { "name": "Practical Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
 8: [
    { "name": "Project Planning and Construction Management", "credits": 3 },
    { "name": "Open Elective - II", "credits": 3 },
    { "name": "Project Planning and Construction Management Lab", "credits": 1 },
    { "name": "Pavement Design Lab", "credits": 1 },
    { "name": "Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ]
}
};
const semesterCredits = {
  1: 20.5,
  2: 20.5,
  3: 24.5,
  4: 23.5,
  5: 23,
  6: 23.5,
  7: 15,
  8: 15.5
};
const gradeMap = {
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


function animateResult(finalValue, label = "Result") {
  const resultElement = document.getElementById("animatedResult");
  let current = 0.0;
  const duration = 2000;
  const steps = 60;
  const increment = finalValue / steps;
  const stepTime = duration / steps;

  resultElement.style.color = "#333";
  resultElement.textContent = "Calculating...";

  let counter = setInterval(() => {
    current += increment;
    if (current >= finalValue) {
      current = finalValue;
      clearInterval(counter);
      resultElement.style.color = "#28a745";
      resultElement.textContent = `${label}: ${current.toFixed(2)} ✅`;
    } else {
      resultElement.textContent = `${label}: ${current.toFixed(2)}`;
    }
  }, stepTime);
}


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
      <div class="subject-credits">${subj.credits} cr</div>
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
    totalPoints += point * subjects[i].credits;
    totalCredits += subjects[i].credits;
  }

  if (totalCredits === 0) {
    alert("Total credits are zero, cannot calculate SGPA");
    return;
  }

  const sgpa = totalPoints / totalCredits;
 resultDiv.innerHTML = `<span id="animatedResult"></span>`;
animateResult(sgpa, `Your SGPA for Semester ${semester}`);
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
  resultDiv.innerHTML = `<span id="animatedResult"></span>`;
animateResult(cgpa, `Your CGPA till Semester ${currentSem}`);
}

