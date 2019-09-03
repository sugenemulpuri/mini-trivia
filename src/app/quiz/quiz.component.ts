import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  
  questionList: any[];
  userResult: any;
  userScore: number;
  username: string;


  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response=> {
      this.questionList = response;
      
    });
  }

  getQuestions() {
    this.quizService.getQuestions().subscribe(response => {
      this.questionList = response;
    });
  }



  submitForm(form: NgForm) {
    this.userResult = this.quizService.calculateScore(
      form.value,
      this.questionList,
      form.value.username
    );
    this.quizService.postScores(this.userResult, form.value, this.questionList);
  }
}

