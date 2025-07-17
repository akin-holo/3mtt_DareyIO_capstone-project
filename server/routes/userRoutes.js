import express from "express"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { addToWatchlist, getUserWatchlist, removeFromWatchlist,
         addToFavorites, getFavorites, removeFavorite } from "../controllers/userController"; 

const router = express.Router();

// Watchlist
router.post("/watchlist", authMiddleware, addToWatchlist);
router.get('/watchlist', authMiddleware, getUserWatchlist);
router.delete('/watchlist/:id', authMiddleware, removeFromWatchlist);
// Favotites
router.post('/favorites', authMiddleware, addToFavorites);
router.get('/favorites', authMiddleware, getFavorites);
router.delete('/favorites/:id', authMiddleware, removeFavorite);

router.get('/recommendations', authMiddleware, getRecommendations);


export default router;
