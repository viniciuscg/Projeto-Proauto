import { authenticateAssociate, editAddress } from '../models/associate.model.js'

export const AssociateController = {
  authenticate(req, res) {
    const cpf = req.body.cpf
    const placa = req.body.placa
  
    authenticateAssociate(cpf, placa, (result) => {
        return res.json(result)
    })
  },

  editAddress(req, res) {
    const id = req.body.id
    const address = req.body.endereco

    editAddress(id, address, (result) => {
      return res.json(result)
    })
  }
}
