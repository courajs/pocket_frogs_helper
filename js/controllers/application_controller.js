App.ApplicationController = Ember.ArrayController.extend({
	primaries: ['black', 'red'],
	secondaries: ['picea', 'albeo'],
	breeds: ['anura', 'marmorea'],

	actions: {
		newFrog: function(){
			var primary = this.get('newPrimary');
			var secondary = this.get('newSecondary');
			var breed = this.get('newBreed');

			var frog = this.store.createRecord('frog', {
        		primary: primary,
        		secondary: secondary,
        		breed: breed
      		});
		}
	}
})

App.FrogController = Ember.ObjectController.extend({
	actions: {
		removeFrog: function(){
			var frog = this.get('model');
			frog.deleteRecord();
			frog.save();
		}
	}
});