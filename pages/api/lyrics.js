/* eslint-disable require-jsdoc */
// const songlyrics = require("songlyrics").default;
// import lyricsSearcher from "lyrics-searcher";
import { getLyrics } from "genius-lyrics-api";

export default async function handler(req, res) {
  const author = req.body.author;
  const title = req.body.title;
  if (req.method === "POST") {
    const options = {
      apiKey:
        "RX-7IigLielBdgIkVhNHwCH_avGLYowTpbRJMqkbM_KCQiJZDTxmjrUz43yAwYbH",
      title: title,
      artist: author,
      optimizeQuery: true,
    };

    await getLyrics(options)
      .then((lyrics) => {
        res.status(200).json({ lyrics: lyrics });
      })
      .catch((err) => res.status(400).json({ error: err }));
  }
}
