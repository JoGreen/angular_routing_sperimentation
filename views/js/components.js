app.component('hello',{
	template:'<h3>{{$ctrl.greeting}} Solar System!</h3>' +
             '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
    controller: function(){
    	this.greeting = 'hello with component';

    	this.toggleGreeting = function(){
    		this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
    	}
    }
});

app.component('people',{
	bindings: {people: '<'},
	templateUrl:'template/people.html'
	
});

app.component('person', {
	bindings: {person : '<'},
	templateUrl: 'template/person.html'
});

app.component('children', {
    bindings: {children : '<'},
    templateUrl: 'template/children.html'
});