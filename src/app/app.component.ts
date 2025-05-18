import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizElementComponent } from './quiz-element/quiz-element.component';
import { QuizElement } from './models.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuizElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mock-exam-questions';

  questions: QuizElement[] = [
    {id: 1, question: "Question 1", correct_answer: "Correct", incorrect_answers: ["Ans1", "Ans2", "Ans3"]},
    {id: 2, question: "Question 2", correct_answer: "Correct", incorrect_answers: ["Ans1", "Ans2", "Ans3"]},
    {id: 3, question: "Question 3", correct_answer: "Correct", incorrect_answers: ["Ans1", "Ans2", "Ans3"]},
    {id: 4, question: "Question 4", correct_answer: "Correct", incorrect_answers: ["Ans1", "Ans2", "Ans3"]},
    {id: 5, question: "Question 5", correct_answer: "Correct", incorrect_answers: ["Ans1", "Ans2", "Ans3"]},
  ]
}
