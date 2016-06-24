"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dog_detail_component_1 = require('./dog-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Salva Focinhos';
        this.dogs = DOGS;
    }
    AppComponent.prototype.onSelect = function (dog) { this.selectedDog = dog; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t  <h1>{{title}}</h1>\n\t  <h2>Meus Cachorros</h2>\n\t\t<ul class=\"dogs\">\n\t\t  <li *ngFor=\"let dog of dogs\" [class.selected]=\"dog === selectedDog\" (click)=\"onSelect(dog)\">\n\t\t\t<span class=\"badge\">{{dog.id}}</span> {{dog.name}}\n\t\t  </li>\n\t\t</ul>\n\t\t\n\t\t<my-dog-detail [dog]=\"selectedDog\"></my-dog-detail>\n\t  ",
            directives: [dog_detail_component_1.DogDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
var DOGS = [
    { id: 11, name: 'Calisse' },
    { id: 12, name: 'Africa' },
    { id: 13, name: 'Totoro' },
    { id: 14, name: 'Tieta' },
    { id: 15, name: 'Sammer' },
    { id: 16, name: 'Fred' },
    { id: 17, name: 'Nina' },
    { id: 18, name: 'Snow' },
    { id: 19, name: 'Huck' },
    { id: 20, name: 'Tornado' }
];
//# sourceMappingURL=app.component.js.map