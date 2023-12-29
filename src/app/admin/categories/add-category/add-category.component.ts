import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIService, Category, CreateCategoryInput } from 'src/app/API.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit {
  public createForm: FormGroup;
  public currentValue: any;
  public isSubmitDisabled = false;
  private formValueSubscription: Subscription | null = null;

  constructor(private fb: FormBuilder, private api: APIService, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      active: ['true'],
      image: [''],
      parent_category: ['0'],
    });
  }

  ngOnInit() {
    this.formValueSubscription = this.createForm.valueChanges.subscribe((formValue) => {
      this.currentValue = formValue;
      console.log(this.currentValue);
    });
  }

  public onCreate(formValue: CreateCategoryInput) {

    const newCAtegory: CreateCategoryInput = {
      ...formValue,
    };

    this.api.CreateCategory(newCAtegory)
      .then(() => {
        console.log('Category created');
        this.createForm.reset();
        this.router.navigate(['/admin/categories']);
      })
      .catch((e) => {
        console.log('Error creating Category: ', e);
      });
  }
}
