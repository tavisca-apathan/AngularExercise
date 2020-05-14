import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dropdown-component-directive',
    templateUrl: './dropdowncomponent.view.html'
})

export class DropdownComponent implements OnInit {
    
    private _DataSource: Array<any>;

    @Output()
    onRowSelected: EventEmitter<any>;

  constructor() {
      this._DataSource = new Array<any>();
      this.onRowSelected  =new EventEmitter<any>();
  }

  @Input()
  set DataSource(val: Array<any>) {
     if(val.length > 0) {
       this._DataSource = val;
     } else {
      this._DataSource = new Array<any>();
     }
  }

  get DataSource(): Array<any> {
    return this._DataSource;
  }

  onRowSelectedEvent(r: any) {
    // emit() method will emit an event
    this.onRowSelected.emit(r);
  }



    ngOnInit() { }


}