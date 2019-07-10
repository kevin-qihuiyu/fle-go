import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from '../domain/question';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuestionsService } from './questions.service';
import { QcmSelectTextComponent } from './qcm-select-text/qcm-select-text.component';
import { QcmSelectImageComponent } from './qcm-select-image/qcm-select-image.component';
import { AssociateTextImageComponent } from './associate-text-image/associate-text-image.component';

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

  constructor(private route: ActivatedRoute,
    private questionsService: QuestionsService) { }

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
  }
}
