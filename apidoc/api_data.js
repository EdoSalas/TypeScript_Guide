define({ "api": [
  {
    "group": "User",
    "version": "1.0.0",
    "name": "Get_All_Users",
    "type": "get",
    "url": "/api/users/",
    "title": "",
    "description": "<p>Obtain all users</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n     http://localhost:4041/api/users/\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4041/api/users/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dof",
            "description": "<p>Date of birth of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"id\": 1,\n         \"name\": Eduardo Salas,\n         \"dof\": 12/12/1995,\n         \"email\": esalas95@outlook.com\n         \"status\": 1\n     }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/user.ts",
    "groupTitle": "User"
  }
] });
