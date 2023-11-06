const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    params: {
        'api_key': '53feabcc05fde9402b3655977f59c85b',
        'language': 'es',
    },
});

//pagina principal
async function getTrendingAll() {
    const { data } = await api('trending/all/day');
    const slider = document.querySelector('.carruseles');
    const urlImage = 'https://image.tmdb.org/t/p/w1280/';

    const trendings = data.results;
    let sliderContainer = `
        ${trendings.map(trending => `
            <div class="slider-div w-full h-full flex-none">
                <img class="w-full object-contain bg-center" src="${urlImage}${trending.backdrop_path}" alt="${trending.title}">
            </div>
        `).slice(0, 5).join('')}
    `;
    slider.innerHTML = sliderContainer;
}

async function getUpcomingMovies() {
    const { data } = await api('movie/upcoming');
    const upcomingMovies = document.querySelector('.en-camino-preview');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const movies = data.results;
    let upcomingContainer = `
        ${movies.map(movie => `
            <div class="Card-tendencias" onclick="movieID('${movie.id}')">
                <div class="h-4/5">
                    <img class="w-full h-full object-cover rounded-t-xl" src="${urlImage}${movie.poster_path}" alt="${movie.title}" />
                    <div class="h-1/5 flex flex-col justify-center items-center">
                        <p class="card-text">${movie.title}</p>
                    </div>
                </div>
            </div>
        `)};
    `
    upcomingMovies.innerHTML = upcomingContainer;
}

async function getPopularMovies() {
    const { data } = await api('movie/popular');
    const popularMovies = document.querySelector('.popular-movies');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const movies = data.results;
    let popularMoviesContainer = `
        ${movies.map(movie => `
            <div class="Card-peliculas" onclick="movieID('${movie.id}')">
                <div class="h-4/5">
                    <img class="w-full h-full object-cover rounded-t-xl" src="${urlImage}${movie.poster_path}" alt="${movie.title}" />
                    <div class="h-1/5 flex flex-col justify-center items-center">
                        <p class="card-text">${movie.title}</p>
                    </div>
                </div>
            </div>
        `)};
    `;
    popularMovies.innerHTML = popularMoviesContainer;
}

async function getPopularSeries() {
    const { data } = await api('tv/popular');
    const popularSeries = document.querySelector('.popular-series');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const series = data.results;
    let popularSeriesContainer = `
        ${series.map(serie => `
            <div class="Card-series" onclick="serieID('${serie.id}')">
                <div class="h-4/5">
                    <img class="w-full h-full object-cover rounded-t-xl" src="${urlImage}${serie.poster_path}" alt="${serie.name}" />
                    <div class="h-1/5 flex flex-col justify-center items-center">
                        <p class="card-text">${serie.name}</p>
                    </div>
                </div>
            </div>
        `)};
    `;
    popularSeries.innerHTML = popularSeriesContainer;
}

function categoryMovieID(category, name) {
    location.hash = `#categoriaPelicula=${category}-${name}`;
}

function categorySerieID(category, name) {
    location.hash = `#categoriaSerie=${category}-${name}`;
}

//Seccion peliculas
async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const trendingPreview = document.querySelector('.tendencias-peliculas');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const movies = data.results;
    let movieContainer = `
        ${movies.map(movie => `
            <div class="Card-tendencias" onclick="movieID('${movie.id}')">
                <div class="h-4/5">
                    <img class="w-full h-full object-cover rounded-t-xl" src="${urlImage}${movie.poster_path}" alt="${movie.title}" />
                    <div class="h-1/5 flex flex-col justify-center items-center">
                        <p class="card-text">${movie.title}</p>
                    </div>
                </div>
            </div>
        `)}
    `;
    trendingPreview.innerHTML = movieContainer;
}

async function getTopRatedMovies() {
    const { data } = await api('movie/top_rated');
    const topRatedMovies = document.querySelector('.mas-valoradas');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const movies = data.results;
    let topRatedMoviesContainer = `
        ${movies.map(movie => `
            <div class="Card-peliculas" onclick="movieID('${movie.id}')">
                <div class="h-4/5">
                    <img class="w-full h-full object-cover rounded-t-xl" src="${urlImage}${movie.poster_path}" alt="${movie.title}" />
                    <div class="h-1/5 flex flex-col justify-center items-center">
                        <p class="card-text">${movie.title}</p>
                    </div>
                </div>
            </div>
        `)};
    `;
    topRatedMovies.innerHTML = topRatedMoviesContainer;
}

