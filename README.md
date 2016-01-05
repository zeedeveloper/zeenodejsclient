Add users to ZEE
===================================


Configuration
------------
Edit config/default.json, update
* url
* auth
** user
** password

Input File 
------------
update users.csv
Format of csv should have first line matching with restAPI field names
{
  "id": 3,
  "title": "Tester",
  "username": "steve.waugh",
  "firstName": "Steve",
  "lastName": "Waugh",
  "city": "Bangalore",
  "country": "India",
  "location": "Bangalore",
  "type": "1",
  "email": "steve.waugh@yourcompany.com",
  "workPhoneNumber": "+91-80-5551212",
  "accountEnabled": true,
  "accountExpired": false,
  "credentialsExpired": false,
  "loginName": "steve.waugh"
}

Execution
------------
npm install
node index.js

