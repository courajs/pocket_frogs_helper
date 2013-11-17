App.FrogController = Ember.ObjectController.extend({
	actions: {
		removeFrog: function(){
			var frog = this.get('model');
			frog.deleteRecord();
			frog.save();
		}
	}
});