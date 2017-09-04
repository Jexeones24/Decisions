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


  // user id is hardcoded until i get auth to work
  static createDecision(decision){
    return fetch(path, {
      method: 'post',
      headers: headers(),
      body: JSON.stringify({
        content: decision.content,
        user_id: 2,
      })
    })
    .then(resp => resp.json())
  }


  static deleteDecision(decision){
    return fetch(`http://localhost:3000/api/v1/decisions/${decision.id}`, {
      method: 'delete',
      headers: headers(),
      body: JSON.stringify({
        id: `${decision.id}`
      })
    })
    .then(resp => resp.json())
  }


  static editDecision(content, id){
    debugger
    return fetch(`http://localhost:3000/api/v1/decisions/${id}`, {
      method: 'put',
      headers: headers(),
      body: JSON.stringify({
        content: `${content}`,
        id: `${id}`
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
