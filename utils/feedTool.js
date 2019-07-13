var db = require("./db");

module.exports = {
  kimochi: {
    createkimochi: req => {
      var payload = ["kimochi", req.intro, req.tags, req.images];
      let sql = "INSERT INTO feeds (type,intro,tags,images) VALUES(?,?,?,?)";
      db.query(sql, payload);
    }
  },
  trip: {
    createtrip: req => {
      var payload = ["trip", req.intro, req.tags, req.coverUrl, req.title];
      let sql =
        "INSERT INTO feeds (type,intro,tags,cover_url,title) VALUES(?,?,?,?,?)";
      db.query(sql, payload);
    }
  },
  share: {
    createshare: req => {
      var payload = [
        "share",
        req.intro,
        req.tags,
        req.url,
        req.coverUrl,
        req.title
      ];
      let sql =
        "INSERT INTO feeds (type,intro,tags,url,cover_url,title) VALUES(?,?,?,?,?,?)";
      db.query(sql, payload);
    }
  },
  movie: {
    createmovie: req => {
      var payload = [
        "movie",
        req.title,
        req.name,
        req.intro,
        req.coverUrl,
        req.star
      ];
      let sql =
        "INSERT INTO feeds (type,title,name,intro,cover_url,star) VALUES(?,?,?,?,?,?)";
      db.query(sql, payload);
    }
  }
};
