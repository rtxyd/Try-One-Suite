function ModifierWrapper(effectObj) {
    let effect = effectObj.effect
    let stringLoc = effectObj.stringLoc
    if (effect instanceof needClass.AttributeModifier) {
        this.effect = effect
        this.isForAttribute = true
    }
    else if (effect instanceof needClass.Holder && effect.value() instanceof needClass.MobEffect) {
        this.effect = effect
        this.duration = effectObj.duration
        console.log("持续时间", effectObj.duration);
        this.amplifier =  effectObj.amplifier
        this.ambient = effectObj.amplifier
        this.visible = effectObj.visible
        this.showIcon = effectObj.showIcon
        this.hiddenEffect = effectObj.hiddenEffect
        this.isForMobEffect = true
    }
    this.stringLoc = stringLoc
    this.holder = AttributeMap[stringLoc]
}

ModifierWrapper.prototype.addModifiers = function(entity) {
    let modifier = this.effect
    if (this.isForMobEffect) {
        entity.addEffect(new needClass.MobEffectInstance(this.effect, this.duration, this.amplifier))
    }
    else if (this.isForAttribute) {
        entity.getAttribute(this.stringLoc).addTransientModifier(modifier)
    }
}

ModifierWrapper.prototype.eraseModifiers = function(entity) {
    let modifier = this.effect
    if (this.isForMobEffect) {
        entity.removeEffect(this.effect)
    }
    else if (this.isForAttribute) {
        entity.getAttribute(this.stringLoc)['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier)
    }
}

ModifierWrapper.prototype.addModifiersWithCheck = function(entity) {
    let modifier = this.effect
    if (this.isForMobEffect) {
        entity.addEffect(new needClass.MobEffectInstance(this.effect, this.duration, this.amplifier))
    }
    else if (this.isForAttribute) {
        let attribute = entity.getAttribute(this.stringLoc)
        if (!attribute.hasModifier(modifier.id())) {
            attribute.addTransientModifier(modifier)
        }
    }
}

ModifierWrapper.prototype.eraseModifiersWithCheck = function(entity) {
    let modifier = this.effect
    if (this.isForMobEffect) {
        entity.removeEffect(this.effect)
    }
    else if (this.isForAttribute) {
        let attribute = entity.getAttribute(this.stringLoc)
        if (attribute.hasModifier(modifier.id())) {
            attribute['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier)
        }
    }
}

global.ModifierWrapper = ModifierWrapper