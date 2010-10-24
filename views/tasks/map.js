function(doc) {
  if (doc.type == "task") {
    emit([doc.project, doc.created_at], null);
  }
}