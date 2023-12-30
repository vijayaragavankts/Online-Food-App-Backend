const express = require("express");
const Category = require("../models/categorySchema");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { category_name } = req.body;
    const restaurant_id = req.session.restaurant_id;
    const category = await new Category({
      restaurant: restaurant_id,
      category_name: category_name,
    });
    await category.save();
    if (category) {
      res.status(200).json({
        status: "Success",
        message: restaurant_id,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
