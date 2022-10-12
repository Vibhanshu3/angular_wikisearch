import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term = '';
  @Output() submitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    const targ = event.target as HTMLInputElement;
    this.term = targ.value;
    console.log(this.term)
  }

  onFormSubmit(event: any) {
    event.preventDefault(); //?
    this.submitted.emit(this.term);
  }

}
