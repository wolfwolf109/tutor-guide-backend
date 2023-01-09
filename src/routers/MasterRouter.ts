import { Router } from 'express';
import studentRouter from './student-router/student.router';
import tutorRouter from './tutor-router/tutor.router';

class MasterRouter {
  private _router = Router();
  private _tutorRouter = tutorRouter;
  private _studentRouter = studentRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/tutor', this._tutorRouter);
    this._router.use('/student', this._studentRouter);
  }
}

export = new MasterRouter().router;