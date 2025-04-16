// 导入必要类
const Attribute = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attribute');
const AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
const Holder = Java.loadClass('net.minecraft.core.Holder');
// const Holderwarpper = Java.loadClass('dev.latvian.mods.kubejs.holder.HolderWrapper')
const Cast = Java.loadClass('dev.latvian.mods.kubejs.util.Cast');
// const TickDuration = Java.loadClass('dev.latvian.mods.kubejs.util.TickDuration');

// 类导入末端

// 函数类型
function simpleHolderGetter(id) {
    return BuiltInRegistries.ATTRIBUTE.getHolder(ResourceLocation.parse(id)).get();
}

// 变量创建
const CRIT_CHANCE_ID = 'apothic_attributes:crit_chance'; 
const CRIT_DAMAGE_ID = 'apothic_attributes:crit_damage'; 
// 1 
const g_crit_dam = simpleHolderGetter(CRIT_DAMAGE_ID)
const g_crit_cha = simpleHolderGetter(CRIT_CHANCE_ID)
// 2 AttributeModifier
const energy_sword_modifier = new AttributeModifier(
  ResourceLocation.fromNamespaceAndPath('yd', 'energy_sword_modifier'),
  4.0, // 增加400%暴击率
  AttributeModifier.Operation.ADD_VALUE
)
// 3 Map
const attr_map = new Map([
  ['g_crit_cha', g_crit_cha],
  ['g_crit_dam', g_crit_dam]
])
const modi_map = new Map([
  ['energy_sword_modifier', energy_sword_modifier]
])

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
        if(useDuration - ticksLeft < 10 ) return
        attacker.tell(`武器攻击特效开始`)
        const attrIns = attacker.getAttribute(Cast.to(g_crit_cha));
        // if(attrIns.hasModifier(energy_sword_modifier.id())) return;
        try {
          attrIns.addTransientModifier(energy_sword_modifier);
          attacker.getServer().schedule(TickDuration.wrap(10), callback => {
            attrIns['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](energy_sword_modifier);
            attacker.tell(`触发了`)
        })} catch (error) {
          attacker.tell(error)
        }
        attacker.persistentData.removeOnAfterHurt = {attr: 'g_crit_cha', modi: 'energy_sword_modifier'}
        attacker.tell(Text.gold('获得400%暴击率提升!'));
      }
    }],
    ['modx:ice_blade', {
        damage: 6,
        onHit: (target) => target.setTicksFrozen(100) 
    }],
  ]);
