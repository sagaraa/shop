import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'products', component: AddProductComponent},
  {path:'product/:id', component:ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [CommonModule,
            RouterModule.forRoot(routes)
            // RouterModule.forRoot(
            //   routes,
            //   { enableTracing: true } // <-- debugging purposes only
            // )
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
