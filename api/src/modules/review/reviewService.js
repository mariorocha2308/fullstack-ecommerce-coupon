const Review = require("../../models/review")

const postReview = (req, res) => {
  const { content, userImage, creator, couponRef } = req.body

  try {
    Review.create({
      content, userImage, creator
    })
    .then(response => response.addCoupon(couponRef))
    .then(() => res.send({ message: 'Review created successfully'}))
    .catch(() => res.send({ error: "Get coupon is failed" }))
  } catch (error) {
    return res.send({ error: "Error in server" })
  }
}

// const putReview = () => {
//   const { id } = req.params

//   try {
//     Coupon.findOne({where: { id },
//       include: Review,
//       attributes: ['id', 'title', 'type', 'price', 'discount', 'description'],
//     })
//     .then(result => res.json(result))
//     .catch(() => res.send({ error: "Get coupon is failed" }))
//   } catch (error) {
//     return res.send({ error: "Error in server" })
//   }
// }

// const deleteReview = (req) => {
//   const { id } = req.params

//   console.log('hola');

//   console.log(id);

  // try {
  //   const isFound = await Review.findOne({where: { id }})

  //   console.log(isFound);

  //   if (isFound) {
  //     Review.destroy({where: {id}})
  //     return res.send({ message: 'Review was deleted'})
  //   } else return res.send({ error: 'Review not exist'})
  // } catch (error) {
  //   return res.send({ error: "Error in server" })
  // }
// }

module.exports = {
  postReview,
  // putReview,
  // deleteReview
}