app.config(function($stateProvider){
	
	var helloState = {
		name: 'hello',
		url: '/hello',
		template: '<h3> Hello State </h3>'
	};


	var aboutState = {
		name: 'about',
		url: '/about',
		template: '<h3> About State </h3>'
	};

	var helloStateWithComponent = {
		name: 'helloWithComponent',
		url: '/hello',
		component: 'hello'
	};

	var peopleState = {
		name: 'people',
		url: '/people',
		component: 'people',
		resolve: {
			people: function(PeopleService){
				return PeopleService.getAllPeople();
			}
		}
	};

	let personState = {
		name: 'person',
		url: '/people/{personId}',
		component: 'person',
		resolve: {
			person: function(PeopleService, $transition$){
				return PeopleService.getPerson($transition$.params().personId);
			}
		}
	};

	let childrenState = {
		name: 'person.children',
		url: '/children',
		component: 'children',
		resolve: {
			children: function(person){
				console.log(person);
				return person.children;
			}
		}
	};

	$stateProvider.state(helloState);
  	$stateProvider.state(aboutState);
  	$stateProvider.state(helloStateWithComponent);
  	$stateProvider.state(peopleState);
  	$stateProvider.state(personState);
  	$stateProvider.state(childrenState);
});