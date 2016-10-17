#!/usr/bin/env node
var path = require('path');
//Converter Class 
var Converter = require("csvtojson").Converter;
var Client = require('node-rest-client').Client;
var config = require('config');

if (!config.has("server") || !config.has("server.auth") || !config.has("server.url")) {
  console.log("server configuration is missing")
  process.exit(1);
}

client = new Client(config.get("server.auth"));

var converter = new Converter({});
converter.fromFile("./users.csv", function (err, result) {
  var userJson = {
    data: {},
    headers: { "Content-Type": "application/json" }
  };
  for (var index in result) {
    userJson.data = result[index];
    if(!userJson.data.lastName || !userJson.data.firstName || !userJson.data.email || !userJson.data.username){
      console.log("Required data missing, skipping user " + ": %j", result[index])
      continue;
    }
    var role = {
      "id": 3,
      "name": "tester",
      "description": "Tester (Default role, cannot be modified)"
    };
    if(userJson.data.roleId && userJson.data.roleName){
      role = {"id" : userJson.data.roleId, "name" : userJson.data.roleName}
    }
    userJson.data.roles = [ role ]

    if (!userJson.data.location)
      result[index].location = "Unknown"
    if(!userJson.data.loginName)
      userJson.data.loginName = userJson.data.username
    
    console.log(index + ": %j", result[index]);
    client.post(config.get('server.url') + "/flex/services/rest/latest/user/", userJson, function (data, response) {
      // parsed response body as js object 
      console.log(data);
      // raw response 
      //console.log(response);
    });
  }
});

