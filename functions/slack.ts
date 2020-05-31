import * as functions from 'firebase-functions'
import request from 'request-promise-native'

export const postSlack = functions.https.onRequest((request, response) => {

  if( typeof request.body.message === 'undefined') {
    response.status(400).end()
    return
  }

  if( request.body.message === '') {
    response.status(400).end()
    return
  }


  test(request.body.name, request.body.mail, request.body.message).then( () => {
    response.send('ok')
  })
})

const test = async (name:string, mail:string, message:string) => {
    const headers = {
        'Content-Type': 'application/json'
      }
    
      const options = {
        url: 'https://slack.com/api/chat.postMessage',
        method: 'POST',
        headers: headers,
        json: true,
        form: {
            token: 'xxx',
            channel: 'portfolio',
            username: 'portfolio-contact',
            attachments: JSON.stringify([ 
              {
                "fallback": "New Message",
                "pretext": "portfolioサイトから連絡がありました！",
                "fields": [
                  {
                      "title": name,
                      "value": mail,
                      "short": false
                  }
                ]
              }, {
                "pretext": message
              }
            ])
        }
      }

    request(options, function (error: any, response: any, body: any) {
        if (error) {
          console.error('failed to post slack')
          console.error(error)
        }
      })
}