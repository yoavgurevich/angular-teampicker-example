function quoteFilter() {
    return function(input) {
        return '\"' + input + '\"';
    };
}

export default {
    name: 'quoteFilter',
    fn: quoteFilter
};