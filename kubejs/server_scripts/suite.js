// priority: 88
// type: server

// const suiteMap = new Map([
//     [0 , {
//         name: 'diamond',
//         onFullSet: () => {

//     }
// }],
//     [1 ,{onFullSet: () => {}}],
//     [2 ,{onFullSet: () => {}}],
//     [3 ,{onFullSet: () => {}}],
//     [4 ,{onFullSet: () => {}}],
//     [5 ,{onFullSet: () => {}}],
//     [6 ,{onFullSet: () => {}}],
//     [7 ,{onFullSet: () => {}}],
//     [8 ,{onFullSet: () => {}}],
//     [9 ,{onFullSet: () => {}}],
//     [10 ,{onFullSet: () => {}}],
//     [11 ,{onFullSet: () => {}}],
//     [12 ,{onFullSet: () => {}}],
//     [13 ,{onFullSet: () => {}}],
//     [14 ,{onFullSet: () => {}}],
//     [15 ,{onFullSet: () => {}}],
//     [16 ,{onFullSet: () => {}}],
//     [17 ,{onFullSet: () => {}}],
//     [18 ,{onFullSet: () => {}}],
//     [19 ,{onFullSet: () => {}}],
//     [20 ,{onFullSet: () => {}}],
//     [21 ,{onFullSet: () => {}}],
//     [22 ,{onFullSet: () => {}}],
//     [23 ,{onFullSet: () => {}}],
//     [24 ,{onFullSet: () => {}}],
//     [25 ,{onFullSet: () => {}}],
//     [26 ,{onFullSet: () => {}}],
//     [27 ,{onFullSet: () => {}}],
//     [28 ,{onFullSet: () => {}}],
//     [29 ,{onFullSet: () => {}}],
//     [30 ,{onFullSet: () => {}}],
//     [31 ,{onFullSet: () => {}}],
//     [32 ,{onFullSet: () => {}}],
//     [33 ,{onFullSet: () => {}}],
//     [34 ,{onFullSet: () => {}}],
//     [35 ,{onFullSet: () => {}}],
//     [36 ,{onFullSet: () => {}}],
//     [37 ,{onFullSet: () => {}}],
//     [38 ,{onFullSet: () => {}}],
//     [39 ,{onFullSet: () => {}}],
//     [40 ,{onFullSet: () => {}}],
//     [41 ,{onFullSet: () => {}}],
//     [42 ,{onFullSet: () => {}}],
//     [43 ,{onFullSet: () => {}}],
//     [44 ,{onFullSet: () => {}}],
//     [45 ,{onFullSet: () => {}}],
//     [46 ,{onFullSet: () => {}}],
//     [47 ,{onFullSet: () => {}}],
//     [48 ,{onFullSet: () => {}}],
//     [49 ,{onFullSet: () => {}}],
//     [50 ,{onFullSet: () => {}}],
//     [51 ,{onFullSet: () => {}}],
//     [52 ,{onFullSet: () => {}}],
//     [53 ,{onFullSet: () => {}}],
//     [54 ,{onFullSet: () => {}}],
//     [55 ,{onFullSet: () => {}}],
//     [56 ,{onFullSet: () => {}}],
//     [57 ,{onFullSet: () => {}}],
//     [58 ,{onFullSet: () => {}}],
//     [59 ,{onFullSet: () => {}}],
//     [60 ,{onFullSet: () => {}}],
//     [61 ,{onFullSet: () => {}}],
// ])
const headMap = new Map([
    [ 'minecraft:diamond_helmet' , 2 ],
    [ 'minecraft:iron_helmet' , 3 ],
    [ 'minecraft:netherite_helmet' , 4 ],
    [ 'minecraft:golden_helmet' , 5 ],

])
const chestplateMap = new Map([
    [ 'minecraft:diamond_chestplate' , 2 ],
    [ 'minecraft:iron_chestplate' , 3 ],
    [ 'minecraft:netherite_chestplate' , 4 ],
    [ 'minecraft:golden_chestplate' , 5 ],

])
const legsMap = new Map([
    [ 'minecraft:diamond_leggings' , 2 ],
    [ 'minecraft:iron_leggings' , 3 ],
    [ 'minecraft:netherite_leggings' , 4 ],
    [ 'minecraft:golden_leggings' , 5 ],

])
const bootsMap = new Map([
    [ 'minecraft:diamond_boots', 2 ],
    [ 'minecraft:iron_boots', 3 ],
    [ 'minecraft:netherite_boots', 4 ],
    [ 'minecraft:golden_boots', 5 ],

])
const suiteMap = new Map([
    [ 2, {name: 'diamond'} ],
    [ 3, {name: 'iron'} ],
    [ 4, {name: 'netherite'} ],
    [ 5, {name: 'golden'} ],
])
const specialSuiteMap = new Map([
    [ 'mod:test0', testspecial_1 ],
    [ 'mod:test1', testspecial_2 ],
])


// PlayerEvents.tick(event => {

// })