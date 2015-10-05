Meteor.startup(function () {
    if (Items.find().count() === 0) {
        var items = [
            {
                'name': 'Fedora',
                'code': 'FE339',
                'enabled': true
            },
            {
                'name': 'Pork Pie',
                'code': 'PP308',
                'enabled': true
            },
            {
                'name': 'Diamond Crown',
                'code': 'DC310',
                'enabled': true
            }
        ];
        for (var i = 0; i < items.length; i++)
            Items.insert(items[i]);
    }
});