<h1 style="text-align:center"><img src="https://i.imgur.com/dHpUAIh.png"></h1>

Music-js is a music visualization program that includes many built-in
customization options for a playlist of music. Provided links to
MP3, Ogg Vorbis, and/or WebM sound files, it can create a real-time
visualization of the music as it plays, using the HTML5 Audio API.

This application supports visualization of external sound files,
enabling this to easily become a plugin for other sites.

Documentation will be added in another update. For now, refer to the
JSON object in ``index.html`` under ``/static`` for a demonstration
of customizable attributes.

To install this server, run

```
git clone https://github.com/patrickroberts/music-js.git
cd music-js/static/
mkdir media
```

At this point you should add songs to the ``media`` directory and edit the
JSON in ``index.html`` to include the songs you want to visualize. After
that, return to the terminal or command prompt and run

```
cd ..
npm install
node app.js
```

then open <http://localhost:8080>.