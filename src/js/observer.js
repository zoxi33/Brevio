const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            return

        }
	})
})
const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements2 = document.querySelectorAll('.hidden2')
const hiddenElements3 = document.querySelectorAll('.hidden3')

hiddenElements.forEach(el => observer.observe(el))
hiddenElements2.forEach(el => observer.observe(el))
hiddenElements3.forEach(el => observer.observe(el))
