/* function to return a promise for GET request */
function getJSON(url) {
	return fetch(url).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw response.statusText; //built int response object - check MDN docs
		}
	});
}

/* function to return a promise for a POST request */
function postJSON(url, data) {
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw response.statusText;
		}
	});
}