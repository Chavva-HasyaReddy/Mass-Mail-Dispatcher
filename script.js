function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function displayEmails() {
  const fileInput = document.getElementById('upload');
  const file = fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
      const content = e.target.result;
      const emails = content.split(/\r?\n/).map(email => email.trim()).filter(email => email.length > 0);
      const validEmails = [];
      const invalidEmails = [];
      emails.forEach(email => {
          const row = document.createElement("tr");
          const cell = document.createElement("td");
          cell.textContent = email;
          row.appendChild(cell);
          if (isValidEmail(email)) {
              document.getElementById('val').appendChild(row);
              validEmails.push(email);
          } else {
              document.getElementById('inval').appendChild(row);
              invalidEmails.push(email);
          }
      });
      document.getElementById('valCount').textContent = validEmails.length;
      document.getElementById('invalCount').textContent = invalidEmails.length;
  };
  reader.readAsText(file);
}
document.getElementById('upload').addEventListener('change', function() {
  displayEmails();
  scrollToSections();
});
function sendEmail() {
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "your-email@example.com",
      Password: "your-smtp-password",
      To: "recipient-email@example.com",
      From: document.getElementById('from').value,
      Subject: document.getElementById('subject').value,
      Body: document.getElementById('msg').value
  }).then(
      message => alert("Mail has been sent successfully")
  );
}
window.addEventListener("scroll", function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var scrollButton = document.getElementById("scroll-top-btn");
  if (scrollPosition > 300) {
      scrollButton.style.display = "block";
  } else {
      scrollButton.style.display = "none";
  }
});
document.getElementById("scroll-top-btn").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});