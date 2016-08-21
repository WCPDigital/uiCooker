# uiCooker Javascript Utility - A light-weight JavaScript Cookie util.
================================

** A super simple, super small, bare-bones JavaScript Cookie helper.

### How to use uiCooker

```html
<head>
	...
</head>
<body>
	...
</body>
<script src="uicooker.min.js"></script>
<script>
"use strict";
var Cookies = new uiCooker();

var enabled = Cookies.enabled();
if( enabled ){
	console.log("Cookies enabled.");
	
	var data = null;
	if( Cookies.has("customData") ){
		console.log("Cookie exists.");
		
		data = Cookies.get("customData");
		console.log("Get cookie: " + data );
		
		data = Cookies.remove("customData");
		console.log("Remove cookie: " + data );
	}
	
	else{
		data = Cookies.set("customData", 'some_custom_data')
		console.log("Set cookie: " + data );
	}
}

else{
	console.log("Cookies disabled.");
}
</script>
```

## License
Copyright &copy; WCP Digital &amp; Patrick Purcell<br>
Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).
<br>**Commercial use?** Go for it! You can include uiGlance in your commercial products.
