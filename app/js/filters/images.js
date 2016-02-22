function imgFilter() {
    return function(input) {
        return input.toLowerCase().replace(/ /ig,'_');
    };
}

export default {
    name: 'imgFilter',
    fn: imgFilter
};