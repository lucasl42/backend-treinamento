const Address = require('../models/address')

module.exports = {
    async index(req, res, next) { 
        try {
            const query = Address.query()
            
            if(req.query.select) {
                query.select(req.query.select)
            }
            
            if(req.query.user_id) {
                query
                .select('addresses.*', 'users.firstName as owner')
                .join('users', 'addresses.user_id', 'users.id')
                .where('addresses.user_id', req.query.user_id)
            }

            if(req.query.state){
                query.where('state', req.query.state)
            }

            if(req.query.country){
                query.where('firstName', req.query.country)
            }

            const results = await query
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async getAddressById(req, res, next) { 
        try {
            const results = await Address.query()
                                    .findById(req.params.id)

            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            await Address.query().insert(req.body)

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            await Address.query()
                    .findById(req.params.id)
                    .patch(req.body)

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            await Address.query().deleteById(req.params.id)

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}