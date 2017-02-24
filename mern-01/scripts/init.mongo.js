#!usr/bin/mongo

var db = new Mongo().getDB("bugsdb");

db.bugs.remove( {} );

db.bugs.insert([
  {id: 1, priority: 'P1', status:'Open', owner:'Ravan', title:'App crashes on open'},
  {id: 2, priority: 'P2', status: 'New', owner:'Eddie', title:'Misaligned border on panel'},
]);
