db.enablePersistence().catch(function (err) {
  if (err.code == 'failed-precondition') {
    console.log('persistance failed');
  } else if (err.code == 'unimplemented') {
    console.log('persistance not available');
  }
});

db.collection('jobs').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      renderJob(change.doc.data(), change.doc.id);
    }
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const job = {
    name: form.title.value,
    description: form.ingredients.value,
  };

  db.collection('jobs')
    .add(job)
    .catch((err) => console.log(err));

  form.title.value = '';
  form.description.value = '';
});
