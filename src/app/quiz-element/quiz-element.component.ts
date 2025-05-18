import { Component, input } from '@angular/core';
import { QuizElement } from '../models.type';
import { shuffle } from '../arrayShuffle';

@Component({
  selector: 'app-quiz-element',
  standalone: true,
  imports: [],
  templateUrl: './quiz-element.component.html',
  styleUrl: './quiz-element.component.scss'
})
export class QuizElementComponent {
  selectedAnswer = '';
  question = input.required<QuizElement>();

  shuffleArray(){
    return shuffle([this.question().correct_answer, ...this.question().incorrect_answers]);
  }
}
