import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormVerification } from 'src/app/components/panelAdmin/nouvelle-campagne/formCampagneValidator';
import { ApiClientService, API_URI_TECHNO, API_URI_PROFILES } from '../../../../api-client/api-client.service';
import { MatSelectChange } from '@angular/material';


@Component({
  selector: 'app-NouvelleCampagnePage1Component',
  templateUrl: './nouvelle-campagne.component.html',
  styleUrls: ['./nouvelle-campagne.component.css', '../nouvelle-campagne.component.css']
})
export class NouvelleCampagnePage1Component implements OnInit {


  // public selectedValue: any[];

  @Output() incrementPage = new EventEmitter<any>();
  @Input() formCampagne: FormGroup;
  public oAuthFormVerification: AuthFormVerification;
  public errorExperience: string;
  public errorRole: string;
  public errorTechno: string;

  TechnoList: string[] = ['AWS', 'Android', 'Angular 2+', 'AngularJS (1.x)', 'Apache Spark', 'C', 'C#', 'C++',
    'Data Science', 'Docker', 'Git', 'Hadoop Ecosystem', 'Java', 'Javascript, HTML, CSS',
    'Mobile iOS/Swift', 'Node.js', 'PHP', 'Python 3', 'React', 'SQL', 'Scala', 'Spring Framework',
    'Symfony', 'Windows Administration'];

  RoleList: string[] = ['Développeur Angular Front-End', 'Administrateur base de données (SQL)',
    'Data Engineer (Hadoop, Spark)', 'Data Scientist (Python)', 'Développeur .NET C#',
    'Développeur .NET C# Back-End', 'Développeur AngularJS Front-End', 'Développeur C',
    'Développeur C# Full Stack', 'Développeur C++', 'Développeur Hadoop', 'Développeur Java',
    'Développeur Java Back-End', 'Développeur Java Full Stack', 'Développeur Java Spring Back-End',
    'Développeur Mobile Android', 'Développeur Mobile iOS (Swift)', 'Développeur Node.js',
    'Développeur PHP', 'Développeur PHP Fullstack', 'Développeur PHP Symfony', 'Développeur Python',
    'Développeur React Front-End', 'Développeur Scala', 'Développeur Spark',
    'Développeur Web (JavaScript, HTML, CSS)', 'Expert Git', 'Ingénieur DevOps AWS/Docker',
    'SysAdmin Windows', 'Personnalisé'];


  public technos: any[];
  public profiles: any[];
  public technosSelect: Array<string>;
  public technosSelectID: Array<number>;
  public selectedValue: any[];

  public test:number;


  constructor(public apiClientService: ApiClientService) {
    this.oAuthFormVerification = new AuthFormVerification();
  }

  ngOnInit() {
    
    this.apiClientService.get(API_URI_TECHNO).subscribe((datas) => {
      this.technos = datas;
    });
    this.apiClientService.get(API_URI_PROFILES).subscribe((datas) => {
      this.profiles = datas;

    })


  }
  
  public selected(event: MatSelectChange) {
    // console.log(event.value);
    for (var i = 0; i < this.profiles.length; i++) {
      // console.log(this.profiles[i])
      const roleData = this.profiles[i].name;
      // console.log(roleData)
      if (event.value == roleData) {
        // console.log(this.profiles[i].id)
        this.formCampagne.patchValue({
          roleSelectedId: { 'id': this.profiles[i].id }
        });
        const technoData = [];
        const technoDataID = [];
        this.profiles[i].technologies.forEach((item) => {
          technoData.push(item.name);
          technoDataID.push(item.id);
        });
        this.technosSelect = technoData;
        this.formCampagne.patchValue({
          technoSelectedId: technoDataID
        })
        // console.log(this.technosSelect)
        this.selectedValue = this.technosSelect;
        // console.log(technoDataID)
        // console.log(this.formCampagne.value)
      }
    }
  }

  // validation du formulaire et passage à l'étap suivante.
  public onIncrementPage(p_oDatafromValue: any): void {

    this.formValid(p_oDatafromValue);
    if (AuthFormVerification._sMessageError === '') {
      this.incrementPage.emit();  // Déclenche l'output pour passer à la paga suivante.
    }

  }

  public formValid(p_oDatafromValue: any): void {

    AuthFormVerification.startVerificationFrom();

    if (AuthFormVerification.validateExprience(p_oDatafromValue.experience) === false) {
      this.errorExperience = AuthFormVerification._sMessageError;
    } else {
      this.errorExperience = '';
    }

    if (AuthFormVerification.validateRole(p_oDatafromValue.role) === false) {
      this.errorRole = AuthFormVerification._sMessageError;
    } else {
      this.errorRole = '';
    }

    if (AuthFormVerification.validateTechno(p_oDatafromValue.techno) === false) {
      this.errorTechno = AuthFormVerification._sMessageError;
    } else {
      this.errorTechno = '';
    }
  }
}
