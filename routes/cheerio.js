const request = require('request');
const cheerio = require('cheerio');


module.exports = function(app){

	app.get('/scrape', function (req, res){

		request('http://www.nj.com/beer/', function(err, response, html){
			if (err) throw err;

			var $ = cheerio.load(html);

			var result = [];


            $('item-text').each(function(i, element) {
                var link = $(element).find('a').attr('href');
                var title = $(element).find('a').attr('href').text();

                result.push({
                    title: title,
                    link: link,
                });

			});

		 	res.render('scrape', {scrape_data: result});

		});


	});

};