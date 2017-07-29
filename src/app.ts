import * as Rx from 'rxjs';
import * as superagent from 'superagent';

const cnblog_base_url = 'https://www.cnblogs.com/#p';

const content$ = Rx.Observable.fromPromise(
    superagent
        .get(`${cnblog_base_url}1`)
);
    
content$.subscribe(i => {
    console.log(i)
});



