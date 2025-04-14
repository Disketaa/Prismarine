StartupEvents.registry('block', event => {
  event.create('tin_ore')
    .soundType('copper')
    .hardness(3.0)
    .resistance(3.0)
    .requiresTool(true)
    .mapColor('stone')
})