module.exports = {
    multipleObject: function (datas) {
        return datas.map(data => data.toObject());
    },

    singleObject: function (data) {
        return data ? data.toObject() : data;
    },
};