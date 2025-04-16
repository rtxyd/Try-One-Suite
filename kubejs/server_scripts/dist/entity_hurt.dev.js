"use strict";

// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)');
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Stop', function (e) {
  var entity = e.getEntity();
  if (!entity) return;else if (!entity.isPlayer()) return;
  var weaponItemStack = entity.getMainHandItem();
  entity.tell('武器检测开始');
  var weapon = String(weaponItemStack.getId());
  var config = WEAPON_HANDLERS.get(weapon);
  entity.tell('获取武器成功');

  if (config) {
    //   e.amount = config.damage; // 数值类型
    entity.tell('武器特性生效!');

    if (config.releaseUsing) {
      config.onHit(entity, weaponItemStack);
      return;
    }

    config.onHit(entity); // 函数类型
  }

  if (entity.persistentData.holdingSword === '1b') {
    // 读取持久化数据
    // e.amount *= 1.5; // 增加50%伤害
    entity.tell('钻石剑强化生效!');
  }
});
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.player.AttackEntityEvent', function (e) {});
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post', function (e) {
  var attacker = e.source.getActual();
  if (!attacker) return;else if (!attacker.isPlayer()) return;
  attacker.tell("\u51C6\u5907\u68C0\u6D4B\u73A9\u5BB6\u6570\u636E");

  if (attacker.persistentData.removeOnAfterHurt) {
    attacker.tell("\u73A9\u5BB6\u6570\u636E\u751F\u6548\uFF0C\u51C6\u5907\u79FB\u9664\u6548\u679C");
    delete attacker.persistentData.removeOnAfterHurt;
    attacker.tell('已移除效果');
  }
});