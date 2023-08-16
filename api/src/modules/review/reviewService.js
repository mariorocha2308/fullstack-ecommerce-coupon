const Review = require("../../models/review")

const postReview = (req, res) => {
  const { content, userImage, creator, couponRef } = req.body

  console.log(content, userImage, creator, couponRef);

  try {

    Review.create({
      content, userImage, creator
    })
    .then(response => response.addCoupon(couponRef))
    .then(() => res.send({ message: 'Review was successfully created '}))
    .catch(() => res.send({ error: "Review cannot be created" }))

  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

const putReview = (req, res) => {
  const { content } = req.body
  const { id } = req.params

  try {

    Review.findOne({
      where: { id }
    })
    .then(review => { 
      review.update({ 
        content 
      })
      .then(() => res.send({ message: "Review was successfully updated" }))
      .catch(() => res.send({ error: "Review cannot be updated" }))
    })
    .catch(() => res.send({ error: "Review does not exist"}))

  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

const deleteReview = (req, res) => {
  const { id } = req.params

  try {

    Review.findOne({
      where: { id }
    })
    .then(review => {
      review.destroy()
      .then(() => res.send({ message: "Review was successfully deleted" }))
      .catch(() => res.send({ error: "Review cannot be deleted" }))
    })
    .catch(() => res.send({ error: "Review does not exist" }))

  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

module.exports = {
  postReview,
  putReview,
  deleteReview
}