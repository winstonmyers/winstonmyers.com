import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AwardsPageComponent } from './components/pages/awards-page/awards-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { CareersDetailsPageComponent } from './components/pages/careers-details-page/careers-details-page.component';
import { CareersPageComponent } from './components/pages/careers-page/careers-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ClientsPageComponent } from './components/pages/clients-page/clients-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { LeadershipPageComponent } from './components/pages/leadership-page/leadership-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { SignInPageComponent } from './components/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';
import { SolutionsDetailsPageComponent } from './components/pages/solutions-details-page/solutions-details-page.component';
import { SolutionsPageComponent } from './components/pages/solutions-page/solutions-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'index-4', component: HomeDemoFourComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'team', component: LeadershipPageComponent},
    {path: 'careers', component: CareersPageComponent},
    {path: 'careers-details', component: CareersDetailsPageComponent},
    {path: 'clients', component: ClientsPageComponent},
    {path: 'awards', component: AwardsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'services-details', component: ServicesDetailsPageComponent},
    {path: 'solutions', component: SolutionsPageComponent},
    {path: 'solutions-details', component: SolutionsDetailsPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'how-it-works', component: HowItWorksPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'sign-in', component: SignInPageComponent},
    {path: 'sign-up', component: SignUpPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'products-list', component: ProductsPageComponent},
    {path: 'products-details', component: ProductsDetailsPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }