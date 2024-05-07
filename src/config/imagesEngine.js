import express from 'express';
import path from 'path';
import multer from 'multer';

const configImagesEngine = (app) => {
    app.use(express.static('./src/images'));
    const images = multer({
        dest: './images',
    });
};

module.exports = configImagesEngine;
