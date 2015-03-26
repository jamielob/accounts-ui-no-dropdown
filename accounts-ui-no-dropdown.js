if (Meteor.isClient) {
  
    Deps.autorun(function(){
    	Accounts._loginButtonsSession.get('dropdownVisible');
    	Accounts._loginButtonsSession.set('dropdownVisible', true);	
	});
  
}