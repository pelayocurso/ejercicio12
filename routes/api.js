var express = require('express');
var router = express.Router();

/* EXAMPLE OF GET REQUEST WITH JSON RESPONSE */
router.get('/entrada', function(req, res, next) {
    res.json({
        'lista': [{
                'id': 1
            },
            {
                'id': 2
            }
        ]
    });
});

/* EXAMPLE OF GET REQUEST WITH PARAMS */
router.get('/entrada/:id', function(req, res, next) {
    var id = req.param('id');
    res.json({
        'lista': {
            'id': 1
        }
    });
});

/* EXAMPLE OF POST REQUEST WITH PARAMS */
router.post('/entrada', function(req, res, next) {
    console.log(req.body.id);
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;
