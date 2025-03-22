// Show the selected section in the admin panel
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.style.display = "none");

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = "block";
    }
}

// Logout admin
function logout() {
    alert("You have been logged out.");
    window.location.href = "admin.html";
}

// Submit and validate payment proof
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("payment-proof-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const amount = document.getElementById("amount").value;
            const proof = document.getElementById("proof").value;

            if (!name || !amount || !proof) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Simulate successful submission (you can replace this with real backend later)
            alert(`Payment proof submitted for ${name} (₦${amount}).`);
            form.reset();
        });
    }
});

// Load Tawk.to dashboard inside iframe dynamically
function manageChat() {
    const chatContainer = document.getElementById("chat-container");

    if (chatContainer) {
        chatContainer.innerHTML = `
            <iframe src="https://dashboard.tawk.to" 
                width="100%" 
                height="500px" 
                style="border: none; border-radius: 8px;">
            </iframe>
        `;
    }
}

// Change password (placeholder logic)
function changePassword() {
    const newPass = document.getElementById("admin-password").value;
    if (newPass.length >= 6) {
        alert("Password updated successfully!");
        document.getElementById("admin-password").value = "";
    } else {
        alert("Password must be at least 6 characters.");
    }
}

// Default section on page load
document.addEventListener("DOMContentLoaded", () => {
    showSection("dashboard");
});
