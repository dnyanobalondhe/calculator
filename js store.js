class Store {
    constructor() {
      this._stack = [];
      this._currentInput = '0';
      this._resultShown = false;
    }
  
    get stack() {
      return [...this._stack];
    }
  
    updateStack(value) {
      this._stack.push(value);
    }
  
    popStack() {
      return this._stack.pop();
    }
  
    get currentInput() {
      return this._currentInput;
    }
  
    updateCurrentInput(value) {
      this._currentInput = value;
    }
  
    get resultShown() {
      return this._resultShown;
    }
  
    updateResultShown(value) {
      this._resultShown = value;
    }
  
    clear() {
      this._stack = [];
      this._currentInput = '0';
      this._resultShown = false;
    }
  }
  
  export default new Store();
  