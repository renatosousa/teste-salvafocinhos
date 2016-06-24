import { Component } from '@angular/core';
import { DogDetailComponent } from './dog-detail.component';
import { Dog } from './dog';

@Component({
  selector: 'my-app',
  template:`
	  <h1>{{title}}</h1>
	  <h2>Meus Cachorros</h2>
		<ul class="dogs">
		  <li *ngFor="let dog of dogs" [class.selected]="dog === selectedDog" (click)="onSelect(dog)">
			<span class="badge">{{dog.id}}</span> {{dog.name}}
		  </li>
		</ul>
		
		<my-dog-detail [dog]="selectedDog"></my-dog-detail>
	  `,
	directives: [DogDetailComponent]
  
})



export class AppComponent { 
	title = 'Salva Focinhos';
	selectedDog: Dog;
	dogs = DOGS;
	onSelect(dog: Dog) { this.selectedDog = dog; }
};


const DOGS: Dog[] = [
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




