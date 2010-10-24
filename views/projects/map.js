function(doc) {
  if (doc.type == 'project') {
    emit(doc.body, null);
  }
}