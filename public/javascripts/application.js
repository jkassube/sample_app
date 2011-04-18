document.observe("dom:loaded", function() {
	wordCount('micropost_content', 140);
	$('micropost_content').observe("keyup", function() { 
		wordCount('micropost_content', 140); 
	});	
})

function wordCount(element, limit) {
	var count = $(element).getValue().length;
	$('content_count').update(limit - count);
}