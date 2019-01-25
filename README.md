# FirstRepo

Client Side 
 - Connect to and initialize the socket
 - Create chat actions 
   - To check if user connected or not
   - Recieved and sent message actions
   - Check if the user is typing
   - Verify user action  
   - Logout action

 - Sets the user property in state (USER_CONNECTED)
 - Sets the user property in state to null (LOGOUT)
 - Create required function
   - creates a user
      - @prop id {string}
      - @prop name {string}
      - @param {object}
        - name {string}

   - creates a messages object 
      - @prop id {string}
      - @prop time {Date} the time in 24hr format i.e 17:30
      - @prop message {string} actual string message
      - @prop sender {string} sender of message
      - @param {object} 
          - message {string}
          - sender {string}

   - creates a chat object 
      - @prop id {string}
      - @prop name {string}
      - @prop messages {Array.message}
      - @prop users {Array.string}
      - @param {object}
          - messages {Array.message}
          - name {string}
          - users {Array.string}
   - getTime() return string represented in 24hr time i.e. '20:15'

 Server Side
  - Setup express server with socket io connection