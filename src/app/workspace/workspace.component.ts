import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from '../domain/question';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  question$: Observable<Question>
  qid$: Observable<string>

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

}
