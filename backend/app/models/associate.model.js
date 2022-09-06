import {connection} from './db.js'

export function authenticateAssociate(cpf, placa, callback) {
    connection.query(`select * from associado where cpf="${cpf}" and placa="${placa}"`, (error, response) => {
        if(error) {
            console.log(error)
            return
        }

        callback(response[0])
    })
}

export function editAddress(id, address, callback) {
    connection.query(`update associado set endereco = "${address}" where id = ${id}`, (error, response) => {
        if (error) {
            console.log(error)
            return
        }

        callback(response[0])
    })
}
