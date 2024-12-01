import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add a new header
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer your-token-here')
    });

    // Log the outgoing request (optional)
    console.log('Outgoing request:', clonedRequest);

    // Pass the cloned request to the next handler
    return next.handle(clonedRequest);
  }
}
