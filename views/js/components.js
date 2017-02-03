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
    bindings: {children : '<', grandparents: '<', parent: '<'},
    templateUrl: 'template/children.html', 
    controller: function(){
        let color = d3.scale.category20()
        this.options = {
            chart: {
                type: "forceDirectedGraph",
                height: 450,
                width: 644,
                margin: {top: 20,right: 20,bottom: 20,left: 20},
                color: function(d){
                    return color(d.group)
                },
                nodeExtras: function(node) {
                    node && node
                      .append("text")
                      .attr("dx", 8)
                      .attr("dy", ".35em")
                      .text(function(d) { return d.name })
                      .style('font-size', '10px');
                }

            }
        }


        this.data = {
            'nodes': [
                {'name':'nonno', 'group': 1},
                {'name':'nonna', 'group': 1},
                {'name':'papà', 'group': 2},
                {'name':'mamma', 'group': 2},
                {'name':'figlio', 'group': 3},
                {'name':'figlia', 'group': 3}
            ],
            'links':[
                {"source":1,"target":0,"value":1},
                {"source":2,"target":0,"value":8},
                {"source":3,"target":0,"value":10},
                {"source":3,"target":2,"value":6},
            ]
        };
    }
});