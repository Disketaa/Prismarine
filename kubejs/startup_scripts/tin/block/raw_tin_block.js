StartupEvents.registry('block', event => {
  event.create('raw_tin_block')
    .soundType('copper')
    .hardness(5.0)
    .resistance(6.0)
    .requiresTool(true)
    .mapColor('terracotta_white')
})