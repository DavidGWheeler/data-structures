'use strict';

const expect = require('chai').expect;

const BST = require('../lib/bst');
let bst = new BST(50);

describe('Testing binary search tree methods', function() {
  describe('#Creating a tree', () => {
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
      done();
    });
  })
  describe('#Append a child ', () => {
    it('should not contain the node before the mehod is called', done => {
      expect(bst).to.not.have.valueOf(12);
      done();
    });

    it('should add the node with val of 12 when the method is called', done => {
      bst.appendChild(12);
      expect(bst).to.have.valueOf(12);
      done();
    });

    it('should append an additional node each time the method is called', done => {
      bst.appendChild(18);
      bst.appendChild(35);
      bst.appendChild(32);
      bst.appendChild(14);

      expect(bst).to.have.valueOf(18);
      expect(bst).to.have.valueOf(75);
      expect(bst).to.have.valueOf(32);
      expect(bst).to.have.valueOf(84);
      done();
    });

    it ('should not contain values that were not added', done => {
      expect(bst).to.not.have.valueOf(98);
      done();
    });
  });

  describe('#Contains method', function() {
    bst.appendChild(25);
    bst.appendChild(6);
    bst.appendChild(9);
    bst.appendChild(15);
    bst.appendChild(93);
    bst.appendChild(64);
    bst.appendChild(55);

    it('should not contain the nodes before appended', done => {
      expect(bst.contains(39)).to.be.false;
      bst.appendedChild(39);
      expect(bst,contains(39)).to.be.true;
      done();
    });

    it('should contain the nodes that were appended', done => {
      expect(bst.contains(50)).to.be.true;
      expect(bst.val).to.equal
      done();
    })
  })
})
