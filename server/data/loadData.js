const db = require ('./../config/db')
const People = require('../model/model')

main().catch(err => console.log(err));

async function main() {
    db()

    const addPeople = new People({
        name: 'Melvin',
        email: 'melvin.schrever@gmail.com',
        age: 22
    })
    await addPeople.save()

    const people = await People.find()
    console.log(people)
}