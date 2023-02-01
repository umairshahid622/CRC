import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/Cards/formlayout.component';
import { AppMainComponent } from './app.main.component';
import { InputComponent } from './components/migrant/input.component';
import { FloatLabelComponent } from './components/socialanalyzer/floatlabel.component';
import { LoginComponent } from './components/login/login.component';
import { LinkdenComponent } from './components/linkden/linkden.component';
import {SpiderfootComponent} from './components/spiderfoot/spiderfoot.component';
import {TwintComponent} from "./components/twint/twint.component";
import {TopurlsComponent} from "./components/topurls/topurls.component";
import {HistorydashboardComponent} from "./components/historydashboard/historydashboard.component";
import {SearchpageComponent} from "./components/login/searchpage/searchpage.component";
import {SignUpComponent} from "./components/login/sign-up/sign-up.component";
import {QuerytableComponent} from "./components/login/querytable/querytable.component";
import {Twittercards1Component} from "./components/project1/twittercards1/twittercards1.component";
import {Topurls1Component} from "./components/project1/toptweets1/topurls1.component";
import {Topuser1Component} from "./components/project1/topuser1/topuser1.component";
import {Hashtag1Component} from "./components/project1/hashtag1/hashtag1.component";
import {Topvideos1Component} from "./components/project1/topvideos1/topvideos1.component";
import {CardstwitterComponent} from "./components/Project2/cardstwitter/cardstwitter.component";
import {Topurls2Component} from "./components/Project2/toptweets/topurls2.component";
import {Topuser2Component} from "./components/Project2/topuser2/topuser2.component";
import {Hashtag2Component} from "./components/Project2/hashtag2/hashtag2.component";
import {Videos2Component} from "./components/Project2/videos2/videos2.component";
import { RedditCardComponent } from './components/reddit-card/reddit-card.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path:'',component:HistorydashboardComponent},
                    {path: 'Dashboard', component: DashboardComponent},
                    {path: 'Tools/Cards', component: FormLayoutComponent},
                    {path: 'Tools/Migret', component: InputComponent},
                    {path: 'Tools/Social-Analyzer', component: FloatLabelComponent},
                    {path:'Tools/LinkedIn',component:LinkdenComponent},
                    {path:'Tools/Spider',component:SpiderfootComponent},
                    {path:'Tools/twint',component:TwintComponent},
                    {path:'videos/topurls',component:TopurlsComponent},
                    {path:'Project1/Cards',component:Twittercards1Component},
                    {path:'Project1/TopTweets',component:Topurls1Component},
                    {path:'Project1/TopUser',component:Topuser1Component},
                    {path:'Project1/Hashtag',component:Hashtag1Component},
                    {path:'Project1/TopVideos',component:Topvideos1Component},
                    {path:'Project2/Cards',component:CardstwitterComponent},
                    {path:'Project2/TopTweets',component:Topurls2Component},
                    {path:'Project2/TopUser',component:Topuser2Component},
                    {path:'Project2/Hashtag',component:Hashtag2Component},
                    {path:'Project1/TopVideos',component:Videos2Component},
                    {path:'reddit',component:RedditCardComponent}
                ],
            },
            {path:'pages/login', component: LoginComponent},
            {path:'pages/search', component: SearchpageComponent},
            {path:'pages/signup', component: SignUpComponent},
            {path:'pages/query', component: QuerytableComponent},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
