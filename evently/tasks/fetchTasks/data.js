function(data) {
  /*
  return {
    tasks : data.rows.map(function(r) {
      var t = {};
      t.id = r.doc._id;
      t.body = r.doc.body;
      t.created_at = $.prettyDate(r.doc.created_at);
      return t;
    })
  }*/
  
  var _tasks = data.rows.map(function(r) {
    var t = {};
    t.id = r.doc._id;
    t.body = r.doc.body;
    t.created_at = $.prettyDate(r.doc.created_at);
    return t;
  });
  
  return {
    tasks : _tasks.reverse()    
  }
}