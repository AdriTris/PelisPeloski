nameLogo.addEventListener('click', () => {
    location.hash = '#principal';
});

btnMovies.addEventListener('click', () => {
    location.hash = '#seccion-peliculas';
});

btnSeries.addEventListener('click', () => {
    location.hash = '#seccion-series';
});

btnSearchHeader.addEventListener('click', () => {
    if (location.hash === '#seccion-peliculas' || location.hash.startsWith('#searchMovie=')) {
        location.hash = `#searchMovie=${inputSearchHeader.value.trim()}`;
    } else if (location.hash === '#seccion-series' || location.hash.startsWith('#searchSerie=')) {
        location.hash = `#searchSerie=${inputSearchHeader.value.trim()}`;
    } else {
        location.hash = `#searchMovie=${inputSearchHeader.value.trim()}`;
    }
});

btnSearchHome.addEventListener('click', () => {
    console.log('holaaa');
    if (location.hash === '#seccion-peliculas' || location.hash.startsWith('#searchMovie=')) {
        location.hash = `#searchMovie=${inputSearchHome.value.trim()}`;
    } else if (location.hash === '#seccion-series' || location.hash.startsWith('#searchSerie=')) {
        location.hash = `#searchSerie=${inputSearchHome.value.trim()}`;
    } else {
        location.hash = `#searchMovie=${inputSearchHome.value.trim()}`;
    }
});

btnSearchMovies.addEventListener('click', () => {
    console.log('holaaa movies');
    if (location.hash === '#seccion-peliculas' || location.hash.startsWith('#searchMovie=')) {
        location.hash = `#searchMovie=${inputSearchMovies.value.trim()}`;
    } else if (location.hash === '#seccion-series' || location.hash.startsWith('#searchSerie=')) {
        location.hash = `#searchSerie=${inputSearchMovies.value.trim()}`;
    } else {
        location.hash = `#searchMovie=${inputSearchMovies.value.trim()}`;
    }
});

btnSearchSeries.addEventListener('click', () => {
    if (location.hash === '#seccion-peliculas' || location.hash.startsWith('#searchMovie=')) {
        location.hash = `#searchMovie=${inputSearchSeries.value.trim()}`;
    } else if (location.hash === '#seccion-series' || location.hash.startsWith('#searchSerie=')) {
        location.hash = `#searchSerie=${inputSearchSeries.value.trim()}`;
    } else {
        location.hash = `#searchMovie=${inputSearchSeries.value.trim()}`;
    }
});

cardMovies.addEventListener('click', () => {
    location.hash = '#seccion-peliculas';
});

cardSeries.addEventListener('click', () => {
    location.hash = '#seccion-series';
});


btnArrowMovieCategory.addEventListener('click', () => history.back());
btnArrowSerieCategory.addEventListener('click', () => history.back());
btnArrowMovieDetails.addEventListener('click', () => history.back());
btnArrowSerieDetails.addEventListener('click', () => history.back());
btnArrowSearchMovies.addEventListener('click', () => history.back());
btnArrowSearchSeries.addEventListener('click', () => history.back());
btnArrowSerieSeasonDetail.addEventListener('click', () => history.back());

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
window.scroll({
    top: 0,
    behavior: 'instant'
});

function navigator() {
    console.log({ location });

    if (location.hash.startsWith('#detalles-pelicula=')) {
        movieDetails();
    } else if (location.hash.startsWith('#detalles-serie=')) {
        serieDetails();
    } else if (location.hash.startsWith('#detalles-serie-season=')) {
        serieSeasonDetails();
    } else if (location.hash.startsWith('#searchMovie=')) {
        searchMovies();
    } else if (location.hash.startsWith('#searchSerie=')) {
        searchMovies();
    } else if (location.hash.startsWith('#seccion-peliculas')) {
        moviesSection();
    } else if (location.hash.startsWith('#seccion-series')) {
        seriesSection();
    } else if (location.hash.startsWith('#categoriaPelicula=')) {
        categoryMovie();
    } else if (location.hash.startsWith('#categoriaSerie=')) {
        categorySerie();
    } else {
        homePage();
    }
    scrollTo(top);
    location.hash;
}

