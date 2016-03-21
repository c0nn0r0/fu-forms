FlowRouter.route('/', {
	action: function() {
    	BlazeLayout.render("main", {content: "home"});
  	}
});


FlowRouter.route('/forms', {
    name: 'formIndex',
	action: function() {
		BlazeLayout.render("main", {content: "formIndex"});
	}
});

FlowRouter.route('/form/:id', {
    name: 'formView',
    action: function(params) {
        BlazeLayout.render("main", {content: "formView"});
    }
});

FlowRouter.route('/create', {
    name: 'formCreate',
    action: function(params) {
        BlazeLayout.render("main", {content: "formCreate"});
    }
});