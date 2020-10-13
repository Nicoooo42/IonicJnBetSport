import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsRss } from '../models/news-rss';

import * as xml2js from "xml2js";

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  RssData: NewsRss;
  constructor(private http: HttpClient, private iab: InAppBrowser) {
    this.GetRssFeedData();
  }

  GetRssFeedData() {
    console.log('GetRssFeedData')
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://rmcsport.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
          console.log(result.rss.channel[0].item[0].link[0])
        });
      });
  }

  goSite(url){
    this.iab.create(url);
  }

}
