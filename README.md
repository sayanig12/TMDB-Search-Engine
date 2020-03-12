# TMDB-Search-Engine
A simple Javascript and JQuery search engine to search for movies for TMDB and IMDB

To use this locally:
- Go to TMDB website, create an account and sign up for your api key (https://koditips.com/create-tmdb-api-key/).
- Create a config.js file inside the 'js' folder and copy this code into the file using your favourite text editor:

//API keys for TMDB authentication

var config = {
	api_key : <"your api key here">
	};
  
- Save the file.
- Clone the repository.
- Download and install npm and Node.js 
    - If using windows, go to this for intructions: https://phoenixnap.com/kb/install-node-js-npm-on-windows.
- Open command prompt, change directory to the local repository and type in 'live-server' to launch this on Port 80.
- Type a movie name of your choice to see the results and go to "Movie Details" for further info and for link to IMDB.


NB: Code modified from : https://www.youtube.com/watch?v=YsPqjYGauns&list=PLwoKi92MT19k8X7iegFtN8M_mkiBoJtZC&index=38&t=229s
- Modifications: 
	- Code modifications as required to access TMDB's database and pull the relevant info from the HTTP response (which is structured 	    differently from the OMDB database as shown in the video).
	- Some css changes to showcase the movie results better. 
