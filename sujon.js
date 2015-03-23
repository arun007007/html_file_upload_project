var server = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(sujon_request, sujon_response){
	var pathname = url.parse(sujon_request.url).pathname;
	console.log("Request for " + pathname + " received.");	
	route(handle, pathname, sujon_response, sujon_request); 
}

server.createServer(onRequest).listen(8888);
console.log("Server has started.");
}

exports.start = start; 
