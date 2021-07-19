const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password(); 
    }
}

var newUser = new User()

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {street: faker.address.streetAddress(), city: faker.address.cityName(), state: faker.address.state(), zipCode: faker.address.zipCode(), country: faker.address.country()};
    }
}

var newCompany = new Company()

app.get('/api/users/new', (req, res) => {
    res.json({newUser})
})

app.get('/api/companies/new', (req, res) => {
    res.json({newCompany})
})

app.get('/api/users/companies', (req, res) => {
    res.json({newUser, newCompany})
})

app.listen(port, () => console.log('up and running'))