(function($) {
	$('span').each(function(wordIndex) {
		var word = $(this).text();
		$.ajax({
			url: 'https://en.wikipedia.org/w/api.php',
			data: { action: 'query', list: 'search', srsearch: word, format: 'json' },
			dataType: 'jsonp',
			word: word, //this is how you pass a variable to the call.
			wordIndex: wordIndex,
			dom: this,
			success: function (data) {
				properlySpelled_word = data.query.search[0].title;
				if (this.word == properlySpelled_word) {
					console.log(this.word+' is correctly spelled.');
				} else {
					console.log(this.word+' is corrected to ' + properlySpelled_word+'.');
				};
				$.ajax({
					url: 'https://en.wikipedia.org/w/api.php',
					data: { action: 'query', prop: 'extracts', exintro: '', redirects: 1, explaintext: '', titles: properlySpelled_word, format: 'json' },
					dataType: 'jsonp',
					word: this.word,
					wordIndex: this.wordIndex,
					dom: this.dom,
					properlySpelled_word: properlySpelled_word,
					success: function (data) {
						var pages = data.query.pages;
						for (pageID in data.query.pages) {
							var page = pages[pageID];

							$(this.dom).text('['+$(this.dom).text()+']['+this.wordIndex+'][^'+this.wordIndex+']');
							var summary = '('+page.title+') '+page.extract.replace(/(\r\n|\n|\r)/gm,"")+'\n';
							$('pre').append('[^'+this.wordIndex+']: '+summary+'\n['+this.wordIndex+']: https://en.wikipedia.org/?curid='+pageID+'\n\n');

							break; //we only need the first result
						}
					}
				});
			}
		});

	});

}(jQuery));