// const tablinks = document.querySelector(".tab-links");
// const tabcontents = document.querySelector(".tab-contents");

// const opentab = function (tabname, event) {
// 	tablinks.classList.remove("active-link");
// 	tabcontents.classList.remove("active-tab");
// 	event.currentTarget.classList.add("active-link");
// 	document.getElementById(tabname).classList.add("active-tab");
// };

const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

const opentab = function (tabname, event) {
	// Remove active-link from all tab links
	tablinks.forEach((link) => link.classList.remove("active-link"));

	// Remove active-tab from all tab contents
	tabcontents.forEach((content) => content.classList.remove("active-tab"));

	// Add active-link to the clicked tab link
	event.currentTarget.classList.add("active-link");

	// Add active-tab to the selected tab content
	document.getElementById(tabname).classList.add("active-tab");
};
// menu
const sidemenu = document.getElementById("sidemenu");
const openmenu = function () {
	sidemenu.style.right = "0";
};
const closemenu = function () {
	sidemenu.style.right = "-200px";
};
// contact

document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent the default form submission

	// Prepare form data
	const formData = new FormData(this);

	// Convert FormData to URLSearchParams for proper format
	const params = new URLSearchParams();
	formData.forEach((value, key) => {
		params.append(key, value);
	});

	// Replace with your Google Apps Script Web App URL
	const webAppUrl =
		"https://script.google.com/macros/s/AKfycbx-hp1HNC3MnJYmj0lEDNqwxE7DzfP25e62-3JvWikxFUN9FU36VH6KzUR503TGV_LYoA/exec"; // Replace with your URL

	// Send data to Google Apps Script via a POST request
	fetch(webAppUrl, {
		method: "POST",
		body: params, // Send data as URL-encoded
	})
		.then((response) => response.json())
		.then((result) => {
			alert("Form submitted successfully!");
			// Optionally reset the form
			document.getElementById("contactForm").reset();
		})
		.catch((error) => {
			alert("Error submitting form. Please try again.");
			console.error("Error:", error);
		});
});
