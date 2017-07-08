import mongoose from 'mongoose'
import {
  create,
  find
} from './common.model'

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
  return find(plansModel)
}

export const createNewPlan = (planDraft) => {
  create(plansModel, planDraft)
}
