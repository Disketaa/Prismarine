StartupEvents.registry('item', event => {
  event.create('wooden_knife', 'sword')
    .tier('wood')
    .attackDamageBaseline(1.5)
    .speed(2.0)
    .burnTime(200)
})