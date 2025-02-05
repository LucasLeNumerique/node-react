const express = require('express')
const People = require('../model/model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const people = await People.find({})
        res.send(people);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const person = await People.findById(id)
        res.send(person);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('Request body: ', req.body)
        const person = new People(req.body)
        await person.save()
        res.status(201).send(person)
    } catch {
        console.error(error)
        res.status(500).send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const person = await People.updateOne({_id: id}, {$set: req.body})
        res.status(200).send(person)
    } catch {
        console.error(error)
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const person = await People.deleteOne({_id: id})
        res.status(200).send(person)
    } catch {
        console.error(error)
        res.status(500).send(error)
    }
})

module.exports = router