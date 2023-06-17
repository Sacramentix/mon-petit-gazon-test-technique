import { type Request, type Response } from "express";
import { z } from "zod";


export function zparseWithError<Schema extends Zod.Schema>(schema:Schema, req:Request, res:Response):z.infer<Schema> {
    try {
        return schema.parse(req);
    } catch(e) {
        res.status(400);
        throw e;
    }
}