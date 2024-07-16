function formatTime(minutes, seconds) {
	return `${String(minutes).padStart(2, '0')} минут ${String(seconds).padStart(2, '0')} секунд`;
}

function startCountdown(duration, display) {
	let timer = duration, minutes, seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		display.textContent = formatTime(minutes, seconds);

		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}

window.onload = function () {
	const display = document.getElementById('countdown');
	const duration = 30 * 60;
	startCountdown(duration, display);
};