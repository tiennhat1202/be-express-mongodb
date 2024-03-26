const Product = require("../models/product.model");
const ErrorHandler = require("../utils/errorUtils");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");

const getProducts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;
  res.status(200).json({ success: true, products, productCount });
});

const getProductById = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new ErrorHandler("Product not found!", 404));
  }
  res.status(200).json({ success: true, product });
});

//Create a product
const addProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
});

// Update a product
const putProductById = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new ErrorHandler("Product not found!", 404));
  }
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({ success: true, updateProduct });
});

//Delete a product
const deleteProductById = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return next(new ErrorHandler("Product not found!", 404));
  }
  res
    .status(200)
    .json({ success: true, message: "Product delete successfully" });
});

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  putProductById,
  deleteProductById,
};
