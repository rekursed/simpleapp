Meteor.publish("items", function (options) {
    Counts.publish(this, 'numberOfItems',Items.find({
        $or:[
            {$and:[
                {
                    'enabled':true
                },
                {'enabled':{$exists:true}}
            ]
            }
        ]
    }),{noReady:true});
    return Items.find({
        $or:[
            {$and:[
                {"enabled": true},
                {"enabled": {$exists: true}}
            ]},
            {$and:[
                {owner: this.userId},
                {owner: {$exists: true}}
            ]}
        ]}, options );
});