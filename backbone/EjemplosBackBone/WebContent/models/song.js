var Song = Backbone.Model.extend({
    idAttribute : 'id',
    url : '/api/song/',
    defaults : {
        title : '',
        genre : 'Heavy',
    }
});