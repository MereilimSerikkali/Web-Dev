import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>WebDev</h1>
      <article>
        <p>
            i am gonna try hard for this class
        </p>
        <p>
            i wanna be a pro at web dev
        </p>
        <p>
            i am bored of this 
        </p>
        <p>
            bla bla bla vlansss eshekere
        </p>
        <p>
          big textttt big text big text big text big text big text big text big text big text big text big text big text    
        </p>
        <p>lololol
        </p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
  imports: [Comments],
})
export class App {}
