import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { NotificationsInnerComponent } from './dropdown-inner/notifications-inner/notifications-inner.component';
import { QuickLinksInnerComponent } from './dropdown-inner/quick-links-inner/quick-links-inner.component';
import { UserInnerComponent } from './dropdown-inner/user-inner/user-inner.component';
import { LayoutScrollTopComponent } from './scroll-top/scroll-top.component';
import { TranslationModule } from '../../../../modules/i18n';
import { LinkModifierComponent } from './link-modifier/link-modifier.component';
import { FormsModule } from '@angular/forms'; 
import { QuickLinksInnerComponent2 } from './dropdown-inner/quick-links-inner-2/quick-links-inner-2.component';
import { QuickLinksInnerComponent3 } from './dropdown-inner/quick-links-inner-3/quick-links-inner-3.component';
import { QuickLinksInnerComponent4 } from './dropdown-inner/quick-links-inner-4/quick-links-inner-4.component';
import { QuickLinksInnerComponent5 } from './dropdown-inner/quick-links-inner-5/quick-links-inner-5.component';
import { QuickLinksInnerComponent6} from './dropdown-inner/quick-links-inner-6/quick-links-inner-6.component';
import { QuickLinksInnerComponent7} from './dropdown-inner/quick-links-inner-7/quick-links-inner-7.component';
import { QuickLinksInnerComponent8} from './dropdown-inner/quick-links-inner-8/quick-links-inner-8.component';
import { QuickLinksInnerComponent9} from './dropdown-inner/quick-links-inner-9/quick-links-inner-9.component';
import { QuickLinksInnerComponent10} from './dropdown-inner/quick-links-inner-10/quick-links-inner-10.component';
import { QuickLinksInnerComponent11} from './dropdown-inner/quick-links-inner-11/quick-links-inner-11.component';
import { QuickLinksInnerComponent12} from './dropdown-inner/quick-links-inner-12/quick-links-inner-12.component';

// Import FormsModule
@NgModule({
  declarations: [
    NotificationsInnerComponent,
    QuickLinksInnerComponent,
    UserInnerComponent,
    LayoutScrollTopComponent,
    LinkModifierComponent,
    QuickLinksInnerComponent2,
    QuickLinksInnerComponent3,
    QuickLinksInnerComponent4,
    QuickLinksInnerComponent5,
    QuickLinksInnerComponent6,
    QuickLinksInnerComponent7,
    QuickLinksInnerComponent8,
    QuickLinksInnerComponent9,
    QuickLinksInnerComponent10,
    QuickLinksInnerComponent11,
    QuickLinksInnerComponent12,


  ],
  imports: [CommonModule, InlineSVGModule, RouterModule, TranslationModule, 
    FormsModule],
  exports: [
    
    NotificationsInnerComponent,
    QuickLinksInnerComponent,
    UserInnerComponent,
    LayoutScrollTopComponent,
    
    LinkModifierComponent,
    QuickLinksInnerComponent2,
    QuickLinksInnerComponent3,
    QuickLinksInnerComponent4,
    QuickLinksInnerComponent5,
    QuickLinksInnerComponent6,
    QuickLinksInnerComponent7,
    QuickLinksInnerComponent8,
    QuickLinksInnerComponent9,
    QuickLinksInnerComponent10,
    QuickLinksInnerComponent11,
    QuickLinksInnerComponent12

  ],
})
export class ExtrasModule {}
