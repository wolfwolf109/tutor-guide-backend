import { NextFunction, Router, Request, Response } from "express";
import TutorController from "../../controllers/tutor.controller";

class TutorRouter {
  private _router = Router();
  private _controller = TutorController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */

  private _configure() {
    this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });
  }
}

export = new TutorRouter().router;