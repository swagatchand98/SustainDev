import express, { Request, Response } from "express";
import isAuthenticated from "../../middleware/isAuthenticated";
import userModel, { IwasteCollection } from "../../db/users";

const userRouter = express.Router();

interface Icoin_rates {
  plastic: number;
  paper: number;
  metal: number;
  glass: number;
  eWaste: number;
  textile: number;
}

const COIN_RATES: Icoin_rates = {
  plastic: 10,
  paper: 8,
  metal: 25,
  glass: 20,
  eWaste: 50,
  textile: 20,
};

const calculateCoin: (
  wasteCollection: IwasteCollection,
  COIN_RATES: Icoin_rates
) => Number = (wasteCollection, COIN_RATES) => {
  const totalCoin =
    Number(wasteCollection.plastic) * COIN_RATES.plastic +
    Number(wasteCollection.paper) * COIN_RATES.paper +
    Number(wasteCollection.metal) * COIN_RATES.metal +
    Number(wasteCollection.glass) * COIN_RATES.glass +
    Number(wasteCollection.eWaste) * COIN_RATES.eWaste +
    Number(wasteCollection.textile) * COIN_RATES.textile;
  return totalCoin;
};

userRouter.get("/", isAuthenticated, async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: "user not found !" });
      return;
    }

    const { username, email, createdAt } = req.user;

    res.status(200).json({ username, email, createdAt });
    return;
  } catch (e) {
    console.error("error :", e);
    res.status(500).json({ error: "internal server error !" });
    return;
  }
});

userRouter.post(
  "/waste-collection",
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const { plastic, paper, metal, glass, eWaste, textile } = req.body;

      const wasteCollection: IwasteCollection = {
        plastic: Math.max(0, Number(plastic) || 0),
        paper: Math.max(0, Number(paper) || 0),
        metal: Math.max(0, Number(metal) || 0),
        glass: Math.max(0, Number(glass) || 0),
        eWaste: Math.max(0, Number(eWaste) || 0),
        textile: Math.max(0, Number(textile) || 0),
      };

      const user = await userModel.findById(req.userId);

      if (!user) {
        res.status(401).json({ error: "user not found !" });
        return;
      }

      const totalCoin = calculateCoin(wasteCollection, COIN_RATES);

      user.wasteCollectionHistory.push(wasteCollection);
      user.wallet.push({ coin: totalCoin });

      await user.save();

      res.status(200).json({ message: "Coins added in the wallet !" });
      return;
    } catch (e) {
      console.error("error :", e);
      res.status(500).json({ error: "internal server error !" });
      return;
    }
  }
);

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
