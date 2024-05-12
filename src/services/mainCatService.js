import db from '../models';

class mainCatService {
    static readMainCat = async ({ name }) => {
        try {
            let mainCats;
            if (!name) {
                mainCats = await db.MainCat.findAll();
            } else {
                mainCats = await db.MainCat.findAll({
                    where: { name },
                });
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: mainCats,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createMainCat = async ({ name, image, description }) => {
        try {
            if (!name) {
                return {
                    errCode: 2,
                    message: 'Missing name',
                };
            }
            if (!image) {
                return {
                    errCode: 2,
                    message: 'Missing image',
                };
            }
            if (!description) {
                return {
                    errCode: 2,
                    message: 'Missing description',
                };
            }
            const isMainCatExists = await db.MainCat.findOne({
                where: { name },
            });
            if (isMainCatExists) {
                return {
                    errCode: 3,
                    message: 'This main cat already exists',
                };
            }
            const newMainCat = await db.MainCat.create({
                name,
                image,
                description,
            });
            return {
                errCode: 0,
                message: 'Created a new mainCat successful',
                data: newMainCat,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateMainCat = async ({ id, name, image, description }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const mainCat = await db.MainCat.findOne({
                where: { id },
            });
            if (mainCat) {
                await db.MainCat.update({ name, image, description }, { where: { id } });
                return {
                    errCode: 0,
                    message: 'Edit mainCat succcessful',
                    mainCat,
                };
            }
            return {
                errCode: 3,
                message: 'Edit mainCat failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteMainCat = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const mainCat = await db.MainCat.findOne({
                where: { id },
            });
            if (!mainCat) {
                return {
                    errCode: 3,
                    message: `Delete mainCat failed, mainCat don't exist`,
                };
            }
            await db.MainCat.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete mainCat successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = mainCatService;
