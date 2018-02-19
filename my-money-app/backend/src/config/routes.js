const express = require('express')

module.exports = function(server) {
    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de ciclo de pagamento
    const Billingcycle = require('../api/billingCycle/billingCycleService')
    Billingcycle.register(router, '/billingCycles')
}