import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  getResults: any;
  userScore: any;
  userResults: any;
  userChoices: any;
  questionAnswers: any;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.getResults = this.quizService.getResults();
    this.userScore = this.quizService.passUserScoreToResults();

    this.questionAnswers = this.getResults.question;

    const { username, ...choices } = this.getResults.choice;
    this.userChoices = Object.values(choices);
  }

  navigateToScoreList() {
    this.router.navigateByUrl("/scores");
  }

  navigateToQuiz() {
    this.quizService.navigateToQuiz();
  }
}
