// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
let directors = moviesArray.map((element) => {
    return element.director;
})
return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray == 0) {
        return 0;
    }

    let dramaMovies = moviesArray.filter((element) => {
        return element.genre.includes('Drama') && element.director === 'Steven Spielberg';
    })
    return dramaMovies.length;
   
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray == 0) {
        return 0;
    }

    let scores = moviesArray.reduce((total, currentScore) => {
        if (currentScore.score === undefined) {
            return total
        } else {
        return total + currentScore.score;}
    }, 0);
    const avgScore = scores / moviesArray.length;

    return parseFloat(avgScore.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((element) => {
        return element.genre.includes('Drama');
    })

    if (dramaMovies.length == 0) {
        return 0;
    } 
    let scores = dramaMovies.reduce((total, currentScore) => {
        return total + currentScore.score;
    }, 0);
    const avgScore = scores / dramaMovies.length;

    return parseFloat(avgScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let movieYear = moviesArray.map((movie) => {
        return movie;
    })

    movieYear.sort((a, b) => {
        if(a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        }

    })
    return movieYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieTitle = moviesArray.map((movie) => {
        return movie.title;
    })

    movieTitle.sort();
    if(movieTitle.length > 20) {
        return movieTitle.slice(0, 20);
    }
    return movieTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
