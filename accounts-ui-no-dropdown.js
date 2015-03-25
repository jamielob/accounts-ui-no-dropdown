if (Meteor.isClient) {
  Template.loginButtons.rendered = function() {
    Accounts._loginButtonsSession.set('dropdownVisible', true);
  }
}