/**
 * @relatedClass
 * Type: Java.loadClass('net.minecraft.world.phys.HitResult.Type')
 *
 */

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.ProjectileImpactEvent", event => {
    // console.log(`trigger event projectile ${event.getRayTraceResult().getType()}`)
    const hitResult = event.getRayTraceResult()
    if (hitResult.getType() !== needClass.HitResult$Type.ENTITY) return
    const targetEntity = hitResult.entity
    const projectile = event.getProjectile()
    const projectileID = projectile.getEncodeId()
    if (!projectile || !projectileID) return
    // const sourceEntity = hitResult.fromEntity
    // Client.player.tell(hitResult.fromEntity)
    // console.log(`trigger event projectile ${event.getProjectile().getEncodeId()}`)
    // console.log(`${entity.isLiving()}`)
    // console.log(`${event.getProjectile().getEncodeId().equals("eternal_starlight:shattered_blade")}`)
    if (
        projectileID.equals("eternal_starlight:shattered_blade")
        //  && entity.isLiving()
    ) {
        console.log("trigger event shattered_blade")
        console.log(`targetEntity:${targetEntity}`)

        keraunoSoulDriver.trigger(Client.player, targetEntity)
    }
})
