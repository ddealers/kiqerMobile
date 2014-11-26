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

.factory('User', function($resource){
  var url = 'http://localhost:3000/api/v2/users/:id';
  return $resource(url,
  {id:'@id'},
  {
    create:{method:'POST'},
    show:{method:'GET'},
    update:{method:'PUT'},
    destroy:{method:'DELETE'}
  })
})
