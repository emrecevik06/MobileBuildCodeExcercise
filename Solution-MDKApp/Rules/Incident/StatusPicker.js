/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function StatusPicker(clientAPI) {
    //get the current status of an incident
    let currentStatus = clientAPI.binding.Status;
    if (currentStatus == "New") {
        return [{
            "DisplayValue": "In Process",
            "ReturnValue": "In Process"
        }, {
            "DisplayValue": "Closed",
            "ReturnValue": "Closed"
        }];
    } else {
        return [{
            "DisplayValue": "Closed",
            "ReturnValue": "Closed"
        }];
    }
}