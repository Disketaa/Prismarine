StartupEvents.registry('item', event => {
  event.create('wooden_knife', 'sword')
    .tier('wood')
    .burnTime(200);
})