import mongoose from 'mongoose'
import {
  create,
  find,
  removeAll,
} from './common.model'

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
  return find(usersModel)
}

export const createUser = (userDraft) => {
  return create(usersModel, userDraft)
}

export const removeAllUsers = () => {
  return removeAll(usersModel)
}
