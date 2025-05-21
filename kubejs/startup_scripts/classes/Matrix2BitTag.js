function Matrix2BitTag() {
    let maxSize = arguments[0]
    if (typeof maxSize === "number") {
        let chunksCount = Math.ceil(maxSize / 32)
        if(chunksCount <= 32) this.chunks = new Array(chunksCount).fill(0);
        else throw new Error("maxchunks should be less than 32")
    } else {
        this.chunks = new Array([0])
    }
}

Matrix2BitTag.prototype.set = function(pos) {
    console.log(`进入set， pos:`);
    
    console.log(pos);
    
    let chunkIndex = pos >>> 5
    console.log(chunkIndex);
    
    while (chunkIndex >= this.chunks.length && chunkIndex <= 32) {
        this.chunks.push(0)
    }
    this.chunks[chunkIndex] |= 1 << (pos & 31)
    console.log(this.chunks);
    
    return this
}

Matrix2BitTag.prototype.has = function(pos) {
    let chunkIndex = pos >>> 5
    if (chunkIndex > this.chunks.length) return false
    else {
        return (this.chunks[chunkIndex] & (1 << (pos & 31))) !== 0
    }
}

Matrix2BitTag.prototype.unset = function(pos) {
    let chunkIndex = pos >>> 5
    if (chunkIndex < this.chunks.length) {
        this.chunks[chunkIndex] &= ~(1 << (pos & 31))
    } else {
        console.error("position can't be reached")
    }
    return this
}

Matrix2BitTag.prototype.merge = function(other) {
    for (let i = 0; i < other.chunks.length; i++) {
        if (i >= this.chunks.length) {
            this.chunks[i] = other.chunks[i]
        } else {
            this.chunks[i] |= other.chunks[i]
        }
    }
    return this
}

Matrix2BitTag.prototype.isEmpty = function() {
    return !this.chunks.some(chunk => chunk !== 0)
}

Matrix2BitTag.prototype.toBinaryString = function() {
    return this.chunks
        .map(function (chunk) {
            let bin = chunk.toString(2)
            return "0".repeat(32 - bin.length) + bin
        })
        .reverse()
        .join(" ")
}

Matrix2BitTag.prototype.equals = function(other) {
    let maxLength = Math.max(this.chunks.length, other.chunks.length)

    for (let i = 0; i < maxLength; i++) {
        let thisChunk = i < this.chunks.length ? this.chunks[i] : 0
        let otherChunk = i < other.chunks.length ? other.chunks[i] : 0

        if (thisChunk !== otherChunk) {
            return false
        }
    }
    return true
}

// 判断是否包含另一个 Matrix2BitTag 的所有标签
Matrix2BitTag.prototype.contains = function(other) {
    for (let i = 0; i < other.chunks.length; i++) {
        let otherChunk = other.chunks[i]
        let thisChunk = i < this.chunks.length ? this.chunks[i] : 0

        if ((thisChunk & otherChunk) !== otherChunk) {
            return false
        }
    }
    return true
}

// 作差
Matrix2BitTag.prototype.unmerge = function(other) {
    if (this.chunks.length < other.chunks.length) {
        throw new Error("chunks must equals or be more than other")
    }
    for (let i = 0; i < other.chunks.length; i++) {
        this.chunks[i] &= ~other.chunks[i]
    }
    return this
}

// 分解
Matrix2BitTag.prototype.atomize = function() {
    const atomizedArray = []
    for (let i = 0; i < this.chunks.length; i++) {
        const chunk = this.chunks[i]
        for (let j = 0; j < 32; j++) {
            if (chunk & (1 << j)) {
                atomizedArray.push(i * 32 + j)
            }
        }
    }
    return atomizedArray
}

global.Matrix2BitTag = Matrix2BitTag