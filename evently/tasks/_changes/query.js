function(e, r) {
  var params = {
    "include_docs" : true,
    "limit" : 20
  };
  
  console.log("query: " + r);
  if (r) {
    params['view'] = "tags";
    params['reduce'] = false;
    params['startkey'] = [r];
    params['endkey'] = [r, {}];
  } else {
    params['view'] = "tasks";
  }
  
  return params;
}