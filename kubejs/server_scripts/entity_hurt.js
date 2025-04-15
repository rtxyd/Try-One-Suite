// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

// 导入必要类
const Attribute = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attribute');
const AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
const Holder = Java.loadClass('net.minecraft.core.Holder');
// const Holderwarpper = Java.loadClass('dev.latvian.mods.kubejs.holder.HolderWrapper')
const Cast = Java.loadClass('dev.latvian.mods.kubejs.util.Cast');
const CRIT_CHANCE_ID = 'apothic_attributes:crit_chance'; 
const CRIT_DAMAGE_ID = 'apothic_attributes:crit_damage'; 
function simpleHolderGetter(id) {
    return BuiltInRegistries.ATTRIBUTE.getHolder(ResourceLocation.parse(id)).get() ;
}

const g_crit_dam = simpleHolderGetter(CRIT_DAMAGE_ID)
const g_crit_cha = simpleHolderGetter(CRIT_CHANCE_ID)
const BUFF_DURATION = 30 * 20; // 30秒（单位：tick）

const energy_sword_modifier = new AttributeModifier(
  ResourceLocation.fromNamespaceAndPath('yd', 'energy_sword_modifier'),
  4.0, // 增加400%暴击率
  AttributeModifier.Operation.ADD_VALUE
)

const attr_map = new Map([
  ['g_crit_cha', g_crit_cha],
  ['g_crit_dam', g_crit_dam]
])
const modi_map = new Map([
  ['energy_sword_modifier', energy_sword_modifier]
])

let trigger = true;

const WEAPON_HANDLERS = new Map([
    ['minecraft:diamond_sword', {
      damage: 8,
      onHit: (target) => {
        target.setRemainingFireTicks(60)
        Client.player.tell(`_TEST`)
    } // 测试生效
}],
    ['eternal_starlight:energy_sword', {
      damage: 6,
      releaseUsing: true,
      modifier: energy_sword_modifier,
      onHit: (attacker, weaponItemStack) => {
        console.log(`eternal_starlight:energy_sword: ${trigger}`)
        if(attacker.persistentData.removeOnAfterHurt) return
        const weaponItem = weaponItemStack.getItem()
        const useDuration = weaponItem.getUseDuration(weaponItemStack, attacker)
        const ticksLeft = attacker.getUseItemRemainingTicks()
        attacker.tell(`检测武器蓄力`)
        if(useDuration - ticksLeft < 10 /*&& entity.level instanceof ServerLevel*/) return
        attacker.tell(`武器攻击特效开始`)
        const attrIns = attacker.getAttribute(Cast.to(g_crit_cha));
        // if(attrIns.hasModifier(energy_sword_modifier.id())) return;
        attrIns.addTransientModifier(energy_sword_modifier);
        if((attrIns.getValue() - 1.0) > 0){
          
        }
        // trigger--
        // attacker.tell(Text.gold(attrIns.getValue()));
        // attacker.tell(Text.gold(`触发内部${trigger}`));
        attacker.persistentData.removeOnAfterHurt = {attr: 'g_crit_cha', modi: 'energy_sword_modifier'}
        attacker.tell(Text.gold('获得400%暴击率提升!'));
      }
    }],
    ['modx:ice_blade', {
        damage: 6,
        onHit: (target) => target.setTicksFrozen(100) 
    }],
  ]);
let lastProcessed = 0;
// let server = {};
// ServerEvents.basicCommand('serverTicks',event => {
//   global.server = event.server;
//   event.server.tell(global.server.tickCount)
//   // event.server.tell(TextIcons.icon(event.input))
// });

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Stop', e =>{
  const entity = e.getEntity();

  if(!entity) return
  else if(!entity.isPlayer()) return
  try {
    let server = entity.level.getServer();
  } catch (erro) {
    entity.tell(`${erro}`)
  }
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
//   const entity = e.getEntity();
//   if(!entity) return
//   else if(!entity.isPlayer()) return
//   if (entity.persistentData.holdingSword === '1b') { // 读取持久化数据
//     // e.amount *= 1.5; // 增加50%伤害
//     entity.tell('钻石剑强化生效!');
// }
// const weapon = String(entity.getMainHandItem().getId());
// const config = WEAPON_HANDLERS.get(weapon);
// if (config) {
// //   e.amount = config.damage; // 数值类型
// entity.tell('武器特性生效!');
//   if (config.self) {
//     config.onHit(entity);
//     return
//   }
//   config.onHit(e.getEntity());   // 函数类型
// }
})

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post', e =>{
  const attacker = e.source.getActual();
  if(!attacker) return
  else if(!attacker.isPlayer()) return
  attacker.tell(`准备检测玩家数据`)
  if(attacker.persistentData.removeOnAfterHurt)
  {
    attacker.tell(`玩家数据生效，准备移除效果`)
    let attr = String(attacker.persistentData.removeOnAfterHurt.attr.getAsString())
    let modi = String(attacker.persistentData.removeOnAfterHurt.modi.getAsString())
   attacker.getAttribute(Cast.to(attr_map.get(attr)))['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modi_map.get(modi))
   attacker.tell('已移除效果')
   attacker.persistentData.remove('removeOnAfterHurt');
  }
})

// EntityEvents.beforeHurt(e =>{
// })