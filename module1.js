define(function(){
  return {
    show: function(m){
      console.log(m);
    },
    sum: function(arr){
    	if (arr instanceof Array){
    		var total = arr.reduce(function(a, b) {
			  return a + b;
			}, 0);
			return total;
    	} else {
    		return null;
    	}
      
    }
  }
});