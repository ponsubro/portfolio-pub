import * as admin from 'firebase-admin'
import * as slack from './slack'

admin.initializeApp()

export const postSlack = slack.postSlack