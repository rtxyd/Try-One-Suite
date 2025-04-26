NativeEvents.onEvent('HIGHEST','net.neoforged.neoforge.event.entity.living.LivingHealEvent', event => {
    const entity = event.entity;
    if(!entity) return
    else if(!entity.isPlayer()) return
    
    // 检测目标药水效果是否存在
    if (entity.hasEffect('othermod:op_potion')) {
        // 1. 临时移除药水效果（欺骗原 Mod）
        const effect = entity.getEffect('othermod:op_potion');
        entity.removeEffect('othermod:op_potion');
        
        // 2. 记录原始治疗量
        const originalAmount = event.amount;
        
        // 3. 在事件结束后重新添加药水效果
        event.server.scheduleInTicks(1, () => {
            entity.addEffect(effect);
        });
        
        // 4. 修改治疗量（例如减少 75%）
        event.amount = originalAmount * 0.25;
        
        console.log('绕过原 Mod 取消逻辑，治疗量修正为：' + event.amount);
    }
})