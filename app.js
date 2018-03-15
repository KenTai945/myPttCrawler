var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request({
	uri: 'https://www.ptt.cc/bbs/Tech_Job/index.html',
	method: 'GET'
}, function(error, response, body){
	if(error){
		return;
	}
	console.log(body);

	var $ = cheerio.load(body);
	var result = [];
	var title = $('.r-ent a');

  	// console.log(title);

 	for(var i = 0; i < title.length; i++){
 		// console.log($(title[i]).text(), $(title[i]).attr('href'));
 		result.push({ title: $(title[i]).text(), link: $(title[i]).attr('href')});
 	}

 	console.log(result);
 	fs.writeFileSync('result.json', JSON.stringify(result));
});
