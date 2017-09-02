const path = "http://localhost:3000/api/v1/decisions"

export default class DecisionAdapter {

  static getDecisions(currentUser) {
    return fetch(path, {
      headers: headers()
    })
      .then( resp => resp.json())
      .then( decisions => {
         console.log(currentUser)
        return decisions.filter((i) => i.user_id === currentUser.id)
      })
    }


  static createDecision(content){
    return fetch(path, {
      method: 'post',
      headers: headers(),
      body: JSON.stringify({
        content: content,
        user_id: 1,
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
