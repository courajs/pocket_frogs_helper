App.ApplicationController = Ember.ArrayController.extend({
	primaries: ['maroon', 'red', 'tangelo', 'orange', 'golden', 'yellow', 'lime', 'green', 'emerald', 'olive', 'marine', 'aqua', 'azure', 'blue', 'purple', 'royal', 'pink', 'violet', 'white', 'beige', 'cocos', 'black', 'glass'],
	secondaries: ['tingo', 'carota', 'aurum', 'folium', 'muscus', 'callaina', 'caelus', 'pruni', 'viola', 'ceres', 'floris', 'albeo', 'bruna', 'cafea', 'picea', 'chroma'],
	breeds: ['anura', 'crustalli', 'velatus', 'clunicula', 'marmorea', 'puncti', 'tribus', 'lanterna', 'glacio', 'zebrae', 'adamantis', 'africanus', 'ludo', 'partiri', 'nasus', 'roboris', 'bovis', 'marinus', 'mixtus', 'calyx', 'viduo', 'dextera', 'stellata', 'serpentis', 'spinae', 'geminus', 'nimbilis', 'cesti', 'bulla', 'sagitta', 'amfractus', 'orbis', 'ornatus', 'sol', 'obaro', 'lucus', 'ligo', 'persona', 'corona', 'arbor', 'vinaceus', 'ocularis', 'gyrus', 'insero', 'biplex', 'pingo', 'trivium', 'calvaria', 'floresco', 'bulbus', 'magus', 'veru', 'signum', 'templum', 'papilio', 'pluma', 'cornus', 'volta', 'flecto', 'figularis', 'aceris', 'lunaris', 'tabula', 'pictoris', 'shelbus', 'skeletos', 'pyramis', 'lotus', 'spira', 'planeta', 'mazeus', 'palma', 'coclearis', 'mustacium', 'axis', 'igneous', 'infinitas', 'nodare', 'dimidius', 'scutulata', 'arcus', 'botulus', 'americano', 'symphonia', 'vicis', 'janus', 'levar', 'gemma', 'favus', 'tessera', 'frondis', 'pistrix', 'nebula', 'fractus', 'hennae', 'pulvillus', 'quilta', 'foramen', 'emblema', 'fortuno'],
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
      		frog.save();
		}
	}
})