const knex = require('../database')
const User = require('../models/user')

module.exports = {

    async index(req, res) { 
        const query = User.query()

        if(req.query.select) {
            query.select(req.query.select)
        }

        if(req.query.firstName){
            query.where('firstName', req.query.firstName)
        }

        if(req.query.lastName){
            query.where('lastName', req.query.lastName)
        }

        if(req.query.email){
            query.where('email', req.query.email)
        }

        if(req.query.age){
            query.where('age', req.query.age)
        }

        const results = await query
        return res.json(results)
    },
    async getUserById(req, res) { 
        const results = await User.query()
                                .findById(req.params.id)
                                .withGraphFetched('addresses')
        return res.json(results)
    },
    async create(req, res, next) {
        try {
            await User.query().insert(req.body)

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            await User.query()
                    .findById(req.params.id)
                    .patch(req.body)

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            await User.query().deleteById(req.params.id)
            

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}