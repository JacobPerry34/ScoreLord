const remoteURL = "http://localhost:5002"

export default {
  getOneHighScore(id) {
    return fetch(`${remoteURL}/userMachines/${id}?_expand=user`).then(result => result.json())
  },
  getAllHighScores() {
    return fetch(`${remoteURL}/userMachines?_sort=highScore&_order=desc&_count=10&_expand=user`).then(result => result.json())
  },
  deleteHighScores(id) {
    return fetch(`${remoteURL}/userMachines/${id}`, {
        method: "Delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
    .then(result => result.json())
  },
  post(newHighScore) {
    return fetch(`${remoteURL}/userMachines?_expand=machine`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newHighScore)
    }).then(data => data.json())
},

update(editedHighScore) {
    return fetch(`${remoteURL}/userMachines/${editedHighScore.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedHighScore)
    }).then(data => data.json());
  }
}