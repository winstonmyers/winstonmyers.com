import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { TopHeaderComponent } from './components/common/top-header/top-header.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { HomeoneFeaturesComponent } from './components/pages/home-demo-one/homeone-features/homeone-features.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { LetsTalkComponent } from './components/common/lets-talk/lets-talk.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServicesComponent } from './components/common/services/services.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { TeamStyleOneComponent } from './components/common/team-style-one/team-style-one.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { FeaturedServicesComponent } from './components/common/featured-services/featured-services.component';
import { MainServicesComponent } from './components/common/main-services/main-services.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { HometwoTestimonialsComponent } from './components/pages/home-demo-two/hometwo-testimonials/hometwo-testimonials.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HometwoFeaturesComponent } from './components/pages/home-demo-two/hometwo-features/hometwo-features.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HomethreeBlogComponent } from './components/pages/home-demo-three/homethree-blog/homethree-blog.component';
import { HomethreeFeaturedServicesComponent } from './components/pages/home-demo-three/homethree-featured-services/homethree-featured-services.component';
import { TeamStyleTwoComponent } from './components/common/team-style-two/team-style-two.component';
import { HomethreeTestimonialsComponent } from './components/pages/home-demo-three/homethree-testimonials/homethree-testimonials.component';
import { HomethreeFeaturesComponent } from './components/pages/home-demo-three/homethree-features/homethree-features.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomethreeWhyChooseUsComponent } from './components/pages/home-demo-three/homethree-why-choose-us/homethree-why-choose-us.component';
import { HomefourBlogComponent } from './components/pages/home-demo-four/homefour-blog/homefour-blog.component';
import { HomefourFeaturedServicesComponent } from './components/pages/home-demo-four/homefour-featured-services/homefour-featured-services.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { HomefourFeaturesComponent } from './components/pages/home-demo-four/homefour-features/homefour-features.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { SignInPageComponent } from './components/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { RelatedProductsComponent } from './components/pages/products-details-page/related-products/related-products.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { AwardsPageComponent } from './components/pages/awards-page/awards-page.component';
import { ClientsPageComponent } from './components/pages/clients-page/clients-page.component';
import { CareersPageComponent } from './components/pages/careers-page/careers-page.component';
import { CareersDetailsPageComponent } from './components/pages/careers-details-page/careers-details-page.component';
import { LeadershipPageComponent } from './components/pages/leadership-page/leadership-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { SolutionsPageComponent } from './components/pages/solutions-page/solutions-page.component';
import { SolutionsDetailsPageComponent } from './components/pages/solutions-details-page/solutions-details-page.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { CaseStudiesComponent } from './components/common/case-studies/case-studies.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        HomeDemoThreeComponent,
        HomeDemoFourComponent,
        TopHeaderComponent,
        NavbarComponent,
        FooterComponent,
        HomeoneBannerComponent,
        HomeoneFeaturesComponent,
        FunfactsComponent,
        LetsTalkComponent,
        BlogComponent,
        NotFoundComponent,
        ServicesPageComponent,
        ServicesComponent,
        TestimonialsComponent,
        TeamStyleOneComponent,
        PartnerComponent,
        FeaturedServicesComponent,
        MainServicesComponent,
        WhyChooseUsComponent,
        HometwoTestimonialsComponent,
        HometwoBannerComponent,
        HometwoFeaturesComponent,
        SubscribeComponent,
        HomethreeBlogComponent,
        HomethreeFeaturedServicesComponent,
        TeamStyleTwoComponent,
        HomethreeTestimonialsComponent,
        HomethreeFeaturesComponent,
        HomethreeBannerComponent,
        HomethreeWhyChooseUsComponent,
        HomefourBlogComponent,
        HomefourFeaturedServicesComponent,
        HomefourBannerComponent,
        HomefourFeaturesComponent,
        BlogGridPageComponent,
        BlogRightSidebarPageComponent,
        BlogDetailsPageComponent,
        ComingSoonPageComponent,
        TermsConditionsPageComponent,
        PrivacyPolicyPageComponent,
        SignInPageComponent,
        SignUpPageComponent,
        ContactPageComponent,
        HowItWorksPageComponent,
        GalleryPageComponent,
        ProductsPageComponent,
        ProductsDetailsPageComponent,
        CartPageComponent,
        CheckoutPageComponent,
        RelatedProductsComponent,
        FaqPageComponent,
        AwardsPageComponent,
        ClientsPageComponent,
        CareersPageComponent,
        CareersDetailsPageComponent,
        LeadershipPageComponent,
        AboutPageComponent,
        PricingPageComponent,
        SolutionsPageComponent,
        SolutionsDetailsPageComponent,
        ServicesDetailsPageComponent,
        CaseStudiesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CountUpModule,
        NgxScrollTopModule,
        BrowserAnimationsModule,
        CarouselModule,
        NgxPaginationModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }