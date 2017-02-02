import { Http } from '@angular/http'
import { Injectable } from "@angular/core"
import 'rxjs/Rx'

@Injectable()
export class Contentful {
    apiUrl: string
    apiKey: string
    data: any

    public constructor(private http: Http) {
        this.data = null
        this.apiUrl = "https://cdn.contentful.com" + '/spaces/' + "jbpv6jkj0pio"
        this.apiKey = "604b2f9bf9a668b2f9a6e3728bf25b22f7d9eb69b09a1495c697ec33d43713af"
    }

    getEntryById(id: string) {
        const query = '/entries/' + id
        const url = this.apiUrl + query + '?access_token=' + this.apiKey
        return this.http.get(url).map(res =>res.json());
    }

    getEntryByContent(contentType: string, offset?: string) {
        const query = '/entries?access_token=' + this.apiKey + '&content_type=' + contentType
        const url = this.apiUrl + query + '&limit=' + 20
        this.data = this.http.get(url).map(res =>res.json());
        console.log("content = " + contentType);        
        console.log(this.data);        
        return this.data
    }

    getEntryByQuery(val: string) {
        const query = '/entries?access_token=' + this.apiKey + '&query=' + val
        const url = this.apiUrl + query + '&limit=' + 20
        this.data = this.http.get(url).map(res =>res.json());
        console.log("query = " + val);         
        console.log(this.data);        
        return this.data
    }

}


//.getEntries({'content_type':'postBook', 'order':'sys.createdAt'}).then(function(entries) { console.log(entries.items)});
//space: 'jbpv6jkj0pio',
//accessToken: '604b2f9bf9a668b2f9a6e3728bf25b22f7d9eb69b09a1495c697ec33d43713af'
