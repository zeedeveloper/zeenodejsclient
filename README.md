Add users to ZEE
===================================

Setup
------------
* Install Node/NPM from https://nodejs.org/en/download/
* Make sure git client is installed.
* Checkout latest sourcecode
```
git clone https://github.com/zeedeveloper/zeenodejsclient.git
cd zeenodejsclient
```

Configuration
------------
Update configuration to configure Zephyr Server Access.
Open config/default.json, update
* url - Zephyr server URL
* auth 
 * user - User name
 * password - Password

Input File 
------------
update users.csv

Format of csv should have first line matching with restAPI field names
```
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
```

Execution
------------
* Open the command prompt 
* Navigate to directory where src was checked out.
* Run following commands:
```
npm install
node index.js
```

