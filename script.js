function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("issueForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Issue reported successfully!");
    document.getElementById("statusText").innerText = "Current Status: In Progress";
});
