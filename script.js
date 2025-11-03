document.getElementById("infoForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulate backend POST response
    const data = {
      name: document.getElementById("name").value,
      role: document.getElementById("role").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      linkedin: document.getElementById("linkedin").value,
      profile: document.getElementById("profile").value,
    };

    // “Pretend” we sent this to /info and got same data back
    const response = data; // simulate /info JSON response

    // Update CV with "response"
    document.getElementById("cv-name").textContent = response.name;
    document.getElementById("cv-role").textContent = response.role;
    document.getElementById("cv-phone").textContent = response.phone;
    document.getElementById("cv-email").innerHTML = `<a href="mailto:${response.email}">${response.email}</a>`;
    document.getElementById("cv-linkedin").innerHTML = `<a href="${response.linkedin}" target="_blank">${response.linkedin}</a>`;
    document.getElementById("cv-profile").textContent = response.profile;

    alert("CV updated successfully!");
  });