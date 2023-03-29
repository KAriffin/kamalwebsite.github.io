/* Greet function */
function greet() {
	alert("Hello there! Welcome to my website.");
}

/* Smooth scroll function */
function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;
}var endTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b
    }

// Fetch recent Twitter posts
fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=<your-twitter-handle>&count=10', {
  headers: {
    Authorization: 'Bearer <your-twitter-bearer-token>'
  }
})
.then(response => response.json())
.then(data => {
  // Loop through each post and create a HTML element to display it
  data.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <div class="post-header">
        <img src="${post.user.profile_image_url}" alt="${post.user.name} profile picture">
        <h3>${post.user.name}</h3>
        <p>${new Date(post.created_at).toLocaleDateString()}</p>
      </div>
      <div class="post-content">
        <p>${post.text}</p>
      </div>
    `;
    document.getElementById('social-feed').appendChild(postElement);
  });
})
.catch(error => {
  console.error(error);
});


