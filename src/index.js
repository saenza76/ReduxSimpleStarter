import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAFEzYcChrhieAexTihGvXHwX6W6iPGqv8';

YTSearch({ key: API_KEY, term: 'cats'}, function(data){
	console.log(data);
});

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));