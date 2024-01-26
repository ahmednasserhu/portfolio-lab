import { Component } from '@angular/core';
import { faFacebook, faGithub, faGooglePlus, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   
    myLinkedIn = faLinkedin;
    myFacebook = faFacebook;
    myTwitter = faTwitter;
    myInstgram = faInstagram;
    myGoogle = faGooglePlus;
    myGithub = faGithub;
}
