import {API} from '../../backend'




export const singup = user => {
    return fetch(`${API}/signup`,{
        method: "POST",
        headers : {
            Accept : "application",
            "Content-Type" : "application/json"
        },
        body :JSON.stringify(user)
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err))
}

export const singin = user => {
    return fetch(`${API}/signup`,{
        method: "POST",
        headers : {
            Accept : "application",
            "Content-Type" : "application/json"
        },
        body :JSON.stringify(user)
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err))
}