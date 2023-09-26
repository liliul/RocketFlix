/**
* @param {string} url - movies
* @returns {objetc} - todas informação de um filme 
*/

export async function fetchApi(url) {
	const request = await fetch(url);
	const response = await request.json();

	return response
}