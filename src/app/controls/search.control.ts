import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'search-box',
    templateUrl:'./search.control.html'
})
export class SearchControl implements OnInit {
    Value:string = '';
    @Input() public page:string;
    @Output() public Searched = new EventEmitter<string>();

    constructor(private router:Router, private route:ActivatedRoute){}
    ngOnInit(): void {
        var query = this.route.snapshot.paramMap.get('query');
        if(query !== undefined)
            this.Value = query;
    }
    
    search(){
        if(this.page == 'search')
            this.Searched.emit(this.Value);
        else{
            if(this.Value == null) this.Value = '';
            this.router.navigateByUrl('/search/'+this.Value);
        }
    }
}