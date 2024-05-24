import db from '../models';

class productService {
    static readProduct = async ({ id, subCatId, name }) => {
        try {
            let products;
            if (id) {
                products = await db.Product.findAll({
                    where: { id },
                });
            } else if (subCatId) {
                products = await db.Product.findAll({
                    where: { subCatId },
                });
            } else if (name) {
                products = await db.Product.findAll({
                    where: { name },
                });
            } else {
                products = await db.Product.findAll();
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: products,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createProduct = async ({ subCatId, discountId, name, price, sku, image, status, quantity, description }) => {
        try {
            if (!subCatId) {
                return {
                    errCode: 2,
                    message: 'Missing sub cat id',
                };
            }
            if (!discountId) {
                return {
                    errCode: 2,
                    message: 'Missing discount id',
                };
            }
            if (!name) {
                return {
                    errCode: 2,
                    message: 'Missing name',
                };
            }
            if (!price) {
                return {
                    errCode: 2,
                    message: 'Missing price',
                };
            }
            if (!quantity) {
                return {
                    errCode: 2,
                    message: 'Missing quantity',
                };
            }
            const isProductExists = await db.Product.findOne({
                where: { name },
            });
            if (isProductExists) {
                return {
                    errCode: 3,
                    message: 'This product already exists',
                };
            }
            const newProduct = await db.Product.create({
                subCatId,
                discountId,
                name,
                price,
                sku,
                image,
                status,
                quantity,
                description,
            });
            return {
                errCode: 0,
                message: 'Created a new product successful',
                data: newProduct,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateProduct = async ({
        id,
        subCatId,
        discountId,
        name,
        price,
        sku,
        image,
        status,
        quantity,
        description,
    }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const product = await db.Product.findOne({
                where: { id },
            });
            if (product) {
                await db.Product.update(
                    { subCatId, discountId, name, price, sku, image, status, quantity, description },
                    { where: { id } },
                );
                return {
                    errCode: 0,
                    message: 'Edit product succcessful',
                    product,
                };
            }
            return {
                errCode: 3,
                message: 'Edit product failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteProduct = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const product = await db.Product.findOne({
                where: { id },
            });
            if (!product) {
                return {
                    errCode: 3,
                    message: `Delete product failed, product don't exist`,
                };
            }
            await db.Product.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete product successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = productService;
