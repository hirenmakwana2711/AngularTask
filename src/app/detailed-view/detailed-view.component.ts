import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import jsonDataResponse from '../../assets/data.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css'],
})
export class DetailedViewComponent implements OnInit {
  jsonData: any = jsonDataResponse;
  selectedSamplingTime: string;
  formDatas: any;
  forms: { [key: string]: FormGroup } = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.selectedSamplingTime = this.jsonData.Datas[0].SamplingTime;
    this.formDatas = this.jsonData.Datas;

    for (const data of this.formDatas) {
      this.createForm(data.SamplingTime);
    }
  }

  createForm(samplingTime: string) {
    const formGroup = this.formBuilder.group({});
    const data = this.jsonData.Datas.find(
      (d: { SamplingTime: string }) => d.SamplingTime === samplingTime
    );

    if (data) {
      for (const property of data.Properties) {
        const control = new FormControl(property.Value);
        formGroup.addControl(property.Field, control);
      }
    }
    this.forms[samplingTime] = formGroup;
  }

  setForm(samplingTime: string) {
    this.selectedSamplingTime = samplingTime;
  }

  updateRecordValue() {
    if (this.currentForm.valid) {
      const formValues = this.currentForm.value;
      const data = this.jsonData['Datas'].find(
        (d: any) => d['SamplingTime'] === this.selectedSamplingTime
      );

      if (data) {
        Object.keys(formValues).forEach((key) => {
          const property = data['Properties'].find(
            (prop: any) => prop['Field'] === key
          );
          if (property) {
            property['Value'] = formValues[key];
          } else {
            data['Properties'].push({
              Field: key,
              Value: formValues[key],
            });
          }
        });
      }

      this.http.put('assets/data.json', this.jsonData).subscribe(
        (result) => {
          alert('Data Updated Successfully!');
        },
        (error) => {
          console.log('Error updating JSON file:', error);
        }
      );
    }
  }

  getPropertyType(field: string): string {
    const property = this.jsonData.Datas.find(
      (data: { SamplingTime: string }) =>
        data.SamplingTime === this.selectedSamplingTime
    )?.Properties.find((prop: { Field: string }) => prop.Field === field);
    if (property) {
      switch (property.Type) {
        case 'text':
          return 'text';
        case 'number':
          return 'number';
        case 'checkbox':
          return 'checkbox';
      }
    }
    return 'text';
  }

  get currentForm(): FormGroup {
    return this.forms[this.selectedSamplingTime];
  }
}
