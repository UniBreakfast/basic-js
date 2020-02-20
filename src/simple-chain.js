const chainMaker = {
  getLength() {
    return (this.chain || []).length
  },
  addLink(value) {
    this.chain =
      [...(this.chain || []), `(${value !== undefined ? ` ${value} ` : ' '})`]
    return this
  },
  removeLink(position) {
    if (!(position > 0 && position <= this.getLength() && !(position%1))) {
      delete this.chain
      throw new Error('incorrect postion')
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain = (this.chain || []).reverse()
    return this
  },
  finishChain() {
    const chain = this.chain.join('~~')
    delete this.chain
    return chain
  }
};

module.exports = chainMaker;
