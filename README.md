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
      - @param date(Date)
      
 - creates login form with nickname input component and handle change and submit it
 - check if user name is taken or not 

 Server Side
  - Setup express server with socket io connection
  - Verify username
  - User connects with username
  - User disconnects
  - User logouts
  - Create helper functions
     - addUser() 
       - Adds user to list passed in 
       - @param userList {object} Object with key value pairs of users
       - @param user {User} the user to added to the list
       - @return userList {Object} Object with key value pairs of Users 
     - removeUser ()
       - Remove user from the list passed in
       - @param userList {object} Object with key value pairs of users
       - @param username {string} name of user to be removed
       - @return userList {Object} Object with key value pairs of Users 
     - isUser()
       - Check if the user is in list passed in 
       - @param userList {object} Object with key value pairs of users 
       - @param username {string}
       - @return userList {Object} Object with key value pairs of Users


Phase 2
 - create a very simple login screen where the user can enter their nickname and press a submit button to enter the chat room 
    - set the initial state of our app
    - create our events handlers and have set our state correctly
    - check the 'submitted' property inside state and render the chat room if this 'true'

 - chat room 
   - message component (array of messages) => put these messages to state
   - input box emits an onSend event , we should create an event handler that takes this event , adds the message to the state and sends it to the server
   - loop through all the messages in the state and create a message component with three properties:
     - key -> the key which tell the render the index of the current component in the loop
     - nickname -> the name of the user who sent the message
     - message -> the actual body of the message
     - fromMe -> a boolean that defines if the message was sent from the current user (we show diffrent styles based on his i.e right or left side of the screen box) 