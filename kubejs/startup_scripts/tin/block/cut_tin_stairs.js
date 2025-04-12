StartupEvents.registry('block', event => {
  event.create('cut_tin_stairs', 'stairs')
    .soundType('copper')
    .hardness(3.0)
    .resistance(6.0)
    .requiresTool(true)
    .mapColor('terracotta_white')
})