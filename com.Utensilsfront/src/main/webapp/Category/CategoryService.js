app.factory('CategoryService', ['$http', '$q', function($http, $q){
	 
	var BASE_URL = 'http://localhost:8080/com.Utensils1';
	//var BASE_URL = 'http://cookwithjoy.herokuapp.com';
	
    return {
         		InsertCategory: function(item){
         			
         			console.log( 'Insert Category Service:' );
         			console.log(item);
         			
                    return $http({
                    	  method: 'POST',
                    	  url: BASE_URL + '/AddCategory',
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
    		
    			ViewCategory: function(){
     			
    				console.log( 'All Service:' );
     			
                return $http({
                	  method: 'POST',
                	  url: BASE_URL + '/ViewCategory',
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
        	
    
    		DeleteCategory: function(item){
    	
    			console.log( 'Delete Category Service:' );
     			console.log(item);
     			
                return $http({
                	  method: 'POST',
                	  url: BASE_URL + '/DeleteCategory',
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
    		
    	UpdateCategory: function(item){
    			
    			console.log( 'Update Category Service:' );
     			console.log(item);
     			
                return $http({
                	 method: 'POST',
                	  url: BASE_URL + '/UpdateCategory',
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