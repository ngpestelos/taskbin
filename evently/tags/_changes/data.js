function(data) {
  var list = data.rows.map(function(r) {
    return {"tag" : r.key};
  });
  
  return {"tags" : list};
}