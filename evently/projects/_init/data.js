function(data) {
  return {
    projects : data.rows.map(function(r) {
      var p = {};
      p.id = r.doc._id;
      p.body = r.doc.body;
      return p;
    })
  }
}