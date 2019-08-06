import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Question } from '../_models/question';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuestionsService } from './questions.service';
import { QcmSelectTextComponent } from './qcm-select-text/qcm-select-text.component';
import { ProgressService } from '../progress/progress.service';
import { MatSnackBar } from '@angular/material';
import { AssociateTextImageSelectComponent } from './associate-text-image-select/associate-text-image-select.component';
import { QcmSelectImage2x2Component } from './qcm-select-image2x2/qcm-select-image2x2.component';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent implements OnInit {
  @ViewChild(QcmSelectTextComponent) selectText : QcmSelectTextComponent;
  @ViewChild(QcmSelectImage2x2Component) selectImage2x2 : QcmSelectImage2x2Component;
  @ViewChild(AssociateTextImageSelectComponent) associateTextImageSelect : AssociateTextImageSelectComponent;


  question$: Observable<Question>
  qid$: Observable<string>
  userAnswer = "Default"
  correct = false
  correctAnswers = []

  //When tried, Next button and Goback button appear
  tried: boolean = false;

  question;
  snackBarRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private progressService: ProgressService,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.qid$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('qid'))
    );
    this.question$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.questionsService.getQuestion(params.get('qid')))
    );

    this.question$.subscribe(question => this.question = question);
  }


  validateSelection() {
    if (this.selectText) {
      this.correct = this.selectText.validateSelect();
    }
    if (this.selectImage2x2) {
      this.correct = this.selectImage2x2.validateSelect();
    }
    if (this.associateTextImageSelect) {
      this.correct = this.associateTextImageSelect.validateMatch();
    }


    if(this.correct) {
      this.snackBarRef = this.openSnackBar('Correct!', '', 'teal-snackbar');
    } 
    else{
      this.snackBarRef = this.openSnackBar("Wrong Answer.", '', 'red-snackbar');
    }
    this.processDone();
  }

  private processDone() {
    // When a try is attempted , Goback button appear;
    // When answer is correct, GoNext button appear
    this.tried = true;

    if (this.correct)  this.progressService.addDoneQuestionsWithId(this.question.qid.toString());
  }

  goBack() {
    console.log(this.router.url)
    if(this.snackBarRef) this.snackBarRef.dismiss();
    this.router.navigate([ '../' ], { relativeTo: this.route });
  }

  goNext() {
    if(this.snackBarRef) this.snackBarRef.dismiss();
    this.router.navigate([ '../' + (this.question.qid+1).toString() ], { relativeTo: this.route });

    // Reset component variables
    this.tried = false;
    this.snackBarRef = null;
    this.correct = false
    this.correctAnswers = []
  }

  // SnackBar showing Check result: appear for 1.5s
  openSnackBar(message: string, action: string, className: string) {
    return this.snackBar.open(message, action, {
      duration: 1500,
      panelClass: [className]
    });
  }
}
