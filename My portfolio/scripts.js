document.addEventListener('DOMContentLoaded', function() {
    // Get all radio buttons with the name 'tab'
    var radioButtons = document.querySelectorAll('input[name="tab"]')});
    var radioButtons = document.querySelectorAll('input[name="tab"]');

    // Uncheck all radio buttons
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;})

document.addEventListener("DOMContentLoaded", function () {
    // Get all radio buttons and corresponding content divs
    const tabs = document.querySelectorAll('input[type="radio"]');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to hide all tab contents
    function hideTabContents() {
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
    }

    // Function to show the selected tab content
    function showTabContent(tabId) {
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }
    }

    // Initial setup: Hide all tab contents and show the default tab
    hideTabContents();
    showTabContent('');

    // Event listener for tab changes
    tabs.forEach(tab => {
        tab.addEventListener('change', function () {
            const selectedTabId = this.id.replace('tab', 'content');
            hideTabContents();
            showTabContent(selectedTabId);
        });
    });
});
