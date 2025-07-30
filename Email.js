// Load EmailJS SDK
(function () {
  emailjs.init("JtsfvlvKl4pPvYCgH"); // ⬅️ Replace with your Public Key if needed
})();

// Contact Form Submission Handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact_form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_zi6b5q2", "template_z0iwn7b", form)
        .then(function () {
          alert("✅ Message sent successfully!");
          form.reset(); // Clear form after success
        })
        .catch(function (error) {
          console.error("❌ EmailJS Error:", error);
          alert("❌ Failed to send message. Please try again.");
        });
    });
  }
});
