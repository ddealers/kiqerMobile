angular.module('starter.services', [])

/**
* A simple example service that returns some data.
*/
.factory('Friends', function() {
// Might use a resource here that returns a JSON array

// Some fake testing data
var friends = [
{ id: 0, name: 'Scruff McGruff' },
{ id: 1, name: 'G.I. Joe' },
{ id: 2, name: 'Miss Frizzle' },
{ id: 3, name: 'Ash Ketchum' }
];

return {
	all: function() {
		return friends;
	},
	get: function(friendId) {
// Simple index lookup
return friends[friendId];
}
}
})
//HACER LOGIN USER====
//data = {name:'',...}

.factory('User', function($rootScope, $http, $q){
	var api = function(request, params, onSuccess, onError, method){
		var url = 'http://localhost:3000/api/v2/';
		var theparams = params || {};
		//theparams.q = request;	
		if(!method){
			$http.get(url+request, {params:theparams})
			.success(onSuccess)
			.error(onError);
		}else{
			$http[method](url+request, theparams)
			.success(onSuccess)
			.error(onError);
		}
	}

	var login = function(data){
		var deferred = $q.defer();
		api('login', data,
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'post');
		return deferred.promise;
	}

	var create = function(data){
		var deferred = $q.defer();
		api('users', {user:data},
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'post');
		return deferred.promise;
	}

	var update = function(id, data){
		//$http.put('http://localhost:3000/api/v2/users/'+id, {user:data})
		var deferred = $q.defer();
		api('users/'+id, {user:data},
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'put');
		return deferred.promise;
	}

	var show = function(id){
		//$http.get('http://localhost:3000/api/v2/users/'+id)
		var deferred = $q.defer();
		api('users/'+id,
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			});
		return deferred.promise;
	}

	var drop = function(id){
		//$http.delete('http://localhost:3000/api/v2/users/'+id)
		var deferred = $q.defer();
		api('users/'+id,
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'delete');
		return deferred.promise;
	}

	//POSTS USERS

	//all user post
	var getPost = function(id){
		var deferred = $q.defer();
		api('users/'+id+'/posts',
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.resolve(response);
			});
		return deferred.promise;
	}

	//Create User Post
	var cpost = function(id, data){
		//$http.post('http://localhost:3000/api/v2/users/'+id+'/posts', {post: data})
		var deferred = $q.defer();
		api('users/'+id+'/posts', {post: data},
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'post');
		return deferred.promise;
	}

	//Single Post
	var spost = function(id, pid){
		//$http.get('http://localhost:3000/api/v2/users/'+id+'/posts/'+pid)
		var deferred = $q.defer();
		api('posts/'+id+'/posts/'+pid,
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			});
		return deferred.promise;
	}

	//Update User Post
	var upost = function(id, pid, data){
		//$http.put('http://localhost:3000/api/v2/users/'+id+'/posts/'+pid, {post:data})
		var deferred = $q.defer();
		api('posts/'+id+'/posts/'+pid, {post: data},
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'put');
		return deferred.promise;
	}

	//Delete User Post
	var dpost = function(id, pid){
		//$http.delete('http://localhost:3000/api/v2/users/'+id+'/posts/'+pid)
		var deferred = $q.defer();
		api('posts/'+id+'/posts',
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'delete');
		return deferred.promise;
	}

	return{
		login:login,
		create:create,
		show:show,
		update:update,
		drop:drop,
		getPost:getPost,
		cpost:cpost,
		spost:spost,
		upost:upost,
		dpost:dpost
	}

})

.factory('Profile', function($rootScope, $http, $q){
	var api = function(request, params, onSuccess, onError, method){
		var url = 'http://localhost:3000/api/v2/';
		var theparams = params || {};
		//theparams.q = request;	
		if(!method){
			$http.get(url+request, {params:theparams})
			.success(onSuccess)
			.error(onError);
		}else{
			$http[method](url+request, theparams)
			.success(onSuccess)
			.error(onError);
		}
	}

	var show = function( id ){
		//$http.get('http://localhost:3000/api/v2/users/'+id+'/profile')
		var deferred = $q.defer();
		api('users/'+id+'/profile',
			function(response){
				console.log('OK: '+response);
				deferred.resolve(response);
				//deferred.reject(response);
			}, function(response, status, headers, config){
				//deferred.reject(response);
				deferred.resolve(response);
				console.log(status);
			});
		return deferred.promise;
	}

	var create = function(id, data){
		//$http.post('http://localhost:3000/api/v2/users/'+id+'/profile', {profile: data})
		var deferred = $q.defer();
		api('users/'+id+'/profile', {profile:data},
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'post');
		return deferred.promise;
	}

	var update = function(id, data){
		//$http.put('http://localhost:3000/api/v2/users/'+id+'/profile', {params: data})
		var deferred = $q.defer();
		api('users/'+id+'/profile', {profile:data},
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'put');
		return deferred.promise;
	}

	var drop = function(id){
		//$http.delete('http://localhost:3000/api/v2/users/'+id+'/profile')
		var deferred = $q.defer();
		api('users/'+id+'/profile',
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'delete');
		return deferred.promise;
	}

	return {
		show:show,
		create:create,
		update:update,
		drop:drop
	}

})

