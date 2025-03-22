// Function to switch between admin panel sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Logout function (redirect to login page)
function logout() {
    window.location.href = "admin.html";
}

// Handle add payment proof functionality
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("payment-proof-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const amount = document.getElementById("amount").value;
            const file = document.getElementById("proof").files[0];

            if (name && amount && file) {
                alert("Payment proof submitted successfully!");
                form.reset();
            } else {
                alert("Please fill out all fields!");
            }
        });
    }
});

// Function to handle chat management
function manageChat() {
    const chatSection = document.getElementById("chat-section");
    if (chatSection) {
        chatSection.innerHTML = `<iframe src="https://dashboard.tawk.to" width="100%" height="500px" style="border:none;"></iframe>`;
    }
}

// Function to show notifications
function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
