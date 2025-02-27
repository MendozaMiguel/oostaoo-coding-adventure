import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientService } from './api-client/api-client.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountUpModule } from 'countup.js-angular2';
import { DragScrollModule } from 'ngx-drag-scroll';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import components
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { IndexPageComponent } from './components/home/index-page/index-page.component';
import { SecondSectionComponent } from './components/home/second-section/second-section.component';
import { CounterAnimComponent } from './components/home/counter-anim/counter-anim.component';
import { FooterComponent } from './components/home/footer/footer.component';

import { MainComponent } from './components/home/main/main.component';
import { SliderComponent } from './components/home/slider/slider.component';

import { SlideMarquesComponent } from './components/home/slide-marques/slide-marques.component';
import { RouteComponentComponent, PopupMonOffre } from './components/panelAdmin/navbar/route-component.component';
import { AccueilComponent } from './components/home/accueil/accueil.component';

import { NavMobileAbsoluteDirective } from './directives/nav-mobile-absolute.directive';
import { IntegrationBoutonComponent } from './components/panelAdmin/integration-bouton/integration-bouton.component';
import { NouvelleCampagneComponent } from './components/panelAdmin/nouvelle-campagne/nouvelle-campagne.component';
import {
  NouvelleCampagnePage1Component
} from './components/panelAdmin/nouvelle-campagne/nouvelle-campagnePage1-component/nouvelle-campagne.component';
import {
  NouvelleCampagnePage2Component
} from './components/panelAdmin/nouvelle-campagne/nouvelle-campagnePage2-component/nouvelle-campagne2.component';
import {
  NouvelleCampagnePage3Component, PopupCampaign
} from './components/panelAdmin/nouvelle-campagne/nouvelle-campagnePage3-component/nouvelle-campagne3.component';

import { RouteComponentComponent2 } from './components/panelAdmin/route-component2/route-component.component';
import { CompagneComponent } from './components/panelAdmin/compagne/compagne.component';
import { SidibarRightComponent } from './components/panelAdmin/sidibar-right/sidibar-right.component';

import { ProfilUtilisateurComponent } from './components/panelAdmin/profil-utilisateur/profil-utilisateur.component';
import { ProtectionDeDonneesComponent } from './components/panelAdmin/protection-de-donnees/protection-de-donnees.component';
import { FacturationComponent } from './components/panelAdmin/facturation/facturation.component';
import { UtilisateursComponent } from './components/panelAdmin/compte-utilisateurs/utilisateurs.component';
import { ProfilEntrepriseComponent } from './components/panelAdmin/profil-entreprise/profil-entreprise.component';
import { EditCampagneComponent } from './components/panelAdmin/edit-campagne/edit-campagne.component';
import { CandidatsComponent } from './components/panelAdmin/edit-campagne/candidats/candidats.component';
import { InviteCandidat } from './components/panelAdmin/edit-campagne/candidats/invite-candidat.component';

import { QuestionsComponent } from './components/panelAdmin/edit-campagne/questions/questions.component';
import { SettingsComponent } from './components/panelAdmin/edit-campagne/settings/settings.component';
import { CandidatsFormComponent } from './components/panelAdmin/edit-campagne/candidats-form/candidats-form.component';
import { CandidatsMailComponent } from './components/panelAdmin/edit-campagne/candidats-mail/candidats-mail.component';

@NgModule({
  entryComponents: [RouteComponentComponent, PopupMonOffre, InviteCandidat, CandidatsComponent, PopupCampaign,
    NouvelleCampagnePage3Component, CandidatsMailComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexPageComponent,
    SecondSectionComponent,
    CounterAnimComponent,
    MainComponent,
    FooterComponent,
    SliderComponent,
    SlideMarquesComponent,
    RouteComponentComponent,
    PopupMonOffre,
    AccueilComponent,
    NavMobileAbsoluteDirective,
    IntegrationBoutonComponent,
    NouvelleCampagneComponent,
    NouvelleCampagnePage1Component,
    NouvelleCampagnePage2Component,
    PopupCampaign,
    NouvelleCampagnePage3Component,
    RouteComponentComponent2,
    CompagneComponent,
    SidibarRightComponent,
    ProfilUtilisateurComponent,
    FacturationComponent,
    ProtectionDeDonneesComponent,
    UtilisateursComponent,
    ProfilEntrepriseComponent,
    EditCampagneComponent,
    CandidatsComponent,
    InviteCandidat,
    QuestionsComponent,
    SettingsComponent,
    CandidatsFormComponent,
    CandidatsMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CountUpModule,
    DragScrollModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RoundProgressModule
  ],
  providers: [
    ApiClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
