const { getUser, createUser } = require('../models/user.model');

module.exports = {
  login: (req, res) => res.render('../views/auth/login.ejs', {title: 'INGRESAR'}),
  doLogin: async (req, res) => {

    const { email, password } = req.body;

    const [user] = await getUser();

    const validate = (user.email == email) && (user.password == password);

    req.session.isLogged = validate ? true : false;

    if (req.session.isLogged) {
      res.locals.isLogged = true;
      return res.redirect('/admin');
    };

    res.status(401).send('Credenciales inválidas.');
  },
  register: (req, res) => res.render('../views/auth/register.ejs', {title: 'REGISTRO'}),
  doRegister: async (req, res) => {

    const users = {
      name: req.body.nombre,
      lastname: req.body.apellido,
      email: req.body.email,
      password: req.body.password
    }

    await createUser([Object.values(users)])

    res.redirect('/home');
  },
  logout: (req, res) => {
    req.session.isLogged = false;
    return res.redirect('/home');
  },
};
