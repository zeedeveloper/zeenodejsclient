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
lastName,firstName,email,username,loginName,location,roleId,roleName,title,city,country,workPhoneNumber

```
First 4 columns (lastName,firstName,email,username,loginName) are mandatory

Execution
------------
* Open the command prompt 
* Navigate to directory where src was checked out.
* Run following commands:
```
npm install
node index.js
```

