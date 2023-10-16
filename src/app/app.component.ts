import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'signals';

  protected test = signal(1);
  protected computedSignal = computed(() => `${this.test()} computed!`);

  protected showCount = signal(true);

  init() {
    // this.test.set(10);
    // this.test.update((value) => {
    //   return { ...value, idade: 30 };
    // });
    // this.test.mutate((value) => (value.idade = 25));
    this.test.update((value) => value + 1);
  }
}
