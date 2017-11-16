/**
*  Simple pull observer pattern for change notification.
*/
class Subject {
    constructor() {
        this.observers = [];
    }
    add(item) {
        this.observers.push(item);
    }
    removeAll() {
        this.observers.length = 0;
    }
    notifyObservers() {
        this.observers.forEach(function(elem) {
            elem.notify();
        });
    }
}
