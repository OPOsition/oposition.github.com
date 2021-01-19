export function firebaseHelper(path) {
  const database = firebase.database();
  const node = database.ref().child(path);

  function onValue(callback) {
    node.on('value', (snapshot) => callback(snapshot.val()));
  }

  function push(value, onComplete) {
    node.push(value, onComplete);
  }

  function deleteValue() {
    node.remove();
  }

  function editValue(value) {
    node.set(value);
  }

  return {
    onValue,
    push,
    node,
    deleteValue,
    editValue,
  };
}

export const smoke2020Key = 'smoke-2020';
