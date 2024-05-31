document.addEventListener("DOMContentLoaded", function() {
    var userName = document.getElementById("userName");
    var dropdownToggle = document.getElementById("dropdownToggle");
    var dropdownMenu = document.getElementById("dropdownMenu");

    userName.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    dropdownToggle.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown menu when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!userName.contains(event.target) && !dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("searchInput");
    
    searchInput.addEventListener("input", function() {
        var searchText = searchInput.value.toLowerCase();
        // Implement your search functionality here, such as filtering content based on searchText
    });
});
