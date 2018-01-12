const mysql = require ("mysql");
const bcrypt = require('bcrypt-nodejs');
const config = require("./config");
const email = require("./email_vertification");

var con = mysql.createConnection ({
		host: "127.0.0.1",
		user: config.database.user,
		password: config.database.password,
		database: "Login"
});


module.exports = {
	/*
		Cases:
		1) Username already exist...
		2) password too short...
		3) Everything Okay, insert into database.....

    AVOID CALLBACK HELL!!
	*/
  createUser (name,email,Req_password) { 
  	return new Promise((resolve,reject) =>{
      //Hash Password
      bcrypt.genSalt(10, (err,salt) =>{
        if(err){ 
          console.log("Something wrong creating Salt for hashing password \n");
          return reject(err);
        }
        else{
          bcrypt.hash(Req_password, salt,(err,password) =>{
            if(err) {
              console.log("Something wrong creating hash for password \n");
              return reject(err);
            }
            else{
              /*Inserts Data... Should Clean this up... */
              con.query(`INSERT INTO login (name,email,password) VALUES ('${name}','${email}', '${password}')`, (err,result) =>{
               if(err) return reject(err)
                return resolve();
                })
            }
          })
        }
      })

  	})
    
  },

  /*This Is A Little Messy Should Improve...*/
  // how to check password...
  checkUser (email,password){
    return new Promise ((resolve,reject) =>{
      con.query(`SELECT * FROM login WHERE email ='${email}'`, (err,result) =>{
        if(err){ 
          console.log("Something went wrong checking the email");
          return reject(err);}
        else{
          if(result.length === 0) return reject("NO USER with that email found...");
          // Check to see if password matches with hashedPassword..
          if(password === "Session Check") return resolve(true);
          bcrypt.compare(password,result[0].password , function(err, res) {
            if(err) { 
              console.log("something wrong with comparing passwords");
              return reject(err);
            }
            else{
              if(res === false) {
                console.log("Password is Does not match");
              return reject("False"); 
              }// Should I write an error message
              else return resolve(result[0].email);
            }
          });
        }
      })
    })
  }
}