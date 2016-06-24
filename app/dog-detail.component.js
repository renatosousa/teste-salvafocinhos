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
var dog_1 = require('./dog');
var DogDetailComponent = (function () {
    function DogDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dog_1.Dog)
    ], DogDetailComponent.prototype, "dog", void 0);
    DogDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-dog-detail',
            template: "\n\t  <div *ngIf=\"dog\">\n\t\t<h2>{{dog.name}} details!</h2>\n\t\t<div><label>id: </label>{{dog.id}}</div>\n\t\t<div>\n\t\t  <label>name: </label>\n\t\t  <input [(ngModel)]=\"dog.name\" placeholder=\"name\"/>\n\t\t</div>\n\t  </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], DogDetailComponent);
    return DogDetailComponent;
}());
exports.DogDetailComponent = DogDetailComponent;
//# sourceMappingURL=dog-detail.component.js.map