async function getCategoryMovies() {
    const { data } = await api('genre/movie/list');
    const categoryMovies = document.querySelector('.categories-movies');

    const categories = data.genres;
    let categoryContainer = `
        ${categories.map(category => `
            <div onclick="categoryMovieID('${category.id}', '${category.name}')" class="w-auto h-16 bg-gradient-to-r from-primary/30 to-primary/60 hover:from-gray-800 hover:to-gray-500 rounded-xl cursor-pointer shadow-md flex justify-center items-center">
                <p id="${category.id}" class="px-4 py-2 text-sm text-white font-medium lg:text-lg">${category.name}</p>
            </div>
        `).slice(0, 19).join('')};
    `;
    categoryMovies.innerHTML = categoryContainer;
}

//Seccion series
async function getTrendingSeries() {
    const { data } = await api('trending/tv/day');
    const trendingSeries = document.querySelector('.tendencias-series');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const series = data.results;
    let trendingSeriesContainer = `
        ${series.map(serie => `
        <div class="Card-tendencias" onclick="serieID('${serie.id}')">
            <div class="h-4/5">
                <img class="w-full h-full object-cover rounded-t-xl"
                    src="${urlImage}${serie.poster_path}" alt="${serie.name}" />
                <div class="h-1/5 flex flex-col justify-center items-center">
                    <p class="card-text">${serie.name}</p>
                </div>
            </div>
        </div>
        `).slice(0, 20).join('')}
    `;
    trendingSeries.innerHTML = trendingSeriesContainer;
}

async function getTopRatedSeries() {
    const { data } = await api('tv/top_rated');
    const topRatedSeries = document.querySelector('.mas-valoradas-series');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const series = data.results;
    let topRatedSeriesContainer = `
        ${series.map(serie => `
        <div class="Card-series" onclick="serieID('${serie.id}')">
            <div class="h-4/5">
                <img class="w-full h-full object-cover rounded-t-xl"
                    src="${urlImage}${serie.poster_path}" alt="${serie.name}" />
                <div class="h-1/5 flex flex-col justify-center items-center">
                    <p class="card-text">${serie.name}</p>
                </div>
            </div>
        </div>
        `).slice(0, 20).join('')}
    `;
    topRatedSeries.innerHTML = topRatedSeriesContainer;
}

async function getCategorySeries() {
    const { data } = await api('genre/tv/list');
    const categorySeries = document.querySelector('.categories-series');

    const categories = data.genres;
    let categoryContainer = `
        ${categories.map(category => `
            <div onclick="categorySerieID('${category.id}', '${category.name}')" class="w-auto h-16 bg-gradient-to-r from-primary/30 to-primary/60 hover:from-gray-800 hover:to-gray-500 rounded-xl cursor-pointer shadow-md flex justify-center items-center">
                <p id="${category.id}" class="px-4 py-2 text-sm text-white text-center font-medium lg:text-lg">${category.name}</p>
            </div>
        `).slice(0, 16).join('')};
    `;
    categorySeries.innerHTML = categoryContainer;
}

//Seccion detalles de pelicula
async function movieID(id) {
    location.hash = `#detalles-pelicula=${id}`;
}

async function getMovieDetail(id) {
    const { data: movie } = await api(`movie/${id}`);
    const { data: recomendations } = await api(`movie/${id}/recommendations`);

    const urlImageDesktop = 'https://image.tmdb.org/t/p/w1280/';
    const movieDetailCategories = document.querySelector('.categories-detail-movie');
    const movieRecomendationsMobile = document.querySelector('.recomendations-movies-mobile');
    const movieRecomendationsDesktop = document.querySelector('.recomendations-movies-desktop');

    movieDetailImageDesktop.setAttribute('src', `${urlImageDesktop}${movie.backdrop_path}`);
    movieDetailImageDesktop.setAttribute('alt', movie.title);
    movieDetailImageMobile.setAttribute('src', `${urlImageDesktop}${movie.poster_path}`);
    movieDetailImageMobile.setAttribute('alt', movie.title);
    movieDetailTitle.textContent = movie.title;
    movieDetailScore.textContent = movie.vote_average;
    movieDetailOverview.textContent = movie.overview;

    const categories = movie.genres;
    let categoryContainer = `
        ${categories.map(category => `
            <div onclick="categoryMovieID('${category.id}', '${category.name}')" class="h-12 p-4 bg-gradient-to-r from-primary/70 to-cuarternary/70 flex justify-center items-center rounded-full hover:from-primary/50 hover:to-cuarternary/50">
                <p class="text-white font-semibold text-center">${category.name}</p>
            </div>
        `).slice(0, 8).join('')}
    `;
    movieDetailCategories.innerHTML = categoryContainer;

    const recomendationsTitle = recomendations.results;
    let recomendationsContainer = `
        ${recomendationsTitle.map(recomendation => `
            <div class="Card-relacionados" onclick="movieID('${recomendation.id}')">
                <div class="h-auto rounded-b-full">
                    <img class="w-32 h-full object-cover rounded-xl lg:w-36" src="${urlImageDesktop}${recomendation.poster_path}" alt="${recomendation.title}">
                </div>
            </div>
        `).slice(0, 20).join('')}
    `;
    movieRecomendationsDesktop.innerHTML = recomendationsContainer;
    movieRecomendationsMobile.innerHTML = recomendationsContainer;
}

