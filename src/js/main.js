document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.querySelector('.navbar__toggle')
	const navbar = document.querySelector('.navbar')
	const currentYear = document.querySelector('.current-year')
	const title = document.querySelectorAll('.parallax-title')
	const date = new Date().getFullYear()
	currentYear.textContent = date
	toggleButton.addEventListener('click', () => {
		navbar.classList.toggle('open')
		navbar.classList.toggle('border')
	})
	window.addEventListener('scroll', function () {
		let scrollY1 = window.scrollY - 80
		title.forEach(title => {
			title.style.transform = `translateY(${scrollY1 * 0.3}px)` // Im wyższa wartość, tym mocniejszy efekt
		})
		if (scrollY1 >= 700) {
			scrollY1 = 700
		}
	})
})
