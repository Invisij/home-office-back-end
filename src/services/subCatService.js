import db from '../models';

class subCatService {
    static readSubCat = async ({ id, mainCatId, name }) => {
        try {
            let subCats;
            if (name) {
                subCats = await db.SubCat.findAll({
                    attributes: ['id', 'name'],
                });
            } else if (id) {
                subCats = await db.SubCat.findAll({
                    where: { id },
                });
            } else if (mainCatId) {
                subCats = await db.SubCat.findAll({
                    where: { mainCatId },
                });
            } else {
                subCats = await db.SubCat.findAll();
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: subCats,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createSubCat = async ({ mainCatId, name, image, description }) => {
        try {
            if (!mainCatId) {
                return {
                    errCode: 2,
                    message: 'Missing mainCatId',
                };
            }
            if (!name) {
                return {
                    errCode: 2,
                    message: 'Missing name',
                };
            }
            const isSubCatExists = await db.SubCat.findOne({
                where: { name },
            });
            if (isSubCatExists) {
                return {
                    errCode: 3,
                    message: 'This sub cat already exists',
                };
            }
            const newSubCat = await db.SubCat.create({
                mainCatId,
                name,
                image,
                description,
            });
            return {
                errCode: 0,
                message: 'Created a new subCat successful',
                data: newSubCat,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateSubCat = async ({ id, mainCatId, name, image, description }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const subCat = await db.SubCat.findOne({
                where: { id },
            });
            if (subCat) {
                await db.SubCat.update({ mainCatId, name, image, description }, { where: { id } });
                return {
                    errCode: 0,
                    message: 'Edit subCat succcessful',
                    subCat,
                };
            }
            return {
                errCode: 3,
                message: 'Edit subCat failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteSubCat = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const subCat = await db.SubCat.findOne({
                where: { id },
            });
            if (!subCat) {
                return {
                    errCode: 3,
                    message: `Delete subCat failed, subCat don't exist`,
                };
            }
            await db.SubCat.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete subCat successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = subCatService;
