import express, { Request, Response, NextFunction } from "express";
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req: Request, res: Response, next: NextFunction) {
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
