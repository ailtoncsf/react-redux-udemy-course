module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    // este middleware não responde a requisição, apenas adiciona itens ao cabeçalho permitindo o uso do cors
    // já que este middleware não responde, é necessário o next para passar para o próximo middleware 
    // evitando o timeout por falta de resposta do servidor
    next()
}