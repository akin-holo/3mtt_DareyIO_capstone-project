import express from "express";
// import { searchMovies } from "../services/tmdbService";
import { getTrending, searchMoviesByQuery, getMovieDetails } from "../controllers/moviecontroller.js";

const router = express.Router();

router.get("/trending", getTrending);
router.get("/search", searchMoviesByQuery);
router.get("/details/:id", getMovieDetails)

export default router;