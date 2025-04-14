ServerEvents.recipes(event => {
  const ItemsToRemove = [
    'littletiles:bag',
    'littletiles:colored_lava',
    'littletiles:colored_water',
    'littletiles:colored_white_lava',
    'littletiles:glove',
    'littletiles:paint_brush',
    'littletiles:premade',
    'littletiles:saw',
    'littletiles:screwdriver',
    'littletiles:signal_converter',
    'littletiles:storage',
    'littletiles:wrench'
  ]

  ItemsToRemove.forEach(item => {
    event.remove({ output: item })
  })
})