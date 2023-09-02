const mailer = require('../utils/mailer')

let sendMail = async (req, res) => {
  try {
    const { to, subject, body } = req.body

    await mailer.sendMail(to, subject, body)

    res.send('<h3>Your email has been sent successfully.</h3>')
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports = {
  sendMail: sendMail
}