module.exports = function makeEmployeeTable({ Joi }) {
  return function employeeTable({ name, email,position,company_id }) {
    const schema = Joi.object({
        name: Joi.string(),
        email: Joi.string().allow(""),
        position: Joi.string().allow(""),
        company_id: Joi.string().allow("")
    });

    const { value, error } = schema.validate({
      name,
      email,
      company_id,
      position,
    });
    if (error) {
      throw error.message;
    }

    return Object.freeze({
      name: value.name,
      email: value.email,
      company_id: value.company_id,
      position: value.position,
    });
  };
};
