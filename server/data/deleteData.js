const db = require ('../config/db')
const People = require('../model/model')

main().catch(err => console.log(err));

async function main() {
    db()

    People.deleteOne({
        _id: "677b2ede4e35ee3f435b1b55"
    })
    .then((result) => {
        console.log(result)
    })
}