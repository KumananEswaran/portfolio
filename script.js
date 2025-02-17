function toggleMenu() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('active');
}

// Close sidebar when clicking a link on mobile
document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', () => {
		if (window.innerWidth <= 768) {
			document.querySelector('.sidebar').classList.remove('active');
		}
	});
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
	if (window.innerWidth <= 768) {
		const sidebar = document.querySelector('.sidebar');
		const menuToggle = document.querySelector('.menu-toggle');
		if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
			sidebar.classList.remove('active');
		}
	}
});
