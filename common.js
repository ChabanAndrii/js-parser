(function () { 
	var result = [];
	var titles = document.getElementsByClassName('article-title');
	var byline = document.getElementsByClassName('article-byline');
	for (var i = 0; i < byline.length; i++) {
		result[i] = {
			"id" : i,
			"title" : titles[i]['innerText'],
			"autor" : byline[i]['children'][0]['innerText'],
			"date" : byline[i]['children'][1]['innerText']
		}	
    }
    console.log(result);
	}());