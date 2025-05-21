// priority: 101
// type: startup

global.needClass = {
    //basic
    ResourceLocation: Java.loadClass('net.minecraft.resources.ResourceLocation'),
    BuiltInRegistries: Java.loadClass('net.minecraft.core.registries.BuiltInRegistries'),
    Holder: Java.loadClass('net.minecraft.core.Holder'),
    Cast: '1',
    TickDuration: Java.loadClass('dev.latvian.mods.kubejs.util.TickDuration'),
    DataMapProvider: Java.loadClass('net.neoforged.neoforge.common.data.DataMapProvider'),
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
    MobEffect: Java.loadClass('net.minecraft.world.effect.MobEffect'),
    EquipmentSlot$Type: Java.loadClass('net.minecraft.world.entity.EquipmentSlot$Type'),
    JavaString: Java.loadClass('java.lang.String'),
    HashMap: Java.loadClass('java.util.HashMap'),
    HitResult$Type: Java.loadClass('net.minecraft.world.phys.HitResult$Type'),
    AABB: Java.loadClass('net.minecraft.world.phys.AABB'),
    HolderSet: Java.loadClass('net.minecraft.core.HolderSet'),
    // Integer: Java.loadClass('Java.lang.Integer')
    // ArrayList: Java.loadClass('Java.lang.ArrayList')
}
global.$KEY = 'yd_a'
global.crLoc = function(namespace, path) {
        return needClass.ResourceLocation.fromNamespaceAndPath(namespace, path);
}
global.prLoc = function(resourceLocation) {
    return needClass.ResourceLocation.tryParse(resourceLocation)
}
global.jsPredicates = {
    alwaysFalse: () => false
}

const crLoc = global.crLoc
const prLoc = global.prLoc
const jsPredicates = global.jsPredicates
const $KEY = global.$KEY

const needClass = global.needClass
global.apotheosisClass = {
    LootCategory: Java.loadClass('dev.shadowsoffire.apotheosis.loot.LootCategory'),
    EntitySlotGroup: Java.loadClass('dev.shadowsoffire.apothic_attributes.modifiers.EntitySlotGroup'),
    EntityEquipmentSlot: Java.loadClass('dev.shadowsoffire.apothic_attributes.modifiers.EntityEquipmentSlot'),
    DeferredHelper: Java.loadClass('dev.shadowsoffire.placebo.registry.DeferredHelper'),
    Apoth$BuiltInRegs: Java.loadClass('dev.shadowsoffire.apotheosis.Apoth$BuiltInRegs'),
    ALObjects$BuiltInRegs: Java.loadClass('dev.shadowsoffire.apothic_attributes.api.ALObjects$BuiltInRegs'),
    CurioEquipmentSlot: Java.loadClass('dev.shadowsoffire.apothic_attributes.compat.CurioEquipmentSlot'),
    Apoth: Java.loadClass('dev.shadowsoffire.apotheosis.Apoth'),
    Apoth$LootCategories: Java.loadClass('dev.shadowsoffire.apotheosis.Apoth$LootCategories'),
    Apoth$DataMaps: Java.loadClass('dev.shadowsoffire.apotheosis.Apoth$DataMaps'),
    ApothicAttributes: Java.loadClass('dev.shadowsoffire.apothic_attributes.ApothicAttributes'),
    ALObjects$EquipmentSlotGroups: Java.loadClass('dev.shadowsoffire.apothic_attributes.api.ALObjects$EquipmentSlotGroups'),

    // ALObjects$EntityEquipmentSlots: Java.loadClass('dev.shadowsoffire.apothic_attributes.api.ALObjects$EntityEquipmentSlots'),
}
const apotheosisClass = global.apotheosisClass
const CuriosTags = Java.loadClass('top.theillusivec4.curios.api.CuriosTags')
const TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const HolderSet = Java.loadClass('net.minecraft.core.HolderSet')
const KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')
const KubeJSPaths = Java.loadClass('dev.latvian.mods.kubejs.KubeJSPaths')

const MinigunItem = Java.loadClass('me.desht.pneumaticcraft.common.item.minigun.MinigunItem')
const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const Predicates = Java.loadClass('com.google.common.base.Predicates')

const $R = apotheosisClass.DeferredHelper.create($KEY)
