import type { NextFunction, Request, Response, } from "express";


export function errorHandler(e:Error, req:Request, res:Response, next:NextFunction) {
    // If the status is 200 it means it did not change those we set it to 500
    // Which means it's an internal server error
    if (res.statusCode == 200) res.status(500);
    res.send({error: {
        name: e.name,
        message: e.message,
        cause: e.cause
    }});
}