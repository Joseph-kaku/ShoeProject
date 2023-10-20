const {body, validationResult} = require ('express-validator');
const validate = {}

// ADD NEW SHOE VALIDATION
validate.shoeRules = () => {
    return [
        // brand name is required and must be a string
        body("brand")
        .trim()
        .isString()
        .isLength({ min: 4 })
        .withMessage('Please provide a brand name'),

        // model name is required and must be a string
        body("model")
        .trim()
        .isString()
        .isLength({ min: 1 })
        .withMessage('Please provide a model'), 

        // color is required and must be a string
        body("color")
        .trim()
        .isString()
        .isLength({ min: 3 })
        .withMessage('Please provide a color'),

        // secondary_color is required and must be a string
        body("secondary_color")
        .trim()
        .isString()
        .isLength({ min: 3 })
        .withMessage('Please provide a secondary color'),

        // size is required and must be a string
        body("size")
        .trim()
        .isString()
        .isLength({ min: 1 })
        .withMessage('Please provide a size'), 

        // lace_color is required and must be a string
        body("lace_color")
        .trim()
        .isString()
        .isLength({ min: 3 })
        .withMessage('Please provide a lace color'),

        // price is required and must be a string
        body("price")
        .trim()
        .isString()
        .withMessage('Please provide a price'),

        // logo name is required and must be a string
        body("logo_name")
        .trim()
        .isString()
        .withMessage('Please provide a logo name')
    ]
}

// CHECK FOR ERRORS 
validate.checkShoeData = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


// ADD NEW OWNER VALIDATION
validate.ownerRules = () => {
    return [
        // Name is required and must be a string
        body('person')
            .trim()
            .isString()
            .isLength({ min: 2 })
            .withMessage('Please provide a name'),

        // Provide a yes/no 
        body('collector')
            .trim()
            .isIn(['Yes', 'No'])
            .withMessage('Please provide "Yes" or "No"')
    ]
}

//  CHECK FOR ERRORS 
validate.checkOwnerData = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = validate