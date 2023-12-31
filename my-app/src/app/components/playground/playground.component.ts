import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';

export enum Size {
  xl = 'xl',
  mini = 'mini',
  standard = 'standard',
}

export interface Product {
  name: string;
  size: Size;
  description?: string;
  price?: number;
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  pipeTitleText = 'Pipes';

  @Input() childInputValue = '';
  @Output() childEventOutputToParent = new EventEmitter<string>();
  pi: number = 3.14159265359;
  myBirthday = new Date(1988, 3, 15);
  price = 101;

  registerForm = {
    name: '',
    email: '',
  };

  ngModelInputValue = 'Hello Ng Model';
  isDivVisible: boolean = true;
  CAINE: string = 'caine';
  PISICA: string = 'pisica';
  tipDeAnimal: string = 'caine';

  products: Product[] = [
    {
      name: 'Phone 1',
      size: Size.mini,
      description: 'A small but nice phone',
      price: 10,
    },
    {
      name: 'Phone 2',
      size: Size.standard,
      description: 'A small but mid phone',
      price: 20,
    },
  ];

  constructor() {
    this.products.push({
      name: 'Phone 3',
      size: Size.xl,
      description: 'A small but large phone',
      price: 30,
    });
  }

  handleViewDetails() {
    console.log('Shared');
  }

  handleClick() {
    this.isDivVisible = !this.isDivVisible;
  }

  handleDeleteClick() {
    this.products.pop();
  }

  randeazaSwtichCainii() {
    this.tipDeAnimal = this.CAINE;
  }

  randeazaSwtichPisicile() {
    this.tipDeAnimal = this.PISICA;
  }

  handleClickEventBinding(event: MouseEvent, strValue: string) {
    const target = event.target as HTMLButtonElement;
    console.log('Clicked button', target.textContent, strValue);
  }

  handleOnInputChange(val: Event) {
    const t = val.target as HTMLInputElement;
    console.log(t.value);
  }

  handleNgModelChange(e: string) {
    console.log(e);
  }

  handleSendDataToParentClick() {
    this.childEventOutputToParent.emit('Hello');
  }

  handleSubmit(formValue: any) {
    console.log(this.registerForm);
    console.log(formValue);
  }
}
