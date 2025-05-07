require("dotenv").config();
const { Product } = require("../../db");
const cloudinary = require("cloudinary");
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const postProductsController = async (
  name,
  description,
  price,
  specifications,
  stock,
  image,
  brand_id,
  category_id,
  color_id,
  discount
) => {
  // 🔁 OPCIÓN A (USAR CLOUDINARY) – Solo si ya configuraste .env y necesitas subir imágenes
  /*
  const uploadImages = image.map(async (img) => {
    const cloudinaryUpload = await cloudinary.uploader.upload(img);
    return cloudinaryUpload.secure_url;
  });

  const imagesUrls = await Promise.all(uploadImages);
  */

  // ✅ OPCIÓN B (USAR URLs PÚBLICAS DIRECTAMENTE)
  const imagesUrls = image; // Ya es un array con URLs válidas

  const newProduct = await Product.create({
    name,
    description,
    price,
    specifications,
    stock,
    imageArray: imagesUrls,
    color_id,
    brand_id,
    category_id,
    discount,
  });

  return newProduct;
};

module.exports = postProductsController;
