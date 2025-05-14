// priority: 102
// type: startup

const ItemPreservedData = (function () {
    const iterator = function() {
        Object.entries(catOverridesArmor).forEach(([category, items]) => {
            console.log(`当前材质分类: ${category}`);
            Object.entries(items).forEach(([originalItem, replacementItem]) => {

            });
          });
    }
    const catOverridesArmor = {}
    catOverridesArmor['minecraft:leather'] = {
        'minecraft:leather_helmet': 'yd_a:helmet_t5',
        'minecraft:leather_chestplate': 'yd_a:chestplate_t5',
        'minecraft:leather_leggings': 'yd_a:leggings_t5',
        'minecraft:leather_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['minecraft:chainmail'] = {
        'minecraft:chainmail_helmet': 'yd_a:helmet_t5',
        'minecraft:chainmail_chestplate': 'yd_a:chestplate_t5',
        'minecraft:chainmail_leggings': 'yd_a:leggings_t5',
        'minecraft:chainmail_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor[`minecraft:iron`] = {
        'minecraft:iron_helmet': 'yd_a:helmet_t5',
        'minecraft:iron_chestplate': 'yd_a:chestplate_t5',
        'minecraft:iron_leggings': 'yd_a:leggings_t5',
        'minecraft:iron_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor[`minecraft:golden`] = {
        'minecraft:golden_helmet': 'yd_a:helmet_t5',
        'minecraft:golden_chestplate': 'yd_a:chestplate_t5',
        'minecraft:golden_leggings': 'yd_a:leggings_t5',
        'minecraft:golden_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor[`minecraft:diamond`] = {
        'minecraft:diamond_helmet': 'yd_a:helmet_t4',
        'minecraft:diamond_chestplate': 'yd_a:chestplate_t4',
        'minecraft:diamond_leggings': 'yd_a:leggings_t4',
        'minecraft:diamond_boots': 'yd_a:boots_t4',
    }
    catOverridesArmor[`minecraft:netherite`] = {
        'minecraft:netherite_helmet': 'yd_a:helmet_t3',
        'minecraft:netherite_chestplate': 'yd_a:chestplate_t3',
        'minecraft:netherite_leggings': 'yd_a:leggings_t3',
        'minecraft:netherite_boots': 'yd_a:boots_t3',
    }
    catOverridesArmor['eternal_starlight:glacite'] = {
        'eternal_starlight:glacite_helmet': 'yd_a:helmet_t5',
        'eternal_starlight:glacite_chestplate': 'yd_a:chestplate_t5',
        'eternal_starlight:glacite_leggings': 'yd_a:leggings_t5',
        'eternal_starlight:glacite_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['eternal_starlight:thermal_springstone'] = {
        'eternal_starlight:thermal_springstone_helmet': 'yd_a:helmet_t5',
        'eternal_starlight:thermal_springstone_chestplate': 'yd_a:chestplate_t5',
        'eternal_starlight:thermal_springstone_leggings': 'yd_a:leggings_t5',
        'eternal_starlight:thermal_springstone_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['undergarden:froststeel'] = {
        'undergarden:froststeel_helmet': 'yd_a:helmet_t5',
        'undergarden:froststeel_chestplate': 'yd_a:chestplate_t5',
        'undergarden:froststeel_leggings': 'yd_a:leggings_t5',
        'undergarden:froststeel_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['pneumaticcraft:compressed_iron'] = {
        'pneumaticcraft:compressed_iron_helmet': 'yd_a:helmet_t5',
        'pneumaticcraft:compressed_iron_chestplate': 'yd_a:chestplate_t5',
        'pneumaticcraft:compressed_iron_leggings': 'yd_a:leggings_t5',
        'pneumaticcraft:compressed_iron_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['mutantmonsters:mutant_skeleton'] = {
        'mutantmonsters:mutant_skeleton_skull': 'yd_a:helmet_t5',
        'mutantmonsters:mutant_skeleton_chestplate': 'yd_a:chestplate_t5',
        'mutantmonsters:mutant_skeleton_leggings': 'yd_a:leggings_t5',
        'mutantmonsters:mutant_skeleton_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['mobz:amat'] = {
        'mobz:amat_helmet': 'yd_a:helmet_t5',
        'mobz:amat_chestplate': 'yd_a:chestplate_t5',
        'mobz:amat_leggings': 'yd_a:leggings_t5',
        'mobz:amat_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['mobz:boss'] = {
        'mobz:boss_helmet': 'yd_a:helmet_t5',
        'mobz:boss_chestplate': 'yd_a:chestplate_t5',
        'mobz:boss_leggings': 'yd_a:leggings_t5',
        'mobz:boss_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['mobz:life'] = {
        'mobz:life_helmet': 'yd_a:helmet_t5',
        'mobz:life_chestplate': 'yd_a:chestplate_t5',
        'mobz:life_leggings': 'yd_a:leggings_t5',
        'mobz:life_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['deeperdarker:resonarium'] = {
        'deeperdarker:resonarium_helmet': 'yd_a:helmet_t5',
        'deeperdarker:resonarium_chestplate': 'yd_a:chestplate_t5',
        'deeperdarker:resonarium_leggings': 'yd_a:leggings_t5',
        'deeperdarker:resonarium_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['deeperdarker:warden'] = {
        'deeperdarker:warden_helmet': 'yd_a:helmet_t5',
        'deeperdarker:warden_chestplate': 'yd_a:chestplate_t5',
        'deeperdarker:warden_leggings': 'yd_a:leggings_t5',
        'deeperdarker:warden_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['pneumaticcraft:pneumatic'] = {
        'pneumaticcraft:pneumatic_helmet': 'yd_a:helmet_t5',
        'pneumaticcraft:pneumatic_chestplate': 'yd_a:chestplate_t5',
        'pneumaticcraft:pneumatic_leggings': 'yd_a:leggings_t5',
        'pneumaticcraft:pneumatic_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['undergarden:utherium'] = {
        'undergarden:utherium_helmet': 'yd_a:helmet_t5',
        'undergarden:utherium_chestplate': 'yd_a:chestplate_t5',
        'undergarden:utherium_leggings': 'yd_a:leggings_t5',
        'undergarden:utherium_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['undergarden:cloggrum'] = {
        'undergarden:cloggrum_helmet': 'yd_a:helmet_t5',
        'undergarden:cloggrum_chestplate': 'yd_a:chestplate_t5',
        'undergarden:cloggrum_leggings': 'yd_a:leggings_t5',
        'undergarden:cloggrum_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['ars_nouveau:sorcerer'] = {
        'ars_nouveau:sorcerer_helmet': 'yd_a:helmet_t5',
        'ars_nouveau:sorcerer_chestplate': 'yd_a:chestplate_t5',
        'ars_nouveau:sorcerer_leggings': 'yd_a:leggings_t5',
        'ars_nouveau:sorcerer_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['ars_nouveau:arcanist'] = {
        'ars_nouveau:arcanist_helmet': 'yd_a:helmet_t5',
        'ars_nouveau:arcanist_chestplate': 'yd_a:chestplate_t5',
        'ars_nouveau:arcanist_leggings': 'yd_a:leggings_t5',
        'ars_nouveau:arcanist_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['ars_nouveau:battlemage'] = {
        'ars_nouveau:battlemage_helmet': 'yd_a:helmet_t5',
        'ars_nouveau:battlemage_chestplate': 'yd_a:chestplate_t5',
        'ars_nouveau:battlemage_leggings': 'yd_a:leggings_t5',
        'ars_nouveau:battlemage_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['twilightforest:ironwood'] = {
        'twilightforest:ironwood_helmet': 'yd_a:helmet_t5',
        'twilightforest:ironwood_chestplate': 'yd_a:chestplate_t5',
        'twilightforest:ironwood_leggings': 'yd_a:leggings_t5',
        'twilightforest:ironwood_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['twilightforest:steeleaf'] = {
        'twilightforest:steeleaf_helmet': 'yd_a:helmet_t5',
        'twilightforest:steeleaf_chestplate': 'yd_a:chestplate_t5',
        'twilightforest:steeleaf_leggings': 'yd_a:leggings_t5',
        'twilightforest:steeleaf_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['twilightforest:knightmetal'] = {
        'twilightforest:knightmetal_helmet': 'yd_a:helmet_t5',
        'twilightforest:knightmetal_chestplate': 'yd_a:chestplate_t5',
        'twilightforest:knightmetal_leggings': 'yd_a:leggings_t5',
        'twilightforest:knightmetal_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['twilightforest:fiery'] = {
        'twilightforest:fiery_helmet': 'yd_a:helmet_t5',
        'twilightforest:fiery_chestplate': 'yd_a:chestplate_t5',
        'twilightforest:fiery_leggings': 'yd_a:leggings_t5',
        'twilightforest:fiery_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['twilightforest:arctic'] = {
        'twilightforest:arctic_helmet': 'yd_a:helmet_t5',
        'twilightforest:arctic_chestplate': 'yd_a:chestplate_t5',
        'twilightforest:arctic_leggings': 'yd_a:leggings_t5',
        'twilightforest:arctic_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['twilightforest:yeti'] = {
        'twilightforest:yeti_helmet': 'yd_a:helmet_t5',
        'twilightforest:yeti_chestplate': 'yd_a:chestplate_t5',
        'twilightforest:yeti_leggings': 'yd_a:leggings_t5',
        'twilightforest:yeti_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:wandering_magician'] = {
        'irons_spellbooks:wandering_magician_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:wandering_magician_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:wandering_magician_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:wandering_magician_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:pumpkin'] = {
        'irons_spellbooks:pumpkin_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:pumpkin_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:pumpkin_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:pumpkin_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:pyromancer'] = {
        'irons_spellbooks:pyromancer_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:pyromancer_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:pyromancer_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:pyromancer_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:electromancer'] = {
        'irons_spellbooks:electromancer_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:electromancer_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:electromancer_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:electromancer_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:archevoker'] = {
        'irons_spellbooks:archevoker_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:archevoker_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:archevoker_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:archevoker_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:cultist'] = {
        'irons_spellbooks:cultist_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:cultist_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:cultist_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:cultist_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:cryomancer'] = {
        'irons_spellbooks:cryomancer_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:cryomancer_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:cryomancer_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:cryomancer_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:shadowwalker'] = {
        'irons_spellbooks:shadowwalker_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:shadowwalker_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:shadowwalker_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:shadowwalker_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:priest'] = {
        'irons_spellbooks:priest_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:priest_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:priest_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:priest_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:plagued'] = {
        'irons_spellbooks:plagued_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:plagued_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:plagued_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:plagued_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['irons_spellbooks:netherite_mage'] = {
        'irons_spellbooks:netherite_mage_helmet': 'yd_a:helmet_t5',
        'irons_spellbooks:netherite_mage_chestplate': 'yd_a:chestplate_t5',
        'irons_spellbooks:netherite_mage_leggings': 'yd_a:leggings_t5',
        'irons_spellbooks:netherite_mage_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['cataclysm:cursium'] = {
        'cataclysm:cursium_helmet': 'yd_a:helmet_t5',
        'cataclysm:cursium_chestplate': 'yd_a:chestplate_t5',
        'cataclysm:cursium_leggings': 'yd_a:leggings_t5',
        'cataclysm:cursium_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['cataclysm:ignitium'] = {
        'cataclysm:ignitium_helmet': 'yd_a:helmet_t5',
        'cataclysm:ignitium_chestplate': 'yd_a:chestplate_t5',
        'cataclysm:ignitium_leggings': 'yd_a:leggings_t5',
        'cataclysm:ignitium_boots': 'yd_a:boots_t5',
    }
    catOverridesArmor['create:cardboard_helmet'] = {
        'create:cardboard_helmet_helmet': 'yd_a:helmet_t5',
        'create:cardboard_helmet_chestplate': 'yd_a:chestplate_t5',
        'create:cardboard_helmet_leggings': 'yd_a:leggings_t5',
        'create:cardboard_helmet_boots': 'yd_a:boots_t5',
    }
    return {
        catOverridesArmor: catOverridesArmor,
        iterator: iterator
    }
})()