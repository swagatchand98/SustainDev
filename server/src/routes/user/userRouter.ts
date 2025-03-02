import express, { Request, Response } from "express";
import isAuthenticated from "../../middleware/isAuthenticated";
import userModel from "../../db/users";

const userRouter = express.Router();

userRouter.get("/", isAuthenticated, async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: "user not found !" });
      return;
    }

    const username = req.user?.username;
    const email = req.user?.email;
    const createdAt = req.user?.createdAt;

    res.status(200).json({ username, email, createdAt });
    return;
  } catch (e) {
    console.error("error :", e);
    res.status(500).json({ error: "internal server error !" });
    return;
  }
});

userRouter.post("/", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { Plastic , Paper, Metal, Glass, EWaste, Textile } = req.body;

    const plastic = Number(Plastic) || 0;
    const paper = Number(Paper) || 0;
    const metal = Number(Metal) || 0;
    const glass = Number(Glass) || 0;
    const eWaste = Number(EWaste) || 0;
    const textile = Number(Textile) || 0;

    const user = await userModel.findById(req.userId);

    if (!user) {
      res.status(401).json({ error: "user not found !" });
      return;
    }

    user.wasteCollectionHistory.push({
      plastic,
      paper,
      metal,
      glass,
      eWaste,
      textile,
    });
    await user.save();

    const coinEarned =
      plastic * 10 +
      paper * 8 +
      metal * 25 +
      glass * 20 +
      eWaste * 50 +
      textile * 20;

    user.wallet.push({ coin: coinEarned });
    await user.save();

    res.status(200).json({ message: "Coins added in the wallet !" });
    return;
  } catch (e) {
    console.error("error :", e);
    res.status(500).json({ error: "internal server error !" });
    return;
  }
});

userRouter.get(
  "/wallet",
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const user = await userModel.findById(req.userId);

      if (!user) {
        res.status(401).json({ error: "user not found !" });
        return;
      }

      res.status(200).send(user.wallet);
    } catch (e) {
      console.error("error :", e);
      res.status(500).json({ error: "internal server error !" });
      return;
    }
  }
);

export default userRouter;
