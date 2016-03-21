Template.formIndex.helpers({
    forms: function() {
    	return Forms.find({});
    } 
});


Template.formView.helpers({

	form: function() {
		var id = FlowRouter.getParam('id');
		console.log(Forms);
		var form = Forms.findOne({_id: id}) || {};
		console.log(id);
		return form;
	}

});
