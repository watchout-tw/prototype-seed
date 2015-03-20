const path = "";
const routes = [
  {
    method: "GET",
    handle (req, res) {
      return res.json({ msg: "Hello" });
    }
  },
  {
    method: "GET",
    path: "/hello/world",
    handle (req, res) {
      return res.json({ msg: "Hello World" });
    }
  }
];

export default {path, routes};