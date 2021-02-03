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
        const { id } = req.params
        const results = await knex('users').select('users.*').where({ id })

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { 
                firstName, 
                lastName, 
                email, 
                password, 
                age } = req.body
            await knex('users').insert({
              firstName, 
              lastName, 
              email, 
              password, 
              age
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { 
              firstName, 
              lastName, 
              email, 
              password, 
              age } = req.body
            const { id } = req.params
            
            
            await knex('users')
            .update({ 
              firstName, 
              lastName, 
              email, 
              password, 
              age })
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('users')
            .where({ id })
            .del()
            

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}