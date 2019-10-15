const remoteURL = "http://localhost:5002"

export default {
  getOneMachine(id) {
    return fetch(`${remoteURL}/machines/${id}`).then(result => result.json())
  },
  getAllMachines() {
    return fetch(`${remoteURL}/machines?_expand=arcade&&_expand=genre`).then(result => result.json())
  },
  deleteMachine(id) {
    return fetch(`${remoteURL}/machines/${id}`, {
        method: "Delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
    .then(result => result.json())
  },
  post(newMachine) {
    return fetch(`${remoteURL}/machines`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMachine)
    }).then(data => data.json())
},

update(editedMachine) {
    return fetch(`${remoteURL}/machines/${editedMachine.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMachine)
    }).then(data => data.json());
  }
}