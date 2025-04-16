// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Stop', e =>{
  const entity = e.getEntity();
  if(!entity) return
  else if(!entity.isPlayer()) return

  const weaponItemStack = entity.getMainHandItem()
  entity.tell('武器检测开始');
  const weapon = String(weaponItemStack.getId());
  const config = WEAPON_HANDLERS.get(weapon);
  entity.tell('获取武器成功');
  if (config) {
    //   e.amount = config.damage; // 数值类型
    entity.tell('武器特性生效!');
    if (config.releaseUsing) {
      config.onHit(entity, weaponItemStack);
      return
    }
    config.onHit(entity);   // 函数类型
  }
  if (entity.persistentData.holdingSword === '1b') { // 读取持久化数据
    // e.amount *= 1.5; // 增加50%伤害
    entity.tell('钻石剑强化生效!');
  }
})
    
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.player.AttackEntityEvent', e =>{
})

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post', e =>{
  const attacker = e.source.getActual();
  if(!attacker) return
  else if(!attacker.isPlayer()) return
  attacker.tell(`准备检测玩家数据`)
  if(attacker.persistentData.removeOnAfterHurt)
  {
    attacker.tell(`玩家数据生效，准备移除效果`)
   delete attacker.persistentData.removeOnAfterHurt;
   attacker.tell('已移除效果')
  }
})