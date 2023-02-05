const CreateUser = (req, res, next) => {
  const attributes = ['name', 'email', 'password', 'telephone', 'cpf', 'role', 'active'];
  const body = req.body;
  const hasAttributes = attributes.every((property) => {
    return property in body;
  });

  if (!hasAttributes) {
    return res.status(401).json({
      message: 'Todos os atributos sao obrigatorios'
    });
  }

  next();
};
module.exports = CreateUser;