function homePage() {
    console.log('Home!!!');
    sectionHeader.classList.remove('hidden');
    sectionHome.classList.remove('hidden');
    sectionMovies.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden');

    getTrendingAll();
    getUpcomingMovies();
    getPopularMovies();
    getPopularSeries();

}

function seriesSection() {
    console.log('Popular Series!!!');
    sectionHeader.classList.remove('hidden');
    sectionSeries.classList.remove('hidden');
    sectionHome.classList.add('hidden');
    sectionMovies.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden');

    getTrendingSeries();
    getTopRatedSeries();
    getCategorySeries();
}

function moviesSection() {
    console.log('Popular Movies!!!');
    sectionHeader.classList.remove('hidden');
    sectionMovies.classList.remove('hidden');
    sectionHome.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden');

    getTrendingMoviesPreview();
    getTopRatedMovies();
    getCategoryMovies();
}

function movieDetails() {
    console.log('Detalles de pelicula!!!');
    sectionMovieDetails.classList.remove('hidden');
    sectionHome.classList.add('hidden');
    sectionMovies.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionHeader.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden');

    const [_, id] = location.hash.split('='); // ['#detalles-pelicula=','id']
    getMovieDetail(id);
}

function serieDetails() {
    console.log('Detalles de serie!!!');
    sectionSerieDetails.classList.remove('hidden');
    sectionHome.classList.add('hidden');
    sectionMovies.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionHeader.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden');

    const [_, id] = location.hash.split('='); // ['#detalles-serie=','id']
    getSerieDetail(id);
}

function serieSeasonDetails() {
    console.log('Detalles de la temporada!!!');
    sectionSerieDetailsSeason.classList.remove('hidden');
    sectionHome.classList.add('hidden');
    sectionMovies.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionHeader.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');

    const [_, catInfo] = location.hash.split('='); // ['#detalles-serie-season=','id-num']
    const [seasonID, seasonNum] = catInfo.split('-');
    getSerieSeasonDetail(seasonID, seasonNum);
}

function categoryMovie() {
    console.log('Movie Category!!!');
    sectionCategoriasMovies.classList.remove('hidden');
    sectionHeader.classList.remove('hidden');
    sectionHome.classList.add('hidden');
    sectionMovies.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden');

    const [_, id] = location.hash.split('=') // ['#category','id-nombre']
    const [catID, name] = id.split('-');

    getMoviesByCategory(catID);
    titleCategoryMovieSectionCategorias.innerHTML = decodeURI(name); //quita el %20 y pone los espacios y tildes adecuadas
}

function categorySerie() {
    console.log('Serie Category!!!');
    sectionCategoriasSeries.classList.remove('hidden');
    sectionHeader.classList.remove('hidden');
    sectionHome.classList.add('hidden');
    sectionMovies.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden');

    const [_, id] = location.hash.split('='); // ['#category','id-nombre']
    const [catID, name] = id.split('-');

    getSeriesByCategory(catID);
    titleCategorySerieSectionCategorias.innerHTML = decodeURI(name);
}

function searchMovies() {
    console.log('Search Movies!!!');
    sectionHeader.classList.remove('hidden');
    sectionSearchMovies.classList.remove('hidden')
    sectionHome.classList.add('hidden');
    sectionMovies.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchSeries.classList.add('hidden')

    //const [_, searchValue] = location.hash.split('=') // ['#search','busqueda']
    const query = decodeURI(location.hash.split("=")[1]); //para poder buscar con espacios en blanco
    getMoviesBySearch(query);
}

function searchSeries() {
    console.log('Search Series!!!');
    sectionHeader.classList.remove('hidden');
    sectionSearchSeries.classList.remove('hidden')
    sectionHome.classList.add('hidden');
    sectionMovies.classList.add('hidden');
    sectionSeries.classList.add('hidden');
    sectionMovieDetails.classList.add('hidden');
    sectionSerieDetails.classList.add('hidden');
    sectionSerieDetailsSeason.classList.add('hidden');
    sectionCategoriasMovies.classList.add('hidden');
    sectionCategoriasSeries.classList.add('hidden');
    sectionSearchMovies.classList.add('hidden')

    //const [_, searchValue] = location.hash.split('=') // ['#search','busqueda']
    const query = decodeURI(location.hash.split("=")[1]); //para poder buscar con espacios en blanco
    getSeriesBySearch(query);
}