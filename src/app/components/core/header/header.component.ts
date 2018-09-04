import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Output() toggle = new EventEmitter<void>();
  ngOnInit() {}

  toggleSidebar() {
    this.toggle.emit();
  }
}
