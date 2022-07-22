class DisjointSet {
  /**
   * Initialize parent and rank
   */  
  constructor() {
    this.parent = new Map();
    this.rank = new Map();
  }

  /**
   * Initialize x as an individual group
   * @param {Object} x 
   */
  makeSet = function (x){
    this.parent.set(x, null);
    this.rank.set(x, 1);
  }

  /**
   * find the root of x group
   * @param {Object} x 
   * @returns {Object} the root node x group
   */
  _findSet = function (x) {
    if(this.parent.get(x) === null) {
        return x;
    } 

    this.parent.set(x) = this._findSet(this.parent.get(x));

    return this.parent.get(x);
  }

  /**
   * 
   * @param {Object} x 
   * @param {Object} y 
   * @returns {boolean} true if both x and y are in same group
   */
  sameSet = function (x,y){
    return this._findSet(x) === this._findSet(y);
  }

  /**
   * 
   * merge x and y into same set
   * @param {Object} x 
   * @param {Object} y 
   */
  union = function (x, y) {  
    const xParent = this._findSet(x);
    const yParent = this._findSet(y);

    if(xParent === yParent) return;

    if(this.rank.get(xParent) > this.rank.get(yParent)){
        this.parent.set(yParent, xParent);
    }else if(this.rank.get(xParent) < this.rank.get(yParent)){
        this.parent.set(xParent, yParent);
    }else{
        this.parent.set(yParent, xParent);
        this.rank.set(xParent, this.rank.get(xParent) + 1);
    }
  }

  /**
   * remove x from its group
   * @param {Object} x 
   */
  remove = function (x){
     this.parent.set(x, null);
  }
}


module.exports = DisjointSet;