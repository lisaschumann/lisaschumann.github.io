const codebar = {
    _name: 'Kas',
    get name () {
        return this._name;
    },
    set name(newName) {
        this._name = name;
    }
}


codebar._name = 'Lisa'
console.log(codebar._name)