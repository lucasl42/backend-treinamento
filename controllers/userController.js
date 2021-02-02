const knex = require('../database')

module.exports = {
    async index(req, res) { 
        const results = await knex('users')

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { 
              firstName, 
              lastName, 
              email, 
              password } = req.body
            console.log(firstName)
            console.log(lastName)
            await knex('users').insert({
              firstName, 
              lastName, 
              email, 
              password
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
              password } = req.body
            const { id } = req.params
            
            
            await knex('users')
            .update({ 
              firstName, 
              lastName, 
              email, 
              password })
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