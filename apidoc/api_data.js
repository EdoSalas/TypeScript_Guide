define({ "api": [
  {
    "group": "BasketballReservation",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/basketball/createBasketballReservation/",
    "title": "Create Basketball Reservation",
    "description": "<p>Create Basketball Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/basketball/createBasketballReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opponentName",
            "description": "<p>Name of opponent</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"courtId\": 2,\n   \"gameTime\": \"2021-12-01 04:00:00\",\n   \"matchDuration\": \"1 hora\",\n   \"partnerCode\": \"42069\",\n   \"opponentName\": \"Prueba\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"BasketBallReservation\",\n   \"description\": \"Reservation created\",\n   \"data\": {\n       \"basketballReservationId\": 21,\n       \"courtId\": 2,\n       \"reservationTime\": \"2021-12-06T14:22:31.000Z\",\n       \"gameTime\": \"2021-12-01T10:00:00.000Z\",\n       \"matchDuration\": \"1 hora\",\n       \"opponentName\": \"Prueba\",\n       \"partnerCode\": \"42069\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/basketball.routes.js",
    "groupTitle": "BasketballReservation"
  },
  {
    "group": "BasketballReservation",
    "version": "0.1.0",
    "name": "Delete",
    "type": "delete",
    "url": "/api/v1/basketball/deleteBasketballReservation/",
    "title": "Delete Basketball Reservation",
    "description": "<p>Delete Basketball Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/basketball/deleteBasketballReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "basketballReservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of court</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"basketballReservationId\": 21,\n   \"gameTime\": \"2021-12-01 04:00:00\",\n   \"partnerCode\": \"42069\",\n   \"courtId\": 2\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"BasketBallReservation\",\n   \"description\": \"Delete BasketBallReservation\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/basketball.routes.js",
    "groupTitle": "BasketballReservation"
  },
  {
    "group": "BasketballReservation",
    "version": "0.1.0",
    "name": "GetAll",
    "type": "get",
    "url": "/api/v1/basketball/getAllBasketballReservations/",
    "title": "Get All Basketball Reservation",
    "description": "<p>Get All Basketball Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/basketball/getAllBasketballReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"BasketBallReservation\",\n   \"description\": \"All BasketBallReservation\",\n   \"data\": [\n       {\n           \"basketballReservationId\": 4,\n           \"courtId\": 1,\n           \"reservationTime\": \"2021-11-16T20:21:08.000Z\",\n           \"gameTime\": \"2021-10-29T10:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"opponentName\": \"Aplanadoras FC\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/basketball.routes.js",
    "groupTitle": "BasketballReservation"
  },
  {
    "group": "BowlingReservation",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/bowling/createBowlingReservation/",
    "title": "Create Bowling Reservation",
    "description": "<p>Create Bowling Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/bowling/createBowlingReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opponentName",
            "description": "<p>Name of opponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"courtId\": 5,\n   \"gameTime\": \"2021-12-06 08:37:00\",\n   \"opponentName\": \"Prueba de funcionamiento\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"BowlingReservation\",\n   \"description\": \"Reservation created\",\n   \"data\": {\n       \"bowlingReservationId\": 7,\n       \"courtId\": 5,\n       \"reservationTime\": \"2021-12-06T14:38:06.000Z\",\n       \"gameTime\": \"2021-12-06T14:37:00.000Z\",\n       \"matchDuration\": \"1 hora\",\n       \"opponentName\": \"Prueba de funcionamiento\",\n       \"partnerCode\": \"42069\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/bowling.routes.js",
    "groupTitle": "BowlingReservation"
  },
  {
    "group": "BowlingReservation",
    "version": "0.1.0",
    "name": "Delete",
    "type": "delete",
    "url": "/api/v1/bowling/deleteBowlingReservation/",
    "title": "Delete Bowling Reservation",
    "description": "<p>Delete Bowling Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/bowling/deleteBowlingReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "bowlingReservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"bowlingReservationId\": 7,\n   \"gameTime\": \"2021-12-06 08:37:00\",\n   \"partnerCode\": \"42069\",\n   \"courtId\": 5\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"BowlingReservation\",\n   \"description\": \"Reservation deleted\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/bowling.routes.js",
    "groupTitle": "BowlingReservation"
  },
  {
    "group": "BowlingReservation",
    "version": "0.1.0",
    "name": "Get_All",
    "type": "get",
    "url": "/api/v1/bowling/getBowlingReservations/",
    "title": "Get All Bowling Reservation",
    "description": "<p>Get All Bowling Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/bowling/getBowlingReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"BowlingReservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"bowlingReservationId\": 3,\n           \"courtId\": 1,\n           \"reservationTime\": \"2021-11-17T04:07:57.000Z\",\n           \"gameTime\": \"2021-10-27T10:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"opponentName\": \"Carlos Salazar\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/bowling.routes.js",
    "groupTitle": "BowlingReservation"
  },
  {
    "group": "FrontonReservation",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/fronton/createFrontonReservation/",
    "title": "Create Fronton Reservation",
    "description": "<p>Create Fronton Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/fronton/createFrontonReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchDuration",
            "description": "<p>Duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opponentName",
            "description": "<p>Name of opponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"courtId\": 5,\n   \"gameTime\": \"2021-12-06 09:00:00\",\n   \"matchDuration\": \"1 hora\",\n   \"opponentName\": \"Eduardo Salas\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"FrontonReservation\",\n   \"description\": \"Reservation created\",\n   \"data\": {\n       \"frontonReservationId\": 9,\n       \"courtId\": 5,\n       \"reservationTime\": \"2021-12-06T15:03:17.000Z\",\n       \"gameTime\": \"2021-12-06T15:00:00.000Z\",\n       \"matchDuration\": \"1 hora\",\n       \"opponentName\": \"Eduardo Salas\",\n       \"partnerCode\": \"42069\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/fronton.routes.js",
    "groupTitle": "FrontonReservation"
  },
  {
    "group": "FrontonReservation",
    "version": "0.1.0",
    "name": "Delete",
    "type": "delete",
    "url": "/api/v1/fronton/deleteFrontonReservation/",
    "title": "Delete Fronton Reservation",
    "description": "<p>Delete Fronton Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/fronton/deleteFrontonReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "frontonReservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"frontonReservationId\": 9,\n   \"gameTime\": \"2021-12-06 09:00:00\",\n   \"partnerCode\": \"42069\",\n   \"courtId\": 5\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"FrontonReservation\",\n   \"description\": \"Reservation deleted\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/fronton.routes.js",
    "groupTitle": "FrontonReservation"
  },
  {
    "group": "FrontonReservation",
    "version": "0.1.0",
    "name": "Get_All",
    "type": "get",
    "url": "/api/v1/fronton/getFrontonReservations/",
    "title": "Get All Fronton Reservation",
    "description": "<p>Get All Fronton Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/fronton/getFrontonReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"FrontonReservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"frontonReservationId\": 1,\n           \"courtId\": 1,\n           \"reservationTime\": \"2021-11-13T03:41:56.000Z\",\n           \"gameTime\": \"2021-10-28T11:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"opponentName\": \"Josué Quirós\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/fronton.routes.js",
    "groupTitle": "FrontonReservation"
  },
  {
    "group": "GymReservation",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/gym/createGymReservation/",
    "title": "Create Gym Reservation",
    "description": "<p>Create Gym Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/gym/createGymReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchDuration",
            "description": "<p>Duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opponentName",
            "description": "<p>Name of opponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"courtId\": 5,\n   \"gameTime\": \"2021-12-06 09:10:00\",\n   \"matchDuration\": \"1 hora\",\n   \"opponentName\": \"Eduardo Salas\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"GymReservation\",\n   \"description\": \"Reservation Created\",\n   \"data\": {\n       \"gymReservationId\": 5,\n       \"courtId\": 5,\n       \"reservationTime\": \"2021-12-06T15:10:07.000Z\",\n       \"gameTime\": \"2021-12-06T15:10:00.000Z\",\n       \"matchDuration\": \"1 hora\",\n       \"partnerCode\": \"42069\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/gym.routes.js",
    "groupTitle": "GymReservation"
  },
  {
    "group": "GymReservation",
    "version": "0.1.0",
    "name": "Delete",
    "type": "delete",
    "url": "/api/v1/gym/deleteGymReservation/",
    "title": "Delete Gym Reservation",
    "description": "<p>Delete Gym Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/gym/deleteGymReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gymReservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"gymReservationId\": 5,\n   \"gameTime\": \"2021-12-06 09:10:00\",\n   \"partnerCode\": \"42069\",\n   \"courtId\": 5\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"GymReservation\",\n   \"description\": \"Reservation Deleted\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/gym.routes.js",
    "groupTitle": "GymReservation"
  },
  {
    "group": "GymReservation",
    "version": "0.1.0",
    "name": "Get_All",
    "type": "get",
    "url": "/api/v1/gym/getGymReservations/",
    "title": "Get All Gym Reservation",
    "description": "<p>Get All Gym Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/gym/getGymReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"GymReservation\",\n   \"description\": \"Reservation Founded\",\n   \"data\": [\n       {\n           \"gymReservationId\": 5,\n           \"courtId\": 5,\n           \"reservationTime\": \"2021-12-06T15:10:07.000Z\",\n           \"gameTime\": \"2021-12-06T15:10:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/gym.routes.js",
    "groupTitle": "GymReservation"
  },
  {
    "group": "PadelReservation",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/padel/createPadelReservation/",
    "title": "Create Padel Reservation",
    "description": "<p>Create Padel Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/padel/createPadelReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchDuration",
            "description": "<p>Duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opponentName",
            "description": "<p>Name of opponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"courtId\": 5,\n   \"gameTime\": \"2021-12-06 10:00:00\",\n   \"matchDuration\": \"1 hora\",\n   \"opponentName\": \"Eduardo Salas\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Padel Reservation\",\n   \"description\": \"Reservation Created\",\n   \"data\": {\n       \"padelReservationId\": 7,\n       \"courtId\": 5,\n       \"reservationTime\": \"2021-12-06T15:28:55.000Z\",\n       \"gameTime\": \"2021-12-06T16:00:00.000Z\",\n       \"matchDuration\": \"1 hora\",\n       \"opponentName\": \"Eduardo Salas\",\n       \"partnerCode\": \"42069\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/padel.routes.js",
    "groupTitle": "PadelReservation"
  },
  {
    "group": "PadelReservation",
    "version": "0.1.0",
    "name": "Delete",
    "type": "delete",
    "url": "/api/v1/padel/deletePadelReservation/",
    "title": "Delete Padel Reservation",
    "description": "<p>Delete Padel Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/padel/deletePadelReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "padelReservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"padelReservationId\": 7,\n   \"gameTime\": \"2021-12-06 10:00:00\",\n   \"partnerCode\": \"42069\",\n   \"courtId\": 5\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Padel Reservation\",\n   \"description\": \"Reservation Deleted\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/padel.routes.js",
    "groupTitle": "PadelReservation"
  },
  {
    "group": "PadelReservation",
    "version": "0.1.0",
    "name": "Get_All",
    "type": "get",
    "url": "/api/v1/padel/getPadelReservations/",
    "title": "Get All Padel Reservation",
    "description": "<p>Get All Padel Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/padel/getPadelReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Padel Reservation\",\n   \"description\": \"Reservation Created\",\n   \"data\": [\n       {\n           \"padelReservationId\": 4,\n           \"courtId\": 1,\n           \"reservationTime\": \"2021-10-22T02:55:49.000Z\",\n           \"gameTime\": \"2021-10-28T10:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"opponentName\": \"Josué Quirós\",\n           \"partnerCode\": \"42069\"\n       },\n       {\n           \"padelReservationId\": 7,\n           \"courtId\": 5,\n           \"reservationTime\": \"2021-12-06T15:28:55.000Z\",\n           \"gameTime\": \"2021-12-06T16:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"opponentName\": \"Eduardo Salas\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/padel.routes.js",
    "groupTitle": "PadelReservation"
  },
  {
    "group": "PingPongReservation",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/pingpong/createPingPongReservation/",
    "title": "Create Ping Pong Reservation",
    "description": "<p>Create Ping Pong Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/pingpong/createPingPongReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchDuration",
            "description": "<p>Duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opponentName",
            "description": "<p>Name of opponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"courtId\": 1,\n   \"gameTime\": \"2021-12-06 13:00:00\",\n   \"matchDuration\": \"1 hora\",\n   \"partnerCode\": \"42069\",\n   \"opponentName\": \"Eduardo Salas\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Ping Pong Reservation\",\n   \"description\": \"Reservation Created\",\n   \"data\": {\n       \"courtId\": 1,\n       \"gameTime\": \"2021-12-06T19:00:00.000Z\",\n       \"matchDuration\": \"1 hora\",\n       \"opponentName\": \"Eduardo Salas\",\n       \"partnerCode\": \"42069\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/pingPong.routes.js",
    "groupTitle": "PingPongReservation"
  },
  {
    "group": "PingPongReservation",
    "version": "0.1.0",
    "name": "Delete",
    "type": "delete",
    "url": "/api/v1/pingpong/deletePingPongReservation/",
    "title": "Delete Ping Pong Reservation",
    "description": "<p>Delete Ping Pong Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/pingpong/deletePingPongReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pingPongReservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"pingPongReservationId\": 2,\n   \"gameTime\": \"2021-12-06 13:00:00\",\n   \"partnerCode\": \"42069\",\n   \"courtId\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Ping Pong Reservation\",\n   \"description\": \"Reservation Deleted\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/pingPong.routes.js",
    "groupTitle": "PingPongReservation"
  },
  {
    "group": "PingPongReservation",
    "version": "0.1.0",
    "name": "Get",
    "type": "get",
    "url": "/api/v1/pingpong/getAllPingPongReservation/",
    "title": "Get All Ping Pong Reservation",
    "description": "<p>Get All Ping Pong Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/pingpong/getAllPingPongReservation/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Ping Pong Reservation\",\n   \"description\": \"Reservation Founded\",\n   \"data\": [\n       {\n           \"courtId\": 1,\n           \"reservationTime\": \"2021-12-06T18:56:59.000Z\",\n           \"gameTime\": \"2021-12-06T19:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"opponentName\": \"Eduardo Salas\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/pingPong.routes.js",
    "groupTitle": "PingPongReservation"
  },
  {
    "group": "Sport",
    "version": "0.1.0",
    "name": "GetSport",
    "type": "get",
    "url": "/api/v1/sport/getSports/",
    "title": "Get All Sports",
    "description": "<p>Get All Sports</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/sport/getSports/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Sports\",\n   \"description\": \"Sports founded\",\n   \"data\": [\n       {\n           \"id\": 11,\n           \"name\": \"Tennis\",\n           \"imageURL\": \"https://i.ibb.co/SxMMxG3/TENNIS.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 11,\n           \"reservation\": 500,\n           \"ligthUse\": 700\n       },\n       {\n           \"id\": 12,\n           \"name\": \"Gimnasio\",\n           \"imageURL\": \"https://i.ibb.co/HCSTL5V/GIMNASIO.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 1,\n           \"reservation\": 0,\n           \"ligthUse\": 0\n       },\n       {\n           \"id\": 13,\n           \"name\": \"Frontón\",\n           \"imageURL\": \"https://i.ibb.co/xLWg2S9/FRONTON.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 2,\n           \"reservation\": 1200,\n           \"ligthUse\": 900\n       },\n       {\n           \"id\": 14,\n           \"name\": \"Boliche\",\n           \"imageURL\": \"https://i.ibb.co/NYbFCrL/BOLICHE.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 1,\n           \"reservation\": 1000,\n           \"ligthUse\": 800\n       },\n       {\n           \"id\": 15,\n           \"name\": \"Squash\",\n           \"imageURL\": \"https://i.ibb.co/6RfPFqp/SQUASH.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 1,\n           \"reservation\": 500,\n           \"ligthUse\": 1100\n       },\n       {\n           \"id\": 16,\n           \"name\": \"Natación\",\n           \"imageURL\": \"https://i.ibb.co/s18VJYy/NATACION.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 2,\n           \"reservation\": 0,\n           \"ligthUse\": 0\n       },\n       {\n           \"id\": 17,\n           \"name\": \"Padel\",\n           \"imageURL\": \"https://i.ibb.co/vzQj1Mr/PADEL-Mesa-de-trabajo-1.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 4,\n           \"reservation\": 600,\n           \"ligthUse\": 700\n       },\n       {\n           \"id\": 18,\n           \"name\": \"Baloncesto\",\n           \"imageURL\": \"https://i.ibb.co/yB5qh0k/BALONCESTO.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 1,\n           \"reservation\": 1200,\n           \"ligthUse\": 700\n       },\n       {\n           \"id\": 19,\n           \"name\": \"Fútbol\",\n           \"imageURL\": \"https://i.ibb.co/RgxMj9g/FUTBOL.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 1,\n           \"reservation\": 0,\n           \"ligthUse\": 0\n       },\n       {\n           \"id\": 20,\n           \"name\": \"Ping Pong\",\n           \"imageURL\": \"https://i.ibb.co/ZL8Rmm1/TENNIS-DE-MESA.png\",\n           \"description\": \"Soy una descripción de deporte\",\n           \"quantity\": 1,\n           \"reservation\": 0,\n           \"ligthUse\": 0\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/sport.routes.js",
    "groupTitle": "Sport"
  },
  {
    "group": "SquashReservation",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/squash/createSquashReservation/",
    "title": "Create Squash Reservation",
    "description": "<p>Create Squash Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/squash/createSquashReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchDuration",
            "description": "<p>Duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opponentName",
            "description": "<p>Name of opponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"courtId\": 5,\n   \"gameTime\": \"2021-12-06 10:00:00\",\n   \"matchDuration\": \"1 hora\",\n   \"opponentName\": \"Eduardo Salas\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Squash Reservation\",\n   \"description\": \"Reservation Created\",\n   \"data\": {\n       \"squashReservationId\": 7,\n       \"courtId\": 5,\n       \"reservationTime\": \"2021-12-06T15:48:19.000Z\",\n       \"gameTime\": \"2021-12-06T16:00:00.000Z\",\n       \"matchDuration\": \"1 hora\",\n       \"opponentName\": \"Eduardo Salas\",\n       \"partnerCode\": \"42069\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/squash.routes.js",
    "groupTitle": "SquashReservation"
  },
  {
    "group": "SquashReservation",
    "version": "0.1.0",
    "name": "Delete",
    "type": "delete",
    "url": "/api/v1/squash/deleteSquashReservation/",
    "title": "Delete Squash Reservation",
    "description": "<p>Delete Squash Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/squash/deleteSquashReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "squashReservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"squashReservationId\": 7,\n   \"gameTime\": \"2021-12-06 10:00:00\",\n   \"partnerCode\": \"42069\",\n   \"courtId\": 5\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Squash Reservation\",\n   \"description\": \"Reservation Created\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/squash.routes.js",
    "groupTitle": "SquashReservation"
  },
  {
    "group": "SquashReservation",
    "version": "0.1.0",
    "name": "Get_All",
    "type": "get",
    "url": "/api/v1/squash/getSquashReservations/",
    "title": "Get All Squash Reservation",
    "description": "<p>Get All Squash Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/squash/getSquashReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Squash Reservation\",\n   \"description\": \"Reservation Created\",\n   \"data\": [\n       {\n           \"squashReservationId\": 2,\n           \"courtId\": 1,\n           \"reservationTime\": \"2021-11-13T03:53:30.000Z\",\n           \"gameTime\": \"2021-11-13T11:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"opponentName\": \"Josué Quirós\",\n           \"partnerCode\": \"42069\"\n       },\n       {\n           \"squashReservationId\": 7,\n           \"courtId\": 5,\n           \"reservationTime\": \"2021-12-06T15:48:19.000Z\",\n           \"gameTime\": \"2021-12-06T16:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"opponentName\": \"Eduardo Salas\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/squash.routes.js",
    "groupTitle": "SquashReservation"
  },
  {
    "group": "SwimmingPoolReservation",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/swimming/createSwimmingPoolReservation/",
    "title": "Create Swimming Pool Reservation",
    "description": "<p>Create Swimming Pool Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/swimming/createSwimmingPoolReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"gameTime\": \"2021-12-06 10:00:00\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Swimming Pool Reservation\",\n   \"description\": \"Reservation created\",\n   \"data\": {\n       \"swimmingPoolReservationId\": 6,\n       \"reservationTime\": \"2021-12-06T15:59:53.000Z\",\n       \"gameTime\": \"2021-12-06T16:00:00.000Z\",\n       \"matchDuration\": \"1 Hora\",\n       \"partnerCode\": \"42069\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/swimmingPool.routes.js",
    "groupTitle": "SwimmingPoolReservation"
  },
  {
    "group": "SwimmingPoolReservation",
    "version": "0.1.0",
    "name": "Delete",
    "type": "delete",
    "url": "/api/v1/swimming/deleteSwimmingPoolReservation/",
    "title": "Delete Swimming Pool Reservation",
    "description": "<p>Delete Swimming Pool Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/swimming/deleteSwimmingPoolReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "swimmingPoolReservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"swimmingPoolReservationId\": 6,\n   \"gameTime\": \"2021-12-06 10:00:00\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Swimming Pool Reservation\",\n   \"description\": \"Reservation deleted\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/swimmingPool.routes.js",
    "groupTitle": "SwimmingPoolReservation"
  },
  {
    "group": "SwimmingPoolReservation",
    "version": "0.1.0",
    "name": "Get_All",
    "type": "get",
    "url": "/api/v1/swimming/getSwimmingPoolReservations/",
    "title": "Get All Swimming Pool Reservation",
    "description": "<p>Get All Swimming Pool Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/swimming/getSwimmingPoolReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Swimming Pool Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"swimmingPoolReservationId\": 4,\n           \"reservationTime\": \"2021-11-18T23:27:28.000Z\",\n           \"gameTime\": \"2021-10-30T16:00:00.000Z\",\n           \"matchDuration\": \"1 Hora\",\n           \"partnerCode\": \"42069\"\n       },\n       {\n           \"swimmingPoolReservationId\": 6,\n           \"reservationTime\": \"2021-12-06T15:59:53.000Z\",\n           \"gameTime\": \"2021-12-06T16:00:00.000Z\",\n           \"matchDuration\": \"1 Hora\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/swimmingPool.routes.js",
    "groupTitle": "SwimmingPoolReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Create_Tennis_Class_Reservation",
    "type": "post",
    "url": "/api/v1/tennis/createTennisClassReservation/",
    "title": "Create Tennis Class Reservation",
    "description": "<p>Create Tennis Class Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/createTennisClassReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchDuration",
            "description": "<p>Duration of game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructorName",
            "description": "<p>Name of instructor</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"reservationId\": 13250,\n   \"courtId\": 5,\n   \"gameTime\": \"2021-12-06 09:00:00\",\n   \"matchDuration\": \"1 hora\",\n   \"partnerCode\":\"42069\",\n   \"instructorName\": \"Eduardo Salas\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation created\",\n   \"data\": {\n       \"tennisClassId\": 4,\n       \"reservationId\": 13250,\n       \"matchDuration\": \"1 hora\",\n       \"instructorName\": \"Eduardo Salas\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Create_Tennis_Doubles_Reservation",
    "type": "post",
    "url": "/api/v1/tennis/createTennisDoublesReservation/",
    "title": "Create Tennis Doubles Reservation",
    "description": "<p>Create Tennis Doubles Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/createTennisDoublesReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchDuration",
            "description": "<p>Duration of game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamMateName",
            "description": "<p>Name of team</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstOpponentName",
            "description": "<p>Name of first opponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secondOpponentName",
            "description": "<p>Name of second opponent</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"reservationId\": 13250,\n   \"courtId\": 4,\n   \"gameTime\": \"2021-12-12 06:00:00\",\n   \"partnerCode\":\"42069\",\n   \"matchDuration\": \"1 hora\",\n   \"teamMateName\": \"Test Edo\",\n   \"firstOpponentName\": \"Eduardo Salas\",\n   \"secondOpponentName\": \"Edo\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation created\",\n   \"data\": {\n       \"tennisMatchDoublesId\": 6,\n       \"reservationId\": 13250,\n       \"matchDuration\": \"1 hora\",\n       \"teamMateName\": \"Test Edo\",\n       \"firstOpponentName\": \"Eduardo Salas\",\n       \"secondOpponentName\": \"Edo\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Create_Tennis_School_Class_Reservation",
    "type": "post",
    "url": "/api/v1/tennis/createTennisSchoolClassReservation/",
    "title": "Create Tennis School Class Reservation",
    "description": "<p>Create Tennis School Class Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/createTennisSchoolClassReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchDuration",
            "description": "<p>Duration of game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructorName",
            "description": "<p>Name of instructor</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"reservationId\": 13250,\n   \"courtId\": 4,\n   \"gameTime\": \"2021-12-06 11:00:00\",\n   \"matchDuration\": \"1 hora\",\n   \"partnerCode\":\"42069\",\n   \"instructorName\": \"Eduardo Salas\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation created\",\n   \"data\": {\n       \"tennisClassSchoolId\": 5,\n       \"reservationId\": 13250,\n       \"matchDuration\": \"1 hora\",\n       \"instructorName\": \"Eduardo Salas\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Create_Tennis_Single_Reservation",
    "type": "post",
    "url": "/api/v1/tennis/createTennisSingleReservation/",
    "title": "Create Tennis Single Reservation",
    "description": "<p>Create Tennis Single Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/createTennisSingleReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "courtId",
            "description": "<p>Identification of Court</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opponentName",
            "description": "<p>Name of opponent</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"reservationId\": 12916,\n   \"courtId\": 4,\n   \"gameTime\": \"2021-12-06 05:00:00\",\n   \"partnerCode\":\"42069\",\n   \"opponentName\": \"Eduardo Salas\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation created\",\n   \"data\": {\n       \"reservationId\": 12916,\n       \"matchDuration\": \"1 hora\",\n       \"tennisMatchSingleId\": 9,\n       \"opponentName\": \"Eduardo Salas\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Delete_Tennis_Class_Reservation",
    "type": "delete",
    "url": "/api/v1/tennis/deleteTennisClassReservation/",
    "title": "Delete Tennis Class Reservation",
    "description": "<p>Delete Tennis Class Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/deleteTennisClassReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"reservationId\": 12918,\n   \"gameTime\": \"2021-12-06 09:00:00\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Delete_Tennis_Doubles_Reservation",
    "type": "delete",
    "url": "/api/v1/tennis/deleteTennisDoubleReservation/",
    "title": "Delete Tennis Doubles Reservation",
    "description": "<p>Delete Tennis Doubles Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/deleteTennisDoubleReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code of Partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"reservationId\": 12917,\n   \"gameTime\": \"2021-12-06 06:00:00\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Delete_Tennis_School_Class_Reservation",
    "type": "delete",
    "url": "/api/v1/tennis/deleteTennisSchoolClassReservation/",
    "title": "Delete Tennis School Class Reservation",
    "description": "<p>Delete Tennis School Class Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/deleteTennisSchoolClassReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"reservationId\": 12919,\n   \"gameTime\": \"2021-12-06 11:00:00\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Delete_Tennis_Single_Reservation",
    "type": "delete",
    "url": "/api/v1/tennis/deleteTennisSingleReservation/",
    "title": "Delete Tennis Single Reservation",
    "description": "<p>Delete Tennis Single Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/deleteTennisSingleReservation/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reservationId",
            "description": "<p>Identification of Reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameTime",
            "description": "<p>Game Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>Code partner</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"reservationId\": 12916,\n   \"gameTime\": \"2021-12-06 05:00:00\",\n   \"partnerCode\": \"42069\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Get_All",
    "type": "get",
    "url": "/api/v1/tennis/getAllTennisReservations/",
    "title": "Get All Tennis Reservation",
    "description": "<p>Get All Tennis Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/getAllTennisReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"reservationId\": 2,\n           \"courtId\": 2,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:32:55.000Z\",\n           \"gameTime\": \"2021-11-05T06:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Aire Libre\",\n           \"partnerCode\": \"42069\",\n           \"opponentName\": \"Whanderley Fonseca\"\n       },\n       {\n           \"reservationId\": 6,\n           \"courtId\": 6,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:48:28.000Z\",\n           \"gameTime\": \"2021-11-05T06:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Bajo Techo\",\n           \"partnerCode\": \"42069\",\n           \"opponentName\": \"Fabio Cannavaro\"\n       },\n       {\n           \"reservationId\": 59,\n           \"courtId\": 4,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:54:52.000Z\",\n           \"gameTime\": \"2021-11-05T11:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Aire Libre\",\n           \"partnerCode\": \"42069\",\n           \"opponentName\": \"Fabio Rodriguez\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Get_All_Tennis_Class_Reservation",
    "type": "get",
    "url": "/api/v1/tennis/getTennisClassReservations/",
    "title": "Get All Tennis Class Reservation",
    "description": "<p>Get All Tennis Class Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/getTennisClassReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"reservationId\": 12918,\n           \"courtId\": 5,\n           \"gameType\": \"C\",\n           \"reservationTime\": \"2021-12-06T17:06:48.000Z\",\n           \"gameTime\": \"2021-12-06T15:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Testing\",\n           \"partnerCode\": \"42069\",\n           \"instructorName\": \"Eduardo Salas\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Get_All_Tennis_Doubles_Reservation",
    "type": "get",
    "url": "/api/v1/tennis/getTennisDoublesReservations/",
    "title": "Get All Tennis Doubles Reservation",
    "description": "<p>Get All Tennis Doubles Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/getTennisDoublesReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"reservationId\": 12917,\n           \"courtId\": 2,\n           \"gameType\": \"D\",\n           \"reservationTime\": \"2021-12-06T16:54:21.000Z\",\n           \"gameTime\": \"2021-12-06T12:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Aire Libre\",\n           \"partnerCode\": \"42069\",\n           \"teamMateName\": \"Test Edo\",\n           \"firstOpponentName\": \"Eduardo Salas\",\n           \"secondOpponentName\": \"Edo\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Get_All_Tennis_School_Class_Reservation",
    "type": "get",
    "url": "/api/v1/tennis/getTennisSchoolClassReservations/",
    "title": "Get All Tennis School Class Reservation",
    "description": "<p>Get All Tennis School Class Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/getTennisSchoolClassReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"reservationId\": 12919,\n           \"courtId\": 5,\n           \"gameType\": \"T\",\n           \"reservationTime\": \"2021-12-06T17:10:58.000Z\",\n           \"gameTime\": \"2021-12-06T17:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Testing\",\n           \"partnerCode\": \"42069\",\n           \"instructorName\": \"Eduardo Salas\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Get_All_Today_And_Tomorrow_Tennis_Reservation",
    "type": "get",
    "url": "/api/v1/tennis/getTodayTomorrowAvailableReservations/",
    "title": "Get All Today And Tomorrow Tennis Reservation",
    "description": "<p>Get All Today And Tomorrow Tennis Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/getTodayTomorrowAvailableReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"reservationId\": 12256,\n           \"courtId\": 1,\n           \"gameType\": \"A\",\n           \"courtType\": \"Aire Libre\"\n       },\n       {\n           \"reservationId\": 12260,\n           \"courtId\": 2,\n           \"gameType\": \"A\",\n           \"courtType\": \"Aire Libre\"\n       },\n       {\n           \"reservationId\": 12263,\n           \"courtId\": 3,\n           \"gameType\": \"A\",\n           \"courtType\": \"Aire Libre\"\n       },\n       ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Get_All_Today_Tennis_Reservation",
    "type": "get",
    "url": "/api/v1/tennis/getTennisReservations/",
    "title": "Get All Today Tennis Reservation",
    "description": "<p>Get All Today Tennis Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/getTennisReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": false,\n   \"message\": \"Not data found\",\n   \"description\": \"\",\n   \"data\": \"Error: PROCEDURE cr_tennis_club.sp_get_active_users does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Error-Example:",
          "content": "{\n    \"Error\": \"This endpoint not working\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Get_All_User_Tennis_Reservation_By_Id",
    "type": "get",
    "url": "/api/v1/tennis/getTennisReservationsById/:partnerCode/",
    "title": "Get All User Tennis Reservation By Id",
    "description": "<p>Get All User Tennis Reservation By Id</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/getTennisReservationsById/:partnerCode/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"reservationId\": 59,\n           \"courtId\": 4,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:54:52.000Z\",\n           \"gameTime\": \"2021-11-05T11:00:00.000Z\",\n           \"courtType\": \"Aire Libre\",\n           \"partnerCode\": \"42069\"\n       },\n       {\n           \"reservationId\": 6,\n           \"courtId\": 6,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:48:28.000Z\",\n           \"gameTime\": \"2021-11-05T06:00:00.000Z\",\n           \"courtType\": \"Bajo Techo\",\n           \"partnerCode\": \"42069\"\n       },\n       {\n           \"reservationId\": 2,\n           \"courtId\": 2,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:32:55.000Z\",\n           \"gameTime\": \"2021-11-05T06:00:00.000Z\",\n           \"courtType\": \"Aire Libre\",\n           \"partnerCode\": \"42069\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "TennisReservation",
    "version": "0.1.0",
    "name": "Get_Tennis_Single_Reservation",
    "type": "get",
    "url": "/api/v1/tennis/getTennisSingleReservations/",
    "title": "Get Tennis Single Reservation",
    "description": "<p>Get Tennis Single Reservation</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/tennis/getTennisSingleReservations/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Tennis Reservation\",\n   \"description\": \"Reservation founded\",\n   \"data\": [\n       {\n           \"reservationId\": 2,\n           \"courtId\": 2,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:32:55.000Z\",\n           \"gameTime\": \"2021-11-05T06:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Aire Libre\",\n           \"partnerCode\": \"42069\",\n           \"opponentName\": \"Whanderley Fonseca\"\n       },\n       {\n           \"reservationId\": 6,\n           \"courtId\": 6,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:48:28.000Z\",\n           \"gameTime\": \"2021-11-05T06:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Bajo Techo\",\n           \"partnerCode\": \"42069\",\n           \"opponentName\": \"Fabio Cannavaro\"\n       },\n       {\n           \"reservationId\": 59,\n           \"courtId\": 4,\n           \"gameType\": \"S\",\n           \"reservationTime\": \"2021-11-04T21:54:52.000Z\",\n           \"gameTime\": \"2021-11-05T11:00:00.000Z\",\n           \"matchDuration\": \"1 hora\",\n           \"courtType\": \"Aire Libre\",\n           \"partnerCode\": \"42069\",\n           \"opponentName\": \"Fabio Rodriguez\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/reservation/tennis.routes.js",
    "groupTitle": "TennisReservation"
  },
  {
    "group": "User",
    "version": "0.1.0",
    "name": "Create",
    "type": "post",
    "url": "/api/v1/user/create/",
    "title": "Create User",
    "description": "<p>Create User</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/user/create/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerId",
            "description": "<p>Identification of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>User Code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerFirstName",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerMiddleName",
            "description": "<p>Middle Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerLastName",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerPhone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerEmail",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerPassword",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerType",
            "description": "<p>Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "partnerAge",
            "description": "<p>Age</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"partnerId\": \"402290575\",\n   \"partnerCode\": \"1295\",\n   \"partnerFirstName\": \"Eduardo\",\n   \"partnerMiddleName\": \"Salas\",\n   \"partnerLastName\": \"Cerdas\",\n   \"partnerPhone\": \"84137805\",\n   \"partnerEmail\": \"esalas@betasolutions.tech\",\n   \"partnerPassword\": \"1234\",\n   \"partnerType\": \"P\",\n   \"partnerAge\": 25\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"createNewPartner\",\n   \"description\": \"Created\",\n   \"data\": {\n       \"partnerId\": \"402290575\",\n       \"partnerCode\": \"1295\",\n       \"partnerFirstName\": \"Eduardo\",\n       \"partnerMiddleName\": \"Salas\",\n       \"partnerLastName\": \"Cerdas\",\n       \"partnerEmail\": \"esalas@betasolutions.tech\",\n       \"partnerPhone\": \"84137805\",\n       \"partnerType\": \"P\",\n       \"isUserActive\": \"A\"\n   } \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "group": "User",
    "version": "0.1.0",
    "name": "Login",
    "type": "post",
    "url": "/api/v1/user/login/",
    "title": "Login User",
    "description": "<p>Login User</p>",
    "sampleRequest": [
      {
        "url": "http://34.228.96.60:3600/api/v1/user/login/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>User Code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerPassword",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n   \"partnerCode\": \"3333\",\n   \"partnerPassword\": \"1234\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Body-Example:",
          "content": "{\n   \"success\": true,\n   \"message\": \"Login\",\n   \"description\": \"Success login\",\n   \"data\": {\n       \"partnerId\": \"102220222\",\n       \"partnerCode\": \"3333\",\n       \"partnerFirstName\": \"Klever\",\n       \"partnerMiddleName\": \"Díaz\",\n       \"partnerLastName\": \"Oviedo\",\n       \"partnerEmail\": \"kdiaz@betasolutions.tech\",\n       \"partnerPhone\": \"77662299\",\n       \"partnerType\": \"P\",\n       \"isUserActive\": \"A\",\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMDIyMjAyMjIiLCJpYXQiOjE2Mzg1NzIzODYsImV4cCI6MTYzODU3OTU4Nn0.wm9ylvPlJMMnZel1stzr5v_xMOwI-a6EmXWS7ydFhug\"    \n   } \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes/user.routes.js",
    "groupTitle": "User"
  }
] });