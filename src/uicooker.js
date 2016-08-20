/*!
 * uiCooker v1.0.0
 *
 * Copyright WCP Digital and Patrick Purcell
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 2016-08-20
 */
"use strict";
function uiCooker()
{
	var self = this
	,version = "1.0.0"
	
	/*
	* Private methods
	*/
	,enabled = function()
	{
		var enabled = (navigator.enabled) ? true : false;
		if( typeof navigator.enabled == "undefined" && !enabled ){ 
			document.cookie="testcookie";
			enabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
		}
		return enabled;
	}
	
	,get = function( key )
	{
        var name = key + "=";
        var ca = document.cookie.split(";");
        for( var i = 0; i < ca.length; i++ ) {
            var c = ca[i];
			
            while (c.charAt(0) == " "){
				c = c.substring(1);
			}
            if( c.indexOf(name) == 0 ){
				return c.substring(name.length, c.length);
			}
        }
        return null;
	}
	
	,set = function( key, value, expireDays )
	{
        var d = new Date();
        d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + "; " + expires;	
	};
	
	/*
	* Public methods
	*/
	self.get = get;
	self.set = set;
	self.enabled = enabled;
};
uiCooker.prototype.constructor = uiCooker;