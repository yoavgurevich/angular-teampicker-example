function dragIt() {
    return {
        restrict: 'A',
        link: function(scope, element) {
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
