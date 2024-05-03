import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material-modules';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [         
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent implements OnInit {
  pictureForm: FormGroup = new FormGroup({});
  profileForm: FormGroup = new FormGroup({});
  passwordForm: FormGroup = new FormGroup({});

  profileData: any;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private tokenStorageService: TokenStorageService,
  ) {}

  ngOnInit() {
    this.pictureForm = this.fb.group({
      photo: ['', Validators.required]
    });

    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      login: [''],
      email: ['', [Validators.email]],
    });

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
    this.getProfile();
  }

  passwordMatchValidator(form: FormGroup): any{
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === null || confirmPassword === null) {
      return { 'mismatch': true };
    }        
    return password === confirmPassword ? null : { 'mismatch': true };
  }

  getProfile() {
    return this.profileService.getProfile().subscribe({
      next: (data: any) => {
        this.profileData = data;
        this.profileForm.patchValue(data);
      },
      error: (e) => {
        if (e.status === 403) {
          this.tokenStorageService.logout();
        }
      },
    });
  }

  onPictureSubmit() {
    if (this.pictureForm.valid) {
      const formData = new FormData();
      formData.append('photo', this.pictureForm.get('photo')?.value.files[0]);

      this.profileService.updateProfilePicture(formData).subscribe({
        next: (response: any) => {
          console.log('Picture uploaded successfully', response);
          alert("Picture uploaded successfully.");
        },
        error: (error: any) => {
          console.error('Error uploading picture', error);
          alert("Failed to upload picture.");
        }
      });
    } else {
      alert("Please select a picture to upload.");
    }
  }

  deletePicture() {
    const data: any = {
      photo: null
    };
    this.profileService.deleteProfilePicture(data).subscribe({
      next: (response: any) => {
        console.log('Picture deleted successfully', response);
        alert("Picture deleted successfully.");
        this.profileData.photo = null;
      },
      error: (error: any) => {
        console.error('Error deleting picture', error);
        alert("Failed to delete picture.");
      }
    });
  }

  onProfileSubmit() {
    if (this.profileForm.valid) {
      const formData = {
        login: this.profileForm.get('login')?.value,
        firstName: this.profileForm.get('firstName')?.value,
        lastName: this.profileForm.get('lastName')?.value,
        email: this.profileForm.get('email')?.value 
      };

      // Call the profile service to update profile data
      this.profileService.updateProfile(formData).subscribe({
        next: (data) => {
          console.log('Profile data updated successfully');
          alert('Profile data updated successfully');
          this.getProfile();
        },
        error: (error) => {
          console.error('Error updating profile data:', error);
          alert('Error updating profile data. Please try again later.');
        }
      });
    } else {
      console.error('Profile form is not valid.');
      alert('Please fill out all required fields correctly.');
    }
  }  

  onPasswordSubmit() {
    if (this.passwordForm.valid) {
      const passwordData = {
        password: this.passwordForm.get('password')?.value
      };
  
      this.profileService.updatePassword(passwordData).subscribe({
        next: (data) => {
          console.log('Password updated successfully');
          alert("Password updated successfully");
          this.passwordForm.reset();
        },
        error: (e) => {
          console.error('Error updating password', e);
          if (e.status === 403) {
            alert("Unauthorized: Error updating password");
            this.tokenStorageService.logout();
          } else {
            alert("Error occurred while updating password.");
          }
        },
      });
    } else {
      if (this.passwordForm.errors?.['mismatch']) {
        alert('Passwords do not match!');
      } else {
        alert('Please check your password form for errors.');
      }
    }
  }
}