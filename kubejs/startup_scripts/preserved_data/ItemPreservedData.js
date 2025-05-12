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
        'minecraft:leather_helmet': 'yd_a:tier_5_helmet',
        'minecraft:leather_chestplate': 'yd_a:tier_5_chestplate',
        'minecraft:leather_leggings': 'yd_a:tier_5_leggings',
        'minecraft:leather_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor[`minecraft:iron`] = {
        'minecraft:iron_helmet': 'yd_a:tier_5_helmet',
        'minecraft:iron_chestplate': 'yd_a:tier_5_chestplate',
        'minecraft:iron_leggings': 'yd_a:tier_5_leggings',
        'minecraft:iron_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor[`minecraft:golden`] = {
        'minecraft:golden_helmet': 'yd_a:tier_5_helmet',
        'minecraft:golden_chestplate': 'yd_a:tier_5_chestplate',
        'minecraft:golden_leggings': 'yd_a:tier_5_leggings',
        'minecraft:golden_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor[`minecraft:diamond`] = {
        'minecraft:diamond_helmet': 'yd_a:tier_4_helmet',
        'minecraft:diamond_chestplate': 'yd_a:tier_4_chestplate',
        'minecraft:diamond_leggings': 'yd_a:tier_4_leggings',
        'minecraft:diamond_boots': 'yd_a:tier_4_boots',
    }
    catOverridesArmor[`minecraft:netherite`] = {
        'minecraft:netherite_helmet': 'yd_a:tier_3_helmet',
        'minecraft:netherite_chestplate': 'yd_a:tier_3_chestplate',
        'minecraft:netherite_leggings': 'yd_a:tier_3_leggings',
        'minecraft:netherite_boots': 'yd_a:tier_3_boots',
    }
    catOverridesArmor['eternal_starlight:glacite'] = {
        'eternal_starlight:glacite_helmet': 'yd_a:tier_5_helmet',
        'eternal_starlight:glacite_chestplate': 'yd_a:tier_5_chestplate',
        'eternal_starlight:glacite_leggings': 'yd_a:tier_5_leggings',
        'eternal_starlight:glacite_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['eternal_starlight:thermal_springstone'] = {
        'eternal_starlight:thermal_springstone_helmet': 'yd_a:tier_5_helmet',
        'eternal_starlight:thermal_springstone_chestplate': 'yd_a:tier_5_chestplate',
        'eternal_starlight:thermal_springstone_leggings': 'yd_a:tier_5_leggings',
        'eternal_starlight:thermal_springstone_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['undergarden:froststeel'] = {
        'undergarden:froststeel_helmet': 'yd_a:tier_5_helmet',
        'undergarden:froststeel_chestplate': 'yd_a:tier_5_chestplate',
        'undergarden:froststeel_leggings': 'yd_a:tier_5_leggings',
        'undergarden:froststeel_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['pneumaticcraft:compressed_iron'] = {
        'pneumaticcraft:compressed_iron_helmet': 'yd_a:tier_5_helmet',
        'pneumaticcraft:compressed_iron_chestplate': 'yd_a:tier_5_chestplate',
        'pneumaticcraft:compressed_iron_leggings': 'yd_a:tier_5_leggings',
        'pneumaticcraft:compressed_iron_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['mutantmonsters:mutant_skeleton'] = {
        'mutantmonsters:mutant_skeleton_skull': 'yd_a:tier_5_helmet',
        'mutantmonsters:mutant_skeleton_chestplate': 'yd_a:tier_5_chestplate',
        'mutantmonsters:mutant_skeleton_leggings': 'yd_a:tier_5_leggings',
        'mutantmonsters:mutant_skeleton_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['mobz:amat'] = {
        'mobz:amat_helmet': 'yd_a:tier_5_helmet',
        'mobz:amat_chestplate': 'yd_a:tier_5_chestplate',
        'mobz:amat_leggings': 'yd_a:tier_5_leggings',
        'mobz:amat_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['mobz:boss'] = {
        'mobz:boss_helmet': 'yd_a:tier_5_helmet',
        'mobz:boss_chestplate': 'yd_a:tier_5_chestplate',
        'mobz:boss_leggings': 'yd_a:tier_5_leggings',
        'mobz:boss_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['mobz:life'] = {
        'mobz:life_helmet': 'yd_a:tier_5_helmet',
        'mobz:life_chestplate': 'yd_a:tier_5_chestplate',
        'mobz:life_leggings': 'yd_a:tier_5_leggings',
        'mobz:life_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['deeperdarker:resonarium'] = {
        'deeperdarker:resonarium_helmet': 'yd_a:tier_5_helmet',
        'deeperdarker:resonarium_chestplate': 'yd_a:tier_5_chestplate',
        'deeperdarker:resonarium_leggings': 'yd_a:tier_5_leggings',
        'deeperdarker:resonarium_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['deeperdarker:warden'] = {
        'deeperdarker:warden_helmet': 'yd_a:tier_5_helmet',
        'deeperdarker:warden_chestplate': 'yd_a:tier_5_chestplate',
        'deeperdarker:warden_leggings': 'yd_a:tier_5_leggings',
        'deeperdarker:warden_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['pneumaticcraft:pneumatic'] = {
        'pneumaticcraft:pneumatic_helmet': 'yd_a:tier_5_helmet',
        'pneumaticcraft:pneumatic_chestplate': 'yd_a:tier_5_chestplate',
        'pneumaticcraft:pneumatic_leggings': 'yd_a:tier_5_leggings',
        'pneumaticcraft:pneumatic_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['undergarden:utherium'] = {
        'undergarden:utherium_helmet': 'yd_a:tier_5_helmet',
        'undergarden:utherium_chestplate': 'yd_a:tier_5_chestplate',
        'undergarden:utherium_leggings': 'yd_a:tier_5_leggings',
        'undergarden:utherium_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['undergarden:cloggrum'] = {
        'undergarden:cloggrum_helmet': 'yd_a:tier_5_helmet',
        'undergarden:cloggrum_chestplate': 'yd_a:tier_5_chestplate',
        'undergarden:cloggrum_leggings': 'yd_a:tier_5_leggings',
        'undergarden:cloggrum_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['ars_nouveau:sorcerer'] = {
        'ars_nouveau:sorcerer_helmet': 'yd_a:tier_5_helmet',
        'ars_nouveau:sorcerer_chestplate': 'yd_a:tier_5_chestplate',
        'ars_nouveau:sorcerer_leggings': 'yd_a:tier_5_leggings',
        'ars_nouveau:sorcerer_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['ars_nouveau:arcanist'] = {
        'ars_nouveau:arcanist_helmet': 'yd_a:tier_5_helmet',
        'ars_nouveau:arcanist_chestplate': 'yd_a:tier_5_chestplate',
        'ars_nouveau:arcanist_leggings': 'yd_a:tier_5_leggings',
        'ars_nouveau:arcanist_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['ars_nouveau:battlemage'] = {
        'ars_nouveau:battlemage_helmet': 'yd_a:tier_5_helmet',
        'ars_nouveau:battlemage_chestplate': 'yd_a:tier_5_chestplate',
        'ars_nouveau:battlemage_leggings': 'yd_a:tier_5_leggings',
        'ars_nouveau:battlemage_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['twilightforest:ironwood'] = {
        'twilightforest:ironwood_helmet': 'yd_a:tier_5_helmet',
        'twilightforest:ironwood_chestplate': 'yd_a:tier_5_chestplate',
        'twilightforest:ironwood_leggings': 'yd_a:tier_5_leggings',
        'twilightforest:ironwood_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['twilightforest:steeleaf'] = {
        'twilightforest:steeleaf_helmet': 'yd_a:tier_5_helmet',
        'twilightforest:steeleaf_chestplate': 'yd_a:tier_5_chestplate',
        'twilightforest:steeleaf_leggings': 'yd_a:tier_5_leggings',
        'twilightforest:steeleaf_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['twilightforest:knightmetal'] = {
        'twilightforest:knightmetal_helmet': 'yd_a:tier_5_helmet',
        'twilightforest:knightmetal_chestplate': 'yd_a:tier_5_chestplate',
        'twilightforest:knightmetal_leggings': 'yd_a:tier_5_leggings',
        'twilightforest:knightmetal_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['twilightforest:fiery'] = {
        'twilightforest:fiery_helmet': 'yd_a:tier_5_helmet',
        'twilightforest:fiery_chestplate': 'yd_a:tier_5_chestplate',
        'twilightforest:fiery_leggings': 'yd_a:tier_5_leggings',
        'twilightforest:fiery_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['twilightforest:arctic'] = {
        'twilightforest:arctic_helmet': 'yd_a:tier_5_helmet',
        'twilightforest:arctic_chestplate': 'yd_a:tier_5_chestplate',
        'twilightforest:arctic_leggings': 'yd_a:tier_5_leggings',
        'twilightforest:arctic_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['twilightforest:yeti'] = {
        'twilightforest:yeti_helmet': 'yd_a:tier_5_helmet',
        'twilightforest:yeti_chestplate': 'yd_a:tier_5_chestplate',
        'twilightforest:yeti_leggings': 'yd_a:tier_5_leggings',
        'twilightforest:yeti_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:wandering_magician'] = {
        'irons_spellbooks:wandering_magician_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:wandering_magician_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:wandering_magician_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:wandering_magician_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:pumpkin'] = {
        'irons_spellbooks:pumpkin_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:pumpkin_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:pumpkin_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:pumpkin_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:pyromancer'] = {
        'irons_spellbooks:pyromancer_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:pyromancer_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:pyromancer_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:pyromancer_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:electromancer'] = {
        'irons_spellbooks:electromancer_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:electromancer_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:electromancer_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:electromancer_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:archevoker'] = {
        'irons_spellbooks:archevoker_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:archevoker_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:archevoker_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:archevoker_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:cultist'] = {
        'irons_spellbooks:cultist_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:cultist_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:cultist_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:cultist_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:cryomancer'] = {
        'irons_spellbooks:cryomancer_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:cryomancer_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:cryomancer_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:cryomancer_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:shadowwalker'] = {
        'irons_spellbooks:shadowwalker_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:shadowwalker_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:shadowwalker_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:shadowwalker_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:priest'] = {
        'irons_spellbooks:priest_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:priest_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:priest_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:priest_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:plagued'] = {
        'irons_spellbooks:plagued_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:plagued_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:plagued_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:plagued_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['irons_spellbooks:netherite_mage'] = {
        'irons_spellbooks:netherite_mage_helmet': 'yd_a:tier_5_helmet',
        'irons_spellbooks:netherite_mage_chestplate': 'yd_a:tier_5_chestplate',
        'irons_spellbooks:netherite_mage_leggings': 'yd_a:tier_5_leggings',
        'irons_spellbooks:netherite_mage_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['cataclysm:cursium'] = {
        'cataclysm:cursium_helmet': 'yd_a:tier_5_helmet',
        'cataclysm:cursium_chestplate': 'yd_a:tier_5_chestplate',
        'cataclysm:cursium_leggings': 'yd_a:tier_5_leggings',
        'cataclysm:cursium_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['cataclysm:ignitium'] = {
        'cataclysm:ignitium_helmet': 'yd_a:tier_5_helmet',
        'cataclysm:ignitium_chestplate': 'yd_a:tier_5_chestplate',
        'cataclysm:ignitium_leggings': 'yd_a:tier_5_leggings',
        'cataclysm:ignitium_boots': 'yd_a:tier_5_boots',
    }
    catOverridesArmor['create:cardboard_helmet'] = {
        'create:cardboard_helmet_helmet': 'yd_a:tier_5_helmet',
        'create:cardboard_helmet_chestplate': 'yd_a:tier_5_chestplate',
        'create:cardboard_helmet_leggings': 'yd_a:tier_5_leggings',
        'create:cardboard_helmet_boots': 'yd_a:tier_5_boots',
    }
    return {
        catOverridesArmor: catOverridesArmor,
        iterator: iterator
    }
})()