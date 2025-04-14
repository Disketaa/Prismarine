StartupEvents.registry('block', event => {
  event.create('deepslate_tin_ore')
    .soundType('copper')
    .hardness(4.5)
    .resistance(3.0)
    .requiresTool(true)
    .mapColor('deepslate')
})