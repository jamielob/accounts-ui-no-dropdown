if (Meteor.isClient) {
  Template.loginButtons.rendered = function() {
    Deps.autorun(function(){
    	Accounts._loginButtonsSession.get('dropdownVisible');
    	Accounts._loginButtonsSession.set('dropdownVisible', true);	
	});
  }
}