const express = require("express");
const app = express();
const port = 8000;
const faker = require('faker');

const users = [];
    
app.get("/api/users", (req, res) => {
    res.json( {users} );
});

const companies = [];
    
app.get("/api/companies", (req, res) => {
    res.json( {companies} );
});

const both = [];
    
app.get("/api/users/company", (req, res) => {
    res.json( {users, companies} );
});


class User{
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        

    }
}

console.log(new User());

class Company{
    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = faker.address.zipCode();

    }
}

console.log(new Company());

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon



app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.get("/api/users/new", (req, res) => {
    let user = new User();
    console.log(user);
    // req.body will contain the form data from Postman or from React
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(user);
    // we always need to respond with something
    res.json( { user } );
    res.json( { status: "ok" } );
});

app.get("/api/companies/new", (req, res) => {
    let company = new Company();
    console.log(company);
    // req.body will contain the form data from Postman or from React
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    companies.push(company);
    // we always need to respond with something
    res.json( { company } );
    res.json( { status: "ok" } );
});

app.get("/api/user/company", (req, res) => {
    let user = new User();
    let company = new Company();
    console.log(company);
    // req.body will contain the form data from Postman or from React
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    both.push(user, company);
    // we always need to respond with something
    res.json( { user, company } );
    res.json( { status: "ok" } );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );
