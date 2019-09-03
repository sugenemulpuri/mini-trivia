import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  userScore: number = 0;
  username: string;
  userResult: any;
  scoreList: any;
  correctedAnswers: any;

  

  constructor(private http: HttpClient, private router: Router) { }

  

  getQuestions(): Observable<any> {
    let response = this.http.get("http://localhost:8080/questions");
    return response;



  }
  

  getScores(): Observable<any> {
    return this.http.get("http://localhost:8080/scores");

  }

  postScores(userResult: object, form: object, questions: any) {
    return this.http
      .post("http://localhost:8080/scores", userResult)
      .subscribe(response => {
        this.scoreList = response;

        this.correctedAnswers = {
          choice: form,
          question: questions
        };
        this.navigateToResults();
      });
  }

  getResults() {
    return this.correctedAnswers;
  }

  passUserScoreToResults() {
    return this.userResult;
  }

  navigateToResults() {
    this.router.navigateByUrl("/results");
  }

  navigateToQuiz() {
    this.router.navigateByUrl("/quiz");
    this.userScore = 0;

  }



  // postScores(newScore: object): Observable<any> {
  //   return this.http.post(`http://localhost:8080/scores`, newScore);

  // };

  calculateScore(form: object, questions: any, username: string): any {
    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.userScore++;
      }
    }
    this.userResult = {
      username: username,
      score: this.userScore
    };
    return this.userResult;
  }
  }

  // submitQuiz() {
  //   this.rightAnswer = 0;
  //   this.totalAnswered = 0;
  //   for (let i = 0; i < this.)
  // }
}