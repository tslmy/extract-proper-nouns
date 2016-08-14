(function($) {
	var text = $('article').text();
	var words = _.words(text);
	_.forEach(words, function(word) {
		console.log(word);
	});
}(jQuery));