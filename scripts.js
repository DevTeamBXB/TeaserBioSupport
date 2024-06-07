document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progressPercent = 60;

    progressBar.style.width = `${progressPercent}%`;
    progressText.innerText = `${progressPercent}%`;
});
