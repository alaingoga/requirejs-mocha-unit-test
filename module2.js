define(['module1'], function(m1){
  return {
    average: function(arr){
    	if (arr instanceof Array){
    		return m1.sum(arr)/arr.length;
    	} else {
    		return null
    	}
    
    }
  }
});