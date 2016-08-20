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
		var key = "uic", enabled = !!(navigator.enabled);
		if( !enabled ){ 
			document.cookie = key;
			enabled = (document.cookie.indexOf( key ) != -1);
		}
		return enabled;
	}
	
	,has = function( key )
	{
		return (get( key ) !== null);
	}
	
	,get = function( key )
	{
        var name = key + "=";
        var ca = document.cookie.split(";");
        for( var i = 0; i < ca.length; i++ ) {
            var c = ca[i];
			
            while( c.charAt(0) == " " ){
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
		if( !expireDays ){
			expireDays = 1;
		}
        var d = new Date();
        d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + "; " + expires;	
	}
	
	,remove = function( key )
	{
		set(key, "", -1);
	};
	
	/*
	* Public methods
	*/
	self.enabled = enabled;
	self.has = has;
	self.get = get;
	self.set = set;
	self.remove = remove;
};
uiCooker.prototype.constructor = uiCooker;