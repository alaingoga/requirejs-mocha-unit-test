requirejs(['module1', 'module2'], function(m1, m2){
    m1.show('Sum is ' + m1.sum([2, 4, 4]));
    m1.show('Average is ' + m2.average([2, 4, 5, 7, 10]));
});