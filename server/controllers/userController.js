module.exports = {
  getUser: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.get_user(id).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  getUsers: (req, res) => {
    const db = req.app.get('db')
    db.get_users().then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  postUser: (req, res) => {
    const db = req.app.get('db')
    const {name, age, email} = req.body
    db.post_user([name, age, email]).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  putUser: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {name, age, email} = req.body
    db.put_user([id, name, age, email]).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  deleteUser: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_user(id).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  }
}