//Seccion detalles de la serie
async function serieID(id) {
    location.hash = `#detalles-serie=${id}`;
}

async function seasonID(id, seasonNumber) {
    location.hash = `#detalles-serie-season=${id}-${seasonNumber}`;
}

async function getSerieDetail(id) {
    const { data: serie } = await api(`tv/${id}`);
    const { data: recomendations } = await api(`tv/${id}/recommendations`);

    const urlImageDesktop = 'https://image.tmdb.org/t/p/w1280/';
    const urlImageMobile = 'https://image.tmdb.org/t/p/w300/';
    const serieDetailCategories = document.querySelector('.categories-detail-serie');
    const serieRecomendationsMobileContainer = document.querySelector('.recomendations-series-mobile');
    const serieRecomendationsDesktopContainer = document.querySelector('.recomendations-series-desktop');
    const serieSeasonsMobileContainer = document.querySelector('.seasons-series-mobile');
    const serieSeasonsDesktopContainer = document.querySelector('.seasons-series-desktop');

    serieDetailImageDesktop.setAttribute('src', `${urlImageDesktop}${serie.backdrop_path}`);
    serieDetailImageDesktop.setAttribute('alt', serie.name);
    serieDetailImageMobile.setAttribute('src', `${urlImageDesktop}${serie.poster_path}`);
    serieDetailImageMobile.setAttribute('alt', serie.name);
    serieDetailTitle.textContent = serie.name;
    serieDetailNumberSeasons.textContent = `${serie.number_of_seasons} Temp`;
    serieDetailScore.textContent = serie.vote_average;
    serieDetailOverview.textContent = serie.overview;

    const categories = serie.genres;
    let categoryContainer = `
        ${categories.map(category => `
            <div onclick="categorySerieID('${category.id}', '${category.name}')" class="h-12 p-4 bg-gradient-to-r from-primary/70 to-cuarternary/70 flex justify-center items-center rounded-full hover:from-primary/50 hover:to-cuarternary/50">
                <p class="text-white font-semibold text-center">${category.name}</p>
            </div>
        `).slice(0, 8).join('')}
    `;
    serieDetailCategories.innerHTML = categoryContainer;

    const recomendationsTitle = recomendations.results;
    let recomendationsContainer = `
        ${recomendationsTitle.map(recomendation => `
            <div class="Card-relacionados" onclick="serieID('${recomendation.id}')">
                <div class="h-auto rounded-b-full">
                    <img class="w-32 h-full object-cover rounded-xl lg:w-36" src="${urlImageDesktop}${recomendation.poster_path}" alt="${recomendation.name}">
                </div>
            </div>
        `).slice(0, 20).join('')}
    `;
    serieRecomendationsMobileContainer.innerHTML = recomendationsContainer;
    serieRecomendationsDesktopContainer.innerHTML = recomendationsContainer;

    const seasonsSerie = serie.seasons;
    let serieSeasonsMobile = `
        ${seasonsSerie.map(season => `
            <div class="Card-relacionados" onclick="seasonID('${serie.id}', '${season.season_number}')">
                <div class="h-auto rounded-b-full">
                    <img class="w-32 h-full object-cover rounded-xl" src="${urlImageMobile}${season.poster_path}" alt="${season.name}">
                </div>
            </div>
        `)}
    `;
    serieSeasonsMobileContainer.innerHTML = serieSeasonsMobile;
    serieSeasonsDesktopContainer.innerHTML = serieSeasonsMobile;
}

