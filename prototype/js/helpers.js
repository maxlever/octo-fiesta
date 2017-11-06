
// queue
function Queue(){var a=[],b=0;this.getLength=function(){return a.length-b};this.isEmpty=function(){return 0==a.length};this.enqueue=function(b){a.push(b)};this.dequeue=function(){if(0!=a.length){var c=a[b];2*++b>=a.length&&(a=a.slice(b),b=0);return c}};this.peek=function(){return 0<a.length?a[b]:void 0}};

function checkCondition(v1, operator, v2) {
    switch(operator) {
        case '==':
            return (v1 == v2);
        case '===':
            return (v1 === v2);
        case '!==':
            return (v1 !== v2);
        case '<':
            return (v1 < v2);
        case '<=':
            return (v1 <= v2);
        case '>':
            return (v1 > v2);
        case '>=':
            return (v1 >= v2);
        case '&&':
            return (v1 && v2);
        case '||':
            return (v1 || v2);
        default:
            return false;
    }
}

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    return checkCondition(v1, operator, v2)
                ? options.fn(this)
                : options.inverse(this);
});

Handlebars.registerPartial("menu", $( "#menu-partial" ).html() );
