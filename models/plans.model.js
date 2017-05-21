import mongoose from 'mongoose'

const planSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
})

const plansModel = mongoose.model('Plans', planSchema);

export const findPlans = () => {
  return new Promise((resolve, reject) => {
    plansModel.find((error, result) => {
      if(error)
        reject(error)
      resolve(result)
    })
  })
}
