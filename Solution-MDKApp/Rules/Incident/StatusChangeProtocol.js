/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function StatusChangeProtocol(clientAPI) {
    //Get the control based on the name
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable0');
    //Get the section based on the name
    const fcsection = sectionedTable.getSection('SectionFormCell0');
    const fcAttachment = fcsection.getControl('FCDeviceImage');
    const fcSignatureCapture = fcsection.getControl('FCCustomerSignature');
    const selectedValue = fcsection.getControl('FCStatus').getValue()[0].ReturnValue;
    if (selectedValue == "In Process") {
        fcAttachment.setVisible(false);
        fcSignatureCapture.setVisible(false);
    } else if (selectedValue == "Closed") {
        fcAttachment.setVisible(true);
        fcSignatureCapture.setVisible(true);
    }
}