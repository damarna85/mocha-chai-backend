import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  gender: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

const usersModel = mongoose.model('Users', userSchema);

export const findUsers = () => {
  return new Promise((resolve, reject) => {
    usersModel.find((error, result) => {
      if(error)
        reject(error)
      resolve(result)
    })
  })
}

export const createUser = (userDraft) => {
  return new Promise((resolve, reject) => {
    usersModel.create(userDraft, (error, result) => {
      if(error)
        reject(error)
      resolve(result)
    })
  })
}

export const removeAllUsers = () => {
  return new Promise((resolve, reject) => {
    usersModel.remove({}, (error, result) => {
      if(error)
        reject(error)
      resolve(result)
    })
  })
}
