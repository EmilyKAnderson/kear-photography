# project_template
A Template for Web Dev Projects

## SETUP
```
sudo nmp install
nodemon app.js

```
## Watch Files
```
gulp serve
```

#Handlebars Page Templates

**layouts**
find layouts in /views/layouts/
default Layout is main.hbs (you can change this in app.js)

edit routes in routes.js

to use a different layout for a page

```
app.get('newpage', function(req,res) {
	res.render('newpage', {
		layout. 'newlayout'
	});
});
```

**partials**
find partials in /views/partials/
{{> thisismypartial }}
