App.Frog = DS.Model.extend({
	primary: DS.attr('string'),
	secondary: DS.attr('string'),
   breed: DS.attr('string')
});

App.Frog.FIXTURES = [
 {
   id: 1,
   primary: 'black',
   secondary: 'picea',
   breed: 'anura'
 },
 {
   id:2,
   primary: 'red',
   secondary: 'picea',
   breed: 'anura'
 }
];
