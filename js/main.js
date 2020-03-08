

$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});
});

function getMovies(searchText){
	var api_key = config.api_key;
	axios.get('https://api.themoviedb.org/3/search/movie?api_key=' +  api_key + '&query=' +searchText)
	.then((response) => {
		let movies = response.data.results;
		let output ="";
		$.each(movies, (index, movie) => {
			output += `
			<div class ='col-md-3'>
				<div class = 'well text-center'>
				<img src= "http://image.tmdb.org/t/p/w185/${movie.poster_path}">
				<h5>${movie.title}</h5>
				
				<a onclick= "movieSelected('${movie.id}')" class= "btn btn-primary" href='#'>Movie Details</a>			
			
			</div>
				</div>
			`;
		});

		$('#movies').html(output);

	})
	.catch((err) => {
		console.log(err);

	 });
}

function movieSelected(id){
	sessionStorage.setItem('movieId', id);
	window.location ='movies.html';
	return false;
}

function genreItems(array){
	var i;
	genres = [];
	for (i = 0; i<array.length; i++ ){
		var j = array[i].name;
		genres.push(j);

	}
	return genres.join();
}

function getMovie(){
	let movieId= sessionStorage.getItem('movieId');
	var api_key = config.api_key;
	axios.get('https://api.themoviedb.org/3/movie/' + movieId +'?api_key=' +  api_key)
	.then((response) => {
		let movie = response.data;
		let output =`

		<div class ='row'>
			<div class="col-md-4">
		</div>

		<div class="col-md-8">
		<h2>${movie.title}</h2>
		<img src= "http://image.tmdb.org/t/p/w185/${movie.poster_path}" align='left'>
		<ul class='list-group'>
			<li class='list-group-item'><strong>Genre:</strong>${genreItems(movie.genres)}</li>
			<li class='list-group-item'><strong>Released:</strong>${movie.release_date}</li>
			<li class='list-group-item'><strong>Runtime:</strong>${movie.runtime}</li>
			
		</div>
		</div>
		<div class="row">
			<div class="well">
				<h3>Plot</h3>
				${movie.overview}
				<hr>
				<a href="http://imdb.com/title/${movie.imdb_id}" target="_blank" class="btn btn-primary">View IMDB</a>
				<a href="index.html" class='btn btn-default'>Go back to search</a>
		`;
		$('#movie').html(output);

})
	
	.catch((err) => {
		console.log(err);

	 });
}