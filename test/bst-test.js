'use strict';

const expect = require('chai').expect;

const BST = require('../lib/bst');
let bst = new BST(50);

describe('Testing binary search tree methods', function() {
  describe('Creating a tree', () => {
    id('should instaantiate a new tree', done => {
      expect(bst).to.exist;
      done();
    });

    it('should be an object', done => {
      expect(bst).to.be.an('object');
      done();
    });

    it('should have a starting val', done => {
      expect(bst).to.have.property('val')
      .that.is.a('number')
      .that.equals(50);
    });

  })
})
