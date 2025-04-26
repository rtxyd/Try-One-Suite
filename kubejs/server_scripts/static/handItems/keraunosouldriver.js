function KeraunoSoulDriver() {
    function startChainReaction(source, initialEntity) {
        const server = initialEntity.getServer()
        if (!server) return
        let effectTime = 100
        let initialTime = initialEntity.tickCount
        const timeLogicFrequence = 20
        const distanceLogicFrequence = 2
        let timeLogicTickCount = 0
        let lastDamageTickCount = 0
        let lastPos = {
            x: initialEntity.x,
            y: initialEntity.y,
            z: initialEntity.z
        }
        const projectileId = 'eternal_starlight:shattered_blade'
        const chainDamage = 4
        const radius = 5
        const chain = 3
        server.scheduleRepeatingInTicks(1, callback => {
            timeLogicTickCount++
            console.log(timeLogicTickCount);
            
            try {
                if (timeLogicTickCount >= effectTime) {
                    return callback.clear()
                }
                let currentTime = initialEntity.tickCount
                let entityList = findValidEntities(initialEntity, radius, chain)
                if (timeLogicTickCount === 1) {
                    console.log(`entities: ${entityList}`);
                }
                let currentPos = {
                    x: initialEntity.x,
                    y: initialEntity.y,
                    z: initialEntity.z
                }
                let distance = Math.sqrt(
                    Math.pow(currentPos.x - lastPos.x, 2) +
                    Math.pow(currentPos.y - lastPos.y, 2) +
                    Math.pow(currentPos.z - lastPos.z, 2)
                )
                source.tell(`Distance moved: ${distance}`)
                if (distance >= distanceLogicFrequence) {
                    console.log('距离伤害逻辑')
                    lastPos = currentPos
                    applyDamage(source, initialEntity, entityList, chainDamage)
    
                    lastDamageTickCount = currentTime - initialTime
                    return
                }
                if (currentTime - lastDamageTickCount >= timeLogicFrequence) {
                    console.log('时间伤害逻辑')
                    applyDamage(source, initialEntity, entityList, chainDamage)
    
                    lastDamageTickCount = currentTime
                }
            } catch (error) {
                console.log(error)
                callback.clear()
            }
        })
    }

    function findValidEntities(sourceEntity, radius, chain) {
        const initialPos = sourceEntity.position
        const world = sourceEntity.level
        const entities = world.getEntitiesWithin(
            new needClass.AABB(
                sourceEntity.x - radius,
                sourceEntity.y - radius,
                sourceEntity.z - radius,
                sourceEntity.x + radius,
                sourceEntity.y + radius,
                sourceEntity.z + radius
            )
        ).filter(e => 
            e.id !== sourceEntity.id && 
            e.getEncodeId() !== "eternal_starlight:shattered_blade" && 
            !e.isPlayer()
        )

        console.log(`实体取值前`);
        // console.log(entities.slice(0, chain));
        if (entities.length === 0) return [];
        for (let i = entities.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [entities[i], entities[j]] = [entities[j], entities[i]];
        }
        let result = [];
        let count = 0;
        for (let entity of entities) {
            if (count >= chain) break;
            result.push(entity);
            count++;
        }
        if (entities.length <= chain) return entities;

        return result
    }

    function applyDamage(source, initialEntity, entityList, chainDamage) {
        source.tell('施加伤害')
        console.log(`${source},${initialEntity}`)

        initialEntity.invulnerableTime = 0
        initialEntity.attack(source, chainDamage)
        initialEntity.invulnerableTime = 0
        chainVisual(initialEntity, initialEntity)
        playSound(initialEntity)

        for (let i = 0; i < entityList.length; i++) {
            // let entityHurted = entityList.get()
            entityList[i].invulnerableTime = 0
            entityList[i].attack(source, chainDamage)
            entityList[i].invulnerableTime = 0
            source.tell('产生特效')
            if (i === 0) {
                chainVisual(initialEntity, entityList[i])
            } else {
                chainVisual(entityList[i], entityList[i - 1])
            }
            playSound(entityList[i])
        }
    }

    function chainVisual(startEntity, endEntity) {
        const startPos = RegistryTools.clonePosition(startEntity)
        const endPos = RegistryTools.clonePosition(endEntity)
        console.log(`${startPos}, ${endPos}`)
        const steps = 10; // 粒子段数
        const dx = (endPos.x - startPos.x) / steps;
        const dy = (endPos.y - startPos.y) / steps;
        const dz = (endPos.z - startPos.z) / steps;

        // 在两点之间生成闪电粒子
        for (let i = 0; i <= steps; i++) {
            console.log(`产生粒子`);
            
            let x = startPos.x + dx * i;
            let y = startPos.y + 1 + dy * i;
            let z = startPos.z + dz * i;
            
            // 使用 electrical_spark 粒子（1.17+）
            endEntity.level.runCommandSilent(
                `particle minecraft:electric_spark ${x} ${y} ${z} 0 0 0.05 0.05 1 force`
            );
        }

        // 添加末端闪光特效（可选）
        endEntity.level.runCommandSilent(
            `particle minecraft:electric_spark ${endPos.x} ${endPos.y} ${endPos.z} 0 0 0 1 4 force`
        );
    }

    function playSound(entity) {
        entity.level.runCommandSilent(
            `playsound minecraft:block.redstone_torch.burnout ambient @p ${entity.x} ${entity.y} ${entity.z} 0.17 0.85`
        );
    }









    HandItemLogic.call(this,
        6,      // damage
        false,   // releaseUsing
        TypedArrayList.empty(needClass.AttributeModifier), 
        (source, initialTarget) => {  // triggerFunc
            console.log('enter1')
            // console.log(projectile);
            
            try {
                startChainReaction(source, initialTarget)
            } catch (error) {
                console.error(error);
            }
        })
}

KeraunoSoulDriver.prototype = Object.create(HandItemLogic.prototype)
KeraunoSoulDriver.prototype.constructor = KeraunoSoulDriver

const keraunoSoulDriver = new KeraunoSoulDriver()