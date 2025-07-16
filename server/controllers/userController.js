export const addToWatchlist = async (req, res) => {
   try {
      const userId = req.user.id;
      const movie = req.body;
      const user = await User.findById(userId);
      user.watchlist.push(movie);
      await user.save();
      res.json(user.watchlist);
   } catch (err) {
      res.status(500).json({  message: err.message });
   }
}