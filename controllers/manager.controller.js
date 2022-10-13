const {
    createManagerService
} = require("../services/manager.service");

exports.createManager = async (req, res) => {
    try {
        const result = await createManagerService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the manager",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't create the manager"
        })
    }
}

exports.getJobs = async (req, res, next) => {
    try {

        let filters = { ...req.query };

        //sort , page , limit -> exclude
        const excludeFields = ['sort', 'page', 'limit']
        excludeFields.forEach(field => delete filters[field])

        //gt ,lt ,gte .lte
        let filtersString = JSON.stringify(filters)
        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        filters = JSON.parse(filtersString)

        const queries = {}

        if (req.query.sort) {
            // price,qunatity   -> 'price quantity'
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields
            console.log(fields);
        }

        if (req.query.page) {

            const { page = 1, limit = 10 } = req.query;      // "3" "10"

            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);

        }

        const products = await getProductsService(filters, queries);

        res.status(200).json({
            status: "success",
            data: products,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};