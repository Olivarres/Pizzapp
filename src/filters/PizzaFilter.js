import angular from 'angular';

function PizzaFilter($filter) {
  return function (pizzas) {
    var checkedPizzas = $filter('filter')(pizzas);
    var cp = $filter('filter')(pizzas.checked);
    if (checkedPizzas.length == 0)
      return pizzas;
    var newPizzas = [];
    for (var i = 0; i < checkedPizzas.length; i++) {
      if (checkedPizzas[i].name != cp)
        newPizzas.push(checkedPizzas[i]);
    }
    return newPizzas;
  };
}

export default angular.module('filters.pizzafilter', [])
.filter('PizzaFilter', PizzaFilter)
.name;
