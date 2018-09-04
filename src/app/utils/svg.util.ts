import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

export const loadSvgResources = (
  iconRegistry: MdIconRegistry,
  domSanitizer: DomSanitizer
) => {
  iconRegistry.addSvgIcon(
    "gifts",
    domSanitizer.bypassSecurityTrustResourceUrl("assets/gifts.svg")
  );
};
