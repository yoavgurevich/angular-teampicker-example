function dragIt($document) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            element.draggable({
                containment: '#canvas'
            });
        }
    };
}

export default {
    name: 'dragIt',
    fn: dragIt
};
