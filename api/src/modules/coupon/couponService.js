const Coupon = require('../../models/coupon')

const getCoupons = async () => {
    return new Promise((resolve, reject) => {
        try {
            Coupon.findAll({raw : true, nest: true})
            .then(result => {
                resolve(result)
            })
        } catch (error) {
            reject({ error: "Database does not send anything" })
        }
    })
}

module.exports = {
    getCoupons
};
