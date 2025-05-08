import {check , body} from 'express-validator';
import User from "../models/user.model.js";



export const signupValidator = [
    body('name')
        .notEmpty().withMessage('Name field  required')
        .isString().withMessage('Name must be a string'),

    body('email')
        .isEmail().withMessage('Enter a valid email')
        .custom((value, { req }) => {
            return User.findOne({ email: value }).then((userDoc) => {
              if (userDoc) {
                return Promise.reject("E-Mail already exists.");
              }
            });
          })
        .normalizeEmail(),
    body('phone')
        .isLength({ min: 10,max: 10 }).withMessage('Phone number must be at least 10 digits long')
        .isNumeric().withMessage('Phone number must only contain numbers'),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .trim(),                 
        
];

export const loginValidator = [
    body("email", "Enter valid email").isEmail()
    .normalizeEmail(),

    body("password", "Minimum length 6 of password").isLength({ min: 6 })
    .trim()

]

