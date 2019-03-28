const comparePrototypes = (objPrototype, intPrototype) => {
    const intMethods = Object.getOwnPropertyNames(intPrototype);
    const objMethods = Object.getOwnPropertyNames(objPrototype);

    return intMethods.every(method => objMethods.includes(method)
        && intPrototype[method].length === objPrototype[method].length);
}

const implements = (objectClass, interface) => {
    const isPrototype = interface.isPrototypeOf(objectClass);
    const areOk = comparePrototypes(objectClass.prototype, interface.prototype);
    return isPrototype && areOk;
}

const Utils = {
    implements
}

module.exports = Utils;