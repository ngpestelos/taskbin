function(doc) {
  if (doc.type === "task" && doc.status === "open")
    emit(doc.created, null);
}