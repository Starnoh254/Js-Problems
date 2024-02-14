const http = require("http");

const requestListener = (req, res) => {
  res.writeHead(200, {
    "Set-Cookie": "hasVisited=YES; SameSite = None; Secure;",
  });

  let message = "Welcome to the website";
  if (req.headers.cookie === "hasVisited=YES") {
    message = "Welcome back";
  }

  res.end(`<html><div align="center"><h1>${message}</h1></div></html>`);
};

const server = http.createServer(requestListener);
server.listen(8080, () => console.log("The Server is running on port 8080"));
