
Overview
--------
- Article / http://engineering.shapesecurity.com/2015/01/detecting-phantomjs-based-visitors.html
- Repo / https://github.com/ikarienator/phantomjs_hide_and_seek
- Video / https://www.youtube.com/watch?v=95sydbXK_7k

When a request comes in:

1. Look @ the User Agent.
- Check it @ the HTTP request level.
- Then try and check it @ the client level.
- Use device atlas

< BUT GUESS WHAT > 

It's easy to spoof a User Agent. Even your grandma can spoof a user agent. 

2. Look @ the contents of 'navigator.plugins' @ the client level. 
- Most modern browsers, even the default installs come with @ least 1 of these installed. 

< BUT GUESS WHAT - THEY COULD BEAT THAT TOO > 

3. See if you can really do what needs to be done if you're really a browser. 
