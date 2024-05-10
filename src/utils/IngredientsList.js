import React from 'react'

function IngredientsList() {
  return React.createElement(
    'ul',
    { className: 'ingredients' },
    React.createElement('li', null, '1 cup unsalted butter'),
    React.createElement('li', null, '1 cup crunchy peanut butter'),
    React.createElement('li', null, '1 cup brown sugar'),
    React.createElement('li', null, '1 cup white sugar'),
    React.createElement('li', null, '2 large eggs'),
    React.createElement('li', null, '2.5 cups all-purpose flour'),
    React.createElement('li', null, '1 teaspoon baking powder'),
    React.createElement('li', null, '0.5 teaspoon salt'),
  )
}

export default IngredientsList
