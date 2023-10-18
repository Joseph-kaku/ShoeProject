const {body, validationResult} = require ('express-validator');
const validate = {}

// ADD NEW SHOE VALIDATION
validate.addNewShoeRules = () => {
    return [
        // brand name is required and must be a string
        body("brand")
        .trim()
        .isAlpha()
        .isLength({min: 4})
        .withMessage({message:"Please provide a brand name"}),

        // model name is required and must be a string
        body("model")
        .trim()
        .isAlpha()
        .isAlphanumeric()
        .withMessage({message:"Please provide a model"}), 

        // color is required and must be a string
        body("color")
        .trim()
        .isAlpha()
        .isLength({min: 3})
        .withMessage({message:"Please provide a color"}),

        // secondary_color is required and must be a string
        body("secondary_color")
        .trim()
        .isAlpha()
        .isLength({min: 3})
        .withMessage({message: "Please provide a secondary_color"}),

        // size is required and must be a string
        body("size")
        .trim()
        .isAlpha()
        .isLength({min: 1})
        .withMessage({message:"Please provide a size"}), 

        // lace_color is required and must be a string
        body("lace_color")
        .trim()
        .isAlpha()
        .isLength({min: 3})
        .withMessage({message:"Please provide a lace color"}),

        // price is required and must be a string
        body("price")
        .trim()
        .isAlphanumeric()
        .withMessage({message:"Please provide a price"}),

        // logo name is required and must be a string
        body("logo_name")
        .trim()
        .isAlpha()
        .withMessage({message:"Please provide a logo name"})
    ]
}

// CHECK FOR ERRORS OR ADD TO DB
validate.checkShoeData = async (req, res, next) => {
    const {brand, model, color, secondary_color, size, lace_color, price, logo_name} = req.body
    let errors = []
    errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400)
    }
    next()
}


// ADD NEW OWNER VALIDATION
validate.addNewOwnerRules = () => {
    return [
        // Name is required and must be a string
        body("person")
        .trim()
        .isAlpha()
        .isLength({min: 2})
        .withMessage({message:"Please provide a name"}),

        // Provide a yes/no 
        body("collector")
        .trim()
        .isAlpha()
        .isLength({min: 2})
        .withMessage({message:"yes or no please"})
    ]
}

//  CHECK FOR ERRORS OR ADD TO DB
validate.checkOwnerData = async (req, res, next) => {
    const {person, collector} = req.body
    let errors = []
    erros = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400)
    }
    next()
}

module.exports = validate