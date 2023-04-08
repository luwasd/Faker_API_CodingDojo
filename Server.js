const express = require('express');
const { faker } = require('@faker-js/faker');


const app = express();

const PORT = 3000;

const User = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        lastname: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        avatar: faker.image.avatar(),
    }
}

const Company = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

app.get("/api/users/new", (req, res) => {
    const newUser = User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = Company();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = User();
    const newCompany = Company();
    res.json({ newUser, newCompany });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
