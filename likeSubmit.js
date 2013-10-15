var likeSubmit = (function() {
	
	var paramToObject = function (query) {
		var pairs, i, keyValuePair, key, value, map = {};
		if (query.slice(0, 1) === '?') {
			query = query.slice(1);
		}
		if (query !== '') {
			pairs = query.split('&');
			for (i = 0; i < pairs.length; i += 1) {
				keyValuePair = pairs[i].split('=');
				key = decodeURIComponent(keyValuePair[0]);
				value = (keyValuePair.length > 1) ? decodeURIComponent(keyValuePair[1]) : undefined;
				map[key] = value;
			}
		}
		return map;
	};
	
	return {
		submit: function(path, params, method) { 

    		method = method || "post";
    		params = (function() {
    			switch (typeof params) {
    				case 'string':
    					return paramToObject(params);
    					break;
    				case 'object':
    					return params;
    				default:
    					throw new Error('Wrong data type');
    			}
    		}());
    		
    		var form = document.createElement("form");
    		form.setAttribute("method", method);
    		form.setAttribute("action", path);
    
    		for(var key in params) {
    			if(params.hasOwnProperty(key)) {
    				var hiddenField = document.createElement("input");
    				hiddenField.setAttribute("type", "hidden");
    				hiddenField.setAttribute("name", key);
    				hiddenField.setAttribute("value", params[key]);
    
    				form.appendChild(hiddenField);
    			}
    		}
    
    		document.body.appendChild(form);
    		form.submit();
    	}	
	}
})();
