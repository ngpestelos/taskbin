function(e, r) {
  return {
    "view" : "tasks",    
    "startkey" : [r.project],
    "endkey" : [r.project, {}],
    "include_docs" : true
  };
}