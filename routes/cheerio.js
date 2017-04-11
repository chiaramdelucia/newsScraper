const request = require('request');
const cheerio = require('cheerio');


module.exports = function(app){

	app.get('/scrape', function (req, res){

		request('http://www.nj.com/beer/', function(err, response, html){
			if (err) throw err;
		
			var $ = cheerio.load(html);

			var result = [];
			console.log(result);


            $('div.h2.fullheadline').each(function(i, element) {
                var link = $(element).children().attr('href');
                var title = $(element).children().text();
                console.log(link);
                console.log(title);


                result.push({
                    title: title,
                    link: link,
                });
                console.log(result);

			});

		 	res.render('scrape', {scrape_data: result});

		});


	});

};