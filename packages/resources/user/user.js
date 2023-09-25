
function main(args) {

    const userData = require('./models/userModel');

    let result = "";

    //creating user record
    userData.create({
        tenantId: args.tenantId,
        name: args.name,
        address: args.address,
        contact: args.contact,
        employeeID: args.employeeID,
        workEmail: args.workEmail
    }).then((res => {
        result = "Created a new record";
        console.log(res);
    })).catch((error) => {
        result = "Not able to create record";
        console.log("Unable to create the record", error);
    })

    const responseData = {
        statusCode : 200,
        headers : {
          'content-type' : 'application/json'
        },
        body : {
          "response" : result
        }
      }

    return responseData;

}

exports.main = main;