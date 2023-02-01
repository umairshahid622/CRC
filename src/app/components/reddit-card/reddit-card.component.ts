import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
HTMLAllCollection;
@Component({
    selector: 'app-reddit-card',
    templateUrl: './reddit-card.component.html',
    styleUrls: ['./reddit-card.component.scss'],
})
export class RedditCardComponent implements OnInit {
    constructor(private http: HttpClient) {}
    data: any[] = [];
    postDate: any[] = [];
    posts: any[] = [];
    details: any[] = [];
    img: any[] = [];
    comments: any[] = [];
    awards: any[] = [];
    votes: any[] = [];
    finalData: any[] = [];
    ngOnInit(): void {
        this.http.get('http://109.205.182.203:5418/Post/dragon').subscribe(
            (response) => {
                Object.values(response).forEach((item) => {
                    this.data.push(Object.values(item));
                });
                this.postDate.push(this.data[0]);
                this.posts.push(this.data[1]);
                this.details.push(this.data[2]);
                this.img.push(this.data[3]);
                this.comments.push(this.data[4]);
                this.awards.push(this.data[5]);
                this.votes.push(this.data[6]);
                for (let index = 0; index < this.data[0].length; index++) {
                    this.finalData.push({
                        postdate: this.postDate[0][index].replace(/[{}"]/g, ''),
                        posts: this.posts[0][index],
                        details: this.details[0][index],
                        img: this.img[0][index].replace(/[{}"]/g, ''),
                        comments: this.comments[0][index].split(' ')[0],
                        awards: this.awards[0][index].split(' ')[0],
                        votes: this.votes[0][index].split(' ')[0],
                    });
                }
                console.warn(this.finalData);
            },
            (err) => {
                console.warn(err);
            }
        );
    }
}
