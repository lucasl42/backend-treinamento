const knex = require('../database')

module.exports = {
    async index(req, res, next) { 
        try {
            const { user_id } = req.query;
            const query = knex('addresses')
            
            if(user_id) {
                query
                .where({ user_id })
                .join('users', 'users.id', '=', 'addresses.user_id')
                .select('addresses.*', 'users.firstName')
            }

            const results = await query
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async getAddressById(req, res) { 
        const { id } = req.params
        const results = await knex('addresses').select('addresses.*').where({ id })

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { 
                address, 
                state, 
                country, 
                zipCode, 
                user_id } = req.body

            await knex('addresses').insert({
                address, 
                state, 
                country, 
                zipCode, 
                user_id
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { 
                address, 
                state, 
                country, 
                zipCode, 
                user_id } = req.body
            const { id } = req.params
            
            
            await knex('addresses')
            .update({ 
                address, 
                state, 
                country, 
                zipCode, 
                user_id })
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('addresses')
            .where({ id })
            .del()
            

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}