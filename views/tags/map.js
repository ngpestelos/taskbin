function(doc) {
  if (doc.type == "task" && doc.status != "closed") {
    var words = {};
    doc.task.replace(/\#([\w\-\.]+)/g, function(tag, word) {
      words[word.toLowerCase()] = true;
    });
    for (var w in words) {
      emit([w, doc.created], null);
    }
  }
}