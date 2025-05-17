function startBuilding() {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("resume-builder").style.display = "flex";
}

function generateCV() {
  document.getElementById("cv-name").innerText = document.getElementById("nameInput").value;
  document.getElementById("cv-title").innerText = document.getElementById("titleInput").value;
  document.getElementById("cv-phone").innerText = document.getElementById("phoneInput").value;
  document.getElementById("cv-email").innerText = document.getElementById("emailInput").value;
  document.getElementById("cv-address").innerText = document.getElementById("addressInput").value;
  document.getElementById("cv-profile").innerText = document.getElementById("profileInput").value;

  // Image Upload
  const file = document.getElementById("imgInput").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      document.getElementById("cv-img").src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  // Skills
  const skills = document.getElementById("skillsInput").value.split(",");
  const skillList = document.getElementById("cv-skills");
  skillList.innerHTML = "";
  skills.forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillList.appendChild(li);
    }
  });

  // Languages
  const languages = document.getElementById("languagesInput").value.split(",");
  const langList = document.getElementById("cv-languages");
  langList.innerHTML = "";
  languages.forEach(lang => {
    if (lang.trim()) {
      const li = document.createElement("li");
      li.textContent = lang.trim();
      langList.appendChild(li);
    }
  });

  // Hobbies
  const hobbies = document.getElementById("hobbiesInput").value.split(",");
  const hobbyList = document.getElementById("cv-hobbies");
  hobbyList.innerHTML = "";
  hobbies.forEach(hobby => {
    if (hobby.trim()) {
      const li = document.createElement("li");
      li.textContent = hobby.trim();
      hobbyList.appendChild(li);
    }
  });

  // Experience
  const exp = document.getElementById("experienceInput").value.split("-");
  const expList = document.getElementById("cv-experience");
  expList.innerHTML = "";
  exp.forEach(item => {
    if (item.trim()) {
      const li = document.createElement("li");
      li.textContent = item.trim();
      expList.appendChild(li);
    }
  });

  // Education
  const edu = document.getElementById("educationInput").value.split("-");
  const eduList = document.getElementById("cv-education");
  eduList.innerHTML = "";
  edu.forEach(item => {
    if (item.trim()) {
      const li = document.createElement("li");
      li.textContent = item.trim();
      eduList.appendChild(li);
    }
  });
}

function downloadPDF() {
  const element = document.getElementById("cv-preview");
  html2pdf().from(element).save("My_Resume.pdf");
}
