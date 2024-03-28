import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeartFilled, IconBrandGithub, IconThumbUpFilled, IconStarFilled } from 'angular-tabler-icons/icons';

// Selecting icons to use
const icons = {
  IconCamera,
  IconHeartFilled,
  IconThumbUpFilled,
  IconStarFilled,
  IconBrandGithub
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }
