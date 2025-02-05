import { Component    } from '@angular/core';
import { _environment } from 'src/environments/environment';

@Component({
  selector: 'llm-list',
  templateUrl: './llm-list.component.html',
  styleUrl: './llm-list.component.css'
})
export class LLMListComponent {
      public aiPrompts : any[] = [];
      constructor()
      {
        console.log('AI Prompts: ' + JSON.stringify(_environment.aiPrompts));

        this.aiPrompts = _environment.aiPrompts;
      }
}
