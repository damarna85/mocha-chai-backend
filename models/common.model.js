export const find = (model) => {
  return new Promise((resolve, reject) => {
    model.find((error, result) => {
      if(error)
        reject(error)
      resolve(result)
    })
  })
}

export const create = (model, draft) => {
  return new Promise((resolve, reject) => {
    model.create(draft, (error, result) => {
      if(error)
        reject(error)
      resolve(result)
    })
  })
}

export const removeAll = (model) => {
  return new Promise((resolve, reject) => {
    model.remove({}, (error, result) => {
      if(error)
        reject(error)
      resolve(result)
    })
  })
}
