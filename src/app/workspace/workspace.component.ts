import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from '../domain/question';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuestionsService } from './questions.service';
import { QcmSelectTextComponent } from './qcm-select-text/qcm-select-text.component';
import { QcmSelectImageComponent } from './qcm-select-image/qcm-select-image.component';
import { AssociateTextImageComponent } from './associate-text-image/associate-text-image.component';
import { ProgressService } from '../progress/progress.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent implements OnInit {
  @ViewChild(QcmSelectTextComponent) selectText : QcmSelectTextComponent;
  @ViewChild(QcmSelectImageComponent) selectImage : QcmSelectImageComponent;
  @ViewChild(AssociateTextImageComponent) associateTextImage : AssociateTextImageComponent;

  question$: Observable<Question>
  qid$: Observable<string>
  userAnswer = "Default"
  correctness = false
  correctAnswers = []

  //When done, Next button and Goback button appear
  done: boolean = false;

  constructor(private route: ActivatedRoute,
    private location: Location,
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
  }

  snackBarRef;

  validateSelection() {
    if (this.selectText) {
      this.correctness = this.selectText.validateSelect();
    }
    if (this.selectImage) {
      this.correctness = this.selectImage.validateSelect();
    }
    if (this.associateTextImage) {
      this.correctAnswers = this.associateTextImage.validateMatch();
    }


    if(this.correctness) {
      this.snackBarRef = this.openSnackBar('Correct!', '', 'teal-snackbar');
    } 
    else{
      this.snackBarRef = this.openSnackBar("Wrong Answer.", '', 'red-snackbar');
    }
    this.processDone();
  }

  private processDone() {
    this.question$.subscribe(question => this.progressService.addDoneQuestionsWithId(question.qid.toString()));
    // When done, Next button and Goback button appear
    this.done = true;
  }

  goBack() {
    this.snackBarRef.dismiss();
    this.location.back(); // <-- go back to previous location
  }

  openSnackBar(message: string, action: string, className: string) {
    return this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: [className]
    });
  }
}
