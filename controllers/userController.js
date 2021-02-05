const { User, userSchema } = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = {

    async index(req, res, next) { 
        try {
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
        } catch (error) {
            next(error)
        }
    },
    async getUserById(req, res, next) { 
        try {
            const user = await User.query()
                                    .findById(req.params.id)
                                    .withGraphFetched('addresses')

            if(user){
                return res.json(user)
            }else {
                const error = new Error('User not found')
                error.status = 404
                throw error
            }
                        
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { error } = await userSchema.validate(req.body)
            if(error) throw error
            const user = User.query().where('email', req.body.email)
            if(user){
                const error = new Error('E-mail already registered')
                error.status = 400
                throw error
            }else {
                const salt = await bcrypt.genSalt();
                const hash = await bcrypt.hash(req.body.password, salt);            
                req.body.password = hash
                await User.query().insert(req.body)
    
                return res.status(201).send()
            }
            
            
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            if(req.body.password) {
                const salt = await bcrypt.genSalt();
                const hash = await bcrypt.hash(req.body.password, salt);            
                req.body.password = hash                
            }
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
            const user = User.query.findById(req.params.id)
            if(user) {
                await User.query().deleteById(req.params.id)

                return res.send()
            }else {
                const error = new Error('User not found')
                error.status = 404
                throw error
            }
            
        } catch (error) {
            next(error)
        }
    }
}