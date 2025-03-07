import { APIRequestContext } from "@playwright/test";

export class RestClient {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext){
        this.request = request;
    }

    async sendGetRequest(url, headers = {}) {

        try {

         const response =   await  this.request.get(url, {headers})

            if(!response.ok()) {
                throw new Error("Get request failed with the status " + response.status())
            }

            return response;
            
        } catch (error) {

            console.error("Some error occured in the Get call..", error);

            throw error;
            
        }

        

    }

    async sendPostRequest(url, headers = {}, requestPayload){

        try {

            const response =   await  this.request.post(url, {

                data: requestPayload,
                
                headers: headers
            
            })
   
               if(!response.ok()) {
                   throw new Error("Post request failed with the status " + response.status())
               }
   
               return response;
               
           } catch (error) {
   
               console.error("Some error occured in the Post call..", error);
   
               throw error;
               
           }

    }

    async sendPutRequest(url, headers = {}, requestPayload){

        try {

            const response =   await  this.request.put(url, {

                data: requestPayload,
                
                headers: headers
            
            })
   
               if(!response.ok()) {
                   throw new Error("Put request failed with the status " + response.status())
               }
   
               return response;
               
           } catch (error) {
   
               console.error("Some error occured in the Put call..", error);
   
               throw error;
               
           }

    }

    async sendDeleteRequest(url, headers = {}){

        try {

            const response =   await  this.request.delete(url, {

                
                headers: headers
            
            })
   
               if(!response.ok()) {
                   throw new Error("Delete request failed with the status " + response.status())
               }
   
               return response;
               
           } catch (error) {
   
               console.error("Some error occured in the Delete call..", error);
   
               throw error;
               
           }

    }
}