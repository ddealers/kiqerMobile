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

	var login = function(data){
		var deferred = $q.defer();
		api('login', data,
			function(response){
					deferred.resolve(response);
			}, function(response){
				deferred.reject(response);
			}, 'post');
		return deferred.promise;
		//$http.post('http://localhost:3000/api/v2/login', data)
	}

	/*
	var login = function(data){
		$http.post('http://localhost:3000/api/v2/login', data)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}*/

	var show = function(id){
		$http.get('http://localhost:3000/api/v2/users/'+id)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	var update = function(id, data){
		$http.put('http://localhost:3000/api/v2/users/'+id, {user:data})
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	var drop = function(id){
		$http.delete('http://localhost:3000/api/v2/users/'+id)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//POSTS USERS

	//Create User Post
	var cpost = function(id, data){
		$http.post('http://localhost:3000/api/v2/users/'+id+'/posts', {post: data})
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//Single Post
	var spost = function(id, pid){
		$http.get('http://localhost:3000/api/v2/users/'+id+'/posts/'+pid)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//Update User Post
	var upost = function(id, pid, data){
		$http.put('http://localhost:3000/api/v2/users/'+id+'/posts/'+pid, {post:data})
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//Delete User Post
	var dpost = function(id, pid){
		$http.delete('http://localhost:3000/api/v2/users/'+id+'/posts/'+pid)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	return{
		login:login,
		show:show,
		update:update,
		drop:drop,
		cpost:cpost,
		spost:spost,
		upost:upost,
		dpost:dpost
	}

})

.factory('Profile', function($http){
	var show = function( id ){
		$http.get('http://localhost:3000/api/v2/users/'+id+'/profile')
		.success(function(data){
			return data;
		})
		.error(function(e){
			return e;
		})
	}

	var create = function(id, data){
		return(data);

		$http.post('http://localhost:3000/api/v2/users/'+id+'/profile', {profile: data})
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	var update = function(id, data){
		return(data);

		$http.put('http://localhost:3000/api/v2/users/'+id+'/profile', {params: data})
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	var drop = function(id){
		//return(data);
		$http.delete('http://localhost:3000/api/v2/users/'+id+'/profile')
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	return {
		show:show,
		create:create,
		update:update,
		drop:drop
	}

})

.factory('Posts', function($http){
	var show = function(pid){
		$http.get('http://localhost:3000/api/v2/posts/'+pid)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	var update = function(pid, data){
		$http.put('http://localhost:3000/api/v2/posts/'+pid, {post:data})
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	var drop = function(pid){
		$http.delete('http://localhost:3000/api/v2/posts/'+pid)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//COMMENTS
	
	//All comments for a # posts
	var comment = function(pid){
		$http.get('http://localhost:3000/api/v2/posts/'+pid+'/comments')
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//Create new comment
	var ccomment = function(pid, data){
		$http.pots('http://localhost:3000/api/v2/posts/'+pid+'/comments', {comment:data})
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//Show Single comment
	var scomment = function(pid, cid){
		$http.get('http://localhost:3000/api/v2/posts/'+pid+'/comments'+cid)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//Update comment
	var ucomment = function(pid, cid, data){
		$http.put('http://localhost:3000/api/v2/posts/'+pid+'/comments'+cid)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	//Delete comment
	var dcomment = function(pid, cid){
		$http.delete('http://localhost:3000/api/v2/posts/'+pid+'/comments'+cid)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
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

.factory('Kiqs', function($http){

	//CREATE KIQ to USER
	var create = function(data){
		$http.post('http://localhost:3000/api/v2/kiqs', {kiq:data})
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	var drop = function(idk){
		$http.delete('http://localhost:3000/api/v2/kiqs/'+idk)
		.success(function(res){
			return res;
		})
		.error(function(e){
			return e;
		})
	}

	return {
		show:show,
		drop:drop
	}

})