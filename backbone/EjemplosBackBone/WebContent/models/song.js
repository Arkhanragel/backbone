var Song = Backbone.Model.extend({
    idAttribute : 'id',
    url : '/api/song/',
    defaults : {
        title : '',
        artist: '',
        genre : 'Heavy',
        listeners: 0,
        reprods: 0
    }
});