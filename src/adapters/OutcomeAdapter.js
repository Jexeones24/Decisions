const path = "http://localhost:3000/api/v1/outcomes"

export default class OutcomeAdapter {

  static getOutcomes(currentUser) {
    return fetch(path, {
      headers: headers()
    })
      .then( resp => resp.json())
        .then( outcomes => {
          console.log("fetching outcomes:", outcomes)
          return outcomes.filter((d) => d.user_id === currentUser.id)
        })
    }

  static createOutcome(content, decision_id){
    return fetch(path, {
      method: 'post',
      headers: headers(),
      body: JSON.stringify({
        content: content,
        decision_id: decision_id
      })
    })
    .then(resp => resp.json())
  }

  static deleteOutcome(id){
    return fetch(`http://localhost:3000/api/v1/outcomes/${id}`, {
      method: 'delete',
      headers: headers(),
      body: JSON.stringify({
        id: `${id}`
      })
    })
    .then(resp => resp.json())
  }

  static editOutcome(content, id){
    return fetch(`http://localhost:3000/api/v1/outcomes/${id}`, {
      method: 'put',
      headers: headers(),
      body: JSON.stringify({
        content: `${content}`
      })
    })
    .then(resp => resp.json())
  }


}

let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}
