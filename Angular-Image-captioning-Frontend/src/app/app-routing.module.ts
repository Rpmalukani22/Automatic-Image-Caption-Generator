import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloaderComponent } from './landing/preloader/preloader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { OverviewComponent } from './landing/overview/overview.component';
import { DetailsComponent } from './landing/details/details.component';
import { SpeechComponent } from './generator/upload/speech/speech.component';
import { VideosectionComponent } from './landing/videosection/videosection.component';
import { TeamComponent } from './landing/team/team.component';
import { OurprogressComponent } from './landing/ourprogress/ourprogress.component';
import { UploadComponent } from './generator/upload/upload.component';
import {LandingComponent} from "./landing/landing.component";
import {GeneratorComponent} from "./generator/generator.component";

const routes: Routes = [
  {path:'caption_generator',component:GeneratorComponent},
  {path:'',component:LandingComponent,pathMatch:'prefix'},
  {path:'**',redirectTo:'./'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/*{
  scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
        scrollOffset: [0, 64]
    }*/
export class AppRoutingModule { }
export const Components=[
    PreloaderComponent,
    NavigationComponent,
    IntroductionComponent,
    OverviewComponent,
    DetailsComponent,
    SpeechComponent,
    VideosectionComponent,
    TeamComponent,
    OurprogressComponent,
    UploadComponent,
    LandingComponent
];
