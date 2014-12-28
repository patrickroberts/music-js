var express = require('express'),
    favicon = require('serve-favicon'),
	app = express();

app.use(favicon(__dirname + '/static/img/favicon.png'));
app.use(express.static(__dirname + '/static'));
app.listen(process.env.PORT || 8080);
