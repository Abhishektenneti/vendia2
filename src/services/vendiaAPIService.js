import {createVendiaClient} from '@vendia/client';

class VendiaAPIService{
    
    constructor(){
        const client = createVendiaClient({
            apiUrl : 'https://nij9s08vlb.execute-api.us-west-2.amazonaws.com/graphql/',
            websocketUrl:'wss://ktk0mdf1bd.execute-api.us-west-2.amazonaws.com/graphql',
            apiKey:'CbwLwPp9eDN8qdrfxwWX7PAUDS24VYKGkQKrotn7eYfJ'
            });

        // const {entities} = client;  
        this.entities = client.entities;
    }
    

    addMotorData = async(motorName,partName)=>{
        const response = await this.entities.motor.add({
          "partNumber" : partName,
          "serialNumber" : motorName
        });
        return response;
        // return {};
    }   

    getMotorData = async()=>{
        const response = await this.entities.motor.list();
        return response;
    }
    // getMotorData();

}

const vendiaAPIService = new  VendiaAPIService();
export default vendiaAPIService;