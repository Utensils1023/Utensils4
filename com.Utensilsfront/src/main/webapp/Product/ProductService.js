app.factory('ProductService', ['$http', '$q', function($http, $q){
	 
	var BASE_URL = 'http://localhost:8080/com.Utensils1';
	//var BASE_URL = 'http://cookwithjoy.herokuapp.com';
	
    return {
         		InsertProduct: function(item){
         			
         			console.log( 'Insert Product Service:' );
         			console.log(item);
         			
                    return $http({
                    	  method: 'POST',
                    	  url: BASE_URL + '/AddProduct',
                    	  data:item,
                    	  headers:{'Content-Type': 'application/json'}
                    	})
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while updating User');
                                        return $q.reject(errResponse);
                                    }
                            );
            		
    		},
    		
    			ViewProduct: function(){
     			
    				console.log( 'All Service:' );
     			
                return $http({
                	  method: 'POST',
                	  url: BASE_URL + '/ViewProduct',
                	  headers:{'Content-Type': 'application/json'}
                	})
                        .then(
                                function(response){
                                    return response;
                                }, 
                                function(errResponse){
                                    
                                    return $q.reject(errResponse);
                                }
                        );
        	},
        	
    
    		DeleteProduct: function(item){
    	
    			console.log( 'Delete Product Service:' );
     			console.log(item);
     			
                return $http({
                	  method: 'POST',
                	  url: BASE_URL + '/DeleteProduct',
                	  data:item,
                	  headers:{'Content-Type': 'application/json'}
                	})
                        .then(
                                function(response){
                                    return response.data;
                                }, 
                                function(errResponse){
                                    console.error('Error while updating User');
                                    return $q.reject(errResponse);
                                }
                        );
        		

    	
    	
    	
    	
    	
    },
    		
    	UpdateProduct: function(item){
    			
    			console.log( 'Update Product Service:' );
     			console.log(item);
     			
                return $http({
                	 method: 'POST',
                	  url: BASE_URL + '/UpdateProduct',
                	  data:item,
                	})
                        .then(
                                function(response){
                                    return response.data;
                                }, 
                                function(errResponse){
                                    console.error('Error while updating User');
                                    return $q.reject(errResponse);
                                })
    	}
        		
    	}
   
}])