var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
