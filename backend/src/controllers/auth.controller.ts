import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";

import User from "../db/models/user";

export default class AuthController {

  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcryptjs.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      return res.status(200).json({ success: "User created successfully" });
    } catch (error: any) {
      return res
        .status(400)
        .json({ success: false, statusCode: 400, message: error.message });
    }
  }
  
}
