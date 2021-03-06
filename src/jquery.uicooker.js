/*!
 * uiCooker v1.0.0
 *
 * @author Patrick Purcell
 * @copyright Copyright (c) 2016 WCP Digital
 * @license http://opensource.org/licenses/MIT
 * @link http://www.wcpdigital.com.au
 * @link http://patrickpurcell.bio
 *
 * Date: 2016-08-23
 */
(function( $ ){
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
			
			return value;
		}
		
		,remove = function( key )
		{	
			var data = get( key );
			set(key, "", -1);
			return data;
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

	if( !$.uiCooker ){
		$.uiCooker = new uiCooker();
	}
	
}( jQuery ));