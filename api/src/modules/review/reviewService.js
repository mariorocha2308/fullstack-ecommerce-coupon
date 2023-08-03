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

const putReview = async (req, res) => {
  const { content } = req.body
  const { id } = req.params

  try {
    const review = await Review.findOne({where: { id }})

    if (review) {
      review.update({ content })
      .then(result => res.json(result))
      .catch(() => res.send({ error: e }))
    } else return res.send({ error: "Review not exist" })
  } catch (error) {
    return res.send({ error: "Error in server" })
  }
}

const deleteReview = async (req, res) => {
  const { id } = req.params

  try {
    const review = await Review.findOne({where: { id }})

    if (review) {
      review.destroy()
      return res.send({ message: 'Review was deleted'})
    } else return res.send({ error: 'Review not exist'})
  } catch (error) {
    return res.send({ error: "Error in server" })
  }
}

module.exports = {
  postReview,
  putReview,
  deleteReview
}