/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


// const vue_app = Vue.createApp({
//       // This automatically imports your movies.json file and puts it into
//       //   the variable: movies
//       created () {
//             fetch('movies.json').then(response => response.json()).then(json => {
//                   this.movies = json
//             })
//       },
//       data() {
//         return {
//             // This holds your movies.json data.
//             movies: [],
//             /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
         
//       }
//     },
//       methods: {
//             /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
//       }
// })

// vue_app.mount("#vue_app")



const vue_app = Vue.createApp({
	created () {
		fetch('movies.json')
			.then(response => response.json())
			.then(json => {
				this.movies = json

				// =========================================================== //
				// ✅ STEP 11 COMMIT (Add 3 favorite movies to JSON list)       //
				// Note: JSON must already be updated before this commit        //
				// COMMIT MESSAGE: "Added 3 new favorite movies to movie list"  //
				// =========================================================== //
			})
	},

	data() {
		return {
			movies: [],
			title: "IMDB + My Top Movies",
			owner: "Yaz's Github",
			githubLink: "https://github.com/YasminaN1/Movie-Posters"
		}
	},

	methods: {

		// =========================================================== //
		// ✅ STEP 7 COMMIT (Created required Vue functions)            //
		// COMMIT MESSAGE: "Added like(), dislike(), makeTextDate(),    //
		//   posterClick(), timeText(), timeText()"                     //
		// =========================================================== //

		makeTextDate(dateArray) {
			const [year, month, day] = dateArray
			return `${year}-${month}-${day}`
		},

		timeText(minutes) {
			return `${minutes} mins`
		},

		timeText(minutes) {
			return `${(minutes/60).toFixed(1)} hrs`
		},

		like(index){
			this.movies[index].likes++
		},

		dislike(index){
			this.movies[index].dislikes++
		},

		posterClick(index){
			let movie = this.movies[index]
			movie.posterindex = (movie.posterindex + 1) % movie.posters.length
		}
	}
})

vue_app.mount("#vue_app")