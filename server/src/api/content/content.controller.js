const express = require('express');
const contentService = require('./content.service')
const ErrorResponse = require("../../../utils/errorResponse");

//[GET] api/content/get-all
async function getAll(req, res, next) {
    try {
        let DTO = await contentService.getAll(req.body);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        // return next(new ErrorResponse(err.message, 500))
    }
}

//[GET] api/content/get
async function get(req, res, next) {
    try {
        let DTO = await contentService.get(req.body);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        // return next(new ErrorResponse(err.message, 500))
    }
}

//[GET] api/content/add
async function add(req, res, next) {
    console.log('hi')
    try {
        let DTO = await contentService.add(req.body);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        // return next(new ErrorResponse(err.message, 500))
    }
}

module.exports = {
    getAll,
    get,
    add
}