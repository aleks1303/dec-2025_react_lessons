import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .min(1)
        .max(20)
        .messages({
            "string.pattern": "Невірне заповнення",
            "string.min": "Мінімально 1 буква",
            "string.max": "Максимально 20 букв"
        })
        .required(),
    price: Joi.number()
        .min(1)
        .max(1000000)
        .messages({
            "number.min": "Мінімально ціна 1",
            "number.max": "Максимальна ціна 1 млн"
        })
        .required(),
    year: Joi.number()
        .min(1994)
        .max(2024)
        .messages({
            "number.min": "Мінімальний рік випуску 1994",
            "number.max": "Максимальний рік випуску 2024"
        })
        .required()
})

export {carValidator}