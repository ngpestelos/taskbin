function(data) {
  var list = data.rows.map(function(r) {
    var t = {};
    t.id = r.doc._id;
    t.task = r.doc.task;
    t.created = new Date(r.doc.created);
    return t;
  });
  
  return {"tasks" : list.reverse()};
}