async function getSerieSeasonDetail(id, num) {
    const { data: season } = await api(`tv/${id}/season/${num}`);

    const urlImageDesktop = 'https://image.tmdb.org/t/p/w1280/';
    const seasonEpisodesDetailMobile = document.querySelector('.episodes-season-mobile');
    const seasonEpisodesDetailDesktop = document.querySelector('.episodes-series-desktop');

    serieSeasonDetailImageDesktop.setAttribute('src', `${urlImageDesktop}${season.poster_path}`);
    serieSeasonDetailImageDesktop.setAttribute('alt', season.name);
    serieSeasonDetailImageMobile.setAttribute('src', `${urlImageDesktop}${season.poster_path}`);
    serieSeasonDetailImageMobile.setAttribute('alt', season.name);
    serieSeasonDetailTitle.textContent = season.name;
    serieSeasonDetailScore.textContent = season.vote_average;
    serieSeasonDetailOverview.textContent = season.overview;

    const episodios = season.episodes;
    let seasonEpisodesContainer = `
        ${episodios.map(episode => `
            <div class="Card-episodios">
                <div class="h-3/5">
                    <img class="w-full h-full object-cover rounded-t-xl" src="${urlImageDesktop}${episode.still_path}" alt="${episode.name}" />
                    <div class="h-2/5 flex justify-center content-center items-center">
                        <p class="card-text">${episode.name}</p>
                    </div>
                </div>
            </div>
        `).slice(0, 20).join('')}
    `;
    seasonEpisodesDetailMobile.innerHTML = seasonEpisodesContainer;
    seasonEpisodesDetailDesktop.innerHTML = seasonEpisodesContainer;
}

//Seccion por categorias
async function getMoviesByCategory(id) {
    const { data } = await api('discover/movie', {
        params: {
            with_genres: id,
        },
    });
    const byCategories = document.querySelector('.categoria-pelicula');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const categories = data.results;
    let byCategoriesContainer = `
        ${categories.map(category => `
        <div class="Card-peliculas" onclick="movieID('${category.id}')">
            <div class="h-4/5">
                <img class="w-full h-full object-cover rounded-t-xl" src="${urlImage}${category.poster_path}" alt="${category.title}" />
                <div class="h-1/5 flex flex-col justify-center items-center">
                    <p class="card-text">${category.title}</p>
                </div>
            </div>
        </div>
        `).slice(0, 20).join('')}
    `;


    byCategories.innerHTML = byCategoriesContainer;
}

async function getSeriesByCategory(id) {
    const { data } = await api('discover/tv', {
        params: {
            with_genres: id,
        },
    });
    const byCategories = document.querySelector('.categoria-serie');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const categories = data.results;
    let byCategoriesContainer = `
        ${categories.map(category => `
        <div class="Card-peliculas" onclick="serieID('${category.id}')">
            <div class="h-4/5">
                <img class="w-full h-full object-cover rounded-t-xl" src="${urlImage}${category.poster_path}" alt="${category.name}" />
                <div class="h-1/5 flex flex-col justify-center items-center">
                    <p class="card-text">${category.name}</p>
                </div>
            </div>
        </div>
        `).slice(0, 20).join('')}
    `;

    byCategories.innerHTML = byCategoriesContainer;
}

//Seccion por Busqueda
async function getMoviesBySearch(query) {
    const { data } = await api('search/movie', {
        params: {
            query,
        },
    });
    const bySearch = document.querySelector('.search-movie');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const movies = data.results;
    let searchByMovieContainer = `
        ${movies.map(movie => `
            <div class="Card-peliculas" onclick="movieID('${movie.id}')">
                <div class="h-4/5">
                    <img class="w-full h-full object-cover rounded-t-xl"
                        src="${urlImage}${movie.poster_path}" alt="${movie.title}" />
                    <div class="h-1/5 flex flex-col justify-center items-center">
                        <p class="card-text">${movie.title}</p>
                    </div>
                </div>
            </div>
        `).slice(0, 20).join('')}
    `;

    bySearch.innerHTML = searchByMovieContainer;
}

async function getSeriesBySearch(query) {
    const { data } = await api('search/tv', {
        params: {
            query,
        },
    });
    const bySearch = document.querySelector('.search-serie');
    const urlImage = 'https://image.tmdb.org/t/p/w300/';

    const series = data.results;
    let searchByMovieContainer = `
        ${series.map(serie => `
            <div class="Card-peliculas" onclick="serieID('${serie.id}')">
                <div class="h-4/5">
                    <img class="w-full h-full object-cover rounded-t-xl"
                        src="${urlImage}${serie.poster_path}" alt="${serie.title}" />
                    <div class="h-1/5 flex flex-col justify-center items-center">
                        <p class="card-text">${serie.title}</p>
                    </div>
                </div>
            </div>
        `).slice(0, 20).join('')}
    `;

    bySearch.innerHTML = searchByMovieContainer;
}

//getCategoryMoviesPreview();