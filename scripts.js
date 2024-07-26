<script>
// Hide button text until hovered over
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('show-text');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('show-text');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
</script>
