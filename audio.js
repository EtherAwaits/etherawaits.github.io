// Track users first click
let userInteracted = false;
document.addEventListener('click', () => {
    userInteracted = true; // Unlock audio playback
});

// Function to play audio
function playSound(src, volume = .5) {
    if (!userInteracted) return; // Only allow after user interaction
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch((err) => console.error("Playback failed:", err));
}

document.addEventListener('mouseenter',	(event) => {
// Ensure event.target is an element before calling .closest
	if (!(event.target instanceof Element)) return;
	
    const target = event.target.closest('.hover-sfx'); // Check if the element has the target class
    if (target) {
		const soundSrc = target.dataset.hoversound;
		const volume = parseFloat(target.dataset.volume) || .5;
		if (soundSrc) playSound(soundSrc, volume);
    }
},true); // Use capturing phase to catch hover events

document.addEventListener('focus', (event) => {
// Ensure event.target is an element before calling .closest
    if (!(event.target instanceof Element)) return;

    const target = event.target.closest('.hover-sfx'); // Check if the element has the target class
    if (target) {
		const soundSrc = target.dataset.hoversound;
		const volume = parseFloat(target.dataset.volume) || .5;
		if (soundSrc) playSound(soundSrc, volume);
    }
}, true); // Use capturing phase to catch focus events

document.addEventListener('click', (event) => {
// Ensure event.target is an element before calling .closest
    if (!(event.target instanceof Element)) return;

    const target = event.target.closest('.click-sfx'); // Check if the element has the target class
    if (target) {
		const soundSrc = target.dataset.clicksound;
		const volume = parseFloat(target.dataset.volume) || .5;
		if (soundSrc) playSound(soundSrc, volume);
    }
  }, true); // Use capturing phase to catch click events