.factory('Posts', function($rootScope, $http, $q){
	var api = function(request, params, onSuccess, onError, method){
		var url = 'http://localhost:3000/api/v2/';
		var theparams = params || {};
		//theparams.q = request;	
		if(!method){
			$http.get(url+request, {params:theparams})
			.success(onSuccess)
			.error(onError);
		}else{
			$http[method](url+request, theparams)
			.success(onSuccess)
			.error(onError);
		}
	}

	var show = function(pid){
		//$http.get('http://localhost:3000/api/v2/posts/'+pid)
		var deferred = $q.defer();
		api('posts/'+pid,
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			});
		return deferred.promise;
	}

	var update = function(pid, data){
		//$http.put('http://localhost:3000/api/v2/posts/'+pid, {post:data})
		var deferred = $q.defer();
		api('posts/'+pid, {post:data},
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'put');
		return deferred.promise;
	}

	var drop = function(pid){
		//$http.delete('http://localhost:3000/api/v2/posts/'+pid)
		var deferred = $q.defer();
		api('posts/'+pid,
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'delete');
		return deferred.promise;
	}

	//COMMENTS
	
	//All comments for a # posts
	var comment = function(pid){
		//$http.get('http://localhost:3000/api/v2/posts/'+pid+'/comments')
		var deferred = $q.defer();
		api('posts/'+pid+'/comments',
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			});
		return deferred.promise;
	}

	//Create new comment
	var ccomment = function(pid, data){
		//$http.pots('http://localhost:3000/api/v2/posts/'+pid+'/comments', {comment:data})
		var deferred = $q.defer();
		api('posts/'+pid+'/comments', {comment:data},
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'post');
		return deferred.promise;
	}

	//Show Single comment
	var scomment = function(pid, cid){
		//$http.get('http://localhost:3000/api/v2/posts/'+pid+'/comments'+cid)
		var deferred = $q.defer();
		api('posts/'+pid+'/comments/'+cid,
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			});
		return deferred.promise;
	}

	//Update comment
	var ucomment = function(pid, cid, data){
		//$http.put('http://localhost:3000/api/v2/posts/'+pid+'/comments'+cid)
		var deferred = $q.defer();
		api('posts/'+pid+'/comments/'+cid,
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'put');
		return deferred.promise;
	}

	//Delete comment
	var dcomment = function(pid, cid){
		//$http.delete('http://localhost:3000/api/v2/posts/'+pid+'/comments'+cid)
		var deferred = $q.defer();
		api('posts/'+pid+'/comments/'+cid,
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'delete');
		return deferred.promise;
	}

	return {
		show:show,
		update:update,
		drop:drop,
		comment:comment,
		ccomment:ccomment,
		scomment:scomment,
		ucomment:ucomment,
		dcomment:dcomment
	}

})

.factory('Kiqs', function($rootScope, $http, $q){
	var api = function(request, params, onSuccess, onError, method){
		var url = 'http://localhost:3000/api/v2/';
		var theparams = params || {};
		theparams.q = request;
		if(!method){
			$http.get(url, {params:theparams})
			.success(onSuccess)
			.error(onError);
		}else{
			$http[method](url+request, theparams)
			.success(onSuccess)
			.error(onError);
		}
	}

	//CREATE KIQ to USER
	var create = function(data){
		//$http.post('http://localhost:3000/api/v2/kiqs', {kiq:data})
		var deferred = $q.defer();
		api('kiqs/', {kiq:data},
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'post');
		return deferred.promise;
	}

	var drop = function(idk){
		//$http.delete('http://localhost:3000/api/v2/kiqs/'+idk)
		var deferred = $q.defer();
		api('kiqs/'+idk,
			function(response){
				deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'delete');
		return deferred.promise;
	}

	return {
		create:create,
		drop:drop
	}

})