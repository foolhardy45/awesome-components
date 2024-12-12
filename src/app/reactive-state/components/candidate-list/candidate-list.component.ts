import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CandidatesService} from '../../services/candidates.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit {

  loading$!: Observable<boolean>;

  constructor(private candidatesService: CandidatesService) {
  }

  ngOnInit() {
    this.loading$ = this.candidatesService.loading$;
  }

}
