import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cli-wiki',
  template: `
    <img src="assets/img/cli-wiki-header.png">
    <div class="markdown-body">

      <h1>
        <a id="user-content-angular-cli" class="anchor" href="#angular-cli" aria-hidden="true">
        </a>Angular CLI
      </h1>
      <p>NOTE: this documentation is for Angular CLI 6. For Angular CLI 1.x go <a href="wiki/1-x-home">here</a> instead.
      </p>
      <h3>
        <a id="user-content-overview" class="anchor" href="#overview" aria-hidden="true">
        </a>Overview
      </h3>
      <p>The Angular CLI is a tool to initialize, develop, scaffold and maintain <a href="https://angular.io"
                                                                                    rel="nofollow">Angular</a>
        applications</p>
      <h3>
        <a id="user-content-getting-started" class="anchor" href="#getting-started" aria-hidden="true">
        </a>Getting Started
      </h3>
      <p>To install the Angular CLI:</p>
      <pre><code>npm install -g @angular/cli
</code></pre>
      <p>Generating and serving an Angular project via a development server
        <a href="wiki/new">Create</a> and <a href="wiki/serve">run</a> a new project:</p>
      <pre><code>ng new my-project
cd my-project
ng serve
</code></pre>
      <p>Navigate to <a href="http://localhost:4200/" rel="nofollow">http://localhost:4200/</a>. The app will
        automatically reload if you change any of the source files.</p>

    </div>
  `,
  styleUrls: ['./cli-wiki.component.scss']
})
export class CliWikiComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
