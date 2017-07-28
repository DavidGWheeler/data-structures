'use strict'

const expect = require('chai').expect

const Node = require('../lib/node')
let node = new Node(50)

describe('Testing Node constructor', function() {

  describe('Node has a value', done => {
    it('should have a value', () => {
      expect(node).to.have.property('val')
      .that.is.a('number')
      .that.equals(50)
    })
    it('should have data', () => {
      expect(node).to.have.property('data')
      .that.equals(null)
    })
    it('should have a null left property', () => {
      expect(node).to.have.property('left')
      .that.equals(null)
    })
    it('should have a null right property', () => {
      expect(node).to.have.property('right')
      .that.equals(null)
    })
  })
})
