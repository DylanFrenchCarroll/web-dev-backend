//* validators/register.validator.js
import Joi from 'joi';

const passwordRegex = new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{7,20})`);
const accountSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(7).max(20).regex(passwordRegex).required(),
    firstName: Joi.string().min(1).max(30).required(),
    lastName: Joi.string().min(1).max(30).required()
});

export default {account: accountSchema};
