import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from './tabs/tabs.module';
import { HomeComponent } from './home.component';
import { AngularBlogComponent } from './angular-blog/angular-blog.component';
import { CliWikiComponent } from './cli-wiki/cli-wiki.component';
import { FigureComponent } from './figure/figure.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { NgTalksLogoComponent } from './ng-talks-logo/ng-talks-logo.component';
import { AngularLogoComponent } from './angular-logo/angular-logo.component';
import { FlyDirective } from './directives/fly.directive';

@NgModule({
  imports: [
    CommonModule,
    TabsModule
  ],
  declarations: [
    FlyDirective,
    AngularLogoComponent,
    NgTalksLogoComponent,
    ContentProjectionComponent,
    FigureComponent,
    CliWikiComponent,
    AngularBlogComponent,
    HomeComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
