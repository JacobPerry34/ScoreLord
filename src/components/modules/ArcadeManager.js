const remoteURL = "http://localhost:5002"

export default {
  getOneArcade(id) {
    return fetch(`${remoteURL}/arcades/${id}`).then(result => result.json())
  },
  getAllArcades() {
    return fetch(`${remoteURL}/arcades`).then(result => result.json())
  },
  deleteArcade(id) {
    return fetch(`${remoteURL}/arcades/${id}`, {
        method: "Delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
    .then(result => result.json())
  },
  post(newArcade) {
    return fetch(`${remoteURL}/arcades`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArcade)
    }).then(data => data.json())
},

update(editedArcade) {
    return fetch(`${remoteURL}/arcade/${editedArcade.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedArcade)
    }).then(data => data.json());
  }
}