import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmitContact() {
    alert('Thank you. We will get back to you soon.');
  }

  onSubmitNewsletter() {
    alert('Yay. You’re in.');
  }
}
