import  Joi from "joi";

const userValidator = Joi.object( {
    name: Joi.string().min(3).max(20).required().messages({
        "string.min": "name too small",
        "string.max": "name too long"
    }),
    username: Joi.string().min(3).max(7).required().messages({
        "string.min": "username too small",
        "string.max": "username too long"
    }),
    age: Joi.number().min(0).max(117).required().messages({
        "number.min": "age too short",
        "number.max": "age too big"
    }),
})


export {userValidator}