let http = require('http');

module.exports = function movies(title) {
    'use strict';
    let url = `http://www.omdbapi.com/?apikey=4c054b9e&s=${title}`;
    let bodyPages = '';
    let bodyMovies = '';
    let moviesArray = [];
    getPages(url).then((pages) => {
        let completedRequests = 0;
        for (let i = 1; i <= pages; i++) {
            getMovies(`${url}&page=${i}`).then((movies) => {
                movies.forEach(element => {
                    moviesArray.push({ 'Title': element.Title, 'Year': element.Year });
                });
                bodyMovies = '';
                completedRequests++;
                if (completedRequests === pages) {
                    done();
                }
            });
        }
    });

    function done() {
        let cmp = function(x, y) {
            return x > y ? 1 : x < y ? -1 : 0;
        }
        moviesArray.sort(function(a, b) {
            return cmp(
                [-cmp(a.Year, b.Year), cmp(a.Title, b.Title)], [-cmp(b.Year, a.Year), cmp(b.Title, a.Title)]
            );
        });
        console.log(`Sample Case ${title}`);
        console.log('=======================');
        moviesArray.forEach(element => {
            console.log(element.Title);
        });
        console.log();
    }

    function getPages(url) {
        const promise = new Promise((resolve, reject) => {
            http.get(url, (res) => {
                res.on('data', (d) => {
                    bodyPages += d;
                });

                res.on('end', function() {
                    resolve(Math.ceil(JSON.parse(bodyPages).totalResults / 10));
                });
            });
        });
        return promise;
    }

    function getMovies(url) {
        const promise = new Promise((resolve, reject) => {
            http.get(url, (res) => {
                res.on('data', (d) => {
                    bodyMovies += d;
                });

                res.on('end', function() {
                    resolve(JSON.parse(bodyMovies).Search);
                });
            });
        });
        return promise;
    }
}