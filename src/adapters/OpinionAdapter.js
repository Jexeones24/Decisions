const path = "http://localhost:3000/api/v1/opinions"

export default class OpinionAdapter {

  static createOpinion(content, id, value){
    return fetch(path, {
      method: 'post',
      headers: headers(),
      body: JSON.stringify({
        content: content,
        outcome_id: `${id}`,
        value: value
      })
    })
    .then(resp => resp.json())
  }

  static deleteOpinion(id){
    return fetch(`http://localhost:3000/api/v1/opinions/${id}`, {
      method: 'delete',
      headers: headers(),
      body: JSON.stringify({
        id: `${id}`
      })
    })
    .then( resp => resp.json() )
  }


}

let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}
