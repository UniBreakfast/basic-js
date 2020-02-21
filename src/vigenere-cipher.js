class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
  }

  encrypt(msg, key) {
    if (msg === undefined || key === undefined)
      throw new Error('msg and/or key is not provided')
    return this.direct ? encrypt(msg, key) :
      encrypt(msg, key).split('').reverse().join('')
  }

  decrypt(hash, key) {
    if (hash === undefined || key === undefined)
      throw new Error('msg and/or key is not provided')
    return this.direct ? decrypt(hash, key) :
      decrypt(hash, key).split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;



// much better encrypt/decrypt functions that do work with normal range of characters without all-capsing and skipping everything else

function encrypt(msg, key) {
  let hash = ''
  for (let i=0; i<msg.length; ++i)  hash += String.fromCharCode(
      (msg[i].charCodeAt() + key[i % key.length].charCodeAt() - 64) % 96 + 32)
  return hash
}

function decrypt(hash, key) {
  let msg = ''
  for (let i=0; i<hash.length; ++i)  msg += String.fromCharCode(
      (hash[i].charCodeAt() - key[i % key.length].charCodeAt() + 96) % 96 + 32)
  return msg
}

// ... but they do not pass the tests because the tests are inadequate
// so these are simple enough for them

const code = char => char.charCodeAt() - 65,
      char = code => String.fromCharCode(code + 65),
      up = str => str.toUpperCase()

function encrypt(msg, key) {
  msg = up(msg), key = up(key)
  let hash = ''
  for (let i=0, j=0; i<msg.length; ++i)
    hash += msg[i]<'A' || 'Z'<msg[i] ? msg[i] :
      char((code(msg[i]) + code(key[j++%key.length])) % 26)
  return hash
}

function decrypt(hash, key) {
  hash = up(hash), key = up(key)
  let msg = ''
  for (let i=0, j=0; i<hash.length; ++i)
    msg += hash[i]<'A' || 'Z'<hash[i] ? hash[i] :
      char((code(hash[i]) - code(key[j++%key.length]) + 26) % 26)
  return msg
}
