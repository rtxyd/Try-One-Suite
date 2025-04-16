"use strict";

// 导入必要类
var Attribute = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attribute');
var AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
var Holder = Java.loadClass('net.minecraft.core.Holder'); // const Holderwarpper = Java.loadClass('dev.latvian.mods.kubejs.holder.HolderWrapper')

var Cast = Java.loadClass('dev.latvian.mods.kubejs.util.Cast'); // const TickDuration = Java.loadClass('dev.latvian.mods.kubejs.util.TickDuration');
// 类导入末端
// 函数类型

function simpleHolderGetter(id) {
  return BuiltInRegistries.ATTRIBUTE.getHolder(ResourceLocation.parse(id)).get();
} // 变量创建


var CRIT_CHANCE_ID = 'apothic_attributes:crit_chance';
var CRIT_DAMAGE_ID = 'apothic_attributes:crit_damage'; // 1 

var g_crit_dam = simpleHolderGetter(CRIT_DAMAGE_ID);
var g_crit_cha = simpleHolderGetter(CRIT_CHANCE_ID); // 2 AttributeModifier

var energy_sword_modifier = new AttributeModifier(ResourceLocation.fromNamespaceAndPath('yd', 'energy_sword_modifier'), 4.0, // 增加400%暴击率
AttributeModifier.Operation.ADD_VALUE); // 3 Map

var attr_map = new Map([['g_crit_cha', g_crit_cha], ['g_crit_dam', g_crit_dam]]);
var modi_map = new Map([['energy_sword_modifier', energy_sword_modifier]]);
var WEAPON_HANDLERS = new Map([['minecraft:diamond_sword', {
  damage: 8,
  onHit: function onHit(target) {
    target.setRemainingFireTicks(60);
    Client.player.tell("_TEST");
  } // 测试生效

}], ['eternal_starlight:energy_sword', {
  damage: 6,
  releaseUsing: true,
  modifier: energy_sword_modifier,
  onHit: function onHit(attacker, weaponItemStack) {
    console.log("eternal_starlight:energy_sword: ".concat(trigger));
    if (attacker.persistentData.removeOnAfterHurt) return;
    var weaponItem = weaponItemStack.getItem();
    var useDuration = weaponItem.getUseDuration(weaponItemStack, attacker);
    var ticksLeft = attacker.getUseItemRemainingTicks();
    attacker.tell("\u68C0\u6D4B\u6B66\u5668\u84C4\u529B");
    if (useDuration - ticksLeft < 10) return;
    attacker.tell("\u6B66\u5668\u653B\u51FB\u7279\u6548\u5F00\u59CB");
    var attrIns = attacker.getAttribute(Cast.to(g_crit_cha)); // if(attrIns.hasModifier(energy_sword_modifier.id())) return;

    try {
      attrIns.addTransientModifier(energy_sword_modifier);
      attacker.getServer().schedule(TickDuration.wrap(10), function (callback) {
        attrIns['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](energy_sword_modifier);
        attacker.tell("\u89E6\u53D1\u4E86");
      });
    } catch (error) {
      attacker.tell(error);
    }

    attacker.persistentData.removeOnAfterHurt = {
      attr: 'g_crit_cha',
      modi: 'energy_sword_modifier'
    };
    attacker.tell(Text.gold('获得400%暴击率提升!'));
  }
}], ['modx:ice_blade', {
  damage: 6,
  onHit: function onHit(target) {
    return target.setTicksFrozen(100);
  }
}]]);