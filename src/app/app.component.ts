import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Oswaldo';
  age = 18;
  image = "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg";
  btnDisabled = true;
  person = {
    name: 'Oswaldo',
    age: 18,
    image: 'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg',
  }
  names: string[]= ['Oswaldo', 'Nicolas', 'Julio'];
  newName = '';

  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
