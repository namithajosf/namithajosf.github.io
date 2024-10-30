// Select the navbar and the toggle arrow
const navbar = document.querySelector(".navbar")
const toggleArrow = document.querySelector(".toggle-arrow")

// Function to toggle the navbar collapse
function toggleNavbar() {
	navbar.classList.toggle("collapsed") // Toggle the 'collapsed' class
	toggleArrow.classList.toggle("open") // Toggle the 'open' class for the arrow
}

// Add event listener to the toggle arrow
toggleArrow.addEventListener("click", toggleNavbar)

function toggleDescription(id) {
	const description = document.getElementById(id)
	const arrowIcon = document.getElementById(`arrow-${id}`)

	const isHidden =
		description.style.display === "none" || description.style.display === ""
	description.style.display = isHidden ? "block" : "none"
	arrowIcon.parentElement.setAttribute(
		"aria-expanded",
		isHidden ? "true" : "false"
	)
}

document
	.getElementById("contact-form")
	.addEventListener("submit", function (event) {
		event.preventDefault() // Prevent form from submitting immediately

		// Collect form data
		const name = document.getElementById("name").value.trim()
		const email = document.getElementById("email").value.trim()
		const subject = document.getElementById("subject").value.trim()
		const message = document.getElementById("message").value.trim()

		// Validate form fields
		let isValid = true
		let errorMessage = ""

		if (name === "") {
			isValid = false
			errorMessage += "Name is required.\n"
		}

		if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
			isValid = false
			errorMessage += "Please enter a valid email address.\n"
		}

		if (subject === "") {
			isValid = false
			errorMessage += "Subject is required.\n"
		}

		if (message === "") {
			isValid = false
			errorMessage += "Message is required.\n"
		}

		if (!isValid) {
			alert(errorMessage)
		} else {
			alert("Message sent")
		}
	})
