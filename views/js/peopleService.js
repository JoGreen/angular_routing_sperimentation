app.service('PeopleService', function($http){
	let url = '/getAllPeople';
	let parentsUrl = '/getParents'
	let people = [];
	return {
		getAllPeople: function(){
			return $http.get(url).then(function(res){
				people = res.data.people
				return people;			
			});
		},

		getPerson: function(id){
			for(i in people){
				if (people[i].id === id){
					console.log(people);
					console.log(people[i]);
					return people[i];
				}
			}
		},

		getParents: function(person){
			console.log('person name = '+ person.name);
			return $http({method:'GET', url:parentsUrl, params: {person:person}}).then(function(res){			 
				return res.data;			
			});
		}
	}
	
});