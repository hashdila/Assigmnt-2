document.getElementById("infoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form inputs
  const data = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    linkedin: document.getElementById("linkedin").value,
    profile: document.getElementById("profile").value,
  };

  try {

    const res = await fetch("/info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });


    let response;
    if (res.ok) {
      response = await res.json();
    } else {
      console.warn("⚠️ Backend not reachable .");
      response = data;
    }

    // Update CV on page
    document.getElementById("cv-name").textContent = response.name;
    document.getElementById("cv-role").textContent = response.role;
    document.getElementById("cv-phone").textContent = response.phone;
    document.getElementById("cv-email").innerHTML = `<a href="mailto:${response.email}">${response.email}</a>`;
    document.getElementById("cv-linkedin").innerHTML = `<a href="${response.linkedin}" target="_blank">${response.linkedin}</a>`;
    document.getElementById("cv-profile").textContent = response.profile;

    alert("✅ CV updated successfully!");
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});
