// priority: 100
// type: server
const needClass = {
  //basic
  ResourceLocation: Java.loadClass('net.minecraft.resources.ResourceLocation'),
  BuiltInRegistries: Java.loadClass('net.minecraft.core.registries.BuiltInRegistries'),
  Holder: Java.loadClass('net.minecraft.core.Holder'),
  Cast: Java.loadClass('dev.latvian.mods.kubejs.util.Cast'),
  TickDuration: Java.loadClass('dev.latvian.mods.kubejs.util.TickDuration'),
  //special
  Parkourability: Java.loadClass('com.alrex.parcool.common.action.Parkourability'),
  Dodge: Java.loadClass('com.alrex.parcool.common.action.impl.Dodge'),
  ShatteredBlade: Java.loadClass('cn.leolezury.eternalstarlight.common.entity.projectile.ShatteredBlade'),
  ESEntities: Java.loadClass('cn.leolezury.eternalstarlight.common.registry.ESEntities'),
  //property
  Attribute: Java.loadClass('net.minecraft.world.entity.ai.attributes.Attribute'),
  AttributeModifier: Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier'),
  MobEffectInstance: Java.loadClass('net.minecraft.world.effect.MobEffectInstance'),
  MobEffects: Java.loadClass('net.minecraft.world.effect.MobEffects'),
  EquipmentSlotType: Java.loadClass('net.minecraft.world.entity.EquipmentSlot$Type'),
  JavaString: Java.loadClass('java.lang.String'),
  Type: Java.loadClass('net.minecraft.world.phys.HitResult$Type'),
  AABB: Java.loadClass('net.minecraft.world.phys.AABB'),
  // Integer: Java.loadClass('Java.lang.Integer')
  // ArrayList: Java.loadClass('Java.lang.ArrayList')
}

// const Parkourability = Java.loadClass('com.alrex.parcool.mixin.common.LivingEntityMixin');

// const Holderwarpper = Java.loadClass('dev.latvian.mods.kubejs.holder.HolderWrapper')
// const Parkourability = Java['tryLoadClass(java.lang.string)']('com.alrex.parcool.common.action.Parkourability');

// 类导入末端

// 函数类型


// 变量创建
const $KEY = 'yd'
const $CRIT_CHANCE_ID = 'apothic_attributes:crit_chance';
const $CRIT_DAMAGE_ID = 'apothic_attributes:crit_damage';

// 1 

const $CRIT_DAM = RegistryTools.getAttributeHolder($CRIT_DAMAGE_ID)
const $CRIT_CHA = RegistryTools.getAttributeHolder($CRIT_CHANCE_ID)

// 2 
const attr_map = new Map([
  [String('g_crit_cha'), $CRIT_CHA],
  [String('g_crit_dam'), $CRIT_DAM]
])
