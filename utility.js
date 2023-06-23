module.exports = {
    printf: function(arr){
            arr.forEach(arrElement => {
                console.log(arrElement)
            });
    },

    getCount: function(arr){
        console.log(arr.length);
    },

    removeItem: function(arr, index){
        return arr.splice(index,1);
    }
}