'use strict';

// Node Constructor //

const bstNode = module.exports = function(val) {
  this.val = val,
  this.data = null,
  this.left = null,
  this.right = null,
  this.parent = null;
};

const Viz = require('viz.js');


// Basic Prototype methods //

//O(log n)
bstNode.Prototype.appendChild = function(val) {
  if(!this) return;
  if(val === this.val) throw new Error('val must be unique');
  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val);
      this.right.parent = this;
    } else this.right.appendChild(val);
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val);
      this.left.parent = this;
    } else this.left.appendedChild(val);
  }

  if(this.isBalanced(this)) {
    return;
  } else {
    this.balance();
  }
  return;
};

// O(log n)
bstNode.prototype.find = function(val) {
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.find(val);
  } else if(val > this.val)
};
