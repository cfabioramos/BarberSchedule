const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");

// app.use(express.static("public"));
// app.set("view engine", "ejs");

app.post("/auth/refresh", (req, res) => {
    var json = `
        {
            "error":"",
            "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8",
            "data":{
                "id":4,
                "name":"Bonieky Testador",
                "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/default.png",
                "email":"boniekyteste@hotmail.com"
            }
        }
    `
  res.send(json);
});

app.post("/auth/login", (req, res) => {
  var json = `
        {
            "error":"",
            "data": {
                "id":4,
                "name":"Bonieky Testador",
                "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/default.png",
                "email":"boniekyteste@hotmail.com"
            },
            "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8"
        }
    `;
  res.send(json);
});

app.post("/user", (req, res) => {
  var json = `
    {
        "error":"",
        "data": { 
            "id":323,
            "name":"Bonkey Testador",
            "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/default.png",
            "email":"boniekyteste@hotmail.com"
        },
        "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8"
    }`;
  res.send(json);
});

app.get("/barbers", (req, res) => {

    var json = `
        {
            "error":"",
            "data":[
                {
                    "id":4,
                    "name":"Bonieky Lacerda",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/3.png",
                    "stars":2.3
                },
                {
                    "id":8,
                    "name":"Ronaldo Sousa",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/1.png",
                    "stars":2.1
                },
                {
                    "id":11,
                    "name":"Gabriel Alvaro",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/2.png",
                    "stars":2.3
                },
                {
                    "id":6,
                    "name":"Amanda Lacerda",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/4.png",
                    "stars":3.6
                },
                {
                    "id":5,
                    "name":"Bonieky Alvaro",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/4.png",
                    "stars":4.8
                },
                {
                    "id":12,
                    "name":"Amanda Diniz",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/4.png",
                    "stars":3.5
                },
                {
                    "id":3,
                    "name":"Pedro Gomes",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/1.png",
                    "stars":3.4
                },
                {
                    "id":9,
                    "name":
                    "Gabriel Lacerda",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/3.png",
                    "stars":2.5
                },
                {
                    "id":1,
                    "name":"Paulo Silva",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/3.png",
                    "stars":4.8
                },
                {
                    "id":2,
                    "name":"Leticia Silva",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/4.png",
                    "stars":2
                },
                {
                    "id":13,
                    "name":"Leticia Lacerda",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/3.png",
                    "stars":3.4
                },
                {
                    "id":14,
                    "name":"Amanda Lacerda",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/4.png",
                    "stars":2.4
                },
                {
                    "id":7,
                    "name":"Ronaldo Lacerda",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/1.png",
                    "stars":4.7
                },
                {
                    "id":15,
                    "name":"Gabriel Silva",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/2.png",
                    "stars":4.3
                },
                {
                    "id":10,
                    "name":"Ronaldo Silva",
                    "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/3.png",
                    "stars":2.8
                }
            ],
            "loc":"S\u00e3o Paulo"
        }
    `
    res.send(json);
});

server.listen(3000);
