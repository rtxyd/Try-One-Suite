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

global.ModifierWrapper = ModifierWrapper