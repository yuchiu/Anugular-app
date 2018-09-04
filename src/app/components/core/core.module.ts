import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MdToolbarModule, MdIconModule } from "@angular/material";
import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { loadSvgResources } from "../../utils/svg.util";

@NgModule({
  imports: [CommonModule, MdToolbarModule, MdIconModule, HttpModule],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parent: CoreModule,
    iconRegistry: MdIconRegistry,
    domSanitizer: DomSanitizer
  ) {
    if (parent) {
      throw new Error("module already exist, can not reload again");
    }
    loadSvgResources(iconRegistry, domSanitizer);
  }
}
